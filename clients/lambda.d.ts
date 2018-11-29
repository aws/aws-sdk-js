import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
import {Readable} from 'stream';
interface Blob {}
declare class Lambda extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Lambda.Types.ClientConfiguration)
  config: Config & Lambda.Types.ClientConfiguration;
  /**
   * Adds permissions to the resource-based policy of a version of a function layer. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all AWS accounts, or all accounts in an organization. To revoke permission, call RemoveLayerVersionPermission with the statement ID that you specified when you added it.
   */
  addLayerVersionPermission(params: Lambda.Types.AddLayerVersionPermissionRequest, callback?: (err: AWSError, data: Lambda.Types.AddLayerVersionPermissionResponse) => void): Request<Lambda.Types.AddLayerVersionPermissionResponse, AWSError>;
  /**
   * Adds permissions to the resource-based policy of a version of a function layer. Use this action to grant layer usage permission to other accounts. You can grant permission to a single account, all AWS accounts, or all accounts in an organization. To revoke permission, call RemoveLayerVersionPermission with the statement ID that you specified when you added it.
   */
  addLayerVersionPermission(callback?: (err: AWSError, data: Lambda.Types.AddLayerVersionPermissionResponse) => void): Request<Lambda.Types.AddLayerVersionPermissionResponse, AWSError>;
  /**
   * Adds a permission to the resource policy associated with the specified AWS Lambda function. You use resource policies to grant permissions to event sources that use the push model. In a push model, event sources (such as Amazon S3 and custom applications) invoke your Lambda function. Each permission you add to the resource policy allows an event source permission to invoke the Lambda function.  Permissions apply to the Amazon Resource Name (ARN) used to invoke the function, which can be unqualified (the unpublished version of the function), or include a version or alias. If a client uses a version or alias to invoke a function, use the Qualifier parameter to apply permissions to that ARN. For more information about versioning, see AWS Lambda Function Versioning and Aliases.  This operation requires permission for the lambda:AddPermission action.
   */
  addPermission(params: Lambda.Types.AddPermissionRequest, callback?: (err: AWSError, data: Lambda.Types.AddPermissionResponse) => void): Request<Lambda.Types.AddPermissionResponse, AWSError>;
  /**
   * Adds a permission to the resource policy associated with the specified AWS Lambda function. You use resource policies to grant permissions to event sources that use the push model. In a push model, event sources (such as Amazon S3 and custom applications) invoke your Lambda function. Each permission you add to the resource policy allows an event source permission to invoke the Lambda function.  Permissions apply to the Amazon Resource Name (ARN) used to invoke the function, which can be unqualified (the unpublished version of the function), or include a version or alias. If a client uses a version or alias to invoke a function, use the Qualifier parameter to apply permissions to that ARN. For more information about versioning, see AWS Lambda Function Versioning and Aliases.  This operation requires permission for the lambda:AddPermission action.
   */
  addPermission(callback?: (err: AWSError, data: Lambda.Types.AddPermissionResponse) => void): Request<Lambda.Types.AddPermissionResponse, AWSError>;
  /**
   * Creates an alias that points to the specified Lambda function version. For more information, see Introduction to AWS Lambda Aliases. Alias names are unique for a given function. This requires permission for the lambda:CreateAlias action.
   */
  createAlias(params: Lambda.Types.CreateAliasRequest, callback?: (err: AWSError, data: Lambda.Types.AliasConfiguration) => void): Request<Lambda.Types.AliasConfiguration, AWSError>;
  /**
   * Creates an alias that points to the specified Lambda function version. For more information, see Introduction to AWS Lambda Aliases. Alias names are unique for a given function. This requires permission for the lambda:CreateAlias action.
   */
  createAlias(callback?: (err: AWSError, data: Lambda.Types.AliasConfiguration) => void): Request<Lambda.Types.AliasConfiguration, AWSError>;
  /**
   * Creates a mapping between an event source and an AWS Lambda function. Lambda reads items from the event source and triggers the function. For details about each event source type, see the following topics.    Using AWS Lambda with Amazon Kinesis     Using AWS Lambda with Amazon SQS     Using AWS Lambda with Amazon DynamoDB   
   */
  createEventSourceMapping(params: Lambda.Types.CreateEventSourceMappingRequest, callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Creates a mapping between an event source and an AWS Lambda function. Lambda reads items from the event source and triggers the function. For details about each event source type, see the following topics.    Using AWS Lambda with Amazon Kinesis     Using AWS Lambda with Amazon SQS     Using AWS Lambda with Amazon DynamoDB   
   */
  createEventSourceMapping(callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Creates a new Lambda function. The function configuration is created from the request parameters, and the code for the function is provided by a .zip file. The function name is case-sensitive. This operation requires permission for the lambda:CreateFunction action.
   */
  createFunction(params: Lambda.Types.CreateFunctionRequest, callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Creates a new Lambda function. The function configuration is created from the request parameters, and the code for the function is provided by a .zip file. The function name is case-sensitive. This operation requires permission for the lambda:CreateFunction action.
   */
  createFunction(callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Deletes the specified Lambda function alias. For more information, see Introduction to AWS Lambda Aliases. This requires permission for the lambda:DeleteAlias action.
   */
  deleteAlias(params: Lambda.Types.DeleteAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Lambda function alias. For more information, see Introduction to AWS Lambda Aliases. This requires permission for the lambda:DeleteAlias action.
   */
  deleteAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an event source mapping.
   */
  deleteEventSourceMapping(params: Lambda.Types.DeleteEventSourceMappingRequest, callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Deletes an event source mapping.
   */
  deleteEventSourceMapping(callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Deletes a Lambda function. To delete a specific function version, use the Qualifier parameter. Otherwise, all versions and aliases are deleted. Event source mappings are not deleted. This operation requires permission for the lambda:DeleteFunction action.
   */
  deleteFunction(params: Lambda.Types.DeleteFunctionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Lambda function. To delete a specific function version, use the Qualifier parameter. Otherwise, all versions and aliases are deleted. Event source mappings are not deleted. This operation requires permission for the lambda:DeleteFunction action.
   */
  deleteFunction(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes concurrent execution limits from this function. For more information, see Managing Concurrency.
   */
  deleteFunctionConcurrency(params: Lambda.Types.DeleteFunctionConcurrencyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes concurrent execution limits from this function. For more information, see Managing Concurrency.
   */
  deleteFunctionConcurrency(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a version of a function layer. Deleted versions can no longer be viewed or added to functions. However, a copy of the version remains in Lambda until no functions refer to it.
   */
  deleteLayerVersion(params: Lambda.Types.DeleteLayerVersionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a version of a function layer. Deleted versions can no longer be viewed or added to functions. However, a copy of the version remains in Lambda until no functions refer to it.
   */
  deleteLayerVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves details about your account's limits and usage in a region.
   */
  getAccountSettings(params: Lambda.Types.GetAccountSettingsRequest, callback?: (err: AWSError, data: Lambda.Types.GetAccountSettingsResponse) => void): Request<Lambda.Types.GetAccountSettingsResponse, AWSError>;
  /**
   * Retrieves details about your account's limits and usage in a region.
   */
  getAccountSettings(callback?: (err: AWSError, data: Lambda.Types.GetAccountSettingsResponse) => void): Request<Lambda.Types.GetAccountSettingsResponse, AWSError>;
  /**
   * Returns the specified alias information such as the alias ARN, description, and function version it is pointing to. For more information, see Introduction to AWS Lambda Aliases. This requires permission for the lambda:GetAlias action.
   */
  getAlias(params: Lambda.Types.GetAliasRequest, callback?: (err: AWSError, data: Lambda.Types.AliasConfiguration) => void): Request<Lambda.Types.AliasConfiguration, AWSError>;
  /**
   * Returns the specified alias information such as the alias ARN, description, and function version it is pointing to. For more information, see Introduction to AWS Lambda Aliases. This requires permission for the lambda:GetAlias action.
   */
  getAlias(callback?: (err: AWSError, data: Lambda.Types.AliasConfiguration) => void): Request<Lambda.Types.AliasConfiguration, AWSError>;
  /**
   * Returns details about an event source mapping.
   */
  getEventSourceMapping(params: Lambda.Types.GetEventSourceMappingRequest, callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Returns details about an event source mapping.
   */
  getEventSourceMapping(callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Returns the configuration information of the Lambda function and a presigned URL link to the .zip file you uploaded with CreateFunction so you can download the .zip file. Note that the URL is valid for up to 10 minutes. The configuration information is the same information you provided as parameters when uploading the function. Use the Qualifier parameter to retrieve a published version of the function. Otherwise, returns the unpublished version ($LATEST). For more information, see AWS Lambda Function Versioning and Aliases. This operation requires permission for the lambda:GetFunction action.
   */
  getFunction(params: Lambda.Types.GetFunctionRequest, callback?: (err: AWSError, data: Lambda.Types.GetFunctionResponse) => void): Request<Lambda.Types.GetFunctionResponse, AWSError>;
  /**
   * Returns the configuration information of the Lambda function and a presigned URL link to the .zip file you uploaded with CreateFunction so you can download the .zip file. Note that the URL is valid for up to 10 minutes. The configuration information is the same information you provided as parameters when uploading the function. Use the Qualifier parameter to retrieve a published version of the function. Otherwise, returns the unpublished version ($LATEST). For more information, see AWS Lambda Function Versioning and Aliases. This operation requires permission for the lambda:GetFunction action.
   */
  getFunction(callback?: (err: AWSError, data: Lambda.Types.GetFunctionResponse) => void): Request<Lambda.Types.GetFunctionResponse, AWSError>;
  /**
   * Returns the configuration information of the Lambda function. This the same information you provided as parameters when uploading the function by using CreateFunction. If you are using the versioning feature, you can retrieve this information for a specific function version by using the optional Qualifier parameter and specifying the function version or alias that points to it. If you don't provide it, the API returns information about the $LATEST version of the function. For more information about versioning, see AWS Lambda Function Versioning and Aliases. This operation requires permission for the lambda:GetFunctionConfiguration operation.
   */
  getFunctionConfiguration(params: Lambda.Types.GetFunctionConfigurationRequest, callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Returns the configuration information of the Lambda function. This the same information you provided as parameters when uploading the function by using CreateFunction. If you are using the versioning feature, you can retrieve this information for a specific function version by using the optional Qualifier parameter and specifying the function version or alias that points to it. If you don't provide it, the API returns information about the $LATEST version of the function. For more information about versioning, see AWS Lambda Function Versioning and Aliases. This operation requires permission for the lambda:GetFunctionConfiguration operation.
   */
  getFunctionConfiguration(callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Returns information about a version of a function layer, with a link to download the layer archive that's valid for 10 minutes.
   */
  getLayerVersion(params: Lambda.Types.GetLayerVersionRequest, callback?: (err: AWSError, data: Lambda.Types.GetLayerVersionResponse) => void): Request<Lambda.Types.GetLayerVersionResponse, AWSError>;
  /**
   * Returns information about a version of a function layer, with a link to download the layer archive that's valid for 10 minutes.
   */
  getLayerVersion(callback?: (err: AWSError, data: Lambda.Types.GetLayerVersionResponse) => void): Request<Lambda.Types.GetLayerVersionResponse, AWSError>;
  /**
   * Returns the permission policy for a layer version. For more information, see AddLayerVersionPermission.
   */
  getLayerVersionPolicy(params: Lambda.Types.GetLayerVersionPolicyRequest, callback?: (err: AWSError, data: Lambda.Types.GetLayerVersionPolicyResponse) => void): Request<Lambda.Types.GetLayerVersionPolicyResponse, AWSError>;
  /**
   * Returns the permission policy for a layer version. For more information, see AddLayerVersionPermission.
   */
  getLayerVersionPolicy(callback?: (err: AWSError, data: Lambda.Types.GetLayerVersionPolicyResponse) => void): Request<Lambda.Types.GetLayerVersionPolicyResponse, AWSError>;
  /**
   * Returns the resource policy associated with the specified Lambda function. This action requires permission for the lambda:GetPolicy action. 
   */
  getPolicy(params: Lambda.Types.GetPolicyRequest, callback?: (err: AWSError, data: Lambda.Types.GetPolicyResponse) => void): Request<Lambda.Types.GetPolicyResponse, AWSError>;
  /**
   * Returns the resource policy associated with the specified Lambda function. This action requires permission for the lambda:GetPolicy action. 
   */
  getPolicy(callback?: (err: AWSError, data: Lambda.Types.GetPolicyResponse) => void): Request<Lambda.Types.GetPolicyResponse, AWSError>;
  /**
   * Invokes a Lambda function. For an example, see Create the Lambda Function and Test It Manually.  Specify just a function name to invoke the latest version of the function. To invoke a published version, use the Qualifier parameter to specify a version or alias. If you use the RequestResponse (synchronous) invocation option, the function will be invoked only once. If you use the Event (asynchronous) invocation option, the function will be invoked at least once in response to an event and the function must be idempotent to handle this. For functions with a long timeout, your client may be disconnected during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings. This operation requires permission for the lambda:InvokeFunction action. The TooManyRequestsException noted below will return the following: ConcurrentInvocationLimitExceeded will be returned if you have no functions with reserved concurrency and have exceeded your account concurrent limit or if a function without reserved concurrency exceeds the account's unreserved concurrency limit. ReservedFunctionConcurrentInvocationLimitExceeded will be returned when a function with reserved concurrency exceeds its configured concurrency limit. 
   */
  invoke(params: Lambda.Types.InvocationRequest, callback?: (err: AWSError, data: Lambda.Types.InvocationResponse) => void): Request<Lambda.Types.InvocationResponse, AWSError>;
  /**
   * Invokes a Lambda function. For an example, see Create the Lambda Function and Test It Manually.  Specify just a function name to invoke the latest version of the function. To invoke a published version, use the Qualifier parameter to specify a version or alias. If you use the RequestResponse (synchronous) invocation option, the function will be invoked only once. If you use the Event (asynchronous) invocation option, the function will be invoked at least once in response to an event and the function must be idempotent to handle this. For functions with a long timeout, your client may be disconnected during synchronous invocation while it waits for a response. Configure your HTTP client, SDK, firewall, proxy, or operating system to allow for long connections with timeout or keep-alive settings. This operation requires permission for the lambda:InvokeFunction action. The TooManyRequestsException noted below will return the following: ConcurrentInvocationLimitExceeded will be returned if you have no functions with reserved concurrency and have exceeded your account concurrent limit or if a function without reserved concurrency exceeds the account's unreserved concurrency limit. ReservedFunctionConcurrentInvocationLimitExceeded will be returned when a function with reserved concurrency exceeds its configured concurrency limit. 
   */
  invoke(callback?: (err: AWSError, data: Lambda.Types.InvocationResponse) => void): Request<Lambda.Types.InvocationResponse, AWSError>;
  /**
   *  For asynchronous function invocation, use Invoke.  Submits an invocation request to AWS Lambda. Upon receiving the request, Lambda executes the specified function asynchronously. To see the logs generated by the Lambda function execution, see the CloudWatch Logs console. This operation requires permission for the lambda:InvokeFunction action.
   */
  invokeAsync(params: Lambda.Types.InvokeAsyncRequest, callback?: (err: AWSError, data: Lambda.Types.InvokeAsyncResponse) => void): Request<Lambda.Types.InvokeAsyncResponse, AWSError>;
  /**
   *  For asynchronous function invocation, use Invoke.  Submits an invocation request to AWS Lambda. Upon receiving the request, Lambda executes the specified function asynchronously. To see the logs generated by the Lambda function execution, see the CloudWatch Logs console. This operation requires permission for the lambda:InvokeFunction action.
   */
  invokeAsync(callback?: (err: AWSError, data: Lambda.Types.InvokeAsyncResponse) => void): Request<Lambda.Types.InvokeAsyncResponse, AWSError>;
  /**
   * Returns list of aliases created for a Lambda function. For each alias, the response includes information such as the alias ARN, description, alias name, and the function version to which it points. For more information, see Introduction to AWS Lambda Aliases. This requires permission for the lambda:ListAliases action.
   */
  listAliases(params: Lambda.Types.ListAliasesRequest, callback?: (err: AWSError, data: Lambda.Types.ListAliasesResponse) => void): Request<Lambda.Types.ListAliasesResponse, AWSError>;
  /**
   * Returns list of aliases created for a Lambda function. For each alias, the response includes information such as the alias ARN, description, alias name, and the function version to which it points. For more information, see Introduction to AWS Lambda Aliases. This requires permission for the lambda:ListAliases action.
   */
  listAliases(callback?: (err: AWSError, data: Lambda.Types.ListAliasesResponse) => void): Request<Lambda.Types.ListAliasesResponse, AWSError>;
  /**
   * Lists event source mappings. Specify an EventSourceArn to only show event source mappings for a single event source.
   */
  listEventSourceMappings(params: Lambda.Types.ListEventSourceMappingsRequest, callback?: (err: AWSError, data: Lambda.Types.ListEventSourceMappingsResponse) => void): Request<Lambda.Types.ListEventSourceMappingsResponse, AWSError>;
  /**
   * Lists event source mappings. Specify an EventSourceArn to only show event source mappings for a single event source.
   */
  listEventSourceMappings(callback?: (err: AWSError, data: Lambda.Types.ListEventSourceMappingsResponse) => void): Request<Lambda.Types.ListEventSourceMappingsResponse, AWSError>;
  /**
   * Returns a list of your Lambda functions. For each function, the response includes the function configuration information. You must use GetFunction to retrieve the code for your function. This operation requires permission for the lambda:ListFunctions action. If you are using the versioning feature, you can list all of your functions or only $LATEST versions. For information about the versioning feature, see AWS Lambda Function Versioning and Aliases. 
   */
  listFunctions(params: Lambda.Types.ListFunctionsRequest, callback?: (err: AWSError, data: Lambda.Types.ListFunctionsResponse) => void): Request<Lambda.Types.ListFunctionsResponse, AWSError>;
  /**
   * Returns a list of your Lambda functions. For each function, the response includes the function configuration information. You must use GetFunction to retrieve the code for your function. This operation requires permission for the lambda:ListFunctions action. If you are using the versioning feature, you can list all of your functions or only $LATEST versions. For information about the versioning feature, see AWS Lambda Function Versioning and Aliases. 
   */
  listFunctions(callback?: (err: AWSError, data: Lambda.Types.ListFunctionsResponse) => void): Request<Lambda.Types.ListFunctionsResponse, AWSError>;
  /**
   * Lists the versions of a function layer. Versions that have been deleted aren't listed. Specify a runtime identifier to list only versions that indicate that they're compatible with that runtime.
   */
  listLayerVersions(params: Lambda.Types.ListLayerVersionsRequest, callback?: (err: AWSError, data: Lambda.Types.ListLayerVersionsResponse) => void): Request<Lambda.Types.ListLayerVersionsResponse, AWSError>;
  /**
   * Lists the versions of a function layer. Versions that have been deleted aren't listed. Specify a runtime identifier to list only versions that indicate that they're compatible with that runtime.
   */
  listLayerVersions(callback?: (err: AWSError, data: Lambda.Types.ListLayerVersionsResponse) => void): Request<Lambda.Types.ListLayerVersionsResponse, AWSError>;
  /**
   * Lists function layers and shows information about the latest version of each. Specify a runtime identifier to list only layers that indicate that they're compatible with that runtime.
   */
  listLayers(params: Lambda.Types.ListLayersRequest, callback?: (err: AWSError, data: Lambda.Types.ListLayersResponse) => void): Request<Lambda.Types.ListLayersResponse, AWSError>;
  /**
   * Lists function layers and shows information about the latest version of each. Specify a runtime identifier to list only layers that indicate that they're compatible with that runtime.
   */
  listLayers(callback?: (err: AWSError, data: Lambda.Types.ListLayersResponse) => void): Request<Lambda.Types.ListLayersResponse, AWSError>;
  /**
   * Returns a list of tags assigned to a function when supplied the function ARN (Amazon Resource Name). For more information on Tagging, see Tagging Lambda Functions in the AWS Lambda Developer Guide.
   */
  listTags(params: Lambda.Types.ListTagsRequest, callback?: (err: AWSError, data: Lambda.Types.ListTagsResponse) => void): Request<Lambda.Types.ListTagsResponse, AWSError>;
  /**
   * Returns a list of tags assigned to a function when supplied the function ARN (Amazon Resource Name). For more information on Tagging, see Tagging Lambda Functions in the AWS Lambda Developer Guide.
   */
  listTags(callback?: (err: AWSError, data: Lambda.Types.ListTagsResponse) => void): Request<Lambda.Types.ListTagsResponse, AWSError>;
  /**
   * Lists all versions of a function. For information about versioning, see AWS Lambda Function Versioning and Aliases. 
   */
  listVersionsByFunction(params: Lambda.Types.ListVersionsByFunctionRequest, callback?: (err: AWSError, data: Lambda.Types.ListVersionsByFunctionResponse) => void): Request<Lambda.Types.ListVersionsByFunctionResponse, AWSError>;
  /**
   * Lists all versions of a function. For information about versioning, see AWS Lambda Function Versioning and Aliases. 
   */
  listVersionsByFunction(callback?: (err: AWSError, data: Lambda.Types.ListVersionsByFunctionResponse) => void): Request<Lambda.Types.ListVersionsByFunctionResponse, AWSError>;
  /**
   * Creates a function layer from a ZIP archive. Each time you call PublishLayerVersion with the same version name, a new version is created. Add layers to your function with CreateFunction or UpdateFunctionConfiguration.
   */
  publishLayerVersion(params: Lambda.Types.PublishLayerVersionRequest, callback?: (err: AWSError, data: Lambda.Types.PublishLayerVersionResponse) => void): Request<Lambda.Types.PublishLayerVersionResponse, AWSError>;
  /**
   * Creates a function layer from a ZIP archive. Each time you call PublishLayerVersion with the same version name, a new version is created. Add layers to your function with CreateFunction or UpdateFunctionConfiguration.
   */
  publishLayerVersion(callback?: (err: AWSError, data: Lambda.Types.PublishLayerVersionResponse) => void): Request<Lambda.Types.PublishLayerVersionResponse, AWSError>;
  /**
   * Publishes a version of your function from the current snapshot of $LATEST. That is, AWS Lambda takes a snapshot of the function code and configuration information from $LATEST and publishes a new version. The code and configuration cannot be modified after publication. For information about the versioning feature, see AWS Lambda Function Versioning and Aliases. 
   */
  publishVersion(params: Lambda.Types.PublishVersionRequest, callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Publishes a version of your function from the current snapshot of $LATEST. That is, AWS Lambda takes a snapshot of the function code and configuration information from $LATEST and publishes a new version. The code and configuration cannot be modified after publication. For information about the versioning feature, see AWS Lambda Function Versioning and Aliases. 
   */
  publishVersion(callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Sets a limit on the number of concurrent executions available to this function. It is a subset of your account's total concurrent execution limit per region. Note that Lambda automatically reserves a buffer of 100 concurrent executions for functions without any reserved concurrency limit. This means if your account limit is 1000, you have a total of 900 available to allocate to individual functions. For more information, see Managing Concurrency.
   */
  putFunctionConcurrency(params: Lambda.Types.PutFunctionConcurrencyRequest, callback?: (err: AWSError, data: Lambda.Types.Concurrency) => void): Request<Lambda.Types.Concurrency, AWSError>;
  /**
   * Sets a limit on the number of concurrent executions available to this function. It is a subset of your account's total concurrent execution limit per region. Note that Lambda automatically reserves a buffer of 100 concurrent executions for functions without any reserved concurrency limit. This means if your account limit is 1000, you have a total of 900 available to allocate to individual functions. For more information, see Managing Concurrency.
   */
  putFunctionConcurrency(callback?: (err: AWSError, data: Lambda.Types.Concurrency) => void): Request<Lambda.Types.Concurrency, AWSError>;
  /**
   * Removes a statement from the permissions policy for a layer version. For more information, see AddLayerVersionPermission.
   */
  removeLayerVersionPermission(params: Lambda.Types.RemoveLayerVersionPermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes a statement from the permissions policy for a layer version. For more information, see AddLayerVersionPermission.
   */
  removeLayerVersionPermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes permissions from a function. You can remove individual permissions from an resource policy associated with a Lambda function by providing a statement ID that you provided when you added the permission. When you remove permissions, disable the event source mapping or trigger configuration first to avoid errors. Permissions apply to the Amazon Resource Name (ARN) used to invoke the function, which can be unqualified (the unpublished version of the function), or include a version or alias. If a client uses a version or alias to invoke a function, use the Qualifier parameter to apply permissions to that ARN. For more information about versioning, see AWS Lambda Function Versioning and Aliases.  You need permission for the lambda:RemovePermission action.
   */
  removePermission(params: Lambda.Types.RemovePermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes permissions from a function. You can remove individual permissions from an resource policy associated with a Lambda function by providing a statement ID that you provided when you added the permission. When you remove permissions, disable the event source mapping or trigger configuration first to avoid errors. Permissions apply to the Amazon Resource Name (ARN) used to invoke the function, which can be unqualified (the unpublished version of the function), or include a version or alias. If a client uses a version or alias to invoke a function, use the Qualifier parameter to apply permissions to that ARN. For more information about versioning, see AWS Lambda Function Versioning and Aliases.  You need permission for the lambda:RemovePermission action.
   */
  removePermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a list of tags (key-value pairs) on the Lambda function. Requires the Lambda function ARN (Amazon Resource Name). If a key is specified without a value, Lambda creates a tag with the specified key and a value of null. For more information, see Tagging Lambda Functions in the AWS Lambda Developer Guide. 
   */
  tagResource(params: Lambda.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a list of tags (key-value pairs) on the Lambda function. Requires the Lambda function ARN (Amazon Resource Name). If a key is specified without a value, Lambda creates a tag with the specified key and a value of null. For more information, see Tagging Lambda Functions in the AWS Lambda Developer Guide. 
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes tags from a Lambda function. Requires the function ARN (Amazon Resource Name). For more information, see Tagging Lambda Functions in the AWS Lambda Developer Guide. 
   */
  untagResource(params: Lambda.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes tags from a Lambda function. Requires the function ARN (Amazon Resource Name). For more information, see Tagging Lambda Functions in the AWS Lambda Developer Guide. 
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Using this API you can update the function version to which the alias points and the alias description. For more information, see Introduction to AWS Lambda Aliases. This requires permission for the lambda:UpdateAlias action.
   */
  updateAlias(params: Lambda.Types.UpdateAliasRequest, callback?: (err: AWSError, data: Lambda.Types.AliasConfiguration) => void): Request<Lambda.Types.AliasConfiguration, AWSError>;
  /**
   * Using this API you can update the function version to which the alias points and the alias description. For more information, see Introduction to AWS Lambda Aliases. This requires permission for the lambda:UpdateAlias action.
   */
  updateAlias(callback?: (err: AWSError, data: Lambda.Types.AliasConfiguration) => void): Request<Lambda.Types.AliasConfiguration, AWSError>;
  /**
   * Updates an event source mapping. You can change the function that AWS Lambda invokes, or pause invocation and resume later from the same location.
   */
  updateEventSourceMapping(params: Lambda.Types.UpdateEventSourceMappingRequest, callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Updates an event source mapping. You can change the function that AWS Lambda invokes, or pause invocation and resume later from the same location.
   */
  updateEventSourceMapping(callback?: (err: AWSError, data: Lambda.Types.EventSourceMappingConfiguration) => void): Request<Lambda.Types.EventSourceMappingConfiguration, AWSError>;
  /**
   * Updates the code for the specified Lambda function. This operation must only be used on an existing Lambda function and cannot be used to update the function configuration. If you are using the versioning feature, note this API will always update the $LATEST version of your Lambda function. For information about the versioning feature, see AWS Lambda Function Versioning and Aliases.  This operation requires permission for the lambda:UpdateFunctionCode action.
   */
  updateFunctionCode(params: Lambda.Types.UpdateFunctionCodeRequest, callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Updates the code for the specified Lambda function. This operation must only be used on an existing Lambda function and cannot be used to update the function configuration. If you are using the versioning feature, note this API will always update the $LATEST version of your Lambda function. For information about the versioning feature, see AWS Lambda Function Versioning and Aliases.  This operation requires permission for the lambda:UpdateFunctionCode action.
   */
  updateFunctionCode(callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Updates the configuration parameters for the specified Lambda function by using the values provided in the request. You provide only the parameters you want to change. This operation must only be used on an existing Lambda function and cannot be used to update the function's code. If you are using the versioning feature, note this API will always update the $LATEST version of your Lambda function. For information about the versioning feature, see AWS Lambda Function Versioning and Aliases.  This operation requires permission for the lambda:UpdateFunctionConfiguration action.
   */
  updateFunctionConfiguration(params: Lambda.Types.UpdateFunctionConfigurationRequest, callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
  /**
   * Updates the configuration parameters for the specified Lambda function by using the values provided in the request. You provide only the parameters you want to change. This operation must only be used on an existing Lambda function and cannot be used to update the function's code. If you are using the versioning feature, note this API will always update the $LATEST version of your Lambda function. For information about the versioning feature, see AWS Lambda Function Versioning and Aliases.  This operation requires permission for the lambda:UpdateFunctionConfiguration action.
   */
  updateFunctionConfiguration(callback?: (err: AWSError, data: Lambda.Types.FunctionConfiguration) => void): Request<Lambda.Types.FunctionConfiguration, AWSError>;
}
declare namespace Lambda {
  export interface AccountLimit {
    /**
     * Maximum size, in bytes, of a code package you can upload per region. The default size is 75 GB. 
     */
    TotalCodeSize?: Long;
    /**
     * Size, in bytes, of code/dependencies that you can zip into a deployment package (uncompressed zip/jar size) for uploading. The default limit is 250 MB.
     */
    CodeSizeUnzipped?: Long;
    /**
     * Size, in bytes, of a single zipped code/dependencies package you can upload for your Lambda function(.zip/.jar file). Try using Amazon S3 for uploading larger files. Default limit is 50 MB.
     */
    CodeSizeZipped?: Long;
    /**
     * Number of simultaneous executions of your function per region. The default limit is 1000.
     */
    ConcurrentExecutions?: Integer;
    /**
     * The number of concurrent executions available to functions that do not have concurrency limits set. For more information, see Managing Concurrency.
     */
    UnreservedConcurrentExecutions?: UnreservedConcurrentExecutions;
  }
  export interface AccountUsage {
    /**
     * Total size, in bytes, of the account's deployment packages per region.
     */
    TotalCodeSize?: Long;
    /**
     * The number of your account's existing functions per region.
     */
    FunctionCount?: Long;
  }
  export type Action = string;
  export interface AddLayerVersionPermissionRequest {
    /**
     * The name of the layer.
     */
    LayerName: LayerName;
    /**
     * The version number.
     */
    VersionNumber: LayerVersionNumber;
    /**
     * An identifier that distinguishes the policy from others on the same layer version.
     */
    StatementId: StatementId;
    /**
     * The API action that grants access to the layer. For example, lambda:GetLayerVersion.
     */
    Action: LayerPermissionAllowedAction;
    /**
     * An account ID, or * to grant permission to all AWS accounts.
     */
    Principal: LayerPermissionAllowedPrincipal;
    /**
     * With the principal set to *, grant permission to all accounts in the specified organization.
     */
    OrganizationId?: OrganizationId;
    /**
     * Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.
     */
    RevisionId?: String;
  }
  export interface AddLayerVersionPermissionResponse {
    /**
     * The permission statement.
     */
    Statement?: String;
    /**
     * A unique identifier for the current revision of the policy.
     */
    RevisionId?: String;
  }
  export interface AddPermissionRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * A unique statement identifier.
     */
    StatementId: StatementId;
    /**
     * The AWS Lambda action you want to allow in this statement. Each Lambda action is a string starting with lambda: followed by the API name . For example, lambda:CreateFunction. You can use wildcard (lambda:*) to grant permission for all AWS Lambda actions. 
     */
    Action: Action;
    /**
     * The principal who is getting this permission. The principal can be an AWS service (e.g. s3.amazonaws.com or sns.amazonaws.com) for service triggers, or an account ID for cross-account access. If you specify a service as a principal, use the SourceArn parameter to limit who can invoke the function through that service.
     */
    Principal: Principal;
    /**
     * The Amazon Resource Name of the invoker.   If you add a permission to a service principal without providing the source ARN, any AWS account that creates a mapping to your function ARN can invoke your Lambda function. 
     */
    SourceArn?: Arn;
    /**
     * This parameter is used for S3 and SES. The AWS account ID (without a hyphen) of the source owner. For example, if the SourceArn identifies a bucket, then this is the bucket owner's account ID. You can use this additional condition to ensure the bucket you specify is owned by a specific account (it is possible the bucket owner deleted the bucket and some other AWS account created the bucket). You can also use this condition to specify all sources (that is, you don't specify the SourceArn) owned by a specific account. 
     */
    SourceAccount?: SourceOwner;
    /**
     * A unique token that must be supplied by the principal invoking the function. This is currently only used for Alexa Smart Home functions.
     */
    EventSourceToken?: EventSourceToken;
    /**
     * Specify a version or alias to add permissions to a published version of the function.
     */
    Qualifier?: Qualifier;
    /**
     * An optional value you can use to ensure you are updating the latest update of the function version or alias. If the RevisionID you pass doesn't match the latest RevisionId of the function or alias, it will fail with an error message, advising you to retrieve the latest function version or alias RevisionID using either GetFunction or GetAlias 
     */
    RevisionId?: String;
  }
  export interface AddPermissionResponse {
    /**
     * The permission statement you specified in the request. The response returns the same as a string using a backslash ("\") as an escape character in the JSON.
     */
    Statement?: String;
  }
  export type AdditionalVersion = string;
  export type AdditionalVersionWeights = {[key: string]: Weight};
  export type Alias = string;
  export interface AliasConfiguration {
    /**
     * Lambda function ARN that is qualified using the alias name as the suffix. For example, if you create an alias called BETA that points to a helloworld function version, the ARN is arn:aws:lambda:aws-regions:acct-id:function:helloworld:BETA.
     */
    AliasArn?: FunctionArn;
    /**
     * Alias name.
     */
    Name?: Alias;
    /**
     * Function version to which the alias points.
     */
    FunctionVersion?: Version;
    /**
     * Alias description.
     */
    Description?: Description;
    /**
     * Specifies an additional function versions the alias points to, allowing you to dictate what percentage of traffic will invoke each version.
     */
    RoutingConfig?: AliasRoutingConfiguration;
    /**
     * Represents the latest updated revision of the function or alias.
     */
    RevisionId?: String;
  }
  export type AliasList = AliasConfiguration[];
  export interface AliasRoutingConfiguration {
    /**
     * The name of the second alias, and the percentage of traffic that is routed to it.
     */
    AdditionalVersionWeights?: AdditionalVersionWeights;
  }
  export type Arn = string;
  export type BatchSize = number;
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type BlobStream = Buffer|Uint8Array|Blob|string|Readable;
  export type Boolean = boolean;
  export type CompatibleRuntimes = Runtime[];
  export interface Concurrency {
    /**
     * The number of concurrent executions reserved for this function. For more information, see Managing Concurrency.
     */
    ReservedConcurrentExecutions?: ReservedConcurrentExecutions;
  }
  export interface CreateAliasRequest {
    /**
     * The name of the lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * Name for the alias you are creating.
     */
    Name: Alias;
    /**
     * Lambda function version for which you are creating the alias.
     */
    FunctionVersion: Version;
    /**
     * Description of the alias.
     */
    Description?: Description;
    /**
     * Specifies an additional version your alias can point to, allowing you to dictate what percentage of traffic will invoke each version. For more information, see Traffic Shifting Using Aliases.
     */
    RoutingConfig?: AliasRoutingConfiguration;
  }
  export interface CreateEventSourceMappingRequest {
    /**
     * The Amazon Resource Name (ARN) of the event source.    Amazon Kinesis - The ARN of the data stream or a stream consumer.    Amazon DynamoDB Streams - The ARN of the stream.    Amazon Simple Queue Service - The ARN of the queue.  
     */
    EventSourceArn: Arn;
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * Disables the event source mapping to pause polling and invocation.
     */
    Enabled?: Enabled;
    /**
     * The maximum number of items to retrieve in a single batch.    Amazon Kinesis - Default 100. Max 10,000.    Amazon DynamoDB Streams - Default 100. Max 1,000.    Amazon Simple Queue Service - Default 10. Max 10.  
     */
    BatchSize?: BatchSize;
    /**
     * The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Streams sources. AT_TIMESTAMP is only supported for Amazon Kinesis streams.
     */
    StartingPosition?: EventSourcePosition;
    /**
     * With StartingPosition set to AT_TIMESTAMP, the Unix time in seconds from which to start reading.
     */
    StartingPositionTimestamp?: _Date;
  }
  export interface CreateFunctionRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The runtime version for the function.
     */
    Runtime: Runtime;
    /**
     * The Amazon Resource Name (ARN) of the function's execution role.
     */
    Role: RoleArn;
    /**
     * The name of the method within your code that Lambda calls to execute your function. For more information, see Programming Model.
     */
    Handler: Handler;
    /**
     * The code for the function.
     */
    Code: FunctionCode;
    /**
     * A description of the function.
     */
    Description?: Description;
    /**
     * The amount of time that Lambda allows a function to run before terminating it. The default is 3 seconds. The maximum allowed value is 900 seconds.
     */
    Timeout?: Timeout;
    /**
     * The amount of memory that your function has access to. Increasing the function's memory also increases it's CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.
     */
    MemorySize?: MemorySize;
    /**
     * Set to true to publish the first version of the function during creation.
     */
    Publish?: Boolean;
    /**
     * If your Lambda function accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and one subnet ID.
     */
    VpcConfig?: VpcConfig;
    /**
     * A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see Dead Letter Queues. 
     */
    DeadLetterConfig?: DeadLetterConfig;
    /**
     * Environment variables that are accessible from function code during execution.
     */
    Environment?: Environment;
    /**
     * The ARN of the KMS key used to encrypt your function's environment variables. If not provided, AWS Lambda will use a default service key.
     */
    KMSKeyArn?: KMSKeyArn;
    /**
     * Set Mode to Active to sample and trace a subset of incoming requests with AWS X-Ray.
     */
    TracingConfig?: TracingConfig;
    /**
     * The list of tags (key-value pairs) assigned to the new function. For more information, see Tagging Lambda Functions in the AWS Lambda Developer Guide.
     */
    Tags?: Tags;
    /**
     * A list of function layers to add to the function's execution environment.
     */
    Layers?: LayerList;
  }
  export type _Date = Date;
  export interface DeadLetterConfig {
    /**
     * The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.
     */
    TargetArn?: ResourceArn;
  }
  export interface DeleteAliasRequest {
    /**
     * The name of the lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * Name of the alias to delete.
     */
    Name: Alias;
  }
  export interface DeleteEventSourceMappingRequest {
    /**
     * The identifier of the event source mapping.
     */
    UUID: String;
  }
  export interface DeleteFunctionConcurrencyRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
  }
  export interface DeleteFunctionRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * Specify a version to delete. You cannot delete a version that is referenced by an alias.
     */
    Qualifier?: Qualifier;
  }
  export interface DeleteLayerVersionRequest {
    /**
     * The name of the layer.
     */
    LayerName: LayerName;
    /**
     * The version number.
     */
    VersionNumber: LayerVersionNumber;
  }
  export type Description = string;
  export type Enabled = boolean;
  export interface Environment {
    /**
     * Environment variable key-value pairs.
     */
    Variables?: EnvironmentVariables;
  }
  export interface EnvironmentError {
    /**
     * The error code.
     */
    ErrorCode?: String;
    /**
     * The error message.
     */
    Message?: SensitiveString;
  }
  export interface EnvironmentResponse {
    /**
     * Environment variable key-value pairs.
     */
    Variables?: EnvironmentVariables;
    /**
     * Error messages for environment variables that could not be applied.
     */
    Error?: EnvironmentError;
  }
  export type EnvironmentVariableName = string;
  export type EnvironmentVariableValue = string;
  export type EnvironmentVariables = {[key: string]: EnvironmentVariableValue};
  export interface EventSourceMappingConfiguration {
    /**
     * The identifier of the event source mapping.
     */
    UUID?: String;
    /**
     * The maximum number of items to retrieve in a single batch.
     */
    BatchSize?: BatchSize;
    /**
     * The Amazon Resource Name (ARN) of the event source.
     */
    EventSourceArn?: Arn;
    /**
     * The ARN of the Lambda function.
     */
    FunctionArn?: FunctionArn;
    /**
     * The date that the event source mapping was last updated, in Unix time seconds.
     */
    LastModified?: _Date;
    /**
     * The result of the last AWS Lambda invocation of your Lambda function.
     */
    LastProcessingResult?: String;
    /**
     * The state of the event source mapping. It can be one of the following: Creating, Enabling, Enabled, Disabling, Disabled, Updating, or Deleting.
     */
    State?: String;
    /**
     * The cause of the last state change, either User initiated or Lambda initiated.
     */
    StateTransitionReason?: String;
  }
  export type EventSourceMappingsList = EventSourceMappingConfiguration[];
  export type EventSourcePosition = "TRIM_HORIZON"|"LATEST"|"AT_TIMESTAMP"|string;
  export type EventSourceToken = string;
  export type FunctionArn = string;
  export interface FunctionCode {
    /**
     * The base64-encoded contents of your zip file containing your deployment package. AWS SDK and AWS CLI clients handle the encoding for you.
     */
    ZipFile?: _Blob;
    /**
     * An Amazon S3 bucket in the same region as your function.
     */
    S3Bucket?: S3Bucket;
    /**
     * The Amazon S3 key of the deployment package.
     */
    S3Key?: S3Key;
    /**
     * For versioned objects, the version of the deployment package object to use.
     */
    S3ObjectVersion?: S3ObjectVersion;
  }
  export interface FunctionCodeLocation {
    /**
     * The repository from which you can download the function.
     */
    RepositoryType?: String;
    /**
     * The presigned URL you can use to download the function's .zip file that you previously uploaded. The URL is valid for up to 10 minutes.
     */
    Location?: String;
  }
  export interface FunctionConfiguration {
    /**
     * The name of the function.
     */
    FunctionName?: NamespacedFunctionName;
    /**
     * The function's Amazon Resource Name.
     */
    FunctionArn?: NameSpacedFunctionArn;
    /**
     * The runtime environment for the Lambda function.
     */
    Runtime?: Runtime;
    /**
     * The function's execution role.
     */
    Role?: RoleArn;
    /**
     * The function Lambda calls to begin executing your function.
     */
    Handler?: Handler;
    /**
     * The size of the function's deployment package in bytes.
     */
    CodeSize?: Long;
    /**
     * The function's description.
     */
    Description?: Description;
    /**
     * The amount of time that Lambda allows a function to run before terminating it.
     */
    Timeout?: Timeout;
    /**
     * The memory allocated to the function
     */
    MemorySize?: MemorySize;
    /**
     * The date and time that the function was last updated, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).
     */
    LastModified?: Timestamp;
    /**
     * The SHA256 hash of the function's deployment package.
     */
    CodeSha256?: String;
    /**
     * The version of the Lambda function.
     */
    Version?: Version;
    /**
     * The function's networking configuration.
     */
    VpcConfig?: VpcConfigResponse;
    /**
     * The function's dead letter queue.
     */
    DeadLetterConfig?: DeadLetterConfig;
    /**
     * The function's environment variables.
     */
    Environment?: EnvironmentResponse;
    /**
     * The KMS key used to encrypt the function's environment variables. Only returned if you've configured a customer managed CMK.
     */
    KMSKeyArn?: KMSKeyArn;
    /**
     * The function's AWS X-Ray tracing configuration.
     */
    TracingConfig?: TracingConfigResponse;
    /**
     * The ARN of the master function.
     */
    MasterArn?: FunctionArn;
    /**
     * Represents the latest updated revision of the function or alias.
     */
    RevisionId?: String;
    /**
     * A list of function layers.
     */
    Layers?: LayersReferenceList;
  }
  export type FunctionList = FunctionConfiguration[];
  export type FunctionName = string;
  export type FunctionVersion = "ALL"|string;
  export interface GetAccountSettingsRequest {
  }
  export interface GetAccountSettingsResponse {
    /**
     * Limits related to concurrency and code storage.
     */
    AccountLimit?: AccountLimit;
    /**
     * The number of functions and amount of storage in use.
     */
    AccountUsage?: AccountUsage;
  }
  export interface GetAliasRequest {
    /**
     * The name of the lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * Name of the alias for which you want to retrieve information.
     */
    Name: Alias;
  }
  export interface GetEventSourceMappingRequest {
    /**
     * The identifier of the event source mapping.
     */
    UUID: String;
  }
  export interface GetFunctionConfigurationRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: NamespacedFunctionName;
    /**
     * Specify a version or alias to get details about a published version of the function.
     */
    Qualifier?: Qualifier;
  }
  export interface GetFunctionRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: NamespacedFunctionName;
    /**
     * Specify a version or alias to get details about a published version of the function.
     */
    Qualifier?: Qualifier;
  }
  export interface GetFunctionResponse {
    /**
     * The function's configuration.
     */
    Configuration?: FunctionConfiguration;
    /**
     * The function's code.
     */
    Code?: FunctionCodeLocation;
    /**
     * Returns the list of tags associated with the function. For more information, see Tagging Lambda Functions in the AWS Lambda Developer Guide.
     */
    Tags?: Tags;
    /**
     * The concurrent execution limit set for this function. For more information, see Managing Concurrency.
     */
    Concurrency?: Concurrency;
  }
  export interface GetLayerVersionPolicyRequest {
    /**
     * The name of the layer.
     */
    LayerName: LayerName;
    /**
     * The version number.
     */
    VersionNumber: LayerVersionNumber;
  }
  export interface GetLayerVersionPolicyResponse {
    /**
     * The policy document.
     */
    Policy?: String;
    /**
     * A unique identifier for the current revision of the policy.
     */
    RevisionId?: String;
  }
  export interface GetLayerVersionRequest {
    /**
     * The name of the layer.
     */
    LayerName: LayerName;
    /**
     * The version number.
     */
    VersionNumber: LayerVersionNumber;
  }
  export interface GetLayerVersionResponse {
    /**
     * Details about the layer version.
     */
    Content?: LayerVersionContentOutput;
    /**
     * The Amazon Resource Name (ARN) of the function layer.
     */
    LayerArn?: LayerArn;
    /**
     * The ARN of the layer version.
     */
    LayerVersionArn?: LayerVersionArn;
    /**
     * The description of the version.
     */
    Description?: Description;
    /**
     * The date that the layer version was created, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).
     */
    CreatedDate?: Timestamp;
    /**
     * The version number.
     */
    Version?: LayerVersionNumber;
    /**
     * The layer's compatible runtimes.
     */
    CompatibleRuntimes?: CompatibleRuntimes;
    /**
     * The layer's software license.
     */
    LicenseInfo?: LicenseInfo;
  }
  export interface GetPolicyRequest {
    /**
     * The name of the lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: NamespacedFunctionName;
    /**
     * You can specify this optional query parameter to specify a function version or an alias name in which case this API will return all permissions associated with the specific qualified ARN. If you don't provide this parameter, the API will return permissions that apply to the unqualified function ARN.
     */
    Qualifier?: Qualifier;
  }
  export interface GetPolicyResponse {
    /**
     * The resource policy associated with the specified function. The response returns the same as a string using a backslash ("\") as an escape character in the JSON.
     */
    Policy?: String;
    /**
     * Represents the latest updated revision of the function or alias.
     */
    RevisionId?: String;
  }
  export type Handler = string;
  export type HttpStatus = number;
  export type Integer = number;
  export interface InvocationRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: NamespacedFunctionName;
    /**
     * Choose from the following options.    RequestResponse (default) - Invoke the function synchronously. Keep the connection open until the function returns a response or times out.    Event - Invoke the function asynchronously. Send events that fail multiple times to the function's dead-letter queue (if configured).    DryRun - Validate parameter values and verify that the user or role has permission to invoke the function.  
     */
    InvocationType?: InvocationType;
    /**
     * You can set this optional parameter to Tail in the request only if you specify the InvocationType parameter with value RequestResponse. In this case, AWS Lambda returns the base64-encoded last 4 KB of log data produced by your Lambda function in the x-amz-log-result header. 
     */
    LogType?: LogType;
    /**
     * Using the ClientContext you can pass client-specific information to the Lambda function you are invoking. You can then process the client information in your Lambda function as you choose through the context variable. For an example of a ClientContext JSON, see PutEvents in the Amazon Mobile Analytics API Reference and User Guide. The ClientContext JSON must be base64-encoded and has a maximum size of 3583 bytes.   ClientContext information is returned only if you use the synchronous (RequestResponse) invocation type. 
     */
    ClientContext?: String;
    /**
     * JSON that you want to provide to your Lambda function as input.
     */
    Payload?: _Blob;
    /**
     * Specify a version or alias to invoke a published version of the function.
     */
    Qualifier?: Qualifier;
  }
  export interface InvocationResponse {
    /**
     * The HTTP status code will be in the 200 range for successful request. For the RequestResponse invocation type this status code will be 200. For the Event invocation type this status code will be 202. For the DryRun invocation type the status code will be 204. 
     */
    StatusCode?: Integer;
    /**
     * Indicates whether an error occurred while executing the Lambda function. If an error occurred this field will have one of two values; Handled or Unhandled. Handled errors are errors that are reported by the function while the Unhandled errors are those detected and reported by AWS Lambda. Unhandled errors include out of memory errors and function timeouts. For information about how to report an Handled error, see Programming Model. 
     */
    FunctionError?: String;
    /**
     *  It is the base64-encoded logs for the Lambda function invocation. This is present only if the invocation type is RequestResponse and the logs were requested. 
     */
    LogResult?: String;
    /**
     *  It is the JSON representation of the object returned by the Lambda function. This is present only if the invocation type is RequestResponse.  In the event of a function error this field contains a message describing the error. For the Handled errors the Lambda function will report this message. For Unhandled errors AWS Lambda reports the message. 
     */
    Payload?: _Blob;
    /**
     * The function version that has been executed. This value is returned only if the invocation type is RequestResponse. For more information, see Traffic Shifting Using Aliases.
     */
    ExecutedVersion?: Version;
  }
  export type InvocationType = "Event"|"RequestResponse"|"DryRun"|string;
  export interface InvokeAsyncRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: NamespacedFunctionName;
    /**
     * JSON that you want to provide to your Lambda function as input.
     */
    InvokeArgs: BlobStream;
  }
  export interface InvokeAsyncResponse {
    /**
     * It will be 202 upon success.
     */
    Status?: HttpStatus;
  }
  export type KMSKeyArn = string;
  export interface Layer {
    /**
     * The Amazon Resource Name (ARN) of the function layer.
     */
    Arn?: LayerVersionArn;
    /**
     * The size of the layer archive in bytes.
     */
    CodeSize?: Long;
  }
  export type LayerArn = string;
  export type LayerList = LayerVersionArn[];
  export type LayerName = string;
  export type LayerPermissionAllowedAction = string;
  export type LayerPermissionAllowedPrincipal = string;
  export type LayerVersionArn = string;
  export interface LayerVersionContentInput {
    /**
     * The Amazon S3 bucket of the layer archive.
     */
    S3Bucket?: S3Bucket;
    /**
     * The Amazon S3 key of the layer archive.
     */
    S3Key?: S3Key;
    /**
     * For versioned objects, the version of the layer archive object to use.
     */
    S3ObjectVersion?: S3ObjectVersion;
    /**
     * The base64-encoded contents of the layer archive. AWS SDK and AWS CLI clients handle the encoding for you.
     */
    ZipFile?: _Blob;
  }
  export interface LayerVersionContentOutput {
    /**
     * A link to the layer archive in Amazon S3 that is valid for 10 minutes.
     */
    Location?: String;
    /**
     * The SHA-256 hash of the layer archive.
     */
    CodeSha256?: String;
    /**
     * The size of the layer archive in bytes.
     */
    CodeSize?: Long;
  }
  export type LayerVersionNumber = number;
  export type LayerVersionsList = LayerVersionsListItem[];
  export interface LayerVersionsListItem {
    /**
     * The ARN of the layer version.
     */
    LayerVersionArn?: LayerVersionArn;
    /**
     * The version number.
     */
    Version?: LayerVersionNumber;
    /**
     * The description of the version.
     */
    Description?: Description;
    /**
     * The date that the version was created, in ISO 8601 format. For example, 2018-11-27T15:10:45.123+0000.
     */
    CreatedDate?: Timestamp;
    /**
     * The layer's compatible runtimes.
     */
    CompatibleRuntimes?: CompatibleRuntimes;
    /**
     * The layer's open-source license.
     */
    LicenseInfo?: LicenseInfo;
  }
  export type LayersList = LayersListItem[];
  export interface LayersListItem {
    /**
     * The name of the layer.
     */
    LayerName?: LayerName;
    /**
     * The Amazon Resource Name (ARN) of the function layer.
     */
    LayerArn?: LayerArn;
    /**
     * The newest version of the layer.
     */
    LatestMatchingVersion?: LayerVersionsListItem;
  }
  export type LayersReferenceList = Layer[];
  export type LicenseInfo = string;
  export interface ListAliasesRequest {
    /**
     * The name of the lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * If you specify this optional parameter, the API returns only the aliases that are pointing to the specific Lambda function version, otherwise the API returns all of the aliases created for the Lambda function.
     */
    FunctionVersion?: Version;
    /**
     * Optional string. An opaque pagination token returned from a previous ListAliases operation. If present, indicates where to continue the listing.
     */
    Marker?: String;
    /**
     * Optional integer. Specifies the maximum number of aliases to return in response. This parameter value must be greater than 0.
     */
    MaxItems?: MaxListItems;
  }
  export interface ListAliasesResponse {
    /**
     * A string, present if there are more aliases.
     */
    NextMarker?: String;
    /**
     * A list of aliases.
     */
    Aliases?: AliasList;
  }
  export interface ListEventSourceMappingsRequest {
    /**
     * The Amazon Resource Name (ARN) of the event source.    Amazon Kinesis - The ARN of the data stream or a stream consumer.    Amazon DynamoDB Streams - The ARN of the stream.    Amazon Simple Queue Service - The ARN of the queue.  
     */
    EventSourceArn?: Arn;
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
     */
    FunctionName?: FunctionName;
    /**
     * A pagination token returned by a previous call.
     */
    Marker?: String;
    /**
     * The maximum number of event source mappings to return.
     */
    MaxItems?: MaxListItems;
  }
  export interface ListEventSourceMappingsResponse {
    /**
     * A pagination token that's returned when the response doesn't contain all event source mappings.
     */
    NextMarker?: String;
    /**
     * A list of event source mappings.
     */
    EventSourceMappings?: EventSourceMappingsList;
  }
  export interface ListFunctionsRequest {
    /**
     * Specify a region (e.g. us-east-2) to only list functions that were created in that region, or ALL to include functions replicated from any region. If specified, you also must specify the FunctionVersion.
     */
    MasterRegion?: MasterRegion;
    /**
     * Set to ALL to list all published versions. If not specified, only the latest unpublished version ARN is returned.
     */
    FunctionVersion?: FunctionVersion;
    /**
     * Optional string. An opaque pagination token returned from a previous ListFunctions operation. If present, indicates where to continue the listing. 
     */
    Marker?: String;
    /**
     * Optional integer. Specifies the maximum number of AWS Lambda functions to return in response. This parameter value must be greater than 0. The absolute maximum of AWS Lambda functions that can be returned is 50.
     */
    MaxItems?: MaxListItems;
  }
  export interface ListFunctionsResponse {
    /**
     * A string, present if there are more functions.
     */
    NextMarker?: String;
    /**
     * A list of Lambda functions.
     */
    Functions?: FunctionList;
  }
  export interface ListLayerVersionsRequest {
    /**
     * A runtime identifier. For example, go1.x.
     */
    CompatibleRuntime?: Runtime;
    /**
     * The name of the layer.
     */
    LayerName: LayerName;
    /**
     * A pagination token returned by a previous call.
     */
    Marker?: String;
    /**
     * The maximum number of versions to return.
     */
    MaxItems?: MaxLayerListItems;
  }
  export interface ListLayerVersionsResponse {
    /**
     * A pagination token returned when the response doesn't contain all versions.
     */
    NextMarker?: String;
    /**
     * A list of versions.
     */
    LayerVersions?: LayerVersionsList;
  }
  export interface ListLayersRequest {
    /**
     * A runtime identifier. For example, go1.x.
     */
    CompatibleRuntime?: Runtime;
    /**
     * A pagination token returned by a previous call.
     */
    Marker?: String;
    /**
     * The maximum number of layers to return.
     */
    MaxItems?: MaxLayerListItems;
  }
  export interface ListLayersResponse {
    /**
     * A pagination token returned when the response doesn't contain all layers.
     */
    NextMarker?: String;
    /**
     * A list of function layers.
     */
    Layers?: LayersList;
  }
  export interface ListTagsRequest {
    /**
     * The ARN (Amazon Resource Name) of the function. For more information, see Tagging Lambda Functions in the AWS Lambda Developer Guide.
     */
    Resource: FunctionArn;
  }
  export interface ListTagsResponse {
    /**
     * The list of tags assigned to the function. For more information, see Tagging Lambda Functions in the AWS Lambda Developer Guide.
     */
    Tags?: Tags;
  }
  export interface ListVersionsByFunctionRequest {
    /**
     * The name of the lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: NamespacedFunctionName;
    /**
     *  Optional string. An opaque pagination token returned from a previous ListVersionsByFunction operation. If present, indicates where to continue the listing. 
     */
    Marker?: String;
    /**
     * Optional integer. Specifies the maximum number of AWS Lambda function versions to return in response. This parameter value must be greater than 0.
     */
    MaxItems?: MaxListItems;
  }
  export interface ListVersionsByFunctionResponse {
    /**
     * A string, present if there are more function versions.
     */
    NextMarker?: String;
    /**
     * A list of Lambda function versions.
     */
    Versions?: FunctionList;
  }
  export type LogType = "None"|"Tail"|string;
  export type Long = number;
  export type MasterRegion = string;
  export type MaxLayerListItems = number;
  export type MaxListItems = number;
  export type MemorySize = number;
  export type NameSpacedFunctionArn = string;
  export type NamespacedFunctionName = string;
  export type NamespacedStatementId = string;
  export type OrganizationId = string;
  export type Principal = string;
  export interface PublishLayerVersionRequest {
    /**
     * The name of the layer.
     */
    LayerName: LayerName;
    /**
     * The description of the version.
     */
    Description?: Description;
    /**
     * The function layer archive.
     */
    Content: LayerVersionContentInput;
    /**
     * A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions.
     */
    CompatibleRuntimes?: CompatibleRuntimes;
    /**
     * The layer's software license. It can be any of the following:   An SPDX license identifier. For example, MIT.   The URL of a license hosted on the internet. For example, https://opensource.org/licenses/MIT.   The full text of the license.  
     */
    LicenseInfo?: LicenseInfo;
  }
  export interface PublishLayerVersionResponse {
    /**
     * Details about the layer version.
     */
    Content?: LayerVersionContentOutput;
    /**
     * The Amazon Resource Name (ARN) of the function layer.
     */
    LayerArn?: LayerArn;
    /**
     * The ARN of the layer version.
     */
    LayerVersionArn?: LayerVersionArn;
    /**
     * The description of the version.
     */
    Description?: Description;
    /**
     * The date that the layer version was created, in ISO-8601 format (YYYY-MM-DDThh:mm:ss.sTZD).
     */
    CreatedDate?: Timestamp;
    /**
     * The version number.
     */
    Version?: LayerVersionNumber;
    /**
     * The layer's compatible runtimes.
     */
    CompatibleRuntimes?: CompatibleRuntimes;
    /**
     * The layer's software license.
     */
    LicenseInfo?: LicenseInfo;
  }
  export interface PublishVersionRequest {
    /**
     * The name of the lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The SHA256 hash of the deployment package you want to publish. This provides validation on the code you are publishing. If you provide this parameter, the value must match the SHA256 of the $LATEST version for the publication to succeed. You can use the DryRun parameter of UpdateFunctionCode to verify the hash value that will be returned before publishing your new version.
     */
    CodeSha256?: String;
    /**
     * The description for the version you are publishing. If not provided, AWS Lambda copies the description from the $LATEST version.
     */
    Description?: Description;
    /**
     * An optional value you can use to ensure you are updating the latest update of the function version or alias. If the RevisionID you pass doesn't match the latest RevisionId of the function or alias, it will fail with an error message, advising you retrieve the latest function version or alias RevisionID using either GetFunction or GetAlias.
     */
    RevisionId?: String;
  }
  export interface PutFunctionConcurrencyRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The concurrent execution limit reserved for this function.
     */
    ReservedConcurrentExecutions: ReservedConcurrentExecutions;
  }
  export type Qualifier = string;
  export interface RemoveLayerVersionPermissionRequest {
    /**
     * The name of the layer.
     */
    LayerName: LayerName;
    /**
     * The version number.
     */
    VersionNumber: LayerVersionNumber;
    /**
     * The identifier that was specified when the statement was added.
     */
    StatementId: StatementId;
    /**
     * Only update the policy if the revision ID matches the ID specified. Use this option to avoid modifying a policy that has changed since you last read it.
     */
    RevisionId?: String;
  }
  export interface RemovePermissionRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * Statement ID of the permission to remove.
     */
    StatementId: NamespacedStatementId;
    /**
     * Specify a version or alias to remove permissions from a published version of the function.
     */
    Qualifier?: Qualifier;
    /**
     * An optional value you can use to ensure you are updating the latest update of the function version or alias. If the RevisionID you pass doesn't match the latest RevisionId of the function or alias, it will fail with an error message, advising you to retrieve the latest function version or alias RevisionID using either GetFunction or GetAlias.
     */
    RevisionId?: String;
  }
  export type ReservedConcurrentExecutions = number;
  export type ResourceArn = string;
  export type RoleArn = string;
  export type Runtime = "nodejs"|"nodejs4.3"|"nodejs6.10"|"nodejs8.10"|"java8"|"python2.7"|"python3.6"|"python3.7"|"dotnetcore1.0"|"dotnetcore2.0"|"dotnetcore2.1"|"nodejs4.3-edge"|"go1.x"|"ruby2.5"|"provided"|string;
  export type S3Bucket = string;
  export type S3Key = string;
  export type S3ObjectVersion = string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export type SensitiveString = string;
  export type SourceOwner = string;
  export type StatementId = string;
  export type String = string;
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export interface TagResourceRequest {
    /**
     * The ARN (Amazon Resource Name) of the Lambda function. For more information, see Tagging Lambda Functions in the AWS Lambda Developer Guide.
     */
    Resource: FunctionArn;
    /**
     * The list of tags (key-value pairs) you are assigning to the Lambda function. For more information, see Tagging Lambda Functions in the AWS Lambda Developer Guide.
     */
    Tags: Tags;
  }
  export type TagValue = string;
  export type Tags = {[key: string]: TagValue};
  export type Timeout = number;
  export type Timestamp = string;
  export interface TracingConfig {
    /**
     * The tracing mode.
     */
    Mode?: TracingMode;
  }
  export interface TracingConfigResponse {
    /**
     * The tracing mode.
     */
    Mode?: TracingMode;
  }
  export type TracingMode = "Active"|"PassThrough"|string;
  export type UnreservedConcurrentExecutions = number;
  export interface UntagResourceRequest {
    /**
     * The ARN (Amazon Resource Name) of the function. For more information, see Tagging Lambda Functions in the AWS Lambda Developer Guide.
     */
    Resource: FunctionArn;
    /**
     * The list of tag keys to be deleted from the function. For more information, see Tagging Lambda Functions in the AWS Lambda Developer Guide.
     */
    TagKeys: TagKeyList;
  }
  export interface UpdateAliasRequest {
    /**
     * The name of the lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The alias name.
     */
    Name: Alias;
    /**
     * Using this parameter you can change the Lambda function version to which the alias points.
     */
    FunctionVersion?: Version;
    /**
     * You can change the description of the alias using this parameter.
     */
    Description?: Description;
    /**
     * Specifies an additional version your alias can point to, allowing you to dictate what percentage of traffic will invoke each version. For more information, see Traffic Shifting Using Aliases.
     */
    RoutingConfig?: AliasRoutingConfiguration;
    /**
     * An optional value you can use to ensure you are updating the latest update of the function version or alias. If the RevisionID you pass doesn't match the latest RevisionId of the function or alias, it will fail with an error message, advising you retrieve the latest function version or alias RevisionID using either GetFunction or GetAlias.
     */
    RevisionId?: String;
  }
  export interface UpdateEventSourceMappingRequest {
    /**
     * The identifier of the event source mapping.
     */
    UUID: String;
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Version or Alias ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
     */
    FunctionName?: FunctionName;
    /**
     * Disables the event source mapping to pause polling and invocation.
     */
    Enabled?: Enabled;
    /**
     * The maximum number of items to retrieve in a single batch.    Amazon Kinesis - Default 100. Max 10,000.    Amazon DynamoDB Streams - Default 100. Max 1,000.    Amazon Simple Queue Service - Default 10. Max 10.  
     */
    BatchSize?: BatchSize;
  }
  export interface UpdateFunctionCodeRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The contents of your zip file containing your deployment package. If you are using the web API directly, the contents of the zip file must be base64-encoded. If you are using the AWS SDKs or the AWS CLI, the SDKs or CLI will do the encoding for you. For more information about creating a .zip file, see Execution Permissions. 
     */
    ZipFile?: _Blob;
    /**
     * Amazon S3 bucket name where the .zip file containing your deployment package is stored. This bucket must reside in the same AWS Region where you are creating the Lambda function.
     */
    S3Bucket?: S3Bucket;
    /**
     * The Amazon S3 object (the deployment package) key name you want to upload.
     */
    S3Key?: S3Key;
    /**
     * The Amazon S3 object (the deployment package) version you want to upload.
     */
    S3ObjectVersion?: S3ObjectVersion;
    /**
     * This boolean parameter can be used to request AWS Lambda to update the Lambda function and publish a version as an atomic operation.
     */
    Publish?: Boolean;
    /**
     * This boolean parameter can be used to test your request to AWS Lambda to update the Lambda function and publish a version as an atomic operation. It will do all necessary computation and validation of your code but will not upload it or a publish a version. Each time this operation is invoked, the CodeSha256 hash value of the provided code will also be computed and returned in the response.
     */
    DryRun?: Boolean;
    /**
     * An optional value you can use to ensure you are updating the latest update of the function version or alias. If the RevisionID you pass doesn't match the latest RevisionId of the function or alias, it will fail with an error message, advising you to retrieve the latest function version or alias RevisionID using either using using either GetFunction or GetAlias.
     */
    RevisionId?: String;
  }
  export interface UpdateFunctionConfigurationRequest {
    /**
     * The name of the Lambda function.  Name formats     Function name - MyFunction.    Function ARN - arn:aws:lambda:us-west-2:123456789012:function:MyFunction.    Partial ARN - 123456789012:function:MyFunction.   The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
     */
    FunctionName: FunctionName;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that Lambda will assume when it executes your function.
     */
    Role?: RoleArn;
    /**
     * The function that Lambda calls to begin executing your function. For Node.js, it is the module-name.export value in your function. 
     */
    Handler?: Handler;
    /**
     * A short user-defined function description. AWS Lambda does not use this value. Assign a meaningful description as you see fit.
     */
    Description?: Description;
    /**
     * The amount of time that Lambda allows a function to run before terminating it. The default is 3 seconds. The maximum allowed value is 900 seconds.
     */
    Timeout?: Timeout;
    /**
     * The amount of memory, in MB, your Lambda function is given. AWS Lambda uses this memory size to infer the amount of CPU allocated to your function. Your function use-case determines your CPU and memory requirements. For example, a database operation might need less memory compared to an image processing function. The default value is 128 MB. The value must be a multiple of 64 MB.
     */
    MemorySize?: MemorySize;
    /**
     * Specify security groups and subnets in a VPC to which your Lambda function needs access.
     */
    VpcConfig?: VpcConfig;
    /**
     * The parent object that contains your environment's configuration settings.
     */
    Environment?: Environment;
    /**
     * The runtime version for the function.
     */
    Runtime?: Runtime;
    /**
     * A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see Dead Letter Queues.
     */
    DeadLetterConfig?: DeadLetterConfig;
    /**
     * The Amazon Resource Name (ARN) of the KMS key used to encrypt your function's environment variables. If you elect to use the AWS Lambda default service key, pass in an empty string ("") for this parameter.
     */
    KMSKeyArn?: KMSKeyArn;
    /**
     * Set Mode to Active to sample and trace a subset of incoming requests with AWS X-Ray.
     */
    TracingConfig?: TracingConfig;
    /**
     * An optional value you can use to ensure you are updating the latest update of the function version or alias. If the RevisionID you pass doesn't match the latest RevisionId of the function or alias, it will fail with an error message, advising you to retrieve the latest function version or alias RevisionID using either GetFunction or GetAlias.
     */
    RevisionId?: String;
    /**
     * A list of function layers to add to the function's execution environment.
     */
    Layers?: LayerList;
  }
  export type Version = string;
  export interface VpcConfig {
    /**
     * A list of VPC subnet IDs.
     */
    SubnetIds?: SubnetIds;
    /**
     * A list of VPC security groups IDs.
     */
    SecurityGroupIds?: SecurityGroupIds;
  }
  export interface VpcConfigResponse {
    /**
     * A list of VPC subnet IDs.
     */
    SubnetIds?: SubnetIds;
    /**
     * A list of VPC security groups IDs.
     */
    SecurityGroupIds?: SecurityGroupIds;
    /**
     * The ID of the VPC.
     */
    VpcId?: VpcId;
  }
  export type VpcId = string;
  export type Weight = number;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-11-11"|"2015-03-31"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Lambda client.
   */
  export import Types = Lambda;
}
export = Lambda;
