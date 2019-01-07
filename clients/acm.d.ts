import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {WaiterConfiguration} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ACM extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ACM.Types.ClientConfiguration)
  config: Config & ACM.Types.ClientConfiguration;
  /**
   * Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair.  You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see Tagging ACM certificates.  To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that have been applied to the certificate, use the ListTagsForCertificate action. 
   */
  addTagsToCertificate(params: ACM.Types.AddTagsToCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more tags to an ACM certificate. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. You specify the certificate on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair.  You can apply a tag to just one certificate if you want to identify a specific characteristic of that certificate, or you can apply the same tag to multiple certificates if you want to filter for a common relationship among those certificates. Similarly, you can apply the same tag to multiple resources if you want to specify a relationship among those resources. For example, you can add the same tag to an ACM certificate and an Elastic Load Balancing load balancer to indicate that they are both used by the same website. For more information, see Tagging ACM certificates.  To remove one or more tags, use the RemoveTagsFromCertificate action. To view all of the tags that have been applied to the certificate, use the ListTagsForCertificate action. 
   */
  addTagsToCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list that can be displayed by calling the ListCertificates action or be retrieved by calling the GetCertificate action. The certificate will not be available for use by AWS services integrated with ACM.   You cannot delete an ACM certificate that is being used by another AWS service. To delete a certificate that is in use, the certificate association must first be removed. 
   */
  deleteCertificate(params: ACM.Types.DeleteCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a certificate and its associated private key. If this action succeeds, the certificate no longer appears in the list that can be displayed by calling the ListCertificates action or be retrieved by calling the GetCertificate action. The certificate will not be available for use by AWS services integrated with ACM.   You cannot delete an ACM certificate that is being used by another AWS service. To delete a certificate that is in use, the certificate association must first be removed. 
   */
  deleteCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns detailed metadata about the specified ACM certificate.
   */
  describeCertificate(params: ACM.Types.DescribeCertificateRequest, callback?: (err: AWSError, data: ACM.Types.DescribeCertificateResponse) => void): Request<ACM.Types.DescribeCertificateResponse, AWSError>;
  /**
   * Returns detailed metadata about the specified ACM certificate.
   */
  describeCertificate(callback?: (err: AWSError, data: ACM.Types.DescribeCertificateResponse) => void): Request<ACM.Types.DescribeCertificateResponse, AWSError>;
  /**
   * Exports a private certificate issued by a private certificate authority (CA) for use anywhere. You can export the certificate, the certificate chain, and the encrypted private key associated with the public key embedded in the certificate. You must store the private key securely. The private key is a 2048 bit RSA key. You must provide a passphrase for the private key when exporting it. You can use the following OpenSSL command to decrypt it later. Provide the passphrase when prompted.   openssl rsa -in encrypted_key.pem -out decrypted_key.pem 
   */
  exportCertificate(params: ACM.Types.ExportCertificateRequest, callback?: (err: AWSError, data: ACM.Types.ExportCertificateResponse) => void): Request<ACM.Types.ExportCertificateResponse, AWSError>;
  /**
   * Exports a private certificate issued by a private certificate authority (CA) for use anywhere. You can export the certificate, the certificate chain, and the encrypted private key associated with the public key embedded in the certificate. You must store the private key securely. The private key is a 2048 bit RSA key. You must provide a passphrase for the private key when exporting it. You can use the following OpenSSL command to decrypt it later. Provide the passphrase when prompted.   openssl rsa -in encrypted_key.pem -out decrypted_key.pem 
   */
  exportCertificate(callback?: (err: AWSError, data: ACM.Types.ExportCertificateResponse) => void): Request<ACM.Types.ExportCertificateResponse, AWSError>;
  /**
   * Retrieves a certificate specified by an ARN and its certificate chain . The chain is an ordered list of certificates that contains the end entity certificate, intermediate certificates of subordinate CAs, and the root certificate in that order. The certificate and certificate chain are base64 encoded. If you want to decode the certificate to see the individual fields, you can use OpenSSL.
   */
  getCertificate(params: ACM.Types.GetCertificateRequest, callback?: (err: AWSError, data: ACM.Types.GetCertificateResponse) => void): Request<ACM.Types.GetCertificateResponse, AWSError>;
  /**
   * Retrieves a certificate specified by an ARN and its certificate chain . The chain is an ordered list of certificates that contains the end entity certificate, intermediate certificates of subordinate CAs, and the root certificate in that order. The certificate and certificate chain are base64 encoded. If you want to decode the certificate to see the individual fields, you can use OpenSSL.
   */
  getCertificate(callback?: (err: AWSError, data: ACM.Types.GetCertificateResponse) => void): Request<ACM.Types.GetCertificateResponse, AWSError>;
  /**
   * Imports a certificate into AWS Certificate Manager (ACM) to use with services that are integrated with ACM. Note that integrated services allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see Importing Certificates in the AWS Certificate Manager User Guide.   ACM does not provide managed renewal for certificates that you import.  Note the following guidelines when importing third party certificates:   You must enter the private key that matches the certificate you are importing.   The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase.   If the certificate you are importing is not self-signed, you must enter its certificate chain.   If a certificate chain is included, the issuer must be the subject of one of the certificates in the chain.   The certificate, private key, and certificate chain must be PEM-encoded.   The current time must be between the Not Before and Not After certificate fields.   The Issuer field must not be empty.   The OCSP authority URL, if present, must not exceed 1000 characters.   To import a new certificate, omit the CertificateArn argument. Include this argument only when you want to replace a previously imported certificate.   When you import a certificate by using the CLI, you must specify the certificate, the certificate chain, and the private key by their file names preceded by file://. For example, you can specify a certificate saved in the C:\temp folder as file://C:\temp\certificate_to_import.pem. If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs.    When you import a certificate by using an SDK, you must specify the certificate, the certificate chain, and the private key files in the manner required by the programming language you're using.    This operation returns the Amazon Resource Name (ARN) of the imported certificate.
   */
  importCertificate(params: ACM.Types.ImportCertificateRequest, callback?: (err: AWSError, data: ACM.Types.ImportCertificateResponse) => void): Request<ACM.Types.ImportCertificateResponse, AWSError>;
  /**
   * Imports a certificate into AWS Certificate Manager (ACM) to use with services that are integrated with ACM. Note that integrated services allow only certificate types and keys they support to be associated with their resources. Further, their support differs depending on whether the certificate is imported into IAM or into ACM. For more information, see the documentation for each service. For more information about importing certificates into ACM, see Importing Certificates in the AWS Certificate Manager User Guide.   ACM does not provide managed renewal for certificates that you import.  Note the following guidelines when importing third party certificates:   You must enter the private key that matches the certificate you are importing.   The private key must be unencrypted. You cannot import a private key that is protected by a password or a passphrase.   If the certificate you are importing is not self-signed, you must enter its certificate chain.   If a certificate chain is included, the issuer must be the subject of one of the certificates in the chain.   The certificate, private key, and certificate chain must be PEM-encoded.   The current time must be between the Not Before and Not After certificate fields.   The Issuer field must not be empty.   The OCSP authority URL, if present, must not exceed 1000 characters.   To import a new certificate, omit the CertificateArn argument. Include this argument only when you want to replace a previously imported certificate.   When you import a certificate by using the CLI, you must specify the certificate, the certificate chain, and the private key by their file names preceded by file://. For example, you can specify a certificate saved in the C:\temp folder as file://C:\temp\certificate_to_import.pem. If you are making an HTTP or HTTPS Query request, include these arguments as BLOBs.    When you import a certificate by using an SDK, you must specify the certificate, the certificate chain, and the private key files in the manner required by the programming language you're using.    This operation returns the Amazon Resource Name (ARN) of the imported certificate.
   */
  importCertificate(callback?: (err: AWSError, data: ACM.Types.ImportCertificateResponse) => void): Request<ACM.Types.ImportCertificateResponse, AWSError>;
  /**
   * Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. 
   */
  listCertificates(params: ACM.Types.ListCertificatesRequest, callback?: (err: AWSError, data: ACM.Types.ListCertificatesResponse) => void): Request<ACM.Types.ListCertificatesResponse, AWSError>;
  /**
   * Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. 
   */
  listCertificates(callback?: (err: AWSError, data: ACM.Types.ListCertificatesResponse) => void): Request<ACM.Types.ListCertificatesResponse, AWSError>;
  /**
   * Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the AddTagsToCertificate action. To delete a tag, use the RemoveTagsFromCertificate action. 
   */
  listTagsForCertificate(params: ACM.Types.ListTagsForCertificateRequest, callback?: (err: AWSError, data: ACM.Types.ListTagsForCertificateResponse) => void): Request<ACM.Types.ListTagsForCertificateResponse, AWSError>;
  /**
   * Lists the tags that have been applied to the ACM certificate. Use the certificate's Amazon Resource Name (ARN) to specify the certificate. To add a tag to an ACM certificate, use the AddTagsToCertificate action. To delete a tag, use the RemoveTagsFromCertificate action. 
   */
  listTagsForCertificate(callback?: (err: AWSError, data: ACM.Types.ListTagsForCertificateResponse) => void): Request<ACM.Types.ListTagsForCertificateResponse, AWSError>;
  /**
   * Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value.  To add tags to a certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific ACM certificate, use the ListTagsForCertificate action. 
   */
  removeTagsFromCertificate(params: ACM.Types.RemoveTagsFromCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove one or more tags from an ACM certificate. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this function, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value.  To add tags to a certificate, use the AddTagsToCertificate action. To view all of the tags that have been applied to a specific ACM certificate, use the ListTagsForCertificate action. 
   */
  removeTagsFromCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Requests an ACM certificate for use with other AWS services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify additional FQDNs in the SubjectAlternativeNames parameter.  If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use DNS validation or email validation. We recommend that you use DNS validation. ACM issues public certificates after receiving approval from the domain owner. 
   */
  requestCertificate(params: ACM.Types.RequestCertificateRequest, callback?: (err: AWSError, data: ACM.Types.RequestCertificateResponse) => void): Request<ACM.Types.RequestCertificateResponse, AWSError>;
  /**
   * Requests an ACM certificate for use with other AWS services. To request an ACM certificate, you must specify a fully qualified domain name (FQDN) in the DomainName parameter. You can also specify additional FQDNs in the SubjectAlternativeNames parameter.  If you are requesting a private certificate, domain validation is not required. If you are requesting a public certificate, each domain name that you specify must be validated to verify that you own or control the domain. You can use DNS validation or email validation. We recommend that you use DNS validation. ACM issues public certificates after receiving approval from the domain owner. 
   */
  requestCertificate(callback?: (err: AWSError, data: ACM.Types.RequestCertificateResponse) => void): Request<ACM.Types.RequestCertificateResponse, AWSError>;
  /**
   * Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see Configure Email for your Domain. 
   */
  resendValidationEmail(params: ACM.Types.ResendValidationEmailRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see Configure Email for your Domain. 
   */
  resendValidationEmail(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a certificate. Currently, you can use this function to specify whether to opt in to or out of recording your certificate in a certificate transparency log. For more information, see  Opting Out of Certificate Transparency Logging. 
   */
  updateCertificateOptions(params: ACM.Types.UpdateCertificateOptionsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a certificate. Currently, you can use this function to specify whether to opt in to or out of recording your certificate in a certificate transparency log. For more information, see  Opting Out of Certificate Transparency Logging. 
   */
  updateCertificateOptions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Waits for the certificateValidated state by periodically calling the underlying ACM.describeCertificateoperation every 60 seconds (at most 40 times).
   */
  waitFor(state: "certificateValidated", params: ACM.Types.DescribeCertificateRequest & {$waiter?: WaiterConfiguration}, callback?: (err: AWSError, data: ACM.Types.DescribeCertificateResponse) => void): Request<ACM.Types.DescribeCertificateResponse, AWSError>;
  /**
   * Waits for the certificateValidated state by periodically calling the underlying ACM.describeCertificateoperation every 60 seconds (at most 40 times).
   */
  waitFor(state: "certificateValidated", callback?: (err: AWSError, data: ACM.Types.DescribeCertificateResponse) => void): Request<ACM.Types.DescribeCertificateResponse, AWSError>;
}
declare namespace ACM {
  export interface AddTagsToCertificateRequest {
    /**
     * String that contains the ARN of the ACM certificate to which the tag is to be applied. This must be of the form:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces. 
     */
    CertificateArn: Arn;
    /**
     * The key-value pair that defines the tag. The tag value is optional.
     */
    Tags: TagList;
  }
  export type Arn = string;
  export type CertificateBody = string;
  export type CertificateBodyBlob = Buffer|Uint8Array|Blob|string;
  export type CertificateChain = string;
  export type CertificateChainBlob = Buffer|Uint8Array|Blob|string;
  export interface CertificateDetail {
    /**
     * The Amazon Resource Name (ARN) of the certificate. For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces in the AWS General Reference.
     */
    CertificateArn?: Arn;
    /**
     * The fully qualified domain name for the certificate, such as www.example.com or example.com.
     */
    DomainName?: DomainNameString;
    /**
     * One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website. 
     */
    SubjectAlternativeNames?: DomainList;
    /**
     * Contains information about the initial validation of each domain name that occurs as a result of the RequestCertificate request. This field exists only when the certificate type is AMAZON_ISSUED. 
     */
    DomainValidationOptions?: DomainValidationList;
    /**
     * The serial number of the certificate.
     */
    Serial?: String;
    /**
     * The name of the entity that is associated with the public key contained in the certificate.
     */
    Subject?: String;
    /**
     * The name of the certificate authority that issued and signed the certificate.
     */
    Issuer?: String;
    /**
     * The time at which the certificate was requested. This value exists only when the certificate type is AMAZON_ISSUED. 
     */
    CreatedAt?: TStamp;
    /**
     * The time at which the certificate was issued. This value exists only when the certificate type is AMAZON_ISSUED. 
     */
    IssuedAt?: TStamp;
    /**
     * The date and time at which the certificate was imported. This value exists only when the certificate type is IMPORTED. 
     */
    ImportedAt?: TStamp;
    /**
     * The status of the certificate.
     */
    Status?: CertificateStatus;
    /**
     * The time at which the certificate was revoked. This value exists only when the certificate status is REVOKED. 
     */
    RevokedAt?: TStamp;
    /**
     * The reason the certificate was revoked. This value exists only when the certificate status is REVOKED. 
     */
    RevocationReason?: RevocationReason;
    /**
     * The time before which the certificate is not valid.
     */
    NotBefore?: TStamp;
    /**
     * The time after which the certificate is not valid.
     */
    NotAfter?: TStamp;
    /**
     * The algorithm that was used to generate the public-private key pair.
     */
    KeyAlgorithm?: KeyAlgorithm;
    /**
     * The algorithm that was used to sign the certificate.
     */
    SignatureAlgorithm?: String;
    /**
     * A list of ARNs for the AWS resources that are using the certificate. A certificate can be used by multiple AWS resources. 
     */
    InUseBy?: InUseList;
    /**
     * The reason the certificate request failed. This value exists only when the certificate status is FAILED. For more information, see Certificate Request Failed in the AWS Certificate Manager User Guide. 
     */
    FailureReason?: FailureReason;
    /**
     * The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED. For certificates that you imported with ImportCertificate, this value is IMPORTED. ACM does not provide managed renewal for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see Importing Certificates in the AWS Certificate Manager User Guide. 
     */
    Type?: CertificateType;
    /**
     * Contains information about the status of ACM's managed renewal for the certificate. This field exists only when the certificate type is AMAZON_ISSUED.
     */
    RenewalSummary?: RenewalSummary;
    /**
     * A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.
     */
    KeyUsages?: KeyUsageList;
    /**
     * Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID). 
     */
    ExtendedKeyUsages?: ExtendedKeyUsageList;
    /**
     * The Amazon Resource Name (ARN) of the ACM PCA private certificate authority (CA) that issued the certificate. This has the following format:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 
     */
    CertificateAuthorityArn?: Arn;
    /**
     * Specifies whether the certificate is eligible for renewal.
     */
    RenewalEligibility?: RenewalEligibility;
    /**
     * Value that specifies whether to add the certificate to a transparency log. Certificate transparency makes it possible to detect SSL certificates that have been mistakenly or maliciously issued. A browser might respond to certificate that has not been logged by showing an error message. The logs are cryptographically secure. 
     */
    Options?: CertificateOptions;
  }
  export interface CertificateOptions {
    /**
     * You can opt out of certificate transparency logging by specifying the DISABLED option. Opt in by specifying ENABLED. 
     */
    CertificateTransparencyLoggingPreference?: CertificateTransparencyLoggingPreference;
  }
  export type CertificateStatus = "PENDING_VALIDATION"|"ISSUED"|"INACTIVE"|"EXPIRED"|"VALIDATION_TIMED_OUT"|"REVOKED"|"FAILED"|string;
  export type CertificateStatuses = CertificateStatus[];
  export interface CertificateSummary {
    /**
     * Amazon Resource Name (ARN) of the certificate. This is of the form:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces. 
     */
    CertificateArn?: Arn;
    /**
     * Fully qualified domain name (FQDN), such as www.example.com or example.com, for the certificate.
     */
    DomainName?: DomainNameString;
  }
  export type CertificateSummaryList = CertificateSummary[];
  export type CertificateTransparencyLoggingPreference = "ENABLED"|"DISABLED"|string;
  export type CertificateType = "IMPORTED"|"AMAZON_ISSUED"|"PRIVATE"|string;
  export interface DeleteCertificateRequest {
    /**
     * String that contains the ARN of the ACM certificate to be deleted. This must be of the form:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    CertificateArn: Arn;
  }
  export interface DescribeCertificateRequest {
    /**
     * The Amazon Resource Name (ARN) of the ACM certificate. The ARN must have the following form:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    CertificateArn: Arn;
  }
  export interface DescribeCertificateResponse {
    /**
     * Metadata about an ACM certificate.
     */
    Certificate?: CertificateDetail;
  }
  export type DomainList = DomainNameString[];
  export type DomainNameString = string;
  export type DomainStatus = "PENDING_VALIDATION"|"SUCCESS"|"FAILED"|string;
  export interface DomainValidation {
    /**
     * A fully qualified domain name (FQDN) in the certificate. For example, www.example.com or example.com. 
     */
    DomainName: DomainNameString;
    /**
     * A list of email addresses that ACM used to send domain validation emails.
     */
    ValidationEmails?: ValidationEmailList;
    /**
     * The domain name that ACM used to send domain validation emails.
     */
    ValidationDomain?: DomainNameString;
    /**
     * The validation status of the domain name. This can be one of the following values:    PENDING_VALIDATION     SUCCESS    FAILED  
     */
    ValidationStatus?: DomainStatus;
    /**
     * Contains the CNAME record that you add to your DNS database for domain validation. For more information, see Use DNS to Validate Domain Ownership.
     */
    ResourceRecord?: ResourceRecord;
    /**
     * Specifies the domain validation method.
     */
    ValidationMethod?: ValidationMethod;
  }
  export type DomainValidationList = DomainValidation[];
  export interface DomainValidationOption {
    /**
     * A fully qualified domain name (FQDN) in the certificate request.
     */
    DomainName: DomainNameString;
    /**
     * The domain name that you want ACM to use to send you validation emails. This domain name is the suffix of the email addresses that you want ACM to use. This must be the same as the DomainName value or a superdomain of the DomainName value. For example, if you request a certificate for testing.example.com, you can specify example.com for this value. In that case, ACM sends domain validation emails to the following five addresses:   admin@example.com   administrator@example.com   hostmaster@example.com   postmaster@example.com   webmaster@example.com  
     */
    ValidationDomain: DomainNameString;
  }
  export type DomainValidationOptionList = DomainValidationOption[];
  export interface ExportCertificateRequest {
    /**
     * An Amazon Resource Name (ARN) of the issued certificate. This must be of the form:  arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012 
     */
    CertificateArn: Arn;
    /**
     * Passphrase to associate with the encrypted exported private key. If you want to later decrypt the private key, you must have the passphrase. You can use the following OpenSSL command to decrypt a private key:   openssl rsa -in encrypted_key.pem -out decrypted_key.pem 
     */
    Passphrase: PassphraseBlob;
  }
  export interface ExportCertificateResponse {
    /**
     * The base64 PEM-encoded certificate.
     */
    Certificate?: CertificateBody;
    /**
     * The base64 PEM-encoded certificate chain. This does not include the certificate that you are exporting.
     */
    CertificateChain?: CertificateChain;
    /**
     * The PEM-encoded private key associated with the public key in the certificate.
     */
    PrivateKey?: PrivateKey;
  }
  export interface ExtendedKeyUsage {
    /**
     * The name of an Extended Key Usage value.
     */
    Name?: ExtendedKeyUsageName;
    /**
     * An object identifier (OID) for the extension value. OIDs are strings of numbers separated by periods. The following OIDs are defined in RFC 3280 and RFC 5280.     1.3.6.1.5.5.7.3.1 (TLS_WEB_SERVER_AUTHENTICATION)     1.3.6.1.5.5.7.3.2 (TLS_WEB_CLIENT_AUTHENTICATION)     1.3.6.1.5.5.7.3.3 (CODE_SIGNING)     1.3.6.1.5.5.7.3.4 (EMAIL_PROTECTION)     1.3.6.1.5.5.7.3.8 (TIME_STAMPING)     1.3.6.1.5.5.7.3.9 (OCSP_SIGNING)     1.3.6.1.5.5.7.3.5 (IPSEC_END_SYSTEM)     1.3.6.1.5.5.7.3.6 (IPSEC_TUNNEL)     1.3.6.1.5.5.7.3.7 (IPSEC_USER)   
     */
    OID?: String;
  }
  export type ExtendedKeyUsageFilterList = ExtendedKeyUsageName[];
  export type ExtendedKeyUsageList = ExtendedKeyUsage[];
  export type ExtendedKeyUsageName = "TLS_WEB_SERVER_AUTHENTICATION"|"TLS_WEB_CLIENT_AUTHENTICATION"|"CODE_SIGNING"|"EMAIL_PROTECTION"|"TIME_STAMPING"|"OCSP_SIGNING"|"IPSEC_END_SYSTEM"|"IPSEC_TUNNEL"|"IPSEC_USER"|"ANY"|"NONE"|"CUSTOM"|string;
  export type FailureReason = "NO_AVAILABLE_CONTACTS"|"ADDITIONAL_VERIFICATION_REQUIRED"|"DOMAIN_NOT_ALLOWED"|"INVALID_PUBLIC_DOMAIN"|"CAA_ERROR"|"PCA_LIMIT_EXCEEDED"|"PCA_INVALID_ARN"|"PCA_INVALID_STATE"|"PCA_REQUEST_FAILED"|"PCA_RESOURCE_NOT_FOUND"|"PCA_INVALID_ARGS"|"OTHER"|string;
  export interface Filters {
    /**
     * Specify one or more ExtendedKeyUsage extension values.
     */
    extendedKeyUsage?: ExtendedKeyUsageFilterList;
    /**
     * Specify one or more KeyUsage extension values.
     */
    keyUsage?: KeyUsageFilterList;
    /**
     * Specify one or more algorithms that can be used to generate key pairs.
     */
    keyTypes?: KeyAlgorithmList;
  }
  export interface GetCertificateRequest {
    /**
     * String that contains a certificate ARN in the following format:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces.
     */
    CertificateArn: Arn;
  }
  export interface GetCertificateResponse {
    /**
     * String that contains the ACM certificate represented by the ARN specified at input.
     */
    Certificate?: CertificateBody;
    /**
     * The certificate chain that contains the root certificate issued by the certificate authority (CA).
     */
    CertificateChain?: CertificateChain;
  }
  export type IdempotencyToken = string;
  export interface ImportCertificateRequest {
    /**
     * The Amazon Resource Name (ARN) of an imported certificate to replace. To import a new certificate, omit this field. 
     */
    CertificateArn?: Arn;
    /**
     * The certificate to import.
     */
    Certificate: CertificateBodyBlob;
    /**
     * The private key that matches the public key in the certificate.
     */
    PrivateKey: PrivateKeyBlob;
    /**
     * The PEM encoded certificate chain.
     */
    CertificateChain?: CertificateChainBlob;
  }
  export interface ImportCertificateResponse {
    /**
     * The Amazon Resource Name (ARN) of the imported certificate.
     */
    CertificateArn?: Arn;
  }
  export type InUseList = String[];
  export type KeyAlgorithm = "RSA_2048"|"RSA_1024"|"RSA_4096"|"EC_prime256v1"|"EC_secp384r1"|"EC_secp521r1"|string;
  export type KeyAlgorithmList = KeyAlgorithm[];
  export interface KeyUsage {
    /**
     * A string value that contains a Key Usage extension name.
     */
    Name?: KeyUsageName;
  }
  export type KeyUsageFilterList = KeyUsageName[];
  export type KeyUsageList = KeyUsage[];
  export type KeyUsageName = "DIGITAL_SIGNATURE"|"NON_REPUDIATION"|"KEY_ENCIPHERMENT"|"DATA_ENCIPHERMENT"|"KEY_AGREEMENT"|"CERTIFICATE_SIGNING"|"CRL_SIGNING"|"ENCIPHER_ONLY"|"DECIPHER_ONLY"|"ANY"|"CUSTOM"|string;
  export interface ListCertificatesRequest {
    /**
     * Filter the certificate list by status value.
     */
    CertificateStatuses?: CertificateStatuses;
    /**
     * Filter the certificate list. For more information, see the Filters structure.
     */
    Includes?: Filters;
    /**
     * Use this parameter only when paginating results and only in a subsequent request after you receive a response with truncated results. Set it to the value of NextToken from the response you just received.
     */
    NextToken?: NextToken;
    /**
     * Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this NextToken value in a subsequent request to retrieve additional items.
     */
    MaxItems?: MaxItems;
  }
  export interface ListCertificatesResponse {
    /**
     * When the list is truncated, this value is present and contains the value to use for the NextToken parameter in a subsequent pagination request.
     */
    NextToken?: NextToken;
    /**
     * A list of ACM certificates.
     */
    CertificateSummaryList?: CertificateSummaryList;
  }
  export interface ListTagsForCertificateRequest {
    /**
     * String that contains the ARN of the ACM certificate for which you want to list the tags. This must have the following form:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces. 
     */
    CertificateArn: Arn;
  }
  export interface ListTagsForCertificateResponse {
    /**
     * The key-value pairs that define the applied tags.
     */
    Tags?: TagList;
  }
  export type MaxItems = number;
  export type NextToken = string;
  export type PassphraseBlob = Buffer|Uint8Array|Blob|string;
  export type PrivateKey = string;
  export type PrivateKeyBlob = Buffer|Uint8Array|Blob|string;
  export type RecordType = "CNAME"|string;
  export interface RemoveTagsFromCertificateRequest {
    /**
     * String that contains the ARN of the ACM Certificate with one or more tags that you want to remove. This must be of the form:  arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012  For more information about ARNs, see Amazon Resource Names (ARNs) and AWS Service Namespaces. 
     */
    CertificateArn: Arn;
    /**
     * The key-value pair that defines the tag to remove.
     */
    Tags: TagList;
  }
  export type RenewalEligibility = "ELIGIBLE"|"INELIGIBLE"|string;
  export type RenewalStatus = "PENDING_AUTO_RENEWAL"|"PENDING_VALIDATION"|"SUCCESS"|"FAILED"|string;
  export interface RenewalSummary {
    /**
     * The status of ACM's managed renewal of the certificate.
     */
    RenewalStatus: RenewalStatus;
    /**
     * Contains information about the validation of each domain name in the certificate, as it pertains to ACM's managed renewal. This is different from the initial validation that occurs as a result of the RequestCertificate request. This field exists only when the certificate type is AMAZON_ISSUED.
     */
    DomainValidationOptions: DomainValidationList;
  }
  export interface RequestCertificateRequest {
    /**
     *  Fully qualified domain name (FQDN), such as www.example.com, that you want to secure with an ACM certificate. Use an asterisk (*) to create a wildcard certificate that protects several sites in the same domain. For example, *.example.com protects www.example.com, site.example.com, and images.example.com.   The first domain name you enter cannot exceed 63 octets, including periods. Each subsequent Subject Alternative Name (SAN), however, can be up to 253 octets in length. 
     */
    DomainName: DomainNameString;
    /**
     * The method you want to use if you are requesting a public certificate to validate that you own or control domain. You can validate with DNS or validate with email. We recommend that you use DNS validation. 
     */
    ValidationMethod?: ValidationMethod;
    /**
     * Additional FQDNs to be included in the Subject Alternative Name extension of the ACM certificate. For example, add the name www.example.net to a certificate for which the DomainName field is www.example.com if users can reach your site by using either name. The maximum number of domain names that you can add to an ACM certificate is 100. However, the initial limit is 10 domain names. If you need more than 10 names, you must request a limit increase. For more information, see Limits.  The maximum length of a SAN DNS name is 253 octets. The name is made up of multiple labels separated by periods. No label can be longer than 63 octets. Consider the following examples:     (63 octets).(63 octets).(63 octets).(61 octets) is legal because the total length is 253 octets (63+1+63+1+63+1+61) and no label exceeds 63 octets.    (64 octets).(63 octets).(63 octets).(61 octets) is not legal because the total length exceeds 253 octets (64+1+63+1+63+1+61) and the first label exceeds 63 octets.    (63 octets).(63 octets).(63 octets).(62 octets) is not legal because the total length of the DNS name (63+1+63+1+63+1+62) exceeds 253 octets.  
     */
    SubjectAlternativeNames?: DomainList;
    /**
     * Customer chosen string that can be used to distinguish between calls to RequestCertificate. Idempotency tokens time out after one hour. Therefore, if you call RequestCertificate multiple times with the same idempotency token within one hour, ACM recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, ACM recognizes that you are requesting multiple certificates.
     */
    IdempotencyToken?: IdempotencyToken;
    /**
     * The domain name that you want ACM to use to send you emails so that you can validate domain ownership.
     */
    DomainValidationOptions?: DomainValidationOptionList;
    /**
     * Currently, you can use this parameter to specify whether to add the certificate to a certificate transparency log. Certificate transparency makes it possible to detect SSL/TLS certificates that have been mistakenly or maliciously issued. Certificates that have not been logged typically produce an error message in a browser. For more information, see Opting Out of Certificate Transparency Logging.
     */
    Options?: CertificateOptions;
    /**
     * The Amazon Resource Name (ARN) of the private certificate authority (CA) that will be used to issue the certificate. If you do not provide an ARN and you are trying to request a private certificate, ACM will attempt to issue a public certificate. For more information about private CAs, see the AWS Certificate Manager Private Certificate Authority (PCA) user guide. The ARN must have the following form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 
     */
    CertificateAuthorityArn?: Arn;
  }
  export interface RequestCertificateResponse {
    /**
     * String that contains the ARN of the issued certificate. This must be of the form:  arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012 
     */
    CertificateArn?: Arn;
  }
  export interface ResendValidationEmailRequest {
    /**
     * String that contains the ARN of the requested certificate. The certificate ARN is generated and returned by the RequestCertificate action as soon as the request is made. By default, using this parameter causes email to be sent to all top-level domains you specified in the certificate request. The ARN must be of the form:   arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012 
     */
    CertificateArn: Arn;
    /**
     * The fully qualified domain name (FQDN) of the certificate that needs to be validated.
     */
    Domain: DomainNameString;
    /**
     * The base validation domain that will act as the suffix of the email addresses that are used to send the emails. This must be the same as the Domain value or a superdomain of the Domain value. For example, if you requested a certificate for site.subdomain.example.com and specify a ValidationDomain of subdomain.example.com, ACM sends email to the domain registrant, technical contact, and administrative contact in WHOIS and the following five addresses:   admin@subdomain.example.com   administrator@subdomain.example.com   hostmaster@subdomain.example.com   postmaster@subdomain.example.com   webmaster@subdomain.example.com  
     */
    ValidationDomain: DomainNameString;
  }
  export interface ResourceRecord {
    /**
     * The name of the DNS record to create in your domain. This is supplied by ACM.
     */
    Name: String;
    /**
     * The type of DNS record. Currently this can be CNAME.
     */
    Type: RecordType;
    /**
     * The value of the CNAME record to add to your DNS database. This is supplied by ACM.
     */
    Value: String;
  }
  export type RevocationReason = "UNSPECIFIED"|"KEY_COMPROMISE"|"CA_COMPROMISE"|"AFFILIATION_CHANGED"|"SUPERCEDED"|"CESSATION_OF_OPERATION"|"CERTIFICATE_HOLD"|"REMOVE_FROM_CRL"|"PRIVILEGE_WITHDRAWN"|"A_A_COMPROMISE"|string;
  export type String = string;
  export type TStamp = Date;
  export interface Tag {
    /**
     * The key of the tag.
     */
    Key: TagKey;
    /**
     * The value of the tag.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagList = Tag[];
  export type TagValue = string;
  export interface UpdateCertificateOptionsRequest {
    /**
     * ARN of the requested certificate to update. This must be of the form:  arn:aws:acm:us-east-1:account:certificate/12345678-1234-1234-1234-123456789012  
     */
    CertificateArn: Arn;
    /**
     * Use to update the options for your certificate. Currently, you can specify whether to add your certificate to a transparency log. Certificate transparency makes it possible to detect SSL/TLS certificates that have been mistakenly or maliciously issued. Certificates that have not been logged typically produce an error message in a browser. 
     */
    Options: CertificateOptions;
  }
  export type ValidationEmailList = String[];
  export type ValidationMethod = "EMAIL"|"DNS"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-12-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ACM client.
   */
  export import Types = ACM;
}
export = ACM;
