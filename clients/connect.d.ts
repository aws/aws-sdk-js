import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Connect extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Connect.Types.ClientConfiguration)
  config: Config & Connect.Types.ClientConfiguration;
  /**
   * Associates an approved origin to an Amazon Connect instance.
   */
  associateApprovedOrigin(params: Connect.Types.AssociateApprovedOriginRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates an approved origin to an Amazon Connect instance.
   */
  associateApprovedOrigin(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a storage resource type for the first time. You can only associate one type of storage configuration in a single call. This means, for example, that you can't define an instance with multiple S3 buckets for storing chat transcripts. This API does not create a resource that doesn't exist. It only associates it to the instance. Ensure that the resource being specified in the storage configuration, like an Amazon S3 bucket, exists when being used for association.
   */
  associateInstanceStorageConfig(params: Connect.Types.AssociateInstanceStorageConfigRequest, callback?: (err: AWSError, data: Connect.Types.AssociateInstanceStorageConfigResponse) => void): Request<Connect.Types.AssociateInstanceStorageConfigResponse, AWSError>;
  /**
   * Associates a storage resource type for the first time. You can only associate one type of storage configuration in a single call. This means, for example, that you can't define an instance with multiple S3 buckets for storing chat transcripts. This API does not create a resource that doesn't exist. It only associates it to the instance. Ensure that the resource being specified in the storage configuration, like an Amazon S3 bucket, exists when being used for association.
   */
  associateInstanceStorageConfig(callback?: (err: AWSError, data: Connect.Types.AssociateInstanceStorageConfigResponse) => void): Request<Connect.Types.AssociateInstanceStorageConfigResponse, AWSError>;
  /**
   * Allows the specified Amazon Connect instance to access the specified Lambda function.
   */
  associateLambdaFunction(params: Connect.Types.AssociateLambdaFunctionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows the specified Amazon Connect instance to access the specified Lambda function.
   */
  associateLambdaFunction(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows the specified Amazon Connect instance to access the specified Amazon Lex bot.
   */
  associateLexBot(params: Connect.Types.AssociateLexBotRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Allows the specified Amazon Connect instance to access the specified Amazon Lex bot.
   */
  associateLexBot(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a set of queues with a routing profile.
   */
  associateRoutingProfileQueues(params: Connect.Types.AssociateRoutingProfileQueuesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a set of queues with a routing profile.
   */
  associateRoutingProfileQueues(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates a security key to the instance.
   */
  associateSecurityKey(params: Connect.Types.AssociateSecurityKeyRequest, callback?: (err: AWSError, data: Connect.Types.AssociateSecurityKeyResponse) => void): Request<Connect.Types.AssociateSecurityKeyResponse, AWSError>;
  /**
   * Associates a security key to the instance.
   */
  associateSecurityKey(callback?: (err: AWSError, data: Connect.Types.AssociateSecurityKeyResponse) => void): Request<Connect.Types.AssociateSecurityKeyResponse, AWSError>;
  /**
   * Creates a contact flow for the specified Amazon Connect instance. You can also create and update contact flows using the Amazon Connect Flow language.
   */
  createContactFlow(params: Connect.Types.CreateContactFlowRequest, callback?: (err: AWSError, data: Connect.Types.CreateContactFlowResponse) => void): Request<Connect.Types.CreateContactFlowResponse, AWSError>;
  /**
   * Creates a contact flow for the specified Amazon Connect instance. You can also create and update contact flows using the Amazon Connect Flow language.
   */
  createContactFlow(callback?: (err: AWSError, data: Connect.Types.CreateContactFlowResponse) => void): Request<Connect.Types.CreateContactFlowResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any storage (such as Amazon S3, or Kinesis) or allow for any configurations on features such as Contact Lens for Amazon Connect. 
   */
  createInstance(params: Connect.Types.CreateInstanceRequest, callback?: (err: AWSError, data: Connect.Types.CreateInstanceResponse) => void): Request<Connect.Types.CreateInstanceResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any storage (such as Amazon S3, or Kinesis) or allow for any configurations on features such as Contact Lens for Amazon Connect. 
   */
  createInstance(callback?: (err: AWSError, data: Connect.Types.CreateInstanceResponse) => void): Request<Connect.Types.CreateInstanceResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Create an AppIntegration association with anAmazon Connect instance.
   */
  createIntegrationAssociation(params: Connect.Types.CreateIntegrationAssociationRequest, callback?: (err: AWSError, data: Connect.Types.CreateIntegrationAssociationResponse) => void): Request<Connect.Types.CreateIntegrationAssociationResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Create an AppIntegration association with anAmazon Connect instance.
   */
  createIntegrationAssociation(callback?: (err: AWSError, data: Connect.Types.CreateIntegrationAssociationResponse) => void): Request<Connect.Types.CreateIntegrationAssociationResponse, AWSError>;
  /**
   * Creates a new routing profile.
   */
  createRoutingProfile(params: Connect.Types.CreateRoutingProfileRequest, callback?: (err: AWSError, data: Connect.Types.CreateRoutingProfileResponse) => void): Request<Connect.Types.CreateRoutingProfileResponse, AWSError>;
  /**
   * Creates a new routing profile.
   */
  createRoutingProfile(callback?: (err: AWSError, data: Connect.Types.CreateRoutingProfileResponse) => void): Request<Connect.Types.CreateRoutingProfileResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Creates a use case for an AppIntegration association.
   */
  createUseCase(params: Connect.Types.CreateUseCaseRequest, callback?: (err: AWSError, data: Connect.Types.CreateUseCaseResponse) => void): Request<Connect.Types.CreateUseCaseResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Creates a use case for an AppIntegration association.
   */
  createUseCase(callback?: (err: AWSError, data: Connect.Types.CreateUseCaseResponse) => void): Request<Connect.Types.CreateUseCaseResponse, AWSError>;
  /**
   * Creates a user account for the specified Amazon Connect instance. For information about how to create user accounts using the Amazon Connect console, see Add Users in the Amazon Connect Administrator Guide.
   */
  createUser(params: Connect.Types.CreateUserRequest, callback?: (err: AWSError, data: Connect.Types.CreateUserResponse) => void): Request<Connect.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a user account for the specified Amazon Connect instance. For information about how to create user accounts using the Amazon Connect console, see Add Users in the Amazon Connect Administrator Guide.
   */
  createUser(callback?: (err: AWSError, data: Connect.Types.CreateUserResponse) => void): Request<Connect.Types.CreateUserResponse, AWSError>;
  /**
   * Creates a new user hierarchy group.
   */
  createUserHierarchyGroup(params: Connect.Types.CreateUserHierarchyGroupRequest, callback?: (err: AWSError, data: Connect.Types.CreateUserHierarchyGroupResponse) => void): Request<Connect.Types.CreateUserHierarchyGroupResponse, AWSError>;
  /**
   * Creates a new user hierarchy group.
   */
  createUserHierarchyGroup(callback?: (err: AWSError, data: Connect.Types.CreateUserHierarchyGroupResponse) => void): Request<Connect.Types.CreateUserHierarchyGroupResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes the Amazon Connect instance.
   */
  deleteInstance(params: Connect.Types.DeleteInstanceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes the Amazon Connect instance.
   */
  deleteInstance(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes an AppIntegration association from an Amazon Connect instance. The association must not have any use cases associated with it.
   */
  deleteIntegrationAssociation(params: Connect.Types.DeleteIntegrationAssociationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes an AppIntegration association from an Amazon Connect instance. The association must not have any use cases associated with it.
   */
  deleteIntegrationAssociation(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes a use case from an AppIntegration association.
   */
  deleteUseCase(params: Connect.Types.DeleteUseCaseRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Deletes a use case from an AppIntegration association.
   */
  deleteUseCase(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user account from the specified Amazon Connect instance. For information about what happens to a user's data when their account is deleted, see Delete Users from Your Amazon Connect Instance in the Amazon Connect Administrator Guide.
   */
  deleteUser(params: Connect.Types.DeleteUserRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a user account from the specified Amazon Connect instance. For information about what happens to a user's data when their account is deleted, see Delete Users from Your Amazon Connect Instance in the Amazon Connect Administrator Guide.
   */
  deleteUser(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing user hierarchy group. It must not be associated with any agents or have any active child groups.
   */
  deleteUserHierarchyGroup(params: Connect.Types.DeleteUserHierarchyGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an existing user hierarchy group. It must not be associated with any agents or have any active child groups.
   */
  deleteUserHierarchyGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Describes the specified contact flow. You can also create and update contact flows using the Amazon Connect Flow language.
   */
  describeContactFlow(params: Connect.Types.DescribeContactFlowRequest, callback?: (err: AWSError, data: Connect.Types.DescribeContactFlowResponse) => void): Request<Connect.Types.DescribeContactFlowResponse, AWSError>;
  /**
   * Describes the specified contact flow. You can also create and update contact flows using the Amazon Connect Flow language.
   */
  describeContactFlow(callback?: (err: AWSError, data: Connect.Types.DescribeContactFlowResponse) => void): Request<Connect.Types.DescribeContactFlowResponse, AWSError>;
  /**
   * Returns the current state of the specified instance identifier. It tracks the instance while it is being created and returns an error status if applicable.  If an instance is not created successfully, the instance status reason field returns details relevant to the reason. The instance in a failed state is returned only for 24 hours after the CreateInstance API was invoked.
   */
  describeInstance(params: Connect.Types.DescribeInstanceRequest, callback?: (err: AWSError, data: Connect.Types.DescribeInstanceResponse) => void): Request<Connect.Types.DescribeInstanceResponse, AWSError>;
  /**
   * Returns the current state of the specified instance identifier. It tracks the instance while it is being created and returns an error status if applicable.  If an instance is not created successfully, the instance status reason field returns details relevant to the reason. The instance in a failed state is returned only for 24 hours after the CreateInstance API was invoked.
   */
  describeInstance(callback?: (err: AWSError, data: Connect.Types.DescribeInstanceResponse) => void): Request<Connect.Types.DescribeInstanceResponse, AWSError>;
  /**
   * Describes the specified instance attribute.
   */
  describeInstanceAttribute(params: Connect.Types.DescribeInstanceAttributeRequest, callback?: (err: AWSError, data: Connect.Types.DescribeInstanceAttributeResponse) => void): Request<Connect.Types.DescribeInstanceAttributeResponse, AWSError>;
  /**
   * Describes the specified instance attribute.
   */
  describeInstanceAttribute(callback?: (err: AWSError, data: Connect.Types.DescribeInstanceAttributeResponse) => void): Request<Connect.Types.DescribeInstanceAttributeResponse, AWSError>;
  /**
   * Retrieves the current storage configurations for the specified resource type, association ID, and instance ID.
   */
  describeInstanceStorageConfig(params: Connect.Types.DescribeInstanceStorageConfigRequest, callback?: (err: AWSError, data: Connect.Types.DescribeInstanceStorageConfigResponse) => void): Request<Connect.Types.DescribeInstanceStorageConfigResponse, AWSError>;
  /**
   * Retrieves the current storage configurations for the specified resource type, association ID, and instance ID.
   */
  describeInstanceStorageConfig(callback?: (err: AWSError, data: Connect.Types.DescribeInstanceStorageConfigResponse) => void): Request<Connect.Types.DescribeInstanceStorageConfigResponse, AWSError>;
  /**
   * Describes the specified routing profile.
   */
  describeRoutingProfile(params: Connect.Types.DescribeRoutingProfileRequest, callback?: (err: AWSError, data: Connect.Types.DescribeRoutingProfileResponse) => void): Request<Connect.Types.DescribeRoutingProfileResponse, AWSError>;
  /**
   * Describes the specified routing profile.
   */
  describeRoutingProfile(callback?: (err: AWSError, data: Connect.Types.DescribeRoutingProfileResponse) => void): Request<Connect.Types.DescribeRoutingProfileResponse, AWSError>;
  /**
   * Describes the specified user account. You can find the instance ID in the console (it’s the final part of the ARN). The console does not display the user IDs. Instead, list the users and note the IDs provided in the output.
   */
  describeUser(params: Connect.Types.DescribeUserRequest, callback?: (err: AWSError, data: Connect.Types.DescribeUserResponse) => void): Request<Connect.Types.DescribeUserResponse, AWSError>;
  /**
   * Describes the specified user account. You can find the instance ID in the console (it’s the final part of the ARN). The console does not display the user IDs. Instead, list the users and note the IDs provided in the output.
   */
  describeUser(callback?: (err: AWSError, data: Connect.Types.DescribeUserResponse) => void): Request<Connect.Types.DescribeUserResponse, AWSError>;
  /**
   * Describes the specified hierarchy group.
   */
  describeUserHierarchyGroup(params: Connect.Types.DescribeUserHierarchyGroupRequest, callback?: (err: AWSError, data: Connect.Types.DescribeUserHierarchyGroupResponse) => void): Request<Connect.Types.DescribeUserHierarchyGroupResponse, AWSError>;
  /**
   * Describes the specified hierarchy group.
   */
  describeUserHierarchyGroup(callback?: (err: AWSError, data: Connect.Types.DescribeUserHierarchyGroupResponse) => void): Request<Connect.Types.DescribeUserHierarchyGroupResponse, AWSError>;
  /**
   * Describes the hierarchy structure of the specified Amazon Connect instance.
   */
  describeUserHierarchyStructure(params: Connect.Types.DescribeUserHierarchyStructureRequest, callback?: (err: AWSError, data: Connect.Types.DescribeUserHierarchyStructureResponse) => void): Request<Connect.Types.DescribeUserHierarchyStructureResponse, AWSError>;
  /**
   * Describes the hierarchy structure of the specified Amazon Connect instance.
   */
  describeUserHierarchyStructure(callback?: (err: AWSError, data: Connect.Types.DescribeUserHierarchyStructureResponse) => void): Request<Connect.Types.DescribeUserHierarchyStructureResponse, AWSError>;
  /**
   * Revokes access to integrated applications from Amazon Connect.
   */
  disassociateApprovedOrigin(params: Connect.Types.DisassociateApprovedOriginRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes access to integrated applications from Amazon Connect.
   */
  disassociateApprovedOrigin(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the storage type configurations for the specified resource type and association ID.
   */
  disassociateInstanceStorageConfig(params: Connect.Types.DisassociateInstanceStorageConfigRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the storage type configurations for the specified resource type and association ID.
   */
  disassociateInstanceStorageConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove the Lambda function from the drop-down options available in the relevant contact flow blocks.
   */
  disassociateLambdaFunction(params: Connect.Types.DisassociateLambdaFunctionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove the Lambda function from the drop-down options available in the relevant contact flow blocks.
   */
  disassociateLambdaFunction(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes authorization from the specified instance to access the specified Amazon Lex bot.
   */
  disassociateLexBot(params: Connect.Types.DisassociateLexBotRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes authorization from the specified instance to access the specified Amazon Lex bot.
   */
  disassociateLexBot(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates a set of queues from a routing profile.
   */
  disassociateRoutingProfileQueues(params: Connect.Types.DisassociateRoutingProfileQueuesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disassociates a set of queues from a routing profile.
   */
  disassociateRoutingProfileQueues(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified security key.
   */
  disassociateSecurityKey(params: Connect.Types.DisassociateSecurityKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified security key.
   */
  disassociateSecurityKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves the contact attributes for the specified contact.
   */
  getContactAttributes(params: Connect.Types.GetContactAttributesRequest, callback?: (err: AWSError, data: Connect.Types.GetContactAttributesResponse) => void): Request<Connect.Types.GetContactAttributesResponse, AWSError>;
  /**
   * Retrieves the contact attributes for the specified contact.
   */
  getContactAttributes(callback?: (err: AWSError, data: Connect.Types.GetContactAttributesResponse) => void): Request<Connect.Types.GetContactAttributesResponse, AWSError>;
  /**
   * Gets the real-time metric data from the specified Amazon Connect instance. For a description of each metric, see Real-time Metrics Definitions in the Amazon Connect Administrator Guide.
   */
  getCurrentMetricData(params: Connect.Types.GetCurrentMetricDataRequest, callback?: (err: AWSError, data: Connect.Types.GetCurrentMetricDataResponse) => void): Request<Connect.Types.GetCurrentMetricDataResponse, AWSError>;
  /**
   * Gets the real-time metric data from the specified Amazon Connect instance. For a description of each metric, see Real-time Metrics Definitions in the Amazon Connect Administrator Guide.
   */
  getCurrentMetricData(callback?: (err: AWSError, data: Connect.Types.GetCurrentMetricDataResponse) => void): Request<Connect.Types.GetCurrentMetricDataResponse, AWSError>;
  /**
   * Retrieves a token for federation.
   */
  getFederationToken(params: Connect.Types.GetFederationTokenRequest, callback?: (err: AWSError, data: Connect.Types.GetFederationTokenResponse) => void): Request<Connect.Types.GetFederationTokenResponse, AWSError>;
  /**
   * Retrieves a token for federation.
   */
  getFederationToken(callback?: (err: AWSError, data: Connect.Types.GetFederationTokenResponse) => void): Request<Connect.Types.GetFederationTokenResponse, AWSError>;
  /**
   * Gets historical metric data from the specified Amazon Connect instance. For a description of each historical metric, see Historical Metrics Definitions in the Amazon Connect Administrator Guide.
   */
  getMetricData(params: Connect.Types.GetMetricDataRequest, callback?: (err: AWSError, data: Connect.Types.GetMetricDataResponse) => void): Request<Connect.Types.GetMetricDataResponse, AWSError>;
  /**
   * Gets historical metric data from the specified Amazon Connect instance. For a description of each historical metric, see Historical Metrics Definitions in the Amazon Connect Administrator Guide.
   */
  getMetricData(callback?: (err: AWSError, data: Connect.Types.GetMetricDataResponse) => void): Request<Connect.Types.GetMetricDataResponse, AWSError>;
  /**
   * Returns a paginated list of all approved origins associated with the instance.
   */
  listApprovedOrigins(params: Connect.Types.ListApprovedOriginsRequest, callback?: (err: AWSError, data: Connect.Types.ListApprovedOriginsResponse) => void): Request<Connect.Types.ListApprovedOriginsResponse, AWSError>;
  /**
   * Returns a paginated list of all approved origins associated with the instance.
   */
  listApprovedOrigins(callback?: (err: AWSError, data: Connect.Types.ListApprovedOriginsResponse) => void): Request<Connect.Types.ListApprovedOriginsResponse, AWSError>;
  /**
   * Provides information about the contact flows for the specified Amazon Connect instance. You can also create and update contact flows using the Amazon Connect Flow language. For more information about contact flows, see Contact Flows in the Amazon Connect Administrator Guide.
   */
  listContactFlows(params: Connect.Types.ListContactFlowsRequest, callback?: (err: AWSError, data: Connect.Types.ListContactFlowsResponse) => void): Request<Connect.Types.ListContactFlowsResponse, AWSError>;
  /**
   * Provides information about the contact flows for the specified Amazon Connect instance. You can also create and update contact flows using the Amazon Connect Flow language. For more information about contact flows, see Contact Flows in the Amazon Connect Administrator Guide.
   */
  listContactFlows(callback?: (err: AWSError, data: Connect.Types.ListContactFlowsResponse) => void): Request<Connect.Types.ListContactFlowsResponse, AWSError>;
  /**
   * Provides information about the hours of operation for the specified Amazon Connect instance. For more information about hours of operation, see Set the Hours of Operation for a Queue in the Amazon Connect Administrator Guide.
   */
  listHoursOfOperations(params: Connect.Types.ListHoursOfOperationsRequest, callback?: (err: AWSError, data: Connect.Types.ListHoursOfOperationsResponse) => void): Request<Connect.Types.ListHoursOfOperationsResponse, AWSError>;
  /**
   * Provides information about the hours of operation for the specified Amazon Connect instance. For more information about hours of operation, see Set the Hours of Operation for a Queue in the Amazon Connect Administrator Guide.
   */
  listHoursOfOperations(callback?: (err: AWSError, data: Connect.Types.ListHoursOfOperationsResponse) => void): Request<Connect.Types.ListHoursOfOperationsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all attribute types for the given instance.
   */
  listInstanceAttributes(params: Connect.Types.ListInstanceAttributesRequest, callback?: (err: AWSError, data: Connect.Types.ListInstanceAttributesResponse) => void): Request<Connect.Types.ListInstanceAttributesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of all attribute types for the given instance.
   */
  listInstanceAttributes(callback?: (err: AWSError, data: Connect.Types.ListInstanceAttributesResponse) => void): Request<Connect.Types.ListInstanceAttributesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of storage configs for the identified instance and resource type.
   */
  listInstanceStorageConfigs(params: Connect.Types.ListInstanceStorageConfigsRequest, callback?: (err: AWSError, data: Connect.Types.ListInstanceStorageConfigsResponse) => void): Request<Connect.Types.ListInstanceStorageConfigsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Returns a paginated list of storage configs for the identified instance and resource type.
   */
  listInstanceStorageConfigs(callback?: (err: AWSError, data: Connect.Types.ListInstanceStorageConfigsResponse) => void): Request<Connect.Types.ListInstanceStorageConfigsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Return a list of instances which are in active state, creation-in-progress state, and failed state. Instances that aren't successfully created (they are in a failed state) are returned only for 24 hours after the CreateInstance API was invoked.
   */
  listInstances(params: Connect.Types.ListInstancesRequest, callback?: (err: AWSError, data: Connect.Types.ListInstancesResponse) => void): Request<Connect.Types.ListInstancesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Return a list of instances which are in active state, creation-in-progress state, and failed state. Instances that aren't successfully created (they are in a failed state) are returned only for 24 hours after the CreateInstance API was invoked.
   */
  listInstances(callback?: (err: AWSError, data: Connect.Types.ListInstancesResponse) => void): Request<Connect.Types.ListInstancesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Provides summary information about the AppIntegration associations for the specified Amazon Connect instance.
   */
  listIntegrationAssociations(params: Connect.Types.ListIntegrationAssociationsRequest, callback?: (err: AWSError, data: Connect.Types.ListIntegrationAssociationsResponse) => void): Request<Connect.Types.ListIntegrationAssociationsResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Provides summary information about the AppIntegration associations for the specified Amazon Connect instance.
   */
  listIntegrationAssociations(callback?: (err: AWSError, data: Connect.Types.ListIntegrationAssociationsResponse) => void): Request<Connect.Types.ListIntegrationAssociationsResponse, AWSError>;
  /**
   * Returns a paginated list of all the Lambda functions that show up in the drop-down options in the relevant contact flow blocks.
   */
  listLambdaFunctions(params: Connect.Types.ListLambdaFunctionsRequest, callback?: (err: AWSError, data: Connect.Types.ListLambdaFunctionsResponse) => void): Request<Connect.Types.ListLambdaFunctionsResponse, AWSError>;
  /**
   * Returns a paginated list of all the Lambda functions that show up in the drop-down options in the relevant contact flow blocks.
   */
  listLambdaFunctions(callback?: (err: AWSError, data: Connect.Types.ListLambdaFunctionsResponse) => void): Request<Connect.Types.ListLambdaFunctionsResponse, AWSError>;
  /**
   * Returns a paginated list of all the Amazon Lex bots currently associated with the instance.
   */
  listLexBots(params: Connect.Types.ListLexBotsRequest, callback?: (err: AWSError, data: Connect.Types.ListLexBotsResponse) => void): Request<Connect.Types.ListLexBotsResponse, AWSError>;
  /**
   * Returns a paginated list of all the Amazon Lex bots currently associated with the instance.
   */
  listLexBots(callback?: (err: AWSError, data: Connect.Types.ListLexBotsResponse) => void): Request<Connect.Types.ListLexBotsResponse, AWSError>;
  /**
   * Provides information about the phone numbers for the specified Amazon Connect instance.  For more information about phone numbers, see Set Up Phone Numbers for Your Contact Center in the Amazon Connect Administrator Guide.
   */
  listPhoneNumbers(params: Connect.Types.ListPhoneNumbersRequest, callback?: (err: AWSError, data: Connect.Types.ListPhoneNumbersResponse) => void): Request<Connect.Types.ListPhoneNumbersResponse, AWSError>;
  /**
   * Provides information about the phone numbers for the specified Amazon Connect instance.  For more information about phone numbers, see Set Up Phone Numbers for Your Contact Center in the Amazon Connect Administrator Guide.
   */
  listPhoneNumbers(callback?: (err: AWSError, data: Connect.Types.ListPhoneNumbersResponse) => void): Request<Connect.Types.ListPhoneNumbersResponse, AWSError>;
  /**
   * Provides information about the prompts for the specified Amazon Connect instance.
   */
  listPrompts(params: Connect.Types.ListPromptsRequest, callback?: (err: AWSError, data: Connect.Types.ListPromptsResponse) => void): Request<Connect.Types.ListPromptsResponse, AWSError>;
  /**
   * Provides information about the prompts for the specified Amazon Connect instance.
   */
  listPrompts(callback?: (err: AWSError, data: Connect.Types.ListPromptsResponse) => void): Request<Connect.Types.ListPromptsResponse, AWSError>;
  /**
   * Provides information about the queues for the specified Amazon Connect instance. For more information about queues, see Queues: Standard and Agent in the Amazon Connect Administrator Guide.
   */
  listQueues(params: Connect.Types.ListQueuesRequest, callback?: (err: AWSError, data: Connect.Types.ListQueuesResponse) => void): Request<Connect.Types.ListQueuesResponse, AWSError>;
  /**
   * Provides information about the queues for the specified Amazon Connect instance. For more information about queues, see Queues: Standard and Agent in the Amazon Connect Administrator Guide.
   */
  listQueues(callback?: (err: AWSError, data: Connect.Types.ListQueuesResponse) => void): Request<Connect.Types.ListQueuesResponse, AWSError>;
  /**
   * List the queues associated with a routing profile.
   */
  listRoutingProfileQueues(params: Connect.Types.ListRoutingProfileQueuesRequest, callback?: (err: AWSError, data: Connect.Types.ListRoutingProfileQueuesResponse) => void): Request<Connect.Types.ListRoutingProfileQueuesResponse, AWSError>;
  /**
   * List the queues associated with a routing profile.
   */
  listRoutingProfileQueues(callback?: (err: AWSError, data: Connect.Types.ListRoutingProfileQueuesResponse) => void): Request<Connect.Types.ListRoutingProfileQueuesResponse, AWSError>;
  /**
   * Provides summary information about the routing profiles for the specified Amazon Connect instance. For more information about routing profiles, see Routing Profiles and Create a Routing Profile in the Amazon Connect Administrator Guide.
   */
  listRoutingProfiles(params: Connect.Types.ListRoutingProfilesRequest, callback?: (err: AWSError, data: Connect.Types.ListRoutingProfilesResponse) => void): Request<Connect.Types.ListRoutingProfilesResponse, AWSError>;
  /**
   * Provides summary information about the routing profiles for the specified Amazon Connect instance. For more information about routing profiles, see Routing Profiles and Create a Routing Profile in the Amazon Connect Administrator Guide.
   */
  listRoutingProfiles(callback?: (err: AWSError, data: Connect.Types.ListRoutingProfilesResponse) => void): Request<Connect.Types.ListRoutingProfilesResponse, AWSError>;
  /**
   * Returns a paginated list of all security keys associated with the instance.
   */
  listSecurityKeys(params: Connect.Types.ListSecurityKeysRequest, callback?: (err: AWSError, data: Connect.Types.ListSecurityKeysResponse) => void): Request<Connect.Types.ListSecurityKeysResponse, AWSError>;
  /**
   * Returns a paginated list of all security keys associated with the instance.
   */
  listSecurityKeys(callback?: (err: AWSError, data: Connect.Types.ListSecurityKeysResponse) => void): Request<Connect.Types.ListSecurityKeysResponse, AWSError>;
  /**
   * Provides summary information about the security profiles for the specified Amazon Connect instance. For more information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide.
   */
  listSecurityProfiles(params: Connect.Types.ListSecurityProfilesRequest, callback?: (err: AWSError, data: Connect.Types.ListSecurityProfilesResponse) => void): Request<Connect.Types.ListSecurityProfilesResponse, AWSError>;
  /**
   * Provides summary information about the security profiles for the specified Amazon Connect instance. For more information about security profiles, see Security Profiles in the Amazon Connect Administrator Guide.
   */
  listSecurityProfiles(callback?: (err: AWSError, data: Connect.Types.ListSecurityProfilesResponse) => void): Request<Connect.Types.ListSecurityProfilesResponse, AWSError>;
  /**
   * Lists the tags for the specified resource. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.
   */
  listTagsForResource(params: Connect.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: Connect.Types.ListTagsForResourceResponse) => void): Request<Connect.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags for the specified resource. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.
   */
  listTagsForResource(callback?: (err: AWSError, data: Connect.Types.ListTagsForResourceResponse) => void): Request<Connect.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. List the use cases. 
   */
  listUseCases(params: Connect.Types.ListUseCasesRequest, callback?: (err: AWSError, data: Connect.Types.ListUseCasesResponse) => void): Request<Connect.Types.ListUseCasesResponse, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. List the use cases. 
   */
  listUseCases(callback?: (err: AWSError, data: Connect.Types.ListUseCasesResponse) => void): Request<Connect.Types.ListUseCasesResponse, AWSError>;
  /**
   * Provides summary information about the hierarchy groups for the specified Amazon Connect instance. For more information about agent hierarchies, see Set Up Agent Hierarchies in the Amazon Connect Administrator Guide.
   */
  listUserHierarchyGroups(params: Connect.Types.ListUserHierarchyGroupsRequest, callback?: (err: AWSError, data: Connect.Types.ListUserHierarchyGroupsResponse) => void): Request<Connect.Types.ListUserHierarchyGroupsResponse, AWSError>;
  /**
   * Provides summary information about the hierarchy groups for the specified Amazon Connect instance. For more information about agent hierarchies, see Set Up Agent Hierarchies in the Amazon Connect Administrator Guide.
   */
  listUserHierarchyGroups(callback?: (err: AWSError, data: Connect.Types.ListUserHierarchyGroupsResponse) => void): Request<Connect.Types.ListUserHierarchyGroupsResponse, AWSError>;
  /**
   * Provides summary information about the users for the specified Amazon Connect instance.
   */
  listUsers(params: Connect.Types.ListUsersRequest, callback?: (err: AWSError, data: Connect.Types.ListUsersResponse) => void): Request<Connect.Types.ListUsersResponse, AWSError>;
  /**
   * Provides summary information about the users for the specified Amazon Connect instance.
   */
  listUsers(callback?: (err: AWSError, data: Connect.Types.ListUsersResponse) => void): Request<Connect.Types.ListUsersResponse, AWSError>;
  /**
   * When a contact is being recorded, and the recording has been suspended using SuspendContactRecording, this API resumes recording the call. Only voice recordings are supported at this time.
   */
  resumeContactRecording(params: Connect.Types.ResumeContactRecordingRequest, callback?: (err: AWSError, data: Connect.Types.ResumeContactRecordingResponse) => void): Request<Connect.Types.ResumeContactRecordingResponse, AWSError>;
  /**
   * When a contact is being recorded, and the recording has been suspended using SuspendContactRecording, this API resumes recording the call. Only voice recordings are supported at this time.
   */
  resumeContactRecording(callback?: (err: AWSError, data: Connect.Types.ResumeContactRecordingResponse) => void): Request<Connect.Types.ResumeContactRecordingResponse, AWSError>;
  /**
   * Initiates a contact flow to start a new chat for the customer. Response of this API provides a token required to obtain credentials from the CreateParticipantConnection API in the Amazon Connect Participant Service. When a new chat contact is successfully created, clients need to subscribe to the participant’s connection for the created chat within 5 minutes. This is achieved by invoking CreateParticipantConnection with WEBSOCKET and CONNECTION_CREDENTIALS.  A 429 error occurs in two situations:   API rate limit is exceeded. API TPS throttling returns a TooManyRequests exception from the API Gateway.   The quota for concurrent active chats is exceeded. Active chat throttling returns a LimitExceededException.   For more information about how chat works, see Chat in the Amazon Connect Administrator Guide.
   */
  startChatContact(params: Connect.Types.StartChatContactRequest, callback?: (err: AWSError, data: Connect.Types.StartChatContactResponse) => void): Request<Connect.Types.StartChatContactResponse, AWSError>;
  /**
   * Initiates a contact flow to start a new chat for the customer. Response of this API provides a token required to obtain credentials from the CreateParticipantConnection API in the Amazon Connect Participant Service. When a new chat contact is successfully created, clients need to subscribe to the participant’s connection for the created chat within 5 minutes. This is achieved by invoking CreateParticipantConnection with WEBSOCKET and CONNECTION_CREDENTIALS.  A 429 error occurs in two situations:   API rate limit is exceeded. API TPS throttling returns a TooManyRequests exception from the API Gateway.   The quota for concurrent active chats is exceeded. Active chat throttling returns a LimitExceededException.   For more information about how chat works, see Chat in the Amazon Connect Administrator Guide.
   */
  startChatContact(callback?: (err: AWSError, data: Connect.Types.StartChatContactResponse) => void): Request<Connect.Types.StartChatContactResponse, AWSError>;
  /**
   * This API starts recording the contact when the agent joins the call. StartContactRecording is a one-time action. For example, if you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend and resume it, such as when collecting sensitive information (for example, a credit card number), use SuspendContactRecording and ResumeContactRecording. You can use this API to override the recording behavior configured in the Set recording behavior block. Only voice recordings are supported at this time.
   */
  startContactRecording(params: Connect.Types.StartContactRecordingRequest, callback?: (err: AWSError, data: Connect.Types.StartContactRecordingResponse) => void): Request<Connect.Types.StartContactRecordingResponse, AWSError>;
  /**
   * This API starts recording the contact when the agent joins the call. StartContactRecording is a one-time action. For example, if you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend and resume it, such as when collecting sensitive information (for example, a credit card number), use SuspendContactRecording and ResumeContactRecording. You can use this API to override the recording behavior configured in the Set recording behavior block. Only voice recordings are supported at this time.
   */
  startContactRecording(callback?: (err: AWSError, data: Connect.Types.StartContactRecordingResponse) => void): Request<Connect.Types.StartContactRecordingResponse, AWSError>;
  /**
   * This API places an outbound call to a contact, and then initiates the contact flow. It performs the actions in the contact flow that's specified (in ContactFlowId). Agents are not involved in initiating the outbound API (that is, dialing the contact). If the contact flow places an outbound call to a contact, and then puts the contact in queue, that's when the call is routed to the agent, like any other inbound case. There is a 60 second dialing timeout for this operation. If the call is not connected after 60 seconds, it fails.  UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK mobile numbers, you must submit a service quota increase request. For more information, see Amazon Connect Service Quotas in the Amazon Connect Administrator Guide.  
   */
  startOutboundVoiceContact(params: Connect.Types.StartOutboundVoiceContactRequest, callback?: (err: AWSError, data: Connect.Types.StartOutboundVoiceContactResponse) => void): Request<Connect.Types.StartOutboundVoiceContactResponse, AWSError>;
  /**
   * This API places an outbound call to a contact, and then initiates the contact flow. It performs the actions in the contact flow that's specified (in ContactFlowId). Agents are not involved in initiating the outbound API (that is, dialing the contact). If the contact flow places an outbound call to a contact, and then puts the contact in queue, that's when the call is routed to the agent, like any other inbound case. There is a 60 second dialing timeout for this operation. If the call is not connected after 60 seconds, it fails.  UK numbers with a 447 prefix are not allowed by default. Before you can dial these UK mobile numbers, you must submit a service quota increase request. For more information, see Amazon Connect Service Quotas in the Amazon Connect Administrator Guide.  
   */
  startOutboundVoiceContact(callback?: (err: AWSError, data: Connect.Types.StartOutboundVoiceContactResponse) => void): Request<Connect.Types.StartOutboundVoiceContactResponse, AWSError>;
  /**
   * Initiates a contact flow to start a new task.
   */
  startTaskContact(params: Connect.Types.StartTaskContactRequest, callback?: (err: AWSError, data: Connect.Types.StartTaskContactResponse) => void): Request<Connect.Types.StartTaskContactResponse, AWSError>;
  /**
   * Initiates a contact flow to start a new task.
   */
  startTaskContact(callback?: (err: AWSError, data: Connect.Types.StartTaskContactResponse) => void): Request<Connect.Types.StartTaskContactResponse, AWSError>;
  /**
   * Ends the specified contact.
   */
  stopContact(params: Connect.Types.StopContactRequest, callback?: (err: AWSError, data: Connect.Types.StopContactResponse) => void): Request<Connect.Types.StopContactResponse, AWSError>;
  /**
   * Ends the specified contact.
   */
  stopContact(callback?: (err: AWSError, data: Connect.Types.StopContactResponse) => void): Request<Connect.Types.StopContactResponse, AWSError>;
  /**
   * When a contact is being recorded, this API stops recording the call. StopContactRecording is a one-time action. If you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend it for sensitive information (for example, to collect a credit card number), and then restart it, use SuspendContactRecording and ResumeContactRecording. Only voice recordings are supported at this time.
   */
  stopContactRecording(params: Connect.Types.StopContactRecordingRequest, callback?: (err: AWSError, data: Connect.Types.StopContactRecordingResponse) => void): Request<Connect.Types.StopContactRecordingResponse, AWSError>;
  /**
   * When a contact is being recorded, this API stops recording the call. StopContactRecording is a one-time action. If you use StopContactRecording to stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios where the recording has started and you want to suspend it for sensitive information (for example, to collect a credit card number), and then restart it, use SuspendContactRecording and ResumeContactRecording. Only voice recordings are supported at this time.
   */
  stopContactRecording(callback?: (err: AWSError, data: Connect.Types.StopContactRecordingResponse) => void): Request<Connect.Types.StopContactRecordingResponse, AWSError>;
  /**
   * When a contact is being recorded, this API suspends recording the call. For example, you might suspend the call recording while collecting sensitive information, such as a credit card number. Then use ResumeContactRecording to restart recording.  The period of time that the recording is suspended is filled with silence in the final recording.  Only voice recordings are supported at this time.
   */
  suspendContactRecording(params: Connect.Types.SuspendContactRecordingRequest, callback?: (err: AWSError, data: Connect.Types.SuspendContactRecordingResponse) => void): Request<Connect.Types.SuspendContactRecordingResponse, AWSError>;
  /**
   * When a contact is being recorded, this API suspends recording the call. For example, you might suspend the call recording while collecting sensitive information, such as a credit card number. Then use ResumeContactRecording to restart recording.  The period of time that the recording is suspended is filled with silence in the final recording.  Only voice recordings are supported at this time.
   */
  suspendContactRecording(callback?: (err: AWSError, data: Connect.Types.SuspendContactRecordingResponse) => void): Request<Connect.Types.SuspendContactRecordingResponse, AWSError>;
  /**
   * Adds the specified tags to the specified resource. The supported resource types are users, routing profiles, and contact flows. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.
   */
  tagResource(params: Connect.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds the specified tags to the specified resource. The supported resource types are users, routing profiles, and contact flows. For sample policies that use tags, see Amazon Connect Identity-Based Policy Examples in the Amazon Connect Administrator Guide.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified tags from the specified resource.
   */
  untagResource(params: Connect.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified tags from the specified resource.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates the contact attributes associated with the specified contact. You can add or update attributes for both ongoing and completed contacts. For example, you can update the customer's name or the reason the customer called while the call is active, or add notes about steps that the agent took during the call that are displayed to the next agent that takes the call. You can also update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or identifying abusive callers. Contact attributes are available in Amazon Connect for 24 months, and are then deleted.  Important: You cannot use the operation to update attributes for contacts that occurred prior to the release of the API, September 12, 2018. You can update attributes only for contacts that started after the release of the API. If you attempt to update attributes for a contact that occurred prior to the release of the API, a 400 error is returned. This applies also to queued callbacks that were initiated prior to the release of the API but are still active in your instance.
   */
  updateContactAttributes(params: Connect.Types.UpdateContactAttributesRequest, callback?: (err: AWSError, data: Connect.Types.UpdateContactAttributesResponse) => void): Request<Connect.Types.UpdateContactAttributesResponse, AWSError>;
  /**
   * Creates or updates the contact attributes associated with the specified contact. You can add or update attributes for both ongoing and completed contacts. For example, you can update the customer's name or the reason the customer called while the call is active, or add notes about steps that the agent took during the call that are displayed to the next agent that takes the call. You can also update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or identifying abusive callers. Contact attributes are available in Amazon Connect for 24 months, and are then deleted.  Important: You cannot use the operation to update attributes for contacts that occurred prior to the release of the API, September 12, 2018. You can update attributes only for contacts that started after the release of the API. If you attempt to update attributes for a contact that occurred prior to the release of the API, a 400 error is returned. This applies also to queued callbacks that were initiated prior to the release of the API but are still active in your instance.
   */
  updateContactAttributes(callback?: (err: AWSError, data: Connect.Types.UpdateContactAttributesResponse) => void): Request<Connect.Types.UpdateContactAttributesResponse, AWSError>;
  /**
   * Updates the specified contact flow. You can also create and update contact flows using the Amazon Connect Flow language.
   */
  updateContactFlowContent(params: Connect.Types.UpdateContactFlowContentRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the specified contact flow. You can also create and update contact flows using the Amazon Connect Flow language.
   */
  updateContactFlowContent(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * The name of the contact flow. You can also create and update contact flows using the Amazon Connect Flow language.
   */
  updateContactFlowName(params: Connect.Types.UpdateContactFlowNameRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * The name of the contact flow. You can also create and update contact flows using the Amazon Connect Flow language.
   */
  updateContactFlowName(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the value for the specified attribute type.
   */
  updateInstanceAttribute(params: Connect.Types.UpdateInstanceAttributeRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates the value for the specified attribute type.
   */
  updateInstanceAttribute(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates an existing configuration for a resource type. This API is idempotent.
   */
  updateInstanceStorageConfig(params: Connect.Types.UpdateInstanceStorageConfigRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * This API is in preview release for Amazon Connect and is subject to change. Updates an existing configuration for a resource type. This API is idempotent.
   */
  updateInstanceStorageConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing profile.
   */
  updateRoutingProfileConcurrency(params: Connect.Types.UpdateRoutingProfileConcurrencyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing profile.
   */
  updateRoutingProfileConcurrency(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the default outbound queue of a routing profile.
   */
  updateRoutingProfileDefaultOutboundQueue(params: Connect.Types.UpdateRoutingProfileDefaultOutboundQueueRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the default outbound queue of a routing profile.
   */
  updateRoutingProfileDefaultOutboundQueue(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name and description of a routing profile. The request accepts the following data in JSON format. At least Name or Description must be provided.
   */
  updateRoutingProfileName(params: Connect.Types.UpdateRoutingProfileNameRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name and description of a routing profile. The request accepts the following data in JSON format. At least Name or Description must be provided.
   */
  updateRoutingProfileName(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the properties associated with a set of queues for a routing profile.
   */
  updateRoutingProfileQueues(params: Connect.Types.UpdateRoutingProfileQueuesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the properties associated with a set of queues for a routing profile.
   */
  updateRoutingProfileQueues(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified hierarchy group to the specified user.
   */
  updateUserHierarchy(params: Connect.Types.UpdateUserHierarchyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified hierarchy group to the specified user.
   */
  updateUserHierarchy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name of the user hierarchy group. 
   */
  updateUserHierarchyGroupName(params: Connect.Types.UpdateUserHierarchyGroupNameRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the name of the user hierarchy group. 
   */
  updateUserHierarchyGroupName(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.
   */
  updateUserHierarchyStructure(params: Connect.Types.UpdateUserHierarchyStructureRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the user hierarchy structure: add, remove, and rename user hierarchy levels.
   */
  updateUserHierarchyStructure(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the identity information for the specified user.  Someone with the ability to invoke UpdateUserIndentityInfo can change the login credentials of other users by changing their email address. This poses a security risk to your organization. They can change the email address of a user to the attacker's email address, and then reset the password through email. We strongly recommend limiting who has the ability to invoke UpdateUserIndentityInfo. For more information, see Best Practices for Security Profiles in the Amazon Connect Administrator Guide. 
   */
  updateUserIdentityInfo(params: Connect.Types.UpdateUserIdentityInfoRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the identity information for the specified user.  Someone with the ability to invoke UpdateUserIndentityInfo can change the login credentials of other users by changing their email address. This poses a security risk to your organization. They can change the email address of a user to the attacker's email address, and then reset the password through email. We strongly recommend limiting who has the ability to invoke UpdateUserIndentityInfo. For more information, see Best Practices for Security Profiles in the Amazon Connect Administrator Guide. 
   */
  updateUserIdentityInfo(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the phone configuration settings for the specified user.
   */
  updateUserPhoneConfig(params: Connect.Types.UpdateUserPhoneConfigRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the phone configuration settings for the specified user.
   */
  updateUserPhoneConfig(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified routing profile to the specified user.
   */
  updateUserRoutingProfile(params: Connect.Types.UpdateUserRoutingProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified routing profile to the specified user.
   */
  updateUserRoutingProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified security profiles to the specified user.
   */
  updateUserSecurityProfiles(params: Connect.Types.UpdateUserSecurityProfilesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Assigns the specified security profiles to the specified user.
   */
  updateUserSecurityProfiles(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace Connect {
  export type ARN = string;
  export type AfterContactWorkTimeLimit = number;
  export type AgentFirstName = string;
  export type AgentLastName = string;
  export type AgentUsername = string;
  export interface AssociateApprovedOriginRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The domain to add to your allow list.
     */
    Origin: Origin;
  }
  export interface AssociateInstanceStorageConfigRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * A valid resource type.
     */
    ResourceType: InstanceStorageResourceType;
    /**
     * A valid storage type.
     */
    StorageConfig: InstanceStorageConfig;
  }
  export interface AssociateInstanceStorageConfigResponse {
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId?: AssociationId;
  }
  export interface AssociateLambdaFunctionRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters allowed is 140.
     */
    FunctionArn: FunctionArn;
  }
  export interface AssociateLexBotRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The Amazon Lex box to associate with the instance.
     */
    LexBot: LexBot;
  }
  export interface AssociateRoutingProfileQueuesRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The queues to associate with this routing profile.
     */
    QueueConfigs: RoutingProfileQueueConfigList;
  }
  export interface AssociateSecurityKeyRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * A valid security key in PEM format.
     */
    Key: PEM;
  }
  export interface AssociateSecurityKeyResponse {
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId?: AssociationId;
  }
  export type AssociationId = string;
  export interface Attribute {
    /**
     * The type of attribute.
     */
    AttributeType?: InstanceAttributeType;
    /**
     * The value of the attribute.
     */
    Value?: InstanceAttributeValue;
  }
  export type AttributeName = string;
  export type AttributeValue = string;
  export type Attributes = {[key: string]: AttributeValue};
  export type AttributesList = Attribute[];
  export type AutoAccept = boolean;
  export type BotName = string;
  export type BucketName = string;
  export type Channel = "VOICE"|"CHAT"|"TASK"|string;
  export type Channels = Channel[];
  export type ChatContent = string;
  export type ChatContentType = string;
  export interface ChatMessage {
    /**
     * The type of the content. Supported types are text/plain.
     */
    ContentType: ChatContentType;
    /**
     * The content of the chat message.
     */
    Content: ChatContent;
  }
  export type ClientToken = string;
  export type Comparison = "LT"|string;
  export type Concurrency = number;
  export interface ContactFlow {
    /**
     * The Amazon Resource Name (ARN) of the contact flow.
     */
    Arn?: ARN;
    /**
     * The identifier of the contact flow.
     */
    Id?: ContactFlowId;
    /**
     * The name of the contact flow.
     */
    Name?: ContactFlowName;
    /**
     * The type of the contact flow. For descriptions of the available types, see Choose a Contact Flow Type in the Amazon Connect Administrator Guide.
     */
    Type?: ContactFlowType;
    /**
     * The description of the contact flow.
     */
    Description?: ContactFlowDescription;
    /**
     * The content of the contact flow.
     */
    Content?: ContactFlowContent;
    /**
     * One or more tags.
     */
    Tags?: TagMap;
  }
  export type ContactFlowContent = string;
  export type ContactFlowDescription = string;
  export type ContactFlowId = string;
  export type ContactFlowName = string;
  export interface ContactFlowSummary {
    /**
     * The identifier of the contact flow.
     */
    Id?: ContactFlowId;
    /**
     * The Amazon Resource Name (ARN) of the contact flow.
     */
    Arn?: ARN;
    /**
     * The name of the contact flow.
     */
    Name?: ContactFlowName;
    /**
     * The type of contact flow.
     */
    ContactFlowType?: ContactFlowType;
  }
  export type ContactFlowSummaryList = ContactFlowSummary[];
  export type ContactFlowType = "CONTACT_FLOW"|"CUSTOMER_QUEUE"|"CUSTOMER_HOLD"|"CUSTOMER_WHISPER"|"AGENT_HOLD"|"AGENT_WHISPER"|"OUTBOUND_WHISPER"|"AGENT_TRANSFER"|"QUEUE_TRANSFER"|string;
  export type ContactFlowTypes = ContactFlowType[];
  export type ContactId = string;
  export type ContactReferences = {[key: string]: Reference};
  export interface CreateContactFlowRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the contact flow.
     */
    Name: ContactFlowName;
    /**
     * The type of the contact flow. For descriptions of the available types, see Choose a Contact Flow Type in the Amazon Connect Administrator Guide.
     */
    Type: ContactFlowType;
    /**
     * The description of the contact flow. 
     */
    Description?: ContactFlowDescription;
    /**
     * The content of the contact flow. 
     */
    Content: ContactFlowContent;
    /**
     * One or more tags.
     */
    Tags?: TagMap;
  }
  export interface CreateContactFlowResponse {
    /**
     * The identifier of the contact flow.
     */
    ContactFlowId?: ContactFlowId;
    /**
     * The Amazon Resource Name (ARN) of the contact flow.
     */
    ContactFlowArn?: ARN;
  }
  export interface CreateInstanceRequest {
    /**
     * The idempotency token.
     */
    ClientToken?: ClientToken;
    /**
     * The type of identity management for your Amazon Connect users.
     */
    IdentityManagementType: DirectoryType;
    /**
     * The name for your instance.
     */
    InstanceAlias?: DirectoryAlias;
    /**
     * The identifier for the directory.
     */
    DirectoryId?: DirectoryId;
    /**
     * Whether your contact center handles incoming contacts.
     */
    InboundCallsEnabled: InboundCallsEnabled;
    /**
     * Whether your contact center allows outbound calls.
     */
    OutboundCallsEnabled: OutboundCallsEnabled;
  }
  export interface CreateInstanceResponse {
    /**
     * The identifier for the instance.
     */
    Id?: InstanceId;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    Arn?: ARN;
  }
  export interface CreateIntegrationAssociationRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The type of information to be ingested.
     */
    IntegrationType: IntegrationType;
    /**
     * The Amazon Resource Name (ARN) of the integration.
     */
    IntegrationArn: ARN;
    /**
     * The URL for the external application.
     */
    SourceApplicationUrl: URI;
    /**
     * The name of the external application.
     */
    SourceApplicationName: SourceApplicationName;
    /**
     * The type of the data source.
     */
    SourceType: SourceType;
  }
  export interface CreateIntegrationAssociationResponse {
    /**
     * The identifier for the association.
     */
    IntegrationAssociationId?: IntegrationAssociationId;
    /**
     * The Amazon Resource Name (ARN) for the association.
     */
    IntegrationAssociationArn?: ARN;
  }
  export interface CreateRoutingProfileRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the routing profile. Must not be more than 127 characters.
     */
    Name: RoutingProfileName;
    /**
     * Description of the routing profile. Must not be more than 250 characters.
     */
    Description: RoutingProfileDescription;
    /**
     * The default outbound queue for the routing profile.
     */
    DefaultOutboundQueueId: QueueId;
    /**
     * The inbound queues associated with the routing profile. If no queue is added, the agent can only make outbound calls.
     */
    QueueConfigs?: RoutingProfileQueueConfigList;
    /**
     * The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
     */
    MediaConcurrencies: MediaConcurrencies;
    /**
     * One or more tags.
     */
    Tags?: TagMap;
  }
  export interface CreateRoutingProfileResponse {
    /**
     * The Amazon Resource Name (ARN) of the routing profile.
     */
    RoutingProfileArn?: ARN;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId?: RoutingProfileId;
  }
  export interface CreateUseCaseRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the AppIntegration association.
     */
    IntegrationAssociationId: IntegrationAssociationId;
    /**
     * The type of use case to associate to the AppIntegration association. Each AppIntegration association can have only one of each use case type.
     */
    UseCaseType: UseCaseType;
  }
  export interface CreateUseCaseResponse {
    /**
     * The identifier of the use case.
     */
    UseCaseId?: UseCaseId;
    /**
     * The Amazon Resource Name (ARN) for the use case.
     */
    UseCaseArn?: ARN;
  }
  export interface CreateUserHierarchyGroupRequest {
    /**
     * The name of the user hierarchy group. Must not be more than 100 characters.
     */
    Name: HierarchyGroupName;
    /**
     * The identifier for the parent hierarchy group. The user hierarchy is created at level one if the parent group ID is null.
     */
    ParentGroupId?: HierarchyGroupId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface CreateUserHierarchyGroupResponse {
    /**
     * The identifier of the hierarchy group.
     */
    HierarchyGroupId?: HierarchyGroupId;
    /**
     * The Amazon Resource Name (ARN) of the hierarchy group. 
     */
    HierarchyGroupArn?: ARN;
  }
  export interface CreateUserRequest {
    /**
     * The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.
     */
    Username: AgentUsername;
    /**
     * The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.
     */
    Password?: Password;
    /**
     * The information about the identity of the user.
     */
    IdentityInfo?: UserIdentityInfo;
    /**
     * The phone settings for the user.
     */
    PhoneConfig: UserPhoneConfig;
    /**
     * The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory. This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned.
     */
    DirectoryUserId?: DirectoryUserId;
    /**
     * The identifier of the security profile for the user.
     */
    SecurityProfileIds: SecurityProfileIds;
    /**
     * The identifier of the routing profile for the user.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The identifier of the hierarchy group for the user.
     */
    HierarchyGroupId?: HierarchyGroupId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * One or more tags.
     */
    Tags?: TagMap;
  }
  export interface CreateUserResponse {
    /**
     * The identifier of the user account.
     */
    UserId?: UserId;
    /**
     * The Amazon Resource Name (ARN) of the user account.
     */
    UserArn?: ARN;
  }
  export interface Credentials {
    /**
     * An access token generated for a federated user to access Amazon Connect.
     */
    AccessToken?: SecurityToken;
    /**
     * A token generated with an expiration time for the session a user is logged in to Amazon Connect.
     */
    AccessTokenExpiration?: timestamp;
    /**
     * Renews a token generated for a user to access the Amazon Connect instance.
     */
    RefreshToken?: SecurityToken;
    /**
     * Renews the expiration timer for a generated token.
     */
    RefreshTokenExpiration?: timestamp;
  }
  export interface CurrentMetric {
    /**
     * The name of the metric.
     */
    Name?: CurrentMetricName;
    /**
     * The unit for the metric.
     */
    Unit?: Unit;
  }
  export interface CurrentMetricData {
    /**
     * Information about the metric.
     */
    Metric?: CurrentMetric;
    /**
     * The value of the metric.
     */
    Value?: Value;
  }
  export type CurrentMetricDataCollections = CurrentMetricData[];
  export type CurrentMetricName = "AGENTS_ONLINE"|"AGENTS_AVAILABLE"|"AGENTS_ON_CALL"|"AGENTS_NON_PRODUCTIVE"|"AGENTS_AFTER_CONTACT_WORK"|"AGENTS_ERROR"|"AGENTS_STAFFED"|"CONTACTS_IN_QUEUE"|"OLDEST_CONTACT_AGE"|"CONTACTS_SCHEDULED"|"AGENTS_ON_CONTACT"|"SLOTS_ACTIVE"|"SLOTS_AVAILABLE"|string;
  export interface CurrentMetricResult {
    /**
     * The dimensions for the metrics.
     */
    Dimensions?: Dimensions;
    /**
     * The set of metrics.
     */
    Collections?: CurrentMetricDataCollections;
  }
  export type CurrentMetricResults = CurrentMetricResult[];
  export type CurrentMetrics = CurrentMetric[];
  export type Delay = number;
  export interface DeleteInstanceRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface DeleteIntegrationAssociationRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the AppIntegration association.
     */
    IntegrationAssociationId: IntegrationAssociationId;
  }
  export interface DeleteUseCaseRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the AppIntegration association.
     */
    IntegrationAssociationId: IntegrationAssociationId;
    /**
     * The identifier for the use case.
     */
    UseCaseId: UseCaseId;
  }
  export interface DeleteUserHierarchyGroupRequest {
    /**
     * The identifier of the hierarchy group.
     */
    HierarchyGroupId: HierarchyGroupId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface DeleteUserRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the user.
     */
    UserId: UserId;
  }
  export interface DescribeContactFlowRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact flow.
     */
    ContactFlowId: ContactFlowId;
  }
  export interface DescribeContactFlowResponse {
    /**
     * Information about the contact flow.
     */
    ContactFlow?: ContactFlow;
  }
  export interface DescribeInstanceAttributeRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The type of attribute.
     */
    AttributeType: InstanceAttributeType;
  }
  export interface DescribeInstanceAttributeResponse {
    /**
     * The type of attribute.
     */
    Attribute?: Attribute;
  }
  export interface DescribeInstanceRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface DescribeInstanceResponse {
    /**
     * The name of the instance.
     */
    Instance?: Instance;
  }
  export interface DescribeInstanceStorageConfigRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId: AssociationId;
    /**
     * A valid resource type.
     */
    ResourceType: InstanceStorageResourceType;
  }
  export interface DescribeInstanceStorageConfigResponse {
    /**
     * A valid storage type.
     */
    StorageConfig?: InstanceStorageConfig;
  }
  export interface DescribeRoutingProfileRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
  }
  export interface DescribeRoutingProfileResponse {
    /**
     * The routing profile.
     */
    RoutingProfile?: RoutingProfile;
  }
  export interface DescribeUserHierarchyGroupRequest {
    /**
     * The identifier of the hierarchy group.
     */
    HierarchyGroupId: HierarchyGroupId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface DescribeUserHierarchyGroupResponse {
    /**
     * Information about the hierarchy group.
     */
    HierarchyGroup?: HierarchyGroup;
  }
  export interface DescribeUserHierarchyStructureRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface DescribeUserHierarchyStructureResponse {
    /**
     * Information about the hierarchy structure.
     */
    HierarchyStructure?: HierarchyStructure;
  }
  export interface DescribeUserRequest {
    /**
     * The identifier of the user account.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface DescribeUserResponse {
    /**
     * Information about the user account and configuration settings.
     */
    User?: User;
  }
  export type Description = string;
  export interface Dimensions {
    /**
     * Information about the queue for which metrics are returned.
     */
    Queue?: QueueReference;
    /**
     * The channel used for grouping and filters.
     */
    Channel?: Channel;
  }
  export type DirectoryAlias = string;
  export type DirectoryId = string;
  export type DirectoryType = "SAML"|"CONNECT_MANAGED"|"EXISTING_DIRECTORY"|string;
  export type DirectoryUserId = string;
  export interface DisassociateApprovedOriginRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The domain URL of the integrated application.
     */
    Origin: Origin;
  }
  export interface DisassociateInstanceStorageConfigRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId: AssociationId;
    /**
     * A valid resource type.
     */
    ResourceType: InstanceStorageResourceType;
  }
  export interface DisassociateLambdaFunctionRequest {
    /**
     * The identifier of the Amazon Connect instance..
     */
    InstanceId: InstanceId;
    /**
     * The Amazon Resource Name (ARN) of the Lambda function being disassociated.
     */
    FunctionArn: FunctionArn;
  }
  export interface DisassociateLexBotRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The name of the Amazon Lex bot. Maximum character limit of 50.
     */
    BotName: BotName;
    /**
     * The Region in which the Amazon Lex bot has been created.
     */
    LexRegion: LexRegion;
  }
  export interface DisassociateRoutingProfileQueuesRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The queues to disassociate from this routing profile.
     */
    QueueReferences: RoutingProfileQueueReferenceList;
  }
  export interface DisassociateSecurityKeyRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId: AssociationId;
  }
  export type DisplayName = string;
  export type Email = string;
  export interface EncryptionConfig {
    /**
     * The type of encryption.
     */
    EncryptionType: EncryptionType;
    /**
     * The identifier of the encryption key.
     */
    KeyId: KeyId;
  }
  export type EncryptionType = "KMS"|string;
  export interface Filters {
    /**
     * The queues to use to filter the metrics. You can specify up to 100 queues per request.
     */
    Queues?: Queues;
    /**
     * The channel to use to filter the metrics.
     */
    Channels?: Channels;
  }
  export type FunctionArn = string;
  export type FunctionArnsList = FunctionArn[];
  export interface GetContactAttributesRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the initial contact.
     */
    InitialContactId: ContactId;
  }
  export interface GetContactAttributesResponse {
    /**
     * Information about the attributes.
     */
    Attributes?: Attributes;
  }
  export interface GetCurrentMetricDataRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is retrieved only for the resources associated with the queues or channels included in the filter. You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported.
     */
    Filters: Filters;
    /**
     * The grouping applied to the metrics returned. For example, when grouped by QUEUE, the metrics returned apply to each queue rather than aggregated for all queues. If you group by CHANNEL, you should include a Channels filter. VOICE, CHAT, and TASK channels are supported. If no Grouping is included in the request, a summary of metrics is returned.
     */
    Groupings?: Groupings;
    /**
     * The metrics to retrieve. Specify the name and unit for each metric. The following metrics are available. For a description of all the metrics, see Real-time Metrics Definitions in the Amazon Connect Administrator Guide.  AGENTS_AFTER_CONTACT_WORK  Unit: COUNT Name in real-time metrics report: ACW   AGENTS_AVAILABLE  Unit: COUNT Name in real-time metrics report: Available   AGENTS_ERROR  Unit: COUNT Name in real-time metrics report: Error   AGENTS_NON_PRODUCTIVE  Unit: COUNT Name in real-time metrics report: NPT (Non-Productive Time)   AGENTS_ON_CALL  Unit: COUNT Name in real-time metrics report: On contact   AGENTS_ON_CONTACT  Unit: COUNT Name in real-time metrics report: On contact   AGENTS_ONLINE  Unit: COUNT Name in real-time metrics report: Online   AGENTS_STAFFED  Unit: COUNT Name in real-time metrics report: Staffed   CONTACTS_IN_QUEUE  Unit: COUNT Name in real-time metrics report: In queue   CONTACTS_SCHEDULED  Unit: COUNT Name in real-time metrics report: Scheduled   OLDEST_CONTACT_AGE  Unit: SECONDS When you use groupings, Unit says SECONDS but the Value is returned in MILLISECONDS. For example, if you get a response like this:  { "Metric": { "Name": "OLDEST_CONTACT_AGE", "Unit": "SECONDS" }, "Value": 24113.0 } The actual OLDEST_CONTACT_AGE is 24 seconds. Name in real-time metrics report: Oldest   SLOTS_ACTIVE  Unit: COUNT Name in real-time metrics report: Active   SLOTS_AVAILABLE  Unit: COUNT Name in real-time metrics report: Availability   
     */
    CurrentMetrics: CurrentMetrics;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult100;
  }
  export interface GetCurrentMetricDataResponse {
    /**
     * If there are additional results, this is the token for the next set of results. The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.
     */
    NextToken?: NextToken;
    /**
     * Information about the real-time metrics.
     */
    MetricResults?: CurrentMetricResults;
    /**
     * The time at which the metrics were retrieved and cached for pagination.
     */
    DataSnapshotTime?: timestamp;
  }
  export interface GetFederationTokenRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface GetFederationTokenResponse {
    /**
     * The credentials to use for federation.
     */
    Credentials?: Credentials;
  }
  export interface GetMetricDataRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes, such as 10:05, 10:10, 10:15. The start time cannot be earlier than 24 hours before the time of the request. Historical metrics are available only for 24 hours.
     */
    StartTime: timestamp;
    /**
     * The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be specified using an interval of 5 minutes, such as 11:00, 11:05, 11:10, and must be later than the start time timestamp. The time range between the start and end time must be less than 24 hours.
     */
    EndTime: timestamp;
    /**
     * The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is retrieved only for the resources associated with the queues or channels included in the filter. You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported.
     */
    Filters: Filters;
    /**
     * The grouping applied to the metrics returned. For example, when results are grouped by queue, the metrics returned are grouped by queue. The values returned apply to the metrics for each queue rather than aggregated for all queues. The only supported grouping is QUEUE. If no grouping is specified, a summary of metrics for all queues is returned.
     */
    Groupings?: Groupings;
    /**
     * The metrics to retrieve. Specify the name, unit, and statistic for each metric. The following historical metrics are available. For a description of each metric, see Historical Metrics Definitions in the Amazon Connect Administrator Guide.  ABANDON_TIME  Unit: SECONDS Statistic: AVG  AFTER_CONTACT_WORK_TIME  Unit: SECONDS Statistic: AVG  API_CONTACTS_HANDLED  Unit: COUNT Statistic: SUM  CALLBACK_CONTACTS_HANDLED  Unit: COUNT Statistic: SUM  CONTACTS_ABANDONED  Unit: COUNT Statistic: SUM  CONTACTS_AGENT_HUNG_UP_FIRST  Unit: COUNT Statistic: SUM  CONTACTS_CONSULTED  Unit: COUNT Statistic: SUM  CONTACTS_HANDLED  Unit: COUNT Statistic: SUM  CONTACTS_HANDLED_INCOMING  Unit: COUNT Statistic: SUM  CONTACTS_HANDLED_OUTBOUND  Unit: COUNT Statistic: SUM  CONTACTS_HOLD_ABANDONS  Unit: COUNT Statistic: SUM  CONTACTS_MISSED  Unit: COUNT Statistic: SUM  CONTACTS_QUEUED  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_IN  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_IN_FROM_QUEUE  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_OUT  Unit: COUNT Statistic: SUM  CONTACTS_TRANSFERRED_OUT_FROM_QUEUE  Unit: COUNT Statistic: SUM  HANDLE_TIME  Unit: SECONDS Statistic: AVG  HOLD_TIME  Unit: SECONDS Statistic: AVG  INTERACTION_AND_HOLD_TIME  Unit: SECONDS Statistic: AVG  INTERACTION_TIME  Unit: SECONDS Statistic: AVG  OCCUPANCY  Unit: PERCENT Statistic: AVG  QUEUE_ANSWER_TIME  Unit: SECONDS Statistic: AVG  QUEUED_TIME  Unit: SECONDS Statistic: MAX  SERVICE_LEVEL  Unit: PERCENT Statistic: AVG Threshold: Only "Less than" comparisons are supported, with the following service level thresholds: 15, 20, 25, 30, 45, 60, 90, 120, 180, 240, 300, 600  
     */
    HistoricalMetrics: HistoricalMetrics;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult100;
  }
  export interface GetMetricDataResponse {
    /**
     * If there are additional results, this is the token for the next set of results. The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.
     */
    NextToken?: NextToken;
    /**
     * Information about the historical metrics. If no grouping is specified, a summary of metric data is returned.
     */
    MetricResults?: HistoricalMetricResults;
  }
  export type Grouping = "QUEUE"|"CHANNEL"|string;
  export type Groupings = Grouping[];
  export interface HierarchyGroup {
    /**
     * The identifier of the hierarchy group.
     */
    Id?: HierarchyGroupId;
    /**
     * The Amazon Resource Name (ARN) of the hierarchy group.
     */
    Arn?: ARN;
    /**
     * The name of the hierarchy group.
     */
    Name?: HierarchyGroupName;
    /**
     * The identifier of the level in the hierarchy group.
     */
    LevelId?: HierarchyLevelId;
    /**
     * Information about the levels in the hierarchy group.
     */
    HierarchyPath?: HierarchyPath;
  }
  export type HierarchyGroupId = string;
  export type HierarchyGroupName = string;
  export interface HierarchyGroupSummary {
    /**
     * The identifier of the hierarchy group.
     */
    Id?: HierarchyGroupId;
    /**
     * The Amazon Resource Name (ARN) of the hierarchy group.
     */
    Arn?: ARN;
    /**
     * The name of the hierarchy group.
     */
    Name?: HierarchyGroupName;
  }
  export type HierarchyGroupSummaryList = HierarchyGroupSummary[];
  export interface HierarchyLevel {
    /**
     * The identifier of the hierarchy level.
     */
    Id?: HierarchyLevelId;
    /**
     * The Amazon Resource Name (ARN) of the hierarchy level.
     */
    Arn?: ARN;
    /**
     * The name of the hierarchy level.
     */
    Name?: HierarchyLevelName;
  }
  export type HierarchyLevelId = string;
  export type HierarchyLevelName = string;
  export interface HierarchyLevelUpdate {
    /**
     * The name of the user hierarchy level. Must not be more than 50 characters.
     */
    Name: HierarchyLevelName;
  }
  export interface HierarchyPath {
    /**
     * Information about level one.
     */
    LevelOne?: HierarchyGroupSummary;
    /**
     * Information about level two.
     */
    LevelTwo?: HierarchyGroupSummary;
    /**
     * Information about level three.
     */
    LevelThree?: HierarchyGroupSummary;
    /**
     * Information about level four.
     */
    LevelFour?: HierarchyGroupSummary;
    /**
     * Information about level five.
     */
    LevelFive?: HierarchyGroupSummary;
  }
  export interface HierarchyStructure {
    /**
     * Information about level one.
     */
    LevelOne?: HierarchyLevel;
    /**
     * Information about level two.
     */
    LevelTwo?: HierarchyLevel;
    /**
     * Information about level three.
     */
    LevelThree?: HierarchyLevel;
    /**
     * Information about level four.
     */
    LevelFour?: HierarchyLevel;
    /**
     * Information about level five.
     */
    LevelFive?: HierarchyLevel;
  }
  export interface HierarchyStructureUpdate {
    /**
     * The update for level one.
     */
    LevelOne?: HierarchyLevelUpdate;
    /**
     * The update for level two.
     */
    LevelTwo?: HierarchyLevelUpdate;
    /**
     * The update for level three.
     */
    LevelThree?: HierarchyLevelUpdate;
    /**
     * The update for level four.
     */
    LevelFour?: HierarchyLevelUpdate;
    /**
     * The update for level five.
     */
    LevelFive?: HierarchyLevelUpdate;
  }
  export interface HistoricalMetric {
    /**
     * The name of the metric.
     */
    Name?: HistoricalMetricName;
    /**
     * The threshold for the metric, used with service level metrics.
     */
    Threshold?: Threshold;
    /**
     * The statistic for the metric.
     */
    Statistic?: Statistic;
    /**
     * The unit for the metric.
     */
    Unit?: Unit;
  }
  export interface HistoricalMetricData {
    /**
     * Information about the metric.
     */
    Metric?: HistoricalMetric;
    /**
     * The value of the metric.
     */
    Value?: Value;
  }
  export type HistoricalMetricDataCollections = HistoricalMetricData[];
  export type HistoricalMetricName = "CONTACTS_QUEUED"|"CONTACTS_HANDLED"|"CONTACTS_ABANDONED"|"CONTACTS_CONSULTED"|"CONTACTS_AGENT_HUNG_UP_FIRST"|"CONTACTS_HANDLED_INCOMING"|"CONTACTS_HANDLED_OUTBOUND"|"CONTACTS_HOLD_ABANDONS"|"CONTACTS_TRANSFERRED_IN"|"CONTACTS_TRANSFERRED_OUT"|"CONTACTS_TRANSFERRED_IN_FROM_QUEUE"|"CONTACTS_TRANSFERRED_OUT_FROM_QUEUE"|"CONTACTS_MISSED"|"CALLBACK_CONTACTS_HANDLED"|"API_CONTACTS_HANDLED"|"OCCUPANCY"|"HANDLE_TIME"|"AFTER_CONTACT_WORK_TIME"|"QUEUED_TIME"|"ABANDON_TIME"|"QUEUE_ANSWER_TIME"|"HOLD_TIME"|"INTERACTION_TIME"|"INTERACTION_AND_HOLD_TIME"|"SERVICE_LEVEL"|string;
  export interface HistoricalMetricResult {
    /**
     * The dimension for the metrics.
     */
    Dimensions?: Dimensions;
    /**
     * The set of metrics.
     */
    Collections?: HistoricalMetricDataCollections;
  }
  export type HistoricalMetricResults = HistoricalMetricResult[];
  export type HistoricalMetrics = HistoricalMetric[];
  export type Hours = number;
  export type HoursOfOperationId = string;
  export type HoursOfOperationName = string;
  export interface HoursOfOperationSummary {
    /**
     * The identifier of the hours of operation.
     */
    Id?: HoursOfOperationId;
    /**
     * The Amazon Resource Name (ARN) of the hours of operation.
     */
    Arn?: ARN;
    /**
     * The name of the hours of operation.
     */
    Name?: HoursOfOperationName;
  }
  export type HoursOfOperationSummaryList = HoursOfOperationSummary[];
  export type InboundCallsEnabled = boolean;
  export interface Instance {
    /**
     * The identifier of the Amazon Connect instance.
     */
    Id?: InstanceId;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    Arn?: ARN;
    /**
     * The identity management type.
     */
    IdentityManagementType?: DirectoryType;
    /**
     * The alias of instance.
     */
    InstanceAlias?: DirectoryAlias;
    /**
     * When the instance was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The service role of the instance.
     */
    ServiceRole?: ARN;
    /**
     * The state of the instance.
     */
    InstanceStatus?: InstanceStatus;
    /**
     * Relevant details why the instance was not successfully created. 
     */
    StatusReason?: InstanceStatusReason;
    /**
     * Whether inbound calls are enabled.
     */
    InboundCallsEnabled?: InboundCallsEnabled;
    /**
     * Whether outbound calls are enabled.
     */
    OutboundCallsEnabled?: OutboundCallsEnabled;
  }
  export type InstanceAttributeType = "INBOUND_CALLS"|"OUTBOUND_CALLS"|"CONTACTFLOW_LOGS"|"CONTACT_LENS"|"AUTO_RESOLVE_BEST_VOICES"|"USE_CUSTOM_TTS_VOICES"|"EARLY_MEDIA"|string;
  export type InstanceAttributeValue = string;
  export type InstanceId = string;
  export type InstanceStatus = "CREATION_IN_PROGRESS"|"ACTIVE"|"CREATION_FAILED"|string;
  export interface InstanceStatusReason {
    /**
     * The message.
     */
    Message?: String;
  }
  export interface InstanceStorageConfig {
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId?: AssociationId;
    /**
     * A valid storage type.
     */
    StorageType: StorageType;
    /**
     * The S3 configuration.
     */
    S3Config?: S3Config;
    /**
     * The configuration of the Kinesis video stream.
     */
    KinesisVideoStreamConfig?: KinesisVideoStreamConfig;
    /**
     * The configuration of the Kinesis data stream.
     */
    KinesisStreamConfig?: KinesisStreamConfig;
    /**
     * The configuration of the Kinesis Firehose delivery stream.
     */
    KinesisFirehoseConfig?: KinesisFirehoseConfig;
  }
  export type InstanceStorageConfigs = InstanceStorageConfig[];
  export type InstanceStorageResourceType = "CHAT_TRANSCRIPTS"|"CALL_RECORDINGS"|"SCHEDULED_REPORTS"|"MEDIA_STREAMS"|"CONTACT_TRACE_RECORDS"|"AGENT_EVENTS"|string;
  export interface InstanceSummary {
    /**
     * The identifier of the instance.
     */
    Id?: InstanceId;
    /**
     * The Amazon Resource Name (ARN) of the instance.
     */
    Arn?: ARN;
    /**
     * The identity management type of the instance.
     */
    IdentityManagementType?: DirectoryType;
    /**
     * The alias of the instance.
     */
    InstanceAlias?: DirectoryAlias;
    /**
     * When the instance was created.
     */
    CreatedTime?: Timestamp;
    /**
     * The service role of the instance.
     */
    ServiceRole?: ARN;
    /**
     * The state of the instance.
     */
    InstanceStatus?: InstanceStatus;
    /**
     * Whether inbound calls are enabled.
     */
    InboundCallsEnabled?: InboundCallsEnabled;
    /**
     * Whether outbound calls are enabled.
     */
    OutboundCallsEnabled?: OutboundCallsEnabled;
  }
  export type InstanceSummaryList = InstanceSummary[];
  export type IntegrationAssociationId = string;
  export interface IntegrationAssociationSummary {
    /**
     * The identifier for the AppIntegration association.
     */
    IntegrationAssociationId?: IntegrationAssociationId;
    /**
     * The Amazon Resource Name (ARN) for the AppIntegration association.
     */
    IntegrationAssociationArn?: ARN;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId?: InstanceId;
    /**
     * The integration type.
     */
    IntegrationType?: IntegrationType;
    /**
     * The Amazon Resource Name (ARN) for the AppIntegration.
     */
    IntegrationArn?: ARN;
    /**
     * The URL for the external application.
     */
    SourceApplicationUrl?: URI;
    /**
     * The user-provided, friendly name for the external application.
     */
    SourceApplicationName?: SourceApplicationName;
    /**
     * The name of the source.
     */
    SourceType?: SourceType;
  }
  export type IntegrationAssociationSummaryList = IntegrationAssociationSummary[];
  export type IntegrationType = "EVENT"|string;
  export type KeyId = string;
  export interface KinesisFirehoseConfig {
    /**
     * The Amazon Resource Name (ARN) of the delivery stream.
     */
    FirehoseArn: ARN;
  }
  export interface KinesisStreamConfig {
    /**
     * The Amazon Resource Name (ARN) of the data stream.
     */
    StreamArn: ARN;
  }
  export interface KinesisVideoStreamConfig {
    /**
     * The prefix of the video stream.
     */
    Prefix: Prefix;
    /**
     * The number of hours data is retained in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream. The default value is 0, indicating that the stream does not persist data.
     */
    RetentionPeriodHours: Hours;
    /**
     * The encryption configuration.
     */
    EncryptionConfig: EncryptionConfig;
  }
  export interface LexBot {
    /**
     * The name of the Amazon Lex bot.
     */
    Name?: BotName;
    /**
     * The Region the Amazon Lex bot was created in.
     */
    LexRegion?: LexRegion;
  }
  export type LexBotsList = LexBot[];
  export type LexRegion = string;
  export interface ListApprovedOriginsRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult25;
  }
  export interface ListApprovedOriginsResponse {
    /**
     * The approved origins.
     */
    Origins?: OriginsList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListContactFlowsRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The type of contact flow.
     */
    ContactFlowTypes?: ContactFlowTypes;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListContactFlowsResponse {
    /**
     * Information about the contact flows.
     */
    ContactFlowSummaryList?: ContactFlowSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListHoursOfOperationsRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListHoursOfOperationsResponse {
    /**
     * Information about the hours of operation.
     */
    HoursOfOperationSummaryList?: HoursOfOperationSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListInstanceAttributesRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult7;
  }
  export interface ListInstanceAttributesResponse {
    /**
     * The attribute types.
     */
    Attributes?: AttributesList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListInstanceStorageConfigsRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * A valid resource type.
     */
    ResourceType: InstanceStorageResourceType;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult10;
  }
  export interface ListInstanceStorageConfigsResponse {
    /**
     * A valid storage type.
     */
    StorageConfigs?: InstanceStorageConfigs;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListInstancesRequest {
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult10;
  }
  export interface ListInstancesResponse {
    /**
     * Information about the instances.
     */
    InstanceSummaryList?: InstanceSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListIntegrationAssociationsRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult100;
  }
  export interface ListIntegrationAssociationsResponse {
    /**
     * The AppIntegration associations.
     */
    IntegrationAssociationSummaryList?: IntegrationAssociationSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListLambdaFunctionsRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult25;
  }
  export interface ListLambdaFunctionsResponse {
    /**
     * The Lambdafunction ARNs associated with the specified instance.
     */
    LambdaFunctions?: FunctionArnsList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListLexBotsRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult25;
  }
  export interface ListLexBotsResponse {
    /**
     * The the names and regions of the Amazon Lex bots associated with the specified instance.
     */
    LexBots?: LexBotsList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListPhoneNumbersRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The type of phone number.
     */
    PhoneNumberTypes?: PhoneNumberTypes;
    /**
     * The ISO country code.
     */
    PhoneNumberCountryCodes?: PhoneNumberCountryCodes;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListPhoneNumbersResponse {
    /**
     * Information about the phone numbers.
     */
    PhoneNumberSummaryList?: PhoneNumberSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListPromptsRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per page.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListPromptsResponse {
    /**
     * Information about the prompts.
     */
    PromptSummaryList?: PromptSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListQueuesRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The type of queue.
     */
    QueueTypes?: QueueTypes;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListQueuesResponse {
    /**
     * Information about the queues.
     */
    QueueSummaryList?: QueueSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListRoutingProfileQueuesRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult100;
  }
  export interface ListRoutingProfileQueuesResponse {
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
    /**
     * Information about the routing profiles.
     */
    RoutingProfileQueueConfigSummaryList?: RoutingProfileQueueConfigSummaryList;
  }
  export interface ListRoutingProfilesRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListRoutingProfilesResponse {
    /**
     * Information about the routing profiles.
     */
    RoutingProfileSummaryList?: RoutingProfileSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListSecurityKeysRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult2;
  }
  export interface ListSecurityKeysResponse {
    /**
     * The security keys.
     */
    SecurityKeys?: SecurityKeysList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListSecurityProfilesRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListSecurityProfilesResponse {
    /**
     * Information about the security profiles.
     */
    SecurityProfileSummaryList?: SecurityProfileSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: ARN;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Information about the tags.
     */
    tags?: TagMap;
  }
  export interface ListUseCasesRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier for the integration association.
     */
    IntegrationAssociationId: IntegrationAssociationId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult100;
  }
  export interface ListUseCasesResponse {
    /**
     * The use cases.
     */
    UseCaseSummaryList?: UseCaseSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListUserHierarchyGroupsRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListUserHierarchyGroupsResponse {
    /**
     * Information about the hierarchy groups.
     */
    UserHierarchyGroupSummaryList?: HierarchyGroupSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export interface ListUsersRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    NextToken?: NextToken;
    /**
     * The maximimum number of results to return per page.
     */
    MaxResults?: MaxResult1000;
  }
  export interface ListUsersResponse {
    /**
     * Information about the users.
     */
    UserSummaryList?: UserSummaryList;
    /**
     * If there are additional results, this is the token for the next set of results.
     */
    NextToken?: NextToken;
  }
  export type MaxResult10 = number;
  export type MaxResult100 = number;
  export type MaxResult1000 = number;
  export type MaxResult2 = number;
  export type MaxResult25 = number;
  export type MaxResult7 = number;
  export type MediaConcurrencies = MediaConcurrency[];
  export interface MediaConcurrency {
    /**
     * The channels that agents can handle in the Contact Control Panel (CCP).
     */
    Channel: Channel;
    /**
     * The number of contacts an agent can have on a channel simultaneously.
     */
    Concurrency: Concurrency;
  }
  export type Name = string;
  export type NextToken = string;
  export type Origin = string;
  export type OriginsList = Origin[];
  export type OutboundCallsEnabled = boolean;
  export type PEM = string;
  export interface ParticipantDetails {
    /**
     * Display name of the participant.
     */
    DisplayName: DisplayName;
  }
  export type ParticipantId = string;
  export type ParticipantToken = string;
  export type Password = string;
  export type PhoneNumber = string;
  export type PhoneNumberCountryCode = "AF"|"AL"|"DZ"|"AS"|"AD"|"AO"|"AI"|"AQ"|"AG"|"AR"|"AM"|"AW"|"AU"|"AT"|"AZ"|"BS"|"BH"|"BD"|"BB"|"BY"|"BE"|"BZ"|"BJ"|"BM"|"BT"|"BO"|"BA"|"BW"|"BR"|"IO"|"VG"|"BN"|"BG"|"BF"|"BI"|"KH"|"CM"|"CA"|"CV"|"KY"|"CF"|"TD"|"CL"|"CN"|"CX"|"CC"|"CO"|"KM"|"CK"|"CR"|"HR"|"CU"|"CW"|"CY"|"CZ"|"CD"|"DK"|"DJ"|"DM"|"DO"|"TL"|"EC"|"EG"|"SV"|"GQ"|"ER"|"EE"|"ET"|"FK"|"FO"|"FJ"|"FI"|"FR"|"PF"|"GA"|"GM"|"GE"|"DE"|"GH"|"GI"|"GR"|"GL"|"GD"|"GU"|"GT"|"GG"|"GN"|"GW"|"GY"|"HT"|"HN"|"HK"|"HU"|"IS"|"IN"|"ID"|"IR"|"IQ"|"IE"|"IM"|"IL"|"IT"|"CI"|"JM"|"JP"|"JE"|"JO"|"KZ"|"KE"|"KI"|"KW"|"KG"|"LA"|"LV"|"LB"|"LS"|"LR"|"LY"|"LI"|"LT"|"LU"|"MO"|"MK"|"MG"|"MW"|"MY"|"MV"|"ML"|"MT"|"MH"|"MR"|"MU"|"YT"|"MX"|"FM"|"MD"|"MC"|"MN"|"ME"|"MS"|"MA"|"MZ"|"MM"|"NA"|"NR"|"NP"|"NL"|"AN"|"NC"|"NZ"|"NI"|"NE"|"NG"|"NU"|"KP"|"MP"|"NO"|"OM"|"PK"|"PW"|"PA"|"PG"|"PY"|"PE"|"PH"|"PN"|"PL"|"PT"|"PR"|"QA"|"CG"|"RE"|"RO"|"RU"|"RW"|"BL"|"SH"|"KN"|"LC"|"MF"|"PM"|"VC"|"WS"|"SM"|"ST"|"SA"|"SN"|"RS"|"SC"|"SL"|"SG"|"SX"|"SK"|"SI"|"SB"|"SO"|"ZA"|"KR"|"ES"|"LK"|"SD"|"SR"|"SJ"|"SZ"|"SE"|"CH"|"SY"|"TW"|"TJ"|"TZ"|"TH"|"TG"|"TK"|"TO"|"TT"|"TN"|"TR"|"TM"|"TC"|"TV"|"VI"|"UG"|"UA"|"AE"|"GB"|"US"|"UY"|"UZ"|"VU"|"VA"|"VE"|"VN"|"WF"|"EH"|"YE"|"ZM"|"ZW"|string;
  export type PhoneNumberCountryCodes = PhoneNumberCountryCode[];
  export type PhoneNumberId = string;
  export interface PhoneNumberSummary {
    /**
     * The identifier of the phone number.
     */
    Id?: PhoneNumberId;
    /**
     * The Amazon Resource Name (ARN) of the phone number.
     */
    Arn?: ARN;
    /**
     * The phone number.
     */
    PhoneNumber?: PhoneNumber;
    /**
     * The type of phone number.
     */
    PhoneNumberType?: PhoneNumberType;
    /**
     * The ISO country code.
     */
    PhoneNumberCountryCode?: PhoneNumberCountryCode;
  }
  export type PhoneNumberSummaryList = PhoneNumberSummary[];
  export type PhoneNumberType = "TOLL_FREE"|"DID"|string;
  export type PhoneNumberTypes = PhoneNumberType[];
  export type PhoneType = "SOFT_PHONE"|"DESK_PHONE"|string;
  export type Prefix = string;
  export type Priority = number;
  export type PromptId = string;
  export type PromptName = string;
  export interface PromptSummary {
    /**
     * The identifier of the prompt.
     */
    Id?: PromptId;
    /**
     * The Amazon Resource Name (ARN) of the prompt.
     */
    Arn?: ARN;
    /**
     * The name of the prompt.
     */
    Name?: PromptName;
  }
  export type PromptSummaryList = PromptSummary[];
  export type QueueId = string;
  export type QueueName = string;
  export interface QueueReference {
    /**
     * The identifier of the queue.
     */
    Id?: QueueId;
    /**
     * The Amazon Resource Name (ARN) of the queue.
     */
    Arn?: ARN;
  }
  export interface QueueSummary {
    /**
     * The identifier of the queue.
     */
    Id?: QueueId;
    /**
     * The Amazon Resource Name (ARN) of the queue.
     */
    Arn?: ARN;
    /**
     * The name of the queue.
     */
    Name?: QueueName;
    /**
     * The type of queue.
     */
    QueueType?: QueueType;
  }
  export type QueueSummaryList = QueueSummary[];
  export type QueueType = "STANDARD"|"AGENT"|string;
  export type QueueTypes = QueueType[];
  export type Queues = QueueId[];
  export interface Reference {
    /**
     * A formatted URL that will be shown to an agent in the Contact Control Panel (CCP)
     */
    Value: ReferenceValue;
    /**
     * A valid URL.
     */
    Type: ReferenceType;
  }
  export type ReferenceKey = string;
  export type ReferenceType = "URL"|string;
  export type ReferenceValue = string;
  export interface ResumeContactRecordingRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact.
     */
    ContactId: ContactId;
    /**
     * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
     */
    InitialContactId: ContactId;
  }
  export interface ResumeContactRecordingResponse {
  }
  export interface RoutingProfile {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId?: InstanceId;
    /**
     * The name of the routing profile.
     */
    Name?: RoutingProfileName;
    /**
     * The Amazon Resource Name (ARN) of the routing profile.
     */
    RoutingProfileArn?: ARN;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId?: RoutingProfileId;
    /**
     * The description of the routing profile.
     */
    Description?: RoutingProfileDescription;
    /**
     * The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
     */
    MediaConcurrencies?: MediaConcurrencies;
    /**
     * The identifier of the default outbound queue for this routing profile.
     */
    DefaultOutboundQueueId?: QueueId;
    /**
     * One or more tags.
     */
    Tags?: TagMap;
  }
  export type RoutingProfileDescription = string;
  export type RoutingProfileId = string;
  export type RoutingProfileName = string;
  export interface RoutingProfileQueueConfig {
    /**
     * Contains information about a queue resource.
     */
    QueueReference: RoutingProfileQueueReference;
    /**
     * The order in which contacts are to be handled for the queue. For more information, see Queues: priority and delay.
     */
    Priority: Priority;
    /**
     * The delay, in seconds, a contact should be in the queue before they are routed to an available agent. For more information, see Queues: priority and delay in the Amazon Connect Administrator Guide.
     */
    Delay: Delay;
  }
  export type RoutingProfileQueueConfigList = RoutingProfileQueueConfig[];
  export interface RoutingProfileQueueConfigSummary {
    /**
     * The identifier of the queue.
     */
    QueueId: QueueId;
    /**
     * The Amazon Resource Name (ARN) of the queue.
     */
    QueueArn: ARN;
    /**
     * The name of the queue.
     */
    QueueName: QueueName;
    /**
     * The order in which contacts are to be handled for the queue. For more information, see Queues: priority and delay.
     */
    Priority: Priority;
    /**
     * The delay, in seconds, that a contact should be in the queue before they are routed to an available agent. For more information, see Queues: priority and delay in the Amazon Connect Administrator Guide.
     */
    Delay: Delay;
    /**
     * The channels this queue supports.
     */
    Channel: Channel;
  }
  export type RoutingProfileQueueConfigSummaryList = RoutingProfileQueueConfigSummary[];
  export interface RoutingProfileQueueReference {
    /**
     * The identifier of the queue.
     */
    QueueId: QueueId;
    /**
     * The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
     */
    Channel: Channel;
  }
  export type RoutingProfileQueueReferenceList = RoutingProfileQueueReference[];
  export interface RoutingProfileSummary {
    /**
     * The identifier of the routing profile.
     */
    Id?: RoutingProfileId;
    /**
     * The Amazon Resource Name (ARN) of the routing profile.
     */
    Arn?: ARN;
    /**
     * The name of the routing profile.
     */
    Name?: RoutingProfileName;
  }
  export type RoutingProfileSummaryList = RoutingProfileSummary[];
  export interface S3Config {
    /**
     * The S3 bucket name.
     */
    BucketName: BucketName;
    /**
     * The S3 bucket prefix.
     */
    BucketPrefix: Prefix;
    /**
     * The S3 encryption configuration.
     */
    EncryptionConfig?: EncryptionConfig;
  }
  export interface SecurityKey {
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId?: AssociationId;
    /**
     * The key of the security key.
     */
    Key?: PEM;
    /**
     * When the security key was created.
     */
    CreationTime?: timestamp;
  }
  export type SecurityKeysList = SecurityKey[];
  export type SecurityProfileId = string;
  export type SecurityProfileIds = SecurityProfileId[];
  export type SecurityProfileName = string;
  export interface SecurityProfileSummary {
    /**
     * The identifier of the security profile.
     */
    Id?: SecurityProfileId;
    /**
     * The Amazon Resource Name (ARN) of the security profile.
     */
    Arn?: ARN;
    /**
     * The name of the security profile.
     */
    Name?: SecurityProfileName;
  }
  export type SecurityProfileSummaryList = SecurityProfileSummary[];
  export type SecurityToken = string;
  export type SourceApplicationName = string;
  export type SourceType = "SALESFORCE"|"ZENDESK"|string;
  export interface StartChatContactRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact flow for initiating the chat. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to Routing, Contact Flows. Choose the contact flow. On the contact flow page, under the name of the contact flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx 
     */
    ContactFlowId: ContactFlowId;
    /**
     * A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes.  There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
     */
    Attributes?: Attributes;
    /**
     * Information identifying the participant.
     */
    ParticipantDetails: ParticipantDetails;
    /**
     * The initial message to be sent to the newly created chat.
     */
    InitialMessage?: ChatMessage;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    ClientToken?: ClientToken;
  }
  export interface StartChatContactResponse {
    /**
     * The identifier of this contact within the Amazon Connect instance. 
     */
    ContactId?: ContactId;
    /**
     * The identifier for a chat participant. The participantId for a chat participant is the same throughout the chat lifecycle.
     */
    ParticipantId?: ParticipantId;
    /**
     * The token used by the chat participant to call CreateParticipantConnection. The participant token is valid for the lifetime of a chat participant.
     */
    ParticipantToken?: ParticipantToken;
  }
  export interface StartContactRecordingRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact.
     */
    ContactId: ContactId;
    /**
     * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
     */
    InitialContactId: ContactId;
    /**
     * Who is being recorded.
     */
    VoiceRecordingConfiguration: VoiceRecordingConfiguration;
  }
  export interface StartContactRecordingResponse {
  }
  export interface StartOutboundVoiceContactRequest {
    /**
     * The phone number of the customer, in E.164 format.
     */
    DestinationPhoneNumber: PhoneNumber;
    /**
     * The identifier of the contact flow for the outbound call. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to Routing, Contact Flows. Choose the contact flow. On the contact flow page, under the name of the contact flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx 
     */
    ContactFlowId: ContactFlowId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned. If the contact is disconnected, a new contact is started.
     */
    ClientToken?: ClientToken;
    /**
     * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
     */
    SourcePhoneNumber?: PhoneNumber;
    /**
     * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.
     */
    QueueId?: QueueId;
    /**
     * A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes. There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
     */
    Attributes?: Attributes;
  }
  export interface StartOutboundVoiceContactResponse {
    /**
     * The identifier of this contact within the Amazon Connect instance.
     */
    ContactId?: ContactId;
  }
  export interface StartTaskContactRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the previous chat, voice, or task contact. 
     */
    PreviousContactId?: ContactId;
    /**
     * The identifier of the contact flow for initiating the tasks. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to Routing, Contact Flows. Choose the contact flow. On the contact flow page, under the name of the contact flow, choose Show additional flow information. The ContactFlowId is the last part of the ARN, shown here in bold:  arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/846ec553-a005-41c0-8341-xxxxxxxxxxxx 
     */
    ContactFlowId: ContactFlowId;
    /**
     * A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes. There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
     */
    Attributes?: Attributes;
    /**
     * The name of a task that is shown to an agent in the Contact Control Panel (CCP).
     */
    Name: Name;
    /**
     * A formatted URL that is shown to an agent in the Contact Control Panel (CCP).
     */
    References?: ContactReferences;
    /**
     * A description of the task that is shown to an agent in the Contact Control Panel (CCP).
     */
    Description?: Description;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    ClientToken?: ClientToken;
  }
  export interface StartTaskContactResponse {
    /**
     * The identifier of this contact within the Amazon Connect instance.
     */
    ContactId?: ContactId;
  }
  export type Statistic = "SUM"|"MAX"|"AVG"|string;
  export interface StopContactRecordingRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact.
     */
    ContactId: ContactId;
    /**
     * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
     */
    InitialContactId: ContactId;
  }
  export interface StopContactRecordingResponse {
  }
  export interface StopContactRequest {
    /**
     * The ID of the contact.
     */
    ContactId: ContactId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface StopContactResponse {
  }
  export type StorageType = "S3"|"KINESIS_VIDEO_STREAM"|"KINESIS_STREAM"|"KINESIS_FIREHOSE"|string;
  export type String = string;
  export interface SuspendContactRecordingRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact.
     */
    ContactId: ContactId;
    /**
     * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
     */
    InitialContactId: ContactId;
  }
  export interface SuspendContactRecordingResponse {
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagMap = {[key: string]: TagValue};
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: ARN;
    /**
     * One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    tags: TagMap;
  }
  export type TagValue = string;
  export interface Threshold {
    /**
     * The type of comparison. Only "less than" (LT) comparisons are supported.
     */
    Comparison?: Comparison;
    /**
     * The threshold value to compare.
     */
    ThresholdValue?: ThresholdValue;
  }
  export type ThresholdValue = number;
  export type Timestamp = Date;
  export type URI = string;
  export type Unit = "SECONDS"|"COUNT"|"PERCENT"|string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    resourceArn: ARN;
    /**
     * The tag keys.
     */
    tagKeys: TagKeyList;
  }
  export interface UpdateContactAttributesRequest {
    /**
     * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
     */
    InitialContactId: ContactId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The Amazon Connect attributes. These attributes can be accessed in contact flows just like any other contact attributes. You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys can include only alphanumeric, dash, and underscore characters.
     */
    Attributes: Attributes;
  }
  export interface UpdateContactAttributesResponse {
  }
  export interface UpdateContactFlowContentRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact flow.
     */
    ContactFlowId: ContactFlowId;
    /**
     * The JSON string that represents contact flow’s content. For an example, see Example contact flow in Amazon Connect Flow language in the Amazon Connect Administrator Guide. 
     */
    Content: ContactFlowContent;
  }
  export interface UpdateContactFlowNameRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the contact flow.
     */
    ContactFlowId: ContactFlowId;
    /**
     * The name of the contact flow.
     */
    Name?: ContactFlowName;
    /**
     * The description of the contact flow.
     */
    Description?: ContactFlowDescription;
  }
  export interface UpdateInstanceAttributeRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The type of attribute.
     */
    AttributeType: InstanceAttributeType;
    /**
     * The value for the attribute. Maximum character limit is 100. 
     */
    Value: InstanceAttributeValue;
  }
  export interface UpdateInstanceStorageConfigRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.
     */
    AssociationId: AssociationId;
    /**
     * A valid resource type.
     */
    ResourceType: InstanceStorageResourceType;
    StorageConfig: InstanceStorageConfig;
  }
  export interface UpdateRoutingProfileConcurrencyRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The channels agents can handle in the Contact Control Panel (CCP).
     */
    MediaConcurrencies: MediaConcurrencies;
  }
  export interface UpdateRoutingProfileDefaultOutboundQueueRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The identifier for the default outbound queue.
     */
    DefaultOutboundQueueId: QueueId;
  }
  export interface UpdateRoutingProfileNameRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The name of the routing profile. Must not be more than 127 characters.
     */
    Name?: RoutingProfileName;
    /**
     * The description of the routing profile. Must not be more than 250 characters.
     */
    Description?: RoutingProfileDescription;
  }
  export interface UpdateRoutingProfileQueuesRequest {
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
    /**
     * The identifier of the routing profile.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The queues to be updated for this routing profile. Queues must first be associated to the routing profile. You can do this using AssociateRoutingProfileQueues.
     */
    QueueConfigs: RoutingProfileQueueConfigList;
  }
  export interface UpdateUserHierarchyGroupNameRequest {
    /**
     * The name of the hierarchy group. Must not be more than 100 characters.
     */
    Name: HierarchyGroupName;
    /**
     * The identifier of the hierarchy group.
     */
    HierarchyGroupId: HierarchyGroupId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserHierarchyRequest {
    /**
     * The identifier of the hierarchy group.
     */
    HierarchyGroupId?: HierarchyGroupId;
    /**
     * The identifier of the user account.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserHierarchyStructureRequest {
    /**
     * The hierarchy levels to update.
     */
    HierarchyStructure: HierarchyStructureUpdate;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserIdentityInfoRequest {
    /**
     * The identity information for the user.
     */
    IdentityInfo: UserIdentityInfo;
    /**
     * The identifier of the user account.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserPhoneConfigRequest {
    /**
     * Information about phone configuration settings for the user.
     */
    PhoneConfig: UserPhoneConfig;
    /**
     * The identifier of the user account.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserRoutingProfileRequest {
    /**
     * The identifier of the routing profile for the user.
     */
    RoutingProfileId: RoutingProfileId;
    /**
     * The identifier of the user account.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface UpdateUserSecurityProfilesRequest {
    /**
     * The identifiers of the security profiles for the user.
     */
    SecurityProfileIds: SecurityProfileIds;
    /**
     * The identifier of the user account.
     */
    UserId: UserId;
    /**
     * The identifier of the Amazon Connect instance.
     */
    InstanceId: InstanceId;
  }
  export interface UseCase {
    /**
     * The identifier for the use case.
     */
    UseCaseId?: UseCaseId;
    /**
     * The Amazon Resource Name (ARN) for the use case.
     */
    UseCaseArn?: ARN;
    /**
     * The type of use case to associate to the AppIntegration association. Each AppIntegration association can have only one of each use case type.
     */
    UseCaseType?: UseCaseType;
  }
  export type UseCaseId = string;
  export type UseCaseSummaryList = UseCase[];
  export type UseCaseType = "RULES_EVALUATION"|string;
  export interface User {
    /**
     * The identifier of the user account.
     */
    Id?: UserId;
    /**
     * The Amazon Resource Name (ARN) of the user account.
     */
    Arn?: ARN;
    /**
     * The user name assigned to the user account.
     */
    Username?: AgentUsername;
    /**
     * Information about the user identity.
     */
    IdentityInfo?: UserIdentityInfo;
    /**
     * Information about the phone configuration for the user.
     */
    PhoneConfig?: UserPhoneConfig;
    /**
     * The identifier of the user account in the directory used for identity management.
     */
    DirectoryUserId?: DirectoryUserId;
    /**
     * The identifiers of the security profiles for the user.
     */
    SecurityProfileIds?: SecurityProfileIds;
    /**
     * The identifier of the routing profile for the user.
     */
    RoutingProfileId?: RoutingProfileId;
    /**
     * The identifier of the hierarchy group for the user.
     */
    HierarchyGroupId?: HierarchyGroupId;
    /**
     * The tags.
     */
    Tags?: TagMap;
  }
  export type UserId = string;
  export interface UserIdentityInfo {
    /**
     * The first name. This is required if you are using Amazon Connect or SAML for identity management.
     */
    FirstName?: AgentFirstName;
    /**
     * The last name. This is required if you are using Amazon Connect or SAML for identity management.
     */
    LastName?: AgentLastName;
    /**
     * The email address. If you are using SAML for identity management and include this parameter, an error is returned.
     */
    Email?: Email;
  }
  export interface UserPhoneConfig {
    /**
     * The phone type.
     */
    PhoneType: PhoneType;
    /**
     * The Auto accept setting.
     */
    AutoAccept?: AutoAccept;
    /**
     * The After Call Work (ACW) timeout setting, in seconds.
     */
    AfterContactWorkTimeLimit?: AfterContactWorkTimeLimit;
    /**
     * The phone number for the user's desk phone.
     */
    DeskPhoneNumber?: PhoneNumber;
  }
  export interface UserSummary {
    /**
     * The identifier of the user account.
     */
    Id?: UserId;
    /**
     * The Amazon Resource Name (ARN) of the user account.
     */
    Arn?: ARN;
    /**
     * The Amazon Connect user name of the user account.
     */
    Username?: AgentUsername;
  }
  export type UserSummaryList = UserSummary[];
  export type Value = number;
  export interface VoiceRecordingConfiguration {
    /**
     * Identifies which track is being recorded.
     */
    VoiceRecordingTrack?: VoiceRecordingTrack;
  }
  export type VoiceRecordingTrack = "FROM_AGENT"|"TO_AGENT"|"ALL"|string;
  export type timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-08-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Connect client.
   */
  export import Types = Connect;
}
export = Connect;
