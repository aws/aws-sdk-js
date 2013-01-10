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
 * Constructs a service interface and a low-level {Client}.  Use the +client+
 * property to make API calls.  Each API operation is exposed as a function on
 * the +client+.
 *
 * === Sending a Request Using SQS
 *
 *   svc = new AWS.SQS();
 *   svc.client.OPERATION_NAME(params, function (err, data) {
 *     if (err) {
 *       console.log(err); // an error occurred
 *     } else {
 *       console.log(data); // successful response
 *     }
 *   });
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
 *   The AddPermission action adds a permission to a queue for a specific
 *   principal. This allows for sharing access to the queue.
 *   @param params [Object]
 *     * +QueueUrl+ - (*required*, <tt>String</tt>) The URL of the SQS
 *       queue to take action on.
 *     * +Label+ - (*required*, <tt>String</tt>) The unique
 *       identification of the permission you're setting (e.g.,
 *       AliceSendMessage). Constraints: Maximum 80 characters;
 *       alphanumeric characters, hyphens (-), and underscores (_) are
 *       allowed.
 *     * +AWSAccountIds+ - (*required*, <tt>Array<String></tt>) The AWS
 *       account number of the principal who will be given permission.
 *       The principal must have an AWS account, but does not need to be
 *       signed up for Amazon SQS.
 *     * +Actions+ - (*required*, <tt>Array<String></tt>) The action the
 *       client wants to allow for the specified principal.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method changeMessageVisibility(params, callback)
 *   The ChangeMessageVisibility action changes the visibility timeout of
 *   a specified message in a queue to a new value. The maximum allowed
 *   timeout value you can set the value to is 12 hours. This means you
 *   can't extend the timeout of a message in an existing queue to more
 *   than a total visibility timeout of 12 hours. (For more information
 *   visibility timeout, see Visibility Timeout in the Amazon SQS
 *   Developer Guide.)
 *   @param params [Object]
 *     * +QueueUrl+ - (*required*, <tt>String</tt>) The URL of the SQS
 *       queue to take action on.
 *     * +ReceiptHandle+ - (*required*, <tt>String</tt>) The receipt
 *       handle associated with the message whose visibility timeout
 *       should be changed.
 *     * +VisibilityTimeout+ - (*required*, <tt>Integer</tt>) The new
 *       value (in seconds) for the message's visibility timeout.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method changeMessageVisibilityBatch(params, callback)
 *   This is a batch version of ChangeMessageVisibility. It takes
 *   multiple receipt handles and performs the operation on each of the
 *   them. The result of the operation on each message is reported
 *   individually in the response.
 *   @param params [Object]
 *     * +QueueUrl+ - (*required*, <tt>String</tt>) The URL of the SQS
 *       queue to take action on.
 *     * +Entries+ - (*required*, <tt>Array<Object></tt>) A list of
 *       receipt handles of the messages for which the visibility timeout
 *       must be changed.
 *       * +Id+ - (*required*, <tt>String</tt>) An identifier for this
 *         particular receipt handle. This is used to communicate the
 *         result. Note that the Ids of a batch request need to be unique
 *         within the request.
 *       * +ReceiptHandle+ - (*required*, <tt>String</tt>) A receipt
 *         handle.
 *       * +VisibilityTimeout+ - (<tt>Integer</tt>) The new value (in
 *         seconds) for the message's visibility timeout.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Successful+ - (<tt>Array<Object></tt>) A list of
 *         ChangeMessageVisibilityBatchResultEntrys.
 *         * +Id+ - (<tt>String</tt>) Represents a message
 *           whose visibility timeout has been changed successfully.
 *       * +Failed+ - (<tt>Array<Object></tt>) A list of
 *         BatchResultErrorEntrys.
 *         * +Id+ - (<tt>String</tt>) The id of an entry in a
 *           batch request.
 *         * +SenderFault+ - (<tt>Boolean</tt>) Whether the
 *           error happened due to the sender's fault.
 *         * +Code+ - (<tt>String</tt>) An error code
 *           representing why the operation failed on this entry.
 *         * +Message+ - (<tt>String</tt>) A message explaining why the
 *           operation failed on this entry.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createQueue(params, callback)
 *   The CreateQueue action creates a new queue, or returns the URL of an
 *   existing one. When you request CreateQueue, you provide a name for
 *   the queue. To successfully create a new queue, you must provide a
 *   name that is unique within the scope of your own queues.
 *   @param params [Object]
 *     * +QueueName+ - (*required*, <tt>String</tt>) The name for the
 *       queue to be created.
 *     * +attributes+ - (<tt>Object<String></tt>) A map of attributes
 *       with their corresponding values.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +QueueUrl+ - (<tt>String</tt>) The URL for the created SQS
 *         queue.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteMessage(params, callback)
 *   The DeleteMessage action unconditionally removes the specified
 *   message from the specified queue. Even if the message is locked by
 *   another reader due to the visibility timeout setting, it is still
 *   deleted from the queue.
 *   @param params [Object]
 *     * +QueueUrl+ - (*required*, <tt>String</tt>) The URL of the SQS
 *       queue to take action on.
 *     * +ReceiptHandle+ - (*required*, <tt>String</tt>) The receipt
 *       handle associated with the message to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteMessageBatch(params, callback)
 *   This is a batch version of DeleteMessage. It takes multiple receipt
 *   handles and deletes each one of the messages. The result of the
 *   delete operation on each message is reported individually in the
 *   response.
 *   @param params [Object]
 *     * +QueueUrl+ - (*required*, <tt>String</tt>) The URL of the SQS
 *       queue to take action on.
 *     * +Entries+ - (*required*, <tt>Array<Object></tt>) A list of
 *       receipt handles for the messages to be deleted.
 *       * +Id+ - (*required*, <tt>String</tt>) An identifier for this
 *         particular receipt handle. This is used to communicate the
 *         result. Note that the Ids of a batch request need to be unique
 *         within the request.
 *       * +ReceiptHandle+ - (*required*, <tt>String</tt>) A receipt
 *         handle.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Successful+ - (<tt>Array<Object></tt>) A list of
 *         DeleteMessageBatchResultEntrys.
 *         * +Id+ - (<tt>String</tt>) Represents a successfully
 *           deleted message.
 *       * +Failed+ - (<tt>Array<Object></tt>) A list of
 *         BatchResultErrorEntrys.
 *         * +Id+ - (<tt>String</tt>) The id of an entry in a
 *           batch request.
 *         * +SenderFault+ - (<tt>Boolean</tt>) Whether the
 *           error happened due to the sender's fault.
 *         * +Code+ - (<tt>String</tt>) An error code
 *           representing why the operation failed on this entry.
 *         * +Message+ - (<tt>String</tt>) A message explaining why the
 *           operation failed on this entry.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteQueue(params, callback)
 *   This action unconditionally deletes the queue specified by the queue
 *   URL. Use this operation WITH CARE! The queue is deleted even if it
 *   is NOT empty.
 *   @param params [Object]
 *     * +QueueUrl+ - (*required*, <tt>String</tt>) The URL of the SQS
 *       queue to take action on.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getQueueAttributes(params, callback)
 *   Gets attributes for the specified queue. The following attributes
 *   are supported: All - returns all values. ApproximateNumberOfMessages
 *   - returns the approximate number of visible messages in a queue. For
 *   more information, see Resources Required to Process Messages in the
 *   Amazon SQS Developer Guide. ApproximateNumberOfMessagesNotVisible -
 *   returns the approximate number of messages that are not timed-out
 *   and not deleted. For more information, see Resources Required to
 *   Process Messages in the Amazon SQS Developer Guide.
 *   VisibilityTimeout - returns the visibility timeout for the queue.
 *   For more information about visibility timeout, see Visibility
 *   Timeout in the Amazon SQS Developer Guide. CreatedTimestamp -
 *   returns the time when the queue was created (epoch time in seconds).
 *   LastModifiedTimestamp - returns the time when the queue was last
 *   changed (epoch time in seconds). Policy - returns the queue's
 *   policy. MaximumMessageSize - returns the limit of how many bytes a
 *   message can contain before Amazon SQS rejects it.
 *   MessageRetentionPeriod - returns the number of seconds Amazon SQS
 *   retains a message. QueueArn - returns the queue's Amazon resource
 *   name (ARN). ApproximateNumberOfMessagesDelayed - returns the
 *   approximate number of messages that are pending to be added to the
 *   queue. DelaySeconds - returns the default delay on the queue in
 *   seconds. ReceiveMessageWaitTimeSeconds - returns the time for which
 *   a ReceiveMessage call will wait for a message to arrive.
 *   @param params [Object]
 *     * +QueueUrl+ - (*required*, <tt>String</tt>) The URL of the SQS
 *       queue to take action on.
 *     * +attributeNames+ - (<tt>Array<String></tt>) A list of attributes
 *       to retrieve information for.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +attributes+ - (<tt>Object<String></tt>) A map of attributes to
 *         the respective values.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getQueueUrl(params, callback)
 *   The GetQueueUrl action returns the URL of an existing queue.
 *   @param params [Object]
 *     * +QueueName+ - (*required*, <tt>String</tt>) The name of the
 *       queue whose URL must be fetched.
 *     * +QueueOwnerAWSAccountId+ - (<tt>String</tt>) The AWS account
 *       number of the queue's owner.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +QueueUrl+ - (<tt>String</tt>) The URL for the queue.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listQueues(params, callback)
 *   Returns a list of your queues.
 *   @param params [Object]
 *     * +QueueNamePrefix+ - (<tt>String</tt>) A string to use for
 *       filtering the list results. Only those queues whose name begins
 *       with the specified string are returned.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +queueUrls+ - (<tt>Array<String></tt>) A list of queue URLs, up
 *         to 1000 entries.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method receiveMessage(params, callback)
 *   Retrieves one or more messages from the specified queue, including
 *   the message body and message ID of each message. Messages returned
 *   by this action stay in the queue until you delete them. However,
 *   once a message is returned to a ReceiveMessage request, it is not
 *   returned on subsequent ReceiveMessage requests for the duration of
 *   the VisibilityTimeout. If you do not specify a VisibilityTimeout in
 *   the request, the overall visibility timeout for the queue is used
 *   for the returned messages.
 *   @param params [Object]
 *     * +QueueUrl+ - (*required*, <tt>String</tt>) The URL of the SQS
 *       queue to take action on.
 *     * +AttributeNames+ - (<tt>Array<String></tt>) A list of attributes
 *       that need to be returned along with each message. The set of
 *       valid attributes are [SenderId,
 *       ApproximateFirstReceiveTimestamp, ApproximateReceiveCount,
 *       SentTimestamp].
 *     * +MaxNumberOfMessages+ - (<tt>Integer</tt>) The maximum number of
 *       messages to return. Amazon SQS never returns more messages than
 *       this value but may return fewer.
 *     * +VisibilityTimeout+ - (<tt>Integer</tt>) The duration (in
 *       seconds) that the received messages are hidden from subsequent
 *       retrieve requests after being retrieved by a ReceiveMessage
 *       request.
 *     * +WaitTimeSeconds+ - (<tt>Integer</tt>) The duration (in seconds)
 *       for which the call will wait for a message to arrive in the
 *       queue before returning. If a message is available, the call will
 *       return sooner than WaitTimeSeconds.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +messages+ - (<tt>Array<Object></tt>) A list of messages.
 *         * +MessageId+ - (<tt>String</tt>)
 *         * +ReceiptHandle+ - (<tt>String</tt>)
 *         * +MD5OfBody+ - (<tt>String</tt>)
 *         * +Body+ - (<tt>String</tt>)
 *         * +Attributes+ - (<tt>Object<String></tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method removePermission(params, callback)
 *   The RemovePermission action revokes any permissions in the queue
 *   policy that matches the specified Label parameter. Only the owner of
 *   the queue can remove permissions.
 *   @param params [Object]
 *     * +QueueUrl+ - (*required*, <tt>String</tt>) The URL of the SQS
 *       queue to take action on.
 *     * +Label+ - (*required*, <tt>String</tt>) The identification of
 *       the permission to remove. This is the label added with the
 *       AddPermission operation.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method sendMessage(params, callback)
 *   The SendMessage action delivers a message to the specified queue.
 *   @param params [Object]
 *     * +QueueUrl+ - (*required*, <tt>String</tt>) The URL of the SQS
 *       queue to take action on.
 *     * +MessageBody+ - (*required*, <tt>String</tt>) The message to
 *       send.
 *     * +DelaySeconds+ - (<tt>Integer</tt>) The number of seconds the
 *       message has to be delayed.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +MD5OfMessageBody+ - (<tt>String</tt>) An MD5 digest of the
 *         non-URL-encoded message body string. This can be used to verify
 *         that SQS received the message correctly. SQS first URL decodes
 *         the message before creating the MD5 digest. For information
 *         about MD5, go to http://faqs.org/rfcs/rfc1321.html.
 *       * +MessageId+ - (<tt>String</tt>) The message ID of the message
 *         added to the queue.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method sendMessageBatch(params, callback)
 *   This is a batch version of SendMessage. It takes multiple messages
 *   and adds each of them to the queue. The result of each add operation
 *   is reported individually in the response.
 *   @param params [Object]
 *     * +QueueUrl+ - (*required*, <tt>String</tt>) The URL of the SQS
 *       queue to take action on.
 *     * +Entries+ - (*required*, <tt>Array<Object></tt>) A list of
 *       SendMessageBatchRequestEntrys.
 *       * +Id+ - (*required*, <tt>String</tt>) An identifier for the
 *         message in this batch. This is used to communicate the result.
 *         Note that the the Ids of a batch request need to be unique
 *         within the request.
 *       * +MessageBody+ - (*required*, <tt>String</tt>) Body of the
 *         message.
 *       * +DelaySeconds+ - (<tt>Integer</tt>) The number of seconds for
 *         which the message has to be delayed.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Successful+ - (<tt>Array<Object></tt>) A list of
 *         SendMessageBatchResultEntrys.
 *         * +Id+ - (<tt>String</tt>) An identifier for the
 *           message in this batch.
 *         * +MessageId+ - (<tt>String</tt>) An identifier for
 *           the message.
 *         * +MD5OfMessageBody+ - (<tt>String</tt>) An MD5
 *           digest of the non-URL-encoded message body string. This can be
 *           used to verify that SQS received the message correctly. SQS
 *           first URL decodes the message before creating the MD5 digest.
 *           For information about MD5, go to
 *           http://faqs.org/rfcs/rfc1321.html.
 *       * +Failed+ - (<tt>Array<Object></tt>) A list of
 *         BatchResultErrorEntrys with the error detail about each message
 *         that could not be enqueued.
 *         * +Id+ - (<tt>String</tt>) The id of an entry in a
 *           batch request.
 *         * +SenderFault+ - (<tt>Boolean</tt>) Whether the
 *           error happened due to the sender's fault.
 *         * +Code+ - (<tt>String</tt>) An error code
 *           representing why the operation failed on this entry.
 *         * +Message+ - (<tt>String</tt>) A message explaining why the
 *           operation failed on this entry.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method setQueueAttributes(params, callback)
 *   Sets the value of one or more queue attributes. Valid attributes
 *   that can be set are [VisibilityTimeout, Policy, MaximumMessageSize,
 *   MessageRetentionPeriod, ReceiveMessageWaitTimeSeconds].
 *   @param params [Object]
 *     * +QueueUrl+ - (*required*, <tt>String</tt>) The URL of the SQS
 *       queue to take action on.
 *     * +attributes+ - (*required*, <tt>Object<String></tt>) A map of
 *       attributes to set.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 *
 * @!method constructor(options)
 *   Constructs a service client object.  This client has one method for
 *   each API operation.
 *   @option options [String] endpoint The endpoint URI to send requests
 *     to.  The default endpoint is built from the configured +region+.
 *     The endpoint should be a string like <tt>'https://s3.amazonaws.com'</tt>.
 *   @option (see AWS.Config.constructor)
 *
 * @!attribute endpoint
 *   @return [AWS.Endpoint] an Endpoint object representing'
 *     the endpoint URL for service requests.'
 *
 */
AWS.SQS.Client = inherit({});
