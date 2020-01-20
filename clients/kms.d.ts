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
   * Cancels the deletion of a customer master key (CMK). When this operation succeeds, the key state of the CMK is Disabled. To enable the CMK, use EnableKey. You cannot perform this operation on a CMK in a different AWS account. For more information about scheduling and canceling deletion of a CMK, see Deleting Customer Master Keys in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  cancelKeyDeletion(params: KMS.Types.CancelKeyDeletionRequest, callback?: (err: AWSError, data: KMS.Types.CancelKeyDeletionResponse) => void): Request<KMS.Types.CancelKeyDeletionResponse, AWSError>;
  /**
   * Cancels the deletion of a customer master key (CMK). When this operation succeeds, the key state of the CMK is Disabled. To enable the CMK, use EnableKey. You cannot perform this operation on a CMK in a different AWS account. For more information about scheduling and canceling deletion of a CMK, see Deleting Customer Master Keys in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  cancelKeyDeletion(callback?: (err: AWSError, data: KMS.Types.CancelKeyDeletionResponse) => void): Request<KMS.Types.CancelKeyDeletionResponse, AWSError>;
  /**
   * Connects or reconnects a custom key store to its associated AWS CloudHSM cluster. The custom key store must be connected before you can create customer master keys (CMKs) in the key store or use the CMKs it contains. You can disconnect and reconnect a custom key store at any time. To connect a custom key store, its associated AWS CloudHSM cluster must have at least one active HSM. To get the number of active HSMs in a cluster, use the DescribeClusters operation. To add HSMs to the cluster, use the CreateHsm operation. Also, the  kmsuser crypto user (CU) must not be logged into the cluster. This prevents AWS KMS from using this account to log in. The connection process can take an extended amount of time to complete; up to 20 minutes. This operation starts the connection process, but it does not wait for it to complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON object with no properties. However, this response does not indicate that the custom key store is connected. To get the connection state of the custom key store, use the DescribeCustomKeyStores operation. During the connection process, AWS KMS finds the AWS CloudHSM cluster that is associated with the custom key store, creates the connection infrastructure, connects to the cluster, logs into the AWS CloudHSM client as the kmsuser CU, and rotates its password. The ConnectCustomKeyStore operation might fail for various reasons. To find the reason, use the DescribeCustomKeyStores operation and see the ConnectionErrorCode in the response. For help interpreting the ConnectionErrorCode, see CustomKeyStoresListEntry. To fix the failure, use the DisconnectCustomKeyStore operation to disconnect the custom key store, correct the error, use the UpdateCustomKeyStore operation if necessary, and then use ConnectCustomKeyStore again. If you are having trouble connecting or disconnecting a custom key store, see Troubleshooting a Custom Key Store in the AWS Key Management Service Developer Guide.
   */
  connectCustomKeyStore(params: KMS.Types.ConnectCustomKeyStoreRequest, callback?: (err: AWSError, data: KMS.Types.ConnectCustomKeyStoreResponse) => void): Request<KMS.Types.ConnectCustomKeyStoreResponse, AWSError>;
  /**
   * Connects or reconnects a custom key store to its associated AWS CloudHSM cluster. The custom key store must be connected before you can create customer master keys (CMKs) in the key store or use the CMKs it contains. You can disconnect and reconnect a custom key store at any time. To connect a custom key store, its associated AWS CloudHSM cluster must have at least one active HSM. To get the number of active HSMs in a cluster, use the DescribeClusters operation. To add HSMs to the cluster, use the CreateHsm operation. Also, the  kmsuser crypto user (CU) must not be logged into the cluster. This prevents AWS KMS from using this account to log in. The connection process can take an extended amount of time to complete; up to 20 minutes. This operation starts the connection process, but it does not wait for it to complete. When it succeeds, this operation quickly returns an HTTP 200 response and a JSON object with no properties. However, this response does not indicate that the custom key store is connected. To get the connection state of the custom key store, use the DescribeCustomKeyStores operation. During the connection process, AWS KMS finds the AWS CloudHSM cluster that is associated with the custom key store, creates the connection infrastructure, connects to the cluster, logs into the AWS CloudHSM client as the kmsuser CU, and rotates its password. The ConnectCustomKeyStore operation might fail for various reasons. To find the reason, use the DescribeCustomKeyStores operation and see the ConnectionErrorCode in the response. For help interpreting the ConnectionErrorCode, see CustomKeyStoresListEntry. To fix the failure, use the DisconnectCustomKeyStore operation to disconnect the custom key store, correct the error, use the UpdateCustomKeyStore operation if necessary, and then use ConnectCustomKeyStore again. If you are having trouble connecting or disconnecting a custom key store, see Troubleshooting a Custom Key Store in the AWS Key Management Service Developer Guide.
   */
  connectCustomKeyStore(callback?: (err: AWSError, data: KMS.Types.ConnectCustomKeyStoreResponse) => void): Request<KMS.Types.ConnectCustomKeyStoreResponse, AWSError>;
  /**
   * Creates a display name for a customer managed customer master key (CMK). You can use an alias to identify a CMK in cryptographic operations, such as Encrypt and GenerateDataKey. You can change the CMK associated with the alias at any time. Aliases are easier to remember than key IDs. They can also help to simplify your applications. For example, if you use an alias in your code, you can change the CMK your code uses by associating a given alias with a different CMK.  To run the same code in multiple AWS regions, use an alias in your code, such as alias/ApplicationKey. Then, in each AWS Region, create an alias/ApplicationKey alias that is associated with a CMK in that Region. When you run your code, it uses the alias/ApplicationKey CMK for that AWS Region without any Region-specific code. This operation does not return a response. To get the alias that you created, use the ListAliases operation. To use aliases successfully, be aware of the following information.   Each alias points to only one CMK at a time, although a single CMK can have multiple aliases. The alias and its associated CMK must be in the same AWS account and Region.    You can associate an alias with any customer managed CMK in the same AWS account and Region. However, you do not have permission to associate an alias with an AWS managed CMK or an AWS owned CMK.    To change the CMK associated with an alias, use the UpdateAlias operation. The current CMK and the new CMK must be the same type (both symmetric or both asymmetric) and they must have the same key usage (ENCRYPT_DECRYPT or SIGN_VERIFY). This restriction prevents cryptographic errors in code that uses aliases.   The alias name must begin with alias/ followed by a name, such as alias/ExampleAlias. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). The alias name cannot begin with alias/aws/. The alias/aws/ prefix is reserved for AWS managed CMKs.    The alias name must be unique within an AWS Region. However, you can use the same alias name in multiple Regions of the same AWS account. Each instance of the alias is associated with a CMK in its Region.   After you create an alias, you cannot change its alias name. However, you can use the DeleteAlias operation to delete the alias and then create a new alias with the desired name.   You can use an alias name or alias ARN to identify a CMK in AWS KMS cryptographic operations and in the DescribeKey operation. However, you cannot use alias names or alias ARNs in API operations that manage CMKs, such as DisableKey or GetKeyPolicy. For information about the valid CMK identifiers for each AWS KMS API operation, see the descriptions of the KeyId parameter in the API operation documentation.   Because an alias is not a property of a CMK, you can delete and change the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases and alias ARNs of CMKs in each AWS account and Region, use the ListAliases operation. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  createAlias(params: KMS.Types.CreateAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a display name for a customer managed customer master key (CMK). You can use an alias to identify a CMK in cryptographic operations, such as Encrypt and GenerateDataKey. You can change the CMK associated with the alias at any time. Aliases are easier to remember than key IDs. They can also help to simplify your applications. For example, if you use an alias in your code, you can change the CMK your code uses by associating a given alias with a different CMK.  To run the same code in multiple AWS regions, use an alias in your code, such as alias/ApplicationKey. Then, in each AWS Region, create an alias/ApplicationKey alias that is associated with a CMK in that Region. When you run your code, it uses the alias/ApplicationKey CMK for that AWS Region without any Region-specific code. This operation does not return a response. To get the alias that you created, use the ListAliases operation. To use aliases successfully, be aware of the following information.   Each alias points to only one CMK at a time, although a single CMK can have multiple aliases. The alias and its associated CMK must be in the same AWS account and Region.    You can associate an alias with any customer managed CMK in the same AWS account and Region. However, you do not have permission to associate an alias with an AWS managed CMK or an AWS owned CMK.    To change the CMK associated with an alias, use the UpdateAlias operation. The current CMK and the new CMK must be the same type (both symmetric or both asymmetric) and they must have the same key usage (ENCRYPT_DECRYPT or SIGN_VERIFY). This restriction prevents cryptographic errors in code that uses aliases.   The alias name must begin with alias/ followed by a name, such as alias/ExampleAlias. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-). The alias name cannot begin with alias/aws/. The alias/aws/ prefix is reserved for AWS managed CMKs.    The alias name must be unique within an AWS Region. However, you can use the same alias name in multiple Regions of the same AWS account. Each instance of the alias is associated with a CMK in its Region.   After you create an alias, you cannot change its alias name. However, you can use the DeleteAlias operation to delete the alias and then create a new alias with the desired name.   You can use an alias name or alias ARN to identify a CMK in AWS KMS cryptographic operations and in the DescribeKey operation. However, you cannot use alias names or alias ARNs in API operations that manage CMKs, such as DisableKey or GetKeyPolicy. For information about the valid CMK identifiers for each AWS KMS API operation, see the descriptions of the KeyId parameter in the API operation documentation.   Because an alias is not a property of a CMK, you can delete and change the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases and alias ARNs of CMKs in each AWS account and Region, use the ListAliases operation. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  createAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a custom key store that is associated with an AWS CloudHSM cluster that you own and manage. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store. Before you create the custom key store, you must assemble the required elements, including an AWS CloudHSM cluster that fulfills the requirements for a custom key store. For details about the required elements, see Assemble the Prerequisites in the AWS Key Management Service Developer Guide. When the operation completes successfully, it returns the ID of the new custom key store. Before you can use your new custom key store, you need to use the ConnectCustomKeyStore operation to connect the new key store to its AWS CloudHSM cluster. Even if you are not going to use your custom key store immediately, you might want to connect it to verify that all settings are correct and then disconnect it until you are ready to use it. For help with failures, see Troubleshooting a Custom Key Store in the AWS Key Management Service Developer Guide.
   */
  createCustomKeyStore(params: KMS.Types.CreateCustomKeyStoreRequest, callback?: (err: AWSError, data: KMS.Types.CreateCustomKeyStoreResponse) => void): Request<KMS.Types.CreateCustomKeyStoreResponse, AWSError>;
  /**
   * Creates a custom key store that is associated with an AWS CloudHSM cluster that you own and manage. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store. Before you create the custom key store, you must assemble the required elements, including an AWS CloudHSM cluster that fulfills the requirements for a custom key store. For details about the required elements, see Assemble the Prerequisites in the AWS Key Management Service Developer Guide. When the operation completes successfully, it returns the ID of the new custom key store. Before you can use your new custom key store, you need to use the ConnectCustomKeyStore operation to connect the new key store to its AWS CloudHSM cluster. Even if you are not going to use your custom key store immediately, you might want to connect it to verify that all settings are correct and then disconnect it until you are ready to use it. For help with failures, see Troubleshooting a Custom Key Store in the AWS Key Management Service Developer Guide.
   */
  createCustomKeyStore(callback?: (err: AWSError, data: KMS.Types.CreateCustomKeyStoreResponse) => void): Request<KMS.Types.CreateCustomKeyStoreResponse, AWSError>;
  /**
   * Adds a grant to a customer master key (CMK). The grant allows the grantee principal to use the CMK when the conditions specified in the grant are met. When setting permissions, grants are an alternative to key policies.  To create a grant that allows a cryptographic operation only when the request includes a particular encryption context, use the Constraints parameter. For details, see GrantConstraints. You can create grants on symmetric and asymmetric CMKs. However, if the grant allows an operation that the CMK does not support, CreateGrant fails with a ValidationException.    Grants for symmetric CMKs cannot allow operations that are not supported for symmetric CMKs, including Sign, Verify, and GetPublicKey. (There are limited exceptions to this rule for legacy operations, but you should not create a grant for an operation that AWS KMS does not support.)   Grants for asymmetric CMKs cannot allow operations that are not supported for asymmetric CMKs, including operations that generate data keys or data key pairs, or operations related to automatic key rotation, imported key material, or CMKs in custom key stores.   Grants for asymmetric CMKs with a KeyUsage of ENCRYPT_DECRYPT cannot allow the Sign or Verify operations. Grants for asymmetric CMKs with a KeyUsage of SIGN_VERIFY cannot allow the Encrypt or Decrypt operations.   Grants for asymmetric CMKs cannot include an encryption context grant constraint. An encryption context is not supported on asymmetric CMKs.   For information about symmetric and asymmetric CMKs, see Using Symmetric and Asymmetric CMKs in the AWS Key Management Service Developer Guide. To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the KeyId parameter. For more information about grants, see Grants in the  AWS Key Management Service Developer Guide . The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  createGrant(params: KMS.Types.CreateGrantRequest, callback?: (err: AWSError, data: KMS.Types.CreateGrantResponse) => void): Request<KMS.Types.CreateGrantResponse, AWSError>;
  /**
   * Adds a grant to a customer master key (CMK). The grant allows the grantee principal to use the CMK when the conditions specified in the grant are met. When setting permissions, grants are an alternative to key policies.  To create a grant that allows a cryptographic operation only when the request includes a particular encryption context, use the Constraints parameter. For details, see GrantConstraints. You can create grants on symmetric and asymmetric CMKs. However, if the grant allows an operation that the CMK does not support, CreateGrant fails with a ValidationException.    Grants for symmetric CMKs cannot allow operations that are not supported for symmetric CMKs, including Sign, Verify, and GetPublicKey. (There are limited exceptions to this rule for legacy operations, but you should not create a grant for an operation that AWS KMS does not support.)   Grants for asymmetric CMKs cannot allow operations that are not supported for asymmetric CMKs, including operations that generate data keys or data key pairs, or operations related to automatic key rotation, imported key material, or CMKs in custom key stores.   Grants for asymmetric CMKs with a KeyUsage of ENCRYPT_DECRYPT cannot allow the Sign or Verify operations. Grants for asymmetric CMKs with a KeyUsage of SIGN_VERIFY cannot allow the Encrypt or Decrypt operations.   Grants for asymmetric CMKs cannot include an encryption context grant constraint. An encryption context is not supported on asymmetric CMKs.   For information about symmetric and asymmetric CMKs, see Using Symmetric and Asymmetric CMKs in the AWS Key Management Service Developer Guide. To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the KeyId parameter. For more information about grants, see Grants in the  AWS Key Management Service Developer Guide . The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  createGrant(callback?: (err: AWSError, data: KMS.Types.CreateGrantResponse) => void): Request<KMS.Types.CreateGrantResponse, AWSError>;
  /**
   * Creates a unique customer managed customer master key (CMK) in your AWS account and Region. You cannot use this operation to create a CMK in a different AWS account. You can use the CreateKey operation to create symmetric or asymmetric CMKs.    Symmetric CMKs contain a 256-bit symmetric key that never leaves AWS KMS unencrypted. To use the CMK, you must call AWS KMS. You can use a symmetric CMK to encrypt and decrypt small amounts of data, but they are typically used to generate data keys and data keys pairs. For details, see GenerateDataKey and GenerateDataKeyPair.    Asymmetric CMKs can contain an RSA key pair or an Elliptic Curve (ECC) key pair. The private key in an asymmetric CMK never leaves AWS KMS unencrypted. However, you can use the GetPublicKey operation to download the public key so it can be used outside of AWS KMS. CMKs with RSA key pairs can be used to encrypt or decrypt data or sign and verify messages (but not both). CMKs with ECC key pairs can be used only to sign and verify messages.   For information about symmetric and asymmetric CMKs, see Using Symmetric and Asymmetric CMKs in the AWS Key Management Service Developer Guide. To create different types of CMKs, use the following guidance:  Asymmetric CMKs  To create an asymmetric CMK, use the CustomerMasterKeySpec parameter to specify the type of key material in the CMK. Then, use the KeyUsage parameter to determine whether the CMK will be used to encrypt and decrypt or sign and verify. You can't change these properties after the CMK is created.    Symmetric CMKs  When creating a symmetric CMK, you don't need to specify the CustomerMasterKeySpec or KeyUsage parameters. The default value for CustomerMasterKeySpec, SYMMETRIC_DEFAULT, and the default value for KeyUsage, ENCRYPT_DECRYPT, are the only valid values for symmetric CMKs.     Imported Key Material  To import your own key material, begin by creating a symmetric CMK with no key material. To do this, use the Origin parameter of CreateKey with a value of EXTERNAL. Next, use GetParametersForImport operation to get a public key and import token, and use the public key to encrypt your key material. Then, use ImportKeyMaterial with your import token to import the key material. For step-by-step instructions, see Importing Key Material in the  AWS Key Management Service Developer Guide . You cannot import the key material into an asymmetric CMK.    Custom Key Stores  To create a symmetric CMK in a custom key store, use the CustomKeyStoreId parameter to specify the custom key store. You must also use the Origin parameter with a value of AWS_CLOUDHSM. The AWS CloudHSM cluster that is associated with the custom key store must have at least two active HSMs in different Availability Zones in the AWS Region.  You cannot create an asymmetric CMK in a custom key store. For information about custom key stores in AWS KMS see Using Custom Key Stores in the  AWS Key Management Service Developer Guide .  
   */
  createKey(params: KMS.Types.CreateKeyRequest, callback?: (err: AWSError, data: KMS.Types.CreateKeyResponse) => void): Request<KMS.Types.CreateKeyResponse, AWSError>;
  /**
   * Creates a unique customer managed customer master key (CMK) in your AWS account and Region. You cannot use this operation to create a CMK in a different AWS account. You can use the CreateKey operation to create symmetric or asymmetric CMKs.    Symmetric CMKs contain a 256-bit symmetric key that never leaves AWS KMS unencrypted. To use the CMK, you must call AWS KMS. You can use a symmetric CMK to encrypt and decrypt small amounts of data, but they are typically used to generate data keys and data keys pairs. For details, see GenerateDataKey and GenerateDataKeyPair.    Asymmetric CMKs can contain an RSA key pair or an Elliptic Curve (ECC) key pair. The private key in an asymmetric CMK never leaves AWS KMS unencrypted. However, you can use the GetPublicKey operation to download the public key so it can be used outside of AWS KMS. CMKs with RSA key pairs can be used to encrypt or decrypt data or sign and verify messages (but not both). CMKs with ECC key pairs can be used only to sign and verify messages.   For information about symmetric and asymmetric CMKs, see Using Symmetric and Asymmetric CMKs in the AWS Key Management Service Developer Guide. To create different types of CMKs, use the following guidance:  Asymmetric CMKs  To create an asymmetric CMK, use the CustomerMasterKeySpec parameter to specify the type of key material in the CMK. Then, use the KeyUsage parameter to determine whether the CMK will be used to encrypt and decrypt or sign and verify. You can't change these properties after the CMK is created.    Symmetric CMKs  When creating a symmetric CMK, you don't need to specify the CustomerMasterKeySpec or KeyUsage parameters. The default value for CustomerMasterKeySpec, SYMMETRIC_DEFAULT, and the default value for KeyUsage, ENCRYPT_DECRYPT, are the only valid values for symmetric CMKs.     Imported Key Material  To import your own key material, begin by creating a symmetric CMK with no key material. To do this, use the Origin parameter of CreateKey with a value of EXTERNAL. Next, use GetParametersForImport operation to get a public key and import token, and use the public key to encrypt your key material. Then, use ImportKeyMaterial with your import token to import the key material. For step-by-step instructions, see Importing Key Material in the  AWS Key Management Service Developer Guide . You cannot import the key material into an asymmetric CMK.    Custom Key Stores  To create a symmetric CMK in a custom key store, use the CustomKeyStoreId parameter to specify the custom key store. You must also use the Origin parameter with a value of AWS_CLOUDHSM. The AWS CloudHSM cluster that is associated with the custom key store must have at least two active HSMs in different Availability Zones in the AWS Region.  You cannot create an asymmetric CMK in a custom key store. For information about custom key stores in AWS KMS see Using Custom Key Stores in the  AWS Key Management Service Developer Guide .  
   */
  createKey(callback?: (err: AWSError, data: KMS.Types.CreateKeyResponse) => void): Request<KMS.Types.CreateKeyResponse, AWSError>;
  /**
   * Decrypts ciphertext that was encrypted by a AWS KMS customer master key (CMK) using any of the following operations:    Encrypt     GenerateDataKey     GenerateDataKeyPair     GenerateDataKeyWithoutPlaintext     GenerateDataKeyPairWithoutPlaintext    You can use this operation to decrypt ciphertext that was encrypted under a symmetric or asymmetric CMK. When the CMK is asymmetric, you must specify the CMK and the encryption algorithm that was used to encrypt the ciphertext. For information about symmetric and asymmetric CMKs, see Using Symmetric and Asymmetric CMKs in the AWS Key Management Service Developer Guide. The Decrypt operation also decrypts ciphertext that was encrypted outside of AWS KMS by the public key in an AWS KMS asymmetric CMK. However, it cannot decrypt ciphertext produced by other libraries, such as the AWS Encryption SDK or Amazon S3 client-side encryption. These libraries return a ciphertext format that is incompatible with AWS KMS. If the ciphertext was encrypted under a symmetric CMK, you do not need to specify the CMK or the encryption algorithm. AWS KMS can get this information from metadata that it adds to the symmetric ciphertext blob. However, if you prefer, you can specify the KeyId to ensure that a particular CMK is used to decrypt the ciphertext. If you specify a different CMK than the one used to encrypt the ciphertext, the Decrypt operation fails. Whenever possible, use key policies to give users permission to call the Decrypt operation on a particular CMK, instead of using IAM policies. Otherwise, you might create an IAM user policy that gives the user Decrypt permission on all CMKs. This user could decrypt ciphertext that was encrypted by CMKs in other accounts if the key policy for the cross-account CMK permits it. If you must use an IAM policy for Decrypt permissions, limit the user to particular CMKs or particular trusted accounts. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  decrypt(params: KMS.Types.DecryptRequest, callback?: (err: AWSError, data: KMS.Types.DecryptResponse) => void): Request<KMS.Types.DecryptResponse, AWSError>;
  /**
   * Decrypts ciphertext that was encrypted by a AWS KMS customer master key (CMK) using any of the following operations:    Encrypt     GenerateDataKey     GenerateDataKeyPair     GenerateDataKeyWithoutPlaintext     GenerateDataKeyPairWithoutPlaintext    You can use this operation to decrypt ciphertext that was encrypted under a symmetric or asymmetric CMK. When the CMK is asymmetric, you must specify the CMK and the encryption algorithm that was used to encrypt the ciphertext. For information about symmetric and asymmetric CMKs, see Using Symmetric and Asymmetric CMKs in the AWS Key Management Service Developer Guide. The Decrypt operation also decrypts ciphertext that was encrypted outside of AWS KMS by the public key in an AWS KMS asymmetric CMK. However, it cannot decrypt ciphertext produced by other libraries, such as the AWS Encryption SDK or Amazon S3 client-side encryption. These libraries return a ciphertext format that is incompatible with AWS KMS. If the ciphertext was encrypted under a symmetric CMK, you do not need to specify the CMK or the encryption algorithm. AWS KMS can get this information from metadata that it adds to the symmetric ciphertext blob. However, if you prefer, you can specify the KeyId to ensure that a particular CMK is used to decrypt the ciphertext. If you specify a different CMK than the one used to encrypt the ciphertext, the Decrypt operation fails. Whenever possible, use key policies to give users permission to call the Decrypt operation on a particular CMK, instead of using IAM policies. Otherwise, you might create an IAM user policy that gives the user Decrypt permission on all CMKs. This user could decrypt ciphertext that was encrypted by CMKs in other accounts if the key policy for the cross-account CMK permits it. If you must use an IAM policy for Decrypt permissions, limit the user to particular CMKs or particular trusted accounts. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
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
   * Deletes key material that you previously imported. This operation makes the specified customer master key (CMK) unusable. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. You cannot perform this operation on a CMK in a different AWS account. When the specified CMK is in the PendingDeletion state, this operation does not change the CMK's state. Otherwise, it changes the CMK's state to PendingImport. After you delete key material, you can use ImportKeyMaterial to reimport the same key material into the CMK. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  deleteImportedKeyMaterial(params: KMS.Types.DeleteImportedKeyMaterialRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes key material that you previously imported. This operation makes the specified customer master key (CMK) unusable. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. You cannot perform this operation on a CMK in a different AWS account. When the specified CMK is in the PendingDeletion state, this operation does not change the CMK's state. Otherwise, it changes the CMK's state to PendingImport. After you delete key material, you can use ImportKeyMaterial to reimport the same key material into the CMK. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
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
   * Provides detailed information about a customer master key (CMK). You can run DescribeKey on a customer managed CMK or an AWS managed CMK. This detailed information includes the key ARN, creation date (and deletion date, if applicable), the key state, and the origin and expiration date (if any) of the key material. For CMKs in custom key stores, it includes information about the custom key store, such as the key store ID and the AWS CloudHSM cluster ID. It includes fields, like KeySpec, that help you distinguish symmetric from asymmetric CMKs. It also provides information that is particularly important to asymmetric CMKs, such as the key usage (encryption or signing) and the encryption algorithms or signing algorithms that the CMK supports.  DescribeKey does not return the following information:   Aliases associated with the CMK. To get this information, use ListAliases.   Whether automatic key rotation is enabled on the CMK. To get this information, use GetKeyRotationStatus. Also, some key states prevent a CMK from being automatically rotated. For details, see How Automatic Key Rotation Works in AWS Key Management Service Developer Guide.   Tags on the CMK. To get this information, use ListResourceTags.   Key policies and grants on the CMK. To get this information, use GetKeyPolicy and ListGrants.   If you call the DescribeKey operation on a predefined AWS alias, that is, an AWS alias with no key ID, AWS KMS creates an AWS managed CMK. Then, it associates the alias with the new CMK, and returns the KeyId and Arn of the new CMK in the response. To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter.
   */
  describeKey(params: KMS.Types.DescribeKeyRequest, callback?: (err: AWSError, data: KMS.Types.DescribeKeyResponse) => void): Request<KMS.Types.DescribeKeyResponse, AWSError>;
  /**
   * Provides detailed information about a customer master key (CMK). You can run DescribeKey on a customer managed CMK or an AWS managed CMK. This detailed information includes the key ARN, creation date (and deletion date, if applicable), the key state, and the origin and expiration date (if any) of the key material. For CMKs in custom key stores, it includes information about the custom key store, such as the key store ID and the AWS CloudHSM cluster ID. It includes fields, like KeySpec, that help you distinguish symmetric from asymmetric CMKs. It also provides information that is particularly important to asymmetric CMKs, such as the key usage (encryption or signing) and the encryption algorithms or signing algorithms that the CMK supports.  DescribeKey does not return the following information:   Aliases associated with the CMK. To get this information, use ListAliases.   Whether automatic key rotation is enabled on the CMK. To get this information, use GetKeyRotationStatus. Also, some key states prevent a CMK from being automatically rotated. For details, see How Automatic Key Rotation Works in AWS Key Management Service Developer Guide.   Tags on the CMK. To get this information, use ListResourceTags.   Key policies and grants on the CMK. To get this information, use GetKeyPolicy and ListGrants.   If you call the DescribeKey operation on a predefined AWS alias, that is, an AWS alias with no key ID, AWS KMS creates an AWS managed CMK. Then, it associates the alias with the new CMK, and returns the KeyId and Arn of the new CMK in the response. To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter.
   */
  describeKey(callback?: (err: AWSError, data: KMS.Types.DescribeKeyResponse) => void): Request<KMS.Types.DescribeKeyResponse, AWSError>;
  /**
   * Sets the state of a customer master key (CMK) to disabled, thereby preventing its use for cryptographic operations. You cannot perform this operation on a CMK in a different AWS account. For more information about how key state affects the use of a CMK, see How Key State Affects the Use of a Customer Master Key in the  AWS Key Management Service Developer Guide . The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  disableKey(params: KMS.Types.DisableKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the state of a customer master key (CMK) to disabled, thereby preventing its use for cryptographic operations. You cannot perform this operation on a CMK in a different AWS account. For more information about how key state affects the use of a CMK, see How Key State Affects the Use of a Customer Master Key in the  AWS Key Management Service Developer Guide . The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  disableKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables automatic rotation of the key material for the specified symmetric customer master key (CMK).  You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a custom key store. You cannot perform this operation on a CMK in a different AWS account. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  disableKeyRotation(params: KMS.Types.DisableKeyRotationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables automatic rotation of the key material for the specified symmetric customer master key (CMK).  You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a custom key store. You cannot perform this operation on a CMK in a different AWS account. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
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
   * Sets the key state of a customer master key (CMK) to enabled. This allows you to use the CMK for cryptographic operations. You cannot perform this operation on a CMK in a different AWS account. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  enableKey(params: KMS.Types.EnableKeyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the key state of a customer master key (CMK) to enabled. This allows you to use the CMK for cryptographic operations. You cannot perform this operation on a CMK in a different AWS account. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  enableKey(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables automatic rotation of the key material for the specified symmetric customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a custom key store. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  enableKeyRotation(params: KMS.Types.EnableKeyRotationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables automatic rotation of the key material for the specified symmetric customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a custom key store. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  enableKeyRotation(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Encrypts plaintext into ciphertext by using a customer master key (CMK). The Encrypt operation has two primary use cases:   You can encrypt small amounts of arbitrary data, such as a personal identifier or database password, or other sensitive information.    You can use the Encrypt operation to move encrypted data from one AWS region to another. In the first region, generate a data key and use the plaintext key to encrypt the data. Then, in the new region, call the Encrypt method on same plaintext data key. Now, you can safely move the encrypted data and encrypted data key to the new region, and decrypt in the new region when necessary.   You don't need to use the Encrypt operation to encrypt a data key. The GenerateDataKey and GenerateDataKeyPair operations return a plaintext data key and an encrypted copy of that data key. When you encrypt data, you must specify a symmetric or asymmetric CMK to use in the encryption operation. The CMK must have a KeyUsage value of ENCRYPT_DECRYPT. To find the KeyUsage of a CMK, use the DescribeKey operation.  If you use a symmetric CMK, you can use an encryption context to add additional security to your encryption operation. If you specify an EncryptionContext when encrypting data, you must specify the same encryption context (a case-sensitive exact match) when decrypting the data. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the AWS Key Management Service Developer Guide. If you specify an asymmetric CMK, you must also specify the encryption algorithm. The algorithm must be compatible with the CMK type.  When you use an asymmetric CMK to encrypt or reencrypt data, be sure to record the CMK and encryption algorithm that you choose. You will be required to provide the same CMK and encryption algorithm when you decrypt the data. If the CMK and algorithm do not match the values used to encrypt the data, the decrypt operation fails. You are not required to supply the CMK ID and encryption algorithm when you decrypt with symmetric CMKs because AWS KMS stores this information in the ciphertext blob. AWS KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.  The maximum size of the data that you can encrypt varies with the type of CMK and the encryption algorithm that you choose.   Symmetric CMKs    SYMMETRIC_DEFAULT: 4096 bytes      RSA_2048     RSAES_OAEP_SHA_1: 214 bytes    RSAES_OAEP_SHA_256: 190 bytes      RSA_3072     RSAES_OAEP_SHA_1: 342 bytes    RSAES_OAEP_SHA_256: 318 bytes      RSA_4096     RSAES_OAEP_SHA_1: 470 bytes    RSAES_OAEP_SHA_256: 446 bytes     The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide. To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter.
   */
  encrypt(params: KMS.Types.EncryptRequest, callback?: (err: AWSError, data: KMS.Types.EncryptResponse) => void): Request<KMS.Types.EncryptResponse, AWSError>;
  /**
   * Encrypts plaintext into ciphertext by using a customer master key (CMK). The Encrypt operation has two primary use cases:   You can encrypt small amounts of arbitrary data, such as a personal identifier or database password, or other sensitive information.    You can use the Encrypt operation to move encrypted data from one AWS region to another. In the first region, generate a data key and use the plaintext key to encrypt the data. Then, in the new region, call the Encrypt method on same plaintext data key. Now, you can safely move the encrypted data and encrypted data key to the new region, and decrypt in the new region when necessary.   You don't need to use the Encrypt operation to encrypt a data key. The GenerateDataKey and GenerateDataKeyPair operations return a plaintext data key and an encrypted copy of that data key. When you encrypt data, you must specify a symmetric or asymmetric CMK to use in the encryption operation. The CMK must have a KeyUsage value of ENCRYPT_DECRYPT. To find the KeyUsage of a CMK, use the DescribeKey operation.  If you use a symmetric CMK, you can use an encryption context to add additional security to your encryption operation. If you specify an EncryptionContext when encrypting data, you must specify the same encryption context (a case-sensitive exact match) when decrypting the data. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the AWS Key Management Service Developer Guide. If you specify an asymmetric CMK, you must also specify the encryption algorithm. The algorithm must be compatible with the CMK type.  When you use an asymmetric CMK to encrypt or reencrypt data, be sure to record the CMK and encryption algorithm that you choose. You will be required to provide the same CMK and encryption algorithm when you decrypt the data. If the CMK and algorithm do not match the values used to encrypt the data, the decrypt operation fails. You are not required to supply the CMK ID and encryption algorithm when you decrypt with symmetric CMKs because AWS KMS stores this information in the ciphertext blob. AWS KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.  The maximum size of the data that you can encrypt varies with the type of CMK and the encryption algorithm that you choose.   Symmetric CMKs    SYMMETRIC_DEFAULT: 4096 bytes      RSA_2048     RSAES_OAEP_SHA_1: 214 bytes    RSAES_OAEP_SHA_256: 190 bytes      RSA_3072     RSAES_OAEP_SHA_1: 342 bytes    RSAES_OAEP_SHA_256: 318 bytes      RSA_4096     RSAES_OAEP_SHA_1: 470 bytes    RSAES_OAEP_SHA_256: 446 bytes     The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide. To perform this operation on a CMK in a different AWS account, specify the key ARN or alias ARN in the value of the KeyId parameter.
   */
  encrypt(callback?: (err: AWSError, data: KMS.Types.EncryptResponse) => void): Request<KMS.Types.EncryptResponse, AWSError>;
  /**
   * Generates a unique symmetric data key. This operation returns a plaintext copy of the data key and a copy that is encrypted under a customer master key (CMK) that you specify. You can use the plaintext key to encrypt your data outside of AWS KMS and store the encrypted data key with the encrypted data.  GenerateDataKey returns a unique data key for each request. The bytes in the key are not related to the caller or CMK that is used to encrypt the data key. To generate a data key, specify the symmetric CMK that will be used to encrypt the data key. You cannot use an asymmetric CMK to generate data keys. To get the type of your CMK, use the DescribeKey operation. You must also specify the length of the data key. Use either the KeySpec or NumberOfBytes parameters (but not both). For 128-bit and 256-bit data keys, use the KeySpec parameter.  If the operation succeeds, the plaintext copy of the data key is in the Plaintext field of the response, and the encrypted copy of the data key in the CiphertextBlob field. To get only an encrypted copy of the data key, use GenerateDataKeyWithoutPlaintext. To generate an asymmetric data key pair, use the GenerateDataKeyPair or GenerateDataKeyPairWithoutPlaintext operation. To get a cryptographically secure random byte string, use GenerateRandom. You can use the optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide. We recommend that you use the following pattern to encrypt data locally in your application:   Use the GenerateDataKey operation to get a data encryption key.   Use the plaintext data key (returned in the Plaintext field of the response) to encrypt data locally, then erase the plaintext data key from memory.   Store the encrypted data key (returned in the CiphertextBlob field of the response) alongside the locally encrypted data.   To decrypt data locally:   Use the Decrypt operation to decrypt the encrypted data key. The operation returns a plaintext copy of the data key.   Use the plaintext data key to decrypt data locally, then erase the plaintext data key from memory.  
   */
  generateDataKey(params: KMS.Types.GenerateDataKeyRequest, callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyResponse) => void): Request<KMS.Types.GenerateDataKeyResponse, AWSError>;
  /**
   * Generates a unique symmetric data key. This operation returns a plaintext copy of the data key and a copy that is encrypted under a customer master key (CMK) that you specify. You can use the plaintext key to encrypt your data outside of AWS KMS and store the encrypted data key with the encrypted data.  GenerateDataKey returns a unique data key for each request. The bytes in the key are not related to the caller or CMK that is used to encrypt the data key. To generate a data key, specify the symmetric CMK that will be used to encrypt the data key. You cannot use an asymmetric CMK to generate data keys. To get the type of your CMK, use the DescribeKey operation. You must also specify the length of the data key. Use either the KeySpec or NumberOfBytes parameters (but not both). For 128-bit and 256-bit data keys, use the KeySpec parameter.  If the operation succeeds, the plaintext copy of the data key is in the Plaintext field of the response, and the encrypted copy of the data key in the CiphertextBlob field. To get only an encrypted copy of the data key, use GenerateDataKeyWithoutPlaintext. To generate an asymmetric data key pair, use the GenerateDataKeyPair or GenerateDataKeyPairWithoutPlaintext operation. To get a cryptographically secure random byte string, use GenerateRandom. You can use the optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide. We recommend that you use the following pattern to encrypt data locally in your application:   Use the GenerateDataKey operation to get a data encryption key.   Use the plaintext data key (returned in the Plaintext field of the response) to encrypt data locally, then erase the plaintext data key from memory.   Store the encrypted data key (returned in the CiphertextBlob field of the response) alongside the locally encrypted data.   To decrypt data locally:   Use the Decrypt operation to decrypt the encrypted data key. The operation returns a plaintext copy of the data key.   Use the plaintext data key to decrypt data locally, then erase the plaintext data key from memory.  
   */
  generateDataKey(callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyResponse) => void): Request<KMS.Types.GenerateDataKeyResponse, AWSError>;
  /**
   * Generates a unique asymmetric data key pair. The GenerateDataKeyPair operation returns a plaintext public key, a plaintext private key, and a copy of the private key that is encrypted under the symmetric CMK you specify. You can use the data key pair to perform asymmetric cryptography outside of AWS KMS.  GenerateDataKeyPair returns a unique data key pair for each request. The bytes in the keys are not related to the caller or the CMK that is used to encrypt the private key. You can use the public key that GenerateDataKeyPair returns to encrypt data or verify a signature outside of AWS KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the Decrypt operation to decrypt the encrypted private key. To generate a data key pair, you must specify a symmetric customer master key (CMK) to encrypt the private key in a data key pair. You cannot use an asymmetric CMK. To get the type of your CMK, use the DescribeKey operation. If you are using the data key pair to encrypt data, or for any operation where you don't immediately need a private key, consider using the GenerateDataKeyPairWithoutPlaintext operation. GenerateDataKeyPairWithoutPlaintext returns a plaintext public key and an encrypted private key, but omits the plaintext private key that you need only to decrypt ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use the Decrypt operation to decrypt the encrypted private key in the data key pair. You can use the optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  generateDataKeyPair(params: KMS.Types.GenerateDataKeyPairRequest, callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyPairResponse) => void): Request<KMS.Types.GenerateDataKeyPairResponse, AWSError>;
  /**
   * Generates a unique asymmetric data key pair. The GenerateDataKeyPair operation returns a plaintext public key, a plaintext private key, and a copy of the private key that is encrypted under the symmetric CMK you specify. You can use the data key pair to perform asymmetric cryptography outside of AWS KMS.  GenerateDataKeyPair returns a unique data key pair for each request. The bytes in the keys are not related to the caller or the CMK that is used to encrypt the private key. You can use the public key that GenerateDataKeyPair returns to encrypt data or verify a signature outside of AWS KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the Decrypt operation to decrypt the encrypted private key. To generate a data key pair, you must specify a symmetric customer master key (CMK) to encrypt the private key in a data key pair. You cannot use an asymmetric CMK. To get the type of your CMK, use the DescribeKey operation. If you are using the data key pair to encrypt data, or for any operation where you don't immediately need a private key, consider using the GenerateDataKeyPairWithoutPlaintext operation. GenerateDataKeyPairWithoutPlaintext returns a plaintext public key and an encrypted private key, but omits the plaintext private key that you need only to decrypt ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use the Decrypt operation to decrypt the encrypted private key in the data key pair. You can use the optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  generateDataKeyPair(callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyPairResponse) => void): Request<KMS.Types.GenerateDataKeyPairResponse, AWSError>;
  /**
   * Generates a unique asymmetric data key pair. The GenerateDataKeyPairWithoutPlaintext operation returns a plaintext public key and a copy of the private key that is encrypted under the symmetric CMK you specify. Unlike GenerateDataKeyPair, this operation does not return a plaintext private key.  To generate a data key pair, you must specify a symmetric customer master key (CMK) to encrypt the private key in the data key pair. You cannot use an asymmetric CMK. To get the type of your CMK, use the KeySpec field in the DescribeKey response. You can use the public key that GenerateDataKeyPairWithoutPlaintext returns to encrypt data or verify a signature outside of AWS KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the Decrypt operation to decrypt the encrypted private key.  GenerateDataKeyPairWithoutPlaintext returns a unique data key pair for each request. The bytes in the key are not related to the caller or CMK that is used to encrypt the private key. You can use the optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  generateDataKeyPairWithoutPlaintext(params: KMS.Types.GenerateDataKeyPairWithoutPlaintextRequest, callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyPairWithoutPlaintextResponse) => void): Request<KMS.Types.GenerateDataKeyPairWithoutPlaintextResponse, AWSError>;
  /**
   * Generates a unique asymmetric data key pair. The GenerateDataKeyPairWithoutPlaintext operation returns a plaintext public key and a copy of the private key that is encrypted under the symmetric CMK you specify. Unlike GenerateDataKeyPair, this operation does not return a plaintext private key.  To generate a data key pair, you must specify a symmetric customer master key (CMK) to encrypt the private key in the data key pair. You cannot use an asymmetric CMK. To get the type of your CMK, use the KeySpec field in the DescribeKey response. You can use the public key that GenerateDataKeyPairWithoutPlaintext returns to encrypt data or verify a signature outside of AWS KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the Decrypt operation to decrypt the encrypted private key.  GenerateDataKeyPairWithoutPlaintext returns a unique data key pair for each request. The bytes in the key are not related to the caller or CMK that is used to encrypt the private key. You can use the optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  generateDataKeyPairWithoutPlaintext(callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyPairWithoutPlaintextResponse) => void): Request<KMS.Types.GenerateDataKeyPairWithoutPlaintextResponse, AWSError>;
  /**
   * Generates a unique symmetric data key. This operation returns a data key that is encrypted under a customer master key (CMK) that you specify. To request an asymmetric data key pair, use the GenerateDataKeyPair or GenerateDataKeyPairWithoutPlaintext operations.  GenerateDataKeyWithoutPlaintext is identical to the GenerateDataKey operation except that returns only the encrypted copy of the data key. This operation is useful for systems that need to encrypt data at some point, but not immediately. When you need to encrypt the data, you call the Decrypt operation on the encrypted copy of the key.  It's also useful in distributed systems with different levels of trust. For example, you might store encrypted data in containers. One component of your system creates new containers and stores an encrypted data key with each container. Then, a different component puts the data into the containers. That component first decrypts the data key, uses the plaintext data key to encrypt data, puts the encrypted data into the container, and then destroys the plaintext data key. In this system, the component that creates the containers never sees the plaintext data key.  GenerateDataKeyWithoutPlaintext returns a unique data key for each request. The bytes in the keys are not related to the caller or CMK that is used to encrypt the private key. To generate a data key, you must specify the symmetric customer master key (CMK) that is used to encrypt the data key. You cannot use an asymmetric CMK to generate a data key. To get the type of your CMK, use the DescribeKey operation. If the operation succeeds, you will find the encrypted copy of the data key in the CiphertextBlob field. You can use the optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  generateDataKeyWithoutPlaintext(params: KMS.Types.GenerateDataKeyWithoutPlaintextRequest, callback?: (err: AWSError, data: KMS.Types.GenerateDataKeyWithoutPlaintextResponse) => void): Request<KMS.Types.GenerateDataKeyWithoutPlaintextResponse, AWSError>;
  /**
   * Generates a unique symmetric data key. This operation returns a data key that is encrypted under a customer master key (CMK) that you specify. To request an asymmetric data key pair, use the GenerateDataKeyPair or GenerateDataKeyPairWithoutPlaintext operations.  GenerateDataKeyWithoutPlaintext is identical to the GenerateDataKey operation except that returns only the encrypted copy of the data key. This operation is useful for systems that need to encrypt data at some point, but not immediately. When you need to encrypt the data, you call the Decrypt operation on the encrypted copy of the key.  It's also useful in distributed systems with different levels of trust. For example, you might store encrypted data in containers. One component of your system creates new containers and stores an encrypted data key with each container. Then, a different component puts the data into the containers. That component first decrypts the data key, uses the plaintext data key to encrypt data, puts the encrypted data into the container, and then destroys the plaintext data key. In this system, the component that creates the containers never sees the plaintext data key.  GenerateDataKeyWithoutPlaintext returns a unique data key for each request. The bytes in the keys are not related to the caller or CMK that is used to encrypt the private key. To generate a data key, you must specify the symmetric customer master key (CMK) that is used to encrypt the data key. You cannot use an asymmetric CMK to generate a data key. To get the type of your CMK, use the DescribeKey operation. If the operation succeeds, you will find the encrypted copy of the data key in the CiphertextBlob field. You can use the optional encryption context to add additional security to the encryption operation. If you specify an EncryptionContext, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an InvalidCiphertextException. For more information, see Encryption Context in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
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
   * Gets a Boolean value that indicates whether automatic rotation of the key material is enabled for the specified customer master key (CMK). You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a custom key store. The key rotation status for these CMKs is always false. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.   Disabled: The key rotation status does not change when you disable a CMK. However, while the CMK is disabled, AWS KMS does not rotate the backing key.   Pending deletion: While a CMK is pending deletion, its key rotation status is false and AWS KMS does not rotate the backing key. If you cancel the deletion, the original key rotation status is restored.   To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the KeyId parameter.
   */
  getKeyRotationStatus(params: KMS.Types.GetKeyRotationStatusRequest, callback?: (err: AWSError, data: KMS.Types.GetKeyRotationStatusResponse) => void): Request<KMS.Types.GetKeyRotationStatusResponse, AWSError>;
  /**
   * Gets a Boolean value that indicates whether automatic rotation of the key material is enabled for the specified customer master key (CMK). You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a custom key store. The key rotation status for these CMKs is always false. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.   Disabled: The key rotation status does not change when you disable a CMK. However, while the CMK is disabled, AWS KMS does not rotate the backing key.   Pending deletion: While a CMK is pending deletion, its key rotation status is false and AWS KMS does not rotate the backing key. If you cancel the deletion, the original key rotation status is restored.   To perform this operation on a CMK in a different AWS account, specify the key ARN in the value of the KeyId parameter.
   */
  getKeyRotationStatus(callback?: (err: AWSError, data: KMS.Types.GetKeyRotationStatusResponse) => void): Request<KMS.Types.GetKeyRotationStatusResponse, AWSError>;
  /**
   * Returns the items you need to import key material into a symmetric, customer managed customer master key (CMK). For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. This operation returns a public key and an import token. Use the public key to encrypt the symmetric key material. Store the import token to send with a subsequent ImportKeyMaterial request. You must specify the key ID of the symmetric CMK into which you will import key material. This CMK's Origin must be EXTERNAL. You must also specify the wrapping algorithm and type of wrapping key (public key) that you will use to encrypt the key material. You cannot perform this operation on an asymmetric CMK or on any CMK in a different AWS account. To import key material, you must use the public key and import token from the same response. These items are valid for 24 hours. The expiration date and time appear in the GetParametersForImport response. You cannot use an expired token in an ImportKeyMaterial request. If your key and token expire, send another GetParametersForImport request. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  getParametersForImport(params: KMS.Types.GetParametersForImportRequest, callback?: (err: AWSError, data: KMS.Types.GetParametersForImportResponse) => void): Request<KMS.Types.GetParametersForImportResponse, AWSError>;
  /**
   * Returns the items you need to import key material into a symmetric, customer managed customer master key (CMK). For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. This operation returns a public key and an import token. Use the public key to encrypt the symmetric key material. Store the import token to send with a subsequent ImportKeyMaterial request. You must specify the key ID of the symmetric CMK into which you will import key material. This CMK's Origin must be EXTERNAL. You must also specify the wrapping algorithm and type of wrapping key (public key) that you will use to encrypt the key material. You cannot perform this operation on an asymmetric CMK or on any CMK in a different AWS account. To import key material, you must use the public key and import token from the same response. These items are valid for 24 hours. The expiration date and time appear in the GetParametersForImport response. You cannot use an expired token in an ImportKeyMaterial request. If your key and token expire, send another GetParametersForImport request. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  getParametersForImport(callback?: (err: AWSError, data: KMS.Types.GetParametersForImportResponse) => void): Request<KMS.Types.GetParametersForImportResponse, AWSError>;
  /**
   * Returns the public key of an asymmetric CMK. Unlike the private key of a asymmetric CMK, which never leaves AWS KMS unencrypted, callers with kms:GetPublicKey permission can download the public key of an asymmetric CMK. You can share the public key to allow others to encrypt messages and verify signatures outside of AWS KMS. For information about symmetric and asymmetric CMKs, see Using Symmetric and Asymmetric CMKs in the AWS Key Management Service Developer Guide. You do not need to download the public key. Instead, you can use the public key within AWS KMS by calling the Encrypt, ReEncrypt, or Verify operations with the identifier of an asymmetric CMK. When you use the public key within AWS KMS, you benefit from the authentication, authorization, and logging that are part of every AWS KMS operation. You also reduce of risk of encrypting data that cannot be decrypted. These features are not effective outside of AWS KMS. For details, see Special Considerations for Downloading Public Keys. To help you use the public key safely outside of AWS KMS, GetPublicKey returns important information about the public key in the response, including:    CustomerMasterKeySpec: The type of key material in the public key, such as RSA_4096 or ECC_NIST_P521.    KeyUsage: Whether the key is used for encryption or signing.    EncryptionAlgorithms or SigningAlgorithms: A list of the encryption algorithms or the signing algorithms for the key.   Although AWS KMS cannot enforce these restrictions on external operations, it is crucial that you use this information to prevent the public key from being used improperly. For example, you can prevent a public signing key from being used encrypt data, or prevent a public key from being used with an encryption algorithm that is not supported by AWS KMS. You can also avoid errors, such as using the wrong signing algorithm in a verification operation. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  getPublicKey(params: KMS.Types.GetPublicKeyRequest, callback?: (err: AWSError, data: KMS.Types.GetPublicKeyResponse) => void): Request<KMS.Types.GetPublicKeyResponse, AWSError>;
  /**
   * Returns the public key of an asymmetric CMK. Unlike the private key of a asymmetric CMK, which never leaves AWS KMS unencrypted, callers with kms:GetPublicKey permission can download the public key of an asymmetric CMK. You can share the public key to allow others to encrypt messages and verify signatures outside of AWS KMS. For information about symmetric and asymmetric CMKs, see Using Symmetric and Asymmetric CMKs in the AWS Key Management Service Developer Guide. You do not need to download the public key. Instead, you can use the public key within AWS KMS by calling the Encrypt, ReEncrypt, or Verify operations with the identifier of an asymmetric CMK. When you use the public key within AWS KMS, you benefit from the authentication, authorization, and logging that are part of every AWS KMS operation. You also reduce of risk of encrypting data that cannot be decrypted. These features are not effective outside of AWS KMS. For details, see Special Considerations for Downloading Public Keys. To help you use the public key safely outside of AWS KMS, GetPublicKey returns important information about the public key in the response, including:    CustomerMasterKeySpec: The type of key material in the public key, such as RSA_4096 or ECC_NIST_P521.    KeyUsage: Whether the key is used for encryption or signing.    EncryptionAlgorithms or SigningAlgorithms: A list of the encryption algorithms or the signing algorithms for the key.   Although AWS KMS cannot enforce these restrictions on external operations, it is crucial that you use this information to prevent the public key from being used improperly. For example, you can prevent a public signing key from being used encrypt data, or prevent a public key from being used with an encryption algorithm that is not supported by AWS KMS. You can also avoid errors, such as using the wrong signing algorithm in a verification operation. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  getPublicKey(callback?: (err: AWSError, data: KMS.Types.GetPublicKeyResponse) => void): Request<KMS.Types.GetPublicKeyResponse, AWSError>;
  /**
   * Imports key material into an existing symmetric AWS KMS customer master key (CMK) that was created without key material. After you successfully import key material into a CMK, you can reimport the same key material into that CMK, but you cannot import different key material. You cannot perform this operation on an asymmetric CMK or on any CMK in a different AWS account. For more information about creating CMKs with no key material and then importing key material, see Importing Key Material in the AWS Key Management Service Developer Guide. Before using this operation, call GetParametersForImport. Its response includes a public key and an import token. Use the public key to encrypt the key material. Then, submit the import token from the same GetParametersForImport response. When calling this operation, you must specify the following values:   The key ID or key ARN of a CMK with no key material. Its Origin must be EXTERNAL. To create a CMK with no key material, call CreateKey and set the value of its Origin parameter to EXTERNAL. To get the Origin of a CMK, call DescribeKey.)   The encrypted key material. To get the public key to encrypt the key material, call GetParametersForImport.   The import token that GetParametersForImport returned. You must use a public key and token from the same GetParametersForImport response.   Whether the key material expires and if so, when. If you set an expiration date, AWS KMS deletes the key material from the CMK on the specified date, and the CMK becomes unusable. To use the CMK again, you must reimport the same key material. The only way to change an expiration date is by reimporting the same key material and specifying a new expiration date.    When this operation is successful, the key state of the CMK changes from PendingImport to Enabled, and you can use the CMK. If this operation fails, use the exception to help determine the problem. If the error is related to the key material, the import token, or wrapping key, use GetParametersForImport to get a new public key and import token for the CMK and repeat the import procedure. For help, see How To Import Key Material in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  importKeyMaterial(params: KMS.Types.ImportKeyMaterialRequest, callback?: (err: AWSError, data: KMS.Types.ImportKeyMaterialResponse) => void): Request<KMS.Types.ImportKeyMaterialResponse, AWSError>;
  /**
   * Imports key material into an existing symmetric AWS KMS customer master key (CMK) that was created without key material. After you successfully import key material into a CMK, you can reimport the same key material into that CMK, but you cannot import different key material. You cannot perform this operation on an asymmetric CMK or on any CMK in a different AWS account. For more information about creating CMKs with no key material and then importing key material, see Importing Key Material in the AWS Key Management Service Developer Guide. Before using this operation, call GetParametersForImport. Its response includes a public key and an import token. Use the public key to encrypt the key material. Then, submit the import token from the same GetParametersForImport response. When calling this operation, you must specify the following values:   The key ID or key ARN of a CMK with no key material. Its Origin must be EXTERNAL. To create a CMK with no key material, call CreateKey and set the value of its Origin parameter to EXTERNAL. To get the Origin of a CMK, call DescribeKey.)   The encrypted key material. To get the public key to encrypt the key material, call GetParametersForImport.   The import token that GetParametersForImport returned. You must use a public key and token from the same GetParametersForImport response.   Whether the key material expires and if so, when. If you set an expiration date, AWS KMS deletes the key material from the CMK on the specified date, and the CMK becomes unusable. To use the CMK again, you must reimport the same key material. The only way to change an expiration date is by reimporting the same key material and specifying a new expiration date.    When this operation is successful, the key state of the CMK changes from PendingImport to Enabled, and you can use the CMK. If this operation fails, use the exception to help determine the problem. If the error is related to the key material, the import token, or wrapping key, use GetParametersForImport to get a new public key and import token for the CMK and repeat the import procedure. For help, see How To Import Key Material in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  importKeyMaterial(callback?: (err: AWSError, data: KMS.Types.ImportKeyMaterialResponse) => void): Request<KMS.Types.ImportKeyMaterialResponse, AWSError>;
  /**
   * Gets a list of aliases in the caller's AWS account and region. You cannot list aliases in other accounts. For more information about aliases, see CreateAlias. By default, the ListAliases command returns all aliases in the account and region. To get only the aliases that point to a particular customer master key (CMK), use the KeyId parameter. The ListAliases response can include aliases that you created and associated with your customer managed CMKs, and aliases that AWS created and associated with AWS managed CMKs in your account. You can recognize AWS aliases because their names have the format aws/&lt;service-name&gt;, such as aws/dynamodb. The response might also include aliases that have no TargetKeyId field. These are predefined aliases that AWS has created but has not yet associated with a CMK. Aliases that AWS creates in your account, including predefined aliases, do not count against your AWS KMS aliases quota.
   */
  listAliases(params: KMS.Types.ListAliasesRequest, callback?: (err: AWSError, data: KMS.Types.ListAliasesResponse) => void): Request<KMS.Types.ListAliasesResponse, AWSError>;
  /**
   * Gets a list of aliases in the caller's AWS account and region. You cannot list aliases in other accounts. For more information about aliases, see CreateAlias. By default, the ListAliases command returns all aliases in the account and region. To get only the aliases that point to a particular customer master key (CMK), use the KeyId parameter. The ListAliases response can include aliases that you created and associated with your customer managed CMKs, and aliases that AWS created and associated with AWS managed CMKs in your account. You can recognize AWS aliases because their names have the format aws/&lt;service-name&gt;, such as aws/dynamodb. The response might also include aliases that have no TargetKeyId field. These are predefined aliases that AWS has created but has not yet associated with a CMK. Aliases that AWS creates in your account, including predefined aliases, do not count against your AWS KMS aliases quota.
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
   * Gets a list of all customer master keys (CMKs) in the caller's AWS account and Region.
   */
  listKeys(params: KMS.Types.ListKeysRequest, callback?: (err: AWSError, data: KMS.Types.ListKeysResponse) => void): Request<KMS.Types.ListKeysResponse, AWSError>;
  /**
   * Gets a list of all customer master keys (CMKs) in the caller's AWS account and Region.
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
   * Decrypts ciphertext and then reencrypts it entirely within AWS KMS. You can use this operation to change the customer master key (CMK) under which data is encrypted, such as when you manually rotate a CMK or change the CMK that protects a ciphertext. You can also use it to reencrypt ciphertext under the same CMK, such as to change the encryption context of a ciphertext.  The ReEncrypt operation can decrypt ciphertext that was encrypted by using an AWS KMS CMK in an AWS KMS operation, such as Encrypt or GenerateDataKey. It can also decrypt ciphertext that was encrypted by using the public key of an asymmetric CMK outside of AWS KMS. However, it cannot decrypt ciphertext produced by other libraries, such as the AWS Encryption SDK or Amazon S3 client-side encryption. These libraries return a ciphertext format that is incompatible with AWS KMS. When you use the ReEncrypt operation, you need to provide information for the decrypt operation and the subsequent encrypt operation.   If your ciphertext was encrypted under an asymmetric CMK, you must identify the source CMK, that is, the CMK that encrypted the ciphertext. You must also supply the encryption algorithm that was used. This information is required to decrypt the data.   It is optional, but you can specify a source CMK even when the ciphertext was encrypted under a symmetric CMK. This ensures that the ciphertext is decrypted only by using a particular CMK. If the CMK that you specify cannot decrypt the ciphertext, the ReEncrypt operation fails.   To reencrypt the data, you must specify the destination CMK, that is, the CMK that re-encrypts the data after it is decrypted. You can select a symmetric or asymmetric CMK. If the destination CMK is an asymmetric CMK, you must also provide the encryption algorithm. The algorithm that you choose must be compatible with the CMK.  When you use an asymmetric CMK to encrypt or reencrypt data, be sure to record the CMK and encryption algorithm that you choose. You will be required to provide the same CMK and encryption algorithm when you decrypt the data. If the CMK and algorithm do not match the values used to encrypt the data, the decrypt operation fails. You are not required to supply the CMK ID and encryption algorithm when you decrypt with symmetric CMKs because AWS KMS stores this information in the ciphertext blob. AWS KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.    Unlike other AWS KMS API operations, ReEncrypt callers must have two permissions:    kms:EncryptFrom permission on the source CMK    kms:EncryptTo permission on the destination CMK   To permit reencryption from  or to a CMK, include the "kms:ReEncrypt*" permission in your key policy. This permission is automatically included in the key policy when you use the console to create a CMK. But you must include it manually when you create a CMK programmatically or when you use the PutKeyPolicy operation set a key policy. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  reEncrypt(params: KMS.Types.ReEncryptRequest, callback?: (err: AWSError, data: KMS.Types.ReEncryptResponse) => void): Request<KMS.Types.ReEncryptResponse, AWSError>;
  /**
   * Decrypts ciphertext and then reencrypts it entirely within AWS KMS. You can use this operation to change the customer master key (CMK) under which data is encrypted, such as when you manually rotate a CMK or change the CMK that protects a ciphertext. You can also use it to reencrypt ciphertext under the same CMK, such as to change the encryption context of a ciphertext.  The ReEncrypt operation can decrypt ciphertext that was encrypted by using an AWS KMS CMK in an AWS KMS operation, such as Encrypt or GenerateDataKey. It can also decrypt ciphertext that was encrypted by using the public key of an asymmetric CMK outside of AWS KMS. However, it cannot decrypt ciphertext produced by other libraries, such as the AWS Encryption SDK or Amazon S3 client-side encryption. These libraries return a ciphertext format that is incompatible with AWS KMS. When you use the ReEncrypt operation, you need to provide information for the decrypt operation and the subsequent encrypt operation.   If your ciphertext was encrypted under an asymmetric CMK, you must identify the source CMK, that is, the CMK that encrypted the ciphertext. You must also supply the encryption algorithm that was used. This information is required to decrypt the data.   It is optional, but you can specify a source CMK even when the ciphertext was encrypted under a symmetric CMK. This ensures that the ciphertext is decrypted only by using a particular CMK. If the CMK that you specify cannot decrypt the ciphertext, the ReEncrypt operation fails.   To reencrypt the data, you must specify the destination CMK, that is, the CMK that re-encrypts the data after it is decrypted. You can select a symmetric or asymmetric CMK. If the destination CMK is an asymmetric CMK, you must also provide the encryption algorithm. The algorithm that you choose must be compatible with the CMK.  When you use an asymmetric CMK to encrypt or reencrypt data, be sure to record the CMK and encryption algorithm that you choose. You will be required to provide the same CMK and encryption algorithm when you decrypt the data. If the CMK and algorithm do not match the values used to encrypt the data, the decrypt operation fails. You are not required to supply the CMK ID and encryption algorithm when you decrypt with symmetric CMKs because AWS KMS stores this information in the ciphertext blob. AWS KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.    Unlike other AWS KMS API operations, ReEncrypt callers must have two permissions:    kms:EncryptFrom permission on the source CMK    kms:EncryptTo permission on the destination CMK   To permit reencryption from  or to a CMK, include the "kms:ReEncrypt*" permission in your key policy. This permission is automatically included in the key policy when you use the console to create a CMK. But you must include it manually when you create a CMK programmatically or when you use the PutKeyPolicy operation set a key policy. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
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
   * Schedules the deletion of a customer master key (CMK). You may provide a waiting period, specified in days, before deletion occurs. If you do not provide a waiting period, the default period of 30 days is used. When this operation is successful, the key state of the CMK changes to PendingDeletion. Before the waiting period ends, you can use CancelKeyDeletion to cancel the deletion of the CMK. After the waiting period ends, AWS KMS deletes the CMK and all AWS KMS data associated with it, including all aliases that refer to it.  Deleting a CMK is a destructive and potentially dangerous operation. When a CMK is deleted, all data that was encrypted under the CMK is unrecoverable. To prevent the use of a CMK without deleting it, use DisableKey.  If you schedule deletion of a CMK from a custom key store, when the waiting period expires, ScheduleKeyDeletion deletes the CMK from AWS KMS. Then AWS KMS makes a best effort to delete the key material from the associated AWS CloudHSM cluster. However, you might need to manually delete the orphaned key material from the cluster and its backups. You cannot perform this operation on a CMK in a different AWS account. For more information about scheduling a CMK for deletion, see Deleting Customer Master Keys in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  scheduleKeyDeletion(params: KMS.Types.ScheduleKeyDeletionRequest, callback?: (err: AWSError, data: KMS.Types.ScheduleKeyDeletionResponse) => void): Request<KMS.Types.ScheduleKeyDeletionResponse, AWSError>;
  /**
   * Schedules the deletion of a customer master key (CMK). You may provide a waiting period, specified in days, before deletion occurs. If you do not provide a waiting period, the default period of 30 days is used. When this operation is successful, the key state of the CMK changes to PendingDeletion. Before the waiting period ends, you can use CancelKeyDeletion to cancel the deletion of the CMK. After the waiting period ends, AWS KMS deletes the CMK and all AWS KMS data associated with it, including all aliases that refer to it.  Deleting a CMK is a destructive and potentially dangerous operation. When a CMK is deleted, all data that was encrypted under the CMK is unrecoverable. To prevent the use of a CMK without deleting it, use DisableKey.  If you schedule deletion of a CMK from a custom key store, when the waiting period expires, ScheduleKeyDeletion deletes the CMK from AWS KMS. Then AWS KMS makes a best effort to delete the key material from the associated AWS CloudHSM cluster. However, you might need to manually delete the orphaned key material from the cluster and its backups. You cannot perform this operation on a CMK in a different AWS account. For more information about scheduling a CMK for deletion, see Deleting Customer Master Keys in the AWS Key Management Service Developer Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  scheduleKeyDeletion(callback?: (err: AWSError, data: KMS.Types.ScheduleKeyDeletionResponse) => void): Request<KMS.Types.ScheduleKeyDeletionResponse, AWSError>;
  /**
   * Creates a digital signature for a message or message digest by using the private key in an asymmetric CMK. To verify the signature, use the Verify operation, or use the public key in the same asymmetric CMK outside of AWS KMS. For information about symmetric and asymmetric CMKs, see Using Symmetric and Asymmetric CMKs in the AWS Key Management Service Developer Guide. Digital signatures are generated and verified by using asymmetric key pair, such as an RSA or ECC pair that is represented by an asymmetric customer master key (CMK). The key owner (or an authorized user) uses their private key to sign a message. Anyone with the public key can verify that the message was signed with that particular private key and that the message hasn't changed since it was signed.  To use the Sign operation, provide the following information:   Use the KeyId parameter to identify an asymmetric CMK with a KeyUsage value of SIGN_VERIFY. To get the KeyUsage value of a CMK, use the DescribeKey operation. The caller must have kms:Sign permission on the CMK.   Use the Message parameter to specify the message or message digest to sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a hash digest of the message, and then provide the hash digest in the Message parameter. To indicate whether the message is a full message or a digest, use the MessageType parameter.   Choose a signing algorithm that is compatible with the CMK.     When signing a message, be sure to record the CMK and the signing algorithm. This information is required to verify the signature.  To verify the signature that this operation generates, use the Verify operation. Or use the GetPublicKey operation to download the public key and then use the public key to verify the signature outside of AWS KMS.  The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  sign(params: KMS.Types.SignRequest, callback?: (err: AWSError, data: KMS.Types.SignResponse) => void): Request<KMS.Types.SignResponse, AWSError>;
  /**
   * Creates a digital signature for a message or message digest by using the private key in an asymmetric CMK. To verify the signature, use the Verify operation, or use the public key in the same asymmetric CMK outside of AWS KMS. For information about symmetric and asymmetric CMKs, see Using Symmetric and Asymmetric CMKs in the AWS Key Management Service Developer Guide. Digital signatures are generated and verified by using asymmetric key pair, such as an RSA or ECC pair that is represented by an asymmetric customer master key (CMK). The key owner (or an authorized user) uses their private key to sign a message. Anyone with the public key can verify that the message was signed with that particular private key and that the message hasn't changed since it was signed.  To use the Sign operation, provide the following information:   Use the KeyId parameter to identify an asymmetric CMK with a KeyUsage value of SIGN_VERIFY. To get the KeyUsage value of a CMK, use the DescribeKey operation. The caller must have kms:Sign permission on the CMK.   Use the Message parameter to specify the message or message digest to sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a hash digest of the message, and then provide the hash digest in the Message parameter. To indicate whether the message is a full message or a digest, use the MessageType parameter.   Choose a signing algorithm that is compatible with the CMK.     When signing a message, be sure to record the CMK and the signing algorithm. This information is required to verify the signature.  To verify the signature that this operation generates, use the Verify operation. Or use the GetPublicKey operation to download the public key and then use the public key to verify the signature outside of AWS KMS.  The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  sign(callback?: (err: AWSError, data: KMS.Types.SignResponse) => void): Request<KMS.Types.SignResponse, AWSError>;
  /**
   * Adds or edits tags for a customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings. You can only use a tag key once for each CMK. If you use the tag key again, AWS KMS replaces the current tag value with the specified value. For information about the rules that apply to tag keys and tag values, see User-Defined Tag Restrictions in the AWS Billing and Cost Management User Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  tagResource(params: KMS.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds or edits tags for a customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings. You can only use a tag key once for each CMK. If you use the tag key again, AWS KMS replaces the current tag value with the specified value. For information about the rules that apply to tag keys and tag values, see User-Defined Tag Restrictions in the AWS Billing and Cost Management User Guide. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified tags from the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. To remove a tag, specify the tag key. To change the tag value of an existing tag key, use TagResource. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  untagResource(params: KMS.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Removes the specified tags from the specified customer master key (CMK). You cannot perform this operation on a CMK in a different AWS account. To remove a tag, specify the tag key. To change the tag value of an existing tag key, use TagResource. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates an existing AWS KMS alias with a different customer master key (CMK). Each alias is associated with only one CMK at a time, although a CMK can have multiple aliases. The alias and the CMK must be in the same AWS account and region. You cannot perform this operation on an alias in a different AWS account.  The current and new CMK must be the same type (both symmetric or both asymmetric), and they must have the same key usage (ENCRYPT_DECRYPT or SIGN_VERIFY). This restriction prevents errors in code that uses aliases. If you must assign an alias to a different type of CMK, use DeleteAlias to delete the old alias and CreateAlias to create a new alias. You cannot use UpdateAlias to change an alias name. To change an alias name, use DeleteAlias to delete the old alias and CreateAlias to create a new alias. Because an alias is not a property of a CMK, you can create, update, and delete the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all CMKs in the account, use the ListAliases operation.  The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  updateAlias(params: KMS.Types.UpdateAliasRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Associates an existing AWS KMS alias with a different customer master key (CMK). Each alias is associated with only one CMK at a time, although a CMK can have multiple aliases. The alias and the CMK must be in the same AWS account and region. You cannot perform this operation on an alias in a different AWS account.  The current and new CMK must be the same type (both symmetric or both asymmetric), and they must have the same key usage (ENCRYPT_DECRYPT or SIGN_VERIFY). This restriction prevents errors in code that uses aliases. If you must assign an alias to a different type of CMK, use DeleteAlias to delete the old alias and CreateAlias to create a new alias. You cannot use UpdateAlias to change an alias name. To change an alias name, use DeleteAlias to delete the old alias and CreateAlias to create a new alias. Because an alias is not a property of a CMK, you can create, update, and delete the aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from the DescribeKey operation. To get the aliases of all CMKs in the account, use the ListAliases operation.  The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  updateAlias(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the properties of a custom key store. Use the CustomKeyStoreId parameter to identify the custom key store you want to edit. Use the remaining parameters to change the properties of the custom key store. You can only update a custom key store that is disconnected. To disconnect the custom key store, use DisconnectCustomKeyStore. To reconnect the custom key store after the update completes, use ConnectCustomKeyStore. To find the connection state of a custom key store, use the DescribeCustomKeyStores operation. Use the parameters of UpdateCustomKeyStore to edit your keystore settings.   Use the NewCustomKeyStoreName parameter to change the friendly name of the custom key store to the value that you specify.     Use the KeyStorePassword parameter tell AWS KMS the current password of the  kmsuser crypto user (CU) in the associated AWS CloudHSM cluster. You can use this parameter to fix connection failures that occur when AWS KMS cannot log into the associated cluster because the kmsuser password has changed. This value does not change the password in the AWS CloudHSM cluster.     Use the CloudHsmClusterId parameter to associate the custom key store with a different, but related, AWS CloudHSM cluster. You can use this parameter to repair a custom key store if its AWS CloudHSM cluster becomes corrupted or is deleted, or when you need to create or restore a cluster from a backup.    If the operation succeeds, it returns a JSON object with no properties. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.
   */
  updateCustomKeyStore(params: KMS.Types.UpdateCustomKeyStoreRequest, callback?: (err: AWSError, data: KMS.Types.UpdateCustomKeyStoreResponse) => void): Request<KMS.Types.UpdateCustomKeyStoreResponse, AWSError>;
  /**
   * Changes the properties of a custom key store. Use the CustomKeyStoreId parameter to identify the custom key store you want to edit. Use the remaining parameters to change the properties of the custom key store. You can only update a custom key store that is disconnected. To disconnect the custom key store, use DisconnectCustomKeyStore. To reconnect the custom key store after the update completes, use ConnectCustomKeyStore. To find the connection state of a custom key store, use the DescribeCustomKeyStores operation. Use the parameters of UpdateCustomKeyStore to edit your keystore settings.   Use the NewCustomKeyStoreName parameter to change the friendly name of the custom key store to the value that you specify.     Use the KeyStorePassword parameter tell AWS KMS the current password of the  kmsuser crypto user (CU) in the associated AWS CloudHSM cluster. You can use this parameter to fix connection failures that occur when AWS KMS cannot log into the associated cluster because the kmsuser password has changed. This value does not change the password in the AWS CloudHSM cluster.     Use the CloudHsmClusterId parameter to associate the custom key store with a different, but related, AWS CloudHSM cluster. You can use this parameter to repair a custom key store if its AWS CloudHSM cluster becomes corrupted or is deleted, or when you need to create or restore a cluster from a backup.    If the operation succeeds, it returns a JSON object with no properties. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.
   */
  updateCustomKeyStore(callback?: (err: AWSError, data: KMS.Types.UpdateCustomKeyStoreResponse) => void): Request<KMS.Types.UpdateCustomKeyStoreResponse, AWSError>;
  /**
   * Updates the description of a customer master key (CMK). To see the description of a CMK, use DescribeKey.  You cannot perform this operation on a CMK in a different AWS account. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  updateKeyDescription(params: KMS.Types.UpdateKeyDescriptionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the description of a customer master key (CMK). To see the description of a CMK, use DescribeKey.  You cannot perform this operation on a CMK in a different AWS account. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  updateKeyDescription(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Verifies a digital signature that was generated by the Sign operation.   Verification confirms that an authorized user signed the message with the specified CMK and signing algorithm, and the message hasn't changed since it was signed. If the signature is verified, the value of the SignatureValid field in the response is True. If the signature verification fails, the Verify operation fails with an KMSInvalidSignatureException exception. A digital signature is generated by using the private key in an asymmetric CMK. The signature is verified by using the public key in the same asymmetric CMK. For information about symmetric and asymmetric CMKs, see Using Symmetric and Asymmetric CMKs in the AWS Key Management Service Developer Guide. To verify a digital signature, you can use the Verify operation. Specify the same asymmetric CMK, message, and signing algorithm that were used to produce the signature. You can also verify the digital signature by using the public key of the CMK outside of AWS KMS. Use the GetPublicKey operation to download the public key in the asymmetric CMK and then use the public key to verify the signature outside of AWS KMS. The advantage of using the Verify operation is that it is performed within AWS KMS. As a result, it's easy to call, the operation is performed within the FIPS boundary, it is logged in AWS CloudTrail, and you can use key policy and IAM policy to determine who is authorized to use the CMK to verify signatures. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  verify(params: KMS.Types.VerifyRequest, callback?: (err: AWSError, data: KMS.Types.VerifyResponse) => void): Request<KMS.Types.VerifyResponse, AWSError>;
  /**
   * Verifies a digital signature that was generated by the Sign operation.   Verification confirms that an authorized user signed the message with the specified CMK and signing algorithm, and the message hasn't changed since it was signed. If the signature is verified, the value of the SignatureValid field in the response is True. If the signature verification fails, the Verify operation fails with an KMSInvalidSignatureException exception. A digital signature is generated by using the private key in an asymmetric CMK. The signature is verified by using the public key in the same asymmetric CMK. For information about symmetric and asymmetric CMKs, see Using Symmetric and Asymmetric CMKs in the AWS Key Management Service Developer Guide. To verify a digital signature, you can use the Verify operation. Specify the same asymmetric CMK, message, and signing algorithm that were used to produce the signature. You can also verify the digital signature by using the public key of the CMK outside of AWS KMS. Use the GetPublicKey operation to download the public key in the asymmetric CMK and then use the public key to verify the signature outside of AWS KMS. The advantage of using the Verify operation is that it is performed within AWS KMS. As a result, it's easy to call, the operation is performed within the FIPS boundary, it is logged in AWS CloudTrail, and you can use key policy and IAM policy to determine who is authorized to use the CMK to verify signatures. The CMK that you use for this operation must be in a compatible key state. For details, see How Key State Affects Use of a Customer Master Key in the AWS Key Management Service Developer Guide.
   */
  verify(callback?: (err: AWSError, data: KMS.Types.VerifyResponse) => void): Request<KMS.Types.VerifyResponse, AWSError>;
}
declare namespace KMS {
  export type AWSAccountIdType = string;
  export type AlgorithmSpec = "RSAES_PKCS1_V1_5"|"RSAES_OAEP_SHA_1"|"RSAES_OAEP_SHA_256"|string;
  export type AliasList = AliasListEntry[];
  export interface AliasListEntry {
    /**
     * String that contains the alias. This value begins with alias/.
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
  export type ConnectionErrorCodeType = "INVALID_CREDENTIALS"|"CLUSTER_NOT_FOUND"|"NETWORK_ERRORS"|"INTERNAL_ERROR"|"INSUFFICIENT_CLOUDHSM_HSMS"|"USER_LOCKED_OUT"|"USER_NOT_FOUND"|"USER_LOGGED_IN"|string;
  export type ConnectionStateType = "CONNECTED"|"CONNECTING"|"FAILED"|"DISCONNECTED"|"DISCONNECTING"|string;
  export interface CreateAliasRequest {
    /**
     * Specifies the alias name. This value must begin with alias/ followed by a name, such as alias/ExampleAlias. The alias name cannot begin with alias/aws/. The alias/aws/ prefix is reserved for AWS managed CMKs.
     */
    AliasName: AliasNameType;
    /**
     * Identifies the CMK to which the alias refers. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. You cannot specify another alias. For help finding the key ID and ARN, see Finding the Key ID and ARN in the AWS Key Management Service Developer Guide.
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
     * Enter the password of the  kmsuser crypto user (CU) account in the specified AWS CloudHSM cluster. AWS KMS logs into the cluster as this user to manage key material on your behalf. The password must be a string of 7 to 32 characters. Its value is case sensitive. This parameter tells AWS KMS the kmsuser account password; it does not change the password in the AWS CloudHSM cluster.
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
     * Allows a cryptographic operation only when the encryption context matches or includes the encryption context specified in this structure. For more information about encryption context, see Encryption Context in the  AWS Key Management Service Developer Guide .
     */
    Constraints?: GrantConstraints;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
    /**
     * A friendly name for identifying the grant. Use this value to prevent the unintended creation of duplicate grants when retrying this request. When this value is absent, all CreateGrant requests result in a new grant with a unique GrantId even if all the supplied parameters are identical. This can result in unintended duplicates when you retry the CreateGrant request. When this value is present, you can retry a CreateGrant request with identical parameters; if the grant already exists, the original GrantId is returned without creating a new grant. Note that the returned grant token is unique with every CreateGrant request, even when a duplicate GrantId is returned. All grant tokens obtained in this way can be used interchangeably.
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
     * The key policy to attach to the CMK. If you provide a key policy, it must meet the following criteria:   If you don't set BypassPolicyLockoutSafetyCheck to true, the key policy must allow the principal that is making the CreateKey request to make a subsequent PutKeyPolicy request on the CMK. This reduces the risk that the CMK becomes unmanageable. For more information, refer to the scenario in the Default Key Policy section of the  AWS Key Management Service Developer Guide .   Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to AWS KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to AWS KMS. For more information, see Changes that I make are not always immediately visible in the AWS Identity and Access Management User Guide.   If you do not provide a key policy, AWS KMS attaches a default key policy to the CMK. For more information, see Default Key Policy in the AWS Key Management Service Developer Guide. The key policy size quota is 32 kilobytes (32768 bytes).
     */
    Policy?: PolicyType;
    /**
     * A description of the CMK. Use a description that helps you decide whether the CMK is appropriate for a task.
     */
    Description?: DescriptionType;
    /**
     * Determines the cryptographic operations for which you can use the CMK. The default value is ENCRYPT_DECRYPT. This parameter is required only for asymmetric CMKs. You can't change the KeyUsage value after the CMK is created. Select only one valid value.   For symmetric CMKs, omit the parameter or specify ENCRYPT_DECRYPT.   For asymmetric CMKs with RSA key material, specify ENCRYPT_DECRYPT or SIGN_VERIFY.   For asymmetric CMKs with ECC key material, specify SIGN_VERIFY.  
     */
    KeyUsage?: KeyUsageType;
    /**
     * Specifies the type of CMK to create. The default value, SYMMETRIC_DEFAULT, creates a CMK with a 256-bit symmetric key for encryption and decryption. For help choosing a key spec for your CMK, see How to Choose Your CMK Configuration in the AWS Key Management Service Developer Guide. The CustomerMasterKeySpec determines whether the CMK contains a symmetric key or an asymmetric key pair. It also determines the encryption algorithms or signing algorithms that the CMK supports. You can't change the CustomerMasterKeySpec after the CMK is created. To further restrict the algorithms that can be used with the CMK, use a condition key in its key policy or IAM policy. For more information, see kms:EncryptionAlgorithm or kms:Signing Algorithm in the AWS Key Management Service Developer Guide.   AWS services that are integrated with AWS KMS use symmetric CMKs to protect your data. These services do not support asymmetric CMKs. For help determining whether a CMK is symmetric or asymmetric, see Identifying Symmetric and Asymmetric CMKs in the AWS Key Management Service Developer Guide.  AWS KMS supports the following key specs for CMKs:   Symmetric key (default)    SYMMETRIC_DEFAULT (AES-256-GCM)     Asymmetric RSA key pairs    RSA_2048     RSA_3072     RSA_4096      Asymmetric NIST-recommended elliptic curve key pairs    ECC_NIST_P256 (secp256r1)    ECC_NIST_P384 (secp384r1)    ECC_NIST_P521 (secp521r1)     Other asymmetric elliptic curve key pairs    ECC_SECG_P256K1 (secp256k1), commonly used for cryptocurrencies.    
     */
    CustomerMasterKeySpec?: CustomerMasterKeySpec;
    /**
     * The source of the key material for the CMK. You cannot change the origin after you create the CMK. The default is AWS_KMS, which means AWS KMS creates the key material. When the parameter value is EXTERNAL, AWS KMS creates a CMK without key material so that you can import key material from your existing key management infrastructure. For more information about importing key material into AWS KMS, see Importing Key Material in the AWS Key Management Service Developer Guide. This value is valid only for symmetric CMKs. When the parameter value is AWS_CLOUDHSM, AWS KMS creates the CMK in an AWS KMS custom key store and creates its key material in the associated AWS CloudHSM cluster. You must also use the CustomKeyStoreId parameter to identify the custom key store. This value is valid only for symmetric CMKs.
     */
    Origin?: OriginType;
    /**
     * Creates the CMK in the specified custom key store and the key material in its associated AWS CloudHSM cluster. To create a CMK in a custom key store, you must also specify the Origin parameter with a value of AWS_CLOUDHSM. The AWS CloudHSM cluster that is associated with the custom key store must have at least two active HSMs, each in a different Availability Zone in the Region. This parameter is valid only for symmetric CMKs. You cannot create an asymmetric CMK in a custom key store. To find the ID of a custom key store, use the DescribeCustomKeyStores operation. The response includes the custom key store ID and the ID of the AWS CloudHSM cluster. This operation is part of the Custom Key Store feature feature in AWS KMS, which combines the convenience and extensive integration of AWS KMS with the isolation and control of a single-tenant key store.
     */
    CustomKeyStoreId?: CustomKeyStoreIdType;
    /**
     * A flag to indicate whether to bypass the key policy lockout safety check.  Setting this value to true increases the risk that the CMK becomes unmanageable. Do not set this value to true indiscriminately. For more information, refer to the scenario in the Default Key Policy section in the  AWS Key Management Service Developer Guide .  Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the CMK. The default value is false.
     */
    BypassPolicyLockoutSafetyCheck?: BooleanType;
    /**
     * One or more tags. Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. When you add tags to an AWS resource, AWS generates a cost allocation report with usage and costs aggregated by tags. For information about adding, changing, deleting and listing tags for CMKs, see Tagging Keys. Use this parameter to tag the CMK when it is created. To add tags to an existing CMK, use the TagResource operation.
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
     * Indicates whether the custom key store is connected to its AWS CloudHSM cluster. You can create and use CMKs in your custom key stores only when its connection state is CONNECTED. The value is DISCONNECTED if the key store has never been connected or you use the DisconnectCustomKeyStore operation to disconnect it. If the value is CONNECTED but you are having trouble using the custom key store, make sure that its associated AWS CloudHSM cluster is active and contains at least one active HSM. A value of FAILED indicates that an attempt to connect was unsuccessful. The ConnectionErrorCode field in the response indicates the cause of the failure. For help resolving a connection failure, see Troubleshooting a Custom Key Store in the AWS Key Management Service Developer Guide.
     */
    ConnectionState?: ConnectionStateType;
    /**
     * Describes the connection error. This field appears in the response only when the ConnectionState is FAILED. For help resolving these errors, see How to Fix a Connection Failure in AWS Key Management Service Developer Guide. Valid values are:    CLUSTER_NOT_FOUND - AWS KMS cannot find the AWS CloudHSM cluster with the specified cluster ID.    INSUFFICIENT_CLOUDHSM_HSMS - The associated AWS CloudHSM cluster does not contain any active HSMs. To connect a custom key store to its AWS CloudHSM cluster, the cluster must contain at least one active HSM.    INTERNAL_ERROR - AWS KMS could not complete the request due to an internal error. Retry the request. For ConnectCustomKeyStore requests, disconnect the custom key store before trying to connect again.    INVALID_CREDENTIALS - AWS KMS does not have the correct password for the kmsuser crypto user in the AWS CloudHSM cluster. Before you can connect your custom key store to its AWS CloudHSM cluster, you must change the kmsuser account password and update the key store password value for the custom key store.    NETWORK_ERRORS - Network errors are preventing AWS KMS from connecting to the custom key store.    USER_LOCKED_OUT - The kmsuser CU account is locked out of the associated AWS CloudHSM cluster due to too many failed password attempts. Before you can connect your custom key store to its AWS CloudHSM cluster, you must change the kmsuser account password and update the key store password value for the custom key store.    USER_LOGGED_IN - The kmsuser CU account is logged into the the associated AWS CloudHSM cluster. This prevents AWS KMS from rotating the kmsuser account password and logging into the cluster. Before you can connect your custom key store to its AWS CloudHSM cluster, you must log the kmsuser CU out of the cluster. If you changed the kmsuser password to log into the cluster, you must also and update the key store password value for the custom key store. For help, see How to Log Out and Reconnect in the AWS Key Management Service Developer Guide.    USER_NOT_FOUND - AWS KMS cannot find a kmsuser CU account in the associated AWS CloudHSM cluster. Before you can connect your custom key store to its AWS CloudHSM cluster, you must create a kmsuser CU account in the cluster, and then update the key store password value for the custom key store.  
     */
    ConnectionErrorCode?: ConnectionErrorCodeType;
    /**
     * The date and time when the custom key store was created.
     */
    CreationDate?: DateType;
  }
  export type CustomerMasterKeySpec = "RSA_2048"|"RSA_3072"|"RSA_4096"|"ECC_NIST_P256"|"ECC_NIST_P384"|"ECC_NIST_P521"|"ECC_SECG_P256K1"|"SYMMETRIC_DEFAULT"|string;
  export type DataKeyPairSpec = "RSA_2048"|"RSA_3072"|"RSA_4096"|"ECC_NIST_P256"|"ECC_NIST_P384"|"ECC_NIST_P521"|"ECC_SECG_P256K1"|string;
  export type DataKeySpec = "AES_256"|"AES_128"|string;
  export type DateType = Date;
  export interface DecryptRequest {
    /**
     * Ciphertext to be decrypted. The blob includes metadata.
     */
    CiphertextBlob: CiphertextType;
    /**
     * Specifies the encryption context to use when decrypting the data. An encryption context is valid only for cryptographic operations with a symmetric CMK. The standard asymmetric encryption algorithms that AWS KMS uses do not support an encryption context. An encryption context is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric CMK, but it is highly recommended. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
    /**
     * Specifies the customer master key (CMK) that AWS KMS will use to decrypt the ciphertext. Enter a key ID of the CMK that was used to encrypt the ciphertext. If you specify a KeyId value, the Decrypt operation succeeds only if the specified CMK was used to encrypt the ciphertext. This parameter is required only when the ciphertext was encrypted under an asymmetric CMK. Otherwise, AWS KMS uses the metadata that it adds to the ciphertext blob to determine which CMK was used to encrypt the ciphertext. However, you can use this parameter to ensure that a particular CMK (of any kind) is used to decrypt the ciphertext. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    KeyId?: KeyIdType;
    /**
     * Specifies the encryption algorithm that will be used to decrypt the ciphertext. Specify the same algorithm that was used to encrypt the data. If you specify a different algorithm, the Decrypt operation fails. This parameter is required only when the ciphertext was encrypted under an asymmetric CMK. The default value, SYMMETRIC_DEFAULT, represents the only supported algorithm that is valid for symmetric CMKs.
     */
    EncryptionAlgorithm?: EncryptionAlgorithmSpec;
  }
  export interface DecryptResponse {
    /**
     * The ARN of the customer master key that was used to perform the decryption.
     */
    KeyId?: KeyIdType;
    /**
     * Decrypted plaintext data. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
     */
    Plaintext?: PlaintextType;
    /**
     * The encryption algorithm that was used to decrypt the ciphertext.
     */
    EncryptionAlgorithm?: EncryptionAlgorithmSpec;
  }
  export interface DeleteAliasRequest {
    /**
     * The alias to be deleted. The alias name must begin with alias/ followed by the alias name, such as alias/ExampleAlias.
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
     * Identifies the CMK from which you are deleting imported key material. The Origin of the CMK must be EXTERNAL. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
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
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the NextMarker element in thisresponse to the Marker parameter in a subsequent request.
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
     * Identifies a symmetric customer master key (CMK). You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a custom key store. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
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
     * Identifies a symmetric customer master key (CMK). You cannot enable automatic rotation of asymmetric CMKs, CMKs with imported key material, or CMKs in a custom key store. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
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
     * Specifies the encryption context that will be used to encrypt the data. An encryption context is valid only for cryptographic operations with a symmetric CMK. The standard asymmetric encryption algorithms that AWS KMS uses do not support an encryption context.  An encryption context is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric CMK, but it is highly recommended. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
    /**
     * Specifies the encryption algorithm that AWS KMS will use to encrypt the plaintext message. The algorithm must be compatible with the CMK that you specify. This parameter is required only for asymmetric CMKs. The default value, SYMMETRIC_DEFAULT, is the algorithm used for symmetric CMKs. If you are using an asymmetric CMK, we recommend RSAES_OAEP_SHA_256.
     */
    EncryptionAlgorithm?: EncryptionAlgorithmSpec;
  }
  export interface EncryptResponse {
    /**
     * The encrypted plaintext. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
     */
    CiphertextBlob?: CiphertextType;
    /**
     * The ID of the key used during encryption.
     */
    KeyId?: KeyIdType;
    /**
     * The encryption algorithm that was used to encrypt the plaintext.
     */
    EncryptionAlgorithm?: EncryptionAlgorithmSpec;
  }
  export type EncryptionAlgorithmSpec = "SYMMETRIC_DEFAULT"|"RSAES_OAEP_SHA_1"|"RSAES_OAEP_SHA_256"|string;
  export type EncryptionAlgorithmSpecList = EncryptionAlgorithmSpec[];
  export type EncryptionContextKey = string;
  export type EncryptionContextType = {[key: string]: EncryptionContextValue};
  export type EncryptionContextValue = string;
  export type ExpirationModelType = "KEY_MATERIAL_EXPIRES"|"KEY_MATERIAL_DOES_NOT_EXPIRE"|string;
  export interface GenerateDataKeyPairRequest {
    /**
     * Specifies the encryption context that will be used when encrypting the private key in the data key pair. An encryption context is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric CMK, but it is highly recommended. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * Specifies the symmetric CMK that encrypts the private key in the data key pair. You cannot specify an asymmetric CMKs. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a CMK in a different AWS account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    KeyId: KeyIdType;
    /**
     * Determines the type of data key pair that is generated.  The AWS KMS rule that restricts the use of asymmetric RSA CMKs to encrypt and decrypt or to sign and verify (but not both), and the rule that permits you to use ECC CMKs only to sign and verify, are not effective outside of AWS KMS.
     */
    KeyPairSpec: DataKeyPairSpec;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface GenerateDataKeyPairResponse {
    /**
     * The encrypted copy of the private key. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
     */
    PrivateKeyCiphertextBlob?: CiphertextType;
    /**
     * The plaintext copy of the private key. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
     */
    PrivateKeyPlaintext?: PlaintextType;
    /**
     * The public key (in plaintext).
     */
    PublicKey?: PublicKeyType;
    /**
     * The identifier of the CMK that encrypted the private key.
     */
    KeyId?: KeyIdType;
    /**
     * The type of data key pair that was generated.
     */
    KeyPairSpec?: DataKeyPairSpec;
  }
  export interface GenerateDataKeyPairWithoutPlaintextRequest {
    /**
     * Specifies the encryption context that will be used when encrypting the private key in the data key pair. An encryption context is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric CMK, but it is highly recommended. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * Specifies the CMK that encrypts the private key in the data key pair. You must specify a symmetric CMK. You cannot use an asymmetric CMK. To get the type of your CMK, use the DescribeKey operation.  To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    KeyId: KeyIdType;
    /**
     * Determines the type of data key pair that is generated. The AWS KMS rule that restricts the use of asymmetric RSA CMKs to encrypt and decrypt or to sign and verify (but not both), and the rule that permits you to use ECC CMKs only to sign and verify, are not effective outside of AWS KMS.
     */
    KeyPairSpec: DataKeyPairSpec;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface GenerateDataKeyPairWithoutPlaintextResponse {
    /**
     * The encrypted copy of the private key. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
     */
    PrivateKeyCiphertextBlob?: CiphertextType;
    /**
     * The public key (in plaintext).
     */
    PublicKey?: PublicKeyType;
    /**
     * Specifies the CMK that encrypted the private key in the data key pair. You must specify a symmetric CMK. You cannot use an asymmetric CMK. To get the type of your CMK, use the DescribeKey operation. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    KeyId?: KeyIdType;
    /**
     * The type of data key pair that was generated.
     */
    KeyPairSpec?: DataKeyPairSpec;
  }
  export interface GenerateDataKeyRequest {
    /**
     * Identifies the symmetric CMK that encrypts the data key. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a CMK in a different AWS account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    KeyId: KeyIdType;
    /**
     * Specifies the encryption context that will be used when encrypting the data key. An encryption context is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric CMK, but it is highly recommended. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * Specifies the length of the data key in bytes. For example, use the value 64 to generate a 512-bit data key (64 bytes is 512 bits). For 128-bit (16-byte) and 256-bit (32-byte) data keys, use the KeySpec parameter. You must specify either the KeySpec or the NumberOfBytes parameter (but not both) in every GenerateDataKey request.
     */
    NumberOfBytes?: NumberOfBytesType;
    /**
     * Specifies the length of the data key. Use AES_128 to generate a 128-bit symmetric key, or AES_256 to generate a 256-bit symmetric key. You must specify either the KeySpec or the NumberOfBytes parameter (but not both) in every GenerateDataKey request.
     */
    KeySpec?: DataKeySpec;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface GenerateDataKeyResponse {
    /**
     * The encrypted copy of the data key. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
     */
    CiphertextBlob?: CiphertextType;
    /**
     * The plaintext data key. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded. Use this data key to encrypt your data outside of KMS. Then, remove it from memory as soon as possible.
     */
    Plaintext?: PlaintextType;
    /**
     * The identifier of the CMK that encrypted the data key.
     */
    KeyId?: KeyIdType;
  }
  export interface GenerateDataKeyWithoutPlaintextRequest {
    /**
     * The identifier of the symmetric customer master key (CMK) that encrypts the data key. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a CMK in a different AWS account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    KeyId: KeyIdType;
    /**
     * Specifies the encryption context that will be used when encrypting the data key. An encryption context is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric CMK, but it is highly recommended. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    EncryptionContext?: EncryptionContextType;
    /**
     * The length of the data key. Use AES_128 to generate a 128-bit symmetric key, or AES_256 to generate a 256-bit symmetric key.
     */
    KeySpec?: DataKeySpec;
    /**
     * The length of the data key in bytes. For example, use the value 64 to generate a 512-bit data key (64 bytes is 512 bits). For common key lengths (128-bit and 256-bit symmetric keys), we recommend that you use the KeySpec field instead of this one.
     */
    NumberOfBytes?: NumberOfBytesType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface GenerateDataKeyWithoutPlaintextResponse {
    /**
     * The encrypted data key. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
     */
    CiphertextBlob?: CiphertextType;
    /**
     * The identifier of the CMK that encrypted the data key.
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
     * The random byte string. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
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
     * The identifier of the symmetric CMK into which you will import key material. The Origin of the CMK must be EXTERNAL. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
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
  export interface GetPublicKeyRequest {
    /**
     * Identifies the asymmetric CMK that includes the public key. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a CMK in a different AWS account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    KeyId: KeyIdType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface GetPublicKeyResponse {
    /**
     * The identifier of the asymmetric CMK from which the public key was downloaded.
     */
    KeyId?: KeyIdType;
    /**
     * The exported public key.  This value is returned as a binary Distinguished Encoding Rules (DER)-encoded object. To decode it, use an ASN.1 parsing tool, such as OpenSSL asn1parse.
     */
    PublicKey?: PublicKeyType;
    /**
     * The type of the of the public key that was downloaded.
     */
    CustomerMasterKeySpec?: CustomerMasterKeySpec;
    /**
     * The permitted use of the public key. Valid values are ENCRYPT_DECRYPT or SIGN_VERIFY.  This information is critical. If a public key with SIGN_VERIFY key usage encrypts data outside of AWS KMS, the ciphertext cannot be decrypted. 
     */
    KeyUsage?: KeyUsageType;
    /**
     * The encryption algorithms that AWS KMS supports for this key.  This information is critical. If a public key encrypts data outside of AWS KMS by using an unsupported encryption algorithm, the ciphertext cannot be decrypted.  This field appears in the response only when the KeyUsage of the public key is ENCRYPT_DECRYPT.
     */
    EncryptionAlgorithms?: EncryptionAlgorithmSpecList;
    /**
     * The signing algorithms that AWS KMS supports for this key. This field appears in the response only when the KeyUsage of the public key is SIGN_VERIFY.
     */
    SigningAlgorithms?: SigningAlgorithmSpecList;
  }
  export interface GrantConstraints {
    /**
     * A list of key-value pairs that must be included in the encryption context of the cryptographic operation request. The grant allows the cryptographic operation only when the encryption context in the request includes the key-value pairs specified in this constraint, although it can include additional key-value pairs.
     */
    EncryptionContextSubset?: EncryptionContextType;
    /**
     * A list of key-value pairs that must match the encryption context in the cryptographic operation request. The grant allows the operation only when the encryption context in the request is the same as the encryption context specified in this constraint.
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
  export type GrantOperation = "Decrypt"|"Encrypt"|"GenerateDataKey"|"GenerateDataKeyWithoutPlaintext"|"ReEncryptFrom"|"ReEncryptTo"|"Sign"|"Verify"|"GetPublicKey"|"CreateGrant"|"RetireGrant"|"DescribeKey"|"GenerateDataKeyPair"|"GenerateDataKeyPairWithoutPlaintext"|string;
  export type GrantOperationList = GrantOperation[];
  export type GrantTokenList = GrantTokenType[];
  export type GrantTokenType = string;
  export interface ImportKeyMaterialRequest {
    /**
     * The identifier of the symmetric CMK that receives the imported key material. The CMK's Origin must be EXTERNAL. This must be the same CMK specified in the KeyID parameter of the corresponding GetParametersForImport request. Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * The import token that you received in the response to a previous GetParametersForImport request. It must be from the same response that contained the public key that you used to encrypt the key material.
     */
    ImportToken: CiphertextType;
    /**
     * The encrypted key material to import. The key material must be encrypted with the public wrapping key that GetParametersForImport returned, using the wrapping algorithm that you specified in the same GetParametersForImport request.
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
     * The cryptographic operations for which you can use the CMK.
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
     * The manager of the CMK. CMKs in your AWS account are either customer managed or AWS managed. For more information about the difference, see Customer Master Keys in the AWS Key Management Service Developer Guide.
     */
    KeyManager?: KeyManagerType;
    /**
     * Describes the type of key material in the CMK.
     */
    CustomerMasterKeySpec?: CustomerMasterKeySpec;
    /**
     * A list of encryption algorithms that the CMK supports. You cannot use the CMK with other encryption algorithms within AWS KMS. This field appears only when the KeyUsage of the CMK is ENCRYPT_DECRYPT.
     */
    EncryptionAlgorithms?: EncryptionAlgorithmSpecList;
    /**
     * A list of signing algorithms that the CMK supports. You cannot use the CMK with other signing algorithms within AWS KMS. This field appears only when the KeyUsage of the CMK is SIGN_VERIFY.
     */
    SigningAlgorithms?: SigningAlgorithmSpecList;
  }
  export type KeyState = "Enabled"|"Disabled"|"PendingDeletion"|"PendingImport"|"Unavailable"|string;
  export type KeyStorePasswordType = string;
  export type KeyUsageType = "SIGN_VERIFY"|"ENCRYPT_DECRYPT"|string;
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
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the NextMarker element in thisresponse to the Marker parameter in a subsequent request.
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
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the NextMarker element in thisresponse to the Marker parameter in a subsequent request.
     */
    Truncated?: BooleanType;
  }
  export interface ListKeyPoliciesRequest {
    /**
     * A unique identifier for the customer master key (CMK). Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey.
     */
    KeyId: KeyIdType;
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, AWS KMS does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 1000, inclusive. If you do not include a value, it defaults to 100. Only one policy can be attached to a key.
     */
    Limit?: LimitType;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextMarker from the truncated response you just received.
     */
    Marker?: MarkerType;
  }
  export interface ListKeyPoliciesResponse {
    /**
     * A list of key policy names. The only valid value is default.
     */
    PolicyNames?: PolicyNameList;
    /**
     * When Truncated is true, this element is present and contains the value to use for the Marker parameter in a subsequent request.
     */
    NextMarker?: MarkerType;
    /**
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the NextMarker element in thisresponse to the Marker parameter in a subsequent request.
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
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the NextMarker element in thisresponse to the Marker parameter in a subsequent request.
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
     * A flag that indicates whether there are more items in the list. When this value is true, the list in this response is truncated. To get more items, pass the value of the NextMarker element in thisresponse to the Marker parameter in a subsequent request.
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
  export type MessageType = "RAW"|"DIGEST"|string;
  export type NumberOfBytesType = number;
  export type OriginType = "AWS_KMS"|"EXTERNAL"|"AWS_CLOUDHSM"|string;
  export type PendingWindowInDaysType = number;
  export type PlaintextType = Buffer|Uint8Array|Blob|string;
  export type PolicyNameList = PolicyNameType[];
  export type PolicyNameType = string;
  export type PolicyType = string;
  export type PrincipalIdType = string;
  export type PublicKeyType = Buffer|Uint8Array|Blob|string;
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
     * The key policy to attach to the CMK. The key policy must meet the following criteria:   If you don't set BypassPolicyLockoutSafetyCheck to true, the key policy must allow the principal that is making the PutKeyPolicy request to make a subsequent PutKeyPolicy request on the CMK. This reduces the risk that the CMK becomes unmanageable. For more information, refer to the scenario in the Default Key Policy section of the AWS Key Management Service Developer Guide.   Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to AWS KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to AWS KMS. For more information, see Changes that I make are not always immediately visible in the AWS Identity and Access Management User Guide.   The key policy cannot exceed 32 kilobytes (32768 bytes). For more information, see Resource Quotas in the AWS Key Management Service Developer Guide.
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
     * Specifies the encryption context to use to decrypt the ciphertext. Enter the same encryption context that was used to encrypt the ciphertext. An encryption context is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric CMK, but it is highly recommended. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    SourceEncryptionContext?: EncryptionContextType;
    /**
     * A unique identifier for the CMK that is used to decrypt the ciphertext before it reencrypts it using the destination CMK. This parameter is required only when the ciphertext was encrypted under an asymmetric CMK. Otherwise, AWS KMS uses the metadata that it adds to the ciphertext blob to determine which CMK was used to encrypt the ciphertext. However, you can use this parameter to ensure that a particular CMK (of any kind) is used to decrypt the ciphertext before it is reencrypted. If you specify a KeyId value, the decrypt part of the ReEncrypt operation succeeds only if the specified CMK was used to encrypt the ciphertext. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    SourceKeyId?: KeyIdType;
    /**
     * A unique identifier for the CMK that is used to reencrypt the data. Specify a symmetric or asymmetric CMK with a KeyUsage value of ENCRYPT_DECRYPT. To find the KeyUsage value of a CMK, use the DescribeKey operation. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a CMK in a different AWS account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    DestinationKeyId: KeyIdType;
    /**
     * Specifies that encryption context to use when the reencrypting the data. A destination encryption context is valid only when the destination CMK is a symmetric CMK. The standard ciphertext format for asymmetric CMKs does not include fields for metadata. An encryption context is a collection of non-secret key-value pairs that represents additional authenticated data. When you use an encryption context to encrypt data, you must specify the same (an exact case-sensitive match) encryption context to decrypt the data. An encryption context is optional when encrypting with a symmetric CMK, but it is highly recommended. For more information, see Encryption Context in the AWS Key Management Service Developer Guide.
     */
    DestinationEncryptionContext?: EncryptionContextType;
    /**
     * Specifies the encryption algorithm that AWS KMS will use to decrypt the ciphertext before it is reencrypted. The default value, SYMMETRIC_DEFAULT, represents the algorithm used for symmetric CMKs. Specify the same algorithm that was used to encrypt the ciphertext. If you specify a different algorithm, the decrypt attempt fails. This parameter is required only when the ciphertext was encrypted under an asymmetric CMK.
     */
    SourceEncryptionAlgorithm?: EncryptionAlgorithmSpec;
    /**
     * Specifies the encryption algorithm that AWS KMS will use to reecrypt the data after it has decrypted it. The default value, SYMMETRIC_DEFAULT, represents the encryption algorithm used for symmetric CMKs. This parameter is required only when the destination CMK is an asymmetric CMK.
     */
    DestinationEncryptionAlgorithm?: EncryptionAlgorithmSpec;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface ReEncryptResponse {
    /**
     * The reencrypted data. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not Base64-encoded.
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
    /**
     * The encryption algorithm that was used to decrypt the ciphertext before it was reencrypted.
     */
    SourceEncryptionAlgorithm?: EncryptionAlgorithmSpec;
    /**
     * The encryption algorithm that was used to reencrypt the data.
     */
    DestinationEncryptionAlgorithm?: EncryptionAlgorithmSpec;
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
  export interface SignRequest {
    /**
     * Identifies an asymmetric CMK. AWS KMS uses the private key in the asymmetric CMK to sign the message. The KeyUsage type of the CMK must be SIGN_VERIFY. To find the KeyUsage of a CMK, use the DescribeKey operation. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a CMK in a different AWS account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    KeyId: KeyIdType;
    /**
     * Specifies the message or message digest to sign. Messages can be 0-4096 bytes. To sign a larger message, provide the message digest. If you provide a message, AWS KMS generates a hash digest of the message and then signs it.
     */
    Message: PlaintextType;
    /**
     * Tells AWS KMS whether the value of the Message parameter is a message or message digest. To indicate a message, enter RAW. To indicate a message digest, enter DIGEST.
     */
    MessageType?: MessageType;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
    /**
     * Specifies the signing algorithm to use when signing the message.  Choose an algorithm that is compatible with the type and size of the specified asymmetric CMK.
     */
    SigningAlgorithm: SigningAlgorithmSpec;
  }
  export interface SignResponse {
    /**
     * The Amazon Resource Name (ARN) of the asymmetric CMK that was used to sign the message.
     */
    KeyId?: KeyIdType;
    /**
     * The cryptographic signature that was generated for the message.
     */
    Signature?: CiphertextType;
    /**
     * The signing algorithm that was used to sign the message.
     */
    SigningAlgorithm?: SigningAlgorithmSpec;
  }
  export type SigningAlgorithmSpec = "RSASSA_PSS_SHA_256"|"RSASSA_PSS_SHA_384"|"RSASSA_PSS_SHA_512"|"RSASSA_PKCS1_V1_5_SHA_256"|"RSASSA_PKCS1_V1_5_SHA_384"|"RSASSA_PKCS1_V1_5_SHA_512"|"ECDSA_SHA_256"|"ECDSA_SHA_384"|"ECDSA_SHA_512"|string;
  export type SigningAlgorithmSpecList = SigningAlgorithmSpec[];
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
     * Identifies the alias that is changing its CMK. This value must begin with alias/ followed by the alias name, such as alias/ExampleAlias. You cannot use UpdateAlias to change the alias name.
     */
    AliasName: AliasNameType;
    /**
     * Identifies the CMK to associate with the alias. When the update operation completes, the alias will point to this CMK.  The CMK must be in the same AWS account and Region as the alias. Also, the new target CMK must be the same type as the current target CMK (both symmetric or both asymmetric) and they must have the same key usage.  Specify the key ID or the Amazon Resource Name (ARN) of the CMK. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To verify that the alias is mapped to the correct CMK, use ListAliases.
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
     * Associates the custom key store with a related AWS CloudHSM cluster.  Enter the cluster ID of the cluster that you used to create the custom key store or a cluster that shares a backup history and has the same cluster certificate as the original cluster. You cannot use this parameter to associate a custom key store with an unrelated cluster. In addition, the replacement cluster must fulfill the requirements for a cluster associated with a custom key store. To view the cluster certificate of a cluster, use the DescribeClusters operation.
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
  export interface VerifyRequest {
    /**
     * Identifies the asymmetric CMK that will be used to verify the signature. This must be the same CMK that was used to generate the signature. If you specify a different CMK, the signature verification fails. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a CMK in a different AWS account, you must use the key ARN or alias ARN. For example:   Key ID: 1234abcd-12ab-34cd-56ef-1234567890ab    Key ARN: arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab    Alias name: alias/ExampleAlias    Alias ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias    To get the key ID and key ARN for a CMK, use ListKeys or DescribeKey. To get the alias name and alias ARN, use ListAliases.
     */
    KeyId: KeyIdType;
    /**
     * Specifies the message that was signed. You can submit a raw message of up to 4096 bytes, or a hash digest of the message. If you submit a digest, use the MessageType parameter with a value of DIGEST. If the message specified here is different from the message that was signed, the signature verification fails. A message and its hash digest are considered to be the same message.
     */
    Message: PlaintextType;
    /**
     * Tells AWS KMS whether the value of the Message parameter is a message or message digest. The default value, RAW, indicates a message. To indicate a message digest, enter DIGEST.  Use the DIGEST value only when the value of the Message parameter is a message digest. If you use the DIGEST value with a raw message, the security of the verification operation can be compromised. 
     */
    MessageType?: MessageType;
    /**
     * The signature that the Sign operation generated.
     */
    Signature: CiphertextType;
    /**
     * The signing algorithm that was used to sign the message. If you submit a different algorithm, the signature verification fails.
     */
    SigningAlgorithm: SigningAlgorithmSpec;
    /**
     * A list of grant tokens. For more information, see Grant Tokens in the AWS Key Management Service Developer Guide.
     */
    GrantTokens?: GrantTokenList;
  }
  export interface VerifyResponse {
    /**
     * The unique identifier for the asymmetric CMK that was used to verify the signature.
     */
    KeyId?: KeyIdType;
    /**
     * A Boolean value that indicates whether the signature was verified. A value of True indicates that the Signature was produced by signing the Message with the specified KeyID and SigningAlgorithm. If the signature is not verified, the Verify operation fails with a KMSInvalidSignatureException exception. 
     */
    SignatureValid?: BooleanType;
    /**
     * The signing algorithm that was used to verify the signature.
     */
    SigningAlgorithm?: SigningAlgorithmSpec;
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
