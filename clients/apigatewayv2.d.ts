import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ApiGatewayV2 extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ApiGatewayV2.Types.ClientConfiguration)
  config: Config & ApiGatewayV2.Types.ClientConfiguration;
  /**
   * Creates an Api resource.
   */
  createApi(params: ApiGatewayV2.Types.CreateApiRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateApiResponse) => void): Request<ApiGatewayV2.Types.CreateApiResponse, AWSError>;
  /**
   * Creates an Api resource.
   */
  createApi(callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateApiResponse) => void): Request<ApiGatewayV2.Types.CreateApiResponse, AWSError>;
  /**
   * Creates an API mapping.
   */
  createApiMapping(params: ApiGatewayV2.Types.CreateApiMappingRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateApiMappingResponse) => void): Request<ApiGatewayV2.Types.CreateApiMappingResponse, AWSError>;
  /**
   * Creates an API mapping.
   */
  createApiMapping(callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateApiMappingResponse) => void): Request<ApiGatewayV2.Types.CreateApiMappingResponse, AWSError>;
  /**
   * Creates an Authorizer for an API.
   */
  createAuthorizer(params: ApiGatewayV2.Types.CreateAuthorizerRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateAuthorizerResponse) => void): Request<ApiGatewayV2.Types.CreateAuthorizerResponse, AWSError>;
  /**
   * Creates an Authorizer for an API.
   */
  createAuthorizer(callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateAuthorizerResponse) => void): Request<ApiGatewayV2.Types.CreateAuthorizerResponse, AWSError>;
  /**
   * Creates a Deployment for an API.
   */
  createDeployment(params: ApiGatewayV2.Types.CreateDeploymentRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateDeploymentResponse) => void): Request<ApiGatewayV2.Types.CreateDeploymentResponse, AWSError>;
  /**
   * Creates a Deployment for an API.
   */
  createDeployment(callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateDeploymentResponse) => void): Request<ApiGatewayV2.Types.CreateDeploymentResponse, AWSError>;
  /**
   * Creates a domain name.
   */
  createDomainName(params: ApiGatewayV2.Types.CreateDomainNameRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateDomainNameResponse) => void): Request<ApiGatewayV2.Types.CreateDomainNameResponse, AWSError>;
  /**
   * Creates a domain name.
   */
  createDomainName(callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateDomainNameResponse) => void): Request<ApiGatewayV2.Types.CreateDomainNameResponse, AWSError>;
  /**
   * Creates an Integration.
   */
  createIntegration(params: ApiGatewayV2.Types.CreateIntegrationRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateIntegrationResponse) => void): Request<ApiGatewayV2.Types.CreateIntegrationResponse, AWSError>;
  /**
   * Creates an Integration.
   */
  createIntegration(callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateIntegrationResponse) => void): Request<ApiGatewayV2.Types.CreateIntegrationResponse, AWSError>;
  /**
   * Creates an IntegrationResponses.
   */
  createIntegrationResponse(params: ApiGatewayV2.Types.CreateIntegrationResponseRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateIntegrationResponseResponse) => void): Request<ApiGatewayV2.Types.CreateIntegrationResponseResponse, AWSError>;
  /**
   * Creates an IntegrationResponses.
   */
  createIntegrationResponse(callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateIntegrationResponseResponse) => void): Request<ApiGatewayV2.Types.CreateIntegrationResponseResponse, AWSError>;
  /**
   * Creates a Model for an API.
   */
  createModel(params: ApiGatewayV2.Types.CreateModelRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateModelResponse) => void): Request<ApiGatewayV2.Types.CreateModelResponse, AWSError>;
  /**
   * Creates a Model for an API.
   */
  createModel(callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateModelResponse) => void): Request<ApiGatewayV2.Types.CreateModelResponse, AWSError>;
  /**
   * Creates a Route for an API.
   */
  createRoute(params: ApiGatewayV2.Types.CreateRouteRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateRouteResponse) => void): Request<ApiGatewayV2.Types.CreateRouteResponse, AWSError>;
  /**
   * Creates a Route for an API.
   */
  createRoute(callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateRouteResponse) => void): Request<ApiGatewayV2.Types.CreateRouteResponse, AWSError>;
  /**
   * Creates a RouteResponse for a Route.
   */
  createRouteResponse(params: ApiGatewayV2.Types.CreateRouteResponseRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateRouteResponseResponse) => void): Request<ApiGatewayV2.Types.CreateRouteResponseResponse, AWSError>;
  /**
   * Creates a RouteResponse for a Route.
   */
  createRouteResponse(callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateRouteResponseResponse) => void): Request<ApiGatewayV2.Types.CreateRouteResponseResponse, AWSError>;
  /**
   * Creates a Stage for an API.
   */
  createStage(params: ApiGatewayV2.Types.CreateStageRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateStageResponse) => void): Request<ApiGatewayV2.Types.CreateStageResponse, AWSError>;
  /**
   * Creates a Stage for an API.
   */
  createStage(callback?: (err: AWSError, data: ApiGatewayV2.Types.CreateStageResponse) => void): Request<ApiGatewayV2.Types.CreateStageResponse, AWSError>;
  /**
   * Deletes an Api resource.
   */
  deleteApi(params: ApiGatewayV2.Types.DeleteApiRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Api resource.
   */
  deleteApi(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an API mapping.
   */
  deleteApiMapping(params: ApiGatewayV2.Types.DeleteApiMappingRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an API mapping.
   */
  deleteApiMapping(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Authorizer.
   */
  deleteAuthorizer(params: ApiGatewayV2.Types.DeleteAuthorizerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Authorizer.
   */
  deleteAuthorizer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Deployment.
   */
  deleteDeployment(params: ApiGatewayV2.Types.DeleteDeploymentRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Deployment.
   */
  deleteDeployment(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a domain name.
   */
  deleteDomainName(params: ApiGatewayV2.Types.DeleteDomainNameRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a domain name.
   */
  deleteDomainName(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Integration.
   */
  deleteIntegration(params: ApiGatewayV2.Types.DeleteIntegrationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an Integration.
   */
  deleteIntegration(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an IntegrationResponses.
   */
  deleteIntegrationResponse(params: ApiGatewayV2.Types.DeleteIntegrationResponseRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an IntegrationResponses.
   */
  deleteIntegrationResponse(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Model.
   */
  deleteModel(params: ApiGatewayV2.Types.DeleteModelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Model.
   */
  deleteModel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Route.
   */
  deleteRoute(params: ApiGatewayV2.Types.DeleteRouteRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Route.
   */
  deleteRoute(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a RouteResponse.
   */
  deleteRouteResponse(params: ApiGatewayV2.Types.DeleteRouteResponseRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a RouteResponse.
   */
  deleteRouteResponse(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Stage.
   */
  deleteStage(params: ApiGatewayV2.Types.DeleteStageRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a Stage.
   */
  deleteStage(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets an Api resource.
   */
  getApi(params: ApiGatewayV2.Types.GetApiRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetApiResponse) => void): Request<ApiGatewayV2.Types.GetApiResponse, AWSError>;
  /**
   * Gets an Api resource.
   */
  getApi(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetApiResponse) => void): Request<ApiGatewayV2.Types.GetApiResponse, AWSError>;
  /**
   * The API mapping.
   */
  getApiMapping(params: ApiGatewayV2.Types.GetApiMappingRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetApiMappingResponse) => void): Request<ApiGatewayV2.Types.GetApiMappingResponse, AWSError>;
  /**
   * The API mapping.
   */
  getApiMapping(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetApiMappingResponse) => void): Request<ApiGatewayV2.Types.GetApiMappingResponse, AWSError>;
  /**
   * The API mappings.
   */
  getApiMappings(params: ApiGatewayV2.Types.GetApiMappingsRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetApiMappingsResponse) => void): Request<ApiGatewayV2.Types.GetApiMappingsResponse, AWSError>;
  /**
   * The API mappings.
   */
  getApiMappings(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetApiMappingsResponse) => void): Request<ApiGatewayV2.Types.GetApiMappingsResponse, AWSError>;
  /**
   * Gets a collection of Api resources.
   */
  getApis(params: ApiGatewayV2.Types.GetApisRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetApisResponse) => void): Request<ApiGatewayV2.Types.GetApisResponse, AWSError>;
  /**
   * Gets a collection of Api resources.
   */
  getApis(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetApisResponse) => void): Request<ApiGatewayV2.Types.GetApisResponse, AWSError>;
  /**
   * Gets an Authorizer.
   */
  getAuthorizer(params: ApiGatewayV2.Types.GetAuthorizerRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetAuthorizerResponse) => void): Request<ApiGatewayV2.Types.GetAuthorizerResponse, AWSError>;
  /**
   * Gets an Authorizer.
   */
  getAuthorizer(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetAuthorizerResponse) => void): Request<ApiGatewayV2.Types.GetAuthorizerResponse, AWSError>;
  /**
   * Gets the Authorizers for an API.
   */
  getAuthorizers(params: ApiGatewayV2.Types.GetAuthorizersRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetAuthorizersResponse) => void): Request<ApiGatewayV2.Types.GetAuthorizersResponse, AWSError>;
  /**
   * Gets the Authorizers for an API.
   */
  getAuthorizers(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetAuthorizersResponse) => void): Request<ApiGatewayV2.Types.GetAuthorizersResponse, AWSError>;
  /**
   * Gets a Deployment.
   */
  getDeployment(params: ApiGatewayV2.Types.GetDeploymentRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetDeploymentResponse) => void): Request<ApiGatewayV2.Types.GetDeploymentResponse, AWSError>;
  /**
   * Gets a Deployment.
   */
  getDeployment(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetDeploymentResponse) => void): Request<ApiGatewayV2.Types.GetDeploymentResponse, AWSError>;
  /**
   * Gets the Deployments for an API.
   */
  getDeployments(params: ApiGatewayV2.Types.GetDeploymentsRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetDeploymentsResponse) => void): Request<ApiGatewayV2.Types.GetDeploymentsResponse, AWSError>;
  /**
   * Gets the Deployments for an API.
   */
  getDeployments(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetDeploymentsResponse) => void): Request<ApiGatewayV2.Types.GetDeploymentsResponse, AWSError>;
  /**
   * Gets a domain name.
   */
  getDomainName(params: ApiGatewayV2.Types.GetDomainNameRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetDomainNameResponse) => void): Request<ApiGatewayV2.Types.GetDomainNameResponse, AWSError>;
  /**
   * Gets a domain name.
   */
  getDomainName(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetDomainNameResponse) => void): Request<ApiGatewayV2.Types.GetDomainNameResponse, AWSError>;
  /**
   * Gets the domain names for an AWS account.
   */
  getDomainNames(params: ApiGatewayV2.Types.GetDomainNamesRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetDomainNamesResponse) => void): Request<ApiGatewayV2.Types.GetDomainNamesResponse, AWSError>;
  /**
   * Gets the domain names for an AWS account.
   */
  getDomainNames(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetDomainNamesResponse) => void): Request<ApiGatewayV2.Types.GetDomainNamesResponse, AWSError>;
  /**
   * Gets an Integration.
   */
  getIntegration(params: ApiGatewayV2.Types.GetIntegrationRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetIntegrationResponse) => void): Request<ApiGatewayV2.Types.GetIntegrationResponse, AWSError>;
  /**
   * Gets an Integration.
   */
  getIntegration(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetIntegrationResponse) => void): Request<ApiGatewayV2.Types.GetIntegrationResponse, AWSError>;
  /**
   * Gets an IntegrationResponses.
   */
  getIntegrationResponse(params: ApiGatewayV2.Types.GetIntegrationResponseRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetIntegrationResponseResponse) => void): Request<ApiGatewayV2.Types.GetIntegrationResponseResponse, AWSError>;
  /**
   * Gets an IntegrationResponses.
   */
  getIntegrationResponse(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetIntegrationResponseResponse) => void): Request<ApiGatewayV2.Types.GetIntegrationResponseResponse, AWSError>;
  /**
   * Gets the IntegrationResponses for an Integration.
   */
  getIntegrationResponses(params: ApiGatewayV2.Types.GetIntegrationResponsesRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetIntegrationResponsesResponse) => void): Request<ApiGatewayV2.Types.GetIntegrationResponsesResponse, AWSError>;
  /**
   * Gets the IntegrationResponses for an Integration.
   */
  getIntegrationResponses(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetIntegrationResponsesResponse) => void): Request<ApiGatewayV2.Types.GetIntegrationResponsesResponse, AWSError>;
  /**
   * Gets the Integrations for an API.
   */
  getIntegrations(params: ApiGatewayV2.Types.GetIntegrationsRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetIntegrationsResponse) => void): Request<ApiGatewayV2.Types.GetIntegrationsResponse, AWSError>;
  /**
   * Gets the Integrations for an API.
   */
  getIntegrations(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetIntegrationsResponse) => void): Request<ApiGatewayV2.Types.GetIntegrationsResponse, AWSError>;
  /**
   * Gets a Model.
   */
  getModel(params: ApiGatewayV2.Types.GetModelRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetModelResponse) => void): Request<ApiGatewayV2.Types.GetModelResponse, AWSError>;
  /**
   * Gets a Model.
   */
  getModel(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetModelResponse) => void): Request<ApiGatewayV2.Types.GetModelResponse, AWSError>;
  /**
   * Gets a model template.
   */
  getModelTemplate(params: ApiGatewayV2.Types.GetModelTemplateRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetModelTemplateResponse) => void): Request<ApiGatewayV2.Types.GetModelTemplateResponse, AWSError>;
  /**
   * Gets a model template.
   */
  getModelTemplate(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetModelTemplateResponse) => void): Request<ApiGatewayV2.Types.GetModelTemplateResponse, AWSError>;
  /**
   * Gets the Models for an API.
   */
  getModels(params: ApiGatewayV2.Types.GetModelsRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetModelsResponse) => void): Request<ApiGatewayV2.Types.GetModelsResponse, AWSError>;
  /**
   * Gets the Models for an API.
   */
  getModels(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetModelsResponse) => void): Request<ApiGatewayV2.Types.GetModelsResponse, AWSError>;
  /**
   * Gets a Route.
   */
  getRoute(params: ApiGatewayV2.Types.GetRouteRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetRouteResponse) => void): Request<ApiGatewayV2.Types.GetRouteResponse, AWSError>;
  /**
   * Gets a Route.
   */
  getRoute(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetRouteResponse) => void): Request<ApiGatewayV2.Types.GetRouteResponse, AWSError>;
  /**
   * Gets a RouteResponse.
   */
  getRouteResponse(params: ApiGatewayV2.Types.GetRouteResponseRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetRouteResponseResponse) => void): Request<ApiGatewayV2.Types.GetRouteResponseResponse, AWSError>;
  /**
   * Gets a RouteResponse.
   */
  getRouteResponse(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetRouteResponseResponse) => void): Request<ApiGatewayV2.Types.GetRouteResponseResponse, AWSError>;
  /**
   * Gets the RouteResponses for a Route.
   */
  getRouteResponses(params: ApiGatewayV2.Types.GetRouteResponsesRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetRouteResponsesResponse) => void): Request<ApiGatewayV2.Types.GetRouteResponsesResponse, AWSError>;
  /**
   * Gets the RouteResponses for a Route.
   */
  getRouteResponses(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetRouteResponsesResponse) => void): Request<ApiGatewayV2.Types.GetRouteResponsesResponse, AWSError>;
  /**
   * Gets the Routes for an API.
   */
  getRoutes(params: ApiGatewayV2.Types.GetRoutesRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetRoutesResponse) => void): Request<ApiGatewayV2.Types.GetRoutesResponse, AWSError>;
  /**
   * Gets the Routes for an API.
   */
  getRoutes(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetRoutesResponse) => void): Request<ApiGatewayV2.Types.GetRoutesResponse, AWSError>;
  /**
   * Gets a Stage.
   */
  getStage(params: ApiGatewayV2.Types.GetStageRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetStageResponse) => void): Request<ApiGatewayV2.Types.GetStageResponse, AWSError>;
  /**
   * Gets a Stage.
   */
  getStage(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetStageResponse) => void): Request<ApiGatewayV2.Types.GetStageResponse, AWSError>;
  /**
   * Gets the Stages for an API.
   */
  getStages(params: ApiGatewayV2.Types.GetStagesRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetStagesResponse) => void): Request<ApiGatewayV2.Types.GetStagesResponse, AWSError>;
  /**
   * Gets the Stages for an API.
   */
  getStages(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetStagesResponse) => void): Request<ApiGatewayV2.Types.GetStagesResponse, AWSError>;
  /**
   * Gets the Tags for an API.
   */
  getTags(params: ApiGatewayV2.Types.GetTagsRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.GetTagsResponse) => void): Request<ApiGatewayV2.Types.GetTagsResponse, AWSError>;
  /**
   * Gets the Tags for an API.
   */
  getTags(callback?: (err: AWSError, data: ApiGatewayV2.Types.GetTagsResponse) => void): Request<ApiGatewayV2.Types.GetTagsResponse, AWSError>;
  /**
   * Tag an APIGW resource
   */
  tagResource(params: ApiGatewayV2.Types.TagResourceRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.TagResourceResponse) => void): Request<ApiGatewayV2.Types.TagResourceResponse, AWSError>;
  /**
   * Tag an APIGW resource
   */
  tagResource(callback?: (err: AWSError, data: ApiGatewayV2.Types.TagResourceResponse) => void): Request<ApiGatewayV2.Types.TagResourceResponse, AWSError>;
  /**
   * Untag an APIGW resource
   */
  untagResource(params: ApiGatewayV2.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Untag an APIGW resource
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates an Api resource.
   */
  updateApi(params: ApiGatewayV2.Types.UpdateApiRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateApiResponse) => void): Request<ApiGatewayV2.Types.UpdateApiResponse, AWSError>;
  /**
   * Updates an Api resource.
   */
  updateApi(callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateApiResponse) => void): Request<ApiGatewayV2.Types.UpdateApiResponse, AWSError>;
  /**
   * The API mapping.
   */
  updateApiMapping(params: ApiGatewayV2.Types.UpdateApiMappingRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateApiMappingResponse) => void): Request<ApiGatewayV2.Types.UpdateApiMappingResponse, AWSError>;
  /**
   * The API mapping.
   */
  updateApiMapping(callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateApiMappingResponse) => void): Request<ApiGatewayV2.Types.UpdateApiMappingResponse, AWSError>;
  /**
   * Updates an Authorizer.
   */
  updateAuthorizer(params: ApiGatewayV2.Types.UpdateAuthorizerRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateAuthorizerResponse) => void): Request<ApiGatewayV2.Types.UpdateAuthorizerResponse, AWSError>;
  /**
   * Updates an Authorizer.
   */
  updateAuthorizer(callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateAuthorizerResponse) => void): Request<ApiGatewayV2.Types.UpdateAuthorizerResponse, AWSError>;
  /**
   * Updates a Deployment.
   */
  updateDeployment(params: ApiGatewayV2.Types.UpdateDeploymentRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateDeploymentResponse) => void): Request<ApiGatewayV2.Types.UpdateDeploymentResponse, AWSError>;
  /**
   * Updates a Deployment.
   */
  updateDeployment(callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateDeploymentResponse) => void): Request<ApiGatewayV2.Types.UpdateDeploymentResponse, AWSError>;
  /**
   * Updates a domain name.
   */
  updateDomainName(params: ApiGatewayV2.Types.UpdateDomainNameRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateDomainNameResponse) => void): Request<ApiGatewayV2.Types.UpdateDomainNameResponse, AWSError>;
  /**
   * Updates a domain name.
   */
  updateDomainName(callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateDomainNameResponse) => void): Request<ApiGatewayV2.Types.UpdateDomainNameResponse, AWSError>;
  /**
   * Updates an Integration.
   */
  updateIntegration(params: ApiGatewayV2.Types.UpdateIntegrationRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateIntegrationResponse) => void): Request<ApiGatewayV2.Types.UpdateIntegrationResponse, AWSError>;
  /**
   * Updates an Integration.
   */
  updateIntegration(callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateIntegrationResponse) => void): Request<ApiGatewayV2.Types.UpdateIntegrationResponse, AWSError>;
  /**
   * Updates an IntegrationResponses.
   */
  updateIntegrationResponse(params: ApiGatewayV2.Types.UpdateIntegrationResponseRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateIntegrationResponseResponse) => void): Request<ApiGatewayV2.Types.UpdateIntegrationResponseResponse, AWSError>;
  /**
   * Updates an IntegrationResponses.
   */
  updateIntegrationResponse(callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateIntegrationResponseResponse) => void): Request<ApiGatewayV2.Types.UpdateIntegrationResponseResponse, AWSError>;
  /**
   * Updates a Model.
   */
  updateModel(params: ApiGatewayV2.Types.UpdateModelRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateModelResponse) => void): Request<ApiGatewayV2.Types.UpdateModelResponse, AWSError>;
  /**
   * Updates a Model.
   */
  updateModel(callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateModelResponse) => void): Request<ApiGatewayV2.Types.UpdateModelResponse, AWSError>;
  /**
   * Updates a Route.
   */
  updateRoute(params: ApiGatewayV2.Types.UpdateRouteRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateRouteResponse) => void): Request<ApiGatewayV2.Types.UpdateRouteResponse, AWSError>;
  /**
   * Updates a Route.
   */
  updateRoute(callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateRouteResponse) => void): Request<ApiGatewayV2.Types.UpdateRouteResponse, AWSError>;
  /**
   * Updates a RouteResponse.
   */
  updateRouteResponse(params: ApiGatewayV2.Types.UpdateRouteResponseRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateRouteResponseResponse) => void): Request<ApiGatewayV2.Types.UpdateRouteResponseResponse, AWSError>;
  /**
   * Updates a RouteResponse.
   */
  updateRouteResponse(callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateRouteResponseResponse) => void): Request<ApiGatewayV2.Types.UpdateRouteResponseResponse, AWSError>;
  /**
   * Updates a Stage.
   */
  updateStage(params: ApiGatewayV2.Types.UpdateStageRequest, callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateStageResponse) => void): Request<ApiGatewayV2.Types.UpdateStageResponse, AWSError>;
  /**
   * Updates a Stage.
   */
  updateStage(callback?: (err: AWSError, data: ApiGatewayV2.Types.UpdateStageResponse) => void): Request<ApiGatewayV2.Types.UpdateStageResponse, AWSError>;
}
declare namespace ApiGatewayV2 {
  export interface AccessLogSettings {
    /**
     * The ARN of the CloudWatch Logs log group to receive access logs.
     */
    DestinationArn?: Arn;
    /**
     * A single line format of the access logs of data, as specified by selected $context
 variables. The format must include at least $context.requestId.
     */
    Format?: StringWithLengthBetween1And1024;
  }
  export interface Api {
    /**
     * The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The
 stage name is typically appended to this URI to form a complete path to a deployed
 API stage.
     */
    ApiEndpoint?: __string;
    /**
     * The API ID.
     */
    ApiId?: Id;
    /**
     * An API key selection expression. See API Key Selection Expressions.
     */
    ApiKeySelectionExpression?: SelectionExpression;
    /**
     * The timestamp when the API was created.
     */
    CreatedDate?: __timestampIso8601;
    /**
     * The description of the API.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * Avoid validating models when creating a deployment.
     */
    DisableSchemaValidation?: __boolean;
    /**
     * The name of the API.
     */
    Name: StringWithLengthBetween1And128;
    /**
     * The API protocol: Currently only WEBSOCKET is supported.
     */
    ProtocolType: ProtocolType;
    /**
     * The route selection expression for the API.
     */
    RouteSelectionExpression: SelectionExpression;
    /**
     * A version identifier for the API.
     */
    Version?: StringWithLengthBetween1And64;
    /**
     * The warning messages reported when failonwarnings is turned on during
 API import.
     */
    Warnings?: __listOf__string;
    /**
     * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..
     */
    Tags?: Tags;
  }
  export interface ApiMapping {
    /**
     * The API identifier.
     */
    ApiId: Id;
    /**
     * The API mapping identifier.
     */
    ApiMappingId?: Id;
    /**
     * The API mapping key.
     */
    ApiMappingKey?: SelectionKey;
    /**
     * The API stage.
     */
    Stage: StringWithLengthBetween1And128;
  }
  export type Arn = string;
  export type AuthorizationScopes = StringWithLengthBetween1And64[];
  export type AuthorizationType = "NONE"|"AWS_IAM"|"CUSTOM"|string;
  export interface Authorizer {
    /**
     * Specifies the required credentials as an IAM role for API Gateway to invoke the
 authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon
 Resource Name (ARN). To use resource-based permissions on the Lambda function,
 specify null.
     */
    AuthorizerCredentialsArn?: Arn;
    /**
     * The authorizer identifier.
     */
    AuthorizerId?: Id;
    /**
     * The time to live (TTL), in seconds, of cached authorizer results. If it equals 0,
 authorization caching is disabled. If it is greater than 0, API Gateway will cache
 authorizer responses. If this field is not set, the default value is 300. The maximum
 value is 3600, or 1 hour.
     */
    AuthorizerResultTtlInSeconds?: IntegerWithLengthBetween0And3600;
    /**
     * The authorizer type. Currently the only valid value is REQUEST, for a
 Lambda function using incoming request parameters.
     */
    AuthorizerType?: AuthorizerType;
    /**
     * The authorizer's Uniform Resource Identifier (URI).
 ForREQUEST authorizers, this must be a
 well-formed Lambda function URI, for example,
 arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations.
 In general, the URI has this form:
 arn:aws:apigateway:{region}:lambda:path/{service_api}
 , where {region} is the same as the region hosting the Lambda
 function, path indicates that the remaining substring in the URI should be treated as
 the path to the resource, including the initial /. For Lambda functions,
 this is usually of the form
 /2015-03-31/functions/[FunctionARN]/invocations.
     */
    AuthorizerUri?: UriWithLengthBetween1And2048;
    /**
     * The identity source for which authorization is requested.For the REQUEST authorizer, this is required when authorization
 caching is enabled. The value is a comma-separated string of one or more mapping
 expressions of the specified request parameters. For example, if an Auth
 header and a Name query string parameters are defined as identity
 sources, this value is method.request.header.Auth,
 method.request.querystring.Name. These parameters will be used to
 derive the authorization caching key and to perform runtime validation of the
 REQUEST authorizer by verifying all of the identity-related request
 parameters are present, not null, and non-empty. Only when this is true does the
 authorizer invoke the authorizer Lambda function, otherwise, it returns a 401
 Unauthorized response without calling the Lambda function. The valid value
 is a string of comma-separated mapping expressions of the specified request
 parameters. When the authorization caching is not enabled, this property is
 optional.
     */
    IdentitySource?: IdentitySourceList;
    /**
     * The
 validation expression does not apply to the REQUEST authorizer.
     */
    IdentityValidationExpression?: StringWithLengthBetween0And1024;
    /**
     * The name of the authorizer.
     */
    Name: StringWithLengthBetween1And128;
    /**
     * For
 REQUEST authorizer, this is not
 defined.
     */
    ProviderArns?: ProviderArnList;
  }
  export type AuthorizerType = "REQUEST"|string;
  export type ConnectionType = "INTERNET"|"VPC_LINK"|string;
  export type ContentHandlingStrategy = "CONVERT_TO_BINARY"|"CONVERT_TO_TEXT"|string;
  export interface CreateApiMappingRequest {
    /**
     * The API identifier.
     */
    ApiId: Id;
    ApiMappingKey?: SelectionKey;
    /**
     * The domain name.
     */
    DomainName: __string;
    /**
     * The API stage.
     */
    Stage: StringWithLengthBetween1And128;
  }
  export interface CreateApiMappingResponse {
    /**
     * The API identifier.
     */
    ApiId?: Id;
    /**
     * The API mapping identifier.
     */
    ApiMappingId?: Id;
    /**
     * The API mapping key.
     */
    ApiMappingKey?: SelectionKey;
    /**
     * The API stage.
     */
    Stage?: StringWithLengthBetween1And128;
  }
  export interface CreateApiRequest {
    /**
     * An API key selection expression. See API Key Selection Expressions.
     */
    ApiKeySelectionExpression?: SelectionExpression;
    /**
     * The description of the API.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * Avoid validating models when creating a deployment.
     */
    DisableSchemaValidation?: __boolean;
    /**
     * The name of the API.
     */
    Name: StringWithLengthBetween1And128;
    /**
     * The API protocol: Currently only WEBSOCKET is supported.
     */
    ProtocolType: ProtocolType;
    /**
     * The route selection expression for the API.
     */
    RouteSelectionExpression: SelectionExpression;
    /**
     * A version identifier for the API.
     */
    Version?: StringWithLengthBetween1And64;
    /**
     * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..
     */
    Tags?: Tags;
  }
  export interface CreateApiResponse {
    /**
     * The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The
 stage name is typically appended to this URI to form a complete path to a deployed
 API stage.
     */
    ApiEndpoint?: __string;
    /**
     * The API ID.
     */
    ApiId?: Id;
    /**
     * An API key selection expression. See API Key Selection Expressions.
     */
    ApiKeySelectionExpression?: SelectionExpression;
    /**
     * The timestamp when the API was created.
     */
    CreatedDate?: __timestampIso8601;
    /**
     * The description of the API.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * Avoid validating models when creating a deployment.
     */
    DisableSchemaValidation?: __boolean;
    /**
     * The name of the API.
     */
    Name?: StringWithLengthBetween1And128;
    /**
     * The API protocol: Currently only WEBSOCKET is supported.
     */
    ProtocolType?: ProtocolType;
    /**
     * The route selection expression for the API.
     */
    RouteSelectionExpression?: SelectionExpression;
    /**
     * A version identifier for the API.
     */
    Version?: StringWithLengthBetween1And64;
    /**
     * The warning messages reported when failonwarnings is turned on during
 API import.
     */
    Warnings?: __listOf__string;
    /**
     * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..
     */
    Tags?: Tags;
  }
  export interface CreateAuthorizerRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * Specifies the required credentials as an IAM role for API Gateway to invoke the
 authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon
 Resource Name (ARN). To use resource-based permissions on the Lambda function,
 specify null.
     */
    AuthorizerCredentialsArn?: Arn;
    /**
     * The time to live (TTL), in seconds, of cached authorizer results. If it equals 0,
 authorization caching is disabled. If it is greater than 0, API Gateway will cache
 authorizer responses. If this field is not set, the default value is 300. The maximum
 value is 3600, or 1 hour.
     */
    AuthorizerResultTtlInSeconds?: IntegerWithLengthBetween0And3600;
    /**
     * The authorizer type. Currently the only valid value is REQUEST, for a
 Lambda function using incoming request parameters.
     */
    AuthorizerType: AuthorizerType;
    /**
     * The authorizer's Uniform Resource Identifier (URI). For
 REQUEST authorizers, this must be a
 well-formed Lambda function URI, for example,
 arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations.
 In general, the URI has this form:
 arn:aws:apigateway:{region}:lambda:path/{service_api}
 , where {region} is the same as the region hosting the Lambda
 function, path indicates that the remaining substring in the URI should be treated as
 the path to the resource, including the initial /. For Lambda functions,
 this is usually of the form
 /2015-03-31/functions/[FunctionARN]/invocations.
     */
    AuthorizerUri: UriWithLengthBetween1And2048;
    /**
     * The identity source for which authorization is requested.For the REQUEST authorizer, this is required when authorization
 caching is enabled. The value is a comma-separated string of one or more mapping
 expressions of the specified request parameters. For example, if an Auth
 header and a Name query string parameters are defined as identity
 sources, this value is method.request.header.Auth,
 method.request.querystring.Name. These parameters will be used to
 derive the authorization caching key and to perform runtime validation of the
 REQUEST authorizer by verifying all of the identity-related request
 parameters are present, not null, and non-empty. Only when this is true does the
 authorizer invoke the authorizer Lambda function, otherwise, it returns a 401
 Unauthorized response without calling the Lambda function. The valid value
 is a string of comma-separated mapping expressions of the specified request
 parameters. When the authorization caching is not enabled, this property is
 optional.
     */
    IdentitySource: IdentitySourceList;
    /**
     * The
 validation expression does not apply to the REQUEST authorizer.
     */
    IdentityValidationExpression?: StringWithLengthBetween0And1024;
    /**
     * The name of the authorizer.
     */
    Name: StringWithLengthBetween1And128;
    /**
     * For
 REQUEST authorizer, this is not
 defined.
     */
    ProviderArns?: ProviderArnList;
  }
  export interface CreateAuthorizerResponse {
    /**
     * Specifies the required credentials as an IAM role for API Gateway to invoke the
 authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon
 Resource Name (ARN). To use resource-based permissions on the Lambda function,
 specify null.
     */
    AuthorizerCredentialsArn?: Arn;
    /**
     * The authorizer identifier.
     */
    AuthorizerId?: Id;
    /**
     * The time to live (TTL), in seconds, of cached authorizer results. If it equals 0,
 authorization caching is disabled. If it is greater than 0, API Gateway will cache
 authorizer responses. If this field is not set, the default value is 300. The maximum
 value is 3600, or 1 hour.
     */
    AuthorizerResultTtlInSeconds?: IntegerWithLengthBetween0And3600;
    /**
     * The authorizer type. Currently the only valid value is REQUEST, for a
 Lambda function using incoming request parameters.
     */
    AuthorizerType?: AuthorizerType;
    /**
     * The authorizer's Uniform Resource Identifier (URI).
 ForREQUEST authorizers, this must be a
 well-formed Lambda function URI, for example,
 arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations.
 In general, the URI has this form:
 arn:aws:apigateway:{region}:lambda:path/{service_api}
 , where {region} is the same as the region hosting the Lambda
 function, path indicates that the remaining substring in the URI should be treated as
 the path to the resource, including the initial /. For Lambda functions,
 this is usually of the form
 /2015-03-31/functions/[FunctionARN]/invocations.
     */
    AuthorizerUri?: UriWithLengthBetween1And2048;
    /**
     * The identity source for which authorization is requested.For the REQUEST authorizer, this is required when authorization
 caching is enabled. The value is a comma-separated string of one or more mapping
 expressions of the specified request parameters. For example, if an Auth
 header and a Name query string parameters are defined as identity
 sources, this value is method.request.header.Auth,
 method.request.querystring.Name. These parameters will be used to
 derive the authorization caching key and to perform runtime validation of the
 REQUEST authorizer by verifying all of the identity-related request
 parameters are present, not null, and non-empty. Only when this is true does the
 authorizer invoke the authorizer Lambda function, otherwise, it returns a 401
 Unauthorized response without calling the Lambda function. The valid value
 is a string of comma-separated mapping expressions of the specified request
 parameters. When the authorization caching is not enabled, this property is
 optional.
     */
    IdentitySource?: IdentitySourceList;
    /**
     * The
 validation expression does not apply to the REQUEST authorizer.
     */
    IdentityValidationExpression?: StringWithLengthBetween0And1024;
    /**
     * The name of the authorizer.
     */
    Name?: StringWithLengthBetween1And128;
    /**
     * For
 REQUEST authorizer, this is not
 defined.
     */
    ProviderArns?: ProviderArnList;
  }
  export interface CreateDeploymentRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The description for the deployment resource.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * The name of the Stage resource for the Deployment
 resource to create.
     */
    StageName?: StringWithLengthBetween1And128;
  }
  export interface CreateDeploymentResponse {
    /**
     * The date and time when the Deployment resource was created.
     */
    CreatedDate?: __timestampIso8601;
    /**
     * The identifier for the deployment.
     */
    DeploymentId?: Id;
    /**
     * The status of the deployment: PENDING, FAILED, or
 SUCCEEDED.
     */
    DeploymentStatus?: DeploymentStatus;
    /**
     * May contain additional feedback on the status of an API deployment.
     */
    DeploymentStatusMessage?: __string;
    /**
     * The description for the deployment.
     */
    Description?: StringWithLengthBetween0And1024;
  }
  export interface CreateDomainNameRequest {
    /**
     * The domain name.
     */
    DomainName: StringWithLengthBetween1And512;
    /**
     * The domain name configurations.
     */
    DomainNameConfigurations?: DomainNameConfigurations;
    /**
     * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..
     */
    Tags?: Tags;
  }
  export interface CreateDomainNameResponse {
    /**
     * The API mapping selection expression.
     */
    ApiMappingSelectionExpression?: SelectionExpression;
    /**
     * The name of the DomainName resource.
     */
    DomainName?: StringWithLengthBetween1And512;
    /**
     * The domain name configurations.
     */
    DomainNameConfigurations?: DomainNameConfigurations;
    /**
     * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..
     */
    Tags?: Tags;
  }
  export interface CreateIntegrationRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The connection ID.
     */
    ConnectionId?: StringWithLengthBetween1And1024;
    /**
     * The type of the network connection to the integration endpoint. Currently the only
 valid value is INTERNET, for connections through the public routable
 internet.
     */
    ConnectionType?: ConnectionType;
    /**
     * Specifies how to handle response payload content type conversions. Supported
 values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the
 following behaviors:
 CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded
 string to the corresponding binary blob.
 CONVERT_TO_TEXT: Converts a response payload from a binary blob to a
 Base64-encoded string.If this property is not defined, the response payload will be passed through from
 the integration response to the route response or method response without
 modification.
     */
    ContentHandlingStrategy?: ContentHandlingStrategy;
    /**
     * Specifies the credentials required for the integration, if any. For AWS
 integrations, three options are available. To specify an IAM Role for API Gateway to
 assume, use the role's Amazon Resource Name (ARN). To require that the caller's
 identity be passed through from the request, specify the string
 arn:aws:iam::*:user/*. To use resource-based permissions on supported
 AWS services, specify null.
     */
    CredentialsArn?: Arn;
    /**
     * The description of the integration.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * Specifies the integration's HTTP method type.
     */
    IntegrationMethod?: StringWithLengthBetween1And64;
    /**
     * The integration type of an integration. One of the following:
 AWS: for integrating the route or method request with an AWS service
 action, including the Lambda function-invoking action. With the Lambda
 function-invoking action, this is referred to as the Lambda custom integration. With
 any other AWS service action, this is known as AWS integration.
 AWS_PROXY: for integrating the route or method request with the Lambda
 function-invoking action with the client request passed through as-is. This
 integration is also referred to as Lambda proxy integration.
 HTTP: for integrating the route or method request with an HTTP
 endpoint. This
 integration is also referred to as HTTP custom integration.
 HTTP_PROXY: for integrating route or method request with an HTTP
 endpoint, with the client
 request passed through as-is. This is also referred to as HTTP proxy
 integration.
 MOCK: for integrating the route or method request with API Gateway as a
 "loopback" endpoint without invoking any backend.
     */
    IntegrationType: IntegrationType;
    /**
     * For a Lambda proxy integration, this is the URI of the Lambda function.
     */
    IntegrationUri?: UriWithLengthBetween1And2048;
    /**
     * Specifies the pass-through behavior for incoming requests based on the
 Content-Type header in the request, and the available mapping
 templates specified as the requestTemplates property on the
 Integration resource. There are three valid values:
 WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and
 NEVER.
 WHEN_NO_MATCH passes the request body for unmapped content types through
 to the integration backend without transformation.
 NEVER rejects unmapped content types with an HTTP 415 Unsupported
 Media Type response.
 WHEN_NO_TEMPLATES allows pass-through when the integration has no
 content types mapped to templates. However, if there is at least one content type
 defined, unmapped content types will be rejected with the same HTTP 415
 Unsupported Media Type response.
     */
    PassthroughBehavior?: PassthroughBehavior;
    /**
     * A key-value map specifying request parameters that are passed from the method
 request to the backend. The key is an integration request parameter name and the
 associated value is a method request parameter value or static value that must be
 enclosed within single quotes and pre-encoded as required by the backend. The method
 request parameter value must match the pattern of
 method.request.{location}.{name}
 , where 
 {location}
  is querystring, path, or header; and 
 {name}
  must be a valid and unique method request parameter name.
     */
    RequestParameters?: IntegrationParameters;
    /**
     * Represents a map of Velocity templates that are applied on the request payload
 based on the value of the Content-Type header sent by the client. The content type
 value is the key in this map, and the template (as a String) is the value.
     */
    RequestTemplates?: TemplateMap;
    /**
     * The template selection expression for the integration.
     */
    TemplateSelectionExpression?: SelectionExpression;
    /**
     * Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000
 milliseconds or 29 seconds.
     */
    TimeoutInMillis?: IntegerWithLengthBetween50And29000;
  }
  export interface CreateIntegrationResponse {
    /**
     * The connection ID.
     */
    ConnectionId?: StringWithLengthBetween1And1024;
    /**
     * The type of the network connection to the integration endpoint. Currently the only
 valid value is INTERNET, for connections through the public routable
 internet.
     */
    ConnectionType?: ConnectionType;
    /**
     * Specifies how to handle response payload content type conversions. Supported
 values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the
 following behaviors:
 CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded
 string to the corresponding binary blob.
 CONVERT_TO_TEXT: Converts a response payload from a binary blob to a
 Base64-encoded string.If this property is not defined, the response payload will be passed through from
 the integration response to the route response or method response without
 modification.
     */
    ContentHandlingStrategy?: ContentHandlingStrategy;
    /**
     * Specifies the credentials required for the integration, if any. For AWS
 integrations, three options are available. To specify an IAM Role for API Gateway to
 assume, use the role's Amazon Resource Name (ARN). To require that the caller's
 identity be passed through from the request, specify the string
 arn:aws:iam::*:user/*. To use resource-based permissions on supported
 AWS services, specify null.
     */
    CredentialsArn?: Arn;
    /**
     * Represents the description of an integration.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * Represents the identifier of an integration.
     */
    IntegrationId?: Id;
    /**
     * Specifies the integration's HTTP method type.
     */
    IntegrationMethod?: StringWithLengthBetween1And64;
    /**
     * The integration response selection expression for the integration. See Integration Response Selection Expressions.
     */
    IntegrationResponseSelectionExpression?: SelectionExpression;
    /**
     * The integration type of an integration. One of the following:
 AWS: for integrating the route or method request with an AWS service
 action, including the Lambda function-invoking action. With the Lambda
 function-invoking action, this is referred to as the Lambda custom integration. With
 any other AWS service action, this is known as AWS integration.
 AWS_PROXY: for integrating the route or method request with the Lambda
 function-invoking action with the client request passed through as-is. This
 integration is also referred to as Lambda proxy integration.
 HTTP: for integrating the route or method request with an HTTP
 endpoint. This
 integration is also referred to as the HTTP custom integration.
 HTTP_PROXY: for integrating route or method request with an HTTP
 endpoint, with the client
 request passed through as-is. This is also referred to as HTTP proxy
 integration.
 MOCK: for integrating the route or method request with API Gateway as a
 "loopback" endpoint without invoking any backend.
     */
    IntegrationType?: IntegrationType;
    /**
     * For a Lambda proxy integration, this is the URI of the Lambda function.
     */
    IntegrationUri?: UriWithLengthBetween1And2048;
    /**
     * Specifies the pass-through behavior for incoming requests based on the
 Content-Type header in the request, and the available mapping
 templates specified as the requestTemplates property on the
 Integration resource. There are three valid values:
 WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and
 NEVER.
 WHEN_NO_MATCH passes the request body for unmapped content types through
 to the integration backend without transformation.
 NEVER rejects unmapped content types with an HTTP 415 Unsupported
 Media Type response.
 WHEN_NO_TEMPLATES allows pass-through when the integration has no
 content types mapped to templates. However, if there is at least one content type
 defined, unmapped content types will be rejected with the same HTTP 415
 Unsupported Media Type response.
     */
    PassthroughBehavior?: PassthroughBehavior;
    /**
     * A key-value map specifying request parameters that are passed from the method
 request to the backend. The key is an integration request parameter name and the
 associated value is a method request parameter value or static value that must be
 enclosed within single quotes and pre-encoded as required by the backend. The method
 request parameter value must match the pattern of
 method.request.{location}.{name}
 , where 
 {location}
  is querystring, path, or header; and 
 {name}
  must be a valid and unique method request parameter name.
     */
    RequestParameters?: IntegrationParameters;
    /**
     * Represents a map of Velocity templates that are applied on the request payload
 based on the value of the Content-Type header sent by the client. The content type
 value is the key in this map, and the template (as a String) is the value.
     */
    RequestTemplates?: TemplateMap;
    /**
     * The template selection expression for the integration.
     */
    TemplateSelectionExpression?: SelectionExpression;
    /**
     * Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000
 milliseconds or 29 seconds.
     */
    TimeoutInMillis?: IntegerWithLengthBetween50And29000;
  }
  export interface CreateIntegrationResponseRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * Specifies how to handle response payload content type conversions. Supported
 values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the
 following behaviors:
 CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded
 string to the corresponding binary blob.
 CONVERT_TO_TEXT: Converts a response payload from a binary blob to a
 Base64-encoded string.If this property is not defined, the response payload will be passed through from
 the integration response to the route response or method response without
 modification.
     */
    ContentHandlingStrategy?: ContentHandlingStrategy;
    /**
     * The integration ID.
     */
    IntegrationId: __string;
    /**
     * The integration response key.
     */
    IntegrationResponseKey: SelectionKey;
    /**
     * A key-value map specifying response parameters that are passed to the method
 response from the backend. The key is a method response header parameter name and the
 mapped value is an integration response header value, a static value enclosed within
 a pair of single quotes, or a JSON expression from the integration response body. The
 mapping key must match the pattern of method.response.header.{name},
 where {name} is a valid and unique header name. The mapped non-static
 value must match the pattern of integration.response.header.{name} or
 integration.response.body.{JSON-expression}, where
 {name} is a valid and unique response header name and
 {JSON-expression} is a valid JSON expression without the $
 prefix.
     */
    ResponseParameters?: IntegrationParameters;
    /**
     * The collection of response templates for the integration response as a
 string-to-string map of key-value pairs. Response templates are represented as a
 key/value map, with a content-type as the key and a template as the value.
     */
    ResponseTemplates?: TemplateMap;
    /**
     * The template selection expression for the integration response.
     */
    TemplateSelectionExpression?: SelectionExpression;
  }
  export interface CreateIntegrationResponseResponse {
    /**
     * Specifies how to handle response payload content type conversions. Supported
 values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the
 following behaviors:
 CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded
 string to the corresponding binary blob.
 CONVERT_TO_TEXT: Converts a response payload from a binary blob to a
 Base64-encoded string.If this property is not defined, the response payload will be passed through from
 the integration response to the route response or method response without
 modification.
     */
    ContentHandlingStrategy?: ContentHandlingStrategy;
    /**
     * The integration response ID.
     */
    IntegrationResponseId?: Id;
    /**
     * The integration response key.
     */
    IntegrationResponseKey?: SelectionKey;
    /**
     * A key-value map specifying response parameters that are passed to the method
 response from the backend. The key is a method response header parameter name and the
 mapped value is an integration response header value, a static value enclosed within
 a pair of single quotes, or a JSON expression from the integration response body. The
 mapping key must match the pattern of method.response.header.{name}, where name is a
 valid and unique header name. The mapped non-static value must match the pattern of
 integration.response.header.{name} or integration.response.body.{JSON-expression},
 where name is a valid and unique response header name and JSON-expression is a valid
 JSON expression without the $ prefix.
     */
    ResponseParameters?: IntegrationParameters;
    /**
     * The collection of response templates for the integration response as a
 string-to-string map of key-value pairs. Response templates are represented as a
 key/value map, with a content-type as the key and a template as the value.
     */
    ResponseTemplates?: TemplateMap;
    /**
     * The template selection expressions for the integration response.
     */
    TemplateSelectionExpression?: SelectionExpression;
  }
  export interface CreateModelRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The content-type for the model, for example, "application/json".
     */
    ContentType?: StringWithLengthBetween1And256;
    /**
     * The description of the model.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * The name of the model. Must be alphanumeric.
     */
    Name: StringWithLengthBetween1And128;
    /**
     * The schema for the model. For application/json models, this should be JSON schema
 draft 4 model.
     */
    Schema: StringWithLengthBetween0And32K;
  }
  export interface CreateModelResponse {
    /**
     * The content-type for the model, for example, "application/json".
     */
    ContentType?: StringWithLengthBetween1And256;
    /**
     * The description of the model.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * The model identifier.
     */
    ModelId?: Id;
    /**
     * The name of the model. Must be alphanumeric.
     */
    Name?: StringWithLengthBetween1And128;
    /**
     * The schema for the model. For application/json models, this should be JSON schema
 draft 4 model.
     */
    Schema?: StringWithLengthBetween0And32K;
  }
  export interface CreateRouteRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * Specifies whether an API key is required for the route.
     */
    ApiKeyRequired?: __boolean;
    /**
     * The authorization scopes supported by this
 route.
     */
    AuthorizationScopes?: AuthorizationScopes;
    /**
     * The authorization type for the route. Valid values are NONE for open
 access, AWS_IAM for using AWS IAM permissions, and CUSTOM
 for using a Lambda
 authorizer.
     */
    AuthorizationType?: AuthorizationType;
    /**
     * The identifier of the Authorizer resource to be associated with this
 route, if the authorizationType is CUSTOM
 . The authorizer identifier is generated by API Gateway
 when you created the authorizer.
     */
    AuthorizerId?: Id;
    /**
     * The model selection expression for the route.
     */
    ModelSelectionExpression?: SelectionExpression;
    /**
     * The operation name for the route.
     */
    OperationName?: StringWithLengthBetween1And64;
    /**
     * The request models for the route.
     */
    RequestModels?: RouteModels;
    /**
     * The request parameters for the route.
     */
    RequestParameters?: RouteParameters;
    /**
     * The route key for the route.
     */
    RouteKey: SelectionKey;
    /**
     * The route response selection expression for the route.
     */
    RouteResponseSelectionExpression?: SelectionExpression;
    /**
     * The target for the route.
     */
    Target?: StringWithLengthBetween1And128;
  }
  export interface CreateRouteResponse {
    /**
     * Specifies whether an API key is required for this route.
     */
    ApiKeyRequired?: __boolean;
    /**
     * A list of authorization scopes configured on a route. The scopes are used with a
 COGNITO_USER_POOLS authorizer to authorize the method invocation. The authorization
 works by matching the route scopes against the scopes parsed from the access token in
 the incoming request. The method invocation is authorized if any route scope matches
 a claimed scope in the access token. Otherwise, the invocation is not authorized.
 When the route scope is configured, the client must provide an access token instead
 of an identity token for authorization purposes.
     */
    AuthorizationScopes?: AuthorizationScopes;
    /**
     * The authorization type for the route. Valid values are NONE for open
 access, AWS_IAM for using AWS IAM permissions, and CUSTOM
 for using a Lambda
 authorizer
     */
    AuthorizationType?: AuthorizationType;
    /**
     * The identifier of the Authorizer resource to be associated with this
 route, if the authorizationType is CUSTOM
 . The authorizer identifier is generated by API Gateway
 when you created the authorizer.
     */
    AuthorizerId?: Id;
    /**
     * The model selection expression for the route.
     */
    ModelSelectionExpression?: SelectionExpression;
    /**
     * The operation name for the route.
     */
    OperationName?: StringWithLengthBetween1And64;
    /**
     * The request models for the route.
     */
    RequestModels?: RouteModels;
    /**
     * The request parameters for the route.
     */
    RequestParameters?: RouteParameters;
    /**
     * The route ID.
     */
    RouteId?: Id;
    /**
     * The route key for the route.
     */
    RouteKey?: SelectionKey;
    /**
     * The route response selection expression for the route.
     */
    RouteResponseSelectionExpression?: SelectionExpression;
    /**
     * The target for the route.
     */
    Target?: StringWithLengthBetween1And128;
  }
  export interface CreateRouteResponseRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The model selection expression for the route response.
     */
    ModelSelectionExpression?: SelectionExpression;
    /**
     * The response models for the route response.
     */
    ResponseModels?: RouteModels;
    /**
     * The route response parameters.
     */
    ResponseParameters?: RouteParameters;
    /**
     * The route ID.
     */
    RouteId: __string;
    /**
     * The route response key.
     */
    RouteResponseKey: SelectionKey;
  }
  export interface CreateRouteResponseResponse {
    /**
     * Represents the model selection expression of a route response.
     */
    ModelSelectionExpression?: SelectionExpression;
    /**
     * Represents the response models of a route response.
     */
    ResponseModels?: RouteModels;
    /**
     * Represents the response parameters of a route response.
     */
    ResponseParameters?: RouteParameters;
    /**
     * Represents the identifier of a route response.
     */
    RouteResponseId?: Id;
    /**
     * Represents the route response key of a route response.
     */
    RouteResponseKey?: SelectionKey;
  }
  export interface CreateStageRequest {
    /**
     * Settings for logging access in this stage.
     */
    AccessLogSettings?: AccessLogSettings;
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The identifier of a client certificate for a Stage.
     */
    ClientCertificateId?: Id;
    /**
     * The default route settings for the stage.
     */
    DefaultRouteSettings?: RouteSettings;
    /**
     * The deployment identifier of the API stage.
     */
    DeploymentId?: Id;
    /**
     * The description for the API stage.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * Route settings for the stage.
     */
    RouteSettings?: RouteSettingsMap;
    /**
     * The name of the stage.
     */
    StageName: StringWithLengthBetween1And128;
    /**
     * A map that defines the stage variables for a Stage. Variable names
 can have alphanumeric and underscore characters, and the values must match
 [A-Za-z0-9-._~:/?#&=,]+.
     */
    StageVariables?: StageVariablesMap;
    /**
     * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..
     */
    Tags?: Tags;
  }
  export interface CreateStageResponse {
    /**
     * Settings for logging access in this stage.
     */
    AccessLogSettings?: AccessLogSettings;
    /**
     * The identifier of a client certificate for a Stage.
     */
    ClientCertificateId?: Id;
    /**
     * The timestamp when the stage was created.
     */
    CreatedDate?: __timestampIso8601;
    /**
     * Default route settings for the stage.
     */
    DefaultRouteSettings?: RouteSettings;
    /**
     * The identifier of the Deployment that the Stage is
 associated with.
     */
    DeploymentId?: Id;
    /**
     * The description of the stage.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * The timestamp when the stage was last updated.
     */
    LastUpdatedDate?: __timestampIso8601;
    /**
     * Route settings for the stage.
     */
    RouteSettings?: RouteSettingsMap;
    /**
     * The name of the stage.
     */
    StageName?: StringWithLengthBetween1And128;
    /**
     * A map that defines the stage variables for a stage resource. Variable names can
 have alphanumeric and underscore characters, and the values must match
 [A-Za-z0-9-._~:/?#&=,]+.
     */
    StageVariables?: StageVariablesMap;
    /**
     * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..
     */
    Tags?: Tags;
  }
  export interface DeleteApiMappingRequest {
    /**
     * The API mapping identifier.
     */
    ApiMappingId: __string;
    /**
     * The domain name.
     */
    DomainName: __string;
  }
  export interface DeleteApiRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
  }
  export interface DeleteAuthorizerRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The authorizer identifier.
     */
    AuthorizerId: __string;
  }
  export interface DeleteDeploymentRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The deployment ID.
     */
    DeploymentId: __string;
  }
  export interface DeleteDomainNameRequest {
    /**
     * The domain name.
     */
    DomainName: __string;
  }
  export interface DeleteIntegrationRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The integration ID.
     */
    IntegrationId: __string;
  }
  export interface DeleteIntegrationResponseRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The integration ID.
     */
    IntegrationId: __string;
    /**
     * The integration response ID.
     */
    IntegrationResponseId: __string;
  }
  export interface DeleteModelRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The model ID.
     */
    ModelId: __string;
  }
  export interface DeleteRouteRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The route ID.
     */
    RouteId: __string;
  }
  export interface DeleteRouteResponseRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The route ID.
     */
    RouteId: __string;
    /**
     * The route response ID.
     */
    RouteResponseId: __string;
  }
  export interface DeleteStageRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The stage name.
     */
    StageName: __string;
  }
  export interface Deployment {
    /**
     * The date and time when the Deployment resource was created.
     */
    CreatedDate?: __timestampIso8601;
    /**
     * The identifier for the deployment.
     */
    DeploymentId?: Id;
    /**
     * The status of the deployment: PENDING, FAILED, or
 SUCCEEDED.
     */
    DeploymentStatus?: DeploymentStatus;
    /**
     * May contain additional feedback on the status of an API deployment.
     */
    DeploymentStatusMessage?: __string;
    /**
     * The description for the deployment.
     */
    Description?: StringWithLengthBetween0And1024;
  }
  export type DeploymentStatus = "PENDING"|"FAILED"|"DEPLOYED"|string;
  export interface DomainName {
    /**
     * The API mapping selection expression.
     */
    ApiMappingSelectionExpression?: SelectionExpression;
    /**
     * The name of the DomainName resource.
     */
    DomainName: StringWithLengthBetween1And512;
    /**
     * The domain name configurations.
     */
    DomainNameConfigurations?: DomainNameConfigurations;
    /**
     * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..
     */
    Tags?: Tags;
  }
  export interface DomainNameConfiguration {
    /**
     * A domain name for the WebSocket API.
     */
    ApiGatewayDomainName?: __string;
    /**
     * An AWS-managed certificate that will be used by the edge-optimized endpoint for
 this domain name. AWS Certificate Manager is the only supported source.
     */
    CertificateArn?: Arn;
    /**
     * The user-friendly name of the certificate that will be used by the edge-optimized
 endpoint for this domain name.
     */
    CertificateName?: StringWithLengthBetween1And128;
    /**
     * The timestamp when the certificate that was used by edge-optimized endpoint for
 this domain name was uploaded.
     */
    CertificateUploadDate?: __timestampIso8601;
    /**
     * The endpoint type.
     */
    EndpointType?: EndpointType;
    /**
     * The Amazon Route 53 Hosted Zone ID of the endpoint.
     */
    HostedZoneId?: __string;
    /**
     * The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2.
     */
    SecurityPolicy?: SecurityPolicy;
    /**
     * The status of the domain name migration. The valid values are AVAILABLE and UPDATING. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.
     */
    DomainNameStatus?: DomainNameStatus;
    /**
     * An optional text message containing detailed information about status of the domain name migration.
     */
    DomainNameStatusMessage?: __string;
  }
  export type DomainNameConfigurations = DomainNameConfiguration[];
  export type EndpointType = "REGIONAL"|"EDGE"|string;
  export type SecurityPolicy = "TLS_1_0"|"TLS_1_2"|string;
  export type DomainNameStatus = "AVAILABLE"|"UPDATING"|string;
  export interface GetApiMappingRequest {
    /**
     * The API mapping identifier.
     */
    ApiMappingId: __string;
    /**
     * The domain name.
     */
    DomainName: __string;
  }
  export interface GetApiMappingResponse {
    /**
     * The API identifier.
     */
    ApiId?: Id;
    /**
     * The API mapping identifier.
     */
    ApiMappingId?: Id;
    /**
     * The API mapping key.
     */
    ApiMappingKey?: SelectionKey;
    /**
     * The API stage.
     */
    Stage?: StringWithLengthBetween1And128;
  }
  export interface GetApiMappingsRequest {
    /**
     * The domain name.
     */
    DomainName: __string;
    /**
     * The maximum number of elements to be returned for this resource.
     */
    MaxResults?: __string;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: __string;
  }
  export interface GetApiMappingsResponse {
    /**
     * The elements from this collection.
     */
    Items?: __listOfApiMapping;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: NextToken;
  }
  export interface GetApiRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
  }
  export interface GetApiResponse {
    /**
     * The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The
 stage name is typically appended to this URI to form a complete path to a deployed
 API stage.
     */
    ApiEndpoint?: __string;
    /**
     * The API ID.
     */
    ApiId?: Id;
    /**
     * An API key selection expression. See API Key Selection Expressions.
     */
    ApiKeySelectionExpression?: SelectionExpression;
    /**
     * The timestamp when the API was created.
     */
    CreatedDate?: __timestampIso8601;
    /**
     * The description of the API.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * Avoid validating models when creating a deployment.
     */
    DisableSchemaValidation?: __boolean;
    /**
     * The name of the API.
     */
    Name?: StringWithLengthBetween1And128;
    /**
     * The API protocol: Currently only WEBSOCKET is supported.
     */
    ProtocolType?: ProtocolType;
    /**
     * The route selection expression for the API.
     */
    RouteSelectionExpression?: SelectionExpression;
    /**
     * A version identifier for the API.
     */
    Version?: StringWithLengthBetween1And64;
    /**
     * The warning messages reported when failonwarnings is turned on during
 API import.
     */
    Warnings?: __listOf__string;
    /**
     * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..
     */
    Tags?: Tags;
  }
  export interface GetApisRequest {
    /**
     * The maximum number of elements to be returned for this resource.
     */
    MaxResults?: __string;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: __string;
  }
  export interface GetApisResponse {
    /**
     * The elements from this collection.
     */
    Items?: __listOfApi;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: NextToken;
  }
  export interface GetAuthorizerRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The authorizer identifier.
     */
    AuthorizerId: __string;
  }
  export interface GetAuthorizerResponse {
    /**
     * Specifies the required credentials as an IAM role for API Gateway to invoke the
 authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon
 Resource Name (ARN). To use resource-based permissions on the Lambda function,
 specify null.
     */
    AuthorizerCredentialsArn?: Arn;
    /**
     * The authorizer identifier.
     */
    AuthorizerId?: Id;
    /**
     * The time to live (TTL), in seconds, of cached authorizer results. If it equals 0,
 authorization caching is disabled. If it is greater than 0, API Gateway will cache
 authorizer responses. If this field is not set, the default value is 300. The maximum
 value is 3600, or 1 hour.
     */
    AuthorizerResultTtlInSeconds?: IntegerWithLengthBetween0And3600;
    /**
     * The authorizer type. Currently the only valid value is REQUEST, for a
 Lambda function using incoming request parameters.
     */
    AuthorizerType?: AuthorizerType;
    /**
     * The authorizer's Uniform Resource Identifier (URI).
 ForREQUEST authorizers, this must be a
 well-formed Lambda function URI, for example,
 arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations.
 In general, the URI has this form:
 arn:aws:apigateway:{region}:lambda:path/{service_api}
 , where {region} is the same as the region hosting the Lambda
 function, path indicates that the remaining substring in the URI should be treated as
 the path to the resource, including the initial /. For Lambda functions,
 this is usually of the form
 /2015-03-31/functions/[FunctionARN]/invocations.
     */
    AuthorizerUri?: UriWithLengthBetween1And2048;
    /**
     * The identity source for which authorization is requested.For the REQUEST authorizer, this is required when authorization
 caching is enabled. The value is a comma-separated string of one or more mapping
 expressions of the specified request parameters. For example, if an Auth
 header and a Name query string parameters are defined as identity
 sources, this value is method.request.header.Auth,
 method.request.querystring.Name. These parameters will be used to
 derive the authorization caching key and to perform runtime validation of the
 REQUEST authorizer by verifying all of the identity-related request
 parameters are present, not null, and non-empty. Only when this is true does the
 authorizer invoke the authorizer Lambda function, otherwise, it returns a 401
 Unauthorized response without calling the Lambda function. The valid value
 is a string of comma-separated mapping expressions of the specified request
 parameters. When the authorization caching is not enabled, this property is
 optional.
     */
    IdentitySource?: IdentitySourceList;
    /**
     * The
 validation expression does not apply to the REQUEST authorizer.
     */
    IdentityValidationExpression?: StringWithLengthBetween0And1024;
    /**
     * The name of the authorizer.
     */
    Name?: StringWithLengthBetween1And128;
    /**
     * For
 REQUEST authorizer, this is not
 defined.
     */
    ProviderArns?: ProviderArnList;
  }
  export interface GetAuthorizersRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The maximum number of elements to be returned for this resource.
     */
    MaxResults?: __string;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: __string;
  }
  export interface GetAuthorizersResponse {
    /**
     * The elements from this collection.
     */
    Items?: __listOfAuthorizer;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: NextToken;
  }
  export interface GetDeploymentRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The deployment ID.
     */
    DeploymentId: __string;
  }
  export interface GetDeploymentResponse {
    /**
     * The date and time when the Deployment resource was created.
     */
    CreatedDate?: __timestampIso8601;
    /**
     * The identifier for the deployment.
     */
    DeploymentId?: Id;
    /**
     * The status of the deployment: PENDING, FAILED, or
 SUCCEEDED.
     */
    DeploymentStatus?: DeploymentStatus;
    /**
     * May contain additional feedback on the status of an API deployment.
     */
    DeploymentStatusMessage?: __string;
    /**
     * The description for the deployment.
     */
    Description?: StringWithLengthBetween0And1024;
  }
  export interface GetDeploymentsRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The maximum number of elements to be returned for this resource.
     */
    MaxResults?: __string;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: __string;
  }
  export interface GetDeploymentsResponse {
    /**
     * The elements from this collection.
     */
    Items?: __listOfDeployment;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: NextToken;
  }
  export interface GetDomainNameRequest {
    /**
     * The domain name.
     */
    DomainName: __string;
  }
  export interface GetDomainNameResponse {
    /**
     * The API mapping selection expression.
     */
    ApiMappingSelectionExpression?: SelectionExpression;
    /**
     * The name of the DomainName resource.
     */
    DomainName?: StringWithLengthBetween1And512;
    /**
     * The domain name configurations.
     */
    DomainNameConfigurations?: DomainNameConfigurations;
    /**
     * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..
     */
    Tags?: Tags;
  }
  export interface GetDomainNamesRequest {
    /**
     * The maximum number of elements to be returned for this resource.
     */
    MaxResults?: __string;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: __string;
  }
  export interface GetDomainNamesResponse {
    /**
     * The elements from this collection.
     */
    Items?: __listOfDomainName;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: NextToken;
  }
  export interface GetIntegrationRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The integration ID.
     */
    IntegrationId: __string;
  }
  export interface GetIntegrationResponse {
    /**
     * The connection ID.
     */
    ConnectionId?: StringWithLengthBetween1And1024;
    /**
     * The type of the network connection to the integration endpoint. Currently the only
 valid value is INTERNET, for connections through the public routable
 internet.
     */
    ConnectionType?: ConnectionType;
    /**
     * Specifies how to handle response payload content type conversions. Supported
 values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the
 following behaviors:
 CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded
 string to the corresponding binary blob.
 CONVERT_TO_TEXT: Converts a response payload from a binary blob to a
 Base64-encoded string.If this property is not defined, the response payload will be passed through from
 the integration response to the route response or method response without
 modification.
     */
    ContentHandlingStrategy?: ContentHandlingStrategy;
    /**
     * Specifies the credentials required for the integration, if any. For AWS
 integrations, three options are available. To specify an IAM Role for API Gateway to
 assume, use the role's Amazon Resource Name (ARN). To require that the caller's
 identity be passed through from the request, specify the string
 arn:aws:iam::*:user/*. To use resource-based permissions on supported
 AWS services, specify null.
     */
    CredentialsArn?: Arn;
    /**
     * Represents the description of an integration.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * Represents the identifier of an integration.
     */
    IntegrationId?: Id;
    /**
     * Specifies the integration's HTTP method type.
     */
    IntegrationMethod?: StringWithLengthBetween1And64;
    /**
     * The integration response selection expression for the integration. See Integration Response Selection Expressions.
     */
    IntegrationResponseSelectionExpression?: SelectionExpression;
    /**
     * The integration type of an integration. One of the following:
 AWS: for integrating the route or method request with an AWS service
 action, including the Lambda function-invoking action. With the Lambda
 function-invoking action, this is referred to as the Lambda custom integration. With
 any other AWS service action, this is known as AWS integration.
 AWS_PROXY: for integrating the route or method request with the Lambda
 function-invoking action with the client request passed through as-is. This
 integration is also referred to as Lambda proxy integration.
 HTTP: for integrating the route or method request with an HTTP
 endpoint. This
 integration is also referred to as the HTTP custom integration.
 HTTP_PROXY: for integrating route or method request with an HTTP
 endpoint, with the client
 request passed through as-is. This is also referred to as HTTP proxy
 integration.
 MOCK: for integrating the route or method request with API Gateway as a
 "loopback" endpoint without invoking any backend.
     */
    IntegrationType?: IntegrationType;
    /**
     * For a Lambda proxy integration, this is the URI of the Lambda function.
     */
    IntegrationUri?: UriWithLengthBetween1And2048;
    /**
     * Specifies the pass-through behavior for incoming requests based on the
 Content-Type header in the request, and the available mapping
 templates specified as the requestTemplates property on the
 Integration resource. There are three valid values:
 WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and
 NEVER.
 WHEN_NO_MATCH passes the request body for unmapped content types through
 to the integration backend without transformation.
 NEVER rejects unmapped content types with an HTTP 415 Unsupported
 Media Type response.
 WHEN_NO_TEMPLATES allows pass-through when the integration has no
 content types mapped to templates. However, if there is at least one content type
 defined, unmapped content types will be rejected with the same HTTP 415
 Unsupported Media Type response.
     */
    PassthroughBehavior?: PassthroughBehavior;
    /**
     * A key-value map specifying request parameters that are passed from the method
 request to the backend. The key is an integration request parameter name and the
 associated value is a method request parameter value or static value that must be
 enclosed within single quotes and pre-encoded as required by the backend. The method
 request parameter value must match the pattern of
 method.request.{location}.{name}
 , where 
 {location}
  is querystring, path, or header; and 
 {name}
  must be a valid and unique method request parameter name.
     */
    RequestParameters?: IntegrationParameters;
    /**
     * Represents a map of Velocity templates that are applied on the request payload
 based on the value of the Content-Type header sent by the client. The content type
 value is the key in this map, and the template (as a String) is the value.
     */
    RequestTemplates?: TemplateMap;
    /**
     * The template selection expression for the integration.
     */
    TemplateSelectionExpression?: SelectionExpression;
    /**
     * Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000
 milliseconds or 29 seconds.
     */
    TimeoutInMillis?: IntegerWithLengthBetween50And29000;
  }
  export interface GetIntegrationResponseRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The integration ID.
     */
    IntegrationId: __string;
    /**
     * The integration response ID.
     */
    IntegrationResponseId: __string;
  }
  export interface GetIntegrationResponseResponse {
    /**
     * Specifies how to handle response payload content type conversions. Supported
 values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the
 following behaviors:
 CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded
 string to the corresponding binary blob.
 CONVERT_TO_TEXT: Converts a response payload from a binary blob to a
 Base64-encoded string.If this property is not defined, the response payload will be passed through from
 the integration response to the route response or method response without
 modification.
     */
    ContentHandlingStrategy?: ContentHandlingStrategy;
    /**
     * The integration response ID.
     */
    IntegrationResponseId?: Id;
    /**
     * The integration response key.
     */
    IntegrationResponseKey?: SelectionKey;
    /**
     * A key-value map specifying response parameters that are passed to the method
 response from the backend. The key is a method response header parameter name and the
 mapped value is an integration response header value, a static value enclosed within
 a pair of single quotes, or a JSON expression from the integration response body. The
 mapping key must match the pattern of method.response.header.{name}, where name is a
 valid and unique header name. The mapped non-static value must match the pattern of
 integration.response.header.{name} or integration.response.body.{JSON-expression},
 where name is a valid and unique response header name and JSON-expression is a valid
 JSON expression without the $ prefix.
     */
    ResponseParameters?: IntegrationParameters;
    /**
     * The collection of response templates for the integration response as a
 string-to-string map of key-value pairs. Response templates are represented as a
 key/value map, with a content-type as the key and a template as the value.
     */
    ResponseTemplates?: TemplateMap;
    /**
     * The template selection expressions for the integration response.
     */
    TemplateSelectionExpression?: SelectionExpression;
  }
  export interface GetIntegrationResponsesRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The integration ID.
     */
    IntegrationId: __string;
    /**
     * The maximum number of elements to be returned for this resource.
     */
    MaxResults?: __string;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: __string;
  }
  export interface GetIntegrationResponsesResponse {
    /**
     * The elements from this collection.
     */
    Items?: __listOfIntegrationResponse;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: NextToken;
  }
  export interface GetIntegrationsRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The maximum number of elements to be returned for this resource.
     */
    MaxResults?: __string;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: __string;
  }
  export interface GetIntegrationsResponse {
    /**
     * The elements from this collection.
     */
    Items?: __listOfIntegration;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: NextToken;
  }
  export interface GetModelRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The model ID.
     */
    ModelId: __string;
  }
  export interface GetModelResponse {
    /**
     * The content-type for the model, for example, "application/json".
     */
    ContentType?: StringWithLengthBetween1And256;
    /**
     * The description of the model.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * The model identifier.
     */
    ModelId?: Id;
    /**
     * The name of the model. Must be alphanumeric.
     */
    Name?: StringWithLengthBetween1And128;
    /**
     * The schema for the model. For application/json models, this should be JSON schema
 draft 4 model.
     */
    Schema?: StringWithLengthBetween0And32K;
  }
  export interface GetModelTemplateRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The model ID.
     */
    ModelId: __string;
  }
  export interface GetModelTemplateResponse {
    /**
     * The template value.
     */
    Value?: __string;
  }
  export interface GetModelsRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The maximum number of elements to be returned for this resource.
     */
    MaxResults?: __string;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: __string;
  }
  export interface GetModelsResponse {
    /**
     * The elements from this collection.
     */
    Items?: __listOfModel;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: NextToken;
  }
  export interface GetRouteRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The route ID.
     */
    RouteId: __string;
  }
  export interface GetRouteResponse {
    /**
     * Specifies whether an API key is required for this route.
     */
    ApiKeyRequired?: __boolean;
    /**
     * A list of authorization scopes configured on a route. The scopes are used with a
 COGNITO_USER_POOLS authorizer to authorize the method invocation. The authorization
 works by matching the route scopes against the scopes parsed from the access token in
 the incoming request. The method invocation is authorized if any route scope matches
 a claimed scope in the access token. Otherwise, the invocation is not authorized.
 When the route scope is configured, the client must provide an access token instead
 of an identity token for authorization purposes.
     */
    AuthorizationScopes?: AuthorizationScopes;
    /**
     * The authorization type for the route. Valid values are NONE for open
 access, AWS_IAM for using AWS IAM permissions, and CUSTOM
 for using a Lambda
 authorizer
     */
    AuthorizationType?: AuthorizationType;
    /**
     * The identifier of the Authorizer resource to be associated with this
 route, if the authorizationType is CUSTOM
 . The authorizer identifier is generated by API Gateway
 when you created the authorizer.
     */
    AuthorizerId?: Id;
    /**
     * The model selection expression for the route.
     */
    ModelSelectionExpression?: SelectionExpression;
    /**
     * The operation name for the route.
     */
    OperationName?: StringWithLengthBetween1And64;
    /**
     * The request models for the route.
     */
    RequestModels?: RouteModels;
    /**
     * The request parameters for the route.
     */
    RequestParameters?: RouteParameters;
    /**
     * The route ID.
     */
    RouteId?: Id;
    /**
     * The route key for the route.
     */
    RouteKey?: SelectionKey;
    /**
     * The route response selection expression for the route.
     */
    RouteResponseSelectionExpression?: SelectionExpression;
    /**
     * The target for the route.
     */
    Target?: StringWithLengthBetween1And128;
  }
  export interface GetRouteResponseRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The route ID.
     */
    RouteId: __string;
    /**
     * The route response ID.
     */
    RouteResponseId: __string;
  }
  export interface GetRouteResponseResponse {
    /**
     * Represents the model selection expression of a route response.
     */
    ModelSelectionExpression?: SelectionExpression;
    /**
     * Represents the response models of a route response.
     */
    ResponseModels?: RouteModels;
    /**
     * Represents the response parameters of a route response.
     */
    ResponseParameters?: RouteParameters;
    /**
     * Represents the identifier of a route response.
     */
    RouteResponseId?: Id;
    /**
     * Represents the route response key of a route response.
     */
    RouteResponseKey?: SelectionKey;
  }
  export interface GetRouteResponsesRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The maximum number of elements to be returned for this resource.
     */
    MaxResults?: __string;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: __string;
    /**
     * The route ID.
     */
    RouteId: __string;
  }
  export interface GetRouteResponsesResponse {
    /**
     * The elements from this collection.
     */
    Items?: __listOfRouteResponse;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: NextToken;
  }
  export interface GetRoutesRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The maximum number of elements to be returned for this resource.
     */
    MaxResults?: __string;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: __string;
  }
  export interface GetRoutesResponse {
    /**
     * The elements from this collection.
     */
    Items?: __listOfRoute;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: NextToken;
  }
  export interface GetStageRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The stage name.
     */
    StageName: __string;
  }
  export interface GetStageResponse {
    /**
     * Settings for logging access in this stage.
     */
    AccessLogSettings?: AccessLogSettings;
    /**
     * The identifier of a client certificate for a Stage.
     */
    ClientCertificateId?: Id;
    /**
     * The timestamp when the stage was created.
     */
    CreatedDate?: __timestampIso8601;
    /**
     * Default route settings for the stage.
     */
    DefaultRouteSettings?: RouteSettings;
    /**
     * The identifier of the Deployment that the Stage is
 associated with.
     */
    DeploymentId?: Id;
    /**
     * The description of the stage.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * The timestamp when the stage was last updated.
     */
    LastUpdatedDate?: __timestampIso8601;
    /**
     * Route settings for the stage.
     */
    RouteSettings?: RouteSettingsMap;
    /**
     * The name of the stage.
     */
    StageName?: StringWithLengthBetween1And128;
    /**
     * A map that defines the stage variables for a stage resource. Variable names can
 have alphanumeric and underscore characters, and the values must match
 [A-Za-z0-9-._~:/?#&=,]+.
     */
    StageVariables?: StageVariablesMap;
    /**
     * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..
     */
    Tags?: Tags;
  }
  export interface GetStagesRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The maximum number of elements to be returned for this resource.
     */
    MaxResults?: __string;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: __string;
  }
  export interface GetStagesResponse {
    /**
     * The elements from this collection.
     */
    Items?: __listOfStage;
    /**
     * The next page of elements from this collection. Not valid for the last element of
 the collection.
     */
    NextToken?: NextToken;
  }
  export type Id = string;
  export type IdentitySourceList = __string[];
  export type IntegerWithLengthBetween0And3600 = number;
  export type IntegerWithLengthBetween50And29000 = number;
  export interface Integration {
    /**
     * The connection ID.
     */
    ConnectionId?: StringWithLengthBetween1And1024;
    /**
     * The type of the network connection to the integration endpoint. Currently the only
 valid value is INTERNET, for connections through the public routable
 internet.
     */
    ConnectionType?: ConnectionType;
    /**
     * Specifies how to handle response payload content type conversions. Supported
 values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the
 following behaviors:
 CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded
 string to the corresponding binary blob.
 CONVERT_TO_TEXT: Converts a response payload from a binary blob to a
 Base64-encoded string.If this property is not defined, the response payload will be passed through from
 the integration response to the route response or method response without
 modification.
     */
    ContentHandlingStrategy?: ContentHandlingStrategy;
    /**
     * Specifies the credentials required for the integration, if any. For AWS
 integrations, three options are available. To specify an IAM Role for API Gateway to
 assume, use the role's Amazon Resource Name (ARN). To require that the caller's
 identity be passed through from the request, specify the string
 arn:aws:iam::*:user/*. To use resource-based permissions on supported
 AWS services, specify null.
     */
    CredentialsArn?: Arn;
    /**
     * Represents the description of an integration.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * Represents the identifier of an integration.
     */
    IntegrationId?: Id;
    /**
     * Specifies the integration's HTTP method type.
     */
    IntegrationMethod?: StringWithLengthBetween1And64;
    /**
     * The integration response selection expression for the integration. See Integration Response Selection Expressions.
     */
    IntegrationResponseSelectionExpression?: SelectionExpression;
    /**
     * The integration type of an integration. One of the following:
 AWS: for integrating the route or method request with an AWS service
 action, including the Lambda function-invoking action. With the Lambda
 function-invoking action, this is referred to as the Lambda custom integration. With
 any other AWS service action, this is known as AWS integration.
 AWS_PROXY: for integrating the route or method request with the Lambda
 function-invoking action with the client request passed through as-is. This
 integration is also referred to as Lambda proxy integration.
 HTTP: for integrating the route or method request with an HTTP
 endpoint. This
 integration is also referred to as the HTTP custom integration.
 HTTP_PROXY: for integrating route or method request with an HTTP
 endpoint, with the client
 request passed through as-is. This is also referred to as HTTP proxy
 integration.
 MOCK: for integrating the route or method request with API Gateway as a
 "loopback" endpoint without invoking any backend.
     */
    IntegrationType?: IntegrationType;
    /**
     * For a Lambda proxy integration, this is the URI of the Lambda function.
     */
    IntegrationUri?: UriWithLengthBetween1And2048;
    /**
     * Specifies the pass-through behavior for incoming requests based on the
 Content-Type header in the request, and the available mapping
 templates specified as the requestTemplates property on the
 Integration resource. There are three valid values:
 WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and
 NEVER.
 WHEN_NO_MATCH passes the request body for unmapped content types through
 to the integration backend without transformation.
 NEVER rejects unmapped content types with an HTTP 415 Unsupported
 Media Type response.
 WHEN_NO_TEMPLATES allows pass-through when the integration has no
 content types mapped to templates. However, if there is at least one content type
 defined, unmapped content types will be rejected with the same HTTP 415
 Unsupported Media Type response.
     */
    PassthroughBehavior?: PassthroughBehavior;
    /**
     * A key-value map specifying request parameters that are passed from the method
 request to the backend. The key is an integration request parameter name and the
 associated value is a method request parameter value or static value that must be
 enclosed within single quotes and pre-encoded as required by the backend. The method
 request parameter value must match the pattern of
 method.request.{location}.{name}
 , where 
 {location}
  is querystring, path, or header; and 
 {name}
  must be a valid and unique method request parameter name.
     */
    RequestParameters?: IntegrationParameters;
    /**
     * Represents a map of Velocity templates that are applied on the request payload
 based on the value of the Content-Type header sent by the client. The content type
 value is the key in this map, and the template (as a String) is the value.
     */
    RequestTemplates?: TemplateMap;
    /**
     * The template selection expression for the integration.
     */
    TemplateSelectionExpression?: SelectionExpression;
    /**
     * Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000
 milliseconds or 29 seconds.
     */
    TimeoutInMillis?: IntegerWithLengthBetween50And29000;
  }
  export type IntegrationParameters = {[key: string]: StringWithLengthBetween1And512};
  export interface IntegrationResponse {
    /**
     * Specifies how to handle response payload content type conversions. Supported
 values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the
 following behaviors:
 CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded
 string to the corresponding binary blob.
 CONVERT_TO_TEXT: Converts a response payload from a binary blob to a
 Base64-encoded string.If this property is not defined, the response payload will be passed through from
 the integration response to the route response or method response without
 modification.
     */
    ContentHandlingStrategy?: ContentHandlingStrategy;
    /**
     * The integration response ID.
     */
    IntegrationResponseId?: Id;
    /**
     * The integration response key.
     */
    IntegrationResponseKey: SelectionKey;
    /**
     * A key-value map specifying response parameters that are passed to the method
 response from the backend. The key is a method response header parameter name and the
 mapped value is an integration response header value, a static value enclosed within
 a pair of single quotes, or a JSON expression from the integration response body. The
 mapping key must match the pattern of method.response.header.{name}, where name is a
 valid and unique header name. The mapped non-static value must match the pattern of
 integration.response.header.{name} or integration.response.body.{JSON-expression},
 where name is a valid and unique response header name and JSON-expression is a valid
 JSON expression without the $ prefix.
     */
    ResponseParameters?: IntegrationParameters;
    /**
     * The collection of response templates for the integration response as a
 string-to-string map of key-value pairs. Response templates are represented as a
 key/value map, with a content-type as the key and a template as the value.
     */
    ResponseTemplates?: TemplateMap;
    /**
     * The template selection expressions for the integration response.
     */
    TemplateSelectionExpression?: SelectionExpression;
  }
  export type IntegrationType = "AWS"|"HTTP"|"MOCK"|"HTTP_PROXY"|"AWS_PROXY"|string;
  export interface GetTagsRequest {
    ResourceArn: __string;
  }
  export interface GetTagsResponse {
    Tags?: __mapOf__string;
  }
  export type LoggingLevel = "ERROR"|"INFO"|"false"|string;
  export interface Model {
    /**
     * The content-type for the model, for example, "application/json".
     */
    ContentType?: StringWithLengthBetween1And256;
    /**
     * The description of the model.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * The model identifier.
     */
    ModelId?: Id;
    /**
     * The name of the model. Must be alphanumeric.
     */
    Name: StringWithLengthBetween1And128;
    /**
     * The schema for the model. For application/json models, this should be JSON schema
 draft 4 model.
     */
    Schema?: StringWithLengthBetween0And32K;
  }
  export type NextToken = string;
  export interface ParameterConstraints {
    /**
     * Whether or not the parameter is required.
     */
    Required?: __boolean;
  }
  export type PassthroughBehavior = "WHEN_NO_MATCH"|"NEVER"|"WHEN_NO_TEMPLATES"|string;
  export type ProtocolType = "WEBSOCKET"|string;
  export type ProviderArnList = Arn[];
  export interface Route {
    /**
     * Specifies whether an API key is required for this route.
     */
    ApiKeyRequired?: __boolean;
    /**
     * A list of authorization scopes configured on a route. The scopes are used with a
 COGNITO_USER_POOLS authorizer to authorize the method invocation. The authorization
 works by matching the route scopes against the scopes parsed from the access token in
 the incoming request. The method invocation is authorized if any route scope matches
 a claimed scope in the access token. Otherwise, the invocation is not authorized.
 When the route scope is configured, the client must provide an access token instead
 of an identity token for authorization purposes.
     */
    AuthorizationScopes?: AuthorizationScopes;
    /**
     * The authorization type for the route. Valid values are NONE for open
 access, AWS_IAM for using AWS IAM permissions, and CUSTOM
 for using a Lambda
 authorizer
     */
    AuthorizationType?: AuthorizationType;
    /**
     * The identifier of the Authorizer resource to be associated with this
 route, if the authorizationType is CUSTOM
 . The authorizer identifier is generated by API Gateway
 when you created the authorizer.
     */
    AuthorizerId?: Id;
    /**
     * The model selection expression for the route.
     */
    ModelSelectionExpression?: SelectionExpression;
    /**
     * The operation name for the route.
     */
    OperationName?: StringWithLengthBetween1And64;
    /**
     * The request models for the route.
     */
    RequestModels?: RouteModels;
    /**
     * The request parameters for the route.
     */
    RequestParameters?: RouteParameters;
    /**
     * The route ID.
     */
    RouteId?: Id;
    /**
     * The route key for the route.
     */
    RouteKey: SelectionKey;
    /**
     * The route response selection expression for the route.
     */
    RouteResponseSelectionExpression?: SelectionExpression;
    /**
     * The target for the route.
     */
    Target?: StringWithLengthBetween1And128;
  }
  export type RouteModels = {[key: string]: StringWithLengthBetween1And128};
  export type RouteParameters = {[key: string]: ParameterConstraints};
  export interface RouteResponse {
    /**
     * Represents the model selection expression of a route response.
     */
    ModelSelectionExpression?: SelectionExpression;
    /**
     * Represents the response models of a route response.
     */
    ResponseModels?: RouteModels;
    /**
     * Represents the response parameters of a route response.
     */
    ResponseParameters?: RouteParameters;
    /**
     * Represents the identifier of a route response.
     */
    RouteResponseId?: Id;
    /**
     * Represents the route response key of a route response.
     */
    RouteResponseKey: SelectionKey;
  }
  export interface RouteSettings {
    /**
     * Specifies whether (true) or not (false) data trace
 logging is enabled for this route. This property affects the log entries pushed to
 Amazon CloudWatch Logs.
     */
    DataTraceEnabled?: __boolean;
    /**
     * Specifies whether detailed metrics are enabled.
     */
    DetailedMetricsEnabled?: __boolean;
    /**
     * Specifies the logging level for this route: DEBUG, INFO,
 or WARN. This property affects the log entries pushed to Amazon
 CloudWatch Logs.
     */
    LoggingLevel?: LoggingLevel;
    /**
     * Specifies the throttling burst limit.
     */
    ThrottlingBurstLimit?: __integer;
    /**
     * Specifies the throttling rate limit.
     */
    ThrottlingRateLimit?: __double;
  }
  export type RouteSettingsMap = {[key: string]: RouteSettings};
  export type SelectionExpression = string;
  export type SelectionKey = string;
  export interface Stage {
    /**
     * Settings for logging access in this stage.
     */
    AccessLogSettings?: AccessLogSettings;
    /**
     * The identifier of a client certificate for a Stage.
     */
    ClientCertificateId?: Id;
    /**
     * The timestamp when the stage was created.
     */
    CreatedDate?: __timestampIso8601;
    /**
     * Default route settings for the stage.
     */
    DefaultRouteSettings?: RouteSettings;
    /**
     * The identifier of the Deployment that the Stage is
 associated with.
     */
    DeploymentId?: Id;
    /**
     * The description of the stage.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * The timestamp when the stage was last updated.
     */
    LastUpdatedDate?: __timestampIso8601;
    /**
     * Route settings for the stage.
     */
    RouteSettings?: RouteSettingsMap;
    /**
     * The name of the stage.
     */
    StageName: StringWithLengthBetween1And128;
    /**
     * A map that defines the stage variables for a stage resource. Variable names can
 have alphanumeric and underscore characters, and the values must match
 [A-Za-z0-9-._~:/?#&=,]+.
     */
    StageVariables?: StageVariablesMap;
    /**
     * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..
     */
    Tags?: Tags;
  }
  export type StageVariablesMap = {[key: string]: StringWithLengthBetween0And2048};
  export type StringWithLengthBetween0And1024 = string;
  export type StringWithLengthBetween0And2048 = string;
  export type StringWithLengthBetween0And32K = string;
  export type StringWithLengthBetween1And1024 = string;
  export type StringWithLengthBetween1And128 = string;
  export type StringWithLengthBetween1And256 = string;
  export type StringWithLengthBetween1And512 = string;
  export type StringWithLengthBetween1And64 = string;
  export type StringWithLengthBetween1And1600 = string;
  export interface TagResourceRequest {
    /**
     * AWS resource arn 
     */
    ResourceArn: __string;
    /**
     * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..
     */
    Tags?: Tags;
  }
  export interface TagResourceResponse {
  }
  export type Tags = {[key: string]: StringWithLengthBetween1And1600};
  export interface UntagResourceRequest {
    /**
     * AWS resource arn 
     */
    ResourceArn: __string;
    /**
     * The Tag keys to delete
     */
    TagKeys: __listOf__string;
  }
  export type TemplateMap = {[key: string]: StringWithLengthBetween0And32K};
  export interface UpdateApiMappingRequest {
    /**
     * The API identifier.
     */
    ApiId: Id;
    /**
     * The API mapping identifier.
     */
    ApiMappingId: __string;
    /**
     * The API mapping key.
     */
    ApiMappingKey?: SelectionKey;
    /**
     * The domain name.
     */
    DomainName: __string;
    /**
     * The API stage.
     */
    Stage?: StringWithLengthBetween1And128;
  }
  export interface UpdateApiMappingResponse {
    /**
     * The API identifier.
     */
    ApiId?: Id;
    /**
     * The API mapping identifier.
     */
    ApiMappingId?: Id;
    /**
     * The API mapping key.
     */
    ApiMappingKey?: SelectionKey;
    /**
     * The API stage.
     */
    Stage?: StringWithLengthBetween1And128;
  }
  export interface UpdateApiRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * An API key selection expression. See API Key Selection Expressions.
     */
    ApiKeySelectionExpression?: SelectionExpression;
    /**
     * The description of the API.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * Avoid validating models when creating a deployment.
     */
    DisableSchemaValidation?: __boolean;
    /**
     * The name of the API.
     */
    Name?: StringWithLengthBetween1And128;
    /**
     * The route selection expression for the API.
     */
    RouteSelectionExpression?: SelectionExpression;
    /**
     * A version identifier for the API.
     */
    Version?: StringWithLengthBetween1And64;
  }
  export interface UpdateApiResponse {
    /**
     * The URI of the API, of the form {api-id}.execute-api.{region}.amazonaws.com. The
 stage name is typically appended to this URI to form a complete path to a deployed
 API stage.
     */
    ApiEndpoint?: __string;
    /**
     * The API ID.
     */
    ApiId?: Id;
    /**
     * An API key selection expression. See API Key Selection Expressions.
     */
    ApiKeySelectionExpression?: SelectionExpression;
    /**
     * The timestamp when the API was created.
     */
    CreatedDate?: __timestampIso8601;
    /**
     * The description of the API.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * Avoid validating models when creating a deployment.
     */
    DisableSchemaValidation?: __boolean;
    /**
     * The name of the API.
     */
    Name?: StringWithLengthBetween1And128;
    /**
     * The API protocol: Currently only WEBSOCKET is supported.
     */
    ProtocolType?: ProtocolType;
    /**
     * The route selection expression for the API.
     */
    RouteSelectionExpression?: SelectionExpression;
    /**
     * A version identifier for the API.
     */
    Version?: StringWithLengthBetween1And64;
    /**
     * The warning messages reported when failonwarnings is turned on during
 API import.
     */
    Warnings?: __listOf__string;
  }
  export interface UpdateAuthorizerRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * Specifies the required credentials as an IAM role for API Gateway to invoke the
 authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon
 Resource Name (ARN). To use resource-based permissions on the Lambda function,
 specify null.
     */
    AuthorizerCredentialsArn?: Arn;
    /**
     * The authorizer identifier.
     */
    AuthorizerId: __string;
    /**
     * The time to live (TTL), in seconds, of cached authorizer results. If it is zero,
 authorization caching is disabled. If it is greater than zero, API Gateway will cache
 authorizer responses. If this field is not set, the default value is 300. The maximum
 value is 3600, or 1 hour.
     */
    AuthorizerResultTtlInSeconds?: IntegerWithLengthBetween0And3600;
    /**
     * The authorizer type. Currently the only valid value is REQUEST, for a
 Lambda function using incoming request parameters.
     */
    AuthorizerType?: AuthorizerType;
    /**
     * The authorizer's Uniform Resource Identifier (URI). For
 REQUEST authorizers, this must be a
 well-formed Lambda function URI, for example,
 arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations.
 In general, the URI has this form:
 arn:aws:apigateway:{region}:lambda:path/{service_api}
 , where {region} is the same as the region hosting the Lambda
 function, path indicates that the remaining substring in the URI should be treated as
 the path to the resource, including the initial /. For Lambda functions,
 this is usually of the form
 /2015-03-31/functions/[FunctionARN]/invocations.
     */
    AuthorizerUri?: UriWithLengthBetween1And2048;
    /**
     * The identity source for which authorization is requested.For the REQUEST authorizer, this is required when authorization
 caching is enabled. The value is a comma-separated string of one or more mapping
 expressions of the specified request parameters. For example, if an Auth header, a
 Name query string parameter are defined as identity sources, this value is
 $method.request.header.Auth, $method.request.querystring.Name. These
 parameters will be used to derive the authorization caching key and to perform
 runtime validation of the REQUEST authorizer by verifying all of the
 identity-related request parameters are present, not null and non-empty. Only when
 this is true does the authorizer invoke the authorizer Lambda function, otherwise, it
 returns a 401 Unauthorized response without calling the Lambda function.
 The valid value is a string of comma-separated mapping expressions of the specified
 request parameters. When the authorization caching is not enabled, this property is
 optional.
     */
    IdentitySource?: IdentitySourceList;
    /**
     * The
 validation expression does not apply to the REQUEST authorizer.
     */
    IdentityValidationExpression?: StringWithLengthBetween0And1024;
    /**
     * The name of the authorizer.
     */
    Name?: StringWithLengthBetween1And128;
    /**
     * For
 REQUEST authorizer, this is not
 defined.
     */
    ProviderArns?: ProviderArnList;
  }
  export interface UpdateAuthorizerResponse {
    /**
     * Specifies the required credentials as an IAM role for API Gateway to invoke the
 authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon
 Resource Name (ARN). To use resource-based permissions on the Lambda function,
 specify null.
     */
    AuthorizerCredentialsArn?: Arn;
    /**
     * The authorizer identifier.
     */
    AuthorizerId?: Id;
    /**
     * The time to live (TTL), in seconds, of cached authorizer results. If it equals 0,
 authorization caching is disabled. If it is greater than 0, API Gateway will cache
 authorizer responses. If this field is not set, the default value is 300. The maximum
 value is 3600, or 1 hour.
     */
    AuthorizerResultTtlInSeconds?: IntegerWithLengthBetween0And3600;
    /**
     * The authorizer type. Currently the only valid value is REQUEST, for a
 Lambda function using incoming request parameters.
     */
    AuthorizerType?: AuthorizerType;
    /**
     * The authorizer's Uniform Resource Identifier (URI).
 ForREQUEST authorizers, this must be a
 well-formed Lambda function URI, for example,
 arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations.
 In general, the URI has this form:
 arn:aws:apigateway:{region}:lambda:path/{service_api}
 , where {region} is the same as the region hosting the Lambda
 function, path indicates that the remaining substring in the URI should be treated as
 the path to the resource, including the initial /. For Lambda functions,
 this is usually of the form
 /2015-03-31/functions/[FunctionARN]/invocations.
     */
    AuthorizerUri?: UriWithLengthBetween1And2048;
    /**
     * The identity source for which authorization is requested.For the REQUEST authorizer, this is required when authorization
 caching is enabled. The value is a comma-separated string of one or more mapping
 expressions of the specified request parameters. For example, if an Auth
 header and a Name query string parameters are defined as identity
 sources, this value is method.request.header.Auth,
 method.request.querystring.Name. These parameters will be used to
 derive the authorization caching key and to perform runtime validation of the
 REQUEST authorizer by verifying all of the identity-related request
 parameters are present, not null, and non-empty. Only when this is true does the
 authorizer invoke the authorizer Lambda function, otherwise, it returns a 401
 Unauthorized response without calling the Lambda function. The valid value
 is a string of comma-separated mapping expressions of the specified request
 parameters. When the authorization caching is not enabled, this property is
 optional.
     */
    IdentitySource?: IdentitySourceList;
    /**
     * The
 validation expression does not apply to the REQUEST authorizer.
     */
    IdentityValidationExpression?: StringWithLengthBetween0And1024;
    /**
     * The name of the authorizer.
     */
    Name?: StringWithLengthBetween1And128;
    /**
     * For
 REQUEST authorizer, this is not
 defined.
     */
    ProviderArns?: ProviderArnList;
  }
  export interface UpdateDeploymentRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The deployment ID.
     */
    DeploymentId: __string;
    /**
     * The description for the deployment resource.
     */
    Description?: StringWithLengthBetween0And1024;
  }
  export interface UpdateDeploymentResponse {
    /**
     * The date and time when the Deployment resource was created.
     */
    CreatedDate?: __timestampIso8601;
    /**
     * The identifier for the deployment.
     */
    DeploymentId?: Id;
    /**
     * The status of the deployment: PENDING, FAILED, or
 SUCCEEDED.
     */
    DeploymentStatus?: DeploymentStatus;
    /**
     * May contain additional feedback on the status of an API deployment.
     */
    DeploymentStatusMessage?: __string;
    /**
     * The description for the deployment.
     */
    Description?: StringWithLengthBetween0And1024;
  }
  export interface UpdateDomainNameRequest {
    /**
     * The domain name.
     */
    DomainName: __string;
    /**
     * The domain name configurations.
     */
    DomainNameConfigurations?: DomainNameConfigurations;
  }
  export interface UpdateDomainNameResponse {
    /**
     * The API mapping selection expression.
     */
    ApiMappingSelectionExpression?: SelectionExpression;
    /**
     * The name of the DomainName resource.
     */
    DomainName?: StringWithLengthBetween1And512;
    /**
     * The domain name configurations.
     */
    DomainNameConfigurations?: DomainNameConfigurations;
  }
  export interface UpdateIntegrationRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The connection ID.
     */
    ConnectionId?: StringWithLengthBetween1And1024;
    /**
     * The type of the network connection to the integration endpoint. Currently the only
 valid value is INTERNET, for connections through the public routable
 internet.
     */
    ConnectionType?: ConnectionType;
    /**
     * Specifies how to handle response payload content type conversions. Supported
 values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the
 following behaviors:
 CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded
 string to the corresponding binary blob.
 CONVERT_TO_TEXT: Converts a response payload from a binary blob to a
 Base64-encoded string.If this property is not defined, the response payload will be passed through from
 the integration response to the route response or method response without
 modification.
     */
    ContentHandlingStrategy?: ContentHandlingStrategy;
    /**
     * Specifies the credentials required for the integration, if any. For AWS
 integrations, three options are available. To specify an IAM Role for API Gateway to
 assume, use the role's Amazon Resource Name (ARN). To require that the caller's
 identity be passed through from the request, specify the string
 arn:aws:iam::*:user/*. To use resource-based permissions on supported
 AWS services, specify null.
     */
    CredentialsArn?: Arn;
    /**
     * The description of the integration
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * The integration ID.
     */
    IntegrationId: __string;
    /**
     * Specifies the integration's HTTP method type.
     */
    IntegrationMethod?: StringWithLengthBetween1And64;
    /**
     * The integration type of an integration. One of the following:
 AWS: for integrating the route or method request with an AWS service
 action, including the Lambda function-invoking action. With the Lambda
 function-invoking action, this is referred to as the Lambda custom integration. With
 any other AWS service action, this is known as AWS integration.
 AWS_PROXY: for integrating the route or method request with the Lambda
 function-invoking action with the client request passed through as-is. This
 integration is also referred to as Lambda proxy integration.
 HTTP: for integrating the route or method request with an HTTP
 endpoint. This
 integration is also referred to as the HTTP custom integration.
 HTTP_PROXY: for integrating route or method request with an HTTP
 endpoint, with the client
 request passed through as-is. This is also referred to as HTTP proxy
 integration.
 MOCK: for integrating the route or method request with API Gateway as a
 "loopback" endpoint without invoking any backend.
     */
    IntegrationType?: IntegrationType;
    /**
     * For a Lambda proxy integration, this is the URI of the Lambda function.
     */
    IntegrationUri?: UriWithLengthBetween1And2048;
    /**
     * Specifies the pass-through behavior for incoming requests based on the
 Content-Type header in the request, and the available mapping
 templates specified as the requestTemplates property on the
 Integration resource. There are three valid values:
 WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and
 NEVER.
 WHEN_NO_MATCH passes the request body for unmapped content types through
 to the integration backend without transformation.
 NEVER rejects unmapped content types with an HTTP 415 Unsupported
 Media Type response.
 WHEN_NO_TEMPLATES allows pass-through when the integration has no
 content types mapped to templates. However, if there is at least one content type
 defined, unmapped content types will be rejected with the same HTTP 415
 Unsupported Media Type response.
     */
    PassthroughBehavior?: PassthroughBehavior;
    /**
     * A key-value map specifying request parameters that are passed from the method
 request to the backend. The key is an integration request parameter name and the
 associated value is a method request parameter value or static value that must be
 enclosed within single quotes and pre-encoded as required by the backend. The method
 request parameter value must match the pattern of
 method.request.{location}.{name}
 , where 
 {location}
  is querystring, path, or header; and 
 {name}
  must be a valid and unique method request parameter name.
     */
    RequestParameters?: IntegrationParameters;
    /**
     * Represents a map of Velocity templates that are applied on the request payload
 based on the value of the Content-Type header sent by the client. The content type
 value is the key in this map, and the template (as a String) is the value.
     */
    RequestTemplates?: TemplateMap;
    /**
     * The template selection expression for the integration.
     */
    TemplateSelectionExpression?: SelectionExpression;
    /**
     * Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000
 milliseconds or 29 seconds.
     */
    TimeoutInMillis?: IntegerWithLengthBetween50And29000;
  }
  export interface UpdateIntegrationResponse {
    /**
     * The connection ID.
     */
    ConnectionId?: StringWithLengthBetween1And1024;
    /**
     * The type of the network connection to the integration endpoint. Currently the only
 valid value is INTERNET, for connections through the public routable
 internet.
     */
    ConnectionType?: ConnectionType;
    /**
     * Specifies how to handle response payload content type conversions. Supported
 values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the
 following behaviors:
 CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded
 string to the corresponding binary blob.
 CONVERT_TO_TEXT: Converts a response payload from a binary blob to a
 Base64-encoded string.If this property is not defined, the response payload will be passed through from
 the integration response to the route response or method response without
 modification.
     */
    ContentHandlingStrategy?: ContentHandlingStrategy;
    /**
     * Specifies the credentials required for the integration, if any. For AWS
 integrations, three options are available. To specify an IAM Role for API Gateway to
 assume, use the role's Amazon Resource Name (ARN). To require that the caller's
 identity be passed through from the request, specify the string
 arn:aws:iam::*:user/*. To use resource-based permissions on supported
 AWS services, specify null.
     */
    CredentialsArn?: Arn;
    /**
     * Represents the description of an integration.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * Represents the identifier of an integration.
     */
    IntegrationId?: Id;
    /**
     * Specifies the integration's HTTP method type.
     */
    IntegrationMethod?: StringWithLengthBetween1And64;
    /**
     * The integration response selection expression for the integration. See Integration Response Selection Expressions.
     */
    IntegrationResponseSelectionExpression?: SelectionExpression;
    /**
     * The integration type of an integration. One of the following:
 AWS: for integrating the route or method request with an AWS service
 action, including the Lambda function-invoking action. With the Lambda
 function-invoking action, this is referred to as the Lambda custom integration. With
 any other AWS service action, this is known as AWS integration.
 AWS_PROXY: for integrating the route or method request with the Lambda
 function-invoking action with the client request passed through as-is. This
 integration is also referred to as Lambda proxy integration.
 HTTP: for integrating the route or method request with an HTTP
 endpoint. This
 integration is also referred to as the HTTP custom integration.
 HTTP_PROXY: for integrating route or method request with an HTTP
 endpoint, with the client
 request passed through as-is. This is also referred to as HTTP proxy
 integration.
 MOCK: for integrating the route or method request with API Gateway as a
 "loopback" endpoint without invoking any backend.
     */
    IntegrationType?: IntegrationType;
    /**
     * For a Lambda proxy integration, this is the URI of the Lambda function.
     */
    IntegrationUri?: UriWithLengthBetween1And2048;
    /**
     * Specifies the pass-through behavior for incoming requests based on the
 Content-Type header in the request, and the available mapping
 templates specified as the requestTemplates property on the
 Integration resource. There are three valid values:
 WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and
 NEVER.
 WHEN_NO_MATCH passes the request body for unmapped content types through
 to the integration backend without transformation.
 NEVER rejects unmapped content types with an HTTP 415 Unsupported
 Media Type response.
 WHEN_NO_TEMPLATES allows pass-through when the integration has no
 content types mapped to templates. However, if there is at least one content type
 defined, unmapped content types will be rejected with the same HTTP 415
 Unsupported Media Type response.
     */
    PassthroughBehavior?: PassthroughBehavior;
    /**
     * A key-value map specifying request parameters that are passed from the method
 request to the backend. The key is an integration request parameter name and the
 associated value is a method request parameter value or static value that must be
 enclosed within single quotes and pre-encoded as required by the backend. The method
 request parameter value must match the pattern of
 method.request.{location}.{name}
 , where 
 {location}
  is querystring, path, or header; and 
 {name}
  must be a valid and unique method request parameter name.
     */
    RequestParameters?: IntegrationParameters;
    /**
     * Represents a map of Velocity templates that are applied on the request payload
 based on the value of the Content-Type header sent by the client. The content type
 value is the key in this map, and the template (as a String) is the value.
     */
    RequestTemplates?: TemplateMap;
    /**
     * The template selection expression for the integration.
     */
    TemplateSelectionExpression?: SelectionExpression;
    /**
     * Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000
 milliseconds or 29 seconds.
     */
    TimeoutInMillis?: IntegerWithLengthBetween50And29000;
  }
  export interface UpdateIntegrationResponseRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * Specifies how to handle response payload content type conversions. Supported
 values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the
 following behaviors:
 CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded
 string to the corresponding binary blob.
 CONVERT_TO_TEXT: Converts a response payload from a binary blob to a
 Base64-encoded string.If this property is not defined, the response payload will be passed through from
 the integration response to the route response or method response without
 modification.
     */
    ContentHandlingStrategy?: ContentHandlingStrategy;
    /**
     * The integration ID.
     */
    IntegrationId: __string;
    /**
     * The integration response ID.
     */
    IntegrationResponseId: __string;
    /**
     * The integration response key.
     */
    IntegrationResponseKey?: SelectionKey;
    /**
     * A key-value map specifying response parameters that are passed to the method
 response from the backend. The key is a method response header parameter name and the
 mapped value is an integration response header value, a static value enclosed within
 a pair of single quotes, or a JSON expression from the integration response body. The
 mapping key must match the pattern of
 method.response.header.{name}
 , where name is a valid and unique header name. The mapped non-static value
 must match the pattern of
 integration.response.header.{name}
  or
 integration.response.body.{JSON-expression}
 , where 
 {name}
  is a valid and unique response header name and 
 {JSON-expression}
  is a valid JSON expression without the $ prefix.
     */
    ResponseParameters?: IntegrationParameters;
    /**
     * The collection of response templates for the integration response as a
 string-to-string map of key-value pairs. Response templates are represented as a
 key/value map, with a content-type as the key and a template as the value.
     */
    ResponseTemplates?: TemplateMap;
    /**
     * The template selection expression for the integration response.
     */
    TemplateSelectionExpression?: SelectionExpression;
  }
  export interface UpdateIntegrationResponseResponse {
    /**
     * Specifies how to handle response payload content type conversions. Supported
 values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the
 following behaviors:
 CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded
 string to the corresponding binary blob.
 CONVERT_TO_TEXT: Converts a response payload from a binary blob to a
 Base64-encoded string.If this property is not defined, the response payload will be passed through from
 the integration response to the route response or method response without
 modification.
     */
    ContentHandlingStrategy?: ContentHandlingStrategy;
    /**
     * The integration response ID.
     */
    IntegrationResponseId?: Id;
    /**
     * The integration response key.
     */
    IntegrationResponseKey?: SelectionKey;
    /**
     * A key-value map specifying response parameters that are passed to the method
 response from the backend. The key is a method response header parameter name and the
 mapped value is an integration response header value, a static value enclosed within
 a pair of single quotes, or a JSON expression from the integration response body. The
 mapping key must match the pattern of method.response.header.{name}, where name is a
 valid and unique header name. The mapped non-static value must match the pattern of
 integration.response.header.{name} or integration.response.body.{JSON-expression},
 where name is a valid and unique response header name and JSON-expression is a valid
 JSON expression without the $ prefix.
     */
    ResponseParameters?: IntegrationParameters;
    /**
     * The collection of response templates for the integration response as a
 string-to-string map of key-value pairs. Response templates are represented as a
 key/value map, with a content-type as the key and a template as the value.
     */
    ResponseTemplates?: TemplateMap;
    /**
     * The template selection expressions for the integration response.
     */
    TemplateSelectionExpression?: SelectionExpression;
  }
  export interface UpdateModelRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The content-type for the model, for example, "application/json".
     */
    ContentType?: StringWithLengthBetween1And256;
    /**
     * The description of the model.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * The model ID.
     */
    ModelId: __string;
    /**
     * The name of the model.
     */
    Name?: StringWithLengthBetween1And128;
    /**
     * The schema for the model. For application/json models, this should be JSON schema
 draft 4 model.
     */
    Schema?: StringWithLengthBetween0And32K;
  }
  export interface UpdateModelResponse {
    /**
     * The content-type for the model, for example, "application/json".
     */
    ContentType?: StringWithLengthBetween1And256;
    /**
     * The description of the model.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * The model identifier.
     */
    ModelId?: Id;
    /**
     * The name of the model. Must be alphanumeric.
     */
    Name?: StringWithLengthBetween1And128;
    /**
     * The schema for the model. For application/json models, this should be JSON schema
 draft 4 model.
     */
    Schema?: StringWithLengthBetween0And32K;
  }
  export interface UpdateRouteRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * Specifies whether an API key is required for the route.
     */
    ApiKeyRequired?: __boolean;
    /**
     * The authorization scopes supported by this
 route.
     */
    AuthorizationScopes?: AuthorizationScopes;
    /**
     * The authorization type for the route. Valid values are NONE for open
 access, AWS_IAM for using AWS IAM permissions, and CUSTOM
 for using a Lambda
 authorizer.
     */
    AuthorizationType?: AuthorizationType;
    /**
     * The identifier of the Authorizer resource to be associated with this
 route, if the authorizationType is CUSTOM
 . The authorizer identifier is generated by API Gateway
 when you created the authorizer.
     */
    AuthorizerId?: Id;
    /**
     * The model selection expression for the route.
     */
    ModelSelectionExpression?: SelectionExpression;
    /**
     * The operation name for the route.
     */
    OperationName?: StringWithLengthBetween1And64;
    /**
     * The request models for the route.
     */
    RequestModels?: RouteModels;
    /**
     * The request parameters for the route.
     */
    RequestParameters?: RouteParameters;
    /**
     * The route ID.
     */
    RouteId: __string;
    /**
     * The route key for the route.
     */
    RouteKey?: SelectionKey;
    /**
     * The route response selection expression for the route.
     */
    RouteResponseSelectionExpression?: SelectionExpression;
    /**
     * The target for the route.
     */
    Target?: StringWithLengthBetween1And128;
  }
  export interface UpdateRouteResponse {
    /**
     * Specifies whether an API key is required for this route.
     */
    ApiKeyRequired?: __boolean;
    /**
     * A list of authorization scopes configured on a route. The scopes are used with a
 COGNITO_USER_POOLS authorizer to authorize the method invocation. The authorization
 works by matching the route scopes against the scopes parsed from the access token in
 the incoming request. The method invocation is authorized if any route scope matches
 a claimed scope in the access token. Otherwise, the invocation is not authorized.
 When the route scope is configured, the client must provide an access token instead
 of an identity token for authorization purposes.
     */
    AuthorizationScopes?: AuthorizationScopes;
    /**
     * The authorization type for the route. Valid values are NONE for open
 access, AWS_IAM for using AWS IAM permissions, and CUSTOM
 for using a Lambda
 authorizer
     */
    AuthorizationType?: AuthorizationType;
    /**
     * The identifier of the Authorizer resource to be associated with this
 route, if the authorizationType is CUSTOM
 . The authorizer identifier is generated by API Gateway
 when you created the authorizer.
     */
    AuthorizerId?: Id;
    /**
     * The model selection expression for the route.
     */
    ModelSelectionExpression?: SelectionExpression;
    /**
     * The operation name for the route.
     */
    OperationName?: StringWithLengthBetween1And64;
    /**
     * The request models for the route.
     */
    RequestModels?: RouteModels;
    /**
     * The request parameters for the route.
     */
    RequestParameters?: RouteParameters;
    /**
     * The route ID.
     */
    RouteId?: Id;
    /**
     * The route key for the route.
     */
    RouteKey?: SelectionKey;
    /**
     * The route response selection expression for the route.
     */
    RouteResponseSelectionExpression?: SelectionExpression;
    /**
     * The target for the route.
     */
    Target?: StringWithLengthBetween1And128;
  }
  export interface UpdateRouteResponseRequest {
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The model selection expression for the route response.
     */
    ModelSelectionExpression?: SelectionExpression;
    /**
     * The response models for the route response.
     */
    ResponseModels?: RouteModels;
    /**
     * The route response parameters.
     */
    ResponseParameters?: RouteParameters;
    /**
     * The route ID.
     */
    RouteId: __string;
    /**
     * The route response ID.
     */
    RouteResponseId: __string;
    /**
     * The route response key.
     */
    RouteResponseKey?: SelectionKey;
  }
  export interface UpdateRouteResponseResponse {
    /**
     * Represents the model selection expression of a route response.
     */
    ModelSelectionExpression?: SelectionExpression;
    /**
     * Represents the response models of a route response.
     */
    ResponseModels?: RouteModels;
    /**
     * Represents the response parameters of a route response.
     */
    ResponseParameters?: RouteParameters;
    /**
     * Represents the identifier of a route response.
     */
    RouteResponseId?: Id;
    /**
     * Represents the route response key of a route response.
     */
    RouteResponseKey?: SelectionKey;
  }
  export interface UpdateStageRequest {
    /**
     * Settings for logging access in this stage.
     */
    AccessLogSettings?: AccessLogSettings;
    /**
     * The API identifier.
     */
    ApiId: __string;
    /**
     * The identifier of a client certificate for a Stage.
     */
    ClientCertificateId?: Id;
    /**
     * The default route settings for the stage.
     */
    DefaultRouteSettings?: RouteSettings;
    /**
     * The deployment identifier for the API stage.
     */
    DeploymentId?: Id;
    /**
     * The description for the API stage.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * Route settings for the stage.
     */
    RouteSettings?: RouteSettingsMap;
    /**
     * The stage name.
     */
    StageName: __string;
    /**
     * A map that defines the stage variables for a Stage. Variable names
 can have alphanumeric and underscore characters, and the values must match
 [A-Za-z0-9-._~:/?#&=,]+.
     */
    StageVariables?: StageVariablesMap;
  }
  export interface UpdateStageResponse {
    /**
     * Settings for logging access in this stage.
     */
    AccessLogSettings?: AccessLogSettings;
    /**
     * The identifier of a client certificate for a Stage.
     */
    ClientCertificateId?: Id;
    /**
     * The timestamp when the stage was created.
     */
    CreatedDate?: __timestampIso8601;
    /**
     * Default route settings for the stage.
     */
    DefaultRouteSettings?: RouteSettings;
    /**
     * The identifier of the Deployment that the Stage is
 associated with.
     */
    DeploymentId?: Id;
    /**
     * The description of the stage.
     */
    Description?: StringWithLengthBetween0And1024;
    /**
     * The timestamp when the stage was last updated.
     */
    LastUpdatedDate?: __timestampIso8601;
    /**
     * Route settings for the stage.
     */
    RouteSettings?: RouteSettingsMap;
    /**
     * The name of the stage.
     */
    StageName?: StringWithLengthBetween1And128;
    /**
     * A map that defines the stage variables for a stage resource. Variable names can
 have alphanumeric and underscore characters, and the values must match
 [A-Za-z0-9-._~:/?#&=,]+.
     */
    StageVariables?: StageVariablesMap;
  }
  export type UriWithLengthBetween1And2048 = string;
  export type __boolean = boolean;
  export type __double = number;
  export type __integer = number;
  export type __listOfApi = Api[];
  export type __listOfApiMapping = ApiMapping[];
  export type __listOfAuthorizer = Authorizer[];
  export type __listOfDeployment = Deployment[];
  export type __listOfDomainName = DomainName[];
  export type __listOfIntegration = Integration[];
  export type __listOfIntegrationResponse = IntegrationResponse[];
  export type __listOfModel = Model[];
  export type __listOfRoute = Route[];
  export type __listOfRouteResponse = RouteResponse[];
  export type __listOfStage = Stage[];
  export type __listOf__string = __string[];
  export type __string = string;
  export type __mapOf__string = {[key: string]: __string};
  export type __timestampIso8601 = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-11-29"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ApiGatewayV2 client.
   */
  export import Types = ApiGatewayV2;
}
export = ApiGatewayV2;
