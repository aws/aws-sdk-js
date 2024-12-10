import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class PcaConnectorScep extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: PcaConnectorScep.Types.ClientConfiguration)
  config: Config & PcaConnectorScep.Types.ClientConfiguration;
  /**
   * For general-purpose connectors. Creates a challenge password for the specified connector. The SCEP protocol uses a challenge password to authenticate a request before issuing a certificate from a certificate authority (CA). Your SCEP clients include the challenge password as part of their certificate request to Connector for SCEP. To retrieve the connector Amazon Resource Names (ARNs) for the connectors in your account, call ListConnectors. To create additional challenge passwords for the connector, call CreateChallenge again. We recommend frequently rotating your challenge passwords.
   */
  createChallenge(params: PcaConnectorScep.Types.CreateChallengeRequest, callback?: (err: AWSError, data: PcaConnectorScep.Types.CreateChallengeResponse) => void): Request<PcaConnectorScep.Types.CreateChallengeResponse, AWSError>;
  /**
   * For general-purpose connectors. Creates a challenge password for the specified connector. The SCEP protocol uses a challenge password to authenticate a request before issuing a certificate from a certificate authority (CA). Your SCEP clients include the challenge password as part of their certificate request to Connector for SCEP. To retrieve the connector Amazon Resource Names (ARNs) for the connectors in your account, call ListConnectors. To create additional challenge passwords for the connector, call CreateChallenge again. We recommend frequently rotating your challenge passwords.
   */
  createChallenge(callback?: (err: AWSError, data: PcaConnectorScep.Types.CreateChallengeResponse) => void): Request<PcaConnectorScep.Types.CreateChallengeResponse, AWSError>;
  /**
   * Creates a SCEP connector. A SCEP connector links Amazon Web Services Private Certificate Authority to your SCEP-compatible devices and mobile device management (MDM) systems. Before you create a connector, you must complete a set of prerequisites, including creation of a private certificate authority (CA) to use with this connector. For more information, see Connector for SCEP prerequisites.
   */
  createConnector(params: PcaConnectorScep.Types.CreateConnectorRequest, callback?: (err: AWSError, data: PcaConnectorScep.Types.CreateConnectorResponse) => void): Request<PcaConnectorScep.Types.CreateConnectorResponse, AWSError>;
  /**
   * Creates a SCEP connector. A SCEP connector links Amazon Web Services Private Certificate Authority to your SCEP-compatible devices and mobile device management (MDM) systems. Before you create a connector, you must complete a set of prerequisites, including creation of a private certificate authority (CA) to use with this connector. For more information, see Connector for SCEP prerequisites.
   */
  createConnector(callback?: (err: AWSError, data: PcaConnectorScep.Types.CreateConnectorResponse) => void): Request<PcaConnectorScep.Types.CreateConnectorResponse, AWSError>;
  /**
   * Deletes the specified Challenge.
   */
  deleteChallenge(params: PcaConnectorScep.Types.DeleteChallengeRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Challenge.
   */
  deleteChallenge(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Connector. This operation also deletes any challenges associated with the connector.
   */
  deleteConnector(params: PcaConnectorScep.Types.DeleteConnectorRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified Connector. This operation also deletes any challenges associated with the connector.
   */
  deleteConnector(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves the metadata for the specified Challenge.
   */
  getChallengeMetadata(params: PcaConnectorScep.Types.GetChallengeMetadataRequest, callback?: (err: AWSError, data: PcaConnectorScep.Types.GetChallengeMetadataResponse) => void): Request<PcaConnectorScep.Types.GetChallengeMetadataResponse, AWSError>;
  /**
   * Retrieves the metadata for the specified Challenge.
   */
  getChallengeMetadata(callback?: (err: AWSError, data: PcaConnectorScep.Types.GetChallengeMetadataResponse) => void): Request<PcaConnectorScep.Types.GetChallengeMetadataResponse, AWSError>;
  /**
   * Retrieves the challenge password for the specified Challenge.
   */
  getChallengePassword(params: PcaConnectorScep.Types.GetChallengePasswordRequest, callback?: (err: AWSError, data: PcaConnectorScep.Types.GetChallengePasswordResponse) => void): Request<PcaConnectorScep.Types.GetChallengePasswordResponse, AWSError>;
  /**
   * Retrieves the challenge password for the specified Challenge.
   */
  getChallengePassword(callback?: (err: AWSError, data: PcaConnectorScep.Types.GetChallengePasswordResponse) => void): Request<PcaConnectorScep.Types.GetChallengePasswordResponse, AWSError>;
  /**
   * Retrieves details about the specified Connector. Calling this action returns important details about the connector, such as the public SCEP URL where your clients can request certificates.
   */
  getConnector(params: PcaConnectorScep.Types.GetConnectorRequest, callback?: (err: AWSError, data: PcaConnectorScep.Types.GetConnectorResponse) => void): Request<PcaConnectorScep.Types.GetConnectorResponse, AWSError>;
  /**
   * Retrieves details about the specified Connector. Calling this action returns important details about the connector, such as the public SCEP URL where your clients can request certificates.
   */
  getConnector(callback?: (err: AWSError, data: PcaConnectorScep.Types.GetConnectorResponse) => void): Request<PcaConnectorScep.Types.GetConnectorResponse, AWSError>;
  /**
   * Retrieves the challenge metadata for the specified ARN.
   */
  listChallengeMetadata(params: PcaConnectorScep.Types.ListChallengeMetadataRequest, callback?: (err: AWSError, data: PcaConnectorScep.Types.ListChallengeMetadataResponse) => void): Request<PcaConnectorScep.Types.ListChallengeMetadataResponse, AWSError>;
  /**
   * Retrieves the challenge metadata for the specified ARN.
   */
  listChallengeMetadata(callback?: (err: AWSError, data: PcaConnectorScep.Types.ListChallengeMetadataResponse) => void): Request<PcaConnectorScep.Types.ListChallengeMetadataResponse, AWSError>;
  /**
   * Lists the connectors belonging to your Amazon Web Services account.
   */
  listConnectors(params: PcaConnectorScep.Types.ListConnectorsRequest, callback?: (err: AWSError, data: PcaConnectorScep.Types.ListConnectorsResponse) => void): Request<PcaConnectorScep.Types.ListConnectorsResponse, AWSError>;
  /**
   * Lists the connectors belonging to your Amazon Web Services account.
   */
  listConnectors(callback?: (err: AWSError, data: PcaConnectorScep.Types.ListConnectorsResponse) => void): Request<PcaConnectorScep.Types.ListConnectorsResponse, AWSError>;
  /**
   * Retrieves the tags associated with the specified resource. Tags are key-value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.
   */
  listTagsForResource(params: PcaConnectorScep.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: PcaConnectorScep.Types.ListTagsForResourceResponse) => void): Request<PcaConnectorScep.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves the tags associated with the specified resource. Tags are key-value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: PcaConnectorScep.Types.ListTagsForResourceResponse) => void): Request<PcaConnectorScep.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Adds one or more tags to your resource.
   */
  tagResource(params: PcaConnectorScep.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more tags to your resource.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes one or more tags from your resource.
   */
  untagResource(params: PcaConnectorScep.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes one or more tags from your resource.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace PcaConnectorScep {
  export type AzureApplicationId = string;
  export type AzureDomain = string;
  export type CertificateAuthorityArn = string;
  export interface Challenge {
    /**
     * The Amazon Resource Name (ARN) of the challenge.
     */
    Arn?: ChallengeArn;
    /**
     * The Amazon Resource Name (ARN) of the connector.
     */
    ConnectorArn?: ConnectorArn;
    /**
     * The date and time that the challenge was created.
     */
    CreatedAt?: Timestamp;
    /**
     * The date and time that the challenge was updated.
     */
    UpdatedAt?: Timestamp;
    /**
     * The SCEP challenge password, in UUID format.
     */
    Password?: SensitiveString;
  }
  export type ChallengeArn = string;
  export interface ChallengeMetadata {
    /**
     * The Amazon Resource Name (ARN) of the challenge.
     */
    Arn?: ChallengeArn;
    /**
     * The Amazon Resource Name (ARN) of the connector.
     */
    ConnectorArn?: ConnectorArn;
    /**
     * The date and time that the connector was created.
     */
    CreatedAt?: Timestamp;
    /**
     * The date and time that the connector was updated.
     */
    UpdatedAt?: Timestamp;
  }
  export type ChallengeMetadataList = ChallengeMetadataSummary[];
  export interface ChallengeMetadataSummary {
    /**
     * The Amazon Resource Name (ARN) of the challenge.
     */
    Arn?: ChallengeArn;
    /**
     * The Amazon Resource Name (ARN) of the connector.
     */
    ConnectorArn?: ConnectorArn;
    /**
     * The date and time that the challenge was created.
     */
    CreatedAt?: Timestamp;
    /**
     * The date and time that the challenge was updated.
     */
    UpdatedAt?: Timestamp;
  }
  export type ClientToken = string;
  export interface Connector {
    /**
     * The Amazon Resource Name (ARN) of the connector.
     */
    Arn?: ConnectorArn;
    /**
     * The Amazon Resource Name (ARN) of the certificate authority associated with the connector.
     */
    CertificateAuthorityArn?: CertificateAuthorityArn;
    /**
     * The connector type.
     */
    Type?: ConnectorType;
    /**
     * Contains settings relevant to the mobile device management system that you chose for the connector. If you didn't configure MobileDeviceManagement, then the connector is for general-purpose use and this object is empty.
     */
    MobileDeviceManagement?: MobileDeviceManagement;
    /**
     * Contains OpenID Connect (OIDC) parameters for use with Connector for SCEP for Microsoft Intune. For more information about using Connector for SCEP for Microsoft Intune, see Using Connector for SCEP for Microsoft Intune.
     */
    OpenIdConfiguration?: OpenIdConfiguration;
    /**
     * The connector's status.
     */
    Status?: ConnectorStatus;
    /**
     * Information about why connector creation failed, if status is FAILED.
     */
    StatusReason?: ConnectorStatusReason;
    /**
     * The connector's HTTPS public SCEP URL.
     */
    Endpoint?: String;
    /**
     * The date and time that the connector was created.
     */
    CreatedAt?: Timestamp;
    /**
     * The date and time that the connector was updated.
     */
    UpdatedAt?: Timestamp;
  }
  export type ConnectorArn = string;
  export type ConnectorList = ConnectorSummary[];
  export type ConnectorStatus = "CREATING"|"ACTIVE"|"DELETING"|"FAILED"|string;
  export type ConnectorStatusReason = "INTERNAL_FAILURE"|"PRIVATECA_ACCESS_DENIED"|"PRIVATECA_INVALID_STATE"|"PRIVATECA_RESOURCE_NOT_FOUND"|string;
  export interface ConnectorSummary {
    /**
     * The Amazon Resource Name (ARN) of the connector.
     */
    Arn?: ConnectorArn;
    /**
     * The Amazon Resource Name (ARN) of the connector's associated certificate authority.
     */
    CertificateAuthorityArn?: CertificateAuthorityArn;
    /**
     * The connector type.
     */
    Type?: ConnectorType;
    /**
     * Contains settings relevant to the mobile device management system that you chose for the connector. If you didn't configure MobileDeviceManagement, then the connector is for general-purpose use and this object is empty.
     */
    MobileDeviceManagement?: MobileDeviceManagement;
    /**
     * Contains OpenID Connect (OIDC) parameters for use with Microsoft Intune.
     */
    OpenIdConfiguration?: OpenIdConfiguration;
    /**
     * The connector's status. Status can be creating, active, deleting, or failed.
     */
    Status?: ConnectorStatus;
    /**
     * Information about why connector creation failed, if status is FAILED.
     */
    StatusReason?: ConnectorStatusReason;
    /**
     * The connector's HTTPS public SCEP URL.
     */
    Endpoint?: String;
    /**
     * The date and time that the challenge was created.
     */
    CreatedAt?: Timestamp;
    /**
     * The date and time that the challenge was updated.
     */
    UpdatedAt?: Timestamp;
  }
  export type ConnectorType = "GENERAL_PURPOSE"|"INTUNE"|string;
  export interface CreateChallengeRequest {
    /**
     * The Amazon Resource Name (ARN) of the connector that you want to create a challenge for.
     */
    ConnectorArn: ConnectorArn;
    /**
     * Custom string that can be used to distinguish between calls to the CreateChallenge action. Client tokens for CreateChallenge time out after five minutes. Therefore, if you call CreateChallenge multiple times with the same client token within five minutes, Connector for SCEP recognizes that you are requesting only one challenge and will only respond with one. If you change the client token for each call, Connector for SCEP recognizes that you are requesting multiple challenge passwords.
     */
    ClientToken?: ClientToken;
    /**
     * The key-value pairs to associate with the resource.
     */
    Tags?: Tags;
  }
  export interface CreateChallengeResponse {
    /**
     * Returns the challenge details for the specified connector.
     */
    Challenge?: Challenge;
  }
  export interface CreateConnectorRequest {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Web Services Private Certificate Authority certificate authority to use with this connector. Due to security vulnerabilities present in the SCEP protocol, we recommend using a private CA that's dedicated for use with the connector. To retrieve the private CAs associated with your account, you can call ListCertificateAuthorities using the Amazon Web Services Private CA API.
     */
    CertificateAuthorityArn: CertificateAuthorityArn;
    /**
     * If you don't supply a value, by default Connector for SCEP creates a connector for general-purpose use. A general-purpose connector is designed to work with clients or endpoints that support the SCEP protocol, except Connector for SCEP for Microsoft Intune. With connectors for general-purpose use, you manage SCEP challenge passwords using Connector for SCEP. For information about considerations and limitations with using Connector for SCEP, see Considerations and Limitations. If you provide an IntuneConfiguration, Connector for SCEP creates a connector for use with Microsoft Intune, and you manage the challenge passwords using Microsoft Intune. For more information, see Using Connector for SCEP for Microsoft Intune.
     */
    MobileDeviceManagement?: MobileDeviceManagement;
    /**
     * Custom string that can be used to distinguish between calls to the CreateChallenge action. Client tokens for CreateChallenge time out after five minutes. Therefore, if you call CreateChallenge multiple times with the same client token within five minutes, Connector for SCEP recognizes that you are requesting only one challenge and will only respond with one. If you change the client token for each call, Connector for SCEP recognizes that you are requesting multiple challenge passwords.
     */
    ClientToken?: ClientToken;
    /**
     * The key-value pairs to associate with the resource.
     */
    Tags?: Tags;
  }
  export interface CreateConnectorResponse {
    /**
     * Returns the Amazon Resource Name (ARN) of the connector.
     */
    ConnectorArn?: ConnectorArn;
  }
  export interface DeleteChallengeRequest {
    /**
     * The Amazon Resource Name (ARN) of the challenge password to delete.
     */
    ChallengeArn: ChallengeArn;
  }
  export interface DeleteConnectorRequest {
    /**
     * The Amazon Resource Name (ARN) of the connector to delete.
     */
    ConnectorArn: ConnectorArn;
  }
  export interface GetChallengeMetadataRequest {
    /**
     * The Amazon Resource Name (ARN) of the challenge.
     */
    ChallengeArn: ChallengeArn;
  }
  export interface GetChallengeMetadataResponse {
    /**
     * The metadata for the challenge.
     */
    ChallengeMetadata?: ChallengeMetadata;
  }
  export interface GetChallengePasswordRequest {
    /**
     * The Amazon Resource Name (ARN) of the challenge.
     */
    ChallengeArn: ChallengeArn;
  }
  export interface GetChallengePasswordResponse {
    /**
     * The SCEP challenge password.
     */
    Password?: SensitiveString;
  }
  export interface GetConnectorRequest {
    /**
     * The Amazon Resource Name (ARN) of the connector.
     */
    ConnectorArn: ConnectorArn;
  }
  export interface GetConnectorResponse {
    /**
     * The properties of the connector.
     */
    Connector?: Connector;
  }
  export interface IntuneConfiguration {
    /**
     * The directory (tenant) ID from your Microsoft Entra ID app registration.
     */
    AzureApplicationId: AzureApplicationId;
    /**
     * The primary domain from your Microsoft Entra ID app registration.
     */
    Domain: AzureDomain;
  }
  export interface ListChallengeMetadataRequest {
    /**
     * The maximum number of objects that you want Connector for SCEP to return for this request. If more objects are available, in the response, Connector for SCEP provides a NextToken value that you can use in a subsequent call to get the next batch of objects.
     */
    MaxResults?: MaxResults;
    /**
     * When you request a list of objects with a MaxResults setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Connector for SCEP returns a NextToken value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
     */
    NextToken?: NextToken;
    /**
     * The Amazon Resource Name (ARN) of the connector.
     */
    ConnectorArn: ConnectorArn;
  }
  export interface ListChallengeMetadataResponse {
    /**
     * The challenge metadata for the challenges belonging to your Amazon Web Services account.
     */
    Challenges?: ChallengeMetadataList;
    /**
     * When you request a list of objects with a MaxResults setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Connector for SCEP returns a NextToken value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
     */
    NextToken?: NextToken;
  }
  export interface ListConnectorsRequest {
    /**
     * The maximum number of objects that you want Connector for SCEP to return for this request. If more objects are available, in the response, Connector for SCEP provides a NextToken value that you can use in a subsequent call to get the next batch of objects.
     */
    MaxResults?: MaxResults;
    /**
     * When you request a list of objects with a MaxResults setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Connector for SCEP returns a NextToken value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
     */
    NextToken?: NextToken;
  }
  export interface ListConnectorsResponse {
    /**
     * The connectors belonging to your Amazon Web Services account.
     */
    Connectors?: ConnectorList;
    /**
     * When you request a list of objects with a MaxResults setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Connector for SCEP returns a NextToken value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The key-value pairs to associate with the resource.
     */
    Tags?: Tags;
  }
  export type MaxResults = number;
  export interface MobileDeviceManagement {
    /**
     * Configuration settings for use with Microsoft Intune. For information about using Connector for SCEP for Microsoft Intune, see Using Connector for SCEP for Microsoft Intune.
     */
    Intune?: IntuneConfiguration;
  }
  export type NextToken = string;
  export interface OpenIdConfiguration {
    /**
     * The issuer value to copy into your Microsoft Entra app registration's OIDC.
     */
    Issuer?: String;
    /**
     * The subject value to copy into your Microsoft Entra app registration's OIDC.
     */
    Subject?: String;
    /**
     * The audience value to copy into your Microsoft Entra app registration's OIDC.
     */
    Audience?: String;
  }
  export type SensitiveString = string;
  export type String = string;
  export type TagKeyList = String[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: String;
    /**
     * The key-value pairs to associate with the resource.
     */
    Tags: Tags;
  }
  export type Tags = {[key: string]: String};
  export type Timestamp = Date;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: String;
    /**
     * Specifies a list of tag keys that you want to remove from the specified resources.
     */
    TagKeys: TagKeyList;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-05-10"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the PcaConnectorScep client.
   */
  export import Types = PcaConnectorScep;
}
export = PcaConnectorScep;
