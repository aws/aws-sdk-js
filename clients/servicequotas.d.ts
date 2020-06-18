import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ServiceQuotas extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ServiceQuotas.Types.ClientConfiguration)
  config: Config & ServiceQuotas.Types.ClientConfiguration;
  /**
   * Associates the Service Quotas template with your organization so that when new accounts are created in your organization, the template submits increase requests for the specified service quotas. Use the Service Quotas template to request an increase for any adjustable quota value. After you define the Service Quotas template, use this operation to associate, or enable, the template. 
   */
  associateServiceQuotaTemplate(params: ServiceQuotas.Types.AssociateServiceQuotaTemplateRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.AssociateServiceQuotaTemplateResponse) => void): Request<ServiceQuotas.Types.AssociateServiceQuotaTemplateResponse, AWSError>;
  /**
   * Associates the Service Quotas template with your organization so that when new accounts are created in your organization, the template submits increase requests for the specified service quotas. Use the Service Quotas template to request an increase for any adjustable quota value. After you define the Service Quotas template, use this operation to associate, or enable, the template. 
   */
  associateServiceQuotaTemplate(callback?: (err: AWSError, data: ServiceQuotas.Types.AssociateServiceQuotaTemplateResponse) => void): Request<ServiceQuotas.Types.AssociateServiceQuotaTemplateResponse, AWSError>;
  /**
   * Removes a service quota increase request from the Service Quotas template. 
   */
  deleteServiceQuotaIncreaseRequestFromTemplate(params: ServiceQuotas.Types.DeleteServiceQuotaIncreaseRequestFromTemplateRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.DeleteServiceQuotaIncreaseRequestFromTemplateResponse) => void): Request<ServiceQuotas.Types.DeleteServiceQuotaIncreaseRequestFromTemplateResponse, AWSError>;
  /**
   * Removes a service quota increase request from the Service Quotas template. 
   */
  deleteServiceQuotaIncreaseRequestFromTemplate(callback?: (err: AWSError, data: ServiceQuotas.Types.DeleteServiceQuotaIncreaseRequestFromTemplateResponse) => void): Request<ServiceQuotas.Types.DeleteServiceQuotaIncreaseRequestFromTemplateResponse, AWSError>;
  /**
   * Disables the Service Quotas template. Once the template is disabled, it does not request quota increases for new accounts in your organization. Disabling the quota template does not apply the quota increase requests from the template.   Related operations    To enable the quota template, call AssociateServiceQuotaTemplate.    To delete a specific service quota from the template, use DeleteServiceQuotaIncreaseRequestFromTemplate.  
   */
  disassociateServiceQuotaTemplate(params: ServiceQuotas.Types.DisassociateServiceQuotaTemplateRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.DisassociateServiceQuotaTemplateResponse) => void): Request<ServiceQuotas.Types.DisassociateServiceQuotaTemplateResponse, AWSError>;
  /**
   * Disables the Service Quotas template. Once the template is disabled, it does not request quota increases for new accounts in your organization. Disabling the quota template does not apply the quota increase requests from the template.   Related operations    To enable the quota template, call AssociateServiceQuotaTemplate.    To delete a specific service quota from the template, use DeleteServiceQuotaIncreaseRequestFromTemplate.  
   */
  disassociateServiceQuotaTemplate(callback?: (err: AWSError, data: ServiceQuotas.Types.DisassociateServiceQuotaTemplateResponse) => void): Request<ServiceQuotas.Types.DisassociateServiceQuotaTemplateResponse, AWSError>;
  /**
   * Retrieves the default service quotas values. The Value returned for each quota is the AWS default value, even if the quotas have been increased.. 
   */
  getAWSDefaultServiceQuota(params: ServiceQuotas.Types.GetAWSDefaultServiceQuotaRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.GetAWSDefaultServiceQuotaResponse) => void): Request<ServiceQuotas.Types.GetAWSDefaultServiceQuotaResponse, AWSError>;
  /**
   * Retrieves the default service quotas values. The Value returned for each quota is the AWS default value, even if the quotas have been increased.. 
   */
  getAWSDefaultServiceQuota(callback?: (err: AWSError, data: ServiceQuotas.Types.GetAWSDefaultServiceQuotaResponse) => void): Request<ServiceQuotas.Types.GetAWSDefaultServiceQuotaResponse, AWSError>;
  /**
   * Retrieves the ServiceQuotaTemplateAssociationStatus value from the service. Use this action to determine if the Service Quota template is associated, or enabled. 
   */
  getAssociationForServiceQuotaTemplate(params: ServiceQuotas.Types.GetAssociationForServiceQuotaTemplateRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.GetAssociationForServiceQuotaTemplateResponse) => void): Request<ServiceQuotas.Types.GetAssociationForServiceQuotaTemplateResponse, AWSError>;
  /**
   * Retrieves the ServiceQuotaTemplateAssociationStatus value from the service. Use this action to determine if the Service Quota template is associated, or enabled. 
   */
  getAssociationForServiceQuotaTemplate(callback?: (err: AWSError, data: ServiceQuotas.Types.GetAssociationForServiceQuotaTemplateResponse) => void): Request<ServiceQuotas.Types.GetAssociationForServiceQuotaTemplateResponse, AWSError>;
  /**
   * Retrieves the details for a particular increase request. 
   */
  getRequestedServiceQuotaChange(params: ServiceQuotas.Types.GetRequestedServiceQuotaChangeRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.GetRequestedServiceQuotaChangeResponse) => void): Request<ServiceQuotas.Types.GetRequestedServiceQuotaChangeResponse, AWSError>;
  /**
   * Retrieves the details for a particular increase request. 
   */
  getRequestedServiceQuotaChange(callback?: (err: AWSError, data: ServiceQuotas.Types.GetRequestedServiceQuotaChangeResponse) => void): Request<ServiceQuotas.Types.GetRequestedServiceQuotaChangeResponse, AWSError>;
  /**
   * Returns the details for the specified service quota. This operation provides a different Value than the GetAWSDefaultServiceQuota operation. This operation returns the applied value for each quota. GetAWSDefaultServiceQuota returns the default AWS value for each quota. 
   */
  getServiceQuota(params: ServiceQuotas.Types.GetServiceQuotaRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.GetServiceQuotaResponse) => void): Request<ServiceQuotas.Types.GetServiceQuotaResponse, AWSError>;
  /**
   * Returns the details for the specified service quota. This operation provides a different Value than the GetAWSDefaultServiceQuota operation. This operation returns the applied value for each quota. GetAWSDefaultServiceQuota returns the default AWS value for each quota. 
   */
  getServiceQuota(callback?: (err: AWSError, data: ServiceQuotas.Types.GetServiceQuotaResponse) => void): Request<ServiceQuotas.Types.GetServiceQuotaResponse, AWSError>;
  /**
   * Returns the details of the service quota increase request in your template.
   */
  getServiceQuotaIncreaseRequestFromTemplate(params: ServiceQuotas.Types.GetServiceQuotaIncreaseRequestFromTemplateRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.GetServiceQuotaIncreaseRequestFromTemplateResponse) => void): Request<ServiceQuotas.Types.GetServiceQuotaIncreaseRequestFromTemplateResponse, AWSError>;
  /**
   * Returns the details of the service quota increase request in your template.
   */
  getServiceQuotaIncreaseRequestFromTemplate(callback?: (err: AWSError, data: ServiceQuotas.Types.GetServiceQuotaIncreaseRequestFromTemplateResponse) => void): Request<ServiceQuotas.Types.GetServiceQuotaIncreaseRequestFromTemplateResponse, AWSError>;
  /**
   * Lists all default service quotas for the specified AWS service or all AWS services. ListAWSDefaultServiceQuotas is similar to ListServiceQuotas except for the Value object. The Value object returned by ListAWSDefaultServiceQuotas is the default value assigned by AWS. This request returns a list of all service quotas for the specified service. The listing of each you'll see the default values are the values that AWS provides for the quotas.   Always check the NextToken response parameter when calling any of the List* operations. These operations can return an unexpected list of results, even when there are more results available. When this happens, the NextToken response parameter contains a value to pass the next call to the same API to request the next part of the list. 
   */
  listAWSDefaultServiceQuotas(params: ServiceQuotas.Types.ListAWSDefaultServiceQuotasRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.ListAWSDefaultServiceQuotasResponse) => void): Request<ServiceQuotas.Types.ListAWSDefaultServiceQuotasResponse, AWSError>;
  /**
   * Lists all default service quotas for the specified AWS service or all AWS services. ListAWSDefaultServiceQuotas is similar to ListServiceQuotas except for the Value object. The Value object returned by ListAWSDefaultServiceQuotas is the default value assigned by AWS. This request returns a list of all service quotas for the specified service. The listing of each you'll see the default values are the values that AWS provides for the quotas.   Always check the NextToken response parameter when calling any of the List* operations. These operations can return an unexpected list of results, even when there are more results available. When this happens, the NextToken response parameter contains a value to pass the next call to the same API to request the next part of the list. 
   */
  listAWSDefaultServiceQuotas(callback?: (err: AWSError, data: ServiceQuotas.Types.ListAWSDefaultServiceQuotasResponse) => void): Request<ServiceQuotas.Types.ListAWSDefaultServiceQuotasResponse, AWSError>;
  /**
   * Requests a list of the changes to quotas for a service.
   */
  listRequestedServiceQuotaChangeHistory(params: ServiceQuotas.Types.ListRequestedServiceQuotaChangeHistoryRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.ListRequestedServiceQuotaChangeHistoryResponse) => void): Request<ServiceQuotas.Types.ListRequestedServiceQuotaChangeHistoryResponse, AWSError>;
  /**
   * Requests a list of the changes to quotas for a service.
   */
  listRequestedServiceQuotaChangeHistory(callback?: (err: AWSError, data: ServiceQuotas.Types.ListRequestedServiceQuotaChangeHistoryResponse) => void): Request<ServiceQuotas.Types.ListRequestedServiceQuotaChangeHistoryResponse, AWSError>;
  /**
   * Requests a list of the changes to specific service quotas. This command provides additional granularity over the ListRequestedServiceQuotaChangeHistory command. Once a quota change request has reached CASE_CLOSED, APPROVED, or DENIED, the history has been kept for 90 days.
   */
  listRequestedServiceQuotaChangeHistoryByQuota(params: ServiceQuotas.Types.ListRequestedServiceQuotaChangeHistoryByQuotaRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.ListRequestedServiceQuotaChangeHistoryByQuotaResponse) => void): Request<ServiceQuotas.Types.ListRequestedServiceQuotaChangeHistoryByQuotaResponse, AWSError>;
  /**
   * Requests a list of the changes to specific service quotas. This command provides additional granularity over the ListRequestedServiceQuotaChangeHistory command. Once a quota change request has reached CASE_CLOSED, APPROVED, or DENIED, the history has been kept for 90 days.
   */
  listRequestedServiceQuotaChangeHistoryByQuota(callback?: (err: AWSError, data: ServiceQuotas.Types.ListRequestedServiceQuotaChangeHistoryByQuotaResponse) => void): Request<ServiceQuotas.Types.ListRequestedServiceQuotaChangeHistoryByQuotaResponse, AWSError>;
  /**
   * Returns a list of the quota increase requests in the template. 
   */
  listServiceQuotaIncreaseRequestsInTemplate(params: ServiceQuotas.Types.ListServiceQuotaIncreaseRequestsInTemplateRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.ListServiceQuotaIncreaseRequestsInTemplateResponse) => void): Request<ServiceQuotas.Types.ListServiceQuotaIncreaseRequestsInTemplateResponse, AWSError>;
  /**
   * Returns a list of the quota increase requests in the template. 
   */
  listServiceQuotaIncreaseRequestsInTemplate(callback?: (err: AWSError, data: ServiceQuotas.Types.ListServiceQuotaIncreaseRequestsInTemplateResponse) => void): Request<ServiceQuotas.Types.ListServiceQuotaIncreaseRequestsInTemplateResponse, AWSError>;
  /**
   * Lists all service quotas for the specified AWS service. This request returns a list of the service quotas for the specified service. you'll see the default values are the values that AWS provides for the quotas.   Always check the NextToken response parameter when calling any of the List* operations. These operations can return an unexpected list of results, even when there are more results available. When this happens, the NextToken response parameter contains a value to pass the next call to the same API to request the next part of the list. 
   */
  listServiceQuotas(params: ServiceQuotas.Types.ListServiceQuotasRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.ListServiceQuotasResponse) => void): Request<ServiceQuotas.Types.ListServiceQuotasResponse, AWSError>;
  /**
   * Lists all service quotas for the specified AWS service. This request returns a list of the service quotas for the specified service. you'll see the default values are the values that AWS provides for the quotas.   Always check the NextToken response parameter when calling any of the List* operations. These operations can return an unexpected list of results, even when there are more results available. When this happens, the NextToken response parameter contains a value to pass the next call to the same API to request the next part of the list. 
   */
  listServiceQuotas(callback?: (err: AWSError, data: ServiceQuotas.Types.ListServiceQuotasResponse) => void): Request<ServiceQuotas.Types.ListServiceQuotasResponse, AWSError>;
  /**
   * Lists the AWS services available in Service Quotas. Not all AWS services are available in Service Quotas. To list the see the list of the service quotas for a specific service, use ListServiceQuotas.
   */
  listServices(params: ServiceQuotas.Types.ListServicesRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.ListServicesResponse) => void): Request<ServiceQuotas.Types.ListServicesResponse, AWSError>;
  /**
   * Lists the AWS services available in Service Quotas. Not all AWS services are available in Service Quotas. To list the see the list of the service quotas for a specific service, use ListServiceQuotas.
   */
  listServices(callback?: (err: AWSError, data: ServiceQuotas.Types.ListServicesResponse) => void): Request<ServiceQuotas.Types.ListServicesResponse, AWSError>;
  /**
   * Defines and adds a quota to the service quota template. To add a quota to the template, you must provide the ServiceCode, QuotaCode, AwsRegion, and DesiredValue. Once you add a quota to the template, use ListServiceQuotaIncreaseRequestsInTemplate to see the list of quotas in the template.
   */
  putServiceQuotaIncreaseRequestIntoTemplate(params: ServiceQuotas.Types.PutServiceQuotaIncreaseRequestIntoTemplateRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.PutServiceQuotaIncreaseRequestIntoTemplateResponse) => void): Request<ServiceQuotas.Types.PutServiceQuotaIncreaseRequestIntoTemplateResponse, AWSError>;
  /**
   * Defines and adds a quota to the service quota template. To add a quota to the template, you must provide the ServiceCode, QuotaCode, AwsRegion, and DesiredValue. Once you add a quota to the template, use ListServiceQuotaIncreaseRequestsInTemplate to see the list of quotas in the template.
   */
  putServiceQuotaIncreaseRequestIntoTemplate(callback?: (err: AWSError, data: ServiceQuotas.Types.PutServiceQuotaIncreaseRequestIntoTemplateResponse) => void): Request<ServiceQuotas.Types.PutServiceQuotaIncreaseRequestIntoTemplateResponse, AWSError>;
  /**
   * Retrieves the details of a service quota increase request. The response to this command provides the details in the RequestedServiceQuotaChange object. 
   */
  requestServiceQuotaIncrease(params: ServiceQuotas.Types.RequestServiceQuotaIncreaseRequest, callback?: (err: AWSError, data: ServiceQuotas.Types.RequestServiceQuotaIncreaseResponse) => void): Request<ServiceQuotas.Types.RequestServiceQuotaIncreaseResponse, AWSError>;
  /**
   * Retrieves the details of a service quota increase request. The response to this command provides the details in the RequestedServiceQuotaChange object. 
   */
  requestServiceQuotaIncrease(callback?: (err: AWSError, data: ServiceQuotas.Types.RequestServiceQuotaIncreaseResponse) => void): Request<ServiceQuotas.Types.RequestServiceQuotaIncreaseResponse, AWSError>;
}
declare namespace ServiceQuotas {
  export interface AssociateServiceQuotaTemplateRequest {
  }
  export interface AssociateServiceQuotaTemplateResponse {
  }
  export type AwsRegion = string;
  export type CustomerServiceEngagementId = string;
  export type DateTime = Date;
  export interface DeleteServiceQuotaIncreaseRequestFromTemplateRequest {
    /**
     * Specifies the code for the service that you want to delete.
     */
    ServiceCode: ServiceCode;
    /**
     * Specifies the code for the quota that you want to delete.
     */
    QuotaCode: QuotaCode;
    /**
     * Specifies the AWS Region for the quota that you want to delete.
     */
    AwsRegion: AwsRegion;
  }
  export interface DeleteServiceQuotaIncreaseRequestFromTemplateResponse {
  }
  export interface DisassociateServiceQuotaTemplateRequest {
  }
  export interface DisassociateServiceQuotaTemplateResponse {
  }
  export type ErrorCode = "DEPENDENCY_ACCESS_DENIED_ERROR"|"DEPENDENCY_THROTTLING_ERROR"|"DEPENDENCY_SERVICE_ERROR"|"SERVICE_QUOTA_NOT_AVAILABLE_ERROR"|string;
  export type ErrorMessage = string;
  export interface ErrorReason {
    /**
     * Service Quotas returns the following error values.   DEPENDENCY_ACCESS_DENIED_ERROR is returned when the caller does not have permission to call the service or service quota. To resolve the error, you need permission to access the service or service quota.  DEPENDENCY_THROTTLING_ERROR is returned when the service being called is throttling Service Quotas.  DEPENDENCY_SERVICE_ERROR is returned when the service being called has availability issues.  SERVICE_QUOTA_NOT_AVAILABLE_ERROR is returned when there was an error in Service Quotas.
     */
    ErrorCode?: ErrorCode;
    /**
     * The error message that provides more detail.
     */
    ErrorMessage?: ErrorMessage;
  }
  export interface GetAWSDefaultServiceQuotaRequest {
    /**
     * Specifies the service that you want to use.
     */
    ServiceCode: ServiceCode;
    /**
     * Identifies the service quota you want to select.
     */
    QuotaCode: QuotaCode;
  }
  export interface GetAWSDefaultServiceQuotaResponse {
    /**
     * Returns the ServiceQuota object which contains all values for a quota.
     */
    Quota?: ServiceQuota;
  }
  export interface GetAssociationForServiceQuotaTemplateRequest {
  }
  export interface GetAssociationForServiceQuotaTemplateResponse {
    /**
     * Specifies whether the template is ASSOCIATED or DISASSOCIATED. If the template is ASSOCIATED, then it requests service quota increases for all new accounts created in your organization. 
     */
    ServiceQuotaTemplateAssociationStatus?: ServiceQuotaTemplateAssociationStatus;
  }
  export interface GetRequestedServiceQuotaChangeRequest {
    /**
     * Identifies the quota increase request.
     */
    RequestId: RequestId;
  }
  export interface GetRequestedServiceQuotaChangeResponse {
    /**
     * Returns the RequestedServiceQuotaChange object for the specific increase request.
     */
    RequestedQuota?: RequestedServiceQuotaChange;
  }
  export interface GetServiceQuotaIncreaseRequestFromTemplateRequest {
    /**
     * Specifies the service that you want to use.
     */
    ServiceCode: ServiceCode;
    /**
     * Specifies the quota you want.
     */
    QuotaCode: QuotaCode;
    /**
     * Specifies the AWS Region for the quota that you want to use.
     */
    AwsRegion: AwsRegion;
  }
  export interface GetServiceQuotaIncreaseRequestFromTemplateResponse {
    /**
     * This object contains the details about the quota increase request.
     */
    ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
  }
  export interface GetServiceQuotaRequest {
    /**
     * Specifies the service that you want to use.
     */
    ServiceCode: ServiceCode;
    /**
     * Identifies the service quota you want to select.
     */
    QuotaCode: QuotaCode;
  }
  export interface GetServiceQuotaResponse {
    /**
     * Returns the ServiceQuota object which contains all values for a quota.
     */
    Quota?: ServiceQuota;
  }
  export type GlobalQuota = boolean;
  export interface ListAWSDefaultServiceQuotasRequest {
    /**
     * Specifies the service that you want to use.
     */
    ServiceCode: ServiceCode;
    /**
     * (Optional) Use this parameter in a request if you receive a NextToken response in a previous request that indicates that there's more output available. In a subsequent call, set it to the value of the previous call's NextToken response to indicate where the output should continue from. If additional items exist beyond the specified maximum, the NextToken element is present and has a value (isn't null). Include that value as the NextToken request parameter in the call to the operation to get the next part of the results. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Limits the number of results that you want to include in the response. If you don't include this parameter, the response defaults to a value that's specific to the operation. If additional items exist beyond the specified maximum, the NextToken element is present and has a value (isn't null). Include that value as the NextToken request parameter in the call to the operation to get the next part of the results. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListAWSDefaultServiceQuotasResponse {
    /**
     * (Optional) Use this parameter in a request if you receive a NextToken response in a previous request that indicates that there's more output available. In a subsequent call, set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * A list of the quotas in the account with the AWS default values. 
     */
    Quotas?: ServiceQuotaListDefinition;
  }
  export interface ListRequestedServiceQuotaChangeHistoryByQuotaRequest {
    /**
     * Specifies the service that you want to use.
     */
    ServiceCode: ServiceCode;
    /**
     * Specifies the service quota that you want to use
     */
    QuotaCode: QuotaCode;
    /**
     * Specifies the status value of the quota increase request.
     */
    Status?: RequestStatus;
    /**
     * (Optional) Use this parameter in a request if you receive a NextToken response in a previous request that indicates that there's more output available. In a subsequent call, set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Limits the number of results that you want to include in the response. If you don't include this parameter, the response defaults to a value that's specific to the operation. If additional items exist beyond the specified maximum, the NextToken element is present and has a value (isn't null). Include that value as the NextToken request parameter in the call to the operation to get the next part of the results. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListRequestedServiceQuotaChangeHistoryByQuotaResponse {
    /**
     * If present in the response, this value indicates there's more output available that what's included in the current response. This can occur even when the response includes no values at all, such as when you ask for a filtered view of a very long list. Use this value in the NextToken request parameter in a subsequent call to the operation to continue processing and get the next part of the output. You should repeat this until the NextToken response element comes back empty (as null).
     */
    NextToken?: NextToken;
    /**
     * Returns a list of service quota requests.
     */
    RequestedQuotas?: RequestedServiceQuotaChangeHistoryListDefinition;
  }
  export interface ListRequestedServiceQuotaChangeHistoryRequest {
    /**
     * Specifies the service that you want to use.
     */
    ServiceCode?: ServiceCode;
    /**
     * Specifies the status value of the quota increase request.
     */
    Status?: RequestStatus;
    /**
     * (Optional) Use this parameter in a request if you receive a NextToken response in a previous request that indicates that there's more output available. In a subsequent call, set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Limits the number of results that you want to include in the response. If you don't include this parameter, the response defaults to a value that's specific to the operation. If additional items exist beyond the specified maximum, the NextToken element is present and has a value (isn't null). Include that value as the NextToken request parameter in the call to the operation to get the next part of the results. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListRequestedServiceQuotaChangeHistoryResponse {
    /**
     * If present in the response, this value indicates there's more output available that what's included in the current response. This can occur even when the response includes no values at all, such as when you ask for a filtered view of a very long list. Use this value in the NextToken request parameter in a subsequent call to the operation to continue processing and get the next part of the output. You should repeat this until the NextToken response element comes back empty (as null).
     */
    NextToken?: NextToken;
    /**
     * Returns a list of service quota requests.
     */
    RequestedQuotas?: RequestedServiceQuotaChangeHistoryListDefinition;
  }
  export interface ListServiceQuotaIncreaseRequestsInTemplateRequest {
    /**
     * The identifier for a service. When performing an operation, use the ServiceCode to specify a particular service. 
     */
    ServiceCode?: ServiceCode;
    /**
     * Specifies the AWS Region for the quota that you want to use.
     */
    AwsRegion?: AwsRegion;
    /**
     * (Optional) Use this parameter in a request if you receive a NextToken response in a previous request that indicates that there's more output available. In a subsequent call, set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Limits the number of results that you want to include in the response. If you don't include this parameter, the response defaults to a value that's specific to the operation. If additional items exist beyond the specified maximum, the NextToken element is present and has a value (isn't null). Include that value as the NextToken request parameter in the call to the operation to get the next part of the results. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListServiceQuotaIncreaseRequestsInTemplateResponse {
    /**
     * Returns the list of values of the quota increase request in the template.
     */
    ServiceQuotaIncreaseRequestInTemplateList?: ServiceQuotaIncreaseRequestInTemplateList;
    /**
     * If present in the response, this value indicates there's more output available that what's included in the current response. This can occur even when the response includes no values at all, such as when you ask for a filtered view of a very long list. Use this value in the NextToken request parameter in a subsequent call to the operation to continue processing and get the next part of the output. You should repeat this until the NextToken response element comes back empty (as null).
     */
    NextToken?: NextToken;
  }
  export interface ListServiceQuotasRequest {
    /**
     * The identifier for a service. When performing an operation, use the ServiceCode to specify a particular service. 
     */
    ServiceCode: ServiceCode;
    /**
     * (Optional) Use this parameter in a request if you receive a NextToken response in a previous request that indicates that there's more output available. In a subsequent call, set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Limits the number of results that you want to include in the response. If you don't include this parameter, the response defaults to a value that's specific to the operation. If additional items exist beyond the specified maximum, the NextToken element is present and has a value (isn't null). Include that value as the NextToken request parameter in the call to the operation to get the next part of the results. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListServiceQuotasResponse {
    /**
     * If present in the response, this value indicates there's more output available that what's included in the current response. This can occur even when the response includes no values at all, such as when you ask for a filtered view of a very long list. Use this value in the NextToken request parameter in a subsequent call to the operation to continue processing and get the next part of the output. You should repeat this until the NextToken response element comes back empty (as null).
     */
    NextToken?: NextToken;
    /**
     * The response information for a quota lists all attribute information for the quota. 
     */
    Quotas?: ServiceQuotaListDefinition;
  }
  export interface ListServicesRequest {
    /**
     * (Optional) Use this parameter in a request if you receive a NextToken response in a previous request that indicates that there's more output available. In a subsequent call, set it to the value of the previous call's NextToken response to indicate where the output should continue from.
     */
    NextToken?: NextToken;
    /**
     * (Optional) Limits the number of results that you want to include in the response. If you don't include this parameter, the response defaults to a value that's specific to the operation. If additional items exist beyond the specified maximum, the NextToken element is present and has a value (isn't null). Include that value as the NextToken request parameter in the call to the operation to get the next part of the results. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
  }
  export interface ListServicesResponse {
    /**
     * If present in the response, this value indicates there's more output available that what's included in the current response. This can occur even when the response includes no values at all, such as when you ask for a filtered view of a very long list. Use this value in the NextToken request parameter in a subsequent call to the operation to continue processing and get the next part of the output. You should repeat this until the NextToken response element comes back empty (as null).
     */
    NextToken?: NextToken;
    /**
     * Returns a list of services. 
     */
    Services?: ServiceInfoListDefinition;
  }
  export type MaxResults = number;
  export type MetricDimensionName = string;
  export type MetricDimensionValue = string;
  export type MetricDimensionsMapDefinition = {[key: string]: MetricDimensionValue};
  export interface MetricInfo {
    /**
     * The namespace of the metric. The namespace is a container for CloudWatch metrics. You can specify a name for the namespace when you create a metric.
     */
    MetricNamespace?: QuotaMetricNamespace;
    /**
     * The name of the CloudWatch metric that measures usage of a service quota. This is a required field.
     */
    MetricName?: QuotaMetricName;
    /**
     * A dimension is a name/value pair that is part of the identity of a metric. Every metric has specific characteristics that describe it, and you can think of dimensions as categories for those characteristics. These dimensions are part of the CloudWatch Metric Identity that measures usage against a particular service quota.
     */
    MetricDimensions?: MetricDimensionsMapDefinition;
    /**
     * Statistics are metric data aggregations over specified periods of time. This is the recommended statistic to use when comparing usage in the CloudWatch Metric against your Service Quota.
     */
    MetricStatisticRecommendation?: Statistic;
  }
  export type NextToken = string;
  export type PeriodUnit = "MICROSECOND"|"MILLISECOND"|"SECOND"|"MINUTE"|"HOUR"|"DAY"|"WEEK"|string;
  export type PeriodValue = number;
  export interface PutServiceQuotaIncreaseRequestIntoTemplateRequest {
    /**
     * Specifies the service quota that you want to use.
     */
    QuotaCode: QuotaCode;
    /**
     * Specifies the service that you want to use.
     */
    ServiceCode: ServiceCode;
    /**
     * Specifies the AWS Region for the quota. 
     */
    AwsRegion: AwsRegion;
    /**
     * Specifies the new, increased value for the quota. 
     */
    DesiredValue: QuotaValue;
  }
  export interface PutServiceQuotaIncreaseRequestIntoTemplateResponse {
    /**
     * A structure that contains information about one service quota increase request.
     */
    ServiceQuotaIncreaseRequestInTemplate?: ServiceQuotaIncreaseRequestInTemplate;
  }
  export type QuotaAdjustable = boolean;
  export type QuotaArn = string;
  export type QuotaCode = string;
  export type QuotaMetricName = string;
  export type QuotaMetricNamespace = string;
  export type QuotaName = string;
  export interface QuotaPeriod {
    /**
     * The value of a period.
     */
    PeriodValue?: PeriodValue;
    /**
     * The time unit of a period.
     */
    PeriodUnit?: PeriodUnit;
  }
  export type QuotaUnit = string;
  export type QuotaValue = number;
  export type RequestId = string;
  export interface RequestServiceQuotaIncreaseRequest {
    /**
     * Specifies the service that you want to use.
     */
    ServiceCode: ServiceCode;
    /**
     * Specifies the service quota that you want to use.
     */
    QuotaCode: QuotaCode;
    /**
     * Specifies the value submitted in the service quota increase request. 
     */
    DesiredValue: QuotaValue;
  }
  export interface RequestServiceQuotaIncreaseResponse {
    /**
     * Returns a list of service quota requests.
     */
    RequestedQuota?: RequestedServiceQuotaChange;
  }
  export type RequestStatus = "PENDING"|"CASE_OPENED"|"APPROVED"|"DENIED"|"CASE_CLOSED"|string;
  export interface RequestedServiceQuotaChange {
    /**
     * The unique identifier of a requested service quota change.
     */
    Id?: RequestId;
    /**
     * The case Id for the service quota increase request.
     */
    CaseId?: CustomerServiceEngagementId;
    /**
     * Specifies the service that you want to use.
     */
    ServiceCode?: ServiceCode;
    /**
     * The name of the AWS service specified in the increase request. 
     */
    ServiceName?: ServiceName;
    /**
     * Specifies the service quota that you want to use.
     */
    QuotaCode?: QuotaCode;
    /**
     * Name of the service quota.
     */
    QuotaName?: QuotaName;
    /**
     * New increased value for the service quota.
     */
    DesiredValue?: QuotaValue;
    /**
     * State of the service quota increase request.
     */
    Status?: RequestStatus;
    /**
     * The date and time when the service quota increase request was received and the case Id was created. 
     */
    Created?: DateTime;
    /**
     * The date and time of the most recent change in the service quota increase request.
     */
    LastUpdated?: DateTime;
    /**
     * The IAM identity who submitted the service quota increase request.
     */
    Requester?: Requester;
    /**
     * The Amazon Resource Name (ARN) of the service quota.
     */
    QuotaArn?: QuotaArn;
    /**
     * Identifies if the quota is global.
     */
    GlobalQuota?: GlobalQuota;
    /**
     * Specifies the unit used for the quota.
     */
    Unit?: QuotaUnit;
  }
  export type RequestedServiceQuotaChangeHistoryListDefinition = RequestedServiceQuotaChange[];
  export type Requester = string;
  export type ServiceCode = string;
  export interface ServiceInfo {
    /**
     * Specifies the service that you want to use.
     */
    ServiceCode?: ServiceCode;
    /**
     * The name of the AWS service specified in the increase request. 
     */
    ServiceName?: ServiceName;
  }
  export type ServiceInfoListDefinition = ServiceInfo[];
  export type ServiceName = string;
  export interface ServiceQuota {
    /**
     * Specifies the service that you want to use.
     */
    ServiceCode?: ServiceCode;
    /**
     * The name of the AWS service specified in the increase request. 
     */
    ServiceName?: ServiceName;
    /**
     * The Amazon Resource Name (ARN) of the service quota.
     */
    QuotaArn?: QuotaArn;
    /**
     * The code identifier for the service quota specified.
     */
    QuotaCode?: QuotaCode;
    /**
     * The name identifier of the service quota.
     */
    QuotaName?: QuotaName;
    /**
     * The value of service quota.
     */
    Value?: QuotaValue;
    /**
     * The unit of measurement for the value of the service quota.
     */
    Unit?: QuotaUnit;
    /**
     * Specifies if the quota value can be increased.
     */
    Adjustable?: QuotaAdjustable;
    /**
     * Specifies if the quota is global.
     */
    GlobalQuota?: GlobalQuota;
    /**
     * Specifies the details about the measurement. 
     */
    UsageMetric?: MetricInfo;
    /**
     * Identifies the unit and value of how time is measured.
     */
    Period?: QuotaPeriod;
    /**
     * Specifies the ErrorCode and ErrorMessage when success isn't achieved.
     */
    ErrorReason?: ErrorReason;
  }
  export interface ServiceQuotaIncreaseRequestInTemplate {
    /**
     * The code identifier for the AWS service specified in the increase request.
     */
    ServiceCode?: ServiceCode;
    /**
     * The name of the AWS service specified in the increase request. 
     */
    ServiceName?: ServiceName;
    /**
     * The code identifier for the service quota specified in the increase request.
     */
    QuotaCode?: QuotaCode;
    /**
     * The name of the service quota in the increase request.
     */
    QuotaName?: QuotaName;
    /**
     * Identifies the new, increased value of the service quota in the increase request. 
     */
    DesiredValue?: QuotaValue;
    /**
     * The AWS Region where the increase request occurs.
     */
    AwsRegion?: AwsRegion;
    /**
     * The unit of measure for the increase request.
     */
    Unit?: QuotaUnit;
    /**
     * Specifies if the quota is a global quota.
     */
    GlobalQuota?: GlobalQuota;
  }
  export type ServiceQuotaIncreaseRequestInTemplateList = ServiceQuotaIncreaseRequestInTemplate[];
  export type ServiceQuotaListDefinition = ServiceQuota[];
  export type ServiceQuotaTemplateAssociationStatus = "ASSOCIATED"|"DISASSOCIATED"|string;
  export type Statistic = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-06-24"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ServiceQuotas client.
   */
  export import Types = ServiceQuotas;
}
export = ServiceQuotas;
