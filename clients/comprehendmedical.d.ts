import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class ComprehendMedical extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ComprehendMedical.Types.ClientConfiguration)
  config: Config & ComprehendMedical.Types.ClientConfiguration;
  /**
   *  Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .
   */
  detectEntities(params: ComprehendMedical.Types.DetectEntitiesRequest, callback?: (err: AWSError, data: ComprehendMedical.Types.DetectEntitiesResponse) => void): Request<ComprehendMedical.Types.DetectEntitiesResponse, AWSError>;
  /**
   *  Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .
   */
  detectEntities(callback?: (err: AWSError, data: ComprehendMedical.Types.DetectEntitiesResponse) => void): Request<ComprehendMedical.Types.DetectEntitiesResponse, AWSError>;
  /**
   *  Inspects the clinical text for personal health information (PHI) entities and entity category, location, and confidence score on that information.
   */
  detectPHI(params: ComprehendMedical.Types.DetectPHIRequest, callback?: (err: AWSError, data: ComprehendMedical.Types.DetectPHIResponse) => void): Request<ComprehendMedical.Types.DetectPHIResponse, AWSError>;
  /**
   *  Inspects the clinical text for personal health information (PHI) entities and entity category, location, and confidence score on that information.
   */
  detectPHI(callback?: (err: AWSError, data: ComprehendMedical.Types.DetectPHIResponse) => void): Request<ComprehendMedical.Types.DetectPHIResponse, AWSError>;
}
declare namespace ComprehendMedical {
  export interface Attribute {
    /**
     *  The type of attribute. 
     */
    Type?: EntitySubType;
    /**
     *  The level of confidence that Comprehend Medical has that the segment of text is correctly recognized as an attribute. 
     */
    Score?: Float;
    /**
     *  The level of confidence that Comprehend Medical has that this attribute is correctly related to this entity. 
     */
    RelationshipScore?: Float;
    /**
     *  The numeric identifier for this attribute. This is a monotonically increasing id unique within this response rather than a global unique identifier. 
     */
    Id?: Integer;
    /**
     *  The 0-based character offset in the input text that shows where the attribute begins. The offset returns the UTF-8 code point in the string. 
     */
    BeginOffset?: Integer;
    /**
     *  The 0-based character offset in the input text that shows where the attribute ends. The offset returns the UTF-8 code point in the string. 
     */
    EndOffset?: Integer;
    /**
     *  The segment of input text extracted as this attribute.
     */
    Text?: String;
    /**
     *  Contextual information for this attribute. 
     */
    Traits?: TraitList;
  }
  export type AttributeList = Attribute[];
  export type AttributeName = "SIGN"|"SYMPTOM"|"DIAGNOSIS"|"NEGATION"|string;
  export type BoundedLengthString = string;
  export interface DetectEntitiesRequest {
    /**
     *  A UTF-8 text string containing the clinical content being examined for entities. Each string must contain fewer than 20,000 bytes of characters.
     */
    Text: BoundedLengthString;
  }
  export interface DetectEntitiesResponse {
    /**
     *  The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned.
     */
    Entities: EntityList;
    /**
     *  Attributes extracted from the input text that we were unable to relate to an entity.
     */
    UnmappedAttributes?: UnmappedAttributeList;
    /**
     *  If the result of the previous request to DetectEntities was truncated, include the Paginationtoken to fetch the next page of entities.
     */
    PaginationToken?: String;
  }
  export interface DetectPHIRequest {
    /**
     *  A UTF-8 text string containing the clinical content being examined for PHI entities. Each string must contain fewer than 20,000 bytes of characters. 
     */
    Text: BoundedLengthString;
  }
  export interface DetectPHIResponse {
    /**
     *  The collection of PHI entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Comprehend Medical has in its detection. 
     */
    Entities: EntityList;
    /**
     *  If the result of the previous request to DetectPHI was truncated, include the Paginationtoken to fetch the next page of PHI entities. 
     */
    PaginationToken?: String;
  }
  export interface Entity {
    /**
     *  The numeric identifier for the entity. This is a monotonically increasing id unique within this response rather than a global unique identifier. 
     */
    Id?: Integer;
    /**
     *  The 0-based character offset in the input text that shows where the entity begins. The offset returns the UTF-8 code point in the string. 
     */
    BeginOffset?: Integer;
    /**
     *  The 0-based character offset in the input text that shows where the entity ends. The offset returns the UTF-8 code point in the string. 
     */
    EndOffset?: Integer;
    /**
     * The level of confidence that Comprehend Medical has in the accuracy of the detection.
     */
    Score?: Float;
    /**
     *  The segment of input text extracted as this entity.
     */
    Text?: String;
    /**
     *  The category of the entity.
     */
    Category?: EntityType;
    /**
     *  Describes the specific type of entity with category of entities. 
     */
    Type?: EntitySubType;
    /**
     * Contextual information for the entity
     */
    Traits?: TraitList;
    /**
     *  The extracted attributes that relate to this entity.
     */
    Attributes?: AttributeList;
  }
  export type EntityList = Entity[];
  export type EntitySubType = "NAME"|"DOSAGE"|"ROUTE_OR_MODE"|"FORM"|"FREQUENCY"|"DURATION"|"GENERIC_NAME"|"BRAND_NAME"|"STRENGTH"|"RATE"|"ACUITY"|"TEST_NAME"|"TEST_VALUE"|"TEST_UNITS"|"PROCEDURE_NAME"|"TREATMENT_NAME"|"DATE"|"AGE"|"CONTACT_POINT"|"EMAIL"|"IDENTIFIER"|"URL"|"ADDRESS"|"PROFESSION"|"SYSTEM_ORGAN_SITE"|"DIRECTION"|"QUALITY"|"QUANTITY"|string;
  export type EntityType = "MEDICATION"|"MEDICAL_CONDITION"|"PROTECTED_HEALTH_INFORMATION"|"TEST_TREATMENT_PROCEDURE"|"ANATOMY"|string;
  export type Float = number;
  export type Integer = number;
  export type String = string;
  export interface Trait {
    /**
     *  Provides a name or contextual description about the trait. 
     */
    Name?: AttributeName;
    /**
     *  The level of confidence that Comprehend Medical has in the accuracy of this trait.
     */
    Score?: Float;
  }
  export type TraitList = Trait[];
  export interface UnmappedAttribute {
    /**
     *  The type of the attribute, could be one of the following values: "MEDICATION", "MEDICAL_CONDITION", "ANATOMY", "TEST_AND_TREATMENT_PROCEDURE" or "PERSONAL_HEALTH_INFORMATION". 
     */
    Type?: EntityType;
    /**
     *  The specific attribute that has been extracted but not mapped to an entity. 
     */
    Attribute?: Attribute;
  }
  export type UnmappedAttributeList = UnmappedAttribute[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-10-30"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the ComprehendMedical client.
   */
  export import Types = ComprehendMedical;
}
export = ComprehendMedical;
