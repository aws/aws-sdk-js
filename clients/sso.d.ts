import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class SSO extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SSO.Types.ClientConfiguration)
  config: Config & SSO.Types.ClientConfiguration;
  /**
   * Returns the STS short-term credentials for a given role name that is assigned to the user.
   */
  getRoleCredentials(params: SSO.Types.GetRoleCredentialsRequest, callback?: (err: AWSError, data: SSO.Types.GetRoleCredentialsResponse) => void): Request<SSO.Types.GetRoleCredentialsResponse, AWSError>;
  /**
   * Returns the STS short-term credentials for a given role name that is assigned to the user.
   */
  getRoleCredentials(callback?: (err: AWSError, data: SSO.Types.GetRoleCredentialsResponse) => void): Request<SSO.Types.GetRoleCredentialsResponse, AWSError>;
  /**
   * Lists all roles that are assigned to the user for a given Amazon Web Services account.
   */
  listAccountRoles(params: SSO.Types.ListAccountRolesRequest, callback?: (err: AWSError, data: SSO.Types.ListAccountRolesResponse) => void): Request<SSO.Types.ListAccountRolesResponse, AWSError>;
  /**
   * Lists all roles that are assigned to the user for a given Amazon Web Services account.
   */
  listAccountRoles(callback?: (err: AWSError, data: SSO.Types.ListAccountRolesResponse) => void): Request<SSO.Types.ListAccountRolesResponse, AWSError>;
  /**
   * Lists all Amazon Web Services accounts assigned to the user. These Amazon Web Services accounts are assigned by the administrator of the account. For more information, see Assign User Access in the Amazon Web Services SSO User Guide. This operation returns a paginated response.
   */
  listAccounts(params: SSO.Types.ListAccountsRequest, callback?: (err: AWSError, data: SSO.Types.ListAccountsResponse) => void): Request<SSO.Types.ListAccountsResponse, AWSError>;
  /**
   * Lists all Amazon Web Services accounts assigned to the user. These Amazon Web Services accounts are assigned by the administrator of the account. For more information, see Assign User Access in the Amazon Web Services SSO User Guide. This operation returns a paginated response.
   */
  listAccounts(callback?: (err: AWSError, data: SSO.Types.ListAccountsResponse) => void): Request<SSO.Types.ListAccountsResponse, AWSError>;
  /**
   * Removes the locally stored SSO tokens from the client-side cache and sends an API call to the Amazon Web Services SSO service to invalidate the corresponding server-side Amazon Web Services SSO sign in session.  If a user uses Amazon Web Services SSO to access the AWS CLI, the user’s Amazon Web Services SSO sign in session is used to obtain an IAM session, as specified in the corresponding Amazon Web Services SSO permission set. More specifically, Amazon Web Services SSO assumes an IAM role in the target account on behalf of the user, and the corresponding temporary Amazon Web Services credentials are returned to the client. After user logout, any existing IAM role sessions that were created by using Amazon Web Services SSO permission sets continue based on the duration configured in the permission set. For more information, see User authentications in the Amazon Web Services SSO User Guide. 
   */
  logout(params: SSO.Types.LogoutRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the locally stored SSO tokens from the client-side cache and sends an API call to the Amazon Web Services SSO service to invalidate the corresponding server-side Amazon Web Services SSO sign in session.  If a user uses Amazon Web Services SSO to access the AWS CLI, the user’s Amazon Web Services SSO sign in session is used to obtain an IAM session, as specified in the corresponding Amazon Web Services SSO permission set. More specifically, Amazon Web Services SSO assumes an IAM role in the target account on behalf of the user, and the corresponding temporary Amazon Web Services credentials are returned to the client. After user logout, any existing IAM role sessions that were created by using Amazon Web Services SSO permission sets continue based on the duration configured in the permission set. For more information, see User authentications in the Amazon Web Services SSO User Guide. 
   */
  logout(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace SSO {
  export type AccessKeyType = string;
  export type AccessTokenType = string;
  export type AccountIdType = string;
  export interface AccountInfo {
    /**
     * The identifier of the Amazon Web Services account that is assigned to the user.
     */
    accountId?: AccountIdType;
    /**
     * The display name of the Amazon Web Services account that is assigned to the user.
     */
    accountName?: AccountNameType;
    /**
     * The email address of the Amazon Web Services account that is assigned to the user.
     */
    emailAddress?: EmailAddressType;
  }
  export type AccountListType = AccountInfo[];
  export type AccountNameType = string;
  export type EmailAddressType = string;
  export type ExpirationTimestampType = number;
  export interface GetRoleCredentialsRequest {
    /**
     * The friendly name of the role that is assigned to the user.
     */
    roleName: RoleNameType;
    /**
     * The identifier for the Amazon Web Services account that is assigned to the user.
     */
    accountId: AccountIdType;
    /**
     * The token issued by the CreateToken API call. For more information, see CreateToken in the Amazon Web Services SSO OIDC API Reference Guide.
     */
    accessToken: AccessTokenType;
  }
  export interface GetRoleCredentialsResponse {
    /**
     * The credentials for the role that is assigned to the user.
     */
    roleCredentials?: RoleCredentials;
  }
  export interface ListAccountRolesRequest {
    /**
     * The page token from the previous response output when you request subsequent pages.
     */
    nextToken?: NextTokenType;
    /**
     * The number of items that clients can request per page.
     */
    maxResults?: MaxResultType;
    /**
     * The token issued by the CreateToken API call. For more information, see CreateToken in the Amazon Web Services SSO OIDC API Reference Guide.
     */
    accessToken: AccessTokenType;
    /**
     * The identifier for the Amazon Web Services account that is assigned to the user.
     */
    accountId: AccountIdType;
  }
  export interface ListAccountRolesResponse {
    /**
     * The page token client that is used to retrieve the list of accounts.
     */
    nextToken?: NextTokenType;
    /**
     * A paginated response with the list of roles and the next token if more results are available.
     */
    roleList?: RoleListType;
  }
  export interface ListAccountsRequest {
    /**
     * (Optional) When requesting subsequent pages, this is the page token from the previous response output.
     */
    nextToken?: NextTokenType;
    /**
     * This is the number of items clients can request per page.
     */
    maxResults?: MaxResultType;
    /**
     * The token issued by the CreateToken API call. For more information, see CreateToken in the Amazon Web Services SSO OIDC API Reference Guide.
     */
    accessToken: AccessTokenType;
  }
  export interface ListAccountsResponse {
    /**
     * The page token client that is used to retrieve the list of accounts.
     */
    nextToken?: NextTokenType;
    /**
     * A paginated response with the list of account information and the next token if more results are available.
     */
    accountList?: AccountListType;
  }
  export interface LogoutRequest {
    /**
     * The token issued by the CreateToken API call. For more information, see CreateToken in the Amazon Web Services SSO OIDC API Reference Guide.
     */
    accessToken: AccessTokenType;
  }
  export type MaxResultType = number;
  export type NextTokenType = string;
  export interface RoleCredentials {
    /**
     * The identifier used for the temporary security credentials. For more information, see Using Temporary Security Credentials to Request Access to Amazon Web Services Resources in the Amazon Web Services IAM User Guide.
     */
    accessKeyId?: AccessKeyType;
    /**
     * The key that is used to sign the request. For more information, see Using Temporary Security Credentials to Request Access to Amazon Web Services Resources in the Amazon Web Services IAM User Guide.
     */
    secretAccessKey?: SecretAccessKeyType;
    /**
     * The token used for temporary credentials. For more information, see Using Temporary Security Credentials to Request Access to Amazon Web Services Resources in the Amazon Web Services IAM User Guide.
     */
    sessionToken?: SessionTokenType;
    /**
     * The date on which temporary security credentials expire.
     */
    expiration?: ExpirationTimestampType;
  }
  export interface RoleInfo {
    /**
     * The friendly name of the role that is assigned to the user.
     */
    roleName?: RoleNameType;
    /**
     * The identifier of the Amazon Web Services account assigned to the user.
     */
    accountId?: AccountIdType;
  }
  export type RoleListType = RoleInfo[];
  export type RoleNameType = string;
  export type SecretAccessKeyType = string;
  export type SessionTokenType = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-06-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the SSO client.
   */
  export import Types = SSO;
}
export = SSO;
