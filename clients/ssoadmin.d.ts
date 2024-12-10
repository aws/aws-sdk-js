import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class SSOAdmin extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SSOAdmin.Types.ClientConfiguration)
  config: Config & SSOAdmin.Types.ClientConfiguration;
  /**
   * Attaches the specified customer managed policy to the specified PermissionSet.
   */
  attachCustomerManagedPolicyReferenceToPermissionSet(params: SSOAdmin.Types.AttachCustomerManagedPolicyReferenceToPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.AttachCustomerManagedPolicyReferenceToPermissionSetResponse) => void): Request<SSOAdmin.Types.AttachCustomerManagedPolicyReferenceToPermissionSetResponse, AWSError>;
  /**
   * Attaches the specified customer managed policy to the specified PermissionSet.
   */
  attachCustomerManagedPolicyReferenceToPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.AttachCustomerManagedPolicyReferenceToPermissionSetResponse) => void): Request<SSOAdmin.Types.AttachCustomerManagedPolicyReferenceToPermissionSetResponse, AWSError>;
  /**
   * Attaches an Amazon Web Services managed policy ARN to a permission set.  If the permission set is already referenced by one or more account assignments, you will need to call  ProvisionPermissionSet  after this operation. Calling ProvisionPermissionSet applies the corresponding IAM policy updates to all assigned accounts. 
   */
  attachManagedPolicyToPermissionSet(params: SSOAdmin.Types.AttachManagedPolicyToPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.AttachManagedPolicyToPermissionSetResponse) => void): Request<SSOAdmin.Types.AttachManagedPolicyToPermissionSetResponse, AWSError>;
  /**
   * Attaches an Amazon Web Services managed policy ARN to a permission set.  If the permission set is already referenced by one or more account assignments, you will need to call  ProvisionPermissionSet  after this operation. Calling ProvisionPermissionSet applies the corresponding IAM policy updates to all assigned accounts. 
   */
  attachManagedPolicyToPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.AttachManagedPolicyToPermissionSetResponse) => void): Request<SSOAdmin.Types.AttachManagedPolicyToPermissionSetResponse, AWSError>;
  /**
   * Assigns access to a principal for a specified Amazon Web Services account using a specified permission set.  The term principal here refers to a user or group that is defined in IAM Identity Center.   As part of a successful CreateAccountAssignment call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call  ProvisionPermissionSet  to make these updates.    After a successful response, call DescribeAccountAssignmentCreationStatus to describe the status of an assignment creation request.  
   */
  createAccountAssignment(params: SSOAdmin.Types.CreateAccountAssignmentRequest, callback?: (err: AWSError, data: SSOAdmin.Types.CreateAccountAssignmentResponse) => void): Request<SSOAdmin.Types.CreateAccountAssignmentResponse, AWSError>;
  /**
   * Assigns access to a principal for a specified Amazon Web Services account using a specified permission set.  The term principal here refers to a user or group that is defined in IAM Identity Center.   As part of a successful CreateAccountAssignment call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call  ProvisionPermissionSet  to make these updates.    After a successful response, call DescribeAccountAssignmentCreationStatus to describe the status of an assignment creation request.  
   */
  createAccountAssignment(callback?: (err: AWSError, data: SSOAdmin.Types.CreateAccountAssignmentResponse) => void): Request<SSOAdmin.Types.CreateAccountAssignmentResponse, AWSError>;
  /**
   * Creates an application in IAM Identity Center for the given application provider.
   */
  createApplication(params: SSOAdmin.Types.CreateApplicationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.CreateApplicationResponse) => void): Request<SSOAdmin.Types.CreateApplicationResponse, AWSError>;
  /**
   * Creates an application in IAM Identity Center for the given application provider.
   */
  createApplication(callback?: (err: AWSError, data: SSOAdmin.Types.CreateApplicationResponse) => void): Request<SSOAdmin.Types.CreateApplicationResponse, AWSError>;
  /**
   * Grant application access to a user or group.
   */
  createApplicationAssignment(params: SSOAdmin.Types.CreateApplicationAssignmentRequest, callback?: (err: AWSError, data: SSOAdmin.Types.CreateApplicationAssignmentResponse) => void): Request<SSOAdmin.Types.CreateApplicationAssignmentResponse, AWSError>;
  /**
   * Grant application access to a user or group.
   */
  createApplicationAssignment(callback?: (err: AWSError, data: SSOAdmin.Types.CreateApplicationAssignmentResponse) => void): Request<SSOAdmin.Types.CreateApplicationAssignmentResponse, AWSError>;
  /**
   * Creates an instance of IAM Identity Center for a standalone Amazon Web Services account that is not managed by Organizations or a member Amazon Web Services account in an organization. You can create only one instance per account and across all Amazon Web Services Regions. The CreateInstance request is rejected if the following apply:    The instance is created within the organization management account.   An instance already exists in the same account.  
   */
  createInstance(params: SSOAdmin.Types.CreateInstanceRequest, callback?: (err: AWSError, data: SSOAdmin.Types.CreateInstanceResponse) => void): Request<SSOAdmin.Types.CreateInstanceResponse, AWSError>;
  /**
   * Creates an instance of IAM Identity Center for a standalone Amazon Web Services account that is not managed by Organizations or a member Amazon Web Services account in an organization. You can create only one instance per account and across all Amazon Web Services Regions. The CreateInstance request is rejected if the following apply:    The instance is created within the organization management account.   An instance already exists in the same account.  
   */
  createInstance(callback?: (err: AWSError, data: SSOAdmin.Types.CreateInstanceResponse) => void): Request<SSOAdmin.Types.CreateInstanceResponse, AWSError>;
  /**
   * Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.  After a successful response, call DescribeInstanceAccessControlAttributeConfiguration to validate that InstanceAccessControlAttributeConfiguration was created. 
   */
  createInstanceAccessControlAttributeConfiguration(params: SSOAdmin.Types.CreateInstanceAccessControlAttributeConfigurationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.CreateInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.CreateInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.  After a successful response, call DescribeInstanceAccessControlAttributeConfiguration to validate that InstanceAccessControlAttributeConfiguration was created. 
   */
  createInstanceAccessControlAttributeConfiguration(callback?: (err: AWSError, data: SSOAdmin.Types.CreateInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.CreateInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Creates a permission set within a specified IAM Identity Center instance.  To grant users and groups access to Amazon Web Services account resources, use  CreateAccountAssignment . 
   */
  createPermissionSet(params: SSOAdmin.Types.CreatePermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.CreatePermissionSetResponse) => void): Request<SSOAdmin.Types.CreatePermissionSetResponse, AWSError>;
  /**
   * Creates a permission set within a specified IAM Identity Center instance.  To grant users and groups access to Amazon Web Services account resources, use  CreateAccountAssignment . 
   */
  createPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.CreatePermissionSetResponse) => void): Request<SSOAdmin.Types.CreatePermissionSetResponse, AWSError>;
  /**
   * Creates a connection to a trusted token issuer in an instance of IAM Identity Center. A trusted token issuer enables trusted identity propagation to be used with applications that authenticate outside of Amazon Web Services. This trusted token issuer describes an external identity provider (IdP) that can generate claims or assertions in the form of access tokens for a user. Applications enabled for IAM Identity Center can use these tokens for authentication. 
   */
  createTrustedTokenIssuer(params: SSOAdmin.Types.CreateTrustedTokenIssuerRequest, callback?: (err: AWSError, data: SSOAdmin.Types.CreateTrustedTokenIssuerResponse) => void): Request<SSOAdmin.Types.CreateTrustedTokenIssuerResponse, AWSError>;
  /**
   * Creates a connection to a trusted token issuer in an instance of IAM Identity Center. A trusted token issuer enables trusted identity propagation to be used with applications that authenticate outside of Amazon Web Services. This trusted token issuer describes an external identity provider (IdP) that can generate claims or assertions in the form of access tokens for a user. Applications enabled for IAM Identity Center can use these tokens for authentication. 
   */
  createTrustedTokenIssuer(callback?: (err: AWSError, data: SSOAdmin.Types.CreateTrustedTokenIssuerResponse) => void): Request<SSOAdmin.Types.CreateTrustedTokenIssuerResponse, AWSError>;
  /**
   * Deletes a principal's access from a specified Amazon Web Services account using a specified permission set.  After a successful response, call DescribeAccountAssignmentDeletionStatus to describe the status of an assignment deletion request. 
   */
  deleteAccountAssignment(params: SSOAdmin.Types.DeleteAccountAssignmentRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeleteAccountAssignmentResponse) => void): Request<SSOAdmin.Types.DeleteAccountAssignmentResponse, AWSError>;
  /**
   * Deletes a principal's access from a specified Amazon Web Services account using a specified permission set.  After a successful response, call DescribeAccountAssignmentDeletionStatus to describe the status of an assignment deletion request. 
   */
  deleteAccountAssignment(callback?: (err: AWSError, data: SSOAdmin.Types.DeleteAccountAssignmentResponse) => void): Request<SSOAdmin.Types.DeleteAccountAssignmentResponse, AWSError>;
  /**
   * Deletes the association with the application. The connected service resource still exists.
   */
  deleteApplication(params: SSOAdmin.Types.DeleteApplicationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeleteApplicationResponse) => void): Request<SSOAdmin.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Deletes the association with the application. The connected service resource still exists.
   */
  deleteApplication(callback?: (err: AWSError, data: SSOAdmin.Types.DeleteApplicationResponse) => void): Request<SSOAdmin.Types.DeleteApplicationResponse, AWSError>;
  /**
   * Deletes an IAM Identity Center access scope from an application.
   */
  deleteApplicationAccessScope(params: SSOAdmin.Types.DeleteApplicationAccessScopeRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an IAM Identity Center access scope from an application.
   */
  deleteApplicationAccessScope(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revoke application access to an application by deleting application assignments for a user or group.
   */
  deleteApplicationAssignment(params: SSOAdmin.Types.DeleteApplicationAssignmentRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeleteApplicationAssignmentResponse) => void): Request<SSOAdmin.Types.DeleteApplicationAssignmentResponse, AWSError>;
  /**
   * Revoke application access to an application by deleting application assignments for a user or group.
   */
  deleteApplicationAssignment(callback?: (err: AWSError, data: SSOAdmin.Types.DeleteApplicationAssignmentResponse) => void): Request<SSOAdmin.Types.DeleteApplicationAssignmentResponse, AWSError>;
  /**
   * Deletes an authentication method from an application.
   */
  deleteApplicationAuthenticationMethod(params: SSOAdmin.Types.DeleteApplicationAuthenticationMethodRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an authentication method from an application.
   */
  deleteApplicationAuthenticationMethod(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a grant from an application.
   */
  deleteApplicationGrant(params: SSOAdmin.Types.DeleteApplicationGrantRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a grant from an application.
   */
  deleteApplicationGrant(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the inline policy from a specified permission set.
   */
  deleteInlinePolicyFromPermissionSet(params: SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetResponse, AWSError>;
  /**
   * Deletes the inline policy from a specified permission set.
   */
  deleteInlinePolicyFromPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DeleteInlinePolicyFromPermissionSetResponse, AWSError>;
  /**
   * Deletes the instance of IAM Identity Center. Only the account that owns the instance can call this API. Neither the delegated administrator nor member account can delete the organization instance, but those roles can delete their own instance.
   */
  deleteInstance(params: SSOAdmin.Types.DeleteInstanceRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeleteInstanceResponse) => void): Request<SSOAdmin.Types.DeleteInstanceResponse, AWSError>;
  /**
   * Deletes the instance of IAM Identity Center. Only the account that owns the instance can call this API. Neither the delegated administrator nor member account can delete the organization instance, but those roles can delete their own instance.
   */
  deleteInstance(callback?: (err: AWSError, data: SSOAdmin.Types.DeleteInstanceResponse) => void): Request<SSOAdmin.Types.DeleteInstanceResponse, AWSError>;
  /**
   * Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.
   */
  deleteInstanceAccessControlAttributeConfiguration(params: SSOAdmin.Types.DeleteInstanceAccessControlAttributeConfigurationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeleteInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.DeleteInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.
   */
  deleteInstanceAccessControlAttributeConfiguration(callback?: (err: AWSError, data: SSOAdmin.Types.DeleteInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.DeleteInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Deletes the specified permission set.
   */
  deletePermissionSet(params: SSOAdmin.Types.DeletePermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeletePermissionSetResponse) => void): Request<SSOAdmin.Types.DeletePermissionSetResponse, AWSError>;
  /**
   * Deletes the specified permission set.
   */
  deletePermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DeletePermissionSetResponse) => void): Request<SSOAdmin.Types.DeletePermissionSetResponse, AWSError>;
  /**
   * Deletes the permissions boundary from a specified PermissionSet.
   */
  deletePermissionsBoundaryFromPermissionSet(params: SSOAdmin.Types.DeletePermissionsBoundaryFromPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeletePermissionsBoundaryFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DeletePermissionsBoundaryFromPermissionSetResponse, AWSError>;
  /**
   * Deletes the permissions boundary from a specified PermissionSet.
   */
  deletePermissionsBoundaryFromPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DeletePermissionsBoundaryFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DeletePermissionsBoundaryFromPermissionSetResponse, AWSError>;
  /**
   * Deletes a trusted token issuer configuration from an instance of IAM Identity Center.  Deleting this trusted token issuer configuration will cause users to lose access to any applications that are configured to use the trusted token issuer. 
   */
  deleteTrustedTokenIssuer(params: SSOAdmin.Types.DeleteTrustedTokenIssuerRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DeleteTrustedTokenIssuerResponse) => void): Request<SSOAdmin.Types.DeleteTrustedTokenIssuerResponse, AWSError>;
  /**
   * Deletes a trusted token issuer configuration from an instance of IAM Identity Center.  Deleting this trusted token issuer configuration will cause users to lose access to any applications that are configured to use the trusted token issuer. 
   */
  deleteTrustedTokenIssuer(callback?: (err: AWSError, data: SSOAdmin.Types.DeleteTrustedTokenIssuerResponse) => void): Request<SSOAdmin.Types.DeleteTrustedTokenIssuerResponse, AWSError>;
  /**
   * Describes the status of the assignment creation request.
   */
  describeAccountAssignmentCreationStatus(params: SSOAdmin.Types.DescribeAccountAssignmentCreationStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribeAccountAssignmentCreationStatusResponse) => void): Request<SSOAdmin.Types.DescribeAccountAssignmentCreationStatusResponse, AWSError>;
  /**
   * Describes the status of the assignment creation request.
   */
  describeAccountAssignmentCreationStatus(callback?: (err: AWSError, data: SSOAdmin.Types.DescribeAccountAssignmentCreationStatusResponse) => void): Request<SSOAdmin.Types.DescribeAccountAssignmentCreationStatusResponse, AWSError>;
  /**
   * Describes the status of the assignment deletion request.
   */
  describeAccountAssignmentDeletionStatus(params: SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusResponse) => void): Request<SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusResponse, AWSError>;
  /**
   * Describes the status of the assignment deletion request.
   */
  describeAccountAssignmentDeletionStatus(callback?: (err: AWSError, data: SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusResponse) => void): Request<SSOAdmin.Types.DescribeAccountAssignmentDeletionStatusResponse, AWSError>;
  /**
   * Retrieves the details of an application associated with an instance of IAM Identity Center.
   */
  describeApplication(params: SSOAdmin.Types.DescribeApplicationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribeApplicationResponse) => void): Request<SSOAdmin.Types.DescribeApplicationResponse, AWSError>;
  /**
   * Retrieves the details of an application associated with an instance of IAM Identity Center.
   */
  describeApplication(callback?: (err: AWSError, data: SSOAdmin.Types.DescribeApplicationResponse) => void): Request<SSOAdmin.Types.DescribeApplicationResponse, AWSError>;
  /**
   * Retrieves a direct assignment of a user or group to an application. If the user doesn’t have a direct assignment to the application, the user may still have access to the application through a group. Therefore, don’t use this API to test access to an application for a user. Instead use ListApplicationAssignmentsForPrincipal.
   */
  describeApplicationAssignment(params: SSOAdmin.Types.DescribeApplicationAssignmentRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribeApplicationAssignmentResponse) => void): Request<SSOAdmin.Types.DescribeApplicationAssignmentResponse, AWSError>;
  /**
   * Retrieves a direct assignment of a user or group to an application. If the user doesn’t have a direct assignment to the application, the user may still have access to the application through a group. Therefore, don’t use this API to test access to an application for a user. Instead use ListApplicationAssignmentsForPrincipal.
   */
  describeApplicationAssignment(callback?: (err: AWSError, data: SSOAdmin.Types.DescribeApplicationAssignmentResponse) => void): Request<SSOAdmin.Types.DescribeApplicationAssignmentResponse, AWSError>;
  /**
   * Retrieves details about a provider that can be used to connect an Amazon Web Services managed application or customer managed application to IAM Identity Center.
   */
  describeApplicationProvider(params: SSOAdmin.Types.DescribeApplicationProviderRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribeApplicationProviderResponse) => void): Request<SSOAdmin.Types.DescribeApplicationProviderResponse, AWSError>;
  /**
   * Retrieves details about a provider that can be used to connect an Amazon Web Services managed application or customer managed application to IAM Identity Center.
   */
  describeApplicationProvider(callback?: (err: AWSError, data: SSOAdmin.Types.DescribeApplicationProviderResponse) => void): Request<SSOAdmin.Types.DescribeApplicationProviderResponse, AWSError>;
  /**
   * Returns the details of an instance of IAM Identity Center. The status can be one of the following:    CREATE_IN_PROGRESS - The instance is in the process of being created. When the instance is ready for use, DescribeInstance returns the status of ACTIVE. While the instance is in the CREATE_IN_PROGRESS state, you can call only DescribeInstance and DeleteInstance operations.    DELETE_IN_PROGRESS - The instance is being deleted. Returns AccessDeniedException after the delete operation completes.     ACTIVE - The instance is active.  
   */
  describeInstance(params: SSOAdmin.Types.DescribeInstanceRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribeInstanceResponse) => void): Request<SSOAdmin.Types.DescribeInstanceResponse, AWSError>;
  /**
   * Returns the details of an instance of IAM Identity Center. The status can be one of the following:    CREATE_IN_PROGRESS - The instance is in the process of being created. When the instance is ready for use, DescribeInstance returns the status of ACTIVE. While the instance is in the CREATE_IN_PROGRESS state, you can call only DescribeInstance and DeleteInstance operations.    DELETE_IN_PROGRESS - The instance is being deleted. Returns AccessDeniedException after the delete operation completes.     ACTIVE - The instance is active.  
   */
  describeInstance(callback?: (err: AWSError, data: SSOAdmin.Types.DescribeInstanceResponse) => void): Request<SSOAdmin.Types.DescribeInstanceResponse, AWSError>;
  /**
   * Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.
   */
  describeInstanceAccessControlAttributeConfiguration(params: SSOAdmin.Types.DescribeInstanceAccessControlAttributeConfigurationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribeInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.DescribeInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.
   */
  describeInstanceAccessControlAttributeConfiguration(callback?: (err: AWSError, data: SSOAdmin.Types.DescribeInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.DescribeInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Gets the details of the permission set.
   */
  describePermissionSet(params: SSOAdmin.Types.DescribePermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribePermissionSetResponse) => void): Request<SSOAdmin.Types.DescribePermissionSetResponse, AWSError>;
  /**
   * Gets the details of the permission set.
   */
  describePermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DescribePermissionSetResponse) => void): Request<SSOAdmin.Types.DescribePermissionSetResponse, AWSError>;
  /**
   * Describes the status for the given permission set provisioning request.
   */
  describePermissionSetProvisioningStatus(params: SSOAdmin.Types.DescribePermissionSetProvisioningStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribePermissionSetProvisioningStatusResponse) => void): Request<SSOAdmin.Types.DescribePermissionSetProvisioningStatusResponse, AWSError>;
  /**
   * Describes the status for the given permission set provisioning request.
   */
  describePermissionSetProvisioningStatus(callback?: (err: AWSError, data: SSOAdmin.Types.DescribePermissionSetProvisioningStatusResponse) => void): Request<SSOAdmin.Types.DescribePermissionSetProvisioningStatusResponse, AWSError>;
  /**
   * Retrieves details about a trusted token issuer configuration stored in an instance of IAM Identity Center. Details include the name of the trusted token issuer, the issuer URL, and the path of the source attribute and the destination attribute for a trusted token issuer configuration. 
   */
  describeTrustedTokenIssuer(params: SSOAdmin.Types.DescribeTrustedTokenIssuerRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DescribeTrustedTokenIssuerResponse) => void): Request<SSOAdmin.Types.DescribeTrustedTokenIssuerResponse, AWSError>;
  /**
   * Retrieves details about a trusted token issuer configuration stored in an instance of IAM Identity Center. Details include the name of the trusted token issuer, the issuer URL, and the path of the source attribute and the destination attribute for a trusted token issuer configuration. 
   */
  describeTrustedTokenIssuer(callback?: (err: AWSError, data: SSOAdmin.Types.DescribeTrustedTokenIssuerResponse) => void): Request<SSOAdmin.Types.DescribeTrustedTokenIssuerResponse, AWSError>;
  /**
   * Detaches the specified customer managed policy from the specified PermissionSet.
   */
  detachCustomerManagedPolicyReferenceFromPermissionSet(params: SSOAdmin.Types.DetachCustomerManagedPolicyReferenceFromPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DetachCustomerManagedPolicyReferenceFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DetachCustomerManagedPolicyReferenceFromPermissionSetResponse, AWSError>;
  /**
   * Detaches the specified customer managed policy from the specified PermissionSet.
   */
  detachCustomerManagedPolicyReferenceFromPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DetachCustomerManagedPolicyReferenceFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DetachCustomerManagedPolicyReferenceFromPermissionSetResponse, AWSError>;
  /**
   * Detaches the attached Amazon Web Services managed policy ARN from the specified permission set.
   */
  detachManagedPolicyFromPermissionSet(params: SSOAdmin.Types.DetachManagedPolicyFromPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.DetachManagedPolicyFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DetachManagedPolicyFromPermissionSetResponse, AWSError>;
  /**
   * Detaches the attached Amazon Web Services managed policy ARN from the specified permission set.
   */
  detachManagedPolicyFromPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.DetachManagedPolicyFromPermissionSetResponse) => void): Request<SSOAdmin.Types.DetachManagedPolicyFromPermissionSetResponse, AWSError>;
  /**
   * Retrieves the authorized targets for an IAM Identity Center access scope for an application.
   */
  getApplicationAccessScope(params: SSOAdmin.Types.GetApplicationAccessScopeRequest, callback?: (err: AWSError, data: SSOAdmin.Types.GetApplicationAccessScopeResponse) => void): Request<SSOAdmin.Types.GetApplicationAccessScopeResponse, AWSError>;
  /**
   * Retrieves the authorized targets for an IAM Identity Center access scope for an application.
   */
  getApplicationAccessScope(callback?: (err: AWSError, data: SSOAdmin.Types.GetApplicationAccessScopeResponse) => void): Request<SSOAdmin.Types.GetApplicationAccessScopeResponse, AWSError>;
  /**
   * Retrieves the configuration of PutApplicationAssignmentConfiguration.
   */
  getApplicationAssignmentConfiguration(params: SSOAdmin.Types.GetApplicationAssignmentConfigurationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.GetApplicationAssignmentConfigurationResponse) => void): Request<SSOAdmin.Types.GetApplicationAssignmentConfigurationResponse, AWSError>;
  /**
   * Retrieves the configuration of PutApplicationAssignmentConfiguration.
   */
  getApplicationAssignmentConfiguration(callback?: (err: AWSError, data: SSOAdmin.Types.GetApplicationAssignmentConfigurationResponse) => void): Request<SSOAdmin.Types.GetApplicationAssignmentConfigurationResponse, AWSError>;
  /**
   * Retrieves details about an authentication method used by an application.
   */
  getApplicationAuthenticationMethod(params: SSOAdmin.Types.GetApplicationAuthenticationMethodRequest, callback?: (err: AWSError, data: SSOAdmin.Types.GetApplicationAuthenticationMethodResponse) => void): Request<SSOAdmin.Types.GetApplicationAuthenticationMethodResponse, AWSError>;
  /**
   * Retrieves details about an authentication method used by an application.
   */
  getApplicationAuthenticationMethod(callback?: (err: AWSError, data: SSOAdmin.Types.GetApplicationAuthenticationMethodResponse) => void): Request<SSOAdmin.Types.GetApplicationAuthenticationMethodResponse, AWSError>;
  /**
   * Retrieves details about an application grant.
   */
  getApplicationGrant(params: SSOAdmin.Types.GetApplicationGrantRequest, callback?: (err: AWSError, data: SSOAdmin.Types.GetApplicationGrantResponse) => void): Request<SSOAdmin.Types.GetApplicationGrantResponse, AWSError>;
  /**
   * Retrieves details about an application grant.
   */
  getApplicationGrant(callback?: (err: AWSError, data: SSOAdmin.Types.GetApplicationGrantResponse) => void): Request<SSOAdmin.Types.GetApplicationGrantResponse, AWSError>;
  /**
   * Obtains the inline policy assigned to the permission set.
   */
  getInlinePolicyForPermissionSet(params: SSOAdmin.Types.GetInlinePolicyForPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.GetInlinePolicyForPermissionSetResponse) => void): Request<SSOAdmin.Types.GetInlinePolicyForPermissionSetResponse, AWSError>;
  /**
   * Obtains the inline policy assigned to the permission set.
   */
  getInlinePolicyForPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.GetInlinePolicyForPermissionSetResponse) => void): Request<SSOAdmin.Types.GetInlinePolicyForPermissionSetResponse, AWSError>;
  /**
   * Obtains the permissions boundary for a specified PermissionSet.
   */
  getPermissionsBoundaryForPermissionSet(params: SSOAdmin.Types.GetPermissionsBoundaryForPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.GetPermissionsBoundaryForPermissionSetResponse) => void): Request<SSOAdmin.Types.GetPermissionsBoundaryForPermissionSetResponse, AWSError>;
  /**
   * Obtains the permissions boundary for a specified PermissionSet.
   */
  getPermissionsBoundaryForPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.GetPermissionsBoundaryForPermissionSetResponse) => void): Request<SSOAdmin.Types.GetPermissionsBoundaryForPermissionSetResponse, AWSError>;
  /**
   * Lists the status of the Amazon Web Services account assignment creation requests for a specified IAM Identity Center instance.
   */
  listAccountAssignmentCreationStatus(params: SSOAdmin.Types.ListAccountAssignmentCreationStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentCreationStatusResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentCreationStatusResponse, AWSError>;
  /**
   * Lists the status of the Amazon Web Services account assignment creation requests for a specified IAM Identity Center instance.
   */
  listAccountAssignmentCreationStatus(callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentCreationStatusResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentCreationStatusResponse, AWSError>;
  /**
   * Lists the status of the Amazon Web Services account assignment deletion requests for a specified IAM Identity Center instance.
   */
  listAccountAssignmentDeletionStatus(params: SSOAdmin.Types.ListAccountAssignmentDeletionStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentDeletionStatusResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentDeletionStatusResponse, AWSError>;
  /**
   * Lists the status of the Amazon Web Services account assignment deletion requests for a specified IAM Identity Center instance.
   */
  listAccountAssignmentDeletionStatus(callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentDeletionStatusResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentDeletionStatusResponse, AWSError>;
  /**
   * Lists the assignee of the specified Amazon Web Services account with the specified permission set.
   */
  listAccountAssignments(params: SSOAdmin.Types.ListAccountAssignmentsRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentsResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentsResponse, AWSError>;
  /**
   * Lists the assignee of the specified Amazon Web Services account with the specified permission set.
   */
  listAccountAssignments(callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentsResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentsResponse, AWSError>;
  /**
   * Retrieves a list of the IAM Identity Center associated Amazon Web Services accounts that the principal has access to.
   */
  listAccountAssignmentsForPrincipal(params: SSOAdmin.Types.ListAccountAssignmentsForPrincipalRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentsForPrincipalResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentsForPrincipalResponse, AWSError>;
  /**
   * Retrieves a list of the IAM Identity Center associated Amazon Web Services accounts that the principal has access to.
   */
  listAccountAssignmentsForPrincipal(callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountAssignmentsForPrincipalResponse) => void): Request<SSOAdmin.Types.ListAccountAssignmentsForPrincipalResponse, AWSError>;
  /**
   * Lists all the Amazon Web Services accounts where the specified permission set is provisioned.
   */
  listAccountsForProvisionedPermissionSet(params: SSOAdmin.Types.ListAccountsForProvisionedPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountsForProvisionedPermissionSetResponse) => void): Request<SSOAdmin.Types.ListAccountsForProvisionedPermissionSetResponse, AWSError>;
  /**
   * Lists all the Amazon Web Services accounts where the specified permission set is provisioned.
   */
  listAccountsForProvisionedPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.ListAccountsForProvisionedPermissionSetResponse) => void): Request<SSOAdmin.Types.ListAccountsForProvisionedPermissionSetResponse, AWSError>;
  /**
   * Lists the access scopes and authorized targets associated with an application.
   */
  listApplicationAccessScopes(params: SSOAdmin.Types.ListApplicationAccessScopesRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationAccessScopesResponse) => void): Request<SSOAdmin.Types.ListApplicationAccessScopesResponse, AWSError>;
  /**
   * Lists the access scopes and authorized targets associated with an application.
   */
  listApplicationAccessScopes(callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationAccessScopesResponse) => void): Request<SSOAdmin.Types.ListApplicationAccessScopesResponse, AWSError>;
  /**
   * Lists Amazon Web Services account users that are assigned to an application.
   */
  listApplicationAssignments(params: SSOAdmin.Types.ListApplicationAssignmentsRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationAssignmentsResponse) => void): Request<SSOAdmin.Types.ListApplicationAssignmentsResponse, AWSError>;
  /**
   * Lists Amazon Web Services account users that are assigned to an application.
   */
  listApplicationAssignments(callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationAssignmentsResponse) => void): Request<SSOAdmin.Types.ListApplicationAssignmentsResponse, AWSError>;
  /**
   * Lists the applications to which a specified principal is assigned.
   */
  listApplicationAssignmentsForPrincipal(params: SSOAdmin.Types.ListApplicationAssignmentsForPrincipalRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationAssignmentsForPrincipalResponse) => void): Request<SSOAdmin.Types.ListApplicationAssignmentsForPrincipalResponse, AWSError>;
  /**
   * Lists the applications to which a specified principal is assigned.
   */
  listApplicationAssignmentsForPrincipal(callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationAssignmentsForPrincipalResponse) => void): Request<SSOAdmin.Types.ListApplicationAssignmentsForPrincipalResponse, AWSError>;
  /**
   * Lists all of the authentication methods supported by the specified application.
   */
  listApplicationAuthenticationMethods(params: SSOAdmin.Types.ListApplicationAuthenticationMethodsRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationAuthenticationMethodsResponse) => void): Request<SSOAdmin.Types.ListApplicationAuthenticationMethodsResponse, AWSError>;
  /**
   * Lists all of the authentication methods supported by the specified application.
   */
  listApplicationAuthenticationMethods(callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationAuthenticationMethodsResponse) => void): Request<SSOAdmin.Types.ListApplicationAuthenticationMethodsResponse, AWSError>;
  /**
   * List the grants associated with an application.
   */
  listApplicationGrants(params: SSOAdmin.Types.ListApplicationGrantsRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationGrantsResponse) => void): Request<SSOAdmin.Types.ListApplicationGrantsResponse, AWSError>;
  /**
   * List the grants associated with an application.
   */
  listApplicationGrants(callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationGrantsResponse) => void): Request<SSOAdmin.Types.ListApplicationGrantsResponse, AWSError>;
  /**
   * Lists the application providers configured in the IAM Identity Center identity store.
   */
  listApplicationProviders(params: SSOAdmin.Types.ListApplicationProvidersRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationProvidersResponse) => void): Request<SSOAdmin.Types.ListApplicationProvidersResponse, AWSError>;
  /**
   * Lists the application providers configured in the IAM Identity Center identity store.
   */
  listApplicationProviders(callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationProvidersResponse) => void): Request<SSOAdmin.Types.ListApplicationProvidersResponse, AWSError>;
  /**
   * Lists all applications associated with the instance of IAM Identity Center. When listing applications for an instance in the management account, member accounts must use the applicationAccount parameter to filter the list to only applications created from that account.
   */
  listApplications(params: SSOAdmin.Types.ListApplicationsRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationsResponse) => void): Request<SSOAdmin.Types.ListApplicationsResponse, AWSError>;
  /**
   * Lists all applications associated with the instance of IAM Identity Center. When listing applications for an instance in the management account, member accounts must use the applicationAccount parameter to filter the list to only applications created from that account.
   */
  listApplications(callback?: (err: AWSError, data: SSOAdmin.Types.ListApplicationsResponse) => void): Request<SSOAdmin.Types.ListApplicationsResponse, AWSError>;
  /**
   * Lists all customer managed policies attached to a specified PermissionSet.
   */
  listCustomerManagedPolicyReferencesInPermissionSet(params: SSOAdmin.Types.ListCustomerManagedPolicyReferencesInPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListCustomerManagedPolicyReferencesInPermissionSetResponse) => void): Request<SSOAdmin.Types.ListCustomerManagedPolicyReferencesInPermissionSetResponse, AWSError>;
  /**
   * Lists all customer managed policies attached to a specified PermissionSet.
   */
  listCustomerManagedPolicyReferencesInPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.ListCustomerManagedPolicyReferencesInPermissionSetResponse) => void): Request<SSOAdmin.Types.ListCustomerManagedPolicyReferencesInPermissionSetResponse, AWSError>;
  /**
   * Lists the details of the organization and account instances of IAM Identity Center that were created in or visible to the account calling this API. 
   */
  listInstances(params: SSOAdmin.Types.ListInstancesRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListInstancesResponse) => void): Request<SSOAdmin.Types.ListInstancesResponse, AWSError>;
  /**
   * Lists the details of the organization and account instances of IAM Identity Center that were created in or visible to the account calling this API. 
   */
  listInstances(callback?: (err: AWSError, data: SSOAdmin.Types.ListInstancesResponse) => void): Request<SSOAdmin.Types.ListInstancesResponse, AWSError>;
  /**
   * Lists the Amazon Web Services managed policy that is attached to a specified permission set.
   */
  listManagedPoliciesInPermissionSet(params: SSOAdmin.Types.ListManagedPoliciesInPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListManagedPoliciesInPermissionSetResponse) => void): Request<SSOAdmin.Types.ListManagedPoliciesInPermissionSetResponse, AWSError>;
  /**
   * Lists the Amazon Web Services managed policy that is attached to a specified permission set.
   */
  listManagedPoliciesInPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.ListManagedPoliciesInPermissionSetResponse) => void): Request<SSOAdmin.Types.ListManagedPoliciesInPermissionSetResponse, AWSError>;
  /**
   * Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
   */
  listPermissionSetProvisioningStatus(params: SSOAdmin.Types.ListPermissionSetProvisioningStatusRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetProvisioningStatusResponse) => void): Request<SSOAdmin.Types.ListPermissionSetProvisioningStatusResponse, AWSError>;
  /**
   * Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
   */
  listPermissionSetProvisioningStatus(callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetProvisioningStatusResponse) => void): Request<SSOAdmin.Types.ListPermissionSetProvisioningStatusResponse, AWSError>;
  /**
   * Lists the PermissionSets in an IAM Identity Center instance.
   */
  listPermissionSets(params: SSOAdmin.Types.ListPermissionSetsRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetsResponse) => void): Request<SSOAdmin.Types.ListPermissionSetsResponse, AWSError>;
  /**
   * Lists the PermissionSets in an IAM Identity Center instance.
   */
  listPermissionSets(callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetsResponse) => void): Request<SSOAdmin.Types.ListPermissionSetsResponse, AWSError>;
  /**
   * Lists all the permission sets that are provisioned to a specified Amazon Web Services account.
   */
  listPermissionSetsProvisionedToAccount(params: SSOAdmin.Types.ListPermissionSetsProvisionedToAccountRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetsProvisionedToAccountResponse) => void): Request<SSOAdmin.Types.ListPermissionSetsProvisionedToAccountResponse, AWSError>;
  /**
   * Lists all the permission sets that are provisioned to a specified Amazon Web Services account.
   */
  listPermissionSetsProvisionedToAccount(callback?: (err: AWSError, data: SSOAdmin.Types.ListPermissionSetsProvisionedToAccountResponse) => void): Request<SSOAdmin.Types.ListPermissionSetsProvisionedToAccountResponse, AWSError>;
  /**
   * Lists the tags that are attached to a specified resource.
   */
  listTagsForResource(params: SSOAdmin.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListTagsForResourceResponse) => void): Request<SSOAdmin.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the tags that are attached to a specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: SSOAdmin.Types.ListTagsForResourceResponse) => void): Request<SSOAdmin.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all the trusted token issuers configured in an instance of IAM Identity Center.
   */
  listTrustedTokenIssuers(params: SSOAdmin.Types.ListTrustedTokenIssuersRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ListTrustedTokenIssuersResponse) => void): Request<SSOAdmin.Types.ListTrustedTokenIssuersResponse, AWSError>;
  /**
   * Lists all the trusted token issuers configured in an instance of IAM Identity Center.
   */
  listTrustedTokenIssuers(callback?: (err: AWSError, data: SSOAdmin.Types.ListTrustedTokenIssuersResponse) => void): Request<SSOAdmin.Types.ListTrustedTokenIssuersResponse, AWSError>;
  /**
   * The process by which a specified permission set is provisioned to the specified target.
   */
  provisionPermissionSet(params: SSOAdmin.Types.ProvisionPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.ProvisionPermissionSetResponse) => void): Request<SSOAdmin.Types.ProvisionPermissionSetResponse, AWSError>;
  /**
   * The process by which a specified permission set is provisioned to the specified target.
   */
  provisionPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.ProvisionPermissionSetResponse) => void): Request<SSOAdmin.Types.ProvisionPermissionSetResponse, AWSError>;
  /**
   * Adds or updates the list of authorized targets for an IAM Identity Center access scope for an application.
   */
  putApplicationAccessScope(params: SSOAdmin.Types.PutApplicationAccessScopeRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or updates the list of authorized targets for an IAM Identity Center access scope for an application.
   */
  putApplicationAccessScope(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Configure how users gain access to an application. If AssignmentsRequired is true (default value), users don’t have access to the application unless an assignment is created using the CreateApplicationAssignment API. If false, all users have access to the application. If an assignment is created using CreateApplicationAssignment., the user retains access if AssignmentsRequired is set to true. 
   */
  putApplicationAssignmentConfiguration(params: SSOAdmin.Types.PutApplicationAssignmentConfigurationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.PutApplicationAssignmentConfigurationResponse) => void): Request<SSOAdmin.Types.PutApplicationAssignmentConfigurationResponse, AWSError>;
  /**
   * Configure how users gain access to an application. If AssignmentsRequired is true (default value), users don’t have access to the application unless an assignment is created using the CreateApplicationAssignment API. If false, all users have access to the application. If an assignment is created using CreateApplicationAssignment., the user retains access if AssignmentsRequired is set to true. 
   */
  putApplicationAssignmentConfiguration(callback?: (err: AWSError, data: SSOAdmin.Types.PutApplicationAssignmentConfigurationResponse) => void): Request<SSOAdmin.Types.PutApplicationAssignmentConfigurationResponse, AWSError>;
  /**
   * Adds or updates an authentication method for an application.
   */
  putApplicationAuthenticationMethod(params: SSOAdmin.Types.PutApplicationAuthenticationMethodRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or updates an authentication method for an application.
   */
  putApplicationAuthenticationMethod(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds a grant to an application.
   */
  putApplicationGrant(params: SSOAdmin.Types.PutApplicationGrantRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds a grant to an application.
   */
  putApplicationGrant(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches an inline policy to a permission set.  If the permission set is already referenced by one or more account assignments, you will need to call  ProvisionPermissionSet  after this action to apply the corresponding IAM policy updates to all assigned accounts. 
   */
  putInlinePolicyToPermissionSet(params: SSOAdmin.Types.PutInlinePolicyToPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.PutInlinePolicyToPermissionSetResponse) => void): Request<SSOAdmin.Types.PutInlinePolicyToPermissionSetResponse, AWSError>;
  /**
   * Attaches an inline policy to a permission set.  If the permission set is already referenced by one or more account assignments, you will need to call  ProvisionPermissionSet  after this action to apply the corresponding IAM policy updates to all assigned accounts. 
   */
  putInlinePolicyToPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.PutInlinePolicyToPermissionSetResponse) => void): Request<SSOAdmin.Types.PutInlinePolicyToPermissionSetResponse, AWSError>;
  /**
   * Attaches an Amazon Web Services managed or customer managed policy to the specified PermissionSet as a permissions boundary.
   */
  putPermissionsBoundaryToPermissionSet(params: SSOAdmin.Types.PutPermissionsBoundaryToPermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.PutPermissionsBoundaryToPermissionSetResponse) => void): Request<SSOAdmin.Types.PutPermissionsBoundaryToPermissionSetResponse, AWSError>;
  /**
   * Attaches an Amazon Web Services managed or customer managed policy to the specified PermissionSet as a permissions boundary.
   */
  putPermissionsBoundaryToPermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.PutPermissionsBoundaryToPermissionSetResponse) => void): Request<SSOAdmin.Types.PutPermissionsBoundaryToPermissionSetResponse, AWSError>;
  /**
   * Associates a set of tags with a specified resource.
   */
  tagResource(params: SSOAdmin.Types.TagResourceRequest, callback?: (err: AWSError, data: SSOAdmin.Types.TagResourceResponse) => void): Request<SSOAdmin.Types.TagResourceResponse, AWSError>;
  /**
   * Associates a set of tags with a specified resource.
   */
  tagResource(callback?: (err: AWSError, data: SSOAdmin.Types.TagResourceResponse) => void): Request<SSOAdmin.Types.TagResourceResponse, AWSError>;
  /**
   * Disassociates a set of tags from a specified resource.
   */
  untagResource(params: SSOAdmin.Types.UntagResourceRequest, callback?: (err: AWSError, data: SSOAdmin.Types.UntagResourceResponse) => void): Request<SSOAdmin.Types.UntagResourceResponse, AWSError>;
  /**
   * Disassociates a set of tags from a specified resource.
   */
  untagResource(callback?: (err: AWSError, data: SSOAdmin.Types.UntagResourceResponse) => void): Request<SSOAdmin.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates application properties. 
   */
  updateApplication(params: SSOAdmin.Types.UpdateApplicationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.UpdateApplicationResponse) => void): Request<SSOAdmin.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Updates application properties. 
   */
  updateApplication(callback?: (err: AWSError, data: SSOAdmin.Types.UpdateApplicationResponse) => void): Request<SSOAdmin.Types.UpdateApplicationResponse, AWSError>;
  /**
   * Update the details for the instance of IAM Identity Center that is owned by the Amazon Web Services account.
   */
  updateInstance(params: SSOAdmin.Types.UpdateInstanceRequest, callback?: (err: AWSError, data: SSOAdmin.Types.UpdateInstanceResponse) => void): Request<SSOAdmin.Types.UpdateInstanceResponse, AWSError>;
  /**
   * Update the details for the instance of IAM Identity Center that is owned by the Amazon Web Services account.
   */
  updateInstance(callback?: (err: AWSError, data: SSOAdmin.Types.UpdateInstanceResponse) => void): Request<SSOAdmin.Types.UpdateInstanceResponse, AWSError>;
  /**
   * Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.
   */
  updateInstanceAccessControlAttributeConfiguration(params: SSOAdmin.Types.UpdateInstanceAccessControlAttributeConfigurationRequest, callback?: (err: AWSError, data: SSOAdmin.Types.UpdateInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.UpdateInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see Attribute-Based Access Control in the IAM Identity Center User Guide.
   */
  updateInstanceAccessControlAttributeConfiguration(callback?: (err: AWSError, data: SSOAdmin.Types.UpdateInstanceAccessControlAttributeConfigurationResponse) => void): Request<SSOAdmin.Types.UpdateInstanceAccessControlAttributeConfigurationResponse, AWSError>;
  /**
   * Updates an existing permission set.
   */
  updatePermissionSet(params: SSOAdmin.Types.UpdatePermissionSetRequest, callback?: (err: AWSError, data: SSOAdmin.Types.UpdatePermissionSetResponse) => void): Request<SSOAdmin.Types.UpdatePermissionSetResponse, AWSError>;
  /**
   * Updates an existing permission set.
   */
  updatePermissionSet(callback?: (err: AWSError, data: SSOAdmin.Types.UpdatePermissionSetResponse) => void): Request<SSOAdmin.Types.UpdatePermissionSetResponse, AWSError>;
  /**
   * Updates the name of the trusted token issuer, or the path of a source attribute or destination attribute for a trusted token issuer configuration.  Updating this trusted token issuer configuration might cause users to lose access to any applications that are configured to use the trusted token issuer. 
   */
  updateTrustedTokenIssuer(params: SSOAdmin.Types.UpdateTrustedTokenIssuerRequest, callback?: (err: AWSError, data: SSOAdmin.Types.UpdateTrustedTokenIssuerResponse) => void): Request<SSOAdmin.Types.UpdateTrustedTokenIssuerResponse, AWSError>;
  /**
   * Updates the name of the trusted token issuer, or the path of a source attribute or destination attribute for a trusted token issuer configuration.  Updating this trusted token issuer configuration might cause users to lose access to any applications that are configured to use the trusted token issuer. 
   */
  updateTrustedTokenIssuer(callback?: (err: AWSError, data: SSOAdmin.Types.UpdateTrustedTokenIssuerResponse) => void): Request<SSOAdmin.Types.UpdateTrustedTokenIssuerResponse, AWSError>;
}
declare namespace SSOAdmin {
  export interface AccessControlAttribute {
    /**
     * The name of the attribute associated with your identities in your identity source. This is used to map a specified attribute in your identity source with an attribute in IAM Identity Center.
     */
    Key: AccessControlAttributeKey;
    /**
     * The value used for mapping a specified attribute to an identity source.
     */
    Value: AccessControlAttributeValue;
  }
  export type AccessControlAttributeKey = string;
  export type AccessControlAttributeList = AccessControlAttribute[];
  export interface AccessControlAttributeValue {
    /**
     * The identity source to use when mapping a specified attribute to IAM Identity Center.
     */
    Source: AccessControlAttributeValueSourceList;
  }
  export type AccessControlAttributeValueSource = string;
  export type AccessControlAttributeValueSourceList = AccessControlAttributeValueSource[];
  export interface AccountAssignment {
    /**
     * The identifier of the Amazon Web Services account.
     */
    AccountId?: AccountId;
    /**
     * The ARN of the permission set. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    PermissionSetArn?: PermissionSetArn;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
     */
    PrincipalId?: PrincipalId;
    /**
     * The entity type for which the assignment will be created.
     */
    PrincipalType?: PrincipalType;
  }
  export interface AccountAssignmentForPrincipal {
    /**
     * The account ID number of the Amazon Web Services account.
     */
    AccountId?: AccountId;
    /**
     * The ARN of the IAM Identity Center permission set assigned to this principal for this Amazon Web Services account.
     */
    PermissionSetArn?: PermissionSetArn;
    /**
     * The ID of the principal.
     */
    PrincipalId?: PrincipalId;
    /**
     * The type of the principal.
     */
    PrincipalType?: PrincipalType;
  }
  export type AccountAssignmentList = AccountAssignment[];
  export type AccountAssignmentListForPrincipal = AccountAssignmentForPrincipal[];
  export interface AccountAssignmentOperationStatus {
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
    /**
     * The message that contains an error or exception in case of an operation failure.
     */
    FailureReason?: Reason;
    /**
     * The ARN of the permission set. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    PermissionSetArn?: PermissionSetArn;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
     */
    PrincipalId?: PrincipalId;
    /**
     * The entity type for which the assignment will be created.
     */
    PrincipalType?: PrincipalType;
    /**
     * The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.
     */
    RequestId?: UUId;
    /**
     * The status of the permission set provisioning process.
     */
    Status?: StatusValues;
    /**
     * TargetID is an Amazon Web Services account identifier, (For example, 123456789012).
     */
    TargetId?: TargetId;
    /**
     * The entity type for which the assignment will be created.
     */
    TargetType?: TargetType;
  }
  export type AccountAssignmentOperationStatusList = AccountAssignmentOperationStatusMetadata[];
  export interface AccountAssignmentOperationStatusMetadata {
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
    /**
     * The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.
     */
    RequestId?: UUId;
    /**
     * The status of the permission set provisioning process.
     */
    Status?: StatusValues;
  }
  export type AccountId = string;
  export type AccountList = AccountId[];
  export interface ActorPolicyDocument {
  }
  export interface Application {
    /**
     * The Amazon Web Services account ID number of the application.
     */
    ApplicationAccount?: AccountId;
    /**
     * The ARN of the application.
     */
    ApplicationArn?: ApplicationArn;
    /**
     * The ARN of the application provider for this application.
     */
    ApplicationProviderArn?: ApplicationProviderArn;
    /**
     * The date and time when the application was originally created.
     */
    CreatedDate?: _Date;
    /**
     * The description of the application.
     */
    Description?: Description;
    /**
     * The ARN of the instance of IAM Identity Center that is configured with this application.
     */
    InstanceArn?: InstanceArn;
    /**
     * The name of the application.
     */
    Name?: NameType;
    /**
     * A structure that describes the options for the access portal associated with this application.
     */
    PortalOptions?: PortalOptions;
    /**
     * The current status of the application in this instance of IAM Identity Center.
     */
    Status?: ApplicationStatus;
  }
  export type ApplicationArn = string;
  export interface ApplicationAssignment {
    /**
     * The ARN of the application that has principals assigned.
     */
    ApplicationArn: ApplicationArn;
    /**
     * The unique identifier of the principal assigned to the application.
     */
    PrincipalId: PrincipalId;
    /**
     * The type of the principal assigned to the application.
     */
    PrincipalType: PrincipalType;
  }
  export interface ApplicationAssignmentForPrincipal {
    /**
     * The ARN of the application to which the specified principal is assigned.
     */
    ApplicationArn?: ApplicationArn;
    /**
     * The unique identifier of the principal assigned to the application.
     */
    PrincipalId?: PrincipalId;
    /**
     * The type of the principal assigned to the application.
     */
    PrincipalType?: PrincipalType;
  }
  export type ApplicationAssignmentListForPrincipal = ApplicationAssignmentForPrincipal[];
  export type ApplicationAssignmentsList = ApplicationAssignment[];
  export type ApplicationList = Application[];
  export interface ApplicationProvider {
    /**
     * The ARN of the application provider.
     */
    ApplicationProviderArn: ApplicationProviderArn;
    /**
     * A structure that describes how IAM Identity Center represents the application provider in the portal.
     */
    DisplayData?: DisplayData;
    /**
     * The protocol that the application provider uses to perform federation.
     */
    FederationProtocol?: FederationProtocol;
    /**
     * A structure that describes the application provider's resource server.
     */
    ResourceServerConfig?: ResourceServerConfig;
  }
  export type ApplicationProviderArn = string;
  export type ApplicationProviderList = ApplicationProvider[];
  export type ApplicationStatus = "ENABLED"|"DISABLED"|string;
  export type ApplicationUrl = string;
  export type ApplicationVisibility = "ENABLED"|"DISABLED"|string;
  export type AssignmentRequired = boolean;
  export interface AttachCustomerManagedPolicyReferenceToPermissionSetRequest {
    /**
     * Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each Amazon Web Services account where you want to deploy your permission set.
     */
    CustomerManagedPolicyReference: CustomerManagedPolicyReference;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. 
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface AttachCustomerManagedPolicyReferenceToPermissionSetResponse {
  }
  export interface AttachManagedPolicyToPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The Amazon Web Services managed policy ARN to be attached to a permission set.
     */
    ManagedPolicyArn: ManagedPolicyArn;
    /**
     * The ARN of the PermissionSet that the managed policy should be attached to.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface AttachManagedPolicyToPermissionSetResponse {
  }
  export interface AttachedManagedPolicy {
    /**
     * The ARN of the Amazon Web Services managed policy. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    Arn?: ManagedPolicyArn;
    /**
     * The name of the Amazon Web Services managed policy.
     */
    Name?: Name;
  }
  export type AttachedManagedPolicyList = AttachedManagedPolicy[];
  export interface AuthenticationMethod {
    /**
     * A structure that describes details for IAM authentication.
     */
    Iam?: IamAuthenticationMethod;
  }
  export interface AuthenticationMethodItem {
    /**
     * A structure that describes an authentication method. The contents of this structure is determined by the AuthenticationMethodType.
     */
    AuthenticationMethod?: AuthenticationMethod;
    /**
     * The type of authentication that is used by this method.
     */
    AuthenticationMethodType?: AuthenticationMethodType;
  }
  export type AuthenticationMethodType = "IAM"|string;
  export type AuthenticationMethods = AuthenticationMethodItem[];
  export interface AuthorizationCodeGrant {
    /**
     * A list of URIs that are valid locations to redirect a user's browser after the user is authorized.
     */
    RedirectUris?: RedirectUris;
  }
  export interface AuthorizedTokenIssuer {
    /**
     * An array list of authorized audiences, or applications, that can consume the tokens generated by the associated trusted token issuer.
     */
    AuthorizedAudiences?: TokenIssuerAudiences;
    /**
     * The ARN of the trusted token issuer.
     */
    TrustedTokenIssuerArn?: TrustedTokenIssuerArn;
  }
  export type AuthorizedTokenIssuers = AuthorizedTokenIssuer[];
  export type ClaimAttributePath = string;
  export type ClientToken = string;
  export interface CreateAccountAssignmentRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set that the admin wants to grant the principal access to.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
     */
    PrincipalId: PrincipalId;
    /**
     * The entity type for which the assignment will be created.
     */
    PrincipalType: PrincipalType;
    /**
     * TargetID is an Amazon Web Services account identifier, (For example, 123456789012).
     */
    TargetId: TargetId;
    /**
     * The entity type for which the assignment will be created.
     */
    TargetType: TargetType;
  }
  export interface CreateAccountAssignmentResponse {
    /**
     * The status object for the account assignment creation operation.
     */
    AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
  }
  export interface CreateApplicationAssignmentRequest {
    /**
     * The ARN of the application provider under which the operation will run.
     */
    ApplicationArn: ApplicationArn;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
     */
    PrincipalId: PrincipalId;
    /**
     * The entity type for which the assignment will be created.
     */
    PrincipalType: PrincipalType;
  }
  export interface CreateApplicationAssignmentResponse {
  }
  export interface CreateApplicationRequest {
    /**
     * The ARN of the application provider under which the operation will run.
     */
    ApplicationProviderArn: ApplicationProviderArn;
    /**
     * Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.
     */
    ClientToken?: ClientToken;
    /**
     * The description of the .
     */
    Description?: Description;
    /**
     * The ARN of the instance of IAM Identity Center under which the operation will run. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The name of the .
     */
    Name: NameType;
    /**
     * A structure that describes the options for the portal associated with an application.
     */
    PortalOptions?: PortalOptions;
    /**
     * Specifies whether the application is enabled or disabled.
     */
    Status?: ApplicationStatus;
    /**
     * Specifies tags to be attached to the application.
     */
    Tags?: TagList;
  }
  export interface CreateApplicationResponse {
    /**
     * Specifies the ARN of the application.
     */
    ApplicationArn?: ApplicationArn;
  }
  export interface CreateInstanceAccessControlAttributeConfigurationRequest {
    /**
     * Specifies the IAM Identity Center identity store attributes to add to your ABAC configuration. When using an external identity provider as an identity source, you can pass attributes through the SAML assertion. Doing so provides an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center will replace the attribute value with the value from the IAM Identity Center identity store.
     */
    InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     */
    InstanceArn: InstanceArn;
  }
  export interface CreateInstanceAccessControlAttributeConfigurationResponse {
  }
  export interface CreateInstanceRequest {
    /**
     * Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.
     */
    ClientToken?: ClientToken;
    /**
     * The name of the instance of IAM Identity Center.
     */
    Name?: NameType;
    /**
     * Specifies tags to be attached to the instance of IAM Identity Center.
     */
    Tags?: TagList;
  }
  export interface CreateInstanceResponse {
    /**
     * The ARN of the instance of IAM Identity Center under which the operation will run.  For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn?: InstanceArn;
  }
  export interface CreatePermissionSetRequest {
    /**
     * The description of the PermissionSet.
     */
    Description?: PermissionSetDescription;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The name of the PermissionSet.
     */
    Name: PermissionSetName;
    /**
     * Used to redirect users within the application during the federation authentication process.
     */
    RelayState?: RelayState;
    /**
     * The length of time that the application user sessions are valid in the ISO-8601 standard.
     */
    SessionDuration?: Duration;
    /**
     * The tags to attach to the new PermissionSet.
     */
    Tags?: TagList;
  }
  export interface CreatePermissionSetResponse {
    /**
     * Defines the level of access on an Amazon Web Services account.
     */
    PermissionSet?: PermissionSet;
  }
  export interface CreateTrustedTokenIssuerRequest {
    /**
     * Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an IdempotentParameterMismatch error.
     */
    ClientToken?: ClientToken;
    /**
     * Specifies the ARN of the instance of IAM Identity Center to contain the new trusted token issuer configuration.
     */
    InstanceArn: InstanceArn;
    /**
     * Specifies the name of the new trusted token issuer configuration.
     */
    Name: TrustedTokenIssuerName;
    /**
     * Specifies tags to be attached to the new trusted token issuer configuration.
     */
    Tags?: TagList;
    /**
     * Specifies settings that apply to the new trusted token issuer configuration. The settings that are available depend on what TrustedTokenIssuerType you specify.
     */
    TrustedTokenIssuerConfiguration: TrustedTokenIssuerConfiguration;
    /**
     * Specifies the type of the new trusted token issuer.
     */
    TrustedTokenIssuerType: TrustedTokenIssuerType;
  }
  export interface CreateTrustedTokenIssuerResponse {
    /**
     * The ARN of the new trusted token issuer configuration.
     */
    TrustedTokenIssuerArn?: TrustedTokenIssuerArn;
  }
  export interface CustomerManagedPolicyReference {
    /**
     * The name of the IAM policy that you have configured in each account where you want to deploy your permission set.
     */
    Name: ManagedPolicyName;
    /**
     * The path to the IAM policy that you have configured in each account where you want to deploy your permission set. The default is /. For more information, see Friendly names and paths in the IAM User Guide.
     */
    Path?: ManagedPolicyPath;
  }
  export type CustomerManagedPolicyReferenceList = CustomerManagedPolicyReference[];
  export type _Date = Date;
  export interface DeleteAccountAssignmentRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set that will be used to remove access.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
     */
    PrincipalId: PrincipalId;
    /**
     * The entity type for which the assignment will be deleted.
     */
    PrincipalType: PrincipalType;
    /**
     * TargetID is an Amazon Web Services account identifier, (For example, 123456789012).
     */
    TargetId: TargetId;
    /**
     * The entity type for which the assignment will be deleted.
     */
    TargetType: TargetType;
  }
  export interface DeleteAccountAssignmentResponse {
    /**
     * The status object for the account assignment deletion operation.
     */
    AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
  }
  export interface DeleteApplicationAccessScopeRequest {
    /**
     * Specifies the ARN of the application with the access scope to delete.
     */
    ApplicationArn: ApplicationArn;
    /**
     * Specifies the name of the access scope to remove from the application.
     */
    Scope: Scope;
  }
  export interface DeleteApplicationAssignmentRequest {
    /**
     * Specifies the ARN of the application.
     */
    ApplicationArn: ApplicationArn;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
     */
    PrincipalId: PrincipalId;
    /**
     * The entity type for which the assignment will be deleted.
     */
    PrincipalType: PrincipalType;
  }
  export interface DeleteApplicationAssignmentResponse {
  }
  export interface DeleteApplicationAuthenticationMethodRequest {
    /**
     * Specifies the ARN of the application with the authentication method to delete.
     */
    ApplicationArn: ApplicationArn;
    /**
     * Specifies the authentication method type to delete from the application.
     */
    AuthenticationMethodType: AuthenticationMethodType;
  }
  export interface DeleteApplicationGrantRequest {
    /**
     * Specifies the ARN of the application with the grant to delete.
     */
    ApplicationArn: ApplicationArn;
    /**
     * Specifies the type of grant to delete from the application.
     */
    GrantType: GrantType;
  }
  export interface DeleteApplicationRequest {
    /**
     * Specifies the ARN of the application. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference. 
     */
    ApplicationArn: ApplicationArn;
  }
  export interface DeleteApplicationResponse {
  }
  export interface DeleteInlinePolicyFromPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set that will be used to remove access.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface DeleteInlinePolicyFromPermissionSetResponse {
  }
  export interface DeleteInstanceAccessControlAttributeConfigurationRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     */
    InstanceArn: InstanceArn;
  }
  export interface DeleteInstanceAccessControlAttributeConfigurationResponse {
  }
  export interface DeleteInstanceRequest {
    /**
     * The ARN of the instance of IAM Identity Center under which the operation will run.
     */
    InstanceArn: InstanceArn;
  }
  export interface DeleteInstanceResponse {
  }
  export interface DeletePermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set that should be deleted.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface DeletePermissionSetResponse {
  }
  export interface DeletePermissionsBoundaryFromPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. 
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface DeletePermissionsBoundaryFromPermissionSetResponse {
  }
  export interface DeleteTrustedTokenIssuerRequest {
    /**
     * Specifies the ARN of the trusted token issuer configuration to delete.
     */
    TrustedTokenIssuerArn: TrustedTokenIssuerArn;
  }
  export interface DeleteTrustedTokenIssuerResponse {
  }
  export interface DescribeAccountAssignmentCreationStatusRequest {
    /**
     * The identifier that is used to track the request operation progress.
     */
    AccountAssignmentCreationRequestId: UUId;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
  }
  export interface DescribeAccountAssignmentCreationStatusResponse {
    /**
     * The status object for the account assignment creation operation.
     */
    AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
  }
  export interface DescribeAccountAssignmentDeletionStatusRequest {
    /**
     * The identifier that is used to track the request operation progress.
     */
    AccountAssignmentDeletionRequestId: UUId;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
  }
  export interface DescribeAccountAssignmentDeletionStatusResponse {
    /**
     * The status object for the account assignment deletion operation.
     */
    AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
  }
  export interface DescribeApplicationAssignmentRequest {
    /**
     * Specifies the ARN of the application. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    ApplicationArn: ApplicationArn;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
     */
    PrincipalId: PrincipalId;
    /**
     * The entity type for which the assignment will be created.
     */
    PrincipalType: PrincipalType;
  }
  export interface DescribeApplicationAssignmentResponse {
    /**
     * Specifies the ARN of the application. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    ApplicationArn?: ApplicationArn;
    /**
     * An identifier for an object in IAM Identity Center, such as a user or group. PrincipalIds are GUIDs (For example, f81d4fae-7dec-11d0-a765-00a0c91e6bf6). For more information about PrincipalIds in IAM Identity Center, see the IAM Identity Center Identity Store API Reference.
     */
    PrincipalId?: PrincipalId;
    /**
     * The entity type for which the assignment will be created.
     */
    PrincipalType?: PrincipalType;
  }
  export interface DescribeApplicationProviderRequest {
    /**
     * Specifies the ARN of the application provider for which you want details.
     */
    ApplicationProviderArn: ApplicationProviderArn;
  }
  export interface DescribeApplicationProviderResponse {
    /**
     * The ARN of the application provider.
     */
    ApplicationProviderArn: ApplicationProviderArn;
    /**
     * A structure with details about the display data for the application provider.
     */
    DisplayData?: DisplayData;
    /**
     * The protocol used to federate to the application provider.
     */
    FederationProtocol?: FederationProtocol;
    /**
     * A structure with details about the receiving application.
     */
    ResourceServerConfig?: ResourceServerConfig;
  }
  export interface DescribeApplicationRequest {
    /**
     * Specifies the ARN of the application. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    ApplicationArn: ApplicationArn;
  }
  export interface DescribeApplicationResponse {
    /**
     * The account ID.
     */
    ApplicationAccount?: AccountId;
    /**
     * Specifies the ARN of the application.
     */
    ApplicationArn?: ApplicationArn;
    /**
     * The ARN of the application provider under which the operation will run.
     */
    ApplicationProviderArn?: ApplicationProviderArn;
    /**
     * The date the application was created.
     */
    CreatedDate?: _Date;
    /**
     * The description of the .
     */
    Description?: Description;
    /**
     * The ARN of the IAM Identity Center application under which the operation will run. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn?: InstanceArn;
    /**
     * The application name.
     */
    Name?: NameType;
    /**
     * A structure that describes the options for the portal associated with an application.
     */
    PortalOptions?: PortalOptions;
    /**
     * Specifies whether the application is enabled or disabled.
     */
    Status?: ApplicationStatus;
  }
  export interface DescribeInstanceAccessControlAttributeConfigurationRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     */
    InstanceArn: InstanceArn;
  }
  export interface DescribeInstanceAccessControlAttributeConfigurationResponse {
    /**
     * Gets the list of IAM Identity Center identity store attributes that have been added to your ABAC configuration.
     */
    InstanceAccessControlAttributeConfiguration?: InstanceAccessControlAttributeConfiguration;
    /**
     * The status of the attribute configuration process.
     */
    Status?: InstanceAccessControlAttributeConfigurationStatus;
    /**
     * Provides more details about the current status of the specified attribute.
     */
    StatusReason?: InstanceAccessControlAttributeConfigurationStatusReason;
  }
  export interface DescribeInstanceRequest {
    /**
     * The ARN of the instance of IAM Identity Center under which the operation will run.
     */
    InstanceArn: InstanceArn;
  }
  export interface DescribeInstanceResponse {
    /**
     * The date the instance was created.
     */
    CreatedDate?: _Date;
    /**
     * The identifier of the identity store that is connected to the instance of IAM Identity Center.
     */
    IdentityStoreId?: Id;
    /**
     * The ARN of the instance of IAM Identity Center under which the operation will run. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn?: InstanceArn;
    /**
     * Specifies the instance name.
     */
    Name?: NameType;
    /**
     * The identifier of the Amazon Web Services account for which the instance was created.
     */
    OwnerAccountId?: AccountId;
    /**
     * The status of the instance. 
     */
    Status?: InstanceStatus;
  }
  export interface DescribePermissionSetProvisioningStatusRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The identifier that is provided by the ProvisionPermissionSet call to retrieve the current status of the provisioning workflow.
     */
    ProvisionPermissionSetRequestId: UUId;
  }
  export interface DescribePermissionSetProvisioningStatusResponse {
    /**
     * The status object for the permission set provisioning operation.
     */
    PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
  }
  export interface DescribePermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set. 
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface DescribePermissionSetResponse {
    /**
     * Describes the level of access on an Amazon Web Services account.
     */
    PermissionSet?: PermissionSet;
  }
  export interface DescribeTrustedTokenIssuerRequest {
    /**
     * Specifies the ARN of the trusted token issuer configuration that you want details about.
     */
    TrustedTokenIssuerArn: TrustedTokenIssuerArn;
  }
  export interface DescribeTrustedTokenIssuerResponse {
    /**
     * The name of the trusted token issuer configuration.
     */
    Name?: TrustedTokenIssuerName;
    /**
     * The ARN of the trusted token issuer configuration.
     */
    TrustedTokenIssuerArn?: TrustedTokenIssuerArn;
    /**
     * A structure the describes the settings that apply of this trusted token issuer.
     */
    TrustedTokenIssuerConfiguration?: TrustedTokenIssuerConfiguration;
    /**
     * The type of the trusted token issuer.
     */
    TrustedTokenIssuerType?: TrustedTokenIssuerType;
  }
  export type Description = string;
  export interface DetachCustomerManagedPolicyReferenceFromPermissionSetRequest {
    /**
     * Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each Amazon Web Services account where you want to deploy your permission set.
     */
    CustomerManagedPolicyReference: CustomerManagedPolicyReference;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. 
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface DetachCustomerManagedPolicyReferenceFromPermissionSetResponse {
  }
  export interface DetachManagedPolicyFromPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The Amazon Web Services managed policy ARN to be detached from a permission set.
     */
    ManagedPolicyArn: ManagedPolicyArn;
    /**
     * The ARN of the PermissionSet from which the policy should be detached.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface DetachManagedPolicyFromPermissionSetResponse {
  }
  export interface DisplayData {
    /**
     * The description of the application provider that appears in the portal.
     */
    Description?: Description;
    /**
     * The name of the application provider that appears in the portal.
     */
    DisplayName?: Name;
    /**
     * A URL that points to an icon that represents the application provider.
     */
    IconUrl?: IconUrl;
  }
  export type Duration = string;
  export type FederationProtocol = "SAML"|"OAUTH"|string;
  export interface GetApplicationAccessScopeRequest {
    /**
     * Specifies the ARN of the application with the access scope that you want to retrieve.
     */
    ApplicationArn: ApplicationArn;
    /**
     * Specifies the name of the access scope for which you want the authorized targets.
     */
    Scope: Scope;
  }
  export interface GetApplicationAccessScopeResponse {
    /**
     * An array of authorized targets associated with this access scope.
     */
    AuthorizedTargets?: ScopeTargets;
    /**
     * The name of the access scope that can be used with the authorized targets.
     */
    Scope: Scope;
  }
  export interface GetApplicationAssignmentConfigurationRequest {
    /**
     * Specifies the ARN of the application. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    ApplicationArn: ApplicationArn;
  }
  export interface GetApplicationAssignmentConfigurationResponse {
    /**
     * If AssignmentsRequired is true (default value), users don’t have access to the application unless an assignment is created using the CreateApplicationAssignment API. If false, all users have access to the application. 
     */
    AssignmentRequired: AssignmentRequired;
  }
  export interface GetApplicationAuthenticationMethodRequest {
    /**
     * Specifies the ARN of the application.
     */
    ApplicationArn: ApplicationArn;
    /**
     * Specifies the type of authentication method for which you want details.
     */
    AuthenticationMethodType: AuthenticationMethodType;
  }
  export interface GetApplicationAuthenticationMethodResponse {
    /**
     * A structure that contains details about the requested authentication method.
     */
    AuthenticationMethod?: AuthenticationMethod;
  }
  export interface GetApplicationGrantRequest {
    /**
     * Specifies the ARN of the application that contains the grant.
     */
    ApplicationArn: ApplicationArn;
    /**
     * Specifies the type of grant.
     */
    GrantType: GrantType;
  }
  export interface GetApplicationGrantResponse {
    /**
     * A structure that describes the requested grant.
     */
    Grant: Grant;
  }
  export interface GetInlinePolicyForPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface GetInlinePolicyForPermissionSetResponse {
    /**
     * The inline policy that is attached to the permission set.  For Length Constraints, if a valid ARN is provided for a permission set, it is possible for an empty inline policy to be returned. 
     */
    InlinePolicy?: PermissionSetPolicyDocument;
  }
  export interface GetPermissionsBoundaryForPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. 
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface GetPermissionsBoundaryForPermissionSetResponse {
    /**
     * The permissions boundary attached to the specified permission set.
     */
    PermissionsBoundary?: PermissionsBoundary;
  }
  export interface Grant {
    /**
     * Configuration options for the authorization_code grant type.
     */
    AuthorizationCode?: AuthorizationCodeGrant;
    /**
     * Configuration options for the urn:ietf:params:oauth:grant-type:jwt-bearer grant type.
     */
    JwtBearer?: JwtBearerGrant;
    /**
     * Configuration options for the refresh_token grant type.
     */
    RefreshToken?: RefreshTokenGrant;
    /**
     * Configuration options for the urn:ietf:params:oauth:grant-type:token-exchange grant type.
     */
    TokenExchange?: TokenExchangeGrant;
  }
  export interface GrantItem {
    /**
     * The configuration structure for the selected grant.
     */
    Grant: Grant;
    /**
     * The type of the selected grant.
     */
    GrantType: GrantType;
  }
  export type GrantType = "authorization_code"|"refresh_token"|"urn:ietf:params:oauth:grant-type:jwt-bearer"|"urn:ietf:params:oauth:grant-type:token-exchange"|string;
  export type Grants = GrantItem[];
  export interface IamAuthenticationMethod {
    /**
     * An IAM policy document in JSON.
     */
    ActorPolicy: ActorPolicyDocument;
  }
  export type IconUrl = string;
  export type Id = string;
  export interface InstanceAccessControlAttributeConfiguration {
    /**
     * Lists the attributes that are configured for ABAC in the specified IAM Identity Center instance.
     */
    AccessControlAttributes: AccessControlAttributeList;
  }
  export type InstanceAccessControlAttributeConfigurationStatus = "ENABLED"|"CREATION_IN_PROGRESS"|"CREATION_FAILED"|string;
  export type InstanceAccessControlAttributeConfigurationStatusReason = string;
  export type InstanceArn = string;
  export type InstanceList = InstanceMetadata[];
  export interface InstanceMetadata {
    /**
     * The date and time that the Identity Center instance was created.
     */
    CreatedDate?: _Date;
    /**
     * The identifier of the identity store that is connected to the Identity Center instance.
     */
    IdentityStoreId?: Id;
    /**
     * The ARN of the Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn?: InstanceArn;
    /**
     * The name of the Identity Center instance.
     */
    Name?: NameType;
    /**
     * The Amazon Web Services account ID number of the owner of the Identity Center instance.
     */
    OwnerAccountId?: AccountId;
    /**
     * The current status of this Identity Center instance.
     */
    Status?: InstanceStatus;
  }
  export type InstanceStatus = "CREATE_IN_PROGRESS"|"DELETE_IN_PROGRESS"|"ACTIVE"|string;
  export type JMESPath = string;
  export type JwksRetrievalOption = "OPEN_ID_DISCOVERY"|string;
  export interface JwtBearerGrant {
    /**
     * A list of allowed token issuers trusted by the Identity Center instances for this application.
     */
    AuthorizedTokenIssuers?: AuthorizedTokenIssuers;
  }
  export interface ListAccountAssignmentCreationStatusRequest {
    /**
     * Filters results based on the passed attribute value.
     */
    Filter?: OperationStatusFilter;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountAssignmentCreationStatusResponse {
    /**
     * The status object for the account assignment creation operation.
     */
    AccountAssignmentsCreationStatus?: AccountAssignmentOperationStatusList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountAssignmentDeletionStatusRequest {
    /**
     * Filters results based on the passed attribute value.
     */
    Filter?: OperationStatusFilter;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountAssignmentDeletionStatusResponse {
    /**
     * The status object for the account assignment deletion operation.
     */
    AccountAssignmentsDeletionStatus?: AccountAssignmentOperationStatusList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountAssignmentsFilter {
    /**
     * The ID number of an Amazon Web Services account that filters the results in the response.
     */
    AccountId?: AccountId;
  }
  export interface ListAccountAssignmentsForPrincipalRequest {
    /**
     * Specifies an Amazon Web Services account ID number. Results are filtered to only those that match this ID number.
     */
    Filter?: ListAccountAssignmentsFilter;
    /**
     * Specifies the ARN of the instance of IAM Identity Center that contains the principal.
     */
    InstanceArn: InstanceArn;
    /**
     * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    NextToken?: Token;
    /**
     * Specifies the principal for which you want to retrieve the list of account assignments.
     */
    PrincipalId: PrincipalId;
    /**
     * Specifies the type of the principal.
     */
    PrincipalType: PrincipalType;
  }
  export interface ListAccountAssignmentsForPrincipalResponse {
    /**
     * An array list of the account assignments for the principal.
     */
    AccountAssignments?: AccountAssignmentListForPrincipal;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    NextToken?: Token;
  }
  export interface ListAccountAssignmentsRequest {
    /**
     * The identifier of the Amazon Web Services account from which to list the assignments.
     */
    AccountId: TargetId;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * The ARN of the permission set from which to list assignments.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface ListAccountAssignmentsResponse {
    /**
     * The list of assignments that match the input Amazon Web Services account and permission set.
     */
    AccountAssignments?: AccountAssignmentList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListAccountsForProvisionedPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the PermissionSet.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * The ARN of the PermissionSet from which the associated Amazon Web Services accounts will be listed.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The permission set provisioning status for an Amazon Web Services account.
     */
    ProvisioningStatus?: ProvisioningStatus;
  }
  export interface ListAccountsForProvisionedPermissionSetResponse {
    /**
     * The list of Amazon Web Services AccountIds.
     */
    AccountIds?: AccountList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListApplicationAccessScopesRequest {
    /**
     * Specifies the ARN of the application.
     */
    ApplicationArn: ApplicationArn;
    /**
     * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: ListApplicationAccessScopesRequestMaxResultsInteger;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    NextToken?: Token;
  }
  export type ListApplicationAccessScopesRequestMaxResultsInteger = number;
  export interface ListApplicationAccessScopesResponse {
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    NextToken?: Token;
    /**
     * An array list of access scopes and their authorized targets that are associated with the application.
     */
    Scopes: Scopes;
  }
  export interface ListApplicationAssignmentsFilter {
    /**
     * The ARN of an application.
     */
    ApplicationArn?: ApplicationArn;
  }
  export interface ListApplicationAssignmentsForPrincipalRequest {
    /**
     * Filters the output to include only assignments associated with the application that has the specified ARN.
     */
    Filter?: ListApplicationAssignmentsFilter;
    /**
     * Specifies the instance of IAM Identity Center that contains principal and applications.
     */
    InstanceArn: InstanceArn;
    /**
     * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    NextToken?: Token;
    /**
     * Specifies the unique identifier of the principal for which you want to retrieve its assignments.
     */
    PrincipalId: PrincipalId;
    /**
     * Specifies the type of the principal for which you want to retrieve its assignments.
     */
    PrincipalType: PrincipalType;
  }
  export interface ListApplicationAssignmentsForPrincipalResponse {
    /**
     * An array list of the application assignments for the specified principal.
     */
    ApplicationAssignments?: ApplicationAssignmentListForPrincipal;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    NextToken?: Token;
  }
  export interface ListApplicationAssignmentsRequest {
    /**
     * Specifies the ARN of the application.
     */
    ApplicationArn: ApplicationArn;
    /**
     * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    NextToken?: Token;
  }
  export interface ListApplicationAssignmentsResponse {
    /**
     * The list of users assigned to an application.
     */
    ApplicationAssignments?: ApplicationAssignmentsList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    NextToken?: Token;
  }
  export interface ListApplicationAuthenticationMethodsRequest {
    /**
     * Specifies the ARN of the application with the authentication methods you want to list.
     */
    ApplicationArn: ApplicationArn;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    NextToken?: Token;
  }
  export interface ListApplicationAuthenticationMethodsResponse {
    /**
     * An array list of authentication methods for the specified application.
     */
    AuthenticationMethods?: AuthenticationMethods;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    NextToken?: Token;
  }
  export interface ListApplicationGrantsRequest {
    /**
     * Specifies the ARN of the application whose grants you want to list.
     */
    ApplicationArn: ApplicationArn;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    NextToken?: Token;
  }
  export interface ListApplicationGrantsResponse {
    /**
     * An array list of structures that describe the requested grants.
     */
    Grants: Grants;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    NextToken?: Token;
  }
  export interface ListApplicationProvidersRequest {
    /**
     * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    NextToken?: Token;
  }
  export interface ListApplicationProvidersResponse {
    /**
     * An array list of structures that describe application providers.
     */
    ApplicationProviders?: ApplicationProviderList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    NextToken?: Token;
  }
  export interface ListApplicationsFilter {
    /**
     * An Amazon Web Services account ID number that filters the results in the response.
     */
    ApplicationAccount?: AccountId;
    /**
     * The ARN of an application provider that can filter the results in the response.
     */
    ApplicationProvider?: ApplicationProviderArn;
  }
  export interface ListApplicationsRequest {
    /**
     * Filters response results. 
     */
    Filter?: ListApplicationsFilter;
    /**
     * The ARN of the IAM Identity Center application under which the operation will run. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    NextToken?: Token;
  }
  export interface ListApplicationsResponse {
    /**
     * Retrieves all applications associated with the instance.
     */
    Applications?: ApplicationList;
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    NextToken?: Token;
  }
  export interface ListCustomerManagedPolicyReferencesInPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. 
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the list call.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * The ARN of the PermissionSet. 
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface ListCustomerManagedPolicyReferencesInPermissionSetResponse {
    /**
     * Specifies the names and paths of the customer managed policies that you have attached to your permission set.
     */
    CustomerManagedPolicyReferences?: CustomerManagedPolicyReferenceList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListInstancesRequest {
    /**
     * The maximum number of results to display for the instance.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListInstancesResponse {
    /**
     * Lists the IAM Identity Center instances that the caller has access to.
     */
    Instances?: InstanceList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListManagedPoliciesInPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the PermissionSet.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * The ARN of the PermissionSet whose managed policies will be listed.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface ListManagedPoliciesInPermissionSetResponse {
    /**
     * An array of the AttachedManagedPolicy data type object.
     */
    AttachedManagedPolicies?: AttachedManagedPolicyList;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListPermissionSetProvisioningStatusRequest {
    /**
     * Filters results based on the passed attribute value.
     */
    Filter?: OperationStatusFilter;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListPermissionSetProvisioningStatusResponse {
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * The status object for the permission set provisioning operation.
     */
    PermissionSetsProvisioningStatus?: PermissionSetProvisioningStatusList;
  }
  export interface ListPermissionSetsProvisionedToAccountRequest {
    /**
     * The identifier of the Amazon Web Services account from which to list the assignments.
     */
    AccountId: AccountId;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * The status object for the permission set provisioning operation.
     */
    ProvisioningStatus?: ProvisioningStatus;
  }
  export interface ListPermissionSetsProvisionedToAccountResponse {
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * Defines the level of access that an Amazon Web Services account has.
     */
    PermissionSets?: PermissionSetList;
  }
  export interface ListPermissionSetsRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The maximum number of results to display for the assignment.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
  }
  export interface ListPermissionSetsResponse {
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * Defines the level of access on an Amazon Web Services account.
     */
    PermissionSets?: PermissionSetList;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn?: InstanceArn;
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * The ARN of the resource with the tags to be listed.
     */
    ResourceArn: TaggableResourceArn;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The pagination token for the list API. Initially the value is null. Use the output of previous API calls to make subsequent calls.
     */
    NextToken?: Token;
    /**
     * A set of key-value pairs that are used to manage the resource.
     */
    Tags?: TagList;
  }
  export interface ListTrustedTokenIssuersRequest {
    /**
     * Specifies the ARN of the instance of IAM Identity Center with the trusted token issuer configurations that you want to list.
     */
    InstanceArn: InstanceArn;
    /**
     * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results.
     */
    MaxResults?: MaxResults;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    NextToken?: Token;
  }
  export interface ListTrustedTokenIssuersResponse {
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    NextToken?: Token;
    /**
     * An array list of the trusted token issuer configurations.
     */
    TrustedTokenIssuers?: TrustedTokenIssuerList;
  }
  export type ManagedPolicyArn = string;
  export type ManagedPolicyName = string;
  export type ManagedPolicyPath = string;
  export type MaxResults = number;
  export type Name = string;
  export type NameType = string;
  export interface OidcJwtConfiguration {
    /**
     * The path of the source attribute in the JWT from the trusted token issuer. The attribute mapped by this JMESPath expression is compared against the attribute mapped by IdentityStoreAttributePath when a trusted token issuer token is exchanged for an IAM Identity Center token.
     */
    ClaimAttributePath: ClaimAttributePath;
    /**
     * The path of the destination attribute in a JWT from IAM Identity Center. The attribute mapped by this JMESPath expression is compared against the attribute mapped by ClaimAttributePath when a trusted token issuer token is exchanged for an IAM Identity Center token. 
     */
    IdentityStoreAttributePath: JMESPath;
    /**
     * The URL that IAM Identity Center uses for OpenID Discovery. OpenID Discovery is used to obtain the information required to verify the tokens that the trusted token issuer generates.
     */
    IssuerUrl: TrustedTokenIssuerUrl;
    /**
     * The method that the trusted token issuer can use to retrieve the JSON Web Key Set used to verify a JWT.
     */
    JwksRetrievalOption: JwksRetrievalOption;
  }
  export interface OidcJwtUpdateConfiguration {
    /**
     * The path of the source attribute in the JWT from the trusted token issuer. The attribute mapped by this JMESPath expression is compared against the attribute mapped by IdentityStoreAttributePath when a trusted token issuer token is exchanged for an IAM Identity Center token.
     */
    ClaimAttributePath?: ClaimAttributePath;
    /**
     * The path of the destination attribute in a JWT from IAM Identity Center. The attribute mapped by this JMESPath expression is compared against the attribute mapped by ClaimAttributePath when a trusted token issuer token is exchanged for an IAM Identity Center token.
     */
    IdentityStoreAttributePath?: JMESPath;
    /**
     * The method that the trusted token issuer can use to retrieve the JSON Web Key Set used to verify a JWT.
     */
    JwksRetrievalOption?: JwksRetrievalOption;
  }
  export interface OperationStatusFilter {
    /**
     * Filters the list operations result based on the status attribute.
     */
    Status?: StatusValues;
  }
  export interface PermissionSet {
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
    /**
     * The description of the PermissionSet.
     */
    Description?: PermissionSetDescription;
    /**
     * The name of the permission set.
     */
    Name?: PermissionSetName;
    /**
     * The ARN of the permission set. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    PermissionSetArn?: PermissionSetArn;
    /**
     * Used to redirect users within the application during the federation authentication process.
     */
    RelayState?: RelayState;
    /**
     * The length of time that the application user sessions are valid for in the ISO-8601 standard.
     */
    SessionDuration?: Duration;
  }
  export type PermissionSetArn = string;
  export type PermissionSetDescription = string;
  export type PermissionSetList = PermissionSetArn[];
  export type PermissionSetName = string;
  export type PermissionSetPolicyDocument = string;
  export interface PermissionSetProvisioningStatus {
    /**
     * The identifier of the Amazon Web Services account from which to list the assignments.
     */
    AccountId?: AccountId;
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
    /**
     * The message that contains an error or exception in case of an operation failure.
     */
    FailureReason?: Reason;
    /**
     * The ARN of the permission set that is being provisioned. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    PermissionSetArn?: PermissionSetArn;
    /**
     * The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.
     */
    RequestId?: UUId;
    /**
     * The status of the permission set provisioning process.
     */
    Status?: StatusValues;
  }
  export type PermissionSetProvisioningStatusList = PermissionSetProvisioningStatusMetadata[];
  export interface PermissionSetProvisioningStatusMetadata {
    /**
     * The date that the permission set was created.
     */
    CreatedDate?: _Date;
    /**
     * The identifier for tracking the request operation that is generated by the universally unique identifier (UUID) workflow.
     */
    RequestId?: UUId;
    /**
     * The status of the permission set provisioning process.
     */
    Status?: StatusValues;
  }
  export interface PermissionsBoundary {
    /**
     * Specifies the name and path of a customer managed policy. You must have an IAM policy that matches the name and path in each Amazon Web Services account where you want to deploy your permission set.
     */
    CustomerManagedPolicyReference?: CustomerManagedPolicyReference;
    /**
     * The Amazon Web Services managed policy ARN that you want to attach to a permission set as a permissions boundary.
     */
    ManagedPolicyArn?: ManagedPolicyArn;
  }
  export interface PortalOptions {
    /**
     * A structure that describes the sign-in options for the access portal.
     */
    SignInOptions?: SignInOptions;
    /**
     * Indicates whether this application is visible in the access portal.
     */
    Visibility?: ApplicationVisibility;
  }
  export type PrincipalId = string;
  export type PrincipalType = "USER"|"GROUP"|string;
  export interface ProvisionPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * TargetID is an Amazon Web Services account identifier, (For example, 123456789012).
     */
    TargetId?: TargetId;
    /**
     * The entity type for which the assignment will be created.
     */
    TargetType: ProvisionTargetType;
  }
  export interface ProvisionPermissionSetResponse {
    /**
     * The status object for the permission set provisioning operation.
     */
    PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
  }
  export type ProvisionTargetType = "AWS_ACCOUNT"|"ALL_PROVISIONED_ACCOUNTS"|string;
  export type ProvisioningStatus = "LATEST_PERMISSION_SET_PROVISIONED"|"LATEST_PERMISSION_SET_NOT_PROVISIONED"|string;
  export interface PutApplicationAccessScopeRequest {
    /**
     * Specifies the ARN of the application with the access scope with the targets to add or update.
     */
    ApplicationArn: ApplicationArn;
    /**
     * Specifies an array list of ARNs that represent the authorized targets for this access scope.
     */
    AuthorizedTargets?: ScopeTargets;
    /**
     * Specifies the name of the access scope to be associated with the specified targets.
     */
    Scope: Scope;
  }
  export interface PutApplicationAssignmentConfigurationRequest {
    /**
     * Specifies the ARN of the application. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    ApplicationArn: ApplicationArn;
    /**
     * If AssignmentsRequired is true (default value), users don’t have access to the application unless an assignment is created using the CreateApplicationAssignment API. If false, all users have access to the application. 
     */
    AssignmentRequired: AssignmentRequired;
  }
  export interface PutApplicationAssignmentConfigurationResponse {
  }
  export interface PutApplicationAuthenticationMethodRequest {
    /**
     * Specifies the ARN of the application with the authentication method to add or update.
     */
    ApplicationArn: ApplicationArn;
    /**
     * Specifies a structure that describes the authentication method to add or update. The structure type you provide is determined by the AuthenticationMethodType parameter.
     */
    AuthenticationMethod: AuthenticationMethod;
    /**
     * Specifies the type of the authentication method that you want to add or update.
     */
    AuthenticationMethodType: AuthenticationMethodType;
  }
  export interface PutApplicationGrantRequest {
    /**
     * Specifies the ARN of the application to update.
     */
    ApplicationArn: ApplicationArn;
    /**
     * Specifies a structure that describes the grant to update.
     */
    Grant: Grant;
    /**
     * Specifies the type of grant to update.
     */
    GrantType: GrantType;
  }
  export interface PutInlinePolicyToPermissionSetRequest {
    /**
     * The inline policy to attach to a PermissionSet.
     */
    InlinePolicy: PermissionSetPolicyDocument;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set.
     */
    PermissionSetArn: PermissionSetArn;
  }
  export interface PutInlinePolicyToPermissionSetResponse {
  }
  export interface PutPermissionsBoundaryToPermissionSetRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. 
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the PermissionSet.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * The permissions boundary that you want to attach to a PermissionSet.
     */
    PermissionsBoundary: PermissionsBoundary;
  }
  export interface PutPermissionsBoundaryToPermissionSetResponse {
  }
  export type Reason = string;
  export type RedirectUris = URI[];
  export interface RefreshTokenGrant {
  }
  export type RelayState = string;
  export interface ResourceServerConfig {
    /**
     * A list of the IAM Identity Center access scopes that are associated with this resource server.
     */
    Scopes?: ResourceServerScopes;
  }
  export type ResourceServerScope = string;
  export interface ResourceServerScopeDetails {
    /**
     * The title of an access scope for a resource server.
     */
    DetailedTitle?: Description;
    /**
     * The description of an access scope for a resource server.
     */
    LongDescription?: Description;
  }
  export type ResourceServerScopes = {[key: string]: ResourceServerScopeDetails};
  export type Scope = string;
  export interface ScopeDetails {
    /**
     * An array list of ARNs of applications.
     */
    AuthorizedTargets?: ScopeTargets;
    /**
     * The name of the access scope.
     */
    Scope: Scope;
  }
  export type ScopeTarget = string;
  export type ScopeTargets = ScopeTarget[];
  export type Scopes = ScopeDetails[];
  export interface SignInOptions {
    /**
     * The URL that accepts authentication requests for an application. This is a required parameter if the Origin parameter is APPLICATION.
     */
    ApplicationUrl?: ApplicationUrl;
    /**
     * This determines how IAM Identity Center navigates the user to the target application. It can be one of the following values:    APPLICATION: IAM Identity Center redirects the customer to the configured ApplicationUrl.    IDENTITY_CENTER: IAM Identity Center uses SAML identity-provider initiated authentication to sign the customer directly into a SAML-based application.  
     */
    Origin: SignInOrigin;
  }
  export type SignInOrigin = "IDENTITY_CENTER"|"APPLICATION"|string;
  export type StatusValues = "IN_PROGRESS"|"FAILED"|"SUCCEEDED"|string;
  export interface Tag {
    /**
     * The key for the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn?: InstanceArn;
    /**
     * The ARN of the resource with the tags to be listed.
     */
    ResourceArn: TaggableResourceArn;
    /**
     * A set of key-value pairs that are used to manage the resource.
     */
    Tags: TagList;
  }
  export interface TagResourceResponse {
  }
  export type TagValue = string;
  export type TaggableResourceArn = string;
  export type TargetId = string;
  export type TargetType = "AWS_ACCOUNT"|string;
  export type Token = string;
  export interface TokenExchangeGrant {
  }
  export type TokenIssuerAudience = string;
  export type TokenIssuerAudiences = TokenIssuerAudience[];
  export type TrustedTokenIssuerArn = string;
  export interface TrustedTokenIssuerConfiguration {
    /**
     * A structure that describes the settings for a trusted token issuer that works with OpenID Connect (OIDC) by using JSON Web Tokens (JWT).
     */
    OidcJwtConfiguration?: OidcJwtConfiguration;
  }
  export type TrustedTokenIssuerList = TrustedTokenIssuerMetadata[];
  export interface TrustedTokenIssuerMetadata {
    /**
     * The name of the trusted token issuer configuration in the instance of IAM Identity Center.
     */
    Name?: TrustedTokenIssuerName;
    /**
     * The ARN of the trusted token issuer configuration in the instance of IAM Identity Center.
     */
    TrustedTokenIssuerArn?: TrustedTokenIssuerArn;
    /**
     * The type of trusted token issuer.
     */
    TrustedTokenIssuerType?: TrustedTokenIssuerType;
  }
  export type TrustedTokenIssuerName = string;
  export type TrustedTokenIssuerType = "OIDC_JWT"|string;
  export interface TrustedTokenIssuerUpdateConfiguration {
    /**
     * A structure that describes an updated configuration for a trusted token issuer that uses OpenID Connect (OIDC) with JSON web tokens (JWT).
     */
    OidcJwtConfiguration?: OidcJwtUpdateConfiguration;
  }
  export type TrustedTokenIssuerUrl = string;
  export type URI = string;
  export type UUId = string;
  export interface UntagResourceRequest {
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn?: InstanceArn;
    /**
     * The ARN of the resource with the tags to be listed.
     */
    ResourceArn: TaggableResourceArn;
    /**
     * The keys of tags that are attached to the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResponse {
  }
  export interface UpdateApplicationPortalOptions {
    SignInOptions?: SignInOptions;
  }
  export interface UpdateApplicationRequest {
    /**
     * Specifies the ARN of the application. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    ApplicationArn: ApplicationArn;
    /**
     * The description of the .
     */
    Description?: Description;
    /**
     * Specifies the updated name for the application.
     */
    Name?: NameType;
    /**
     * A structure that describes the options for the portal associated with an application.
     */
    PortalOptions?: UpdateApplicationPortalOptions;
    /**
     * Specifies whether the application is enabled or disabled.
     */
    Status?: ApplicationStatus;
  }
  export interface UpdateApplicationResponse {
  }
  export interface UpdateInstanceAccessControlAttributeConfigurationRequest {
    /**
     * Updates the attributes for your ABAC configuration.
     */
    InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed.
     */
    InstanceArn: InstanceArn;
  }
  export interface UpdateInstanceAccessControlAttributeConfigurationResponse {
  }
  export interface UpdateInstanceRequest {
    /**
     * The ARN of the instance of IAM Identity Center under which the operation will run. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * Updates the instance name.
     */
    Name: NameType;
  }
  export interface UpdateInstanceResponse {
  }
  export interface UpdatePermissionSetRequest {
    /**
     * The description of the PermissionSet.
     */
    Description?: PermissionSetDescription;
    /**
     * The ARN of the IAM Identity Center instance under which the operation will be executed. For more information about ARNs, see Amazon Resource Names (ARNs) and Amazon Web Services Service Namespaces in the Amazon Web Services General Reference.
     */
    InstanceArn: InstanceArn;
    /**
     * The ARN of the permission set.
     */
    PermissionSetArn: PermissionSetArn;
    /**
     * Used to redirect users within the application during the federation authentication process.
     */
    RelayState?: RelayState;
    /**
     * The length of time that the application user sessions are valid for in the ISO-8601 standard.
     */
    SessionDuration?: Duration;
  }
  export interface UpdatePermissionSetResponse {
  }
  export interface UpdateTrustedTokenIssuerRequest {
    /**
     * Specifies the updated name to be applied to the trusted token issuer configuration.
     */
    Name?: TrustedTokenIssuerName;
    /**
     * Specifies the ARN of the trusted token issuer configuration that you want to update.
     */
    TrustedTokenIssuerArn: TrustedTokenIssuerArn;
    /**
     * Specifies a structure with settings to apply to the specified trusted token issuer. The settings that you can provide are determined by the type of the trusted token issuer that you are updating.
     */
    TrustedTokenIssuerConfiguration?: TrustedTokenIssuerUpdateConfiguration;
  }
  export interface UpdateTrustedTokenIssuerResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2020-07-20"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SSOAdmin client.
   */
  export import Types = SSOAdmin;
}
export = SSOAdmin;
