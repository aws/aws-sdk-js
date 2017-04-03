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
   *  Sends user input (text or speech) to Amazon Lex. Clients use this API to send requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot.   In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages:     For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?".     After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?".     After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.".     Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the message, Amazon Lex provides additional context about the message in the response that you can use to enhance client behavior, such as displaying the appropriate client user interface. Consider the following examples:     If the message is to elicit slot data, Amazon Lex returns the following context information:     x-amz-lex-dialog-state header set to ElicitSlot     x-amz-lex-intent-name header set to the intent name in the current context     x-amz-lex-slot-to-elicit header set to the slot name for which the message is eliciting information     x-amz-lex-slots header set to a map of slots configured for the intent with their current values       If the message is a confirmation prompt, the x-amz-lex-dialog-state header is set to Confirmation and the x-amz-lex-slot-to-elicit header is omitted.     If the message is a clarification prompt configured for the intent, indicating that the user intent is not understood, the x-amz-dialog-state header is set to ElicitIntent and the x-amz-slot-to-elicit header is omitted.     In addition, Amazon Lex also returns your application-specific sessionAttributes. For more information, see Managing Conversation Context. 
   */
  postContent(params: LexRuntime.Types.PostContentRequest, callback?: (err: AWSError, data: LexRuntime.Types.PostContentResponse) => void): Request<LexRuntime.Types.PostContentResponse, AWSError>;
  /**
   *  Sends user input (text or speech) to Amazon Lex. Clients use this API to send requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot.   In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages:     For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?".     After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?".     After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.".     Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the message, Amazon Lex provides additional context about the message in the response that you can use to enhance client behavior, such as displaying the appropriate client user interface. Consider the following examples:     If the message is to elicit slot data, Amazon Lex returns the following context information:     x-amz-lex-dialog-state header set to ElicitSlot     x-amz-lex-intent-name header set to the intent name in the current context     x-amz-lex-slot-to-elicit header set to the slot name for which the message is eliciting information     x-amz-lex-slots header set to a map of slots configured for the intent with their current values       If the message is a confirmation prompt, the x-amz-lex-dialog-state header is set to Confirmation and the x-amz-lex-slot-to-elicit header is omitted.     If the message is a clarification prompt configured for the intent, indicating that the user intent is not understood, the x-amz-dialog-state header is set to ElicitIntent and the x-amz-slot-to-elicit header is omitted.     In addition, Amazon Lex also returns your application-specific sessionAttributes. For more information, see Managing Conversation Context. 
   */
  postContent(callback?: (err: AWSError, data: LexRuntime.Types.PostContentResponse) => void): Request<LexRuntime.Types.PostContentResponse, AWSError>;
  /**
   * Sends user input (text-only) to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot.   In response, Amazon Lex returns the next message to convey to the user an optional responseCard to display. Consider the following example messages:     For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?"     After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?".     After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.".     Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the message, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to display the appropriate client user interface. These are the slotToElicit, dialogState, intentName, and slots fields in the response. Consider the following examples:    If the message is to elicit slot data, Amazon Lex returns the following context information:    dialogState set to ElicitSlot     intentName set to the intent name in the current context     slotToElicit set to the slot name for which the message is eliciting information     slots set to a map of slots, configured for the intent, with currently known values       If the message is a confirmation prompt, the dialogState is set to ConfirmIntent and SlotToElicit is set to null.    If the message is a clarification prompt (configured for the intent) that indicates that user intent is not understood, the dialogState is set to ElicitIntent and slotToElicit is set to null.     In addition, Amazon Lex also returns your application-specific sessionAttributes. For more information, see Managing Conversation Context. 
   */
  postText(params: LexRuntime.Types.PostTextRequest, callback?: (err: AWSError, data: LexRuntime.Types.PostTextResponse) => void): Request<LexRuntime.Types.PostTextResponse, AWSError>;
  /**
   * Sends user input (text-only) to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot.   In response, Amazon Lex returns the next message to convey to the user an optional responseCard to display. Consider the following example messages:     For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?"     After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?".     After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.".     Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the message, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to display the appropriate client user interface. These are the slotToElicit, dialogState, intentName, and slots fields in the response. Consider the following examples:    If the message is to elicit slot data, Amazon Lex returns the following context information:    dialogState set to ElicitSlot     intentName set to the intent name in the current context     slotToElicit set to the slot name for which the message is eliciting information     slots set to a map of slots, configured for the intent, with currently known values       If the message is a confirmation prompt, the dialogState is set to ConfirmIntent and SlotToElicit is set to null.    If the message is a clarification prompt (configured for the intent) that indicates that user intent is not understood, the dialogState is set to ElicitIntent and slotToElicit is set to null.     In addition, Amazon Lex also returns your application-specific sessionAttributes. For more information, see Managing Conversation Context. 
   */
  postText(callback?: (err: AWSError, data: LexRuntime.Types.PostTextResponse) => void): Request<LexRuntime.Types.PostTextResponse, AWSError>;
}
declare namespace LexRuntime {
  export type Accept = string;
  export type BlobStream = Buffer|Uint8Array|Blob|string;
  export type BotAlias = string;
  export type BotName = string;
  export interface Button {
    /**
     * Text that is visible to the user on the button.
     */
    text: ButtonTextStringWithLength;
    /**
     * The value sent to Amazon Lex when a user chooses the button. For example, consider button text "NYC." When the user chooses the button, the value sent can be "New York City."
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
     * The title of the option.
     */
    title?: StringWithLength;
    /**
     * The subtitle shown below the title.
     */
    subTitle?: StringWithLength;
    /**
     * The URL of an attachment to the response card.
     */
    attachmentLinkUrl?: StringUrlWithLength;
    /**
     * The URL of an image that is displayed to the user.
     */
    imageUrl?: StringUrlWithLength;
    /**
     * The list of options to show to the user.
     */
    buttons?: listOfButtons;
  }
  export type HttpContentType = string;
  export type IntentName = string;
  export interface PostContentRequest {
    /**
     * Name of the Amazon Lex bot.
     */
    botName: BotName;
    /**
     * Alias of the Amazon Lex bot.
     */
    botAlias: BotAlias;
    /**
     * ID of the client application user. Typically, each of your application users should have a unique ID. The application developer decides the user IDs. At runtime, each request must include the user ID. Note the following considerations:    If you want a user to start conversation on one device and continue the conversation on another device, you might choose a user-specific identifier, such as the user's login, or Amazon Cognito user ID (assuming your application is using Amazon Cognito).     If you want the same user to be able to have two independent conversations on two different devices, you might choose device-specific identifier, such as device ID, or some globally unique identifier.   
     */
    userId: UserId;
    /**
     * You pass this value in the x-amz-lex-session-attributes HTTP header. The value must be map (keys and values must be strings) that is JSON serialized and then base64 encoded.  A session represents dialog between a user and Amazon Lex. At runtime, a client application can pass contextual information, in the request to Amazon Lex. For example,    You might use session attributes to track the requestID of user requests.   In Getting Started Exercise 1, the example bot uses the price session attribute to maintain the price of flowers ordered (for example, "price":25). The code hook (Lambda function) sets this attribute based on the type of flowers ordered. For more information, see Review the Details of Information Flow.    In the BookTrip bot exercise, the bot uses the currentReservation session attribute to maintains the slot data during the in-progress conversation to book a hotel or book a car. For more information, see Details of Information Flow.     Amazon Lex passes these session attributes to the Lambda functions configured for the intent In the your Lambda function, you can use the session attributes for initialization and customization (prompts). Some examples are:     Initialization - In a pizza ordering bot, if you pass user location (for example, "Location : 111 Maple Street"), then your Lambda function might use this information to determine the closest pizzeria to place the order (and perhaps set the storeAddress slot value as well).   Personalized prompts - For example, you can configure prompts to refer to the user by name (for example, "Hey [firstName], what toppings would you like?"). You can pass the user's name as a session attribute ("firstName": "Joe") so that Amazon Lex can substitute the placeholder to provide a personalized prompt to the user ("Hey Joe, what toppings would you like?").      Amazon Lex does not persist session attributes.   If you configured a code hook for the intent, Amazon Lex passes the incoming session attributes to the Lambda function. The Lambda function must return these session attributes if you want Amazon Lex to return them to the client.   If there is no code hook configured for the intent Amazon Lex simply returns the session attributes to the client application.  
     */
    sessionAttributes?: String;
    /**
     *  You pass this values as the Content-Type HTTP header.   Indicates the audio format or text. The header value must start with one of the following prefixes:    PCM format   audio/l16; rate=16000; channels=1   audio/x-l16; sample-rate=16000; channel-count=1     Opus format   audio/x-cbr-opus-with-preamble; preamble-size=0; bit-rate=1; frame-size-milliseconds=1.1     Text format   text/plain; charset=utf-8    
     */
    contentType: HttpContentType;
    /**
     *  You pass this value as the Accept HTTP header.   The message Amazon Lex returns in the response can be either text or speech based on the Accept HTTP header value in the request.     If the value is text/plain; charset=utf-8, Amazon Lex returns text in the response.     If the value begins with audio/, Amazon Lex returns speech in the response. Amazon Lex uses Amazon Polly to generate the speech (using the configuration you specified in the Accept header). For example, if you specify audio/mpeg as the value, Amazon Lex returns speech in the MPEG format. The following are the accepted values:   audio/mpeg   audio/ogg   audio/pcm   text/plain; charset=utf-8   audio/* (defaults to mpeg)    
     */
    accept?: Accept;
    /**
     *  User input in PCM or Opus audio format or text format as described in the Content-Type HTTP header. 
     */
    inputStream: BlobStream;
  }
  export interface PostContentResponse {
    /**
     * Content type as specified in the Accept HTTP header in the request.
     */
    contentType?: HttpContentType;
    /**
     * Current user intent that Amazon Lex is aware of.
     */
    intentName?: IntentName;
    /**
     * Map of zero or more intent slots (name/value pairs) Amazon Lex detected from the user input during the conversation.
     */
    slots?: String;
    /**
     *  Map of key/value pairs representing the session-specific context information. 
     */
    sessionAttributes?: String;
    /**
     *  Message to convey to the user. It can come from the bot's configuration or a code hook (Lambda function). If the current intent is not configured with a code hook or if the code hook returned Delegate as the dialogAction.type in its response, then Amazon Lex decides the next course of action and selects an appropriate message from the bot configuration based on the current user interaction context. For example, if Amazon Lex is not able to understand the user input, it uses a clarification prompt message (For more information, see the Error Handling section in the Amazon Lex console). Another example: if the intent requires confirmation before fulfillment, then Amazon Lex uses the confirmation prompt message in the intent configuration. If the code hook returns a message, Amazon Lex passes it as-is in its response to the client. 
     */
    message?: Text;
    /**
     * Identifies the current state of the user interaction. Amazon Lex returns one of the following values as dialogState. The client can optionally use this information to customize the user interface.     ElicitIntent – Amazon Lex wants to elicit the user's intent. Consider the following examples:   For example, a user might utter an intent ("I want to order a pizza"). If Amazon Lex cannot infer the user intent from this utterance, it will return this dialog state.     ConfirmIntent – Amazon Lex is expecting a "yes" or "no" response.  For example, Amazon Lex wants user confirmation before fulfilling an intent. Instead of a simple "yes" or "no" response, a user might respond with additional information. For example, "yes, but make it a thick crust pizza" or "no, I want to order a drink." Amazon Lex can process such additional information (in these examples, update the crust type slot or change the intent from OrderPizza to OrderDrink).     ElicitSlot – Amazon Lex is expecting the value of a slot for the current intent.   For example, suppose that in the response Amazon Lex sends this message: "What size pizza would you like?". A user might reply with the slot value (e.g., "medium"). The user might also provide additional information in the response (e.g., "medium thick crust pizza"). Amazon Lex can process such additional information appropriately.     Fulfilled – Conveys that the Lambda function has successfully fulfilled the intent.     ReadyForFulfillment – Conveys that the client has to fullfill the request.     Failed – Conveys that the conversation with the user failed.   This can happen for various reasons, including that the user does not provide an appropriate response to prompts from the service (you can configure how many times Amazon Lex can prompt a user for specific information), or if the Lambda function fails to fulfill the intent.   
     */
    dialogState?: DialogState;
    /**
     *  If the dialogState value is ElicitSlot, returns the name of the slot for which Amazon Lex is eliciting a value. 
     */
    slotToElicit?: String;
    /**
     * Transcript of the voice input to the operation.
     */
    inputTranscript?: String;
    /**
     * The prompt (or statement) to convey to the user. This is based on the bot configuration and context. For example, if Amazon Lex did not understand the user intent, it sends the clarificationPrompt configured for the bot. If the intent requires confirmation before taking the fulfillment action, it sends the confirmationPrompt. Another example: Suppose that the Lambda function successfully fulfilled the intent, and sent a message to convey to the user. Then Amazon Lex sends that message in the response. 
     */
    audioStream?: BlobStream;
  }
  export interface PostTextRequest {
    /**
     * The name of the Amazon Lex bot.
     */
    botName: BotName;
    /**
     * The alias of the Amazon Lex bot.
     */
    botAlias: BotAlias;
    /**
     * The ID of the client application user. The application developer decides the user IDs. At runtime, each request must include the user ID. Typically, each of your application users should have a unique ID. Note the following considerations:     If you want a user to start a conversation on one device and continue the conversation on another device, you might choose a user-specific identifier, such as a login or Amazon Cognito user ID (assuming your application is using Amazon Cognito).     If you want the same user to be able to have two independent conversations on two different devices, you might choose a device-specific identifier, such as device ID, or some globally unique identifier.   
     */
    userId: UserId;
    /**
     *  By using session attributes, a client application can pass contextual information in the request to Amazon Lex For example,    In Getting Started Exercise 1, the example bot uses the price session attribute to maintain the price of the flowers ordered (for example, "Price":25). The code hook (the Lambda function) sets this attribute based on the type of flowers ordered. For more information, see Review the Details of Information Flow.    In the BookTrip bot exercise, the bot uses the currentReservation session attribute to maintain slot data during the in-progress conversation to book a hotel or book a car. For more information, see Details of Information Flow.    You might use the session attributes (key, value pairs) to track the requestID of user requests.    Amazon Lex simply passes these session attributes to the Lambda functions configured for the intent. In your Lambda function, you can also use the session attributes for initialization and customization (prompts and response cards). Some examples are:    Initialization - In a pizza ordering bot, if you can pass the user location as a session attribute (for example, "Location" : "111 Maple street"), then your Lambda function might use this information to determine the closest pizzeria to place the order (perhaps to set the storeAddress slot value).     Personalize prompts - For example, you can configure prompts to refer to the user name. (For example, "Hey [FirstName], what toppings would you like?"). You can pass the user name as a session attribute ("FirstName" : "Joe") so that Amazon Lex can substitute the placeholder to provide a personalize prompt to the user ("Hey Joe, what toppings would you like?").      Amazon Lex does not persist session attributes.   If you configure a code hook for the intent, Amazon Lex passes the incoming session attributes to the Lambda function. If you want Amazon Lex to return these session attributes back to the client, the Lambda function must return them.   If there is no code hook configured for the intent, Amazon Lex simply returns the session attributes back to the client application.  
     */
    sessionAttributes?: StringMap;
    /**
     * The text that the user entered (Amazon Lex interprets this text).
     */
    inputText: Text;
  }
  export interface PostTextResponse {
    /**
     * The current user intent that Amazon Lex is aware of.
     */
    intentName?: IntentName;
    /**
     *  The intent slots (name/value pairs) that Amazon Lex detected so far from the user input in the conversation. 
     */
    slots?: StringMap;
    /**
     * A map of key-value pairs representing the session-specific context information.
     */
    sessionAttributes?: StringMap;
    /**
     *  A message to convey to the user. It can come from the bot's configuration or a code hook (Lambda function). If the current intent is not configured with a code hook or the code hook returned Delegate as the dialogAction.type in its response, then Amazon Lex decides the next course of action and selects an appropriate message from the bot configuration based on the current user interaction context. For example, if Amazon Lex is not able to understand the user input, it uses a clarification prompt message (for more information, see the Error Handling section in the Amazon Lex console). Another example: if the intent requires confirmation before fulfillment, then Amazon Lex uses the confirmation prompt message in the intent configuration. If the code hook returns a message, Amazon Lex passes it as-is in its response to the client. 
     */
    message?: Text;
    /**
     *  Identifies the current state of the user interaction. Amazon Lex returns one of the following values as dialogState. The client can optionally use this information to customize the user interface.     ElicitIntent – Amazon Lex wants to elicit user intent.  For example, a user might utter an intent ("I want to order a pizza"). If Amazon Lex cannot infer the user intent from this utterance, it will return this dialogState.    ConfirmIntent – Amazon Lex is expecting a "yes" or "no" response.   For example, Amazon Lex wants user confirmation before fulfilling an intent.  Instead of a simple "yes" or "no," a user might respond with additional information. For example, "yes, but make it thick crust pizza" or "no, I want to order a drink". Amazon Lex can process such additional information (in these examples, update the crust type slot value, or change intent from OrderPizza to OrderDrink).    ElicitSlot – Amazon Lex is expecting a slot value for the current intent.  For example, suppose that in the response Amazon Lex sends this message: "What size pizza would you like?". A user might reply with the slot value (e.g., "medium"). The user might also provide additional information in the response (e.g., "medium thick crust pizza"). Amazon Lex can process such additional information appropriately.     Fulfilled – Conveys that the Lambda function configured for the intent has successfully fulfilled the intent.     ReadyForFulfillment – Conveys that the client has to fulfill the intent.     Failed – Conveys that the conversation with the user failed.   This can happen for various reasons including that the user did not provide an appropriate response to prompts from the service (you can configure how many times Amazon Lex can prompt a user for specific information), or the Lambda function failed to fulfill the intent.   
     */
    dialogState?: DialogState;
    /**
     * If the dialogState value is ElicitSlot, returns the name of the slot for which Amazon Lex is eliciting a value. 
     */
    slotToElicit?: String;
    /**
     * Represents the options that the user has to respond to the current prompt. Response Card can come from the bot configuration (in the Amazon Lex console, choose the settings button next to a slot) or from a code hook (Lambda function). 
     */
    responseCard?: ResponseCard;
  }
  export interface ResponseCard {
    /**
     * The version of the response card format.
     */
    version?: String;
    /**
     * The content type of the response.
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
