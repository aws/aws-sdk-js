import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Account extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Account.Types.ClientConfiguration)
  config: Config & Account.Types.ClientConfiguration;
  /**
   * Deletes the specified alternate contact from an Amazon Web Services account. For complete details about how to use the alternate contact operations, see Access or updating the alternate contacts.  Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see Enabling trusted access for Amazon Web Services Account Management. 
   */
  deleteAlternateContact(params: Account.Types.DeleteAlternateContactRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified alternate contact from an Amazon Web Services account. For complete details about how to use the alternate contact operations, see Access or updating the alternate contacts.  Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see Enabling trusted access for Amazon Web Services Account Management. 
   */
  deleteAlternateContact(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves the specified alternate contact attached to an Amazon Web Services account. For complete details about how to use the alternate contact operations, see Access or updating the alternate contacts.  Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see Enabling trusted access for Amazon Web Services Account Management. 
   */
  getAlternateContact(params: Account.Types.GetAlternateContactRequest, callback?: (err: AWSError, data: Account.Types.GetAlternateContactResponse) => void): Request<Account.Types.GetAlternateContactResponse, AWSError>;
  /**
   * Retrieves the specified alternate contact attached to an Amazon Web Services account. For complete details about how to use the alternate contact operations, see Access or updating the alternate contacts.  Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see Enabling trusted access for Amazon Web Services Account Management. 
   */
  getAlternateContact(callback?: (err: AWSError, data: Account.Types.GetAlternateContactResponse) => void): Request<Account.Types.GetAlternateContactResponse, AWSError>;
  /**
   * Retrieves the primary contact information of an Amazon Web Services account. For complete details about how to use the primary contact operations, see Update the primary and alternate contact information.
   */
  getContactInformation(params: Account.Types.GetContactInformationRequest, callback?: (err: AWSError, data: Account.Types.GetContactInformationResponse) => void): Request<Account.Types.GetContactInformationResponse, AWSError>;
  /**
   * Retrieves the primary contact information of an Amazon Web Services account. For complete details about how to use the primary contact operations, see Update the primary and alternate contact information.
   */
  getContactInformation(callback?: (err: AWSError, data: Account.Types.GetContactInformationResponse) => void): Request<Account.Types.GetContactInformationResponse, AWSError>;
  /**
   * Modifies the specified alternate contact attached to an Amazon Web Services account. For complete details about how to use the alternate contact operations, see Access or updating the alternate contacts.  Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see Enabling trusted access for Amazon Web Services Account Management. 
   */
  putAlternateContact(params: Account.Types.PutAlternateContactRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Modifies the specified alternate contact attached to an Amazon Web Services account. For complete details about how to use the alternate contact operations, see Access or updating the alternate contacts.  Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see Enabling trusted access for Amazon Web Services Account Management. 
   */
  putAlternateContact(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the primary contact information of an Amazon Web Services account. For complete details about how to use the primary contact operations, see Update the primary and alternate contact information.
   */
  putContactInformation(params: Account.Types.PutContactInformationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the primary contact information of an Amazon Web Services account. For complete details about how to use the primary contact operations, see Update the primary and alternate contact information.
   */
  putContactInformation(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace Account {
  export type AccountId = string;
  export type AddressLine = string;
  export interface AlternateContact {
    /**
     * The type of alternate contact.
     */
    AlternateContactType?: AlternateContactType;
    /**
     * The email address associated with this alternate contact.
     */
    EmailAddress?: EmailAddress;
    /**
     * The name associated with this alternate contact.
     */
    Name?: Name;
    /**
     * The phone number associated with this alternate contact.
     */
    PhoneNumber?: PhoneNumber;
    /**
     * The title associated with this alternate contact.
     */
    Title?: Title;
  }
  export type AlternateContactType = "BILLING"|"OPERATIONS"|"SECURITY"|string;
  export type City = string;
  export type CompanyName = string;
  export interface ContactInformation {
    /**
     * The first line of the primary contact address.
     */
    AddressLine1: AddressLine;
    /**
     * The second line of the primary contact address, if any.
     */
    AddressLine2?: AddressLine;
    /**
     * The third line of the primary contact address, if any.
     */
    AddressLine3?: AddressLine;
    /**
     * The city of the primary contact address.
     */
    City: City;
    /**
     * The name of the company associated with the primary contact information, if any.
     */
    CompanyName?: CompanyName;
    /**
     * The ISO-3166 two-letter country code for the primary contact address.
     */
    CountryCode: CountryCode;
    /**
     * The district or county of the primary contact address, if any.
     */
    DistrictOrCounty?: DistrictOrCounty;
    /**
     * The full name of the primary contact address.
     */
    FullName: FullName;
    /**
     * The phone number of the primary contact information. The number will be validated and, in some countries, checked for activation.
     */
    PhoneNumber: ContactInformationPhoneNumber;
    /**
     * The postal code of the primary contact address.
     */
    PostalCode: PostalCode;
    /**
     * The state or region of the primary contact address. This field is required in selected countries.
     */
    StateOrRegion?: StateOrRegion;
    /**
     * The URL of the website associated with the primary contact information, if any.
     */
    WebsiteUrl?: WebsiteUrl;
  }
  export type ContactInformationPhoneNumber = string;
  export type CountryCode = string;
  export interface DeleteAlternateContactRequest {
    /**
     * Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the organization's management account or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have all features enabled, and the organization must have trusted access enabled for the Account Management service, and optionally a delegated admin account assigned.  The management account can't specify its own AccountId; it must call the operation in standalone context by not including the AccountId parameter.  To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
     */
    AccountId?: AccountId;
    /**
     * Specifies which of the alternate contacts to delete. 
     */
    AlternateContactType: AlternateContactType;
  }
  export type DistrictOrCounty = string;
  export type EmailAddress = string;
  export type FullName = string;
  export interface GetAlternateContactRequest {
    /**
     * Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the organization's management account or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have all features enabled, and the organization must have trusted access enabled for the Account Management service, and optionally a delegated admin account assigned.  The management account can't specify its own AccountId; it must call the operation in standalone context by not including the AccountId parameter.  To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
     */
    AccountId?: AccountId;
    /**
     * Specifies which alternate contact you want to retrieve.
     */
    AlternateContactType: AlternateContactType;
  }
  export interface GetAlternateContactResponse {
    /**
     * A structure that contains the details for the specified alternate contact.
     */
    AlternateContact?: AlternateContact;
  }
  export interface GetContactInformationRequest {
    /**
     * Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the organization's management account or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have all features enabled, and the organization must have trusted access enabled for the Account Management service, and optionally a delegated admin account assigned.  The management account can't specify its own AccountId. It must call the operation in standalone context by not including the AccountId parameter.  To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
     */
    AccountId?: AccountId;
  }
  export interface GetContactInformationResponse {
    /**
     * Contains the details of the primary contact information associated with an Amazon Web Services account.
     */
    ContactInformation?: ContactInformation;
  }
  export type Name = string;
  export type PhoneNumber = string;
  export type PostalCode = string;
  export interface PutAlternateContactRequest {
    /**
     * Specifies the 12 digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you do not specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the organization's management account or a delegated administrator account, and the specified account ID must be a member account in the same organization. The organization must have all features enabled, and the organization must have trusted access enabled for the Account Management service, and optionally a delegated admin account assigned.  The management account can't specify its own AccountId; it must call the operation in standalone context by not including the AccountId parameter.  To call this operation on an account that is not a member of an organization, then don't specify this parameter, and call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
     */
    AccountId?: AccountId;
    /**
     * Specifies which alternate contact you want to create or update.
     */
    AlternateContactType: AlternateContactType;
    /**
     * Specifies an email address for the alternate contact. 
     */
    EmailAddress: EmailAddress;
    /**
     * Specifies a name for the alternate contact.
     */
    Name: Name;
    /**
     * Specifies a phone number for the alternate contact.
     */
    PhoneNumber: PhoneNumber;
    /**
     * Specifies a title for the alternate contact.
     */
    Title: Title;
  }
  export interface PutContactInformationRequest {
    /**
     * Specifies the 12-digit account ID number of the Amazon Web Services account that you want to access or modify with this operation. If you don't specify this parameter, it defaults to the Amazon Web Services account of the identity used to call the operation. To use this parameter, the caller must be an identity in the organization's management account or a delegated administrator account. The specified account ID must also be a member account in the same organization. The organization must have all features enabled, and the organization must have trusted access enabled for the Account Management service, and optionally a delegated admin account assigned.  The management account can't specify its own AccountId. It must call the operation in standalone context by not including the AccountId parameter.  To call this operation on an account that is not a member of an organization, don't specify this parameter. Instead, call the operation using an identity belonging to the account whose contacts you wish to retrieve or modify.
     */
    AccountId?: AccountId;
    /**
     * Contains the details of the primary contact information associated with an Amazon Web Services account.
     */
    ContactInformation: ContactInformation;
  }
  export type StateOrRegion = string;
  export type Title = string;
  export type WebsiteUrl = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2021-02-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Account client.
   */
  export import Types = Account;
}
export = Account;
