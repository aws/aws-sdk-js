import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class KMS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: KMS.Types.ClientConfiguration)
  config: Config & KMS.Types.ClientConfiguration;
  /**
   * Cancels the deletion of a customer master key (CMK). When this operation is successful, the CMK is set to the Disabled state. To enable a CMK, use EnableKey. You cannot perform this operation on a CMK in a different AWS account. For more information about scheduling and canceling deletion of a CMK, see Deleting Customer Master Keys in the AWS Key Management Service Developer Guide. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  cancelKeyDeletion(params: KMS.Types.CancelKeyDeletionRequest, callback?: (err: AWSError, data: KMS.Types.CancelKeyDeletionResponse) => void): Request<KMS.Types.CancelKeyDeletionResponse, AWSError>;
  /**
   * Cancels the deletion of a customer master key (CMK). When this operation is successful, the CMK is set to the Disabled state. To enable a CMK, use EnableKey. You cannot perform this operation on a CMK in a different AWS account. For more information about scheduling and canceling deletion of a CMK, see Deleting Customer Master Keys in the AWS Key Management Service Developer Guide. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  cancelKeyDeletion(callback?: (err: AWSError, data: KMS.Types.CancelKeyDeletionResponse) => void): Request<KMS.Types.CancelKeyDeletionResponse, AWSError>;
  /**
   * Connects or reconnects a custom key store to its associated AWS CloudHSM cluster. The custom key store must be connected before you can create customer master keys (CMKs) in the key store or use the CMKs it contains. You can disconnect and reconnect a custom key store at any time. To connect a custom key store, its associated AWS CloudHSM cluster must have at least one active HSM. To get the number of active HSMs in a cluster, use the DescribeClusters operation. To add HSMs to the cluster, use the CreateHsm operation. The connection process can take an extended amount of time to complete; up to 20 minutes. This operation starts the connection process, but it does not wait for it to complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON object with no properties. However, this response does not indicate that the custom key store is connected. To get the connection state of the custom key store, use the DescribeCustomKeyStores operation. During the connection process, AWS KMS finds the AWS CloudHSM cluster that is associated with the custom key store, creates the connection infrastructure, connects to the cluster, logs into the AWS CloudHSM client as the  kmsuser crypto user (CU), and rotates its password. The ConnectCustomKeyStore operation might fail for various reasons. To find the reason, use the DescribeCustomKeyStores operation and see the ConnectionErrorCode in the response. For help interpreting the ConnectionErrorCode, see CustomKeyStoresListEntry. To fix the failure, use the DisconnectCustomKeyStore operation to disconnect the custom key store, correct the error, use the UpdateCustomKeyStore operation if necessary, and then use ConnectCustomKeyStore again. If you are having trouble connecting or disconnecting a custom key store, see Troubleshooting a Custom Key Store in the AWS Key Management Service Developer Guide.
   */
  connectCustomKeyStore(params: KMS.Types.ConnectCustomKeyStoreRequest, callback?: (err: AWSError, data: KMS.Types.ConnectCustomKeyStoreResponse) => void): Request<KMS.Types.ConnectCustomKeyStoreResponse, AWSError>;
  /**
   * Connects or reconnects a custom key store to its associated AWS CloudHSM cluster. The custom key store must be connected before you can create customer master keys (CMKs) in the key store or use the CMKs it contains. You can disconnect and reconnect a custom key store at any time. To connect a custom key store, its associated AWS CloudHSM cluster must have at least one active HSM. To get the number of active HSMs in a cluster, use the DescribeClusters operation. To add HSMs to the cluster, use the CreateHsm operation. The connection process can take an extended amount of time to complete; up to 20 minutes. This operation starts the connection process, but it does not wait for it to complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON object with no properties. However, this response does not indicate that the custom key store is connected. To get the connection state of the custom key store, use the DescribeCustomKeyStores operation. During the connection process, AWS KMS finds the AWS CloudHSM cluster that is associated with the custom key store, creates the connection infrastructure, connects to the cluster, logs into the AWS CloudHSM client as the  kmsuser crypto user (CU), and rotates its password. The ConnectCustomKeyStore operation might fail for various reasons. To find the reason, use the DescribeCustomKeyStores operation and see the ConnectionErrorCode in the response. For help interpreting the ConnectionErrorCode, see CustomKeyStoresListEntry. To fix the failure, use the DisconnectCustomKeyStore operation to disconnect the custom key store, correct the error, use the UpdateCustomKeyStore operation if necessary, and then use ConnectCustomKeyStore again. If you are having trouble connecting or disconnecting a custom key store, see Troubleshooting a Custom Key Store in the AWS Key Management Service Developer Guide.
   */
  connectCustomKeyStore(callback?: (err: AWSError, data: KMS.Types.ConnectCustomKeyStoreResponse) => void): Request<KMS.Types.ConnectCustomKeyStoreResponse, AWSError>;
  /**
   * Creates a display name for a customer master key (CMK). You can use an alias to identify a CMK in selected operations, such as Encrypt and GenerateDataKey.  Each CMK can have multiple aliases, but each alias points to only one CMK. The alias name must be unique in the AWS account and region. To simplify code that runs in multiple regions, use the same alias name, but point it to a different CMK in each region.  Because an alias is not a property of a CMK, you can delete and change the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all CMKs, use the ListAliases operation. An alias must start with the word alias followed by a forward slash (alias/). The alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). Alias names cannot begin with aws; that alias name prefix is reserved by Amazon Web Services (AWS). The alias and the CMK it is mapped to must be in the same AWS account and the same region. You cannot perform this operation on an alias in a different AWS account. To map an existing alias to a different CMK, call UpdateAlias. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  createAlias(params: KMS.Types.CreateAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a display name for a customer master key (CMK). You can use an alias to identify a CMK in selected operations, such as Encrypt and GenerateDataKey.  Each CMK can have multiple aliases, but each alias points to only one CMK. The alias name must be unique in the AWS account and region. To simplify code that runs in multiple regions, use the same alias name, but point it to a different CMK in each region.  Because an alias is not a property of a CMK, you can delete and change the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all CMKs, use the ListAliases operation. An alias must start with the word alias followed by a forward slash (alias/). The alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). Alias names cannot begin with aws; that alias name prefix is reserved by Amazon Web Services (AWS). The alias and the CMK it is mapped to must be in the same AWS account and the same region. You cannot perform this operation on an alias in a different AWS account. To map an existing alias to a different CMK, call UpdateAlias. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  createAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a custom key store that is associated with an AWS CloudHSM cluster that you own and manage. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store. When the operation completes successfully, it returns the ID of the new custom key store. Before you can use your new custom key store, you need to use the ConnectCustomKeyStore operation to connect the new key store to its AWS CloudHSM cluster. The CreateCustomKeyStore operation requires the following elements.   You must specify an active AWS CloudHSM cluster in the same account and AWS Region as the custom key store. You can use an existing cluster or create and activate a new AWS CloudHSM cluster for the key store. AWS KMS does not require exclusive use of the cluster.   You must include the content of the trust anchor certificate for the cluster. You created this certificate, and saved it in the customerCA.crt file, when you initialized the cluster.   You must provide the password of the dedicated  kmsuser crypto user (CU) account in the cluster. Before you create the custom key store, use the createUser command in cloudhsm_mgmt_util to create a crypto user (CU) named kmsuser in specified AWS CloudHSM cluster. AWS KMS uses the kmsuser CU account to create and manage key material on your behalf. For instructions, see Create the kmsuser Crypto User in the AWS Key Management Service Developer Guide.   The AWS CloudHSM cluster that you specify must meet the following requirements.   The cluster must be active and be in the same AWS account and Region as the custom key store.   Each custom key store must be associated with a different AWS CloudHSM cluster. The cluster cannot be associated with another custom key store or have the same cluster certificate as a cluster that is associated with another custom key store. To view the cluster certificate, use the AWS CloudHSM DescribeClusters operation. Clusters that share a backup history have the same cluster certificate.   The cluster must be configured with subnets in at least two different Availability Zones in the Region. Because AWS CloudHSM is not supported in all Availability Zones, we recommend that the cluster have subnets in all Availability Zones in the Region.   The cluster must contain at least two active HSMs, each in a different Availability Zone.   New custom key stores are not automatically connected. After you create your custom key store, use the ConnectCustomKeyStore operation to connect the custom key store to its associated AWS CloudHSM cluster. Even if you are not going to use your custom key store immediately, you might want to connect it to verify that all settings are correct and then disconnect it until you are ready to use it. If this operation succeeds, it returns the ID of the new custom key store. For help with failures, see Troubleshoot a Custom Key Store in the AWS KMS Developer Guide.
   */
  createCustomKeyStore(params: KMS.Types.CreateCustomKeyStoreRequest, callback?: (err: AWSError, data: KMS.Types.CreateCustomKeyStoreResponse) => void): Request<KMS.Types.CreateCustomKeyStoreResponse, AWSError>;
  /**
   * Creates a custom key store that is associated with an AWS CloudHSM cluster that you own and manage. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store. When the operation completes successfully, it returns the ID of the new custom key store. Before you can use your new custom key store, you need to use the ConnectCustomKeyStore operation to connect the new key store to its AWS CloudHSM cluster. The CreateCustomKeyStore operation requires the following elements.   You must specify an active AWS CloudHSM cluster in the same account and AWS Region as the custom key store. You can use an existing cluster or create and activate a new AWS CloudHSM cluster for the key store. AWS KMS does not require exclusive use of the cluster.   You must include the content of the trust anchor certificate for the cluster. You created this certificate, and saved it in the customerCA.crt file, when you initialized the cluster.   You must provide the password of the dedicated  kmsuser crypto user (CU) account in the cluster. Before you create the custom key store, use the createUser command in cloudhsm_mgmt_util to create a crypto user (CU) named kmsuser in specified AWS CloudHSM cluster. AWS KMS uses the kmsuser CU account to create and manage key material on your behalf. For instructions, see Create the kmsuser Crypto User in the AWS Key Management Service Developer Guide.   The AWS CloudHSM cluster that you specify must meet the following requirements.   The cluster must be active and be in the same AWS account and Region as the custom key store.   Each custom key store must be associated with a different AWS CloudHSM cluster. The cluster cannot be associated with another custom key store or have the same cluster certificate as a cluster that is associated with another custom key store. To view the cluster certificate, use the AWS CloudHSM DescribeClusters operation. Clusters that share a backup history have the same cluster certificate.   The cluster must be configured with subnets in at least two different Availability Zones in the Region. Because AWS CloudHSM is not supported in all Availability Zones, we recommend that the cluster have subnets in all Availability Zones in the Region.   The cluster must contain at least two active HSMs, each in a different Availability Zone.   New custom key stores are not automatically connected. After you create your custom key store, use the ConnectCustomKeyStore operation to connect the custom key store to its associated AWS CloudHSM cluster. Even if you are not going to use your custom key store immediately, you might want to connect it to verify that all settings are correct and then disconnect it until you are ready to use it. If this operation succeeds, it returns the ID of the new custom key store. For help with failures, see Troubleshoot a Custom Key Store in the AWS KMS Developer Guide.
   */
  createCustomKeyStore(callback?: (err: AWSError, data: KMS.Types.CreateCustomKeyStoreResponse) => void): Request<KMS.Types.CreateCustomKeyStoreResponse, AWSError>;
  /**
   * Adds a grant to a customer master key (CMK). The grant specifies who can use the CMK and under what conditions. When setting permissions, grants are an alternative to key policies.  To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the KeyId parameter. For more information about grants, see Grants in the AWS Key Management Service Developer Guide. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  createGrant(params: KMS.Types.CreateGrantRequest, callback?: (err: AWSError, data: KMS.Types.CreateGrantResponse) => void): Request<KMS.Types.CreateGrantResponse, AWSError>;
  /**
   * Adds a grant to a customer master key (CMK). The grant specifies who can use the CMK and under what conditions. When setting permissions, grants are an alternative to key policies.  To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the KeyId parameter. For more information about grants, see Grants in the AWS Key Management Service Developer Guide. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  createGrant(callback?: (err: AWSError, data: KMS.Types.CreateGrantResponse) => void): Request<KMS.Types.CreateGrantResponse, AWSError>;
  /**
   * Creates a customer master key (CMK) in the caller's AWS account. You can use a CMK to encrypt small amounts of data (4 KiB or less) directly, but CMKs are more commonly used to encrypt data keys, which are used to encrypt raw data. For more information about data keys and the difference between CMKs and data keys, see the following:   The GenerateDataKey operation    AWS Key Management Service Concepts in the AWS Key Management Service Developer Guide    If you plan to import key material, use the Origin parameter with a value of EXTERNAL to create a CMK with no key material. To create a CMK in a custom key store, use CustomKeyStoreId parameter to specify the custom key store. You must also use the Origin parameter with a value of AWS_CLOUDHSM. The AWS CloudHSM cluster that is associated with the custom key store must have at least two active HSMs, each in a different Availability Zone in the Region. You cannot use this operation to create a CMK in a different AWS account.
   */
  createKey(params: KMS.Types.CreateKeyRequest, callback?: (err: AWSError, data: KMS.Types.CreateKeyResponse) => void): Request<KMS.Types.CreateKeyResponse, AWSError>;
  /**
   * Creates a customer master key (CMK) in the caller's AWS account. You can use a CMK to encrypt small amounts of data (4 KiB or less) directly, but CMKs are more commonly used to encrypt data keys, which are used to encrypt raw data. For more information about data keys and the difference between CMKs and data keys, see the following:   The GenerateDataKey operation    AWS Key Management Service Concepts in the AWS Key Management Service Developer Guide    If you plan to import key material, use the Origin parameter with a value of EXTERNAL to create a CMK with no key material. To create a CMK in a custom key store, use CustomKeyStoreId parameter to specify the custom key store. You must also use the Origin parameter with a value of AWS_CLOUDHSM. The AWS CloudHSM cluster that is associated with the custom key store must have at least two active HSMs, each in a different Availability Zone in the Region. You cannot use this operation to create a CMK in a different AWS account.
   */
  createKey(callback?: (err: AWSError, data: KMS.Types.CreateKeyResponse) => void): Request<KMS.Types.CreateKeyResponse, AWSError>;
  /**
   * Decrypts ciphertext. Ciphertext is plaintext that has been previously encrypted by using any of the following operations:    GenerateDataKey     GenerateDataKeyWithoutPlaintext     Encrypt    Note that if a caller has been granted access permissions to all keys (through, for example, IAM user policies that grant Decrypt permission on all resources), then ciphertext encrypted by using keys in other accounts where the key grants access to the caller can be decrypted. To remedy this, we recommend that you do not grant Decrypt access in an IAM user policy. Instead grant Decrypt access only in key policies. If you must grant Decrypt access in an IAM user policy, you should scope the resource to specific keys or to specific trusted accounts. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  decrypt(params: KMS.Types.DecryptRequest, callback?: (err: AWSError, data: KMS.Types.DecryptResponse) => void): Request<KMS.Types.DecryptResponse, AWSError>;
  /**
   * Decrypts ciphertext. Ciphertext is plaintext that has been previously encrypted by using any of the following operations:    GenerateDataKey     GenerateDataKeyWithoutPlaintext     Encrypt    Note that if a caller has been granted access permissions to all keys (through, for example, IAM user policies that grant Decrypt permission on all resources), then ciphertext encrypted by using keys in other accounts where the key grants access to the caller can be decrypted. To remedy this, we recommend that you do not grant Decrypt access in an IAM user policy. Instead grant Decrypt access only in key policies. If you must grant Decrypt access in an IAM user policy, you should scope the resource to specific keys or to specific trusted accounts. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  decrypt(callback?: (err: AWSError, data: KMS.Types.DecryptResponse) => void): Request<KMS.Types.DecryptResponse, AWSError>;
  /**
   * Deletes the specified alias. You cannot perform this operation on an alias in a different AWS account.  Because an alias is not a property of a CMK, you can delete and change the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all CMKs, use the ListAliases operation.  Each CMK can have multiple aliases. To change the alias of a CMK, use DeleteAlias to delete the current alias and CreateAlias to create a new alias. To associate an existing alias with a different customer master key (CMK), call UpdateAlias.
   */
  deleteAlias(params: KMS.Types.DeleteAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified alias. You cannot perform this operation on an alias in a different AWS account.  Because an alias is not a property of a CMK, you can delete and change the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all CMKs, use the ListAliases operation.  Each CMK can have multiple aliases. To change the alias of a CMK, use DeleteAlias to delete the current alias and CreateAlias to create a new alias. To associate an existing alias with a different customer master key (CMK), call UpdateAlias.
   */
  deleteAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a custom key store. This operation does not delete the AWS CloudHSM cluster that is associated with the custom key store, or affect any users or keys in the cluster. The custom key store that you delete cannot contain any AWS KMS customer master keys (CMKs). Before deleting the key store, verify that you will never need to use any of the CMKs in the key store for any cryptographic operations. Then, use ScheduleKeyDeletion to delete the AWS KMS customer master keys (CMKs) from the key store. When the scheduled waiting period expires, the ScheduleKeyDeletion operation deletes the CMKs. Then it makes a best effort to delete the key material from the associated cluster. However, you might need to manually delete the orphaned key material from the cluster and its backups. After all CMKs are deleted from AWS KMS, use DisconnectCustomKeyStore to disconnect the key store from AWS KMS. Then, you can delete the custom key store. Instead of deleting the custom key store, consider using DisconnectCustomKeyStore to disconnect it from AWS KMS. While the key store is disconnected, you cannot create or use the CMKs in the key store. But, you do not need to delete CMKs and you can reconnect a disconnected custom key store at any time. If the operation succeeds, it returns a JSON object with no properties. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.
   */
  deleteCustomKeyStore(params: KMS.Types.DeleteCustomKeyStoreRequest, callback?: (err: AWSError, data: KMS.Types.DeleteCustomKeyStoreResponse) => void): Request<KMS.Types.DeleteCustomKeyStoreResponse, AWSError>;
  /**
   * Deletes a custom key store. This operation does not delete the AWS CloudHSM cluster that is associated with the custom key store, or affect any users or keys in the cluster. The custom key store that you delete cannot contain any AWS KMS customer master keys (CMKs). Before deleting the key store, verify that you will never need to use any of the CMKs in the key store for any cryptographic operations. Then, use ScheduleKeyDeletion to delete the AWS KMS customer master keys (CMKs) from the key store. When the scheduled waiting period expires, the ScheduleKeyDeletion operation deletes the CMKs. Then it makes a best effort to delete the key material from the associated cluster. However, you might need to manually delete the orphaned key material from the cluster and its backups. After all CMKs are deleted from AWS KMS, use DisconnectCustomKeyStore to disconnect the key store from AWS KMS. Then, you can delete the custom key store. Instead of deleting the custom key store, consider using DisconnectCustomKeyStore to disconnect it from AWS KMS. While the key store is disconnected, you cannot create or use the CMKs in the key store. But, you do not need to delete CMKs and you can reconnect a disconnected custom key store at any time. If the operation succeeds, it returns a JSON object with no properties. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.
   */
  deleteCustomKeyStore(callback?: (err: AWSError, data: KMS.Types.DeleteCustomKeyStoreResponse) => void): Request<KMS.Types.DeleteCustomKeyStoreResponse, AWSError>;
  /**
   * Deletes key material that you previously imported. This operation makes the specified customer master key (CMK) unusable. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. You cannot perform this operation on a CMK in a different AWS account. When the specified CMK is in the PendingDeletion state, this operation does not change the CMK's state. Otherwise, it changes the CMK's state to PendingImport. After you delete key material, you can use ImportKeyMaterial to reimport the same key material into the CMK. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  deleteImportedKeyMaterial(params: KMS.Types.DeleteImportedKeyMaterialRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes key material that you previously imported. This operation makes the specified customer master key (CMK) unusable. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. You cannot perform this operation on a CMK in a different AWS account. When the specified CMK is in the PendingDeletion state, this operation does not change the CMK's state. Otherwise, it changes the CMK's state to PendingImport. After you delete key material, you can use ImportKeyMaterial to reimport the same key material into the CMK. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  deleteImportedKeyMaterial(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets information about custom key stores in the account and region. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store. By default, this operation returns information about all custom key stores in the account and region. To get only information about a particular custom key store, use either the CustomKeyStoreName or CustomKeyStoreId parameter (but not both). To determine whether the custom key store is connected to its AWS CloudHSM cluster, use the ConnectionState element in the response. If an attempt to connect the custom key store failed, the ConnectionState value is FAILED and the ConnectionErrorCode element in the response indicates the cause of the failure. For help interpreting the ConnectionErrorCode, see CustomKeyStoresListEntry. Custom key stores have a DISCONNECTED connection state if the key store has never been connected or you use the DisconnectCustomKeyStore operation to disconnect it. If your custom key store state is CONNECTED but you are having trouble using it, make sure that its associated AWS CloudHSM cluster is active and contains the minimum number of HSMs required for the operation, if any.  For help repairing your custom key store, see the Troubleshooting Custom Key Stores topic in the AWS Key Management Service Developer Guide.
   */
  describeCustomKeyStores(params: KMS.Types.DescribeCustomKeyStoresRequest, callback?: (err: AWSError, data: KMS.Types.DescribeCustomKeyStoresResponse) => void): Request<KMS.Types.DescribeCustomKeyStoresResponse, AWSError>;
  /**
   * Gets information about custom key stores in the account and region. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store. By default, this operation returns information about all custom key stores in the account and region. To get only information about a particular custom key store, use either the CustomKeyStoreName or CustomKeyStoreId parameter (but not both). To determine whether the custom key store is connected to its AWS CloudHSM cluster, use the ConnectionState element in the response. If an attempt to connect the custom key store failed, the ConnectionState value is FAILED and the ConnectionErrorCode element in the response indicates the cause of the failure. For help interpreting the ConnectionErrorCode, see CustomKeyStoresListEntry. Custom key stores have a DISCONNECTED connection state if the key store has never been connected or you use the DisconnectCustomKeyStore operation to disconnect it. If your custom key store state is CONNECTED but you are having trouble using it, make sure that its associated AWS CloudHSM cluster is active and contains the minimum number of HSMs required for the operation, if any.  For help repairing your custom key store, see the Troubleshooting Custom Key Stores topic in the AWS Key Management Service Developer Guide.
   */
  describeCustomKeyStores(callback?: (err: AWSError, data: KMS.Types.DescribeCustomKeyStoresResponse) => void): Request<KMS.Types.DescribeCustomKeyStoresResponse, AWSError>;
  /**
   * Provides detailed information about the specified customer master key (CMK). If you use DescribeKey on a predefined AWS alias, that is, an AWS alias with no key ID, AWS KMS associates the alias with an AWS managed CMK and returns its KeyId and Arn in the response. To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter.
   */
  describeKey(params: KMS.Types.DescribeKeyRequest, callback?: (err: AWSError, data: KMS.Types.DescribeKeyResponse) => void): Request<KMS.Types.DescribeKeyResponse, AWSError>;
  /**
   * Provides detailed information about the specified customer master key (CMK). If you use DescribeKey on a predefined AWS alias, that is, an AWS alias with no key ID, AWS KMS associates the alias with an AWS managed CMK and returns its KeyId and Arn in the response. To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter.
   */
  describeKey(callback?: (err: AWSError, data: KMS.Types.DescribeKeyResponse) => void): Request<KMS.Types.DescribeKeyResponse, AWSError>;
  /**
   * Sets the state of a customer master key (CMK) to disabled, thereby preventing its use for cryptographic operations. You cannot perform this operation on a CMK in a different AWS account. For more information about how key state affects the use of a CMK, see How Key State Affects the Use of a Customer Master Key in the AWS Key Management Service Developer Guide. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  disableKey(params: KMS.Types.DisableKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the state of a customer master key (CMK) to disabled, thereby preventing its use for cryptographic operations. You cannot perform this operation on a CMK in a different AWS account. For more information about how key state affects the use of a CMK, see How Key State Affects the Use of a Customer Master Key in the AWS Key Management Service Developer Guide. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  disableKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables automatic rotation of the key material for the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  disableKeyRotation(params: KMS.Types.DisableKeyRotationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables automatic rotation of the key material for the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  disableKeyRotation(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disconnects the custom key store from its associated AWS CloudHSM cluster. While a custom key store is disconnected, you can manage the custom key store and its customer master keys (CMKs), but you cannot create or use CMKs in the custom key store. You can reconnect the custom key store at any time.  While a custom key store is disconnected, all attempts to create customer master keys (CMKs) in the custom key store or to use existing CMKs in cryptographic operations will fail. This action can prevent users from storing and accessing sensitive data.   To find the connection state of a custom key store, use the DescribeCustomKeyStores operation. To reconnect a custom key store, use the ConnectCustomKeyStore operation. If the operation succeeds, it returns a JSON object with no properties. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.
   */
  disconnectCustomKeyStore(params: KMS.Types.DisconnectCustomKeyStoreRequest, callback?: (err: AWSError, data: KMS.Types.DisconnectCustomKeyStoreResponse) => void): Request<KMS.Types.DisconnectCustomKeyStoreResponse, AWSError>;
  /**
   * Disconnects the custom key store from its associated AWS CloudHSM cluster. While a custom key store is disconnected, you can manage the custom key store and its customer master keys (CMKs), but you cannot create or use CMKs in the custom key store. You can reconnect the custom key store at any time.  While a custom key store is disconnected, all attempts to create customer master keys (CMKs) in the custom key store or to use existing CMKs in cryptographic operations will fail. This action can prevent users from storing and accessing sensitive data.   To find the connection state of a custom key store, use the DescribeCustomKeyStores operation. To reconnect a custom key store, use the ConnectCustomKeyStore operation. If the operation succeeds, it returns a JSON object with no properties. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.
   */
  disconnectCustomKeyStore(callback?: (err: AWSError, data: KMS.Types.DisconnectCustomKeyStoreResponse) => void): Request<KMS.Types.DisconnectCustomKeyStoreResponse, AWSError>;
  /**
   * Sets the key state of a customer master key (CMK) to enabled. This allows you to use the CMK for cryptographic operations. You cannot perform this operation on a CMK in a different AWS account. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  enableKey(params: KMS.Types.EnableKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the key state of a customer master key (CMK) to enabled. This allows you to use the CMK for cryptographic operations. You cannot perform this operation on a CMK in a different AWS account. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  enableKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables automatic rotation of the key material for the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. You cannot enable automatic rotation of CMKs with imported key material or CMKs in a custom key store. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  enableKeyRotation(params: KMS.Types.EnableKeyRotationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables automatic rotation of the key material for the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. You cannot enable automatic rotation of CMKs with imported key material or CMKs in a custom key store. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  enableKeyRotation(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Encrypts plaintext into ciphertext by using a customer master key (CMK). The Encrypt operation has two primary use cases:   You can encrypt up to 4 kilobytes (4096 bytes) of arbitrary data such as an RSA key, a database password, or other sensitive information.   To move encrypted data from one AWS region to another, you can use this operation to encrypt in the new region the plaintext data key that was used to encrypt the data in the original region. This provides you with an encrypted copy of the data key that can be decrypted in the new region and used there to decrypt the encrypted data.   To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter. Unless you are moving encrypted data from one region to another, you don't use this operation to encrypt a generated data key within a region. To get data keys that are already encrypted, call the GenerateDataKey or GenerateDataKeyWithoutPlaintext operation. Data keys don't need to be encrypted again by calling Encrypt. To encrypt data locally in your application, use the GenerateDataKey operation to return a plaintext data encryption key and a copy of the key encrypted under the CMK of your choosing. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  encrypt(params: KMS.Types.EncryptRequest, callback?: (err: AWSError, data: KMS.Types.EncryptResponse) => void): Request<KMS.Types.EncryptResponse, AWSError>;
  /**
   * Encrypts plaintext into ciphertext by using a customer master key (CMK). The Encrypt operation has two primary use cases:   You can encrypt up to 4 kilobytes (4096 bytes) of arbitrary data such as an RSA key, a database password, or other sensitive information.   To move encrypted data from one AWS region to another, you can use this operation to encrypt in the new region the plaintext data key that was used to encrypt the data in the original region. This provides you with an encrypted copy of the data key that can be decrypted in the new region and used there to decrypt the encrypted data.   To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter. Unless you are moving encrypted data from one region to another, you don't use this operation to encrypt a generated data key within a region. To get data keys that are already encrypted, call the GenerateDataKey or GenerateDataKeyWithoutPlaintext operation. Data keys don't need to be encrypted again by calling Encrypt. To encrypt data locally in your application, use the GenerateDataKey operation to return a plaintext data encryption key and a copy of the key encrypted under the CMK of your choosing. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  encrypt(callback?: (err: AWSError, data: KMS.Types.EncryptResponse) => void): Request<KMS.Types.EncryptResponse, AWSError>;
  /**
   * Returns a data encryption key that you can use in your application to encrypt data locally.  You must specify the customer master key (CMK) under which to generate the data key. You must also specify the length of the data key using either the KeySpec or NumberOfBytes field. You must specify one field or the other, but not both. For common key lengths (128-bit and 256-bit symmetric keys), we recommend that you use KeySpec. To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter. This operation returns a plaintext copy of the data key in the Plaintext field of the response, and an encrypted copy of the data key in the CiphertextBlob field. The data key is encrypted under the CMK specified in the KeyId field of the request.  We recommend that you use the following pattern to encrypt data locally in your application:   Use this operation (GenerateDataKey) to get a data encryption key.   Use the plaintext data encryption key (returned in the Plaintext field of the response) to encrypt data locally, then erase the plaintext data key from memory.   Store the encrypted data key (returned in the CiphertextBlob field of the response) alongside the locally encrypted data.   To decrypt data locally:   Use the Decrypt operation to decrypt the encrypted data key into a plaintext copy of the data key.   Use the plaintext data key to decrypt data locally, then erase the plaintext data key from memory.   To return only an encrypted copy of the data key, use GenerateDataKeyWithoutPlaintext. To return a random byte string that is cryptographically secure, use GenerateRandom. If you use the optional EncryptionContext field, you must store at least enough information to be able to reconstruct the full encryption context when you later send the ciphertext to the Decrypt operation. It is a good practice to choose an encryption context that you can reconstruct on the fly to better secure the ciphertext. For more information, see Encryption Context in the AWS Key Management Service Developer Guide. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  generateDataKey(params: KMS.Types.GenerateDataKeyRequest, callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyResponse) => void): Request<KMS.Types.GenerateDataKeyResponse, AWSError>;
  /**
   * Returns a data encryption key that you can use in your application to encrypt data locally.  You must specify the customer master key (CMK) under which to generate the data key. You must also specify the length of the data key using either the KeySpec or NumberOfBytes field. You must specify one field or the other, but not both. For common key lengths (128-bit and 256-bit symmetric keys), we recommend that you use KeySpec. To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter. This operation returns a plaintext copy of the data key in the Plaintext field of the response, and an encrypted copy of the data key in the CiphertextBlob field. The data key is encrypted under the CMK specified in the KeyId field of the request.  We recommend that you use the following pattern to encrypt data locally in your application:   Use this operation (GenerateDataKey) to get a data encryption key.   Use the plaintext data encryption key (returned in the Plaintext field of the response) to encrypt data locally, then erase the plaintext data key from memory.   Store the encrypted data key (returned in the CiphertextBlob field of the response) alongside the locally encrypted data.   To decrypt data locally:   Use the Decrypt operation to decrypt the encrypted data key into a plaintext copy of the data key.   Use the plaintext data key to decrypt data locally, then erase the plaintext data key from memory.   To return only an encrypted copy of the data key, use GenerateDataKeyWithoutPlaintext. To return a random byte string that is cryptographically secure, use GenerateRandom. If you use the optional EncryptionContext field, you must store at least enough information to be able to reconstruct the full encryption context when you later send the ciphertext to the Decrypt operation. It is a good practice to choose an encryption context that you can reconstruct on the fly to better secure the ciphertext. For more information, see Encryption Context in the AWS Key Management Service Developer Guide. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  generateDataKey(callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyResponse) => void): Request<KMS.Types.GenerateDataKeyResponse, AWSError>;
  /**
   * Returns a data encryption key encrypted under a customer master key (CMK). This operation is identical to GenerateDataKey but returns only the encrypted copy of the data key.  To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter. This operation is useful in a system that has multiple components with different degrees of trust. For example, consider a system that stores encrypted data in containers. Each container stores the encrypted data and an encrypted copy of the data key. One component of the system, called the control plane, creates new containers. When it creates a new container, it uses this operation (GenerateDataKeyWithoutPlaintext) to get an encrypted data key and then stores it in the container. Later, a different component of the system, called the data plane, puts encrypted data into the containers. To do this, it passes the encrypted data key to the Decrypt operation, then uses the returned plaintext data key to encrypt data, and finally stores the encrypted data in the container. In this system, the control plane never sees the plaintext data key. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  generateDataKeyWithoutPlaintext(params: KMS.Types.GenerateDataKeyWithoutPlaintextRequest, callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyWithoutPlaintextResponse) => void): Request<KMS.Types.GenerateDataKeyWithoutPlaintextResponse, AWSError>;
  /**
   * Returns a data encryption key encrypted under a customer master key (CMK). This operation is identical to GenerateDataKey but returns only the encrypted copy of the data key.  To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter. This operation is useful in a system that has multiple components with different degrees of trust. For example, consider a system that stores encrypted data in containers. Each container stores the encrypted data and an encrypted copy of the data key. One component of the system, called the control plane, creates new containers. When it creates a new container, it uses this operation (GenerateDataKeyWithoutPlaintext) to get an encrypted data key and then stores it in the container. Later, a different component of the system, called the data plane, puts encrypted data into the containers. To do this, it passes the encrypted data key to the Decrypt operation, then uses the returned plaintext data key to encrypt data, and finally stores the encrypted data in the container. In this system, the control plane never sees the plaintext data key. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  generateDataKeyWithoutPlaintext(callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyWithoutPlaintextResponse) => void): Request<KMS.Types.GenerateDataKeyWithoutPlaintextResponse, AWSError>;
  /**
   * Returns a random byte string that is cryptographically secure. By default, the random byte string is generated in AWS KMS. To generate the byte string in the AWS CloudHSM cluster that is associated with a custom key store, specify the custom key store ID. For more information about entropy and random number generation, see the AWS Key Management Service Cryptographic Details whitepaper.
   */
  generateRandom(params: KMS.Types.GenerateRandomRequest, callback?: (err: AWSError, data: KMS.Types.GenerateRandomResponse) => void): Request<KMS.Types.GenerateRandomResponse, AWSError>;
  /**
   * Returns a random byte string that is cryptographically secure. By default, the random byte string is generated in AWS KMS. To generate the byte string in the AWS CloudHSM cluster that is associated with a custom key store, specify the custom key store ID. For more information about entropy and random number generation, see the AWS Key Management Service Cryptographic Details whitepaper.
   */
  generateRandom(callback?: (err: AWSError, data: KMS.Types.GenerateRandomResponse) => void): Request<KMS.Types.GenerateRandomResponse, AWSError>;
  /**
   * Gets a key policy attached to the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.
   */
  getKeyPolicy(params: KMS.Types.GetKeyPolicyRequest, callback?: (err: AWSError, data: KMS.Types.GetKeyPolicyResponse) => void): Request<KMS.Types.GetKeyPolicyResponse, AWSError>;
  /**
   * Gets a key policy attached to the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.
   */
  getKeyPolicy(callback?: (err: AWSError, data: KMS.Types.GetKeyPolicyResponse) => void): Request<KMS.Types.GetKeyPolicyResponse, AWSError>;
  /**
   * Gets a Boolean value that indicates whether automatic rotation of the key material is enabled for the specified customer master key (CMK). The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.   Disabled: The key rotation status does not change when you disable a CMK. However, while the CMK is disabled, AWS KMS does not rotate the backing key.   Pending deletion: While a CMK is pending deletion, its key rotation status is false and AWS KMS does not rotate the backing key. If you cancel the deletion, the original key rotation status is restored.   To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the KeyId parameter.
   */
  getKeyRotationStatus(params: KMS.Types.GetKeyRotationStatusRequest, callback?: (err: AWSError, data: KMS.Types.GetKeyRotationStatusResponse) => void): Request<KMS.Types.GetKeyRotationStatusResponse, AWSError>;
  /**
   * Gets a Boolean value that indicates whether automatic rotation of the key material is enabled for the specified customer master key (CMK). The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.   Disabled: The key rotation status does not change when you disable a CMK. However, while the CMK is disabled, AWS KMS does not rotate the backing key.   Pending deletion: While a CMK is pending deletion, its key rotation status is false and AWS KMS does not rotate the backing key. If you cancel the deletion, the original key rotation status is restored.   To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the KeyId parameter.
   */
  getKeyRotationStatus(callback?: (err: AWSError, data: KMS.Types.GetKeyRotationStatusResponse) => void): Request<KMS.Types.GetKeyRotationStatusResponse, AWSError>;
  /**
   * Returns the items you need in order to import key material into AWS KMS from your existing key management infrastructure. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. You must specify the key ID of the customer master key (CMK) into which you will import key material. This CMK's Origin must be EXTERNAL. You must also specify the wrapping algorithm and type of wrapping key (public key) that you will use to encrypt the key material. You cannot perform this operation on a CMK in a different AWS account. This operation returns a public key and an import token. Use the public key to encrypt the key material. Store the import token to send with a subsequent ImportKeyMaterial request. The public key and import token from the same response must be used together. These items are valid for 24 hours. When they expire, they cannot be used for a subsequent ImportKeyMaterial request. To get new ones, send another GetParametersForImport request. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  getParametersForImport(params: KMS.Types.GetParametersForImportRequest, callback?: (err: AWSError, data: KMS.Types.GetParametersForImportResponse) => void): Request<KMS.Types.GetParametersForImportResponse, AWSError>;
  /**
   * Returns the items you need in order to import key material into AWS KMS from your existing key management infrastructure. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. You must specify the key ID of the customer master key (CMK) into which you will import key material. This CMK's Origin must be EXTERNAL. You must also specify the wrapping algorithm and type of wrapping key (public key) that you will use to encrypt the key material. You cannot perform this operation on a CMK in a different AWS account. This operation returns a public key and an import token. Use the public key to encrypt the key material. Store the import token to send with a subsequent ImportKeyMaterial request. The public key and import token from the same response must be used together. These items are valid for 24 hours. When they expire, they cannot be used for a subsequent ImportKeyMaterial request. To get new ones, send another GetParametersForImport request. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  getParametersForImport(callback?: (err: AWSError, data: KMS.Types.GetParametersForImportResponse) => void): Request<KMS.Types.GetParametersForImportResponse, AWSError>;
  /**
   * Imports key material into an existing AWS KMS customer master key (CMK) that was created without key material. You cannot perform this operation on a CMK in a different AWS account. For more information about creating CMKs with no key material and then importing key material, see Importing Key Material in the AWS Key Management Service Developer Guide. Before using this operation, call GetParametersForImport. Its response includes a public key and an import token. Use the public key to encrypt the key material. Then, submit the import token from the same GetParametersForImport response. When calling this operation, you must specify the following values:   The key ID or key ARN of a CMK with no key material. Its Origin must be EXTERNAL. To create a CMK with no key material, call CreateKey and set the value of its Origin parameter to EXTERNAL. To get the Origin of a CMK, call DescribeKey.)   The encrypted key material. To get the public key to encrypt the key material, call GetParametersForImport.   The import token that GetParametersForImport returned. This token and the public key used to encrypt the key material must have come from the same response.   Whether the key material expires and if so, when. If you set an expiration date, you can change it only by reimporting the same key material and specifying a new expiration date. If the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. To use the CMK again, you must reimport the same key material.   When this operation is successful, the key state of the CMK changes from PendingImport to Enabled, and you can use the CMK. After you successfully import key material into a CMK, you can reimport the same key material into that CMK, but you cannot import different key material. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  importKeyMaterial(params: KMS.Types.ImportKeyMaterialRequest, callback?: (err: AWSError, data: KMS.Types.ImportKeyMaterialResponse) => void): Request<KMS.Types.ImportKeyMaterialResponse, AWSError>;
  /**
   * Imports key material into an existing AWS KMS customer master key (CMK) that was created without key material. You cannot perform this operation on a CMK in a different AWS account. For more information about creating CMKs with no key material and then importing key material, see Importing Key Material in the AWS Key Management Service Developer Guide. Before using this operation, call GetParametersForImport. Its response includes a public key and an import token. Use the public key to encrypt the key material. Then, submit the import token from the same GetParametersForImport response. When calling this operation, you must specify the following values:   The key ID or key ARN of a CMK with no key material. Its Origin must be EXTERNAL. To create a CMK with no key material, call CreateKey and set the value of its Origin parameter to EXTERNAL. To get the Origin of a CMK, call DescribeKey.)   The encrypted key material. To get the public key to encrypt the key material, call GetParametersForImport.   The import token that GetParametersForImport returned. This token and the public key used to encrypt the key material must have come from the same response.   Whether the key material expires and if so, when. If you set an expiration date, you can change it only by reimporting the same key material and specifying a new expiration date. If the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. To use the CMK again, you must reimport the same key material.   When this operation is successful, the key state of the CMK changes from PendingImport to Enabled, and you can use the CMK. After you successfully import key material into a CMK, you can reimport the same key material into that CMK, but you cannot import different key material. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  importKeyMaterial(callback?: (err: AWSError, data: KMS.Types.ImportKeyMaterialResponse) => void): Request<KMS.Types.ImportKeyMaterialResponse, AWSError>;
  /**
   * Gets a list of all aliases in the caller's AWS account and region. You cannot list aliases in other accounts. For more information about aliases, see CreateAlias. By default, the ListAliases command returns all aliases in the account and region. To get only the aliases that point to a particular customer master key (CMK), use the KeyId parameter. The ListAliases response might include several aliases have no TargetKeyId field. These are predefined aliases that AWS has created but has not yet associated with a CMK. Aliases that AWS creates in your account, including predefined aliases, do not count against your AWS KMS aliases limit.
   */
  listAliases(params: KMS.Types.ListAliasesRequest, callback?: (err: AWSError, data: KMS.Types.ListAliasesResponse) => void): Request<KMS.Types.ListAliasesResponse, AWSError>;
  /**
   * Gets a list of all aliases in the caller's AWS account and region. You cannot list aliases in other accounts. For more information about aliases, see CreateAlias. By default, the ListAliases command returns all aliases in the account and region. To get only the aliases that point to a particular customer master key (CMK), use the KeyId parameter. The ListAliases response might include several aliases have no TargetKeyId field. These are predefined aliases that AWS has created but has not yet associated with a CMK. Aliases that AWS creates in your account, including predefined aliases, do not count against your AWS KMS aliases limit.
   */
  listAliases(callback?: (err: AWSError, data: KMS.Types.ListAliasesResponse) => void): Request<KMS.Types.ListAliasesResponse, AWSError>;
  /**
   * Gets a list of all grants for the specified customer master key (CMK). To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the KeyId parameter.
   */
  listGrants(params: KMS.Types.ListGrantsRequest, callback?: (err: AWSError, data: KMS.Types.ListGrantsResponse) => void): Request<KMS.Types.ListGrantsResponse, AWSError>;
  /**
   * Gets a list of all grants for the specified customer master key (CMK). To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the KeyId parameter.
   */
  listGrants(callback?: (err: AWSError, data: KMS.Types.ListGrantsResponse) => void): Request<KMS.Types.ListGrantsResponse, AWSError>;
  /**
   * Gets the names of the key policies that are attached to a customer master key (CMK). This operation is designed to get policy names that you can use in a GetKeyPolicy operation. However, the only valid policy name is default. You cannot perform this operation on a CMK in a different AWS account.
   */
  listKeyPolicies(params: KMS.Types.ListKeyPoliciesRequest, callback?: (err: AWSError, data: KMS.Types.ListKeyPoliciesResponse) => void): Request<KMS.Types.ListKeyPoliciesResponse, AWSError>;
  /**
   * Gets the names of the key policies that are attached to a customer master key (CMK). This operation is designed to get policy names that you can use in a GetKeyPolicy operation. However, the only valid policy name is default. You cannot perform this operation on a CMK in a different AWS account.
   */
  listKeyPolicies(callback?: (err: AWSError, data: KMS.Types.ListKeyPoliciesResponse) => void): Request<KMS.Types.ListKeyPoliciesResponse, AWSError>;
  /**
   * Gets a list of all customer master keys (CMKs) in the caller's AWS account and region.
   */
  listKeys(params: KMS.Types.ListKeysRequest, callback?: (err: AWSError, data: KMS.Types.ListKeysResponse) => void): Request<KMS.Types.ListKeysResponse, AWSError>;
  /**
   * Gets a list of all customer master keys (CMKs) in the caller's AWS account and region.
   */
  listKeys(callback?: (err: AWSError, data: KMS.Types.ListKeysResponse) => void): Request<KMS.Types.ListKeysResponse, AWSError>;
  /**
   * Returns a list of all tags for the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.
   */
  listResourceTags(params: KMS.Types.ListResourceTagsRequest, callback?: (err: AWSError, data: KMS.Types.ListResourceTagsResponse) => void): Request<KMS.Types.ListResourceTagsResponse, AWSError>;
  /**
   * Returns a list of all tags for the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account.
   */
  listResourceTags(callback?: (err: AWSError, data: KMS.Types.ListResourceTagsResponse) => void): Request<KMS.Types.ListResourceTagsResponse, AWSError>;
  /**
   * Returns a list of all grants for which the grant's RetiringPrincipal matches the one specified. A typical use is to list all grants that you are able to retire. To retire a grant, use RetireGrant.
   */
  listRetirableGrants(params: KMS.Types.ListRetirableGrantsRequest, callback?: (err: AWSError, data: KMS.Types.ListGrantsResponse) => void): Request<KMS.Types.ListGrantsResponse, AWSError>;
  /**
   * Returns a list of all grants for which the grant's RetiringPrincipal matches the one specified. A typical use is to list all grants that you are able to retire. To retire a grant, use RetireGrant.
   */
  listRetirableGrants(callback?: (err: AWSError, data: KMS.Types.ListGrantsResponse) => void): Request<KMS.Types.ListGrantsResponse, AWSError>;
  /**
   * Attaches a key policy to the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. For more information about key policies, see Key Policies in the AWS Key Management Service Developer Guide.
   */
  putKeyPolicy(params: KMS.Types.PutKeyPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches a key policy to the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. For more information about key policies, see Key Policies in the AWS Key Management Service Developer Guide.
   */
  putKeyPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Encrypts data on the server side with a new customer master key (CMK) without exposing the plaintext of the data on the client side. The data is first decrypted and then reencrypted. You can also use this operation to change the encryption context of a ciphertext.  You can reencrypt data using CMKs in different AWS accounts. Unlike other operations, ReEncrypt is authorized twice, once as ReEncryptFrom on the source CMK and once as ReEncryptTo on the destination CMK. We recommend that you include the "kms:ReEncrypt*" permission in your key policies to permit reencryption from or to the CMK. This permission is automatically included in the key policy when you create a CMK through the console, but you must include it manually when you create a CMK programmatically or when you set a key policy with the PutKeyPolicy operation. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  reEncrypt(params: KMS.Types.ReEncryptRequest, callback?: (err: AWSError, data: KMS.Types.ReEncryptResponse) => void): Request<KMS.Types.ReEncryptResponse, AWSError>;
  /**
   * Encrypts data on the server side with a new customer master key (CMK) without exposing the plaintext of the data on the client side. The data is first decrypted and then reencrypted. You can also use this operation to change the encryption context of a ciphertext.  You can reencrypt data using CMKs in different AWS accounts. Unlike other operations, ReEncrypt is authorized twice, once as ReEncryptFrom on the source CMK and once as ReEncryptTo on the destination CMK. We recommend that you include the "kms:ReEncrypt*" permission in your key policies to permit reencryption from or to the CMK. This permission is automatically included in the key policy when you create a CMK through the console, but you must include it manually when you create a CMK programmatically or when you set a key policy with the PutKeyPolicy operation. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  reEncrypt(callback?: (err: AWSError, data: KMS.Types.ReEncryptResponse) => void): Request<KMS.Types.ReEncryptResponse, AWSError>;
  /**
   * Retires a grant. To clean up, you can retire a grant when you're done using it. You should revoke a grant when you intend to actively deny operations that depend on it. The following are permitted to call this API:   The AWS account (root user) under which the grant was created   The RetiringPrincipal, if present in the grant   The GranteePrincipal, if RetireGrant is an operation specified in the grant   You must identify the grant to retire by its grant token or by a combination of the grant ID and the Amazon Resource Name (ARN) of the customer master key (CMK). A grant token is a unique variable-length base64-encoded string. A grant ID is a 64 character unique identifier of a grant. The CreateGrant operation returns both.
   */
  retireGrant(params: KMS.Types.RetireGrantRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retires a grant. To clean up, you can retire a grant when you're done using it. You should revoke a grant when you intend to actively deny operations that depend on it. The following are permitted to call this API:   The AWS account (root user) under which the grant was created   The RetiringPrincipal, if present in the grant   The GranteePrincipal, if RetireGrant is an operation specified in the grant   You must identify the grant to retire by its grant token or by a combination of the grant ID and the Amazon Resource Name (ARN) of the customer master key (CMK). A grant token is a unique variable-length base64-encoded string. A grant ID is a 64 character unique identifier of a grant. The CreateGrant operation returns both.
   */
  retireGrant(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes the specified grant for the specified customer master key (CMK). You can revoke a grant to actively deny operations that depend on it. To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the KeyId parameter.
   */
  revokeGrant(params: KMS.Types.RevokeGrantRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes the specified grant for the specified customer master key (CMK). You can revoke a grant to actively deny operations that depend on it. To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the KeyId parameter.
   */
  revokeGrant(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Schedules the deletion of a customer master key (CMK). You may provide a waiting period, specified in days, before deletion occurs. If you do not provide a waiting period, the default period of 30 days is used. When this operation is successful, the key state of the CMK changes to PendingDeletion. Before the waiting period ends, you can use CancelKeyDeletion to cancel the deletion of the CMK. After the waiting period ends, AWS KMS deletes the CMK and all AWS KMS data associated with it, including all aliases that refer to it.  Deleting a CMK is a destructive and potentially dangerous operation. When a CMK is deleted, all data that was encrypted under the CMK is unrecoverable. To prevent the use of a CMK without deleting it, use DisableKey.  If you schedule deletion of a CMK from a custom key store, when the waiting period expires, ScheduleKeyDeletion deletes the CMK from AWS KMS. Then AWS KMS makes a best effort to delete the key material from the associated AWS CloudHSM cluster. However, you might need to manually delete the orphaned key material from the cluster and its backups. You cannot perform this operation on a CMK in a different AWS account. For more information about scheduling a CMK for deletion, see Deleting Customer Master Keys in the AWS Key Management Service Developer Guide. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  scheduleKeyDeletion(params: KMS.Types.ScheduleKeyDeletionRequest, callback?: (err: AWSError, data: KMS.Types.ScheduleKeyDeletionResponse) => void): Request<KMS.Types.ScheduleKeyDeletionResponse, AWSError>;
  /**
   * Schedules the deletion of a customer master key (CMK). You may provide a waiting period, specified in days, before deletion occurs. If you do not provide a waiting period, the default period of 30 days is used. When this operation is successful, the key state of the CMK changes to PendingDeletion. Before the waiting period ends, you can use CancelKeyDeletion to cancel the deletion of the CMK. After the waiting period ends, AWS KMS deletes the CMK and all AWS KMS data associated with it, including all aliases that refer to it.  Deleting a CMK is a destructive and potentially dangerous operation. When a CMK is deleted, all data that was encrypted under the CMK is unrecoverable. To prevent the use of a CMK without deleting it, use DisableKey.  If you schedule deletion of a CMK from a custom key store, when the waiting period expires, ScheduleKeyDeletion deletes the CMK from AWS KMS. Then AWS KMS makes a best effort to delete the key material from the associated AWS CloudHSM cluster. However, you might need to manually delete the orphaned key material from the cluster and its backups. You cannot perform this operation on a CMK in a different AWS account. For more information about scheduling a CMK for deletion, see Deleting Customer Master Keys in the AWS Key Management Service Developer Guide. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  scheduleKeyDeletion(callback?: (err: AWSError, data: KMS.Types.ScheduleKeyDeletionResponse) => void): Request<KMS.Types.ScheduleKeyDeletionResponse, AWSError>;
  /**
   * Adds or edits tags for a customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings. You can only use a tag key once for each CMK. If you use the tag key again, AWS KMS replaces the current tag value with the specified value. For information about the rules that apply to tag keys and tag values, see User-Defined Tag Restrictions in the AWS Billing and Cost Management User Guide. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  tagResource(params: KMS.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or edits tags for a customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings. You can only use a tag key once for each CMK. If you use the tag key again, AWS KMS replaces the current tag value with the specified value. For information about the rules that apply to tag keys and tag values, see User-Defined Tag Restrictions in the AWS Billing and Cost Management User Guide. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified tags from the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. To remove a tag, specify the tag key. To change the tag value of an existing tag key, use TagResource. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  untagResource(params: KMS.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified tags from the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. To remove a tag, specify the tag key. To change the tag value of an existing tag key, use TagResource. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates an existing alias with a different customer master key (CMK). Each CMK can have multiple aliases, but the aliases must be unique within the account and region. You cannot perform this operation on an alias in a different AWS account. This operation works only on existing aliases. To change the alias of a CMK to a new value, use CreateAlias to create a new alias and DeleteAlias to delete the old alias. Because an alias is not a property of a CMK, you can create, update, and delete the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all CMKs in the account, use the ListAliases operation.  An alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). An alias must start with the word alias followed by a forward slash (alias/). The alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). Alias names cannot begin with aws; that alias name prefix is reserved by Amazon Web Services (AWS). The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  updateAlias(params: KMS.Types.UpdateAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates an existing alias with a different customer master key (CMK). Each CMK can have multiple aliases, but the aliases must be unique within the account and region. You cannot perform this operation on an alias in a different AWS account. This operation works only on existing aliases. To change the alias of a CMK to a new value, use CreateAlias to create a new alias and DeleteAlias to delete the old alias. Because an alias is not a property of a CMK, you can create, update, and delete the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all CMKs in the account, use the ListAliases operation.  An alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). An alias must start with the word alias followed by a forward slash (alias/). The alias name can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). Alias names cannot begin with aws; that alias name prefix is reserved by Amazon Web Services (AWS). The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  updateAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the properties of a custom key store. Use the CustomKeyStoreId parameter to identify the custom key store you want to edit. Use the remaining parameters to change the properties of the custom key store. You can only update a custom key store that is disconnected. To disconnect the custom key store, use DisconnectCustomKeyStore. To reconnect the custom key store after the update completes, use ConnectCustomKeyStore. To find the connection state of a custom key store, use the DescribeCustomKeyStores operation. Use the NewCustomKeyStoreName parameter to change the friendly name of the custom key store to the value that you specify. Use the KeyStorePassword parameter tell AWS KMS the current password of the  kmsuser crypto user (CU) in the associated AWS CloudHSM cluster. You can use this parameter to fix connection failures that occur when AWS KMS cannot log into the associated cluster because the kmsuser password has changed. This value does not change the password in the AWS CloudHSM cluster. Use the CloudHsmClusterId parameter to associate the custom key store with a related AWS CloudHSM cluster, that is, a cluster that shares a backup history with the original cluster. You can use this parameter to repair a custom key store if its AWS CloudHSM cluster becomes corrupted or is deleted, or when you need to create or restore a cluster from a backup. The cluster ID must identify a AWS CloudHSM cluster with the following requirements.   The cluster must be active and be in the same AWS account and Region as the custom key store.   The cluster must have the same cluster certificate as the original cluster. You cannot use this parameter to associate the custom key store with an unrelated cluster. To view the cluster certificate, use the AWS CloudHSM DescribeClusters operation. Clusters that share a backup history have the same cluster certificate.   The cluster must be configured with subnets in at least two different Availability Zones in the Region. Because AWS CloudHSM is not supported in all Availability Zones, we recommend that the cluster have subnets in all Availability Zones in the Region.   The cluster must contain at least two active HSMs, each in a different Availability Zone.   If the operation succeeds, it returns a JSON object with no properties. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.
   */
  updateCustomKeyStore(params: KMS.Types.UpdateCustomKeyStoreRequest, callback?: (err: AWSError, data: KMS.Types.UpdateCustomKeyStoreResponse) => void): Request<KMS.Types.UpdateCustomKeyStoreResponse, AWSError>;
  /**
   * Changes the properties of a custom key store. Use the CustomKeyStoreId parameter to identify the custom key store you want to edit. Use the remaining parameters to change the properties of the custom key store. You can only update a custom key store that is disconnected. To disconnect the custom key store, use DisconnectCustomKeyStore. To reconnect the custom key store after the update completes, use ConnectCustomKeyStore. To find the connection state of a custom key store, use the DescribeCustomKeyStores operation. Use the NewCustomKeyStoreName parameter to change the friendly name of the custom key store to the value that you specify. Use the KeyStorePassword parameter tell AWS KMS the current password of the  kmsuser crypto user (CU) in the associated AWS CloudHSM cluster. You can use this parameter to fix connection failures that occur when AWS KMS cannot log into the associated cluster because the kmsuser password has changed. This value does not change the password in the AWS CloudHSM cluster. Use the CloudHsmClusterId parameter to associate the custom key store with a related AWS CloudHSM cluster, that is, a cluster that shares a backup history with the original cluster. You can use this parameter to repair a custom key store if its AWS CloudHSM cluster becomes corrupted or is deleted, or when you need to create or restore a cluster from a backup. The cluster ID must identify a AWS CloudHSM cluster with the following requirements.   The cluster must be active and be in the same AWS account and Region as the custom key store.   The cluster must have the same cluster certificate as the original cluster. You cannot use this parameter to associate the custom key store with an unrelated cluster. To view the cluster certificate, use the AWS CloudHSM DescribeClusters operation. Clusters that share a backup history have the same cluster certificate.   The cluster must be configured with subnets in at least two different Availability Zones in the Region. Because AWS CloudHSM is not supported in all Availability Zones, we recommend that the cluster have subnets in all Availability Zones in the Region.   The cluster must contain at least two active HSMs, each in a different Availability Zone.   If the operation succeeds, it returns a JSON object with no properties. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.
   */
  updateCustomKeyStore(callback?: (err: AWSError, data: KMS.Types.UpdateCustomKeyStoreResponse) => void): Request<KMS.Types.UpdateCustomKeyStoreResponse, AWSError>;
  /**
   * Updates the description of a customer master key (CMK). To see the decription of a CMK, use DescribeKey.  You cannot perform this operation on a CMK in a different AWS account. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  updateKeyDescription(params: KMS.Types.UpdateKeyDescriptionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the description of a customer master key (CMK). To see the decription of a CMK, use DescribeKey.  You cannot perform this operation on a CMK in a different AWS account. The result of this operation varies with the key state of the CMK. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  updateKeyDescription(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace KMS {
  export type AWSAccountIdType = string;
  export type AlgorithmSpec = "RSAES_PKCS1_V1_5"|"RSAES_OAEP_SHA_1"|"RSAES_OAEP_SHA_256"|string;
  export type AliasList = AliasListEntry[];
  export interface AliasListEntry {
    /**
     * String that contains the alias.
     */
    AliasName?: AliasNameType;
    /**
     * String that contains the key ARN.
     */
    AliasArn?: ArnType;
    /**
     * String that contains the key identifier referred to by the alias.
     */
    TargetKeyId?: KeyIdType;
  }
  export type AliasNameType = string;
  export type ArnType = string;
  export type BooleanType = boolean;
  export interface CancelKeyDeletionRequest {
    /**
     * The unique identifier for the customer master key (CMK) for which to cancel deletion. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
  }
  export interface CancelKeyDeletionResponse {
    /**
     * The unique identifier of the master key for which deletion is canceled.
     */
    KeyId?: KeyIdType;
  }
  export type CiphertextType = Buffer|Uint8Array|Blob|string;
  export type CloudHsmClusterIdType = string;
  export interface ConnectCustomKeyStoreRequest {
    /**
     * Enter the key store ID of the custom key store that you want to connect. To find the ID of a custom key store, use the DescribeCustomKeyStores operation.
     */
    CustomKeyStoreId: CustomKeyStoreIdType;
  }
  export interface ConnectCustomKeyStoreResponse {
  }
  export type ConnectionErrorCodeType = "INVALID_CREDENTIALS"|"CLUSTER_NOT_FOUND"|"NETWORK_ERRORS"|"INSUFFICIENT_CLOUDHSM_HSMS"|"USER_LOCKED_OUT"|string;
  export type ConnectionStateType = "CONNECTED"|"CONNECTING"|"FAILED"|"DISCONNECTED"|"DISCONNECTING"|string;
  export interface CreateAliasRequest {
    /**
     * String that contains the display name. The name must start with the word "alias" followed by a forward slash (alias/). Aliases that begin with "alias/AWS" are reserved.
     */
    AliasName: AliasNameType;
    /**
     * Identifies the CMK for which you are creating the alias. This value cannot be an alias. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    TargetKeyId: KeyIdType;
  }
  export interface CreateCustomKeyStoreRequest {
    /**
     * Specifies a friendly name for the custom key store. The name must be unique in your AWS account.
     */
    CustomKeyStoreName: CustomKeyStoreNameType;
    /**
     * Identifies the AWS CloudHSM cluster for the custom key store. Enter the cluster ID of any active AWS CloudHSM cluster that is not already associated with a custom key store. To find the cluster ID, use the DescribeClusters operation.
     */
    CloudHsmClusterId: CloudHsmClusterIdType;
    /**
     * Enter the content of the trust anchor certificate for the cluster. This is the content of the customerCA.crt file that you created when you initialized the cluster.
     */
    TrustAnchorCertificate: TrustAnchorCertificateType;
    /**
     * Enter the password of the  kmsuser crypto user (CU) account in the specified AWS CloudHSM cluster. AWS KMS logs into the cluster as this user to manage key material on your behalf. This parameter tells AWS KMS the kmsuser account password; it does not change the password in the AWS CloudHSM cluster.
     */
    KeyStorePassword: KeyStorePasswordType;
  }
  export interface CreateCustomKeyStoreResponse {
    /**
     * A unique identifier for the new custom key store.
     */
    CustomKeyStoreId?: CustomKeyStoreIdType;
  }
  export interface CreateGrantRequest {
    /**
     * The unique identifier for the customer master key (CMK) that the grant applies to. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. To specify a CMK in a different AWS account, you must use the key ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * The principal that is given permission to perform the operations that the grant permits. To specify the principal, use the Amazon Resource Name (ARN) of an AWS principal. Valid AWS principals include AWS accounts (root), IAM users, IAM roles, federated users, and assumed role users. For examples of the ARN syntax to use for specifying a principal, see AWS Identity and Access Management (IAM) in the Example ARNs section of the AWS General Reference.
     */
    GranteePrincipal: PrincipalIdType;
    /**
     * The principal that is given permission to retire the grant by using RetireGrant operation. To specify the principal, use the Amazon Resource Name (ARN) of an AWS principal. Valid AWS principals include AWS accounts (root), IAM users, federated users, and assumed role users. For examples of the ARN syntax to use for specifying a principal, see AWS Identity and Access Management (IAM) in the Example ARNs section of the AWS General Reference.
     */
    RetiringPrincipal?: PrincipalIdType;
    /**
     * A list of operations that the grant permits.
     */
    Operations: GrantOperationList;
    /**
     * A structure that you can use to allow certain operations in the grant only when the desired encryption context is present. For more information about encryption context, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    Constraints?: GrantConstraints;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
    /**
     * A friendly name for identifying the grant. Use this value to prevent unintended creation of duplicate grants when retrying this request. When this value is absent, all CreateGrant requests result in a new grant with a unique GrantId even if all the supplied parameters are identical. This can result in unintended duplicates when you retry the CreateGrant request. When this value is present, you can retry a CreateGrant request with identical parameters; if the grant already exists, the original GrantId is returned without creating a new grant. Note that the returned grant token is unique with every CreateGrant request, even when a duplicate GrantId is returned. All grant tokens obtained in this way can be used interchangeably.
     */
    Name?: GrantNameType;
  }
  export interface CreateGrantResponse {
    /**
     * The grant token. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantToken?: GrantTokenType;
    /**
     * The unique identifier for the grant. You can use the GrantId in a subsequent RetireGrant or RevokeGrant operation.
     */
    GrantId?: GrantIdType;
  }
  export interface CreateKeyRequest {
    /**
     * The key policy to attach to the CMK. If you provide a key policy, it must meet the following criteria:   If you don't set BypassPolicyLockoutSafetyCheck to true, the key policy must allow the principal that is making the CreateKey request to make a subsequent PutKeyPolicy request on the CMK. This reduces the risk that the CMK becomes unmanageable. For more information, refer to the scenario in the Default Key Policy section of the AWS Key Management Service Developer Guide.   Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to AWS KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to AWS KMS. For more information, see Changes that I make are not always immediately visible in the AWS Identity and Access Management User Guide.   If you do not provide a key policy, AWS KMS attaches a default key policy to the CMK. For more information, see Default Key Policy in the AWS Key Management Service Developer Guide. The key policy size limit is 32 kilobytes (32768 bytes).
     */
    Policy?: PolicyType;
    /**
     * A description of the CMK. Use a description that helps you decide whether the CMK is appropriate for a task.
     */
    Description?: DescriptionType;
    /**
     * The intended use of the CMK. You can use CMKs only for symmetric encryption and decryption.
     */
    KeyUsage?: KeyUsageType;
    /**
     * The source of the CMK's key material. You cannot change the origin after you create the CMK. The default is AWS_KMS, which means AWS KMS creates the key material in its own key store. When the parameter value is EXTERNAL, AWS KMS creates a CMK without key material so that you can import key material from your existing key management infrastructure. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. When the parameter value is AWS_CLOUDHSM, AWS KMS creates the CMK in a AWS KMS custom key store and creates its key material in the associated AWS CloudHSM cluster. You must also use the CustomKeyStoreId parameter to identify the custom key store.
     */
    Origin?: OriginType;
    /**
     * Creates the CMK in the specified custom key store and the key material in its associated AWS CloudHSM cluster. To create a CMK in a custom key store, you must also specify the Origin parameter with a value of AWS_CLOUDHSM. The AWS CloudHSM cluster that is associated with the custom key store must have at least two active HSMs, each in a different Availability Zone in the Region. To find the ID of a custom key store, use the DescribeCustomKeyStores operation. The response includes the custom key store ID and the ID of the AWS CloudHSM cluster. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.
     */
    CustomKeyStoreId?: CustomKeyStoreIdType;
    /**
     * A flag to indicate whether to bypass the key policy lockout safety check.  Setting this value to true increases the risk that the CMK becomes unmanageable. Do not set this value to true indiscriminately. For more information, refer to the scenario in the Default Key Policy section in the AWS Key Management Service Developer Guide.  Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the CMK. The default value is false.
     */
    BypassPolicyLockoutSafetyCheck?: BooleanType;
    /**
     * One or more tags. Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings. Use this parameter to tag the CMK when it is created. Alternately, you can omit this parameter and instead tag the CMK after it is created using TagResource.
     */
    Tags?: TagList;
  }
  export interface CreateKeyResponse {
    /**
     * Metadata associated with the CMK.
     */
    KeyMetadata?: KeyMetadata;
  }
  export type CustomKeyStoreIdType = string;
  export type CustomKeyStoreNameType = string;
  export type CustomKeyStoresList = CustomKeyStoresListEntry[];
  export interface CustomKeyStoresListEntry {
    /**
     * A unique identifier for the custom key store.
     */
    CustomKeyStoreId?: CustomKeyStoreIdType;
    /**
     * The user-specified friendly name for the custom key store.
     */
    CustomKeyStoreName?: CustomKeyStoreNameType;
    /**
     * A unique identifier for the AWS CloudHSM cluster that is associated with the custom key store.
     */
    CloudHsmClusterId?: CloudHsmClusterIdType;
    /**
     * The trust anchor certificate of the associated AWS CloudHSM cluster. When you initialize the cluster, you create this certificate and save it in the customerCA.crt file.
     */
    TrustAnchorCertificate?: TrustAnchorCertificateType;
    /**
     * Indicates whether the custom key store is connected to its AWS CloudHSM cluster. You can create and use CMKs in your custom key stores only when its connection state is CONNECTED. The value is DISCONNECTED if the key store has never been connected or you use the DisconnectCustomKeyStore operation to disconnect it. If the value is CONNECTED but you are having trouble using the custom key store, make sure that its associated AWS CloudHSM cluster is active and contains at least one active HSM. A value of FAILED indicates that an attempt to connect was unsuccessful. For help resolving a connection failure, see Troubleshooting a Custom Key Store in the AWS Key Management Service Developer Guide.
     */
    ConnectionState?: ConnectionStateType;
    /**
     * Describes the connection error. Valid values are:    CLUSTER_NOT_FOUND - AWS KMS cannot find the AWS CloudHSM cluster with the specified cluster ID.    INSUFFICIENT_CLOUDHSM_HSMS - The associated AWS CloudHSM cluster does not contain any active HSMs. To connect a custom key store to its AWS CloudHSM cluster, the cluster must contain at least one active HSM.    INVALID_CREDENTIALS - AWS KMS does not have the correct password for the kmsuser crypto user in the AWS CloudHSM cluster.    NETWORK_ERRORS - Network errors are preventing AWS KMS from connecting to the custom key store.    USER_LOCKED_OUT - The kmsuser CU account is locked out of the associated AWS CloudHSM cluster due to too many failed password attempts. Before you can connect your custom key store to its AWS CloudHSM cluster, you must change the kmsuser account password and update the password value for the custom key store.   For help with connection failures, see Troubleshooting Custom Key Stores in the AWS Key Management Service Developer Guide.
     */
    ConnectionErrorCode?: ConnectionErrorCodeType;
    /**
     * The date and time when the custom key store was created.
     */
    CreationDate?: DateType;
  }
  export type DataKeySpec = "AES_256"|"AES_128"|string;
  export type DateType = Date;
  export interface DecryptRequest {
    /**
     * Ciphertext to be decrypted. The blob includes metadata.
     */
    CiphertextBlob: CiphertextType;
    /**
     * The encryption context. If this was specified in the Encrypt function, it must be specified here or the decryption operation will fail. For more information, see Encryption Context.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface DecryptResponse {
    /**
     * ARN of the key used to perform the decryption. This value is returned if no errors are encountered during the operation.
     */
    KeyId?: KeyIdType;
    /**
     * Decrypted plaintext data. When you use the HTTP API or the AWS CLI, the value is Base64-encdoded. Otherwise, it is not encoded.
     */
    Plaintext?: PlaintextType;
  }
  export interface DeleteAliasRequest {
    /**
     * The alias to be deleted. The name must start with the word "alias" followed by a forward slash (alias/). Aliases that begin with "alias/aws" are reserved.
     */
    AliasName: AliasNameType;
  }
  export interface DeleteCustomKeyStoreRequest {
    /**
     * Enter the ID of the custom key store you want to delete. To find the ID of a custom key store, use the DescribeCustomKeyStores operation.
     */
    CustomKeyStoreId: CustomKeyStoreIdType;
  }
  export interface DeleteCustomKeyStoreResponse {
  }
  export interface DeleteImportedKeyMaterialRequest {
    /**
     * The identifier of the CMK whose key material to delete. The CMK's Origin must be EXTERNAL. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
  }
  export interface DescribeCustomKeyStoresRequest {
    /**
     * Gets only information about the specified custom key store. Enter the key store ID. By default, this operation gets information about all custom key stores in the account and region. To limit the output to a particular custom key store, you can use either the CustomKeyStoreId or CustomKeyStoreName parameter, but not both.
     */
    CustomKeyStoreId?: CustomKeyStoreIdType;
    /**
     * Gets only information about the specified custom key store. Enter the friendly name of the custom key store. By default, this operation gets information about all custom key stores in the account and region. To limit the output to a particular custom key store, you can use either the CustomKeyStoreId or CustomKeyStoreName parameter, but not both.
     */
    CustomKeyStoreName?: CustomKeyStoreNameType;
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
  }
  export interface DescribeCustomKeyStoresResponse {
    /**
     * Contains metadata about each custom key store.
     */
    CustomKeyStores?: CustomKeyStoresList;
    /**
     * When Truncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent request.
     */
    NextMarker?: MarkerType;
    /**
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the NextMarker element in this response to the Marker parameter in a subsequent request.
     */
    Truncated?: BooleanType;
  }
  export interface DescribeKeyRequest {
    /**
     * Describes the specified customer master key (CMK).  If you specify a predefined AWS alias (an AWS alias with no key ID), KMS associates the alias with an AWS managed CMK and returns its KeyId and Arn in the response. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a CMK in a different AWS account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    KeyId: KeyIdType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface DescribeKeyResponse {
    /**
     * Metadata associated with the key.
     */
    KeyMetadata?: KeyMetadata;
  }
  export type DescriptionType = string;
  export interface DisableKeyRequest {
    /**
     * A unique identifier for the customer master key (CMK). Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
  }
  export interface DisableKeyRotationRequest {
    /**
     * A unique identifier for the customer master key (CMK). Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
  }
  export interface DisconnectCustomKeyStoreRequest {
    /**
     * Enter the ID of the custom key store you want to disconnect. To find the ID of a custom key store, use the DescribeCustomKeyStores operation.
     */
    CustomKeyStoreId: CustomKeyStoreIdType;
  }
  export interface DisconnectCustomKeyStoreResponse {
  }
  export interface EnableKeyRequest {
    /**
     * A unique identifier for the customer master key (CMK). Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
  }
  export interface EnableKeyRotationRequest {
    /**
     * A unique identifier for the customer master key (CMK). Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
  }
  export interface EncryptRequest {
    /**
     * A unique identifier for the customer master key (CMK). To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a CMK in a different AWS account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    KeyId: KeyIdType;
    /**
     * Data to be encrypted.
     */
    Plaintext: PlaintextType;
    /**
     * Name-value pair that specifies the encryption context to be used for authenticated encryption. If used here, the same value must be supplied to the Decrypt API or decryption will fail. For more information, see Encryption Context.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface EncryptResponse {
    /**
     * The encrypted plaintext. When you use the HTTP API or the AWS CLI, the value is Base64-encdoded. Otherwise, it is not encoded.
     */
    CiphertextBlob?: CiphertextType;
    /**
     * The ID of the key used during encryption.
     */
    KeyId?: KeyIdType;
  }
  export type EncryptionContextKey = string;
  export type EncryptionContextType = {[key: string]: EncryptionContextValue};
  export type EncryptionContextValue = string;
  export type ExpirationModelType = "KEY_MATERIAL_EXPIRES"|"KEY_MATERIAL_DOES_NOT_EXPIRE"|string;
  export interface GenerateDataKeyRequest {
    /**
     * The identifier of the CMK under which to generate and encrypt the data encryption key. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a CMK in a different AWS account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    KeyId: KeyIdType;
    /**
     * A set of key-value pairs that represents additional authenticated data. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * The length of the data encryption key in bytes. For example, use the value 64 to generate a 512-bit data key (64 bytes is 512 bits). For common key lengths (128-bit and 256-bit symmetric keys), we recommend that you use the KeySpec field instead of this one.
     */
    NumberOfBytes?: NumberOfBytesType;
    /**
     * The length of the data encryption key. Use AES_128 to generate a 128-bit symmetric key, or AES_256 to generate a 256-bit symmetric key.
     */
    KeySpec?: DataKeySpec;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface GenerateDataKeyResponse {
    /**
     * The encrypted data encryption key. When you use the HTTP API or the AWS CLI, the value is Base64-encdoded. Otherwise, it is not encoded.
     */
    CiphertextBlob?: CiphertextType;
    /**
     * The data encryption key. When you use the HTTP API or the AWS CLI, the value is Base64-encdoded. Otherwise, it is not encoded. Use this data key for local encryption and decryption, then remove it from memory as soon as possible.
     */
    Plaintext?: PlaintextType;
    /**
     * The identifier of the CMK under which the data encryption key was generated and encrypted.
     */
    KeyId?: KeyIdType;
  }
  export interface GenerateDataKeyWithoutPlaintextRequest {
    /**
     * The identifier of the customer master key (CMK) under which to generate and encrypt the data encryption key. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a CMK in a different AWS account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    KeyId: KeyIdType;
    /**
     * A set of key-value pairs that represents additional authenticated data. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * The length of the data encryption key. Use AES_128 to generate a 128-bit symmetric key, or AES_256 to generate a 256-bit symmetric key.
     */
    KeySpec?: DataKeySpec;
    /**
     * The length of the data encryption key in bytes. For example, use the value 64 to generate a 512-bit data key (64 bytes is 512 bits). For common key lengths (128-bit and 256-bit symmetric keys), we recommend that you use the KeySpec field instead of this one.
     */
    NumberOfBytes?: NumberOfBytesType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface GenerateDataKeyWithoutPlaintextResponse {
    /**
     * The encrypted data encryption key. When you use the HTTP API or the AWS CLI, the value is Base64-encdoded. Otherwise, it is not encoded.
     */
    CiphertextBlob?: CiphertextType;
    /**
     * The identifier of the CMK under which the data encryption key was generated and encrypted.
     */
    KeyId?: KeyIdType;
  }
  export interface GenerateRandomRequest {
    /**
     * The length of the byte string.
     */
    NumberOfBytes?: NumberOfBytesType;
    /**
     * Generates the random byte string in the AWS CloudHSM cluster that is associated with the specified custom key store. To find the ID of a custom key store, use the DescribeCustomKeyStores operation.
     */
    CustomKeyStoreId?: CustomKeyStoreIdType;
  }
  export interface GenerateRandomResponse {
    /**
     * The random byte string. When you use the HTTP API or the AWS CLI, the value is Base64-encdoded. Otherwise, it is not encoded.
     */
    Plaintext?: PlaintextType;
  }
  export interface GetKeyPolicyRequest {
    /**
     * A unique identifier for the customer master key (CMK). Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * Specifies the name of the key policy. The only valid name is default. To get the names of key policies, use ListKeyPolicies.
     */
    PolicyName: PolicyNameType;
  }
  export interface GetKeyPolicyResponse {
    /**
     * A key policy document in JSON format.
     */
    Policy?: PolicyType;
  }
  export interface GetKeyRotationStatusRequest {
    /**
     * A unique identifier for the customer master key (CMK). Specify the key ID or the Amazon Resource Name (ARN) of the CMK. To specify a CMK in a different AWS account, you must use the key ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
  }
  export interface GetKeyRotationStatusResponse {
    /**
     * A Boolean value that specifies whether key rotation is enabled.
     */
    KeyRotationEnabled?: BooleanType;
  }
  export interface GetParametersForImportRequest {
    /**
     * The identifier of the CMK into which you will import key material. The CMK's Origin must be EXTERNAL. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * The algorithm you will use to encrypt the key material before importing it with ImportKeyMaterial. For more information, see Encrypt the Key Material in the AWS Key Management Service Developer Guide.
     */
    WrappingAlgorithm: AlgorithmSpec;
    /**
     * The type of wrapping key (public key) to return in the response. Only 2048-bit RSA public keys are supported.
     */
    WrappingKeySpec: WrappingKeySpec;
  }
  export interface GetParametersForImportResponse {
    /**
     * The identifier of the CMK to use in a subsequent ImportKeyMaterial request. This is the same CMK specified in the GetParametersForImport request.
     */
    KeyId?: KeyIdType;
    /**
     * The import token to send in a subsequent ImportKeyMaterial request.
     */
    ImportToken?: CiphertextType;
    /**
     * The public key to use to encrypt the key material before importing it with ImportKeyMaterial.
     */
    PublicKey?: PlaintextType;
    /**
     * The time at which the import token and public key are no longer valid. After this time, you cannot use them to make an ImportKeyMaterial request and you must send another GetParametersForImport request to get new ones.
     */
    ParametersValidTo?: DateType;
  }
  export interface GrantConstraints {
    /**
     * A list of key-value pairs, all of which must be present in the encryption context of certain subsequent operations that the grant allows. When certain subsequent operations allowed by the grant include encryption context that matches this list or is a superset of this list, the grant allows the operation. Otherwise, the grant does not allow the operation.
     */
    EncryptionContextSubset?: EncryptionContextType;
    /**
     * A list of key-value pairs that must be present in the encryption context of certain subsequent operations that the grant allows. When certain subsequent operations allowed by the grant include encryption context that matches this list, the grant allows the operation. Otherwise, the grant does not allow the operation.
     */
    EncryptionContextEquals?: EncryptionContextType;
  }
  export type GrantIdType = string;
  export type GrantList = GrantListEntry[];
  export interface GrantListEntry {
    /**
     * The unique identifier for the customer master key (CMK) to which the grant applies.
     */
    KeyId?: KeyIdType;
    /**
     * The unique identifier for the grant.
     */
    GrantId?: GrantIdType;
    /**
     * The friendly name that identifies the grant. If a name was provided in the CreateGrant request, that name is returned. Otherwise this value is null.
     */
    Name?: GrantNameType;
    /**
     * The date and time when the grant was created.
     */
    CreationDate?: DateType;
    /**
     * The principal that receives the grant's permissions.
     */
    GranteePrincipal?: PrincipalIdType;
    /**
     * The principal that can retire the grant.
     */
    RetiringPrincipal?: PrincipalIdType;
    /**
     * The AWS account under which the grant was issued.
     */
    IssuingAccount?: PrincipalIdType;
    /**
     * The list of operations permitted by the grant.
     */
    Operations?: GrantOperationList;
    /**
     * A list of key-value pairs that must be present in the encryption context of certain subsequent operations that the grant allows.
     */
    Constraints?: GrantConstraints;
  }
  export type GrantNameType = string;
  export type GrantOperation = "Decrypt"|"Encrypt"|"GenerateDataKey"|"GenerateDataKeyWithoutPlaintext"|"ReEncryptFrom"|"ReEncryptTo"|"CreateGrant"|"RetireGrant"|"DescribeKey"|string;
  export type GrantOperationList = GrantOperation[];
  export type GrantTokenList = GrantTokenType[];
  export type GrantTokenType = string;
  export interface ImportKeyMaterialRequest {
    /**
     * The identifier of the CMK to import the key material into. The CMK's Origin must be EXTERNAL. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * The import token that you received in the response to a previous GetParametersForImport request. It must be from the same response that contained the public key that you used to encrypt the key material.
     */
    ImportToken: CiphertextType;
    /**
     * The encrypted key material to import. It must be encrypted with the public key that you received in the response to a previous GetParametersForImport request, using the wrapping algorithm that you specified in that request.
     */
    EncryptedKeyMaterial: CiphertextType;
    /**
     * The time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. You must omit this parameter when the ExpirationModel parameter is set to KEY_MATERIAL_DOES_NOT_EXPIRE. Otherwise it is required.
     */
    ValidTo?: DateType;
    /**
     * Specifies whether the key material expires. The default is KEY_MATERIAL_EXPIRES, in which case you must include the ValidTo parameter. When this parameter is set to KEY_MATERIAL_DOES_NOT_EXPIRE, you must omit the ValidTo parameter.
     */
    ExpirationModel?: ExpirationModelType;
  }
  export interface ImportKeyMaterialResponse {
  }
  export type KeyIdType = string;
  export type KeyList = KeyListEntry[];
  export interface KeyListEntry {
    /**
     * Unique identifier of the key.
     */
    KeyId?: KeyIdType;
    /**
     * ARN of the key.
     */
    KeyArn?: ArnType;
  }
  export type KeyManagerType = "AWS"|"CUSTOMER"|string;
  export interface KeyMetadata {
    /**
     * The twelve-digit account ID of the AWS account that owns the CMK.
     */
    AWSAccountId?: AWSAccountIdType;
    /**
     * The globally unique identifier for the CMK.
     */
    KeyId: KeyIdType;
    /**
     * The Amazon Resource Name (ARN) of the CMK. For examples, see AWS Key Management Service (AWS KMS) in the Example ARNs section of the AWS General Reference.
     */
    Arn?: ArnType;
    /**
     * The date and time when the CMK was created.
     */
    CreationDate?: DateType;
    /**
     * Specifies whether the CMK is enabled. When KeyState is Enabled this value is true, otherwise it is false.
     */
    Enabled?: BooleanType;
    /**
     * The description of the CMK.
     */
    Description?: DescriptionType;
    /**
     * The cryptographic operations for which you can use the CMK. Currently the only allowed value is ENCRYPT_DECRYPT, which means you can use the CMK for the Encrypt and Decrypt operations.
     */
    KeyUsage?: KeyUsageType;
    /**
     * The state of the CMK. For more information about how key state affects the use of a CMK, see How Key State Affects the Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
     */
    KeyState?: KeyState;
    /**
     * The date and time after which AWS KMS deletes the CMK. This value is present only when KeyState is PendingDeletion.
     */
    DeletionDate?: DateType;
    /**
     * The time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. This value is present only for CMKs whose Origin is EXTERNAL and whose ExpirationModel is KEY_MATERIAL_EXPIRES, otherwise this value is omitted.
     */
    ValidTo?: DateType;
    /**
     * The source of the CMK's key material. When this value is AWS_KMS, AWS KMS created the key material. When this value is EXTERNAL, the key material was imported from your existing key management infrastructure or the CMK lacks key material. When this value is AWS_CLOUDHSM, the key material was created in the AWS CloudHSM cluster associated with a custom key store.
     */
    Origin?: OriginType;
    /**
     * A unique identifier for the custom key store that contains the CMK. This value is present only when the CMK is created in a custom key store.
     */
    CustomKeyStoreId?: CustomKeyStoreIdType;
    /**
     * The cluster ID of the AWS CloudHSM cluster that contains the key material for the CMK. When you create a CMK in a custom key store, AWS KMS creates the key material for the CMK in the associated AWS CloudHSM cluster. This value is present only when the CMK is created in a custom key store.
     */
    CloudHsmClusterId?: CloudHsmClusterIdType;
    /**
     * Specifies whether the CMK's key material expires. This value is present only when Origin is EXTERNAL, otherwise this value is omitted.
     */
    ExpirationModel?: ExpirationModelType;
    /**
     * The CMK's manager. CMKs are either customer-managed or AWS-managed. For more information about the difference, see Customer Master Keys in the AWS Key Management Service Developer Guide.
     */
    KeyManager?: KeyManagerType;
  }
  export type KeyState = "Enabled"|"Disabled"|"PendingDeletion"|"PendingImport"|"Unavailable"|string;
  export type KeyStorePasswordType = string;
  export type KeyUsageType = "ENCRYPT_DECRYPT"|string;
  export type LimitType = number;
  export interface ListAliasesRequest {
    /**
     * Lists only aliases that refer to the specified CMK. The value of this parameter can be the ID or Amazon Resource Name (ARN) of a CMK in the caller's account and region. You cannot use an alias name or alias ARN in this value. This parameter is optional. If you omit it, ListAliases returns all aliases in the account and region.
     */
    KeyId?: KeyIdType;
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
  }
  export interface ListAliasesResponse {
    /**
     * A list of aliases.
     */
    Aliases?: AliasList;
    /**
     * When Truncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent request.
     */
    NextMarker?: MarkerType;
    /**
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the NextMarker element in this response to the Marker parameter in a subsequent request.
     */
    Truncated?: BooleanType;
  }
  export interface ListGrantsRequest {
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
    /**
     * A unique identifier for the customer master key (CMK). Specify the key ID or the Amazon Resource Name (ARN) of the CMK. To specify a CMK in a different AWS account, you must use the key ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
  }
  export interface ListGrantsResponse {
    /**
     * A list of grants.
     */
    Grants?: GrantList;
    /**
     * When Truncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent request.
     */
    NextMarker?: MarkerType;
    /**
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the NextMarker element in this response to the Marker parameter in a subsequent request.
     */
    Truncated?: BooleanType;
  }
  export interface ListKeyPoliciesRequest {
    /**
     * A unique identifier for the customer master key (CMK). Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 1000, inclusive. If you do not include a value, it defaults to 100. Currently only 1 policy can be attached to a key.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
  }
  export interface ListKeyPoliciesResponse {
    /**
     * A list of key policy names. Currently, there is only one key policy per CMK and it is always named default.
     */
    PolicyNames?: PolicyNameList;
    /**
     * When Truncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent request.
     */
    NextMarker?: MarkerType;
    /**
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the NextMarker element in this response to the Marker parameter in a subsequent request.
     */
    Truncated?: BooleanType;
  }
  export interface ListKeysRequest {
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 1000, inclusive. If you do not include a value, it defaults to 100.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
  }
  export interface ListKeysResponse {
    /**
     * A list of customer master keys (CMKs).
     */
    Keys?: KeyList;
    /**
     * When Truncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent request.
     */
    NextMarker?: MarkerType;
    /**
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the NextMarker element in this response to the Marker parameter in a subsequent request.
     */
    Truncated?: BooleanType;
  }
  export interface ListResourceTagsRequest {
    /**
     * A unique identifier for the customer master key (CMK). Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 50, inclusive. If you do not include a value, it defaults to 50.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received. Do not attempt to construct this value. Use only the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
  }
  export interface ListResourceTagsResponse {
    /**
     * A list of tags. Each tag consists of a tag key and a tag value.
     */
    Tags?: TagList;
    /**
     * When Truncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent request. Do not assume or infer any information from this value.
     */
    NextMarker?: MarkerType;
    /**
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the NextMarker element in this response to the Marker parameter in a subsequent request.
     */
    Truncated?: BooleanType;
  }
  export interface ListRetirableGrantsRequest {
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
    /**
     * The retiring principal for which to list grants. To specify the retiring principal, use the Amazon Resource Name (ARN) of an AWS principal. Valid AWS principals include AWS accounts (root), IAM users, federated users, and assumed role users. For examples of the ARN syntax for specifying a principal, see AWS Identity and Access Management (IAM) in the Example ARNs section of the Amazon Web Services General Reference.
     */
    RetiringPrincipal: PrincipalIdType;
  }
  export type MarkerType = string;
  export type NumberOfBytesType = number;
  export type OriginType = "AWS_KMS"|"EXTERNAL"|"AWS_CLOUDHSM"|string;
  export type PendingWindowInDaysType = number;
  export type PlaintextType = Buffer|Uint8Array|Blob|string;
  export type PolicyNameList = PolicyNameType[];
  export type PolicyNameType = string;
  export type PolicyType = string;
  export type PrincipalIdType = string;
  export interface PutKeyPolicyRequest {
    /**
     * A unique identifier for the customer master key (CMK). Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * The name of the key policy. The only valid value is default.
     */
    PolicyName: PolicyNameType;
    /**
     * The key policy to attach to the CMK. The key policy must meet the following criteria:   If you don't set BypassPolicyLockoutSafetyCheck to true, the key policy must allow the principal that is making the PutKeyPolicy request to make a subsequent PutKeyPolicy request on the CMK. This reduces the risk that the CMK becomes unmanageable. For more information, refer to the scenario in the Default Key Policy section of the AWS Key Management Service Developer Guide.   Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to AWS KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to AWS KMS. For more information, see Changes that I make are not always immediately visible in the AWS Identity and Access Management User Guide.   The key policy size limit is 32 kilobytes (32768 bytes).
     */
    Policy: PolicyType;
    /**
     * A flag to indicate whether to bypass the key policy lockout safety check.  Setting this value to true increases the risk that the CMK becomes unmanageable. Do not set this value to true indiscriminately. For more information, refer to the scenario in the Default Key Policy section in the AWS Key Management Service Developer Guide.  Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the CMK. The default value is false.
     */
    BypassPolicyLockoutSafetyCheck?: BooleanType;
  }
  export interface ReEncryptRequest {
    /**
     * Ciphertext of the data to reencrypt.
     */
    CiphertextBlob: CiphertextType;
    /**
     * Encryption context used to encrypt and decrypt the data specified in the CiphertextBlob parameter.
     */
    SourceEncryptionContext?: EncryptionContextType;
    /**
     * A unique identifier for the CMK that is used to reencrypt the data. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a CMK in a different AWS account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    DestinationKeyId: KeyIdType;
    /**
     * Encryption context to use when the data is reencrypted.
     */
    DestinationEncryptionContext?: EncryptionContextType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface ReEncryptResponse {
    /**
     * The reencrypted data. When you use the HTTP API or the AWS CLI, the value is Base64-encdoded. Otherwise, it is not encoded.
     */
    CiphertextBlob?: CiphertextType;
    /**
     * Unique identifier of the CMK used to originally encrypt the data.
     */
    SourceKeyId?: KeyIdType;
    /**
     * Unique identifier of the CMK used to reencrypt the data.
     */
    KeyId?: KeyIdType;
  }
  export interface RetireGrantRequest {
    /**
     * Token that identifies the grant to be retired.
     */
    GrantToken?: GrantTokenType;
    /**
     * The Amazon Resource Name (ARN) of the CMK associated with the grant.  For example: arn:aws:kms:us-east-2:444455556666:key/1234abcd-12ab-34cd-56ef-1234567890ab 
     */
    KeyId?: KeyIdType;
    /**
     * Unique identifier of the grant to retire. The grant ID is returned in the response to a CreateGrant operation.   Grant ID Example - 0123456789012345678901234567890123456789012345678901234567890123  
     */
    GrantId?: GrantIdType;
  }
  export interface RevokeGrantRequest {
    /**
     * A unique identifier for the customer master key associated with the grant. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. To specify a CMK in a different AWS account, you must use the key ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * Identifier of the grant to be revoked.
     */
    GrantId: GrantIdType;
  }
  export interface ScheduleKeyDeletionRequest {
    /**
     * The unique identifier of the customer master key (CMK) to delete. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * The waiting period, specified in number of days. After the waiting period ends, AWS KMS deletes the customer master key (CMK). This value is optional. If you include a value, it must be between 7 and 30, inclusive. If you do not include a value, it defaults to 30.
     */
    PendingWindowInDays?: PendingWindowInDaysType;
  }
  export interface ScheduleKeyDeletionResponse {
    /**
     * The unique identifier of the customer master key (CMK) for which deletion is scheduled.
     */
    KeyId?: KeyIdType;
    /**
     * The date and time after which AWS KMS deletes the customer master key (CMK).
     */
    DeletionDate?: DateType;
  }
  export interface Tag {
    /**
     * The key of the tag.
     */
    TagKey: TagKeyType;
    /**
     * The value of the tag.
     */
    TagValue: TagValueType;
  }
  export type TagKeyList = TagKeyType[];
  export type TagKeyType = string;
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * A unique identifier for the CMK you are tagging. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * One or more tags. Each tag consists of a tag key and a tag value.
     */
    Tags: TagList;
  }
  export type TagValueType = string;
  export type TrustAnchorCertificateType = string;
  export interface UntagResourceRequest {
    /**
     * A unique identifier for the CMK from which you are removing tags. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * One or more tag keys. Specify only the tag keys, not the tag values.
     */
    TagKeys: TagKeyList;
  }
  export interface UpdateAliasRequest {
    /**
     * String that contains the name of the alias to be modified. The name must start with the word "alias" followed by a forward slash (alias/). Aliases that begin with "alias/aws" are reserved.
     */
    AliasName: AliasNameType;
    /**
     * Unique identifier of the customer master key to be mapped to the alias. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To verify that the alias is mapped to the correct CMK, use ListAliases.
     */
    TargetKeyId: KeyIdType;
  }
  export interface UpdateCustomKeyStoreRequest {
    /**
     * Identifies the custom key store that you want to update. Enter the ID of the custom key store. To find the ID of a custom key store, use the DescribeCustomKeyStores operation.
     */
    CustomKeyStoreId: CustomKeyStoreIdType;
    /**
     * Changes the friendly name of the custom key store to the value that you specify. The custom key store name must be unique in the AWS account.
     */
    NewCustomKeyStoreName?: CustomKeyStoreNameType;
    /**
     * Enter the current password of the kmsuser crypto user (CU) in the AWS CloudHSM cluster that is associated with the custom key store. This parameter tells AWS KMS the current password of the kmsuser crypto user (CU). It does not set or change the password of any users in the AWS CloudHSM cluster.
     */
    KeyStorePassword?: KeyStorePasswordType;
    /**
     * Associates the custom key store with a related AWS CloudHSM cluster.  Enter the cluster ID of the cluster that you used to create the custom key store or a cluster that shares a backup history with the original cluster. You cannot use this parameter to associate a custom key store with a different cluster. Clusters that share a backup history have the same cluster certificate. To view the cluster certificate of a cluster, use the DescribeClusters operation.
     */
    CloudHsmClusterId?: CloudHsmClusterIdType;
  }
  export interface UpdateCustomKeyStoreResponse {
  }
  export interface UpdateKeyDescriptionRequest {
    /**
     * A unique identifier for the customer master key (CMK). Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * New description for the CMK.
     */
    Description: DescriptionType;
  }
  export type WrappingKeySpec = "RSA_2048"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-11-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the KMS client.
   */
  export import Types = KMS;
}
export = KMS;
