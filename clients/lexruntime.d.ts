import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class LexRuntime extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: LexRuntime.Types.ClientConfiguration)
  config: Config & LexRuntime.Types.ClientConfiguration;
  /**
   * Sends user input text to Amazon Lex at runtime. Amazon Lex uses the machine learning model that the service built for the application to interpret user input.   In response, Amazon Lex returns the next message to convey to the user (based on the context of the user interaction) and whether to expect a user response to the message (dialogState). For example, consider the following response messages:    "What pizza toppings would you like?" – In this case, the dialogState would be ElicitSlot (that is, a user response is expected).    "Your order has been placed." – In this case, Amazon Lex returns one of the following dialogState values depending on how the intent fulfillment is configured (see fulfillmentActivity in CreateIntent):     FulFilled – The intent fulfillment is configured through a Lambda function.     ReadyForFulfilment – The intent's fulfillmentActivity is to simply return the intent data back to the client application.     
   */
  postText(params: LexRuntime.Types.PostTextRequest, callback?: (err: AWSError, data: LexRuntime.Types.PostTextResponse) => void): Request<LexRuntime.Types.PostTextResponse, AWSError>;
  /**
   * Sends user input text to Amazon Lex at runtime. Amazon Lex uses the machine learning model that the service built for the application to interpret user input.   In response, Amazon Lex returns the next message to convey to the user (based on the context of the user interaction) and whether to expect a user response to the message (dialogState). For example, consider the following response messages:    "What pizza toppings would you like?" – In this case, the dialogState would be ElicitSlot (that is, a user response is expected).    "Your order has been placed." – In this case, Amazon Lex returns one of the following dialogState values depending on how the intent fulfillment is configured (see fulfillmentActivity in CreateIntent):     FulFilled – The intent fulfillment is configured through a Lambda function.     ReadyForFulfilment – The intent's fulfillmentActivity is to simply return the intent data back to the client application.     
   */
  postText(callback?: (err: AWSError, data: LexRuntime.Types.PostTextResponse) => void): Request<LexRuntime.Types.PostTextResponse, AWSError>;
}
declare namespace LexRuntime {
  export type BotAlias = string;
  export type BotName = string;
  export interface Button {
    /**
     * Text visible to the user on the button.
     */
    text: ButtonTextStringWithLength;
    /**
     * Value sent to Amazon Lex when user clicks the button. For example, consider button text "NYC". When the user clicks the button, the value sent can be "New York City".
     */
    value: ButtonValueStringWithLength;
  }
  export type ButtonTextStringWithLength = string;
  export type ButtonValueStringWithLength = string;
  export type ContentType = "application/vnd.amazonaws.card.generic"|string;
  export type DialogState = "ElicitIntent"|"ConfirmIntent"|"ElicitSlot"|"Fulfilled"|"ReadyForFulfillment"|"Failed"|string;
  export type ErrorMessage = string;
  export interface GenericAttachment {
    /**
     * Title of the option.
     */
    title?: StringWithLength;
    /**
     * Subtitle shown below the title.
     */
    subTitle?: StringWithLength;
    attachmentLinkUrl?: StringUrlWithLength;
    /**
     * URL of an image that is displayed to the user.
     */
    imageUrl?: StringUrlWithLength;
    /**
     * List of options to show to the user.
     */
    buttons?: listOfButtons;
  }
  export type IntentName = string;
  export interface PostTextRequest {
    /**
     * Name of the Amazon Lex bot.
     */
    botName: BotName;
    /**
     * Alias of the Amazon Lex bot.
     */
    botAlias: BotAlias;
    /**
     * User ID of your client application. Typically, each of your application users should have a unique ID. Note the following considerations:     If you want a user to start a conversation on one mobile device and continue the conversation on another device, you might choose a user-specific identifier, such as a login or Amazon Cognito user ID (assuming your application is using Amazon Cognito).     If you want the same user to be able to have two independent conversations on two different devices, you might choose a device-specific identifier, such as device ID, or some globally unique identifier.   
     */
    userId: UserId;
    /**
     *  A session represents the dialog between a user and Amazon Lex. At runtime, a client application can pass contextual information (session attributes) in the request. For example, "FirstName" : "Joe". Amazon Lex passes these session attributes to the AWS Lambda functions configured for the intent (see dialogCodeHook and fulfillmentActivity.codeHook in CreateIntent).  In your Lambda function, you can use the session attributes for customization. Some examples are:    In a pizza ordering application, if you can pass user location as a session attribute (for example, "Location" : "111 Maple street"), your Lambda function might use this information to determine the closest pizzeria to place the order.     Use session attributes to personalize prompts. For example, you pass in user name as a session attribute ("FirstName" : "Joe"), you might configure subsequent prompts to refer to this attribute, as $session.FirstName". At runtime, Amazon Lex substitutes a real value when it generates a prompt, such as "Hello Joe, what would you like to order?"      Amazon Lex does not persist session attributes.   If the intent is configured without a Lambda function to process the intent (that is, the client application to process the intent), Amazon Lex simply returns the session attributes back to the client application.   If the intent is configured with a Lambda function to process the intent, Amazon Lex passes the incoming session attributes to the Lambda function. The Lambda function must return these session attributes if you want Amazon Lex to return them back to the client.  
     */
    sessionAttributes?: StringMap;
    /**
     * Text user entered (Amazon Lex interprets this text).
     */
    inputText: Text;
  }
  export interface PostTextResponse {
    /**
     * Intent Amazon Lex inferred from the user input text. This is one of the intents configured for the bot. 
     */
    intentName?: IntentName;
    /**
     *  Intent slots (name/value pairs) Amazon Lex detected so far from the user input in the conversation. 
     */
    slots?: StringMap;
    /**
     * Map of key value pairs representing the session specific context information.
     */
    sessionAttributes?: StringMap;
    /**
     *  Prompt (or statement) to convey to the user. This is based on the application configuration and context. For example, if Amazon Lex did not understand the user intent, it sends the clarificationPrompt configured for the application. In another example, if the intent requires confirmation before taking the fulfillment action, it sends the confirmationPrompt. Suppose the Lambda function successfully fulfilled the intent, and sent a message to convey to the user. In that situation, Amazon Lex sends that message in the response. 
     */
    message?: Text;
    /**
     * Represents the message type to be conveyed to the user. For example:     ElicitIntent – Amazon Lex wants to elicit user intent. For example, Amazon Lex did not understand the first utterances such as "I want to order pizza", which indicates the OrderPizza intent. If Amazon Lex doesn't understand the intent, it returns this dialogState. Another example is when your intent is configured with a follow up prompt. For example, after OrderPizza intent is fulfilled, the intent might have a follow up prompt such as " Do you want to order a drink or desert?" In this case, Amazon Lex returns this dialogState.     ConfirmIntent – Amazon Lex is expecting a yes/no response from the user indicating whether to go ahead and fulfill the intent (for example, OK to go ahead and order the pizza). In addition to a yes/no reply, the user might provide a response with additional slot information (either new slot information or changes to the existing slot values). For example, "Yes, but change to thick crust." Amazon Lex understands the additional information and updates the intent slots accordingly.   Consider another example. Before fulfilling an order, your application might prompt for confirmation such as "Do you want to place this pizza order?" A user might reply with "No, I want to order a drink." Amazon Lex recognizes the new OrderDrink intent.     ElicitSlot – Amazon Lex is expecting a value of a slot for the current intent. For example, suppose Amazon Lex asks, "What size pizza would you like?" A user might reply with "Medium pepperoni pizza." Amazon Lex recognizes the size and the topping as the two separate slot values.     Fulfilled – Conveys that the Lambda function has successfully fulfilled the intent. If Lambda function returns a statement/message to convey the fulfillment result, Amazon Lex passes this string to the client. If not, Amazon Lex looks for conclusionStatement that you configured for the intent.   If both the Lambda function statement and the conclusionStatement are missing, Amazon Lex throws a bad request exception.     ReadyForFulfillment – conveys that the client has to do the fulfillment work for the intent. This is the case when the current intent is configured with ReturnIntent as the fulfillmentActivity , where Amazon Lex returns this state to client.     Failed – Conversation with the user failed. Some of the reasons for this dialogState are: after the configured number of attempts the user didn't provide an appropriate response, or the Lambda function failed to fulfill an intent.   
     */
    dialogState?: DialogState;
    /**
     * If dialogState value is ElicitSlot, returns the name of the slot for which Amazon Lex is eliciting a value. 
     */
    slotToElicit?: String;
    /**
     * Represents the options that the user has to respond to the current prompt. Amazon Lex sends this in the response only if the dialogState value indicates that a user response is expected. 
     */
    responseCard?: ResponseCard;
  }
  export interface ResponseCard {
    /**
     * Version of response card format.
     */
    version?: String;
    /**
     * Content type of the response.
     */
    contentType?: ContentType;
    /**
     * An array of attachment objects representing options.
     */
    genericAttachments?: genericAttachmentList;
  }
  export type String = string;
  export type StringMap = {[key: string]: String};
  export type StringUrlWithLength = string;
  export type StringWithLength = string;
  export type Text = string;
  export type UserId = string;
  export type genericAttachmentList = GenericAttachment[];
  export type listOfButtons = Button[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2016-11-28"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the LexRuntime client.
   */
  export import Types = LexRuntime;
}
export = LexRuntime;
