import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ACMPCA extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ACMPCA.Types.ClientConfiguration)
  config: Config & ACMPCA.Types.ClientConfiguration;
  /**
   * Creates a private subordinate certificate authority (CA). You must specify the CA configuration, the revocation configuration, the CA type, and an optional idempotency token. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses to sign, and X.500 subject information. The CRL (certificate revocation list) configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this operation returns the Amazon Resource Name (ARN) of the CA.
   */
  createCertificateAuthority(params: ACMPCA.Types.CreateCertificateAuthorityRequest, callback?: (err: AWSError, data: ACMPCA.Types.CreateCertificateAuthorityResponse) => void): Request<ACMPCA.Types.CreateCertificateAuthorityResponse, AWSError>;
  /**
   * Creates a private subordinate certificate authority (CA). You must specify the CA configuration, the revocation configuration, the CA type, and an optional idempotency token. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses to sign, and X.500 subject information. The CRL (certificate revocation list) configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this operation returns the Amazon Resource Name (ARN) of the CA.
   */
  createCertificateAuthority(callback?: (err: AWSError, data: ACMPCA.Types.CreateCertificateAuthorityResponse) => void): Request<ACMPCA.Types.CreateCertificateAuthorityResponse, AWSError>;
  /**
   * Creates an audit report that lists every time that the your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The IssueCertificate and RevokeCertificate operations use the private key. You can generate a new report every 30 minutes.
   */
  createCertificateAuthorityAuditReport(params: ACMPCA.Types.CreateCertificateAuthorityAuditReportRequest, callback?: (err: AWSError, data: ACMPCA.Types.CreateCertificateAuthorityAuditReportResponse) => void): Request<ACMPCA.Types.CreateCertificateAuthorityAuditReportResponse, AWSError>;
  /**
   * Creates an audit report that lists every time that the your CA private key is used. The report is saved in the Amazon S3 bucket that you specify on input. The IssueCertificate and RevokeCertificate operations use the private key. You can generate a new report every 30 minutes.
   */
  createCertificateAuthorityAuditReport(callback?: (err: AWSError, data: ACMPCA.Types.CreateCertificateAuthorityAuditReportResponse) => void): Request<ACMPCA.Types.CreateCertificateAuthorityAuditReportResponse, AWSError>;
  /**
   * Deletes a private certificate authority (CA). You must provide the ARN (Amazon Resource Name) of the private CA that you want to delete. You can find the ARN by calling the ListCertificateAuthorities operation. Before you can delete a CA, you must disable it. Call the UpdateCertificateAuthority operation and set the CertificateAuthorityStatus parameter to DISABLED.  Additionally, you can delete a CA if you are waiting for it to be created (the Status field of the CertificateAuthority is CREATING). You can also delete it if the CA has been created but you haven't yet imported the signed certificate (the Status is PENDING_CERTIFICATE) into ACM PCA.  If the CA is in one of the aforementioned states and you call DeleteCertificateAuthority, the CA's status changes to DELETED. However, the CA won't be permentantly deleted until the restoration period has passed. By default, if you do not set the PermanentDeletionTimeInDays parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The DescribeCertificateAuthority operation returns the time remaining in the restoration window of a Private CA in the DELETED state. To restore an eligable CA, call the RestoreCertificateAuthority operation.
   */
  deleteCertificateAuthority(params: ACMPCA.Types.DeleteCertificateAuthorityRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a private certificate authority (CA). You must provide the ARN (Amazon Resource Name) of the private CA that you want to delete. You can find the ARN by calling the ListCertificateAuthorities operation. Before you can delete a CA, you must disable it. Call the UpdateCertificateAuthority operation and set the CertificateAuthorityStatus parameter to DISABLED.  Additionally, you can delete a CA if you are waiting for it to be created (the Status field of the CertificateAuthority is CREATING). You can also delete it if the CA has been created but you haven't yet imported the signed certificate (the Status is PENDING_CERTIFICATE) into ACM PCA.  If the CA is in one of the aforementioned states and you call DeleteCertificateAuthority, the CA's status changes to DELETED. However, the CA won't be permentantly deleted until the restoration period has passed. By default, if you do not set the PermanentDeletionTimeInDays parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The DescribeCertificateAuthority operation returns the time remaining in the restoration window of a Private CA in the DELETED state. To restore an eligable CA, call the RestoreCertificateAuthority operation.
   */
  deleteCertificateAuthority(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Lists information about your private certificate authority (CA). You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following:     CREATING - ACM PCA is creating your private certificate authority.    PENDING_CERTIFICATE - The certificate is pending. You must use your on-premises root or subordinate CA to sign your private CA CSR and then import it into PCA.     ACTIVE - Your private CA is active.    DISABLED - Your private CA has been disabled.    EXPIRED - Your private CA certificate has expired.    FAILED - Your private CA has failed. Your CA can fail because of problems such a network outage or backend AWS failure or other errors. A failed CA can never return to the pending state. You must create a new CA.     DELETED - Your private CA is within the restoration period, after which it will be permanently deleted. The length of time remaining in the CA's restoration period will also be included in this operation's output.  
   */
  describeCertificateAuthority(params: ACMPCA.Types.DescribeCertificateAuthorityRequest, callback?: (err: AWSError, data: ACMPCA.Types.DescribeCertificateAuthorityResponse) => void): Request<ACMPCA.Types.DescribeCertificateAuthorityResponse, AWSError>;
  /**
   * Lists information about your private certificate authority (CA). You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following:     CREATING - ACM PCA is creating your private certificate authority.    PENDING_CERTIFICATE - The certificate is pending. You must use your on-premises root or subordinate CA to sign your private CA CSR and then import it into PCA.     ACTIVE - Your private CA is active.    DISABLED - Your private CA has been disabled.    EXPIRED - Your private CA certificate has expired.    FAILED - Your private CA has failed. Your CA can fail because of problems such a network outage or backend AWS failure or other errors. A failed CA can never return to the pending state. You must create a new CA.     DELETED - Your private CA is within the restoration period, after which it will be permanently deleted. The length of time remaining in the CA's restoration period will also be included in this operation's output.  
   */
  describeCertificateAuthority(callback?: (err: AWSError, data: ACMPCA.Types.DescribeCertificateAuthorityResponse) => void): Request<ACMPCA.Types.DescribeCertificateAuthorityResponse, AWSError>;
  /**
   * Lists information about a specific audit report created by calling the CreateCertificateAuthorityAuditReport operation. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the IssueCertificate operation or the RevokeCertificate operation. 
   */
  describeCertificateAuthorityAuditReport(params: ACMPCA.Types.DescribeCertificateAuthorityAuditReportRequest, callback?: (err: AWSError, data: ACMPCA.Types.DescribeCertificateAuthorityAuditReportResponse) => void): Request<ACMPCA.Types.DescribeCertificateAuthorityAuditReportResponse, AWSError>;
  /**
   * Lists information about a specific audit report created by calling the CreateCertificateAuthorityAuditReport operation. Audit information is created every time the certificate authority (CA) private key is used. The private key is used when you call the IssueCertificate operation or the RevokeCertificate operation. 
   */
  describeCertificateAuthorityAuditReport(callback?: (err: AWSError, data: ACMPCA.Types.DescribeCertificateAuthorityAuditReportResponse) => void): Request<ACMPCA.Types.DescribeCertificateAuthorityAuditReportResponse, AWSError>;
  /**
   * Retrieves a certificate from your private CA. The ARN of the certificate is returned when you call the IssueCertificate operation. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the GetCertificate operation. You can retrieve the certificate if it is in the ISSUED state. You can call the CreateCertificateAuthorityAuditReport operation to create a report that contains information about all of the certificates issued and revoked by your private CA. 
   */
  getCertificate(params: ACMPCA.Types.GetCertificateRequest, callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateResponse) => void): Request<ACMPCA.Types.GetCertificateResponse, AWSError>;
  /**
   * Retrieves a certificate from your private CA. The ARN of the certificate is returned when you call the IssueCertificate operation. You must specify both the ARN of your private CA and the ARN of the issued certificate when calling the GetCertificate operation. You can retrieve the certificate if it is in the ISSUED state. You can call the CreateCertificateAuthorityAuditReport operation to create a report that contains information about all of the certificates issued and revoked by your private CA. 
   */
  getCertificate(callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateResponse) => void): Request<ACMPCA.Types.GetCertificateResponse, AWSError>;
  /**
   * Retrieves the certificate and certificate chain for your private certificate authority (CA). Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. 
   */
  getCertificateAuthorityCertificate(params: ACMPCA.Types.GetCertificateAuthorityCertificateRequest, callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateAuthorityCertificateResponse) => void): Request<ACMPCA.Types.GetCertificateAuthorityCertificateResponse, AWSError>;
  /**
   * Retrieves the certificate and certificate chain for your private certificate authority (CA). Both the certificate and the chain are base64 PEM-encoded. The chain does not include the CA certificate. Each certificate in the chain signs the one before it. 
   */
  getCertificateAuthorityCertificate(callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateAuthorityCertificateResponse) => void): Request<ACMPCA.Types.GetCertificateAuthorityCertificateResponse, AWSError>;
  /**
   * Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the CreateCertificateAuthority operation. Take the CSR to your on-premises X.509 infrastructure and sign it by using your root or a subordinate CA. Then import the signed certificate back into ACM PCA by calling the ImportCertificateAuthorityCertificate operation. The CSR is returned as a base64 PEM-encoded string. 
   */
  getCertificateAuthorityCsr(params: ACMPCA.Types.GetCertificateAuthorityCsrRequest, callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateAuthorityCsrResponse) => void): Request<ACMPCA.Types.GetCertificateAuthorityCsrResponse, AWSError>;
  /**
   * Retrieves the certificate signing request (CSR) for your private certificate authority (CA). The CSR is created when you call the CreateCertificateAuthority operation. Take the CSR to your on-premises X.509 infrastructure and sign it by using your root or a subordinate CA. Then import the signed certificate back into ACM PCA by calling the ImportCertificateAuthorityCertificate operation. The CSR is returned as a base64 PEM-encoded string. 
   */
  getCertificateAuthorityCsr(callback?: (err: AWSError, data: ACMPCA.Types.GetCertificateAuthorityCsrResponse) => void): Request<ACMPCA.Types.GetCertificateAuthorityCsrResponse, AWSError>;
  /**
   * Imports your signed private CA certificate into ACM PCA. Before you can call this operation, you must create the private certificate authority by calling the CreateCertificateAuthority operation. You must then generate a certificate signing request (CSR) by calling the GetCertificateAuthorityCsr operation. Take the CSR to your on-premises CA and use the root certificate or a subordinate certificate to sign it. Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.   Your certificate chain must not include the private CA certificate that you are importing.   Your on-premises CA certificate must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built.    The chain must be PEM-encoded. 
   */
  importCertificateAuthorityCertificate(params: ACMPCA.Types.ImportCertificateAuthorityCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Imports your signed private CA certificate into ACM PCA. Before you can call this operation, you must create the private certificate authority by calling the CreateCertificateAuthority operation. You must then generate a certificate signing request (CSR) by calling the GetCertificateAuthorityCsr operation. Take the CSR to your on-premises CA and use the root certificate or a subordinate certificate to sign it. Create a certificate chain and copy the signed certificate and the certificate chain to your working directory.   Your certificate chain must not include the private CA certificate that you are importing.   Your on-premises CA certificate must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built.    The chain must be PEM-encoded. 
   */
  importCertificateAuthorityCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Uses your private certificate authority (CA) to issue a client certificate. This operation returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the GetCertificate operation and specifying the ARN.   You cannot use the ACM ListCertificateAuthorities operation to retrieve the ARNs of the certificates that you issue by using ACM PCA. 
   */
  issueCertificate(params: ACMPCA.Types.IssueCertificateRequest, callback?: (err: AWSError, data: ACMPCA.Types.IssueCertificateResponse) => void): Request<ACMPCA.Types.IssueCertificateResponse, AWSError>;
  /**
   * Uses your private certificate authority (CA) to issue a client certificate. This operation returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the GetCertificate operation and specifying the ARN.   You cannot use the ACM ListCertificateAuthorities operation to retrieve the ARNs of the certificates that you issue by using ACM PCA. 
   */
  issueCertificate(callback?: (err: AWSError, data: ACMPCA.Types.IssueCertificateResponse) => void): Request<ACMPCA.Types.IssueCertificateResponse, AWSError>;
  /**
   * Lists the private certificate authorities that you created by using the CreateCertificateAuthority operation.
   */
  listCertificateAuthorities(params: ACMPCA.Types.ListCertificateAuthoritiesRequest, callback?: (err: AWSError, data: ACMPCA.Types.ListCertificateAuthoritiesResponse) => void): Request<ACMPCA.Types.ListCertificateAuthoritiesResponse, AWSError>;
  /**
   * Lists the private certificate authorities that you created by using the CreateCertificateAuthority operation.
   */
  listCertificateAuthorities(callback?: (err: AWSError, data: ACMPCA.Types.ListCertificateAuthoritiesResponse) => void): Request<ACMPCA.Types.ListCertificateAuthoritiesResponse, AWSError>;
  /**
   * Lists the tags, if any, that are associated with your private CA. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the TagCertificateAuthority operation to add one or more tags to your CA. Call the UntagCertificateAuthority operation to remove tags. 
   */
  listTags(params: ACMPCA.Types.ListTagsRequest, callback?: (err: AWSError, data: ACMPCA.Types.ListTagsResponse) => void): Request<ACMPCA.Types.ListTagsResponse, AWSError>;
  /**
   * Lists the tags, if any, that are associated with your private CA. Tags are labels that you can use to identify and organize your CAs. Each tag consists of a key and an optional value. Call the TagCertificateAuthority operation to add one or more tags to your CA. Call the UntagCertificateAuthority operation to remove tags. 
   */
  listTags(callback?: (err: AWSError, data: ACMPCA.Types.ListTagsResponse) => void): Request<ACMPCA.Types.ListTagsResponse, AWSError>;
  /**
   * Restores a certificate authority (CA) that is in the DELETED state. You can restore a CA during the period that you defined in the PermanentDeletionTimeInDays parameter of the DeleteCertificateAuthority operation. Currently, you can specify 7 to 30 days. If you did not specify a PermanentDeletionTimeInDays value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the DELETED state by calling the DescribeCertificateAuthority or ListCertificateAuthorities operations. The status of a restored CA is set to its pre-deletion status when the RestoreCertificateAuthority operation returns. To change its status to ACTIVE, call the UpdateCertificateAuthority operation. If the private CA was in the PENDING_CERTIFICATE state at deletion, you must use the ImportCertificateAuthorityCertificate operation to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.
   */
  restoreCertificateAuthority(params: ACMPCA.Types.RestoreCertificateAuthorityRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Restores a certificate authority (CA) that is in the DELETED state. You can restore a CA during the period that you defined in the PermanentDeletionTimeInDays parameter of the DeleteCertificateAuthority operation. Currently, you can specify 7 to 30 days. If you did not specify a PermanentDeletionTimeInDays value, by default you can restore the CA at any time in a 30 day period. You can check the time remaining in the restoration period of a private CA in the DELETED state by calling the DescribeCertificateAuthority or ListCertificateAuthorities operations. The status of a restored CA is set to its pre-deletion status when the RestoreCertificateAuthority operation returns. To change its status to ACTIVE, call the UpdateCertificateAuthority operation. If the private CA was in the PENDING_CERTIFICATE state at deletion, you must use the ImportCertificateAuthorityCertificate operation to import a certificate authority into the private CA before it can be activated. You cannot restore a CA after the restoration period has ended.
   */
  restoreCertificateAuthority(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes a certificate that you issued by calling the IssueCertificate operation. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. ACM PCA writes the CRL to an S3 bucket that you specify. For more information about revocation, see the CrlConfiguration structure. ACM PCA also writes revocation information to the audit report. For more information, see CreateCertificateAuthorityAuditReport. 
   */
  revokeCertificate(params: ACMPCA.Types.RevokeCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes a certificate that you issued by calling the IssueCertificate operation. If you enable a certificate revocation list (CRL) when you create or update your private CA, information about the revoked certificates will be included in the CRL. ACM PCA writes the CRL to an S3 bucket that you specify. For more information about revocation, see the CrlConfiguration structure. ACM PCA also writes revocation information to the audit report. For more information, see CreateCertificateAuthorityAuditReport. 
   */
  revokeCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the UntagCertificateAuthority operation. Call the ListTags operation to see what tags are associated with your CA. 
   */
  tagCertificateAuthority(params: ACMPCA.Types.TagCertificateAuthorityRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds one or more tags to your private CA. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. You specify the private CA on input by its Amazon Resource Name (ARN). You specify the tag by using a key-value pair. You can apply a tag to just one private CA if you want to identify a specific characteristic of that CA, or you can apply the same tag to multiple private CAs if you want to filter for a common relationship among those CAs. To remove one or more tags, use the UntagCertificateAuthority operation. Call the ListTags operation to see what tags are associated with your CA. 
   */
  tagCertificateAuthority(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this operation, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the TagCertificateAuthority. Call the ListTags operation to see what tags are associated with your CA. 
   */
  untagCertificateAuthority(params: ACMPCA.Types.UntagCertificateAuthorityRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove one or more tags from your private CA. A tag consists of a key-value pair. If you do not specify the value portion of the tag when calling this operation, the tag will be removed regardless of value. If you specify a value, the tag is removed only if it is associated with the specified value. To add tags to a private CA, use the TagCertificateAuthority. Call the ListTags operation to see what tags are associated with your CA. 
   */
  untagCertificateAuthority(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the ACTIVE or DISABLED state before you can update it. You can disable a private CA that is in the ACTIVE state or make a CA that is in the DISABLED state active again.
   */
  updateCertificateAuthority(params: ACMPCA.Types.UpdateCertificateAuthorityRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the ACTIVE or DISABLED state before you can update it. You can disable a private CA that is in the ACTIVE state or make a CA that is in the DISABLED state active again.
   */
  updateCertificateAuthority(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace ACMPCA {
  export interface ASN1Subject {
    /**
     * Two-digit code that specifies the country in which the certificate subject located.
     */
    Country?: CountryCodeString;
    /**
     * Legal name of the organization with which the certificate subject is affiliated. 
     */
    Organization?: String64;
    /**
     * A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.
     */
    OrganizationalUnit?: String64;
    /**
     * Disambiguating information for the certificate subject.
     */
    DistinguishedNameQualifier?: DistinguishedNameQualifierString;
    /**
     * State in which the subject of the certificate is located.
     */
    State?: String128;
    /**
     * Fully qualified domain name (FQDN) associated with the certificate subject.
     */
    CommonName?: String64;
    /**
     * The certificate serial number.
     */
    SerialNumber?: String64;
    /**
     * The locality (such as a city or town) in which the certificate subject is located.
     */
    Locality?: String128;
    /**
     * A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.
     */
    Title?: String64;
    /**
     * Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.
     */
    Surname?: String40;
    /**
     * First name.
     */
    GivenName?: String16;
    /**
     * Concatenation that typically contains the first letter of the GivenName, the first letter of the middle name if one exists, and the first letter of the SurName.
     */
    Initials?: String5;
    /**
     * Typically a shortened version of a longer GivenName. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
     */
    Pseudonym?: String128;
    /**
     * Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.
     */
    GenerationQualifier?: String3;
  }
  export type Arn = string;
  export type AuditReportId = string;
  export type AuditReportResponseFormat = "JSON"|"CSV"|string;
  export type AuditReportStatus = "CREATING"|"SUCCESS"|"FAILED"|string;
  export type Boolean = boolean;
  export type CertificateAuthorities = CertificateAuthority[];
  export interface CertificateAuthority {
    /**
     * Amazon Resource Name (ARN) for your private certificate authority (CA). The format is  12345678-1234-1234-1234-123456789012 .
     */
    Arn?: Arn;
    /**
     * Date and time at which your private CA was created.
     */
    CreatedAt?: TStamp;
    /**
     * Date and time at which your private CA was last updated.
     */
    LastStateChangeAt?: TStamp;
    /**
     * Type of your private CA.
     */
    Type?: CertificateAuthorityType;
    /**
     * Serial number of your private CA.
     */
    Serial?: String;
    /**
     * Status of your private CA.
     */
    Status?: CertificateAuthorityStatus;
    /**
     * Date and time before which your private CA certificate is not valid.
     */
    NotBefore?: TStamp;
    /**
     * Date and time after which your private CA certificate is not valid.
     */
    NotAfter?: TStamp;
    /**
     * Reason the request to create your private CA failed.
     */
    FailureReason?: FailureReason;
    /**
     * Your private CA configuration.
     */
    CertificateAuthorityConfiguration?: CertificateAuthorityConfiguration;
    /**
     * Information about the certificate revocation list (CRL) created and maintained by your private CA. 
     */
    RevocationConfiguration?: RevocationConfiguration;
    /**
     * The period during which a deleted CA can be restored. For more information, see the PermanentDeletionTimeInDays parameter of the DeleteCertificateAuthorityRequest operation. 
     */
    RestorableUntil?: TStamp;
  }
  export interface CertificateAuthorityConfiguration {
    /**
     * Type of the public key algorithm and size, in bits, of the key pair that your key pair creates when it issues a certificate.
     */
    KeyAlgorithm: KeyAlgorithm;
    /**
     * Name of the algorithm your private CA uses to sign certificate requests.
     */
    SigningAlgorithm: SigningAlgorithm;
    /**
     * Structure that contains X.500 distinguished name information for your private CA.
     */
    Subject: ASN1Subject;
  }
  export type CertificateAuthorityStatus = "CREATING"|"PENDING_CERTIFICATE"|"ACTIVE"|"DELETED"|"DISABLED"|"EXPIRED"|"FAILED"|string;
  export type CertificateAuthorityType = "SUBORDINATE"|string;
  export type CertificateBody = string;
  export type CertificateBodyBlob = Buffer|Uint8Array|Blob|string;
  export type CertificateChain = string;
  export type CertificateChainBlob = Buffer|Uint8Array|Blob|string;
  export type CountryCodeString = string;
  export interface CreateCertificateAuthorityAuditReportRequest {
    /**
     * Amazon Resource Name (ARN) of the CA to be audited. This is of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 .
     */
    CertificateAuthorityArn: Arn;
    /**
     * Name of the S3 bucket that will contain the audit report.
     */
    S3BucketName: String;
    /**
     * Format in which to create the report. This can be either JSON or CSV.
     */
    AuditReportResponseFormat: AuditReportResponseFormat;
  }
  export interface CreateCertificateAuthorityAuditReportResponse {
    /**
     * An alphanumeric string that contains a report identifier.
     */
    AuditReportId?: AuditReportId;
    /**
     * The key that uniquely identifies the report file in your S3 bucket.
     */
    S3Key?: String;
  }
  export interface CreateCertificateAuthorityRequest {
    /**
     * Name and bit size of the private key algorithm, the name of the signing algorithm, and X.500 certificate subject information.
     */
    CertificateAuthorityConfiguration: CertificateAuthorityConfiguration;
    /**
     * Contains a Boolean value that you can use to enable a certification revocation list (CRL) for the CA, the name of the S3 bucket to which ACM PCA will write the CRL, and an optional CNAME alias that you can use to hide the name of your bucket in the CRL Distribution Points extension of your CA certificate. For more information, see the CrlConfiguration structure. 
     */
    RevocationConfiguration?: RevocationConfiguration;
    /**
     * The type of the certificate authority. Currently, this must be SUBORDINATE.
     */
    CertificateAuthorityType: CertificateAuthorityType;
    /**
     * Alphanumeric string that can be used to distinguish between calls to CreateCertificateAuthority. Idempotency tokens time out after five minutes. Therefore, if you call CreateCertificateAuthority multiple times with the same idempotency token within a five minute period, ACM PCA recognizes that you are requesting only one certificate. As a result, ACM PCA issues only one. If you change the idempotency token for each call, however, ACM PCA recognizes that you are requesting multiple certificates.
     */
    IdempotencyToken?: IdempotencyToken;
  }
  export interface CreateCertificateAuthorityResponse {
    /**
     * If successful, the Amazon Resource Name (ARN) of the certificate authority (CA). This is of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn?: Arn;
  }
  export interface CrlConfiguration {
    /**
     * Boolean value that specifies whether certificate revocation lists (CRLs) are enabled. You can use this value to enable certificate revocation for a new CA when you call the CreateCertificateAuthority operation or for an existing CA when you call the UpdateCertificateAuthority operation. 
     */
    Enabled: Boolean;
    /**
     * Number of days until a certificate expires.
     */
    ExpirationInDays?: Integer1To5000;
    /**
     * Name inserted into the certificate CRL Distribution Points extension that enables the use of an alias for the CRL distribution point. Use this value if you don't want the name of your S3 bucket to be public.
     */
    CustomCname?: String253;
    /**
     * Name of the S3 bucket that contains the CRL. If you do not provide a value for the CustomCname argument, the name of your S3 bucket is placed into the CRL Distribution Points extension of the issued certificate. You can change the name of your bucket by calling the UpdateCertificateAuthority operation. You must specify a bucket policy that allows ACM PCA to write the CRL to your bucket.
     */
    S3BucketName?: String3To255;
  }
  export type CsrBlob = Buffer|Uint8Array|Blob|string;
  export type CsrBody = string;
  export interface DeleteCertificateAuthorityRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must have the following form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn: Arn;
    /**
     * The number of days to make a CA restorable after it has been deleted. This can be anywhere from 7 to 30 days, with 30 being the default.
     */
    PermanentDeletionTimeInDays?: PermanentDeletionTimeInDays;
  }
  export interface DescribeCertificateAuthorityAuditReportRequest {
    /**
     * The Amazon Resource Name (ARN) of the private CA. This must be of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn: Arn;
    /**
     * The report ID returned by calling the CreateCertificateAuthorityAuditReport operation.
     */
    AuditReportId: AuditReportId;
  }
  export interface DescribeCertificateAuthorityAuditReportResponse {
    /**
     * Specifies whether report creation is in progress, has succeeded, or has failed.
     */
    AuditReportStatus?: AuditReportStatus;
    /**
     * Name of the S3 bucket that contains the report.
     */
    S3BucketName?: String;
    /**
     * S3 key that uniquely identifies the report file in your S3 bucket.
     */
    S3Key?: String;
    /**
     * The date and time at which the report was created.
     */
    CreatedAt?: TStamp;
  }
  export interface DescribeCertificateAuthorityRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn: Arn;
  }
  export interface DescribeCertificateAuthorityResponse {
    /**
     * A CertificateAuthority structure that contains information about your private CA.
     */
    CertificateAuthority?: CertificateAuthority;
  }
  export type DistinguishedNameQualifierString = string;
  export type FailureReason = "REQUEST_TIMED_OUT"|"UNSUPPORTED_ALGORITHM"|"OTHER"|string;
  export interface GetCertificateAuthorityCertificateRequest {
    /**
     * The Amazon Resource Name (ARN) of your private CA. This is of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn: Arn;
  }
  export interface GetCertificateAuthorityCertificateResponse {
    /**
     * Base64-encoded certificate authority (CA) certificate.
     */
    Certificate?: CertificateBody;
    /**
     * Base64-encoded certificate chain that includes any intermediate certificates and chains up to root on-premises certificate that you used to sign your private CA certificate. The chain does not include your private CA certificate. 
     */
    CertificateChain?: CertificateChain;
  }
  export interface GetCertificateAuthorityCsrRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called the CreateCertificateAuthority operation. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
  }
  export interface GetCertificateAuthorityCsrResponse {
    /**
     * The base64 PEM-encoded certificate signing request (CSR) for your private CA certificate.
     */
    Csr?: CsrBody;
  }
  export interface GetCertificateRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 . 
     */
    CertificateAuthorityArn: Arn;
    /**
     * The ARN of the issued certificate. The ARN contains the certificate serial number and must be in the following form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012/certificate/286535153982981100925020015808220737245  
     */
    CertificateArn: Arn;
  }
  export interface GetCertificateResponse {
    /**
     * The base64 PEM-encoded certificate specified by the CertificateArn parameter.
     */
    Certificate?: CertificateBody;
    /**
     * The base64 PEM-encoded certificate chain that chains up to the on-premises root CA certificate that you used to sign your private CA certificate. 
     */
    CertificateChain?: CertificateChain;
  }
  export type IdempotencyToken = string;
  export interface ImportCertificateAuthorityCertificateRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * The PEM-encoded certificate for your private CA. This must be signed by using your on-premises CA.
     */
    Certificate: CertificateBodyBlob;
    /**
     * A PEM-encoded file that contains all of your certificates, other than the certificate you're importing, chaining up to your root CA. Your on-premises root certificate is the last in the chain, and each certificate in the chain signs the one preceding. 
     */
    CertificateChain: CertificateChainBlob;
  }
  export type Integer1To5000 = number;
  export interface IssueCertificateRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must be of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * The certificate signing request (CSR) for the certificate you want to issue. You can use the following OpenSSL command to create the CSR and a 2048 bit RSA private key.   openssl req -new -newkey rsa:2048 -days 365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr  If you have a configuration file, you can use the following OpenSSL command. The usr_cert block in the configuration file contains your X509 version 3 extensions.   openssl req -new -config openssl_rsa.cnf -extensions usr_cert -newkey rsa:2048 -days -365 -keyout private/test_cert_priv_key.pem -out csr/test_cert_.csr 
     */
    Csr: CsrBlob;
    /**
     * The name of the algorithm that will be used to sign the certificate to be issued.
     */
    SigningAlgorithm: SigningAlgorithm;
    /**
     * The type of the validity period.
     */
    Validity: Validity;
    /**
     * Custom string that can be used to distinguish between calls to the IssueCertificate operation. Idempotency tokens time out after one hour. Therefore, if you call IssueCertificate multiple times with the same idempotency token within 5 minutes, ACM PCA recognizes that you are requesting only one certificate and will issue only one. If you change the idempotency token for each call, PCA recognizes that you are requesting multiple certificates.
     */
    IdempotencyToken?: IdempotencyToken;
  }
  export interface IssueCertificateResponse {
    /**
     * The Amazon Resource Name (ARN) of the issued certificate and the certificate serial number. This is of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012/certificate/286535153982981100925020015808220737245  
     */
    CertificateArn?: Arn;
  }
  export type KeyAlgorithm = "RSA_2048"|"RSA_4096"|"EC_prime256v1"|"EC_secp384r1"|string;
  export interface ListCertificateAuthoritiesRequest {
    /**
     * Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the NextToken parameter from the response you just received.
     */
    NextToken?: NextToken;
    /**
     * Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this NextToken value in a subsequent request to retrieve additional items.
     */
    MaxResults?: MaxResults;
  }
  export interface ListCertificateAuthoritiesResponse {
    /**
     * Summary information about each certificate authority you have created.
     */
    CertificateAuthorities?: CertificateAuthorities;
    /**
     * When the list is truncated, this value is present and should be used for the NextToken parameter in a subsequent pagination request.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called the CreateCertificateAuthority operation. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of NextToken from the response you just received.
     */
    NextToken?: NextToken;
    /**
     * Use this parameter when paginating results to specify the maximum number of items to return in the response. If additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this NextToken value in a subsequent request to retrieve additional items.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTagsResponse {
    /**
     * The tags associated with your private CA.
     */
    Tags?: TagList;
    /**
     * When the list is truncated, this value is present and should be used for the NextToken parameter in a subsequent pagination request. 
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export type PermanentDeletionTimeInDays = number;
  export type PositiveLong = number;
  export interface RestoreCertificateAuthorityRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called the CreateCertificateAuthority operation. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
  }
  export interface RevocationConfiguration {
    /**
     * Configuration of the certificate revocation list (CRL), if any, maintained by your private CA.
     */
    CrlConfiguration?: CrlConfiguration;
  }
  export type RevocationReason = "UNSPECIFIED"|"KEY_COMPROMISE"|"CERTIFICATE_AUTHORITY_COMPROMISE"|"AFFILIATION_CHANGED"|"SUPERSEDED"|"CESSATION_OF_OPERATION"|"PRIVILEGE_WITHDRAWN"|"A_A_COMPROMISE"|string;
  export interface RevokeCertificateRequest {
    /**
     * Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * Serial number of the certificate to be revoked. This must be in hexadecimal format. You can retrieve the serial number by calling GetCertificate with the Amazon Resource Name (ARN) of the certificate you want and the ARN of your private CA. The GetCertificate operation retrieves the certificate in the PEM format. You can use the following OpenSSL command to list the certificate in text format and copy the hexadecimal serial number.   openssl x509 -in file_path -text -noout  You can also copy the serial number from the console or use the DescribeCertificate operation in the AWS Certificate Manager API Reference. 
     */
    CertificateSerial: String128;
    /**
     * Specifies why you revoked the certificate.
     */
    RevocationReason: RevocationReason;
  }
  export type SigningAlgorithm = "SHA256WITHECDSA"|"SHA384WITHECDSA"|"SHA512WITHECDSA"|"SHA256WITHRSA"|"SHA384WITHRSA"|"SHA512WITHRSA"|string;
  export type String = string;
  export type String128 = string;
  export type String16 = string;
  export type String253 = string;
  export type String3 = string;
  export type String3To255 = string;
  export type String40 = string;
  export type String5 = string;
  export type String64 = string;
  export type TStamp = Date;
  export interface Tag {
    /**
     * Key (name) of the tag.
     */
    Key: TagKey;
    /**
     * Value of the tag.
     */
    Value?: TagValue;
  }
  export interface TagCertificateAuthorityRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * List of tags to be associated with the CA.
     */
    Tags: TagList;
  }
  export type TagKey = string;
  export type TagList = Tag[];
  export type TagValue = string;
  export interface UntagCertificateAuthorityRequest {
    /**
     * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority. This must be of the form:   arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * List of tags to be removed from the CA.
     */
    Tags: TagList;
  }
  export interface UpdateCertificateAuthorityRequest {
    /**
     * Amazon Resource Name (ARN) of the private CA that issued the certificate to be revoked. This must be of the form:  arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012  
     */
    CertificateAuthorityArn: Arn;
    /**
     * Revocation information for your private CA.
     */
    RevocationConfiguration?: RevocationConfiguration;
    /**
     * Status of your private CA.
     */
    Status?: CertificateAuthorityStatus;
  }
  export interface Validity {
    /**
     * Time period.
     */
    Value: PositiveLong;
    /**
     * Specifies whether the Value parameter represents days, months, or years.
     */
    Type: ValidityPeriodType;
  }
  export type ValidityPeriodType = "END_DATE"|"ABSOLUTE"|"DAYS"|"MONTHS"|"YEARS"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-08-22"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ACMPCA client.
   */
  export import Types = ACMPCA;
}
export = ACMPCA;
