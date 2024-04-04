import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class B2bi extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: B2bi.Types.ClientConfiguration)
  config: Config & B2bi.Types.ClientConfiguration;
  /**
   * Instantiates a capability based on the specified parameters. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
   */
  createCapability(params: B2bi.Types.CreateCapabilityRequest, callback?: (err: AWSError, data: B2bi.Types.CreateCapabilityResponse) => void): Request<B2bi.Types.CreateCapabilityResponse, AWSError>;
  /**
   * Instantiates a capability based on the specified parameters. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
   */
  createCapability(callback?: (err: AWSError, data: B2bi.Types.CreateCapabilityResponse) => void): Request<B2bi.Types.CreateCapabilityResponse, AWSError>;
  /**
   * Creates a partnership between a customer and a trading partner, based on the supplied parameters. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.
   */
  createPartnership(params: B2bi.Types.CreatePartnershipRequest, callback?: (err: AWSError, data: B2bi.Types.CreatePartnershipResponse) => void): Request<B2bi.Types.CreatePartnershipResponse, AWSError>;
  /**
   * Creates a partnership between a customer and a trading partner, based on the supplied parameters. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.
   */
  createPartnership(callback?: (err: AWSError, data: B2bi.Types.CreatePartnershipResponse) => void): Request<B2bi.Types.CreatePartnershipResponse, AWSError>;
  /**
   * Creates a customer profile. You can have up to five customer profiles, each representing a distinct private network. A profile is the mechanism used to create the concept of a private network.
   */
  createProfile(params: B2bi.Types.CreateProfileRequest, callback?: (err: AWSError, data: B2bi.Types.CreateProfileResponse) => void): Request<B2bi.Types.CreateProfileResponse, AWSError>;
  /**
   * Creates a customer profile. You can have up to five customer profiles, each representing a distinct private network. A profile is the mechanism used to create the concept of a private network.
   */
  createProfile(callback?: (err: AWSError, data: B2bi.Types.CreateProfileResponse) => void): Request<B2bi.Types.CreateProfileResponse, AWSError>;
  /**
   * Creates a transformer. A transformer describes how to process the incoming EDI documents and extract the necessary information to the output file.
   */
  createTransformer(params: B2bi.Types.CreateTransformerRequest, callback?: (err: AWSError, data: B2bi.Types.CreateTransformerResponse) => void): Request<B2bi.Types.CreateTransformerResponse, AWSError>;
  /**
   * Creates a transformer. A transformer describes how to process the incoming EDI documents and extract the necessary information to the output file.
   */
  createTransformer(callback?: (err: AWSError, data: B2bi.Types.CreateTransformerResponse) => void): Request<B2bi.Types.CreateTransformerResponse, AWSError>;
  /**
   * Deletes the specified capability. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
   */
  deleteCapability(params: B2bi.Types.DeleteCapabilityRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified capability. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
   */
  deleteCapability(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified partnership. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.
   */
  deletePartnership(params: B2bi.Types.DeletePartnershipRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified partnership. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.
   */
  deletePartnership(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified profile. A profile is the mechanism used to create the concept of a private network.
   */
  deleteProfile(params: B2bi.Types.DeleteProfileRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified profile. A profile is the mechanism used to create the concept of a private network.
   */
  deleteProfile(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified transformer. A transformer describes how to process the incoming EDI documents and extract the necessary information to the output file.
   */
  deleteTransformer(params: B2bi.Types.DeleteTransformerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified transformer. A transformer describes how to process the incoming EDI documents and extract the necessary information to the output file.
   */
  deleteTransformer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves the details for the specified capability. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
   */
  getCapability(params: B2bi.Types.GetCapabilityRequest, callback?: (err: AWSError, data: B2bi.Types.GetCapabilityResponse) => void): Request<B2bi.Types.GetCapabilityResponse, AWSError>;
  /**
   * Retrieves the details for the specified capability. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
   */
  getCapability(callback?: (err: AWSError, data: B2bi.Types.GetCapabilityResponse) => void): Request<B2bi.Types.GetCapabilityResponse, AWSError>;
  /**
   * Retrieves the details for a partnership, based on the partner and profile IDs specified. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.
   */
  getPartnership(params: B2bi.Types.GetPartnershipRequest, callback?: (err: AWSError, data: B2bi.Types.GetPartnershipResponse) => void): Request<B2bi.Types.GetPartnershipResponse, AWSError>;
  /**
   * Retrieves the details for a partnership, based on the partner and profile IDs specified. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.
   */
  getPartnership(callback?: (err: AWSError, data: B2bi.Types.GetPartnershipResponse) => void): Request<B2bi.Types.GetPartnershipResponse, AWSError>;
  /**
   * Retrieves the details for the profile specified by the profile ID. A profile is the mechanism used to create the concept of a private network.
   */
  getProfile(params: B2bi.Types.GetProfileRequest, callback?: (err: AWSError, data: B2bi.Types.GetProfileResponse) => void): Request<B2bi.Types.GetProfileResponse, AWSError>;
  /**
   * Retrieves the details for the profile specified by the profile ID. A profile is the mechanism used to create the concept of a private network.
   */
  getProfile(callback?: (err: AWSError, data: B2bi.Types.GetProfileResponse) => void): Request<B2bi.Types.GetProfileResponse, AWSError>;
  /**
   * Retrieves the details for the transformer specified by the transformer ID. A transformer describes how to process the incoming EDI documents and extract the necessary information to the output file.
   */
  getTransformer(params: B2bi.Types.GetTransformerRequest, callback?: (err: AWSError, data: B2bi.Types.GetTransformerResponse) => void): Request<B2bi.Types.GetTransformerResponse, AWSError>;
  /**
   * Retrieves the details for the transformer specified by the transformer ID. A transformer describes how to process the incoming EDI documents and extract the necessary information to the output file.
   */
  getTransformer(callback?: (err: AWSError, data: B2bi.Types.GetTransformerResponse) => void): Request<B2bi.Types.GetTransformerResponse, AWSError>;
  /**
   * Returns the details of the transformer run, based on the Transformer job ID.
   */
  getTransformerJob(params: B2bi.Types.GetTransformerJobRequest, callback?: (err: AWSError, data: B2bi.Types.GetTransformerJobResponse) => void): Request<B2bi.Types.GetTransformerJobResponse, AWSError>;
  /**
   * Returns the details of the transformer run, based on the Transformer job ID.
   */
  getTransformerJob(callback?: (err: AWSError, data: B2bi.Types.GetTransformerJobResponse) => void): Request<B2bi.Types.GetTransformerJobResponse, AWSError>;
  /**
   * Lists the capabilities associated with your Amazon Web Services account for your current or specified region. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
   */
  listCapabilities(params: B2bi.Types.ListCapabilitiesRequest, callback?: (err: AWSError, data: B2bi.Types.ListCapabilitiesResponse) => void): Request<B2bi.Types.ListCapabilitiesResponse, AWSError>;
  /**
   * Lists the capabilities associated with your Amazon Web Services account for your current or specified region. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
   */
  listCapabilities(callback?: (err: AWSError, data: B2bi.Types.ListCapabilitiesResponse) => void): Request<B2bi.Types.ListCapabilitiesResponse, AWSError>;
  /**
   * Lists the partnerships associated with your Amazon Web Services account for your current or specified region. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.
   */
  listPartnerships(params: B2bi.Types.ListPartnershipsRequest, callback?: (err: AWSError, data: B2bi.Types.ListPartnershipsResponse) => void): Request<B2bi.Types.ListPartnershipsResponse, AWSError>;
  /**
   * Lists the partnerships associated with your Amazon Web Services account for your current or specified region. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.
   */
  listPartnerships(callback?: (err: AWSError, data: B2bi.Types.ListPartnershipsResponse) => void): Request<B2bi.Types.ListPartnershipsResponse, AWSError>;
  /**
   * Lists the profiles associated with your Amazon Web Services account for your current or specified region. A profile is the mechanism used to create the concept of a private network.
   */
  listProfiles(params: B2bi.Types.ListProfilesRequest, callback?: (err: AWSError, data: B2bi.Types.ListProfilesResponse) => void): Request<B2bi.Types.ListProfilesResponse, AWSError>;
  /**
   * Lists the profiles associated with your Amazon Web Services account for your current or specified region. A profile is the mechanism used to create the concept of a private network.
   */
  listProfiles(callback?: (err: AWSError, data: B2bi.Types.ListProfilesResponse) => void): Request<B2bi.Types.ListProfilesResponse, AWSError>;
  /**
   * Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a capability, partnership, profile, or transformer.
   */
  listTagsForResource(params: B2bi.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: B2bi.Types.ListTagsForResourceResponse) => void): Request<B2bi.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a capability, partnership, profile, or transformer.
   */
  listTagsForResource(callback?: (err: AWSError, data: B2bi.Types.ListTagsForResourceResponse) => void): Request<B2bi.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Lists the available transformers. A transformer describes how to process the incoming EDI documents and extract the necessary information to the output file.
   */
  listTransformers(params: B2bi.Types.ListTransformersRequest, callback?: (err: AWSError, data: B2bi.Types.ListTransformersResponse) => void): Request<B2bi.Types.ListTransformersResponse, AWSError>;
  /**
   * Lists the available transformers. A transformer describes how to process the incoming EDI documents and extract the necessary information to the output file.
   */
  listTransformers(callback?: (err: AWSError, data: B2bi.Types.ListTransformersResponse) => void): Request<B2bi.Types.ListTransformersResponse, AWSError>;
  /**
   * Runs a job, using a transformer, to parse input EDI (electronic data interchange) file into the output structures used by Amazon Web Services B2BI Data Interchange. If you only want to transform EDI (electronic data interchange) documents, you don't need to create profiles, partnerships or capabilities. Just create and configure a transformer, and then run the StartTransformerJob API to process your files.
   */
  startTransformerJob(params: B2bi.Types.StartTransformerJobRequest, callback?: (err: AWSError, data: B2bi.Types.StartTransformerJobResponse) => void): Request<B2bi.Types.StartTransformerJobResponse, AWSError>;
  /**
   * Runs a job, using a transformer, to parse input EDI (electronic data interchange) file into the output structures used by Amazon Web Services B2BI Data Interchange. If you only want to transform EDI (electronic data interchange) documents, you don't need to create profiles, partnerships or capabilities. Just create and configure a transformer, and then run the StartTransformerJob API to process your files.
   */
  startTransformerJob(callback?: (err: AWSError, data: B2bi.Types.StartTransformerJobResponse) => void): Request<B2bi.Types.StartTransformerJobResponse, AWSError>;
  /**
   * Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are capability, partnership, profile, transformers and other entities. There is no response returned from this call.
   */
  tagResource(params: B2bi.Types.TagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are capability, partnership, profile, transformers and other entities. There is no response returned from this call.
   */
  tagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Maps the input file according to the provided template file. The API call downloads the file contents from the Amazon S3 location, and passes the contents in as a string, to the inputFileContent parameter.
   */
  testMapping(params: B2bi.Types.TestMappingRequest, callback?: (err: AWSError, data: B2bi.Types.TestMappingResponse) => void): Request<B2bi.Types.TestMappingResponse, AWSError>;
  /**
   * Maps the input file according to the provided template file. The API call downloads the file contents from the Amazon S3 location, and passes the contents in as a string, to the inputFileContent parameter.
   */
  testMapping(callback?: (err: AWSError, data: B2bi.Types.TestMappingResponse) => void): Request<B2bi.Types.TestMappingResponse, AWSError>;
  /**
   * Parses the input EDI (electronic data interchange) file. The input file has a file size limit of 250 KB.
   */
  testParsing(params: B2bi.Types.TestParsingRequest, callback?: (err: AWSError, data: B2bi.Types.TestParsingResponse) => void): Request<B2bi.Types.TestParsingResponse, AWSError>;
  /**
   * Parses the input EDI (electronic data interchange) file. The input file has a file size limit of 250 KB.
   */
  testParsing(callback?: (err: AWSError, data: B2bi.Types.TestParsingResponse) => void): Request<B2bi.Types.TestParsingResponse, AWSError>;
  /**
   * Detaches a key-value pair from the specified resource, as identified by its Amazon Resource Name (ARN). Resources are capability, partnership, profile, transformers and other entities.
   */
  untagResource(params: B2bi.Types.UntagResourceRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Detaches a key-value pair from the specified resource, as identified by its Amazon Resource Name (ARN). Resources are capability, partnership, profile, transformers and other entities.
   */
  untagResource(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates some of the parameters for a capability, based on the specified parameters. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
   */
  updateCapability(params: B2bi.Types.UpdateCapabilityRequest, callback?: (err: AWSError, data: B2bi.Types.UpdateCapabilityResponse) => void): Request<B2bi.Types.UpdateCapabilityResponse, AWSError>;
  /**
   * Updates some of the parameters for a capability, based on the specified parameters. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
   */
  updateCapability(callback?: (err: AWSError, data: B2bi.Types.UpdateCapabilityResponse) => void): Request<B2bi.Types.UpdateCapabilityResponse, AWSError>;
  /**
   * Updates some of the parameters for a partnership between a customer and trading partner. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.
   */
  updatePartnership(params: B2bi.Types.UpdatePartnershipRequest, callback?: (err: AWSError, data: B2bi.Types.UpdatePartnershipResponse) => void): Request<B2bi.Types.UpdatePartnershipResponse, AWSError>;
  /**
   * Updates some of the parameters for a partnership between a customer and trading partner. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.
   */
  updatePartnership(callback?: (err: AWSError, data: B2bi.Types.UpdatePartnershipResponse) => void): Request<B2bi.Types.UpdatePartnershipResponse, AWSError>;
  /**
   * Updates the specified parameters for a profile. A profile is the mechanism used to create the concept of a private network.
   */
  updateProfile(params: B2bi.Types.UpdateProfileRequest, callback?: (err: AWSError, data: B2bi.Types.UpdateProfileResponse) => void): Request<B2bi.Types.UpdateProfileResponse, AWSError>;
  /**
   * Updates the specified parameters for a profile. A profile is the mechanism used to create the concept of a private network.
   */
  updateProfile(callback?: (err: AWSError, data: B2bi.Types.UpdateProfileResponse) => void): Request<B2bi.Types.UpdateProfileResponse, AWSError>;
  /**
   * Updates the specified parameters for a transformer. A transformer describes how to process the incoming EDI documents and extract the necessary information to the output file.
   */
  updateTransformer(params: B2bi.Types.UpdateTransformerRequest, callback?: (err: AWSError, data: B2bi.Types.UpdateTransformerResponse) => void): Request<B2bi.Types.UpdateTransformerResponse, AWSError>;
  /**
   * Updates the specified parameters for a transformer. A transformer describes how to process the incoming EDI documents and extract the necessary information to the output file.
   */
  updateTransformer(callback?: (err: AWSError, data: B2bi.Types.UpdateTransformerResponse) => void): Request<B2bi.Types.UpdateTransformerResponse, AWSError>;
}
declare namespace B2bi {
  export type AmazonResourceName = string;
  export type BucketName = string;
  export type BusinessName = string;
  export interface CapabilityConfiguration {
    /**
     * An EDI (electronic data interchange) configuration object.
     */
    edi?: EdiConfiguration;
  }
  export type CapabilityId = string;
  export type CapabilityList = CapabilitySummary[];
  export type CapabilityName = string;
  export interface CapabilitySummary {
    /**
     * Returns a system-assigned unique identifier for the capability.
     */
    capabilityId: CapabilityId;
    /**
     * The display name of the capability.
     */
    name: CapabilityName;
    /**
     * Returns the type of the capability. Currently, only edi is supported.
     */
    type: CapabilityType;
    /**
     * Returns a timestamp for creation date and time of the capability.
     */
    createdAt: CreatedDate;
    /**
     * Returns a timestamp that identifies the most recent date and time that the capability was modified.
     */
    modifiedAt?: ModifiedDate;
  }
  export type CapabilityType = "edi"|string;
  export interface CreateCapabilityRequest {
    /**
     * Specifies the name of the capability, used to identify it.
     */
    name: CapabilityName;
    /**
     * Specifies the type of the capability. Currently, only edi is supported.
     */
    type: CapabilityType;
    /**
     * Specifies a structure that contains the details for a capability.
     */
    configuration: CapabilityConfiguration;
    /**
     * Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.
     */
    instructionsDocuments?: InstructionsDocuments;
    /**
     * Reserved for future use.
     */
    clientToken?: String;
    /**
     * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
     */
    tags?: TagList;
  }
  export interface CreateCapabilityResponse {
    /**
     * Returns a system-assigned unique identifier for the capability.
     */
    capabilityId: CapabilityId;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
     */
    capabilityArn: ResourceArn;
    /**
     * Returns the name of the capability used to identify it.
     */
    name: CapabilityName;
    /**
     * Returns the type of the capability. Currently, only edi is supported.
     */
    type: CapabilityType;
    /**
     * Returns a structure that contains the details for a capability.
     */
    configuration: CapabilityConfiguration;
    /**
     * Returns one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.
     */
    instructionsDocuments?: InstructionsDocuments;
    /**
     * Returns a timestamp for creation date and time of the capability.
     */
    createdAt: CreatedDate;
  }
  export interface CreatePartnershipRequest {
    /**
     * Specifies the unique, system-generated identifier for the profile connected to this partnership.
     */
    profileId: ProfileId;
    /**
     * Specifies a descriptive name for the partnership.
     */
    name: PartnerName;
    /**
     * Specifies the email address associated with this trading partner.
     */
    email: Email;
    /**
     * Specifies the phone number associated with the partnership.
     */
    phone?: Phone;
    /**
     * Specifies a list of the capabilities associated with this partnership.
     */
    capabilities?: PartnershipCapabilities;
    /**
     * Reserved for future use.
     */
    clientToken?: String;
    /**
     * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
     */
    tags?: TagList;
  }
  export interface CreatePartnershipResponse {
    /**
     * Returns the unique, system-generated identifier for the profile connected to this partnership.
     */
    profileId: ProfileId;
    /**
     * Returns the unique, system-generated identifier for a partnership.
     */
    partnershipId: PartnershipId;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
     */
    partnershipArn: ResourceArn;
    /**
     * Returns a descriptive name for the partnership.
     */
    name?: PartnerName;
    /**
     * Returns the email address associated with this trading partner.
     */
    email?: Email;
    /**
     * Returns the phone number associated with the partnership.
     */
    phone?: Phone;
    /**
     * Returns one or more capabilities associated with this partnership.
     */
    capabilities?: PartnershipCapabilities;
    /**
     * Returns the unique, system-generated identifier for a trading partner.
     */
    tradingPartnerId?: TradingPartnerId;
    /**
     * Returns a timestamp for creation date and time of the partnership.
     */
    createdAt: CreatedDate;
  }
  export interface CreateProfileRequest {
    /**
     * Specifies the name of the profile.
     */
    name: ProfileName;
    /**
     * Specifies the email address associated with this customer profile.
     */
    email?: Email;
    /**
     * Specifies the phone number associated with the profile.
     */
    phone: Phone;
    /**
     * Specifies the name for the business associated with this profile.
     */
    businessName: BusinessName;
    /**
     * Specifies whether or not logging is enabled for this profile.
     */
    logging: Logging;
    /**
     * Reserved for future use.
     */
    clientToken?: String;
    /**
     * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
     */
    tags?: TagList;
  }
  export interface CreateProfileResponse {
    /**
     * Returns the unique, system-generated identifier for the profile.
     */
    profileId: ProfileId;
    /**
     * Returns an Amazon Resource Name (ARN) for the profile.
     */
    profileArn: ResourceArn;
    /**
     * Returns the name of the profile, used to identify it.
     */
    name: ProfileName;
    /**
     * Returns the name for the business associated with this profile.
     */
    businessName: BusinessName;
    /**
     * Returns the phone number associated with the profile.
     */
    phone: Phone;
    /**
     * Returns the email address associated with this customer profile.
     */
    email?: Email;
    /**
     * Returns whether or not logging is turned on for this profile.
     */
    logging?: Logging;
    /**
     * Returns the name of the logging group.
     */
    logGroupName?: LogGroupName;
    /**
     * Returns a timestamp representing the time the profile was created.
     */
    createdAt: CreatedDate;
  }
  export interface CreateTransformerRequest {
    /**
     * Specifies the name of the transformer, used to identify it.
     */
    name: TransformerName;
    /**
     * Specifies that the currently supported file formats for EDI transformations are JSON and XML.
     */
    fileFormat: FileFormat;
    /**
     * Specifies the name of the mapping template for the transformer. This template is used to convert the input document into the correct set of objects.
     */
    mappingTemplate: MappingTemplate;
    /**
     * Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
     */
    ediType: EdiType;
    /**
     * Specifies a sample EDI document that is used by a transformer as a guide for processing the EDI data.
     */
    sampleDocument?: FileLocation;
    /**
     * Reserved for future use.
     */
    clientToken?: String;
    /**
     * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
     */
    tags?: TagList;
  }
  export interface CreateTransformerResponse {
    /**
     * Returns the system-assigned unique identifier for the transformer.
     */
    transformerId: TransformerId;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
     */
    transformerArn: ResourceArn;
    /**
     * Returns the name of the transformer, used to identify it.
     */
    name: TransformerName;
    /**
     * Returns that the currently supported file formats for EDI transformations are JSON and XML.
     */
    fileFormat: FileFormat;
    /**
     * Returns the name of the mapping template for the transformer. This template is used to convert the input document into the correct set of objects.
     */
    mappingTemplate: MappingTemplate;
    /**
     * Returns the state of the newly created transformer. The transformer can be either active or inactive. For the transformer to be used in a capability, its status must active.
     */
    status: TransformerStatus;
    /**
     * Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
     */
    ediType: EdiType;
    /**
     * Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
     */
    sampleDocument?: FileLocation;
    /**
     * Returns a timestamp for creation date and time of the transformer.
     */
    createdAt: CreatedDate;
  }
  export type CreatedDate = Date;
  export interface DeleteCapabilityRequest {
    /**
     * Specifies a system-assigned unique identifier for the capability.
     */
    capabilityId: CapabilityId;
  }
  export interface DeletePartnershipRequest {
    /**
     * Specifies the unique, system-generated identifier for a partnership.
     */
    partnershipId: PartnershipId;
  }
  export interface DeleteProfileRequest {
    /**
     * Specifies the unique, system-generated identifier for the profile.
     */
    profileId: ProfileId;
  }
  export interface DeleteTransformerRequest {
    /**
     * Specifies the system-assigned unique identifier for the transformer.
     */
    transformerId: TransformerId;
  }
  export interface EdiConfiguration {
    /**
     * Returns the type of the capability. Currently, only edi is supported.
     */
    type: EdiType;
    /**
     * Contains the Amazon S3 bucket and prefix for the location of the input file, which is contained in an S3Location object.
     */
    inputLocation: S3Location;
    /**
     * Contains the Amazon S3 bucket and prefix for the location of the output file, which is contained in an S3Location object.
     */
    outputLocation: S3Location;
    /**
     * Returns the system-assigned unique identifier for the transformer.
     */
    transformerId: TransformerId;
  }
  export interface EdiType {
    /**
     * Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
     */
    x12Details?: X12Details;
  }
  export type Email = string;
  export type FileFormat = "XML"|"JSON"|string;
  export type FileLocation = string;
  export interface GetCapabilityRequest {
    /**
     * Specifies a system-assigned unique identifier for the capability.
     */
    capabilityId: CapabilityId;
  }
  export interface GetCapabilityResponse {
    /**
     * Returns a system-assigned unique identifier for the capability.
     */
    capabilityId: CapabilityId;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
     */
    capabilityArn: ResourceArn;
    /**
     * Returns the name of the capability, used to identify it.
     */
    name: CapabilityName;
    /**
     * Returns the type of the capability. Currently, only edi is supported.
     */
    type: CapabilityType;
    /**
     * Returns a structure that contains the details for a capability.
     */
    configuration: CapabilityConfiguration;
    /**
     * Returns one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.
     */
    instructionsDocuments?: InstructionsDocuments;
    /**
     * Returns a timestamp for creation date and time of the capability.
     */
    createdAt: CreatedDate;
    /**
     * Returns a timestamp for last time the capability was modified.
     */
    modifiedAt?: ModifiedDate;
  }
  export interface GetPartnershipRequest {
    /**
     * Specifies the unique, system-generated identifier for a partnership.
     */
    partnershipId: PartnershipId;
  }
  export interface GetPartnershipResponse {
    /**
     * Returns the unique, system-generated identifier for the profile connected to this partnership.
     */
    profileId: ProfileId;
    /**
     * Returns the unique, system-generated identifier for a partnership.
     */
    partnershipId: PartnershipId;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
     */
    partnershipArn: ResourceArn;
    /**
     * Returns the display name of the partnership
     */
    name?: PartnerName;
    /**
     * Returns the email address associated with this trading partner.
     */
    email?: Email;
    /**
     * Returns the phone number associated with the partnership.
     */
    phone?: Phone;
    /**
     * Returns one or more capabilities associated with this partnership.
     */
    capabilities?: PartnershipCapabilities;
    /**
     * Returns the unique identifier for the partner for this partnership.
     */
    tradingPartnerId?: TradingPartnerId;
    /**
     * Returns a timestamp for creation date and time of the partnership.
     */
    createdAt: CreatedDate;
    /**
     * Returns a timestamp that identifies the most recent date and time that the partnership was modified.
     */
    modifiedAt?: ModifiedDate;
  }
  export interface GetProfileRequest {
    /**
     * Specifies the unique, system-generated identifier for the profile.
     */
    profileId: ProfileId;
  }
  export interface GetProfileResponse {
    /**
     * Returns the unique, system-generated identifier for the profile.
     */
    profileId: ProfileId;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
     */
    profileArn: ResourceArn;
    /**
     * Returns the name of the profile, used to identify it.
     */
    name: ProfileName;
    /**
     * Returns the email address associated with this customer profile.
     */
    email?: Email;
    /**
     * Returns the phone number associated with the profile.
     */
    phone: Phone;
    /**
     * Returns the name for the business associated with this profile.
     */
    businessName: BusinessName;
    /**
     * Returns whether or not logging is enabled for this profile.
     */
    logging?: Logging;
    /**
     * Returns the name of the logging group.
     */
    logGroupName?: LogGroupName;
    /**
     * Returns a timestamp for creation date and time of the transformer.
     */
    createdAt: CreatedDate;
    /**
     * Returns a timestamp for last time the profile was modified.
     */
    modifiedAt?: ModifiedDate;
  }
  export interface GetTransformerJobRequest {
    /**
     * Specifies the unique, system-generated identifier for a transformer run.
     */
    transformerJobId: TransformerJobId;
    /**
     * Specifies the system-assigned unique identifier for the transformer.
     */
    transformerId: TransformerId;
  }
  export interface GetTransformerJobResponse {
    /**
     * Returns the current state of the transformer job, either running, succeeded, or failed.
     */
    status: TransformerJobStatus;
    /**
     * Returns the location for the output files. If the caller specified a directory for the output, then this contains the full path to the output file, including the file name generated by the service.
     */
    outputFiles?: S3LocationList;
    /**
     * Returns an optional error message, which gets populated when the job is not run successfully.
     */
    message?: String;
  }
  export interface GetTransformerRequest {
    /**
     * Specifies the system-assigned unique identifier for the transformer.
     */
    transformerId: TransformerId;
  }
  export interface GetTransformerResponse {
    /**
     * Returns the system-assigned unique identifier for the transformer.
     */
    transformerId: TransformerId;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
     */
    transformerArn: ResourceArn;
    /**
     * Returns the name of the transformer, used to identify it.
     */
    name: TransformerName;
    /**
     * Returns that the currently supported file formats for EDI transformations are JSON and XML.
     */
    fileFormat: FileFormat;
    /**
     * Returns the name of the mapping template for the transformer. This template is used to convert the input document into the correct set of objects.
     */
    mappingTemplate: MappingTemplate;
    /**
     * Returns the state of the newly created transformer. The transformer can be either active or inactive. For the transformer to be used in a capability, its status must active.
     */
    status: TransformerStatus;
    /**
     * Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
     */
    ediType: EdiType;
    /**
     * Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
     */
    sampleDocument?: FileLocation;
    /**
     * Returns a timestamp for creation date and time of the transformer.
     */
    createdAt: CreatedDate;
    /**
     * Returns a timestamp for last time the transformer was modified.
     */
    modifiedAt?: ModifiedDate;
  }
  export type InstructionsDocuments = S3Location[];
  export interface ListCapabilitiesRequest {
    /**
     * When additional results are obtained from the command, a NextToken parameter is returned in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional resources.
     */
    nextToken?: PageToken;
    /**
     * Specifies the maximum number of capabilities to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListCapabilitiesResponse {
    /**
     * Returns one or more capabilities associated with this partnership.
     */
    capabilities: CapabilityList;
    /**
     * When additional results are obtained from the command, a NextToken parameter is returned in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional resources.
     */
    nextToken?: PageToken;
  }
  export interface ListPartnershipsRequest {
    /**
     * Specifies the unique, system-generated identifier for the profile connected to this partnership.
     */
    profileId?: ProfileId;
    /**
     * When additional results are obtained from the command, a NextToken parameter is returned in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional resources.
     */
    nextToken?: PageToken;
    /**
     * Specifies the maximum number of capabilities to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListPartnershipsResponse {
    /**
     * Specifies a list of your partnerships.
     */
    partnerships: PartnershipList;
    /**
     * When additional results are obtained from the command, a NextToken parameter is returned in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional resources.
     */
    nextToken?: PageToken;
  }
  export interface ListProfilesRequest {
    /**
     * When additional results are obtained from the command, a NextToken parameter is returned in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional resources.
     */
    nextToken?: PageToken;
    /**
     * Specifies the maximum number of profiles to return.
     */
    maxResults?: MaxResults;
  }
  export interface ListProfilesResponse {
    /**
     * Returns an array of ProfileSummary objects.
     */
    profiles: ProfileList;
    /**
     * When additional results are obtained from the command, a NextToken parameter is returned in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional resources.
     */
    nextToken?: PageToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * Requests the tags associated with a particular Amazon Resource Name (ARN). An ARN is an identifier for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
     */
    ResourceARN: AmazonResourceName;
  }
  export interface ListTagsForResourceResponse {
    /**
     * Returns the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
     */
    Tags?: TagList;
  }
  export interface ListTransformersRequest {
    /**
     * When additional results are obtained from the command, a NextToken parameter is returned in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional resources.
     */
    nextToken?: PageToken;
    /**
     * Specifies the number of items to return for the API response.
     */
    maxResults?: MaxResults;
  }
  export interface ListTransformersResponse {
    /**
     * Returns an array of one or more transformer objects. For each transformer, a TransformerSummary object is returned. The TransformerSummary contains all the details for a specific transformer.
     */
    transformers: TransformerList;
    /**
     * When additional results are obtained from the command, a NextToken parameter is returned in the output. You can then pass the NextToken parameter in a subsequent command to continue listing additional resources.
     */
    nextToken?: PageToken;
  }
  export type LogGroupName = string;
  export type Logging = "ENABLED"|"DISABLED"|string;
  export type MappingTemplate = string;
  export type MaxResults = number;
  export type ModifiedDate = Date;
  export type PageToken = string;
  export type PartnerName = string;
  export type PartnershipCapabilities = CapabilityId[];
  export type PartnershipId = string;
  export type PartnershipList = PartnershipSummary[];
  export interface PartnershipSummary {
    /**
     * Returns the unique, system-generated identifier for the profile connected to this partnership.
     */
    profileId: ProfileId;
    /**
     * Returns the unique, system-generated identifier for a partnership.
     */
    partnershipId: PartnershipId;
    /**
     * Returns the name of the partnership.
     */
    name?: PartnerName;
    /**
     * Returns one or more capabilities associated with this partnership.
     */
    capabilities?: PartnershipCapabilities;
    /**
     * Returns the unique, system-generated identifier for a trading partner.
     */
    tradingPartnerId?: TradingPartnerId;
    /**
     * Returns a timestamp for creation date and time of the partnership.
     */
    createdAt: CreatedDate;
    /**
     * Returns a timestamp that identifies the most recent date and time that the partnership was modified.
     */
    modifiedAt?: ModifiedDate;
  }
  export type Phone = string;
  export type ProfileId = string;
  export type ProfileList = ProfileSummary[];
  export type ProfileName = string;
  export interface ProfileSummary {
    /**
     * Returns the unique, system-generated identifier for the profile.
     */
    profileId: ProfileId;
    /**
     * Returns the display name for profile.
     */
    name: ProfileName;
    /**
     * Returns the name for the business associated with this profile.
     */
    businessName: BusinessName;
    /**
     * Specifies whether or not logging is enabled for this profile.
     */
    logging?: Logging;
    /**
     * Returns the name of the logging group.
     */
    logGroupName?: LogGroupName;
    /**
     * Returns the timestamp for creation date and time of the profile.
     */
    createdAt: CreatedDate;
    /**
     * Returns the timestamp that identifies the most recent date and time that the profile was modified.
     */
    modifiedAt?: ModifiedDate;
  }
  export type ResourceArn = string;
  export type S3Key = string;
  export interface S3Location {
    /**
     * Specifies the name of the Amazon S3 bucket.
     */
    bucketName?: BucketName;
    /**
     * Specifies the Amazon S3 key for the file location.
     */
    key?: S3Key;
  }
  export type S3LocationList = S3Location[];
  export interface StartTransformerJobRequest {
    /**
     * Specifies the location of the input file for the transformation. The location consists of an Amazon S3 bucket and prefix.
     */
    inputFile: S3Location;
    /**
     * Specifies the location of the output file for the transformation. The location consists of an Amazon S3 bucket and prefix.
     */
    outputLocation: S3Location;
    /**
     * Specifies the system-assigned unique identifier for the transformer.
     */
    transformerId: TransformerId;
    /**
     * Reserved for future use.
     */
    clientToken?: String;
  }
  export interface StartTransformerJobResponse {
    /**
     * Returns the unique, system-generated identifier for a transformer run.
     */
    transformerJobId: TransformerJobId;
  }
  export type String = string;
  export interface Tag {
    /**
     * Specifies the name assigned to the tag that you create.
     */
    Key: TagKey;
    /**
     * Contains one or more values that you assigned to the key name that you create.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * Specifies an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
     */
    ResourceARN: AmazonResourceName;
    /**
     * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
     */
    Tags: TagList;
  }
  export type TagValue = string;
  export type TestMappingInputFileContent = string;
  export interface TestMappingRequest {
    /**
     * Specify the contents of the EDI (electronic data interchange) XML or JSON file that is used as input for the transform.
     */
    inputFileContent: TestMappingInputFileContent;
    /**
     * Specifies the name of the mapping template for the transformer. This template is used to convert the input document into the correct set of objects.
     */
    mappingTemplate: MappingTemplate;
    /**
     * Specifies that the currently supported file formats for EDI transformations are JSON and XML.
     */
    fileFormat: FileFormat;
  }
  export interface TestMappingResponse {
    /**
     * Returns a string for the mapping that can be used to identify the mapping. Similar to a fingerprint
     */
    mappedFileContent: String;
  }
  export interface TestParsingRequest {
    /**
     * Specifies an S3Location object, which contains the Amazon S3 bucket and prefix for the location of the input file.
     */
    inputFile: S3Location;
    /**
     * Specifies that the currently supported file formats for EDI transformations are JSON and XML.
     */
    fileFormat: FileFormat;
    /**
     * Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
     */
    ediType: EdiType;
  }
  export interface TestParsingResponse {
    /**
     * Returns the contents of the input file being tested, parsed according to the specified EDI (electronic data interchange) type.
     */
    parsedFileContent: String;
  }
  export type TradingPartnerId = string;
  export type TransformerId = string;
  export type TransformerJobId = string;
  export type TransformerJobStatus = "running"|"succeeded"|"failed"|string;
  export type TransformerList = TransformerSummary[];
  export type TransformerName = string;
  export type TransformerStatus = "active"|"inactive"|string;
  export interface TransformerSummary {
    /**
     * Returns the system-assigned unique identifier for the transformer.
     */
    transformerId: TransformerId;
    /**
     * Returns the descriptive name for the transformer.
     */
    name: TransformerName;
    /**
     * Returns that the currently supported file formats for EDI transformations are JSON and XML.
     */
    fileFormat: FileFormat;
    /**
     * Returns the name of the mapping template for the transformer. This template is used to convert the input document into the correct set of objects.
     */
    mappingTemplate: MappingTemplate;
    /**
     * Returns the state of the newly created transformer. The transformer can be either active or inactive. For the transformer to be used in a capability, its status must active.
     */
    status: TransformerStatus;
    /**
     * Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
     */
    ediType: EdiType;
    /**
     * Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
     */
    sampleDocument?: FileLocation;
    /**
     * Returns a timestamp indicating when the transformer was created. For example, 2023-07-20T19:58:44.624Z.
     */
    createdAt: CreatedDate;
    /**
     * Returns a timestamp representing the date and time for the most recent change for the transformer object.
     */
    modifiedAt?: ModifiedDate;
  }
  export interface UntagResourceRequest {
    /**
     * Specifies an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
     */
    ResourceARN: AmazonResourceName;
    /**
     * Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
     */
    TagKeys: TagKeyList;
  }
  export interface UpdateCapabilityRequest {
    /**
     * Specifies a system-assigned unique identifier for the capability.
     */
    capabilityId: CapabilityId;
    /**
     * Specifies a new name for the capability, to replace the existing name.
     */
    name?: CapabilityName;
    /**
     * Specifies a structure that contains the details for a capability.
     */
    configuration?: CapabilityConfiguration;
    /**
     * Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.
     */
    instructionsDocuments?: InstructionsDocuments;
  }
  export interface UpdateCapabilityResponse {
    /**
     * Returns a system-assigned unique identifier for the capability.
     */
    capabilityId: CapabilityId;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
     */
    capabilityArn: ResourceArn;
    /**
     * Returns the name of the capability, used to identify it.
     */
    name: CapabilityName;
    /**
     * Returns the type of the capability. Currently, only edi is supported.
     */
    type: CapabilityType;
    /**
     * Returns a structure that contains the details for a capability.
     */
    configuration: CapabilityConfiguration;
    /**
     * Returns one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.
     */
    instructionsDocuments?: InstructionsDocuments;
    /**
     * Returns a timestamp for creation date and time of the capability.
     */
    createdAt: CreatedDate;
    /**
     * Returns a timestamp for last time the capability was modified.
     */
    modifiedAt?: ModifiedDate;
  }
  export interface UpdatePartnershipRequest {
    /**
     * Specifies the unique, system-generated identifier for a partnership.
     */
    partnershipId: PartnershipId;
    /**
     * The name of the partnership, used to identify it.
     */
    name?: PartnerName;
    /**
     * List of the capabilities associated with this partnership.
     */
    capabilities?: PartnershipCapabilities;
  }
  export interface UpdatePartnershipResponse {
    /**
     * Returns the unique, system-generated identifier for the profile connected to this partnership.
     */
    profileId: ProfileId;
    /**
     * Returns the unique, system-generated identifier for a partnership.
     */
    partnershipId: PartnershipId;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
     */
    partnershipArn: ResourceArn;
    /**
     * The name of the partnership, used to identify it.
     */
    name?: PartnerName;
    /**
     * Returns the email address associated with this trading partner.
     */
    email?: Email;
    /**
     * Returns the phone number associated with the partnership.
     */
    phone?: Phone;
    /**
     * Returns one or more capabilities associated with this partnership.
     */
    capabilities?: PartnershipCapabilities;
    /**
     * Returns the unique, system-generated identifier for a trading partner.
     */
    tradingPartnerId?: TradingPartnerId;
    /**
     * Returns a timestamp that identifies the most recent date and time that the partnership was modified.
     */
    createdAt: CreatedDate;
    /**
     * Returns a timestamp that identifies the most recent date and time that the partnership was modified.
     */
    modifiedAt?: ModifiedDate;
  }
  export interface UpdateProfileRequest {
    /**
     * Specifies the unique, system-generated identifier for the profile.
     */
    profileId: ProfileId;
    /**
     * The name of the profile, used to identify it.
     */
    name?: ProfileName;
    /**
     * Specifies the email address associated with this customer profile.
     */
    email?: Email;
    /**
     * Specifies the phone number associated with the profile.
     */
    phone?: Phone;
    /**
     * Specifies the name for the business associated with this profile.
     */
    businessName?: BusinessName;
  }
  export interface UpdateProfileResponse {
    /**
     * Returns the unique, system-generated identifier for the profile.
     */
    profileId: ProfileId;
    /**
     * Returns an Amazon Resource Name (ARN) for the profile.
     */
    profileArn: ResourceArn;
    /**
     * Returns the name of the profile.
     */
    name: ProfileName;
    /**
     * Returns the email address associated with this customer profile.
     */
    email?: Email;
    /**
     * Returns the phone number associated with the profile.
     */
    phone: Phone;
    /**
     * Returns the name for the business associated with this profile.
     */
    businessName: BusinessName;
    /**
     * Specifies whether or not logging is enabled for this profile.
     */
    logging?: Logging;
    /**
     * Returns the name of the logging group.
     */
    logGroupName?: LogGroupName;
    /**
     * Returns a timestamp for creation date and time of the profile.
     */
    createdAt: CreatedDate;
    /**
     * Returns a timestamp for last time the profile was modified.
     */
    modifiedAt?: ModifiedDate;
  }
  export interface UpdateTransformerRequest {
    /**
     * Specifies the system-assigned unique identifier for the transformer.
     */
    transformerId: TransformerId;
    /**
     * Specify a new name for the transformer, if you want to update it.
     */
    name?: TransformerName;
    /**
     * Specifies that the currently supported file formats for EDI transformations are JSON and XML.
     */
    fileFormat?: FileFormat;
    /**
     * Specifies the name of the mapping template for the transformer. This template is used to convert the input document into the correct set of objects.
     */
    mappingTemplate?: MappingTemplate;
    /**
     * Specifies the transformer's status. You can update the state of the transformer, from active to inactive, or inactive to active.
     */
    status?: TransformerStatus;
    /**
     * Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
     */
    ediType?: EdiType;
    /**
     * Specifies a sample EDI document that is used by a transformer as a guide for processing the EDI data.
     */
    sampleDocument?: FileLocation;
  }
  export interface UpdateTransformerResponse {
    /**
     * Returns the system-assigned unique identifier for the transformer.
     */
    transformerId: TransformerId;
    /**
     * Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.
     */
    transformerArn: ResourceArn;
    /**
     * Returns the name of the transformer.
     */
    name: TransformerName;
    /**
     * Returns that the currently supported file formats for EDI transformations are JSON and XML.
     */
    fileFormat: FileFormat;
    /**
     * Returns the name of the mapping template for the transformer. This template is used to convert the input document into the correct set of objects.
     */
    mappingTemplate: MappingTemplate;
    /**
     * Returns the state of the newly created transformer. The transformer can be either active or inactive. For the transformer to be used in a capability, its status must active.
     */
    status: TransformerStatus;
    /**
     * Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
     */
    ediType: EdiType;
    /**
     * Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
     */
    sampleDocument?: FileLocation;
    /**
     * Returns a timestamp for creation date and time of the transformer.
     */
    createdAt: CreatedDate;
    /**
     * Returns a timestamp for last time the transformer was modified.
     */
    modifiedAt: ModifiedDate;
  }
  export interface X12Details {
    /**
     * Returns an enumerated type where each value identifies an X12 transaction set. Transaction sets are maintained by the X12 Accredited Standards Committee.
     */
    transactionSet?: X12TransactionSet;
    /**
     * Returns the version to use for the specified X12 transaction set.  &lt;/p&gt; 
     */
    version?: X12Version;
  }
  export type X12TransactionSet = "X12_110"|"X12_180"|"X12_204"|"X12_210"|"X12_211"|"X12_214"|"X12_215"|"X12_259"|"X12_260"|"X12_266"|"X12_269"|"X12_270"|"X12_271"|"X12_274"|"X12_275"|"X12_276"|"X12_277"|"X12_278"|"X12_310"|"X12_315"|"X12_322"|"X12_404"|"X12_410"|"X12_417"|"X12_421"|"X12_426"|"X12_810"|"X12_820"|"X12_824"|"X12_830"|"X12_832"|"X12_834"|"X12_835"|"X12_837"|"X12_844"|"X12_846"|"X12_849"|"X12_850"|"X12_852"|"X12_855"|"X12_856"|"X12_860"|"X12_861"|"X12_864"|"X12_865"|"X12_869"|"X12_870"|"X12_940"|"X12_945"|"X12_990"|"X12_997"|"X12_999"|"X12_270_X279"|"X12_271_X279"|"X12_275_X210"|"X12_275_X211"|"X12_276_X212"|"X12_277_X212"|"X12_277_X214"|"X12_277_X364"|"X12_278_X217"|"X12_820_X218"|"X12_820_X306"|"X12_824_X186"|"X12_834_X220"|"X12_834_X307"|"X12_834_X318"|"X12_835_X221"|"X12_837_X222"|"X12_837_X223"|"X12_837_X224"|"X12_837_X291"|"X12_837_X292"|"X12_837_X298"|"X12_999_X231"|string;
  export type X12Version = "VERSION_4010"|"VERSION_4030"|"VERSION_5010"|"VERSION_5010_HIPAA"|string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-06-23"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the B2bi client.
   */
  export import Types = B2bi;
}
export = B2bi;
