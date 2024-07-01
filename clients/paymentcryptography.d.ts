import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class PaymentCryptography extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: PaymentCryptography.Types.ClientConfiguration)
  config: Config & PaymentCryptography.Types.ClientConfiguration;
  /**
   * Creates an alias, or a friendly name, for an Amazon Web Services Payment Cryptography key. You can use an alias to identify a key in the console and when you call cryptographic operations such as EncryptData or DecryptData. You can associate the alias with any key in the same Amazon Web Services Region. Each alias is associated with only one key at a time, but a key can have multiple aliases. You can't create an alias without a key. The alias must be unique in the account and Amazon Web Services Region, but you can create another alias with the same name in a different Amazon Web Services Region. To change the key that's associated with the alias, call UpdateAlias. To delete the alias, call DeleteAlias. These operations don't affect the underlying key. To get the alias that you created, call ListAliases.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DeleteAlias     GetAlias     ListAliases     UpdateAlias   
   */
  createAlias(params: PaymentCryptography.Types.CreateAliasInput, callback?: (err: AWSError, data: PaymentCryptography.Types.CreateAliasOutput) => void): Request<PaymentCryptography.Types.CreateAliasOutput, AWSError>;
  /**
   * Creates an alias, or a friendly name, for an Amazon Web Services Payment Cryptography key. You can use an alias to identify a key in the console and when you call cryptographic operations such as EncryptData or DecryptData. You can associate the alias with any key in the same Amazon Web Services Region. Each alias is associated with only one key at a time, but a key can have multiple aliases. You can't create an alias without a key. The alias must be unique in the account and Amazon Web Services Region, but you can create another alias with the same name in a different Amazon Web Services Region. To change the key that's associated with the alias, call UpdateAlias. To delete the alias, call DeleteAlias. These operations don't affect the underlying key. To get the alias that you created, call ListAliases.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DeleteAlias     GetAlias     ListAliases     UpdateAlias   
   */
  createAlias(callback?: (err: AWSError, data: PaymentCryptography.Types.CreateAliasOutput) => void): Request<PaymentCryptography.Types.CreateAliasOutput, AWSError>;
  /**
   * Creates an Amazon Web Services Payment Cryptography key, a logical representation of a cryptographic key, that is unique in your account and Amazon Web Services Region. You use keys for cryptographic functions such as encryption and decryption.  In addition to the key material used in cryptographic operations, an Amazon Web Services Payment Cryptography key includes metadata such as the key ARN, key usage, key origin, creation date, description, and key state. When you create a key, you specify both immutable and mutable data about the key. The immutable data contains key attributes that define the scope and cryptographic operations that you can perform using the key, for example key class (example: SYMMETRIC_KEY), key algorithm (example: TDES_2KEY), key usage (example: TR31_P0_PIN_ENCRYPTION_KEY) and key modes of use (example: Encrypt). For information about valid combinations of key attributes, see Understanding key attributes in the Amazon Web Services Payment Cryptography User Guide. The mutable data contained within a key includes usage timestamp and key deletion timestamp and can be modified after creation. Amazon Web Services Payment Cryptography binds key attributes to keys using key blocks when you store or export them. Amazon Web Services Payment Cryptography stores the key contents wrapped and never stores or transmits them in the clear.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DeleteKey     GetKey     ListKeys   
   */
  createKey(params: PaymentCryptography.Types.CreateKeyInput, callback?: (err: AWSError, data: PaymentCryptography.Types.CreateKeyOutput) => void): Request<PaymentCryptography.Types.CreateKeyOutput, AWSError>;
  /**
   * Creates an Amazon Web Services Payment Cryptography key, a logical representation of a cryptographic key, that is unique in your account and Amazon Web Services Region. You use keys for cryptographic functions such as encryption and decryption.  In addition to the key material used in cryptographic operations, an Amazon Web Services Payment Cryptography key includes metadata such as the key ARN, key usage, key origin, creation date, description, and key state. When you create a key, you specify both immutable and mutable data about the key. The immutable data contains key attributes that define the scope and cryptographic operations that you can perform using the key, for example key class (example: SYMMETRIC_KEY), key algorithm (example: TDES_2KEY), key usage (example: TR31_P0_PIN_ENCRYPTION_KEY) and key modes of use (example: Encrypt). For information about valid combinations of key attributes, see Understanding key attributes in the Amazon Web Services Payment Cryptography User Guide. The mutable data contained within a key includes usage timestamp and key deletion timestamp and can be modified after creation. Amazon Web Services Payment Cryptography binds key attributes to keys using key blocks when you store or export them. Amazon Web Services Payment Cryptography stores the key contents wrapped and never stores or transmits them in the clear.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DeleteKey     GetKey     ListKeys   
   */
  createKey(callback?: (err: AWSError, data: PaymentCryptography.Types.CreateKeyOutput) => void): Request<PaymentCryptography.Types.CreateKeyOutput, AWSError>;
  /**
   * Deletes the alias, but doesn't affect the underlying key. Each key can have multiple aliases. To get the aliases of all keys, use the UpdateAlias operation. To change the alias of a key, first use DeleteAlias to delete the current alias and then use CreateAlias to create a new alias. To associate an existing alias with a different key, call UpdateAlias.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateAlias     GetAlias     ListAliases     UpdateAlias   
   */
  deleteAlias(params: PaymentCryptography.Types.DeleteAliasInput, callback?: (err: AWSError, data: PaymentCryptography.Types.DeleteAliasOutput) => void): Request<PaymentCryptography.Types.DeleteAliasOutput, AWSError>;
  /**
   * Deletes the alias, but doesn't affect the underlying key. Each key can have multiple aliases. To get the aliases of all keys, use the UpdateAlias operation. To change the alias of a key, first use DeleteAlias to delete the current alias and then use CreateAlias to create a new alias. To associate an existing alias with a different key, call UpdateAlias.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateAlias     GetAlias     ListAliases     UpdateAlias   
   */
  deleteAlias(callback?: (err: AWSError, data: PaymentCryptography.Types.DeleteAliasOutput) => void): Request<PaymentCryptography.Types.DeleteAliasOutput, AWSError>;
  /**
   * Deletes the key material and metadata associated with Amazon Web Services Payment Cryptography key. Key deletion is irreversible. After a key is deleted, you can't perform cryptographic operations using the key. For example, you can't decrypt data that was encrypted by a deleted Amazon Web Services Payment Cryptography key, and the data may become unrecoverable. Because key deletion is destructive, Amazon Web Services Payment Cryptography has a safety mechanism to prevent accidental deletion of a key. When you call this operation, Amazon Web Services Payment Cryptography disables the specified key but doesn't delete it until after a waiting period set using DeleteKeyInDays. The default waiting period is 7 days. During the waiting period, the KeyState is DELETE_PENDING. After the key is deleted, the KeyState is DELETE_COMPLETE. You should delete a key only when you are sure that you don't need to use it anymore and no other parties are utilizing this key. If you aren't sure, consider deactivating it instead by calling StopKeyUsage.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     RestoreKey     StartKeyUsage     StopKeyUsage   
   */
  deleteKey(params: PaymentCryptography.Types.DeleteKeyInput, callback?: (err: AWSError, data: PaymentCryptography.Types.DeleteKeyOutput) => void): Request<PaymentCryptography.Types.DeleteKeyOutput, AWSError>;
  /**
   * Deletes the key material and metadata associated with Amazon Web Services Payment Cryptography key. Key deletion is irreversible. After a key is deleted, you can't perform cryptographic operations using the key. For example, you can't decrypt data that was encrypted by a deleted Amazon Web Services Payment Cryptography key, and the data may become unrecoverable. Because key deletion is destructive, Amazon Web Services Payment Cryptography has a safety mechanism to prevent accidental deletion of a key. When you call this operation, Amazon Web Services Payment Cryptography disables the specified key but doesn't delete it until after a waiting period set using DeleteKeyInDays. The default waiting period is 7 days. During the waiting period, the KeyState is DELETE_PENDING. After the key is deleted, the KeyState is DELETE_COMPLETE. You should delete a key only when you are sure that you don't need to use it anymore and no other parties are utilizing this key. If you aren't sure, consider deactivating it instead by calling StopKeyUsage.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     RestoreKey     StartKeyUsage     StopKeyUsage   
   */
  deleteKey(callback?: (err: AWSError, data: PaymentCryptography.Types.DeleteKeyOutput) => void): Request<PaymentCryptography.Types.DeleteKeyOutput, AWSError>;
  /**
   * Exports a key from Amazon Web Services Payment Cryptography. Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With ExportKey you can export symmetric keys using either symmetric and asymmetric key exchange mechanisms. Using this operation, you can share your Amazon Web Services Payment Cryptography generated keys with other service partners to perform cryptographic operations outside of Amazon Web Services Payment Cryptography  For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm and RSA wrap and unwrap key exchange mechanism. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK). After which you can export working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography. The TR-34 norm is intended for exchanging 3DES keys only and keys are imported in a WrappedKeyBlock format. Key attributes (such as KeyUsage, KeyAlgorithm, KeyModesOfUse, Exportability) are contained within the key block. With RSA wrap and unwrap, you can exchange both 3DES and AES-128 keys. The keys are imported in a WrappedKeyCryptogram format and you will need to specify the key attributes during import.  You can also use ExportKey functionality to generate and export an IPEK (Initial Pin Encryption Key) from Amazon Web Services Payment Cryptography using either TR-31 or TR-34 export key exchange. IPEK is generated from BDK (Base Derivation Key) and ExportDukptInitialKey attribute KSN (KeySerialNumber). The generated IPEK does not persist within Amazon Web Services Payment Cryptography and has to be re-generated each time during export. For key exchange using TR-31 or TR-34 key blocks, you can also export optional blocks within the key block header which contain additional attribute information about the key. The KeyVersion within KeyBlockHeaders indicates the version of the key within the key block. Furthermore, KeyExportability within KeyBlockHeaders can be used to further restrict exportability of the key after export from Amazon Web Services Payment Cryptography. The OptionalBlocks contain the additional data related to the key. For information on data type that can be included within optional blocks, refer to ASC X9.143-2022.  Data included in key block headers is signed but transmitted in clear text. Sensitive or confidential information should not be included in optional blocks. Refer to ASC X9.143-2022 standard for information on allowed data type.   To export initial keys (KEK) or IPEK using TR-34  Using this operation, you can export initial key using TR-34 asymmetric key exchange. You can only export KEK generated within Amazon Web Services Payment Cryptography. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During key export process, KDH is Amazon Web Services Payment Cryptography which initiates key export and KRD is the user receiving the key. To initiate TR-34 key export, the KRD must obtain an export token by calling GetParametersForExport. This operation also generates a key pair for the purpose of key export, signs the key and returns back the signing public key certificate (also known as KDH signing certificate) and root certificate chain. The KDH uses the private key to sign the the export payload and the signing public key certificate is provided to KRD to verify the signature. The KRD can import the root certificate into its Hardware Security Module (HSM), as required. The export token and the associated KDH signing certificate expires after 7 days.  Next the KRD generates a key pair for the the purpose of encrypting the KDH key and provides the public key cerificate (also known as KRD wrapping certificate) back to KDH. The KRD will also import the root cerificate chain into Amazon Web Services Payment Cryptography by calling ImportKey for RootCertificatePublicKey. The KDH, Amazon Web Services Payment Cryptography, will use the KRD wrapping cerificate to encrypt (wrap) the key under export and signs it with signing private key to generate a TR-34 WrappedKeyBlock. For more information on TR-34 key export, see section Exporting symmetric keys in the Amazon Web Services Payment Cryptography User Guide.  Set the following parameters:    ExportAttributes: Specify export attributes in case of IPEK export. This parameter is optional for KEK export.    ExportKeyIdentifier: The KeyARN of the KEK or BDK (in case of IPEK) under export.    KeyMaterial: Use Tr34KeyBlock parameters.    CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed the KRD wrapping key certificate.    ExportToken: Obtained from KDH by calling GetParametersForImport.    WrappingKeyCertificate: The public key certificate in PEM format (base64 encoded) of the KRD wrapping key Amazon Web Services Payment Cryptography uses for encryption of the TR-34 export payload. This certificate must be signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography.   When this operation is successful, Amazon Web Services Payment Cryptography returns the KEK or IPEK as a TR-34 WrappedKeyBlock.   To export initial keys (KEK) or IPEK using RSA Wrap and Unwrap  Using this operation, you can export initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate export, generate an asymmetric key pair on the receiving HSM and obtain the public key certificate in PEM format (base64 encoded) for the purpose of wrapping and the root certifiate chain. Import the root certificate into Amazon Web Services Payment Cryptography by calling ImportKey for RootCertificatePublicKey. Next call ExportKey and set the following parameters:    CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed wrapping key certificate.    KeyMaterial: Set to KeyCryptogram.    WrappingKeyCertificate: The public key certificate in PEM format (base64 encoded) obtained by the receiving HSM and signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography. The receiving HSM uses its private key component to unwrap the WrappedKeyCryptogram.   When this operation is successful, Amazon Web Services Payment Cryptography returns the WrappedKeyCryptogram.   To export working keys or IPEK using TR-31  Using this operation, you can export working keys or IPEK using TR-31 symmetric key exchange. In TR-31, you must use an initial key such as KEK to encrypt or wrap the key under export. To establish a KEK, you can use CreateKey or ImportKey.  Set the following parameters:    ExportAttributes: Specify export attributes in case of IPEK export. This parameter is optional for KEK export.    ExportKeyIdentifier: The KeyARN of the KEK or BDK (in case of IPEK) under export.    KeyMaterial: Use Tr31KeyBlock parameters.   When this operation is successful, Amazon Web Services Payment Cryptography returns the working key or IPEK as a TR-31 WrappedKeyBlock.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     GetParametersForExport     ImportKey   
   */
  exportKey(params: PaymentCryptography.Types.ExportKeyInput, callback?: (err: AWSError, data: PaymentCryptography.Types.ExportKeyOutput) => void): Request<PaymentCryptography.Types.ExportKeyOutput, AWSError>;
  /**
   * Exports a key from Amazon Web Services Payment Cryptography. Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With ExportKey you can export symmetric keys using either symmetric and asymmetric key exchange mechanisms. Using this operation, you can share your Amazon Web Services Payment Cryptography generated keys with other service partners to perform cryptographic operations outside of Amazon Web Services Payment Cryptography  For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm and RSA wrap and unwrap key exchange mechanism. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK). After which you can export working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography. The TR-34 norm is intended for exchanging 3DES keys only and keys are imported in a WrappedKeyBlock format. Key attributes (such as KeyUsage, KeyAlgorithm, KeyModesOfUse, Exportability) are contained within the key block. With RSA wrap and unwrap, you can exchange both 3DES and AES-128 keys. The keys are imported in a WrappedKeyCryptogram format and you will need to specify the key attributes during import.  You can also use ExportKey functionality to generate and export an IPEK (Initial Pin Encryption Key) from Amazon Web Services Payment Cryptography using either TR-31 or TR-34 export key exchange. IPEK is generated from BDK (Base Derivation Key) and ExportDukptInitialKey attribute KSN (KeySerialNumber). The generated IPEK does not persist within Amazon Web Services Payment Cryptography and has to be re-generated each time during export. For key exchange using TR-31 or TR-34 key blocks, you can also export optional blocks within the key block header which contain additional attribute information about the key. The KeyVersion within KeyBlockHeaders indicates the version of the key within the key block. Furthermore, KeyExportability within KeyBlockHeaders can be used to further restrict exportability of the key after export from Amazon Web Services Payment Cryptography. The OptionalBlocks contain the additional data related to the key. For information on data type that can be included within optional blocks, refer to ASC X9.143-2022.  Data included in key block headers is signed but transmitted in clear text. Sensitive or confidential information should not be included in optional blocks. Refer to ASC X9.143-2022 standard for information on allowed data type.   To export initial keys (KEK) or IPEK using TR-34  Using this operation, you can export initial key using TR-34 asymmetric key exchange. You can only export KEK generated within Amazon Web Services Payment Cryptography. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During key export process, KDH is Amazon Web Services Payment Cryptography which initiates key export and KRD is the user receiving the key. To initiate TR-34 key export, the KRD must obtain an export token by calling GetParametersForExport. This operation also generates a key pair for the purpose of key export, signs the key and returns back the signing public key certificate (also known as KDH signing certificate) and root certificate chain. The KDH uses the private key to sign the the export payload and the signing public key certificate is provided to KRD to verify the signature. The KRD can import the root certificate into its Hardware Security Module (HSM), as required. The export token and the associated KDH signing certificate expires after 7 days.  Next the KRD generates a key pair for the the purpose of encrypting the KDH key and provides the public key cerificate (also known as KRD wrapping certificate) back to KDH. The KRD will also import the root cerificate chain into Amazon Web Services Payment Cryptography by calling ImportKey for RootCertificatePublicKey. The KDH, Amazon Web Services Payment Cryptography, will use the KRD wrapping cerificate to encrypt (wrap) the key under export and signs it with signing private key to generate a TR-34 WrappedKeyBlock. For more information on TR-34 key export, see section Exporting symmetric keys in the Amazon Web Services Payment Cryptography User Guide.  Set the following parameters:    ExportAttributes: Specify export attributes in case of IPEK export. This parameter is optional for KEK export.    ExportKeyIdentifier: The KeyARN of the KEK or BDK (in case of IPEK) under export.    KeyMaterial: Use Tr34KeyBlock parameters.    CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed the KRD wrapping key certificate.    ExportToken: Obtained from KDH by calling GetParametersForImport.    WrappingKeyCertificate: The public key certificate in PEM format (base64 encoded) of the KRD wrapping key Amazon Web Services Payment Cryptography uses for encryption of the TR-34 export payload. This certificate must be signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography.   When this operation is successful, Amazon Web Services Payment Cryptography returns the KEK or IPEK as a TR-34 WrappedKeyBlock.   To export initial keys (KEK) or IPEK using RSA Wrap and Unwrap  Using this operation, you can export initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate export, generate an asymmetric key pair on the receiving HSM and obtain the public key certificate in PEM format (base64 encoded) for the purpose of wrapping and the root certifiate chain. Import the root certificate into Amazon Web Services Payment Cryptography by calling ImportKey for RootCertificatePublicKey. Next call ExportKey and set the following parameters:    CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed wrapping key certificate.    KeyMaterial: Set to KeyCryptogram.    WrappingKeyCertificate: The public key certificate in PEM format (base64 encoded) obtained by the receiving HSM and signed by the root certificate (CertificateAuthorityPublicKeyIdentifier) imported into Amazon Web Services Payment Cryptography. The receiving HSM uses its private key component to unwrap the WrappedKeyCryptogram.   When this operation is successful, Amazon Web Services Payment Cryptography returns the WrappedKeyCryptogram.   To export working keys or IPEK using TR-31  Using this operation, you can export working keys or IPEK using TR-31 symmetric key exchange. In TR-31, you must use an initial key such as KEK to encrypt or wrap the key under export. To establish a KEK, you can use CreateKey or ImportKey.  Set the following parameters:    ExportAttributes: Specify export attributes in case of IPEK export. This parameter is optional for KEK export.    ExportKeyIdentifier: The KeyARN of the KEK or BDK (in case of IPEK) under export.    KeyMaterial: Use Tr31KeyBlock parameters.   When this operation is successful, Amazon Web Services Payment Cryptography returns the working key or IPEK as a TR-31 WrappedKeyBlock.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     GetParametersForExport     ImportKey   
   */
  exportKey(callback?: (err: AWSError, data: PaymentCryptography.Types.ExportKeyOutput) => void): Request<PaymentCryptography.Types.ExportKeyOutput, AWSError>;
  /**
   * Gets the Amazon Web Services Payment Cryptography key associated with the alias.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateAlias     DeleteAlias     ListAliases     UpdateAlias   
   */
  getAlias(params: PaymentCryptography.Types.GetAliasInput, callback?: (err: AWSError, data: PaymentCryptography.Types.GetAliasOutput) => void): Request<PaymentCryptography.Types.GetAliasOutput, AWSError>;
  /**
   * Gets the Amazon Web Services Payment Cryptography key associated with the alias.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateAlias     DeleteAlias     ListAliases     UpdateAlias   
   */
  getAlias(callback?: (err: AWSError, data: PaymentCryptography.Types.GetAliasOutput) => void): Request<PaymentCryptography.Types.GetAliasOutput, AWSError>;
  /**
   * Gets the key material for an Amazon Web Services Payment Cryptography key, including the immutable and mutable data specified when the key was created.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateKey     DeleteKey     ListKeys   
   */
  getKey(params: PaymentCryptography.Types.GetKeyInput, callback?: (err: AWSError, data: PaymentCryptography.Types.GetKeyOutput) => void): Request<PaymentCryptography.Types.GetKeyOutput, AWSError>;
  /**
   * Gets the key material for an Amazon Web Services Payment Cryptography key, including the immutable and mutable data specified when the key was created.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateKey     DeleteKey     ListKeys   
   */
  getKey(callback?: (err: AWSError, data: PaymentCryptography.Types.GetKeyOutput) => void): Request<PaymentCryptography.Types.GetKeyOutput, AWSError>;
  /**
   * Gets the export token and the signing key certificate to initiate a TR-34 key export from Amazon Web Services Payment Cryptography. The signing key certificate signs the wrapped key under export within the TR-34 key payload. The export token and signing key certificate must be in place and operational before calling ExportKey. The export token expires in 7 days. You can use the same export token to export multiple keys from your service account.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     ExportKey     GetParametersForImport   
   */
  getParametersForExport(params: PaymentCryptography.Types.GetParametersForExportInput, callback?: (err: AWSError, data: PaymentCryptography.Types.GetParametersForExportOutput) => void): Request<PaymentCryptography.Types.GetParametersForExportOutput, AWSError>;
  /**
   * Gets the export token and the signing key certificate to initiate a TR-34 key export from Amazon Web Services Payment Cryptography. The signing key certificate signs the wrapped key under export within the TR-34 key payload. The export token and signing key certificate must be in place and operational before calling ExportKey. The export token expires in 7 days. You can use the same export token to export multiple keys from your service account.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     ExportKey     GetParametersForImport   
   */
  getParametersForExport(callback?: (err: AWSError, data: PaymentCryptography.Types.GetParametersForExportOutput) => void): Request<PaymentCryptography.Types.GetParametersForExportOutput, AWSError>;
  /**
   * Gets the import token and the wrapping key certificate in PEM format (base64 encoded) to initiate a TR-34 WrappedKeyBlock or a RSA WrappedKeyCryptogram import into Amazon Web Services Payment Cryptography. The wrapping key certificate wraps the key under import. The import token and wrapping key certificate must be in place and operational before calling ImportKey. The import token expires in 7 days. You can use the same import token to import multiple keys into your service account.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     GetParametersForExport     ImportKey   
   */
  getParametersForImport(params: PaymentCryptography.Types.GetParametersForImportInput, callback?: (err: AWSError, data: PaymentCryptography.Types.GetParametersForImportOutput) => void): Request<PaymentCryptography.Types.GetParametersForImportOutput, AWSError>;
  /**
   * Gets the import token and the wrapping key certificate in PEM format (base64 encoded) to initiate a TR-34 WrappedKeyBlock or a RSA WrappedKeyCryptogram import into Amazon Web Services Payment Cryptography. The wrapping key certificate wraps the key under import. The import token and wrapping key certificate must be in place and operational before calling ImportKey. The import token expires in 7 days. You can use the same import token to import multiple keys into your service account.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     GetParametersForExport     ImportKey   
   */
  getParametersForImport(callback?: (err: AWSError, data: PaymentCryptography.Types.GetParametersForImportOutput) => void): Request<PaymentCryptography.Types.GetParametersForImportOutput, AWSError>;
  /**
   * Gets the public key certificate of the asymmetric key pair that exists within Amazon Web Services Payment Cryptography. Unlike the private key of an asymmetric key, which never leaves Amazon Web Services Payment Cryptography unencrypted, callers with GetPublicKeyCertificate permission can download the public key certificate of the asymmetric key. You can share the public key certificate to allow others to encrypt messages and verify signatures outside of Amazon Web Services Payment Cryptography  Cross-account use: This operation can't be used across different Amazon Web Services accounts.
   */
  getPublicKeyCertificate(params: PaymentCryptography.Types.GetPublicKeyCertificateInput, callback?: (err: AWSError, data: PaymentCryptography.Types.GetPublicKeyCertificateOutput) => void): Request<PaymentCryptography.Types.GetPublicKeyCertificateOutput, AWSError>;
  /**
   * Gets the public key certificate of the asymmetric key pair that exists within Amazon Web Services Payment Cryptography. Unlike the private key of an asymmetric key, which never leaves Amazon Web Services Payment Cryptography unencrypted, callers with GetPublicKeyCertificate permission can download the public key certificate of the asymmetric key. You can share the public key certificate to allow others to encrypt messages and verify signatures outside of Amazon Web Services Payment Cryptography  Cross-account use: This operation can't be used across different Amazon Web Services accounts.
   */
  getPublicKeyCertificate(callback?: (err: AWSError, data: PaymentCryptography.Types.GetPublicKeyCertificateOutput) => void): Request<PaymentCryptography.Types.GetPublicKeyCertificateOutput, AWSError>;
  /**
   * Imports symmetric keys and public key certificates in PEM format (base64 encoded) into Amazon Web Services Payment Cryptography. Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With ImportKey you can import symmetric keys using either symmetric and asymmetric key exchange mechanisms. For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm and RSA wrap and unwrap key exchange mechanisms. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK) or Zone Master Key (ZMK). After which you can import working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography. The TR-34 norm is intended for exchanging 3DES keys only and keys are imported in a WrappedKeyBlock format. Key attributes (such as KeyUsage, KeyAlgorithm, KeyModesOfUse, Exportability) are contained within the key block. With RSA wrap and unwrap, you can exchange both 3DES and AES-128 keys. The keys are imported in a WrappedKeyCryptogram format and you will need to specify the key attributes during import.  You can also import a root public key certificate, used to sign other public key certificates, or a trusted public key certificate under an already established root public key certificate.  To import a public root key certificate  You can also import a root public key certificate, used to sign other public key certificates, or a trusted public key certificate under an already established root public key certificate.  To import a public root key certificate  Using this operation, you can import the public component (in PEM cerificate format) of your private root key. You can use the imported public root key certificate for digital signatures, for example signing wrapping key or signing key in TR-34, within your Amazon Web Services Payment Cryptography account. Set the following parameters:    KeyMaterial: RootCertificatePublicKey     KeyClass: PUBLIC_KEY     KeyModesOfUse: Verify     KeyUsage: TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE     PublicKeyCertificate: The public key certificate in PEM format (base64 encoded) of the private root key under import.    To import a trusted public key certificate  The root public key certificate must be in place and operational before you import a trusted public key certificate. Set the following parameters:    KeyMaterial: TrustedCertificatePublicKey     CertificateAuthorityPublicKeyIdentifier: KeyArn of the RootCertificatePublicKey.    KeyModesOfUse and KeyUsage: Corresponding to the cryptographic operations such as wrap, sign, or encrypt that you will allow the trusted public key certificate to perform.    PublicKeyCertificate: The trusted public key certificate in PEM format (base64 encoded) under import.    To import initial keys (KEK or ZMK or similar) using TR-34  Using this operation, you can import initial key using TR-34 asymmetric key exchange. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During the key import process, KDH is the user who initiates the key import and KRD is Amazon Web Services Payment Cryptography who receives the key. To initiate TR-34 key import, the KDH must obtain an import token by calling GetParametersForImport. This operation generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate (also known as KRD wrapping certificate) and the root certificate chain. The KDH must trust and install the KRD wrapping certificate on its HSM and use it to encrypt (wrap) the KDH key during TR-34 WrappedKeyBlock generation. The import token and associated KRD wrapping certificate expires after 7 days. Next the KDH generates a key pair for the purpose of signing the encrypted KDH key and provides the public certificate of the signing key to Amazon Web Services Payment Cryptography. The KDH will also need to import the root certificate chain of the KDH signing certificate by calling ImportKey for RootCertificatePublicKey. For more information on TR-34 key import, see section Importing symmetric keys in the Amazon Web Services Payment Cryptography User Guide. Set the following parameters:    KeyMaterial: Use Tr34KeyBlock parameters.    CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed the KDH signing key certificate.    ImportToken: Obtained from KRD by calling GetParametersForImport.    WrappedKeyBlock: The TR-34 wrapped key material from KDH. It contains the KDH key under import, wrapped with KRD wrapping certificate and signed by KDH signing private key. This TR-34 key block is typically generated by the KDH Hardware Security Module (HSM) outside of Amazon Web Services Payment Cryptography.    SigningKeyCertificate: The public key certificate in PEM format (base64 encoded) of the KDH signing key generated under the root certificate (CertificateAuthorityPublicKeyIdentifier) imported in Amazon Web Services Payment Cryptography.    To import initial keys (KEK or ZMK or similar) using RSA Wrap and Unwrap  Using this operation, you can import initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate import, call GetParametersForImport with KeyMaterial set to KEY_CRYPTOGRAM to generate an import token. This operation also generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate in PEM format (base64 encoded) and its root certificate chain. The import token and associated KRD wrapping certificate expires after 7 days.  You must trust and install the wrapping certificate and its certificate chain on the sending HSM and use it to wrap the key under export for WrappedKeyCryptogram generation. Next call ImportKey with KeyMaterial set to KEY_CRYPTOGRAM and provide the ImportToken and KeyAttributes for the key under import.  To import working keys using TR-31  Amazon Web Services Payment Cryptography uses TR-31 symmetric key exchange norm to import working keys. A KEK must be established within Amazon Web Services Payment Cryptography by using TR-34 key import or by using CreateKey. To initiate a TR-31 key import, set the following parameters:    KeyMaterial: Use Tr31KeyBlock parameters.    WrappedKeyBlock: The TR-31 wrapped key material. It contains the key under import, encrypted using KEK. The TR-31 key block is typically generated by a HSM outside of Amazon Web Services Payment Cryptography.     WrappingKeyIdentifier: The KeyArn of the KEK that Amazon Web Services Payment Cryptography uses to decrypt or unwrap the key under import.    Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     ExportKey     GetParametersForImport   
   */
  importKey(params: PaymentCryptography.Types.ImportKeyInput, callback?: (err: AWSError, data: PaymentCryptography.Types.ImportKeyOutput) => void): Request<PaymentCryptography.Types.ImportKeyOutput, AWSError>;
  /**
   * Imports symmetric keys and public key certificates in PEM format (base64 encoded) into Amazon Web Services Payment Cryptography. Amazon Web Services Payment Cryptography simplifies key exchange by replacing the existing paper-based approach with a modern electronic approach. With ImportKey you can import symmetric keys using either symmetric and asymmetric key exchange mechanisms. For symmetric key exchange, Amazon Web Services Payment Cryptography uses the ANSI X9 TR-31 norm in accordance with PCI PIN guidelines. And for asymmetric key exchange, Amazon Web Services Payment Cryptography supports ANSI X9 TR-34 norm and RSA wrap and unwrap key exchange mechanisms. Asymmetric key exchange methods are typically used to establish bi-directional trust between the two parties exhanging keys and are used for initial key exchange such as Key Encryption Key (KEK) or Zone Master Key (ZMK). After which you can import working keys using symmetric method to perform various cryptographic operations within Amazon Web Services Payment Cryptography. The TR-34 norm is intended for exchanging 3DES keys only and keys are imported in a WrappedKeyBlock format. Key attributes (such as KeyUsage, KeyAlgorithm, KeyModesOfUse, Exportability) are contained within the key block. With RSA wrap and unwrap, you can exchange both 3DES and AES-128 keys. The keys are imported in a WrappedKeyCryptogram format and you will need to specify the key attributes during import.  You can also import a root public key certificate, used to sign other public key certificates, or a trusted public key certificate under an already established root public key certificate.  To import a public root key certificate  You can also import a root public key certificate, used to sign other public key certificates, or a trusted public key certificate under an already established root public key certificate.  To import a public root key certificate  Using this operation, you can import the public component (in PEM cerificate format) of your private root key. You can use the imported public root key certificate for digital signatures, for example signing wrapping key or signing key in TR-34, within your Amazon Web Services Payment Cryptography account. Set the following parameters:    KeyMaterial: RootCertificatePublicKey     KeyClass: PUBLIC_KEY     KeyModesOfUse: Verify     KeyUsage: TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE     PublicKeyCertificate: The public key certificate in PEM format (base64 encoded) of the private root key under import.    To import a trusted public key certificate  The root public key certificate must be in place and operational before you import a trusted public key certificate. Set the following parameters:    KeyMaterial: TrustedCertificatePublicKey     CertificateAuthorityPublicKeyIdentifier: KeyArn of the RootCertificatePublicKey.    KeyModesOfUse and KeyUsage: Corresponding to the cryptographic operations such as wrap, sign, or encrypt that you will allow the trusted public key certificate to perform.    PublicKeyCertificate: The trusted public key certificate in PEM format (base64 encoded) under import.    To import initial keys (KEK or ZMK or similar) using TR-34  Using this operation, you can import initial key using TR-34 asymmetric key exchange. In TR-34 terminology, the sending party of the key is called Key Distribution Host (KDH) and the receiving party of the key is called Key Receiving Device (KRD). During the key import process, KDH is the user who initiates the key import and KRD is Amazon Web Services Payment Cryptography who receives the key. To initiate TR-34 key import, the KDH must obtain an import token by calling GetParametersForImport. This operation generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate (also known as KRD wrapping certificate) and the root certificate chain. The KDH must trust and install the KRD wrapping certificate on its HSM and use it to encrypt (wrap) the KDH key during TR-34 WrappedKeyBlock generation. The import token and associated KRD wrapping certificate expires after 7 days. Next the KDH generates a key pair for the purpose of signing the encrypted KDH key and provides the public certificate of the signing key to Amazon Web Services Payment Cryptography. The KDH will also need to import the root certificate chain of the KDH signing certificate by calling ImportKey for RootCertificatePublicKey. For more information on TR-34 key import, see section Importing symmetric keys in the Amazon Web Services Payment Cryptography User Guide. Set the following parameters:    KeyMaterial: Use Tr34KeyBlock parameters.    CertificateAuthorityPublicKeyIdentifier: The KeyARN of the certificate chain that signed the KDH signing key certificate.    ImportToken: Obtained from KRD by calling GetParametersForImport.    WrappedKeyBlock: The TR-34 wrapped key material from KDH. It contains the KDH key under import, wrapped with KRD wrapping certificate and signed by KDH signing private key. This TR-34 key block is typically generated by the KDH Hardware Security Module (HSM) outside of Amazon Web Services Payment Cryptography.    SigningKeyCertificate: The public key certificate in PEM format (base64 encoded) of the KDH signing key generated under the root certificate (CertificateAuthorityPublicKeyIdentifier) imported in Amazon Web Services Payment Cryptography.    To import initial keys (KEK or ZMK or similar) using RSA Wrap and Unwrap  Using this operation, you can import initial key using asymmetric RSA wrap and unwrap key exchange method. To initiate import, call GetParametersForImport with KeyMaterial set to KEY_CRYPTOGRAM to generate an import token. This operation also generates an encryption keypair for the purpose of key import, signs the key and returns back the wrapping key certificate in PEM format (base64 encoded) and its root certificate chain. The import token and associated KRD wrapping certificate expires after 7 days.  You must trust and install the wrapping certificate and its certificate chain on the sending HSM and use it to wrap the key under export for WrappedKeyCryptogram generation. Next call ImportKey with KeyMaterial set to KEY_CRYPTOGRAM and provide the ImportToken and KeyAttributes for the key under import.  To import working keys using TR-31  Amazon Web Services Payment Cryptography uses TR-31 symmetric key exchange norm to import working keys. A KEK must be established within Amazon Web Services Payment Cryptography by using TR-34 key import or by using CreateKey. To initiate a TR-31 key import, set the following parameters:    KeyMaterial: Use Tr31KeyBlock parameters.    WrappedKeyBlock: The TR-31 wrapped key material. It contains the key under import, encrypted using KEK. The TR-31 key block is typically generated by a HSM outside of Amazon Web Services Payment Cryptography.     WrappingKeyIdentifier: The KeyArn of the KEK that Amazon Web Services Payment Cryptography uses to decrypt or unwrap the key under import.    Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     ExportKey     GetParametersForImport   
   */
  importKey(callback?: (err: AWSError, data: PaymentCryptography.Types.ImportKeyOutput) => void): Request<PaymentCryptography.Types.ImportKeyOutput, AWSError>;
  /**
   * Lists the aliases for all keys in the caller's Amazon Web Services account and Amazon Web Services Region. You can filter the list of aliases. For more information, see Using aliases in the Amazon Web Services Payment Cryptography User Guide. This is a paginated operation, which means that each response might contain only a subset of all the aliases. When the response contains only a subset of aliases, it includes a NextToken value. Use this value in a subsequent ListAliases request to get more aliases. When you receive a response with no NextToken (or an empty or null value), that means there are no more aliases to get.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateAlias     DeleteAlias     GetAlias     UpdateAlias   
   */
  listAliases(params: PaymentCryptography.Types.ListAliasesInput, callback?: (err: AWSError, data: PaymentCryptography.Types.ListAliasesOutput) => void): Request<PaymentCryptography.Types.ListAliasesOutput, AWSError>;
  /**
   * Lists the aliases for all keys in the caller's Amazon Web Services account and Amazon Web Services Region. You can filter the list of aliases. For more information, see Using aliases in the Amazon Web Services Payment Cryptography User Guide. This is a paginated operation, which means that each response might contain only a subset of all the aliases. When the response contains only a subset of aliases, it includes a NextToken value. Use this value in a subsequent ListAliases request to get more aliases. When you receive a response with no NextToken (or an empty or null value), that means there are no more aliases to get.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateAlias     DeleteAlias     GetAlias     UpdateAlias   
   */
  listAliases(callback?: (err: AWSError, data: PaymentCryptography.Types.ListAliasesOutput) => void): Request<PaymentCryptography.Types.ListAliasesOutput, AWSError>;
  /**
   * Lists the keys in the caller's Amazon Web Services account and Amazon Web Services Region. You can filter the list of keys. This is a paginated operation, which means that each response might contain only a subset of all the keys. When the response contains only a subset of keys, it includes a NextToken value. Use this value in a subsequent ListKeys request to get more keys. When you receive a response with no NextToken (or an empty or null value), that means there are no more keys to get.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateKey     DeleteKey     GetKey   
   */
  listKeys(params: PaymentCryptography.Types.ListKeysInput, callback?: (err: AWSError, data: PaymentCryptography.Types.ListKeysOutput) => void): Request<PaymentCryptography.Types.ListKeysOutput, AWSError>;
  /**
   * Lists the keys in the caller's Amazon Web Services account and Amazon Web Services Region. You can filter the list of keys. This is a paginated operation, which means that each response might contain only a subset of all the keys. When the response contains only a subset of keys, it includes a NextToken value. Use this value in a subsequent ListKeys request to get more keys. When you receive a response with no NextToken (or an empty or null value), that means there are no more keys to get.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateKey     DeleteKey     GetKey   
   */
  listKeys(callback?: (err: AWSError, data: PaymentCryptography.Types.ListKeysOutput) => void): Request<PaymentCryptography.Types.ListKeysOutput, AWSError>;
  /**
   * Lists the tags for an Amazon Web Services resource. This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a NextToken value. Use this value in a subsequent ListTagsForResource request to get more tags. When you receive a response with no NextToken (or an empty or null value), that means there are no more tags to get.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     TagResource     UntagResource   
   */
  listTagsForResource(params: PaymentCryptography.Types.ListTagsForResourceInput, callback?: (err: AWSError, data: PaymentCryptography.Types.ListTagsForResourceOutput) => void): Request<PaymentCryptography.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Lists the tags for an Amazon Web Services resource. This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a NextToken value. Use this value in a subsequent ListTagsForResource request to get more tags. When you receive a response with no NextToken (or an empty or null value), that means there are no more tags to get.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     TagResource     UntagResource   
   */
  listTagsForResource(callback?: (err: AWSError, data: PaymentCryptography.Types.ListTagsForResourceOutput) => void): Request<PaymentCryptography.Types.ListTagsForResourceOutput, AWSError>;
  /**
   * Cancels a scheduled key deletion during the waiting period. Use this operation to restore a Key that is scheduled for deletion. During the waiting period, the KeyState is DELETE_PENDING and deletePendingTimestamp contains the date and time after which the Key will be deleted. After Key is restored, the KeyState is CREATE_COMPLETE, and the value for deletePendingTimestamp is removed.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DeleteKey     StartKeyUsage     StopKeyUsage   
   */
  restoreKey(params: PaymentCryptography.Types.RestoreKeyInput, callback?: (err: AWSError, data: PaymentCryptography.Types.RestoreKeyOutput) => void): Request<PaymentCryptography.Types.RestoreKeyOutput, AWSError>;
  /**
   * Cancels a scheduled key deletion during the waiting period. Use this operation to restore a Key that is scheduled for deletion. During the waiting period, the KeyState is DELETE_PENDING and deletePendingTimestamp contains the date and time after which the Key will be deleted. After Key is restored, the KeyState is CREATE_COMPLETE, and the value for deletePendingTimestamp is removed.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DeleteKey     StartKeyUsage     StopKeyUsage   
   */
  restoreKey(callback?: (err: AWSError, data: PaymentCryptography.Types.RestoreKeyOutput) => void): Request<PaymentCryptography.Types.RestoreKeyOutput, AWSError>;
  /**
   * Enables an Amazon Web Services Payment Cryptography key, which makes it active for cryptographic operations within Amazon Web Services Payment Cryptography  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     StopKeyUsage   
   */
  startKeyUsage(params: PaymentCryptography.Types.StartKeyUsageInput, callback?: (err: AWSError, data: PaymentCryptography.Types.StartKeyUsageOutput) => void): Request<PaymentCryptography.Types.StartKeyUsageOutput, AWSError>;
  /**
   * Enables an Amazon Web Services Payment Cryptography key, which makes it active for cryptographic operations within Amazon Web Services Payment Cryptography  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     StopKeyUsage   
   */
  startKeyUsage(callback?: (err: AWSError, data: PaymentCryptography.Types.StartKeyUsageOutput) => void): Request<PaymentCryptography.Types.StartKeyUsageOutput, AWSError>;
  /**
   * Disables an Amazon Web Services Payment Cryptography key, which makes it inactive within Amazon Web Services Payment Cryptography. You can use this operation instead of DeleteKey to deactivate a key. You can enable the key in the future by calling StartKeyUsage.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DeleteKey     StartKeyUsage   
   */
  stopKeyUsage(params: PaymentCryptography.Types.StopKeyUsageInput, callback?: (err: AWSError, data: PaymentCryptography.Types.StopKeyUsageOutput) => void): Request<PaymentCryptography.Types.StopKeyUsageOutput, AWSError>;
  /**
   * Disables an Amazon Web Services Payment Cryptography key, which makes it inactive within Amazon Web Services Payment Cryptography. You can use this operation instead of DeleteKey to deactivate a key. You can enable the key in the future by calling StartKeyUsage.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     DeleteKey     StartKeyUsage   
   */
  stopKeyUsage(callback?: (err: AWSError, data: PaymentCryptography.Types.StopKeyUsageOutput) => void): Request<PaymentCryptography.Types.StopKeyUsageOutput, AWSError>;
  /**
   * Adds or edits tags on an Amazon Web Services Payment Cryptography key.  Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.  Each tag consists of a tag key and a tag value, both of which are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value. You can also add tags to an Amazon Web Services Payment Cryptography key when you create it with CreateKey.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     ListTagsForResource     UntagResource   
   */
  tagResource(params: PaymentCryptography.Types.TagResourceInput, callback?: (err: AWSError, data: PaymentCryptography.Types.TagResourceOutput) => void): Request<PaymentCryptography.Types.TagResourceOutput, AWSError>;
  /**
   * Adds or edits tags on an Amazon Web Services Payment Cryptography key.  Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.  Each tag consists of a tag key and a tag value, both of which are case-sensitive strings. The tag value can be an empty (null) string. To add a tag, specify a new tag key and a tag value. To edit a tag, specify an existing tag key and a new tag value. You can also add tags to an Amazon Web Services Payment Cryptography key when you create it with CreateKey.  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     ListTagsForResource     UntagResource   
   */
  tagResource(callback?: (err: AWSError, data: PaymentCryptography.Types.TagResourceOutput) => void): Request<PaymentCryptography.Types.TagResourceOutput, AWSError>;
  /**
   * Deletes a tag from an Amazon Web Services Payment Cryptography key.  Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     ListTagsForResource     TagResource   
   */
  untagResource(params: PaymentCryptography.Types.UntagResourceInput, callback?: (err: AWSError, data: PaymentCryptography.Types.UntagResourceOutput) => void): Request<PaymentCryptography.Types.UntagResourceOutput, AWSError>;
  /**
   * Deletes a tag from an Amazon Web Services Payment Cryptography key.  Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key.   Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     ListTagsForResource     TagResource   
   */
  untagResource(callback?: (err: AWSError, data: PaymentCryptography.Types.UntagResourceOutput) => void): Request<PaymentCryptography.Types.UntagResourceOutput, AWSError>;
  /**
   * Associates an existing Amazon Web Services Payment Cryptography alias with a different key. Each alias is associated with only one Amazon Web Services Payment Cryptography key at a time, although a key can have multiple aliases. The alias and the Amazon Web Services Payment Cryptography key must be in the same Amazon Web Services account and Amazon Web Services Region  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateAlias     DeleteAlias     GetAlias     ListAliases   
   */
  updateAlias(params: PaymentCryptography.Types.UpdateAliasInput, callback?: (err: AWSError, data: PaymentCryptography.Types.UpdateAliasOutput) => void): Request<PaymentCryptography.Types.UpdateAliasOutput, AWSError>;
  /**
   * Associates an existing Amazon Web Services Payment Cryptography alias with a different key. Each alias is associated with only one Amazon Web Services Payment Cryptography key at a time, although a key can have multiple aliases. The alias and the Amazon Web Services Payment Cryptography key must be in the same Amazon Web Services account and Amazon Web Services Region  Cross-account use: This operation can't be used across different Amazon Web Services accounts.  Related operations:     CreateAlias     DeleteAlias     GetAlias     ListAliases   
   */
  updateAlias(callback?: (err: AWSError, data: PaymentCryptography.Types.UpdateAliasOutput) => void): Request<PaymentCryptography.Types.UpdateAliasOutput, AWSError>;
}
declare namespace PaymentCryptography {
  export interface Alias {
    /**
     * A friendly name that you can use to refer to a key. The value must begin with alias/.  Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output. 
     */
    AliasName: AliasName;
    /**
     * The KeyARN of the key associated with the alias.
     */
    KeyArn?: KeyArn;
  }
  export type AliasName = string;
  export type Aliases = Alias[];
  export type Boolean = boolean;
  export type CertificateType = string;
  export interface CreateAliasInput {
    /**
     * A friendly name that you can use to refer to a key. An alias must begin with alias/ followed by a name, for example alias/ExampleAlias. It can contain only alphanumeric characters, forward slashes (/), underscores (_), and dashes (-).  Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output. 
     */
    AliasName: AliasName;
    /**
     * The KeyARN of the key to associate with the alias.
     */
    KeyArn?: KeyArn;
  }
  export interface CreateAliasOutput {
    /**
     * The alias for the key.
     */
    Alias: Alias;
  }
  export interface CreateKeyInput {
    /**
     * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.
     */
    KeyAttributes: KeyAttributes;
    /**
     * The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity. For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.
     */
    KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm;
    /**
     * Specifies whether the key is exportable from the service.
     */
    Exportable: Boolean;
    /**
     * Specifies whether to enable the key. If the key is enabled, it is activated for use within the service. If the key is not enabled, then it is created but not activated. The default value is enabled.
     */
    Enabled?: Boolean;
    /**
     * Assigns one or more tags to the Amazon Web Services Payment Cryptography key. Use this parameter to tag a key when it is created. To tag an existing Amazon Web Services Payment Cryptography key, use the TagResource operation. Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key.   Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.   Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key. 
     */
    Tags?: Tags;
  }
  export interface CreateKeyOutput {
    /**
     * The key material that contains all the key attributes.
     */
    Key: Key;
  }
  export interface DeleteAliasInput {
    /**
     * A friendly name that you can use to refer Amazon Web Services Payment Cryptography key. This value must begin with alias/ followed by a name, such as alias/ExampleAlias.
     */
    AliasName: AliasName;
  }
  export interface DeleteAliasOutput {
  }
  export interface DeleteKeyInput {
    /**
     * The KeyARN of the key that is scheduled for deletion.
     */
    KeyIdentifier: KeyArnOrKeyAliasType;
    /**
     * The waiting period for key deletion. The default value is seven days.
     */
    DeleteKeyInDays?: DeleteKeyInputDeleteKeyInDaysInteger;
  }
  export type DeleteKeyInputDeleteKeyInDaysInteger = number;
  export interface DeleteKeyOutput {
    /**
     * The KeyARN of the key that is scheduled for deletion.
     */
    Key: Key;
  }
  export type EvenHexLengthBetween16And32 = string;
  export interface ExportAttributes {
    /**
     * Parameter information for IPEK export.
     */
    ExportDukptInitialKey?: ExportDukptInitialKey;
    /**
     * The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity. Specify KCV for IPEK export only. For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.
     */
    KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm;
  }
  export interface ExportDukptInitialKey {
    /**
     * The KSN for IPEK generation using DUKPT.  KSN must be padded before sending to Amazon Web Services Payment Cryptography. KSN hex length should be 20 for a TDES_2KEY key or 24 for an AES key.
     */
    KeySerialNumber: HexLength20Or24;
  }
  export interface ExportKeyCryptogram {
    /**
     * The KeyARN of the certificate chain that signs the wrapping key certificate during RSA wrap and unwrap key export.
     */
    CertificateAuthorityPublicKeyIdentifier: KeyArnOrKeyAliasType;
    /**
     * The wrapping key certificate in PEM format (base64 encoded). Amazon Web Services Payment Cryptography uses this certificate to wrap the key under export.
     */
    WrappingKeyCertificate: CertificateType;
    /**
     * The wrapping spec for the key under export.
     */
    WrappingSpec?: WrappingKeySpec;
  }
  export interface ExportKeyInput {
    /**
     * The key block format type, for example, TR-34 or TR-31, to use during key material export.
     */
    KeyMaterial: ExportKeyMaterial;
    /**
     * The KeyARN of the key under export from Amazon Web Services Payment Cryptography.
     */
    ExportKeyIdentifier: KeyArnOrKeyAliasType;
    /**
     * The attributes for IPEK generation during export.
     */
    ExportAttributes?: ExportAttributes;
  }
  export interface ExportKeyMaterial {
    /**
     * Parameter information for key material export using symmetric TR-31 key exchange method.
     */
    Tr31KeyBlock?: ExportTr31KeyBlock;
    /**
     * Parameter information for key material export using the asymmetric TR-34 key exchange method.
     */
    Tr34KeyBlock?: ExportTr34KeyBlock;
    /**
     * Parameter information for key material export using asymmetric RSA wrap and unwrap key exchange method
     */
    KeyCryptogram?: ExportKeyCryptogram;
  }
  export interface ExportKeyOutput {
    /**
     * The key material under export as a TR-34 WrappedKeyBlock or a TR-31 WrappedKeyBlock. or a RSA WrappedKeyCryptogram.
     */
    WrappedKey?: WrappedKey;
  }
  export type ExportTokenId = string;
  export interface ExportTr31KeyBlock {
    /**
     * The KeyARN of the the wrapping key. This key encrypts or wraps the key under export for TR-31 key block generation.
     */
    WrappingKeyIdentifier: KeyArnOrKeyAliasType;
    /**
     * Optional metadata for export associated with the key material. This data is signed but transmitted in clear text.
     */
    KeyBlockHeaders?: KeyBlockHeaders;
  }
  export interface ExportTr34KeyBlock {
    /**
     * The KeyARN of the certificate chain that signs the wrapping key certificate during TR-34 key export.
     */
    CertificateAuthorityPublicKeyIdentifier: KeyArnOrKeyAliasType;
    /**
     * The KeyARN of the wrapping key certificate. Amazon Web Services Payment Cryptography uses this certificate to wrap the key under export.
     */
    WrappingKeyCertificate: CertificateType;
    /**
     * The export token to initiate key export from Amazon Web Services Payment Cryptography. It also contains the signing key certificate that will sign the wrapped key during TR-34 key block generation. Call GetParametersForExport to receive an export token. It expires after 7 days. You can use the same export token to export multiple keys from the same service account.
     */
    ExportToken: ExportTokenId;
    /**
     * The format of key block that Amazon Web Services Payment Cryptography will use during key export.
     */
    KeyBlockFormat: Tr34KeyBlockFormat;
    /**
     * A random number value that is unique to the TR-34 key block generated using 2 pass. The operation will fail, if a random nonce value is not provided for a TR-34 key block generated using 2 pass.
     */
    RandomNonce?: EvenHexLengthBetween16And32;
    /**
     * Optional metadata for export associated with the key material. This data is signed but transmitted in clear text.
     */
    KeyBlockHeaders?: KeyBlockHeaders;
  }
  export interface GetAliasInput {
    /**
     * The alias of the Amazon Web Services Payment Cryptography key.
     */
    AliasName: AliasName;
  }
  export interface GetAliasOutput {
    /**
     * The alias of the Amazon Web Services Payment Cryptography key.
     */
    Alias: Alias;
  }
  export interface GetKeyInput {
    /**
     * The KeyARN of the Amazon Web Services Payment Cryptography key.
     */
    KeyIdentifier: KeyArnOrKeyAliasType;
  }
  export interface GetKeyOutput {
    /**
     * The key material, including the immutable and mutable data for the key.
     */
    Key: Key;
  }
  export interface GetParametersForExportInput {
    /**
     * The key block format type (for example, TR-34 or TR-31) to use during key material export. Export token is only required for a TR-34 key export, TR34_KEY_BLOCK. Export token is not required for TR-31 key export.
     */
    KeyMaterialType: KeyMaterialType;
    /**
     * The signing key algorithm to generate a signing key certificate. This certificate signs the wrapped key under export within the TR-34 key block. RSA_2048 is the only signing key algorithm allowed.
     */
    SigningKeyAlgorithm: KeyAlgorithm;
  }
  export interface GetParametersForExportOutput {
    /**
     * The signing key certificate in PEM format (base64 encoded) of the public key for signature within the TR-34 key block. The certificate expires after 7 days.
     */
    SigningKeyCertificate: CertificateType;
    /**
     * The root certificate authority (CA) that signed the signing key certificate in PEM format (base64 encoded).
     */
    SigningKeyCertificateChain: CertificateType;
    /**
     * The algorithm of the signing key certificate for use in TR-34 key block generation. RSA_2048 is the only signing key algorithm allowed.
     */
    SigningKeyAlgorithm: KeyAlgorithm;
    /**
     * The export token to initiate key export from Amazon Web Services Payment Cryptography. The export token expires after 7 days. You can use the same export token to export multiple keys from the same service account.
     */
    ExportToken: ExportTokenId;
    /**
     * The validity period of the export token.
     */
    ParametersValidUntilTimestamp: Timestamp;
  }
  export interface GetParametersForImportInput {
    /**
     * The method to use for key material import. Import token is only required for TR-34 WrappedKeyBlock (TR34_KEY_BLOCK) and RSA WrappedKeyCryptogram (KEY_CRYPTOGRAM). Import token is not required for TR-31, root public key cerificate or trusted public key certificate.
     */
    KeyMaterialType: KeyMaterialType;
    /**
     * The wrapping key algorithm to generate a wrapping key certificate. This certificate wraps the key under import. At this time, RSA_2048 is the allowed algorithm for TR-34 WrappedKeyBlock import. Additionally, RSA_2048, RSA_3072, RSA_4096 are the allowed algorithms for RSA WrappedKeyCryptogram import.
     */
    WrappingKeyAlgorithm: KeyAlgorithm;
  }
  export interface GetParametersForImportOutput {
    /**
     * The wrapping key certificate in PEM format (base64 encoded) of the wrapping key for use within the TR-34 key block. The certificate expires in 7 days.
     */
    WrappingKeyCertificate: CertificateType;
    /**
     * The Amazon Web Services Payment Cryptography root certificate authority (CA) that signed the wrapping key certificate in PEM format (base64 encoded).
     */
    WrappingKeyCertificateChain: CertificateType;
    /**
     * The algorithm of the wrapping key for use within TR-34 WrappedKeyBlock or RSA WrappedKeyCryptogram.
     */
    WrappingKeyAlgorithm: KeyAlgorithm;
    /**
     * The import token to initiate key import into Amazon Web Services Payment Cryptography. The import token expires after 7 days. You can use the same import token to import multiple keys to the same service account.
     */
    ImportToken: ImportTokenId;
    /**
     * The validity period of the import token.
     */
    ParametersValidUntilTimestamp: Timestamp;
  }
  export interface GetPublicKeyCertificateInput {
    /**
     * The KeyARN of the asymmetric key pair.
     */
    KeyIdentifier: KeyArnOrKeyAliasType;
  }
  export interface GetPublicKeyCertificateOutput {
    /**
     * The public key component of the asymmetric key pair in a certificate PEM format (base64 encoded). It is signed by the root certificate authority (CA). The certificate expires in 90 days.
     */
    KeyCertificate: CertificateType;
    /**
     * The root certificate authority (CA) that signed the public key certificate in PEM format (base64 encoded) of the asymmetric key pair.
     */
    KeyCertificateChain: CertificateType;
  }
  export type HexLength20Or24 = string;
  export interface ImportKeyCryptogram {
    KeyAttributes: KeyAttributes;
    /**
     * Specifies whether the key is exportable from the service.
     */
    Exportable: Boolean;
    /**
     * The RSA wrapped key cryptogram under import.
     */
    WrappedKeyCryptogram: WrappedKeyCryptogram;
    /**
     * The import token that initiates key import using the asymmetric RSA wrap and unwrap key exchange method into AWS Payment Cryptography. It expires after 7 days. You can use the same import token to import multiple keys to the same service account.
     */
    ImportToken: ImportTokenId;
    /**
     * The wrapping spec for the wrapped key cryptogram.
     */
    WrappingSpec?: WrappingKeySpec;
  }
  export interface ImportKeyInput {
    /**
     * The key or public key certificate type to use during key material import, for example TR-34 or RootCertificatePublicKey.
     */
    KeyMaterial: ImportKeyMaterial;
    /**
     * The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity. For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.
     */
    KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm;
    /**
     * Specifies whether import key is enabled.
     */
    Enabled?: Boolean;
    /**
     * Assigns one or more tags to the Amazon Web Services Payment Cryptography key. Use this parameter to tag a key when it is imported. To tag an existing Amazon Web Services Payment Cryptography key, use the TagResource operation. Each tag consists of a tag key and a tag value. Both the tag key and the tag value are required, but the tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. If you specify an existing tag key with a different tag value, Amazon Web Services Payment Cryptography replaces the current tag value with the specified one.  Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.   Tagging or untagging an Amazon Web Services Payment Cryptography key can allow or deny permission to the key. 
     */
    Tags?: Tags;
  }
  export interface ImportKeyMaterial {
    /**
     * Parameter information for root public key certificate import.
     */
    RootCertificatePublicKey?: RootCertificatePublicKey;
    /**
     * Parameter information for trusted public key certificate import.
     */
    TrustedCertificatePublicKey?: TrustedCertificatePublicKey;
    /**
     * Parameter information for key material import using symmetric TR-31 key exchange method.
     */
    Tr31KeyBlock?: ImportTr31KeyBlock;
    /**
     * Parameter information for key material import using the asymmetric TR-34 key exchange method.
     */
    Tr34KeyBlock?: ImportTr34KeyBlock;
    /**
     * Parameter information for key material import using asymmetric RSA wrap and unwrap key exchange method.
     */
    KeyCryptogram?: ImportKeyCryptogram;
  }
  export interface ImportKeyOutput {
    /**
     * The KeyARN of the key material imported within Amazon Web Services Payment Cryptography.
     */
    Key: Key;
  }
  export type ImportTokenId = string;
  export interface ImportTr31KeyBlock {
    /**
     * The KeyARN of the key that will decrypt or unwrap a TR-31 key block during import.
     */
    WrappingKeyIdentifier: KeyArnOrKeyAliasType;
    /**
     * The TR-31 wrapped key block to import.
     */
    WrappedKeyBlock: Tr31WrappedKeyBlock;
  }
  export interface ImportTr34KeyBlock {
    /**
     * The KeyARN of the certificate chain that signs the signing key certificate during TR-34 key import.
     */
    CertificateAuthorityPublicKeyIdentifier: KeyArnOrKeyAliasType;
    /**
     * The public key component in PEM certificate format of the private key that signs the KDH TR-34 WrappedKeyBlock.
     */
    SigningKeyCertificate: CertificateType;
    /**
     * The import token that initiates key import using the asymmetric TR-34 key exchange method into Amazon Web Services Payment Cryptography. It expires after 7 days. You can use the same import token to import multiple keys to the same service account.
     */
    ImportToken: ImportTokenId;
    /**
     * The TR-34 wrapped key block to import.
     */
    WrappedKeyBlock: Tr34WrappedKeyBlock;
    /**
     * The key block format to use during key import. The only value allowed is X9_TR34_2012.
     */
    KeyBlockFormat: Tr34KeyBlockFormat;
    /**
     * A random number value that is unique to the TR-34 key block generated using 2 pass. The operation will fail, if a random nonce value is not provided for a TR-34 key block generated using 2 pass.
     */
    RandomNonce?: EvenHexLengthBetween16And32;
  }
  export interface Key {
    /**
     * The Amazon Resource Name (ARN) of the key.
     */
    KeyArn: KeyArn;
    /**
     * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.
     */
    KeyAttributes: KeyAttributes;
    /**
     * The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed.
     */
    KeyCheckValue: KeyCheckValue;
    /**
     * The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity. For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.
     */
    KeyCheckValueAlgorithm: KeyCheckValueAlgorithm;
    /**
     * Specifies whether the key is enabled. 
     */
    Enabled: Boolean;
    /**
     * Specifies whether the key is exportable. This data is immutable after the key is created.
     */
    Exportable: Boolean;
    /**
     * The state of key that is being created or deleted.
     */
    KeyState: KeyState;
    /**
     * The source of the key material. For keys created within Amazon Web Services Payment Cryptography, the value is AWS_PAYMENT_CRYPTOGRAPHY. For keys imported into Amazon Web Services Payment Cryptography, the value is EXTERNAL.
     */
    KeyOrigin: KeyOrigin;
    /**
     * The date and time when the key was created.
     */
    CreateTimestamp: Timestamp;
    /**
     * The date and time after which Amazon Web Services Payment Cryptography will start using the key material for cryptographic operations.
     */
    UsageStartTimestamp?: Timestamp;
    /**
     * The date and time after which Amazon Web Services Payment Cryptography will stop using the key material for cryptographic operations.
     */
    UsageStopTimestamp?: Timestamp;
    /**
     * The date and time after which Amazon Web Services Payment Cryptography will delete the key. This value is present only when KeyState is DELETE_PENDING and the key is scheduled for deletion.
     */
    DeletePendingTimestamp?: Timestamp;
    /**
     * The date and time after which Amazon Web Services Payment Cryptography will delete the key. This value is present only when when the KeyState is DELETE_COMPLETE and the Amazon Web Services Payment Cryptography key is deleted.
     */
    DeleteTimestamp?: Timestamp;
  }
  export type KeyAlgorithm = "TDES_2KEY"|"TDES_3KEY"|"AES_128"|"AES_192"|"AES_256"|"RSA_2048"|"RSA_3072"|"RSA_4096"|string;
  export type KeyArn = string;
  export type KeyArnOrKeyAliasType = string;
  export interface KeyAttributes {
    /**
     * The cryptographic usage of an Amazon Web Services Payment Cryptography key as deﬁned in section A.5.2 of the TR-31 spec.
     */
    KeyUsage: KeyUsage;
    /**
     * The type of Amazon Web Services Payment Cryptography key to create, which determines the classiﬁcation of the cryptographic method and whether Amazon Web Services Payment Cryptography key contains a symmetric key or an asymmetric key pair.
     */
    KeyClass: KeyClass;
    /**
     * The key algorithm to be use during creation of an Amazon Web Services Payment Cryptography key. For symmetric keys, Amazon Web Services Payment Cryptography supports AES and TDES algorithms. For asymmetric keys, Amazon Web Services Payment Cryptography supports RSA and ECC_NIST algorithms.
     */
    KeyAlgorithm: KeyAlgorithm;
    /**
     * The list of cryptographic operations that you can perform using the key.
     */
    KeyModesOfUse: KeyModesOfUse;
  }
  export interface KeyBlockHeaders {
    KeyModesOfUse?: KeyModesOfUse;
    /**
     * Specifies subsequent exportability of the key within the key block after it is received by the receiving party. It can be used to further restrict exportability of the key after export from Amazon Web Services Payment Cryptography. When set to EXPORTABLE, the key can be subsequently exported by the receiver under a KEK using TR-31 or TR-34 key block export only. When set to NON_EXPORTABLE, the key cannot be subsequently exported by the receiver. When set to SENSITIVE, the key can be exported by the receiver under a KEK using TR-31, TR-34, RSA wrap and unwrap cryptogram or using a symmetric cryptogram key export method. For further information refer to ANSI X9.143-2022.
     */
    KeyExportability?: KeyExportability;
    /**
     * Parameter used to indicate the version of the key carried in the key block or indicate the value carried in the key block is a component of a key.
     */
    KeyVersion?: KeyVersion;
    /**
     * Parameter used to indicate the type of optional data in key block headers. Refer to ANSI X9.143-2022 for information on allowed data type for optional blocks. Optional block character limit is 112 characters. For each optional block, 2 characters are reserved for optional block ID and 2 characters reserved for optional block length. More than one optional blocks can be included as long as the combined length does not increase 112 characters.
     */
    OptionalBlocks?: OptionalBlocks;
  }
  export type KeyCheckValue = string;
  export type KeyCheckValueAlgorithm = "CMAC"|"ANSI_X9_24"|string;
  export type KeyClass = "SYMMETRIC_KEY"|"ASYMMETRIC_KEY_PAIR"|"PRIVATE_KEY"|"PUBLIC_KEY"|string;
  export type KeyExportability = "EXPORTABLE"|"NON_EXPORTABLE"|"SENSITIVE"|string;
  export type KeyMaterial = string;
  export type KeyMaterialType = "TR34_KEY_BLOCK"|"TR31_KEY_BLOCK"|"ROOT_PUBLIC_KEY_CERTIFICATE"|"TRUSTED_PUBLIC_KEY_CERTIFICATE"|"KEY_CRYPTOGRAM"|string;
  export interface KeyModesOfUse {
    /**
     * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to encrypt data.
     */
    Encrypt?: PrimitiveBoolean;
    /**
     * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to decrypt data.
     */
    Decrypt?: PrimitiveBoolean;
    /**
     * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to wrap other keys.
     */
    Wrap?: PrimitiveBoolean;
    /**
     * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to unwrap other keys.
     */
    Unwrap?: PrimitiveBoolean;
    /**
     * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to generate and verify other card and PIN verification keys.
     */
    Generate?: PrimitiveBoolean;
    /**
     * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used for signing.
     */
    Sign?: PrimitiveBoolean;
    /**
     * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to verify signatures.
     */
    Verify?: PrimitiveBoolean;
    /**
     * Speciﬁes whether an Amazon Web Services Payment Cryptography key can be used to derive new keys.
     */
    DeriveKey?: PrimitiveBoolean;
    /**
     * Speciﬁes whether an Amazon Web Services Payment Cryptography key has no special restrictions other than the restrictions implied by KeyUsage.
     */
    NoRestrictions?: PrimitiveBoolean;
  }
  export type KeyOrigin = "EXTERNAL"|"AWS_PAYMENT_CRYPTOGRAPHY"|string;
  export type KeyState = "CREATE_IN_PROGRESS"|"CREATE_COMPLETE"|"DELETE_PENDING"|"DELETE_COMPLETE"|string;
  export interface KeySummary {
    /**
     * The Amazon Resource Name (ARN) of the key.
     */
    KeyArn: KeyArn;
    /**
     * The state of an Amazon Web Services Payment Cryptography that is being created or deleted.
     */
    KeyState: KeyState;
    /**
     * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the key is created.
     */
    KeyAttributes: KeyAttributes;
    /**
     * The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed.
     */
    KeyCheckValue: KeyCheckValue;
    /**
     * Specifies whether the key is exportable. This data is immutable after the key is created.
     */
    Exportable: Boolean;
    /**
     * Specifies whether the key is enabled. 
     */
    Enabled: Boolean;
  }
  export type KeySummaryList = KeySummary[];
  export type KeyUsage = "TR31_B0_BASE_DERIVATION_KEY"|"TR31_C0_CARD_VERIFICATION_KEY"|"TR31_D0_SYMMETRIC_DATA_ENCRYPTION_KEY"|"TR31_D1_ASYMMETRIC_KEY_FOR_DATA_ENCRYPTION"|"TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS"|"TR31_E1_EMV_MKEY_CONFIDENTIALITY"|"TR31_E2_EMV_MKEY_INTEGRITY"|"TR31_E4_EMV_MKEY_DYNAMIC_NUMBERS"|"TR31_E5_EMV_MKEY_CARD_PERSONALIZATION"|"TR31_E6_EMV_MKEY_OTHER"|"TR31_K0_KEY_ENCRYPTION_KEY"|"TR31_K1_KEY_BLOCK_PROTECTION_KEY"|"TR31_K3_ASYMMETRIC_KEY_FOR_KEY_AGREEMENT"|"TR31_M3_ISO_9797_3_MAC_KEY"|"TR31_M1_ISO_9797_1_MAC_KEY"|"TR31_M6_ISO_9797_5_CMAC_KEY"|"TR31_M7_HMAC_KEY"|"TR31_P0_PIN_ENCRYPTION_KEY"|"TR31_P1_PIN_GENERATION_KEY"|"TR31_S0_ASYMMETRIC_KEY_FOR_DIGITAL_SIGNATURE"|"TR31_V1_IBM3624_PIN_VERIFICATION_KEY"|"TR31_V2_VISA_PIN_VERIFICATION_KEY"|"TR31_K2_TR34_ASYMMETRIC_KEY"|string;
  export type KeyVersion = string;
  export interface ListAliasesInput {
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextToken from the truncated response you just received.
     */
    NextToken?: NextToken;
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
     */
    MaxResults?: MaxResults;
  }
  export interface ListAliasesOutput {
    /**
     * The list of aliases. Each alias describes the KeyArn contained within.
     */
    Aliases: Aliases;
    /**
     * The token for the next set of results, or an empty or null value if there are no more results.
     */
    NextToken?: NextToken;
  }
  export interface ListKeysInput {
    /**
     * The key state of the keys you want to list.
     */
    KeyState?: KeyState;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextToken from the truncated response you just received.
     */
    NextToken?: NextToken;
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
     */
    MaxResults?: MaxResults;
  }
  export interface ListKeysOutput {
    /**
     * The list of keys created within the caller's Amazon Web Services account and Amazon Web Services Region.
     */
    Keys: KeySummaryList;
    /**
     * The token for the next set of results, or an empty or null value if there are no more results.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceInput {
    /**
     * The KeyARN of the key whose tags you are getting.
     */
    ResourceArn: ResourceArn;
    /**
     * Use this parameter in a subsequent request after you receive a response with truncated results. Set it to the value of NextToken from the truncated response you just received.
     */
    NextToken?: NextToken;
    /**
     * Use this parameter to specify the maximum number of items to return. When this value is present, Amazon Web Services Payment Cryptography does not return more than the specified number of items, but it might return fewer. This value is optional. If you include a value, it must be between 1 and 100, inclusive. If you do not include a value, it defaults to 50.
     */
    MaxResults?: MaxResults;
  }
  export interface ListTagsForResourceOutput {
    /**
     * The list of tags associated with a ResourceArn. Each tag will list the key-value pair contained within that tag.
     */
    Tags: Tags;
    /**
     * The token for the next set of results, or an empty or null value if there are no more results.
     */
    NextToken?: NextToken;
  }
  export type MaxResults = number;
  export type NextToken = string;
  export type OptionalBlockId = string;
  export type OptionalBlockValue = string;
  export type OptionalBlocks = {[key: string]: OptionalBlockValue};
  export type PrimitiveBoolean = boolean;
  export type ResourceArn = string;
  export interface RestoreKeyInput {
    /**
     * The KeyARN of the key to be restored within Amazon Web Services Payment Cryptography.
     */
    KeyIdentifier: KeyArnOrKeyAliasType;
  }
  export interface RestoreKeyOutput {
    /**
     * The key material of the restored key. The KeyState will change to CREATE_COMPLETE and value for DeletePendingTimestamp gets removed. 
     */
    Key: Key;
  }
  export interface RootCertificatePublicKey {
    /**
     * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after the root public key is imported.
     */
    KeyAttributes: KeyAttributes;
    /**
     * Parameter information for root public key certificate import.
     */
    PublicKeyCertificate: CertificateType;
  }
  export interface StartKeyUsageInput {
    /**
     * The KeyArn of the key.
     */
    KeyIdentifier: KeyArnOrKeyAliasType;
  }
  export interface StartKeyUsageOutput {
    /**
     * The KeyARN of the Amazon Web Services Payment Cryptography key activated for use.
     */
    Key: Key;
  }
  export interface StopKeyUsageInput {
    /**
     * The KeyArn of the key.
     */
    KeyIdentifier: KeyArnOrKeyAliasType;
  }
  export interface StopKeyUsageOutput {
    /**
     * The KeyARN of the key.
     */
    Key: Key;
  }
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
  export type TagKeys = TagKey[];
  export interface TagResourceInput {
    /**
     * The KeyARN of the key whose tags are being updated.
     */
    ResourceArn: ResourceArn;
    /**
     * One or more tags. Each tag consists of a tag key and a tag value. The tag value can be an empty (null) string. You can't have more than one tag on an Amazon Web Services Payment Cryptography key with the same tag key. If you specify an existing tag key with a different tag value, Amazon Web Services Payment Cryptography replaces the current tag value with the new one.  Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.  To use this parameter, you must have TagResource permission in an IAM policy.  Don't include personal, confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output. 
     */
    Tags: Tags;
  }
  export interface TagResourceOutput {
  }
  export type TagValue = string;
  export type Tags = Tag[];
  export type Timestamp = Date;
  export type Tr31WrappedKeyBlock = string;
  export type Tr34KeyBlockFormat = "X9_TR34_2012"|string;
  export type Tr34WrappedKeyBlock = string;
  export interface TrustedCertificatePublicKey {
    /**
     * The role of the key, the algorithm it supports, and the cryptographic operations allowed with the key. This data is immutable after a trusted public key is imported.
     */
    KeyAttributes: KeyAttributes;
    /**
     * Parameter information for trusted public key certificate import.
     */
    PublicKeyCertificate: CertificateType;
    /**
     * The KeyARN of the root public key certificate or certificate chain that signs the trusted public key certificate import.
     */
    CertificateAuthorityPublicKeyIdentifier: KeyArnOrKeyAliasType;
  }
  export interface UntagResourceInput {
    /**
     * The KeyARN of the key whose tags are being removed.
     */
    ResourceArn: ResourceArn;
    /**
     * One or more tag keys. Don't include the tag values. If the Amazon Web Services Payment Cryptography key doesn't have the specified tag key, Amazon Web Services Payment Cryptography doesn't throw an exception or return a response. To confirm that the operation succeeded, use the ListTagsForResource operation.
     */
    TagKeys: TagKeys;
  }
  export interface UntagResourceOutput {
  }
  export interface UpdateAliasInput {
    /**
     * The alias whose associated key is changing.
     */
    AliasName: AliasName;
    /**
     * The KeyARN for the key that you are updating or removing from the alias.
     */
    KeyArn?: KeyArn;
  }
  export interface UpdateAliasOutput {
    /**
     * The alias name.
     */
    Alias: Alias;
  }
  export interface WrappedKey {
    /**
     * The KeyARN of the wrapped key.
     */
    WrappingKeyArn: KeyArn;
    /**
     * The key block format of a wrapped key.
     */
    WrappedKeyMaterialFormat: WrappedKeyMaterialFormat;
    /**
     * Parameter information for generating a wrapped key using TR-31 or TR-34 skey exchange method.
     */
    KeyMaterial: KeyMaterial;
    /**
     * The key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed.
     */
    KeyCheckValue?: KeyCheckValue;
    /**
     * The algorithm that Amazon Web Services Payment Cryptography uses to calculate the key check value (KCV). It is used to validate the key integrity. For TDES keys, the KCV is computed by encrypting 8 bytes, each with value of zero, with the key to be checked and retaining the 3 highest order bytes of the encrypted result. For AES keys, the KCV is computed using a CMAC algorithm where the input data is 16 bytes of zero and retaining the 3 highest order bytes of the encrypted result.
     */
    KeyCheckValueAlgorithm?: KeyCheckValueAlgorithm;
  }
  export type WrappedKeyCryptogram = string;
  export type WrappedKeyMaterialFormat = "KEY_CRYPTOGRAM"|"TR31_KEY_BLOCK"|"TR34_KEY_BLOCK"|string;
  export type WrappingKeySpec = "RSA_OAEP_SHA_256"|"RSA_OAEP_SHA_512"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2021-09-14"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the PaymentCryptography client.
   */
  export import Types = PaymentCryptography;
}
export = PaymentCryptography;
