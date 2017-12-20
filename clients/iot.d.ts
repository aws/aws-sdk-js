import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Iot extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Iot.Types.ClientConfiguration)
  config: Config & Iot.Types.ClientConfiguration;
  /**
   * Accepts a pending certificate transfer. The default state of the certificate is INACTIVE. To check for pending certificate transfers, call ListCertificates to enumerate your certificates.
   */
  acceptCertificateTransfer(params: Iot.Types.AcceptCertificateTransferRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Accepts a pending certificate transfer. The default state of the certificate is INACTIVE. To check for pending certificate transfers, call ListCertificates to enumerate your certificates.
   */
  acceptCertificateTransfer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds a thing to a thing group.
   */
  addThingToThingGroup(params: Iot.Types.AddThingToThingGroupRequest, callback?: (err: AWSError, data: Iot.Types.AddThingToThingGroupResponse) => void): Request<Iot.Types.AddThingToThingGroupResponse, AWSError>;
  /**
   * Adds a thing to a thing group.
   */
  addThingToThingGroup(callback?: (err: AWSError, data: Iot.Types.AddThingToThingGroupResponse) => void): Request<Iot.Types.AddThingToThingGroupResponse, AWSError>;
  /**
   * Associates a group with a continuous job. The following criteria must be met:    The job must have been created with the targetSelection field set to "CONTINUOUS".   The job status must currently be "IN_PROGRESS".   The total number of targets associated with a job must not exceed 100.  
   */
  associateTargetsWithJob(params: Iot.Types.AssociateTargetsWithJobRequest, callback?: (err: AWSError, data: Iot.Types.AssociateTargetsWithJobResponse) => void): Request<Iot.Types.AssociateTargetsWithJobResponse, AWSError>;
  /**
   * Associates a group with a continuous job. The following criteria must be met:    The job must have been created with the targetSelection field set to "CONTINUOUS".   The job status must currently be "IN_PROGRESS".   The total number of targets associated with a job must not exceed 100.  
   */
  associateTargetsWithJob(callback?: (err: AWSError, data: Iot.Types.AssociateTargetsWithJobResponse) => void): Request<Iot.Types.AssociateTargetsWithJobResponse, AWSError>;
  /**
   * Attaches a policy to the specified target.
   */
  attachPolicy(params: Iot.Types.AttachPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches a policy to the specified target.
   */
  attachPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches the specified policy to the specified principal (certificate or other credential).  Note: This API is deprecated. Please use AttachPolicy instead.
   */
  attachPrincipalPolicy(params: Iot.Types.AttachPrincipalPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches the specified policy to the specified principal (certificate or other credential).  Note: This API is deprecated. Please use AttachPolicy instead.
   */
  attachPrincipalPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches the specified principal to the specified thing.
   */
  attachThingPrincipal(params: Iot.Types.AttachThingPrincipalRequest, callback?: (err: AWSError, data: Iot.Types.AttachThingPrincipalResponse) => void): Request<Iot.Types.AttachThingPrincipalResponse, AWSError>;
  /**
   * Attaches the specified principal to the specified thing.
   */
  attachThingPrincipal(callback?: (err: AWSError, data: Iot.Types.AttachThingPrincipalResponse) => void): Request<Iot.Types.AttachThingPrincipalResponse, AWSError>;
  /**
   * Cancels a pending transfer for the specified certificate.  Note Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use RejectCertificateTransfer instead.) After transfer, AWS IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled. After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.
   */
  cancelCertificateTransfer(params: Iot.Types.CancelCertificateTransferRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Cancels a pending transfer for the specified certificate.  Note Only the transfer source account can use this operation to cancel a transfer. (Transfer destinations can use RejectCertificateTransfer instead.) After transfer, AWS IoT returns the certificate to the source account in the INACTIVE state. After the destination account has accepted the transfer, the transfer cannot be cancelled. After a certificate transfer is cancelled, the status of the certificate changes from PENDING_TRANSFER to INACTIVE.
   */
  cancelCertificateTransfer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Cancels a job.
   */
  cancelJob(params: Iot.Types.CancelJobRequest, callback?: (err: AWSError, data: Iot.Types.CancelJobResponse) => void): Request<Iot.Types.CancelJobResponse, AWSError>;
  /**
   * Cancels a job.
   */
  cancelJob(callback?: (err: AWSError, data: Iot.Types.CancelJobResponse) => void): Request<Iot.Types.CancelJobResponse, AWSError>;
  /**
   * Clears the default authorizer.
   */
  clearDefaultAuthorizer(params: Iot.Types.ClearDefaultAuthorizerRequest, callback?: (err: AWSError, data: Iot.Types.ClearDefaultAuthorizerResponse) => void): Request<Iot.Types.ClearDefaultAuthorizerResponse, AWSError>;
  /**
   * Clears the default authorizer.
   */
  clearDefaultAuthorizer(callback?: (err: AWSError, data: Iot.Types.ClearDefaultAuthorizerResponse) => void): Request<Iot.Types.ClearDefaultAuthorizerResponse, AWSError>;
  /**
   * Creates an authorizer.
   */
  createAuthorizer(params: Iot.Types.CreateAuthorizerRequest, callback?: (err: AWSError, data: Iot.Types.CreateAuthorizerResponse) => void): Request<Iot.Types.CreateAuthorizerResponse, AWSError>;
  /**
   * Creates an authorizer.
   */
  createAuthorizer(callback?: (err: AWSError, data: Iot.Types.CreateAuthorizerResponse) => void): Request<Iot.Types.CreateAuthorizerResponse, AWSError>;
  /**
   * Creates an X.509 certificate using the specified certificate signing request.  Note: The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384 curves.   Note: Reusing the same certificate signing request (CSR) results in a distinct certificate. You can create multiple certificates in a batch by creating a directory, copying multiple .csr files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs. Assuming a set of CSRs are located inside of the directory my-csr-directory: On Linux and OS X, the command is: $ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{} This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the aws iot create-certificate-from-csr AWS CLI command to create a certificate for the corresponding CSR. The aws iot create-certificate-from-csr part of the command can also be run in parallel to speed up the certificate creation process: $ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{} On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is: &gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_} On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is: &gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path"
   */
  createCertificateFromCsr(params: Iot.Types.CreateCertificateFromCsrRequest, callback?: (err: AWSError, data: Iot.Types.CreateCertificateFromCsrResponse) => void): Request<Iot.Types.CreateCertificateFromCsrResponse, AWSError>;
  /**
   * Creates an X.509 certificate using the specified certificate signing request.  Note: The CSR must include a public key that is either an RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384 curves.   Note: Reusing the same certificate signing request (CSR) results in a distinct certificate. You can create multiple certificates in a batch by creating a directory, copying multiple .csr files into that directory, and then specifying that directory on the command line. The following commands show how to create a batch of certificates given a batch of CSRs. Assuming a set of CSRs are located inside of the directory my-csr-directory: On Linux and OS X, the command is: $ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{} This command lists all of the CSRs in my-csr-directory and pipes each CSR file name to the aws iot create-certificate-from-csr AWS CLI command to create a certificate for the corresponding CSR. The aws iot create-certificate-from-csr part of the command can also be run in parallel to speed up the certificate creation process: $ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/{} On Windows PowerShell, the command to create certificates for all CSRs in my-csr-directory is: &gt; ls -Name my-csr-directory | %{aws iot create-certificate-from-csr --certificate-signing-request file://my-csr-directory/$_} On a Windows command prompt, the command to create certificates for all CSRs in my-csr-directory is: &gt; forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr --certificate-signing-request file://@path"
   */
  createCertificateFromCsr(callback?: (err: AWSError, data: Iot.Types.CreateCertificateFromCsrResponse) => void): Request<Iot.Types.CreateCertificateFromCsrResponse, AWSError>;
  /**
   * Creates a job.
   */
  createJob(params: Iot.Types.CreateJobRequest, callback?: (err: AWSError, data: Iot.Types.CreateJobResponse) => void): Request<Iot.Types.CreateJobResponse, AWSError>;
  /**
   * Creates a job.
   */
  createJob(callback?: (err: AWSError, data: Iot.Types.CreateJobResponse) => void): Request<Iot.Types.CreateJobResponse, AWSError>;
  /**
   * Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key.  Note This is the only time AWS IoT issues the private key for this certificate, so it is important to keep it in a secure location.
   */
  createKeysAndCertificate(params: Iot.Types.CreateKeysAndCertificateRequest, callback?: (err: AWSError, data: Iot.Types.CreateKeysAndCertificateResponse) => void): Request<Iot.Types.CreateKeysAndCertificateResponse, AWSError>;
  /**
   * Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued public key.  Note This is the only time AWS IoT issues the private key for this certificate, so it is important to keep it in a secure location.
   */
  createKeysAndCertificate(callback?: (err: AWSError, data: Iot.Types.CreateKeysAndCertificateResponse) => void): Request<Iot.Types.CreateKeysAndCertificateResponse, AWSError>;
  /**
   * Creates an AWS IoT OTAUpdate on a target group of things or groups.
   */
  createOTAUpdate(params: Iot.Types.CreateOTAUpdateRequest, callback?: (err: AWSError, data: Iot.Types.CreateOTAUpdateResponse) => void): Request<Iot.Types.CreateOTAUpdateResponse, AWSError>;
  /**
   * Creates an AWS IoT OTAUpdate on a target group of things or groups.
   */
  createOTAUpdate(callback?: (err: AWSError, data: Iot.Types.CreateOTAUpdateResponse) => void): Request<Iot.Types.CreateOTAUpdateResponse, AWSError>;
  /**
   * Creates an AWS IoT policy. The created policy is the default version for the policy. This operation creates a policy version with a version identifier of 1 and sets 1 as the policy's default version.
   */
  createPolicy(params: Iot.Types.CreatePolicyRequest, callback?: (err: AWSError, data: Iot.Types.CreatePolicyResponse) => void): Request<Iot.Types.CreatePolicyResponse, AWSError>;
  /**
   * Creates an AWS IoT policy. The created policy is the default version for the policy. This operation creates a policy version with a version identifier of 1 and sets 1 as the policy's default version.
   */
  createPolicy(callback?: (err: AWSError, data: Iot.Types.CreatePolicyResponse) => void): Request<Iot.Types.CreatePolicyResponse, AWSError>;
  /**
   * Creates a new version of the specified AWS IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use DeletePolicyVersion to delete an existing version before you create a new one. Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
   */
  createPolicyVersion(params: Iot.Types.CreatePolicyVersionRequest, callback?: (err: AWSError, data: Iot.Types.CreatePolicyVersionResponse) => void): Request<Iot.Types.CreatePolicyVersionResponse, AWSError>;
  /**
   * Creates a new version of the specified AWS IoT policy. To update a policy, create a new policy version. A managed policy can have up to five versions. If the policy has five versions, you must use DeletePolicyVersion to delete an existing version before you create a new one. Optionally, you can set the new version as the policy's default version. The default version is the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
   */
  createPolicyVersion(callback?: (err: AWSError, data: Iot.Types.CreatePolicyVersionResponse) => void): Request<Iot.Types.CreatePolicyVersionResponse, AWSError>;
  /**
   * Creates a role alias.
   */
  createRoleAlias(params: Iot.Types.CreateRoleAliasRequest, callback?: (err: AWSError, data: Iot.Types.CreateRoleAliasResponse) => void): Request<Iot.Types.CreateRoleAliasResponse, AWSError>;
  /**
   * Creates a role alias.
   */
  createRoleAlias(callback?: (err: AWSError, data: Iot.Types.CreateRoleAliasResponse) => void): Request<Iot.Types.CreateRoleAliasResponse, AWSError>;
  /**
   * Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream. The total size of a file associated with the stream cannot exceed more than 2 MB. The stream will be created with version 0. If a stream is created with the same streamID as a stream that existed and was deleted within last 90 days, we will resurrect that old stream by incrementing the version by 1.
   */
  createStream(params: Iot.Types.CreateStreamRequest, callback?: (err: AWSError, data: Iot.Types.CreateStreamResponse) => void): Request<Iot.Types.CreateStreamResponse, AWSError>;
  /**
   * Creates a stream for delivering one or more large files in chunks over MQTT. A stream transports data bytes in chunks or blocks packaged as MQTT messages from a source like S3. You can have one or more files associated with a stream. The total size of a file associated with the stream cannot exceed more than 2 MB. The stream will be created with version 0. If a stream is created with the same streamID as a stream that existed and was deleted within last 90 days, we will resurrect that old stream by incrementing the version by 1.
   */
  createStream(callback?: (err: AWSError, data: Iot.Types.CreateStreamResponse) => void): Request<Iot.Types.CreateStreamResponse, AWSError>;
  /**
   * Creates a thing record in the thing registry.
   */
  createThing(params: Iot.Types.CreateThingRequest, callback?: (err: AWSError, data: Iot.Types.CreateThingResponse) => void): Request<Iot.Types.CreateThingResponse, AWSError>;
  /**
   * Creates a thing record in the thing registry.
   */
  createThing(callback?: (err: AWSError, data: Iot.Types.CreateThingResponse) => void): Request<Iot.Types.CreateThingResponse, AWSError>;
  /**
   * Create a thing group.
   */
  createThingGroup(params: Iot.Types.CreateThingGroupRequest, callback?: (err: AWSError, data: Iot.Types.CreateThingGroupResponse) => void): Request<Iot.Types.CreateThingGroupResponse, AWSError>;
  /**
   * Create a thing group.
   */
  createThingGroup(callback?: (err: AWSError, data: Iot.Types.CreateThingGroupResponse) => void): Request<Iot.Types.CreateThingGroupResponse, AWSError>;
  /**
   * Creates a new thing type.
   */
  createThingType(params: Iot.Types.CreateThingTypeRequest, callback?: (err: AWSError, data: Iot.Types.CreateThingTypeResponse) => void): Request<Iot.Types.CreateThingTypeResponse, AWSError>;
  /**
   * Creates a new thing type.
   */
  createThingType(callback?: (err: AWSError, data: Iot.Types.CreateThingTypeResponse) => void): Request<Iot.Types.CreateThingTypeResponse, AWSError>;
  /**
   * Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.
   */
  createTopicRule(params: Iot.Types.CreateTopicRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.
   */
  createTopicRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes an authorizer.
   */
  deleteAuthorizer(params: Iot.Types.DeleteAuthorizerRequest, callback?: (err: AWSError, data: Iot.Types.DeleteAuthorizerResponse) => void): Request<Iot.Types.DeleteAuthorizerResponse, AWSError>;
  /**
   * Deletes an authorizer.
   */
  deleteAuthorizer(callback?: (err: AWSError, data: Iot.Types.DeleteAuthorizerResponse) => void): Request<Iot.Types.DeleteAuthorizerResponse, AWSError>;
  /**
   * Deletes a registered CA certificate.
   */
  deleteCACertificate(params: Iot.Types.DeleteCACertificateRequest, callback?: (err: AWSError, data: Iot.Types.DeleteCACertificateResponse) => void): Request<Iot.Types.DeleteCACertificateResponse, AWSError>;
  /**
   * Deletes a registered CA certificate.
   */
  deleteCACertificate(callback?: (err: AWSError, data: Iot.Types.DeleteCACertificateResponse) => void): Request<Iot.Types.DeleteCACertificateResponse, AWSError>;
  /**
   * Deletes the specified certificate. A certificate cannot be deleted if it has a policy attached to it or if its status is set to ACTIVE. To delete a certificate, first use the DetachPrincipalPolicy API to detach all policies. Next, use the UpdateCertificate API to set the certificate to the INACTIVE status.
   */
  deleteCertificate(params: Iot.Types.DeleteCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified certificate. A certificate cannot be deleted if it has a policy attached to it or if its status is set to ACTIVE. To delete a certificate, first use the DetachPrincipalPolicy API to detach all policies. Next, use the UpdateCertificate API to set the certificate to the INACTIVE status.
   */
  deleteCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Delete an OTA update.
   */
  deleteOTAUpdate(params: Iot.Types.DeleteOTAUpdateRequest, callback?: (err: AWSError, data: Iot.Types.DeleteOTAUpdateResponse) => void): Request<Iot.Types.DeleteOTAUpdateResponse, AWSError>;
  /**
   * Delete an OTA update.
   */
  deleteOTAUpdate(callback?: (err: AWSError, data: Iot.Types.DeleteOTAUpdateResponse) => void): Request<Iot.Types.DeleteOTAUpdateResponse, AWSError>;
  /**
   * Deletes the specified policy. A policy cannot be deleted if it has non-default versions or it is attached to any certificate. To delete a policy, use the DeletePolicyVersion API to delete all non-default versions of the policy; use the DetachPrincipalPolicy API to detach the policy from any certificate; and then use the DeletePolicy API to delete the policy. When a policy is deleted using DeletePolicy, its default version is deleted with it.
   */
  deletePolicy(params: Iot.Types.DeletePolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified policy. A policy cannot be deleted if it has non-default versions or it is attached to any certificate. To delete a policy, use the DeletePolicyVersion API to delete all non-default versions of the policy; use the DetachPrincipalPolicy API to detach the policy from any certificate; and then use the DeletePolicy API to delete the policy. When a policy is deleted using DeletePolicy, its default version is deleted with it.
   */
  deletePolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this API. To delete the default version of a policy, use DeletePolicy. To find out which version of a policy is marked as the default version, use ListPolicyVersions.
   */
  deletePolicyVersion(params: Iot.Types.DeletePolicyVersionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified version of the specified policy. You cannot delete the default version of a policy using this API. To delete the default version of a policy, use DeletePolicy. To find out which version of a policy is marked as the default version, use ListPolicyVersions.
   */
  deletePolicyVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a CA certificate registration code.
   */
  deleteRegistrationCode(params: Iot.Types.DeleteRegistrationCodeRequest, callback?: (err: AWSError, data: Iot.Types.DeleteRegistrationCodeResponse) => void): Request<Iot.Types.DeleteRegistrationCodeResponse, AWSError>;
  /**
   * Deletes a CA certificate registration code.
   */
  deleteRegistrationCode(callback?: (err: AWSError, data: Iot.Types.DeleteRegistrationCodeResponse) => void): Request<Iot.Types.DeleteRegistrationCodeResponse, AWSError>;
  /**
   * Deletes a role alias
   */
  deleteRoleAlias(params: Iot.Types.DeleteRoleAliasRequest, callback?: (err: AWSError, data: Iot.Types.DeleteRoleAliasResponse) => void): Request<Iot.Types.DeleteRoleAliasResponse, AWSError>;
  /**
   * Deletes a role alias
   */
  deleteRoleAlias(callback?: (err: AWSError, data: Iot.Types.DeleteRoleAliasResponse) => void): Request<Iot.Types.DeleteRoleAliasResponse, AWSError>;
  /**
   * Deletes a stream.
   */
  deleteStream(params: Iot.Types.DeleteStreamRequest, callback?: (err: AWSError, data: Iot.Types.DeleteStreamResponse) => void): Request<Iot.Types.DeleteStreamResponse, AWSError>;
  /**
   * Deletes a stream.
   */
  deleteStream(callback?: (err: AWSError, data: Iot.Types.DeleteStreamResponse) => void): Request<Iot.Types.DeleteStreamResponse, AWSError>;
  /**
   * Deletes the specified thing.
   */
  deleteThing(params: Iot.Types.DeleteThingRequest, callback?: (err: AWSError, data: Iot.Types.DeleteThingResponse) => void): Request<Iot.Types.DeleteThingResponse, AWSError>;
  /**
   * Deletes the specified thing.
   */
  deleteThing(callback?: (err: AWSError, data: Iot.Types.DeleteThingResponse) => void): Request<Iot.Types.DeleteThingResponse, AWSError>;
  /**
   * Deletes a thing group.
   */
  deleteThingGroup(params: Iot.Types.DeleteThingGroupRequest, callback?: (err: AWSError, data: Iot.Types.DeleteThingGroupResponse) => void): Request<Iot.Types.DeleteThingGroupResponse, AWSError>;
  /**
   * Deletes a thing group.
   */
  deleteThingGroup(callback?: (err: AWSError, data: Iot.Types.DeleteThingGroupResponse) => void): Request<Iot.Types.DeleteThingGroupResponse, AWSError>;
  /**
   * Deletes the specified thing type . You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling DeprecateThingType, then remove any associated things by calling UpdateThing to change the thing type on any associated thing, and finally use DeleteThingType to delete the thing type.
   */
  deleteThingType(params: Iot.Types.DeleteThingTypeRequest, callback?: (err: AWSError, data: Iot.Types.DeleteThingTypeResponse) => void): Request<Iot.Types.DeleteThingTypeResponse, AWSError>;
  /**
   * Deletes the specified thing type . You cannot delete a thing type if it has things associated with it. To delete a thing type, first mark it as deprecated by calling DeprecateThingType, then remove any associated things by calling UpdateThing to change the thing type on any associated thing, and finally use DeleteThingType to delete the thing type.
   */
  deleteThingType(callback?: (err: AWSError, data: Iot.Types.DeleteThingTypeResponse) => void): Request<Iot.Types.DeleteThingTypeResponse, AWSError>;
  /**
   * Deletes the rule.
   */
  deleteTopicRule(params: Iot.Types.DeleteTopicRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the rule.
   */
  deleteTopicRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a logging level.
   */
  deleteV2LoggingLevel(params: Iot.Types.DeleteV2LoggingLevelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a logging level.
   */
  deleteV2LoggingLevel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deprecates a thing type. You can not associate new things with deprecated thing type.
   */
  deprecateThingType(params: Iot.Types.DeprecateThingTypeRequest, callback?: (err: AWSError, data: Iot.Types.DeprecateThingTypeResponse) => void): Request<Iot.Types.DeprecateThingTypeResponse, AWSError>;
  /**
   * Deprecates a thing type. You can not associate new things with deprecated thing type.
   */
  deprecateThingType(callback?: (err: AWSError, data: Iot.Types.DeprecateThingTypeResponse) => void): Request<Iot.Types.DeprecateThingTypeResponse, AWSError>;
  /**
   * Describes an authorizer.
   */
  describeAuthorizer(params: Iot.Types.DescribeAuthorizerRequest, callback?: (err: AWSError, data: Iot.Types.DescribeAuthorizerResponse) => void): Request<Iot.Types.DescribeAuthorizerResponse, AWSError>;
  /**
   * Describes an authorizer.
   */
  describeAuthorizer(callback?: (err: AWSError, data: Iot.Types.DescribeAuthorizerResponse) => void): Request<Iot.Types.DescribeAuthorizerResponse, AWSError>;
  /**
   * Describes a registered CA certificate.
   */
  describeCACertificate(params: Iot.Types.DescribeCACertificateRequest, callback?: (err: AWSError, data: Iot.Types.DescribeCACertificateResponse) => void): Request<Iot.Types.DescribeCACertificateResponse, AWSError>;
  /**
   * Describes a registered CA certificate.
   */
  describeCACertificate(callback?: (err: AWSError, data: Iot.Types.DescribeCACertificateResponse) => void): Request<Iot.Types.DescribeCACertificateResponse, AWSError>;
  /**
   * Gets information about the specified certificate.
   */
  describeCertificate(params: Iot.Types.DescribeCertificateRequest, callback?: (err: AWSError, data: Iot.Types.DescribeCertificateResponse) => void): Request<Iot.Types.DescribeCertificateResponse, AWSError>;
  /**
   * Gets information about the specified certificate.
   */
  describeCertificate(callback?: (err: AWSError, data: Iot.Types.DescribeCertificateResponse) => void): Request<Iot.Types.DescribeCertificateResponse, AWSError>;
  /**
   * Describes the default authorizer.
   */
  describeDefaultAuthorizer(params: Iot.Types.DescribeDefaultAuthorizerRequest, callback?: (err: AWSError, data: Iot.Types.DescribeDefaultAuthorizerResponse) => void): Request<Iot.Types.DescribeDefaultAuthorizerResponse, AWSError>;
  /**
   * Describes the default authorizer.
   */
  describeDefaultAuthorizer(callback?: (err: AWSError, data: Iot.Types.DescribeDefaultAuthorizerResponse) => void): Request<Iot.Types.DescribeDefaultAuthorizerResponse, AWSError>;
  /**
   * Returns a unique endpoint specific to the AWS account making the call.
   */
  describeEndpoint(params: Iot.Types.DescribeEndpointRequest, callback?: (err: AWSError, data: Iot.Types.DescribeEndpointResponse) => void): Request<Iot.Types.DescribeEndpointResponse, AWSError>;
  /**
   * Returns a unique endpoint specific to the AWS account making the call.
   */
  describeEndpoint(callback?: (err: AWSError, data: Iot.Types.DescribeEndpointResponse) => void): Request<Iot.Types.DescribeEndpointResponse, AWSError>;
  /**
   * Describes event configurations.
   */
  describeEventConfigurations(params: Iot.Types.DescribeEventConfigurationsRequest, callback?: (err: AWSError, data: Iot.Types.DescribeEventConfigurationsResponse) => void): Request<Iot.Types.DescribeEventConfigurationsResponse, AWSError>;
  /**
   * Describes event configurations.
   */
  describeEventConfigurations(callback?: (err: AWSError, data: Iot.Types.DescribeEventConfigurationsResponse) => void): Request<Iot.Types.DescribeEventConfigurationsResponse, AWSError>;
  /**
   * Describes a search index.
   */
  describeIndex(params: Iot.Types.DescribeIndexRequest, callback?: (err: AWSError, data: Iot.Types.DescribeIndexResponse) => void): Request<Iot.Types.DescribeIndexResponse, AWSError>;
  /**
   * Describes a search index.
   */
  describeIndex(callback?: (err: AWSError, data: Iot.Types.DescribeIndexResponse) => void): Request<Iot.Types.DescribeIndexResponse, AWSError>;
  /**
   * Describes a job.
   */
  describeJob(params: Iot.Types.DescribeJobRequest, callback?: (err: AWSError, data: Iot.Types.DescribeJobResponse) => void): Request<Iot.Types.DescribeJobResponse, AWSError>;
  /**
   * Describes a job.
   */
  describeJob(callback?: (err: AWSError, data: Iot.Types.DescribeJobResponse) => void): Request<Iot.Types.DescribeJobResponse, AWSError>;
  /**
   * Describes a job execution.
   */
  describeJobExecution(params: Iot.Types.DescribeJobExecutionRequest, callback?: (err: AWSError, data: Iot.Types.DescribeJobExecutionResponse) => void): Request<Iot.Types.DescribeJobExecutionResponse, AWSError>;
  /**
   * Describes a job execution.
   */
  describeJobExecution(callback?: (err: AWSError, data: Iot.Types.DescribeJobExecutionResponse) => void): Request<Iot.Types.DescribeJobExecutionResponse, AWSError>;
  /**
   * Describes a role alias.
   */
  describeRoleAlias(params: Iot.Types.DescribeRoleAliasRequest, callback?: (err: AWSError, data: Iot.Types.DescribeRoleAliasResponse) => void): Request<Iot.Types.DescribeRoleAliasResponse, AWSError>;
  /**
   * Describes a role alias.
   */
  describeRoleAlias(callback?: (err: AWSError, data: Iot.Types.DescribeRoleAliasResponse) => void): Request<Iot.Types.DescribeRoleAliasResponse, AWSError>;
  /**
   * Gets information about a stream.
   */
  describeStream(params: Iot.Types.DescribeStreamRequest, callback?: (err: AWSError, data: Iot.Types.DescribeStreamResponse) => void): Request<Iot.Types.DescribeStreamResponse, AWSError>;
  /**
   * Gets information about a stream.
   */
  describeStream(callback?: (err: AWSError, data: Iot.Types.DescribeStreamResponse) => void): Request<Iot.Types.DescribeStreamResponse, AWSError>;
  /**
   * Gets information about the specified thing.
   */
  describeThing(params: Iot.Types.DescribeThingRequest, callback?: (err: AWSError, data: Iot.Types.DescribeThingResponse) => void): Request<Iot.Types.DescribeThingResponse, AWSError>;
  /**
   * Gets information about the specified thing.
   */
  describeThing(callback?: (err: AWSError, data: Iot.Types.DescribeThingResponse) => void): Request<Iot.Types.DescribeThingResponse, AWSError>;
  /**
   * Describe a thing group.
   */
  describeThingGroup(params: Iot.Types.DescribeThingGroupRequest, callback?: (err: AWSError, data: Iot.Types.DescribeThingGroupResponse) => void): Request<Iot.Types.DescribeThingGroupResponse, AWSError>;
  /**
   * Describe a thing group.
   */
  describeThingGroup(callback?: (err: AWSError, data: Iot.Types.DescribeThingGroupResponse) => void): Request<Iot.Types.DescribeThingGroupResponse, AWSError>;
  /**
   * Describes a bulk thing provisioning task.
   */
  describeThingRegistrationTask(params: Iot.Types.DescribeThingRegistrationTaskRequest, callback?: (err: AWSError, data: Iot.Types.DescribeThingRegistrationTaskResponse) => void): Request<Iot.Types.DescribeThingRegistrationTaskResponse, AWSError>;
  /**
   * Describes a bulk thing provisioning task.
   */
  describeThingRegistrationTask(callback?: (err: AWSError, data: Iot.Types.DescribeThingRegistrationTaskResponse) => void): Request<Iot.Types.DescribeThingRegistrationTaskResponse, AWSError>;
  /**
   * Gets information about the specified thing type.
   */
  describeThingType(params: Iot.Types.DescribeThingTypeRequest, callback?: (err: AWSError, data: Iot.Types.DescribeThingTypeResponse) => void): Request<Iot.Types.DescribeThingTypeResponse, AWSError>;
  /**
   * Gets information about the specified thing type.
   */
  describeThingType(callback?: (err: AWSError, data: Iot.Types.DescribeThingTypeResponse) => void): Request<Iot.Types.DescribeThingTypeResponse, AWSError>;
  /**
   * Detaches a policy from the specified target.
   */
  detachPolicy(params: Iot.Types.DetachPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Detaches a policy from the specified target.
   */
  detachPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified policy from the specified certificate.  Note: This API is deprecated. Please use DetachPolicy instead.
   */
  detachPrincipalPolicy(params: Iot.Types.DetachPrincipalPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified policy from the specified certificate.  Note: This API is deprecated. Please use DetachPolicy instead.
   */
  detachPrincipalPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Detaches the specified principal from the specified thing.
   */
  detachThingPrincipal(params: Iot.Types.DetachThingPrincipalRequest, callback?: (err: AWSError, data: Iot.Types.DetachThingPrincipalResponse) => void): Request<Iot.Types.DetachThingPrincipalResponse, AWSError>;
  /**
   * Detaches the specified principal from the specified thing.
   */
  detachThingPrincipal(callback?: (err: AWSError, data: Iot.Types.DetachThingPrincipalResponse) => void): Request<Iot.Types.DetachThingPrincipalResponse, AWSError>;
  /**
   * Disables the rule.
   */
  disableTopicRule(params: Iot.Types.DisableTopicRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables the rule.
   */
  disableTopicRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the rule.
   */
  enableTopicRule(params: Iot.Types.EnableTopicRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the rule.
   */
  enableTopicRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets effective policies.
   */
  getEffectivePolicies(params: Iot.Types.GetEffectivePoliciesRequest, callback?: (err: AWSError, data: Iot.Types.GetEffectivePoliciesResponse) => void): Request<Iot.Types.GetEffectivePoliciesResponse, AWSError>;
  /**
   * Gets effective policies.
   */
  getEffectivePolicies(callback?: (err: AWSError, data: Iot.Types.GetEffectivePoliciesResponse) => void): Request<Iot.Types.GetEffectivePoliciesResponse, AWSError>;
  /**
   * Gets the search configuration.
   */
  getIndexingConfiguration(params: Iot.Types.GetIndexingConfigurationRequest, callback?: (err: AWSError, data: Iot.Types.GetIndexingConfigurationResponse) => void): Request<Iot.Types.GetIndexingConfigurationResponse, AWSError>;
  /**
   * Gets the search configuration.
   */
  getIndexingConfiguration(callback?: (err: AWSError, data: Iot.Types.GetIndexingConfigurationResponse) => void): Request<Iot.Types.GetIndexingConfigurationResponse, AWSError>;
  /**
   * Gets a job document.
   */
  getJobDocument(params: Iot.Types.GetJobDocumentRequest, callback?: (err: AWSError, data: Iot.Types.GetJobDocumentResponse) => void): Request<Iot.Types.GetJobDocumentResponse, AWSError>;
  /**
   * Gets a job document.
   */
  getJobDocument(callback?: (err: AWSError, data: Iot.Types.GetJobDocumentResponse) => void): Request<Iot.Types.GetJobDocumentResponse, AWSError>;
  /**
   * Gets the logging options.
   */
  getLoggingOptions(params: Iot.Types.GetLoggingOptionsRequest, callback?: (err: AWSError, data: Iot.Types.GetLoggingOptionsResponse) => void): Request<Iot.Types.GetLoggingOptionsResponse, AWSError>;
  /**
   * Gets the logging options.
   */
  getLoggingOptions(callback?: (err: AWSError, data: Iot.Types.GetLoggingOptionsResponse) => void): Request<Iot.Types.GetLoggingOptionsResponse, AWSError>;
  /**
   * Gets an OTA update.
   */
  getOTAUpdate(params: Iot.Types.GetOTAUpdateRequest, callback?: (err: AWSError, data: Iot.Types.GetOTAUpdateResponse) => void): Request<Iot.Types.GetOTAUpdateResponse, AWSError>;
  /**
   * Gets an OTA update.
   */
  getOTAUpdate(callback?: (err: AWSError, data: Iot.Types.GetOTAUpdateResponse) => void): Request<Iot.Types.GetOTAUpdateResponse, AWSError>;
  /**
   * Gets information about the specified policy with the policy document of the default version.
   */
  getPolicy(params: Iot.Types.GetPolicyRequest, callback?: (err: AWSError, data: Iot.Types.GetPolicyResponse) => void): Request<Iot.Types.GetPolicyResponse, AWSError>;
  /**
   * Gets information about the specified policy with the policy document of the default version.
   */
  getPolicy(callback?: (err: AWSError, data: Iot.Types.GetPolicyResponse) => void): Request<Iot.Types.GetPolicyResponse, AWSError>;
  /**
   * Gets information about the specified policy version.
   */
  getPolicyVersion(params: Iot.Types.GetPolicyVersionRequest, callback?: (err: AWSError, data: Iot.Types.GetPolicyVersionResponse) => void): Request<Iot.Types.GetPolicyVersionResponse, AWSError>;
  /**
   * Gets information about the specified policy version.
   */
  getPolicyVersion(callback?: (err: AWSError, data: Iot.Types.GetPolicyVersionResponse) => void): Request<Iot.Types.GetPolicyVersionResponse, AWSError>;
  /**
   * Gets a registration code used to register a CA certificate with AWS IoT.
   */
  getRegistrationCode(params: Iot.Types.GetRegistrationCodeRequest, callback?: (err: AWSError, data: Iot.Types.GetRegistrationCodeResponse) => void): Request<Iot.Types.GetRegistrationCodeResponse, AWSError>;
  /**
   * Gets a registration code used to register a CA certificate with AWS IoT.
   */
  getRegistrationCode(callback?: (err: AWSError, data: Iot.Types.GetRegistrationCodeResponse) => void): Request<Iot.Types.GetRegistrationCodeResponse, AWSError>;
  /**
   * Gets information about the rule.
   */
  getTopicRule(params: Iot.Types.GetTopicRuleRequest, callback?: (err: AWSError, data: Iot.Types.GetTopicRuleResponse) => void): Request<Iot.Types.GetTopicRuleResponse, AWSError>;
  /**
   * Gets information about the rule.
   */
  getTopicRule(callback?: (err: AWSError, data: Iot.Types.GetTopicRuleResponse) => void): Request<Iot.Types.GetTopicRuleResponse, AWSError>;
  /**
   * Gets the fine grained logging options.
   */
  getV2LoggingOptions(params: Iot.Types.GetV2LoggingOptionsRequest, callback?: (err: AWSError, data: Iot.Types.GetV2LoggingOptionsResponse) => void): Request<Iot.Types.GetV2LoggingOptionsResponse, AWSError>;
  /**
   * Gets the fine grained logging options.
   */
  getV2LoggingOptions(callback?: (err: AWSError, data: Iot.Types.GetV2LoggingOptionsResponse) => void): Request<Iot.Types.GetV2LoggingOptionsResponse, AWSError>;
  /**
   * Lists the policies attached to the specified thing group.
   */
  listAttachedPolicies(params: Iot.Types.ListAttachedPoliciesRequest, callback?: (err: AWSError, data: Iot.Types.ListAttachedPoliciesResponse) => void): Request<Iot.Types.ListAttachedPoliciesResponse, AWSError>;
  /**
   * Lists the policies attached to the specified thing group.
   */
  listAttachedPolicies(callback?: (err: AWSError, data: Iot.Types.ListAttachedPoliciesResponse) => void): Request<Iot.Types.ListAttachedPoliciesResponse, AWSError>;
  /**
   * Lists the authorizers registered in your account.
   */
  listAuthorizers(params: Iot.Types.ListAuthorizersRequest, callback?: (err: AWSError, data: Iot.Types.ListAuthorizersResponse) => void): Request<Iot.Types.ListAuthorizersResponse, AWSError>;
  /**
   * Lists the authorizers registered in your account.
   */
  listAuthorizers(callback?: (err: AWSError, data: Iot.Types.ListAuthorizersResponse) => void): Request<Iot.Types.ListAuthorizersResponse, AWSError>;
  /**
   * Lists the CA certificates registered for your AWS account. The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.
   */
  listCACertificates(params: Iot.Types.ListCACertificatesRequest, callback?: (err: AWSError, data: Iot.Types.ListCACertificatesResponse) => void): Request<Iot.Types.ListCACertificatesResponse, AWSError>;
  /**
   * Lists the CA certificates registered for your AWS account. The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.
   */
  listCACertificates(callback?: (err: AWSError, data: Iot.Types.ListCACertificatesResponse) => void): Request<Iot.Types.ListCACertificatesResponse, AWSError>;
  /**
   * Lists the certificates registered in your AWS account. The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.
   */
  listCertificates(params: Iot.Types.ListCertificatesRequest, callback?: (err: AWSError, data: Iot.Types.ListCertificatesResponse) => void): Request<Iot.Types.ListCertificatesResponse, AWSError>;
  /**
   * Lists the certificates registered in your AWS account. The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.
   */
  listCertificates(callback?: (err: AWSError, data: Iot.Types.ListCertificatesResponse) => void): Request<Iot.Types.ListCertificatesResponse, AWSError>;
  /**
   * List the device certificates signed by the specified CA certificate.
   */
  listCertificatesByCA(params: Iot.Types.ListCertificatesByCARequest, callback?: (err: AWSError, data: Iot.Types.ListCertificatesByCAResponse) => void): Request<Iot.Types.ListCertificatesByCAResponse, AWSError>;
  /**
   * List the device certificates signed by the specified CA certificate.
   */
  listCertificatesByCA(callback?: (err: AWSError, data: Iot.Types.ListCertificatesByCAResponse) => void): Request<Iot.Types.ListCertificatesByCAResponse, AWSError>;
  /**
   * Lists the search indices.
   */
  listIndices(params: Iot.Types.ListIndicesRequest, callback?: (err: AWSError, data: Iot.Types.ListIndicesResponse) => void): Request<Iot.Types.ListIndicesResponse, AWSError>;
  /**
   * Lists the search indices.
   */
  listIndices(callback?: (err: AWSError, data: Iot.Types.ListIndicesResponse) => void): Request<Iot.Types.ListIndicesResponse, AWSError>;
  /**
   * Lists the job executions for a job.
   */
  listJobExecutionsForJob(params: Iot.Types.ListJobExecutionsForJobRequest, callback?: (err: AWSError, data: Iot.Types.ListJobExecutionsForJobResponse) => void): Request<Iot.Types.ListJobExecutionsForJobResponse, AWSError>;
  /**
   * Lists the job executions for a job.
   */
  listJobExecutionsForJob(callback?: (err: AWSError, data: Iot.Types.ListJobExecutionsForJobResponse) => void): Request<Iot.Types.ListJobExecutionsForJobResponse, AWSError>;
  /**
   * Lists the job executions for the specified thing.
   */
  listJobExecutionsForThing(params: Iot.Types.ListJobExecutionsForThingRequest, callback?: (err: AWSError, data: Iot.Types.ListJobExecutionsForThingResponse) => void): Request<Iot.Types.ListJobExecutionsForThingResponse, AWSError>;
  /**
   * Lists the job executions for the specified thing.
   */
  listJobExecutionsForThing(callback?: (err: AWSError, data: Iot.Types.ListJobExecutionsForThingResponse) => void): Request<Iot.Types.ListJobExecutionsForThingResponse, AWSError>;
  /**
   * Lists jobs.
   */
  listJobs(params: Iot.Types.ListJobsRequest, callback?: (err: AWSError, data: Iot.Types.ListJobsResponse) => void): Request<Iot.Types.ListJobsResponse, AWSError>;
  /**
   * Lists jobs.
   */
  listJobs(callback?: (err: AWSError, data: Iot.Types.ListJobsResponse) => void): Request<Iot.Types.ListJobsResponse, AWSError>;
  /**
   * Lists OTA updates.
   */
  listOTAUpdates(params: Iot.Types.ListOTAUpdatesRequest, callback?: (err: AWSError, data: Iot.Types.ListOTAUpdatesResponse) => void): Request<Iot.Types.ListOTAUpdatesResponse, AWSError>;
  /**
   * Lists OTA updates.
   */
  listOTAUpdates(callback?: (err: AWSError, data: Iot.Types.ListOTAUpdatesResponse) => void): Request<Iot.Types.ListOTAUpdatesResponse, AWSError>;
  /**
   * Lists certificates that are being transferred but not yet accepted.
   */
  listOutgoingCertificates(params: Iot.Types.ListOutgoingCertificatesRequest, callback?: (err: AWSError, data: Iot.Types.ListOutgoingCertificatesResponse) => void): Request<Iot.Types.ListOutgoingCertificatesResponse, AWSError>;
  /**
   * Lists certificates that are being transferred but not yet accepted.
   */
  listOutgoingCertificates(callback?: (err: AWSError, data: Iot.Types.ListOutgoingCertificatesResponse) => void): Request<Iot.Types.ListOutgoingCertificatesResponse, AWSError>;
  /**
   * Lists your policies.
   */
  listPolicies(params: Iot.Types.ListPoliciesRequest, callback?: (err: AWSError, data: Iot.Types.ListPoliciesResponse) => void): Request<Iot.Types.ListPoliciesResponse, AWSError>;
  /**
   * Lists your policies.
   */
  listPolicies(callback?: (err: AWSError, data: Iot.Types.ListPoliciesResponse) => void): Request<Iot.Types.ListPoliciesResponse, AWSError>;
  /**
   * Lists the principals associated with the specified policy.  Note: This API is deprecated. Please use ListTargetsForPolicy instead.
   */
  listPolicyPrincipals(params: Iot.Types.ListPolicyPrincipalsRequest, callback?: (err: AWSError, data: Iot.Types.ListPolicyPrincipalsResponse) => void): Request<Iot.Types.ListPolicyPrincipalsResponse, AWSError>;
  /**
   * Lists the principals associated with the specified policy.  Note: This API is deprecated. Please use ListTargetsForPolicy instead.
   */
  listPolicyPrincipals(callback?: (err: AWSError, data: Iot.Types.ListPolicyPrincipalsResponse) => void): Request<Iot.Types.ListPolicyPrincipalsResponse, AWSError>;
  /**
   * Lists the versions of the specified policy and identifies the default version.
   */
  listPolicyVersions(params: Iot.Types.ListPolicyVersionsRequest, callback?: (err: AWSError, data: Iot.Types.ListPolicyVersionsResponse) => void): Request<Iot.Types.ListPolicyVersionsResponse, AWSError>;
  /**
   * Lists the versions of the specified policy and identifies the default version.
   */
  listPolicyVersions(callback?: (err: AWSError, data: Iot.Types.ListPolicyVersionsResponse) => void): Request<Iot.Types.ListPolicyVersionsResponse, AWSError>;
  /**
   * Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in AmazonCognito Identity format.  Note: This API is deprecated. Please use ListAttachedPolicies instead.
   */
  listPrincipalPolicies(params: Iot.Types.ListPrincipalPoliciesRequest, callback?: (err: AWSError, data: Iot.Types.ListPrincipalPoliciesResponse) => void): Request<Iot.Types.ListPrincipalPoliciesResponse, AWSError>;
  /**
   * Lists the policies attached to the specified principal. If you use an Cognito identity, the ID must be in AmazonCognito Identity format.  Note: This API is deprecated. Please use ListAttachedPolicies instead.
   */
  listPrincipalPolicies(callback?: (err: AWSError, data: Iot.Types.ListPrincipalPoliciesResponse) => void): Request<Iot.Types.ListPrincipalPoliciesResponse, AWSError>;
  /**
   * Lists the things associated with the specified principal.
   */
  listPrincipalThings(params: Iot.Types.ListPrincipalThingsRequest, callback?: (err: AWSError, data: Iot.Types.ListPrincipalThingsResponse) => void): Request<Iot.Types.ListPrincipalThingsResponse, AWSError>;
  /**
   * Lists the things associated with the specified principal.
   */
  listPrincipalThings(callback?: (err: AWSError, data: Iot.Types.ListPrincipalThingsResponse) => void): Request<Iot.Types.ListPrincipalThingsResponse, AWSError>;
  /**
   * Lists the role aliases registered in your account.
   */
  listRoleAliases(params: Iot.Types.ListRoleAliasesRequest, callback?: (err: AWSError, data: Iot.Types.ListRoleAliasesResponse) => void): Request<Iot.Types.ListRoleAliasesResponse, AWSError>;
  /**
   * Lists the role aliases registered in your account.
   */
  listRoleAliases(callback?: (err: AWSError, data: Iot.Types.ListRoleAliasesResponse) => void): Request<Iot.Types.ListRoleAliasesResponse, AWSError>;
  /**
   * Lists all of the streams in your AWS account.
   */
  listStreams(params: Iot.Types.ListStreamsRequest, callback?: (err: AWSError, data: Iot.Types.ListStreamsResponse) => void): Request<Iot.Types.ListStreamsResponse, AWSError>;
  /**
   * Lists all of the streams in your AWS account.
   */
  listStreams(callback?: (err: AWSError, data: Iot.Types.ListStreamsResponse) => void): Request<Iot.Types.ListStreamsResponse, AWSError>;
  /**
   * List targets for the specified policy.
   */
  listTargetsForPolicy(params: Iot.Types.ListTargetsForPolicyRequest, callback?: (err: AWSError, data: Iot.Types.ListTargetsForPolicyResponse) => void): Request<Iot.Types.ListTargetsForPolicyResponse, AWSError>;
  /**
   * List targets for the specified policy.
   */
  listTargetsForPolicy(callback?: (err: AWSError, data: Iot.Types.ListTargetsForPolicyResponse) => void): Request<Iot.Types.ListTargetsForPolicyResponse, AWSError>;
  /**
   * List the thing groups in your account.
   */
  listThingGroups(params: Iot.Types.ListThingGroupsRequest, callback?: (err: AWSError, data: Iot.Types.ListThingGroupsResponse) => void): Request<Iot.Types.ListThingGroupsResponse, AWSError>;
  /**
   * List the thing groups in your account.
   */
  listThingGroups(callback?: (err: AWSError, data: Iot.Types.ListThingGroupsResponse) => void): Request<Iot.Types.ListThingGroupsResponse, AWSError>;
  /**
   * List the thing groups to which the specified thing belongs.
   */
  listThingGroupsForThing(params: Iot.Types.ListThingGroupsForThingRequest, callback?: (err: AWSError, data: Iot.Types.ListThingGroupsForThingResponse) => void): Request<Iot.Types.ListThingGroupsForThingResponse, AWSError>;
  /**
   * List the thing groups to which the specified thing belongs.
   */
  listThingGroupsForThing(callback?: (err: AWSError, data: Iot.Types.ListThingGroupsForThingResponse) => void): Request<Iot.Types.ListThingGroupsForThingResponse, AWSError>;
  /**
   * Lists the principals associated with the specified thing.
   */
  listThingPrincipals(params: Iot.Types.ListThingPrincipalsRequest, callback?: (err: AWSError, data: Iot.Types.ListThingPrincipalsResponse) => void): Request<Iot.Types.ListThingPrincipalsResponse, AWSError>;
  /**
   * Lists the principals associated with the specified thing.
   */
  listThingPrincipals(callback?: (err: AWSError, data: Iot.Types.ListThingPrincipalsResponse) => void): Request<Iot.Types.ListThingPrincipalsResponse, AWSError>;
  /**
   * Information about the thing registration tasks.
   */
  listThingRegistrationTaskReports(params: Iot.Types.ListThingRegistrationTaskReportsRequest, callback?: (err: AWSError, data: Iot.Types.ListThingRegistrationTaskReportsResponse) => void): Request<Iot.Types.ListThingRegistrationTaskReportsResponse, AWSError>;
  /**
   * Information about the thing registration tasks.
   */
  listThingRegistrationTaskReports(callback?: (err: AWSError, data: Iot.Types.ListThingRegistrationTaskReportsResponse) => void): Request<Iot.Types.ListThingRegistrationTaskReportsResponse, AWSError>;
  /**
   * List bulk thing provisioning tasks.
   */
  listThingRegistrationTasks(params: Iot.Types.ListThingRegistrationTasksRequest, callback?: (err: AWSError, data: Iot.Types.ListThingRegistrationTasksResponse) => void): Request<Iot.Types.ListThingRegistrationTasksResponse, AWSError>;
  /**
   * List bulk thing provisioning tasks.
   */
  listThingRegistrationTasks(callback?: (err: AWSError, data: Iot.Types.ListThingRegistrationTasksResponse) => void): Request<Iot.Types.ListThingRegistrationTasksResponse, AWSError>;
  /**
   * Lists the existing thing types.
   */
  listThingTypes(params: Iot.Types.ListThingTypesRequest, callback?: (err: AWSError, data: Iot.Types.ListThingTypesResponse) => void): Request<Iot.Types.ListThingTypesResponse, AWSError>;
  /**
   * Lists the existing thing types.
   */
  listThingTypes(callback?: (err: AWSError, data: Iot.Types.ListThingTypesResponse) => void): Request<Iot.Types.ListThingTypesResponse, AWSError>;
  /**
   * Lists your things. Use the attributeName and attributeValue parameters to filter your things. For example, calling ListThings with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute Color with the value Red. 
   */
  listThings(params: Iot.Types.ListThingsRequest, callback?: (err: AWSError, data: Iot.Types.ListThingsResponse) => void): Request<Iot.Types.ListThingsResponse, AWSError>;
  /**
   * Lists your things. Use the attributeName and attributeValue parameters to filter your things. For example, calling ListThings with attributeName=Color and attributeValue=Red retrieves all things in the registry that contain an attribute Color with the value Red. 
   */
  listThings(callback?: (err: AWSError, data: Iot.Types.ListThingsResponse) => void): Request<Iot.Types.ListThingsResponse, AWSError>;
  /**
   * Lists the things in the specified group.
   */
  listThingsInThingGroup(params: Iot.Types.ListThingsInThingGroupRequest, callback?: (err: AWSError, data: Iot.Types.ListThingsInThingGroupResponse) => void): Request<Iot.Types.ListThingsInThingGroupResponse, AWSError>;
  /**
   * Lists the things in the specified group.
   */
  listThingsInThingGroup(callback?: (err: AWSError, data: Iot.Types.ListThingsInThingGroupResponse) => void): Request<Iot.Types.ListThingsInThingGroupResponse, AWSError>;
  /**
   * Lists the rules for the specific topic.
   */
  listTopicRules(params: Iot.Types.ListTopicRulesRequest, callback?: (err: AWSError, data: Iot.Types.ListTopicRulesResponse) => void): Request<Iot.Types.ListTopicRulesResponse, AWSError>;
  /**
   * Lists the rules for the specific topic.
   */
  listTopicRules(callback?: (err: AWSError, data: Iot.Types.ListTopicRulesResponse) => void): Request<Iot.Types.ListTopicRulesResponse, AWSError>;
  /**
   * Lists logging levels.
   */
  listV2LoggingLevels(params: Iot.Types.ListV2LoggingLevelsRequest, callback?: (err: AWSError, data: Iot.Types.ListV2LoggingLevelsResponse) => void): Request<Iot.Types.ListV2LoggingLevelsResponse, AWSError>;
  /**
   * Lists logging levels.
   */
  listV2LoggingLevels(callback?: (err: AWSError, data: Iot.Types.ListV2LoggingLevelsResponse) => void): Request<Iot.Types.ListV2LoggingLevelsResponse, AWSError>;
  /**
   * Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign device certificates, which can be then registered with AWS IoT. You can register up to 10 CA certificates per AWS account that have the same subject field. This enables you to have up to 10 certificate authorities sign your device certificates. If you have more than one CA certificate registered, make sure you pass the CA certificate when you register your device certificates with the RegisterCertificate API.
   */
  registerCACertificate(params: Iot.Types.RegisterCACertificateRequest, callback?: (err: AWSError, data: Iot.Types.RegisterCACertificateResponse) => void): Request<Iot.Types.RegisterCACertificateResponse, AWSError>;
  /**
   * Registers a CA certificate with AWS IoT. This CA certificate can then be used to sign device certificates, which can be then registered with AWS IoT. You can register up to 10 CA certificates per AWS account that have the same subject field. This enables you to have up to 10 certificate authorities sign your device certificates. If you have more than one CA certificate registered, make sure you pass the CA certificate when you register your device certificates with the RegisterCertificate API.
   */
  registerCACertificate(callback?: (err: AWSError, data: Iot.Types.RegisterCACertificateResponse) => void): Request<Iot.Types.RegisterCACertificateResponse, AWSError>;
  /**
   * Registers a device certificate with AWS IoT. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.
   */
  registerCertificate(params: Iot.Types.RegisterCertificateRequest, callback?: (err: AWSError, data: Iot.Types.RegisterCertificateResponse) => void): Request<Iot.Types.RegisterCertificateResponse, AWSError>;
  /**
   * Registers a device certificate with AWS IoT. If you have more than one CA certificate that has the same subject field, you must specify the CA certificate that was used to sign the device certificate being registered.
   */
  registerCertificate(callback?: (err: AWSError, data: Iot.Types.RegisterCertificateResponse) => void): Request<Iot.Types.RegisterCertificateResponse, AWSError>;
  /**
   * Provisions a thing.
   */
  registerThing(params: Iot.Types.RegisterThingRequest, callback?: (err: AWSError, data: Iot.Types.RegisterThingResponse) => void): Request<Iot.Types.RegisterThingResponse, AWSError>;
  /**
   * Provisions a thing.
   */
  registerThing(callback?: (err: AWSError, data: Iot.Types.RegisterThingResponse) => void): Request<Iot.Types.RegisterThingResponse, AWSError>;
  /**
   * Rejects a pending certificate transfer. After AWS IoT rejects a certificate transfer, the certificate status changes from PENDING_TRANSFER to INACTIVE. To check for pending certificate transfers, call ListCertificates to enumerate your certificates. This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.
   */
  rejectCertificateTransfer(params: Iot.Types.RejectCertificateTransferRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Rejects a pending certificate transfer. After AWS IoT rejects a certificate transfer, the certificate status changes from PENDING_TRANSFER to INACTIVE. To check for pending certificate transfers, call ListCertificates to enumerate your certificates. This operation can only be called by the transfer destination. After it is called, the certificate will be returned to the source's account in the INACTIVE state.
   */
  rejectCertificateTransfer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Remove the specified thing from the specified group.
   */
  removeThingFromThingGroup(params: Iot.Types.RemoveThingFromThingGroupRequest, callback?: (err: AWSError, data: Iot.Types.RemoveThingFromThingGroupResponse) => void): Request<Iot.Types.RemoveThingFromThingGroupResponse, AWSError>;
  /**
   * Remove the specified thing from the specified group.
   */
  removeThingFromThingGroup(callback?: (err: AWSError, data: Iot.Types.RemoveThingFromThingGroupResponse) => void): Request<Iot.Types.RemoveThingFromThingGroupResponse, AWSError>;
  /**
   * Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.
   */
  replaceTopicRule(params: Iot.Types.ReplaceTopicRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Replaces the rule. You must specify all parameters for the new rule. Creating rules is an administrator-level action. Any user who has permission to create rules will be able to access data processed by the rule.
   */
  replaceTopicRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * The query search index.
   */
  searchIndex(params: Iot.Types.SearchIndexRequest, callback?: (err: AWSError, data: Iot.Types.SearchIndexResponse) => void): Request<Iot.Types.SearchIndexResponse, AWSError>;
  /**
   * The query search index.
   */
  searchIndex(callback?: (err: AWSError, data: Iot.Types.SearchIndexResponse) => void): Request<Iot.Types.SearchIndexResponse, AWSError>;
  /**
   * Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.
   */
  setDefaultAuthorizer(params: Iot.Types.SetDefaultAuthorizerRequest, callback?: (err: AWSError, data: Iot.Types.SetDefaultAuthorizerResponse) => void): Request<Iot.Types.SetDefaultAuthorizerResponse, AWSError>;
  /**
   * Sets the default authorizer. This will be used if a websocket connection is made without specifying an authorizer.
   */
  setDefaultAuthorizer(callback?: (err: AWSError, data: Iot.Types.SetDefaultAuthorizerResponse) => void): Request<Iot.Types.SetDefaultAuthorizerResponse, AWSError>;
  /**
   * Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the ListPrincipalPolicy API.
   */
  setDefaultPolicyVersion(params: Iot.Types.SetDefaultPolicyVersionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the specified version of the specified policy as the policy's default (operative) version. This action affects all certificates to which the policy is attached. To list the principals the policy is attached to, use the ListPrincipalPolicy API.
   */
  setDefaultPolicyVersion(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the logging options.
   */
  setLoggingOptions(params: Iot.Types.SetLoggingOptionsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the logging options.
   */
  setLoggingOptions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the logging level.
   */
  setV2LoggingLevel(params: Iot.Types.SetV2LoggingLevelRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the logging level.
   */
  setV2LoggingLevel(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the logging options for the V2 logging service.
   */
  setV2LoggingOptions(params: Iot.Types.SetV2LoggingOptionsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the logging options for the V2 logging service.
   */
  setV2LoggingOptions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a bulk thing provisioning task.
   */
  startThingRegistrationTask(params: Iot.Types.StartThingRegistrationTaskRequest, callback?: (err: AWSError, data: Iot.Types.StartThingRegistrationTaskResponse) => void): Request<Iot.Types.StartThingRegistrationTaskResponse, AWSError>;
  /**
   * Creates a bulk thing provisioning task.
   */
  startThingRegistrationTask(callback?: (err: AWSError, data: Iot.Types.StartThingRegistrationTaskResponse) => void): Request<Iot.Types.StartThingRegistrationTaskResponse, AWSError>;
  /**
   * Cancels a bulk thing provisioning task.
   */
  stopThingRegistrationTask(params: Iot.Types.StopThingRegistrationTaskRequest, callback?: (err: AWSError, data: Iot.Types.StopThingRegistrationTaskResponse) => void): Request<Iot.Types.StopThingRegistrationTaskResponse, AWSError>;
  /**
   * Cancels a bulk thing provisioning task.
   */
  stopThingRegistrationTask(callback?: (err: AWSError, data: Iot.Types.StopThingRegistrationTaskResponse) => void): Request<Iot.Types.StopThingRegistrationTaskResponse, AWSError>;
  /**
   * Test custom authorization.
   */
  testAuthorization(params: Iot.Types.TestAuthorizationRequest, callback?: (err: AWSError, data: Iot.Types.TestAuthorizationResponse) => void): Request<Iot.Types.TestAuthorizationResponse, AWSError>;
  /**
   * Test custom authorization.
   */
  testAuthorization(callback?: (err: AWSError, data: Iot.Types.TestAuthorizationResponse) => void): Request<Iot.Types.TestAuthorizationResponse, AWSError>;
  /**
   * Invoke the specified custom authorizer for testing purposes.
   */
  testInvokeAuthorizer(params: Iot.Types.TestInvokeAuthorizerRequest, callback?: (err: AWSError, data: Iot.Types.TestInvokeAuthorizerResponse) => void): Request<Iot.Types.TestInvokeAuthorizerResponse, AWSError>;
  /**
   * Invoke the specified custom authorizer for testing purposes.
   */
  testInvokeAuthorizer(callback?: (err: AWSError, data: Iot.Types.TestInvokeAuthorizerResponse) => void): Request<Iot.Types.TestInvokeAuthorizerResponse, AWSError>;
  /**
   * Transfers the specified certificate to the specified AWS account. You can cancel the transfer until it is acknowledged by the recipient. No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target. The certificate being transferred must not be in the ACTIVE state. You can use the UpdateCertificate API to deactivate it. The certificate must not have any policies attached to it. You can use the DetachPrincipalPolicy API to detach them.
   */
  transferCertificate(params: Iot.Types.TransferCertificateRequest, callback?: (err: AWSError, data: Iot.Types.TransferCertificateResponse) => void): Request<Iot.Types.TransferCertificateResponse, AWSError>;
  /**
   * Transfers the specified certificate to the specified AWS account. You can cancel the transfer until it is acknowledged by the recipient. No notification is sent to the transfer destination's account. It is up to the caller to notify the transfer target. The certificate being transferred must not be in the ACTIVE state. You can use the UpdateCertificate API to deactivate it. The certificate must not have any policies attached to it. You can use the DetachPrincipalPolicy API to detach them.
   */
  transferCertificate(callback?: (err: AWSError, data: Iot.Types.TransferCertificateResponse) => void): Request<Iot.Types.TransferCertificateResponse, AWSError>;
  /**
   * Updates an authorizer.
   */
  updateAuthorizer(params: Iot.Types.UpdateAuthorizerRequest, callback?: (err: AWSError, data: Iot.Types.UpdateAuthorizerResponse) => void): Request<Iot.Types.UpdateAuthorizerResponse, AWSError>;
  /**
   * Updates an authorizer.
   */
  updateAuthorizer(callback?: (err: AWSError, data: Iot.Types.UpdateAuthorizerResponse) => void): Request<Iot.Types.UpdateAuthorizerResponse, AWSError>;
  /**
   * Updates a registered CA certificate.
   */
  updateCACertificate(params: Iot.Types.UpdateCACertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates a registered CA certificate.
   */
  updateCACertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the status of the specified certificate. This operation is idempotent. Moving a certificate from the ACTIVE state (including REVOKED) will not disconnect currently connected devices, but these devices will be unable to reconnect. The ACTIVE state is required to authenticate devices connecting to AWS IoT using a certificate.
   */
  updateCertificate(params: Iot.Types.UpdateCertificateRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the status of the specified certificate. This operation is idempotent. Moving a certificate from the ACTIVE state (including REVOKED) will not disconnect currently connected devices, but these devices will be unable to reconnect. The ACTIVE state is required to authenticate devices connecting to AWS IoT using a certificate.
   */
  updateCertificate(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the event configurations.
   */
  updateEventConfigurations(params: Iot.Types.UpdateEventConfigurationsRequest, callback?: (err: AWSError, data: Iot.Types.UpdateEventConfigurationsResponse) => void): Request<Iot.Types.UpdateEventConfigurationsResponse, AWSError>;
  /**
   * Updates the event configurations.
   */
  updateEventConfigurations(callback?: (err: AWSError, data: Iot.Types.UpdateEventConfigurationsResponse) => void): Request<Iot.Types.UpdateEventConfigurationsResponse, AWSError>;
  /**
   * Updates the search configuration.
   */
  updateIndexingConfiguration(params: Iot.Types.UpdateIndexingConfigurationRequest, callback?: (err: AWSError, data: Iot.Types.UpdateIndexingConfigurationResponse) => void): Request<Iot.Types.UpdateIndexingConfigurationResponse, AWSError>;
  /**
   * Updates the search configuration.
   */
  updateIndexingConfiguration(callback?: (err: AWSError, data: Iot.Types.UpdateIndexingConfigurationResponse) => void): Request<Iot.Types.UpdateIndexingConfigurationResponse, AWSError>;
  /**
   * Updates a role alias.
   */
  updateRoleAlias(params: Iot.Types.UpdateRoleAliasRequest, callback?: (err: AWSError, data: Iot.Types.UpdateRoleAliasResponse) => void): Request<Iot.Types.UpdateRoleAliasResponse, AWSError>;
  /**
   * Updates a role alias.
   */
  updateRoleAlias(callback?: (err: AWSError, data: Iot.Types.UpdateRoleAliasResponse) => void): Request<Iot.Types.UpdateRoleAliasResponse, AWSError>;
  /**
   * Updates an existing stream. The stream version will be incremented by one.
   */
  updateStream(params: Iot.Types.UpdateStreamRequest, callback?: (err: AWSError, data: Iot.Types.UpdateStreamResponse) => void): Request<Iot.Types.UpdateStreamResponse, AWSError>;
  /**
   * Updates an existing stream. The stream version will be incremented by one.
   */
  updateStream(callback?: (err: AWSError, data: Iot.Types.UpdateStreamResponse) => void): Request<Iot.Types.UpdateStreamResponse, AWSError>;
  /**
   * Updates the data for a thing.
   */
  updateThing(params: Iot.Types.UpdateThingRequest, callback?: (err: AWSError, data: Iot.Types.UpdateThingResponse) => void): Request<Iot.Types.UpdateThingResponse, AWSError>;
  /**
   * Updates the data for a thing.
   */
  updateThing(callback?: (err: AWSError, data: Iot.Types.UpdateThingResponse) => void): Request<Iot.Types.UpdateThingResponse, AWSError>;
  /**
   * Update a thing group.
   */
  updateThingGroup(params: Iot.Types.UpdateThingGroupRequest, callback?: (err: AWSError, data: Iot.Types.UpdateThingGroupResponse) => void): Request<Iot.Types.UpdateThingGroupResponse, AWSError>;
  /**
   * Update a thing group.
   */
  updateThingGroup(callback?: (err: AWSError, data: Iot.Types.UpdateThingGroupResponse) => void): Request<Iot.Types.UpdateThingGroupResponse, AWSError>;
  /**
   * Updates the groups to which the thing belongs.
   */
  updateThingGroupsForThing(params: Iot.Types.UpdateThingGroupsForThingRequest, callback?: (err: AWSError, data: Iot.Types.UpdateThingGroupsForThingResponse) => void): Request<Iot.Types.UpdateThingGroupsForThingResponse, AWSError>;
  /**
   * Updates the groups to which the thing belongs.
   */
  updateThingGroupsForThing(callback?: (err: AWSError, data: Iot.Types.UpdateThingGroupsForThingResponse) => void): Request<Iot.Types.UpdateThingGroupsForThingResponse, AWSError>;
}
declare namespace Iot {
  export interface AcceptCertificateTransferRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
    /**
     * Specifies whether the certificate is active.
     */
    setAsActive?: SetAsActive;
  }
  export interface Action {
    /**
     * Write to a DynamoDB table.
     */
    dynamoDB?: DynamoDBAction;
    /**
     * Write to a DynamoDB table. This is a new version of the DynamoDB action. It allows you to write each attribute in an MQTT message payload into a separate DynamoDB column.
     */
    dynamoDBv2?: DynamoDBv2Action;
    /**
     * Invoke a Lambda function.
     */
    lambda?: LambdaAction;
    /**
     * Publish to an Amazon SNS topic.
     */
    sns?: SnsAction;
    /**
     * Publish to an Amazon SQS queue.
     */
    sqs?: SqsAction;
    /**
     * Write data to an Amazon Kinesis stream.
     */
    kinesis?: KinesisAction;
    /**
     * Publish to another MQTT topic.
     */
    republish?: RepublishAction;
    /**
     * Write to an Amazon S3 bucket.
     */
    s3?: S3Action;
    /**
     * Write to an Amazon Kinesis Firehose stream.
     */
    firehose?: FirehoseAction;
    /**
     * Capture a CloudWatch metric.
     */
    cloudwatchMetric?: CloudwatchMetricAction;
    /**
     * Change the state of a CloudWatch alarm.
     */
    cloudwatchAlarm?: CloudwatchAlarmAction;
    /**
     * Write data to an Amazon Elasticsearch Service domain.
     */
    elasticsearch?: ElasticsearchAction;
    /**
     * Send a message to a Salesforce IoT Cloud Input Stream.
     */
    salesforce?: SalesforceAction;
  }
  export type ActionList = Action[];
  export type ActionType = "PUBLISH"|"SUBSCRIBE"|"RECEIVE"|"CONNECT"|string;
  export interface AddThingToThingGroupRequest {
    /**
     * The name of the group to which you are adding a thing.
     */
    thingGroupName?: ThingGroupName;
    /**
     * The ARN of the group to which you are adding a thing.
     */
    thingGroupArn?: ThingGroupArn;
    /**
     * The name of the thing to add to a group.
     */
    thingName?: ThingName;
    /**
     * The ARN of the thing to add to a group.
     */
    thingArn?: ThingArn;
  }
  export interface AddThingToThingGroupResponse {
  }
  export type AdditionalParameterMap = {[key: string]: Value};
  export type AlarmName = string;
  export type AllowAutoRegistration = boolean;
  export interface Allowed {
    /**
     * A list of policies that allowed the authentication.
     */
    policies?: Policies;
  }
  export type AscendingOrder = boolean;
  export interface AssociateTargetsWithJobRequest {
    /**
     * A list of thing group ARNs that define the targets of the job.
     */
    targets: JobTargets;
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId: JobId;
    /**
     * An optional comment string describing why the job was associated with the targets.
     */
    comment?: Comment;
  }
  export interface AssociateTargetsWithJobResponse {
    /**
     * An ARN identifying the job.
     */
    jobArn?: JobArn;
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId?: JobId;
    /**
     * A short text description of the job.
     */
    description?: JobDescription;
  }
  export interface AttachPolicyRequest {
    /**
     * The name of the policy to attach.
     */
    policyName: PolicyName;
    /**
     * The identity to which the policy is attached.
     */
    target: PolicyTarget;
  }
  export interface AttachPrincipalPolicyRequest {
    /**
     * The policy name.
     */
    policyName: PolicyName;
    /**
     * The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID.
     */
    principal: Principal;
  }
  export interface AttachThingPrincipalRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
    /**
     * The principal, such as a certificate or other credential.
     */
    principal: Principal;
  }
  export interface AttachThingPrincipalResponse {
  }
  export type AttributeName = string;
  export interface AttributePayload {
    /**
     * A JSON string containing up to three key-value pair in JSON format. For example:  {\"attributes\":{\"string1\":\"string2\"}} 
     */
    attributes?: Attributes;
    /**
     * Specifies whether the list of attributes provided in the AttributePayload is merged with the attributes stored in the registry, instead of overwriting them. To remove an attribute, call UpdateThing with an empty attribute value.  The merge attribute is only valid when calling UpdateThing. 
     */
    merge?: Flag;
  }
  export type AttributeValue = string;
  export type Attributes = {[key: string]: AttributeValue};
  export type AttributesMap = {[key: string]: Value};
  export type AuthDecision = "ALLOWED"|"EXPLICIT_DENY"|"IMPLICIT_DENY"|string;
  export interface AuthInfo {
    /**
     * The type of action for which the principal is being authorized.
     */
    actionType?: ActionType;
    /**
     * The resources for which the principal is being authorized to perform the specified action.
     */
    resources?: Resources;
  }
  export type AuthInfos = AuthInfo[];
  export interface AuthResult {
    /**
     * Authorization information.
     */
    authInfo?: AuthInfo;
    /**
     * The policies and statements that allowed the specified action.
     */
    allowed?: Allowed;
    /**
     * The policies and statements that denied the specified action.
     */
    denied?: Denied;
    /**
     * The final authorization decision of this scenario. Multiple statements are taken into account when determining the authorization decision. An explicit deny statement can override multiple allow statements.
     */
    authDecision?: AuthDecision;
    /**
     * Contains any missing context values found while evaluating policy.
     */
    missingContextValues?: MissingContextValues;
  }
  export type AuthResults = AuthResult[];
  export type AuthorizerArn = string;
  export interface AuthorizerDescription {
    /**
     * The authorizer name.
     */
    authorizerName?: AuthorizerName;
    /**
     * The authorizer ARN.
     */
    authorizerArn?: AuthorizerArn;
    /**
     * The authorizer's Lambda function ARN.
     */
    authorizerFunctionArn?: AuthorizerFunctionArn;
    /**
     * The key used to extract the token from the HTTP headers.
     */
    tokenKeyName?: TokenKeyName;
    /**
     * The public keys used to validate the token signature returned by your custom authentication service.
     */
    tokenSigningPublicKeys?: PublicKeyMap;
    /**
     * The status of the authorizer.
     */
    status?: AuthorizerStatus;
    /**
     * The UNIX timestamp of when the authorizer was created.
     */
    creationDate?: DateType;
    /**
     * The UNIX timestamp of when the authorizer was last updated.
     */
    lastModifiedDate?: DateType;
  }
  export type AuthorizerFunctionArn = string;
  export type AuthorizerName = string;
  export type AuthorizerStatus = "ACTIVE"|"INACTIVE"|string;
  export interface AuthorizerSummary {
    /**
     * The authorizer name.
     */
    authorizerName?: AuthorizerName;
    /**
     * The authorizer ARN.
     */
    authorizerArn?: AuthorizerArn;
  }
  export type Authorizers = AuthorizerSummary[];
  export type AutoRegistrationStatus = "ENABLE"|"DISABLE"|string;
  export type AwsAccountId = string;
  export type AwsArn = string;
  export type AwsIotJobArn = string;
  export type AwsIotJobId = string;
  export type AwsIotSqlVersion = string;
  export type Boolean = boolean;
  export type BucketName = string;
  export interface CACertificate {
    /**
     * The ARN of the CA certificate.
     */
    certificateArn?: CertificateArn;
    /**
     * The ID of the CA certificate.
     */
    certificateId?: CertificateId;
    /**
     * The status of the CA certificate. The status value REGISTER_INACTIVE is deprecated and should not be used.
     */
    status?: CACertificateStatus;
    /**
     * The date the CA certificate was created.
     */
    creationDate?: DateType;
  }
  export interface CACertificateDescription {
    /**
     * The CA certificate ARN.
     */
    certificateArn?: CertificateArn;
    /**
     * The CA certificate ID.
     */
    certificateId?: CertificateId;
    /**
     * The status of a CA certificate.
     */
    status?: CACertificateStatus;
    /**
     * The CA certificate data, in PEM format.
     */
    certificatePem?: CertificatePem;
    /**
     * The owner of the CA certificate.
     */
    ownedBy?: AwsAccountId;
    /**
     * The date the CA certificate was created.
     */
    creationDate?: DateType;
    /**
     * Whether the CA certificate configured for auto registration of device certificates. Valid values are "ENABLE" and "DISABLE"
     */
    autoRegistrationStatus?: AutoRegistrationStatus;
  }
  export type CACertificateStatus = "ACTIVE"|"INACTIVE"|string;
  export type CACertificates = CACertificate[];
  export interface CancelCertificateTransferRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
  }
  export interface CancelJobRequest {
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId: JobId;
    /**
     * An optional comment string describing why the job was canceled.
     */
    comment?: Comment;
  }
  export interface CancelJobResponse {
    /**
     * The job ARN.
     */
    jobArn?: JobArn;
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId?: JobId;
    /**
     * A short text description of the job.
     */
    description?: JobDescription;
  }
  export type CanceledThings = number;
  export type CannedAccessControlList = "private"|"public-read"|"public-read-write"|"aws-exec-read"|"authenticated-read"|"bucket-owner-read"|"bucket-owner-full-control"|"log-delivery-write"|string;
  export interface Certificate {
    /**
     * The ARN of the certificate.
     */
    certificateArn?: CertificateArn;
    /**
     * The ID of the certificate.
     */
    certificateId?: CertificateId;
    /**
     * The status of the certificate. The status value REGISTER_INACTIVE is deprecated and should not be used.
     */
    status?: CertificateStatus;
    /**
     * The date and time the certificate was created.
     */
    creationDate?: DateType;
  }
  export type CertificateArn = string;
  export interface CertificateDescription {
    /**
     * The ARN of the certificate.
     */
    certificateArn?: CertificateArn;
    /**
     * The ID of the certificate.
     */
    certificateId?: CertificateId;
    /**
     * The certificate ID of the CA certificate used to sign this certificate.
     */
    caCertificateId?: CertificateId;
    /**
     * The status of the certificate.
     */
    status?: CertificateStatus;
    /**
     * The certificate data, in PEM format.
     */
    certificatePem?: CertificatePem;
    /**
     * The ID of the AWS account that owns the certificate.
     */
    ownedBy?: AwsAccountId;
    /**
     * The ID of the AWS account of the previous owner of the certificate.
     */
    previousOwnedBy?: AwsAccountId;
    /**
     * The date and time the certificate was created.
     */
    creationDate?: DateType;
    /**
     * The date and time the certificate was last modified.
     */
    lastModifiedDate?: DateType;
    /**
     * The transfer data.
     */
    transferData?: TransferData;
  }
  export type CertificateId = string;
  export type CertificateName = string;
  export type CertificatePem = string;
  export type CertificateSigningRequest = string;
  export type CertificateStatus = "ACTIVE"|"INACTIVE"|"REVOKED"|"PENDING_TRANSFER"|"REGISTER_INACTIVE"|"PENDING_ACTIVATION"|string;
  export type Certificates = Certificate[];
  export interface ClearDefaultAuthorizerRequest {
  }
  export interface ClearDefaultAuthorizerResponse {
  }
  export type ClientId = string;
  export interface CloudwatchAlarmAction {
    /**
     * The IAM role that allows access to the CloudWatch alarm.
     */
    roleArn: AwsArn;
    /**
     * The CloudWatch alarm name.
     */
    alarmName: AlarmName;
    /**
     * The reason for the alarm change.
     */
    stateReason: StateReason;
    /**
     * The value of the alarm state. Acceptable values are: OK, ALARM, INSUFFICIENT_DATA.
     */
    stateValue: StateValue;
  }
  export interface CloudwatchMetricAction {
    /**
     * The IAM role that allows access to the CloudWatch metric.
     */
    roleArn: AwsArn;
    /**
     * The CloudWatch metric namespace name.
     */
    metricNamespace: MetricNamespace;
    /**
     * The CloudWatch metric name.
     */
    metricName: MetricName;
    /**
     * The CloudWatch metric value.
     */
    metricValue: MetricValue;
    /**
     * The metric unit supported by CloudWatch.
     */
    metricUnit: MetricUnit;
    /**
     * An optional Unix timestamp.
     */
    metricTimestamp?: MetricTimestamp;
  }
  export type Code = string;
  export interface CodeSigning {
    /**
     * The ID of the AWSSignerJob which was created to sign the file.
     */
    awsSignerJobId?: SigningJobId;
    /**
     * A custom method for code signing a file.
     */
    customCodeSigning?: CustomCodeSigning;
  }
  export interface CodeSigningCertificateChain {
    /**
     * A stream of the certificate chain files.
     */
    stream?: Stream;
    /**
     * The name of the certificate.
     */
    certificateName?: CertificateName;
    /**
     * A base64 encoded binary representation of the code signing certificate chain.
     */
    inlineDocument?: InlineDocument;
  }
  export interface CodeSigningSignature {
    /**
     * A stream of the code signing signature.
     */
    stream?: Stream;
    /**
     * A base64 encoded binary representation of the code signing signature.
     */
    inlineDocument?: Signature;
  }
  export type CognitoIdentityPoolId = string;
  export type Comment = string;
  export interface Configuration {
    /**
     * True to enable the configuration.
     */
    Enabled?: Enabled;
  }
  export type Count = number;
  export interface CreateAuthorizerRequest {
    /**
     * The authorizer name.
     */
    authorizerName: AuthorizerName;
    /**
     * The ARN of the authorizer's Lambda function.
     */
    authorizerFunctionArn: AuthorizerFunctionArn;
    /**
     * The name of the token key used to extract the token from the HTTP headers.
     */
    tokenKeyName: TokenKeyName;
    /**
     * The public keys used to verify the digital signature returned by your custom authentication service.
     */
    tokenSigningPublicKeys: PublicKeyMap;
    /**
     * The status of the create authorizer request.
     */
    status?: AuthorizerStatus;
  }
  export interface CreateAuthorizerResponse {
    /**
     * The authorizer's name.
     */
    authorizerName?: AuthorizerName;
    /**
     * The authorizer ARN.
     */
    authorizerArn?: AuthorizerArn;
  }
  export interface CreateCertificateFromCsrRequest {
    /**
     * The certificate signing request (CSR).
     */
    certificateSigningRequest: CertificateSigningRequest;
    /**
     * Specifies whether the certificate is active.
     */
    setAsActive?: SetAsActive;
  }
  export interface CreateCertificateFromCsrResponse {
    /**
     * The Amazon Resource Name (ARN) of the certificate. You can use the ARN as a principal for policy operations.
     */
    certificateArn?: CertificateArn;
    /**
     * The ID of the certificate. Certificate management operations only take a certificateId.
     */
    certificateId?: CertificateId;
    /**
     * The certificate data, in PEM format.
     */
    certificatePem?: CertificatePem;
  }
  export interface CreateJobRequest {
    /**
     * A job identifier which must be unique for your AWS account. We recommend using a UUID. Alpha-numeric characters, "-" and "_" are valid for use here.
     */
    jobId: JobId;
    /**
     * A list of things and thing groups to which the job should be sent.
     */
    targets: JobTargets;
    /**
     * An S3 link to the job document.
     */
    documentSource?: JobDocumentSource;
    /**
     * The job document.
     */
    document?: JobDocument;
    /**
     * A short text description of the job.
     */
    description?: JobDescription;
    /**
     * Configuration information for pre-signed S3 URLs.
     */
    presignedUrlConfig?: PresignedUrlConfig;
    /**
     * Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group.
     */
    targetSelection?: TargetSelection;
    /**
     * Allows you to create a staged rollout of the job.
     */
    jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
    /**
     * Parameters for the job document.
     */
    documentParameters?: JobDocumentParameters;
  }
  export interface CreateJobResponse {
    /**
     * The job ARN.
     */
    jobArn?: JobArn;
    /**
     * The unique identifier you assigned to this job.
     */
    jobId?: JobId;
    /**
     * The job description.
     */
    description?: JobDescription;
  }
  export interface CreateKeysAndCertificateRequest {
    /**
     * Specifies whether the certificate is active.
     */
    setAsActive?: SetAsActive;
  }
  export interface CreateKeysAndCertificateResponse {
    /**
     * The ARN of the certificate.
     */
    certificateArn?: CertificateArn;
    /**
     * The ID of the certificate. AWS IoT issues a default subject name for the certificate (for example, AWS IoT Certificate).
     */
    certificateId?: CertificateId;
    /**
     * The certificate data, in PEM format.
     */
    certificatePem?: CertificatePem;
    /**
     * The generated key pair.
     */
    keyPair?: KeyPair;
  }
  export interface CreateOTAUpdateRequest {
    /**
     * The ID of the OTA update to be created.
     */
    otaUpdateId: OTAUpdateId;
    /**
     * The description of the OTA update.
     */
    description?: OTAUpdateDescription;
    /**
     * The targeted devices to receive OTA updates.
     */
    targets: Targets;
    /**
     * Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a thing when a change is detected in a target. For example, an update will run on a thing when the thing is added to a target group, even after the update was completed by all things originally in the group. Valid values: CONTINUOUS | SNAPSHOT.
     */
    targetSelection?: TargetSelection;
    /**
     * The files to be streamed by the OTA update.
     */
    files: OTAUpdateFiles;
    /**
     * The IAM role that allows access to the AWS IoT Jobs service.
     */
    roleArn: RoleArn;
    /**
     * A list of additional OTA update parameters which are name-value pairs.
     */
    additionalParameters?: AdditionalParameterMap;
  }
  export interface CreateOTAUpdateResponse {
    /**
     * The OTA update ID.
     */
    otaUpdateId?: OTAUpdateId;
    /**
     * The AWS IoT job ID associated with the OTA update.
     */
    awsIotJobId?: AwsIotJobId;
    /**
     * The OTA update ARN.
     */
    otaUpdateArn?: OTAUpdateArn;
    /**
     * The AWS IoT job ARN associated with the OTA update.
     */
    awsIotJobArn?: AwsIotJobArn;
    /**
     * The OTA update status.
     */
    otaUpdateStatus?: OTAUpdateStatus;
  }
  export interface CreatePolicyRequest {
    /**
     * The policy name.
     */
    policyName: PolicyName;
    /**
     * The JSON document that describes the policy. policyDocument must have a minimum length of 1, with a maximum length of 2048, excluding whitespace.
     */
    policyDocument: PolicyDocument;
  }
  export interface CreatePolicyResponse {
    /**
     * The policy name.
     */
    policyName?: PolicyName;
    /**
     * The policy ARN.
     */
    policyArn?: PolicyArn;
    /**
     * The JSON document that describes the policy.
     */
    policyDocument?: PolicyDocument;
    /**
     * The policy version ID.
     */
    policyVersionId?: PolicyVersionId;
  }
  export interface CreatePolicyVersionRequest {
    /**
     * The policy name.
     */
    policyName: PolicyName;
    /**
     * The JSON document that describes the policy. Minimum length of 1. Maximum length of 2048, excluding whitespace.
     */
    policyDocument: PolicyDocument;
    /**
     * Specifies whether the policy version is set as the default. When this parameter is true, the new policy version becomes the operative version (that is, the version that is in effect for the certificates to which the policy is attached).
     */
    setAsDefault?: SetAsDefault;
  }
  export interface CreatePolicyVersionResponse {
    /**
     * The policy ARN.
     */
    policyArn?: PolicyArn;
    /**
     * The JSON document that describes the policy.
     */
    policyDocument?: PolicyDocument;
    /**
     * The policy version ID.
     */
    policyVersionId?: PolicyVersionId;
    /**
     * Specifies whether the policy version is the default.
     */
    isDefaultVersion?: IsDefaultVersion;
  }
  export interface CreateRoleAliasRequest {
    /**
     * The role alias that points to a role ARN. This allows you to change the role without having to update the device.
     */
    roleAlias: RoleAlias;
    /**
     * The role ARN.
     */
    roleArn: RoleArn;
    /**
     * How long (in seconds) the credentials will be valid.
     */
    credentialDurationSeconds?: CredentialDurationSeconds;
  }
  export interface CreateRoleAliasResponse {
    /**
     * The role alias.
     */
    roleAlias?: RoleAlias;
    /**
     * The role alias ARN.
     */
    roleAliasArn?: RoleAliasArn;
  }
  export interface CreateStreamRequest {
    /**
     * The stream ID.
     */
    streamId: StreamId;
    /**
     * A description of the stream.
     */
    description?: StreamDescription;
    /**
     * The files to stream.
     */
    files: StreamFiles;
    /**
     * An IAM role that allows the IoT service principal assumes to access your S3 files.
     */
    roleArn: RoleArn;
  }
  export interface CreateStreamResponse {
    /**
     * The stream ID.
     */
    streamId?: StreamId;
    /**
     * The stream ARN.
     */
    streamArn?: StreamArn;
    /**
     * A description of the stream.
     */
    description?: StreamDescription;
    /**
     * The version of the stream.
     */
    streamVersion?: StreamVersion;
  }
  export interface CreateThingGroupRequest {
    /**
     * The thing group name to create.
     */
    thingGroupName: ThingGroupName;
    /**
     * The name of the parent thing group.
     */
    parentGroupName?: ThingGroupName;
    /**
     * The thing group properties.
     */
    thingGroupProperties?: ThingGroupProperties;
  }
  export interface CreateThingGroupResponse {
    /**
     * The thing group name.
     */
    thingGroupName?: ThingGroupName;
    /**
     * The thing group ARN.
     */
    thingGroupArn?: ThingGroupArn;
    /**
     * The thing group ID.
     */
    thingGroupId?: ThingGroupId;
  }
  export interface CreateThingRequest {
    /**
     * The name of the thing to create.
     */
    thingName: ThingName;
    /**
     * The name of the thing type associated with the new thing.
     */
    thingTypeName?: ThingTypeName;
    /**
     * The attribute payload, which consists of up to three name/value pairs in a JSON document. For example:  {\"attributes\":{\"string1\":\"string2\"}} 
     */
    attributePayload?: AttributePayload;
  }
  export interface CreateThingResponse {
    /**
     * The name of the new thing.
     */
    thingName?: ThingName;
    /**
     * The ARN of the new thing.
     */
    thingArn?: ThingArn;
    /**
     * The thing ID.
     */
    thingId?: ThingId;
  }
  export interface CreateThingTypeRequest {
    /**
     * The name of the thing type.
     */
    thingTypeName: ThingTypeName;
    /**
     * The ThingTypeProperties for the thing type to create. It contains information about the new thing type including a description, and a list of searchable thing attribute names.
     */
    thingTypeProperties?: ThingTypeProperties;
  }
  export interface CreateThingTypeResponse {
    /**
     * The name of the thing type.
     */
    thingTypeName?: ThingTypeName;
    /**
     * The Amazon Resource Name (ARN) of the thing type.
     */
    thingTypeArn?: ThingTypeArn;
    /**
     * The thing type ID.
     */
    thingTypeId?: ThingTypeId;
  }
  export interface CreateTopicRuleRequest {
    /**
     * The name of the rule.
     */
    ruleName: RuleName;
    /**
     * The rule payload.
     */
    topicRulePayload: TopicRulePayload;
  }
  export type CreatedAtDate = Date;
  export type CreationDate = Date;
  export type CredentialDurationSeconds = number;
  export interface CustomCodeSigning {
    /**
     * The signature for the file.
     */
    signature?: CodeSigningSignature;
    /**
     * The certificate chain.
     */
    certificateChain?: CodeSigningCertificateChain;
    /**
     * The hash algorithm used to code sign the file.
     */
    hashAlgorithm?: HashAlgorithm;
    /**
     * The signature algorithm used to code sign the file.
     */
    signatureAlgorithm?: SignatureAlgorithm;
  }
  export type DateType = Date;
  export interface DeleteAuthorizerRequest {
    /**
     * The name of the authorizer to delete.
     */
    authorizerName: AuthorizerName;
  }
  export interface DeleteAuthorizerResponse {
  }
  export interface DeleteCACertificateRequest {
    /**
     * The ID of the certificate to delete.
     */
    certificateId: CertificateId;
  }
  export interface DeleteCACertificateResponse {
  }
  export interface DeleteCertificateRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
    /**
     * Forces a certificate request to be deleted.
     */
    forceDelete?: ForceDelete;
  }
  export interface DeleteOTAUpdateRequest {
    /**
     * The OTA update ID to delete.
     */
    otaUpdateId: OTAUpdateId;
  }
  export interface DeleteOTAUpdateResponse {
  }
  export interface DeletePolicyRequest {
    /**
     * The name of the policy to delete.
     */
    policyName: PolicyName;
  }
  export interface DeletePolicyVersionRequest {
    /**
     * The name of the policy.
     */
    policyName: PolicyName;
    /**
     * The policy version ID.
     */
    policyVersionId: PolicyVersionId;
  }
  export interface DeleteRegistrationCodeRequest {
  }
  export interface DeleteRegistrationCodeResponse {
  }
  export interface DeleteRoleAliasRequest {
    /**
     * The role alias to delete.
     */
    roleAlias: RoleAlias;
  }
  export interface DeleteRoleAliasResponse {
  }
  export interface DeleteStreamRequest {
    /**
     * The stream ID.
     */
    streamId: StreamId;
  }
  export interface DeleteStreamResponse {
  }
  export interface DeleteThingGroupRequest {
    /**
     * The name of the thing group to delete.
     */
    thingGroupName: ThingGroupName;
    /**
     * The expected version of the thing group to delete.
     */
    expectedVersion?: OptionalVersion;
  }
  export interface DeleteThingGroupResponse {
  }
  export interface DeleteThingRequest {
    /**
     * The name of the thing to delete.
     */
    thingName: ThingName;
    /**
     * The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the DeleteThing request is rejected with a VersionConflictException.
     */
    expectedVersion?: OptionalVersion;
  }
  export interface DeleteThingResponse {
  }
  export interface DeleteThingTypeRequest {
    /**
     * The name of the thing type.
     */
    thingTypeName: ThingTypeName;
  }
  export interface DeleteThingTypeResponse {
  }
  export interface DeleteTopicRuleRequest {
    /**
     * The name of the rule.
     */
    ruleName: RuleName;
  }
  export interface DeleteV2LoggingLevelRequest {
    /**
     * The type of resource for which you are configuring logging. Must be THING_Group.
     */
    targetType: LogTargetType;
    /**
     * The name of the resource for which you are configuring logging.
     */
    targetName: LogTargetName;
  }
  export type DeliveryStreamName = string;
  export interface Denied {
    /**
     * Information that implicitly denies the authorization. When a policy doesn't explicitly deny or allow an action on a resource it is considered an implicit deny.
     */
    implicitDeny?: ImplicitDeny;
    /**
     * Information that explicitly denies the authorization. 
     */
    explicitDeny?: ExplicitDeny;
  }
  export interface DeprecateThingTypeRequest {
    /**
     * The name of the thing type to deprecate.
     */
    thingTypeName: ThingTypeName;
    /**
     * Whether to undeprecate a deprecated thing type. If true, the thing type will not be deprecated anymore and you can associate it with things.
     */
    undoDeprecate?: UndoDeprecate;
  }
  export interface DeprecateThingTypeResponse {
  }
  export type DeprecationDate = Date;
  export interface DescribeAuthorizerRequest {
    /**
     * The name of the authorizer to describe.
     */
    authorizerName: AuthorizerName;
  }
  export interface DescribeAuthorizerResponse {
    /**
     * The authorizer description.
     */
    authorizerDescription?: AuthorizerDescription;
  }
  export interface DescribeCACertificateRequest {
    /**
     * The CA certificate identifier.
     */
    certificateId: CertificateId;
  }
  export interface DescribeCACertificateResponse {
    /**
     * The CA certificate description.
     */
    certificateDescription?: CACertificateDescription;
    /**
     * Information about the registration configuration.
     */
    registrationConfig?: RegistrationConfig;
  }
  export interface DescribeCertificateRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
  }
  export interface DescribeCertificateResponse {
    /**
     * The description of the certificate.
     */
    certificateDescription?: CertificateDescription;
  }
  export interface DescribeDefaultAuthorizerRequest {
  }
  export interface DescribeDefaultAuthorizerResponse {
    /**
     * The default authorizer's description.
     */
    authorizerDescription?: AuthorizerDescription;
  }
  export interface DescribeEndpointRequest {
    /**
     * The endpoint type.
     */
    endpointType?: EndpointType;
  }
  export interface DescribeEndpointResponse {
    /**
     * The endpoint. The format of the endpoint is as follows: identifier.iot.region.amazonaws.com.
     */
    endpointAddress?: EndpointAddress;
  }
  export interface DescribeEventConfigurationsRequest {
  }
  export interface DescribeEventConfigurationsResponse {
    /**
     * The event configurations.
     */
    eventConfigurations?: EventConfigurations;
    /**
     * The creation date of the event configuration.
     */
    creationDate?: CreationDate;
    /**
     * The date the event configurations were last modified.
     */
    lastModifiedDate?: LastModifiedDate;
  }
  export interface DescribeIndexRequest {
    /**
     * The index name.
     */
    indexName: IndexName;
  }
  export interface DescribeIndexResponse {
    /**
     * The index name.
     */
    indexName?: IndexName;
    /**
     * The index status.
     */
    indexStatus?: IndexStatus;
    /**
     * Contains a value that specifies the type of indexing performed. Valid values are:   REGISTRY – Your thing index will contain only registry data.   REGISTRY_AND_SHADOW - Your thing index will contain registry and shadow data.  
     */
    schema?: IndexSchema;
  }
  export interface DescribeJobExecutionRequest {
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId: JobId;
    /**
     * The name of the thing on which the job execution is running.
     */
    thingName: ThingName;
    /**
     * A string (consisting of the digits "0" through "9" which is used to specify a particular job execution on a particular device.
     */
    executionNumber?: ExecutionNumber;
  }
  export interface DescribeJobExecutionResponse {
    /**
     * Information about the job execution.
     */
    execution?: JobExecution;
  }
  export interface DescribeJobRequest {
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId: JobId;
  }
  export interface DescribeJobResponse {
    /**
     * An S3 link to the job document.
     */
    documentSource?: JobDocumentSource;
    /**
     * Information about the job.
     */
    job?: Job;
  }
  export interface DescribeRoleAliasRequest {
    /**
     * The role alias to describe.
     */
    roleAlias: RoleAlias;
  }
  export interface DescribeRoleAliasResponse {
    /**
     * The role alias description.
     */
    roleAliasDescription?: RoleAliasDescription;
  }
  export interface DescribeStreamRequest {
    /**
     * The stream ID.
     */
    streamId: StreamId;
  }
  export interface DescribeStreamResponse {
    /**
     * Information about the stream.
     */
    streamInfo?: StreamInfo;
  }
  export interface DescribeThingGroupRequest {
    /**
     * The name of the thing group.
     */
    thingGroupName: ThingGroupName;
  }
  export interface DescribeThingGroupResponse {
    /**
     * The name of the thing group.
     */
    thingGroupName?: ThingGroupName;
    /**
     * The thing group ID.
     */
    thingGroupId?: ThingGroupId;
    /**
     * The thing group ARN.
     */
    thingGroupArn?: ThingGroupArn;
    /**
     * The version of the thing group.
     */
    version?: Version;
    /**
     * The thing group properties.
     */
    thingGroupProperties?: ThingGroupProperties;
    /**
     * Thing group metadata.
     */
    thingGroupMetadata?: ThingGroupMetadata;
  }
  export interface DescribeThingRegistrationTaskRequest {
    /**
     * The task ID.
     */
    taskId: TaskId;
  }
  export interface DescribeThingRegistrationTaskResponse {
    /**
     * The task ID.
     */
    taskId?: TaskId;
    /**
     * The task creation date.
     */
    creationDate?: CreationDate;
    /**
     * The date when the task was last modified.
     */
    lastModifiedDate?: LastModifiedDate;
    /**
     * The task's template.
     */
    templateBody?: TemplateBody;
    /**
     * The S3 bucket that contains the input file.
     */
    inputFileBucket?: RegistryS3BucketName;
    /**
     * The input file key.
     */
    inputFileKey?: RegistryS3KeyName;
    /**
     * The role ARN that grants access to the input file bucket.
     */
    roleArn?: RoleArn;
    /**
     * The status of the bulk thing provisioning task.
     */
    status?: Status;
    /**
     * The message.
     */
    message?: ErrorMessage;
    /**
     * The number of things successfully provisioned.
     */
    successCount?: Count;
    /**
     * The number of things that failed to be provisioned.
     */
    failureCount?: Count;
    /**
     * The progress of the bulk provisioning task expressed as a percentage.
     */
    percentageProgress?: Percentage;
  }
  export interface DescribeThingRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
  }
  export interface DescribeThingResponse {
    /**
     * The default client ID.
     */
    defaultClientId?: ClientId;
    /**
     * The name of the thing.
     */
    thingName?: ThingName;
    /**
     * The ID of the thing to describe.
     */
    thingId?: ThingId;
    /**
     * The ARN of the thing to describe.
     */
    thingArn?: ThingArn;
    /**
     * The thing type name.
     */
    thingTypeName?: ThingTypeName;
    /**
     * The thing attributes.
     */
    attributes?: Attributes;
    /**
     * The current version of the thing record in the registry.  To avoid unintentional changes to the information in the registry, you can pass the version information in the expectedVersion parameter of the UpdateThing and DeleteThing calls. 
     */
    version?: Version;
  }
  export interface DescribeThingTypeRequest {
    /**
     * The name of the thing type.
     */
    thingTypeName: ThingTypeName;
  }
  export interface DescribeThingTypeResponse {
    /**
     * The name of the thing type.
     */
    thingTypeName?: ThingTypeName;
    /**
     * The thing type ID.
     */
    thingTypeId?: ThingTypeId;
    /**
     * The thing type ARN.
     */
    thingTypeArn?: ThingTypeArn;
    /**
     * The ThingTypeProperties contains information about the thing type including description, and a list of searchable thing attribute names.
     */
    thingTypeProperties?: ThingTypeProperties;
    /**
     * The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when it was deprecated.
     */
    thingTypeMetadata?: ThingTypeMetadata;
  }
  export type Description = string;
  export interface DetachPolicyRequest {
    /**
     * The policy to detach.
     */
    policyName: PolicyName;
    /**
     * The target from which the policy will be detached.
     */
    target: PolicyTarget;
  }
  export interface DetachPrincipalPolicyRequest {
    /**
     * The name of the policy to detach.
     */
    policyName: PolicyName;
    /**
     * The principal. If the principal is a certificate, specify the certificate ARN. If the principal is an Amazon Cognito identity, specify the identity ID.
     */
    principal: Principal;
  }
  export interface DetachThingPrincipalRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
    /**
     * If the principal is a certificate, this value must be ARN of the certificate. If the principal is an Amazon Cognito identity, this value must be the ID of the Amazon Cognito identity.
     */
    principal: Principal;
  }
  export interface DetachThingPrincipalResponse {
  }
  export type DetailsKey = string;
  export type DetailsMap = {[key: string]: DetailsValue};
  export type DetailsValue = string;
  export type DisableAllLogs = boolean;
  export interface DisableTopicRuleRequest {
    /**
     * The name of the rule to disable.
     */
    ruleName: RuleName;
  }
  export interface DynamoDBAction {
    /**
     * The name of the DynamoDB table.
     */
    tableName: TableName;
    /**
     * The ARN of the IAM role that grants access to the DynamoDB table.
     */
    roleArn: AwsArn;
    /**
     * The type of operation to be performed. This follows the substitution template, so it can be ${operation}, but the substitution must result in one of the following: INSERT, UPDATE, or DELETE.
     */
    operation?: DynamoOperation;
    /**
     * The hash key name.
     */
    hashKeyField: HashKeyField;
    /**
     * The hash key value.
     */
    hashKeyValue: HashKeyValue;
    /**
     * The hash key type. Valid values are "STRING" or "NUMBER"
     */
    hashKeyType?: DynamoKeyType;
    /**
     * The range key name.
     */
    rangeKeyField?: RangeKeyField;
    /**
     * The range key value.
     */
    rangeKeyValue?: RangeKeyValue;
    /**
     * The range key type. Valid values are "STRING" or "NUMBER"
     */
    rangeKeyType?: DynamoKeyType;
    /**
     * The action payload. This name can be customized.
     */
    payloadField?: PayloadField;
  }
  export interface DynamoDBv2Action {
    /**
     * The ARN of the IAM role that grants access to the DynamoDB table.
     */
    roleArn?: AwsArn;
    /**
     * Specifies the DynamoDB table to which the message data will be written. For example:  { "dynamoDBv2": { "roleArn": "aws:iam:12341251:my-role" "putItem": { "tableName": "my-table" } } }  Each attribute in the message payload will be written to a separate column in the DynamoDB database.
     */
    putItem?: PutItemInput;
  }
  export type DynamoKeyType = "STRING"|"NUMBER"|string;
  export type DynamoOperation = string;
  export type EffectivePolicies = EffectivePolicy[];
  export interface EffectivePolicy {
    /**
     * The policy name.
     */
    policyName?: PolicyName;
    /**
     * The policy ARN.
     */
    policyArn?: PolicyArn;
    /**
     * The IAM policy document.
     */
    policyDocument?: PolicyDocument;
  }
  export interface ElasticsearchAction {
    /**
     * The IAM role ARN that has access to Elasticsearch.
     */
    roleArn: AwsArn;
    /**
     * The endpoint of your Elasticsearch domain.
     */
    endpoint: ElasticsearchEndpoint;
    /**
     * The Elasticsearch index where you want to store your data.
     */
    index: ElasticsearchIndex;
    /**
     * The type of document you are storing.
     */
    type: ElasticsearchType;
    /**
     * The unique identifier for the document you are storing.
     */
    id: ElasticsearchId;
  }
  export type ElasticsearchEndpoint = string;
  export type ElasticsearchId = string;
  export type ElasticsearchIndex = string;
  export type ElasticsearchType = string;
  export interface EnableTopicRuleRequest {
    /**
     * The name of the topic rule to enable.
     */
    ruleName: RuleName;
  }
  export type Enabled = boolean;
  export type EndpointAddress = string;
  export type EndpointType = string;
  export interface ErrorInfo {
    /**
     * The error code.
     */
    code?: Code;
    /**
     * The error message.
     */
    message?: OTAUpdateErrorMessage;
  }
  export type ErrorMessage = string;
  export type EventConfigurations = {[key: string]: Configuration};
  export type EventType = "THING"|"THING_GROUP"|"THING_TYPE"|"THING_GROUP_MEMBERSHIP"|"THING_GROUP_HIERARCHY"|"THING_TYPE_ASSOCIATION"|"JOB"|"JOB_EXECUTION"|string;
  export type ExecutionNumber = number;
  export type ExpiresInSec = number;
  export interface ExplicitDeny {
    /**
     * The policies that denied the authorization.
     */
    policies?: Policies;
  }
  export type FailedThings = number;
  export type FileId = number;
  export type FileName = string;
  export interface FirehoseAction {
    /**
     * The IAM role that grants access to the Amazon Kinesis Firehose stream.
     */
    roleArn: AwsArn;
    /**
     * The delivery stream name.
     */
    deliveryStreamName: DeliveryStreamName;
    /**
     * A character separator that will be used to separate records written to the Firehose stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).
     */
    separator?: FirehoseSeparator;
  }
  export type FirehoseSeparator = string;
  export type Flag = boolean;
  export type ForceDelete = boolean;
  export type FunctionArn = string;
  export type GEMaxResults = number;
  export interface GetEffectivePoliciesRequest {
    /**
     * The principal.
     */
    principal?: Principal;
    /**
     * The Cognito identity pool ID.
     */
    cognitoIdentityPoolId?: CognitoIdentityPoolId;
    /**
     * The thing name.
     */
    thingName?: ThingName;
  }
  export interface GetEffectivePoliciesResponse {
    /**
     * The effective policies.
     */
    effectivePolicies?: EffectivePolicies;
  }
  export interface GetIndexingConfigurationRequest {
  }
  export interface GetIndexingConfigurationResponse {
    /**
     * Thing indexing configuration.
     */
    thingIndexingConfiguration?: ThingIndexingConfiguration;
  }
  export interface GetJobDocumentRequest {
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId: JobId;
  }
  export interface GetJobDocumentResponse {
    /**
     * The job document content.
     */
    document?: JobDocument;
  }
  export interface GetLoggingOptionsRequest {
  }
  export interface GetLoggingOptionsResponse {
    /**
     * The ARN of the IAM role that grants access.
     */
    roleArn?: AwsArn;
    /**
     * The logging level.
     */
    logLevel?: LogLevel;
  }
  export interface GetOTAUpdateRequest {
    /**
     * The OTA update ID.
     */
    otaUpdateId: OTAUpdateId;
  }
  export interface GetOTAUpdateResponse {
    /**
     * The OTA update info.
     */
    otaUpdateInfo?: OTAUpdateInfo;
  }
  export interface GetPolicyRequest {
    /**
     * The name of the policy.
     */
    policyName: PolicyName;
  }
  export interface GetPolicyResponse {
    /**
     * The policy name.
     */
    policyName?: PolicyName;
    /**
     * The policy ARN.
     */
    policyArn?: PolicyArn;
    /**
     * The JSON document that describes the policy.
     */
    policyDocument?: PolicyDocument;
    /**
     * The default policy version ID.
     */
    defaultVersionId?: PolicyVersionId;
  }
  export interface GetPolicyVersionRequest {
    /**
     * The name of the policy.
     */
    policyName: PolicyName;
    /**
     * The policy version ID.
     */
    policyVersionId: PolicyVersionId;
  }
  export interface GetPolicyVersionResponse {
    /**
     * The policy ARN.
     */
    policyArn?: PolicyArn;
    /**
     * The policy name.
     */
    policyName?: PolicyName;
    /**
     * The JSON document that describes the policy.
     */
    policyDocument?: PolicyDocument;
    /**
     * The policy version ID.
     */
    policyVersionId?: PolicyVersionId;
    /**
     * Specifies whether the policy version is the default.
     */
    isDefaultVersion?: IsDefaultVersion;
  }
  export interface GetRegistrationCodeRequest {
  }
  export interface GetRegistrationCodeResponse {
    /**
     * The CA certificate registration code.
     */
    registrationCode?: RegistrationCode;
  }
  export interface GetTopicRuleRequest {
    /**
     * The name of the rule.
     */
    ruleName: RuleName;
  }
  export interface GetTopicRuleResponse {
    /**
     * The rule ARN.
     */
    ruleArn?: RuleArn;
    /**
     * The rule.
     */
    rule?: TopicRule;
  }
  export interface GetV2LoggingOptionsRequest {
  }
  export interface GetV2LoggingOptionsResponse {
    /**
     * The IAM role ARN AWS IoT uses to write to your CloudWatch logs.
     */
    roleArn?: AwsArn;
    /**
     * The default log level.
     */
    defaultLogLevel?: LogLevel;
    /**
     * Disables all logs.
     */
    disableAllLogs?: DisableAllLogs;
  }
  export interface GroupNameAndArn {
    /**
     * The group name.
     */
    groupName?: ThingGroupName;
    /**
     * The group ARN.
     */
    groupArn?: ThingGroupArn;
  }
  export type HashAlgorithm = string;
  export type HashKeyField = string;
  export type HashKeyValue = string;
  export interface ImplicitDeny {
    /**
     * Policies that don't contain a matching allow or deny statement for the specified action on the specified resource. 
     */
    policies?: Policies;
  }
  export type InProgressThings = number;
  export type IndexName = string;
  export type IndexNamesList = IndexName[];
  export type IndexSchema = string;
  export type IndexStatus = "ACTIVE"|"BUILDING"|"REBUILDING"|string;
  export type InlineDocument = string;
  export type IsAuthenticated = boolean;
  export type IsDefaultVersion = boolean;
  export type IsDisabled = boolean;
  export interface Job {
    /**
     * An ARN identifying the job with format "arn:aws:iot:region:account:job/jobId".
     */
    jobArn?: JobArn;
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId?: JobId;
    /**
     * Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a device when the thing representing the device is added to a target group, even after the job was completed by all things originally in the group. 
     */
    targetSelection?: TargetSelection;
    /**
     * The status of the job, one of IN_PROGRESS, CANCELED, or COMPLETED. 
     */
    status?: JobStatus;
    /**
     * If the job was updated, describes the reason for the update.
     */
    comment?: Comment;
    /**
     * A list of IoT things and thing groups to which the job should be sent.
     */
    targets?: JobTargets;
    /**
     * A short text description of the job.
     */
    description?: JobDescription;
    /**
     * Configuration for pre-signed S3 URLs.
     */
    presignedUrlConfig?: PresignedUrlConfig;
    /**
     * Allows you to create a staged rollout of a job.
     */
    jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
    /**
     * The time, in milliseconds since the epoch, when the job was created.
     */
    createdAt?: DateType;
    /**
     * The time, in milliseconds since the epoch, when the job was last updated.
     */
    lastUpdatedAt?: DateType;
    /**
     * The time, in milliseconds since the epoch, when the job was completed.
     */
    completedAt?: DateType;
    /**
     * Details about the job process.
     */
    jobProcessDetails?: JobProcessDetails;
    /**
     * The parameters specified for the job document.
     */
    documentParameters?: JobDocumentParameters;
  }
  export type JobArn = string;
  export type JobDescription = string;
  export type JobDocument = string;
  export type JobDocumentParameters = {[key: string]: ParameterValue};
  export type JobDocumentSource = string;
  export interface JobExecution {
    /**
     * The unique identifier you assigned to the job when it was created.
     */
    jobId?: JobId;
    /**
     * The status of the job execution (IN_PROGRESS, QUEUED, FAILED, SUCCESS, CANCELED, or REJECTED).
     */
    status?: JobExecutionStatus;
    /**
     * A collection of name/value pairs that describe the status of the job execution.
     */
    statusDetails?: JobExecutionStatusDetails;
    /**
     * The ARN of the thing on which the job execution is running.
     */
    thingArn?: ThingArn;
    /**
     * The time, in milliseconds since the epoch, when the job execution was queued.
     */
    queuedAt?: DateType;
    /**
     * The time, in milliseconds since the epoch, when the job execution started.
     */
    startedAt?: DateType;
    /**
     * The time, in milliseconds since the epoch, when the job execution was last updated.
     */
    lastUpdatedAt?: DateType;
    /**
     * A string (consisting of the digits "0" through "9") which identifies this particular job execution on this particular device. It can be used in commands which return or update job execution information. 
     */
    executionNumber?: ExecutionNumber;
  }
  export type JobExecutionStatus = "QUEUED"|"IN_PROGRESS"|"SUCCEEDED"|"FAILED"|"REJECTED"|"REMOVED"|"CANCELED"|string;
  export interface JobExecutionStatusDetails {
    /**
     * The job execution status.
     */
    detailsMap?: DetailsMap;
  }
  export interface JobExecutionSummary {
    /**
     * The status of the job execution.
     */
    status?: JobExecutionStatus;
    /**
     * The time, in milliseconds since the epoch, when the job execution was queued.
     */
    queuedAt?: DateType;
    /**
     * The time, in milliseconds since the epoch, when the job execution started.
     */
    startedAt?: DateType;
    /**
     * The time, in milliseconds since the epoch, when the job execution was last updated.
     */
    lastUpdatedAt?: DateType;
    /**
     * A string (consisting of the digits "0" through "9") which identifies this particular job execution on this particular device. It can be used later in commands which return or update job execution information.
     */
    executionNumber?: ExecutionNumber;
  }
  export interface JobExecutionSummaryForJob {
    /**
     * The ARN of the thing on which the job execution is running.
     */
    thingArn?: ThingArn;
    /**
     * Contains a subset of information about a job execution.
     */
    jobExecutionSummary?: JobExecutionSummary;
  }
  export type JobExecutionSummaryForJobList = JobExecutionSummaryForJob[];
  export interface JobExecutionSummaryForThing {
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId?: JobId;
    /**
     * Contains a subset of information about a job execution.
     */
    jobExecutionSummary?: JobExecutionSummary;
  }
  export type JobExecutionSummaryForThingList = JobExecutionSummaryForThing[];
  export interface JobExecutionsRolloutConfig {
    /**
     * The maximum number of things that will be notified of a pending job, per minute. This parameter allows you to create a staged rollout.
     */
    maximumPerMinute?: MaxJobExecutionsPerMin;
  }
  export type JobId = string;
  export interface JobProcessDetails {
    /**
     * The devices on which the job is executing.
     */
    processingTargets?: ProcessingTargetNameList;
    /**
     * The number of things that cancelled the job.
     */
    numberOfCanceledThings?: CanceledThings;
    /**
     * The number of things which successfully completed the job.
     */
    numberOfSucceededThings?: SucceededThings;
    /**
     * The number of things that failed executing the job.
     */
    numberOfFailedThings?: FailedThings;
    /**
     * The number of things that rejected the job.
     */
    numberOfRejectedThings?: RejectedThings;
    /**
     * The number of things that are awaiting execution of the job.
     */
    numberOfQueuedThings?: QueuedThings;
    /**
     * The number of things currently executing the job.
     */
    numberOfInProgressThings?: InProgressThings;
    /**
     * The number of things that are no longer scheduled to execute the job because they have been deleted or have been removed from the group that was a target of the job.
     */
    numberOfRemovedThings?: RemovedThings;
  }
  export type JobStatus = "IN_PROGRESS"|"CANCELED"|"COMPLETED"|string;
  export interface JobSummary {
    /**
     * The job ARN.
     */
    jobArn?: JobArn;
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId?: JobId;
    /**
     * The ID of the thing group.
     */
    thingGroupId?: ThingGroupId;
    /**
     * Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group.
     */
    targetSelection?: TargetSelection;
    /**
     * The job summary status.
     */
    status?: JobStatus;
    /**
     * The time, in milliseconds since the epoch, when the job was created.
     */
    createdAt?: DateType;
    /**
     * The time, in milliseconds since the epoch, when the job was last updated.
     */
    lastUpdatedAt?: DateType;
    /**
     * The time, in milliseconds since the epoch, when the job completed.
     */
    completedAt?: DateType;
  }
  export type JobSummaryList = JobSummary[];
  export type JobTargets = TargetArn[];
  export type JsonDocument = string;
  export type Key = string;
  export type KeyName = string;
  export interface KeyPair {
    /**
     * The public key.
     */
    PublicKey?: PublicKey;
    /**
     * The private key.
     */
    PrivateKey?: PrivateKey;
  }
  export type KeyValue = string;
  export interface KinesisAction {
    /**
     * The ARN of the IAM role that grants access to the Amazon Kinesis stream.
     */
    roleArn: AwsArn;
    /**
     * The name of the Amazon Kinesis stream.
     */
    streamName: StreamName;
    /**
     * The partition key.
     */
    partitionKey?: PartitionKey;
  }
  export interface LambdaAction {
    /**
     * The ARN of the Lambda function.
     */
    functionArn: FunctionArn;
  }
  export type LaserMaxResults = number;
  export type LastModifiedDate = Date;
  export interface ListAttachedPoliciesRequest {
    /**
     * The group for which the policies will be listed.
     */
    target: PolicyTarget;
    /**
     * When true, recursively list attached policies.
     */
    recursive?: Recursive;
    /**
     * The token to retrieve the next set of results.
     */
    marker?: Marker;
    /**
     * The maximum number of results to be returned per request.
     */
    pageSize?: PageSize;
  }
  export interface ListAttachedPoliciesResponse {
    /**
     * The policies.
     */
    policies?: Policies;
    /**
     * The token to retrieve the next set of results, or ``null`` if there are no more results.
     */
    nextMarker?: Marker;
  }
  export interface ListAuthorizersRequest {
    /**
     * The maximum number of results to return at one time.
     */
    pageSize?: PageSize;
    /**
     * A marker used to get the next set of results.
     */
    marker?: Marker;
    /**
     * Return the list of authorizers in ascending alphabetical order.
     */
    ascendingOrder?: AscendingOrder;
    /**
     * The status of the list authorizers request.
     */
    status?: AuthorizerStatus;
  }
  export interface ListAuthorizersResponse {
    /**
     * The authorizers.
     */
    authorizers?: Authorizers;
    /**
     * A marker used to get the next set of results.
     */
    nextMarker?: Marker;
  }
  export interface ListCACertificatesRequest {
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * Determines the order of the results.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListCACertificatesResponse {
    /**
     * The CA certificates registered in your AWS account.
     */
    certificates?: CACertificates;
    /**
     * The current position within the list of CA certificates.
     */
    nextMarker?: Marker;
  }
  export interface ListCertificatesByCARequest {
    /**
     * The ID of the CA certificate. This operation will list all registered device certificate that were signed by this CA certificate.
     */
    caCertificateId: CertificateId;
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListCertificatesByCAResponse {
    /**
     * The device certificates signed by the specified CA certificate.
     */
    certificates?: Certificates;
    /**
     * The marker for the next set of results, or null if there are no additional results.
     */
    nextMarker?: Marker;
  }
  export interface ListCertificatesRequest {
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListCertificatesResponse {
    /**
     * The descriptions of the certificates.
     */
    certificates?: Certificates;
    /**
     * The marker for the next set of results, or null if there are no additional results.
     */
    nextMarker?: Marker;
  }
  export interface ListIndicesRequest {
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: QueryMaxResults;
  }
  export interface ListIndicesResponse {
    /**
     * The index names.
     */
    indexNames?: IndexNamesList;
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListJobExecutionsForJobRequest {
    /**
     * The unique identifier you assigned to this job when it was created.
     */
    jobId: JobId;
    /**
     * The status of the job.
     */
    status?: JobExecutionStatus;
    /**
     * The maximum number of results to be returned per request.
     */
    maxResults?: LaserMaxResults;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListJobExecutionsForJobResponse {
    /**
     * A list of job execution summaries.
     */
    executionSummaries?: JobExecutionSummaryForJobList;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListJobExecutionsForThingRequest {
    /**
     * The thing name.
     */
    thingName: ThingName;
    /**
     * An optional filter that lets you search for jobs that have the specified status.
     */
    status?: JobExecutionStatus;
    /**
     * The maximum number of results to be returned per request.
     */
    maxResults?: LaserMaxResults;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListJobExecutionsForThingResponse {
    /**
     * A list of job execution summaries.
     */
    executionSummaries?: JobExecutionSummaryForThingList;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListJobsRequest {
    /**
     * An optional filter that lets you search for jobs that have the specified status.
     */
    status?: JobStatus;
    /**
     * Specifies whether the job will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the job (SNAPSHOT). If continuous, the job may also be run on a thing when a change is detected in a target. For example, a job will run on a thing when the thing is added to a target group, even after the job was completed by all things originally in the group. 
     */
    targetSelection?: TargetSelection;
    /**
     * The maximum number of results to return per request.
     */
    maxResults?: LaserMaxResults;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: NextToken;
    /**
     * A filter that limits the returned jobs to those for the specified group.
     */
    thingGroupName?: ThingGroupName;
    /**
     * A filter that limits the returned jobs to those for the specified group.
     */
    thingGroupId?: ThingGroupId;
  }
  export interface ListJobsResponse {
    /**
     * A list of jobs.
     */
    jobs?: JobSummaryList;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListOTAUpdatesRequest {
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: MaxResults;
    /**
     * A token used to retreive the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The OTA update job status.
     */
    otaUpdateStatus?: OTAUpdateStatus;
  }
  export interface ListOTAUpdatesResponse {
    /**
     * A list of OTA update jobs.
     */
    otaUpdates?: OTAUpdatesSummary;
    /**
     * A token to use to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListOutgoingCertificatesRequest {
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * Specifies the order for results. If True, the results are returned in ascending order, based on the creation date.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListOutgoingCertificatesResponse {
    /**
     * The certificates that are being transferred but not yet accepted.
     */
    outgoingCertificates?: OutgoingCertificates;
    /**
     * The marker for the next set of results.
     */
    nextMarker?: Marker;
  }
  export interface ListPoliciesRequest {
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * Specifies the order for results. If true, the results are returned in ascending creation order.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListPoliciesResponse {
    /**
     * The descriptions of the policies.
     */
    policies?: Policies;
    /**
     * The marker for the next set of results, or null if there are no additional results.
     */
    nextMarker?: Marker;
  }
  export interface ListPolicyPrincipalsRequest {
    /**
     * The policy name.
     */
    policyName: PolicyName;
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * Specifies the order for results. If true, the results are returned in ascending creation order.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListPolicyPrincipalsResponse {
    /**
     * The descriptions of the principals.
     */
    principals?: Principals;
    /**
     * The marker for the next set of results, or null if there are no additional results.
     */
    nextMarker?: Marker;
  }
  export interface ListPolicyVersionsRequest {
    /**
     * The policy name.
     */
    policyName: PolicyName;
  }
  export interface ListPolicyVersionsResponse {
    /**
     * The policy versions.
     */
    policyVersions?: PolicyVersions;
  }
  export interface ListPrincipalPoliciesRequest {
    /**
     * The principal.
     */
    principal: Principal;
    /**
     * The marker for the next set of results.
     */
    marker?: Marker;
    /**
     * The result page size.
     */
    pageSize?: PageSize;
    /**
     * Specifies the order for results. If true, results are returned in ascending creation order.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListPrincipalPoliciesResponse {
    /**
     * The policies.
     */
    policies?: Policies;
    /**
     * The marker for the next set of results, or null if there are no additional results.
     */
    nextMarker?: Marker;
  }
  export interface ListPrincipalThingsRequest {
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in this operation.
     */
    maxResults?: RegistryMaxResults;
    /**
     * The principal.
     */
    principal: Principal;
  }
  export interface ListPrincipalThingsResponse {
    /**
     * The things.
     */
    things?: ThingNameList;
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListRoleAliasesRequest {
    /**
     * The maximum number of results to return at one time.
     */
    pageSize?: PageSize;
    /**
     * A marker used to get the next set of results.
     */
    marker?: Marker;
    /**
     * Return the list of role aliases in ascending alphabetical order.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListRoleAliasesResponse {
    /**
     * The role aliases.
     */
    roleAliases?: RoleAliases;
    /**
     * A marker used to get the next set of results.
     */
    nextMarker?: Marker;
  }
  export interface ListStreamsRequest {
    /**
     * The maximum number of results to return at a time.
     */
    maxResults?: MaxResults;
    /**
     * A token used to get the next set of results.
     */
    nextToken?: NextToken;
    /**
     * Set to true to return the list of streams in ascending order.
     */
    ascendingOrder?: AscendingOrder;
  }
  export interface ListStreamsResponse {
    /**
     * A list of streams.
     */
    streams?: StreamsSummary;
    /**
     * A token used to get the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListTargetsForPolicyRequest {
    /**
     * The policy name.
     */
    policyName: PolicyName;
    /**
     * A marker used to get the next set of results.
     */
    marker?: Marker;
    /**
     * The maximum number of results to return at one time.
     */
    pageSize?: PageSize;
  }
  export interface ListTargetsForPolicyResponse {
    /**
     * The policy targets.
     */
    targets?: PolicyTargets;
    /**
     * A marker used to get the next set of results.
     */
    nextMarker?: Marker;
  }
  export interface ListThingGroupsForThingRequest {
    /**
     * The thing name.
     */
    thingName: ThingName;
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: RegistryMaxResults;
  }
  export interface ListThingGroupsForThingResponse {
    /**
     * The thing groups.
     */
    thingGroups?: ThingGroupNameAndArnList;
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListThingGroupsRequest {
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: RegistryMaxResults;
    /**
     * A filter that limits the results to those with the specified parent group.
     */
    parentGroup?: ThingGroupName;
    /**
     * A filter that limits the results to those with the specified name prefix.
     */
    namePrefixFilter?: ThingGroupName;
    /**
     * If true, return child groups as well.
     */
    recursive?: RecursiveWithoutDefault;
  }
  export interface ListThingGroupsResponse {
    /**
     * The thing groups.
     */
    thingGroups?: ThingGroupNameAndArnList;
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListThingPrincipalsRequest {
    /**
     * The name of the thing.
     */
    thingName: ThingName;
  }
  export interface ListThingPrincipalsResponse {
    /**
     * The principals associated with the thing.
     */
    principals?: Principals;
  }
  export interface ListThingRegistrationTaskReportsRequest {
    /**
     * The id of the task.
     */
    taskId: TaskId;
    /**
     * The type of task report.
     */
    reportType: ReportType;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return per request.
     */
    maxResults?: RegistryMaxResults;
  }
  export interface ListThingRegistrationTaskReportsResponse {
    /**
     * Links to the task resources.
     */
    resourceLinks?: S3FileUrlList;
    /**
     * The type of task report.
     */
    reportType?: ReportType;
    /**
     * The token to retrieve the next set of results.
     */
    nextToken?: NextToken;
  }
  export interface ListThingRegistrationTasksRequest {
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: RegistryMaxResults;
    /**
     * The status of the bulk thing provisioning task.
     */
    status?: Status;
  }
  export interface ListThingRegistrationTasksResponse {
    /**
     * A list of bulk thing provisioning task IDs.
     */
    taskIds?: TaskIdList;
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListThingTypesRequest {
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in this operation.
     */
    maxResults?: RegistryMaxResults;
    /**
     * The name of the thing type.
     */
    thingTypeName?: ThingTypeName;
  }
  export interface ListThingTypesResponse {
    /**
     * The thing types.
     */
    thingTypes?: ThingTypeList;
    /**
     * The token for the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListThingsInThingGroupRequest {
    /**
     * The thing group name.
     */
    thingGroupName: ThingGroupName;
    /**
     * When true, list things in this thing group and in all child groups as well.
     */
    recursive?: Recursive;
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: RegistryMaxResults;
  }
  export interface ListThingsInThingGroupResponse {
    /**
     * The things in the specified thing group.
     */
    things?: ThingNameList;
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListThingsRequest {
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return in this operation.
     */
    maxResults?: RegistryMaxResults;
    /**
     * The attribute name used to search for things.
     */
    attributeName?: AttributeName;
    /**
     * The attribute value used to search for things.
     */
    attributeValue?: AttributeValue;
    /**
     * The name of the thing type used to search for things.
     */
    thingTypeName?: ThingTypeName;
  }
  export interface ListThingsResponse {
    /**
     * The things.
     */
    things?: ThingAttributeList;
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export interface ListTopicRulesRequest {
    /**
     * The topic.
     */
    topic?: Topic;
    /**
     * The maximum number of results to return.
     */
    maxResults?: GEMaxResults;
    /**
     * A token used to retrieve the next value.
     */
    nextToken?: NextToken;
    /**
     * Specifies whether the rule is disabled.
     */
    ruleDisabled?: IsDisabled;
  }
  export interface ListTopicRulesResponse {
    /**
     * The rules.
     */
    rules?: TopicRuleList;
    /**
     * A token used to retrieve the next value.
     */
    nextToken?: NextToken;
  }
  export interface ListV2LoggingLevelsRequest {
    /**
     * The type of resource for which you are configuring logging. Must be THING_Group.
     */
    targetType?: LogTargetType;
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: SkyfallMaxResults;
  }
  export interface ListV2LoggingLevelsResponse {
    /**
     * The logging configuration for a target.
     */
    logTargetConfigurations?: LogTargetConfigurations;
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
  }
  export type LogLevel = "DEBUG"|"INFO"|"ERROR"|"WARN"|"DISABLED"|string;
  export interface LogTarget {
    /**
     * The target type.
     */
    targetType: LogTargetType;
    /**
     * The target name.
     */
    targetName?: LogTargetName;
  }
  export interface LogTargetConfiguration {
    /**
     * A log target
     */
    logTarget?: LogTarget;
    /**
     * The logging level.
     */
    logLevel?: LogLevel;
  }
  export type LogTargetConfigurations = LogTargetConfiguration[];
  export type LogTargetName = string;
  export type LogTargetType = "DEFAULT"|"THING_GROUP"|string;
  export interface LoggingOptionsPayload {
    /**
     * The ARN of the IAM role that grants access.
     */
    roleArn: AwsArn;
    /**
     * The log level.
     */
    logLevel?: LogLevel;
  }
  export type Marker = string;
  export type MaxJobExecutionsPerMin = number;
  export type MaxResults = number;
  export type Message = string;
  export type MessageFormat = "RAW"|"JSON"|string;
  export type MetricName = string;
  export type MetricNamespace = string;
  export type MetricTimestamp = string;
  export type MetricUnit = string;
  export type MetricValue = string;
  export type MissingContextValue = string;
  export type MissingContextValues = MissingContextValue[];
  export type NextToken = string;
  export type OTAUpdateArn = string;
  export type OTAUpdateDescription = string;
  export type OTAUpdateErrorMessage = string;
  export interface OTAUpdateFile {
    /**
     * The name of the file.
     */
    fileName?: FileName;
    /**
     * The file version.
     */
    fileVersion?: OTAUpdateFileVersion;
    /**
     * The source of the file.
     */
    fileSource?: Stream;
    /**
     * The code signing method of the file.
     */
    codeSigning?: CodeSigning;
    /**
     * A list of name/attribute pairs.
     */
    attributes?: AttributesMap;
  }
  export type OTAUpdateFileVersion = string;
  export type OTAUpdateFiles = OTAUpdateFile[];
  export type OTAUpdateId = string;
  export interface OTAUpdateInfo {
    /**
     * The OTA update ID.
     */
    otaUpdateId?: OTAUpdateId;
    /**
     * The OTA update ARN.
     */
    otaUpdateArn?: OTAUpdateArn;
    /**
     * The date when the OTA update was created.
     */
    creationDate?: DateType;
    /**
     * The date when the OTA update was last updated.
     */
    lastModifiedDate?: DateType;
    /**
     * A description of the OTA update.
     */
    description?: OTAUpdateDescription;
    /**
     * The targets of the OTA update.
     */
    targets?: Targets;
    /**
     * Specifies whether the OTA update will continue to run (CONTINUOUS), or will be complete after all those things specified as targets have completed the OTA update (SNAPSHOT). If continuous, the OTA update may also be run on a thing when a change is detected in a target. For example, an OTA update will run on a thing when the thing is added to a target group, even after the OTA update was completed by all things originally in the group. 
     */
    targetSelection?: TargetSelection;
    /**
     * A list of files associated with the OTA update.
     */
    otaUpdateFiles?: OTAUpdateFiles;
    /**
     * The status of the OTA update.
     */
    otaUpdateStatus?: OTAUpdateStatus;
    /**
     * The AWS IoT job ID associated with the OTA update.
     */
    awsIotJobId?: AwsIotJobId;
    /**
     * The AWS IoT job ARN associated with the OTA update.
     */
    awsIotJobArn?: AwsIotJobArn;
    /**
     * Error information associated with the OTA update.
     */
    errorInfo?: ErrorInfo;
    /**
     * A collection of name/value pairs
     */
    additionalParameters?: AdditionalParameterMap;
  }
  export type OTAUpdateStatus = "CREATE_PENDING"|"CREATE_IN_PROGRESS"|"CREATE_COMPLETE"|"CREATE_FAILED"|string;
  export interface OTAUpdateSummary {
    /**
     * The OTA update ID.
     */
    otaUpdateId?: OTAUpdateId;
    /**
     * The OTA update ARN.
     */
    otaUpdateArn?: OTAUpdateArn;
    /**
     * The date when the OTA update was created.
     */
    creationDate?: DateType;
  }
  export type OTAUpdatesSummary = OTAUpdateSummary[];
  export type OptionalVersion = number;
  export interface OutgoingCertificate {
    /**
     * The certificate ARN.
     */
    certificateArn?: CertificateArn;
    /**
     * The certificate ID.
     */
    certificateId?: CertificateId;
    /**
     * The AWS account to which the transfer was made.
     */
    transferredTo?: AwsAccountId;
    /**
     * The date the transfer was initiated.
     */
    transferDate?: DateType;
    /**
     * The transfer message.
     */
    transferMessage?: Message;
    /**
     * The certificate creation date.
     */
    creationDate?: DateType;
  }
  export type OutgoingCertificates = OutgoingCertificate[];
  export type PageSize = number;
  export type Parameter = string;
  export type ParameterKey = string;
  export type ParameterValue = string;
  export type Parameters = {[key: string]: Value};
  export type PartitionKey = string;
  export type PayloadField = string;
  export type Percentage = number;
  export type Policies = Policy[];
  export interface Policy {
    /**
     * The policy name.
     */
    policyName?: PolicyName;
    /**
     * The policy ARN.
     */
    policyArn?: PolicyArn;
  }
  export type PolicyArn = string;
  export type PolicyDocument = string;
  export type PolicyDocuments = PolicyDocument[];
  export type PolicyName = string;
  export type PolicyNames = PolicyName[];
  export type PolicyTarget = string;
  export type PolicyTargets = PolicyTarget[];
  export interface PolicyVersion {
    /**
     * The policy version ID.
     */
    versionId?: PolicyVersionId;
    /**
     * Specifies whether the policy version is the default.
     */
    isDefaultVersion?: IsDefaultVersion;
    /**
     * The date and time the policy was created.
     */
    createDate?: DateType;
  }
  export type PolicyVersionId = string;
  export type PolicyVersions = PolicyVersion[];
  export interface PresignedUrlConfig {
    /**
     * The ARN of an IAM role that grants grants permission to download files from the S3 bucket where the job data/updates are stored. The role must also grant permission for IoT to download the files.
     */
    roleArn?: RoleArn;
    /**
     * How long (in seconds) pre-signed URLs are valid. Valid values are 60 - 3600, the default value is 3600 seconds. Pre-signed URLs are generated when Jobs receives an MQTT request for the job document.
     */
    expiresInSec?: ExpiresInSec;
  }
  export type Principal = string;
  export type PrincipalArn = string;
  export type PrincipalId = string;
  export type Principals = PrincipalArn[];
  export type PrivateKey = string;
  export type ProcessingTargetName = string;
  export type ProcessingTargetNameList = ProcessingTargetName[];
  export type PublicKey = string;
  export type PublicKeyMap = {[key: string]: KeyValue};
  export interface PutItemInput {
    /**
     * The table where the message data will be written
     */
    tableName: TableName;
  }
  export type QueryMaxResults = number;
  export type QueryString = string;
  export type QueryVersion = string;
  export type QueueUrl = string;
  export type QueuedThings = number;
  export type RangeKeyField = string;
  export type RangeKeyValue = string;
  export type Recursive = boolean;
  export type RecursiveWithoutDefault = boolean;
  export interface RegisterCACertificateRequest {
    /**
     * The CA certificate.
     */
    caCertificate: CertificatePem;
    /**
     * The private key verification certificate.
     */
    verificationCertificate: CertificatePem;
    /**
     * A boolean value that specifies if the CA certificate is set to active.
     */
    setAsActive?: SetAsActive;
    /**
     * Allows this CA certificate to be used for auto registration of device certificates.
     */
    allowAutoRegistration?: AllowAutoRegistration;
    /**
     * Information about the registration configuration.
     */
    registrationConfig?: RegistrationConfig;
  }
  export interface RegisterCACertificateResponse {
    /**
     * The CA certificate ARN.
     */
    certificateArn?: CertificateArn;
    /**
     * The CA certificate identifier.
     */
    certificateId?: CertificateId;
  }
  export interface RegisterCertificateRequest {
    /**
     * The certificate data, in PEM format.
     */
    certificatePem: CertificatePem;
    /**
     * The CA certificate used to sign the device certificate being registered.
     */
    caCertificatePem?: CertificatePem;
    /**
     * A boolean value that specifies if the CA certificate is set to active.
     */
    setAsActive?: SetAsActiveFlag;
    /**
     * The status of the register certificate request.
     */
    status?: CertificateStatus;
  }
  export interface RegisterCertificateResponse {
    /**
     * The certificate ARN.
     */
    certificateArn?: CertificateArn;
    /**
     * The certificate identifier.
     */
    certificateId?: CertificateId;
  }
  export interface RegisterThingRequest {
    /**
     * The provisioning template. 
     */
    templateBody: TemplateBody;
    /**
     * The parameters for provisioning a thing.
     */
    parameters?: Parameters;
  }
  export interface RegisterThingResponse {
    certificatePem?: CertificatePem;
    /**
     * ARNs for the generated resources.
     */
    resourceArns?: ResourceArns;
  }
  export type RegistrationCode = string;
  export interface RegistrationConfig {
    /**
     * The template body.
     */
    templateBody?: TemplateBody;
    /**
     * The ARN of the role.
     */
    roleArn?: RoleArn;
  }
  export type RegistryMaxResults = number;
  export type RegistryS3BucketName = string;
  export type RegistryS3KeyName = string;
  export interface RejectCertificateTransferRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
    /**
     * The reason the certificate transfer was rejected.
     */
    rejectReason?: Message;
  }
  export type RejectedThings = number;
  export type RemoveAutoRegistration = boolean;
  export interface RemoveThingFromThingGroupRequest {
    /**
     * The group name.
     */
    thingGroupName?: ThingGroupName;
    /**
     * The group ARN.
     */
    thingGroupArn?: ThingGroupArn;
    /**
     * The name of the thing to remove from the group.
     */
    thingName?: ThingName;
    /**
     * The ARN of the thing to remove from the group.
     */
    thingArn?: ThingArn;
  }
  export interface RemoveThingFromThingGroupResponse {
  }
  export type RemoveThingType = boolean;
  export type RemovedThings = number;
  export interface ReplaceTopicRuleRequest {
    /**
     * The name of the rule.
     */
    ruleName: RuleName;
    /**
     * The rule payload.
     */
    topicRulePayload: TopicRulePayload;
  }
  export type ReportType = "ERRORS"|"RESULTS"|string;
  export interface RepublishAction {
    /**
     * The ARN of the IAM role that grants access.
     */
    roleArn: AwsArn;
    /**
     * The name of the MQTT topic.
     */
    topic: TopicPattern;
  }
  export type Resource = string;
  export type ResourceArn = string;
  export type ResourceArns = {[key: string]: ResourceArn};
  export type ResourceLogicalId = string;
  export type Resources = Resource[];
  export type RoleAlias = string;
  export type RoleAliasArn = string;
  export interface RoleAliasDescription {
    /**
     * The role alias.
     */
    roleAlias?: RoleAlias;
    /**
     * The role ARN.
     */
    roleArn?: RoleArn;
    /**
     * The role alias owner.
     */
    owner?: AwsAccountId;
    /**
     * The number of seconds for which the credential is valid.
     */
    credentialDurationSeconds?: CredentialDurationSeconds;
    /**
     * The UNIX timestamp of when the role alias was created.
     */
    creationDate?: DateType;
    /**
     * The UNIX timestamp of when the role alias was last modified.
     */
    lastModifiedDate?: DateType;
  }
  export type RoleAliases = RoleAlias[];
  export type RoleArn = string;
  export type RuleArn = string;
  export type RuleName = string;
  export interface S3Action {
    /**
     * The ARN of the IAM role that grants access.
     */
    roleArn: AwsArn;
    /**
     * The Amazon S3 bucket.
     */
    bucketName: BucketName;
    /**
     * The object key.
     */
    key: Key;
    /**
     * The Amazon S3 canned ACL that controls access to the object identified by the object key. For more information, see S3 canned ACLs.
     */
    cannedAcl?: CannedAccessControlList;
  }
  export type S3Bucket = string;
  export type S3FileUrl = string;
  export type S3FileUrlList = S3FileUrl[];
  export type S3Key = string;
  export interface S3Location {
    /**
     * The S3 bucket that contains the file to stream.
     */
    bucket: S3Bucket;
    /**
     * The name of the file within the S3 bucket to stream.
     */
    key: S3Key;
    /**
     * The file version.
     */
    version?: S3Version;
  }
  export type S3Version = string;
  export type SQL = string;
  export interface SalesforceAction {
    /**
     * The token used to authenticate access to the Salesforce IoT Cloud Input Stream. The token is available from the Salesforce IoT Cloud platform after creation of the Input Stream.
     */
    token: SalesforceToken;
    /**
     * The URL exposed by the Salesforce IoT Cloud Input Stream. The URL is available from the Salesforce IoT Cloud platform after creation of the Input Stream.
     */
    url: SalesforceEndpoint;
  }
  export type SalesforceEndpoint = string;
  export type SalesforceToken = string;
  export interface SearchIndexRequest {
    /**
     * The search index name.
     */
    indexName?: IndexName;
    /**
     * The search query string.
     */
    queryString: QueryString;
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: QueryMaxResults;
    /**
     * The query version.
     */
    queryVersion?: QueryVersion;
  }
  export interface SearchIndexResponse {
    /**
     * The token used to get the next set of results, or null if there are no additional results.
     */
    nextToken?: NextToken;
    /**
     * The things that match the search query.
     */
    things?: ThingDocumentList;
  }
  export type SearchableAttributes = AttributeName[];
  export type Seconds = number;
  export type SetAsActive = boolean;
  export type SetAsActiveFlag = boolean;
  export type SetAsDefault = boolean;
  export interface SetDefaultAuthorizerRequest {
    /**
     * The authorizer name.
     */
    authorizerName: AuthorizerName;
  }
  export interface SetDefaultAuthorizerResponse {
    /**
     * The authorizer name.
     */
    authorizerName?: AuthorizerName;
    /**
     * The authorizer ARN.
     */
    authorizerArn?: AuthorizerArn;
  }
  export interface SetDefaultPolicyVersionRequest {
    /**
     * The policy name.
     */
    policyName: PolicyName;
    /**
     * The policy version ID.
     */
    policyVersionId: PolicyVersionId;
  }
  export interface SetLoggingOptionsRequest {
    /**
     * The logging options payload.
     */
    loggingOptionsPayload: LoggingOptionsPayload;
  }
  export interface SetV2LoggingLevelRequest {
    /**
     * The log target.
     */
    logTarget: LogTarget;
    /**
     * The log level.
     */
    logLevel: LogLevel;
  }
  export interface SetV2LoggingOptionsRequest {
    /**
     * The role ARN that allows IoT to write to Cloudwatch logs.
     */
    roleArn?: AwsArn;
    /**
     * The default logging level.
     */
    defaultLogLevel?: LogLevel;
    /**
     * Set to true to disable all logs, otherwise set to false.
     */
    disableAllLogs?: DisableAllLogs;
  }
  export type Signature = Buffer|Uint8Array|Blob|string;
  export type SignatureAlgorithm = string;
  export type SigningJobId = string;
  export type SkyfallMaxResults = number;
  export interface SnsAction {
    /**
     * The ARN of the SNS topic.
     */
    targetArn: AwsArn;
    /**
     * The ARN of the IAM role that grants access.
     */
    roleArn: AwsArn;
    /**
     * The message format of the message to publish. Optional. Accepted values are "JSON" and "RAW". The default value of the attribute is "RAW". SNS uses this setting to determine if the payload should be parsed and relevant platform-specific bits of the payload should be extracted. To read more about SNS message formats, see http://docs.aws.amazon.com/sns/latest/dg/json-formats.html refer to their official documentation.
     */
    messageFormat?: MessageFormat;
  }
  export interface SqsAction {
    /**
     * The ARN of the IAM role that grants access.
     */
    roleArn: AwsArn;
    /**
     * The URL of the Amazon SQS queue.
     */
    queueUrl: QueueUrl;
    /**
     * Specifies whether to use Base64 encoding.
     */
    useBase64?: UseBase64;
  }
  export interface StartThingRegistrationTaskRequest {
    /**
     * The provisioning template.
     */
    templateBody: TemplateBody;
    /**
     * The S3 bucket that contains the input file.
     */
    inputFileBucket: RegistryS3BucketName;
    /**
     * The name of input file within the S3 bucket. This file contains a newline delimited JSON file. Each line contains the parameter values to provision one device (thing).
     */
    inputFileKey: RegistryS3KeyName;
    /**
     * The IAM role ARN that grants permission the input file.
     */
    roleArn: RoleArn;
  }
  export interface StartThingRegistrationTaskResponse {
    /**
     * The bulk thing provisioning task ID.
     */
    taskId?: TaskId;
  }
  export type StateReason = string;
  export type StateValue = string;
  export type Status = "InProgress"|"Completed"|"Failed"|"Cancelled"|"Cancelling"|string;
  export interface StopThingRegistrationTaskRequest {
    /**
     * The bulk thing provisioning task ID.
     */
    taskId: TaskId;
  }
  export interface StopThingRegistrationTaskResponse {
  }
  export interface Stream {
    /**
     * The stream ID.
     */
    streamId?: StreamId;
    /**
     * The ID of a file associated with a stream.
     */
    fileId?: FileId;
  }
  export type StreamArn = string;
  export type StreamDescription = string;
  export interface StreamFile {
    /**
     * The file ID.
     */
    fileId?: FileId;
    /**
     * The location of the file in S3.
     */
    s3Location?: S3Location;
  }
  export type StreamFiles = StreamFile[];
  export type StreamId = string;
  export interface StreamInfo {
    /**
     * The stream ID.
     */
    streamId?: StreamId;
    /**
     * The stream ARN.
     */
    streamArn?: StreamArn;
    /**
     * The stream version.
     */
    streamVersion?: StreamVersion;
    /**
     * The description of the stream.
     */
    description?: StreamDescription;
    /**
     * The files to stream.
     */
    files?: StreamFiles;
    /**
     * The date when the stream was created.
     */
    createdAt?: DateType;
    /**
     * The date when the stream was last updated.
     */
    lastUpdatedAt?: DateType;
    /**
     * An IAM role AWS IoT assumes to access your S3 files.
     */
    roleArn?: RoleArn;
  }
  export type StreamName = string;
  export interface StreamSummary {
    /**
     * The stream ID.
     */
    streamId?: StreamId;
    /**
     * The stream ARN.
     */
    streamArn?: StreamArn;
    /**
     * The stream version.
     */
    streamVersion?: StreamVersion;
    /**
     * A description of the stream.
     */
    description?: StreamDescription;
  }
  export type StreamVersion = number;
  export type StreamsSummary = StreamSummary[];
  export type SucceededThings = number;
  export type TableName = string;
  export type Target = string;
  export type TargetArn = string;
  export type TargetSelection = "CONTINUOUS"|"SNAPSHOT"|string;
  export type Targets = Target[];
  export type TaskId = string;
  export type TaskIdList = TaskId[];
  export type TemplateBody = string;
  export interface TestAuthorizationRequest {
    /**
     * The principal.
     */
    principal?: Principal;
    /**
     * The Cognito identity pool ID.
     */
    cognitoIdentityPoolId?: CognitoIdentityPoolId;
    /**
     * A list of authorization info objects. Simulating authorization will create a response for each authInfo object in the list.
     */
    authInfos: AuthInfos;
    /**
     * The MQTT client ID.
     */
    clientId?: ClientId;
    /**
     * When testing custom authorization, the policies specified here are treated as if they are attached to the principal being authorized.
     */
    policyNamesToAdd?: PolicyNames;
    /**
     * When testing custom authorization, the policies specified here are treated as if they are not attached to the principal being authorized.
     */
    policyNamesToSkip?: PolicyNames;
  }
  export interface TestAuthorizationResponse {
    /**
     * The authentication results.
     */
    authResults?: AuthResults;
  }
  export interface TestInvokeAuthorizerRequest {
    /**
     * The custom authorizer name.
     */
    authorizerName: AuthorizerName;
    /**
     * The token returned by your custom authentication service.
     */
    token: Token;
    /**
     * The signature made with the token and your custom authentication service's private key.
     */
    tokenSignature: TokenSignature;
  }
  export interface TestInvokeAuthorizerResponse {
    /**
     * True if the token is authenticated, otherwise false.
     */
    isAuthenticated?: IsAuthenticated;
    /**
     * The principal ID.
     */
    principalId?: PrincipalId;
    /**
     * IAM policy documents.
     */
    policyDocuments?: PolicyDocuments;
    /**
     * The number of seconds after which the temporary credentials are refreshed.
     */
    refreshAfterInSeconds?: Seconds;
    /**
     * The number of seconds after which the connection is terminated.
     */
    disconnectAfterInSeconds?: Seconds;
  }
  export type ThingArn = string;
  export interface ThingAttribute {
    /**
     * The name of the thing.
     */
    thingName?: ThingName;
    /**
     * The name of the thing type, if the thing has been associated with a type.
     */
    thingTypeName?: ThingTypeName;
    /**
     * The thing ARN.
     */
    thingArn?: ThingArn;
    /**
     * A list of thing attributes which are name-value pairs.
     */
    attributes?: Attributes;
    /**
     * The version of the thing record in the registry.
     */
    version?: Version;
  }
  export type ThingAttributeList = ThingAttribute[];
  export interface ThingDocument {
    /**
     * The thing name.
     */
    thingName?: ThingName;
    /**
     * The thing ID.
     */
    thingId?: ThingId;
    /**
     * The thing type name.
     */
    thingTypeName?: ThingTypeName;
    /**
     * Thing group names.
     */
    thingGroupNames?: ThingGroupNameList;
    /**
     * The attributes.
     */
    attributes?: Attributes;
    /**
     * The thing shadow.
     */
    shadow?: JsonDocument;
  }
  export type ThingDocumentList = ThingDocument[];
  export type ThingGroupArn = string;
  export type ThingGroupDescription = string;
  export type ThingGroupId = string;
  export type ThingGroupList = ThingGroupName[];
  export interface ThingGroupMetadata {
    /**
     * The parent thing group name.
     */
    parentGroupName?: ThingGroupName;
    /**
     * The root parent thing group.
     */
    rootToParentThingGroups?: ThingGroupNameAndArnList;
    /**
     * The UNIX timestamp of when the thing group was created.
     */
    creationDate?: CreationDate;
  }
  export type ThingGroupName = string;
  export type ThingGroupNameAndArnList = GroupNameAndArn[];
  export type ThingGroupNameList = ThingGroupName[];
  export interface ThingGroupProperties {
    /**
     * The thing group description.
     */
    thingGroupDescription?: ThingGroupDescription;
    /**
     * The thing group attributes in JSON format.
     */
    attributePayload?: AttributePayload;
  }
  export type ThingId = string;
  export interface ThingIndexingConfiguration {
    /**
     * Thing indexing mode. Valid values are:    REGISTRY – Your thing index will contain only registry data.   REGISTRY_AND_SHADOW - Your thing index will contain registry and shadow data.   OFF - Thing indexing is disabled.  
     */
    thingIndexingMode?: ThingIndexingMode;
  }
  export type ThingIndexingMode = "OFF"|"REGISTRY"|"REGISTRY_AND_SHADOW"|string;
  export type ThingName = string;
  export type ThingNameList = ThingName[];
  export type ThingTypeArn = string;
  export interface ThingTypeDefinition {
    /**
     * The name of the thing type.
     */
    thingTypeName?: ThingTypeName;
    /**
     * The thing type ARN.
     */
    thingTypeArn?: ThingTypeArn;
    /**
     * The ThingTypeProperties for the thing type.
     */
    thingTypeProperties?: ThingTypeProperties;
    /**
     * The ThingTypeMetadata contains additional information about the thing type including: creation date and time, a value indicating whether the thing type is deprecated, and a date and time when it was deprecated.
     */
    thingTypeMetadata?: ThingTypeMetadata;
  }
  export type ThingTypeDescription = string;
  export type ThingTypeId = string;
  export type ThingTypeList = ThingTypeDefinition[];
  export interface ThingTypeMetadata {
    /**
     * Whether the thing type is deprecated. If true, no new things could be associated with this type.
     */
    deprecated?: Boolean;
    /**
     * The date and time when the thing type was deprecated.
     */
    deprecationDate?: DeprecationDate;
    /**
     * The date and time when the thing type was created.
     */
    creationDate?: CreationDate;
  }
  export type ThingTypeName = string;
  export interface ThingTypeProperties {
    /**
     * The description of the thing type.
     */
    thingTypeDescription?: ThingTypeDescription;
    /**
     * A list of searchable thing attribute names.
     */
    searchableAttributes?: SearchableAttributes;
  }
  export type Token = string;
  export type TokenKeyName = string;
  export type TokenSignature = string;
  export type Topic = string;
  export type TopicPattern = string;
  export interface TopicRule {
    /**
     * The name of the rule.
     */
    ruleName?: RuleName;
    /**
     * The SQL statement used to query the topic. When using a SQL query with multiple lines, be sure to escape the newline characters.
     */
    sql?: SQL;
    /**
     * The description of the rule.
     */
    description?: Description;
    /**
     * The date and time the rule was created.
     */
    createdAt?: CreatedAtDate;
    /**
     * The actions associated with the rule.
     */
    actions?: ActionList;
    /**
     * Specifies whether the rule is disabled.
     */
    ruleDisabled?: IsDisabled;
    /**
     * The version of the SQL rules engine to use when evaluating the rule.
     */
    awsIotSqlVersion?: AwsIotSqlVersion;
    /**
     * The action to perform when an error occurs.
     */
    errorAction?: Action;
  }
  export type TopicRuleList = TopicRuleListItem[];
  export interface TopicRuleListItem {
    /**
     * The rule ARN.
     */
    ruleArn?: RuleArn;
    /**
     * The name of the rule.
     */
    ruleName?: RuleName;
    /**
     * The pattern for the topic names that apply.
     */
    topicPattern?: TopicPattern;
    /**
     * The date and time the rule was created.
     */
    createdAt?: CreatedAtDate;
    /**
     * Specifies whether the rule is disabled.
     */
    ruleDisabled?: IsDisabled;
  }
  export interface TopicRulePayload {
    /**
     * The SQL statement used to query the topic. For more information, see AWS IoT SQL Reference in the AWS IoT Developer Guide.
     */
    sql: SQL;
    /**
     * The description of the rule.
     */
    description?: Description;
    /**
     * The actions associated with the rule.
     */
    actions: ActionList;
    /**
     * Specifies whether the rule is disabled.
     */
    ruleDisabled?: IsDisabled;
    /**
     * The version of the SQL rules engine to use when evaluating the rule.
     */
    awsIotSqlVersion?: AwsIotSqlVersion;
    /**
     * The action to take when an error occurs.
     */
    errorAction?: Action;
  }
  export interface TransferCertificateRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
    /**
     * The AWS account.
     */
    targetAwsAccount: AwsAccountId;
    /**
     * The transfer message.
     */
    transferMessage?: Message;
  }
  export interface TransferCertificateResponse {
    /**
     * The ARN of the certificate.
     */
    transferredCertificateArn?: CertificateArn;
  }
  export interface TransferData {
    /**
     * The transfer message.
     */
    transferMessage?: Message;
    /**
     * The reason why the transfer was rejected.
     */
    rejectReason?: Message;
    /**
     * The date the transfer took place.
     */
    transferDate?: DateType;
    /**
     * The date the transfer was accepted.
     */
    acceptDate?: DateType;
    /**
     * The date the transfer was rejected.
     */
    rejectDate?: DateType;
  }
  export type UndoDeprecate = boolean;
  export interface UpdateAuthorizerRequest {
    /**
     * The authorizer name.
     */
    authorizerName: AuthorizerName;
    /**
     * The ARN of the authorizer's Lambda function.
     */
    authorizerFunctionArn?: AuthorizerFunctionArn;
    /**
     * The key used to extract the token from the HTTP headers. 
     */
    tokenKeyName?: TokenKeyName;
    /**
     * The public keys used to verify the token signature.
     */
    tokenSigningPublicKeys?: PublicKeyMap;
    /**
     * The status of the update authorizer request.
     */
    status?: AuthorizerStatus;
  }
  export interface UpdateAuthorizerResponse {
    /**
     * The authorizer name.
     */
    authorizerName?: AuthorizerName;
    /**
     * The authorizer ARN.
     */
    authorizerArn?: AuthorizerArn;
  }
  export interface UpdateCACertificateRequest {
    /**
     * The CA certificate identifier.
     */
    certificateId: CertificateId;
    /**
     * The updated status of the CA certificate.  Note: The status value REGISTER_INACTIVE is deprecated and should not be used.
     */
    newStatus?: CACertificateStatus;
    /**
     * The new value for the auto registration status. Valid values are: "ENABLE" or "DISABLE".
     */
    newAutoRegistrationStatus?: AutoRegistrationStatus;
    /**
     * Information about the registration configuration.
     */
    registrationConfig?: RegistrationConfig;
    /**
     * If true, remove auto registration.
     */
    removeAutoRegistration?: RemoveAutoRegistration;
  }
  export interface UpdateCertificateRequest {
    /**
     * The ID of the certificate.
     */
    certificateId: CertificateId;
    /**
     * The new status.  Note: Setting the status to PENDING_TRANSFER will result in an exception being thrown. PENDING_TRANSFER is a status used internally by AWS IoT. It is not intended for developer use.  Note: The status value REGISTER_INACTIVE is deprecated and should not be used.
     */
    newStatus: CertificateStatus;
  }
  export interface UpdateEventConfigurationsRequest {
    /**
     * The new event configuration values.
     */
    eventConfigurations?: EventConfigurations;
  }
  export interface UpdateEventConfigurationsResponse {
  }
  export interface UpdateIndexingConfigurationRequest {
    /**
     * Thing indexing configuration.
     */
    thingIndexingConfiguration?: ThingIndexingConfiguration;
  }
  export interface UpdateIndexingConfigurationResponse {
  }
  export interface UpdateRoleAliasRequest {
    /**
     * The role alias to update.
     */
    roleAlias: RoleAlias;
    /**
     * The role ARN.
     */
    roleArn?: RoleArn;
    /**
     * The number of seconds the credential will be valid.
     */
    credentialDurationSeconds?: CredentialDurationSeconds;
  }
  export interface UpdateRoleAliasResponse {
    /**
     * The role alias.
     */
    roleAlias?: RoleAlias;
    /**
     * The role alias ARN.
     */
    roleAliasArn?: RoleAliasArn;
  }
  export interface UpdateStreamRequest {
    /**
     * The stream ID.
     */
    streamId: StreamId;
    /**
     * The description of the stream.
     */
    description?: StreamDescription;
    /**
     * The files associated with the stream.
     */
    files?: StreamFiles;
    /**
     * An IAM role that allows the IoT service principal assumes to access your S3 files.
     */
    roleArn?: RoleArn;
  }
  export interface UpdateStreamResponse {
    /**
     * The stream ID.
     */
    streamId?: StreamId;
    /**
     * The stream ARN.
     */
    streamArn?: StreamArn;
    /**
     * A description of the stream.
     */
    description?: StreamDescription;
    /**
     * The stream version.
     */
    streamVersion?: StreamVersion;
  }
  export interface UpdateThingGroupRequest {
    /**
     * The thing group to update.
     */
    thingGroupName: ThingGroupName;
    /**
     * The thing group properties.
     */
    thingGroupProperties: ThingGroupProperties;
    /**
     * The expected version of the thing group. If this does not match the version of the thing group being updated, the update will fail.
     */
    expectedVersion?: OptionalVersion;
  }
  export interface UpdateThingGroupResponse {
    /**
     * The version of the updated thing group.
     */
    version?: Version;
  }
  export interface UpdateThingGroupsForThingRequest {
    /**
     * The thing whose group memberships will be updated.
     */
    thingName?: ThingName;
    /**
     * The groups to which the thing will be added.
     */
    thingGroupsToAdd?: ThingGroupList;
    /**
     * The groups from which the thing will be removed.
     */
    thingGroupsToRemove?: ThingGroupList;
  }
  export interface UpdateThingGroupsForThingResponse {
  }
  export interface UpdateThingRequest {
    /**
     * The name of the thing to update.
     */
    thingName: ThingName;
    /**
     * The name of the thing type.
     */
    thingTypeName?: ThingTypeName;
    /**
     * A list of thing attributes, a JSON string containing name-value pairs. For example:  {\"attributes\":{\"name1\":\"value2\"}}  This data is used to add new attributes or update existing attributes.
     */
    attributePayload?: AttributePayload;
    /**
     * The expected version of the thing record in the registry. If the version of the record in the registry does not match the expected version specified in the request, the UpdateThing request is rejected with a VersionConflictException.
     */
    expectedVersion?: OptionalVersion;
    /**
     * Remove a thing type association. If true, the association is removed.
     */
    removeThingType?: RemoveThingType;
  }
  export interface UpdateThingResponse {
  }
  export type UseBase64 = boolean;
  export type Value = string;
  export type Version = number;
  export type errorMessage = string;
  export type resourceArn = string;
  export type resourceId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2015-05-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Iot client.
   */
  export import Types = Iot;
}
export = Iot;
