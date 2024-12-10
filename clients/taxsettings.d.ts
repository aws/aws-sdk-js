import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class TaxSettings extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: TaxSettings.Types.ClientConfiguration)
  config: Config & TaxSettings.Types.ClientConfiguration;
  /**
   * Deletes tax registration for multiple accounts in batch. This can be used to delete tax registrations for up to five accounts in one batch.   This API operation can't be used to delete your tax registration in Brazil. Use the Payment preferences page in the Billing and Cost Management console instead. 
   */
  batchDeleteTaxRegistration(params: TaxSettings.Types.BatchDeleteTaxRegistrationRequest, callback?: (err: AWSError, data: TaxSettings.Types.BatchDeleteTaxRegistrationResponse) => void): Request<TaxSettings.Types.BatchDeleteTaxRegistrationResponse, AWSError>;
  /**
   * Deletes tax registration for multiple accounts in batch. This can be used to delete tax registrations for up to five accounts in one batch.   This API operation can't be used to delete your tax registration in Brazil. Use the Payment preferences page in the Billing and Cost Management console instead. 
   */
  batchDeleteTaxRegistration(callback?: (err: AWSError, data: TaxSettings.Types.BatchDeleteTaxRegistrationResponse) => void): Request<TaxSettings.Types.BatchDeleteTaxRegistrationResponse, AWSError>;
  /**
   * Adds or updates tax registration for multiple accounts in batch. This can be used to add or update tax registrations for up to five accounts in one batch. You can't set a TRN if there's a pending TRN. You'll need to delete the pending TRN first. To call this API operation for specific countries, see the following country-specific requirements.  Bangladesh    You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Brazil    You must complete the tax registration process in the Payment preferences page in the Billing and Cost Management console. After your TRN and billing address are verified, you can call this API operation.   For Amazon Web Services accounts created through Organizations, you can call this API operation when you don't have a billing address.    Georgia    The valid personType values are Physical Person and Business.    Kenya    You must specify the personType in the kenyaAdditionalInfo field of the additionalTaxInformation object.   If the personType is Physical Person, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Malaysia    If you use this operation to set a tax registration number (TRN) in Malaysia, only resellers with a valid sales and service tax (SST) number are required to provide tax registration information.   By using this API operation to set a TRN in Malaysia, Amazon Web Services will regard you as self-declaring that you're an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD) and have a valid SST number.   Amazon Web Services reserves the right to seek additional information and/or take other actions to support your self-declaration as appropriate.   If you're not a reseller of Amazon Web Services, we don't recommend that you use this operation to set the TRN in Malaysia.   Only use this API operation to upload the TRNs for accounts through which you're reselling Amazon Web Services.   Amazon Web Services is currently registered under the following service tax codes. You must include at least one of the service tax codes in the service tax code strings to declare yourself as an authorized registered business reseller. Taxable service and service tax codes: Consultancy - 9907061674 Training or coaching service - 9907071685 IT service - 9907101676 Digital services and electronic medium - 9907121690    Nepal    The sector valid values are Business and Individual.    Saudi Arabia    For address, you must specify addressLine3.    South Korea    You must specify the certifiedEmailId and legalName in the TaxRegistrationEntry object. Use Korean characters for legalName.   You must specify the businessRepresentativeName, itemOfBusiness, and lineOfBusiness in the southKoreaAdditionalInfo field of the additionalTaxInformation object. Use Korean characters for these fields.   You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.   For the address object, use Korean characters for addressLine1, addressLine2 city, postalCode, and stateOrRegion.    Spain    You must specify the registrationType in the spainAdditionalInfo field of the additionalTaxInformation object.   If the registrationType is Local, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Turkey    You must specify the sector in the taxRegistrationEntry object.   If your sector is Business, Individual, or Government:   Specify the taxOffice. If your sector is Individual, don't enter this value.   (Optional) Specify the kepEmailId. If your sector is Individual, don't enter this value.    Note: In the Tax Settings page of the Billing console, Government appears as Public institutions      If your sector is Business and you're subject to KDV tax, you must specify your industry in the industries field.   For address, you must specify districtOrCounty.    Ukraine    The sector valid values are Business and Individual.  
   */
  batchPutTaxRegistration(params: TaxSettings.Types.BatchPutTaxRegistrationRequest, callback?: (err: AWSError, data: TaxSettings.Types.BatchPutTaxRegistrationResponse) => void): Request<TaxSettings.Types.BatchPutTaxRegistrationResponse, AWSError>;
  /**
   * Adds or updates tax registration for multiple accounts in batch. This can be used to add or update tax registrations for up to five accounts in one batch. You can't set a TRN if there's a pending TRN. You'll need to delete the pending TRN first. To call this API operation for specific countries, see the following country-specific requirements.  Bangladesh    You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Brazil    You must complete the tax registration process in the Payment preferences page in the Billing and Cost Management console. After your TRN and billing address are verified, you can call this API operation.   For Amazon Web Services accounts created through Organizations, you can call this API operation when you don't have a billing address.    Georgia    The valid personType values are Physical Person and Business.    Kenya    You must specify the personType in the kenyaAdditionalInfo field of the additionalTaxInformation object.   If the personType is Physical Person, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Malaysia    If you use this operation to set a tax registration number (TRN) in Malaysia, only resellers with a valid sales and service tax (SST) number are required to provide tax registration information.   By using this API operation to set a TRN in Malaysia, Amazon Web Services will regard you as self-declaring that you're an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD) and have a valid SST number.   Amazon Web Services reserves the right to seek additional information and/or take other actions to support your self-declaration as appropriate.   If you're not a reseller of Amazon Web Services, we don't recommend that you use this operation to set the TRN in Malaysia.   Only use this API operation to upload the TRNs for accounts through which you're reselling Amazon Web Services.   Amazon Web Services is currently registered under the following service tax codes. You must include at least one of the service tax codes in the service tax code strings to declare yourself as an authorized registered business reseller. Taxable service and service tax codes: Consultancy - 9907061674 Training or coaching service - 9907071685 IT service - 9907101676 Digital services and electronic medium - 9907121690    Nepal    The sector valid values are Business and Individual.    Saudi Arabia    For address, you must specify addressLine3.    South Korea    You must specify the certifiedEmailId and legalName in the TaxRegistrationEntry object. Use Korean characters for legalName.   You must specify the businessRepresentativeName, itemOfBusiness, and lineOfBusiness in the southKoreaAdditionalInfo field of the additionalTaxInformation object. Use Korean characters for these fields.   You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.   For the address object, use Korean characters for addressLine1, addressLine2 city, postalCode, and stateOrRegion.    Spain    You must specify the registrationType in the spainAdditionalInfo field of the additionalTaxInformation object.   If the registrationType is Local, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Turkey    You must specify the sector in the taxRegistrationEntry object.   If your sector is Business, Individual, or Government:   Specify the taxOffice. If your sector is Individual, don't enter this value.   (Optional) Specify the kepEmailId. If your sector is Individual, don't enter this value.    Note: In the Tax Settings page of the Billing console, Government appears as Public institutions      If your sector is Business and you're subject to KDV tax, you must specify your industry in the industries field.   For address, you must specify districtOrCounty.    Ukraine    The sector valid values are Business and Individual.  
   */
  batchPutTaxRegistration(callback?: (err: AWSError, data: TaxSettings.Types.BatchPutTaxRegistrationResponse) => void): Request<TaxSettings.Types.BatchPutTaxRegistrationResponse, AWSError>;
  /**
   * Deletes tax registration for a single account.   This API operation can't be used to delete your tax registration in Brazil. Use the Payment preferences page in the Billing and Cost Management console instead. 
   */
  deleteTaxRegistration(params: TaxSettings.Types.DeleteTaxRegistrationRequest, callback?: (err: AWSError, data: TaxSettings.Types.DeleteTaxRegistrationResponse) => void): Request<TaxSettings.Types.DeleteTaxRegistrationResponse, AWSError>;
  /**
   * Deletes tax registration for a single account.   This API operation can't be used to delete your tax registration in Brazil. Use the Payment preferences page in the Billing and Cost Management console instead. 
   */
  deleteTaxRegistration(callback?: (err: AWSError, data: TaxSettings.Types.DeleteTaxRegistrationResponse) => void): Request<TaxSettings.Types.DeleteTaxRegistrationResponse, AWSError>;
  /**
   * Retrieves tax registration for a single account.
   */
  getTaxRegistration(params: TaxSettings.Types.GetTaxRegistrationRequest, callback?: (err: AWSError, data: TaxSettings.Types.GetTaxRegistrationResponse) => void): Request<TaxSettings.Types.GetTaxRegistrationResponse, AWSError>;
  /**
   * Retrieves tax registration for a single account.
   */
  getTaxRegistration(callback?: (err: AWSError, data: TaxSettings.Types.GetTaxRegistrationResponse) => void): Request<TaxSettings.Types.GetTaxRegistrationResponse, AWSError>;
  /**
   * Downloads your tax documents to the Amazon S3 bucket that you specify in your request.
   */
  getTaxRegistrationDocument(params: TaxSettings.Types.GetTaxRegistrationDocumentRequest, callback?: (err: AWSError, data: TaxSettings.Types.GetTaxRegistrationDocumentResponse) => void): Request<TaxSettings.Types.GetTaxRegistrationDocumentResponse, AWSError>;
  /**
   * Downloads your tax documents to the Amazon S3 bucket that you specify in your request.
   */
  getTaxRegistrationDocument(callback?: (err: AWSError, data: TaxSettings.Types.GetTaxRegistrationDocumentResponse) => void): Request<TaxSettings.Types.GetTaxRegistrationDocumentResponse, AWSError>;
  /**
   * Retrieves the tax registration of accounts listed in a consolidated billing family. This can be used to retrieve up to 100 accounts' tax registrations in one call (default 50). 
   */
  listTaxRegistrations(params: TaxSettings.Types.ListTaxRegistrationsRequest, callback?: (err: AWSError, data: TaxSettings.Types.ListTaxRegistrationsResponse) => void): Request<TaxSettings.Types.ListTaxRegistrationsResponse, AWSError>;
  /**
   * Retrieves the tax registration of accounts listed in a consolidated billing family. This can be used to retrieve up to 100 accounts' tax registrations in one call (default 50). 
   */
  listTaxRegistrations(callback?: (err: AWSError, data: TaxSettings.Types.ListTaxRegistrationsResponse) => void): Request<TaxSettings.Types.ListTaxRegistrationsResponse, AWSError>;
  /**
   * Adds or updates tax registration for a single account. You can't set a TRN if there's a pending TRN. You'll need to delete the pending TRN first. To call this API operation for specific countries, see the following country-specific requirements.  Bangladesh    You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Brazil    You must complete the tax registration process in the Payment preferences page in the Billing and Cost Management console. After your TRN and billing address are verified, you can call this API operation.   For Amazon Web Services accounts created through Organizations, you can call this API operation when you don't have a billing address.    Georgia    The valid personType values are Physical Person and Business.    Kenya    You must specify the personType in the kenyaAdditionalInfo field of the additionalTaxInformation object.   If the personType is Physical Person, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Malaysia    If you use this operation to set a tax registration number (TRN) in Malaysia, only resellers with a valid sales and service tax (SST) number are required to provide tax registration information.   By using this API operation to set a TRN in Malaysia, Amazon Web Services will regard you as self-declaring that you're an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD) and have a valid SST number.   Amazon Web Services reserves the right to seek additional information and/or take other actions to support your self-declaration as appropriate.   If you're not a reseller of Amazon Web Services, we don't recommend that you use this operation to set the TRN in Malaysia.   Only use this API operation to upload the TRNs for accounts through which you're reselling Amazon Web Services.   Amazon Web Services is currently registered under the following service tax codes. You must include at least one of the service tax codes in the service tax code strings to declare yourself as an authorized registered business reseller. Taxable service and service tax codes: Consultancy - 9907061674 Training or coaching service - 9907071685 IT service - 9907101676 Digital services and electronic medium - 9907121690    Nepal    The sector valid values are Business and Individual.    Saudi Arabia    For address, you must specify addressLine3.    South Korea    You must specify the certifiedEmailId and legalName in the TaxRegistrationEntry object. Use Korean characters for legalName.   You must specify the businessRepresentativeName, itemOfBusiness, and lineOfBusiness in the southKoreaAdditionalInfo field of the additionalTaxInformation object. Use Korean characters for these fields.   You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.   For the address object, use Korean characters for addressLine1, addressLine2 city, postalCode, and stateOrRegion.    Spain    You must specify the registrationType in the spainAdditionalInfo field of the additionalTaxInformation object.   If the registrationType is Local, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Turkey    You must specify the sector in the taxRegistrationEntry object.   If your sector is Business, Individual, or Government:   Specify the taxOffice. If your sector is Individual, don't enter this value.   (Optional) Specify the kepEmailId. If your sector is Individual, don't enter this value.    Note: In the Tax Settings page of the Billing console, Government appears as Public institutions      If your sector is Business and you're subject to KDV tax, you must specify your industry in the industries field.   For address, you must specify districtOrCounty.    Ukraine    The sector valid values are Business and Individual.  
   */
  putTaxRegistration(params: TaxSettings.Types.PutTaxRegistrationRequest, callback?: (err: AWSError, data: TaxSettings.Types.PutTaxRegistrationResponse) => void): Request<TaxSettings.Types.PutTaxRegistrationResponse, AWSError>;
  /**
   * Adds or updates tax registration for a single account. You can't set a TRN if there's a pending TRN. You'll need to delete the pending TRN first. To call this API operation for specific countries, see the following country-specific requirements.  Bangladesh    You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Brazil    You must complete the tax registration process in the Payment preferences page in the Billing and Cost Management console. After your TRN and billing address are verified, you can call this API operation.   For Amazon Web Services accounts created through Organizations, you can call this API operation when you don't have a billing address.    Georgia    The valid personType values are Physical Person and Business.    Kenya    You must specify the personType in the kenyaAdditionalInfo field of the additionalTaxInformation object.   If the personType is Physical Person, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Malaysia    If you use this operation to set a tax registration number (TRN) in Malaysia, only resellers with a valid sales and service tax (SST) number are required to provide tax registration information.   By using this API operation to set a TRN in Malaysia, Amazon Web Services will regard you as self-declaring that you're an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD) and have a valid SST number.   Amazon Web Services reserves the right to seek additional information and/or take other actions to support your self-declaration as appropriate.   If you're not a reseller of Amazon Web Services, we don't recommend that you use this operation to set the TRN in Malaysia.   Only use this API operation to upload the TRNs for accounts through which you're reselling Amazon Web Services.   Amazon Web Services is currently registered under the following service tax codes. You must include at least one of the service tax codes in the service tax code strings to declare yourself as an authorized registered business reseller. Taxable service and service tax codes: Consultancy - 9907061674 Training or coaching service - 9907071685 IT service - 9907101676 Digital services and electronic medium - 9907121690    Nepal    The sector valid values are Business and Individual.    Saudi Arabia    For address, you must specify addressLine3.    South Korea    You must specify the certifiedEmailId and legalName in the TaxRegistrationEntry object. Use Korean characters for legalName.   You must specify the businessRepresentativeName, itemOfBusiness, and lineOfBusiness in the southKoreaAdditionalInfo field of the additionalTaxInformation object. Use Korean characters for these fields.   You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.   For the address object, use Korean characters for addressLine1, addressLine2 city, postalCode, and stateOrRegion.    Spain    You must specify the registrationType in the spainAdditionalInfo field of the additionalTaxInformation object.   If the registrationType is Local, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object.    Turkey    You must specify the sector in the taxRegistrationEntry object.   If your sector is Business, Individual, or Government:   Specify the taxOffice. If your sector is Individual, don't enter this value.   (Optional) Specify the kepEmailId. If your sector is Individual, don't enter this value.    Note: In the Tax Settings page of the Billing console, Government appears as Public institutions      If your sector is Business and you're subject to KDV tax, you must specify your industry in the industries field.   For address, you must specify districtOrCounty.    Ukraine    The sector valid values are Business and Individual.  
   */
  putTaxRegistration(callback?: (err: AWSError, data: TaxSettings.Types.PutTaxRegistrationResponse) => void): Request<TaxSettings.Types.PutTaxRegistrationResponse, AWSError>;
}
declare namespace TaxSettings {
  export interface AccountDetails {
    /**
     * List of unique account identifiers. 
     */
    accountId?: AccountId;
    /**
     *  The meta data information associated with the account. 
     */
    accountMetaData?: AccountMetaData;
    /**
     *  Tax inheritance information associated with the account. 
     */
    taxInheritanceDetails?: TaxInheritanceDetails;
    /**
     * Your TRN information. Instead of having full legal address, here TRN information will have jurisdiction details (for example, country code and state/region/province if applicable). 
     */
    taxRegistration?: TaxRegistrationWithJurisdiction;
  }
  export type AccountDetailsList = AccountDetails[];
  export type AccountId = string;
  export type AccountIds = AccountId[];
  export interface AccountMetaData {
    /**
     *  The Amazon Web Services accounts name. 
     */
    accountName?: AccountName;
    address?: Address;
    /**
     *  Address roles associated with the account containing country code information. 
     */
    addressRoleMap?: AddressRoleMap;
    /**
     *  The type of address associated with the legal profile. 
     */
    addressType?: AddressRoleType;
    /**
     *  Seller information associated with the account. 
     */
    seller?: Seller;
  }
  export type AccountName = string;
  export interface AdditionalInfoRequest {
    /**
     *  Additional tax information associated with your TRN in Canada.
     */
    canadaAdditionalInfo?: CanadaAdditionalInfo;
    /**
     *  Additional tax information to specify for a TRN in Estonia.
     */
    estoniaAdditionalInfo?: EstoniaAdditionalInfo;
    /**
     *  Additional tax information to specify for a TRN in Georgia. 
     */
    georgiaAdditionalInfo?: GeorgiaAdditionalInfo;
    /**
     *  Additional tax information to specify for a TRN in Israel.
     */
    israelAdditionalInfo?: IsraelAdditionalInfo;
    /**
     *  Additional tax information to specify for a TRN in Italy. 
     */
    italyAdditionalInfo?: ItalyAdditionalInfo;
    /**
     * Additional tax information to specify for a TRN in Kenya.
     */
    kenyaAdditionalInfo?: KenyaAdditionalInfo;
    /**
     *  Additional tax information to specify for a TRN in Malaysia.
     */
    malaysiaAdditionalInfo?: MalaysiaAdditionalInfo;
    /**
     *  Additional tax information associated with your TRN in Poland. 
     */
    polandAdditionalInfo?: PolandAdditionalInfo;
    /**
     * Additional tax information to specify for a TRN in Romania.
     */
    romaniaAdditionalInfo?: RomaniaAdditionalInfo;
    /**
     *  Additional tax information associated with your TRN in Saudi Arabia. 
     */
    saudiArabiaAdditionalInfo?: SaudiArabiaAdditionalInfo;
    /**
     * Additional tax information to specify for a TRN in South Korea.
     */
    southKoreaAdditionalInfo?: SouthKoreaAdditionalInfo;
    /**
     * Additional tax information to specify for a TRN in Spain.
     */
    spainAdditionalInfo?: SpainAdditionalInfo;
    /**
     * Additional tax information to specify for a TRN in Turkey.
     */
    turkeyAdditionalInfo?: TurkeyAdditionalInfo;
    /**
     *  Additional tax information associated with your TRN in Ukraine. 
     */
    ukraineAdditionalInfo?: UkraineAdditionalInfo;
  }
  export interface AdditionalInfoResponse {
    /**
     * Additional tax information associated with your TRN in Brazil. The Tax Settings API returns this information in your response when any additional information is present with your TRN in Brazil.
     */
    brazilAdditionalInfo?: BrazilAdditionalInfo;
    /**
     * Additional tax information associated with your TRN in Canada. 
     */
    canadaAdditionalInfo?: CanadaAdditionalInfo;
    /**
     *  Additional tax information associated with your TRN in Estonia. 
     */
    estoniaAdditionalInfo?: EstoniaAdditionalInfo;
    /**
     *  Additional tax information associated with your TRN in Georgia. 
     */
    georgiaAdditionalInfo?: GeorgiaAdditionalInfo;
    /**
     *  Additional tax information in India. 
     */
    indiaAdditionalInfo?: IndiaAdditionalInfo;
    /**
     *  Additional tax information associated with your TRN in Israel.
     */
    israelAdditionalInfo?: IsraelAdditionalInfo;
    /**
     *  Additional tax information associated with your TRN in Italy. 
     */
    italyAdditionalInfo?: ItalyAdditionalInfo;
    /**
     * Additional tax information associated with your TRN in Kenya.
     */
    kenyaAdditionalInfo?: KenyaAdditionalInfo;
    /**
     *  Additional tax information associated with your TRN in Malaysia. 
     */
    malaysiaAdditionalInfo?: MalaysiaAdditionalInfo;
    /**
     *  Additional tax information associated with your TRN in Poland. 
     */
    polandAdditionalInfo?: PolandAdditionalInfo;
    /**
     * Additional tax information to specify for a TRN in Romania.
     */
    romaniaAdditionalInfo?: RomaniaAdditionalInfo;
    /**
     *  Additional tax information associated with your TRN in Saudi Arabia. 
     */
    saudiArabiaAdditionalInfo?: SaudiArabiaAdditionalInfo;
    /**
     * Additional tax information associated with your TRN in South Korea.
     */
    southKoreaAdditionalInfo?: SouthKoreaAdditionalInfo;
    /**
     * Additional tax information associated with your TRN in Spain.
     */
    spainAdditionalInfo?: SpainAdditionalInfo;
    /**
     * Additional tax information associated with your TRN in Turkey.
     */
    turkeyAdditionalInfo?: TurkeyAdditionalInfo;
    /**
     *  Additional tax information associated with your TRN in Ukraine. 
     */
    ukraineAdditionalInfo?: UkraineAdditionalInfo;
  }
  export interface Address {
    /**
     * The first line of the address. 
     */
    addressLine1: AddressLine1;
    /**
     * The second line of the address, if applicable. 
     */
    addressLine2?: AddressLine2;
    /**
     *  The third line of the address, if applicable. Currently, the Tax Settings API accepts the addressLine3 parameter only for Saudi Arabia. When you specify a TRN in Saudi Arabia, you must enter the addressLine3 and specify the building number for the address. For example, you might enter 1234.
     */
    addressLine3?: AddressLine3;
    /**
     * The city that the address is in. 
     */
    city: City;
    /**
     * The country code for the country that the address is in. 
     */
    countryCode: CountryCode;
    /**
     * The district or county the address is located.   For addresses in Brazil, this parameter uses the name of the neighborhood. When you set a TRN in Brazil, use districtOrCounty for the neighborhood name. 
     */
    districtOrCounty?: District;
    /**
     *  The postal code associated with the address. 
     */
    postalCode: PostalCode;
    /**
     * The state, region, or province that the address is located. If this is required for tax settings, use the same name as shown on the Tax Settings page.
     */
    stateOrRegion?: State;
  }
  export type AddressLine1 = string;
  export type AddressLine2 = string;
  export type AddressLine3 = string;
  export type AddressRoleMap = {[key: string]: Jurisdiction};
  export type AddressRoleType = "TaxAddress"|"BillingAddress"|"ContactAddress"|string;
  export interface BatchDeleteTaxRegistrationError {
    /**
     *  The unique account identifier for the account whose tax registration couldn't be deleted during the BatchDeleteTaxRegistration operation. 
     */
    accountId: AccountId;
    /**
     *  The error code for an individual failure in BatchDeleteTaxRegistration operation. 
     */
    code?: ErrorCode;
    /**
     *  The error message for an individual failure in the BatchDeleteTaxRegistration operation. 
     */
    message: ErrorMessage;
  }
  export type BatchDeleteTaxRegistrationErrors = BatchDeleteTaxRegistrationError[];
  export interface BatchDeleteTaxRegistrationRequest {
    /**
     * List of unique account identifiers. 
     */
    accountIds: AccountIds;
  }
  export interface BatchDeleteTaxRegistrationResponse {
    /**
     * The list of errors for the accounts the TRN information could not be deleted for. 
     */
    errors: BatchDeleteTaxRegistrationErrors;
  }
  export interface BatchPutTaxRegistrationError {
    /**
     *  The unique account identifier for the account that the tax registration couldn't be added, or updated during the BatchPutTaxRegistration operation. 
     */
    accountId: AccountId;
    /**
     *  The error code for an individual failure in the BatchPutTaxRegistration operation. 
     */
    code?: ErrorCode;
    /**
     *  The error message for an individual failure in the BatchPutTaxRegistration operation. 
     */
    message: ErrorMessage;
  }
  export type BatchPutTaxRegistrationErrors = BatchPutTaxRegistrationError[];
  export interface BatchPutTaxRegistrationRequest {
    /**
     *  List of unique account identifiers.
     */
    accountIds: AccountIds;
    /**
     * Your TRN information that will be stored to the accounts mentioned in putEntries. 
     */
    taxRegistrationEntry: TaxRegistrationEntry;
  }
  export interface BatchPutTaxRegistrationResponse {
    /**
     * List of errors for the accounts the TRN information could not be added or updated to. 
     */
    errors: BatchPutTaxRegistrationErrors;
    /**
     * The status of your TRN stored in the system after processing. Based on the validation occurring on the TRN, the status can be Verified, Pending or Rejected. 
     */
    status?: TaxRegistrationStatus;
  }
  export type Boolean = boolean;
  export interface BrazilAdditionalInfo {
    /**
     * The Cadastro de Contribuintes Mobiliários (CCM) code for your TRN in Brazil. This only applies for a CNPJ tax type for the São Paulo municipality.
     */
    ccmCode?: CcmCode;
    /**
     * Legal nature of business, based on your TRN in Brazil. This only applies for a CNPJ tax type.
     */
    legalNatureCode?: LegalNatureCode;
  }
  export type BusinessRepresentativeName = string;
  export interface CanadaAdditionalInfo {
    /**
     *  The Quebec Sales Tax ID number. Leave blank if you do not have a Quebec Sales Tax ID number. 
     */
    canadaQuebecSalesTaxNumber?: CanadaQuebecSalesTaxNumberString;
    /**
     *  Manitoba Retail Sales Tax ID number. Customers purchasing Amazon Web Services for resale in Manitoba must provide a valid Retail Sales Tax ID number for Manitoba. Leave this blank if you do not have a Retail Sales Tax ID number in Manitoba or are not purchasing Amazon Web Services for resale. 
     */
    canadaRetailSalesTaxNumber?: CanadaRetailSalesTaxNumberString;
    /**
     *  The value for this parameter must be true if the provincialSalesTaxId value is provided for a TRN in British Columbia, Saskatchewan, or Manitoba provinces.  To claim a provincial sales tax (PST) and retail sales tax (RST) reseller exemption, you must confirm that purchases from this account were made for resale. Otherwise, remove the PST or RST number from the provincialSalesTaxId parameter from your request.
     */
    isResellerAccount?: Boolean;
    /**
     *  The provincial sales tax ID for your TRN in Canada. This parameter can represent the following:    Provincial sales tax ID number for British Columbia and Saskatchewan provinces   Manitoba retail sales tax ID number for Manitoba province   Quebec sales tax ID number for Quebec province   The Tax Setting API only accepts this parameter if the TRN is specified for the previous provinces. For other provinces, the Tax Settings API doesn't accept this parameter. 
     */
    provincialSalesTaxId?: CanadaProvincialSalesTaxIdString;
  }
  export type CanadaProvincialSalesTaxIdString = string;
  export type CanadaQuebecSalesTaxNumberString = string;
  export type CanadaRetailSalesTaxNumberString = string;
  export type CcmCode = string;
  export type CertifiedEmailId = string;
  export type CigNumber = string;
  export type City = string;
  export type CountryCode = string;
  export type CupNumber = string;
  export type DateOfBirth = string;
  export interface DeleteTaxRegistrationRequest {
    /**
     * Unique account identifier for the TRN information that needs to be deleted. If this isn't passed, the account ID corresponding to the credentials of the API caller will be used for this parameter.
     */
    accountId?: AccountId;
  }
  export interface DeleteTaxRegistrationResponse {
  }
  export type DestinationFilePath = string;
  export interface DestinationS3Location {
    /**
     * The name of your Amazon S3 bucket that you specify to download your tax documents to.
     */
    bucket: S3BucketName;
    /**
     * The Amazon S3 object prefix that you specify for your tax document file.
     */
    prefix?: S3Prefix;
  }
  export type District = string;
  export type ErrorCode = string;
  export type ErrorMessage = string;
  export interface EstoniaAdditionalInfo {
    /**
     *  Registry commercial code (RCC) for your TRN in Estonia. This value is an eight-numeric string, such as 12345678.
     */
    registryCommercialCode: RegistryCommercialCode;
  }
  export interface GeorgiaAdditionalInfo {
    /**
     *  The legal person or physical person assigned to this TRN in Georgia. 
     */
    personType: PersonType;
  }
  export interface GetTaxRegistrationDocumentRequest {
    /**
     * The Amazon S3 bucket that you specify to download your tax documents to.
     */
    destinationS3Location: DestinationS3Location;
    /**
     * The metadata for your tax document.
     */
    taxDocumentMetadata: TaxDocumentMetadata;
  }
  export interface GetTaxRegistrationDocumentResponse {
    /**
     * The file path of the Amazon S3 bucket where you want to download your tax document to.
     */
    destinationFilePath?: DestinationFilePath;
  }
  export interface GetTaxRegistrationRequest {
    /**
     * Your unique account identifier.
     */
    accountId?: AccountId;
  }
  export interface GetTaxRegistrationResponse {
    /**
     * TRN information of the account mentioned in the request. 
     */
    taxRegistration?: TaxRegistration;
  }
  export interface IndiaAdditionalInfo {
    /**
     *  India pan information associated with the account. 
     */
    pan?: Pan;
  }
  export type IndividualRegistrationNumber = string;
  export type Industries = "CirculatingOrg"|"ProfessionalOrg"|"Banks"|"Insurance"|"PensionAndBenefitFunds"|"DevelopmentAgencies"|string;
  export type InheritanceObtainedReason = string;
  export interface IsraelAdditionalInfo {
    /**
     *  Customer type for your TRN in Israel. The value can be Business or Individual. Use Businessfor entities such as not-for-profit and financial institutions.
     */
    customerType: IsraelCustomerType;
    /**
     *  Dealer type for your TRN in Israel. If you're not a local authorized dealer with an Israeli VAT ID, specify your tax identification number so that Amazon Web Services can send you a compliant tax invoice.
     */
    dealerType: IsraelDealerType;
  }
  export type IsraelCustomerType = "Business"|"Individual"|string;
  export type IsraelDealerType = "Authorized"|"Non-authorized"|string;
  export interface ItalyAdditionalInfo {
    /**
     *  The tender procedure identification code. 
     */
    cigNumber?: CigNumber;
    /**
     *  Additional tax information to specify for a TRN in Italy. This is managed by the Interministerial Committee for Economic Planning (CIPE) which characterizes every public investment project (Individual Project Code). 
     */
    cupNumber?: CupNumber;
    /**
     *  Additional tax information to specify for a TRN in Italy. Use CodiceDestinatario to receive your invoices via web service (API) or FTP. 
     */
    sdiAccountId?: SdiAccountId;
    /**
     * List of service tax codes for your TRN in Italy. You can use your customer tax code as part of a VAT Group. 
     */
    taxCode?: TaxCode;
  }
  export type ItemOfBusiness = string;
  export interface Jurisdiction {
    /**
     *  The country code of the jurisdiction. 
     */
    countryCode: CountryCode;
    /**
     *  The state, region, or province associated with the country of the jurisdiction, if applicable. 
     */
    stateOrRegion?: State;
  }
  export interface KenyaAdditionalInfo {
    /**
     * The legal person or physical person assigned to this TRN in Kenya.
     */
    personType: PersonType;
  }
  export type KepEmailId = string;
  export type LegalName = string;
  export type LegalNatureCode = string;
  export type LineOfBusiness = string;
  export interface ListTaxRegistrationsRequest {
    /**
     * Number of accountDetails results you want in one response. 
     */
    maxResults?: MaxResults;
    /**
     * The token to retrieve the next set of results. 
     */
    nextToken?: PaginationTokenString;
  }
  export interface ListTaxRegistrationsResponse {
    /**
     * The list of account details. This contains account Ids and TRN Information for each of the linked accounts. 
     */
    accountDetails: AccountDetailsList;
    /**
     *  The token to retrieve the next set of results. 
     */
    nextToken?: PaginationTokenString;
  }
  export interface MalaysiaAdditionalInfo {
    /**
     * List of service tax codes for your TRN in Malaysia.
     */
    serviceTaxCodes: MalaysiaServiceTaxCodesList;
  }
  export type MalaysiaServiceTaxCode = "Consultancy"|"Digital Service And Electronic Medium"|"IT Services"|"Training Or Coaching"|string;
  export type MalaysiaServiceTaxCodesList = MalaysiaServiceTaxCode[];
  export type MaxResults = number;
  export type PaginationTokenString = string;
  export type Pan = string;
  export type PersonType = "Legal Person"|"Physical Person"|"Business"|string;
  export interface PolandAdditionalInfo {
    /**
     *  The individual tax registration number (NIP). Individual NIP is valid for other taxes excluding VAT purposes. 
     */
    individualRegistrationNumber?: IndividualRegistrationNumber;
    /**
     *  True if your business is a member of a VAT group with a NIP active for VAT purposes. Otherwise, this is false. 
     */
    isGroupVatEnabled?: Boolean;
  }
  export type PostalCode = string;
  export interface PutTaxRegistrationRequest {
    /**
     * Your unique account identifier. 
     */
    accountId?: AccountId;
    /**
     *  Your TRN information that will be stored to the account mentioned in accountId. 
     */
    taxRegistrationEntry: TaxRegistrationEntry;
  }
  export interface PutTaxRegistrationResponse {
    /**
     * The status of your TRN stored in the system after processing. Based on the validation occurring on the TRN, the status can be Verified, Pending or Rejected. 
     */
    status?: TaxRegistrationStatus;
  }
  export type RegistrationId = string;
  export type RegistrationType = "Intra-EU"|"Local"|string;
  export type RegistryCommercialCode = string;
  export interface RomaniaAdditionalInfo {
    /**
     *  The tax registration number type. The value can be TaxRegistrationNumber or LocalRegistrationNumber. 
     */
    taxRegistrationNumberType: TaxRegistrationNumberType;
  }
  export type S3BucketName = string;
  export type S3Key = string;
  export type S3Prefix = string;
  export interface SaudiArabiaAdditionalInfo {
    /**
     *  The tax registration number type. 
     */
    taxRegistrationNumberType?: SaudiArabiaTaxRegistrationNumberType;
  }
  export type SaudiArabiaTaxRegistrationNumberType = "TaxRegistrationNumber"|"TaxIdentificationNumber"|"CommercialRegistrationNumber"|string;
  export type SdiAccountId = string;
  export type SecondaryTaxId = string;
  export type Sector = "Business"|"Individual"|"Government"|string;
  export type Seller = string;
  export interface SourceS3Location {
    /**
     * The name of your Amazon S3 bucket that your tax document is located.
     */
    bucket: S3BucketName;
    /**
     * The object key of your tax document object in Amazon S3.
     */
    key: S3Key;
  }
  export interface SouthKoreaAdditionalInfo {
    /**
     * The business legal name based on the most recently uploaded tax registration certificate.
     */
    businessRepresentativeName: BusinessRepresentativeName;
    /**
     * Item of business based on the most recently uploaded tax registration certificate.
     */
    itemOfBusiness: ItemOfBusiness;
    /**
     * Line of business based on the most recently uploaded tax registration certificate.
     */
    lineOfBusiness: LineOfBusiness;
  }
  export interface SpainAdditionalInfo {
    /**
     * The registration type in Spain.
     */
    registrationType: RegistrationType;
  }
  export type State = string;
  export type TaxCode = string;
  export type TaxDocumentAccessToken = string;
  export interface TaxDocumentMetadata {
    /**
     * The tax document access token, which contains information that the Tax Settings API uses to locate the tax document.  If you update your tax registration, the existing taxDocumentAccessToken won't be valid. To get the latest token, call the GetTaxRegistration or ListTaxRegistrations API operation. This token is valid for 24 hours. 
     */
    taxDocumentAccessToken: TaxDocumentAccessToken;
    /**
     * The name of your tax document.
     */
    taxDocumentName: TaxDocumentName;
  }
  export type TaxDocumentMetadatas = TaxDocumentMetadata[];
  export type TaxDocumentName = string;
  export interface TaxInheritanceDetails {
    /**
     *  Tax inheritance reason information associated with the account. 
     */
    inheritanceObtainedReason?: InheritanceObtainedReason;
    /**
     *  Tax inheritance parent account information associated with the account. 
     */
    parentEntityId?: AccountId;
  }
  export type TaxOffice = string;
  export interface TaxRegistration {
    /**
     *  Additional tax information associated with your TRN. 
     */
    additionalTaxInformation?: AdditionalInfoResponse;
    /**
     * The email address to receive VAT invoices.
     */
    certifiedEmailId?: CertifiedEmailId;
    /**
     *  The legal address associated with your TRN registration. 
     */
    legalAddress: Address;
    /**
     *  The legal name associated with your TRN registration. 
     */
    legalName: LegalName;
    /**
     *  Your tax registration unique identifier. 
     */
    registrationId: RegistrationId;
    /**
     * Type of your tax registration. This can be either VAT or GST. 
     */
    registrationType: TaxRegistrationType;
    /**
     * The industry that describes your business. For business-to-business (B2B) customers, specify Business. For business-to-consumer (B2C) customers, specify Individual. For business-to-government (B2G), specify Government. Note that certain values may not applicable for the request country. Please refer to country specific information in API document. 
     */
    sector?: Sector;
    /**
     *  The status of your TRN. This can be either Verified, Pending, Deleted, or Rejected. 
     */
    status: TaxRegistrationStatus;
    /**
     * The metadata for your tax document.
     */
    taxDocumentMetadatas?: TaxDocumentMetadatas;
  }
  export interface TaxRegistrationDocument {
    /**
     * The Amazon S3 location where your tax registration document is stored.
     */
    s3Location: SourceS3Location;
  }
  export type TaxRegistrationDocuments = TaxRegistrationDocument[];
  export interface TaxRegistrationEntry {
    /**
     *  Additional tax information associated with your TRN. You only need to specify this parameter if Amazon Web Services collects any additional information for your country within AdditionalInfoRequest.
     */
    additionalTaxInformation?: AdditionalInfoRequest;
    /**
     * The email address to receive VAT invoices.
     */
    certifiedEmailId?: CertifiedEmailId;
    /**
     * The legal address associated with your TRN.  If you're setting a TRN in Brazil for the CNPJ tax type, you don't need to specify the legal address.  For TRNs in other countries and for CPF tax types Brazil, you must specify the legal address. 
     */
    legalAddress?: Address;
    /**
     * The legal name associated with your TRN.   If you're setting a TRN in Brazil, you don't need to specify the legal name. For TRNs in other countries, you must specify the legal name. 
     */
    legalName?: LegalName;
    /**
     * Your tax registration unique identifier. 
     */
    registrationId: RegistrationId;
    /**
     *  Your tax registration type. This can be either VAT or GST. 
     */
    registrationType: TaxRegistrationType;
    /**
     * The industry that describes your business. For business-to-business (B2B) customers, specify Business. For business-to-consumer (B2C) customers, specify Individual. For business-to-government (B2G), specify Government.Note that certain values may not applicable for the request country. Please refer to country specific information in API document. 
     */
    sector?: Sector;
    /**
     * Additional details needed to verify your TRN information in Brazil. You only need to specify this parameter when you set a TRN in Brazil that is the CPF tax type.  Don't specify this parameter to set a TRN in Brazil of the CNPJ tax type or to set a TRN for another country.  
     */
    verificationDetails?: VerificationDetails;
  }
  export type TaxRegistrationNumberType = "TaxRegistrationNumber"|"LocalRegistrationNumber"|string;
  export type TaxRegistrationStatus = "Verified"|"Pending"|"Deleted"|"Rejected"|string;
  export type TaxRegistrationType = "VAT"|"GST"|"CPF"|"CNPJ"|"SST"|string;
  export interface TaxRegistrationWithJurisdiction {
    /**
     * Additional tax information associated with your TRN. 
     */
    additionalTaxInformation?: AdditionalInfoResponse;
    /**
     * The email address to receive VAT invoices.
     */
    certifiedEmailId?: CertifiedEmailId;
    /**
     *  The jurisdiction associated with your TRN information. 
     */
    jurisdiction: Jurisdiction;
    /**
     * The legal name associated with your TRN information. 
     */
    legalName: LegalName;
    /**
     * Your tax registration unique identifier. 
     */
    registrationId: RegistrationId;
    /**
     *  The type of your tax registration. This can be either VAT or GST. 
     */
    registrationType: TaxRegistrationType;
    /**
     * The industry that describes your business. For business-to-business (B2B) customers, specify Business. For business-to-consumer (B2C) customers, specify Individual. For business-to-government (B2G), specify Government.Note that certain values may not applicable for the request country. Please refer to country specific information in API document. 
     */
    sector?: Sector;
    /**
     * The status of your TRN. This can be either Verified, Pending, Deleted, or Rejected. 
     */
    status: TaxRegistrationStatus;
    /**
     * The metadata for your tax document.
     */
    taxDocumentMetadatas?: TaxDocumentMetadatas;
  }
  export interface TurkeyAdditionalInfo {
    /**
     * The industry information that tells the Tax Settings API if you're subject to additional withholding taxes. This information required for business-to-business (B2B) customers. This information is conditionally mandatory for B2B customers who are subject to KDV tax.
     */
    industries?: Industries;
    /**
     * The Registered Electronic Mail (REM) that is used to send notarized communication. This parameter is optional for business-to-business (B2B) and business-to-government (B2G) customers. It's not required for business-to-consumer (B2C) customers.
     */
    kepEmailId?: KepEmailId;
    /**
     *  Secondary tax ID (“harcama birimi VKN”si”). If one isn't provided, we will use your VKN as the secondary ID. 
     */
    secondaryTaxId?: SecondaryTaxId;
    /**
     * The tax office where you're registered. You can enter this information as a string. The Tax Settings API will add this information to your invoice. This parameter is required for business-to-business (B2B) and business-to-government customers. It's not required for business-to-consumer (B2C) customers.
     */
    taxOffice?: TaxOffice;
  }
  export interface UkraineAdditionalInfo {
    /**
     *  The tax registration type. 
     */
    ukraineTrnType: UkraineTrnType;
  }
  export type UkraineTrnType = "Business"|"Individual"|string;
  export interface VerificationDetails {
    /**
     * Date of birth to verify your submitted TRN. Use the YYYY-MM-DD format.
     */
    dateOfBirth?: DateOfBirth;
    /**
     * The tax registration document, which is required for specific countries such as Bangladesh, Kenya, South Korea and Spain.
     */
    taxRegistrationDocuments?: TaxRegistrationDocuments;
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
   * Contains interfaces for use with the TaxSettings client.
   */
  export import Types = TaxSettings;
}
export = TaxSettings;
