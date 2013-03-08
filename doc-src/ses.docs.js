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
 * ### Sending a Request Using SES
 *
 * ```js
 * svc = new AWS.SES();
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
 *   @option (see AWS.SES.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.SES.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.SES.Client
 *
 */
AWS.SES = inherit({})

/**
 * The low-level SES client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method deleteIdentity(params, callback)
 *   Calls the DeleteIdentity API operation.
 *   @param params [Object]
 *     * `Identity` &mdash; **required** &mdash; (`String`) The identity
 *       to be removed from the list of identities for the AWS Account.
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
 * @!method deleteVerifiedEmailAddress(params, callback)
 *   Calls the DeleteVerifiedEmailAddress API operation.
 *   @param params [Object]
 *     * `EmailAddress` &mdash; **required** &mdash; (`String`) An email
 *       address to be removed from the list of verified addresses.
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
 * @!method getIdentityDkimAttributes(params, callback)
 *   Calls the GetIdentityDkimAttributes API operation.
 *   @param params [Object]
 *     * `Identities` &mdash; **required** &mdash; (`Array<String>`) A
 *       list of one or more verified identities - email addresses,
 *       domains, or both.
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
 *       * `DkimAttributes` &mdash; (`Object<Object>`) The DKIM attributes
 *         for an email address or a domain.
 *         * `DkimEnabled` &mdash; (`Boolean`) True if DKIM signing is
 *           enabled for email sent from the identity; false otherwise.
 *         * `DkimVerificationStatus` &mdash; (`String`) Describes whether
 *           Amazon SES has successfully verified the DKIM DNS records
 *           (tokens) published in the domain name's DNS. (This only
 *           applies to domain identities, not email address identities.)
 *         * `DkimTokens` &mdash; (`Array<String>`) A set of DNS records
 *           (tokens) that must be published in the domain name's DNS for
 *           DKIM verification to complete, and which must remain published
 *           in order for DKIM signing to succeed. The tokens are CNAME DNS
 *           records that point to DKIM public keys hosted by Amazon SES.
 *           (This only applies to domain entities, not email address
 *           identities.)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getIdentityNotificationAttributes(params, callback)
 *   Calls the GetIdentityNotificationAttributes API operation.
 *   @param params [Object]
 *     * `Identities` &mdash; **required** &mdash; (`Array<String>`) A
 *       list of one or more identities.
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
 *       * `NotificationAttributes` &mdash; (`Object<Object>`) A map of
 *         Identity to IdentityNotificationAttributes.
 *         * `BounceTopic` &mdash; (`String`) The Amazon Resource Name
 *           (ARN) of the Amazon Simple Notification Service (SNS) topic
 *           where Amazon SES will publish bounce notifications.
 *         * `ComplaintTopic` &mdash; (`String`) The Amazon Resource Name
 *           (ARN) of the Amazon Simple Notification Service (SNS) topic
 *           where Amazon SES will publish complaint notifications.
 *         * `ForwardingEnabled` &mdash; (`Boolean`) Describes whether
 *           Amazon SES will forward feedback as email. true indicates that
 *           Amazon SES will forward feedback as email, while false
 *           indicates that feedback will be published only to the
 *           specified Bounce and Complaint topics.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getIdentityVerificationAttributes(params, callback)
 *   Calls the GetIdentityVerificationAttributes API operation.
 *   @param params [Object]
 *     * `Identities` &mdash; **required** &mdash; (`Array<String>`) A
 *       list of identities.
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
 *       * `VerificationAttributes` &mdash; (`Object<Object>`) A map of
 *         Identities to IdentityVerificationAttributes objects.
 *         * `VerificationStatus` &mdash; (`String`) The verification
 *           status of the identity: "Pending", "Success", "Failed", or
 *           "TemporaryFailure".
 *         * `VerificationToken` &mdash; (`String`) The verification token
 *           for a domain identity. Null for email address identities.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getSendQuota(params, callback)
 *   Calls the GetSendQuota API operation.
 *   @param params [Object]
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
 *       * `Max24HourSend` &mdash; (`Float`) The maximum number of emails
 *         the user is allowed to send in a 24-hour interval.
 *       * `MaxSendRate` &mdash; (`Float`) The maximum number of emails the
 *         user is allowed to send per second.
 *       * `SentLast24Hours` &mdash; (`Float`) The number of emails sent
 *         during the previous 24 hours.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getSendStatistics(params, callback)
 *   Calls the GetSendStatistics API operation.
 *   @param params [Object]
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
 *       * `SendDataPoints` &mdash; (`Array<Object>`) A list of data
 *         points, each of which represents 15 minutes of activity.
 *         * `Timestamp` &mdash; (`Date`) Time of the data point.
 *         * `DeliveryAttempts` &mdash; (`Integer`) Number of emails that
 *           have been enqueued for sending.
 *         * `Bounces` &mdash; (`Integer`) Number of emails that have
 *           bounced.
 *         * `Complaints` &mdash; (`Integer`) Number of unwanted emails
 *           that were rejected by recipients.
 *         * `Rejects` &mdash; (`Integer`) Number of emails rejected by
 *           Amazon SES.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listIdentities(params, callback)
 *   Calls the ListIdentities API operation.
 *   @param params [Object]
 *     * `IdentityType` &mdash; (`String`) The type of the identities to
 *       list. Possible values are "EmailAddress" and "Domain". If this
 *       parameter is omitted, then all identities will be listed.
 *     * `NextToken` &mdash; (`String`) The token to use for pagination.
 *     * `MaxItems` &mdash; (`Integer`) The maximum number of identities
 *       per page. Possible values are 1-100 inclusive.
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
 *       * `Identities` &mdash; (`Array<String>`) A list of identities.
 *       * `NextToken` &mdash; (`String`) The token used for pagination.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listVerifiedEmailAddresses(params, callback)
 *   Calls the ListVerifiedEmailAddresses API operation.
 *   @param params [Object]
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
 *       * `VerifiedEmailAddresses` &mdash; (`Array<String>`) A list of
 *         email addresses that have been verified.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method sendEmail(params, callback)
 *   Calls the SendEmail API operation.
 *   @param params [Object]
 *     * `Source` &mdash; **required** &mdash; (`String`) The identity's
 *       email address.
 *     * `Destination` &mdash; **required** &mdash; (`Object`) The
 *       destination for this email, composed of To:, CC:, and BCC:
 *       fields.
 *       * `ToAddresses` &mdash; (`Array<String>`) The To: field(s) of
 *         the message.
 *       * `CcAddresses` &mdash; (`Array<String>`) The CC: field(s) of
 *         the message.
 *       * `BccAddresses` &mdash; (`Array<String>`) The BCC: field(s) of
 *         the message.
 *     * `Message` &mdash; **required** &mdash; (`Object`) The message to
 *       be sent.
 *       * `Subject` &mdash; **required** &mdash; (`Object`) The subject
 *         of the message: A short summary of the content, which will
 *         appear in the recipient's inbox.
 *         * `Data` &mdash; **required** &mdash; (`String`) The textual
 *           data of the content.
 *         * `Charset` &mdash; (`String`) The character set of the
 *           content.
 *       * `Body` &mdash; **required** &mdash; (`Object`) The message
 *         body.
 *         * `Text` &mdash; (`Object`) The content of the message, in
 *           text format. Use this for text-based email clients, or
 *           clients on high-latency networks (such as mobile devices).
 *           * `Data` &mdash; **required** &mdash; (`String`) The textual
 *             data of the content.
 *           * `Charset` &mdash; (`String`) The character set of the
 *             content.
 *         * `Html` &mdash; (`Object`) The content of the message, in
 *           HTML format. Use this for email clients that can process
 *           HTML. You can include clickable links, formatted text, and
 *           much more in an HTML message.
 *           * `Data` &mdash; **required** &mdash; (`String`) The textual
 *             data of the content.
 *           * `Charset` &mdash; (`String`) The character set of the
 *             content.
 *     * `ReplyToAddresses` &mdash; (`Array<String>`) The reply-to email
 *       address(es) for the message. If the recipient replies to the
 *       message, each reply-to address will receive the reply.
 *     * `ReturnPath` &mdash; (`String`) The email address to which
 *       bounce notifications are to be forwarded. If the message cannot
 *       be delivered to the recipient, then an error message will be
 *       returned from the recipient's ISP; this message will then be
 *       forwarded to the email address specified by the ReturnPath
 *       parameter.
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
 *       * `MessageId` &mdash; (`String`) The unique message identifier
 *         returned from the SendEmail action.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method sendRawEmail(params, callback)
 *   Calls the SendRawEmail API operation.
 *   @param params [Object]
 *     * `Source` &mdash; (`String`) The identity's email address. If you
 *       specify the Source parameter, then bounce notifications and
 *       complaints will be sent to this email address. This takes
 *       precedence over any Return-Path header that you might include in
 *       the raw text of the message.
 *     * `Destinations` &mdash; (`Array<String>`) A list of destinations
 *       for the message.
 *     * `RawMessage` &mdash; **required** &mdash; (`Object`) The raw
 *       text of the message. The client is responsible for ensuring the
 *       following: Message must contain a header and a body, separated
 *       by a blank line. All required header fields must be present.
 *       Each part of a multipart MIME message must be formatted
 *       properly. MIME content types must be among those supported by
 *       Amazon SES. Refer to the Amazon SES Developer Guide for more
 *       details. Content must be base64-encoded, if MIME requires it.
 *       * `Data` &mdash; **required** &mdash; (`Base64 Encoded String`)
 *         The raw data of the message. The client must ensure that the
 *         message format complies with Internet email standards
 *         regarding email header fields, MIME types, MIME encoding, and
 *         base64 encoding (if necessary). For more information, go to
 *         theAmazon SES Developer Guide.
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
 *       * `MessageId` &mdash; (`String`) The unique message identifier
 *         returned from the SendRawEmail action.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method setIdentityDkimEnabled(params, callback)
 *   Calls the SetIdentityDkimEnabled API operation.
 *   @param params [Object]
 *     * `Identity` &mdash; **required** &mdash; (`String`) The identity
 *       for which DKIM signing should be enabled or disabled.
 *     * `DkimEnabled` &mdash; **required** &mdash; (`Boolean`) Sets
 *       whether DKIM signing is enabled for an identity. Set to true to
 *       enable DKIM signing for this identity; false to disable it.
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
 * @!method setIdentityFeedbackForwardingEnabled(params, callback)
 *   Calls the SetIdentityFeedbackForwardingEnabled API operation.
 *   @param params [Object]
 *     * `Identity` &mdash; **required** &mdash; (`String`) The identity
 *       for which to set feedback notification forwarding. Examples:
 *       user@example.com, example.com.
 *     * `ForwardingEnabled` &mdash; **required** &mdash; (`Boolean`)
 *       Sets whether Amazon SES will forward feedback notifications as
 *       email. true specifies that Amazon SES will forward feedback
 *       notifications as email, in addition to any Amazon SNS topic
 *       publishing otherwise specified. false specifies that Amazon SES
 *       will publish feedback notifications only through Amazon SNS.
 *       This value can only be set to false when topics are specified
 *       for both Bounce and Complaint topic types.
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
 * @!method setIdentityNotificationTopic(params, callback)
 *   Calls the SetIdentityNotificationTopic API operation.
 *   @param params [Object]
 *     * `Identity` &mdash; **required** &mdash; (`String`) The identity
 *       for which the topic will be set. Examples: user@example.com,
 *       example.com.
 *     * `NotificationType` &mdash; **required** &mdash; (`String`) The
 *       type of feedback notifications that will be published to the
 *       specified topic.
 *     * `SnsTopic` &mdash; (`String`) The Amazon Resource Name (ARN) of
 *       the Amazon Simple Notification Service (Amazon SNS) topic. If
 *       the parameter is ommited from the request or a null value is
 *       passed, the topic is cleared and publishing is disabled.
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
 * @!method verifyDomainDkim(params, callback)
 *   Calls the VerifyDomainDkim API operation.
 *   @param params [Object]
 *     * `Domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain to be verified for Easy DKIM signing.
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
 *       * `DkimTokens` &mdash; (`Array<String>`) A set of DNS records
 *         (tokens) that must be published in the domain name's DNS for
 *         DKIM verification to complete, and which must remain published
 *         in order for DKIM signing to succeed. The tokens are CNAME DNS
 *         records pointing to DKIM public keys hosted by Amazon SES.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method verifyDomainIdentity(params, callback)
 *   Calls the VerifyDomainIdentity API operation.
 *   @param params [Object]
 *     * `Domain` &mdash; **required** &mdash; (`String`) The domain to
 *       be verified.
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
 *       * `VerificationToken` &mdash; (`String`) A TXT record that must be
 *         placed in the DNS settings for the domain, in order to complete
 *         domain verification.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method verifyEmailAddress(params, callback)
 *   Calls the VerifyEmailAddress API operation.
 *   @param params [Object]
 *     * `EmailAddress` &mdash; **required** &mdash; (`String`) The email
 *       address to be verified.
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
 * @!method verifyEmailIdentity(params, callback)
 *   Calls the VerifyEmailIdentity API operation.
 *   @param params [Object]
 *     * `EmailAddress` &mdash; **required** &mdash; (`String`) The email
 *       address to be verified.
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
AWS.SES.Client = inherit({});
