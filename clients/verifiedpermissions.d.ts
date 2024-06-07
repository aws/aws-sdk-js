import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class VerifiedPermissions extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: VerifiedPermissions.Types.ClientConfiguration)
  config: Config & VerifiedPermissions.Types.ClientConfiguration;
  /**
   * Makes a series of decisions about multiple authorization requests for one principal or resource. Each request contains the equivalent content of an IsAuthorized request: principal, action, resource, and context. Either the principal or the resource parameter must be identical across all requests. For example, Verified Permissions won't evaluate a pair of requests where bob views photo1 and alice views photo2. Authorization of bob to view photo1 and photo2, or bob and alice to view photo1, are valid batches.  The request is evaluated against all policies in the specified policy store that match the entities that you declare. The result of the decisions is a series of Allow or Deny responses, along with the IDs of the policies that produced each decision. The entities of a BatchIsAuthorized API request can contain up to 100 principals and up to 100 resources. The requests of a BatchIsAuthorized API request can contain up to 30 requests.  The BatchIsAuthorized operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission verifiedpermissions:IsAuthorized in their IAM policies. 
   */
  batchIsAuthorized(params: VerifiedPermissions.Types.BatchIsAuthorizedInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.BatchIsAuthorizedOutput) => void): Request<VerifiedPermissions.Types.BatchIsAuthorizedOutput, AWSError>;
  /**
   * Makes a series of decisions about multiple authorization requests for one principal or resource. Each request contains the equivalent content of an IsAuthorized request: principal, action, resource, and context. Either the principal or the resource parameter must be identical across all requests. For example, Verified Permissions won't evaluate a pair of requests where bob views photo1 and alice views photo2. Authorization of bob to view photo1 and photo2, or bob and alice to view photo1, are valid batches.  The request is evaluated against all policies in the specified policy store that match the entities that you declare. The result of the decisions is a series of Allow or Deny responses, along with the IDs of the policies that produced each decision. The entities of a BatchIsAuthorized API request can contain up to 100 principals and up to 100 resources. The requests of a BatchIsAuthorized API request can contain up to 30 requests.  The BatchIsAuthorized operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission verifiedpermissions:IsAuthorized in their IAM policies. 
   */
  batchIsAuthorized(callback?: (err: AWSError, data: VerifiedPermissions.Types.BatchIsAuthorizedOutput) => void): Request<VerifiedPermissions.Types.BatchIsAuthorizedOutput, AWSError>;
  /**
   * Makes a series of decisions about multiple authorization requests for one token. The principal in this request comes from an external identity source in the form of an identity or access token, formatted as a JSON web token (JWT). The information in the parameters can also define additional context that Verified Permissions can include in the evaluations. The request is evaluated against all policies in the specified policy store that match the entities that you provide in the entities declaration and in the token. The result of the decisions is a series of Allow or Deny responses, along with the IDs of the policies that produced each decision. The entities of a BatchIsAuthorizedWithToken API request can contain up to 100 resources and up to 99 user groups. The requests of a BatchIsAuthorizedWithToken API request can contain up to 30 requests.  The BatchIsAuthorizedWithToken operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission verifiedpermissions:IsAuthorizedWithToken in their IAM policies. 
   */
  batchIsAuthorizedWithToken(params: VerifiedPermissions.Types.BatchIsAuthorizedWithTokenInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.BatchIsAuthorizedWithTokenOutput) => void): Request<VerifiedPermissions.Types.BatchIsAuthorizedWithTokenOutput, AWSError>;
  /**
   * Makes a series of decisions about multiple authorization requests for one token. The principal in this request comes from an external identity source in the form of an identity or access token, formatted as a JSON web token (JWT). The information in the parameters can also define additional context that Verified Permissions can include in the evaluations. The request is evaluated against all policies in the specified policy store that match the entities that you provide in the entities declaration and in the token. The result of the decisions is a series of Allow or Deny responses, along with the IDs of the policies that produced each decision. The entities of a BatchIsAuthorizedWithToken API request can contain up to 100 resources and up to 99 user groups. The requests of a BatchIsAuthorizedWithToken API request can contain up to 30 requests.  The BatchIsAuthorizedWithToken operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission verifiedpermissions:IsAuthorizedWithToken in their IAM policies. 
   */
  batchIsAuthorizedWithToken(callback?: (err: AWSError, data: VerifiedPermissions.Types.BatchIsAuthorizedWithTokenOutput) => void): Request<VerifiedPermissions.Types.BatchIsAuthorizedWithTokenOutput, AWSError>;
  /**
   * Adds an identity source to a policy store–an Amazon Cognito user pool or OpenID Connect (OIDC) identity provider (IdP).  After you create an identity source, you can use the identities provided by the IdP as proxies for the principal in authorization queries that use the IsAuthorizedWithToken or BatchIsAuthorizedWithToken API operations. These identities take the form of tokens that contain claims about the user, such as IDs, attributes and group memberships. Identity sources provide identity (ID) tokens and access tokens. Verified Permissions derives information about your user and session from token claims. Access tokens provide action context to your policies, and ID tokens provide principal Attributes.  Tokens from an identity source user continue to be usable until they expire. Token revocation and resource deletion have no effect on the validity of a token in your policy store   To reference a user from this identity source in your Cedar policies, refer to the following syntax examples.   Amazon Cognito user pool: Namespace::[Entity type]::[User pool ID]|[user principal attribute], for example MyCorp::User::us-east-1_EXAMPLE|a1b2c3d4-5678-90ab-cdef-EXAMPLE11111.   OpenID Connect (OIDC) provider: Namespace::[Entity type]::[principalIdClaim]|[user principal attribute], for example MyCorp::User::MyOIDCProvider|a1b2c3d4-5678-90ab-cdef-EXAMPLE22222.     Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  createIdentitySource(params: VerifiedPermissions.Types.CreateIdentitySourceInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.CreateIdentitySourceOutput) => void): Request<VerifiedPermissions.Types.CreateIdentitySourceOutput, AWSError>;
  /**
   * Adds an identity source to a policy store–an Amazon Cognito user pool or OpenID Connect (OIDC) identity provider (IdP).  After you create an identity source, you can use the identities provided by the IdP as proxies for the principal in authorization queries that use the IsAuthorizedWithToken or BatchIsAuthorizedWithToken API operations. These identities take the form of tokens that contain claims about the user, such as IDs, attributes and group memberships. Identity sources provide identity (ID) tokens and access tokens. Verified Permissions derives information about your user and session from token claims. Access tokens provide action context to your policies, and ID tokens provide principal Attributes.  Tokens from an identity source user continue to be usable until they expire. Token revocation and resource deletion have no effect on the validity of a token in your policy store   To reference a user from this identity source in your Cedar policies, refer to the following syntax examples.   Amazon Cognito user pool: Namespace::[Entity type]::[User pool ID]|[user principal attribute], for example MyCorp::User::us-east-1_EXAMPLE|a1b2c3d4-5678-90ab-cdef-EXAMPLE11111.   OpenID Connect (OIDC) provider: Namespace::[Entity type]::[principalIdClaim]|[user principal attribute], for example MyCorp::User::MyOIDCProvider|a1b2c3d4-5678-90ab-cdef-EXAMPLE22222.     Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  createIdentitySource(callback?: (err: AWSError, data: VerifiedPermissions.Types.CreateIdentitySourceOutput) => void): Request<VerifiedPermissions.Types.CreateIdentitySourceOutput, AWSError>;
  /**
   * Creates a Cedar policy and saves it in the specified policy store. You can create either a static policy or a policy linked to a policy template.   To create a static policy, provide the Cedar policy text in the StaticPolicy section of the PolicyDefinition.   To create a policy that is dynamically linked to a policy template, specify the policy template ID and the principal and resource to associate with this policy in the templateLinked section of the PolicyDefinition. If the policy template is ever updated, any policies linked to the policy template automatically use the updated template.    Creating a policy causes it to be validated against the schema in the policy store. If the policy doesn't pass validation, the operation fails and the policy isn't stored.   Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  createPolicy(params: VerifiedPermissions.Types.CreatePolicyInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.CreatePolicyOutput) => void): Request<VerifiedPermissions.Types.CreatePolicyOutput, AWSError>;
  /**
   * Creates a Cedar policy and saves it in the specified policy store. You can create either a static policy or a policy linked to a policy template.   To create a static policy, provide the Cedar policy text in the StaticPolicy section of the PolicyDefinition.   To create a policy that is dynamically linked to a policy template, specify the policy template ID and the principal and resource to associate with this policy in the templateLinked section of the PolicyDefinition. If the policy template is ever updated, any policies linked to the policy template automatically use the updated template.    Creating a policy causes it to be validated against the schema in the policy store. If the policy doesn't pass validation, the operation fails and the policy isn't stored.   Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  createPolicy(callback?: (err: AWSError, data: VerifiedPermissions.Types.CreatePolicyOutput) => void): Request<VerifiedPermissions.Types.CreatePolicyOutput, AWSError>;
  /**
   * Creates a policy store. A policy store is a container for policy resources.  Although Cedar supports multiple namespaces, Verified Permissions currently supports only one namespace per policy store.   Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  createPolicyStore(params: VerifiedPermissions.Types.CreatePolicyStoreInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.CreatePolicyStoreOutput) => void): Request<VerifiedPermissions.Types.CreatePolicyStoreOutput, AWSError>;
  /**
   * Creates a policy store. A policy store is a container for policy resources.  Although Cedar supports multiple namespaces, Verified Permissions currently supports only one namespace per policy store.   Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  createPolicyStore(callback?: (err: AWSError, data: VerifiedPermissions.Types.CreatePolicyStoreOutput) => void): Request<VerifiedPermissions.Types.CreatePolicyStoreOutput, AWSError>;
  /**
   * Creates a policy template. A template can use placeholders for the principal and resource. A template must be instantiated into a policy by associating it with specific principals and resources to use for the placeholders. That instantiated policy can then be considered in authorization decisions. The instantiated policy works identically to any other policy, except that it is dynamically linked to the template. If the template changes, then any policies that are linked to that template are immediately updated as well.  Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  createPolicyTemplate(params: VerifiedPermissions.Types.CreatePolicyTemplateInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.CreatePolicyTemplateOutput) => void): Request<VerifiedPermissions.Types.CreatePolicyTemplateOutput, AWSError>;
  /**
   * Creates a policy template. A template can use placeholders for the principal and resource. A template must be instantiated into a policy by associating it with specific principals and resources to use for the placeholders. That instantiated policy can then be considered in authorization decisions. The instantiated policy works identically to any other policy, except that it is dynamically linked to the template. If the template changes, then any policies that are linked to that template are immediately updated as well.  Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  createPolicyTemplate(callback?: (err: AWSError, data: VerifiedPermissions.Types.CreatePolicyTemplateOutput) => void): Request<VerifiedPermissions.Types.CreatePolicyTemplateOutput, AWSError>;
  /**
   * Deletes an identity source that references an identity provider (IdP) such as Amazon Cognito. After you delete the identity source, you can no longer use tokens for identities from that identity source to represent principals in authorization queries made using IsAuthorizedWithToken. operations.
   */
  deleteIdentitySource(params: VerifiedPermissions.Types.DeleteIdentitySourceInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.DeleteIdentitySourceOutput) => void): Request<VerifiedPermissions.Types.DeleteIdentitySourceOutput, AWSError>;
  /**
   * Deletes an identity source that references an identity provider (IdP) such as Amazon Cognito. After you delete the identity source, you can no longer use tokens for identities from that identity source to represent principals in authorization queries made using IsAuthorizedWithToken. operations.
   */
  deleteIdentitySource(callback?: (err: AWSError, data: VerifiedPermissions.Types.DeleteIdentitySourceOutput) => void): Request<VerifiedPermissions.Types.DeleteIdentitySourceOutput, AWSError>;
  /**
   * Deletes the specified policy from the policy store. This operation is idempotent; if you specify a policy that doesn't exist, the request response returns a successful HTTP 200 status code.
   */
  deletePolicy(params: VerifiedPermissions.Types.DeletePolicyInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.DeletePolicyOutput) => void): Request<VerifiedPermissions.Types.DeletePolicyOutput, AWSError>;
  /**
   * Deletes the specified policy from the policy store. This operation is idempotent; if you specify a policy that doesn't exist, the request response returns a successful HTTP 200 status code.
   */
  deletePolicy(callback?: (err: AWSError, data: VerifiedPermissions.Types.DeletePolicyOutput) => void): Request<VerifiedPermissions.Types.DeletePolicyOutput, AWSError>;
  /**
   * Deletes the specified policy store. This operation is idempotent. If you specify a policy store that does not exist, the request response will still return a successful HTTP 200 status code.
   */
  deletePolicyStore(params: VerifiedPermissions.Types.DeletePolicyStoreInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.DeletePolicyStoreOutput) => void): Request<VerifiedPermissions.Types.DeletePolicyStoreOutput, AWSError>;
  /**
   * Deletes the specified policy store. This operation is idempotent. If you specify a policy store that does not exist, the request response will still return a successful HTTP 200 status code.
   */
  deletePolicyStore(callback?: (err: AWSError, data: VerifiedPermissions.Types.DeletePolicyStoreOutput) => void): Request<VerifiedPermissions.Types.DeletePolicyStoreOutput, AWSError>;
  /**
   * Deletes the specified policy template from the policy store.  This operation also deletes any policies that were created from the specified policy template. Those policies are immediately removed from all future API responses, and are asynchronously deleted from the policy store. 
   */
  deletePolicyTemplate(params: VerifiedPermissions.Types.DeletePolicyTemplateInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.DeletePolicyTemplateOutput) => void): Request<VerifiedPermissions.Types.DeletePolicyTemplateOutput, AWSError>;
  /**
   * Deletes the specified policy template from the policy store.  This operation also deletes any policies that were created from the specified policy template. Those policies are immediately removed from all future API responses, and are asynchronously deleted from the policy store. 
   */
  deletePolicyTemplate(callback?: (err: AWSError, data: VerifiedPermissions.Types.DeletePolicyTemplateOutput) => void): Request<VerifiedPermissions.Types.DeletePolicyTemplateOutput, AWSError>;
  /**
   * Retrieves the details about the specified identity source.
   */
  getIdentitySource(params: VerifiedPermissions.Types.GetIdentitySourceInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.GetIdentitySourceOutput) => void): Request<VerifiedPermissions.Types.GetIdentitySourceOutput, AWSError>;
  /**
   * Retrieves the details about the specified identity source.
   */
  getIdentitySource(callback?: (err: AWSError, data: VerifiedPermissions.Types.GetIdentitySourceOutput) => void): Request<VerifiedPermissions.Types.GetIdentitySourceOutput, AWSError>;
  /**
   * Retrieves information about the specified policy.
   */
  getPolicy(params: VerifiedPermissions.Types.GetPolicyInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.GetPolicyOutput) => void): Request<VerifiedPermissions.Types.GetPolicyOutput, AWSError>;
  /**
   * Retrieves information about the specified policy.
   */
  getPolicy(callback?: (err: AWSError, data: VerifiedPermissions.Types.GetPolicyOutput) => void): Request<VerifiedPermissions.Types.GetPolicyOutput, AWSError>;
  /**
   * Retrieves details about a policy store.
   */
  getPolicyStore(params: VerifiedPermissions.Types.GetPolicyStoreInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.GetPolicyStoreOutput) => void): Request<VerifiedPermissions.Types.GetPolicyStoreOutput, AWSError>;
  /**
   * Retrieves details about a policy store.
   */
  getPolicyStore(callback?: (err: AWSError, data: VerifiedPermissions.Types.GetPolicyStoreOutput) => void): Request<VerifiedPermissions.Types.GetPolicyStoreOutput, AWSError>;
  /**
   * Retrieve the details for the specified policy template in the specified policy store.
   */
  getPolicyTemplate(params: VerifiedPermissions.Types.GetPolicyTemplateInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.GetPolicyTemplateOutput) => void): Request<VerifiedPermissions.Types.GetPolicyTemplateOutput, AWSError>;
  /**
   * Retrieve the details for the specified policy template in the specified policy store.
   */
  getPolicyTemplate(callback?: (err: AWSError, data: VerifiedPermissions.Types.GetPolicyTemplateOutput) => void): Request<VerifiedPermissions.Types.GetPolicyTemplateOutput, AWSError>;
  /**
   * Retrieve the details for the specified schema in the specified policy store.
   */
  getSchema(params: VerifiedPermissions.Types.GetSchemaInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.GetSchemaOutput) => void): Request<VerifiedPermissions.Types.GetSchemaOutput, AWSError>;
  /**
   * Retrieve the details for the specified schema in the specified policy store.
   */
  getSchema(callback?: (err: AWSError, data: VerifiedPermissions.Types.GetSchemaOutput) => void): Request<VerifiedPermissions.Types.GetSchemaOutput, AWSError>;
  /**
   * Makes an authorization decision about a service request described in the parameters. The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either Allow or Deny, along with a list of the policies that resulted in the decision.
   */
  isAuthorized(params: VerifiedPermissions.Types.IsAuthorizedInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.IsAuthorizedOutput) => void): Request<VerifiedPermissions.Types.IsAuthorizedOutput, AWSError>;
  /**
   * Makes an authorization decision about a service request described in the parameters. The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either Allow or Deny, along with a list of the policies that resulted in the decision.
   */
  isAuthorized(callback?: (err: AWSError, data: VerifiedPermissions.Types.IsAuthorizedOutput) => void): Request<VerifiedPermissions.Types.IsAuthorizedOutput, AWSError>;
  /**
   * Makes an authorization decision about a service request described in the parameters. The principal in this request comes from an external identity source in the form of an identity token formatted as a JSON web token (JWT). The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either Allow or Deny, along with a list of the policies that resulted in the decision. At this time, Verified Permissions accepts tokens from only Amazon Cognito. Verified Permissions validates each token that is specified in a request by checking its expiration date and its signature.  Tokens from an identity source user continue to be usable until they expire. Token revocation and resource deletion have no effect on the validity of a token in your policy store 
   */
  isAuthorizedWithToken(params: VerifiedPermissions.Types.IsAuthorizedWithTokenInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.IsAuthorizedWithTokenOutput) => void): Request<VerifiedPermissions.Types.IsAuthorizedWithTokenOutput, AWSError>;
  /**
   * Makes an authorization decision about a service request described in the parameters. The principal in this request comes from an external identity source in the form of an identity token formatted as a JSON web token (JWT). The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either Allow or Deny, along with a list of the policies that resulted in the decision. At this time, Verified Permissions accepts tokens from only Amazon Cognito. Verified Permissions validates each token that is specified in a request by checking its expiration date and its signature.  Tokens from an identity source user continue to be usable until they expire. Token revocation and resource deletion have no effect on the validity of a token in your policy store 
   */
  isAuthorizedWithToken(callback?: (err: AWSError, data: VerifiedPermissions.Types.IsAuthorizedWithTokenOutput) => void): Request<VerifiedPermissions.Types.IsAuthorizedWithTokenOutput, AWSError>;
  /**
   * Returns a paginated list of all of the identity sources defined in the specified policy store.
   */
  listIdentitySources(params: VerifiedPermissions.Types.ListIdentitySourcesInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.ListIdentitySourcesOutput) => void): Request<VerifiedPermissions.Types.ListIdentitySourcesOutput, AWSError>;
  /**
   * Returns a paginated list of all of the identity sources defined in the specified policy store.
   */
  listIdentitySources(callback?: (err: AWSError, data: VerifiedPermissions.Types.ListIdentitySourcesOutput) => void): Request<VerifiedPermissions.Types.ListIdentitySourcesOutput, AWSError>;
  /**
   * Returns a paginated list of all policies stored in the specified policy store.
   */
  listPolicies(params: VerifiedPermissions.Types.ListPoliciesInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.ListPoliciesOutput) => void): Request<VerifiedPermissions.Types.ListPoliciesOutput, AWSError>;
  /**
   * Returns a paginated list of all policies stored in the specified policy store.
   */
  listPolicies(callback?: (err: AWSError, data: VerifiedPermissions.Types.ListPoliciesOutput) => void): Request<VerifiedPermissions.Types.ListPoliciesOutput, AWSError>;
  /**
   * Returns a paginated list of all policy stores in the calling Amazon Web Services account.
   */
  listPolicyStores(params: VerifiedPermissions.Types.ListPolicyStoresInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.ListPolicyStoresOutput) => void): Request<VerifiedPermissions.Types.ListPolicyStoresOutput, AWSError>;
  /**
   * Returns a paginated list of all policy stores in the calling Amazon Web Services account.
   */
  listPolicyStores(callback?: (err: AWSError, data: VerifiedPermissions.Types.ListPolicyStoresOutput) => void): Request<VerifiedPermissions.Types.ListPolicyStoresOutput, AWSError>;
  /**
   * Returns a paginated list of all policy templates in the specified policy store.
   */
  listPolicyTemplates(params: VerifiedPermissions.Types.ListPolicyTemplatesInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.ListPolicyTemplatesOutput) => void): Request<VerifiedPermissions.Types.ListPolicyTemplatesOutput, AWSError>;
  /**
   * Returns a paginated list of all policy templates in the specified policy store.
   */
  listPolicyTemplates(callback?: (err: AWSError, data: VerifiedPermissions.Types.ListPolicyTemplatesOutput) => void): Request<VerifiedPermissions.Types.ListPolicyTemplatesOutput, AWSError>;
  /**
   * Creates or updates the policy schema in the specified policy store. The schema is used to validate any Cedar policies and policy templates submitted to the policy store. Any changes to the schema validate only policies and templates submitted after the schema change. Existing policies and templates are not re-evaluated against the changed schema. If you later update a policy, then it is evaluated against the new schema at that time.  Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  putSchema(params: VerifiedPermissions.Types.PutSchemaInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.PutSchemaOutput) => void): Request<VerifiedPermissions.Types.PutSchemaOutput, AWSError>;
  /**
   * Creates or updates the policy schema in the specified policy store. The schema is used to validate any Cedar policies and policy templates submitted to the policy store. Any changes to the schema validate only policies and templates submitted after the schema change. Existing policies and templates are not re-evaluated against the changed schema. If you later update a policy, then it is evaluated against the new schema at that time.  Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  putSchema(callback?: (err: AWSError, data: VerifiedPermissions.Types.PutSchemaOutput) => void): Request<VerifiedPermissions.Types.PutSchemaOutput, AWSError>;
  /**
   * Updates the specified identity source to use a new identity provider (IdP), or to change the mapping of identities from the IdP to a different principal entity type.  Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  updateIdentitySource(params: VerifiedPermissions.Types.UpdateIdentitySourceInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.UpdateIdentitySourceOutput) => void): Request<VerifiedPermissions.Types.UpdateIdentitySourceOutput, AWSError>;
  /**
   * Updates the specified identity source to use a new identity provider (IdP), or to change the mapping of identities from the IdP to a different principal entity type.  Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  updateIdentitySource(callback?: (err: AWSError, data: VerifiedPermissions.Types.UpdateIdentitySourceOutput) => void): Request<VerifiedPermissions.Types.UpdateIdentitySourceOutput, AWSError>;
  /**
   * Modifies a Cedar static policy in the specified policy store. You can change only certain elements of the UpdatePolicyDefinition parameter. You can directly update only static policies. To change a template-linked policy, you must update the template instead, using UpdatePolicyTemplate.    If policy validation is enabled in the policy store, then updating a static policy causes Verified Permissions to validate the policy against the schema in the policy store. If the updated static policy doesn't pass validation, the operation fails and the update isn't stored.   When you edit a static policy, you can change only certain elements of a static policy:   The action referenced by the policy.    A condition clause, such as when and unless.    You can't change these elements of a static policy:    Changing a policy from a static policy to a template-linked policy.    Changing the effect of a static policy from permit or forbid.    The principal referenced by a static policy.    The resource referenced by a static policy.      To update a template-linked policy, you must update the template instead.      Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  updatePolicy(params: VerifiedPermissions.Types.UpdatePolicyInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.UpdatePolicyOutput) => void): Request<VerifiedPermissions.Types.UpdatePolicyOutput, AWSError>;
  /**
   * Modifies a Cedar static policy in the specified policy store. You can change only certain elements of the UpdatePolicyDefinition parameter. You can directly update only static policies. To change a template-linked policy, you must update the template instead, using UpdatePolicyTemplate.    If policy validation is enabled in the policy store, then updating a static policy causes Verified Permissions to validate the policy against the schema in the policy store. If the updated static policy doesn't pass validation, the operation fails and the update isn't stored.   When you edit a static policy, you can change only certain elements of a static policy:   The action referenced by the policy.    A condition clause, such as when and unless.    You can't change these elements of a static policy:    Changing a policy from a static policy to a template-linked policy.    Changing the effect of a static policy from permit or forbid.    The principal referenced by a static policy.    The resource referenced by a static policy.      To update a template-linked policy, you must update the template instead.      Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  updatePolicy(callback?: (err: AWSError, data: VerifiedPermissions.Types.UpdatePolicyOutput) => void): Request<VerifiedPermissions.Types.UpdatePolicyOutput, AWSError>;
  /**
   * Modifies the validation setting for a policy store.  Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  updatePolicyStore(params: VerifiedPermissions.Types.UpdatePolicyStoreInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.UpdatePolicyStoreOutput) => void): Request<VerifiedPermissions.Types.UpdatePolicyStoreOutput, AWSError>;
  /**
   * Modifies the validation setting for a policy store.  Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  updatePolicyStore(callback?: (err: AWSError, data: VerifiedPermissions.Types.UpdatePolicyStoreOutput) => void): Request<VerifiedPermissions.Types.UpdatePolicyStoreOutput, AWSError>;
  /**
   * Updates the specified policy template. You can update only the description and the some elements of the policyBody.   Changes you make to the policy template content are immediately (within the constraints of eventual consistency) reflected in authorization decisions that involve all template-linked policies instantiated from this template.   Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  updatePolicyTemplate(params: VerifiedPermissions.Types.UpdatePolicyTemplateInput, callback?: (err: AWSError, data: VerifiedPermissions.Types.UpdatePolicyTemplateOutput) => void): Request<VerifiedPermissions.Types.UpdatePolicyTemplateOutput, AWSError>;
  /**
   * Updates the specified policy template. You can update only the description and the some elements of the policyBody.   Changes you make to the policy template content are immediately (within the constraints of eventual consistency) reflected in authorization decisions that involve all template-linked policies instantiated from this template.   Verified Permissions is  eventually consistent . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations. 
   */
  updatePolicyTemplate(callback?: (err: AWSError, data: VerifiedPermissions.Types.UpdatePolicyTemplateOutput) => void): Request<VerifiedPermissions.Types.UpdatePolicyTemplateOutput, AWSError>;
}
declare namespace VerifiedPermissions {
  export type ActionId = string;
  export interface ActionIdentifier {
    /**
     * The type of an action.
     */
    actionType: ActionType;
    /**
     * The ID of an action.
     */
    actionId: ActionId;
  }
  export type ActionIdentifierList = ActionIdentifier[];
  export type ActionType = string;
  export interface AttributeValue {
    /**
     * An attribute value of Boolean type. Example: {"boolean": true} 
     */
    boolean?: BooleanAttribute;
    /**
     * An attribute value of type EntityIdentifier. Example: "entityIdentifier": { "entityId": "&lt;id&gt;", "entityType": "&lt;entity type&gt;"} 
     */
    entityIdentifier?: EntityIdentifier;
    /**
     * An attribute value of Long type. Example: {"long": 0} 
     */
    long?: LongAttribute;
    /**
     * An attribute value of String type. Example: {"string": "abc"} 
     */
    string?: StringAttribute;
    /**
     * An attribute value of Set type. Example: {"set": [ {} ] } 
     */
    set?: SetAttribute;
    /**
     * An attribute value of Record type. Example: {"record": { "keyName": {} } } 
     */
    record?: RecordAttribute;
  }
  export type Audience = string;
  export type Audiences = Audience[];
  export interface BatchIsAuthorizedInput {
    /**
     * Specifies the ID of the policy store. Policies in this policy store will be used to make the authorization decisions for the input.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies the list of resources and principals and their associated attributes that Verified Permissions can examine when evaluating the policies.   You can include only principal and resource entities in this parameter; you can't include actions. You must specify actions in the schema. 
     */
    entities?: EntitiesDefinition;
    /**
     * An array of up to 30 requests that you want Verified Permissions to evaluate.
     */
    requests: BatchIsAuthorizedInputList;
  }
  export interface BatchIsAuthorizedInputItem {
    /**
     * Specifies the principal for which the authorization decision is to be made.
     */
    principal?: EntityIdentifier;
    /**
     * Specifies the requested action to be authorized. For example, PhotoFlash::ReadPhoto.
     */
    action?: ActionIdentifier;
    /**
     * Specifies the resource that you want an authorization decision for. For example, PhotoFlash::Photo.
     */
    resource?: EntityIdentifier;
    /**
     * Specifies additional context that can be used to make more granular authorization decisions.
     */
    context?: ContextDefinition;
  }
  export type BatchIsAuthorizedInputList = BatchIsAuthorizedInputItem[];
  export interface BatchIsAuthorizedOutput {
    /**
     * A series of Allow or Deny decisions for each request, and the policies that produced them.
     */
    results: BatchIsAuthorizedOutputList;
  }
  export interface BatchIsAuthorizedOutputItem {
    /**
     * The authorization request that initiated the decision.
     */
    request: BatchIsAuthorizedInputItem;
    /**
     * An authorization decision that indicates if the authorization request should be allowed or denied.
     */
    decision: Decision;
    /**
     * The list of determining policies used to make the authorization decision. For example, if there are two matching policies, where one is a forbid and the other is a permit, then the forbid policy will be the determining policy. In the case of multiple matching permit policies then there would be multiple determining policies. In the case that no policies match, and hence the response is DENY, there would be no determining policies.
     */
    determiningPolicies: DeterminingPolicyList;
    /**
     * Errors that occurred while making an authorization decision. For example, a policy might reference an entity or attribute that doesn't exist in the request.
     */
    errors: EvaluationErrorList;
  }
  export type BatchIsAuthorizedOutputList = BatchIsAuthorizedOutputItem[];
  export interface BatchIsAuthorizedWithTokenInput {
    /**
     * Specifies the ID of the policy store. Policies in this policy store will be used to make an authorization decision for the input.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies an identity (ID) token for the principal that you want to authorize in each request. This token is provided to you by the identity provider (IdP) associated with the specified identity source. You must specify either an accessToken, an identityToken, or both. Must be an ID token. Verified Permissions returns an error if the token_use claim in the submitted token isn't id.
     */
    identityToken?: Token;
    /**
     * Specifies an access token for the principal that you want to authorize in each request. This token is provided to you by the identity provider (IdP) associated with the specified identity source. You must specify either an accessToken, an identityToken, or both. Must be an access token. Verified Permissions returns an error if the token_use claim in the submitted token isn't access.
     */
    accessToken?: Token;
    /**
     * Specifies the list of resources and their associated attributes that Verified Permissions can examine when evaluating the policies.   You can't include principals in this parameter, only resource and action entities. This parameter can't include any entities of a type that matches the user or group entity types that you defined in your identity source.   The BatchIsAuthorizedWithToken operation takes principal attributes from  only  the identityToken or accessToken passed to the operation.   For action entities, you can include only their Identifier and EntityType.    
     */
    entities?: EntitiesDefinition;
    /**
     * An array of up to 30 requests that you want Verified Permissions to evaluate.
     */
    requests: BatchIsAuthorizedWithTokenInputList;
  }
  export interface BatchIsAuthorizedWithTokenInputItem {
    /**
     * Specifies the requested action to be authorized. For example, PhotoFlash::ReadPhoto.
     */
    action?: ActionIdentifier;
    /**
     * Specifies the resource that you want an authorization decision for. For example, PhotoFlash::Photo.
     */
    resource?: EntityIdentifier;
    /**
     * Specifies additional context that can be used to make more granular authorization decisions.
     */
    context?: ContextDefinition;
  }
  export type BatchIsAuthorizedWithTokenInputList = BatchIsAuthorizedWithTokenInputItem[];
  export interface BatchIsAuthorizedWithTokenOutput {
    /**
     * The identifier of the principal in the ID or access token.
     */
    principal?: EntityIdentifier;
    /**
     * A series of Allow or Deny decisions for each request, and the policies that produced them.
     */
    results: BatchIsAuthorizedWithTokenOutputList;
  }
  export interface BatchIsAuthorizedWithTokenOutputItem {
    /**
     * The authorization request that initiated the decision.
     */
    request: BatchIsAuthorizedWithTokenInputItem;
    /**
     * An authorization decision that indicates if the authorization request should be allowed or denied.
     */
    decision: Decision;
    /**
     * The list of determining policies used to make the authorization decision. For example, if there are two matching policies, where one is a forbid and the other is a permit, then the forbid policy will be the determining policy. In the case of multiple matching permit policies then there would be multiple determining policies. In the case that no policies match, and hence the response is DENY, there would be no determining policies.
     */
    determiningPolicies: DeterminingPolicyList;
    /**
     * Errors that occurred while making an authorization decision. For example, a policy might reference an entity or attribute that doesn't exist in the request.
     */
    errors: EvaluationErrorList;
  }
  export type BatchIsAuthorizedWithTokenOutputList = BatchIsAuthorizedWithTokenOutputItem[];
  export type Boolean = boolean;
  export type BooleanAttribute = boolean;
  export type Claim = string;
  export type ClientId = string;
  export type ClientIds = ClientId[];
  export interface CognitoGroupConfiguration {
    /**
     * The name of the schema entity type that's mapped to the user pool group. Defaults to AWS::CognitoGroup.
     */
    groupEntityType: GroupEntityType;
  }
  export interface CognitoGroupConfigurationDetail {
    /**
     * The name of the schema entity type that's mapped to the user pool group. Defaults to AWS::CognitoGroup.
     */
    groupEntityType?: GroupEntityType;
  }
  export interface CognitoGroupConfigurationItem {
    /**
     * The name of the schema entity type that's mapped to the user pool group. Defaults to AWS::CognitoGroup.
     */
    groupEntityType?: GroupEntityType;
  }
  export interface CognitoUserPoolConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Cognito user pool that contains the identities to be authorized. Example: "UserPoolArn": "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5" 
     */
    userPoolArn: UserPoolArn;
    /**
     * The unique application client IDs that are associated with the specified Amazon Cognito user pool. Example: "ClientIds": ["&amp;ExampleCogClientId;"] 
     */
    clientIds?: ClientIds;
    /**
     * The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source.
     */
    groupConfiguration?: CognitoGroupConfiguration;
  }
  export interface CognitoUserPoolConfigurationDetail {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Cognito user pool that contains the identities to be authorized. Example: "userPoolArn": "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5" 
     */
    userPoolArn: UserPoolArn;
    /**
     * The unique application client IDs that are associated with the specified Amazon Cognito user pool. Example: "clientIds": ["&amp;ExampleCogClientId;"] 
     */
    clientIds: ClientIds;
    /**
     * The OpenID Connect (OIDC) issuer ID of the Amazon Cognito user pool that contains the identities to be authorized. Example: "issuer": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1a2b3c4d5" 
     */
    issuer: Issuer;
    /**
     * The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source.
     */
    groupConfiguration?: CognitoGroupConfigurationDetail;
  }
  export interface CognitoUserPoolConfigurationItem {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Cognito user pool that contains the identities to be authorized. Example: "userPoolArn": "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5" 
     */
    userPoolArn: UserPoolArn;
    /**
     * The unique application client IDs that are associated with the specified Amazon Cognito user pool. Example: "clientIds": ["&amp;ExampleCogClientId;"] 
     */
    clientIds: ClientIds;
    /**
     * The OpenID Connect (OIDC) issuer ID of the Amazon Cognito user pool that contains the identities to be authorized. Example: "issuer": "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1a2b3c4d5" 
     */
    issuer: Issuer;
    /**
     * The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source.
     */
    groupConfiguration?: CognitoGroupConfigurationItem;
  }
  export interface Configuration {
    /**
     * Contains configuration details of a Amazon Cognito user pool that Verified Permissions can use as a source of authenticated identities as entities. It specifies the Amazon Resource Name (ARN) of a Amazon Cognito user pool and one or more application client IDs. Example: "configuration":{"cognitoUserPoolConfiguration":{"userPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","clientIds": ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": {"groupEntityType": "MyCorp::Group"}}} 
     */
    cognitoUserPoolConfiguration?: CognitoUserPoolConfiguration;
    /**
     * Contains configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. It specifies the issuer URL, token type that you want to use, and policy store entity details. Example:"configuration":{"openIdConnectConfiguration":{"issuer":"https://auth.example.com","tokenSelection":{"accessTokenOnly":{"audiences":["https://myapp.example.com","https://myapp2.example.com"],"principalIdClaim":"sub"}},"entityIdPrefix":"MyOIDCProvider","groupConfiguration":{"groupClaim":"groups","groupEntityType":"MyCorp::UserGroup"}}} 
     */
    openIdConnectConfiguration?: OpenIdConnectConfiguration;
  }
  export interface ConfigurationDetail {
    /**
     * Contains configuration details of a Amazon Cognito user pool that Verified Permissions can use as a source of authenticated identities as entities. It specifies the Amazon Resource Name (ARN) of a Amazon Cognito user pool, the policy store entity that you want to assign to user groups, and one or more application client IDs. Example: "configuration":{"cognitoUserPoolConfiguration":{"userPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","clientIds": ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": {"groupEntityType": "MyCorp::Group"}}} 
     */
    cognitoUserPoolConfiguration?: CognitoUserPoolConfigurationDetail;
    /**
     * Contains configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. It specifies the issuer URL, token type that you want to use, and policy store entity details. Example:"configuration":{"openIdConnectConfiguration":{"issuer":"https://auth.example.com","tokenSelection":{"accessTokenOnly":{"audiences":["https://myapp.example.com","https://myapp2.example.com"],"principalIdClaim":"sub"}},"entityIdPrefix":"MyOIDCProvider","groupConfiguration":{"groupClaim":"groups","groupEntityType":"MyCorp::UserGroup"}}} 
     */
    openIdConnectConfiguration?: OpenIdConnectConfigurationDetail;
  }
  export interface ConfigurationItem {
    /**
     * Contains configuration details of a Amazon Cognito user pool that Verified Permissions can use as a source of authenticated identities as entities. It specifies the Amazon Resource Name (ARN) of a Amazon Cognito user pool, the policy store entity that you want to assign to user groups, and one or more application client IDs. Example: "configuration":{"cognitoUserPoolConfiguration":{"userPoolArn":"arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5","clientIds": ["a1b2c3d4e5f6g7h8i9j0kalbmc"],"groupConfiguration": {"groupEntityType": "MyCorp::Group"}}} 
     */
    cognitoUserPoolConfiguration?: CognitoUserPoolConfigurationItem;
    /**
     * Contains configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. It specifies the issuer URL, token type that you want to use, and policy store entity details. Example:"configuration":{"openIdConnectConfiguration":{"issuer":"https://auth.example.com","tokenSelection":{"accessTokenOnly":{"audiences":["https://myapp.example.com","https://myapp2.example.com"],"principalIdClaim":"sub"}},"entityIdPrefix":"MyOIDCProvider","groupConfiguration":{"groupClaim":"groups","groupEntityType":"MyCorp::UserGroup"}}} 
     */
    openIdConnectConfiguration?: OpenIdConnectConfigurationItem;
  }
  export interface ContextDefinition {
    /**
     * An list of attributes that are needed to successfully evaluate an authorization request. Each attribute in this array must include a map of a data type and its value. Example: "contextMap":{"&lt;KeyName1&gt;":{"boolean":true},"&lt;KeyName2&gt;":{"long":1234}} 
     */
    contextMap?: ContextMap;
  }
  export type ContextMap = {[key: string]: AttributeValue};
  export interface CreateIdentitySourceInput {
    /**
     * Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an ConflictException error. Verified Permissions recognizes a ClientToken for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of ClientToken.
     */
    clientToken?: IdempotencyToken;
    /**
     * Specifies the ID of the policy store in which you want to store this identity source. Only policies and requests made using this policy store can reference identities from the identity provider configured in the new identity source.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies the details required to communicate with the identity provider (IdP) associated with this identity source.
     */
    configuration: Configuration;
    /**
     * Specifies the namespace and data type of the principals generated for identities authenticated by the new identity source.
     */
    principalEntityType?: PrincipalEntityType;
  }
  export interface CreateIdentitySourceOutput {
    /**
     * The date and time the identity source was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * The unique ID of the new identity source.
     */
    identitySourceId: IdentitySourceId;
    /**
     * The date and time the identity source was most recently updated.
     */
    lastUpdatedDate: TimestampFormat;
    /**
     * The ID of the policy store that contains the identity source.
     */
    policyStoreId: PolicyStoreId;
  }
  export interface CreatePolicyInput {
    /**
     * Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an ConflictException error. Verified Permissions recognizes a ClientToken for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of ClientToken.
     */
    clientToken?: IdempotencyToken;
    /**
     * Specifies the PolicyStoreId of the policy store you want to store the policy in.
     */
    policyStoreId: PolicyStoreId;
    /**
     * A structure that specifies the policy type and content to use for the new policy. You must include either a static or a templateLinked element. The policy content must be written in the Cedar policy language.
     */
    definition: PolicyDefinition;
  }
  export interface CreatePolicyOutput {
    /**
     * The ID of the policy store that contains the new policy.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The unique ID of the new policy.
     */
    policyId: PolicyId;
    /**
     * The policy type of the new policy.
     */
    policyType: PolicyType;
    /**
     * The principal specified in the new policy's scope. This response element isn't present when principal isn't specified in the policy content.
     */
    principal?: EntityIdentifier;
    /**
     * The resource specified in the new policy's scope. This response element isn't present when the resource isn't specified in the policy content.
     */
    resource?: EntityIdentifier;
    /**
     * The action that a policy permits or forbids. For example, {"actions": [{"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"}, {"entityID": "SharePhoto", "entityType": "PhotoFlash::Action"}]}.
     */
    actions?: ActionIdentifierList;
    /**
     * The date and time the policy was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time the policy was last updated.
     */
    lastUpdatedDate: TimestampFormat;
    /**
     * The effect of the decision that a policy returns to an authorization request. For example, "effect": "Permit".
     */
    effect?: PolicyEffect;
  }
  export interface CreatePolicyStoreInput {
    /**
     * Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an ConflictException error. Verified Permissions recognizes a ClientToken for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of ClientToken.
     */
    clientToken?: IdempotencyToken;
    /**
     * Specifies the validation setting for this policy store. Currently, the only valid and required value is Mode.  We recommend that you turn on STRICT mode only after you define a schema. If a schema doesn't exist, then STRICT mode causes any policy to fail validation, and Verified Permissions rejects the policy. You can turn off validation by using the UpdatePolicyStore. Then, when you have a schema defined, use UpdatePolicyStore again to turn validation back on. 
     */
    validationSettings: ValidationSettings;
    /**
     * Descriptive text that you can provide to help with identification of the current policy store.
     */
    description?: PolicyStoreDescription;
  }
  export interface CreatePolicyStoreOutput {
    /**
     * The unique ID of the new policy store.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The Amazon Resource Name (ARN) of the new policy store.
     */
    arn: ResourceArn;
    /**
     * The date and time the policy store was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time the policy store was last updated.
     */
    lastUpdatedDate: TimestampFormat;
  }
  export interface CreatePolicyTemplateInput {
    /**
     * Specifies a unique, case-sensitive ID that you provide to ensure the idempotency of the request. This lets you safely retry the request without accidentally performing the same operation a second time. Passing the same value to a later call to an operation requires that you also pass the same value for all other parameters. We recommend that you use a UUID type of value.. If you don't provide this value, then Amazon Web Services generates a random one for you. If you retry the operation with the same ClientToken, but with different parameters, the retry fails with an ConflictException error. Verified Permissions recognizes a ClientToken for eight hours. After eight hours, the next request with the same parameters performs the operation again regardless of the value of ClientToken.
     */
    clientToken?: IdempotencyToken;
    /**
     * The ID of the policy store in which to create the policy template.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies a description for the policy template.
     */
    description?: PolicyTemplateDescription;
    /**
     * Specifies the content that you want to use for the new policy template, written in the Cedar policy language.
     */
    statement: PolicyStatement;
  }
  export interface CreatePolicyTemplateOutput {
    /**
     * The ID of the policy store that contains the policy template.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The unique ID of the new policy template.
     */
    policyTemplateId: PolicyTemplateId;
    /**
     * The date and time the policy template was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time the policy template was most recently updated.
     */
    lastUpdatedDate: TimestampFormat;
  }
  export type Decision = "ALLOW"|"DENY"|string;
  export interface DeleteIdentitySourceInput {
    /**
     * Specifies the ID of the policy store that contains the identity source that you want to delete.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies the ID of the identity source that you want to delete.
     */
    identitySourceId: IdentitySourceId;
  }
  export interface DeleteIdentitySourceOutput {
  }
  export interface DeletePolicyInput {
    /**
     * Specifies the ID of the policy store that contains the policy that you want to delete.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies the ID of the policy that you want to delete.
     */
    policyId: PolicyId;
  }
  export interface DeletePolicyOutput {
  }
  export interface DeletePolicyStoreInput {
    /**
     * Specifies the ID of the policy store that you want to delete.
     */
    policyStoreId: PolicyStoreId;
  }
  export interface DeletePolicyStoreOutput {
  }
  export interface DeletePolicyTemplateInput {
    /**
     * Specifies the ID of the policy store that contains the policy template that you want to delete.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies the ID of the policy template that you want to delete.
     */
    policyTemplateId: PolicyTemplateId;
  }
  export interface DeletePolicyTemplateOutput {
  }
  export interface DeterminingPolicyItem {
    /**
     * The Id of a policy that determined to an authorization decision. Example: "policyId":"SPEXAMPLEabcdefg111111" 
     */
    policyId: PolicyId;
  }
  export type DeterminingPolicyList = DeterminingPolicyItem[];
  export type DiscoveryUrl = string;
  export interface EntitiesDefinition {
    /**
     * An array of entities that are needed to successfully evaluate an authorization request. Each entity in this array must include an identifier for the entity, the attributes of the entity, and a list of any parent entities.
     */
    entityList?: EntityList;
  }
  export type EntityAttributes = {[key: string]: AttributeValue};
  export type EntityId = string;
  export type EntityIdPrefix = string;
  export interface EntityIdentifier {
    /**
     * The type of an entity. Example: "entityType":"typeName" 
     */
    entityType: EntityType;
    /**
     * The identifier of an entity.  "entityId":"identifier" 
     */
    entityId: EntityId;
  }
  export interface EntityItem {
    /**
     * The identifier of the entity.
     */
    identifier: EntityIdentifier;
    /**
     * A list of attributes for the entity.
     */
    attributes?: EntityAttributes;
    /**
     * The parent entities in the hierarchy that contains the entity. A principal or resource entity can be defined with at most 99 transitive parents per authorization request.  A transitive parent is an entity in the hierarchy of entities including all direct parents, and parents of parents. For example, a user can be a member of 91 groups if one of those groups is a member of eight groups, for a total of 100: one entity, 91 entity parents, and eight parents of parents. 
     */
    parents?: ParentList;
  }
  export type EntityList = EntityItem[];
  export interface EntityReference {
    /**
     * Used to indicate that a principal or resource is not specified. This can be used to search for policies that are not associated with a specific principal or resource.
     */
    unspecified?: Boolean;
    /**
     * The identifier of the entity. It can consist of either an EntityType and EntityId, a principal, or a resource.
     */
    identifier?: EntityIdentifier;
  }
  export type EntityType = string;
  export interface EvaluationErrorItem {
    /**
     * The error description.
     */
    errorDescription: String;
  }
  export type EvaluationErrorList = EvaluationErrorItem[];
  export interface GetIdentitySourceInput {
    /**
     * Specifies the ID of the policy store that contains the identity source you want information about.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies the ID of the identity source you want information about.
     */
    identitySourceId: IdentitySourceId;
  }
  export interface GetIdentitySourceOutput {
    /**
     * The date and time that the identity source was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * A structure that describes the configuration of the identity source.
     */
    details?: IdentitySourceDetails;
    /**
     * The ID of the identity source.
     */
    identitySourceId: IdentitySourceId;
    /**
     * The date and time that the identity source was most recently updated.
     */
    lastUpdatedDate: TimestampFormat;
    /**
     * The ID of the policy store that contains the identity source.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The data type of principals generated for identities authenticated by this identity source.
     */
    principalEntityType: PrincipalEntityType;
    /**
     * Contains configuration information about an identity source.
     */
    configuration?: ConfigurationDetail;
  }
  export interface GetPolicyInput {
    /**
     * Specifies the ID of the policy store that contains the policy that you want information about.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies the ID of the policy you want information about.
     */
    policyId: PolicyId;
  }
  export interface GetPolicyOutput {
    /**
     * The ID of the policy store that contains the policy that you want information about.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The unique ID of the policy that you want information about.
     */
    policyId: PolicyId;
    /**
     * The type of the policy.
     */
    policyType: PolicyType;
    /**
     * The principal specified in the policy's scope. This element isn't included in the response when Principal isn't present in the policy content.
     */
    principal?: EntityIdentifier;
    /**
     * The resource specified in the policy's scope. This element isn't included in the response when Resource isn't present in the policy content.
     */
    resource?: EntityIdentifier;
    /**
     * The action that a policy permits or forbids. For example, {"actions": [{"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"}, {"entityID": "SharePhoto", "entityType": "PhotoFlash::Action"}]}.
     */
    actions?: ActionIdentifierList;
    /**
     * The definition of the requested policy.
     */
    definition: PolicyDefinitionDetail;
    /**
     * The date and time that the policy was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time that the policy was last updated.
     */
    lastUpdatedDate: TimestampFormat;
    /**
     * The effect of the decision that a policy returns to an authorization request. For example, "effect": "Permit".
     */
    effect?: PolicyEffect;
  }
  export interface GetPolicyStoreInput {
    /**
     * Specifies the ID of the policy store that you want information about.
     */
    policyStoreId: PolicyStoreId;
  }
  export interface GetPolicyStoreOutput {
    /**
     * The ID of the policy store;
     */
    policyStoreId: PolicyStoreId;
    /**
     * The Amazon Resource Name (ARN) of the policy store.
     */
    arn: ResourceArn;
    /**
     * The current validation settings for the policy store.
     */
    validationSettings: ValidationSettings;
    /**
     * The date and time that the policy store was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time that the policy store was last updated.
     */
    lastUpdatedDate: TimestampFormat;
    /**
     * Descriptive text that you can provide to help with identification of the current policy store.
     */
    description?: PolicyStoreDescription;
  }
  export interface GetPolicyTemplateInput {
    /**
     * Specifies the ID of the policy store that contains the policy template that you want information about.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies the ID of the policy template that you want information about.
     */
    policyTemplateId: PolicyTemplateId;
  }
  export interface GetPolicyTemplateOutput {
    /**
     * The ID of the policy store that contains the policy template.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The ID of the policy template.
     */
    policyTemplateId: PolicyTemplateId;
    /**
     * The description of the policy template.
     */
    description?: PolicyTemplateDescription;
    /**
     * The content of the body of the policy template written in the Cedar policy language.
     */
    statement: PolicyStatement;
    /**
     * The date and time that the policy template was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time that the policy template was most recently updated.
     */
    lastUpdatedDate: TimestampFormat;
  }
  export interface GetSchemaInput {
    /**
     * Specifies the ID of the policy store that contains the schema.
     */
    policyStoreId: PolicyStoreId;
  }
  export interface GetSchemaOutput {
    /**
     * The ID of the policy store that contains the schema.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The body of the schema, written in Cedar schema JSON.
     */
    schema: SchemaJson;
    /**
     * The date and time that the schema was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time that the schema was most recently updated.
     */
    lastUpdatedDate: TimestampFormat;
    /**
     * The namespaces of the entities referenced by this schema.
     */
    namespaces?: NamespaceList;
  }
  export type GroupEntityType = string;
  export type IdempotencyToken = string;
  export interface IdentitySourceDetails {
    /**
     * The application client IDs associated with the specified Amazon Cognito user pool that are enabled for this identity source.
     */
    clientIds?: ClientIds;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Cognito user pool whose identities are accessible to this Verified Permissions policy store.
     */
    userPoolArn?: UserPoolArn;
    /**
     * The well-known URL that points to this user pool's OIDC discovery endpoint. This is a URL string in the following format. This URL replaces the placeholders for both the Amazon Web Services Region and the user pool identifier with those appropriate for this user pool.  https://cognito-idp.&lt;region&gt;.amazonaws.com/&lt;user-pool-id&gt;/.well-known/openid-configuration 
     */
    discoveryUrl?: DiscoveryUrl;
    /**
     * A string that identifies the type of OIDC service represented by this identity source.  At this time, the only valid value is cognito.
     */
    openIdIssuer?: OpenIdIssuer;
  }
  export interface IdentitySourceFilter {
    /**
     * The Cedar entity type of the principals returned by the identity provider (IdP) associated with this identity source.
     */
    principalEntityType?: PrincipalEntityType;
  }
  export type IdentitySourceFilters = IdentitySourceFilter[];
  export type IdentitySourceId = string;
  export interface IdentitySourceItem {
    /**
     * The date and time the identity source was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * A structure that contains the details of the associated identity provider (IdP).
     */
    details?: IdentitySourceItemDetails;
    /**
     * The unique identifier of the identity source.
     */
    identitySourceId: IdentitySourceId;
    /**
     * The date and time the identity source was most recently updated.
     */
    lastUpdatedDate: TimestampFormat;
    /**
     * The identifier of the policy store that contains the identity source.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The Cedar entity type of the principals returned from the IdP associated with this identity source.
     */
    principalEntityType: PrincipalEntityType;
    /**
     * Contains configuration information about an identity source.
     */
    configuration?: ConfigurationItem;
  }
  export interface IdentitySourceItemDetails {
    /**
     * The application client IDs associated with the specified Amazon Cognito user pool that are enabled for this identity source.
     */
    clientIds?: ClientIds;
    /**
     * The Amazon Cognito user pool whose identities are accessible to this Verified Permissions policy store.
     */
    userPoolArn?: UserPoolArn;
    /**
     * The well-known URL that points to this user pool's OIDC discovery endpoint. This is a URL string in the following format. This URL replaces the placeholders for both the Amazon Web Services Region and the user pool identifier with those appropriate for this user pool.  https://cognito-idp.&lt;region&gt;.amazonaws.com/&lt;user-pool-id&gt;/.well-known/openid-configuration 
     */
    discoveryUrl?: DiscoveryUrl;
    /**
     * A string that identifies the type of OIDC service represented by this identity source.  At this time, the only valid value is cognito.
     */
    openIdIssuer?: OpenIdIssuer;
  }
  export type IdentitySources = IdentitySourceItem[];
  export interface IsAuthorizedInput {
    /**
     * Specifies the ID of the policy store. Policies in this policy store will be used to make an authorization decision for the input.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies the principal for which the authorization decision is to be made.
     */
    principal?: EntityIdentifier;
    /**
     * Specifies the requested action to be authorized. For example, is the principal authorized to perform this action on the resource?
     */
    action?: ActionIdentifier;
    /**
     * Specifies the resource for which the authorization decision is to be made.
     */
    resource?: EntityIdentifier;
    /**
     * Specifies additional context that can be used to make more granular authorization decisions.
     */
    context?: ContextDefinition;
    /**
     * Specifies the list of resources and principals and their associated attributes that Verified Permissions can examine when evaluating the policies.   You can include only principal and resource entities in this parameter; you can't include actions. You must specify actions in the schema. 
     */
    entities?: EntitiesDefinition;
  }
  export interface IsAuthorizedOutput {
    /**
     * An authorization decision that indicates if the authorization request should be allowed or denied.
     */
    decision: Decision;
    /**
     * The list of determining policies used to make the authorization decision. For example, if there are two matching policies, where one is a forbid and the other is a permit, then the forbid policy will be the determining policy. In the case of multiple matching permit policies then there would be multiple determining policies. In the case that no policies match, and hence the response is DENY, there would be no determining policies.
     */
    determiningPolicies: DeterminingPolicyList;
    /**
     * Errors that occurred while making an authorization decision, for example, a policy references an Entity or entity Attribute that does not exist in the slice.
     */
    errors: EvaluationErrorList;
  }
  export interface IsAuthorizedWithTokenInput {
    /**
     * Specifies the ID of the policy store. Policies in this policy store will be used to make an authorization decision for the input.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies an identity token for the principal to be authorized. This token is provided to you by the identity provider (IdP) associated with the specified identity source. You must specify either an accessToken, an identityToken, or both. Must be an ID token. Verified Permissions returns an error if the token_use claim in the submitted token isn't id.
     */
    identityToken?: Token;
    /**
     * Specifies an access token for the principal to be authorized. This token is provided to you by the identity provider (IdP) associated with the specified identity source. You must specify either an accessToken, an identityToken, or both. Must be an access token. Verified Permissions returns an error if the token_use claim in the submitted token isn't access.
     */
    accessToken?: Token;
    /**
     * Specifies the requested action to be authorized. Is the specified principal authorized to perform this action on the specified resource.
     */
    action?: ActionIdentifier;
    /**
     * Specifies the resource for which the authorization decision is made. For example, is the principal allowed to perform the action on the resource?
     */
    resource?: EntityIdentifier;
    /**
     * Specifies additional context that can be used to make more granular authorization decisions.
     */
    context?: ContextDefinition;
    /**
     * Specifies the list of resources and their associated attributes that Verified Permissions can examine when evaluating the policies.   You can't include principals in this parameter, only resource and action entities. This parameter can't include any entities of a type that matches the user or group entity types that you defined in your identity source.   The IsAuthorizedWithToken operation takes principal attributes from  only  the identityToken or accessToken passed to the operation.   For action entities, you can include only their Identifier and EntityType.    
     */
    entities?: EntitiesDefinition;
  }
  export interface IsAuthorizedWithTokenOutput {
    /**
     * An authorization decision that indicates if the authorization request should be allowed or denied.
     */
    decision: Decision;
    /**
     * The list of determining policies used to make the authorization decision. For example, if there are multiple matching policies, where at least one is a forbid policy, then because forbid always overrides permit the forbid policies are the determining policies. If all matching policies are permit policies, then those policies are the determining policies. When no policies match and the response is the default DENY, there are no determining policies.
     */
    determiningPolicies: DeterminingPolicyList;
    /**
     * Errors that occurred while making an authorization decision. For example, a policy references an entity or entity attribute that does not exist in the slice.
     */
    errors: EvaluationErrorList;
    /**
     * The identifier of the principal in the ID or access token.
     */
    principal?: EntityIdentifier;
  }
  export type Issuer = string;
  export interface ListIdentitySourcesInput {
    /**
     * Specifies the ID of the policy store that contains the identity sources that you want to list.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: NextToken;
    /**
     * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results. If you do not specify this parameter, the operation defaults to 10 identity sources per response. You can specify a maximum of 50 identity sources per response.
     */
    maxResults?: ListIdentitySourcesMaxResults;
    /**
     * Specifies characteristics of an identity source that you can use to limit the output to matching identity sources.
     */
    filters?: IdentitySourceFilters;
  }
  export type ListIdentitySourcesMaxResults = number;
  export interface ListIdentitySourcesOutput {
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: NextToken;
    /**
     * The list of identity sources stored in the specified policy store.
     */
    identitySources: IdentitySources;
  }
  export interface ListPoliciesInput {
    /**
     * Specifies the ID of the policy store you want to list policies from.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: NextToken;
    /**
     * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results. If you do not specify this parameter, the operation defaults to 10 policies per response. You can specify a maximum of 50 policies per response.
     */
    maxResults?: MaxResults;
    /**
     * Specifies a filter that limits the response to only policies that match the specified criteria. For example, you list only the policies that reference a specified principal.
     */
    filter?: PolicyFilter;
  }
  export interface ListPoliciesOutput {
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: NextToken;
    /**
     * Lists all policies that are available in the specified policy store.
     */
    policies: PolicyList;
  }
  export interface ListPolicyStoresInput {
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: NextToken;
    /**
     * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results. If you do not specify this parameter, the operation defaults to 10 policy stores per response. You can specify a maximum of 50 policy stores per response.
     */
    maxResults?: MaxResults;
  }
  export interface ListPolicyStoresOutput {
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: NextToken;
    /**
     * The list of policy stores in the account.
     */
    policyStores: PolicyStoreList;
  }
  export interface ListPolicyTemplatesInput {
    /**
     * Specifies the ID of the policy store that contains the policy templates you want to list.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies that you want to receive the next page of results. Valid only if you received a NextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's NextToken response to request the next page of results.
     */
    nextToken?: NextToken;
    /**
     * Specifies the total number of results that you want included in each response. If additional items exist beyond the number you specify, the NextToken response element is returned with a value (not null). Include the specified value as the NextToken request parameter in the next call to the operation to get the next set of results. Note that the service might return fewer results than the maximum even when there are more results available. You should check NextToken after every operation to ensure that you receive all of the results. If you do not specify this parameter, the operation defaults to 10 policy templates per response. You can specify a maximum of 50 policy templates per response.
     */
    maxResults?: MaxResults;
  }
  export interface ListPolicyTemplatesOutput {
    /**
     * If present, this value indicates that more output is available than is included in the current response. Use this value in the NextToken request parameter in a subsequent call to the operation to get the next part of the output. You should repeat this until the NextToken response element comes back as null. This indicates that this is the last page of results.
     */
    nextToken?: NextToken;
    /**
     * The list of the policy templates in the specified policy store.
     */
    policyTemplates: PolicyTemplatesList;
  }
  export type LongAttribute = number;
  export type MaxResults = number;
  export type Namespace = string;
  export type NamespaceList = Namespace[];
  export type NextToken = string;
  export interface OpenIdConnectAccessTokenConfiguration {
    /**
     * The claim that determines the principal in OIDC access tokens. For example, sub.
     */
    principalIdClaim?: Claim;
    /**
     * The access token aud claim values that you want to accept in your policy store. For example, https://myapp.example.com, https://myapp2.example.com.
     */
    audiences?: Audiences;
  }
  export interface OpenIdConnectAccessTokenConfigurationDetail {
    /**
     * The claim that determines the principal in OIDC access tokens. For example, sub.
     */
    principalIdClaim?: Claim;
    /**
     * The access token aud claim values that you want to accept in your policy store. For example, https://myapp.example.com, https://myapp2.example.com.
     */
    audiences?: Audiences;
  }
  export interface OpenIdConnectAccessTokenConfigurationItem {
    /**
     * The claim that determines the principal in OIDC access tokens. For example, sub.
     */
    principalIdClaim?: Claim;
    /**
     * The access token aud claim values that you want to accept in your policy store. For example, https://myapp.example.com, https://myapp2.example.com.
     */
    audiences?: Audiences;
  }
  export interface OpenIdConnectConfiguration {
    /**
     * The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery endpoint at the path .well-known/openid-configuration.
     */
    issuer: Issuer;
    /**
     * A descriptive string that you want to prefix to user entities from your OIDC identity provider. For example, if you set an entityIdPrefix of MyOIDCProvider, you can reference principals in your policies in the format MyCorp::User::MyOIDCProvider|Carlos.
     */
    entityIdPrefix?: EntityIdPrefix;
    /**
     * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to. For example, this object can map the contents of a groups claim to MyCorp::UserGroup.
     */
    groupConfiguration?: OpenIdConnectGroupConfiguration;
    /**
     * The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
     */
    tokenSelection: OpenIdConnectTokenSelection;
  }
  export interface OpenIdConnectConfigurationDetail {
    /**
     * The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery endpoint at the path .well-known/openid-configuration.
     */
    issuer: Issuer;
    /**
     * A descriptive string that you want to prefix to user entities from your OIDC identity provider. For example, if you set an entityIdPrefix of MyOIDCProvider, you can reference principals in your policies in the format MyCorp::User::MyOIDCProvider|Carlos.
     */
    entityIdPrefix?: EntityIdPrefix;
    /**
     * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to. For example, this object can map the contents of a groups claim to MyCorp::UserGroup.
     */
    groupConfiguration?: OpenIdConnectGroupConfigurationDetail;
    /**
     * The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
     */
    tokenSelection: OpenIdConnectTokenSelectionDetail;
  }
  export interface OpenIdConnectConfigurationItem {
    /**
     * The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery endpoint at the path .well-known/openid-configuration.
     */
    issuer: Issuer;
    /**
     * A descriptive string that you want to prefix to user entities from your OIDC identity provider. For example, if you set an entityIdPrefix of MyOIDCProvider, you can reference principals in your policies in the format MyCorp::User::MyOIDCProvider|Carlos.
     */
    entityIdPrefix?: EntityIdPrefix;
    /**
     * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to. For example, this object can map the contents of a groups claim to MyCorp::UserGroup.
     */
    groupConfiguration?: OpenIdConnectGroupConfigurationItem;
    /**
     * The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
     */
    tokenSelection: OpenIdConnectTokenSelectionItem;
  }
  export interface OpenIdConnectGroupConfiguration {
    /**
     * The token claim that you want Verified Permissions to interpret as group membership. For example, groups.
     */
    groupClaim: Claim;
    /**
     * The policy store entity type that you want to map your users' group claim to. For example, MyCorp::UserGroup. A group entity type is an entity that can have a user entity type as a member.
     */
    groupEntityType: GroupEntityType;
  }
  export interface OpenIdConnectGroupConfigurationDetail {
    /**
     * The token claim that you want Verified Permissions to interpret as group membership. For example, groups.
     */
    groupClaim: Claim;
    /**
     * The policy store entity type that you want to map your users' group claim to. For example, MyCorp::UserGroup. A group entity type is an entity that can have a user entity type as a member.
     */
    groupEntityType: GroupEntityType;
  }
  export interface OpenIdConnectGroupConfigurationItem {
    /**
     * The token claim that you want Verified Permissions to interpret as group membership. For example, groups.
     */
    groupClaim: Claim;
    /**
     * The policy store entity type that you want to map your users' group claim to. For example, MyCorp::UserGroup. A group entity type is an entity that can have a user entity type as a member.
     */
    groupEntityType: GroupEntityType;
  }
  export interface OpenIdConnectIdentityTokenConfiguration {
    /**
     * The claim that determines the principal in OIDC access tokens. For example, sub.
     */
    principalIdClaim?: Claim;
    /**
     * The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider. For example, 1example23456789, 2example10111213.
     */
    clientIds?: ClientIds;
  }
  export interface OpenIdConnectIdentityTokenConfigurationDetail {
    /**
     * The claim that determines the principal in OIDC access tokens. For example, sub.
     */
    principalIdClaim?: Claim;
    /**
     * The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider. For example, 1example23456789, 2example10111213.
     */
    clientIds?: ClientIds;
  }
  export interface OpenIdConnectIdentityTokenConfigurationItem {
    /**
     * The claim that determines the principal in OIDC access tokens. For example, sub.
     */
    principalIdClaim?: Claim;
    /**
     * The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider. For example, 1example23456789, 2example10111213.
     */
    clientIds?: ClientIds;
  }
  export interface OpenIdConnectTokenSelection {
    /**
     * The OIDC configuration for processing access tokens. Contains allowed audience claims, for example https://auth.example.com, and the claim that you want to map to the principal, for example sub.
     */
    accessTokenOnly?: OpenIdConnectAccessTokenConfiguration;
    /**
     * The OIDC configuration for processing identity (ID) tokens. Contains allowed client ID claims, for example 1example23456789, and the claim that you want to map to the principal, for example sub.
     */
    identityTokenOnly?: OpenIdConnectIdentityTokenConfiguration;
  }
  export interface OpenIdConnectTokenSelectionDetail {
    /**
     * The OIDC configuration for processing access tokens. Contains allowed audience claims, for example https://auth.example.com, and the claim that you want to map to the principal, for example sub.
     */
    accessTokenOnly?: OpenIdConnectAccessTokenConfigurationDetail;
    /**
     * The OIDC configuration for processing identity (ID) tokens. Contains allowed client ID claims, for example 1example23456789, and the claim that you want to map to the principal, for example sub.
     */
    identityTokenOnly?: OpenIdConnectIdentityTokenConfigurationDetail;
  }
  export interface OpenIdConnectTokenSelectionItem {
    /**
     * The OIDC configuration for processing access tokens. Contains allowed audience claims, for example https://auth.example.com, and the claim that you want to map to the principal, for example sub.
     */
    accessTokenOnly?: OpenIdConnectAccessTokenConfigurationItem;
    /**
     * The OIDC configuration for processing identity (ID) tokens. Contains allowed client ID claims, for example 1example23456789, and the claim that you want to map to the principal, for example sub.
     */
    identityTokenOnly?: OpenIdConnectIdentityTokenConfigurationItem;
  }
  export type OpenIdIssuer = "COGNITO"|string;
  export type ParentList = EntityIdentifier[];
  export interface PolicyDefinition {
    /**
     * A structure that describes a static policy. An static policy doesn't use a template or allow placeholders for entities.
     */
    static?: StaticPolicyDefinition;
    /**
     * A structure that describes a policy that was instantiated from a template. The template can specify placeholders for principal and resource. When you use CreatePolicy to create a policy from a template, you specify the exact principal and resource to use for the instantiated policy.
     */
    templateLinked?: TemplateLinkedPolicyDefinition;
  }
  export interface PolicyDefinitionDetail {
    /**
     * Information about a static policy that wasn't created with a policy template.
     */
    static?: StaticPolicyDefinitionDetail;
    /**
     * Information about a template-linked policy that was created by instantiating a policy template.
     */
    templateLinked?: TemplateLinkedPolicyDefinitionDetail;
  }
  export interface PolicyDefinitionItem {
    /**
     * Information about a static policy that wasn't created with a policy template.
     */
    static?: StaticPolicyDefinitionItem;
    /**
     * Information about a template-linked policy that was created by instantiating a policy template.
     */
    templateLinked?: TemplateLinkedPolicyDefinitionItem;
  }
  export type PolicyEffect = "Permit"|"Forbid"|string;
  export interface PolicyFilter {
    /**
     * Filters the output to only policies that reference the specified principal.
     */
    principal?: EntityReference;
    /**
     * Filters the output to only policies that reference the specified resource.
     */
    resource?: EntityReference;
    /**
     * Filters the output to only policies of the specified type.
     */
    policyType?: PolicyType;
    /**
     * Filters the output to only template-linked policies that were instantiated from the specified policy template.
     */
    policyTemplateId?: PolicyTemplateId;
  }
  export type PolicyId = string;
  export interface PolicyItem {
    /**
     * The identifier of the PolicyStore where the policy you want information about is stored.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The identifier of the policy you want information about.
     */
    policyId: PolicyId;
    /**
     * The type of the policy. This is one of the following values:    static     templateLinked   
     */
    policyType: PolicyType;
    /**
     * The principal associated with the policy.
     */
    principal?: EntityIdentifier;
    /**
     * The resource associated with the policy.
     */
    resource?: EntityIdentifier;
    /**
     * The action that a policy permits or forbids. For example, {"actions": [{"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"}, {"entityID": "SharePhoto", "entityType": "PhotoFlash::Action"}]}.
     */
    actions?: ActionIdentifierList;
    /**
     * The policy definition of an item in the list of policies returned.
     */
    definition: PolicyDefinitionItem;
    /**
     * The date and time the policy was created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time the policy was most recently updated.
     */
    lastUpdatedDate: TimestampFormat;
    /**
     * The effect of the decision that a policy returns to an authorization request. For example, "effect": "Permit".
     */
    effect?: PolicyEffect;
  }
  export type PolicyList = PolicyItem[];
  export type PolicyStatement = string;
  export type PolicyStoreDescription = string;
  export type PolicyStoreId = string;
  export interface PolicyStoreItem {
    /**
     * The unique identifier of the policy store.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The Amazon Resource Name (ARN) of the policy store.
     */
    arn: ResourceArn;
    /**
     * The date and time the policy was created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time the policy store was most recently updated.
     */
    lastUpdatedDate?: TimestampFormat;
    /**
     * Descriptive text that you can provide to help with identification of the current policy store.
     */
    description?: PolicyStoreDescription;
  }
  export type PolicyStoreList = PolicyStoreItem[];
  export type PolicyTemplateDescription = string;
  export type PolicyTemplateId = string;
  export interface PolicyTemplateItem {
    /**
     * The unique identifier of the policy store that contains the template.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The unique identifier of the policy template.
     */
    policyTemplateId: PolicyTemplateId;
    /**
     * The description attached to the policy template.
     */
    description?: PolicyTemplateDescription;
    /**
     * The date and time that the policy template was created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time that the policy template was most recently updated.
     */
    lastUpdatedDate: TimestampFormat;
  }
  export type PolicyTemplatesList = PolicyTemplateItem[];
  export type PolicyType = "STATIC"|"TEMPLATE_LINKED"|string;
  export type PrincipalEntityType = string;
  export interface PutSchemaInput {
    /**
     * Specifies the ID of the policy store in which to place the schema.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies the definition of the schema to be stored. The schema definition must be written in Cedar schema JSON.
     */
    definition: SchemaDefinition;
  }
  export interface PutSchemaOutput {
    /**
     * The unique ID of the policy store that contains the schema.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Identifies the namespaces of the entities referenced by this schema.
     */
    namespaces: NamespaceList;
    /**
     * The date and time that the schema was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time that the schema was last updated.
     */
    lastUpdatedDate: TimestampFormat;
  }
  export type RecordAttribute = {[key: string]: AttributeValue};
  export type ResourceArn = string;
  export interface SchemaDefinition {
    /**
     * A JSON string representation of the schema supported by applications that use this policy store. For more information, see Policy store schema in the Amazon Verified Permissions User Guide.
     */
    cedarJson?: SchemaJson;
  }
  export type SchemaJson = string;
  export type SetAttribute = AttributeValue[];
  export interface StaticPolicyDefinition {
    /**
     * The description of the static policy.
     */
    description?: StaticPolicyDescription;
    /**
     * The policy content of the static policy, written in the Cedar policy language.
     */
    statement: PolicyStatement;
  }
  export interface StaticPolicyDefinitionDetail {
    /**
     * A description of the static policy.
     */
    description?: StaticPolicyDescription;
    /**
     * The content of the static policy written in the Cedar policy language.
     */
    statement: PolicyStatement;
  }
  export interface StaticPolicyDefinitionItem {
    /**
     * A description of the static policy.
     */
    description?: StaticPolicyDescription;
  }
  export type StaticPolicyDescription = string;
  export type String = string;
  export type StringAttribute = string;
  export interface TemplateLinkedPolicyDefinition {
    /**
     * The unique identifier of the policy template used to create this policy.
     */
    policyTemplateId: PolicyTemplateId;
    /**
     * The principal associated with this template-linked policy. Verified Permissions substitutes this principal for the ?principal placeholder in the policy template when it evaluates an authorization request.
     */
    principal?: EntityIdentifier;
    /**
     * The resource associated with this template-linked policy. Verified Permissions substitutes this resource for the ?resource placeholder in the policy template when it evaluates an authorization request.
     */
    resource?: EntityIdentifier;
  }
  export interface TemplateLinkedPolicyDefinitionDetail {
    /**
     * The unique identifier of the policy template used to create this policy.
     */
    policyTemplateId: PolicyTemplateId;
    /**
     * The principal associated with this template-linked policy. Verified Permissions substitutes this principal for the ?principal placeholder in the policy template when it evaluates an authorization request.
     */
    principal?: EntityIdentifier;
    /**
     * The resource associated with this template-linked policy. Verified Permissions substitutes this resource for the ?resource placeholder in the policy template when it evaluates an authorization request.
     */
    resource?: EntityIdentifier;
  }
  export interface TemplateLinkedPolicyDefinitionItem {
    /**
     * The unique identifier of the policy template used to create this policy.
     */
    policyTemplateId: PolicyTemplateId;
    /**
     * The principal associated with this template-linked policy. Verified Permissions substitutes this principal for the ?principal placeholder in the policy template when it evaluates an authorization request.
     */
    principal?: EntityIdentifier;
    /**
     * The resource associated with this template-linked policy. Verified Permissions substitutes this resource for the ?resource placeholder in the policy template when it evaluates an authorization request.
     */
    resource?: EntityIdentifier;
  }
  export type TimestampFormat = Date;
  export type Token = string;
  export interface UpdateCognitoGroupConfiguration {
    /**
     * The name of the schema entity type that's mapped to the user pool group. Defaults to AWS::CognitoGroup.
     */
    groupEntityType: GroupEntityType;
  }
  export interface UpdateCognitoUserPoolConfiguration {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Cognito user pool associated with this identity source.
     */
    userPoolArn: UserPoolArn;
    /**
     * The client ID of an app client that is configured for the specified Amazon Cognito user pool.
     */
    clientIds?: ClientIds;
    /**
     * The configuration of the user groups from an Amazon Cognito user pool identity source.
     */
    groupConfiguration?: UpdateCognitoGroupConfiguration;
  }
  export interface UpdateConfiguration {
    /**
     * Contains configuration details of a Amazon Cognito user pool.
     */
    cognitoUserPoolConfiguration?: UpdateCognitoUserPoolConfiguration;
    /**
     * Contains configuration details of an OpenID Connect (OIDC) identity provider, or identity source, that Verified Permissions can use to generate entities from authenticated identities. It specifies the issuer URL, token type that you want to use, and policy store entity details.
     */
    openIdConnectConfiguration?: UpdateOpenIdConnectConfiguration;
  }
  export interface UpdateIdentitySourceInput {
    /**
     * Specifies the ID of the policy store that contains the identity source that you want to update.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies the ID of the identity source that you want to update.
     */
    identitySourceId: IdentitySourceId;
    /**
     * Specifies the details required to communicate with the identity provider (IdP) associated with this identity source.  At this time, the only valid member of this structure is a Amazon Cognito user pool configuration. You must specify a userPoolArn, and optionally, a ClientId. 
     */
    updateConfiguration: UpdateConfiguration;
    /**
     * Specifies the data type of principals generated for identities authenticated by the identity source.
     */
    principalEntityType?: PrincipalEntityType;
  }
  export interface UpdateIdentitySourceOutput {
    /**
     * The date and time that the updated identity source was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * The ID of the updated identity source.
     */
    identitySourceId: IdentitySourceId;
    /**
     * The date and time that the identity source was most recently updated.
     */
    lastUpdatedDate: TimestampFormat;
    /**
     * The ID of the policy store that contains the updated identity source.
     */
    policyStoreId: PolicyStoreId;
  }
  export interface UpdateOpenIdConnectAccessTokenConfiguration {
    /**
     * The claim that determines the principal in OIDC access tokens. For example, sub.
     */
    principalIdClaim?: Claim;
    /**
     * The access token aud claim values that you want to accept in your policy store. For example, https://myapp.example.com, https://myapp2.example.com.
     */
    audiences?: Audiences;
  }
  export interface UpdateOpenIdConnectConfiguration {
    /**
     * The issuer URL of an OIDC identity provider. This URL must have an OIDC discovery endpoint at the path .well-known/openid-configuration.
     */
    issuer: Issuer;
    /**
     * A descriptive string that you want to prefix to user entities from your OIDC identity provider. For example, if you set an entityIdPrefix of MyOIDCProvider, you can reference principals in your policies in the format MyCorp::User::MyOIDCProvider|Carlos.
     */
    entityIdPrefix?: EntityIdPrefix;
    /**
     * The claim in OIDC identity provider tokens that indicates a user's group membership, and the entity type that you want to map it to. For example, this object can map the contents of a groups claim to MyCorp::UserGroup.
     */
    groupConfiguration?: UpdateOpenIdConnectGroupConfiguration;
    /**
     * The token type that you want to process from your OIDC identity provider. Your policy store can process either identity (ID) or access tokens from a given OIDC identity source.
     */
    tokenSelection: UpdateOpenIdConnectTokenSelection;
  }
  export interface UpdateOpenIdConnectGroupConfiguration {
    /**
     * The token claim that you want Verified Permissions to interpret as group membership. For example, groups.
     */
    groupClaim: Claim;
    /**
     * The policy store entity type that you want to map your users' group claim to. For example, MyCorp::UserGroup. A group entity type is an entity that can have a user entity type as a member.
     */
    groupEntityType: GroupEntityType;
  }
  export interface UpdateOpenIdConnectIdentityTokenConfiguration {
    /**
     * The claim that determines the principal in OIDC access tokens. For example, sub.
     */
    principalIdClaim?: Claim;
    /**
     * The ID token audience, or client ID, claim values that you want to accept in your policy store from an OIDC identity provider. For example, 1example23456789, 2example10111213.
     */
    clientIds?: ClientIds;
  }
  export interface UpdateOpenIdConnectTokenSelection {
    /**
     * The OIDC configuration for processing access tokens. Contains allowed audience claims, for example https://auth.example.com, and the claim that you want to map to the principal, for example sub.
     */
    accessTokenOnly?: UpdateOpenIdConnectAccessTokenConfiguration;
    /**
     * The OIDC configuration for processing identity (ID) tokens. Contains allowed client ID claims, for example 1example23456789, and the claim that you want to map to the principal, for example sub.
     */
    identityTokenOnly?: UpdateOpenIdConnectIdentityTokenConfiguration;
  }
  export interface UpdatePolicyDefinition {
    /**
     * Contains details about the updates to be applied to a static policy.
     */
    static?: UpdateStaticPolicyDefinition;
  }
  export interface UpdatePolicyInput {
    /**
     * Specifies the ID of the policy store that contains the policy that you want to update.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies the ID of the policy that you want to update. To find this value, you can use ListPolicies.
     */
    policyId: PolicyId;
    /**
     * Specifies the updated policy content that you want to replace on the specified policy. The content must be valid Cedar policy language text. You can change only the following elements from the policy definition:   The action referenced by the policy.   Any conditional clauses, such as when or unless clauses.   You can't change the following elements:   Changing from static to templateLinked.   Changing the effect of the policy from permit or forbid.   The principal referenced by the policy.   The resource referenced by the policy.  
     */
    definition: UpdatePolicyDefinition;
  }
  export interface UpdatePolicyOutput {
    /**
     * The ID of the policy store that contains the policy that was updated.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The ID of the policy that was updated.
     */
    policyId: PolicyId;
    /**
     * The type of the policy that was updated.
     */
    policyType: PolicyType;
    /**
     * The principal specified in the policy's scope. This element isn't included in the response when Principal isn't present in the policy content.
     */
    principal?: EntityIdentifier;
    /**
     * The resource specified in the policy's scope. This element isn't included in the response when Resource isn't present in the policy content.
     */
    resource?: EntityIdentifier;
    /**
     * The action that a policy permits or forbids. For example, {"actions": [{"actionId": "ViewPhoto", "actionType": "PhotoFlash::Action"}, {"entityID": "SharePhoto", "entityType": "PhotoFlash::Action"}]}.
     */
    actions?: ActionIdentifierList;
    /**
     * The date and time that the policy was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time that the policy was most recently updated.
     */
    lastUpdatedDate: TimestampFormat;
    /**
     * The effect of the decision that a policy returns to an authorization request. For example, "effect": "Permit".
     */
    effect?: PolicyEffect;
  }
  export interface UpdatePolicyStoreInput {
    /**
     * Specifies the ID of the policy store that you want to update
     */
    policyStoreId: PolicyStoreId;
    /**
     * A structure that defines the validation settings that want to enable for the policy store.
     */
    validationSettings: ValidationSettings;
    /**
     * Descriptive text that you can provide to help with identification of the current policy store.
     */
    description?: PolicyStoreDescription;
  }
  export interface UpdatePolicyStoreOutput {
    /**
     * The ID of the updated policy store.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The Amazon Resource Name (ARN) of the updated policy store.
     */
    arn: ResourceArn;
    /**
     * The date and time that the policy store was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time that the policy store was most recently updated.
     */
    lastUpdatedDate: TimestampFormat;
  }
  export interface UpdatePolicyTemplateInput {
    /**
     * Specifies the ID of the policy store that contains the policy template that you want to update.
     */
    policyStoreId: PolicyStoreId;
    /**
     * Specifies the ID of the policy template that you want to update.
     */
    policyTemplateId: PolicyTemplateId;
    /**
     * Specifies a new description to apply to the policy template.
     */
    description?: PolicyTemplateDescription;
    /**
     * Specifies new statement content written in Cedar policy language to replace the current body of the policy template. You can change only the following elements of the policy body:   The action referenced by the policy template.   Any conditional clauses, such as when or unless clauses.   You can't change the following elements:   The effect (permit or forbid) of the policy template.   The principal referenced by the policy template.   The resource referenced by the policy template.  
     */
    statement: PolicyStatement;
  }
  export interface UpdatePolicyTemplateOutput {
    /**
     * The ID of the policy store that contains the updated policy template.
     */
    policyStoreId: PolicyStoreId;
    /**
     * The ID of the updated policy template.
     */
    policyTemplateId: PolicyTemplateId;
    /**
     * The date and time that the policy template was originally created.
     */
    createdDate: TimestampFormat;
    /**
     * The date and time that the policy template was most recently updated.
     */
    lastUpdatedDate: TimestampFormat;
  }
  export interface UpdateStaticPolicyDefinition {
    /**
     * Specifies the description to be added to or replaced on the static policy.
     */
    description?: StaticPolicyDescription;
    /**
     * Specifies the Cedar policy language text to be added to or replaced on the static policy.  You can change only the following elements from the original content:   The action referenced by the policy.   Any conditional clauses, such as when or unless clauses.   You can't change the following elements:   Changing from StaticPolicy to TemplateLinkedPolicy.   The effect (permit or forbid) of the policy.   The principal referenced by the policy.   The resource referenced by the policy.   
     */
    statement: PolicyStatement;
  }
  export type UserPoolArn = string;
  export type ValidationMode = "OFF"|"STRICT"|string;
  export interface ValidationSettings {
    /**
     * The validation mode currently configured for this policy store. The valid values are:    OFF – Neither Verified Permissions nor Cedar perform any validation on policies. No validation errors are reported by either service.    STRICT – Requires a schema to be present in the policy store. Cedar performs validation on all submitted new or updated static policies and policy templates. Any that fail validation are rejected and Cedar doesn't store them in the policy store.    If Mode=STRICT and the policy store doesn't contain a schema, Verified Permissions rejects all static policies and policy templates because there is no schema to validate against.  To submit a static policy or policy template without a schema, you must turn off validation. 
     */
    mode: ValidationMode;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2021-12-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the VerifiedPermissions client.
   */
  export import Types = VerifiedPermissions;
}
export = VerifiedPermissions;
