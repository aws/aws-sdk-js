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
   * Translates input text from the source language to the target language. You can translate between English (en) and one of the following languages, or between one of the following languages and English.   Arabic (ar)   Chinese (Simplified) (zh)   French (fr)   German (de)   Portuguese (pt)   Spanish (es)   To have Amazon Translate determine the source language of your text, you can specify auto in the SourceLanguageCode field. If you specify auto, Amazon Translate will call Amazon Comprehend to determine the source language.
   */
  translateText(params: Translate.Types.TranslateTextRequest, callback?: (err: AWSError, data: Translate.Types.TranslateTextResponse) => void): Request<Translate.Types.TranslateTextResponse, AWSError>;
  /**
   * Translates input text from the source language to the target language. You can translate between English (en) and one of the following languages, or between one of the following languages and English.   Arabic (ar)   Chinese (Simplified) (zh)   French (fr)   German (de)   Portuguese (pt)   Spanish (es)   To have Amazon Translate determine the source language of your text, you can specify auto in the SourceLanguageCode field. If you specify auto, Amazon Translate will call Amazon Comprehend to determine the source language.
   */
  translateText(callback?: (err: AWSError, data: Translate.Types.TranslateTextResponse) => void): Request<Translate.Types.TranslateTextResponse, AWSError>;
}
declare namespace Translate {
  export type BoundedLengthString = string;
  export type LanguageCodeString = string;
  export type String = string;
  export interface TranslateTextRequest {
    /**
     * The text to translate.
     */
    Text: BoundedLengthString;
    /**
     * One of the supported language codes for the source text. If the TargetLanguageCode is not "en", the SourceLanguageCode must be "en". To have Amazon Translate determine the source language of your text, you can specify auto in the SourceLanguageCode field. If you specify auto, Amazon Translate will call Amazon Comprehend to determine the source language.
     */
    SourceLanguageCode: LanguageCodeString;
    /**
     * One of the supported language codes for the target text. If the SourceLanguageCode is not "en", the TargetLanguageCode must be "en".
     */
    TargetLanguageCode: LanguageCodeString;
  }
  export interface TranslateTextResponse {
    /**
     * The text translated into the target language.
     */
    TranslatedText: String;
    /**
     * The language code for the language of the input text. 
     */
    SourceLanguageCode: LanguageCodeString;
    /**
     * The language code for the language of the translated text. 
     */
    TargetLanguageCode: LanguageCodeString;
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
