import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class SSOOIDC extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SSOOIDC.Types.ClientConfiguration)
  config: Config & SSOOIDC.Types.ClientConfiguration;
  /**
   * Creates and returns access and refresh tokens for clients that are authenticated using client secrets. The access token can be used to fetch short-term credentials for the assigned AWS accounts or to access application APIs using bearer authentication.
   */
  createToken(params: SSOOIDC.Types.CreateTokenRequest, callback?: (err: AWSError, data: SSOOIDC.Types.CreateTokenResponse) => void): Request<SSOOIDC.Types.CreateTokenResponse, AWSError>;
  /**
   * Creates and returns access and refresh tokens for clients that are authenticated using client secrets. The access token can be used to fetch short-term credentials for the assigned AWS accounts or to access application APIs using bearer authentication.
   */
  createToken(callback?: (err: AWSError, data: SSOOIDC.Types.CreateTokenResponse) => void): Request<SSOOIDC.Types.CreateTokenResponse, AWSError>;
  /**
   * Creates and returns access and refresh tokens for clients and applications that are authenticated using IAM entities. The access token can be used to fetch short-term credentials for the assigned Amazon Web Services accounts or to access application APIs using bearer authentication.
   */
  createTokenWithIAM(params: SSOOIDC.Types.CreateTokenWithIAMRequest, callback?: (err: AWSError, data: SSOOIDC.Types.CreateTokenWithIAMResponse) => void): Request<SSOOIDC.Types.CreateTokenWithIAMResponse, AWSError>;
  /**
   * Creates and returns access and refresh tokens for clients and applications that are authenticated using IAM entities. The access token can be used to fetch short-term credentials for the assigned Amazon Web Services accounts or to access application APIs using bearer authentication.
   */
  createTokenWithIAM(callback?: (err: AWSError, data: SSOOIDC.Types.CreateTokenWithIAMResponse) => void): Request<SSOOIDC.Types.CreateTokenWithIAMResponse, AWSError>;
  /**
   * Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.
   */
  registerClient(params: SSOOIDC.Types.RegisterClientRequest, callback?: (err: AWSError, data: SSOOIDC.Types.RegisterClientResponse) => void): Request<SSOOIDC.Types.RegisterClientResponse, AWSError>;
  /**
   * Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.
   */
  registerClient(callback?: (err: AWSError, data: SSOOIDC.Types.RegisterClientResponse) => void): Request<SSOOIDC.Types.RegisterClientResponse, AWSError>;
  /**
   * Initiates device authorization by requesting a pair of verification codes from the authorization service.
   */
  startDeviceAuthorization(params: SSOOIDC.Types.StartDeviceAuthorizationRequest, callback?: (err: AWSError, data: SSOOIDC.Types.StartDeviceAuthorizationResponse) => void): Request<SSOOIDC.Types.StartDeviceAuthorizationResponse, AWSError>;
  /**
   * Initiates device authorization by requesting a pair of verification codes from the authorization service.
   */
  startDeviceAuthorization(callback?: (err: AWSError, data: SSOOIDC.Types.StartDeviceAuthorizationResponse) => void): Request<SSOOIDC.Types.StartDeviceAuthorizationResponse, AWSError>;
}
declare namespace SSOOIDC {
  export type AccessToken = string;
  export type ArnType = string;
  export type Assertion = string;
  export type AuthCode = string;
  export type ClientId = string;
  export type ClientName = string;
  export type ClientSecret = string;
  export type ClientType = string;
  export type CodeVerifier = string;
  export interface CreateTokenRequest {
    /**
     * The unique identifier string for the client or application. This value comes from the result of the RegisterClient API.
     */
    clientId: ClientId;
    /**
     * A secret string generated for the client. This value should come from the persisted result of the RegisterClient API.
     */
    clientSecret: ClientSecret;
    /**
     * Supports the following OAuth grant types: Device Code and Refresh Token. Specify either of the following values, depending on the grant type that you want: * Device Code - urn:ietf:params:oauth:grant-type:device_code  * Refresh Token - refresh_token  For information about how to obtain the device code, see the StartDeviceAuthorization topic.
     */
    grantType: GrantType;
    /**
     * Used only when calling this API for the Device Code grant type. This short-term code is used to identify this authorization request. This comes from the result of the StartDeviceAuthorization API.
     */
    deviceCode?: DeviceCode;
    /**
     * Used only when calling this API for the Authorization Code grant type. The short-term code is used to identify this authorization request. This grant type is currently unsupported for the CreateToken API.
     */
    code?: AuthCode;
    /**
     * Used only when calling this API for the Refresh Token grant type. This token is used to refresh short-term tokens, such as the access token, that might expire. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see Considerations for Using this Guide in the IAM Identity Center OIDC API Reference.
     */
    refreshToken?: RefreshToken;
    /**
     * The list of scopes for which authorization is requested. The access token that is issued is limited to the scopes that are granted. If this value is not specified, IAM Identity Center authorizes all scopes that are configured for the client during the call to RegisterClient.
     */
    scope?: Scopes;
    /**
     * Used only when calling this API for the Authorization Code grant type. This value specifies the location of the client or application that has registered to receive the authorization code.
     */
    redirectUri?: URI;
    /**
     * Used only when calling this API for the Authorization Code grant type. This value is generated by the client and presented to validate the original code challenge value the client passed at authorization time.
     */
    codeVerifier?: CodeVerifier;
  }
  export interface CreateTokenResponse {
    /**
     * A bearer token to access Amazon Web Services accounts and applications assigned to a user.
     */
    accessToken?: AccessToken;
    /**
     * Used to notify the client that the returned token is an access token. The supported token type is Bearer.
     */
    tokenType?: TokenType;
    /**
     * Indicates the time in seconds when an access token will expire.
     */
    expiresIn?: ExpirationInSeconds;
    /**
     * A token that, if present, can be used to refresh a previously issued access token that might have expired. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see Considerations for Using this Guide in the IAM Identity Center OIDC API Reference.
     */
    refreshToken?: RefreshToken;
    /**
     * The idToken is not implemented or supported. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see Considerations for Using this Guide in the IAM Identity Center OIDC API Reference. A JSON Web Token (JWT) that identifies who is associated with the issued access token. 
     */
    idToken?: IdToken;
  }
  export interface CreateTokenWithIAMRequest {
    /**
     * The unique identifier string for the client or application. This value is an application ARN that has OAuth grants configured.
     */
    clientId: ClientId;
    /**
     * Supports the following OAuth grant types: Authorization Code, Refresh Token, JWT Bearer, and Token Exchange. Specify one of the following values, depending on the grant type that you want: * Authorization Code - authorization_code  * Refresh Token - refresh_token  * JWT Bearer - urn:ietf:params:oauth:grant-type:jwt-bearer  * Token Exchange - urn:ietf:params:oauth:grant-type:token-exchange 
     */
    grantType: GrantType;
    /**
     * Used only when calling this API for the Authorization Code grant type. This short-term code is used to identify this authorization request. The code is obtained through a redirect from IAM Identity Center to a redirect URI persisted in the Authorization Code GrantOptions for the application.
     */
    code?: AuthCode;
    /**
     * Used only when calling this API for the Refresh Token grant type. This token is used to refresh short-term tokens, such as the access token, that might expire. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see Considerations for Using this Guide in the IAM Identity Center OIDC API Reference.
     */
    refreshToken?: RefreshToken;
    /**
     * Used only when calling this API for the JWT Bearer grant type. This value specifies the JSON Web Token (JWT) issued by a trusted token issuer. To authorize a trusted token issuer, configure the JWT Bearer GrantOptions for the application.
     */
    assertion?: Assertion;
    /**
     * The list of scopes for which authorization is requested. The access token that is issued is limited to the scopes that are granted. If the value is not specified, IAM Identity Center authorizes all scopes configured for the application, including the following default scopes: openid, aws, sts:identity_context.
     */
    scope?: Scopes;
    /**
     * Used only when calling this API for the Authorization Code grant type. This value specifies the location of the client or application that has registered to receive the authorization code. 
     */
    redirectUri?: URI;
    /**
     * Used only when calling this API for the Token Exchange grant type. This value specifies the subject of the exchange. The value of the subject token must be an access token issued by IAM Identity Center to a different client or application. The access token must have authorized scopes that indicate the requested application as a target audience.
     */
    subjectToken?: SubjectToken;
    /**
     * Used only when calling this API for the Token Exchange grant type. This value specifies the type of token that is passed as the subject of the exchange. The following value is supported: * Access Token - urn:ietf:params:oauth:token-type:access_token 
     */
    subjectTokenType?: TokenTypeURI;
    /**
     * Used only when calling this API for the Token Exchange grant type. This value specifies the type of token that the requester can receive. The following values are supported: * Access Token - urn:ietf:params:oauth:token-type:access_token  * Refresh Token - urn:ietf:params:oauth:token-type:refresh_token 
     */
    requestedTokenType?: TokenTypeURI;
    /**
     * Used only when calling this API for the Authorization Code grant type. This value is generated by the client and presented to validate the original code challenge value the client passed at authorization time.
     */
    codeVerifier?: CodeVerifier;
  }
  export interface CreateTokenWithIAMResponse {
    /**
     * A bearer token to access Amazon Web Services accounts and applications assigned to a user.
     */
    accessToken?: AccessToken;
    /**
     * Used to notify the requester that the returned token is an access token. The supported token type is Bearer.
     */
    tokenType?: TokenType;
    /**
     * Indicates the time in seconds when an access token will expire.
     */
    expiresIn?: ExpirationInSeconds;
    /**
     * A token that, if present, can be used to refresh a previously issued access token that might have expired. For more information about the features and limitations of the current IAM Identity Center OIDC implementation, see Considerations for Using this Guide in the IAM Identity Center OIDC API Reference.
     */
    refreshToken?: RefreshToken;
    /**
     * A JSON Web Token (JWT) that identifies the user associated with the issued access token. 
     */
    idToken?: IdToken;
    /**
     * Indicates the type of tokens that are issued by IAM Identity Center. The following values are supported:  * Access Token - urn:ietf:params:oauth:token-type:access_token  * Refresh Token - urn:ietf:params:oauth:token-type:refresh_token 
     */
    issuedTokenType?: TokenTypeURI;
    /**
     * The list of scopes for which authorization is granted. The access token that is issued is limited to the scopes that are granted.
     */
    scope?: Scopes;
  }
  export type DeviceCode = string;
  export type ExpirationInSeconds = number;
  export type GrantType = string;
  export type GrantTypes = GrantType[];
  export type IdToken = string;
  export type IntervalInSeconds = number;
  export type LongTimeStampType = number;
  export type RedirectUris = URI[];
  export type RefreshToken = string;
  export interface RegisterClientRequest {
    /**
     * The friendly name of the client.
     */
    clientName: ClientName;
    /**
     * The type of client. The service supports only public as a client type. Anything other than public will be rejected by the service.
     */
    clientType: ClientType;
    /**
     * The list of scopes that are defined by the client. Upon authorization, this list is used to restrict permissions when granting an access token.
     */
    scopes?: Scopes;
    /**
     * The list of redirect URI that are defined by the client. At completion of authorization, this list is used to restrict what locations the user agent can be redirected back to.
     */
    redirectUris?: RedirectUris;
    /**
     * The list of OAuth 2.0 grant types that are defined by the client. This list is used to restrict the token granting flows available to the client.
     */
    grantTypes?: GrantTypes;
    /**
     * The IAM Identity Center Issuer URL associated with an instance of IAM Identity Center. This value is needed for user access to resources through the client.
     */
    issuerUrl?: URI;
    /**
     * This IAM Identity Center application ARN is used to define administrator-managed configuration for public client access to resources. At authorization, the scopes, grants, and redirect URI available to this client will be restricted by this application resource.
     */
    entitledApplicationArn?: ArnType;
  }
  export interface RegisterClientResponse {
    /**
     * The unique identifier string for each client. This client uses this identifier to get authenticated by the service in subsequent calls.
     */
    clientId?: ClientId;
    /**
     * A secret string generated for the client. The client will use this string to get authenticated by the service in subsequent calls.
     */
    clientSecret?: ClientSecret;
    /**
     * Indicates the time at which the clientId and clientSecret were issued.
     */
    clientIdIssuedAt?: LongTimeStampType;
    /**
     * Indicates the time at which the clientId and clientSecret will become invalid.
     */
    clientSecretExpiresAt?: LongTimeStampType;
    /**
     * An endpoint that the client can use to request authorization.
     */
    authorizationEndpoint?: URI;
    /**
     * An endpoint that the client can use to create tokens.
     */
    tokenEndpoint?: URI;
  }
  export type Scope = string;
  export type Scopes = Scope[];
  export interface StartDeviceAuthorizationRequest {
    /**
     * The unique identifier string for the client that is registered with IAM Identity Center. This value should come from the persisted result of the RegisterClient API operation.
     */
    clientId: ClientId;
    /**
     * A secret string that is generated for the client. This value should come from the persisted result of the RegisterClient API operation.
     */
    clientSecret: ClientSecret;
    /**
     * The URL for the Amazon Web Services access portal. For more information, see Using the Amazon Web Services access portal in the IAM Identity Center User Guide.
     */
    startUrl: URI;
  }
  export interface StartDeviceAuthorizationResponse {
    /**
     * The short-lived code that is used by the device when polling for a session token.
     */
    deviceCode?: DeviceCode;
    /**
     * A one-time user verification code. This is needed to authorize an in-use device.
     */
    userCode?: UserCode;
    /**
     * The URI of the verification page that takes the userCode to authorize the device.
     */
    verificationUri?: URI;
    /**
     * An alternate URL that the client can use to automatically launch a browser. This process skips the manual step in which the user visits the verification page and enters their code.
     */
    verificationUriComplete?: URI;
    /**
     * Indicates the number of seconds in which the verification code will become invalid.
     */
    expiresIn?: ExpirationInSeconds;
    /**
     * Indicates the number of seconds the client must wait between attempts when polling for a session.
     */
    interval?: IntervalInSeconds;
  }
  export type SubjectToken = string;
  export type TokenType = string;
  export type TokenTypeURI = string;
  export type URI = string;
  export type UserCode = string;
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
   * Contains interfaces for use with the SSOOIDC client.
   */
  export import Types = SSOOIDC;
}
export = SSOOIDC;
