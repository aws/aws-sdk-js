

export type DynamoDBErrorCode = 'AccessDeniedException' | 'ConditionalCheckFailedException' | 'IncompleteSignatureException' | 'ItemCollectionSizeLimitExceededException' | 'LimitExceededException' | 'MissingAuthenticationTokenException' | 'ProvisionedThroughputExceededException' | 'RequestLimitExceeded' | 'ResourceInUseException' | 'ResourceNotFoundException' | 'ThrottlingException' | 'UnrecognizedClientException' | 'ValidationException'

/**
 * NOTE: Enums in declaration files don't play so well - may have to settle for string types..
 */
// Error Messages and Codes
// The following is a list of exceptions returned by DynamoDB, grouped by HTTP status code. If OK to retry? is Yes, you can submit the same request again. If OK to retry? is No, you need to fix the problem on the client side before you submit a new request.
// An HTTP 400 status code indicates a problem with your request, such as authentication failure, missing required parameters, or exceeding a table's provisioned throughput. You have to fix the issue in your application before submitting the request again.
// export enum DynamoDBErrorCode {
//   // HTTP: 400
//   // The client did not correctly sign the request. If you are using an AWS SDK, requests are signed for you automatically; otherwise, go to the Signature Version 4 Signing Process in the AWS General Reference.
//   // Message: Access denied.
//   ACCESS_DENIED_EXCEPTION = 'AccessDeniedException',
//   // You specified a condition that evaluated to false. For example, you might have tried to perform a conditional update on an item, but the actual value of the attribute did not match the expected value in the condition.
//   // Message: The conditional request failed.
//   CONDITIONAL_CHECK_FAILED_EXCEPTION = 'ConditionalCheckFailedException',
//   // The request signature did not include all of the required components. If you are using an AWS SDK, requests are signed for you automatically; otherwise, go to the Signature Version 4 Signing Process in the AWS General Reference.
//   // Message: The request signature does not conform to AWS standards.
//   INCOMPLETE_SIGNATURE_EXCEPTION = 'IncompleteSignatureException',
//   // For a table with a local secondary index, a group of items with the same partition key value has exceeded the maximum size limit of 10 GB. For more information on item collections, see Item Collections.
//   // Message: Collection size exceeded.
//   ITEM_COLLECTION_SIZE_LIMIT_EXCEEEDED_EXCEPTION = 'ItemCollectionSizeLimitExceededException',
//   // There are too many concurrent control plane operations. The cumulative number of tables and indexes in the CREATING, DELETING, or UPDATING state cannot exceed 50.
//   // Message: Too many operations for a given subscriber.
//   LIMIT_EXCEEDED_EXCEPTION = 'LimitExceededException',
//   // The request did not include the required authorization header, or it was malformed. See DynamoDB Low-Level API.
//   // Message: Request must contain a valid (registered) AWS Access Key ID.
//   MISSING_AUTHENTICATION_TOKEN_EXCEPTION = 'MissingAuthenticationTokenException',
//   // Example: Your request rate is too high. The AWS SDKs for DynamoDB automatically retry requests that receive this exception. Your request is eventually successful, unless your retry queue is too large to finish. Reduce the frequency of requests using Error Retries and Exponential Backoff.
//   // Message: You exceeded your maximum allowed provisioned throughput for a table or for one or more global secondary indexes. To view performance metrics for provisioned throughput vs. consumed throughput, open the Amazon CloudWatch console.
//   PROVISIONED_THROUGHPUT_EXCEEDED_EXCEPTION = 'ProvisionedThroughputExceededException',
//   // Example: Rate of on-demand requests exceeds the allowed account throughput.
//   // Message: Throughput exceeds the current throughput limit for your account. To request a limit increase, contact AWS Support at https://aws.amazon.com/support.
//   REQUEST_LIMIT_EXCEEDED = 'RequestLimitExceeded',
//   // Example: You tried to re-create an existing table, or delete a table currently in the CREATING state.
//   // Message: The resource which you are attempting to change is in use.
//   RESOURCE_IN_USE_EXCEPTION = 'ResourceInUseException',
//   // Example: The table that is being requested does not exist, or is too early in the CREATING state.
//   // Message: Requested resource not found.
//   RESOURCE_NOT_FOUND_EXCEPTION = 'ResourceNotFoundException',
//   // This exception is returned as an AmazonServiceException response with a THROTTLING_EXCEPTION status code. This exception might be returned if you perform control plane API operations too rapidly.
//   // For tables using on-demand mode, this exception might be returned for any data plane API operation if your request rate is too high. To learn more about on-demand scaling, see Peak Traffic and Scaling Properties
//   // Message: Rate of requests exceeds the allowed throughput.
//   THROTTLING_EXCEPTION = 'ThrottlingException',
//   // The request signature is incorrect. The most likely cause is an invalid AWS access key ID or secret key.
//   // Message: The Access Key ID or security token is invalid.
//   UNRECOGNIZED_CLIENT_EXCEPTION = 'UnrecognizedClientException',
//   // This error can occur for several reasons, such as a required parameter that is missing, a value that is out of range, or mismatched data types. The error message contains details about the specific part of the request that caused the error.
//   // Message: Varies, depending upon the specific error(s) encountered
//   VALIDATION_EXCEPTION = 'ValidationException',
//   // HTTP Status Code 5xx
//   // ?
// }

// An HTTP 5xx status code indicates a problem that must be resolved by AWS. This might be a transient error, in which case you can retry your request until it succeeds. Otherwise, go to the AWS Service Health Dashboard to see if there are any operational issues with the service.

// Internal Server Error (HTTP 500)
// DynamoDB could not process your request.

// OK to retry? Yes

// Note
// You might encounter internal server errors while working with items. These are expected during the lifetime of a table. Any failed requests can be retried immediately.

// Service Unavailable (HTTP 503)
// DynamoDB is currently unavailable. (This should be a temporary state.)

// OK to retry? Yes