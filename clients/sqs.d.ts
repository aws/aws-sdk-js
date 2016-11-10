///<reference types="node" />
import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
declare class SQS extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: SQS.Types.ClientConfiguration)
  config: Config & SQS.Types.ClientConfiguration;
  /**
   * Adds a permission to a queue for a specific principal. This allows for sharing access to the queue. When you create a queue, you have full control access rights for the queue. Only you (as owner of the queue) can grant or deny permissions to the queue. For more information about these permissions, see Shared Queues in the Amazon SQS Developer Guide.  AddPermission writes an Amazon SQS-generated policy. If you want to write your own policy, use SetQueueAttributes to upload your policy. For more information about writing your own policy, see Using The Access Policy Language in the Amazon SQS Developer Guide.  Some API actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this:   
   */
  addPermission(params: SQS.Types.AddPermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds a permission to a queue for a specific principal. This allows for sharing access to the queue. When you create a queue, you have full control access rights for the queue. Only you (as owner of the queue) can grant or deny permissions to the queue. For more information about these permissions, see Shared Queues in the Amazon SQS Developer Guide.  AddPermission writes an Amazon SQS-generated policy. If you want to write your own policy, use SetQueueAttributes to upload your policy. For more information about writing your own policy, see Using The Access Policy Language in the Amazon SQS Developer Guide.  Some API actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this:   
   */
  addPermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the visibility timeout of a specified message in a queue to a new value. The maximum allowed timeout value you can set the value to is 12 hours. This means you can't extend the timeout of a message in an existing queue to more than a total visibility timeout of 12 hours. (For more information visibility timeout, see Visibility Timeout in the Amazon SQS Developer Guide.) For example, let's say you have a message and its default message visibility timeout is 5 minutes. After 3 minutes, you call ChangeMessageVisiblity with a timeout of 10 minutes. At that time, the timeout for the message would be extended by 10 minutes beyond the time of the ChangeMessageVisibility call. This results in a total visibility timeout of 13 minutes. You can continue to call ChangeMessageVisibility to extend the visibility timeout to a maximum of 12 hours. If you try to extend beyond 12 hours, the request will be rejected. There is a 120,000 limit for the number of inflight messages per queue. Messages are inflight after they have been received from the queue by a consuming component, but have not yet been deleted from the queue. If you reach the 120,000 limit, you will receive an OverLimit error message from Amazon SQS. To help avoid reaching the limit, you should delete the messages from the queue after they have been processed. You can also increase the number of queues you use to process the messages.  If you attempt to set the VisibilityTimeout to an amount more than the maximum time left, Amazon SQS returns an error. It will not automatically recalculate and increase the timeout to the maximum time remaining. Unlike with a queue, when you change the visibility timeout for a specific message, that timeout value is applied immediately but is not saved in memory for that message. If you don't delete a message after it is received, the visibility timeout for the message the next time it is received reverts to the original timeout value, not the value you set with the ChangeMessageVisibility action.
   */
  changeMessageVisibility(params: SQS.Types.ChangeMessageVisibilityRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the visibility timeout of a specified message in a queue to a new value. The maximum allowed timeout value you can set the value to is 12 hours. This means you can't extend the timeout of a message in an existing queue to more than a total visibility timeout of 12 hours. (For more information visibility timeout, see Visibility Timeout in the Amazon SQS Developer Guide.) For example, let's say you have a message and its default message visibility timeout is 5 minutes. After 3 minutes, you call ChangeMessageVisiblity with a timeout of 10 minutes. At that time, the timeout for the message would be extended by 10 minutes beyond the time of the ChangeMessageVisibility call. This results in a total visibility timeout of 13 minutes. You can continue to call ChangeMessageVisibility to extend the visibility timeout to a maximum of 12 hours. If you try to extend beyond 12 hours, the request will be rejected. There is a 120,000 limit for the number of inflight messages per queue. Messages are inflight after they have been received from the queue by a consuming component, but have not yet been deleted from the queue. If you reach the 120,000 limit, you will receive an OverLimit error message from Amazon SQS. To help avoid reaching the limit, you should delete the messages from the queue after they have been processed. You can also increase the number of queues you use to process the messages.  If you attempt to set the VisibilityTimeout to an amount more than the maximum time left, Amazon SQS returns an error. It will not automatically recalculate and increase the timeout to the maximum time remaining. Unlike with a queue, when you change the visibility timeout for a specific message, that timeout value is applied immediately but is not saved in memory for that message. If you don't delete a message after it is received, the visibility timeout for the message the next time it is received reverts to the original timeout value, not the value you set with the ChangeMessageVisibility action.
   */
  changeMessageVisibility(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Changes the visibility timeout of multiple messages. This is a batch version of ChangeMessageVisibility. The result of the action on each message is reported individually in the response. You can send up to 10 ChangeMessageVisibility requests with each ChangeMessageVisibilityBatch action. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200. Some API actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this:   
   */
  changeMessageVisibilityBatch(params: SQS.Types.ChangeMessageVisibilityBatchRequest, callback?: (err: AWSError, data: SQS.Types.ChangeMessageVisibilityBatchResult) => void): Request<SQS.Types.ChangeMessageVisibilityBatchResult, AWSError>;
  /**
   * Changes the visibility timeout of multiple messages. This is a batch version of ChangeMessageVisibility. The result of the action on each message is reported individually in the response. You can send up to 10 ChangeMessageVisibility requests with each ChangeMessageVisibilityBatch action. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200. Some API actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this:   
   */
  changeMessageVisibilityBatch(callback?: (err: AWSError, data: SQS.Types.ChangeMessageVisibilityBatchResult) => void): Request<SQS.Types.ChangeMessageVisibilityBatchResult, AWSError>;
  /**
   * Creates a new queue, or returns the URL of an existing one. When you request CreateQueue, you provide a name for the queue. To successfully create a new queue, you must provide a name that is unique within the scope of your own queues.  If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.  You may pass one or more attributes in the request. If you do not provide a value for any attribute, the queue will have the default value for that attribute. Use GetQueueUrl to get a queue's URL. GetQueueUrl requires only the QueueName parameter. If you provide the name of an existing queue, along with the exact names and values of all the queue's attributes, CreateQueue returns the queue URL for the existing queue. If the queue name, attribute names, or attribute values do not match an existing queue, CreateQueue returns an error. Some API actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this:   
   */
  createQueue(params: SQS.Types.CreateQueueRequest, callback?: (err: AWSError, data: SQS.Types.CreateQueueResult) => void): Request<SQS.Types.CreateQueueResult, AWSError>;
  /**
   * Creates a new queue, or returns the URL of an existing one. When you request CreateQueue, you provide a name for the queue. To successfully create a new queue, you must provide a name that is unique within the scope of your own queues.  If you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.  You may pass one or more attributes in the request. If you do not provide a value for any attribute, the queue will have the default value for that attribute. Use GetQueueUrl to get a queue's URL. GetQueueUrl requires only the QueueName parameter. If you provide the name of an existing queue, along with the exact names and values of all the queue's attributes, CreateQueue returns the queue URL for the existing queue. If the queue name, attribute names, or attribute values do not match an existing queue, CreateQueue returns an error. Some API actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this:   
   */
  createQueue(callback?: (err: AWSError, data: SQS.Types.CreateQueueResult) => void): Request<SQS.Types.CreateQueueResult, AWSError>;
  /**
   *  Deletes the specified message from the specified queue. You specify the message by using the message's receipt handle and not the message ID you received when you sent the message. Even if the message is locked by another reader due to the visibility timeout setting, it is still deleted from the queue. If you leave a message in the queue for longer than the queue's configured retention period, Amazon SQS automatically deletes it.    The receipt handle is associated with a specific instance of receiving the message. If you receive a message more than once, the receipt handle you get each time you receive the message is different. When you request DeleteMessage, if you don't provide the most recently received receipt handle for the message, the request will still succeed, but the message might not be deleted.     It is possible you will receive a message even after you have deleted it. This might happen on rare occasions if one of the servers storing a copy of the message is unavailable when you request to delete the message. The copy remains on the server and might be returned to you again on a subsequent receive request. You should create your system to be idempotent so that receiving a particular message more than once is not a problem.  
   */
  deleteMessage(params: SQS.Types.DeleteMessageRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Deletes the specified message from the specified queue. You specify the message by using the message's receipt handle and not the message ID you received when you sent the message. Even if the message is locked by another reader due to the visibility timeout setting, it is still deleted from the queue. If you leave a message in the queue for longer than the queue's configured retention period, Amazon SQS automatically deletes it.    The receipt handle is associated with a specific instance of receiving the message. If you receive a message more than once, the receipt handle you get each time you receive the message is different. When you request DeleteMessage, if you don't provide the most recently received receipt handle for the message, the request will still succeed, but the message might not be deleted.     It is possible you will receive a message even after you have deleted it. This might happen on rare occasions if one of the servers storing a copy of the message is unavailable when you request to delete the message. The copy remains on the server and might be returned to you again on a subsequent receive request. You should create your system to be idempotent so that receiving a particular message more than once is not a problem.  
   */
  deleteMessage(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes up to ten messages from the specified queue. This is a batch version of DeleteMessage. The result of the delete action on each message is reported individually in the response.   Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.   Some API actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this:   
   */
  deleteMessageBatch(params: SQS.Types.DeleteMessageBatchRequest, callback?: (err: AWSError, data: SQS.Types.DeleteMessageBatchResult) => void): Request<SQS.Types.DeleteMessageBatchResult, AWSError>;
  /**
   * Deletes up to ten messages from the specified queue. This is a batch version of DeleteMessage. The result of the delete action on each message is reported individually in the response.   Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.   Some API actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this:   
   */
  deleteMessageBatch(callback?: (err: AWSError, data: SQS.Types.DeleteMessageBatchResult) => void): Request<SQS.Types.DeleteMessageBatchResult, AWSError>;
  /**
   *  Deletes the queue specified by the queue URL, regardless of whether the queue is empty. If the specified queue does not exist, Amazon SQS returns a successful response.    Use DeleteQueue with care; once you delete your queue, any messages in the queue are no longer available.    When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a SendMessage request might succeed, but after the 60 seconds, the queue and that message you sent no longer exist. Also, when you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.   We reserve the right to delete queues that have had no activity for more than 30 days. For more information, see How Amazon SQS Queues Work in the Amazon SQS Developer Guide. 
   */
  deleteQueue(params: SQS.Types.DeleteQueueRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Deletes the queue specified by the queue URL, regardless of whether the queue is empty. If the specified queue does not exist, Amazon SQS returns a successful response.    Use DeleteQueue with care; once you delete your queue, any messages in the queue are no longer available.    When you delete a queue, the deletion process takes up to 60 seconds. Requests you send involving that queue during the 60 seconds might succeed. For example, a SendMessage request might succeed, but after the 60 seconds, the queue and that message you sent no longer exist. Also, when you delete a queue, you must wait at least 60 seconds before creating a queue with the same name.   We reserve the right to delete queues that have had no activity for more than 30 days. For more information, see How Amazon SQS Queues Work in the Amazon SQS Developer Guide. 
   */
  deleteQueue(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets attributes for the specified queue. Some API actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this:   
   */
  getQueueAttributes(params: SQS.Types.GetQueueAttributesRequest, callback?: (err: AWSError, data: SQS.Types.GetQueueAttributesResult) => void): Request<SQS.Types.GetQueueAttributesResult, AWSError>;
  /**
   * Gets attributes for the specified queue. Some API actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this:   
   */
  getQueueAttributes(callback?: (err: AWSError, data: SQS.Types.GetQueueAttributesResult) => void): Request<SQS.Types.GetQueueAttributesResult, AWSError>;
  /**
   *  Returns the URL of an existing queue. This action provides a simple way to retrieve the URL of an Amazon SQS queue.   To access a queue that belongs to another AWS account, use the QueueOwnerAWSAccountId parameter to specify the account ID of the queue's owner. The queue's owner must grant you permission to access the queue. For more information about shared queue access, see AddPermission or go to Shared Queues in the Amazon SQS Developer Guide. 
   */
  getQueueUrl(params: SQS.Types.GetQueueUrlRequest, callback?: (err: AWSError, data: SQS.Types.GetQueueUrlResult) => void): Request<SQS.Types.GetQueueUrlResult, AWSError>;
  /**
   *  Returns the URL of an existing queue. This action provides a simple way to retrieve the URL of an Amazon SQS queue.   To access a queue that belongs to another AWS account, use the QueueOwnerAWSAccountId parameter to specify the account ID of the queue's owner. The queue's owner must grant you permission to access the queue. For more information about shared queue access, see AddPermission or go to Shared Queues in the Amazon SQS Developer Guide. 
   */
  getQueueUrl(callback?: (err: AWSError, data: SQS.Types.GetQueueUrlResult) => void): Request<SQS.Types.GetQueueUrlResult, AWSError>;
  /**
   * Returns a list of your queues that have the RedrivePolicy queue attribute configured with a dead letter queue. For more information about using dead letter queues, see Using Amazon SQS Dead Letter Queues.
   */
  listDeadLetterSourceQueues(params: SQS.Types.ListDeadLetterSourceQueuesRequest, callback?: (err: AWSError, data: SQS.Types.ListDeadLetterSourceQueuesResult) => void): Request<SQS.Types.ListDeadLetterSourceQueuesResult, AWSError>;
  /**
   * Returns a list of your queues that have the RedrivePolicy queue attribute configured with a dead letter queue. For more information about using dead letter queues, see Using Amazon SQS Dead Letter Queues.
   */
  listDeadLetterSourceQueues(callback?: (err: AWSError, data: SQS.Types.ListDeadLetterSourceQueuesResult) => void): Request<SQS.Types.ListDeadLetterSourceQueuesResult, AWSError>;
  /**
   * Returns a list of your queues. The maximum number of queues that can be returned is 1000. If you specify a value for the optional QueueNamePrefix parameter, only queues with a name beginning with the specified value are returned.
   */
  listQueues(params: SQS.Types.ListQueuesRequest, callback?: (err: AWSError, data: SQS.Types.ListQueuesResult) => void): Request<SQS.Types.ListQueuesResult, AWSError>;
  /**
   * Returns a list of your queues. The maximum number of queues that can be returned is 1000. If you specify a value for the optional QueueNamePrefix parameter, only queues with a name beginning with the specified value are returned.
   */
  listQueues(callback?: (err: AWSError, data: SQS.Types.ListQueuesResult) => void): Request<SQS.Types.ListQueuesResult, AWSError>;
  /**
   * Deletes the messages in a queue specified by the queue URL. When you use the PurgeQueue API, the deleted messages in the queue cannot be retrieved. When you purge a queue, the message deletion process takes up to 60 seconds. All messages sent to the queue before calling PurgeQueue will be deleted; messages sent to the queue while it is being purged may be deleted. While the queue is being purged, messages sent to the queue before PurgeQueue was called may be received, but will be deleted within the next minute.
   */
  purgeQueue(params: SQS.Types.PurgeQueueRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the messages in a queue specified by the queue URL. When you use the PurgeQueue API, the deleted messages in the queue cannot be retrieved. When you purge a queue, the message deletion process takes up to 60 seconds. All messages sent to the queue before calling PurgeQueue will be deleted; messages sent to the queue while it is being purged may be deleted. While the queue is being purged, messages sent to the queue before PurgeQueue was called may be received, but will be deleted within the next minute.
   */
  purgeQueue(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Retrieves one or more messages, with a maximum limit of 10 messages, from the specified queue. Long poll support is enabled by using the WaitTimeSeconds parameter. For more information, see Amazon SQS Long Poll in the Amazon SQS Developer Guide.   Short poll is the default behavior where a weighted random set of machines is sampled on a ReceiveMessage call. This means only the messages on the sampled machines are returned. If the number of messages in the queue is small (less than 1000), it is likely you will get fewer messages than you requested per ReceiveMessage call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular ReceiveMessage response; in which case you should repeat the request.   For each message returned, the response includes the following:     Message body     MD5 digest of the message body. For information about MD5, go to http://www.faqs.org/rfcs/rfc1321.html.     Message ID you received when you sent the message to the queue.     Receipt handle.     Message attributes.     MD5 digest of the message attributes.     The receipt handle is the identifier you must provide when deleting the message. For more information, see Queue and Message Identifiers in the Amazon SQS Developer Guide.   You can provide the VisibilityTimeout parameter in your request, which will be applied to the messages that Amazon SQS returns in the response. If you do not include the parameter, the overall visibility timeout for the queue is used for the returned messages. For more information, see Visibility Timeout in the Amazon SQS Developer Guide.    Going forward, new attributes might be added. If you are writing code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.  
   */
  receiveMessage(params: SQS.Types.ReceiveMessageRequest, callback?: (err: AWSError, data: SQS.Types.ReceiveMessageResult) => void): Request<SQS.Types.ReceiveMessageResult, AWSError>;
  /**
   *  Retrieves one or more messages, with a maximum limit of 10 messages, from the specified queue. Long poll support is enabled by using the WaitTimeSeconds parameter. For more information, see Amazon SQS Long Poll in the Amazon SQS Developer Guide.   Short poll is the default behavior where a weighted random set of machines is sampled on a ReceiveMessage call. This means only the messages on the sampled machines are returned. If the number of messages in the queue is small (less than 1000), it is likely you will get fewer messages than you requested per ReceiveMessage call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular ReceiveMessage response; in which case you should repeat the request.   For each message returned, the response includes the following:     Message body     MD5 digest of the message body. For information about MD5, go to http://www.faqs.org/rfcs/rfc1321.html.     Message ID you received when you sent the message to the queue.     Receipt handle.     Message attributes.     MD5 digest of the message attributes.     The receipt handle is the identifier you must provide when deleting the message. For more information, see Queue and Message Identifiers in the Amazon SQS Developer Guide.   You can provide the VisibilityTimeout parameter in your request, which will be applied to the messages that Amazon SQS returns in the response. If you do not include the parameter, the overall visibility timeout for the queue is used for the returned messages. For more information, see Visibility Timeout in the Amazon SQS Developer Guide.    Going forward, new attributes might be added. If you are writing code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.  
   */
  receiveMessage(callback?: (err: AWSError, data: SQS.Types.ReceiveMessageResult) => void): Request<SQS.Types.ReceiveMessageResult, AWSError>;
  /**
   * Revokes any permissions in the queue policy that matches the specified Label parameter. Only the owner of the queue can remove permissions.
   */
  removePermission(params: SQS.Types.RemovePermissionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Revokes any permissions in the queue policy that matches the specified Label parameter. Only the owner of the queue can remove permissions.
   */
  removePermission(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Delivers a message to the specified queue. With Amazon SQS, you now have the ability to send large payload messages that are up to 256KB (262,144 bytes) in size. To send large payloads, you must use an AWS SDK that supports SigV4 signing. To verify whether SigV4 is supported for an AWS SDK, check the SDK release notes.    The following list shows the characters (in Unicode) allowed in your message, according to the W3C XML specification. For more information, go to http://www.w3.org/TR/REC-xml/#charsets If you send any characters not included in the list, your request will be rejected.   #x9 | #xA | #xD | [#x20 to #xD7FF] | [#xE000 to #xFFFD] | [#x10000 to #x10FFFF]  
   */
  sendMessage(params: SQS.Types.SendMessageRequest, callback?: (err: AWSError, data: SQS.Types.SendMessageResult) => void): Request<SQS.Types.SendMessageResult, AWSError>;
  /**
   *  Delivers a message to the specified queue. With Amazon SQS, you now have the ability to send large payload messages that are up to 256KB (262,144 bytes) in size. To send large payloads, you must use an AWS SDK that supports SigV4 signing. To verify whether SigV4 is supported for an AWS SDK, check the SDK release notes.    The following list shows the characters (in Unicode) allowed in your message, according to the W3C XML specification. For more information, go to http://www.w3.org/TR/REC-xml/#charsets If you send any characters not included in the list, your request will be rejected.   #x9 | #xA | #xD | [#x20 to #xD7FF] | [#xE000 to #xFFFD] | [#x10000 to #x10FFFF]  
   */
  sendMessage(callback?: (err: AWSError, data: SQS.Types.SendMessageResult) => void): Request<SQS.Types.SendMessageResult, AWSError>;
  /**
   * Delivers up to ten messages to the specified queue. This is a batch version of SendMessage. The result of the send action on each message is reported individually in the response. The maximum allowed individual message size is 256 KB (262,144 bytes). The maximum total payload size (i.e., the sum of all a batch's individual message lengths) is also 256 KB (262,144 bytes). If the DelaySeconds parameter is not specified for an entry, the default for the queue is used. The following list shows the characters (in Unicode) that are allowed in your message, according to the W3C XML specification. For more information, go to http://www.faqs.org/rfcs/rfc1321.html. If you send any characters that are not included in the list, your request will be rejected. #x9 | #xA | #xD | [#x20 to #xD7FF] | [#xE000 to #xFFFD] | [#x10000 to #x10FFFF]   Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.  Some API actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this:    
   */
  sendMessageBatch(params: SQS.Types.SendMessageBatchRequest, callback?: (err: AWSError, data: SQS.Types.SendMessageBatchResult) => void): Request<SQS.Types.SendMessageBatchResult, AWSError>;
  /**
   * Delivers up to ten messages to the specified queue. This is a batch version of SendMessage. The result of the send action on each message is reported individually in the response. The maximum allowed individual message size is 256 KB (262,144 bytes). The maximum total payload size (i.e., the sum of all a batch's individual message lengths) is also 256 KB (262,144 bytes). If the DelaySeconds parameter is not specified for an entry, the default for the queue is used. The following list shows the characters (in Unicode) that are allowed in your message, according to the W3C XML specification. For more information, go to http://www.faqs.org/rfcs/rfc1321.html. If you send any characters that are not included in the list, your request will be rejected. #x9 | #xA | #xD | [#x20 to #xD7FF] | [#xE000 to #xFFFD] | [#x10000 to #x10FFFF]   Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.  Some API actions take lists of parameters. These lists are specified using the param.n notation. Values of n are integers starting from 1. For example, a parameter list with two elements looks like this:    
   */
  sendMessageBatch(callback?: (err: AWSError, data: SQS.Types.SendMessageBatchResult) => void): Request<SQS.Types.SendMessageBatchResult, AWSError>;
  /**
   * Sets the value of one or more queue attributes. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the SQS system. Changes made to the MessageRetentionPeriod attribute can take up to 15 minutes. Going forward, new attributes might be added. If you are writing code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.
   */
  setQueueAttributes(params: SQS.Types.SetQueueAttributesRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the value of one or more queue attributes. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the SQS system. Changes made to the MessageRetentionPeriod attribute can take up to 15 minutes. Going forward, new attributes might be added. If you are writing code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.
   */
  setQueueAttributes(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace SQS.Types {
  export type AWSAccountIdList = String[];
  export type ActionNameList = String[];
  export interface AddPermissionRequest {
    /**
     * The URL of the Amazon SQS queue to take action on. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
    /**
     * The unique identification of the permission you're setting (e.g., AliceSendMessage). Constraints: Maximum 80 characters; alphanumeric characters, hyphens (-), and underscores (_) are allowed.
     */
    Label: String;
    /**
     * The AWS account number of the principal who will be given permission. The principal must have an AWS account, but does not need to be signed up for Amazon SQS. For information about locating the AWS account identification, see Your AWS Identifiers in the Amazon SQS Developer Guide.
     */
    AWSAccountIds: AWSAccountIdList;
    /**
     * The action the client wants to allow for the specified principal. The following are valid values: * | SendMessage | ReceiveMessage | DeleteMessage | ChangeMessageVisibility | GetQueueAttributes | GetQueueUrl. For more information about these actions, see Understanding Permissions in the Amazon SQS Developer Guide. Specifying SendMessage, DeleteMessage, or ChangeMessageVisibility for the ActionName.n also grants permissions for the corresponding batch versions of those actions: SendMessageBatch, DeleteMessageBatch, and ChangeMessageVisibilityBatch.
     */
    Actions: ActionNameList;
  }
  export type AttributeMap = {[key: string]: String};
  export type AttributeNameList = QueueAttributeName[];
  export interface BatchResultErrorEntry {
    /**
     * The id of an entry in a batch request.
     */
    Id: String;
    /**
     * Whether the error happened due to the sender's fault.
     */
    SenderFault: Boolean;
    /**
     * An error code representing why the action failed on this entry.
     */
    Code: String;
    /**
     * A message explaining why the action failed on this entry.
     */
    Message?: String;
  }
  export type BatchResultErrorEntryList = BatchResultErrorEntry[];
  export type Binary = Buffer|Uint8Array|Blob|string;
  export type BinaryList = Binary[];
  export type Boolean = boolean;
  export interface ChangeMessageVisibilityBatchRequest {
    /**
     * The URL of the Amazon SQS queue to take action on. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
    /**
     * A list of receipt handles of the messages for which the visibility timeout must be changed.
     */
    Entries: ChangeMessageVisibilityBatchRequestEntryList;
  }
  export interface ChangeMessageVisibilityBatchRequestEntry {
    /**
     * An identifier for this particular receipt handle. This is used to communicate the result. Note that the Ids of a batch request need to be unique within the request.
     */
    Id: String;
    /**
     * A receipt handle.
     */
    ReceiptHandle: String;
    /**
     * The new value (in seconds) for the message's visibility timeout.
     */
    VisibilityTimeout?: Integer;
  }
  export type ChangeMessageVisibilityBatchRequestEntryList = ChangeMessageVisibilityBatchRequestEntry[];
  export interface ChangeMessageVisibilityBatchResult {
    /**
     * A list of ChangeMessageVisibilityBatchResultEntry items.
     */
    Successful: ChangeMessageVisibilityBatchResultEntryList;
    /**
     * A list of BatchResultErrorEntry items.
     */
    Failed: BatchResultErrorEntryList;
  }
  export interface ChangeMessageVisibilityBatchResultEntry {
    /**
     * Represents a message whose visibility timeout has been changed successfully.
     */
    Id: String;
  }
  export type ChangeMessageVisibilityBatchResultEntryList = ChangeMessageVisibilityBatchResultEntry[];
  export interface ChangeMessageVisibilityRequest {
    /**
     * The URL of the Amazon SQS queue to take action on. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
    /**
     * The receipt handle associated with the message whose visibility timeout should be changed. This parameter is returned by the ReceiveMessage action.
     */
    ReceiptHandle: String;
    /**
     * The new value (in seconds - from 0 to 43200 - maximum 12 hours) for the message's visibility timeout.
     */
    VisibilityTimeout: Integer;
  }
  export interface CreateQueueRequest {
    /**
     * The name for the queue to be created. Queue names are case-sensitive.
     */
    QueueName: String;
    /**
     * A map of attributes with their corresponding values. The following lists the names, descriptions, and values of the special request parameters the CreateQueue action uses:  DelaySeconds - The time in seconds that the delivery of all messages in the queue will be delayed. An integer from 0 to 900 (15 minutes). The default for this attribute is 0 (zero). MaximumMessageSize - The limit of how many bytes a message can contain before Amazon SQS rejects it. An integer from 1024 bytes (1 KiB) up to 262144 bytes (256 KiB). The default for this attribute is 262144 (256 KiB). MessageRetentionPeriod - The number of seconds Amazon SQS retains a message. Integer representing seconds, from 60 (1 minute) to 1209600 (14 days). The default for this attribute is 345600 (4 days). Policy - The queue's policy. A valid AWS policy. For more information about policy structure, see Overview of AWS IAM Policies in the Amazon IAM User Guide. ReceiveMessageWaitTimeSeconds - The time for which a ReceiveMessage call will wait for a message to arrive. An integer from 0 to 20 (seconds). The default for this attribute is 0. RedrivePolicy - The parameters for dead letter queue functionality of the source queue. For more information about RedrivePolicy and dead letter queues, see Using Amazon SQS Dead Letter Queues in the Amazon SQS Developer Guide. VisibilityTimeout - The visibility timeout for the queue. An integer from 0 to 43200 (12 hours). The default for this attribute is 30. For more information about visibility timeout, see Visibility Timeout in the Amazon SQS Developer Guide.  Any other valid special request parameters that are specified (such as ApproximateNumberOfMessages, ApproximateNumberOfMessagesDelayed, ApproximateNumberOfMessagesNotVisible, CreatedTimestamp, LastModifiedTimestamp, and QueueArn) will be ignored.
     */
    Attributes?: AttributeMap;
  }
  export interface CreateQueueResult {
    /**
     * The URL for the created Amazon SQS queue.
     */
    QueueUrl?: String;
  }
  export interface DeleteMessageBatchRequest {
    /**
     * The URL of the Amazon SQS queue to take action on. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
    /**
     * A list of receipt handles for the messages to be deleted.
     */
    Entries: DeleteMessageBatchRequestEntryList;
  }
  export interface DeleteMessageBatchRequestEntry {
    /**
     * An identifier for this particular receipt handle. This is used to communicate the result. Note that the Ids of a batch request need to be unique within the request.
     */
    Id: String;
    /**
     * A receipt handle.
     */
    ReceiptHandle: String;
  }
  export type DeleteMessageBatchRequestEntryList = DeleteMessageBatchRequestEntry[];
  export interface DeleteMessageBatchResult {
    /**
     * A list of DeleteMessageBatchResultEntry items.
     */
    Successful: DeleteMessageBatchResultEntryList;
    /**
     * A list of BatchResultErrorEntry items.
     */
    Failed: BatchResultErrorEntryList;
  }
  export interface DeleteMessageBatchResultEntry {
    /**
     * Represents a successfully deleted message.
     */
    Id: String;
  }
  export type DeleteMessageBatchResultEntryList = DeleteMessageBatchResultEntry[];
  export interface DeleteMessageRequest {
    /**
     * The URL of the Amazon SQS queue to take action on. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
    /**
     * The receipt handle associated with the message to delete.
     */
    ReceiptHandle: String;
  }
  export interface DeleteQueueRequest {
    /**
     * The URL of the Amazon SQS queue to take action on. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
  }
  export interface GetQueueAttributesRequest {
    /**
     * The URL of the Amazon SQS queue to take action on. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
    /**
     * A list of attributes to retrieve information for. The following attributes are supported:  All - returns all values. ApproximateNumberOfMessages - returns the approximate number of visible messages in a queue. For more information, see Resources Required to Process Messages in the Amazon SQS Developer Guide. ApproximateNumberOfMessagesNotVisible - returns the approximate number of messages that are not timed-out and not deleted. For more information, see Resources Required to Process Messages in the Amazon SQS Developer Guide. VisibilityTimeout - returns the visibility timeout for the queue. For more information about visibility timeout, see Visibility Timeout in the Amazon SQS Developer Guide. CreatedTimestamp - returns the time when the queue was created (epoch time in seconds). LastModifiedTimestamp - returns the time when the queue was last changed (epoch time in seconds). Policy - returns the queue's policy. MaximumMessageSize - returns the limit of how many bytes a message can contain before Amazon SQS rejects it. MessageRetentionPeriod - returns the number of seconds Amazon SQS retains a message. QueueArn - returns the queue's Amazon resource name (ARN). ApproximateNumberOfMessagesDelayed - returns the approximate number of messages that are pending to be added to the queue. DelaySeconds - returns the default delay on the queue in seconds. ReceiveMessageWaitTimeSeconds - returns the time for which a ReceiveMessage call will wait for a message to arrive. RedrivePolicy - returns the parameters for dead letter queue functionality of the source queue. For more information about RedrivePolicy and dead letter queues, see Using Amazon SQS Dead Letter Queues in the Amazon SQS Developer Guide.  Going forward, new attributes might be added. If you are writing code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.
     */
    AttributeNames?: AttributeNameList;
  }
  export interface GetQueueAttributesResult {
    /**
     * A map of attributes to the respective values.
     */
    Attributes?: AttributeMap;
  }
  export interface GetQueueUrlRequest {
    /**
     * The name of the queue whose URL must be fetched. Maximum 80 characters; alphanumeric characters, hyphens (-), and underscores (_) are allowed. Queue names are case-sensitive.
     */
    QueueName: String;
    /**
     * The AWS account ID of the account that created the queue.
     */
    QueueOwnerAWSAccountId?: String;
  }
  export interface GetQueueUrlResult {
    /**
     * The URL for the queue.
     */
    QueueUrl?: String;
  }
  export type Integer = number;
  export interface ListDeadLetterSourceQueuesRequest {
    /**
     * The queue URL of a dead letter queue. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
  }
  export interface ListDeadLetterSourceQueuesResult {
    /**
     * A list of source queue URLs that have the RedrivePolicy queue attribute configured with a dead letter queue.
     */
    queueUrls: QueueUrlList;
  }
  export interface ListQueuesRequest {
    /**
     * A string to use for filtering the list results. Only those queues whose name begins with the specified string are returned. Queue names are case-sensitive.
     */
    QueueNamePrefix?: String;
  }
  export interface ListQueuesResult {
    /**
     * A list of queue URLs, up to 1000 entries.
     */
    QueueUrls?: QueueUrlList;
  }
  export interface Message {
    /**
     * A unique identifier for the message. Message IDs are considered unique across all AWS accounts for an extended period of time.
     */
    MessageId?: String;
    /**
     * An identifier associated with the act of receiving the message. A new receipt handle is returned every time you receive a message. When deleting a message, you provide the last received receipt handle to delete the message.
     */
    ReceiptHandle?: String;
    /**
     * An MD5 digest of the non-URL-encoded message body string.
     */
    MD5OfBody?: String;
    /**
     * The message's contents (not URL-encoded).
     */
    Body?: String;
    /**
     * SenderId, SentTimestamp, ApproximateReceiveCount, and/or ApproximateFirstReceiveTimestamp. SentTimestamp and ApproximateFirstReceiveTimestamp are each returned as an integer representing the epoch time in milliseconds.
     */
    Attributes?: AttributeMap;
    /**
     * An MD5 digest of the non-URL-encoded message attribute string. This can be used to verify that Amazon SQS received the message correctly. Amazon SQS first URL decodes the message before creating the MD5 digest. For information about MD5, go to http://www.faqs.org/rfcs/rfc1321.html.
     */
    MD5OfMessageAttributes?: String;
    /**
     * Each message attribute consists of a Name, Type, and Value. For more information, see Message Attribute Items.
     */
    MessageAttributes?: MessageAttributeMap;
  }
  export type MessageAttributeMap = {[key: string]: MessageAttributeValue};
  export type MessageAttributeName = string;
  export type MessageAttributeNameList = MessageAttributeName[];
  export interface MessageAttributeValue {
    /**
     * Strings are Unicode with UTF8 binary encoding. For a list of code values, see http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters.
     */
    StringValue?: String;
    /**
     * Binary type attributes can store any binary data, for example, compressed data, encrypted data, or images.
     */
    BinaryValue?: Binary;
    /**
     * Not implemented. Reserved for future use.
     */
    StringListValues?: StringList;
    /**
     * Not implemented. Reserved for future use.
     */
    BinaryListValues?: BinaryList;
    /**
     * Amazon SQS supports the following logical data types: String, Number, and Binary. For the Number data type, you must use StringValue. You can also append custom labels. For more information, see Message Attribute Data Types.
     */
    DataType: String;
  }
  export type MessageList = Message[];
  export interface PurgeQueueRequest {
    /**
     * The queue URL of the queue to delete the messages from when using the PurgeQueue API. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
  }
  export type QueueAttributeName = "Policy"|"VisibilityTimeout"|"MaximumMessageSize"|"MessageRetentionPeriod"|"ApproximateNumberOfMessages"|"ApproximateNumberOfMessagesNotVisible"|"CreatedTimestamp"|"LastModifiedTimestamp"|"QueueArn"|"ApproximateNumberOfMessagesDelayed"|"DelaySeconds"|"ReceiveMessageWaitTimeSeconds"|"RedrivePolicy"|string;
  export type QueueUrlList = String[];
  export interface ReceiveMessageRequest {
    /**
     * The URL of the Amazon SQS queue to take action on. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
    /**
     * A list of attributes that need to be returned along with each message. These attributes include:  All - returns all values. ApproximateFirstReceiveTimestamp - returns the time when the message was first received from the queue (epoch time in milliseconds). ApproximateReceiveCount - returns the number of times a message has been received from the queue but not deleted. SenderId - returns the AWS account number (or the IP address, if anonymous access is allowed) of the sender. SentTimestamp - returns the time when the message was sent to the queue (epoch time in milliseconds).  Any other valid special request parameters that are specified (such as ApproximateNumberOfMessages, ApproximateNumberOfMessagesDelayed, ApproximateNumberOfMessagesNotVisible, CreatedTimestamp, DelaySeconds, LastModifiedTimestamp, MaximumMessageSize, MessageRetentionPeriod, Policy, QueueArn, ReceiveMessageWaitTimeSeconds, RedrivePolicy, and VisibilityTimeout) will be ignored.
     */
    AttributeNames?: AttributeNameList;
    /**
     * The name of the message attribute, where N is the index. The message attribute name can contain the following characters: A-Z, a-z, 0-9, underscore (_), hyphen (-), and period (.). The name must not start or end with a period, and it should not have successive periods. The name is case sensitive and must be unique among all attribute names for the message. The name can be up to 256 characters long. The name cannot start with "AWS." or "Amazon." (or any variations in casing), because these prefixes are reserved for use by Amazon Web Services. When using ReceiveMessage, you can send a list of attribute names to receive, or you can return all of the attributes by specifying "All" or ".*" in your request. You can also use "bar.*" to return all message attributes starting with the "bar" prefix.
     */
    MessageAttributeNames?: MessageAttributeNameList;
    /**
     * The maximum number of messages to return. Amazon SQS never returns more messages than this value but may return fewer. Values can be from 1 to 10. Default is 1. All of the messages are not necessarily returned.
     */
    MaxNumberOfMessages?: Integer;
    /**
     * The duration (in seconds) that the received messages are hidden from subsequent retrieve requests after being retrieved by a ReceiveMessage request.
     */
    VisibilityTimeout?: Integer;
    /**
     * The duration (in seconds) for which the call will wait for a message to arrive in the queue before returning. If a message is available, the call will return sooner than WaitTimeSeconds.
     */
    WaitTimeSeconds?: Integer;
  }
  export interface ReceiveMessageResult {
    /**
     * A list of messages.
     */
    Messages?: MessageList;
  }
  export interface RemovePermissionRequest {
    /**
     * The URL of the Amazon SQS queue to take action on. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
    /**
     * The identification of the permission to remove. This is the label added with the AddPermission action.
     */
    Label: String;
  }
  export interface SendMessageBatchRequest {
    /**
     * The URL of the Amazon SQS queue to take action on. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
    /**
     * A list of SendMessageBatchRequestEntry items.
     */
    Entries: SendMessageBatchRequestEntryList;
  }
  export interface SendMessageBatchRequestEntry {
    /**
     * An identifier for the message in this batch. This is used to communicate the result. Note that the Ids of a batch request need to be unique within the request.
     */
    Id: String;
    /**
     * Body of the message.
     */
    MessageBody: String;
    /**
     * The number of seconds for which the message has to be delayed.
     */
    DelaySeconds?: Integer;
    /**
     * Each message attribute consists of a Name, Type, and Value. For more information, see Message Attribute Items.
     */
    MessageAttributes?: MessageAttributeMap;
  }
  export type SendMessageBatchRequestEntryList = SendMessageBatchRequestEntry[];
  export interface SendMessageBatchResult {
    /**
     * A list of SendMessageBatchResultEntry items.
     */
    Successful: SendMessageBatchResultEntryList;
    /**
     * A list of BatchResultErrorEntry items with the error detail about each message that could not be enqueued.
     */
    Failed: BatchResultErrorEntryList;
  }
  export interface SendMessageBatchResultEntry {
    /**
     * An identifier for the message in this batch.
     */
    Id: String;
    /**
     * An identifier for the message.
     */
    MessageId: String;
    /**
     * An MD5 digest of the non-URL-encoded message body string. This can be used to verify that Amazon SQS received the message correctly. Amazon SQS first URL decodes the message before creating the MD5 digest. For information about MD5, go to http://www.faqs.org/rfcs/rfc1321.html.
     */
    MD5OfMessageBody: String;
    /**
     * An MD5 digest of the non-URL-encoded message attribute string. This can be used to verify that Amazon SQS received the message batch correctly. Amazon SQS first URL decodes the message before creating the MD5 digest. For information about MD5, go to http://www.faqs.org/rfcs/rfc1321.html.
     */
    MD5OfMessageAttributes?: String;
  }
  export type SendMessageBatchResultEntryList = SendMessageBatchResultEntry[];
  export interface SendMessageRequest {
    /**
     * The URL of the Amazon SQS queue to take action on. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
    /**
     * The message to send. String maximum 256 KB in size. For a list of allowed characters, see the preceding important note.
     */
    MessageBody: String;
    /**
     *  The number of seconds (0 to 900 - 15 minutes) to delay a specific message. Messages with a positive DelaySeconds value become available for processing after the delay time is finished. If you don't specify a value, the default value for the queue applies. 
     */
    DelaySeconds?: Integer;
    /**
     * Each message attribute consists of a Name, Type, and Value. For more information, see Message Attribute Items.
     */
    MessageAttributes?: MessageAttributeMap;
  }
  export interface SendMessageResult {
    /**
     * An MD5 digest of the non-URL-encoded message body string. This can be used to verify that Amazon SQS received the message correctly. Amazon SQS first URL decodes the message before creating the MD5 digest. For information about MD5, go to http://www.faqs.org/rfcs/rfc1321.html.
     */
    MD5OfMessageBody?: String;
    /**
     * An MD5 digest of the non-URL-encoded message attribute string. This can be used to verify that Amazon SQS received the message correctly. Amazon SQS first URL decodes the message before creating the MD5 digest. For information about MD5, go to http://www.faqs.org/rfcs/rfc1321.html.
     */
    MD5OfMessageAttributes?: String;
    /**
     *  An element containing the message ID of the message sent to the queue. For more information, see Queue and Message Identifiers in the Amazon SQS Developer Guide. 
     */
    MessageId?: String;
  }
  export interface SetQueueAttributesRequest {
    /**
     * The URL of the Amazon SQS queue to take action on. Queue URLs are case-sensitive.
     */
    QueueUrl: String;
    /**
     * A map of attributes to set. The following lists the names, descriptions, and values of the special request parameters the SetQueueAttributes action uses:  DelaySeconds - The time in seconds that the delivery of all messages in the queue will be delayed. An integer from 0 to 900 (15 minutes). The default for this attribute is 0 (zero). MaximumMessageSize - The limit of how many bytes a message can contain before Amazon SQS rejects it. An integer from 1024 bytes (1 KiB) up to 262144 bytes (256 KiB). The default for this attribute is 262144 (256 KiB). MessageRetentionPeriod - The number of seconds Amazon SQS retains a message. Integer representing seconds, from 60 (1 minute) to 1209600 (14 days). The default for this attribute is 345600 (4 days). Policy - The queue's policy. A valid AWS policy. For more information about policy structure, see Overview of AWS IAM Policies in the Amazon IAM User Guide. ReceiveMessageWaitTimeSeconds - The time for which a ReceiveMessage call will wait for a message to arrive. An integer from 0 to 20 (seconds). The default for this attribute is 0. VisibilityTimeout - The visibility timeout for the queue. An integer from 0 to 43200 (12 hours). The default for this attribute is 30. For more information about visibility timeout, see Visibility Timeout in the Amazon SQS Developer Guide. RedrivePolicy - The parameters for dead letter queue functionality of the source queue. For more information about RedrivePolicy and dead letter queues, see Using Amazon SQS Dead Letter Queues in the Amazon SQS Developer Guide.  Any other valid special request parameters that are specified (such as ApproximateNumberOfMessages, ApproximateNumberOfMessagesDelayed, ApproximateNumberOfMessagesNotVisible, CreatedTimestamp, LastModifiedTimestamp, and QueueArn) will be ignored.
     */
    Attributes: AttributeMap;
  }
  export type String = string;
  export type StringList = String[];
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2012-11-05"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
}
export = SQS;
