import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class Connect extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Connect.Types.ClientConfiguration)
  config: Config & Connect.Types.ClientConfiguration;
  /**
   * The StartOutboundVoiceContact operation initiates a contact flow to place an outbound call to a customer. There is a throttling limit placed on usage of the API that includes a RateLimit of 2 per second, and a BurstLimit of 5 per second. If you are using an IAM account, it must have permissions to the connect:StartOutboundVoiceContact action.
   */
  startOutboundVoiceContact(params: Connect.Types.StartOutboundVoiceContactRequest, callback?: (err: AWSError, data: Connect.Types.StartOutboundVoiceContactResponse) => void): Request<Connect.Types.StartOutboundVoiceContactResponse, AWSError>;
  /**
   * The StartOutboundVoiceContact operation initiates a contact flow to place an outbound call to a customer. There is a throttling limit placed on usage of the API that includes a RateLimit of 2 per second, and a BurstLimit of 5 per second. If you are using an IAM account, it must have permissions to the connect:StartOutboundVoiceContact action.
   */
  startOutboundVoiceContact(callback?: (err: AWSError, data: Connect.Types.StartOutboundVoiceContactResponse) => void): Request<Connect.Types.StartOutboundVoiceContactResponse, AWSError>;
  /**
   * Ends the contact initiated by the StartOutboundVoiceContact operation. If you are using an IAM account, it must have permissions to the connect:StopContact operation.
   */
  stopContact(params: Connect.Types.StopContactRequest, callback?: (err: AWSError, data: Connect.Types.StopContactResponse) => void): Request<Connect.Types.StopContactResponse, AWSError>;
  /**
   * Ends the contact initiated by the StartOutboundVoiceContact operation. If you are using an IAM account, it must have permissions to the connect:StopContact operation.
   */
  stopContact(callback?: (err: AWSError, data: Connect.Types.StopContactResponse) => void): Request<Connect.Types.StopContactResponse, AWSError>;
}
declare namespace Connect {
  export type AttributeName = string;
  export type AttributeValue = string;
  export type Attributes = {[key: string]: AttributeValue};
  export type ClientToken = string;
  export type ContactFlowId = string;
  export type ContactId = string;
  export type InstanceId = string;
  export type Message = string;
  export type PhoneNumber = string;
  export type QueueId = string;
  export interface StartOutboundVoiceContactRequest {
    /**
     * The phone number, in E.164 format, of the customer to call with the outbound contact.
     */
    DestinationPhoneNumber: PhoneNumber;
    /**
     * The identifier for the contact flow to execute for the outbound call. This is a GUID value only. Amazon Resource Name (ARN) values are not supported. To find the ContactFlowId, open the contact flow to use in the Amazon Connect contact flow designer. The ID for the contact flow is displayed in the address bar as part of the URL. For example, an address displayed when you open a contact flow is similar to the following: https://myconnectinstance.awsapps.com/connect/contact-flows/edit?id=arn:aws:connect:us-east-1:361814831152:instance/2fb42df9-78a2-4b99-b484-f5cf80dc300c/contact-flow/b0b8f2dd-ed1b-4c44-af36-ce189a178181 . At the end of the URL, you see contact-flow/b0b8f2dd-ed1b-4c44-af36-ce189a178181. The ContactFlowID for this contact flow is  b0b8f2dd-ed1b-4c44-af36-ce189a178181 . Make sure to include only the GUID after the "contact-flow/" in your requests.
     */
    ContactFlowId: ContactFlowId;
    /**
     * The identifier for your Amazon Connect instance. To find the InstanceId value for your Amazon Connect instance, open the Amazon Connect console. Select the instance alias of the instance and view the instance ID in the Overview section. For example, the instance ID is the set of characters at the end of the instance ARN, after "instance/", such as 10a4c4eb-f57e-4d4c-b602-bf39176ced07.
     */
    InstanceId: InstanceId;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned. If the contact is disconnected, a new contact is started.
     */
    ClientToken?: ClientToken;
    /**
     * The phone number, in E.164 format, associated with your Amazon Connect instance to use to place the outbound call.
     */
    SourcePhoneNumber?: PhoneNumber;
    /**
     * The queue to which to add the call. If you specify a queue, the phone displayed for caller ID is the phone number defined for the queue. If you do not specify a queue, the queue used is the queue defined in the contact flow specified by ContactFlowId. To find the QueueId, open the queue to use in the Amazon Connect queue editor. The ID for the queue is displayed in the address bar as part of the URL. For example, the QueueId value is the set of characters at the end of the URL, after "queue/", such as aeg40574-2d01-51c3-73d6-bf8624d2168c.
     */
    QueueId?: QueueId;
    /**
     * Specify a custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes. There can be up to 32,768 UTF-8 bytes across all key-value pairs. Attribute keys can include only alphanumeric, dash, and underscore characters. For example, to play a greeting when the customer answers the call, you can pass the customer name in attributes similar to the following:
     */
    Attributes?: Attributes;
  }
  export interface StartOutboundVoiceContactResponse {
    /**
     * The unique identifier of this contact within your Amazon Connect instance.
     */
    ContactId?: ContactId;
  }
  export interface StopContactRequest {
    /**
     * The unique identifier of the contact to end. This is the ContactId value returned from the StartOutboundVoiceContact operation.
     */
    ContactId: ContactId;
    /**
     * The identifier of the Amazon Connect instance in which the contact is active.
     */
    InstanceId: InstanceId;
  }
  export interface StopContactResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2017-08-08"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Connect client.
   */
  export import Types = Connect;
}
export = Connect;
