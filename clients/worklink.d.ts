import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class WorkLink extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: WorkLink.Types.ClientConfiguration)
  config: Config & WorkLink.Types.ClientConfiguration;
  /**
   * Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.
   */
  associateWebsiteCertificateAuthority(params: WorkLink.Types.AssociateWebsiteCertificateAuthorityRequest, callback?: (err: AWSError, data: WorkLink.Types.AssociateWebsiteCertificateAuthorityResponse) => void): Request<WorkLink.Types.AssociateWebsiteCertificateAuthorityResponse, AWSError>;
  /**
   * Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.
   */
  associateWebsiteCertificateAuthority(callback?: (err: AWSError, data: WorkLink.Types.AssociateWebsiteCertificateAuthorityResponse) => void): Request<WorkLink.Types.AssociateWebsiteCertificateAuthorityResponse, AWSError>;
  /**
   * Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.
   */
  createFleet(params: WorkLink.Types.CreateFleetRequest, callback?: (err: AWSError, data: WorkLink.Types.CreateFleetResponse) => void): Request<WorkLink.Types.CreateFleetResponse, AWSError>;
  /**
   * Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.
   */
  createFleet(callback?: (err: AWSError, data: WorkLink.Types.CreateFleetResponse) => void): Request<WorkLink.Types.CreateFleetResponse, AWSError>;
  /**
   * Deletes a fleet. Prevents users from accessing previously associated websites. 
   */
  deleteFleet(params: WorkLink.Types.DeleteFleetRequest, callback?: (err: AWSError, data: WorkLink.Types.DeleteFleetResponse) => void): Request<WorkLink.Types.DeleteFleetResponse, AWSError>;
  /**
   * Deletes a fleet. Prevents users from accessing previously associated websites. 
   */
  deleteFleet(callback?: (err: AWSError, data: WorkLink.Types.DeleteFleetResponse) => void): Request<WorkLink.Types.DeleteFleetResponse, AWSError>;
  /**
   * Describes the configuration for delivering audit streams to the customer account.
   */
  describeAuditStreamConfiguration(params: WorkLink.Types.DescribeAuditStreamConfigurationRequest, callback?: (err: AWSError, data: WorkLink.Types.DescribeAuditStreamConfigurationResponse) => void): Request<WorkLink.Types.DescribeAuditStreamConfigurationResponse, AWSError>;
  /**
   * Describes the configuration for delivering audit streams to the customer account.
   */
  describeAuditStreamConfiguration(callback?: (err: AWSError, data: WorkLink.Types.DescribeAuditStreamConfigurationResponse) => void): Request<WorkLink.Types.DescribeAuditStreamConfigurationResponse, AWSError>;
  /**
   * Describes the networking configuration to access the internal websites associated with the specified fleet.
   */
  describeCompanyNetworkConfiguration(params: WorkLink.Types.DescribeCompanyNetworkConfigurationRequest, callback?: (err: AWSError, data: WorkLink.Types.DescribeCompanyNetworkConfigurationResponse) => void): Request<WorkLink.Types.DescribeCompanyNetworkConfigurationResponse, AWSError>;
  /**
   * Describes the networking configuration to access the internal websites associated with the specified fleet.
   */
  describeCompanyNetworkConfiguration(callback?: (err: AWSError, data: WorkLink.Types.DescribeCompanyNetworkConfigurationResponse) => void): Request<WorkLink.Types.DescribeCompanyNetworkConfigurationResponse, AWSError>;
  /**
   * Provides information about a user's device.
   */
  describeDevice(params: WorkLink.Types.DescribeDeviceRequest, callback?: (err: AWSError, data: WorkLink.Types.DescribeDeviceResponse) => void): Request<WorkLink.Types.DescribeDeviceResponse, AWSError>;
  /**
   * Provides information about a user's device.
   */
  describeDevice(callback?: (err: AWSError, data: WorkLink.Types.DescribeDeviceResponse) => void): Request<WorkLink.Types.DescribeDeviceResponse, AWSError>;
  /**
   * Describes the device policy configuration for the specified fleet.
   */
  describeDevicePolicyConfiguration(params: WorkLink.Types.DescribeDevicePolicyConfigurationRequest, callback?: (err: AWSError, data: WorkLink.Types.DescribeDevicePolicyConfigurationResponse) => void): Request<WorkLink.Types.DescribeDevicePolicyConfigurationResponse, AWSError>;
  /**
   * Describes the device policy configuration for the specified fleet.
   */
  describeDevicePolicyConfiguration(callback?: (err: AWSError, data: WorkLink.Types.DescribeDevicePolicyConfigurationResponse) => void): Request<WorkLink.Types.DescribeDevicePolicyConfigurationResponse, AWSError>;
  /**
   * Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.
   */
  describeFleetMetadata(params: WorkLink.Types.DescribeFleetMetadataRequest, callback?: (err: AWSError, data: WorkLink.Types.DescribeFleetMetadataResponse) => void): Request<WorkLink.Types.DescribeFleetMetadataResponse, AWSError>;
  /**
   * Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.
   */
  describeFleetMetadata(callback?: (err: AWSError, data: WorkLink.Types.DescribeFleetMetadataResponse) => void): Request<WorkLink.Types.DescribeFleetMetadataResponse, AWSError>;
  /**
   * Describes the identity provider configuration of the specified fleet.
   */
  describeIdentityProviderConfiguration(params: WorkLink.Types.DescribeIdentityProviderConfigurationRequest, callback?: (err: AWSError, data: WorkLink.Types.DescribeIdentityProviderConfigurationResponse) => void): Request<WorkLink.Types.DescribeIdentityProviderConfigurationResponse, AWSError>;
  /**
   * Describes the identity provider configuration of the specified fleet.
   */
  describeIdentityProviderConfiguration(callback?: (err: AWSError, data: WorkLink.Types.DescribeIdentityProviderConfigurationResponse) => void): Request<WorkLink.Types.DescribeIdentityProviderConfigurationResponse, AWSError>;
  /**
   * Provides information about the certificate authority.
   */
  describeWebsiteCertificateAuthority(params: WorkLink.Types.DescribeWebsiteCertificateAuthorityRequest, callback?: (err: AWSError, data: WorkLink.Types.DescribeWebsiteCertificateAuthorityResponse) => void): Request<WorkLink.Types.DescribeWebsiteCertificateAuthorityResponse, AWSError>;
  /**
   * Provides information about the certificate authority.
   */
  describeWebsiteCertificateAuthority(callback?: (err: AWSError, data: WorkLink.Types.DescribeWebsiteCertificateAuthorityResponse) => void): Request<WorkLink.Types.DescribeWebsiteCertificateAuthorityResponse, AWSError>;
  /**
   * Removes a certificate authority (CA).
   */
  disassociateWebsiteCertificateAuthority(params: WorkLink.Types.DisassociateWebsiteCertificateAuthorityRequest, callback?: (err: AWSError, data: WorkLink.Types.DisassociateWebsiteCertificateAuthorityResponse) => void): Request<WorkLink.Types.DisassociateWebsiteCertificateAuthorityResponse, AWSError>;
  /**
   * Removes a certificate authority (CA).
   */
  disassociateWebsiteCertificateAuthority(callback?: (err: AWSError, data: WorkLink.Types.DisassociateWebsiteCertificateAuthorityResponse) => void): Request<WorkLink.Types.DisassociateWebsiteCertificateAuthorityResponse, AWSError>;
  /**
   * Retrieves a list of devices registered with the specified fleet.
   */
  listDevices(params: WorkLink.Types.ListDevicesRequest, callback?: (err: AWSError, data: WorkLink.Types.ListDevicesResponse) => void): Request<WorkLink.Types.ListDevicesResponse, AWSError>;
  /**
   * Retrieves a list of devices registered with the specified fleet.
   */
  listDevices(callback?: (err: AWSError, data: WorkLink.Types.ListDevicesResponse) => void): Request<WorkLink.Types.ListDevicesResponse, AWSError>;
  /**
   * Retrieves a list of fleets for the current account and Region.
   */
  listFleets(params: WorkLink.Types.ListFleetsRequest, callback?: (err: AWSError, data: WorkLink.Types.ListFleetsResponse) => void): Request<WorkLink.Types.ListFleetsResponse, AWSError>;
  /**
   * Retrieves a list of fleets for the current account and Region.
   */
  listFleets(callback?: (err: AWSError, data: WorkLink.Types.ListFleetsResponse) => void): Request<WorkLink.Types.ListFleetsResponse, AWSError>;
  /**
   * Retrieves a list of certificate authorities added for the current account and Region.
   */
  listWebsiteCertificateAuthorities(params: WorkLink.Types.ListWebsiteCertificateAuthoritiesRequest, callback?: (err: AWSError, data: WorkLink.Types.ListWebsiteCertificateAuthoritiesResponse) => void): Request<WorkLink.Types.ListWebsiteCertificateAuthoritiesResponse, AWSError>;
  /**
   * Retrieves a list of certificate authorities added for the current account and Region.
   */
  listWebsiteCertificateAuthorities(callback?: (err: AWSError, data: WorkLink.Types.ListWebsiteCertificateAuthoritiesResponse) => void): Request<WorkLink.Types.ListWebsiteCertificateAuthoritiesResponse, AWSError>;
  /**
   * Signs the user out from all of their devices. The user can sign in again if they have valid credentials.
   */
  signOutUser(params: WorkLink.Types.SignOutUserRequest, callback?: (err: AWSError, data: WorkLink.Types.SignOutUserResponse) => void): Request<WorkLink.Types.SignOutUserResponse, AWSError>;
  /**
   * Signs the user out from all of their devices. The user can sign in again if they have valid credentials.
   */
  signOutUser(callback?: (err: AWSError, data: WorkLink.Types.SignOutUserResponse) => void): Request<WorkLink.Types.SignOutUserResponse, AWSError>;
  /**
   * Updates the audit stream configuration for the fleet.
   */
  updateAuditStreamConfiguration(params: WorkLink.Types.UpdateAuditStreamConfigurationRequest, callback?: (err: AWSError, data: WorkLink.Types.UpdateAuditStreamConfigurationResponse) => void): Request<WorkLink.Types.UpdateAuditStreamConfigurationResponse, AWSError>;
  /**
   * Updates the audit stream configuration for the fleet.
   */
  updateAuditStreamConfiguration(callback?: (err: AWSError, data: WorkLink.Types.UpdateAuditStreamConfigurationResponse) => void): Request<WorkLink.Types.UpdateAuditStreamConfigurationResponse, AWSError>;
  /**
   * Updates the company network configuration for the fleet.
   */
  updateCompanyNetworkConfiguration(params: WorkLink.Types.UpdateCompanyNetworkConfigurationRequest, callback?: (err: AWSError, data: WorkLink.Types.UpdateCompanyNetworkConfigurationResponse) => void): Request<WorkLink.Types.UpdateCompanyNetworkConfigurationResponse, AWSError>;
  /**
   * Updates the company network configuration for the fleet.
   */
  updateCompanyNetworkConfiguration(callback?: (err: AWSError, data: WorkLink.Types.UpdateCompanyNetworkConfigurationResponse) => void): Request<WorkLink.Types.UpdateCompanyNetworkConfigurationResponse, AWSError>;
  /**
   * Updates the device policy configuration for the fleet.
   */
  updateDevicePolicyConfiguration(params: WorkLink.Types.UpdateDevicePolicyConfigurationRequest, callback?: (err: AWSError, data: WorkLink.Types.UpdateDevicePolicyConfigurationResponse) => void): Request<WorkLink.Types.UpdateDevicePolicyConfigurationResponse, AWSError>;
  /**
   * Updates the device policy configuration for the fleet.
   */
  updateDevicePolicyConfiguration(callback?: (err: AWSError, data: WorkLink.Types.UpdateDevicePolicyConfigurationResponse) => void): Request<WorkLink.Types.UpdateDevicePolicyConfigurationResponse, AWSError>;
  /**
   * Updates fleet metadata, such as DisplayName.
   */
  updateFleetMetadata(params: WorkLink.Types.UpdateFleetMetadataRequest, callback?: (err: AWSError, data: WorkLink.Types.UpdateFleetMetadataResponse) => void): Request<WorkLink.Types.UpdateFleetMetadataResponse, AWSError>;
  /**
   * Updates fleet metadata, such as DisplayName.
   */
  updateFleetMetadata(callback?: (err: AWSError, data: WorkLink.Types.UpdateFleetMetadataResponse) => void): Request<WorkLink.Types.UpdateFleetMetadataResponse, AWSError>;
  /**
   * Updates the identity provider configuration for the fleet.
   */
  updateIdentityProviderConfiguration(params: WorkLink.Types.UpdateIdentityProviderConfigurationRequest, callback?: (err: AWSError, data: WorkLink.Types.UpdateIdentityProviderConfigurationResponse) => void): Request<WorkLink.Types.UpdateIdentityProviderConfigurationResponse, AWSError>;
  /**
   * Updates the identity provider configuration for the fleet.
   */
  updateIdentityProviderConfiguration(callback?: (err: AWSError, data: WorkLink.Types.UpdateIdentityProviderConfigurationResponse) => void): Request<WorkLink.Types.UpdateIdentityProviderConfigurationResponse, AWSError>;
}
declare namespace WorkLink {
  export interface AssociateWebsiteCertificateAuthorityRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
    /**
     * The root certificate of the CA.
     */
    Certificate: Certificate;
    /**
     * The certificate name to display.
     */
    DisplayName?: DisplayName;
  }
  export interface AssociateWebsiteCertificateAuthorityResponse {
    /**
     * A unique identifier for the CA.
     */
    WebsiteCaId?: Id;
  }
  export type AuditStreamArn = string;
  export type Boolean = boolean;
  export type Certificate = string;
  export type CertificateChain = string;
  export type CompanyCode = string;
  export interface CreateFleetRequest {
    /**
     * A unique name for the fleet.
     */
    FleetName: FleetName;
    /**
     * The fleet name to display.
     */
    DisplayName?: DisplayName;
    /**
     * The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.
     */
    OptimizeForEndUserLocation?: Boolean;
  }
  export interface CreateFleetResponse {
    /**
     * The ARN of the fleet.
     */
    FleetArn?: FleetArn;
  }
  export type DateTime = Date;
  export interface DeleteFleetRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
  }
  export interface DeleteFleetResponse {
  }
  export interface DescribeAuditStreamConfigurationRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
  }
  export interface DescribeAuditStreamConfigurationResponse {
    /**
     * The ARN of the Amazon Kinesis data stream that will receive the audit events.
     */
    AuditStreamArn?: AuditStreamArn;
  }
  export interface DescribeCompanyNetworkConfigurationRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
  }
  export interface DescribeCompanyNetworkConfigurationResponse {
    /**
     * The VPC with connectivity to associated websites.
     */
    VpcId?: VpcId;
    /**
     * The subnets used for X-ENI connections from Amazon WorkLink rendering containers.
     */
    SubnetIds?: SubnetIds;
    /**
     * The security groups associated with access to the provided subnets.
     */
    SecurityGroupIds?: SecurityGroupIds;
  }
  export interface DescribeDevicePolicyConfigurationRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
  }
  export interface DescribeDevicePolicyConfigurationResponse {
    /**
     * The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.
     */
    DeviceCaCertificate?: Certificate;
  }
  export interface DescribeDeviceRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
    /**
     * A unique identifier for a registered user's device.
     */
    DeviceId: Id;
  }
  export interface DescribeDeviceResponse {
    /**
     * The current state of the device.
     */
    Status?: DeviceStatus;
    /**
     * The model of the device.
     */
    Model?: DeviceModel;
    /**
     * The manufacturer of the device.
     */
    Manufacturer?: DeviceManufacturer;
    /**
     * The operating system of the device.
     */
    OperatingSystem?: DeviceOperatingSystemName;
    /**
     * The operating system version of the device.
     */
    OperatingSystemVersion?: DeviceOperatingSystemVersion;
    /**
     * The operating system patch level of the device.
     */
    PatchLevel?: DevicePatchLevel;
    /**
     * The date that the device first signed in to Amazon WorkLink.
     */
    FirstAccessedTime?: DateTime;
    /**
     * The date that the device last accessed Amazon WorkLink.
     */
    LastAccessedTime?: DateTime;
    /**
     * The user name associated with the device.
     */
    Username?: Username;
  }
  export interface DescribeFleetMetadataRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
  }
  export interface DescribeFleetMetadataResponse {
    /**
     * The time that the fleet was created.
     */
    CreatedTime?: DateTime;
    /**
     * The time that the fleet was last updated.
     */
    LastUpdatedTime?: DateTime;
    /**
     * The name of the fleet.
     */
    FleetName?: FleetName;
    /**
     * The name to display.
     */
    DisplayName?: DisplayName;
    /**
     * The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.
     */
    OptimizeForEndUserLocation?: Boolean;
    /**
     * The identifier used by users to sign in to the Amazon WorkLink app.
     */
    CompanyCode?: CompanyCode;
    /**
     * The current state of the fleet.
     */
    FleetStatus?: FleetStatus;
  }
  export interface DescribeIdentityProviderConfigurationRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
  }
  export interface DescribeIdentityProviderConfigurationResponse {
    /**
     * The type of identity provider.
     */
    IdentityProviderType?: IdentityProviderType;
    /**
     * The SAML metadata document uploaded to the user’s identity provider.
     */
    ServiceProviderSamlMetadata?: SamlMetadata;
    /**
     * The SAML metadata document provided by the user’s identity provider.
     */
    IdentityProviderSamlMetadata?: SamlMetadata;
  }
  export interface DescribeWebsiteCertificateAuthorityRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
    /**
     * A unique identifier for the certificate authority.
     */
    WebsiteCaId: Id;
  }
  export interface DescribeWebsiteCertificateAuthorityResponse {
    /**
     * The root certificate of the certificate authority.
     */
    Certificate?: Certificate;
    /**
     * The time that the certificate authority was added.
     */
    CreatedTime?: DateTime;
    /**
     * The certificate name to display.
     */
    DisplayName?: DisplayName;
  }
  export type DeviceManufacturer = string;
  export type DeviceModel = string;
  export type DeviceOperatingSystemName = string;
  export type DeviceOperatingSystemVersion = string;
  export type DevicePatchLevel = string;
  export type DeviceStatus = "ACTIVE"|"SIGNED_OUT"|string;
  export interface DeviceSummary {
    /**
     * The ID of the device.
     */
    DeviceId?: Id;
    /**
     * The status of the device.
     */
    DeviceStatus?: DeviceStatus;
  }
  export type DeviceSummaryList = DeviceSummary[];
  export interface DisassociateWebsiteCertificateAuthorityRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
    /**
     * A unique identifier for the CA.
     */
    WebsiteCaId: Id;
  }
  export interface DisassociateWebsiteCertificateAuthorityResponse {
  }
  export type DisplayName = string;
  export type FleetArn = string;
  export type FleetName = string;
  export type FleetStatus = "CREATING"|"ACTIVE"|"DELETING"|"DELETED"|"FAILED_TO_CREATE"|"FAILED_TO_DELETE"|string;
  export interface FleetSummary {
    /**
     * The ARN of the fleet.
     */
    FleetArn?: FleetArn;
    /**
     * The time when the fleet was created.
     */
    CreatedTime?: DateTime;
    /**
     * The time when the fleet was last updated.
     */
    LastUpdatedTime?: DateTime;
    /**
     * The name of the fleet.
     */
    FleetName?: FleetName;
    /**
     * The name to display.
     */
    DisplayName?: DisplayName;
    /**
     * The identifier used by users to sign into the Amazon WorkLink app.
     */
    CompanyCode?: CompanyCode;
    /**
     * The status of the fleet.
     */
    FleetStatus?: FleetStatus;
  }
  export type FleetSummaryList = FleetSummary[];
  export type Id = string;
  export type IdentityProviderType = "SAML"|string;
  export interface ListDevicesRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
    /**
     * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to be included in the next page.
     */
    MaxResults?: MaxResults;
  }
  export interface ListDevicesResponse {
    /**
     * Information about the devices.
     */
    Devices?: DeviceSummaryList;
    /**
     * The pagination token used to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: NextToken;
  }
  export interface ListFleetsRequest {
    /**
     * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to be included in the next page.
     */
    MaxResults?: MaxResults;
  }
  export interface ListFleetsResponse {
    /**
     * The summary list of the fleets.
     */
    FleetSummaryList?: FleetSummaryList;
    /**
     * The pagination token used to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: NextToken;
  }
  export interface ListWebsiteCertificateAuthoritiesRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
    /**
     * The maximum number of results to be included in the next page.
     */
    MaxResults?: MaxResults;
    /**
     * The pagination token used to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.
     */
    NextToken?: NextToken;
  }
  export interface ListWebsiteCertificateAuthoritiesResponse {
    /**
     * Information about the certificates.
     */
    WebsiteCertificateAuthorities?: WebsiteCaSummaryList;
    /**
     * The pagination token used to retrieve the next page of results for this operation. If there are no more pages, this value is null.
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export type SamlMetadata = string;
  export type SecurityGroupId = string;
  export type SecurityGroupIds = SecurityGroupId[];
  export interface SignOutUserRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
    /**
     * The name of the user.
     */
    Username: Username;
  }
  export interface SignOutUserResponse {
  }
  export type SubnetId = string;
  export type SubnetIds = SubnetId[];
  export interface UpdateAuditStreamConfigurationRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
    /**
     * The ARN of the Amazon Kinesis data stream that receives the audit events.
     */
    AuditStreamArn?: AuditStreamArn;
  }
  export interface UpdateAuditStreamConfigurationResponse {
  }
  export interface UpdateCompanyNetworkConfigurationRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
    /**
     * The VPC with connectivity to associated websites.
     */
    VpcId: VpcId;
    /**
     * The subnets used for X-ENI connections from Amazon WorkLink rendering containers.
     */
    SubnetIds: SubnetIds;
    /**
     * The security groups associated with access to the provided subnets.
     */
    SecurityGroupIds: SecurityGroupIds;
  }
  export interface UpdateCompanyNetworkConfigurationResponse {
  }
  export interface UpdateDevicePolicyConfigurationRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
    /**
     * The certificate chain, including intermediate certificates and the root certificate authority certificate used to issue device certificates.
     */
    DeviceCaCertificate?: CertificateChain;
  }
  export interface UpdateDevicePolicyConfigurationResponse {
  }
  export interface UpdateFleetMetadataRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
    /**
     * The fleet name to display. The existing DisplayName is unset if null is passed.
     */
    DisplayName?: DisplayName;
    /**
     * The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.
     */
    OptimizeForEndUserLocation?: Boolean;
  }
  export interface UpdateFleetMetadataResponse {
  }
  export interface UpdateIdentityProviderConfigurationRequest {
    /**
     * The ARN of the fleet.
     */
    FleetArn: FleetArn;
    /**
     * The type of identity provider.
     */
    IdentityProviderType: IdentityProviderType;
    /**
     * The SAML metadata document provided by the customer’s identity provider. The existing IdentityProviderSamlMetadata is unset if null is passed.
     */
    IdentityProviderSamlMetadata?: SamlMetadata;
  }
  export interface UpdateIdentityProviderConfigurationResponse {
  }
  export type Username = string;
  export type VpcId = string;
  export interface WebsiteCaSummary {
    /**
     * A unique identifier for the CA.
     */
    WebsiteCaId?: Id;
    /**
     * The time when the CA was added.
     */
    CreatedTime?: DateTime;
    /**
     * The name to display.
     */
    DisplayName?: DisplayName;
  }
  export type WebsiteCaSummaryList = WebsiteCaSummary[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-09-25"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the WorkLink client.
   */
  export import Types = WorkLink;
}
export = WorkLink;
