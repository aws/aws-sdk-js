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
 * ### Sending a Request Using SQS
 *
 * ```js
 * svc = new AWS.SQS();
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
 *   @option (see AWS.SQS.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.SQS.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.SQS.Client
 *
 */
AWS.SQS = inherit({})

/**
 * The low-level SQS client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method addPermission(params, callback)
 *   Calls the AddPermission API operation.
 *   @param params [Object]
 *     * `QueueUrl` &mdash; **required** &mdash; (`String`) The URL of
 *       the SQS queue to take action on.
 *     * `Label` &mdash; **required** &mdash; (`String`) The unique
 *       identification of the permission you're setting (e.g.,
 *       AliceSendMessage). Constraints: Maximum 80 characters;
 *       alphanumeric characters, hyphens (-), and underscores (_) are
 *       allowed.
 *     * `AWSAccountIds` &mdash; **required** &mdash; (`Array<String>`)
 *       The AWS account number of the principal who will be given
 *       permission. The principal must have an AWS account, but does not
 *       need to be signed up for Amazon SQS.
 *     * `Actions` &mdash; **required** &mdash; (`Array<String>`) The
 *       action the client wants to allow for the specified principal.
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
 * @!method changeMessageVisibility(params, callback)
 *   Calls the ChangeMessageVisibility API operation.
 *   @param params [Object]
 *     * `QueueUrl` &mdash; **required** &mdash; (`String`) The URL of
 *       the SQS queue to take action on.
 *     * `ReceiptHandle` &mdash; **required** &mdash; (`String`) The
 *       receipt handle associated with the message whose visibility
 *       timeout should be changed.
 *     * `VisibilityTimeout` &mdash; **required** &mdash; (`Integer`) The
 *       new value (in seconds) for the message's visibility timeout.
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
 * @!method changeMessageVisibilityBatch(params, callback)
 *   Calls the ChangeMessageVisibilityBatch API operation.
 *   @param params [Object]
 *     * `QueueUrl` &mdash; **required** &mdash; (`String`) The URL of
 *       the SQS queue to take action on.
 *     * `Entries` &mdash; **required** &mdash; (`Array<Object>`) A list
 *       of receipt handles of the messages for which the visibility
 *       timeout must be changed.
 *       * `Id` &mdash; **required** &mdash; (`String`) An identifier for
 *         this particular receipt handle. This is used to communicate
 *         the result. Note that the Ids of a batch request need to be
 *         unique within the request.
 *       * `ReceiptHandle` &mdash; **required** &mdash; (`String`) A
 *         receipt handle.
 *       * `VisibilityTimeout` &mdash; (`Integer`) The new value (in
 *         seconds) for the message's visibility timeout.
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
 *       * `Successful` &mdash; (`Array<Object>`) A list of
 *         ChangeMessageVisibilityBatchResultEntrys.
 *         * `Id` &mdash; (`String`) Represents a message whose visibility
 *           timeout has been changed successfully.
 *       * `Failed` &mdash; (`Array<Object>`) A list of
 *         BatchResultErrorEntrys.
 *         * `Id` &mdash; (`String`) The id of an entry in a batch request.
 *         * `SenderFault` &mdash; (`Boolean`) Whether the error happened
 *           due to the sender's fault.
 *         * `Code` &mdash; (`String`) An error code representing why the
 *           operation failed on this entry.
 *         * `Message` &mdash; (`String`) A message explaining why the
 *           operation failed on this entry.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createQueue(params, callback)
 *   Calls the CreateQueue API operation.
 *   @param params [Object]
 *     * `QueueName` &mdash; **required** &mdash; (`String`) The name for
 *       the queue to be created.
 *     * `Attributes` &mdash; (`Object<String>`) A map of attributes with
 *       their corresponding values.
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
 *       * `QueueUrl` &mdash; (`String`) The URL for the created SQS queue.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteMessage(params, callback)
 *   Calls the DeleteMessage API operation.
 *   @param params [Object]
 *     * `QueueUrl` &mdash; **required** &mdash; (`String`) The URL of
 *       the SQS queue to take action on.
 *     * `ReceiptHandle` &mdash; **required** &mdash; (`String`) The
 *       receipt handle associated with the message to delete.
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
 * @!method deleteMessageBatch(params, callback)
 *   Calls the DeleteMessageBatch API operation.
 *   @param params [Object]
 *     * `QueueUrl` &mdash; **required** &mdash; (`String`) The URL of
 *       the SQS queue to take action on.
 *     * `Entries` &mdash; **required** &mdash; (`Array<Object>`) A list
 *       of receipt handles for the messages to be deleted.
 *       * `Id` &mdash; **required** &mdash; (`String`) An identifier for
 *         this particular receipt handle. This is used to communicate
 *         the result. Note that the Ids of a batch request need to be
 *         unique within the request.
 *       * `ReceiptHandle` &mdash; **required** &mdash; (`String`) A
 *         receipt handle.
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
 *       * `Successful` &mdash; (`Array<Object>`) A list of
 *         DeleteMessageBatchResultEntrys.
 *         * `Id` &mdash; (`String`) Represents a successfully deleted
 *           message.
 *       * `Failed` &mdash; (`Array<Object>`) A list of
 *         BatchResultErrorEntrys.
 *         * `Id` &mdash; (`String`) The id of an entry in a batch request.
 *         * `SenderFault` &mdash; (`Boolean`) Whether the error happened
 *           due to the sender's fault.
 *         * `Code` &mdash; (`String`) An error code representing why the
 *           operation failed on this entry.
 *         * `Message` &mdash; (`String`) A message explaining why the
 *           operation failed on this entry.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteQueue(params, callback)
 *   Calls the DeleteQueue API operation.
 *   @param params [Object]
 *     * `QueueUrl` &mdash; **required** &mdash; (`String`) The URL of
 *       the SQS queue to take action on.
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
 * @!method getQueueAttributes(params, callback)
 *   Calls the GetQueueAttributes API operation.
 *   @param params [Object]
 *     * `QueueUrl` &mdash; **required** &mdash; (`String`) The URL of
 *       the SQS queue to take action on.
 *     * `AttributeNames` &mdash; (`Array<String>`) A list of attributes
 *       to retrieve information for.
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
 *       * `Attributes` &mdash; (`Object<String>`) A map of attributes to
 *         the respective values.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getQueueUrl(params, callback)
 *   Calls the GetQueueUrl API operation.
 *   @param params [Object]
 *     * `QueueName` &mdash; **required** &mdash; (`String`) The name of
 *       the queue whose URL must be fetched.
 *     * `QueueOwnerAWSAccountId` &mdash; (`String`) The AWS account
 *       number of the queue's owner.
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
 *       * `QueueUrl` &mdash; (`String`) The URL for the queue.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listQueues(params, callback)
 *   Calls the ListQueues API operation.
 *   @param params [Object]
 *     * `QueueNamePrefix` &mdash; (`String`) A string to use for
 *       filtering the list results. Only those queues whose name begins
 *       with the specified string are returned.
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
 *       * `QueueUrls` &mdash; (`Array<String>`) A list of queue URLs, up
 *         to 1000 entries.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method receiveMessage(params, callback)
 *   Calls the ReceiveMessage API operation.
 *   @param params [Object]
 *     * `QueueUrl` &mdash; **required** &mdash; (`String`) The URL of
 *       the SQS queue to take action on.
 *     * `AttributeNames` &mdash; (`Array<String>`) A list of attributes
 *       that need to be returned along with each message. The set of
 *       valid attributes are [SenderId,
 *       ApproximateFirstReceiveTimestamp, ApproximateReceiveCount,
 *       SentTimestamp].
 *     * `MaxNumberOfMessages` &mdash; (`Integer`) The maximum number of
 *       messages to return. Amazon SQS never returns more messages than
 *       this value but may return fewer. All of the messages are not
 *       necessarily returned.
 *     * `VisibilityTimeout` &mdash; (`Integer`) The duration (in
 *       seconds) that the received messages are hidden from subsequent
 *       retrieve requests after being retrieved by a ReceiveMessage
 *       request.
 *     * `WaitTimeSeconds` &mdash; (`Integer`) The duration (in seconds)
 *       for which the call will wait for a message to arrive in the
 *       queue before returning. If a message is available, the call will
 *       return sooner than WaitTimeSeconds.
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
 *       * `Messages` &mdash; (`Array<Object>`) A list of messages.
 *         * `MessageId` &mdash; (`String`)
 *         * `ReceiptHandle` &mdash; (`String`)
 *         * `MD5OfBody` &mdash; (`String`)
 *         * `Body` &mdash; (`String`)
 *         * `Attributes` &mdash; (`Object<String>`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method removePermission(params, callback)
 *   Calls the RemovePermission API operation.
 *   @param params [Object]
 *     * `QueueUrl` &mdash; **required** &mdash; (`String`) The URL of
 *       the SQS queue to take action on.
 *     * `Label` &mdash; **required** &mdash; (`String`) The
 *       identification of the permission to remove. This is the label
 *       added with the AddPermission operation.
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
 * @!method sendMessage(params, callback)
 *   Calls the SendMessage API operation.
 *   @param params [Object]
 *     * `QueueUrl` &mdash; **required** &mdash; (`String`) The URL of
 *       the SQS queue to take action on.
 *     * `MessageBody` &mdash; **required** &mdash; (`String`) The
 *       message to send.
 *     * `DelaySeconds` &mdash; (`Integer`) The number of seconds the
 *       message has to be delayed.
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
 *       * `MD5OfMessageBody` &mdash; (`String`) An MD5 digest of the
 *         non-URL-encoded message body string. This can be used to verify
 *         that SQS received the message correctly. SQS first URL decodes
 *         the message before creating the MD5 digest. For information
 *         about MD5, go to http://faqs.org/rfcs/rfc1321.html.
 *       * `MessageId` &mdash; (`String`) The message ID of the message
 *         added to the queue.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method sendMessageBatch(params, callback)
 *   Calls the SendMessageBatch API operation.
 *   @param params [Object]
 *     * `QueueUrl` &mdash; **required** &mdash; (`String`) The URL of
 *       the SQS queue to take action on.
 *     * `Entries` &mdash; **required** &mdash; (`Array<Object>`) A list
 *       of SendMessageBatchRequestEntrys.
 *       * `Id` &mdash; **required** &mdash; (`String`) An identifier for
 *         the message in this batch. This is used to communicate the
 *         result. Note that the the Ids of a batch request need to be
 *         unique within the request.
 *       * `MessageBody` &mdash; **required** &mdash; (`String`) Body of
 *         the message.
 *       * `DelaySeconds` &mdash; (`Integer`) The number of seconds for
 *         which the message has to be delayed.
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
 *       * `Successful` &mdash; (`Array<Object>`) A list of
 *         SendMessageBatchResultEntrys.
 *         * `Id` &mdash; (`String`) An identifier for the message in this
 *           batch.
 *         * `MessageId` &mdash; (`String`) An identifier for the message.
 *         * `MD5OfMessageBody` &mdash; (`String`) An MD5 digest of the
 *           non-URL-encoded message body string. This can be used to
 *           verify that SQS received the message correctly. SQS first URL
 *           decodes the message before creating the MD5 digest. For
 *           information about MD5, go to
 *           http://faqs.org/rfcs/rfc1321.html.
 *       * `Failed` &mdash; (`Array<Object>`) A list of
 *         BatchResultErrorEntrys with the error detail about each message
 *         that could not be enqueued.
 *         * `Id` &mdash; (`String`) The id of an entry in a batch request.
 *         * `SenderFault` &mdash; (`Boolean`) Whether the error happened
 *           due to the sender's fault.
 *         * `Code` &mdash; (`String`) An error code representing why the
 *           operation failed on this entry.
 *         * `Message` &mdash; (`String`) A message explaining why the
 *           operation failed on this entry.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method setQueueAttributes(params, callback)
 *   Calls the SetQueueAttributes API operation.
 *   @param params [Object]
 *     * `QueueUrl` &mdash; **required** &mdash; (`String`) The URL of
 *       the SQS queue to take action on.
 *     * `Attributes` &mdash; **required** &mdash; (`Object<String>`) A
 *       map of attributes to set.
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
AWS.SQS.Client = inherit({});
