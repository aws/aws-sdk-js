import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Translate extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Translate.Types.ClientConfiguration)
  config: Config & Translate.Types.ClientConfiguration;
  /**
   * A synchronous action that deletes a custom terminology.
   */
  deleteTerminology(params: Translate.Types.DeleteTerminologyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * A synchronous action that deletes a custom terminology.
   */
  deleteTerminology(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves a custom terminology.
   */
  getTerminology(params: Translate.Types.GetTerminologyRequest, callback?: (err: AWSError, data: Translate.Types.GetTerminologyResponse) => void): Request<Translate.Types.GetTerminologyResponse, AWSError>;
  /**
   * Retrieves a custom terminology.
   */
  getTerminology(callback?: (err: AWSError, data: Translate.Types.GetTerminologyResponse) => void): Request<Translate.Types.GetTerminologyResponse, AWSError>;
  /**
   * Creates or updates a custom terminology, depending on whether or not one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. Currently, the only supported merge strategy is OVERWRITE, and so the imported terminology will overwrite an existing terminology of the same name. If you import a terminology that overwrites an existing one, the new terminology take up to 10 minutes to fully propagate and be available for use in a translation due to cache policies with the DataPlane service that performs the translations.
   */
  importTerminology(params: Translate.Types.ImportTerminologyRequest, callback?: (err: AWSError, data: Translate.Types.ImportTerminologyResponse) => void): Request<Translate.Types.ImportTerminologyResponse, AWSError>;
  /**
   * Creates or updates a custom terminology, depending on whether or not one already exists for the given terminology name. Importing a terminology with the same name as an existing one will merge the terminologies based on the chosen merge strategy. Currently, the only supported merge strategy is OVERWRITE, and so the imported terminology will overwrite an existing terminology of the same name. If you import a terminology that overwrites an existing one, the new terminology take up to 10 minutes to fully propagate and be available for use in a translation due to cache policies with the DataPlane service that performs the translations.
   */
  importTerminology(callback?: (err: AWSError, data: Translate.Types.ImportTerminologyResponse) => void): Request<Translate.Types.ImportTerminologyResponse, AWSError>;
  /**
   * Provides a list of custom terminologies associated with your account.
   */
  listTerminologies(params: Translate.Types.ListTerminologiesRequest, callback?: (err: AWSError, data: Translate.Types.ListTerminologiesResponse) => void): Request<Translate.Types.ListTerminologiesResponse, AWSError>;
  /**
   * Provides a list of custom terminologies associated with your account.
   */
  listTerminologies(callback?: (err: AWSError, data: Translate.Types.ListTerminologiesResponse) => void): Request<Translate.Types.ListTerminologiesResponse, AWSError>;
  /**
   * Translates input text from the source language to the target language. It is not necessary to use English (en) as either the source or the target language but not all language combinations are supported by Amazon Translate. For more information, see Supported Language Pairs.   Arabic (ar)   Chinese (Simplified) (zh)   Chinese (Traditional) (zh-TW)   Czech (cs)   Danish (da)   Dutch (nl)   English (en)   Finnish (fi)   French (fr)   German (de)   Hebrew (he)   Indonesian (id)   Italian (it)   Japanese (ja)   Korean (ko)   Polish (pl)   Portuguese (pt)   Russian (ru)   Spanish (es)   Swedish (sv)   Turkish (tr)   To have Amazon Translate determine the source language of your text, you can specify auto in the SourceLanguageCode field. If you specify auto, Amazon Translate will call Amazon Comprehend to determine the source language.
   */
  translateText(params: Translate.Types.TranslateTextRequest, callback?: (err: AWSError, data: Translate.Types.TranslateTextResponse) => void): Request<Translate.Types.TranslateTextResponse, AWSError>;
  /**
   * Translates input text from the source language to the target language. It is not necessary to use English (en) as either the source or the target language but not all language combinations are supported by Amazon Translate. For more information, see Supported Language Pairs.   Arabic (ar)   Chinese (Simplified) (zh)   Chinese (Traditional) (zh-TW)   Czech (cs)   Danish (da)   Dutch (nl)   English (en)   Finnish (fi)   French (fr)   German (de)   Hebrew (he)   Indonesian (id)   Italian (it)   Japanese (ja)   Korean (ko)   Polish (pl)   Portuguese (pt)   Russian (ru)   Spanish (es)   Swedish (sv)   Turkish (tr)   To have Amazon Translate determine the source language of your text, you can specify auto in the SourceLanguageCode field. If you specify auto, Amazon Translate will call Amazon Comprehend to determine the source language.
   */
  translateText(callback?: (err: AWSError, data: Translate.Types.TranslateTextResponse) => void): Request<Translate.Types.TranslateTextResponse, AWSError>;
}
declare namespace Translate {
  export interface AppliedTerminology {
    /**
     * The name of the custom terminology applied to the input text by Amazon Translate for the translated text response.
     */
    Name?: ResourceName;
    /**
     * The specific terms of the custom terminology applied to the input text by Amazon Translate for the translated text response. A maximum of 250 terms will be returned, and the specific terms applied will be the first 250 terms in the source text. 
     */
    Terms?: TermList;
  }
  export type AppliedTerminologyList = AppliedTerminology[];
  export type BoundedLengthString = string;
  export interface DeleteTerminologyRequest {
    /**
     * The name of the custom terminology being deleted. 
     */
    Name: ResourceName;
  }
  export type Description = string;
  export interface EncryptionKey {
    /**
     * The type of encryption key used by Amazon Translate to encrypt custom terminologies.
     */
    Type: EncryptionKeyType;
    /**
     * The Amazon Resource Name (ARN) of the encryption key being used to encrypt the custom terminology.
     */
    Id: EncryptionKeyID;
  }
  export type EncryptionKeyID = string;
  export type EncryptionKeyType = "KMS"|string;
  export interface GetTerminologyRequest {
    /**
     * The name of the custom terminology being retrieved.
     */
    Name: ResourceName;
    /**
     * The data format of the custom terminology being retrieved, either CSV or TMX.
     */
    TerminologyDataFormat: TerminologyDataFormat;
  }
  export interface GetTerminologyResponse {
    /**
     * The properties of the custom terminology being retrieved.
     */
    TerminologyProperties?: TerminologyProperties;
    /**
     * The data location of the custom terminology being retrieved. The custom terminology file is returned in a presigned url that has a 30 minute expiration.
     */
    TerminologyDataLocation?: TerminologyDataLocation;
  }
  export interface ImportTerminologyRequest {
    /**
     * The name of the custom terminology being imported.
     */
    Name: ResourceName;
    /**
     * The merge strategy of the custom terminology being imported. Currently, only the OVERWRITE merge strategy is supported. In this case, the imported terminology will overwrite an existing terminology of the same name.
     */
    MergeStrategy: MergeStrategy;
    /**
     * The description of the custom terminology being imported.
     */
    Description?: Description;
    /**
     * The terminology data for the custom terminology being imported.
     */
    TerminologyData: TerminologyData;
    /**
     * The encryption key for the custom terminology being imported.
     */
    EncryptionKey?: EncryptionKey;
  }
  export interface ImportTerminologyResponse {
    /**
     * The properties of the custom terminology being imported.
     */
    TerminologyProperties?: TerminologyProperties;
  }
  export type Integer = number;
  export type LanguageCodeString = string;
  export type LanguageCodeStringList = LanguageCodeString[];
  export interface ListTerminologiesRequest {
    /**
     * If the result of the request to ListTerminologies was truncated, include the NextToken to fetch the next group of custom terminologies. 
     */
    NextToken?: NextToken;
    /**
     * The maximum number of custom terminologies returned per list request.
     */
    MaxResults?: MaxResultsInteger;
  }
  export interface ListTerminologiesResponse {
    /**
     * The properties list of the custom terminologies returned on the list request.
     */
    TerminologyPropertiesList?: TerminologyPropertiesList;
    /**
     *  If the response to the ListTerminologies was truncated, the NextToken fetches the next group of custom terminologies. 
     */
    NextToken?: NextToken;
  }
  export type MaxResultsInteger = number;
  export type MergeStrategy = "OVERWRITE"|string;
  export type NextToken = string;
  export type ResourceName = string;
  export type ResourceNameList = ResourceName[];
  export type String = string;
  export interface Term {
    /**
     * The source text of the term being translated by the custom terminology.
     */
    SourceText?: String;
    /**
     * The target text of the term being translated by the custom terminology.
     */
    TargetText?: String;
  }
  export type TermList = Term[];
  export type TerminologyArn = string;
  export interface TerminologyData {
    /**
     * The file containing the custom terminology data.
     */
    File: TerminologyFile;
    /**
     * The data format of the custom terminology. Either CSV or TMX.
     */
    Format: TerminologyDataFormat;
  }
  export type TerminologyDataFormat = "CSV"|"TMX"|string;
  export interface TerminologyDataLocation {
    /**
     * The repository type for the custom terminology data.
     */
    RepositoryType: String;
    /**
     * The location of the custom terminology data.
     */
    Location: String;
  }
  export type TerminologyFile = Buffer|Uint8Array|Blob|string;
  export interface TerminologyProperties {
    /**
     * The name of the custom terminology.
     */
    Name?: ResourceName;
    /**
     * The description of the custom terminology properties.
     */
    Description?: Description;
    /**
     *  The Amazon Resource Name (ARN) of the custom terminology. 
     */
    Arn?: TerminologyArn;
    /**
     * The language code for the source text of the translation request for which the custom terminology is being used.
     */
    SourceLanguageCode?: LanguageCodeString;
    /**
     * The language codes for the target languages available with the custom terminology file. All possible target languages are returned in array.
     */
    TargetLanguageCodes?: LanguageCodeStringList;
    /**
     * The encryption key for the custom terminology.
     */
    EncryptionKey?: EncryptionKey;
    /**
     * The size of the file used when importing a custom terminology.
     */
    SizeBytes?: Integer;
    /**
     * The number of terms included in the custom terminology.
     */
    TermCount?: Integer;
    /**
     * The time at which the custom terminology was created, based on the timestamp.
     */
    CreatedAt?: Timestamp;
    /**
     * The time at which the custom terminology was last update, based on the timestamp.
     */
    LastUpdatedAt?: Timestamp;
  }
  export type TerminologyPropertiesList = TerminologyProperties[];
  export type Timestamp = Date;
  export interface TranslateTextRequest {
    /**
     * The text to translate. The text string can be a maximum of 5,000 bytes long. Depending on your character set, this may be fewer than 5,000 characters.
     */
    Text: BoundedLengthString;
    /**
     * The TerminologyNames list that is taken as input to the TranslateText request. This has a minimum length of 0 and a maximum length of 1.
     */
    TerminologyNames?: ResourceNameList;
    /**
     * The language code for the language of the source text. The language must be a language supported by Amazon Translate.  To have Amazon Translate determine the source language of your text, you can specify auto in the SourceLanguageCode field. If you specify auto, Amazon Translate will call Amazon Comprehend to determine the source language.
     */
    SourceLanguageCode: LanguageCodeString;
    /**
     * The language code requested for the language of the target text. The language must be a language supported by Amazon Translate.
     */
    TargetLanguageCode: LanguageCodeString;
  }
  export interface TranslateTextResponse {
    /**
     * The the translated text. The maximum length of this text is 5kb.
     */
    TranslatedText: String;
    /**
     * The language code for the language of the source text. 
     */
    SourceLanguageCode: LanguageCodeString;
    /**
     * The language code for the language of the target text. 
     */
    TargetLanguageCode: LanguageCodeString;
    /**
     * The names of the custom terminologies applied to the input text by Amazon Translate for the translated text response.
     */
    AppliedTerminologies?: AppliedTerminologyList;
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-07-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Translate client.
   */
  export import Types = Translate;
}
export = Translate;
