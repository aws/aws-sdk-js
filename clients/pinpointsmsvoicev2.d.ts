import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class PinpointSMSVoiceV2 extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: PinpointSMSVoiceV2.Types.ClientConfiguration)
  config: Config & PinpointSMSVoiceV2.Types.ClientConfiguration;
  /**
   * Associates the specified origination identity with a pool. If the origination identity is a phone number and is already associated with another pool, an error is returned. A sender ID can be associated with multiple pools. If the origination identity configuration doesn't match the pool's configuration, an error is returned.
   */
  associateOriginationIdentity(params: PinpointSMSVoiceV2.Types.AssociateOriginationIdentityRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.AssociateOriginationIdentityResult) => void): Request<PinpointSMSVoiceV2.Types.AssociateOriginationIdentityResult, AWSError>;
  /**
   * Associates the specified origination identity with a pool. If the origination identity is a phone number and is already associated with another pool, an error is returned. A sender ID can be associated with multiple pools. If the origination identity configuration doesn't match the pool's configuration, an error is returned.
   */
  associateOriginationIdentity(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.AssociateOriginationIdentityResult) => void): Request<PinpointSMSVoiceV2.Types.AssociateOriginationIdentityResult, AWSError>;
  /**
   * Creates a new configuration set. After you create the configuration set, you can add one or more event destinations to it. A configuration set is a set of rules that you apply to the SMS and voice messages that you send. When you send a message, you can optionally specify a single configuration set.
   */
  createConfigurationSet(params: PinpointSMSVoiceV2.Types.CreateConfigurationSetRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateConfigurationSetResult) => void): Request<PinpointSMSVoiceV2.Types.CreateConfigurationSetResult, AWSError>;
  /**
   * Creates a new configuration set. After you create the configuration set, you can add one or more event destinations to it. A configuration set is a set of rules that you apply to the SMS and voice messages that you send. When you send a message, you can optionally specify a single configuration set.
   */
  createConfigurationSet(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateConfigurationSetResult) => void): Request<PinpointSMSVoiceV2.Types.CreateConfigurationSetResult, AWSError>;
  /**
   * Creates a new event destination in a configuration set. An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic. Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Kinesis Data Firehose destination.
   */
  createEventDestination(params: PinpointSMSVoiceV2.Types.CreateEventDestinationRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateEventDestinationResult) => void): Request<PinpointSMSVoiceV2.Types.CreateEventDestinationResult, AWSError>;
  /**
   * Creates a new event destination in a configuration set. An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic. Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Kinesis Data Firehose destination.
   */
  createEventDestination(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateEventDestinationResult) => void): Request<PinpointSMSVoiceV2.Types.CreateEventDestinationResult, AWSError>;
  /**
   * Creates a new opt-out list. If the opt-out list name already exists, an error is returned. An opt-out list is a list of phone numbers that are opted out, meaning you can't send SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for the phone number is added to the opt-out list. In addition to STOP, your recipients can use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported opt-out keywords, see  SMS opt out  in the Amazon Pinpoint User Guide.
   */
  createOptOutList(params: PinpointSMSVoiceV2.Types.CreateOptOutListRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateOptOutListResult) => void): Request<PinpointSMSVoiceV2.Types.CreateOptOutListResult, AWSError>;
  /**
   * Creates a new opt-out list. If the opt-out list name already exists, an error is returned. An opt-out list is a list of phone numbers that are opted out, meaning you can't send SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for the phone number is added to the opt-out list. In addition to STOP, your recipients can use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported opt-out keywords, see  SMS opt out  in the Amazon Pinpoint User Guide.
   */
  createOptOutList(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateOptOutListResult) => void): Request<PinpointSMSVoiceV2.Types.CreateOptOutListResult, AWSError>;
  /**
   * Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account. The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false. If the origination identity is a phone number and is already associated with another pool, an error is returned. A sender ID can be associated with multiple pools.
   */
  createPool(params: PinpointSMSVoiceV2.Types.CreatePoolRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreatePoolResult) => void): Request<PinpointSMSVoiceV2.Types.CreatePoolResult, AWSError>;
  /**
   * Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account. The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false. If the origination identity is a phone number and is already associated with another pool, an error is returned. A sender ID can be associated with multiple pools.
   */
  createPool(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreatePoolResult) => void): Request<PinpointSMSVoiceV2.Types.CreatePoolResult, AWSError>;
  /**
   * Creates a new registration based on the RegistrationType field. 
   */
  createRegistration(params: PinpointSMSVoiceV2.Types.CreateRegistrationRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateRegistrationResult) => void): Request<PinpointSMSVoiceV2.Types.CreateRegistrationResult, AWSError>;
  /**
   * Creates a new registration based on the RegistrationType field. 
   */
  createRegistration(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateRegistrationResult) => void): Request<PinpointSMSVoiceV2.Types.CreateRegistrationResult, AWSError>;
  /**
   * Associate the registration with an origination identity such as a phone number or sender ID.
   */
  createRegistrationAssociation(params: PinpointSMSVoiceV2.Types.CreateRegistrationAssociationRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateRegistrationAssociationResult) => void): Request<PinpointSMSVoiceV2.Types.CreateRegistrationAssociationResult, AWSError>;
  /**
   * Associate the registration with an origination identity such as a phone number or sender ID.
   */
  createRegistrationAssociation(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateRegistrationAssociationResult) => void): Request<PinpointSMSVoiceV2.Types.CreateRegistrationAssociationResult, AWSError>;
  /**
   * Create a new registration attachment to use for uploading a file or a URL to a file. The maximum file size is 1MiB and valid file extensions are PDF, JPEG and PNG. For example, many sender ID registrations require a signed “letter of authorization” (LOA) to be submitted.
   */
  createRegistrationAttachment(params: PinpointSMSVoiceV2.Types.CreateRegistrationAttachmentRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateRegistrationAttachmentResult) => void): Request<PinpointSMSVoiceV2.Types.CreateRegistrationAttachmentResult, AWSError>;
  /**
   * Create a new registration attachment to use for uploading a file or a URL to a file. The maximum file size is 1MiB and valid file extensions are PDF, JPEG and PNG. For example, many sender ID registrations require a signed “letter of authorization” (LOA) to be submitted.
   */
  createRegistrationAttachment(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateRegistrationAttachmentResult) => void): Request<PinpointSMSVoiceV2.Types.CreateRegistrationAttachmentResult, AWSError>;
  /**
   * Create a new version of the registration and increase the VersionNumber. The previous version of the registration becomes read-only.
   */
  createRegistrationVersion(params: PinpointSMSVoiceV2.Types.CreateRegistrationVersionRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateRegistrationVersionResult) => void): Request<PinpointSMSVoiceV2.Types.CreateRegistrationVersionResult, AWSError>;
  /**
   * Create a new version of the registration and increase the VersionNumber. The previous version of the registration becomes read-only.
   */
  createRegistrationVersion(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateRegistrationVersionResult) => void): Request<PinpointSMSVoiceV2.Types.CreateRegistrationVersionResult, AWSError>;
  /**
   * You can only send messages to verified destination numbers when your account is in the sandbox. You can add up to 10 verified destination numbers.
   */
  createVerifiedDestinationNumber(params: PinpointSMSVoiceV2.Types.CreateVerifiedDestinationNumberRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateVerifiedDestinationNumberResult) => void): Request<PinpointSMSVoiceV2.Types.CreateVerifiedDestinationNumberResult, AWSError>;
  /**
   * You can only send messages to verified destination numbers when your account is in the sandbox. You can add up to 10 verified destination numbers.
   */
  createVerifiedDestinationNumber(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.CreateVerifiedDestinationNumberResult) => void): Request<PinpointSMSVoiceV2.Types.CreateVerifiedDestinationNumberResult, AWSError>;
  /**
   * Deletes an existing configuration set. A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages. 
   */
  deleteConfigurationSet(params: PinpointSMSVoiceV2.Types.DeleteConfigurationSetRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteConfigurationSetResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteConfigurationSetResult, AWSError>;
  /**
   * Deletes an existing configuration set. A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages. 
   */
  deleteConfigurationSet(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteConfigurationSetResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteConfigurationSetResult, AWSError>;
  /**
   * Deletes an existing default message type on a configuration set.  A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose Transactional. If you plan to send messages that contain marketing material or other promotional content, choose Promotional. This setting applies to your entire Amazon Web Services account. 
   */
  deleteDefaultMessageType(params: PinpointSMSVoiceV2.Types.DeleteDefaultMessageTypeRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteDefaultMessageTypeResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteDefaultMessageTypeResult, AWSError>;
  /**
   * Deletes an existing default message type on a configuration set.  A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose Transactional. If you plan to send messages that contain marketing material or other promotional content, choose Promotional. This setting applies to your entire Amazon Web Services account. 
   */
  deleteDefaultMessageType(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteDefaultMessageTypeResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteDefaultMessageTypeResult, AWSError>;
  /**
   * Deletes an existing default sender ID on a configuration set. A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.
   */
  deleteDefaultSenderId(params: PinpointSMSVoiceV2.Types.DeleteDefaultSenderIdRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteDefaultSenderIdResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteDefaultSenderIdResult, AWSError>;
  /**
   * Deletes an existing default sender ID on a configuration set. A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.
   */
  deleteDefaultSenderId(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteDefaultSenderIdResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteDefaultSenderIdResult, AWSError>;
  /**
   * Deletes an existing event destination. An event destination is a location where you send response information about the messages that you send. For example, when a message is delivered successfully, you can send information about that event to an Amazon CloudWatch destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.
   */
  deleteEventDestination(params: PinpointSMSVoiceV2.Types.DeleteEventDestinationRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteEventDestinationResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteEventDestinationResult, AWSError>;
  /**
   * Deletes an existing event destination. An event destination is a location where you send response information about the messages that you send. For example, when a message is delivered successfully, you can send information about that event to an Amazon CloudWatch destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.
   */
  deleteEventDestination(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteEventDestinationResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteEventDestinationResult, AWSError>;
  /**
   * Deletes an existing keyword from an origination phone number or pool. A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message. Keywords "HELP" and "STOP" can't be deleted or modified.
   */
  deleteKeyword(params: PinpointSMSVoiceV2.Types.DeleteKeywordRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteKeywordResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteKeywordResult, AWSError>;
  /**
   * Deletes an existing keyword from an origination phone number or pool. A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message. Keywords "HELP" and "STOP" can't be deleted or modified.
   */
  deleteKeyword(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteKeywordResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteKeywordResult, AWSError>;
  /**
   * Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are deleted. If the specified opt-out list name doesn't exist or is in-use by an origination phone number or pool, an error is returned.
   */
  deleteOptOutList(params: PinpointSMSVoiceV2.Types.DeleteOptOutListRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteOptOutListResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteOptOutListResult, AWSError>;
  /**
   * Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are deleted. If the specified opt-out list name doesn't exist or is in-use by an origination phone number or pool, an error is returned.
   */
  deleteOptOutList(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteOptOutListResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteOptOutListResult, AWSError>;
  /**
   * Deletes an existing opted out destination phone number from the specified opt-out list. Each destination phone number can only be deleted once every 30 days. If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an error is returned.
   */
  deleteOptedOutNumber(params: PinpointSMSVoiceV2.Types.DeleteOptedOutNumberRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteOptedOutNumberResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteOptedOutNumberResult, AWSError>;
  /**
   * Deletes an existing opted out destination phone number from the specified opt-out list. Each destination phone number can only be deleted once every 30 days. If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an error is returned.
   */
  deleteOptedOutNumber(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteOptedOutNumberResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteOptedOutNumberResult, AWSError>;
  /**
   * Deletes an existing pool. Deleting a pool disassociates all origination identities from that pool. If the pool status isn't active or if deletion protection is enabled, an error is returned. A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.
   */
  deletePool(params: PinpointSMSVoiceV2.Types.DeletePoolRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeletePoolResult) => void): Request<PinpointSMSVoiceV2.Types.DeletePoolResult, AWSError>;
  /**
   * Deletes an existing pool. Deleting a pool disassociates all origination identities from that pool. If the pool status isn't active or if deletion protection is enabled, an error is returned. A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.
   */
  deletePool(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeletePoolResult) => void): Request<PinpointSMSVoiceV2.Types.DeletePoolResult, AWSError>;
  /**
   * Permanently delete an existing registration from your account.
   */
  deleteRegistration(params: PinpointSMSVoiceV2.Types.DeleteRegistrationRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteRegistrationResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteRegistrationResult, AWSError>;
  /**
   * Permanently delete an existing registration from your account.
   */
  deleteRegistration(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteRegistrationResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteRegistrationResult, AWSError>;
  /**
   * Permanently delete the specified registration attachment.
   */
  deleteRegistrationAttachment(params: PinpointSMSVoiceV2.Types.DeleteRegistrationAttachmentRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteRegistrationAttachmentResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteRegistrationAttachmentResult, AWSError>;
  /**
   * Permanently delete the specified registration attachment.
   */
  deleteRegistrationAttachment(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteRegistrationAttachmentResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteRegistrationAttachmentResult, AWSError>;
  /**
   * Delete the value in a registration form field.
   */
  deleteRegistrationFieldValue(params: PinpointSMSVoiceV2.Types.DeleteRegistrationFieldValueRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteRegistrationFieldValueResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteRegistrationFieldValueResult, AWSError>;
  /**
   * Delete the value in a registration form field.
   */
  deleteRegistrationFieldValue(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteRegistrationFieldValueResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteRegistrationFieldValueResult, AWSError>;
  /**
   * Deletes an account-level monthly spending limit override for sending text messages. Deleting a spend limit override will set the EnforcedLimit to equal the MaxLimit, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see Amazon Pinpoint quotas  in the Amazon Pinpoint Developer Guide.
   */
  deleteTextMessageSpendLimitOverride(params: PinpointSMSVoiceV2.Types.DeleteTextMessageSpendLimitOverrideRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteTextMessageSpendLimitOverrideResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteTextMessageSpendLimitOverrideResult, AWSError>;
  /**
   * Deletes an account-level monthly spending limit override for sending text messages. Deleting a spend limit override will set the EnforcedLimit to equal the MaxLimit, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see Amazon Pinpoint quotas  in the Amazon Pinpoint Developer Guide.
   */
  deleteTextMessageSpendLimitOverride(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteTextMessageSpendLimitOverrideResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteTextMessageSpendLimitOverrideResult, AWSError>;
  /**
   * Delete a verified destination phone number.
   */
  deleteVerifiedDestinationNumber(params: PinpointSMSVoiceV2.Types.DeleteVerifiedDestinationNumberRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteVerifiedDestinationNumberResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteVerifiedDestinationNumberResult, AWSError>;
  /**
   * Delete a verified destination phone number.
   */
  deleteVerifiedDestinationNumber(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteVerifiedDestinationNumberResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteVerifiedDestinationNumberResult, AWSError>;
  /**
   * Deletes an account level monthly spend limit override for sending voice messages. Deleting a spend limit override sets the EnforcedLimit equal to the MaxLimit, which is controlled by Amazon Web Services. For more information on spending limits (quotas) see Amazon Pinpoint quotas in the Amazon Pinpoint Developer Guide.
   */
  deleteVoiceMessageSpendLimitOverride(params: PinpointSMSVoiceV2.Types.DeleteVoiceMessageSpendLimitOverrideRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteVoiceMessageSpendLimitOverrideResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteVoiceMessageSpendLimitOverrideResult, AWSError>;
  /**
   * Deletes an account level monthly spend limit override for sending voice messages. Deleting a spend limit override sets the EnforcedLimit equal to the MaxLimit, which is controlled by Amazon Web Services. For more information on spending limits (quotas) see Amazon Pinpoint quotas in the Amazon Pinpoint Developer Guide.
   */
  deleteVoiceMessageSpendLimitOverride(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DeleteVoiceMessageSpendLimitOverrideResult) => void): Request<PinpointSMSVoiceV2.Types.DeleteVoiceMessageSpendLimitOverrideResult, AWSError>;
  /**
   * Describes attributes of your Amazon Web Services account. The supported account attributes include account tier, which indicates whether your account is in the sandbox or production environment. When you're ready to move your account out of the sandbox, create an Amazon Web Services Support case for a service limit increase request. New Amazon Pinpoint accounts are placed into an SMS or voice sandbox. The sandbox protects both Amazon Web Services end recipients and SMS or voice recipients from fraud and abuse. 
   */
  describeAccountAttributes(params: PinpointSMSVoiceV2.Types.DescribeAccountAttributesRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeAccountAttributesResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeAccountAttributesResult, AWSError>;
  /**
   * Describes attributes of your Amazon Web Services account. The supported account attributes include account tier, which indicates whether your account is in the sandbox or production environment. When you're ready to move your account out of the sandbox, create an Amazon Web Services Support case for a service limit increase request. New Amazon Pinpoint accounts are placed into an SMS or voice sandbox. The sandbox protects both Amazon Web Services end recipients and SMS or voice recipients from fraud and abuse. 
   */
  describeAccountAttributes(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeAccountAttributesResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeAccountAttributesResult, AWSError>;
  /**
   * Describes the current Amazon Pinpoint SMS Voice V2 resource quotas for your account. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value. When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of configuration sets, opt-out lists, phone numbers, and pools that you can create in a given Region. For more information see  Amazon Pinpoint quotas  in the Amazon Pinpoint Developer Guide.
   */
  describeAccountLimits(params: PinpointSMSVoiceV2.Types.DescribeAccountLimitsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeAccountLimitsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeAccountLimitsResult, AWSError>;
  /**
   * Describes the current Amazon Pinpoint SMS Voice V2 resource quotas for your account. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value. When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of configuration sets, opt-out lists, phone numbers, and pools that you can create in a given Region. For more information see  Amazon Pinpoint quotas  in the Amazon Pinpoint Developer Guide.
   */
  describeAccountLimits(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeAccountLimitsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeAccountLimitsResult, AWSError>;
  /**
   * Describes the specified configuration sets or all in your account. If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets. If you specify a configuration set name that isn't valid, an error is returned.
   */
  describeConfigurationSets(params: PinpointSMSVoiceV2.Types.DescribeConfigurationSetsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeConfigurationSetsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeConfigurationSetsResult, AWSError>;
  /**
   * Describes the specified configuration sets or all in your account. If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets. If you specify a configuration set name that isn't valid, an error is returned.
   */
  describeConfigurationSets(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeConfigurationSetsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeConfigurationSetsResult, AWSError>;
  /**
   * Describes the specified keywords or all keywords on your origination phone number or pool. A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message. If you specify a keyword that isn't valid, an error is returned.
   */
  describeKeywords(params: PinpointSMSVoiceV2.Types.DescribeKeywordsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeKeywordsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeKeywordsResult, AWSError>;
  /**
   * Describes the specified keywords or all keywords on your origination phone number or pool. A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message. If you specify a keyword that isn't valid, an error is returned.
   */
  describeKeywords(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeKeywordsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeKeywordsResult, AWSError>;
  /**
   * Describes the specified opt-out list or all opt-out lists in your account. If you specify opt-out list names, the output includes information for only the specified opt-out lists. Opt-out lists include only those that meet the filter criteria. If you don't specify opt-out list names or filters, the output includes information for all opt-out lists. If you specify an opt-out list name that isn't valid, an error is returned.
   */
  describeOptOutLists(params: PinpointSMSVoiceV2.Types.DescribeOptOutListsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeOptOutListsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeOptOutListsResult, AWSError>;
  /**
   * Describes the specified opt-out list or all opt-out lists in your account. If you specify opt-out list names, the output includes information for only the specified opt-out lists. Opt-out lists include only those that meet the filter criteria. If you don't specify opt-out list names or filters, the output includes information for all opt-out lists. If you specify an opt-out list name that isn't valid, an error is returned.
   */
  describeOptOutLists(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeOptOutListsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeOptOutListsResult, AWSError>;
  /**
   * Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list. If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list. If you specify an opted out number that isn't valid, an error is returned.
   */
  describeOptedOutNumbers(params: PinpointSMSVoiceV2.Types.DescribeOptedOutNumbersRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeOptedOutNumbersResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeOptedOutNumbersResult, AWSError>;
  /**
   * Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list. If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list. If you specify an opted out number that isn't valid, an error is returned.
   */
  describeOptedOutNumbers(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeOptedOutNumbersResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeOptedOutNumbersResult, AWSError>;
  /**
   * Describes the specified origination phone number, or all the phone numbers in your account. If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers. If you specify a phone number ID that isn't valid, an error is returned.
   */
  describePhoneNumbers(params: PinpointSMSVoiceV2.Types.DescribePhoneNumbersRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribePhoneNumbersResult) => void): Request<PinpointSMSVoiceV2.Types.DescribePhoneNumbersResult, AWSError>;
  /**
   * Describes the specified origination phone number, or all the phone numbers in your account. If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers. If you specify a phone number ID that isn't valid, an error is returned.
   */
  describePhoneNumbers(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribePhoneNumbersResult) => void): Request<PinpointSMSVoiceV2.Types.DescribePhoneNumbersResult, AWSError>;
  /**
   * Retrieves the specified pools or all pools associated with your Amazon Web Services account. If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools. If you specify a pool ID that isn't valid, an error is returned. A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.
   */
  describePools(params: PinpointSMSVoiceV2.Types.DescribePoolsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribePoolsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribePoolsResult, AWSError>;
  /**
   * Retrieves the specified pools or all pools associated with your Amazon Web Services account. If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools. If you specify a pool ID that isn't valid, an error is returned. A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.
   */
  describePools(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribePoolsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribePoolsResult, AWSError>;
  /**
   * Retrieves the specified registration attachments or all registration attachments associated with your Amazon Web Services account.
   */
  describeRegistrationAttachments(params: PinpointSMSVoiceV2.Types.DescribeRegistrationAttachmentsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationAttachmentsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationAttachmentsResult, AWSError>;
  /**
   * Retrieves the specified registration attachments or all registration attachments associated with your Amazon Web Services account.
   */
  describeRegistrationAttachments(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationAttachmentsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationAttachmentsResult, AWSError>;
  /**
   * Retrieves the specified registration type field definitions. You can use DescribeRegistrationFieldDefinitions to view the requirements for creating, filling out, and submitting each registration type.
   */
  describeRegistrationFieldDefinitions(params: PinpointSMSVoiceV2.Types.DescribeRegistrationFieldDefinitionsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationFieldDefinitionsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationFieldDefinitionsResult, AWSError>;
  /**
   * Retrieves the specified registration type field definitions. You can use DescribeRegistrationFieldDefinitions to view the requirements for creating, filling out, and submitting each registration type.
   */
  describeRegistrationFieldDefinitions(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationFieldDefinitionsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationFieldDefinitionsResult, AWSError>;
  /**
   * Retrieves the specified registration field values.
   */
  describeRegistrationFieldValues(params: PinpointSMSVoiceV2.Types.DescribeRegistrationFieldValuesRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationFieldValuesResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationFieldValuesResult, AWSError>;
  /**
   * Retrieves the specified registration field values.
   */
  describeRegistrationFieldValues(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationFieldValuesResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationFieldValuesResult, AWSError>;
  /**
   * Retrieves the specified registration section definitions. You can use DescribeRegistrationSectionDefinitions to view the requirements for creating, filling out, and submitting each registration type.
   */
  describeRegistrationSectionDefinitions(params: PinpointSMSVoiceV2.Types.DescribeRegistrationSectionDefinitionsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationSectionDefinitionsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationSectionDefinitionsResult, AWSError>;
  /**
   * Retrieves the specified registration section definitions. You can use DescribeRegistrationSectionDefinitions to view the requirements for creating, filling out, and submitting each registration type.
   */
  describeRegistrationSectionDefinitions(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationSectionDefinitionsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationSectionDefinitionsResult, AWSError>;
  /**
   * Retrieves the specified registration type definitions. You can use DescribeRegistrationTypeDefinitions to view the requirements for creating, filling out, and submitting each registration type.
   */
  describeRegistrationTypeDefinitions(params: PinpointSMSVoiceV2.Types.DescribeRegistrationTypeDefinitionsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationTypeDefinitionsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationTypeDefinitionsResult, AWSError>;
  /**
   * Retrieves the specified registration type definitions. You can use DescribeRegistrationTypeDefinitions to view the requirements for creating, filling out, and submitting each registration type.
   */
  describeRegistrationTypeDefinitions(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationTypeDefinitionsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationTypeDefinitionsResult, AWSError>;
  /**
   * Retrieves the specified registration version.
   */
  describeRegistrationVersions(params: PinpointSMSVoiceV2.Types.DescribeRegistrationVersionsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationVersionsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationVersionsResult, AWSError>;
  /**
   * Retrieves the specified registration version.
   */
  describeRegistrationVersions(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationVersionsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationVersionsResult, AWSError>;
  /**
   * Retrieves the specified registrations.
   */
  describeRegistrations(params: PinpointSMSVoiceV2.Types.DescribeRegistrationsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationsResult, AWSError>;
  /**
   * Retrieves the specified registrations.
   */
  describeRegistrations(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeRegistrationsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeRegistrationsResult, AWSError>;
  /**
   * Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account. If you specify SenderIds, the output includes information for only the specified SenderIds. If you specify filters, the output includes information for only those SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the output includes information for all SenderIds. f you specify a sender ID that isn't valid, an error is returned.
   */
  describeSenderIds(params: PinpointSMSVoiceV2.Types.DescribeSenderIdsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeSenderIdsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeSenderIdsResult, AWSError>;
  /**
   * Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account. If you specify SenderIds, the output includes information for only the specified SenderIds. If you specify filters, the output includes information for only those SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the output includes information for all SenderIds. f you specify a sender ID that isn't valid, an error is returned.
   */
  describeSenderIds(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeSenderIdsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeSenderIdsResult, AWSError>;
  /**
   * Describes the current Amazon Pinpoint monthly spend limits for sending voice and text messages. When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see  Requesting increases to your monthly SMS spending quota for Amazon Pinpoint  in the Amazon Pinpoint User Guide.
   */
  describeSpendLimits(params: PinpointSMSVoiceV2.Types.DescribeSpendLimitsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeSpendLimitsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeSpendLimitsResult, AWSError>;
  /**
   * Describes the current Amazon Pinpoint monthly spend limits for sending voice and text messages. When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see  Requesting increases to your monthly SMS spending quota for Amazon Pinpoint  in the Amazon Pinpoint User Guide.
   */
  describeSpendLimits(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeSpendLimitsResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeSpendLimitsResult, AWSError>;
  /**
   * Retrieves the specified verified destiona numbers.
   */
  describeVerifiedDestinationNumbers(params: PinpointSMSVoiceV2.Types.DescribeVerifiedDestinationNumbersRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeVerifiedDestinationNumbersResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeVerifiedDestinationNumbersResult, AWSError>;
  /**
   * Retrieves the specified verified destiona numbers.
   */
  describeVerifiedDestinationNumbers(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DescribeVerifiedDestinationNumbersResult) => void): Request<PinpointSMSVoiceV2.Types.DescribeVerifiedDestinationNumbersResult, AWSError>;
  /**
   * Removes the specified origination identity from an existing pool. If the origination identity isn't associated with the specified pool, an error is returned.
   */
  disassociateOriginationIdentity(params: PinpointSMSVoiceV2.Types.DisassociateOriginationIdentityRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DisassociateOriginationIdentityResult) => void): Request<PinpointSMSVoiceV2.Types.DisassociateOriginationIdentityResult, AWSError>;
  /**
   * Removes the specified origination identity from an existing pool. If the origination identity isn't associated with the specified pool, an error is returned.
   */
  disassociateOriginationIdentity(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DisassociateOriginationIdentityResult) => void): Request<PinpointSMSVoiceV2.Types.DisassociateOriginationIdentityResult, AWSError>;
  /**
   * Discard the current version of the registration.
   */
  discardRegistrationVersion(params: PinpointSMSVoiceV2.Types.DiscardRegistrationVersionRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DiscardRegistrationVersionResult) => void): Request<PinpointSMSVoiceV2.Types.DiscardRegistrationVersionResult, AWSError>;
  /**
   * Discard the current version of the registration.
   */
  discardRegistrationVersion(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.DiscardRegistrationVersionResult) => void): Request<PinpointSMSVoiceV2.Types.DiscardRegistrationVersionResult, AWSError>;
  /**
   * Lists all associated origination identities in your pool. If you specify filters, the output includes information for only those origination identities that meet the filter criteria.
   */
  listPoolOriginationIdentities(params: PinpointSMSVoiceV2.Types.ListPoolOriginationIdentitiesRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.ListPoolOriginationIdentitiesResult) => void): Request<PinpointSMSVoiceV2.Types.ListPoolOriginationIdentitiesResult, AWSError>;
  /**
   * Lists all associated origination identities in your pool. If you specify filters, the output includes information for only those origination identities that meet the filter criteria.
   */
  listPoolOriginationIdentities(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.ListPoolOriginationIdentitiesResult) => void): Request<PinpointSMSVoiceV2.Types.ListPoolOriginationIdentitiesResult, AWSError>;
  /**
   * Retreive all of the origination identies that are associated with a registration.
   */
  listRegistrationAssociations(params: PinpointSMSVoiceV2.Types.ListRegistrationAssociationsRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.ListRegistrationAssociationsResult) => void): Request<PinpointSMSVoiceV2.Types.ListRegistrationAssociationsResult, AWSError>;
  /**
   * Retreive all of the origination identies that are associated with a registration.
   */
  listRegistrationAssociations(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.ListRegistrationAssociationsResult) => void): Request<PinpointSMSVoiceV2.Types.ListRegistrationAssociationsResult, AWSError>;
  /**
   * List all tags associated with a resource.
   */
  listTagsForResource(params: PinpointSMSVoiceV2.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.ListTagsForResourceResult) => void): Request<PinpointSMSVoiceV2.Types.ListTagsForResourceResult, AWSError>;
  /**
   * List all tags associated with a resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.ListTagsForResourceResult) => void): Request<PinpointSMSVoiceV2.Types.ListTagsForResourceResult, AWSError>;
  /**
   * Creates or updates a keyword configuration on an origination phone number or pool.  A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message. If you specify a keyword that isn't valid, an error is returned.
   */
  putKeyword(params: PinpointSMSVoiceV2.Types.PutKeywordRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.PutKeywordResult) => void): Request<PinpointSMSVoiceV2.Types.PutKeywordResult, AWSError>;
  /**
   * Creates or updates a keyword configuration on an origination phone number or pool.  A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message. If you specify a keyword that isn't valid, an error is returned.
   */
  putKeyword(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.PutKeywordResult) => void): Request<PinpointSMSVoiceV2.Types.PutKeywordResult, AWSError>;
  /**
   * Creates an opted out destination phone number in the opt-out list. If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an error is returned.
   */
  putOptedOutNumber(params: PinpointSMSVoiceV2.Types.PutOptedOutNumberRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.PutOptedOutNumberResult) => void): Request<PinpointSMSVoiceV2.Types.PutOptedOutNumberResult, AWSError>;
  /**
   * Creates an opted out destination phone number in the opt-out list. If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an error is returned.
   */
  putOptedOutNumber(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.PutOptedOutNumberResult) => void): Request<PinpointSMSVoiceV2.Types.PutOptedOutNumberResult, AWSError>;
  /**
   * Creates or updates a field value for a registration.
   */
  putRegistrationFieldValue(params: PinpointSMSVoiceV2.Types.PutRegistrationFieldValueRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.PutRegistrationFieldValueResult) => void): Request<PinpointSMSVoiceV2.Types.PutRegistrationFieldValueResult, AWSError>;
  /**
   * Creates or updates a field value for a registration.
   */
  putRegistrationFieldValue(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.PutRegistrationFieldValueResult) => void): Request<PinpointSMSVoiceV2.Types.PutRegistrationFieldValueResult, AWSError>;
  /**
   * Releases an existing origination phone number in your account. Once released, a phone number is no longer available for sending messages. If the origination phone number has deletion protection enabled or is associated with a pool, an error is returned.
   */
  releasePhoneNumber(params: PinpointSMSVoiceV2.Types.ReleasePhoneNumberRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.ReleasePhoneNumberResult) => void): Request<PinpointSMSVoiceV2.Types.ReleasePhoneNumberResult, AWSError>;
  /**
   * Releases an existing origination phone number in your account. Once released, a phone number is no longer available for sending messages. If the origination phone number has deletion protection enabled or is associated with a pool, an error is returned.
   */
  releasePhoneNumber(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.ReleasePhoneNumberResult) => void): Request<PinpointSMSVoiceV2.Types.ReleasePhoneNumberResult, AWSError>;
  /**
   * Releases an existing sender ID in your account.
   */
  releaseSenderId(params: PinpointSMSVoiceV2.Types.ReleaseSenderIdRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.ReleaseSenderIdResult) => void): Request<PinpointSMSVoiceV2.Types.ReleaseSenderIdResult, AWSError>;
  /**
   * Releases an existing sender ID in your account.
   */
  releaseSenderId(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.ReleaseSenderIdResult) => void): Request<PinpointSMSVoiceV2.Types.ReleaseSenderIdResult, AWSError>;
  /**
   * Request an origination phone number for use in your account. For more information on phone number request see  Requesting a number  in the Amazon Pinpoint User Guide.
   */
  requestPhoneNumber(params: PinpointSMSVoiceV2.Types.RequestPhoneNumberRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.RequestPhoneNumberResult) => void): Request<PinpointSMSVoiceV2.Types.RequestPhoneNumberResult, AWSError>;
  /**
   * Request an origination phone number for use in your account. For more information on phone number request see  Requesting a number  in the Amazon Pinpoint User Guide.
   */
  requestPhoneNumber(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.RequestPhoneNumberResult) => void): Request<PinpointSMSVoiceV2.Types.RequestPhoneNumberResult, AWSError>;
  /**
   * Request a new sender ID that doesn't require registration. 
   */
  requestSenderId(params: PinpointSMSVoiceV2.Types.RequestSenderIdRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.RequestSenderIdResult) => void): Request<PinpointSMSVoiceV2.Types.RequestSenderIdResult, AWSError>;
  /**
   * Request a new sender ID that doesn't require registration. 
   */
  requestSenderId(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.RequestSenderIdResult) => void): Request<PinpointSMSVoiceV2.Types.RequestSenderIdResult, AWSError>;
  /**
   * Before you can send test messages to a verified destination phone number you need to opt-in the verified destination phone number. Creates a new text message with a verification code and send it to a verified destination phone number. Once you have the verification code use VerifyDestinationNumber to opt-in the verified destination phone number to receive messages.
   */
  sendDestinationNumberVerificationCode(params: PinpointSMSVoiceV2.Types.SendDestinationNumberVerificationCodeRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SendDestinationNumberVerificationCodeResult) => void): Request<PinpointSMSVoiceV2.Types.SendDestinationNumberVerificationCodeResult, AWSError>;
  /**
   * Before you can send test messages to a verified destination phone number you need to opt-in the verified destination phone number. Creates a new text message with a verification code and send it to a verified destination phone number. Once you have the verification code use VerifyDestinationNumber to opt-in the verified destination phone number to receive messages.
   */
  sendDestinationNumberVerificationCode(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SendDestinationNumberVerificationCodeResult) => void): Request<PinpointSMSVoiceV2.Types.SendDestinationNumberVerificationCodeResult, AWSError>;
  /**
   * Creates a new text message and sends it to a recipient's phone number. SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit depends on the destination country of your messages, as well as the type of phone number (origination number) that you use to send the message. For more information, see Message Parts per Second (MPS) limits in the Amazon Pinpoint User Guide.
   */
  sendTextMessage(params: PinpointSMSVoiceV2.Types.SendTextMessageRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SendTextMessageResult) => void): Request<PinpointSMSVoiceV2.Types.SendTextMessageResult, AWSError>;
  /**
   * Creates a new text message and sends it to a recipient's phone number. SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit depends on the destination country of your messages, as well as the type of phone number (origination number) that you use to send the message. For more information, see Message Parts per Second (MPS) limits in the Amazon Pinpoint User Guide.
   */
  sendTextMessage(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SendTextMessageResult) => void): Request<PinpointSMSVoiceV2.Types.SendTextMessageResult, AWSError>;
  /**
   * Allows you to send a request that sends a voice message through Amazon Pinpoint. This operation uses Amazon Polly to convert a text script into a voice message.
   */
  sendVoiceMessage(params: PinpointSMSVoiceV2.Types.SendVoiceMessageRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SendVoiceMessageResult) => void): Request<PinpointSMSVoiceV2.Types.SendVoiceMessageResult, AWSError>;
  /**
   * Allows you to send a request that sends a voice message through Amazon Pinpoint. This operation uses Amazon Polly to convert a text script into a voice message.
   */
  sendVoiceMessage(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SendVoiceMessageResult) => void): Request<PinpointSMSVoiceV2.Types.SendVoiceMessageResult, AWSError>;
  /**
   * Sets the default message type on a configuration set. Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose Transactional. If you plan to send messages that contain marketing material or other promotional content, choose Promotional. This setting applies to your entire Amazon Web Services account.
   */
  setDefaultMessageType(params: PinpointSMSVoiceV2.Types.SetDefaultMessageTypeRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SetDefaultMessageTypeResult) => void): Request<PinpointSMSVoiceV2.Types.SetDefaultMessageTypeResult, AWSError>;
  /**
   * Sets the default message type on a configuration set. Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose Transactional. If you plan to send messages that contain marketing material or other promotional content, choose Promotional. This setting applies to your entire Amazon Web Services account.
   */
  setDefaultMessageType(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SetDefaultMessageTypeResult) => void): Request<PinpointSMSVoiceV2.Types.SetDefaultMessageTypeResult, AWSError>;
  /**
   * Sets default sender ID on a configuration set. When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.
   */
  setDefaultSenderId(params: PinpointSMSVoiceV2.Types.SetDefaultSenderIdRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SetDefaultSenderIdResult) => void): Request<PinpointSMSVoiceV2.Types.SetDefaultSenderIdResult, AWSError>;
  /**
   * Sets default sender ID on a configuration set. When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.
   */
  setDefaultSenderId(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SetDefaultSenderIdResult) => void): Request<PinpointSMSVoiceV2.Types.SetDefaultSenderIdResult, AWSError>;
  /**
   * Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the MaxLimit, which is set by Amazon Web Services. 
   */
  setTextMessageSpendLimitOverride(params: PinpointSMSVoiceV2.Types.SetTextMessageSpendLimitOverrideRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SetTextMessageSpendLimitOverrideResult) => void): Request<PinpointSMSVoiceV2.Types.SetTextMessageSpendLimitOverrideResult, AWSError>;
  /**
   * Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the MaxLimit, which is set by Amazon Web Services. 
   */
  setTextMessageSpendLimitOverride(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SetTextMessageSpendLimitOverrideResult) => void): Request<PinpointSMSVoiceV2.Types.SetTextMessageSpendLimitOverrideResult, AWSError>;
  /**
   * Sets an account level monthly spend limit override for sending voice messages. The requested spend limit must be less than or equal to the MaxLimit, which is set by Amazon Web Services. 
   */
  setVoiceMessageSpendLimitOverride(params: PinpointSMSVoiceV2.Types.SetVoiceMessageSpendLimitOverrideRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SetVoiceMessageSpendLimitOverrideResult) => void): Request<PinpointSMSVoiceV2.Types.SetVoiceMessageSpendLimitOverrideResult, AWSError>;
  /**
   * Sets an account level monthly spend limit override for sending voice messages. The requested spend limit must be less than or equal to the MaxLimit, which is set by Amazon Web Services. 
   */
  setVoiceMessageSpendLimitOverride(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SetVoiceMessageSpendLimitOverrideResult) => void): Request<PinpointSMSVoiceV2.Types.SetVoiceMessageSpendLimitOverrideResult, AWSError>;
  /**
   * Submit the specified registration for review and approval.
   */
  submitRegistrationVersion(params: PinpointSMSVoiceV2.Types.SubmitRegistrationVersionRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SubmitRegistrationVersionResult) => void): Request<PinpointSMSVoiceV2.Types.SubmitRegistrationVersionResult, AWSError>;
  /**
   * Submit the specified registration for review and approval.
   */
  submitRegistrationVersion(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.SubmitRegistrationVersionResult) => void): Request<PinpointSMSVoiceV2.Types.SubmitRegistrationVersionResult, AWSError>;
  /**
   * Adds or overwrites only the specified tags for the specified Amazon Pinpoint SMS Voice, version 2 resource. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see  Tagging Amazon Pinpoint resources in the Amazon Pinpoint Developer Guide.
   */
  tagResource(params: PinpointSMSVoiceV2.Types.TagResourceRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.TagResourceResult) => void): Request<PinpointSMSVoiceV2.Types.TagResourceResult, AWSError>;
  /**
   * Adds or overwrites only the specified tags for the specified Amazon Pinpoint SMS Voice, version 2 resource. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see  Tagging Amazon Pinpoint resources in the Amazon Pinpoint Developer Guide.
   */
  tagResource(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.TagResourceResult) => void): Request<PinpointSMSVoiceV2.Types.TagResourceResult, AWSError>;
  /**
   * Removes the association of the specified tags from an Amazon Pinpoint SMS Voice V2 resource. For more information on tags see  Tagging Amazon Pinpoint resources in the Amazon Pinpoint Developer Guide. 
   */
  untagResource(params: PinpointSMSVoiceV2.Types.UntagResourceRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.UntagResourceResult) => void): Request<PinpointSMSVoiceV2.Types.UntagResourceResult, AWSError>;
  /**
   * Removes the association of the specified tags from an Amazon Pinpoint SMS Voice V2 resource. For more information on tags see  Tagging Amazon Pinpoint resources in the Amazon Pinpoint Developer Guide. 
   */
  untagResource(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.UntagResourceResult) => void): Request<PinpointSMSVoiceV2.Types.UntagResourceResult, AWSError>;
  /**
   * Updates an existing event destination in a configuration set. You can update the IAM role ARN for CloudWatch Logs and Kinesis Data Firehose. You can also enable or disable the event destination. You may want to update an event destination to change its matching event types or updating the destination resource ARN. You can't change an event destination's type between CloudWatch Logs, Kinesis Data Firehose, and Amazon SNS.
   */
  updateEventDestination(params: PinpointSMSVoiceV2.Types.UpdateEventDestinationRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.UpdateEventDestinationResult) => void): Request<PinpointSMSVoiceV2.Types.UpdateEventDestinationResult, AWSError>;
  /**
   * Updates an existing event destination in a configuration set. You can update the IAM role ARN for CloudWatch Logs and Kinesis Data Firehose. You can also enable or disable the event destination. You may want to update an event destination to change its matching event types or updating the destination resource ARN. You can't change an event destination's type between CloudWatch Logs, Kinesis Data Firehose, and Amazon SNS.
   */
  updateEventDestination(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.UpdateEventDestinationResult) => void): Request<PinpointSMSVoiceV2.Types.UpdateEventDestinationResult, AWSError>;
  /**
   * Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection. If the origination phone number is associated with a pool, an error is returned.
   */
  updatePhoneNumber(params: PinpointSMSVoiceV2.Types.UpdatePhoneNumberRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.UpdatePhoneNumberResult) => void): Request<PinpointSMSVoiceV2.Types.UpdatePhoneNumberResult, AWSError>;
  /**
   * Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection. If the origination phone number is associated with a pool, an error is returned.
   */
  updatePhoneNumber(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.UpdatePhoneNumberResult) => void): Request<PinpointSMSVoiceV2.Types.UpdatePhoneNumberResult, AWSError>;
  /**
   * Updates the configuration of an existing pool. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, enable or disable deletion protection, and enable or disable shared routes.
   */
  updatePool(params: PinpointSMSVoiceV2.Types.UpdatePoolRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.UpdatePoolResult) => void): Request<PinpointSMSVoiceV2.Types.UpdatePoolResult, AWSError>;
  /**
   * Updates the configuration of an existing pool. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, enable or disable deletion protection, and enable or disable shared routes.
   */
  updatePool(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.UpdatePoolResult) => void): Request<PinpointSMSVoiceV2.Types.UpdatePoolResult, AWSError>;
  /**
   * Updates the configuration of an existing sender ID.
   */
  updateSenderId(params: PinpointSMSVoiceV2.Types.UpdateSenderIdRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.UpdateSenderIdResult) => void): Request<PinpointSMSVoiceV2.Types.UpdateSenderIdResult, AWSError>;
  /**
   * Updates the configuration of an existing sender ID.
   */
  updateSenderId(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.UpdateSenderIdResult) => void): Request<PinpointSMSVoiceV2.Types.UpdateSenderIdResult, AWSError>;
  /**
   * Use the verification code that was received by the verified destination phone number to opt-in the verified destination phone number to receive more messages.
   */
  verifyDestinationNumber(params: PinpointSMSVoiceV2.Types.VerifyDestinationNumberRequest, callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.VerifyDestinationNumberResult) => void): Request<PinpointSMSVoiceV2.Types.VerifyDestinationNumberResult, AWSError>;
  /**
   * Use the verification code that was received by the verified destination phone number to opt-in the verified destination phone number to receive more messages.
   */
  verifyDestinationNumber(callback?: (err: AWSError, data: PinpointSMSVoiceV2.Types.VerifyDestinationNumberResult) => void): Request<PinpointSMSVoiceV2.Types.VerifyDestinationNumberResult, AWSError>;
}
declare namespace PinpointSMSVoiceV2 {
  export interface AccountAttribute {
    /**
     * The name of the account attribute.
     */
    Name: AccountAttributeName;
    /**
     * The value associated with the account attribute name.
     */
    Value: String;
  }
  export type AccountAttributeList = AccountAttribute[];
  export type AccountAttributeName = "ACCOUNT_TIER"|string;
  export interface AccountLimit {
    /**
     * The name of the attribute to apply the account limit to.
     */
    Name: AccountLimitName;
    /**
     * The current amount that has been spent, in US dollars.
     */
    Used: PrimitiveLong;
    /**
     * The Amazon Web Services set limit for that resource type, in US dollars.
     */
    Max: PrimitiveLong;
  }
  export type AccountLimitList = AccountLimit[];
  export type AccountLimitName = "PHONE_NUMBERS"|"POOLS"|"CONFIGURATION_SETS"|"OPT_OUT_LISTS"|"SENDER_IDS"|"REGISTRATIONS"|"REGISTRATION_ATTACHMENTS"|"VERIFIED_DESTINATION_NUMBERS"|string;
  export type AmazonResourceName = string;
  export interface AssociateOriginationIdentityRequest {
    /**
     * The pool to update with the new Identity. This value can be either the PoolId or PoolArn, and you can find these values using DescribePools.
     */
    PoolId: PoolIdOrArn;
    /**
     * The origination identity to use, such as PhoneNumberId, PhoneNumberArn, SenderId, or SenderIdArn. You can use DescribePhoneNumbers to find the values for PhoneNumberId and PhoneNumberArn, while DescribeSenderIds can be used to get the values for SenderId and SenderIdArn.
     */
    OriginationIdentity: PhoneOrSenderIdOrArn;
    /**
     * The new two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the origination identity.
     */
    IsoCountryCode: IsoCountryCode;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
     */
    ClientToken?: ClientToken;
  }
  export interface AssociateOriginationIdentityResult {
    /**
     * The Amazon Resource Name (ARN) of the pool that is now associated with the origination identity.
     */
    PoolArn?: String;
    /**
     * The PoolId of the pool that is now associated with the origination identity.
     */
    PoolId?: String;
    /**
     * The PhoneNumberArn or SenderIdArn of the origination identity.
     */
    OriginationIdentityArn?: String;
    /**
     * The PhoneNumberId or SenderId of the origination identity.
     */
    OriginationIdentity?: String;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. 
     */
    IsoCountryCode?: IsoCountryCode;
  }
  export type AttachmentBody = Buffer|Uint8Array|Blob|string;
  export type AttachmentStatus = "UPLOAD_IN_PROGRESS"|"UPLOAD_COMPLETE"|"UPLOAD_FAILED"|"DELETED"|string;
  export type AttachmentUploadErrorReason = "INTERNAL_ERROR"|string;
  export type AttachmentUrl = string;
  export type Boolean = boolean;
  export type ClientToken = string;
  export interface CloudWatchLogsDestination {
    /**
     * The Amazon Resource Name (ARN) of an Amazon Identity and Access Management (IAM) role that is able to write event data to an Amazon CloudWatch destination.
     */
    IamRoleArn: IamRoleArn;
    /**
     * The name of the Amazon CloudWatch log group that you want to record events in. 
     */
    LogGroupArn: LogGroupArn;
  }
  export interface ConfigurationSetFilter {
    /**
     * The name of the attribute to filter on.
     */
    Name: ConfigurationSetFilterName;
    /**
     * An array values to filter for.
     */
    Values: FilterValueList;
  }
  export type ConfigurationSetFilterList = ConfigurationSetFilter[];
  export type ConfigurationSetFilterName = "event-destination-name"|"matching-event-types"|"default-message-type"|"default-sender-id"|string;
  export interface ConfigurationSetInformation {
    /**
     * The Resource Name (ARN) of the ConfigurationSet.
     */
    ConfigurationSetArn: String;
    /**
     * The name of the ConfigurationSet.
     */
    ConfigurationSetName: ConfigurationSetName;
    /**
     * An array of EventDestination objects that describe any events to log and where to log them.
     */
    EventDestinations: EventDestinationList;
    /**
     * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    DefaultMessageType?: MessageType;
    /**
     * The default sender ID used by the ConfigurationSet.
     */
    DefaultSenderId?: SenderId;
    /**
     * The time when the ConfigurationSet was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export type ConfigurationSetInformationList = ConfigurationSetInformation[];
  export type ConfigurationSetName = string;
  export type ConfigurationSetNameList = ConfigurationSetNameOrArn[];
  export type ConfigurationSetNameOrArn = string;
  export type ContextKey = string;
  export type ContextMap = {[key: string]: ContextValue};
  export type ContextValue = string;
  export interface CreateConfigurationSetRequest {
    /**
     * The name to use for the new configuration set.
     */
    ConfigurationSetName: ConfigurationSetName;
    /**
     * An array of key and value pair tags that's associated with the new configuration set. 
     */
    Tags?: TagList;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
     */
    ClientToken?: ClientToken;
  }
  export interface CreateConfigurationSetResult {
    /**
     * The Amazon Resource Name (ARN) of the newly created configuration set.
     */
    ConfigurationSetArn?: String;
    /**
     * The name of the new configuration set.
     */
    ConfigurationSetName?: ConfigurationSetName;
    /**
     * An array of key and value pair tags that's associated with the configuration set.
     */
    Tags?: TagList;
    /**
     * The time when the configuration set was created, in UNIX epoch time format.
     */
    CreatedTimestamp?: Timestamp;
  }
  export interface CreateEventDestinationRequest {
    /**
     * Either the name of the configuration set or the configuration set ARN to apply event logging to. The ConfigurateSetName and ConfigurationSetArn can be found using the DescribeConfigurationSets action.
     */
    ConfigurationSetName: ConfigurationSetNameOrArn;
    /**
     * The name that identifies the event destination.
     */
    EventDestinationName: EventDestinationName;
    /**
     * An array of event types that determine which events to log. If "ALL" is used, then Amazon Pinpoint logs every event type.  The TEXT_SENT event type is not supported. 
     */
    MatchingEventTypes: EventTypeList;
    /**
     * An object that contains information about an event destination for logging to Amazon CloudWatch logs.
     */
    CloudWatchLogsDestination?: CloudWatchLogsDestination;
    /**
     * An object that contains information about an event destination for logging to Amazon Kinesis Data Firehose.
     */
    KinesisFirehoseDestination?: KinesisFirehoseDestination;
    /**
     * An object that contains information about an event destination for logging to Amazon SNS.
     */
    SnsDestination?: SnsDestination;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
     */
    ClientToken?: ClientToken;
  }
  export interface CreateEventDestinationResult {
    /**
     * The ARN of the configuration set.
     */
    ConfigurationSetArn?: String;
    /**
     * The name of the configuration set.
     */
    ConfigurationSetName?: ConfigurationSetName;
    /**
     * The details of the destination where events are logged.
     */
    EventDestination?: EventDestination;
  }
  export interface CreateOptOutListRequest {
    /**
     * The name of the new OptOutList.
     */
    OptOutListName: OptOutListName;
    /**
     * An array of tags (key and value pairs) to associate with the new OptOutList.
     */
    Tags?: TagList;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
     */
    ClientToken?: ClientToken;
  }
  export interface CreateOptOutListResult {
    /**
     * The Amazon Resource Name (ARN) for the OptOutList.
     */
    OptOutListArn?: String;
    /**
     * The name of the new OptOutList.
     */
    OptOutListName?: OptOutListName;
    /**
     * An array of tags (key and value pairs) associated with the new OptOutList.
     */
    Tags?: TagList;
    /**
     * The time when the pool was created, in UNIX epoch time format.
     */
    CreatedTimestamp?: Timestamp;
  }
  export interface CreatePoolRequest {
    /**
     * The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn. You can use DescribePhoneNumbers to find the values for PhoneNumberId and PhoneNumberArn while DescribeSenderIds can be used to get the values for SenderId and SenderIdArn.
     */
    OriginationIdentity: PhoneOrSenderIdOrArn;
    /**
     * The new two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the new pool.
     */
    IsoCountryCode: IsoCountryCode;
    /**
     * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    MessageType: MessageType;
    /**
     * By default this is set to false. When set to true the pool can't be deleted. You can change this value using the UpdatePool action.
     */
    DeletionProtectionEnabled?: Boolean;
    /**
     * An array of tags (key and value pairs) associated with the pool.
     */
    Tags?: TagList;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
     */
    ClientToken?: ClientToken;
  }
  export interface CreatePoolResult {
    /**
     * The Amazon Resource Name (ARN) for the pool.
     */
    PoolArn?: String;
    /**
     * The unique identifier for the pool.
     */
    PoolId?: String;
    /**
     * The current status of the pool.   CREATING: The pool is currently being created and isn't yet available for use.   ACTIVE: The pool is active and available for use.   DELETING: The pool is being deleted.  
     */
    Status?: PoolStatus;
    /**
     * The type of message for the pool to use.
     */
    MessageType?: MessageType;
    /**
     * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
     */
    TwoWayEnabled?: PrimitiveBoolean;
    /**
     * The Amazon Resource Name (ARN) of the two way channel.
     */
    TwoWayChannelArn?: TwoWayChannelArn;
    /**
     * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
     */
    TwoWayChannelRole?: IamRoleArn;
    /**
     * By default this is set to false. When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
     */
    SelfManagedOptOutsEnabled?: PrimitiveBoolean;
    /**
     * The name of the OptOutList associated with the pool.
     */
    OptOutListName?: OptOutListName;
    /**
     * Indicates whether shared routes are enabled for the pool.
     */
    SharedRoutesEnabled?: PrimitiveBoolean;
    /**
     * When set to true deletion protection is enabled. By default this is set to false. 
     */
    DeletionProtectionEnabled?: PrimitiveBoolean;
    /**
     * An array of tags (key and value pairs) associated with the pool.
     */
    Tags?: TagList;
    /**
     * The time when the pool was created, in UNIX epoch time format.
     */
    CreatedTimestamp?: Timestamp;
  }
  export interface CreateRegistrationAssociationRequest {
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: RegistrationIdOrArn;
    /**
     * The unique identifier for the origination identity. For example this could be a PhoneNumberId or SenderId.
     */
    ResourceId: ResourceIdOrArn;
  }
  export interface CreateRegistrationAssociationResult {
    /**
     * The Amazon Resource Name (ARN) for the registration.
     */
    RegistrationArn: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: String;
    /**
     * The type of registration form. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
     */
    RegistrationType: RegistrationType;
    /**
     * The Amazon Resource Name (ARN) of the origination identity that is associated with the registration. 
     */
    ResourceArn: String;
    /**
     * The unique identifier for the origination identity. For example this could be a PhoneNumberId or SenderId.
     */
    ResourceId: String;
    /**
     * The registration type or origination identity type.
     */
    ResourceType: String;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
     */
    IsoCountryCode?: IsoCountryCode;
    /**
     * The phone number associated with the registration in E.164 format.
     */
    PhoneNumber?: PhoneNumber;
  }
  export interface CreateRegistrationAttachmentRequest {
    /**
     * The registration file to upload. The maximum file size is 1MiB and valid file extensions are PDF, JPEG and PNG.
     */
    AttachmentBody?: AttachmentBody;
    /**
     * A URL to the required registration file. For example, you can provide the S3 object URL.
     */
    AttachmentUrl?: AttachmentUrl;
    /**
     * An array of tags (key and value pairs) to associate with the registration attachment.
     */
    Tags?: TagList;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
     */
    ClientToken?: ClientToken;
  }
  export interface CreateRegistrationAttachmentResult {
    /**
     * The Amazon Resource Name (ARN) for the registration attachment.
     */
    RegistrationAttachmentArn: String;
    /**
     * The unique identifier for the registration attachment.
     */
    RegistrationAttachmentId: String;
    /**
     * The status of the registration attachment.     UPLOAD_IN_PROGRESS The attachment is being uploaded.    UPLOAD_COMPLETE The attachment has been uploaded.    UPLOAD_FAILED The attachment failed to uploaded.    DELETED The attachment has been deleted..  
     */
    AttachmentStatus: AttachmentStatus;
    /**
     * An array of tags (key and value pairs) to associate with the registration attachment.
     */
    Tags?: TagList;
    /**
     * The time when the registration attachment was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export interface CreateRegistrationRequest {
    /**
     * The type of registration form to create. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
     */
    RegistrationType: RegistrationType;
    /**
     * An array of tags (key and value pairs) to associate with the registration.
     */
    Tags?: TagList;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
     */
    ClientToken?: ClientToken;
  }
  export interface CreateRegistrationResult {
    /**
     * The Amazon Resource Name (ARN) for the registration.
     */
    RegistrationArn: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: String;
    /**
     * The type of registration form to create. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
     */
    RegistrationType: RegistrationType;
    /**
     * The status of the registration.    CREATED: Your registration is created but not submitted.    SUBMITTED: Your registration has been submitted and is awaiting review.    REVIEWING: Your registration has been accepted and is being reviewed.    PROVISIONING: Your registration has been approved and your origination identity is being created.    COMPLETE: Your registration has been approved and and your origination identity has been created.    REQUIRES_UPDATES: You must fix your registration and resubmit it.    CLOSED: The phone number or sender ID has been deleted and you must also delete the registration for the number.    DELETED: The registration has been deleted.  
     */
    RegistrationStatus: RegistrationStatus;
    /**
     * The current version number of the registration.
     */
    CurrentVersionNumber: RegistrationVersionNumber;
    /**
     * Metadata about a given registration which is specific to that registration type.
     */
    AdditionalAttributes?: StringMap;
    /**
     * An array of tags (key and value pairs) to associate with the registration.
     */
    Tags?: TagList;
    /**
     * The time when the registration was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export interface CreateRegistrationVersionRequest {
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: RegistrationIdOrArn;
  }
  export interface CreateRegistrationVersionResult {
    /**
     * The Amazon Resource Name (ARN) for the registration.
     */
    RegistrationArn: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: String;
    /**
     * The new version number of the registration.
     */
    VersionNumber: RegistrationVersionNumber;
    /**
     * The status of the registration.    DRAFT: The initial status of a registration version after it’s created.    SUBMITTED: Your registration has been submitted.    REVIEWING: Your registration has been accepted and is being reviewed.    APPROVED: Your registration has been approved.    DISCARDED: You've abandon this version of their registration to start over with a new version.     DENIED: You must fix your registration and resubmit it.    REVOKED: Your previously approved registration has been revoked.    ARCHIVED: Your previously approved registration version moves into this status when a more recently submitted version is approved.  
     */
    RegistrationVersionStatus: RegistrationVersionStatus;
    /**
     * A RegistrationVersionStatusHistory object that contains timestamps for the registration.
     */
    RegistrationVersionStatusHistory: RegistrationVersionStatusHistory;
  }
  export interface CreateVerifiedDestinationNumberRequest {
    /**
     * The verified destination phone number, in E.164 format.
     */
    DestinationPhoneNumber: PhoneNumber;
    /**
     * An array of tags (key and value pairs) to associate with the destination number.
     */
    Tags?: TagList;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
     */
    ClientToken?: ClientToken;
  }
  export interface CreateVerifiedDestinationNumberResult {
    /**
     * The Amazon Resource Name (ARN) for the verified destination phone number.
     */
    VerifiedDestinationNumberArn: String;
    /**
     * The unique identifier for the verified destination phone number.
     */
    VerifiedDestinationNumberId: String;
    /**
     * The verified destination phone number, in E.164 format.
     */
    DestinationPhoneNumber: PhoneNumber;
    /**
     * The status of the verified destination phone number.    PENDING: The phone number hasn't been verified yet.    VERIFIED: The phone number is verified and can receive messages.  
     */
    Status: VerificationStatus;
    /**
     * An array of tags (key and value pairs) to associate with the destination number.
     */
    Tags?: TagList;
    /**
     * The time when the verified phone number was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export interface DeleteConfigurationSetRequest {
    /**
     * The name of the configuration set or the configuration set ARN that you want to delete. The ConfigurationSetName and ConfigurationSetArn can be found using the DescribeConfigurationSets action.
     */
    ConfigurationSetName: ConfigurationSetNameOrArn;
  }
  export interface DeleteConfigurationSetResult {
    /**
     * The Amazon Resource Name (ARN) of the deleted configuration set.
     */
    ConfigurationSetArn?: String;
    /**
     * The name of the deleted configuration set.
     */
    ConfigurationSetName?: ConfigurationSetName;
    /**
     * An array of any EventDestination objects that were associated with the deleted configuration set.
     */
    EventDestinations?: EventDestinationList;
    /**
     * The default message type of the configuration set that was deleted.
     */
    DefaultMessageType?: MessageType;
    /**
     * The default Sender ID of the configuration set that was deleted.
     */
    DefaultSenderId?: SenderId;
    /**
     * The time that the deleted configuration set was created in UNIX epoch time format.
     */
    CreatedTimestamp?: Timestamp;
  }
  export interface DeleteDefaultMessageTypeRequest {
    /**
     * The name of the configuration set or the configuration set Amazon Resource Name (ARN) to delete the default message type from. The ConfigurationSetName and ConfigurationSetArn can be found using the DescribeConfigurationSets action.
     */
    ConfigurationSetName: ConfigurationSetNameOrArn;
  }
  export interface DeleteDefaultMessageTypeResult {
    /**
     * The Amazon Resource Name (ARN) of the configuration set.
     */
    ConfigurationSetArn?: String;
    /**
     * The name of the configuration set.
     */
    ConfigurationSetName?: ConfigurationSetName;
    /**
     * The current message type for the configuration set.
     */
    MessageType?: MessageType;
  }
  export interface DeleteDefaultSenderIdRequest {
    /**
     * The name of the configuration set or the configuration set Amazon Resource Name (ARN) to delete the default sender ID from. The ConfigurationSetName and ConfigurationSetArn can be found using the DescribeConfigurationSets action.
     */
    ConfigurationSetName: ConfigurationSetNameOrArn;
  }
  export interface DeleteDefaultSenderIdResult {
    /**
     * The Amazon Resource Name (ARN) of the configuration set.
     */
    ConfigurationSetArn?: String;
    /**
     * The name of the configuration set.
     */
    ConfigurationSetName?: ConfigurationSetName;
    /**
     * The current sender ID for the configuration set.
     */
    SenderId?: SenderId;
  }
  export interface DeleteEventDestinationRequest {
    /**
     * The name of the configuration set or the configuration set's Amazon Resource Name (ARN) to remove the event destination from. The ConfigurateSetName and ConfigurationSetArn can be found using the DescribeConfigurationSets action.
     */
    ConfigurationSetName: ConfigurationSetNameOrArn;
    /**
     * The name of the event destination to delete.
     */
    EventDestinationName: EventDestinationName;
  }
  export interface DeleteEventDestinationResult {
    /**
     * The Amazon Resource Name (ARN) of the configuration set.
     */
    ConfigurationSetArn?: String;
    /**
     * The name of the configuration set the event destination was deleted from.
     */
    ConfigurationSetName?: ConfigurationSetName;
    /**
     * The event destination object that was deleted.
     */
    EventDestination?: EventDestination;
  }
  export interface DeleteKeywordRequest {
    /**
     * The origination identity to use such as a PhoneNumberId, PhoneNumberArn, PoolId or PoolArn. You can use DescribePhoneNumbers to find the values for PhoneNumberId and PhoneNumberArn and DescribePools to find the values of PoolId and PoolArn.
     */
    OriginationIdentity: PhoneOrPoolIdOrArn;
    /**
     * The keyword to delete.
     */
    Keyword: Keyword;
  }
  export interface DeleteKeywordResult {
    /**
     * The PhoneNumberArn or PoolArn that the keyword was associated with.
     */
    OriginationIdentityArn?: String;
    /**
     * The PhoneNumberId or PoolId that the keyword was associated with.
     */
    OriginationIdentity?: String;
    /**
     * The keyword that was deleted.
     */
    Keyword?: Keyword;
    /**
     * The message that was associated with the deleted keyword.
     */
    KeywordMessage?: KeywordMessage;
    /**
     * The action that was associated with the deleted keyword.
     */
    KeywordAction?: KeywordAction;
  }
  export interface DeleteOptOutListRequest {
    /**
     * The OptOutListName or OptOutListArn of the OptOutList to delete. You can use DescribeOptOutLists to find the values for OptOutListName and OptOutListArn.
     */
    OptOutListName: OptOutListNameOrArn;
  }
  export interface DeleteOptOutListResult {
    /**
     * The Amazon Resource Name (ARN) of the OptOutList that was removed.
     */
    OptOutListArn?: String;
    /**
     * The name of the OptOutList that was removed.
     */
    OptOutListName?: OptOutListName;
    /**
     * The time when the OptOutList was created, in UNIX epoch time format.
     */
    CreatedTimestamp?: Timestamp;
  }
  export interface DeleteOptedOutNumberRequest {
    /**
     * The OptOutListName or OptOutListArn to remove the phone number from.
     */
    OptOutListName: OptOutListNameOrArn;
    /**
     * The phone number, in E.164 format, to remove from the OptOutList.
     */
    OptedOutNumber: PhoneNumber;
  }
  export interface DeleteOptedOutNumberResult {
    /**
     * The OptOutListArn that the phone number was removed from.
     */
    OptOutListArn?: String;
    /**
     * The OptOutListName that the phone number was removed from.
     */
    OptOutListName?: OptOutListName;
    /**
     * The phone number that was removed from the OptOutList.
     */
    OptedOutNumber?: PhoneNumber;
    /**
     * The time that the number was removed at, in UNIX epoch time format.
     */
    OptedOutTimestamp?: Timestamp;
    /**
     * This is true if it was the end user who requested their phone number be removed. 
     */
    EndUserOptedOut?: PrimitiveBoolean;
  }
  export interface DeletePoolRequest {
    /**
     * The PoolId or PoolArn of the pool to delete. You can use DescribePools to find the values for PoolId and PoolArn .
     */
    PoolId: PoolIdOrArn;
  }
  export interface DeletePoolResult {
    /**
     * The Amazon Resource Name (ARN) of the pool that was deleted.
     */
    PoolArn?: String;
    /**
     * The PoolId of the pool that was deleted.
     */
    PoolId?: String;
    /**
     * The current status of the pool.   CREATING: The pool is currently being created and isn't yet available for use.   ACTIVE: The pool is active and available for use.   DELETING: The pool is being deleted.  
     */
    Status?: PoolStatus;
    /**
     * The message type that was associated with the deleted pool.
     */
    MessageType?: MessageType;
    /**
     * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
     */
    TwoWayEnabled?: PrimitiveBoolean;
    /**
     * The Amazon Resource Name (ARN) of the TwoWayChannel.
     */
    TwoWayChannelArn?: TwoWayChannelArn;
    /**
     * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
     */
    TwoWayChannelRole?: IamRoleArn;
    /**
     * By default this is set to false. When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
     */
    SelfManagedOptOutsEnabled?: PrimitiveBoolean;
    /**
     * The name of the OptOutList that was associated with the deleted pool.
     */
    OptOutListName?: OptOutListName;
    /**
     * Indicates whether shared routes are enabled for the pool.
     */
    SharedRoutesEnabled?: PrimitiveBoolean;
    /**
     * The time when the pool was created, in UNIX epoch time format.
     */
    CreatedTimestamp?: Timestamp;
  }
  export interface DeleteRegistrationAttachmentRequest {
    /**
     * The unique identifier for the registration attachment.
     */
    RegistrationAttachmentId: RegistrationAttachmentIdOrArn;
  }
  export interface DeleteRegistrationAttachmentResult {
    /**
     * The Amazon Resource Name (ARN) for the registration attachment.
     */
    RegistrationAttachmentArn: String;
    /**
     * The unique identifier for the registration attachment.
     */
    RegistrationAttachmentId: String;
    /**
     * The status of the registration attachment.     UPLOAD_IN_PROGRESS The attachment is being uploaded.    UPLOAD_COMPLETE The attachment has been uploaded.    UPLOAD_FAILED The attachment failed to uploaded.    DELETED The attachment has been deleted..  
     */
    AttachmentStatus: AttachmentStatus;
    /**
     * The error message if the upload failed.
     */
    AttachmentUploadErrorReason?: AttachmentUploadErrorReason;
    /**
     * The time when the registration attachment was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export interface DeleteRegistrationFieldValueRequest {
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: RegistrationIdOrArn;
    /**
     * The path to the registration form field. You can use DescribeRegistrationFieldDefinitions for a list of FieldPaths.
     */
    FieldPath: FieldPath;
  }
  export interface DeleteRegistrationFieldValueResult {
    /**
     * The Amazon Resource Name (ARN) for the registration.
     */
    RegistrationArn: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: String;
    /**
     * The version number of the registration.
     */
    VersionNumber: RegistrationVersionNumber;
    /**
     * The path to the registration form field.
     */
    FieldPath: FieldPath;
    /**
     * An array of values for the form field.
     */
    SelectChoices?: SelectChoiceList;
    /**
     * The text data for a free form field.
     */
    TextValue?: TextValue;
    /**
     * The unique identifier for the registration attachment.
     */
    RegistrationAttachmentId?: String;
  }
  export interface DeleteRegistrationRequest {
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: RegistrationIdOrArn;
  }
  export interface DeleteRegistrationResult {
    /**
     * The Amazon Resource Name (ARN) for the registration.
     */
    RegistrationArn: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: String;
    /**
     * The type of registration form. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
     */
    RegistrationType: RegistrationType;
    /**
     * The status of the registration.    CREATED: Your registration is created but not submitted.    SUBMITTED: Your registration has been submitted and is awaiting review.    REVIEWING: Your registration has been accepted and is being reviewed.    PROVISIONING: Your registration has been approved and your origination identity is being created.    COMPLETE: Your registration has been approved and and your origination identity has been created.    REQUIRES_UPDATES: You must fix your registration and resubmit it.    CLOSED: The phone number or sender ID has been deleted and you must also delete the registration for the number.    DELETED: The registration has been deleted.  
     */
    RegistrationStatus: RegistrationStatus;
    /**
     * The current version number of the registration.
     */
    CurrentVersionNumber: RegistrationVersionNumber;
    /**
     * The version number of the registration that was approved.
     */
    ApprovedVersionNumber?: RegistrationVersionNumber;
    /**
     * The latest version number of the registration that was denied.
     */
    LatestDeniedVersionNumber?: RegistrationVersionNumber;
    /**
     * Metadata about a given registration which is specific to that registration type.
     */
    AdditionalAttributes?: StringMap;
    /**
     * The time when the registration was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export interface DeleteTextMessageSpendLimitOverrideRequest {
  }
  export interface DeleteTextMessageSpendLimitOverrideResult {
    /**
     * The current monthly limit, in US dollars.
     */
    MonthlyLimit?: MonthlyLimit;
  }
  export interface DeleteVerifiedDestinationNumberRequest {
    /**
     * The unique identifier for the verified destination phone number.
     */
    VerifiedDestinationNumberId: VerifiedDestinationNumberIdOrArn;
  }
  export interface DeleteVerifiedDestinationNumberResult {
    /**
     * The Amazon Resource Name (ARN) for the verified destination phone number.
     */
    VerifiedDestinationNumberArn: String;
    /**
     * The unique identifier for the verified destination phone number.
     */
    VerifiedDestinationNumberId: String;
    /**
     * The verified destination phone number, in E.164 format.
     */
    DestinationPhoneNumber: PhoneNumber;
    /**
     * The time when the destination phone number was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export interface DeleteVoiceMessageSpendLimitOverrideRequest {
  }
  export interface DeleteVoiceMessageSpendLimitOverrideResult {
    /**
     * The current monthly limit, in US dollars.
     */
    MonthlyLimit?: MonthlyLimit;
  }
  export type DeliveryStreamArn = string;
  export interface DescribeAccountAttributesRequest {
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeAccountAttributesResult {
    /**
     * An array of AccountAttributes objects.
     */
    AccountAttributes?: AccountAttributeList;
    /**
     * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAccountLimitsRequest {
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeAccountLimitsResult {
    /**
     * An array of AccountLimit objects that show the current spend limits.
     */
    AccountLimits?: AccountLimitList;
    /**
     * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeConfigurationSetsRequest {
    /**
     * An array of strings. Each element can be either a ConfigurationSetName or ConfigurationSetArn.
     */
    ConfigurationSetNames?: ConfigurationSetNameList;
    /**
     * An array of filters to apply to the results that are returned.
     */
    Filters?: ConfigurationSetFilterList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeConfigurationSetsResult {
    /**
     * An array of ConfigurationSets objects.
     */
    ConfigurationSets?: ConfigurationSetInformationList;
    /**
     * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeKeywordsRequest {
    /**
     * The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn. You can use DescribePhoneNumbers to find the values for PhoneNumberId and PhoneNumberArn while DescribeSenderIds can be used to get the values for SenderId and SenderIdArn.
     */
    OriginationIdentity: PhoneOrPoolIdOrArn;
    /**
     * An array of keywords to search for.
     */
    Keywords?: KeywordList;
    /**
     * An array of keyword filters to filter the results.
     */
    Filters?: KeywordFilterList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeKeywordsResult {
    /**
     * The PhoneNumberArn or PoolArn that is associated with the OriginationIdentity. 
     */
    OriginationIdentityArn?: String;
    /**
     * The PhoneNumberId or PoolId that is associated with the OriginationIdentity.
     */
    OriginationIdentity?: String;
    /**
     * An array of KeywordInformation objects that contain the results.
     */
    Keywords?: KeywordInformationList;
    /**
     * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeOptOutListsRequest {
    /**
     * The OptOutLists to show the details of. This is an array of strings that can be either the OptOutListName or OptOutListArn.
     */
    OptOutListNames?: OptOutListNameList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeOptOutListsResult {
    /**
     * An array of OptOutListInformation objects that contain the details for the requested OptOutLists.
     */
    OptOutLists?: OptOutListInformationList;
    /**
     * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeOptedOutNumbersRequest {
    /**
     * The OptOutListName or OptOutListArn of the OptOutList. You can use DescribeOptOutLists to find the values for OptOutListName and OptOutListArn.
     */
    OptOutListName: OptOutListNameOrArn;
    /**
     * An array of phone numbers to search for in the OptOutList.
     */
    OptedOutNumbers?: OptedOutNumberList;
    /**
     * An array of OptedOutFilter objects to filter the results on.
     */
    Filters?: OptedOutFilterList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeOptedOutNumbersResult {
    /**
     * The Amazon Resource Name (ARN) of the OptOutList.
     */
    OptOutListArn?: String;
    /**
     * The name of the OptOutList.
     */
    OptOutListName?: OptOutListName;
    /**
     * An array of OptedOutNumbersInformation objects that provide information about the requested OptedOutNumbers.
     */
    OptedOutNumbers?: OptedOutNumberInformationList;
    /**
     * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
     */
    NextToken?: NextToken;
  }
  export interface DescribePhoneNumbersRequest {
    /**
     * The unique identifier of phone numbers to find information about. This is an array of strings that can be either the PhoneNumberId or PhoneNumberArn.
     */
    PhoneNumberIds?: PhoneNumberIdList;
    /**
     * An array of PhoneNumberFilter objects to filter the results.
     */
    Filters?: PhoneNumberFilterList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribePhoneNumbersResult {
    /**
     * An array of PhoneNumberInformation objects that contain the details for the requested phone numbers.
     */
    PhoneNumbers?: PhoneNumberInformationList;
    /**
     * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
     */
    NextToken?: NextToken;
  }
  export interface DescribePoolsRequest {
    /**
     * The unique identifier of pools to find. This is an array of strings that can be either the PoolId or PoolArn.
     */
    PoolIds?: PoolIdList;
    /**
     * An array of PoolFilter objects to filter the results.
     */
    Filters?: PoolFilterList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribePoolsResult {
    /**
     * An array of PoolInformation objects that contain the details for the requested pools. 
     */
    Pools?: PoolInformationList;
    /**
     * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeRegistrationAttachmentsRequest {
    /**
     * The unique identifier of registration attachments to find. This is an array of RegistrationAttachmentId.
     */
    RegistrationAttachmentIds?: RegistrationAttachmentIdList;
    /**
     * An array of RegistrationAttachmentFilter objects to filter the results.
     */
    Filters?: RegistrationAttachmentFilterList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeRegistrationAttachmentsResult {
    /**
     * An array of RegistrationAttachments objects that contain the details for the requested registration attachments. 
     */
    RegistrationAttachments: RegistrationAttachmentsInformationList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
  }
  export interface DescribeRegistrationFieldDefinitionsRequest {
    /**
     * The type of registration form. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
     */
    RegistrationType: RegistrationType;
    /**
     * The path to the section of the registration.
     */
    SectionPath?: SectionPath;
    /**
     * An array of paths to the registration form field.
     */
    FieldPaths?: FieldPathList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeRegistrationFieldDefinitionsResult {
    /**
     * The type of registration form. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
     */
    RegistrationType: RegistrationType;
    /**
     * An array of RegistrationFieldDefinitions objects that contain the details for the requested fields. 
     */
    RegistrationFieldDefinitions: RegistrationFieldDefinitionList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
  }
  export interface DescribeRegistrationFieldValuesRequest {
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: RegistrationIdOrArn;
    /**
     * The version number of the registration.
     */
    VersionNumber?: RegistrationVersionNumber;
    /**
     * The path to the section of the registration.
     */
    SectionPath?: SectionPath;
    /**
     * An array of paths to the registration form field.
     */
    FieldPaths?: FieldPathList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeRegistrationFieldValuesResult {
    /**
     * The Amazon Resource Name (ARN) for the registration.
     */
    RegistrationArn: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: String;
    /**
     * The current version of the registration.
     */
    VersionNumber: RegistrationVersionNumber;
    /**
     * An array of RegistrationFieldValues objects that contain the values for the requested registration. 
     */
    RegistrationFieldValues: RegistrationFieldValueInformationList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
  }
  export interface DescribeRegistrationSectionDefinitionsRequest {
    /**
     * The type of registration form. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
     */
    RegistrationType: RegistrationType;
    /**
     * An array of paths for the registration form section.
     */
    SectionPaths?: SectionPathList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeRegistrationSectionDefinitionsResult {
    /**
     * The type of registration form. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
     */
    RegistrationType: RegistrationType;
    /**
     * An array of RegistrationSectionDefinition objects.
     */
    RegistrationSectionDefinitions: RegistrationSectionDefinitionList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
  }
  export interface DescribeRegistrationTypeDefinitionsRequest {
    /**
     * The type of registration form. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
     */
    RegistrationTypes?: RegistrationTypeList;
    /**
     * An array of RegistrationFilter objects to filter the results.
     */
    Filters?: RegistrationTypeFilterList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeRegistrationTypeDefinitionsResult {
    /**
     * The type of registration form. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
     */
    RegistrationTypeDefinitions: RegistrationTypeDefinitionList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
  }
  export interface DescribeRegistrationVersionsRequest {
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: RegistrationIdOrArn;
    /**
     * An array of registration version numbers.
     */
    VersionNumbers?: RegistrationVersionNumberList;
    /**
     * An array of RegistrationVersionFilter objects to filter the results.
     */
    Filters?: RegistrationVersionFilterList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeRegistrationVersionsResult {
    /**
     * The Amazon Resource Name (ARN) for the registration.
     */
    RegistrationArn: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: String;
    /**
     * An array of RegistrationVersions objects.
     */
    RegistrationVersions: RegistrationVersionInformationList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
  }
  export interface DescribeRegistrationsRequest {
    /**
     * An array of unique identifiers for each registration.
     */
    RegistrationIds?: RegistrationIdList;
    /**
     * An array of RegistrationFilter objects to filter the results.
     */
    Filters?: RegistrationFilterList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeRegistrationsResult {
    /**
     * An array of RegistrationInformation objects.
     */
    Registrations: RegistrationInformationList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
  }
  export interface DescribeSenderIdsRequest {
    /**
     * An array of SenderIdAndCountry objects to search for.
     */
    SenderIds?: SenderIdList;
    /**
     * An array of SenderIdFilter objects to filter the results.
     */
    Filters?: SenderIdFilterList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeSenderIdsResult {
    /**
     * An array of SernderIdInformation objects that contain the details for the requested SenderIds.
     */
    SenderIds?: SenderIdInformationList;
    /**
     * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeSpendLimitsRequest {
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeSpendLimitsResult {
    /**
     * An array of SpendLimit objects that contain the details for the requested spend limits.
     */
    SpendLimits?: SpendLimitList;
    /**
     * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeVerifiedDestinationNumbersRequest {
    /**
     * An array of VerifiedDestinationNumberid to retreive.
     */
    VerifiedDestinationNumberIds?: VerifiedDestinationNumberIdList;
    /**
     * An array of verified destination phone number, in E.164 format.
     */
    DestinationPhoneNumbers?: DestinationPhoneNumberList;
    /**
     * An array of VerifiedDestinationNumberFilter objects to filter the results.
     */
    Filters?: VerifiedDestinationNumberFilterList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface DescribeVerifiedDestinationNumbersResult {
    /**
     * An array of VerifiedDestinationNumberInformation objects
     */
    VerifiedDestinationNumbers: VerifiedDestinationNumberInformationList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
  }
  export type DestinationCountryParameterKey = "IN_TEMPLATE_ID"|"IN_ENTITY_ID"|string;
  export type DestinationCountryParameterValue = string;
  export type DestinationCountryParameters = {[key: string]: DestinationCountryParameterValue};
  export type DestinationPhoneNumberList = PhoneNumber[];
  export interface DisassociateOriginationIdentityRequest {
    /**
     * The unique identifier for the pool to disassociate with the origination identity. This value can be either the PoolId or PoolArn.
     */
    PoolId: PoolIdOrArn;
    /**
     * The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn. You can use DescribePhoneNumbers find the values for PhoneNumberId and PhoneNumberArn, or use DescribeSenderIds to get the values for SenderId and SenderIdArn.
     */
    OriginationIdentity: PhoneOrSenderIdOrArn;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. 
     */
    IsoCountryCode: IsoCountryCode;
    /**
     * Unique, case-sensitive identifier you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
     */
    ClientToken?: ClientToken;
  }
  export interface DisassociateOriginationIdentityResult {
    /**
     * The Amazon Resource Name (ARN) of the pool.
     */
    PoolArn?: String;
    /**
     * The PoolId of the pool no longer associated with the origination identity.
     */
    PoolId?: String;
    /**
     * The PhoneNumberArn or SenderIdArn of the origination identity.
     */
    OriginationIdentityArn?: String;
    /**
     * The PhoneNumberId or SenderId of the origination identity.
     */
    OriginationIdentity?: String;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
     */
    IsoCountryCode?: IsoCountryCode;
  }
  export interface DiscardRegistrationVersionRequest {
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: RegistrationIdOrArn;
  }
  export interface DiscardRegistrationVersionResult {
    /**
     * The Amazon Resource Name (ARN) for the registration.
     */
    RegistrationArn: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: String;
    /**
     * The version number of the registration.
     */
    VersionNumber: RegistrationVersionNumber;
    /**
     * The status of the registration version.    DRAFT: The initial status of a registration version after it’s created.    SUBMITTED: Your registration has been submitted.    REVIEWING: Your registration has been accepted and is being reviewed.    APPROVED: Your registration has been approved.    DISCARDED: You've abandon this version of their registration to start over with a new version.     DENIED: You must fix your registration and resubmit it.    REVOKED: Your previously approved registration has been revoked.    ARCHIVED: Your previously approved registration version moves into this status when a more recently submitted version is approved.  
     */
    RegistrationVersionStatus: RegistrationVersionStatus;
    /**
     * The RegistrationVersionStatusHistory object contains the time stamps for when the reservations status changes.
     */
    RegistrationVersionStatusHistory: RegistrationVersionStatusHistory;
  }
  export interface EventDestination {
    /**
     * The name of the EventDestination.
     */
    EventDestinationName: EventDestinationName;
    /**
     * When set to true events will be logged.
     */
    Enabled: Boolean;
    /**
     * An array of event types that determine which events to log.  The TEXT_SENT event type is not supported. 
     */
    MatchingEventTypes: EventTypeList;
    /**
     * An object that contains information about an event destination that sends logging events to Amazon CloudWatch logs.
     */
    CloudWatchLogsDestination?: CloudWatchLogsDestination;
    /**
     * An object that contains information about an event destination for logging to Amazon Kinesis Data Firehose.
     */
    KinesisFirehoseDestination?: KinesisFirehoseDestination;
    /**
     * An object that contains information about an event destination that sends logging events to Amazon SNS.
     */
    SnsDestination?: SnsDestination;
  }
  export type EventDestinationList = EventDestination[];
  export type EventDestinationName = string;
  export type EventType = "ALL"|"TEXT_ALL"|"TEXT_SENT"|"TEXT_PENDING"|"TEXT_QUEUED"|"TEXT_SUCCESSFUL"|"TEXT_DELIVERED"|"TEXT_INVALID"|"TEXT_INVALID_MESSAGE"|"TEXT_UNREACHABLE"|"TEXT_CARRIER_UNREACHABLE"|"TEXT_BLOCKED"|"TEXT_CARRIER_BLOCKED"|"TEXT_SPAM"|"TEXT_UNKNOWN"|"TEXT_TTL_EXPIRED"|"VOICE_ALL"|"VOICE_INITIATED"|"VOICE_RINGING"|"VOICE_ANSWERED"|"VOICE_COMPLETED"|"VOICE_BUSY"|"VOICE_NO_ANSWER"|"VOICE_FAILED"|"VOICE_TTL_EXPIRED"|string;
  export type EventTypeList = EventType[];
  export type FieldPath = string;
  export type FieldPathList = FieldPath[];
  export type FieldRequirement = "REQUIRED"|"CONDITIONAL"|"OPTIONAL"|string;
  export type FieldType = "SELECT"|"TEXT"|"ATTACHMENT"|string;
  export type FilterValue = string;
  export type FilterValueList = FilterValue[];
  export type IamRoleArn = string;
  export type Integer = number;
  export type IsoCountryCode = string;
  export type Keyword = string;
  export type KeywordAction = "AUTOMATIC_RESPONSE"|"OPT_OUT"|"OPT_IN"|string;
  export interface KeywordFilter {
    /**
     * The name of the attribute to filter on.
     */
    Name: KeywordFilterName;
    /**
     * An array values to filter for.
     */
    Values: FilterValueList;
  }
  export type KeywordFilterList = KeywordFilter[];
  export type KeywordFilterName = "keyword-action"|string;
  export interface KeywordInformation {
    /**
     * The keyword as a string.
     */
    Keyword: Keyword;
    /**
     * A custom message that can be used with the keyword.
     */
    KeywordMessage: KeywordMessage;
    /**
     * The action to perform for the keyword.
     */
    KeywordAction: KeywordAction;
  }
  export type KeywordInformationList = KeywordInformation[];
  export type KeywordList = Keyword[];
  export type KeywordMessage = string;
  export interface KinesisFirehoseDestination {
    /**
     * The ARN of an Amazon Identity and Access Management (IAM) role that is able to write event data to an Amazon Firehose destination.
     */
    IamRoleArn: IamRoleArn;
    /**
     * The Amazon Resource Name (ARN) of the delivery stream.
     */
    DeliveryStreamArn: DeliveryStreamArn;
  }
  export type LanguageCode = "DE_DE"|"EN_GB"|"EN_US"|"ES_419"|"ES_ES"|"FR_CA"|"FR_FR"|"IT_IT"|"JA_JP"|"KO_KR"|"PT_BR"|"ZH_CN"|"ZH_TW"|string;
  export interface ListPoolOriginationIdentitiesRequest {
    /**
     * The unique identifier for the pool. This value can be either the PoolId or PoolArn.
     */
    PoolId: PoolIdOrArn;
    /**
     * An array of PoolOriginationIdentitiesFilter objects to filter the results..
     */
    Filters?: PoolOriginationIdentitiesFilterList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListPoolOriginationIdentitiesResult {
    /**
     * The Amazon Resource Name (ARN) for the pool.
     */
    PoolArn?: String;
    /**
     * The unique PoolId of the pool.
     */
    PoolId?: String;
    /**
     * An array of any OriginationIdentityMetadata objects.
     */
    OriginationIdentities?: OriginationIdentityMetadataList;
    /**
     * The token to be used for the next set of paginated results. If this field is empty then there are no more results.
     */
    NextToken?: NextToken;
  }
  export interface ListRegistrationAssociationsRequest {
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: RegistrationIdOrArn;
    /**
     * An array of RegistrationAssociationFilter to apply to the results that are returned.
     */
    Filters?: RegistrationAssociationFilterList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
    /**
     * The maximum number of results to return per each request.
     */
    MaxResults?: MaxResults;
  }
  export interface ListRegistrationAssociationsResult {
    /**
     * The Amazon Resource Name (ARN) for the registration.
     */
    RegistrationArn: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: String;
    /**
     * The type of registration form. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
     */
    RegistrationType: RegistrationType;
    /**
     * An array of RegistrationAssociationMetadata objects.
     */
    RegistrationAssociations: RegistrationAssociationMetadataList;
    /**
     * The token to be used for the next set of paginated results. You don't need to supply a value for this field in the initial request.
     */
    NextToken?: NextToken;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource to query for.
     */
    ResourceArn: AmazonResourceName;
  }
  export interface ListTagsForResourceResult {
    /**
     * The ARN of the resource.
     */
    ResourceArn?: AmazonResourceName;
    /**
     * An array of key and value pair tags that are associated with the resource.
     */
    Tags?: TagList;
  }
  export type LogGroupArn = string;
  export type MaxPrice = string;
  export type MaxResults = number;
  export type MessageType = "TRANSACTIONAL"|"PROMOTIONAL"|string;
  export type MessageTypeList = MessageType[];
  export type MonthlyLimit = number;
  export type NextToken = string;
  export type NonEmptyTagList = Tag[];
  export type NumberCapability = "SMS"|"VOICE"|string;
  export type NumberCapabilityList = NumberCapability[];
  export type NumberStatus = "PENDING"|"ACTIVE"|"ASSOCIATING"|"DISASSOCIATING"|"DELETED"|string;
  export type NumberType = "SHORT_CODE"|"LONG_CODE"|"TOLL_FREE"|"TEN_DLC"|"SIMULATOR"|string;
  export interface OptOutListInformation {
    /**
     * The Amazon Resource Name (ARN) of the OptOutList.
     */
    OptOutListArn: String;
    /**
     * The name of the OptOutList.
     */
    OptOutListName: OptOutListName;
    /**
     * The time when the OutOutList was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export type OptOutListInformationList = OptOutListInformation[];
  export type OptOutListName = string;
  export type OptOutListNameList = OptOutListNameOrArn[];
  export type OptOutListNameOrArn = string;
  export interface OptedOutFilter {
    /**
     * The name of the attribute to filter on.
     */
    Name: OptedOutFilterName;
    /**
     * An array of values to filter for.
     */
    Values: FilterValueList;
  }
  export type OptedOutFilterList = OptedOutFilter[];
  export type OptedOutFilterName = "end-user-opted-out"|string;
  export interface OptedOutNumberInformation {
    /**
     * The phone number that is opted out.
     */
    OptedOutNumber: PhoneNumber;
    /**
     * The time that the op tout occurred, in UNIX epoch time format.
     */
    OptedOutTimestamp: Timestamp;
    /**
     * This is set to true if it was the end recipient that opted out.
     */
    EndUserOptedOut: PrimitiveBoolean;
  }
  export type OptedOutNumberInformationList = OptedOutNumberInformation[];
  export type OptedOutNumberList = PhoneNumber[];
  export interface OriginationIdentityMetadata {
    /**
     * The Amazon Resource Name (ARN) associated with the origination identity.
     */
    OriginationIdentityArn: String;
    /**
     * The unique identifier of the origination identity.
     */
    OriginationIdentity: String;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. 
     */
    IsoCountryCode: IsoCountryCode;
    /**
     * Describes if the origination identity can be used for text messages, voice calls or both.
     */
    NumberCapabilities: NumberCapabilityList;
    /**
     * The phone number in E.164 format.
     */
    PhoneNumber?: PhoneNumber;
  }
  export type OriginationIdentityMetadataList = OriginationIdentityMetadata[];
  export type PhoneNumber = string;
  export interface PhoneNumberFilter {
    /**
     * The name of the attribute to filter on.
     */
    Name: PhoneNumberFilterName;
    /**
     * An array values to filter for.
     */
    Values: FilterValueList;
  }
  export type PhoneNumberFilterList = PhoneNumberFilter[];
  export type PhoneNumberFilterName = "status"|"iso-country-code"|"message-type"|"number-capability"|"number-type"|"two-way-enabled"|"self-managed-opt-outs-enabled"|"opt-out-list-name"|"deletion-protection-enabled"|"two-way-channel-arn"|string;
  export type PhoneNumberIdList = PhoneNumberIdOrArn[];
  export type PhoneNumberIdOrArn = string;
  export interface PhoneNumberInformation {
    /**
     * The Amazon Resource Name (ARN) associated with the phone number.
     */
    PhoneNumberArn: String;
    /**
     * The unique identifier for the phone number.
     */
    PhoneNumberId?: String;
    /**
     * The phone number in E.164 format.
     */
    PhoneNumber: PhoneNumber;
    /**
     * The current status of the phone number.
     */
    Status: NumberStatus;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. 
     */
    IsoCountryCode: IsoCountryCode;
    /**
     * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    MessageType: MessageType;
    /**
     * Describes if the origination identity can be used for text messages, voice calls or both.
     */
    NumberCapabilities: NumberCapabilityList;
    /**
     * The type of phone number.
     */
    NumberType: NumberType;
    /**
     * The price, in US dollars, to lease the phone number.
     */
    MonthlyLeasingPrice: String;
    /**
     * By default this is set to false. When set to true you can receive incoming text messages from your end recipients using the TwoWayChannelArn.
     */
    TwoWayEnabled: PrimitiveBoolean;
    /**
     * The Amazon Resource Name (ARN) of the two way channel.
     */
    TwoWayChannelArn?: TwoWayChannelArn;
    /**
     * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
     */
    TwoWayChannelRole?: IamRoleArn;
    /**
     * When set to false an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out request. For more information see Self-managed opt-outs 
     */
    SelfManagedOptOutsEnabled: PrimitiveBoolean;
    /**
     * The name of the OptOutList associated with the phone number.
     */
    OptOutListName: OptOutListName;
    /**
     * When set to true the phone number can't be deleted.
     */
    DeletionProtectionEnabled: PrimitiveBoolean;
    /**
     * The unique identifier of the pool associated with the phone number.
     */
    PoolId?: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId?: String;
    /**
     * The time when the phone number was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export type PhoneNumberInformationList = PhoneNumberInformation[];
  export type PhoneOrPoolIdOrArn = string;
  export type PhoneOrSenderIdOrArn = string;
  export interface PoolFilter {
    /**
     * The name of the attribute to filter on.
     */
    Name: PoolFilterName;
    /**
     * An array values to filter for.
     */
    Values: FilterValueList;
  }
  export type PoolFilterList = PoolFilter[];
  export type PoolFilterName = "status"|"message-type"|"two-way-enabled"|"self-managed-opt-outs-enabled"|"opt-out-list-name"|"shared-routes-enabled"|"deletion-protection-enabled"|"two-way-channel-arn"|string;
  export type PoolIdList = PoolIdOrArn[];
  export type PoolIdOrArn = string;
  export interface PoolInformation {
    /**
     * The Amazon Resource Name (ARN) for the pool.
     */
    PoolArn: String;
    /**
     * The unique identifier for the pool.
     */
    PoolId: String;
    /**
     * The current status of the pool.
     */
    Status: PoolStatus;
    /**
     * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    MessageType: MessageType;
    /**
     * When set to true you can receive incoming text messages from your end recipients using the TwoWayChannelArn.
     */
    TwoWayEnabled: PrimitiveBoolean;
    /**
     * The Amazon Resource Name (ARN) of the two way channel.
     */
    TwoWayChannelArn?: TwoWayChannelArn;
    /**
     * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
     */
    TwoWayChannelRole?: IamRoleArn;
    /**
     * When set to false, an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests. For more information see Self-managed opt-outs 
     */
    SelfManagedOptOutsEnabled: PrimitiveBoolean;
    /**
     * The name of the OptOutList associated with the pool.
     */
    OptOutListName: OptOutListName;
    /**
     * Allows you to enable shared routes on your pool. By default, this is set to False. If you set this value to True, your messages are sent using phone numbers or sender IDs (depending on the country) that are shared with other Amazon Pinpoint users. In some countries, such as the United States, senders aren't allowed to use shared routes and must use a dedicated phone number or short code.
     */
    SharedRoutesEnabled: PrimitiveBoolean;
    /**
     * When set to true the pool can't be deleted.
     */
    DeletionProtectionEnabled: PrimitiveBoolean;
    /**
     * The time when the pool was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export type PoolInformationList = PoolInformation[];
  export interface PoolOriginationIdentitiesFilter {
    /**
     * The name of the attribute to filter on.
     */
    Name: PoolOriginationIdentitiesFilterName;
    /**
     * An array values to filter for.
     */
    Values: FilterValueList;
  }
  export type PoolOriginationIdentitiesFilterList = PoolOriginationIdentitiesFilter[];
  export type PoolOriginationIdentitiesFilterName = "iso-country-code"|"number-capability"|string;
  export type PoolStatus = "CREATING"|"ACTIVE"|"DELETING"|string;
  export type PrimitiveBoolean = boolean;
  export type PrimitiveLong = number;
  export interface PutKeywordRequest {
    /**
     * The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn. You can use DescribePhoneNumbers get the values for PhoneNumberId and PhoneNumberArn while DescribeSenderIds can be used to get the values for SenderId and SenderIdArn.
     */
    OriginationIdentity: PhoneOrPoolIdOrArn;
    /**
     * The new keyword to add.
     */
    Keyword: Keyword;
    /**
     * The message associated with the keyword.
     */
    KeywordMessage: KeywordMessage;
    /**
     * The action to perform for the new keyword when it is received.   AUTOMATIC_RESPONSE: A message is sent to the recipient.   OPT_OUT: Keeps the recipient from receiving future messages.   OPT_IN: The recipient wants to receive future messages.  
     */
    KeywordAction?: KeywordAction;
  }
  export interface PutKeywordResult {
    /**
     * The PhoneNumberArn or PoolArn that the keyword was associated with.
     */
    OriginationIdentityArn?: String;
    /**
     * The PhoneNumberId or PoolId that the keyword was associated with.
     */
    OriginationIdentity?: String;
    /**
     * The keyword that was added.
     */
    Keyword?: Keyword;
    /**
     * The message associated with the keyword.
     */
    KeywordMessage?: KeywordMessage;
    /**
     * The action to perform when the keyword is used.
     */
    KeywordAction?: KeywordAction;
  }
  export interface PutOptedOutNumberRequest {
    /**
     * The OptOutListName or OptOutListArn to add the phone number to.
     */
    OptOutListName: OptOutListNameOrArn;
    /**
     * The phone number to add to the OptOutList in E.164 format.
     */
    OptedOutNumber: PhoneNumber;
  }
  export interface PutOptedOutNumberResult {
    /**
     * The OptOutListArn that the phone number was removed from.
     */
    OptOutListArn?: String;
    /**
     * The OptOutListName that the phone number was removed from.
     */
    OptOutListName?: OptOutListName;
    /**
     * The phone number that was added to the OptOutList.
     */
    OptedOutNumber?: PhoneNumber;
    /**
     * The time that the phone number was added to the OptOutList, in UNIX epoch time format.
     */
    OptedOutTimestamp?: Timestamp;
    /**
     * This is true if it was the end user who requested their phone number be removed. 
     */
    EndUserOptedOut?: PrimitiveBoolean;
  }
  export interface PutRegistrationFieldValueRequest {
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: RegistrationIdOrArn;
    /**
     * The path to the registration form field. You can use DescribeRegistrationFieldDefinitions for a list of FieldPaths.
     */
    FieldPath: FieldPath;
    /**
     * An array of values for the form field.
     */
    SelectChoices?: SelectChoiceList;
    /**
     * The text data for a free form field.
     */
    TextValue?: TextValue;
    /**
     * The unique identifier for the registration attachment.
     */
    RegistrationAttachmentId?: RegistrationAttachmentIdOrArn;
  }
  export interface PutRegistrationFieldValueResult {
    /**
     * The Amazon Resource Name (ARN) for the registration.
     */
    RegistrationArn: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: String;
    /**
     * The version number of the registration.
     */
    VersionNumber: RegistrationVersionNumber;
    /**
     * The path to the registration form field. You can use DescribeRegistrationFieldDefinitions for a list of FieldPaths.
     */
    FieldPath: FieldPath;
    /**
     * An array of values for the form field.
     */
    SelectChoices?: SelectChoiceList;
    /**
     * The text data for a free form field.
     */
    TextValue?: TextValue;
    /**
     * The unique identifier for the registration attachment.
     */
    RegistrationAttachmentId?: String;
  }
  export type RegistrationAssociationBehavior = "ASSOCIATE_BEFORE_SUBMIT"|"ASSOCIATE_ON_APPROVAL"|"ASSOCIATE_AFTER_COMPLETE"|string;
  export interface RegistrationAssociationFilter {
    /**
     * The name of the attribute to filter on.
     */
    Name: RegistrationAssociationFilterName;
    /**
     * An array of values to filter for.
     */
    Values: FilterValueList;
  }
  export type RegistrationAssociationFilterList = RegistrationAssociationFilter[];
  export type RegistrationAssociationFilterName = "resource-type"|"iso-country-code"|string;
  export interface RegistrationAssociationMetadata {
    /**
     * The Amazon Resource Name (ARN) of the origination identity that is associated with the registration. 
     */
    ResourceArn: String;
    /**
     * The unique identifier for the origination identity. For example this could be a PhoneNumberId or SenderId.
     */
    ResourceId: String;
    /**
     * The origination identity type.
     */
    ResourceType: String;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
     */
    IsoCountryCode?: IsoCountryCode;
    /**
     * The phone number associated with the registration in E.164 format.
     */
    PhoneNumber?: PhoneNumber;
  }
  export type RegistrationAssociationMetadataList = RegistrationAssociationMetadata[];
  export interface RegistrationAttachmentFilter {
    /**
     * The name of the attribute to filter on.
     */
    Name: RegistrationAttachmentFilterName;
    /**
     * An array of values to filter on.
     */
    Values: FilterValueList;
  }
  export type RegistrationAttachmentFilterList = RegistrationAttachmentFilter[];
  export type RegistrationAttachmentFilterName = "attachment-status"|string;
  export type RegistrationAttachmentIdList = RegistrationIdOrArn[];
  export type RegistrationAttachmentIdOrArn = string;
  export interface RegistrationAttachmentsInformation {
    /**
     * The Amazon Resource Name (ARN) for the registration attachment.
     */
    RegistrationAttachmentArn: String;
    /**
     * The unique identifier for the registration attachment.
     */
    RegistrationAttachmentId: String;
    /**
     * The status of the registration attachment.     UPLOAD_IN_PROGRESS The attachment is being uploaded.    UPLOAD_COMPLETE The attachment has been uploaded.    UPLOAD_FAILED The attachment failed to uploaded.    DELETED The attachment has been deleted..  
     */
    AttachmentStatus: AttachmentStatus;
    /**
     * A description of why the upload didn't successfully complete.
     */
    AttachmentUploadErrorReason?: AttachmentUploadErrorReason;
    /**
     * The time when the registration attachment was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export type RegistrationAttachmentsInformationList = RegistrationAttachmentsInformation[];
  export interface RegistrationDeniedReasonInformation {
    /**
     * The reason a registration was rejected.
     */
    Reason: String;
    /**
     * A short description of the rejection reason.
     */
    ShortDescription: String;
    /**
     * A long description of the rejection reason.
     */
    LongDescription?: String;
    /**
     * The title of the document.
     */
    DocumentationTitle?: String;
    /**
     * The link to the document.
     */
    DocumentationLink?: String;
  }
  export type RegistrationDeniedReasonInformationList = RegistrationDeniedReasonInformation[];
  export type RegistrationDisassociationBehavior = "DISASSOCIATE_ALL_CLOSES_REGISTRATION"|"DISASSOCIATE_ALL_ALLOWS_DELETE_REGISTRATION"|"DELETE_REGISTRATION_DISASSOCIATES"|string;
  export interface RegistrationFieldDefinition {
    /**
     * The section path of the field.
     */
    SectionPath: SectionPath;
    /**
     * The path to the registration form field. You can use DescribeRegistrationFieldDefinitions for a list of FieldPaths.
     */
    FieldPath: FieldPath;
    /**
     * The type of field.
     */
    FieldType: FieldType;
    /**
     * Specifies if the field for the registration form is required, conditional or optional.
     */
    FieldRequirement: FieldRequirement;
    /**
     * The validation rules for a select field.
     */
    SelectValidation?: SelectValidation;
    /**
     * The validation rules for a text field.
     */
    TextValidation?: TextValidation;
    /**
     * An array of RegistrationFieldDisplayHints objects for the field.
     */
    DisplayHints: RegistrationFieldDisplayHints;
  }
  export type RegistrationFieldDefinitionList = RegistrationFieldDefinition[];
  export interface RegistrationFieldDisplayHints {
    /**
     * The title of the display hint.
     */
    Title: String;
    /**
     * A short description of the display hint.
     */
    ShortDescription: String;
    /**
     * A full description of the display hint.
     */
    LongDescription?: String;
    /**
     * The title of the document the display hint is associated with.
     */
    DocumentationTitle?: String;
    /**
     * The link to the document the display hint is associated with.
     */
    DocumentationLink?: String;
    /**
     * An array of SelectOptionDescription objects.
     */
    SelectOptionDescriptions?: SelectOptionDescriptionsList;
    /**
     * The validation rules for the text field.
     */
    TextValidationDescription?: String;
    /**
     * Example text of what the value of a field should contain.
     */
    ExampleTextValue?: String;
  }
  export interface RegistrationFieldValueInformation {
    /**
     * The path to the registration form field. You can use DescribeRegistrationFieldDefinitions for a list of FieldPaths.
     */
    FieldPath: FieldPath;
    /**
     * An array of values for the form field.
     */
    SelectChoices?: SelectChoiceList;
    /**
     * The text data for a free form field.
     */
    TextValue?: TextValue;
    /**
     * The unique identifier for the registration attachment.
     */
    RegistrationAttachmentId?: RegistrationAttachmentIdOrArn;
    /**
     * A description of why the registration was denied.
     */
    DeniedReason?: String;
  }
  export type RegistrationFieldValueInformationList = RegistrationFieldValueInformation[];
  export interface RegistrationFilter {
    /**
     * The name of the attribute to filter on.
     */
    Name: RegistrationFilterName;
    /**
     * An array of values to filter on.
     */
    Values: FilterValueList;
  }
  export type RegistrationFilterList = RegistrationFilter[];
  export type RegistrationFilterName = "registration-type"|"registration-status"|string;
  export type RegistrationIdList = RegistrationIdOrArn[];
  export type RegistrationIdOrArn = string;
  export interface RegistrationInformation {
    /**
     * The Amazon Resource Name (ARN) for the registration.
     */
    RegistrationArn: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: String;
    /**
     * The type of registration form. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
     */
    RegistrationType: RegistrationType;
    /**
     * The status of the registration.    CREATED: Your registration is created but not submitted.    SUBMITTED: Your registration has been submitted and is awaiting review.    REVIEWING: Your registration has been accepted and is being reviewed.    PROVISIONING: Your registration has been approved and your origination identity is being created.    COMPLETE: Your registration has been approved and and your origination identity has been created.    REQUIRES_UPDATES: You must fix your registration and resubmit it.    CLOSED: The phone number or sender ID has been deleted and you must also delete the registration for the number.    DELETED: The registration has been deleted.  
     */
    RegistrationStatus: RegistrationStatus;
    /**
     * The current version number of the registration.
     */
    CurrentVersionNumber: RegistrationVersionNumber;
    /**
     * The version number of the registration that was approved.
     */
    ApprovedVersionNumber?: RegistrationVersionNumber;
    /**
     * The latest version number of the registration that was denied.
     */
    LatestDeniedVersionNumber?: RegistrationVersionNumber;
    /**
     * Metadata about a given registration which is specific to that registration type.
     */
    AdditionalAttributes?: StringMap;
    /**
     * The time when the registration was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export type RegistrationInformationList = RegistrationInformation[];
  export interface RegistrationSectionDefinition {
    /**
     * The path to the section of the registration.
     */
    SectionPath: SectionPath;
    /**
     * The path to the section of the registration.
     */
    DisplayHints: RegistrationSectionDisplayHints;
  }
  export type RegistrationSectionDefinitionList = RegistrationSectionDefinition[];
  export interface RegistrationSectionDisplayHints {
    /**
     * The title of the display hint.
     */
    Title: String;
    /**
     * A short description of the display hint.
     */
    ShortDescription: String;
    /**
     * A full description of the display hint.
     */
    LongDescription?: String;
    /**
     * The title of the document the display hint is associated with.
     */
    DocumentationTitle?: String;
    /**
     * The link to the document the display hint is associated with.
     */
    DocumentationLink?: String;
  }
  export type RegistrationStatus = "CREATED"|"SUBMITTED"|"REVIEWING"|"PROVISIONING"|"COMPLETE"|"REQUIRES_UPDATES"|"CLOSED"|"DELETED"|string;
  export type RegistrationType = string;
  export interface RegistrationTypeDefinition {
    /**
     * The type of registration form. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
     */
    RegistrationType: RegistrationType;
    /**
     * The supported association behavior for the registration type.
     */
    SupportedAssociations?: SupportedAssociationList;
    /**
     * Provides help information on the registration.
     */
    DisplayHints: RegistrationTypeDisplayHints;
  }
  export type RegistrationTypeDefinitionList = RegistrationTypeDefinition[];
  export interface RegistrationTypeDisplayHints {
    /**
     * The title of the display hint.
     */
    Title: String;
    /**
     * A short description of the display hint.
     */
    ShortDescription?: String;
    /**
     * A full description of the display hint.
     */
    LongDescription?: String;
    /**
     * The title of the document the display hint is associated with.
     */
    DocumentationTitle?: String;
    /**
     * The link to the document the display hint is associated with.
     */
    DocumentationLink?: String;
  }
  export interface RegistrationTypeFilter {
    /**
     * The name of the attribute to filter on.
     */
    Name: RegistrationTypeFilterName;
    /**
     * An array of values to filter on.
     */
    Values: FilterValueList;
  }
  export type RegistrationTypeFilterList = RegistrationTypeFilter[];
  export type RegistrationTypeFilterName = "supported-association-resource-type"|"supported-association-iso-country-code"|string;
  export type RegistrationTypeList = RegistrationType[];
  export interface RegistrationVersionFilter {
    /**
     * The name of the attribute to filter on.
     */
    Name: RegistrationVersionFilterName;
    /**
     * An array of values to filter on.
     */
    Values: FilterValueList;
  }
  export type RegistrationVersionFilterList = RegistrationVersionFilter[];
  export type RegistrationVersionFilterName = "registration-version-status"|string;
  export interface RegistrationVersionInformation {
    /**
     * The version number of the registration.
     */
    VersionNumber: RegistrationVersionNumber;
    /**
     * The status of the registration.    DRAFT: The initial status of a registration version after it’s created.    SUBMITTED: Your registration has been submitted.    REVIEWING: Your registration has been accepted and is being reviewed.    APPROVED: Your registration has been approved.    DISCARDED: You've abandon this version of their registration to start over with a new version.     DENIED: You must fix your registration and resubmit it.    REVOKED: Your previously approved registration has been revoked.    ARCHIVED: Your previously approved registration version moves into this status when a more recently submitted version is approved.  
     */
    RegistrationVersionStatus: RegistrationVersionStatus;
    /**
     * The RegistrationVersionStatusHistory object contains the time stamps for when the reservations status changes.
     */
    RegistrationVersionStatusHistory: RegistrationVersionStatusHistory;
    /**
     * An array of RegistrationDeniedReasonInformation objects. 
     */
    DeniedReasons?: RegistrationDeniedReasonInformationList;
  }
  export type RegistrationVersionInformationList = RegistrationVersionInformation[];
  export type RegistrationVersionNumber = number;
  export type RegistrationVersionNumberList = RegistrationVersionNumber[];
  export type RegistrationVersionStatus = "DRAFT"|"SUBMITTED"|"REVIEWING"|"APPROVED"|"DISCARDED"|"DENIED"|"REVOKED"|"ARCHIVED"|string;
  export interface RegistrationVersionStatusHistory {
    /**
     * The time when the registration was in the draft state, in UNIX epoch time format.
     */
    DraftTimestamp: Timestamp;
    /**
     * The time when the registration was in the submitted state, in UNIX epoch time format.
     */
    SubmittedTimestamp?: Timestamp;
    /**
     * The time when the registration was in the reviewing state, in UNIX epoch time format.
     */
    ReviewingTimestamp?: Timestamp;
    /**
     * The time when the registration was in the approved state, in UNIX epoch time format.
     */
    ApprovedTimestamp?: Timestamp;
    /**
     * The time when the registration was in the discarded state, in UNIX epoch time format.
     */
    DiscardedTimestamp?: Timestamp;
    /**
     * The time when the registration was in the denied state, in UNIX epoch time format.
     */
    DeniedTimestamp?: Timestamp;
    /**
     * The time when the registration was in the revoked state, in UNIX epoch time format.
     */
    RevokedTimestamp?: Timestamp;
    /**
     * The time when the registration was in the archived state, in UNIX epoch time format.
     */
    ArchivedTimestamp?: Timestamp;
  }
  export interface ReleasePhoneNumberRequest {
    /**
     * The PhoneNumberId or PhoneNumberArn of the phone number to release. You can use DescribePhoneNumbers to get the values for PhoneNumberId and PhoneNumberArn.
     */
    PhoneNumberId: PhoneNumberIdOrArn;
  }
  export interface ReleasePhoneNumberResult {
    /**
     * The PhoneNumberArn of the phone number that was released.
     */
    PhoneNumberArn?: String;
    /**
     * The PhoneNumberId of the phone number that was released.
     */
    PhoneNumberId?: String;
    /**
     * The phone number that was released.
     */
    PhoneNumber?: PhoneNumber;
    /**
     * The current status of the request.
     */
    Status?: NumberStatus;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
     */
    IsoCountryCode?: IsoCountryCode;
    /**
     * The message type that was associated with the phone number.
     */
    MessageType?: MessageType;
    /**
     * Specifies if the number could be used for text messages, voice, or both.
     */
    NumberCapabilities?: NumberCapabilityList;
    /**
     * The type of number that was released.
     */
    NumberType?: NumberType;
    /**
     * The monthly price of the phone number, in US dollars.
     */
    MonthlyLeasingPrice?: String;
    /**
     * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
     */
    TwoWayEnabled?: PrimitiveBoolean;
    /**
     * The Amazon Resource Name (ARN) of the TwoWayChannel.
     */
    TwoWayChannelArn?: TwoWayChannelArn;
    /**
     * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
     */
    TwoWayChannelRole?: IamRoleArn;
    /**
     * By default this is set to false. When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
     */
    SelfManagedOptOutsEnabled?: PrimitiveBoolean;
    /**
     * The name of the OptOutList that was associated with the phone number.
     */
    OptOutListName?: OptOutListName;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId?: String;
    /**
     * The time when the phone number was created, in UNIX epoch time format.
     */
    CreatedTimestamp?: Timestamp;
  }
  export interface ReleaseSenderIdRequest {
    /**
     * The sender ID to release.
     */
    SenderId: SenderIdOrArn;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
     */
    IsoCountryCode: IsoCountryCode;
  }
  export interface ReleaseSenderIdResult {
    /**
     * The Amazon Resource Name (ARN) associated with the SenderId.
     */
    SenderIdArn: String;
    /**
     * The sender ID that was released.
     */
    SenderId: SenderId;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
     */
    IsoCountryCode: IsoCountryCode;
    /**
     * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    MessageTypes: MessageTypeList;
    /**
     * The monthly price, in US dollars, to lease the sender ID.
     */
    MonthlyLeasingPrice: String;
    /**
     * True if the sender ID is registered.
     */
    Registered: PrimitiveBoolean;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId?: String;
  }
  export interface RequestPhoneNumberRequest {
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. 
     */
    IsoCountryCode: IsoCountryCode;
    /**
     * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    MessageType: MessageType;
    /**
     * Indicates if the phone number will be used for text messages, voice messages, or both. 
     */
    NumberCapabilities: NumberCapabilityList;
    /**
     * The type of phone number to request.
     */
    NumberType: RequestableNumberType;
    /**
     * The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn.
     */
    OptOutListName?: OptOutListNameOrArn;
    /**
     * The pool to associated with the phone number. You can use the PoolId or PoolArn. 
     */
    PoolId?: PoolIdOrArn;
    /**
     * Use this field to attach your phone number for an external registration process.
     */
    RegistrationId?: RegistrationIdOrArn;
    /**
     * By default this is set to false. When set to true the phone number can't be deleted.
     */
    DeletionProtectionEnabled?: Boolean;
    /**
     * An array of tags (key and value pairs) associate with the requested phone number. 
     */
    Tags?: TagList;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
     */
    ClientToken?: ClientToken;
  }
  export interface RequestPhoneNumberResult {
    /**
     * The Amazon Resource Name (ARN) of the requested phone number.
     */
    PhoneNumberArn?: String;
    /**
     * The unique identifier of the new phone number.
     */
    PhoneNumberId?: String;
    /**
     * The new phone number that was requested.
     */
    PhoneNumber?: PhoneNumber;
    /**
     * The current status of the request.
     */
    Status?: NumberStatus;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. 
     */
    IsoCountryCode?: IsoCountryCode;
    /**
     * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    MessageType?: MessageType;
    /**
     * Indicates if the phone number will be used for text messages, voice messages or both. 
     */
    NumberCapabilities?: NumberCapabilityList;
    /**
     * The type of number that was released.
     */
    NumberType?: RequestableNumberType;
    /**
     * The monthly price, in US dollars, to lease the phone number.
     */
    MonthlyLeasingPrice?: String;
    /**
     * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
     */
    TwoWayEnabled?: PrimitiveBoolean;
    /**
     * The ARN used to identify the two way channel.
     */
    TwoWayChannelArn?: TwoWayChannelArn;
    /**
     * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
     */
    TwoWayChannelRole?: IamRoleArn;
    /**
     * By default this is set to false. When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
     */
    SelfManagedOptOutsEnabled?: PrimitiveBoolean;
    /**
     * The name of the OptOutList that is associated with the requested phone number.
     */
    OptOutListName?: OptOutListName;
    /**
     * By default this is set to false. When set to true the phone number can't be deleted. 
     */
    DeletionProtectionEnabled?: PrimitiveBoolean;
    /**
     * The unique identifier of the pool associated with the phone number 
     */
    PoolId?: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId?: String;
    /**
     * An array of key and value pair tags that are associated with the phone number.
     */
    Tags?: TagList;
    /**
     * The time when the phone number was created, in UNIX epoch time format.
     */
    CreatedTimestamp?: Timestamp;
  }
  export interface RequestSenderIdRequest {
    /**
     * The sender ID string to request.
     */
    SenderId: SenderId;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
     */
    IsoCountryCode: IsoCountryCode;
    /**
     * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    MessageTypes?: MessageTypeList;
    /**
     * By default this is set to false. When set to true the sender ID can't be deleted.
     */
    DeletionProtectionEnabled?: Boolean;
    /**
     * An array of tags (key and value pairs) to associate with the sender ID.
     */
    Tags?: TagList;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
     */
    ClientToken?: ClientToken;
  }
  export interface RequestSenderIdResult {
    /**
     * The Amazon Resource Name (ARN) associated with the SenderId.
     */
    SenderIdArn: String;
    /**
     * The sender ID that was requested.
     */
    SenderId: SenderId;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
     */
    IsoCountryCode: IsoCountryCode;
    /**
     * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    MessageTypes: MessageTypeList;
    /**
     * The monthly price, in US dollars, to lease the sender ID.
     */
    MonthlyLeasingPrice: String;
    /**
     * By default this is set to false. When set to true the sender ID can't be deleted.
     */
    DeletionProtectionEnabled: PrimitiveBoolean;
    /**
     * True if the sender ID is registered.
     */
    Registered: PrimitiveBoolean;
    /**
     * An array of tags (key and value pairs) to associate with the sender ID.
     */
    Tags?: TagList;
  }
  export type RequestableNumberType = "LONG_CODE"|"TOLL_FREE"|"TEN_DLC"|"SIMULATOR"|string;
  export type ResourceIdOrArn = string;
  export type SectionPath = string;
  export type SectionPathList = SectionPath[];
  export type SelectChoice = string;
  export type SelectChoiceList = SelectChoice[];
  export interface SelectOptionDescription {
    /**
     * The value of the option.
     */
    Option: String;
    /**
     * The title of the select option.
     */
    Title?: String;
    /**
     * A description of the option meaning.
     */
    Description?: String;
  }
  export type SelectOptionDescriptionsList = SelectOptionDescription[];
  export interface SelectValidation {
    /**
     * The minimum number of choices for the select.
     */
    MinChoices: Integer;
    /**
     * The maximum number of choices for the select.
     */
    MaxChoices: Integer;
    /**
     * An array of strings for the possible selection options. 
     */
    Options: StringList;
  }
  export interface SendDestinationNumberVerificationCodeRequest {
    /**
     * The unique identifier for the verified destination phone number.
     */
    VerifiedDestinationNumberId: VerifiedDestinationNumberIdOrArn;
    /**
     * Choose to send the verification code as an SMS or voice message.
     */
    VerificationChannel: VerificationChannel;
    /**
     * Choose the language to use for the message.
     */
    LanguageCode?: LanguageCode;
    /**
     * The origination identity of the message. This can be either the PhoneNumber, PhoneNumberId, PhoneNumberArn, SenderId, SenderIdArn, PoolId, or PoolArn.
     */
    OriginationIdentity?: VerificationMessageOriginationIdentity;
    /**
     * The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.
     */
    ConfigurationSetName?: ConfigurationSetNameOrArn;
    /**
     * You can specify custom data in this field. If you do, that data is logged to the event destination.
     */
    Context?: ContextMap;
    /**
     * This field is used for any country-specific registration requirements. Currently, this setting is only used when you send messages to recipients in India using a sender ID. For more information see Special requirements for sending SMS messages to recipients in India. 
     */
    DestinationCountryParameters?: DestinationCountryParameters;
  }
  export interface SendDestinationNumberVerificationCodeResult {
    /**
     * The unique identifier for the message.
     */
    MessageId: String;
  }
  export interface SendTextMessageRequest {
    /**
     * The destination phone number in E.164 format.
     */
    DestinationPhoneNumber: PhoneNumber;
    /**
     * The origination identity of the message. This can be either the PhoneNumber, PhoneNumberId, PhoneNumberArn, SenderId, SenderIdArn, PoolId, or PoolArn.
     */
    OriginationIdentity?: TextMessageOriginationIdentity;
    /**
     * The body of the text message.
     */
    MessageBody?: TextMessageBody;
    /**
     * The type of message. Valid values are for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    MessageType?: MessageType;
    /**
     * When you register a short code in the US, you must specify a program name. If you don’t have a US short code, omit this attribute.
     */
    Keyword?: Keyword;
    /**
     * The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.
     */
    ConfigurationSetName?: ConfigurationSetNameOrArn;
    /**
     * The maximum amount that you want to spend, in US dollars, per each text message part. A text message can contain multiple parts.
     */
    MaxPrice?: MaxPrice;
    /**
     * How long the text message is valid for. By default this is 72 hours.
     */
    TimeToLive?: TimeToLive;
    /**
     * You can specify custom data in this field. If you do, that data is logged to the event destination.
     */
    Context?: ContextMap;
    /**
     * This field is used for any country-specific registration requirements. Currently, this setting is only used when you send messages to recipients in India using a sender ID. For more information see Special requirements for sending SMS messages to recipients in India. 
     */
    DestinationCountryParameters?: DestinationCountryParameters;
    /**
     * When set to true, the message is checked and validated, but isn't sent to the end recipient.
     */
    DryRun?: PrimitiveBoolean;
  }
  export interface SendTextMessageResult {
    /**
     * The unique identifier for the message.
     */
    MessageId?: String;
  }
  export interface SendVoiceMessageRequest {
    /**
     * The destination phone number in E.164 format.
     */
    DestinationPhoneNumber: PhoneNumber;
    /**
     * The origination identity to use for the voice call. This can be the PhoneNumber, PhoneNumberId, PhoneNumberArn, PoolId, or PoolArn.
     */
    OriginationIdentity: VoiceMessageOriginationIdentity;
    /**
     * The text to convert to a voice message.
     */
    MessageBody?: VoiceMessageBody;
    /**
     * Specifies if the MessageBody field contains text or speech synthesis markup language (SSML).   TEXT: This is the default value. When used the maximum character limit is 3000.   SSML: When used the maximum character limit is 6000 including SSML tagging.  
     */
    MessageBodyTextType?: VoiceMessageBodyTextType;
    /**
     * The voice for the Amazon Polly service to use. By default this is set to "MATTHEW".
     */
    VoiceId?: VoiceId;
    /**
     * The name of the configuration set to use. This can be either the ConfigurationSetName or ConfigurationSetArn.
     */
    ConfigurationSetName?: ConfigurationSetNameOrArn;
    /**
     * The maximum amount to spend per voice message, in US dollars.
     */
    MaxPricePerMinute?: MaxPrice;
    /**
     * How long the voice message is valid for. By default this is 72 hours.
     */
    TimeToLive?: TimeToLive;
    /**
     * You can specify custom data in this field. If you do, that data is logged to the event destination.
     */
    Context?: ContextMap;
    /**
     * When set to true, the message is checked and validated, but isn't sent to the end recipient.
     */
    DryRun?: PrimitiveBoolean;
  }
  export interface SendVoiceMessageResult {
    /**
     * The unique identifier for the message.
     */
    MessageId?: String;
  }
  export type SenderId = string;
  export interface SenderIdAndCountry {
    /**
     * The unique identifier of the sender.
     */
    SenderId: SenderIdOrArn;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. 
     */
    IsoCountryCode: IsoCountryCode;
  }
  export interface SenderIdFilter {
    /**
     * The name of the attribute to filter on.
     */
    Name: SenderIdFilterName;
    /**
     * An array of values to filter for.
     */
    Values: FilterValueList;
  }
  export type SenderIdFilterList = SenderIdFilter[];
  export type SenderIdFilterName = "sender-id"|"iso-country-code"|"message-type"|"deletion-protection-enabled"|"registered"|string;
  export interface SenderIdInformation {
    /**
     * The Amazon Resource Name (ARN) associated with the SenderId.
     */
    SenderIdArn: String;
    /**
     * The alphanumeric sender ID in a specific country that you'd like to describe.
     */
    SenderId: SenderId;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. 
     */
    IsoCountryCode: IsoCountryCode;
    /**
     * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    MessageTypes: MessageTypeList;
    /**
     * The monthly leasing price, in US dollars.
     */
    MonthlyLeasingPrice: String;
    /**
     * By default this is set to false. When set to true the sender ID can't be deleted.
     */
    DeletionProtectionEnabled: PrimitiveBoolean;
    /**
     * True if the sender ID is registered.
     */
    Registered: PrimitiveBoolean;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId?: String;
  }
  export type SenderIdInformationList = SenderIdInformation[];
  export type SenderIdList = SenderIdAndCountry[];
  export type SenderIdOrArn = string;
  export interface SetDefaultMessageTypeRequest {
    /**
     * The configuration set to update with a new default message type. This field can be the ConsigurationSetName or ConfigurationSetArn.
     */
    ConfigurationSetName: ConfigurationSetNameOrArn;
    /**
     * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    MessageType: MessageType;
  }
  export interface SetDefaultMessageTypeResult {
    /**
     * The Amazon Resource Name (ARN) of the updated configuration set.
     */
    ConfigurationSetArn?: String;
    /**
     * The name of the configuration set that was updated.
     */
    ConfigurationSetName?: ConfigurationSetName;
    /**
     * The new default message type of the configuration set.
     */
    MessageType?: MessageType;
  }
  export interface SetDefaultSenderIdRequest {
    /**
     * The configuration set to updated with a new default SenderId. This field can be the ConsigurationSetName or ConfigurationSetArn.
     */
    ConfigurationSetName: ConfigurationSetNameOrArn;
    /**
     * The current sender ID for the configuration set. When sending a text message to a destination country which supports SenderIds, the default sender ID on the configuration set specified on SendTextMessage will be used if no dedicated origination phone numbers or registered SenderIds are available in your account, instead of a generic sender ID, such as 'NOTICE'.
     */
    SenderId: SenderId;
  }
  export interface SetDefaultSenderIdResult {
    /**
     * The Amazon Resource Name (ARN) of the updated configuration set.
     */
    ConfigurationSetArn?: String;
    /**
     * The name of the configuration set that was updated.
     */
    ConfigurationSetName?: ConfigurationSetName;
    /**
     * The default sender ID to set for the ConfigurationSet.
     */
    SenderId?: SenderId;
  }
  export interface SetTextMessageSpendLimitOverrideRequest {
    /**
     * The new monthly limit to enforce on text messages.
     */
    MonthlyLimit: MonthlyLimit;
  }
  export interface SetTextMessageSpendLimitOverrideResult {
    /**
     * The current monthly limit to enforce on sending text messages.
     */
    MonthlyLimit?: MonthlyLimit;
  }
  export interface SetVoiceMessageSpendLimitOverrideRequest {
    /**
     * The new monthly limit to enforce on voice messages.
     */
    MonthlyLimit: MonthlyLimit;
  }
  export interface SetVoiceMessageSpendLimitOverrideResult {
    /**
     * The current monthly limit to enforce on sending voice messages.
     */
    MonthlyLimit?: MonthlyLimit;
  }
  export interface SnsDestination {
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.
     */
    TopicArn: SnsTopicArn;
  }
  export type SnsTopicArn = string;
  export interface SpendLimit {
    /**
     * The name for the SpendLimit.
     */
    Name: SpendLimitName;
    /**
     * The maximum amount of money, in US dollars, that you want to be able to spend sending messages each month. This value has to be less than or equal to the amount in MaxLimit. To use this custom limit, Overridden must be set to true.
     */
    EnforcedLimit: PrimitiveLong;
    /**
     *  The maximum amount of money that you are able to spend to send messages each month, in US dollars.
     */
    MaxLimit: PrimitiveLong;
    /**
     * When set to True, the value that has been specified in the EnforcedLimit is used to determine the maximum amount in US dollars that can be spent to send messages each month, in US dollars.
     */
    Overridden: PrimitiveBoolean;
  }
  export type SpendLimitList = SpendLimit[];
  export type SpendLimitName = "TEXT_MESSAGE_MONTHLY_SPEND_LIMIT"|"VOICE_MESSAGE_MONTHLY_SPEND_LIMIT"|string;
  export type String = string;
  export type StringList = String[];
  export type StringMap = {[key: string]: String};
  export interface SubmitRegistrationVersionRequest {
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: RegistrationIdOrArn;
  }
  export interface SubmitRegistrationVersionResult {
    /**
     * The Amazon Resource Name (ARN) for the registration.
     */
    RegistrationArn: String;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId: String;
    /**
     * The version number of the registration.
     */
    VersionNumber: RegistrationVersionNumber;
    /**
     * The status of the registration version.    DRAFT: The initial status of a registration version after it’s created.    SUBMITTED: Your registration has been submitted.    REVIEWING: Your registration has been accepted and is being reviewed.    APPROVED: Your registration has been approved.    DISCARDED: You've abandon this version of their registration to start over with a new version.     DENIED: You must fix your registration and resubmit it.    REVOKED: Your previously approved registration has been revoked.    ARCHIVED: Your previously approved registration version moves into this status when a more recently submitted version is approved.  
     */
    RegistrationVersionStatus: RegistrationVersionStatus;
    /**
     * The RegistrationVersionStatusHistory object contains the time stamps for when the reservations status changes.
     */
    RegistrationVersionStatusHistory: RegistrationVersionStatusHistory;
  }
  export interface SupportedAssociation {
    /**
     * Defines the behavior of when an origination identity and registration can be associated with each other.
     */
    ResourceType: String;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
     */
    IsoCountryCode?: IsoCountryCode;
    /**
     * The association behavior.    ASSOCIATE_BEFORE_SUBMIT The origination identity has to be supplied when creating a registration.    ASSOCIATE_ON_APPROVAL This applies to all short code registrations. The short code will be automatically provisioned once the registration is approved.    ASSOCIATE_AFTER_COMPLETE This applies to phone number registrations when you must complete a registration first, then associate one or more phone numbers later. For example 10DLC campaigns and long codes.   
     */
    AssociationBehavior: RegistrationAssociationBehavior;
    /**
     * The disassociation behavior.    DISASSOCIATE_ALL_CLOSES_REGISTRATION All origination identities must be disassociated from the registration before the registration can be closed.    DISASSOCIATE_ALL_ALLOWS_DELETE_REGISTRATION All origination identities must be disassociated from the registration before the registration can be deleted.    DELETE_REGISTRATION_DISASSOCIATES The registration can be deleted and all origination identities will be disasscoiated.  
     */
    DisassociationBehavior: RegistrationDisassociationBehavior;
  }
  export type SupportedAssociationList = SupportedAssociation[];
  export interface Tag {
    /**
     * The key identifier, or name, of the tag.
     */
    Key: TagKey;
    /**
     * The string value associated with the key of the tag.
     */
    Value: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export interface TagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: AmazonResourceName;
    /**
     * An array of key and value pair tags that are associated with the resource.
     */
    Tags: NonEmptyTagList;
  }
  export interface TagResourceResult {
  }
  export type TagValue = string;
  export type TextMessageBody = string;
  export type TextMessageOriginationIdentity = string;
  export interface TextValidation {
    /**
     * The minimum number of characters for the text field.
     */
    MinLength: Integer;
    /**
     * The maximum number of characters for the text field.
     */
    MaxLength: Integer;
    /**
     * The regular expression used to validate the text field.
     */
    Pattern: String;
  }
  export type TextValue = string;
  export type TimeToLive = number;
  export type Timestamp = Date;
  export type TwoWayChannelArn = string;
  export interface UntagResourceRequest {
    /**
     * The Amazon Resource Name (ARN) of the resource.
     */
    ResourceArn: AmazonResourceName;
    /**
     * An array of tag key values to unassociate with the resource.
     */
    TagKeys: TagKeyList;
  }
  export interface UntagResourceResult {
  }
  export interface UpdateEventDestinationRequest {
    /**
     * The configuration set to update with the new event destination. Valid values for this can be the ConfigurationSetName or ConfigurationSetArn.
     */
    ConfigurationSetName: ConfigurationSetNameOrArn;
    /**
     * The name to use for the event destination.
     */
    EventDestinationName: EventDestinationName;
    /**
     * When set to true logging is enabled.
     */
    Enabled?: Boolean;
    /**
     * An array of event types that determine which events to log.  The TEXT_SENT event type is not supported. 
     */
    MatchingEventTypes?: EventTypeList;
    /**
     * An object that contains information about an event destination that sends data to CloudWatch Logs.
     */
    CloudWatchLogsDestination?: CloudWatchLogsDestination;
    /**
     * An object that contains information about an event destination for logging to Kinesis Data Firehose.
     */
    KinesisFirehoseDestination?: KinesisFirehoseDestination;
    /**
     * An object that contains information about an event destination that sends data to Amazon SNS.
     */
    SnsDestination?: SnsDestination;
  }
  export interface UpdateEventDestinationResult {
    /**
     * The Amazon Resource Name (ARN) for the ConfigurationSet that was updated.
     */
    ConfigurationSetArn?: String;
    /**
     * The name of the configuration set.
     */
    ConfigurationSetName?: ConfigurationSetName;
    /**
     * An EventDestination object containing the details of where events will be logged. 
     */
    EventDestination?: EventDestination;
  }
  export interface UpdatePhoneNumberRequest {
    /**
     * The unique identifier of the phone number. Valid values for this field can be either the PhoneNumberId or PhoneNumberArn.
     */
    PhoneNumberId: PhoneNumberIdOrArn;
    /**
     * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
     */
    TwoWayEnabled?: Boolean;
    /**
     * The Amazon Resource Name (ARN) of the two way channel.
     */
    TwoWayChannelArn?: TwoWayChannelArn;
    /**
     * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
     */
    TwoWayChannelRole?: IamRoleArn;
    /**
     * By default this is set to false. When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
     */
    SelfManagedOptOutsEnabled?: Boolean;
    /**
     * The OptOutList to add the phone number to. Valid values for this field can be either the OutOutListName or OutOutListArn.
     */
    OptOutListName?: OptOutListNameOrArn;
    /**
     * By default this is set to false. When set to true the phone number can't be deleted. 
     */
    DeletionProtectionEnabled?: Boolean;
  }
  export interface UpdatePhoneNumberResult {
    /**
     * The Amazon Resource Name (ARN) of the updated phone number.
     */
    PhoneNumberArn?: String;
    /**
     * The unique identifier of the phone number.
     */
    PhoneNumberId?: String;
    /**
     * The phone number that was updated.
     */
    PhoneNumber?: PhoneNumber;
    /**
     * The current status of the request.
     */
    Status?: NumberStatus;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. 
     */
    IsoCountryCode?: IsoCountryCode;
    /**
     * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    MessageType?: MessageType;
    /**
     * Specifies if the number could be used for text messages, voice or both.
     */
    NumberCapabilities?: NumberCapabilityList;
    /**
     * The type of number that was requested.
     */
    NumberType?: NumberType;
    /**
     * The monthly leasing price of the phone number, in US dollars.
     */
    MonthlyLeasingPrice?: String;
    /**
     * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
     */
    TwoWayEnabled?: PrimitiveBoolean;
    /**
     * The Amazon Resource Name (ARN) of the two way channel.
     */
    TwoWayChannelArn?: TwoWayChannelArn;
    /**
     * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
     */
    TwoWayChannelRole?: IamRoleArn;
    /**
     * This is true if self managed opt-out are enabled.
     */
    SelfManagedOptOutsEnabled?: PrimitiveBoolean;
    /**
     * The name of the OptOutList associated with the phone number.
     */
    OptOutListName?: OptOutListName;
    /**
     * When set to true the phone number can't be deleted.
     */
    DeletionProtectionEnabled?: PrimitiveBoolean;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId?: String;
    /**
     * The time when the phone number was created, in UNIX epoch time format.
     */
    CreatedTimestamp?: Timestamp;
  }
  export interface UpdatePoolRequest {
    /**
     * The unique identifier of the pool to update. Valid values are either the PoolId or PoolArn.
     */
    PoolId: PoolIdOrArn;
    /**
     * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
     */
    TwoWayEnabled?: Boolean;
    /**
     * The Amazon Resource Name (ARN) of the two way channel.
     */
    TwoWayChannelArn?: TwoWayChannelArn;
    /**
     * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
     */
    TwoWayChannelRole?: IamRoleArn;
    /**
     * By default this is set to false. When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
     */
    SelfManagedOptOutsEnabled?: Boolean;
    /**
     * The OptOutList to associate with the pool. Valid values are either OptOutListName or OptOutListArn.
     */
    OptOutListName?: OptOutListNameOrArn;
    /**
     * Indicates whether shared routes are enabled for the pool.
     */
    SharedRoutesEnabled?: Boolean;
    /**
     * When set to true the pool can't be deleted.
     */
    DeletionProtectionEnabled?: Boolean;
  }
  export interface UpdatePoolResult {
    /**
     * The ARN of the pool.
     */
    PoolArn?: String;
    /**
     * The unique identifier of the pool.
     */
    PoolId?: String;
    /**
     * The current status of the pool update request.
     */
    Status?: PoolStatus;
    /**
     * The type of message for the pool to use.
     */
    MessageType?: MessageType;
    /**
     * By default this is set to false. When set to true you can receive incoming text messages from your end recipients.
     */
    TwoWayEnabled?: PrimitiveBoolean;
    /**
     * The Amazon Resource Name (ARN) of the two way channel.
     */
    TwoWayChannelArn?: TwoWayChannelArn;
    /**
     * An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
     */
    TwoWayChannelRole?: IamRoleArn;
    /**
     * When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, Amazon Pinpoint automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
     */
    SelfManagedOptOutsEnabled?: PrimitiveBoolean;
    /**
     * The name of the OptOutList associated with the pool.
     */
    OptOutListName?: OptOutListName;
    /**
     * Indicates whether shared routes are enabled for the pool.
     */
    SharedRoutesEnabled?: PrimitiveBoolean;
    /**
     * When set to true the pool can't be deleted.
     */
    DeletionProtectionEnabled?: PrimitiveBoolean;
    /**
     * The time when the pool was created, in UNIX epoch time format.
     */
    CreatedTimestamp?: Timestamp;
  }
  export interface UpdateSenderIdRequest {
    /**
     * The sender ID to update.
     */
    SenderId: SenderIdOrArn;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
     */
    IsoCountryCode: IsoCountryCode;
    /**
     * By default this is set to false. When set to true the sender ID can't be deleted.
     */
    DeletionProtectionEnabled?: Boolean;
  }
  export interface UpdateSenderIdResult {
    /**
     * The Amazon Resource Name (ARN) associated with the SenderId.
     */
    SenderIdArn: String;
    /**
     * The sender ID that was updated.
     */
    SenderId: SenderId;
    /**
     * The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
     */
    IsoCountryCode: IsoCountryCode;
    /**
     * The type of message. Valid values are TRANSACTIONAL for messages that are critical or time-sensitive and PROMOTIONAL for messages that aren't critical or time-sensitive.
     */
    MessageTypes: MessageTypeList;
    /**
     * The monthly price, in US dollars, to lease the sender ID.
     */
    MonthlyLeasingPrice: String;
    /**
     * By default this is set to false. When set to true the sender ID can't be deleted.
     */
    DeletionProtectionEnabled: PrimitiveBoolean;
    /**
     * True if the sender ID is registered..
     */
    Registered: PrimitiveBoolean;
    /**
     * The unique identifier for the registration.
     */
    RegistrationId?: String;
  }
  export type VerificationChannel = "TEXT"|"VOICE"|string;
  export type VerificationCode = string;
  export type VerificationMessageOriginationIdentity = string;
  export type VerificationStatus = "PENDING"|"VERIFIED"|string;
  export interface VerifiedDestinationNumberFilter {
    /**
     * The name of the attribute to filter on.
     */
    Name: VerifiedDestinationNumberFilterName;
    /**
     * An array of values to filter on.
     */
    Values: FilterValueList;
  }
  export type VerifiedDestinationNumberFilterList = VerifiedDestinationNumberFilter[];
  export type VerifiedDestinationNumberFilterName = "status"|string;
  export type VerifiedDestinationNumberIdList = VerifiedDestinationNumberIdOrArn[];
  export type VerifiedDestinationNumberIdOrArn = string;
  export interface VerifiedDestinationNumberInformation {
    /**
     * The Amazon Resource Name (ARN) for the verified destination phone number.
     */
    VerifiedDestinationNumberArn: String;
    /**
     * The unique identifier for the verified destination phone number.
     */
    VerifiedDestinationNumberId: String;
    /**
     * The verified destination phone number, in E.164 format.
     */
    DestinationPhoneNumber: PhoneNumber;
    /**
     * The status of the verified destination phone number.    PENDING: The phone number hasn't been verified yet.    VERIFIED: The phone number is verified and can receive messages.  
     */
    Status: VerificationStatus;
    /**
     * The time when the destination phone number was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export type VerifiedDestinationNumberInformationList = VerifiedDestinationNumberInformation[];
  export interface VerifyDestinationNumberRequest {
    /**
     * The unique identifier for the verififed destination phone number.
     */
    VerifiedDestinationNumberId: VerifiedDestinationNumberIdOrArn;
    /**
     * The verification code that was received by the verified destination phone number.
     */
    VerificationCode: VerificationCode;
  }
  export interface VerifyDestinationNumberResult {
    /**
     * The Amazon Resource Name (ARN) for the verified destination phone number.
     */
    VerifiedDestinationNumberArn: String;
    /**
     * The unique identifier for the verified destination phone number.
     */
    VerifiedDestinationNumberId: String;
    /**
     * The phone number in E.164 format.
     */
    DestinationPhoneNumber: PhoneNumber;
    /**
     * The status for being able to send messages to the phone number.
     */
    Status: VerificationStatus;
    /**
     * The time when the destination phone number was created, in UNIX epoch time format.
     */
    CreatedTimestamp: Timestamp;
  }
  export type VoiceId = "AMY"|"ASTRID"|"BIANCA"|"BRIAN"|"CAMILA"|"CARLA"|"CARMEN"|"CELINE"|"CHANTAL"|"CONCHITA"|"CRISTIANO"|"DORA"|"EMMA"|"ENRIQUE"|"EWA"|"FILIZ"|"GERAINT"|"GIORGIO"|"GWYNETH"|"HANS"|"INES"|"IVY"|"JACEK"|"JAN"|"JOANNA"|"JOEY"|"JUSTIN"|"KARL"|"KENDRA"|"KIMBERLY"|"LEA"|"LIV"|"LOTTE"|"LUCIA"|"LUPE"|"MADS"|"MAJA"|"MARLENE"|"MATHIEU"|"MATTHEW"|"MAXIM"|"MIA"|"MIGUEL"|"MIZUKI"|"NAJA"|"NICOLE"|"PENELOPE"|"RAVEENA"|"RICARDO"|"RUBEN"|"RUSSELL"|"SALLI"|"SEOYEON"|"TAKUMI"|"TATYANA"|"VICKI"|"VITORIA"|"ZEINA"|"ZHIYU"|string;
  export type VoiceMessageBody = string;
  export type VoiceMessageBodyTextType = "TEXT"|"SSML"|string;
  export type VoiceMessageOriginationIdentity = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2022-03-31"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the PinpointSMSVoiceV2 client.
   */
  export import Types = PinpointSMSVoiceV2;
}
export = PinpointSMSVoiceV2;
