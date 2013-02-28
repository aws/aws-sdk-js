/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */


AWS = {};

/**
 * Constructs a service interface and a low-level {Client}.  Use the `client`
 * property to make API calls.  Each API operation is exposed as a function on
 * the `client`.
 *
 * ### Sending a Request Using SNS
 *
 * ```js
 * svc = new AWS.SNS();
 * svc.client.OPERATION_NAME(params, function (err, data) {
 *   if (err) {
 *     console.log(err); // an error occurred
 *   } else {
 *     console.log(data); // successful response
 *   }
 * });
 * ```
 *
 * @!method constructor(options)
 *   Constructs a service interface.  The returned service will have a {client}
 *   property that provides access to the API operations.
 *   @option (see AWS.SNS.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.SNS.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.SNS.Client
 *
 */
AWS.SNS = inherit({})

/**
 * The low-level SNS client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method addPermission(params, callback)
 *   Calls the AddPermission API operation.
 *   @param params [Object]
 *     * `TopicArn` &mdash; **required** &mdash; (`String`) The ARN of
 *       the topic whose access control policy you wish to modify.
 *     * `Label` &mdash; **required** &mdash; (`String`) A unique
 *       identifier for the new policy statement.
 *     * `AWSAccountId` &mdash; **required** &mdash; (`Array<String>`)
 *       The AWS account IDs of the users (principals) who will be given
 *       access to the specified actions. The users must have AWS
 *       accounts, but do not need to be signed up for this service.
 *     * `ActionName` &mdash; **required** &mdash; (`Array<String>`) The
 *       action you want to allow for the specified principal(s).
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method confirmSubscription(params, callback)
 *   Calls the ConfirmSubscription API operation.
 *   @param params [Object]
 *     * `TopicArn` &mdash; **required** &mdash; (`String`) The ARN of
 *       the topic for which you wish to confirm a subscription.
 *     * `Token` &mdash; **required** &mdash; (`String`) Short-lived
 *       token sent to an endpoint during the Subscribe action.
 *     * `AuthenticateOnUnsubscribe` &mdash; (`String`) Indicates that
 *       you want to disallow unauthenticated unsubscribes of the
 *       subscription. If value of this parameter is "true" and the
 *       request has an AWS signature then only the topic owner and the
 *       subscription owner will be permitted to unsubscribe the
 *       endpoint. The unsubscribe action will require AWS
 *       authentication.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `SubscriptionArn` &mdash; (`String`) The ARN of the created
 *         subscription.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createTopic(params, callback)
 *   Calls the CreateTopic API operation.
 *   @param params [Object]
 *     * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *       topic you want to create. Constraints: Topic names must be made
 *       up of only uppercase and lowercase ASCII letters, numbers, and
 *       hyphens, and must be between 1 and 256 characters long.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `TopicArn` &mdash; (`String`) The Amazon Resource Name (ARN)
 *         assigned to the created topic.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteTopic(params, callback)
 *   Calls the DeleteTopic API operation.
 *   @param params [Object]
 *     * `TopicArn` &mdash; **required** &mdash; (`String`) The ARN of
 *       the topic you want to delete.
 *       http://sns.us-east-1.amazonaws.com/
 *       ?TopicArn=arn%3Aaws%3Asns%3Aus-east-1%3A123456789012%3AMy-Topic
 *       &Action=DeleteTopic &SignatureVersion=2
 *       &SignatureMethod=HmacSHA256
 *       &Timestamp=2010-03-31T12%3A00%3A00.000Z &AWSAccessKeyId=(AWS
 *       Access Key ID)
 *       &Signature=DjHBa%2BbYCKQAzctOPnLP7MbHnrHT3%2FK3kFEZjwcf9%2FU%3D
 *       fba800b9-3765-11df-8cf3-c58c53254dfb
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getSubscriptionAttributes(params, callback)
 *   Calls the GetSubscriptionAttributes API operation.
 *   @param params [Object]
 *     * `SubscriptionArn` &mdash; **required** &mdash; (`String`) The
 *       ARN of the subscription whose properties you want to get.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Attributes` &mdash; (`Object<String>`) A map of the
 *         subscription's attributes. Attributes in this map include the
 *         following: SubscriptionArn -- the subscription's ARN TopicArn --
 *         the topic ARN which the subscription is associated with Owner --
 *         the AWS account ID of the subscription's owner
 *         ConfirmationWasAuthenticated -- True if the subscription
 *         confirmation request was authenticated DeliveryPolicy -- the
 *         JSON serialization of the subscription's delivery policy
 *         EffectiveDeliveryPolicy -- the JSON serialization of the
 *         effective delivery policy which takes into the topic delivery
 *         policy and account system defaults
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getTopicAttributes(params, callback)
 *   Calls the GetTopicAttributes API operation.
 *   @param params [Object]
 *     * `TopicArn` &mdash; **required** &mdash; (`String`) The ARN of
 *       the topic whose properties you want to get.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Attributes` &mdash; (`Object<String>`) A map of the topic's
 *         attributes. Attributes in this map include the following:
 *         TopicArn -- the topic's ARN Owner -- the AWS account ID of the
 *         topic's owner Policy -- the JSON serialization of the topic's
 *         access control policy DisplayName -- the human-readable name
 *         used in the "From" field for notifications to email and
 *         email-json endpoints SubscriptionsPending -- the number of
 *         subscriptions pending confirmation on this topic
 *         SubscriptionsConfirmed -- the number of confirmed subscriptions
 *         on this topic SubscriptionsDeleted -- the number of deleted
 *         subscriptions on this topic DeliveryPolicy -- the JSON
 *         serialization of the topic's delivery policy
 *         EffectiveDeliveryPolicy -- the JSON serialization of the
 *         effective delivery policy which takes into account system
 *         defaults
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listSubscriptions(params, callback)
 *   Calls the ListSubscriptions API operation.
 *   @param params [Object]
 *     * `NextToken` &mdash; (`String`) Token returned by the previous
 *       ListSubscriptions request.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Subscriptions` &mdash; (`Array<Object>`) A list of
 *         subscriptions.
 *         * `SubscriptionArn` &mdash; (`String`) The subscription's ARN.
 *         * `Owner` &mdash; (`String`) The subscription's owner.
 *         * `Protocol` &mdash; (`String`) The subscription's protocol.
 *         * `Endpoint` &mdash; (`String`) The subscription's endpoint
 *           (format depends on the protocol).
 *         * `TopicArn` &mdash; (`String`) The ARN of the subscription's
 *           topic.
 *       * `NextToken` &mdash; (`String`) Token to pass along to the next
 *         ListSubscriptions request. This element is returned if there are
 *         more subscriptions to retrieve.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listSubscriptionsByTopic(params, callback)
 *   Calls the ListSubscriptionsByTopic API operation.
 *   @param params [Object]
 *     * `TopicArn` &mdash; **required** &mdash; (`String`) The ARN of
 *       the topic for which you wish to find subscriptions.
 *     * `NextToken` &mdash; (`String`) Token returned by the previous
 *       ListSubscriptionsByTopic request.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Subscriptions` &mdash; (`Array<Object>`) A list of
 *         subscriptions.
 *         * `SubscriptionArn` &mdash; (`String`) The subscription's ARN.
 *         * `Owner` &mdash; (`String`) The subscription's owner.
 *         * `Protocol` &mdash; (`String`) The subscription's protocol.
 *         * `Endpoint` &mdash; (`String`) The subscription's endpoint
 *           (format depends on the protocol).
 *         * `TopicArn` &mdash; (`String`) The ARN of the subscription's
 *           topic.
 *       * `NextToken` &mdash; (`String`) Token to pass along to the next
 *         ListSubscriptionsByTopic request. This element is returned if
 *         there are more subscriptions to retrieve.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listTopics(params, callback)
 *   Calls the ListTopics API operation.
 *   @param params [Object]
 *     * `NextToken` &mdash; (`String`) Token returned by the previous
 *       ListTopics request.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `Topics` &mdash; (`Array<Object>`) A list of topic ARNs.
 *         * `TopicArn` &mdash; (`String`) The topic's ARN.
 *       * `NextToken` &mdash; (`String`) Token to pass along to the next
 *         ListTopics request. This element is returned if there are
 *         additional topics to retrieve.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method publish(params, callback)
 *   Calls the Publish API operation.
 *   @param params [Object]
 *     * `TopicArn` &mdash; **required** &mdash; (`String`) The topic you
 *       want to publish to.
 *     * `Message` &mdash; **required** &mdash; (`String`) The message
 *       you want to send to the topic. Constraints: Messages must be
 *       UTF-8 encoded strings at most 8 KB in size (8192 bytes, not 8192
 *       characters).
 *     * `Subject` &mdash; (`String`) Optional parameter to be used as
 *       the "Subject" line of when the message is delivered to e-mail
 *       endpoints. This field will also be included, if present, in the
 *       standard JSON messages delivered to other endpoints.
 *       Constraints: Subjects must be ASCII text that begins with a
 *       letter, number or punctuation mark; must not include line breaks
 *       or control characters; and must be less than 100 characters
 *       long.
 *     * `MessageStructure` &mdash; (`String`) Optional parameter. It
 *       will have one valid value: "json". If this option, Message is
 *       present and set to "json", the value of Message must: be a
 *       syntactically valid JSON object. It must contain at least a top
 *       level JSON key of "default" with a value that is a string. For
 *       any other top level key that matches one of our transport
 *       protocols (e.g. "http"), then the corresponding value (if it is
 *       a string) will be used for the message published for that
 *       protocol Constraints: Keys in the JSON object that correspond to
 *       supported transport protocols must have simple JSON string
 *       values. The values will be parsed (unescaped) before they are
 *       used in outgoing messages. Typically, outbound notifications are
 *       JSON encoded (meaning, the characters will be reescaped for
 *       sending). JSON strings are UTF-8. Values have a minimum length
 *       of 0 (the empty string, "", is allowed). Values have a maximum
 *       length bounded by the overall message size (so, including
 *       multiple protocols may limit message sizes). Non-string values
 *       will cause the key to be ignored. Keys that do not correspond to
 *       supported transport protocols will be ignored. Duplicate keys
 *       are not allowed. Failure to parse or validate any key or value
 *       in the message will cause the Publish call to return an error
 *       (no partial delivery).
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `MessageId` &mdash; (`String`) Unique identifier assigned to the
 *         published message.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method removePermission(params, callback)
 *   Calls the RemovePermission API operation.
 *   @param params [Object]
 *     * `TopicArn` &mdash; **required** &mdash; (`String`) The ARN of
 *       the topic whose access control policy you wish to modify.
 *     * `Label` &mdash; **required** &mdash; (`String`) The unique label
 *       of the statement you want to remove.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method setSubscriptionAttributes(params, callback)
 *   Calls the SetSubscriptionAttributes API operation.
 *   @param params [Object]
 *     * `SubscriptionArn` &mdash; **required** &mdash; (`String`) The
 *       ARN of the subscription to modify.
 *     * `AttributeName` &mdash; **required** &mdash; (`String`) The name
 *       of the attribute you want to set. Only a subset of the
 *       subscriptions attributes are mutable. Valid values:
 *       DeliveryPolicy
 *     * `AttributeValue` &mdash; **required** &mdash; (`String`) The new
 *       value for the attribute.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method setTopicAttributes(params, callback)
 *   Calls the SetTopicAttributes API operation.
 *   @param params [Object]
 *     * `TopicArn` &mdash; **required** &mdash; (`String`) The ARN of
 *       the topic to modify.
 *     * `AttributeName` &mdash; **required** &mdash; (`String`) The name
 *       of the attribute you want to set. Only a subset of the topic's
 *       attributes are mutable. Valid values: Policy | DisplayName
 *     * `AttributeValue` &mdash; **required** &mdash; (`String`) The new
 *       value for the attribute.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method subscribe(params, callback)
 *   Calls the Subscribe API operation.
 *   @param params [Object]
 *     * `TopicArn` &mdash; **required** &mdash; (`String`) The ARN of
 *       topic you want to subscribe to.
 *     * `Protocol` &mdash; **required** &mdash; (`String`) The protocol
 *       you want to use. Supported protocols include: http -- delivery
 *       of JSON-encoded message via HTTP POST https -- delivery of
 *       JSON-encoded message via HTTPS POST email -- delivery of message
 *       via SMTP email-json -- delivery of JSON-encoded message via SMTP
 *       sqs -- delivery of JSON-encoded message to an Amazon SQS queue
 *     * `Endpoint` &mdash; **required** &mdash; (`String`) The endpoint
 *       that you want to receive notifications. Endpoints vary by
 *       protocol: For the http protocol, the endpoint is an URL
 *       beginning with "http://" For the https protocol, the endpoint is
 *       a URL beginning with "https://" For the email protocol, the
 *       endpoint is an e-mail address For the email-json protocol, the
 *       endpoint is an e-mail address For the sqs protocol, the endpoint
 *       is the ARN of an Amazon SQS queue
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `SubscriptionArn` &mdash; (`String`) The ARN of the
 *         subscription, if the service was able to create a subscription
 *         immediately (without requiring endpoint owner confirmation).
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method unsubscribe(params, callback)
 *   Calls the Unsubscribe API operation.
 *   @param params [Object]
 *     * `SubscriptionArn` &mdash; **required** &mdash; (`String`) The
 *       ARN of the subscription to be deleted.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 *
 * @!method constructor(options)
 *   Constructs a service client object.  This client has one method for
 *   each API operation.
 *   @option options [String] endpoint The endpoint URI to send requests
 *     to.  The default endpoint is built from the configured `region`.
 *     The endpoint should be a string like `'https://s3.amazonaws.com'`.
 *   @option (see AWS.Config.constructor)
 *
 * @!attribute endpoint
 *   @return [AWS.Endpoint] an Endpoint object representing'
 *     the endpoint URL for service requests.'
 *
 */
AWS.SNS.Client = inherit({});
