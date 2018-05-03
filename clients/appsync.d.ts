import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class AppSync extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AppSync.Types.ClientConfiguration)
  config: Config & AppSync.Types.ClientConfiguration;
  /**
   * Creates a unique key that you can distribute to clients who are executing your API.
   */
  createApiKey(params: AppSync.Types.CreateApiKeyRequest, callback?: (err: AWSError, data: AppSync.Types.CreateApiKeyResponse) => void): Request<AppSync.Types.CreateApiKeyResponse, AWSError>;
  /**
   * Creates a unique key that you can distribute to clients who are executing your API.
   */
  createApiKey(callback?: (err: AWSError, data: AppSync.Types.CreateApiKeyResponse) => void): Request<AppSync.Types.CreateApiKeyResponse, AWSError>;
  /**
   * Creates a DataSource object.
   */
  createDataSource(params: AppSync.Types.CreateDataSourceRequest, callback?: (err: AWSError, data: AppSync.Types.CreateDataSourceResponse) => void): Request<AppSync.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a DataSource object.
   */
  createDataSource(callback?: (err: AWSError, data: AppSync.Types.CreateDataSourceResponse) => void): Request<AppSync.Types.CreateDataSourceResponse, AWSError>;
  /**
   * Creates a GraphqlApi object.
   */
  createGraphqlApi(params: AppSync.Types.CreateGraphqlApiRequest, callback?: (err: AWSError, data: AppSync.Types.CreateGraphqlApiResponse) => void): Request<AppSync.Types.CreateGraphqlApiResponse, AWSError>;
  /**
   * Creates a GraphqlApi object.
   */
  createGraphqlApi(callback?: (err: AWSError, data: AppSync.Types.CreateGraphqlApiResponse) => void): Request<AppSync.Types.CreateGraphqlApiResponse, AWSError>;
  /**
   * Creates a Resolver object. A resolver converts incoming requests into a format that a data source can understand and converts the data source's responses into GraphQL.
   */
  createResolver(params: AppSync.Types.CreateResolverRequest, callback?: (err: AWSError, data: AppSync.Types.CreateResolverResponse) => void): Request<AppSync.Types.CreateResolverResponse, AWSError>;
  /**
   * Creates a Resolver object. A resolver converts incoming requests into a format that a data source can understand and converts the data source's responses into GraphQL.
   */
  createResolver(callback?: (err: AWSError, data: AppSync.Types.CreateResolverResponse) => void): Request<AppSync.Types.CreateResolverResponse, AWSError>;
  /**
   * Creates a Type object.
   */
  createType(params: AppSync.Types.CreateTypeRequest, callback?: (err: AWSError, data: AppSync.Types.CreateTypeResponse) => void): Request<AppSync.Types.CreateTypeResponse, AWSError>;
  /**
   * Creates a Type object.
   */
  createType(callback?: (err: AWSError, data: AppSync.Types.CreateTypeResponse) => void): Request<AppSync.Types.CreateTypeResponse, AWSError>;
  /**
   * Deletes an API key.
   */
  deleteApiKey(params: AppSync.Types.DeleteApiKeyRequest, callback?: (err: AWSError, data: AppSync.Types.DeleteApiKeyResponse) => void): Request<AppSync.Types.DeleteApiKeyResponse, AWSError>;
  /**
   * Deletes an API key.
   */
  deleteApiKey(callback?: (err: AWSError, data: AppSync.Types.DeleteApiKeyResponse) => void): Request<AppSync.Types.DeleteApiKeyResponse, AWSError>;
  /**
   * Deletes a DataSource object.
   */
  deleteDataSource(params: AppSync.Types.DeleteDataSourceRequest, callback?: (err: AWSError, data: AppSync.Types.DeleteDataSourceResponse) => void): Request<AppSync.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Deletes a DataSource object.
   */
  deleteDataSource(callback?: (err: AWSError, data: AppSync.Types.DeleteDataSourceResponse) => void): Request<AppSync.Types.DeleteDataSourceResponse, AWSError>;
  /**
   * Deletes a GraphqlApi object.
   */
  deleteGraphqlApi(params: AppSync.Types.DeleteGraphqlApiRequest, callback?: (err: AWSError, data: AppSync.Types.DeleteGraphqlApiResponse) => void): Request<AppSync.Types.DeleteGraphqlApiResponse, AWSError>;
  /**
   * Deletes a GraphqlApi object.
   */
  deleteGraphqlApi(callback?: (err: AWSError, data: AppSync.Types.DeleteGraphqlApiResponse) => void): Request<AppSync.Types.DeleteGraphqlApiResponse, AWSError>;
  /**
   * Deletes a Resolver object.
   */
  deleteResolver(params: AppSync.Types.DeleteResolverRequest, callback?: (err: AWSError, data: AppSync.Types.DeleteResolverResponse) => void): Request<AppSync.Types.DeleteResolverResponse, AWSError>;
  /**
   * Deletes a Resolver object.
   */
  deleteResolver(callback?: (err: AWSError, data: AppSync.Types.DeleteResolverResponse) => void): Request<AppSync.Types.DeleteResolverResponse, AWSError>;
  /**
   * Deletes a Type object.
   */
  deleteType(params: AppSync.Types.DeleteTypeRequest, callback?: (err: AWSError, data: AppSync.Types.DeleteTypeResponse) => void): Request<AppSync.Types.DeleteTypeResponse, AWSError>;
  /**
   * Deletes a Type object.
   */
  deleteType(callback?: (err: AWSError, data: AppSync.Types.DeleteTypeResponse) => void): Request<AppSync.Types.DeleteTypeResponse, AWSError>;
  /**
   * Retrieves a DataSource object.
   */
  getDataSource(params: AppSync.Types.GetDataSourceRequest, callback?: (err: AWSError, data: AppSync.Types.GetDataSourceResponse) => void): Request<AppSync.Types.GetDataSourceResponse, AWSError>;
  /**
   * Retrieves a DataSource object.
   */
  getDataSource(callback?: (err: AWSError, data: AppSync.Types.GetDataSourceResponse) => void): Request<AppSync.Types.GetDataSourceResponse, AWSError>;
  /**
   * Retrieves a GraphqlApi object.
   */
  getGraphqlApi(params: AppSync.Types.GetGraphqlApiRequest, callback?: (err: AWSError, data: AppSync.Types.GetGraphqlApiResponse) => void): Request<AppSync.Types.GetGraphqlApiResponse, AWSError>;
  /**
   * Retrieves a GraphqlApi object.
   */
  getGraphqlApi(callback?: (err: AWSError, data: AppSync.Types.GetGraphqlApiResponse) => void): Request<AppSync.Types.GetGraphqlApiResponse, AWSError>;
  /**
   * Retrieves the introspection schema for a GraphQL API.
   */
  getIntrospectionSchema(params: AppSync.Types.GetIntrospectionSchemaRequest, callback?: (err: AWSError, data: AppSync.Types.GetIntrospectionSchemaResponse) => void): Request<AppSync.Types.GetIntrospectionSchemaResponse, AWSError>;
  /**
   * Retrieves the introspection schema for a GraphQL API.
   */
  getIntrospectionSchema(callback?: (err: AWSError, data: AppSync.Types.GetIntrospectionSchemaResponse) => void): Request<AppSync.Types.GetIntrospectionSchemaResponse, AWSError>;
  /**
   * Retrieves a Resolver object.
   */
  getResolver(params: AppSync.Types.GetResolverRequest, callback?: (err: AWSError, data: AppSync.Types.GetResolverResponse) => void): Request<AppSync.Types.GetResolverResponse, AWSError>;
  /**
   * Retrieves a Resolver object.
   */
  getResolver(callback?: (err: AWSError, data: AppSync.Types.GetResolverResponse) => void): Request<AppSync.Types.GetResolverResponse, AWSError>;
  /**
   * Retrieves the current status of a schema creation operation.
   */
  getSchemaCreationStatus(params: AppSync.Types.GetSchemaCreationStatusRequest, callback?: (err: AWSError, data: AppSync.Types.GetSchemaCreationStatusResponse) => void): Request<AppSync.Types.GetSchemaCreationStatusResponse, AWSError>;
  /**
   * Retrieves the current status of a schema creation operation.
   */
  getSchemaCreationStatus(callback?: (err: AWSError, data: AppSync.Types.GetSchemaCreationStatusResponse) => void): Request<AppSync.Types.GetSchemaCreationStatusResponse, AWSError>;
  /**
   * Retrieves a Type object.
   */
  getType(params: AppSync.Types.GetTypeRequest, callback?: (err: AWSError, data: AppSync.Types.GetTypeResponse) => void): Request<AppSync.Types.GetTypeResponse, AWSError>;
  /**
   * Retrieves a Type object.
   */
  getType(callback?: (err: AWSError, data: AppSync.Types.GetTypeResponse) => void): Request<AppSync.Types.GetTypeResponse, AWSError>;
  /**
   * Lists the API keys for a given API.  API keys are deleted automatically sometime after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call DeleteApiKey to manually delete a key before it's automatically deleted. 
   */
  listApiKeys(params: AppSync.Types.ListApiKeysRequest, callback?: (err: AWSError, data: AppSync.Types.ListApiKeysResponse) => void): Request<AppSync.Types.ListApiKeysResponse, AWSError>;
  /**
   * Lists the API keys for a given API.  API keys are deleted automatically sometime after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call DeleteApiKey to manually delete a key before it's automatically deleted. 
   */
  listApiKeys(callback?: (err: AWSError, data: AppSync.Types.ListApiKeysResponse) => void): Request<AppSync.Types.ListApiKeysResponse, AWSError>;
  /**
   * Lists the data sources for a given API.
   */
  listDataSources(params: AppSync.Types.ListDataSourcesRequest, callback?: (err: AWSError, data: AppSync.Types.ListDataSourcesResponse) => void): Request<AppSync.Types.ListDataSourcesResponse, AWSError>;
  /**
   * Lists the data sources for a given API.
   */
  listDataSources(callback?: (err: AWSError, data: AppSync.Types.ListDataSourcesResponse) => void): Request<AppSync.Types.ListDataSourcesResponse, AWSError>;
  /**
   * Lists your GraphQL APIs.
   */
  listGraphqlApis(params: AppSync.Types.ListGraphqlApisRequest, callback?: (err: AWSError, data: AppSync.Types.ListGraphqlApisResponse) => void): Request<AppSync.Types.ListGraphqlApisResponse, AWSError>;
  /**
   * Lists your GraphQL APIs.
   */
  listGraphqlApis(callback?: (err: AWSError, data: AppSync.Types.ListGraphqlApisResponse) => void): Request<AppSync.Types.ListGraphqlApisResponse, AWSError>;
  /**
   * Lists the resolvers for a given API and type.
   */
  listResolvers(params: AppSync.Types.ListResolversRequest, callback?: (err: AWSError, data: AppSync.Types.ListResolversResponse) => void): Request<AppSync.Types.ListResolversResponse, AWSError>;
  /**
   * Lists the resolvers for a given API and type.
   */
  listResolvers(callback?: (err: AWSError, data: AppSync.Types.ListResolversResponse) => void): Request<AppSync.Types.ListResolversResponse, AWSError>;
  /**
   * Lists the types for a given API.
   */
  listTypes(params: AppSync.Types.ListTypesRequest, callback?: (err: AWSError, data: AppSync.Types.ListTypesResponse) => void): Request<AppSync.Types.ListTypesResponse, AWSError>;
  /**
   * Lists the types for a given API.
   */
  listTypes(callback?: (err: AWSError, data: AppSync.Types.ListTypesResponse) => void): Request<AppSync.Types.ListTypesResponse, AWSError>;
  /**
   * Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.
   */
  startSchemaCreation(params: AppSync.Types.StartSchemaCreationRequest, callback?: (err: AWSError, data: AppSync.Types.StartSchemaCreationResponse) => void): Request<AppSync.Types.StartSchemaCreationResponse, AWSError>;
  /**
   * Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has completed.
   */
  startSchemaCreation(callback?: (err: AWSError, data: AppSync.Types.StartSchemaCreationResponse) => void): Request<AppSync.Types.StartSchemaCreationResponse, AWSError>;
  /**
   * Updates an API key.
   */
  updateApiKey(params: AppSync.Types.UpdateApiKeyRequest, callback?: (err: AWSError, data: AppSync.Types.UpdateApiKeyResponse) => void): Request<AppSync.Types.UpdateApiKeyResponse, AWSError>;
  /**
   * Updates an API key.
   */
  updateApiKey(callback?: (err: AWSError, data: AppSync.Types.UpdateApiKeyResponse) => void): Request<AppSync.Types.UpdateApiKeyResponse, AWSError>;
  /**
   * Updates a DataSource object.
   */
  updateDataSource(params: AppSync.Types.UpdateDataSourceRequest, callback?: (err: AWSError, data: AppSync.Types.UpdateDataSourceResponse) => void): Request<AppSync.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates a DataSource object.
   */
  updateDataSource(callback?: (err: AWSError, data: AppSync.Types.UpdateDataSourceResponse) => void): Request<AppSync.Types.UpdateDataSourceResponse, AWSError>;
  /**
   * Updates a GraphqlApi object.
   */
  updateGraphqlApi(params: AppSync.Types.UpdateGraphqlApiRequest, callback?: (err: AWSError, data: AppSync.Types.UpdateGraphqlApiResponse) => void): Request<AppSync.Types.UpdateGraphqlApiResponse, AWSError>;
  /**
   * Updates a GraphqlApi object.
   */
  updateGraphqlApi(callback?: (err: AWSError, data: AppSync.Types.UpdateGraphqlApiResponse) => void): Request<AppSync.Types.UpdateGraphqlApiResponse, AWSError>;
  /**
   * Updates a Resolver object.
   */
  updateResolver(params: AppSync.Types.UpdateResolverRequest, callback?: (err: AWSError, data: AppSync.Types.UpdateResolverResponse) => void): Request<AppSync.Types.UpdateResolverResponse, AWSError>;
  /**
   * Updates a Resolver object.
   */
  updateResolver(callback?: (err: AWSError, data: AppSync.Types.UpdateResolverResponse) => void): Request<AppSync.Types.UpdateResolverResponse, AWSError>;
  /**
   * Updates a Type object.
   */
  updateType(params: AppSync.Types.UpdateTypeRequest, callback?: (err: AWSError, data: AppSync.Types.UpdateTypeResponse) => void): Request<AppSync.Types.UpdateTypeResponse, AWSError>;
  /**
   * Updates a Type object.
   */
  updateType(callback?: (err: AWSError, data: AppSync.Types.UpdateTypeResponse) => void): Request<AppSync.Types.UpdateTypeResponse, AWSError>;
}
declare namespace AppSync {
  export interface ApiKey {
    /**
     * The API key ID.
     */
    id?: String;
    /**
     * A description of the purpose of the API key.
     */
    description?: String;
    /**
     * The time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour.
     */
    expires?: Long;
  }
  export type ApiKeys = ApiKey[];
  export type AuthenticationType = "API_KEY"|"AWS_IAM"|"AMAZON_COGNITO_USER_POOLS"|"OPENID_CONNECT"|string;
  export type _Blob = Buffer|Uint8Array|Blob|string;
  export type Boolean = boolean;
  export interface CreateApiKeyRequest {
    /**
     * The ID for your GraphQL API.
     */
    apiId: String;
    /**
     * A description of the purpose of the API key.
     */
    description?: String;
    /**
     * The time from creation time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see .
     */
    expires?: Long;
  }
  export interface CreateApiKeyResponse {
    /**
     * The API key.
     */
    apiKey?: ApiKey;
  }
  export interface CreateDataSourceRequest {
    /**
     * The API ID for the GraphQL API for the DataSource.
     */
    apiId: String;
    /**
     * A user-supplied name for the DataSource.
     */
    name: ResourceName;
    /**
     * A description of the DataSource.
     */
    description?: String;
    /**
     * The type of the DataSource.
     */
    type: DataSourceType;
    /**
     * The IAM service role ARN for the data source. The system assumes this role when accessing the data source.
     */
    serviceRoleArn?: String;
    /**
     * DynamoDB settings.
     */
    dynamodbConfig?: DynamodbDataSourceConfig;
    /**
     * AWS Lambda settings.
     */
    lambdaConfig?: LambdaDataSourceConfig;
    /**
     * Amazon Elasticsearch settings.
     */
    elasticsearchConfig?: ElasticsearchDataSourceConfig;
  }
  export interface CreateDataSourceResponse {
    /**
     * The DataSource object.
     */
    dataSource?: DataSource;
  }
  export interface CreateGraphqlApiRequest {
    /**
     * A user-supplied name for the GraphqlApi.
     */
    name: String;
    /**
     * The Amazon CloudWatch logs configuration.
     */
    logConfig?: LogConfig;
    /**
     * The authentication type: API key, IAM, or Amazon Cognito User Pools.
     */
    authenticationType: AuthenticationType;
    /**
     * The Amazon Cognito User Pool configuration.
     */
    userPoolConfig?: UserPoolConfig;
    /**
     * The Open Id Connect configuration configuration.
     */
    openIDConnectConfig?: OpenIDConnectConfig;
  }
  export interface CreateGraphqlApiResponse {
    /**
     * The GraphqlApi.
     */
    graphqlApi?: GraphqlApi;
  }
  export interface CreateResolverRequest {
    /**
     * The ID for the GraphQL API for which the resolver is being created.
     */
    apiId: String;
    /**
     * The name of the Type.
     */
    typeName: ResourceName;
    /**
     * The name of the field to attach the resolver to.
     */
    fieldName: ResourceName;
    /**
     * The name of the data source for which the resolver is being created.
     */
    dataSourceName: ResourceName;
    /**
     * The mapping template to be used for requests. A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).
     */
    requestMappingTemplate: MappingTemplate;
    /**
     * The mapping template to be used for responses from the data source.
     */
    responseMappingTemplate?: MappingTemplate;
  }
  export interface CreateResolverResponse {
    /**
     * The Resolver object.
     */
    resolver?: Resolver;
  }
  export interface CreateTypeRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The type definition, in GraphQL Schema Definition Language (SDL) format. For more information, see the GraphQL SDL documentation.
     */
    definition: String;
    /**
     * The type format: SDL or JSON.
     */
    format: TypeDefinitionFormat;
  }
  export interface CreateTypeResponse {
    /**
     * The Type object.
     */
    type?: Type;
  }
  export interface DataSource {
    /**
     * The data source ARN.
     */
    dataSourceArn?: String;
    /**
     * The name of the data source.
     */
    name?: ResourceName;
    /**
     * The description of the data source.
     */
    description?: String;
    /**
     * The type of the data source.    AMAZON_DYNAMODB: The data source is an Amazon DynamoDB table.    AMAZON_ELASTICSEARCH: The data source is an Amazon Elasticsearch Service domain.    AWS_LAMBDA: The data source is an AWS Lambda function.    NONE: There is no data source. This type is used when when you wish to invoke a GraphQL operation without connecting to a data source, such as performing data transformation with resolvers or triggering a subscription to be invoked from a mutation.  
     */
    type?: DataSourceType;
    /**
     * The IAM service role ARN for the data source. The system assumes this role when accessing the data source.
     */
    serviceRoleArn?: String;
    /**
     * DynamoDB settings.
     */
    dynamodbConfig?: DynamodbDataSourceConfig;
    /**
     * Lambda settings.
     */
    lambdaConfig?: LambdaDataSourceConfig;
    /**
     * Amazon Elasticsearch settings.
     */
    elasticsearchConfig?: ElasticsearchDataSourceConfig;
  }
  export type DataSourceType = "AWS_LAMBDA"|"AMAZON_DYNAMODB"|"AMAZON_ELASTICSEARCH"|"NONE"|string;
  export type DataSources = DataSource[];
  export type DefaultAction = "ALLOW"|"DENY"|string;
  export interface DeleteApiKeyRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The ID for the API key.
     */
    id: String;
  }
  export interface DeleteApiKeyResponse {
  }
  export interface DeleteDataSourceRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The name of the data source.
     */
    name: ResourceName;
  }
  export interface DeleteDataSourceResponse {
  }
  export interface DeleteGraphqlApiRequest {
    /**
     * The API ID.
     */
    apiId: String;
  }
  export interface DeleteGraphqlApiResponse {
  }
  export interface DeleteResolverRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The name of the resolver type.
     */
    typeName: ResourceName;
    /**
     * The resolver field name.
     */
    fieldName: ResourceName;
  }
  export interface DeleteResolverResponse {
  }
  export interface DeleteTypeRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The type name.
     */
    typeName: ResourceName;
  }
  export interface DeleteTypeResponse {
  }
  export interface DynamodbDataSourceConfig {
    /**
     * The table name.
     */
    tableName: String;
    /**
     * The AWS region.
     */
    awsRegion: String;
    /**
     * Set to TRUE to use Amazon Cognito credentials with this data source.
     */
    useCallerCredentials?: Boolean;
  }
  export interface ElasticsearchDataSourceConfig {
    /**
     * The endpoint.
     */
    endpoint: String;
    /**
     * The AWS region.
     */
    awsRegion: String;
  }
  export type ErrorMessage = string;
  export type FieldLogLevel = "NONE"|"ERROR"|"ALL"|string;
  export interface GetDataSourceRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The name of the data source.
     */
    name: ResourceName;
  }
  export interface GetDataSourceResponse {
    /**
     * The DataSource object.
     */
    dataSource?: DataSource;
  }
  export interface GetGraphqlApiRequest {
    /**
     * The API ID for the GraphQL API.
     */
    apiId: String;
  }
  export interface GetGraphqlApiResponse {
    /**
     * The GraphqlApi object.
     */
    graphqlApi?: GraphqlApi;
  }
  export interface GetIntrospectionSchemaRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The schema format: SDL or JSON.
     */
    format: OutputType;
  }
  export interface GetIntrospectionSchemaResponse {
    /**
     * The schema, in GraphQL Schema Definition Language (SDL) format. For more information, see the GraphQL SDL documentation.
     */
    schema?: _Blob;
  }
  export interface GetResolverRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The resolver type name.
     */
    typeName: ResourceName;
    /**
     * The resolver field name.
     */
    fieldName: ResourceName;
  }
  export interface GetResolverResponse {
    /**
     * The Resolver object.
     */
    resolver?: Resolver;
  }
  export interface GetSchemaCreationStatusRequest {
    /**
     * The API ID.
     */
    apiId: String;
  }
  export interface GetSchemaCreationStatusResponse {
    /**
     * The current state of the schema (PROCESSING, ACTIVE, or DELETING). Once the schema is in the ACTIVE state, you can add data.
     */
    status?: SchemaStatus;
    /**
     * Detailed information about the status of the schema creation operation.
     */
    details?: String;
  }
  export interface GetTypeRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The type name.
     */
    typeName: ResourceName;
    /**
     * The type format: SDL or JSON.
     */
    format: TypeDefinitionFormat;
  }
  export interface GetTypeResponse {
    /**
     * The Type object.
     */
    type?: Type;
  }
  export interface GraphqlApi {
    /**
     * The API name.
     */
    name?: ResourceName;
    /**
     * The API ID.
     */
    apiId?: String;
    /**
     * The authentication type.
     */
    authenticationType?: AuthenticationType;
    /**
     * The Amazon CloudWatch Logs configuration.
     */
    logConfig?: LogConfig;
    /**
     * The Amazon Cognito User Pool configuration.
     */
    userPoolConfig?: UserPoolConfig;
    /**
     * The Open Id Connect configuration.
     */
    openIDConnectConfig?: OpenIDConnectConfig;
    /**
     * The ARN.
     */
    arn?: String;
    /**
     * The URIs.
     */
    uris?: MapOfStringToString;
  }
  export type GraphqlApis = GraphqlApi[];
  export interface LambdaDataSourceConfig {
    /**
     * The ARN for the Lambda function.
     */
    lambdaFunctionArn: String;
  }
  export interface ListApiKeysRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results you want the request to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListApiKeysResponse {
    /**
     * The ApiKey objects.
     */
    apiKeys?: ApiKeys;
    /**
     * An identifier to be passed in the next request to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListDataSourcesRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results you want the request to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListDataSourcesResponse {
    /**
     * The DataSource objects.
     */
    dataSources?: DataSources;
    /**
     * An identifier to be passed in the next request to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListGraphqlApisRequest {
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results you want the request to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListGraphqlApisResponse {
    /**
     * The GraphqlApi objects.
     */
    graphqlApis?: GraphqlApis;
    /**
     * An identifier to be passed in the next request to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListResolversRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The type name.
     */
    typeName: String;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results you want the request to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListResolversResponse {
    /**
     * The Resolver objects.
     */
    resolvers?: Resolvers;
    /**
     * An identifier to be passed in the next request to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface ListTypesRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The type format: SDL or JSON.
     */
    format: TypeDefinitionFormat;
    /**
     * An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list. 
     */
    nextToken?: PaginationToken;
    /**
     * The maximum number of results you want the request to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListTypesResponse {
    /**
     * The Type objects.
     */
    types?: TypeList;
    /**
     * An identifier to be passed in the next request to this operation to return the next set of items in the list.
     */
    nextToken?: PaginationToken;
  }
  export interface LogConfig {
    /**
     * The field logging level. Values can be NONE, ERROR, ALL.     NONE: No field-level logs are captured.    ERROR: Logs the following information only for the fields that are in error:   The error section in the server response.   Field-level errors.   The generated request/response functions that got resolved for error fields.      ALL: The following information is logged for all fields in the query:   Field-level tracing information.   The generated request/response functions that got resolved for each field.    
     */
    fieldLogLevel: FieldLogLevel;
    /**
     * The service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account. 
     */
    cloudWatchLogsRoleArn: String;
  }
  export type Long = number;
  export type MapOfStringToString = {[key: string]: String};
  export type MappingTemplate = string;
  export type MaxResults = number;
  export interface OpenIDConnectConfig {
    /**
     * The issuer for the open id connect configuration. The issuer returned by discovery MUST exactly match the value of iss in the ID Token.
     */
    issuer: String;
    /**
     * The client identifier of the Relying party at the OpenID Provider. This identifier is typically obtained when the Relying party is registered with the OpenID Provider. You can specify a regular expression so the AWS AppSync can validate against multiple client identifiers at a time
     */
    clientId?: String;
    /**
     * The number of milliseconds a token is valid after being issued to a user.
     */
    iatTTL?: Long;
    /**
     * The number of milliseconds a token is valid after being authenticated.
     */
    authTTL?: Long;
  }
  export type OutputType = "SDL"|"JSON"|string;
  export type PaginationToken = string;
  export interface Resolver {
    /**
     * The resolver type name.
     */
    typeName?: ResourceName;
    /**
     * The resolver field name.
     */
    fieldName?: ResourceName;
    /**
     * The resolver data source name.
     */
    dataSourceName?: ResourceName;
    /**
     * The resolver ARN.
     */
    resolverArn?: String;
    /**
     * The request mapping template.
     */
    requestMappingTemplate?: MappingTemplate;
    /**
     * The response mapping template.
     */
    responseMappingTemplate?: MappingTemplate;
  }
  export type Resolvers = Resolver[];
  export type ResourceName = string;
  export type SchemaStatus = "PROCESSING"|"ACTIVE"|"DELETING"|string;
  export interface StartSchemaCreationRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The schema definition, in GraphQL schema language format.
     */
    definition: _Blob;
  }
  export interface StartSchemaCreationResponse {
    /**
     * The current state of the schema (PROCESSING, ACTIVE, or DELETING). Once the schema is in the ACTIVE state, you can add data.
     */
    status?: SchemaStatus;
  }
  export type String = string;
  export interface Type {
    /**
     * The type name.
     */
    name?: ResourceName;
    /**
     * The type description.
     */
    description?: String;
    /**
     * The type ARN.
     */
    arn?: String;
    /**
     * The type definition.
     */
    definition?: String;
    /**
     * The type format: SDL or JSON.
     */
    format?: TypeDefinitionFormat;
  }
  export type TypeDefinitionFormat = "SDL"|"JSON"|string;
  export type TypeList = Type[];
  export interface UpdateApiKeyRequest {
    /**
     * The ID for the GraphQL API
     */
    apiId: String;
    /**
     * The API key ID.
     */
    id: String;
    /**
     * A description of the purpose of the API key.
     */
    description?: String;
    /**
     * The time from update time after which the API key expires. The date is represented as seconds since the epoch. For more information, see .
     */
    expires?: Long;
  }
  export interface UpdateApiKeyResponse {
    /**
     * The API key.
     */
    apiKey?: ApiKey;
  }
  export interface UpdateDataSourceRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The new name for the data source.
     */
    name: ResourceName;
    /**
     * The new description for the data source.
     */
    description?: String;
    /**
     * The new data source type.
     */
    type: DataSourceType;
    /**
     * The new service role ARN for the data source.
     */
    serviceRoleArn?: String;
    /**
     * The new DynamoDB configuration.
     */
    dynamodbConfig?: DynamodbDataSourceConfig;
    /**
     * The new Lambda configuration.
     */
    lambdaConfig?: LambdaDataSourceConfig;
    /**
     * The new Elasticsearch configuration.
     */
    elasticsearchConfig?: ElasticsearchDataSourceConfig;
  }
  export interface UpdateDataSourceResponse {
    /**
     * The updated DataSource object.
     */
    dataSource?: DataSource;
  }
  export interface UpdateGraphqlApiRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The new name for the GraphqlApi object.
     */
    name: String;
    /**
     * The Amazon CloudWatch logs configuration for the GraphqlApi object.
     */
    logConfig?: LogConfig;
    /**
     * The new authentication type for the GraphqlApi object.
     */
    authenticationType?: AuthenticationType;
    /**
     * The new Amazon Cognito User Pool configuration for the GraphqlApi object.
     */
    userPoolConfig?: UserPoolConfig;
    /**
     * The Open Id Connect configuration configuration for the GraphqlApi object.
     */
    openIDConnectConfig?: OpenIDConnectConfig;
  }
  export interface UpdateGraphqlApiResponse {
    /**
     * The updated GraphqlApi object.
     */
    graphqlApi?: GraphqlApi;
  }
  export interface UpdateResolverRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The new type name.
     */
    typeName: ResourceName;
    /**
     * The new field name.
     */
    fieldName: ResourceName;
    /**
     * The new data source name.
     */
    dataSourceName: ResourceName;
    /**
     * The new request mapping template.
     */
    requestMappingTemplate: MappingTemplate;
    /**
     * The new response mapping template.
     */
    responseMappingTemplate?: MappingTemplate;
  }
  export interface UpdateResolverResponse {
    /**
     * The updated Resolver object.
     */
    resolver?: Resolver;
  }
  export interface UpdateTypeRequest {
    /**
     * The API ID.
     */
    apiId: String;
    /**
     * The new type name.
     */
    typeName: ResourceName;
    /**
     * The new definition.
     */
    definition?: String;
    /**
     * The new type format: SDL or JSON.
     */
    format: TypeDefinitionFormat;
  }
  export interface UpdateTypeResponse {
    /**
     * The updated Type object.
     */
    type?: Type;
  }
  export interface UserPoolConfig {
    /**
     * The user pool ID.
     */
    userPoolId: String;
    /**
     * The AWS region in which the user pool was created.
     */
    awsRegion: String;
    /**
     * The action that you want your GraphQL API to take when a request that uses Amazon Cognito User Pool authentication doesn't match the Amazon Cognito User Pool configuration.
     */
    defaultAction: DefaultAction;
    /**
     * A regular expression for validating the incoming Amazon Cognito User Pool app client ID.
     */
    appIdClientRegex?: String;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-07-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the AppSync client.
   */
  export import Types = AppSync;
}
export = AppSync;
