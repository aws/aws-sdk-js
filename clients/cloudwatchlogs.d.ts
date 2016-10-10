import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
declare class CloudWatchLogs extends Service {
  /**
   * Cancels an export task if it is in PENDING or RUNNING state.
   */
  cancelExportTask(params: CloudWatchLogs.CancelExportTaskRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Cancels an export task if it is in PENDING or RUNNING state.
   */
  cancelExportTask(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates an ExportTask which allows you to efficiently export data from a Log Group to your Amazon S3 bucket. This is an asynchronous call. If all the required information is provided, this API will initiate an export task and respond with the task Id. Once started, DescribeExportTasks can be used to get the status of an export task. You can only have one active (RUNNING or PENDING) export task at a time, per account. You can export logs from multiple log groups or multiple time ranges to the same Amazon S3 bucket. To separate out log data for each export task, you can specify a prefix that will be used as the Amazon S3 key prefix for all exported objects.
   */
  createExportTask(params: CloudWatchLogs.CreateExportTaskRequest, callback?: (err: AWSError, data: CloudWatchLogs.CreateExportTaskResponse) => void): Request<CloudWatchLogs.CreateExportTaskResponse, AWSError>;
  /**
   * Creates an ExportTask which allows you to efficiently export data from a Log Group to your Amazon S3 bucket. This is an asynchronous call. If all the required information is provided, this API will initiate an export task and respond with the task Id. Once started, DescribeExportTasks can be used to get the status of an export task. You can only have one active (RUNNING or PENDING) export task at a time, per account. You can export logs from multiple log groups or multiple time ranges to the same Amazon S3 bucket. To separate out log data for each export task, you can specify a prefix that will be used as the Amazon S3 key prefix for all exported objects.
   */
  createExportTask(callback?: (err: AWSError, data: CloudWatchLogs.CreateExportTaskResponse) => void): Request<CloudWatchLogs.CreateExportTaskResponse, AWSError>;
  /**
   * Creates a new log group with the specified name. The name of the log group must be unique within a region for an AWS account. You can create up to 500 log groups per account. You must use the following guidelines when naming a log group:   Log group names can be between 1 and 512 characters long.   Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).  
   */
  createLogGroup(params: CloudWatchLogs.CreateLogGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a new log group with the specified name. The name of the log group must be unique within a region for an AWS account. You can create up to 500 log groups per account. You must use the following guidelines when naming a log group:   Log group names can be between 1 and 512 characters long.   Allowed characters are a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), and '.' (period).  
   */
  createLogGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a new log stream in the specified log group. The name of the log stream must be unique within the log group. There is no limit on the number of log streams that can exist in a log group. You must use the following guidelines when naming a log stream:   Log stream names can be between 1 and 512 characters long.   The ':' colon character is not allowed.  
   */
  createLogStream(params: CloudWatchLogs.CreateLogStreamRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates a new log stream in the specified log group. The name of the log stream must be unique within the log group. There is no limit on the number of log streams that can exist in a log group. You must use the following guidelines when naming a log stream:   Log stream names can be between 1 and 512 characters long.   The ':' colon character is not allowed.  
   */
  createLogStream(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the destination with the specified name and eventually disables all the subscription filters that publish to it. This will not delete the physical resource encapsulated by the destination.
   */
  deleteDestination(params: CloudWatchLogs.DeleteDestinationRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the destination with the specified name and eventually disables all the subscription filters that publish to it. This will not delete the physical resource encapsulated by the destination.
   */
  deleteDestination(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the log group with the specified name and permanently deletes all the archived log events associated with it.
   */
  deleteLogGroup(params: CloudWatchLogs.DeleteLogGroupRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the log group with the specified name and permanently deletes all the archived log events associated with it.
   */
  deleteLogGroup(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a log stream and permanently deletes all the archived log events associated with it.
   */
  deleteLogStream(params: CloudWatchLogs.DeleteLogStreamRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a log stream and permanently deletes all the archived log events associated with it.
   */
  deleteLogStream(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a metric filter associated with the specified log group.
   */
  deleteMetricFilter(params: CloudWatchLogs.DeleteMetricFilterRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a metric filter associated with the specified log group.
   */
  deleteMetricFilter(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the retention policy of the specified log group. Log events would not expire if they belong to log groups without a retention policy.
   */
  deleteRetentionPolicy(params: CloudWatchLogs.DeleteRetentionPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the retention policy of the specified log group. Log events would not expire if they belong to log groups without a retention policy.
   */
  deleteRetentionPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a subscription filter associated with the specified log group.
   */
  deleteSubscriptionFilter(params: CloudWatchLogs.DeleteSubscriptionFilterRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes a subscription filter associated with the specified log group.
   */
  deleteSubscriptionFilter(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Returns all the destinations that are associated with the AWS account making the request. The list returned in the response is ASCII-sorted by destination name. By default, this operation returns up to 50 destinations. If there are more destinations to list, the response would contain a nextToken value in the response body. You can also limit the number of destinations returned in the response by specifying the limit parameter in the request.
   */
  describeDestinations(params: CloudWatchLogs.DescribeDestinationsRequest, callback?: (err: AWSError, data: CloudWatchLogs.DescribeDestinationsResponse) => void): Request<CloudWatchLogs.DescribeDestinationsResponse, AWSError>;
  /**
   * Returns all the destinations that are associated with the AWS account making the request. The list returned in the response is ASCII-sorted by destination name. By default, this operation returns up to 50 destinations. If there are more destinations to list, the response would contain a nextToken value in the response body. You can also limit the number of destinations returned in the response by specifying the limit parameter in the request.
   */
  describeDestinations(callback?: (err: AWSError, data: CloudWatchLogs.DescribeDestinationsResponse) => void): Request<CloudWatchLogs.DescribeDestinationsResponse, AWSError>;
  /**
   * Returns all the export tasks that are associated with the AWS account making the request. The export tasks can be filtered based on TaskId or TaskStatus. By default, this operation returns up to 50 export tasks that satisfy the specified filters. If there are more export tasks to list, the response would contain a nextToken value in the response body. You can also limit the number of export tasks returned in the response by specifying the limit parameter in the request.
   */
  describeExportTasks(params: CloudWatchLogs.DescribeExportTasksRequest, callback?: (err: AWSError, data: CloudWatchLogs.DescribeExportTasksResponse) => void): Request<CloudWatchLogs.DescribeExportTasksResponse, AWSError>;
  /**
   * Returns all the export tasks that are associated with the AWS account making the request. The export tasks can be filtered based on TaskId or TaskStatus. By default, this operation returns up to 50 export tasks that satisfy the specified filters. If there are more export tasks to list, the response would contain a nextToken value in the response body. You can also limit the number of export tasks returned in the response by specifying the limit parameter in the request.
   */
  describeExportTasks(callback?: (err: AWSError, data: CloudWatchLogs.DescribeExportTasksResponse) => void): Request<CloudWatchLogs.DescribeExportTasksResponse, AWSError>;
  /**
   * Returns all the log groups that are associated with the AWS account making the request. The list returned in the response is ASCII-sorted by log group name. By default, this operation returns up to 50 log groups. If there are more log groups to list, the response would contain a nextToken value in the response body. You can also limit the number of log groups returned in the response by specifying the limit parameter in the request.
   */
  describeLogGroups(params: CloudWatchLogs.DescribeLogGroupsRequest, callback?: (err: AWSError, data: CloudWatchLogs.DescribeLogGroupsResponse) => void): Request<CloudWatchLogs.DescribeLogGroupsResponse, AWSError>;
  /**
   * Returns all the log groups that are associated with the AWS account making the request. The list returned in the response is ASCII-sorted by log group name. By default, this operation returns up to 50 log groups. If there are more log groups to list, the response would contain a nextToken value in the response body. You can also limit the number of log groups returned in the response by specifying the limit parameter in the request.
   */
  describeLogGroups(callback?: (err: AWSError, data: CloudWatchLogs.DescribeLogGroupsResponse) => void): Request<CloudWatchLogs.DescribeLogGroupsResponse, AWSError>;
  /**
   * Returns all the log streams that are associated with the specified log group. The list returned in the response is ASCII-sorted by log stream name. By default, this operation returns up to 50 log streams. If there are more log streams to list, the response would contain a nextToken value in the response body. You can also limit the number of log streams returned in the response by specifying the limit parameter in the request. This operation has a limit of five transactions per second, after which transactions are throttled.
   */
  describeLogStreams(params: CloudWatchLogs.DescribeLogStreamsRequest, callback?: (err: AWSError, data: CloudWatchLogs.DescribeLogStreamsResponse) => void): Request<CloudWatchLogs.DescribeLogStreamsResponse, AWSError>;
  /**
   * Returns all the log streams that are associated with the specified log group. The list returned in the response is ASCII-sorted by log stream name. By default, this operation returns up to 50 log streams. If there are more log streams to list, the response would contain a nextToken value in the response body. You can also limit the number of log streams returned in the response by specifying the limit parameter in the request. This operation has a limit of five transactions per second, after which transactions are throttled.
   */
  describeLogStreams(callback?: (err: AWSError, data: CloudWatchLogs.DescribeLogStreamsResponse) => void): Request<CloudWatchLogs.DescribeLogStreamsResponse, AWSError>;
  /**
   * Returns all the metrics filters associated with the specified log group. The list returned in the response is ASCII-sorted by filter name. By default, this operation returns up to 50 metric filters. If there are more metric filters to list, the response would contain a nextToken value in the response body. You can also limit the number of metric filters returned in the response by specifying the limit parameter in the request.
   */
  describeMetricFilters(params: CloudWatchLogs.DescribeMetricFiltersRequest, callback?: (err: AWSError, data: CloudWatchLogs.DescribeMetricFiltersResponse) => void): Request<CloudWatchLogs.DescribeMetricFiltersResponse, AWSError>;
  /**
   * Returns all the metrics filters associated with the specified log group. The list returned in the response is ASCII-sorted by filter name. By default, this operation returns up to 50 metric filters. If there are more metric filters to list, the response would contain a nextToken value in the response body. You can also limit the number of metric filters returned in the response by specifying the limit parameter in the request.
   */
  describeMetricFilters(callback?: (err: AWSError, data: CloudWatchLogs.DescribeMetricFiltersResponse) => void): Request<CloudWatchLogs.DescribeMetricFiltersResponse, AWSError>;
  /**
   * Returns all the subscription filters associated with the specified log group. The list returned in the response is ASCII-sorted by filter name. By default, this operation returns up to 50 subscription filters. If there are more subscription filters to list, the response would contain a nextToken value in the response body. You can also limit the number of subscription filters returned in the response by specifying the limit parameter in the request.
   */
  describeSubscriptionFilters(params: CloudWatchLogs.DescribeSubscriptionFiltersRequest, callback?: (err: AWSError, data: CloudWatchLogs.DescribeSubscriptionFiltersResponse) => void): Request<CloudWatchLogs.DescribeSubscriptionFiltersResponse, AWSError>;
  /**
   * Returns all the subscription filters associated with the specified log group. The list returned in the response is ASCII-sorted by filter name. By default, this operation returns up to 50 subscription filters. If there are more subscription filters to list, the response would contain a nextToken value in the response body. You can also limit the number of subscription filters returned in the response by specifying the limit parameter in the request.
   */
  describeSubscriptionFilters(callback?: (err: AWSError, data: CloudWatchLogs.DescribeSubscriptionFiltersResponse) => void): Request<CloudWatchLogs.DescribeSubscriptionFiltersResponse, AWSError>;
  /**
   * Retrieves log events, optionally filtered by a filter pattern from the specified log group. You can provide an optional time range to filter the results on the event timestamp. You can limit the streams searched to an explicit list of logStreamNames. By default, this operation returns as much matching log events as can fit in a response size of 1MB, up to 10,000 log events, or all the events found within a time-bounded scan window. If the response includes a nextToken, then there is more data to search, and the search can be resumed with a new request providing the nextToken. The response will contain a list of searchedLogStreams that contains information about which streams were searched in the request and whether they have been searched completely or require further pagination. The limit parameter in the request can be used to specify the maximum number of events to return in a page.
   */
  filterLogEvents(params: CloudWatchLogs.FilterLogEventsRequest, callback?: (err: AWSError, data: CloudWatchLogs.FilterLogEventsResponse) => void): Request<CloudWatchLogs.FilterLogEventsResponse, AWSError>;
  /**
   * Retrieves log events, optionally filtered by a filter pattern from the specified log group. You can provide an optional time range to filter the results on the event timestamp. You can limit the streams searched to an explicit list of logStreamNames. By default, this operation returns as much matching log events as can fit in a response size of 1MB, up to 10,000 log events, or all the events found within a time-bounded scan window. If the response includes a nextToken, then there is more data to search, and the search can be resumed with a new request providing the nextToken. The response will contain a list of searchedLogStreams that contains information about which streams were searched in the request and whether they have been searched completely or require further pagination. The limit parameter in the request can be used to specify the maximum number of events to return in a page.
   */
  filterLogEvents(callback?: (err: AWSError, data: CloudWatchLogs.FilterLogEventsResponse) => void): Request<CloudWatchLogs.FilterLogEventsResponse, AWSError>;
  /**
   * Retrieves log events from the specified log stream. You can provide an optional time range to filter the results on the event timestamp. By default, this operation returns as much log events as can fit in a response size of 1MB, up to 10,000 log events. The response will always include a nextForwardToken and a nextBackwardToken in the response body. You can use any of these tokens in subsequent GetLogEvents requests to paginate through events in either forward or backward direction. You can also limit the number of log events returned in the response by specifying the limit parameter in the request.
   */
  getLogEvents(params: CloudWatchLogs.GetLogEventsRequest, callback?: (err: AWSError, data: CloudWatchLogs.GetLogEventsResponse) => void): Request<CloudWatchLogs.GetLogEventsResponse, AWSError>;
  /**
   * Retrieves log events from the specified log stream. You can provide an optional time range to filter the results on the event timestamp. By default, this operation returns as much log events as can fit in a response size of 1MB, up to 10,000 log events. The response will always include a nextForwardToken and a nextBackwardToken in the response body. You can use any of these tokens in subsequent GetLogEvents requests to paginate through events in either forward or backward direction. You can also limit the number of log events returned in the response by specifying the limit parameter in the request.
   */
  getLogEvents(callback?: (err: AWSError, data: CloudWatchLogs.GetLogEventsResponse) => void): Request<CloudWatchLogs.GetLogEventsResponse, AWSError>;
  /**
   * Creates or updates a Destination. A destination encapsulates a physical resource (such as a Kinesis stream) and allows you to subscribe to a real-time stream of log events of a different account, ingested through PutLogEvents requests. Currently, the only supported physical resource is a Amazon Kinesis stream belonging to the same account as the destination. A destination controls what is written to its Amazon Kinesis stream through an access policy. By default, PutDestination does not set any access policy with the destination, which means a cross-account user will not be able to call PutSubscriptionFilter against this destination. To enable that, the destination owner must call PutDestinationPolicy after PutDestination.
   */
  putDestination(params: CloudWatchLogs.PutDestinationRequest, callback?: (err: AWSError, data: CloudWatchLogs.PutDestinationResponse) => void): Request<CloudWatchLogs.PutDestinationResponse, AWSError>;
  /**
   * Creates or updates a Destination. A destination encapsulates a physical resource (such as a Kinesis stream) and allows you to subscribe to a real-time stream of log events of a different account, ingested through PutLogEvents requests. Currently, the only supported physical resource is a Amazon Kinesis stream belonging to the same account as the destination. A destination controls what is written to its Amazon Kinesis stream through an access policy. By default, PutDestination does not set any access policy with the destination, which means a cross-account user will not be able to call PutSubscriptionFilter against this destination. To enable that, the destination owner must call PutDestinationPolicy after PutDestination.
   */
  putDestination(callback?: (err: AWSError, data: CloudWatchLogs.PutDestinationResponse) => void): Request<CloudWatchLogs.PutDestinationResponse, AWSError>;
  /**
   * Creates or updates an access policy associated with an existing Destination. An access policy is an IAM policy document that is used to authorize claims to register a subscription filter against a given destination.
   */
  putDestinationPolicy(params: CloudWatchLogs.PutDestinationPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates an access policy associated with an existing Destination. An access policy is an IAM policy document that is used to authorize claims to register a subscription filter against a given destination.
   */
  putDestinationPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Uploads a batch of log events to the specified log stream. Every PutLogEvents request must include the sequenceToken obtained from the response of the previous request. An upload in a newly created log stream does not require a sequenceToken. You can also get the sequenceToken using DescribeLogStreams. The batch of events must satisfy the following constraints:   The maximum batch size is 1,048,576 bytes, and this size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.   None of the log events in the batch can be more than 2 hours in the future.   None of the log events in the batch can be older than 14 days or the retention period of the log group.   The log events in the batch must be in chronological ordered by their timestamp.   The maximum number of log events in a batch is 10,000.   A batch of log events in a single PutLogEvents request cannot span more than 24 hours. Otherwise, the PutLogEvents operation will fail.  
   */
  putLogEvents(params: CloudWatchLogs.PutLogEventsRequest, callback?: (err: AWSError, data: CloudWatchLogs.PutLogEventsResponse) => void): Request<CloudWatchLogs.PutLogEventsResponse, AWSError>;
  /**
   * Uploads a batch of log events to the specified log stream. Every PutLogEvents request must include the sequenceToken obtained from the response of the previous request. An upload in a newly created log stream does not require a sequenceToken. You can also get the sequenceToken using DescribeLogStreams. The batch of events must satisfy the following constraints:   The maximum batch size is 1,048,576 bytes, and this size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.   None of the log events in the batch can be more than 2 hours in the future.   None of the log events in the batch can be older than 14 days or the retention period of the log group.   The log events in the batch must be in chronological ordered by their timestamp.   The maximum number of log events in a batch is 10,000.   A batch of log events in a single PutLogEvents request cannot span more than 24 hours. Otherwise, the PutLogEvents operation will fail.  
   */
  putLogEvents(callback?: (err: AWSError, data: CloudWatchLogs.PutLogEventsResponse) => void): Request<CloudWatchLogs.PutLogEventsResponse, AWSError>;
  /**
   * Creates or updates a metric filter and associates it with the specified log group. Metric filters allow you to configure rules to extract metric data from log events ingested through PutLogEvents requests. The maximum number of metric filters that can be associated with a log group is 100.
   */
  putMetricFilter(params: CloudWatchLogs.PutMetricFilterRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates a metric filter and associates it with the specified log group. Metric filters allow you to configure rules to extract metric data from log events ingested through PutLogEvents requests. The maximum number of metric filters that can be associated with a log group is 100.
   */
  putMetricFilter(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the retention of the specified log group. A retention policy allows you to configure the number of days you want to retain log events in the specified log group.
   */
  putRetentionPolicy(params: CloudWatchLogs.PutRetentionPolicyRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Sets the retention of the specified log group. A retention policy allows you to configure the number of days you want to retain log events in the specified log group.
   */
  putRetentionPolicy(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates a subscription filter and associates it with the specified log group. Subscription filters allow you to subscribe to a real-time stream of log events ingested through PutLogEvents requests and have them delivered to a specific destination. Currently, the supported destinations are:   An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.    A logical destination (used via an ARN of Destination) belonging to a different account, for cross-account delivery.   An Amazon Kinesis Firehose stream belonging to the same account as the subscription filter, for same-account delivery.   An AWS Lambda function belonging to the same account as the subscription filter, for same-account delivery.   Currently there can only be one subscription filter associated with a log group.
   */
  putSubscriptionFilter(params: CloudWatchLogs.PutSubscriptionFilterRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates a subscription filter and associates it with the specified log group. Subscription filters allow you to subscribe to a real-time stream of log events ingested through PutLogEvents requests and have them delivered to a specific destination. Currently, the supported destinations are:   An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.    A logical destination (used via an ARN of Destination) belonging to a different account, for cross-account delivery.   An Amazon Kinesis Firehose stream belonging to the same account as the subscription filter, for same-account delivery.   An AWS Lambda function belonging to the same account as the subscription filter, for same-account delivery.   Currently there can only be one subscription filter associated with a log group.
   */
  putSubscriptionFilter(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern.
   */
  testMetricFilter(params: CloudWatchLogs.TestMetricFilterRequest, callback?: (err: AWSError, data: CloudWatchLogs.TestMetricFilterResponse) => void): Request<CloudWatchLogs.TestMetricFilterResponse, AWSError>;
  /**
   * Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern.
   */
  testMetricFilter(callback?: (err: AWSError, data: CloudWatchLogs.TestMetricFilterResponse) => void): Request<CloudWatchLogs.TestMetricFilterResponse, AWSError>;
}
declare namespace CloudWatchLogs {
  export type AccessPolicy = string;
  export type Arn = string;
  export interface CancelExportTaskRequest {
    /**
     * Id of the export task to cancel.
     */
    taskId: ExportTaskId;
  }
  export interface CreateExportTaskRequest {
    /**
     * The name of the export task.
     */
    taskName?: ExportTaskName;
    /**
     * The name of the log group to export.
     */
    logGroupName: LogGroupName;
    /**
     * Will only export log streams that match the provided logStreamNamePrefix. If you don't specify a value, no prefix filter is applied.
     */
    logStreamNamePrefix?: LogStreamName;
    /**
     * A point in time expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC. It indicates the start time of the range for the request. Events with a timestamp prior to this time will not be exported.
     */
    from?: Timestamp;
    /**
     * A point in time expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC. It indicates the end time of the range for the request. Events with a timestamp later than this time will not be exported.
     */
    to?: Timestamp;
    /**
     * Name of Amazon S3 bucket to which the log data will be exported.  Note: Only buckets in the same AWS region are supported.
     */
    destination?: ExportDestinationBucket;
    /**
     * Prefix that will be used as the start of Amazon S3 key for every object exported. If not specified, this defaults to 'exportedlogs'.
     */
    destinationPrefix?: ExportDestinationPrefix;
  }
  export interface CreateExportTaskResponse {
    /**
     * Id of the export task that got created.
     */
    taskId?: ExportTaskId;
  }
  export interface CreateLogGroupRequest {
    /**
     * The name of the log group to create.
     */
    logGroupName: LogGroupName;
  }
  export interface CreateLogStreamRequest {
    /**
     * The name of the log group under which the log stream is to be created.
     */
    logGroupName: LogGroupName;
    /**
     * The name of the log stream to create.
     */
    logStreamName?: LogStreamName;
  }
  export type Days = number;
  export type DefaultValue = number;
  export interface DeleteDestinationRequest {
    /**
     * The name of destination to delete.
     */
    destinationName: DestinationName;
  }
  export interface DeleteLogGroupRequest {
    /**
     * The name of the log group to delete.
     */
    logGroupName: LogGroupName;
  }
  export interface DeleteLogStreamRequest {
    /**
     * The name of the log group under which the log stream to delete belongs.
     */
    logGroupName: LogGroupName;
    /**
     * The name of the log stream to delete.
     */
    logStreamName?: LogStreamName;
  }
  export interface DeleteMetricFilterRequest {
    /**
     * The name of the log group that is associated with the metric filter to delete.
     */
    logGroupName: LogGroupName;
    /**
     * The name of the metric filter to delete.
     */
    filterName?: FilterName;
  }
  export interface DeleteRetentionPolicyRequest {
    /**
     * The name of the log group that is associated with the retention policy to delete.
     */
    logGroupName: LogGroupName;
  }
  export interface DeleteSubscriptionFilterRequest {
    /**
     * The name of the log group that is associated with the subscription filter to delete.
     */
    logGroupName: LogGroupName;
    /**
     * The name of the subscription filter to delete.
     */
    filterName?: FilterName;
  }
  export type Descending = boolean;
  export interface DescribeDestinationsRequest {
    /**
     * Will only return destinations that match the provided destinationNamePrefix. If you don't specify a value, no prefix is applied.
     */
    DestinationNamePrefix?: DestinationName;
    nextToken?: NextToken;
    limit?: DescribeLimit;
  }
  export interface DescribeDestinationsResponse {
    destinations?: Destinations;
    nextToken?: NextToken;
  }
  export interface DescribeExportTasksRequest {
    /**
     * Export task that matches the specified task Id will be returned. This can result in zero or one export task.
     */
    taskId?: ExportTaskId;
    /**
     * All export tasks that matches the specified status code will be returned. This can return zero or more export tasks.
     */
    statusCode?: ExportTaskStatusCode;
    /**
     * A string token used for pagination that points to the next page of results. It must be a value obtained from the response of the previous DescribeExportTasks request.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of items returned in the response. If you don't specify a value, the request would return up to 50 items.
     */
    limit?: DescribeLimit;
  }
  export interface DescribeExportTasksResponse {
    exportTasks?: ExportTasks;
    nextToken?: NextToken;
  }
  export type DescribeLimit = number;
  export interface DescribeLogGroupsRequest {
    /**
     * Will only return log groups that match the provided logGroupNamePrefix. If you don't specify a value, no prefix filter is applied.
     */
    logGroupNamePrefix?: LogGroupName;
    /**
     * A string token used for pagination that points to the next page of results. It must be a value obtained from the response of the previous DescribeLogGroups request.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of items returned in the response. If you don't specify a value, the request would return up to 50 items.
     */
    limit?: DescribeLimit;
  }
  export interface DescribeLogGroupsResponse {
    logGroups?: LogGroups;
    nextToken?: NextToken;
  }
  export interface DescribeLogStreamsRequest {
    /**
     * The log group name for which log streams are to be listed.
     */
    logGroupName: LogGroupName;
    /**
     * Will only return log streams that match the provided logStreamNamePrefix. If you don't specify a value, no prefix filter is applied.
     */
    logStreamNamePrefix?: LogStreamName;
    /**
     * Specifies what to order the returned log streams by. Valid arguments are 'LogStreamName' or 'LastEventTime'. If you don't specify a value, results are ordered by LogStreamName. If 'LastEventTime' is chosen, the request cannot also contain a logStreamNamePrefix.
     */
    orderBy?: OrderBy;
    /**
     * If set to true, results are returned in descending order. If you don't specify a value or set it to false, results are returned in ascending order.
     */
    descending?: Descending;
    /**
     * A string token used for pagination that points to the next page of results. It must be a value obtained from the response of the previous DescribeLogStreams request.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of items returned in the response. If you don't specify a value, the request would return up to 50 items.
     */
    limit?: DescribeLimit;
  }
  export interface DescribeLogStreamsResponse {
    logStreams?: LogStreams;
    nextToken?: NextToken;
  }
  export interface DescribeMetricFiltersRequest {
    /**
     * The log group name for which metric filters are to be listed.
     */
    logGroupName: LogGroupName;
    /**
     * Will only return metric filters that match the provided filterNamePrefix. If you don't specify a value, no prefix filter is applied.
     */
    filterNamePrefix?: FilterName;
    /**
     * A string token used for pagination that points to the next page of results. It must be a value obtained from the response of the previous DescribeMetricFilters request.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of items returned in the response. If you don't specify a value, the request would return up to 50 items.
     */
    limit?: DescribeLimit;
  }
  export interface DescribeMetricFiltersResponse {
    metricFilters?: MetricFilters;
    nextToken?: NextToken;
  }
  export interface DescribeSubscriptionFiltersRequest {
    /**
     * The log group name for which subscription filters are to be listed.
     */
    logGroupName: LogGroupName;
    /**
     * Will only return subscription filters that match the provided filterNamePrefix. If you don't specify a value, no prefix filter is applied.
     */
    filterNamePrefix?: FilterName;
    nextToken?: NextToken;
    limit?: DescribeLimit;
  }
  export interface DescribeSubscriptionFiltersResponse {
    subscriptionFilters?: SubscriptionFilters;
    nextToken?: NextToken;
  }
  export interface Destination {
    /**
     * Name of the destination.
     */
    destinationName?: DestinationName;
    /**
     * ARN of the physical target where the log events will be delivered (eg. ARN of a Kinesis stream).
     */
    targetArn?: TargetArn;
    /**
     * A role for impersonation for delivering log events to the target.
     */
    roleArn?: RoleArn;
    /**
     * An IAM policy document that governs which AWS accounts can create subscription filters against this destination.
     */
    accessPolicy?: AccessPolicy;
    /**
     * ARN of this destination.
     */
    arn?: Arn;
    /**
     * A point in time expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC specifying when this destination was created.
     */
    creationTime?: Timestamp;
  }
  export type DestinationArn = string;
  export type DestinationName = string;
  export type Destinations = Destination[];
  export type EventId = string;
  export type EventMessage = string;
  export type EventNumber = number;
  export type EventsLimit = number;
  export type ExportDestinationBucket = string;
  export type ExportDestinationPrefix = string;
  export interface ExportTask {
    /**
     * Id of the export task.
     */
    taskId?: ExportTaskId;
    /**
     * The name of the export task.
     */
    taskName?: ExportTaskName;
    /**
     * The name of the log group from which logs data was exported.
     */
    logGroupName?: LogGroupName;
    /**
     * A point in time expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC. Events with a timestamp prior to this time are not exported.
     */
    from?: Timestamp;
    /**
     * A point in time expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC. Events with a timestamp later than this time are not exported.
     */
    to?: Timestamp;
    /**
     * Name of Amazon S3 bucket to which the log data was exported.
     */
    destination?: ExportDestinationBucket;
    /**
     * Prefix that was used as the start of Amazon S3 key for every object exported.
     */
    destinationPrefix?: ExportDestinationPrefix;
    /**
     * Status of the export task.
     */
    status?: ExportTaskStatus;
    /**
     * Execution info about the export task.
     */
    executionInfo?: ExportTaskExecutionInfo;
  }
  export interface ExportTaskExecutionInfo {
    /**
     * A point in time when the export task got created.
     */
    creationTime?: Timestamp;
    /**
     * A point in time when the export task got completed.
     */
    completionTime?: Timestamp;
  }
  export type ExportTaskId = string;
  export type ExportTaskName = string;
  export interface ExportTaskStatus {
    /**
     * Status code of the export task.
     */
    code?: ExportTaskStatusCode;
    /**
     * Status message related to the code.
     */
    message?: ExportTaskStatusMessage;
  }
  export type ExportTaskStatusCode = string;
  export type ExportTaskStatusMessage = string;
  export type ExportTasks = ExportTask[];
  export type ExtractedValues = {[key: string]: Value};
  export type FilterCount = number;
  export interface FilterLogEventsRequest {
    /**
     * The name of the log group to query.
     */
    logGroupName: LogGroupName;
    /**
     * Optional list of log stream names within the specified log group to search. Defaults to all the log streams in the log group.
     */
    logStreamNames?: InputLogStreamNames;
    /**
     * A point in time expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC. If provided, events with a timestamp prior to this time are not returned.
     */
    startTime?: Timestamp;
    /**
     * A point in time expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC. If provided, events with a timestamp later than this time are not returned.
     */
    endTime?: Timestamp;
    /**
     * A valid CloudWatch Logs filter pattern to use for filtering the response. If not provided, all the events are matched.
     */
    filterPattern?: FilterPattern;
    /**
     * A pagination token obtained from a FilterLogEvents response to continue paginating the FilterLogEvents results. This token is omitted from the response when there are no other events to display.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of events to return in a page of results. Default is 10,000 events.
     */
    limit?: EventsLimit;
    /**
     * If provided, the API will make a best effort to provide responses that contain events from multiple log streams within the log group interleaved in a single response. If not provided, all the matched log events in the first log stream will be searched first, then those in the next log stream, etc.
     */
    interleaved?: Interleaved;
  }
  export interface FilterLogEventsResponse {
    /**
     * A list of FilteredLogEvent objects representing the matched events from the request.
     */
    events?: FilteredLogEvents;
    /**
     * A list of SearchedLogStream objects indicating which log streams have been searched in this request and whether each has been searched completely or still has more to be paginated.
     */
    searchedLogStreams?: SearchedLogStreams;
    /**
     * A pagination token obtained from a FilterLogEvents response to continue paginating the FilterLogEvents results. This token is omitted from the response when there are no other events to display.
     */
    nextToken?: NextToken;
  }
  export type FilterName = string;
  export type FilterPattern = string;
  export interface FilteredLogEvent {
    /**
     * The name of the log stream this event belongs to.
     */
    logStreamName?: LogStreamName;
    timestamp?: Timestamp;
    /**
     * The data contained in the log event.
     */
    message?: EventMessage;
    ingestionTime?: Timestamp;
    /**
     * A unique identifier for this event.
     */
    eventId?: EventId;
  }
  export type FilteredLogEvents = FilteredLogEvent[];
  export interface GetLogEventsRequest {
    /**
     * The name of the log group to query.
     */
    logGroupName: LogGroupName;
    /**
     * The name of the log stream to query.
     */
    logStreamName?: LogStreamName;
    startTime?: Timestamp;
    endTime?: Timestamp;
    /**
     * A string token used for pagination that points to the next page of results. It must be a value obtained from the nextForwardToken or nextBackwardToken fields in the response of the previous GetLogEvents request.
     */
    nextToken?: NextToken;
    /**
     * The maximum number of log events returned in the response. If you don't specify a value, the request would return as many log events as can fit in a response size of 1MB, up to 10,000 log events.
     */
    limit?: EventsLimit;
    /**
     * If set to true, the earliest log events would be returned first. The default is false (the latest log events are returned first).
     */
    startFromHead?: StartFromHead;
  }
  export interface GetLogEventsResponse {
    events?: OutputLogEvents;
    nextForwardToken?: NextToken;
    nextBackwardToken?: NextToken;
  }
  export interface InputLogEvent {
    timestamp: Timestamp;
    message?: EventMessage;
  }
  export type InputLogEvents = InputLogEvent[];
  export type InputLogStreamNames = LogStreamName[];
  export type Interleaved = boolean;
  export type LogEventIndex = number;
  export interface LogGroup {
    logGroupName?: LogGroupName;
    creationTime?: Timestamp;
    retentionInDays?: Days;
    metricFilterCount?: FilterCount;
    arn?: Arn;
    storedBytes?: StoredBytes;
  }
  export type LogGroupName = string;
  export type LogGroups = LogGroup[];
  export interface LogStream {
    logStreamName?: LogStreamName;
    creationTime?: Timestamp;
    firstEventTimestamp?: Timestamp;
    lastEventTimestamp?: Timestamp;
    lastIngestionTime?: Timestamp;
    uploadSequenceToken?: SequenceToken;
    arn?: Arn;
    storedBytes?: StoredBytes;
  }
  export type LogStreamName = string;
  export type LogStreamSearchedCompletely = boolean;
  export type LogStreams = LogStream[];
  export interface MetricFilter {
    filterName?: FilterName;
    filterPattern?: FilterPattern;
    metricTransformations?: MetricTransformations;
    creationTime?: Timestamp;
  }
  export interface MetricFilterMatchRecord {
    eventNumber?: EventNumber;
    eventMessage?: EventMessage;
    extractedValues?: ExtractedValues;
  }
  export type MetricFilterMatches = MetricFilterMatchRecord[];
  export type MetricFilters = MetricFilter[];
  export type MetricName = string;
  export type MetricNamespace = string;
  export interface MetricTransformation {
    /**
     * Name of the metric.
     */
    metricName: MetricName;
    /**
     * Namespace to which the metric belongs.
     */
    metricNamespace?: MetricNamespace;
    /**
     *  A string representing a value to publish to this metric when a filter pattern matches a log event. 
     */
    metricValue?: MetricValue;
    /**
     * (Optional) A default value to emit when a filter pattern does not match a log event. Can be null.
     */
    defaultValue?: DefaultValue;
  }
  export type MetricTransformations = MetricTransformation[];
  export type MetricValue = string;
  export type NextToken = string;
  export type OrderBy = string;
  export interface OutputLogEvent {
    timestamp?: Timestamp;
    message?: EventMessage;
    ingestionTime?: Timestamp;
  }
  export type OutputLogEvents = OutputLogEvent[];
  export interface PutDestinationPolicyRequest {
    /**
     * A name for an existing destination.
     */
    destinationName: DestinationName;
    /**
     * An IAM policy document that authorizes cross-account users to deliver their log events to associated destination.
     */
    accessPolicy?: AccessPolicy;
  }
  export interface PutDestinationRequest {
    /**
     * A name for the destination.
     */
    destinationName: DestinationName;
    /**
     * The ARN of an Amazon Kinesis stream to deliver matching log events to.
     */
    targetArn?: TargetArn;
    /**
     * The ARN of an IAM role that grants CloudWatch Logs permissions to do Amazon Kinesis PutRecord requests on the destination stream.
     */
    roleArn?: RoleArn;
  }
  export interface PutDestinationResponse {
    destination?: Destination;
  }
  export interface PutLogEventsRequest {
    /**
     * The name of the log group to put log events to.
     */
    logGroupName: LogGroupName;
    /**
     * The name of the log stream to put log events to.
     */
    logStreamName?: LogStreamName;
    logEvents?: InputLogEvents;
    /**
     * A string token that must be obtained from the response of the previous PutLogEvents request.
     */
    sequenceToken?: SequenceToken;
  }
  export interface PutLogEventsResponse {
    nextSequenceToken?: SequenceToken;
    rejectedLogEventsInfo?: RejectedLogEventsInfo;
  }
  export interface PutMetricFilterRequest {
    /**
     * The name of the log group to associate the metric filter with.
     */
    logGroupName: LogGroupName;
    /**
     * A name for the metric filter.
     */
    filterName?: FilterName;
    /**
     * A valid CloudWatch Logs filter pattern for extracting metric data out of ingested log events.
     */
    filterPattern?: FilterPattern;
    /**
     * A collection of information needed to define how metric data gets emitted.
     */
    metricTransformations?: MetricTransformations;
  }
  export interface PutRetentionPolicyRequest {
    /**
     * The name of the log group to associate the retention policy with.
     */
    logGroupName: LogGroupName;
    retentionInDays?: Days;
  }
  export interface PutSubscriptionFilterRequest {
    /**
     * The name of the log group to associate the subscription filter with.
     */
    logGroupName: LogGroupName;
    /**
     * A name for the subscription filter.
     */
    filterName?: FilterName;
    /**
     * A valid CloudWatch Logs filter pattern for subscribing to a filtered stream of log events.
     */
    filterPattern?: FilterPattern;
    /**
     * The ARN of the destination to deliver matching log events to. Currently, the supported destinations are:   An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.   A logical destination (used via an ARN of Destination) belonging to a different account, for cross-account delivery.   An Amazon Kinesis Firehose stream belonging to the same account as the subscription filter, for same-account delivery.   An AWS Lambda function belonging to the same account as the subscription filter, for same-account delivery.  
     */
    destinationArn?: DestinationArn;
    /**
     * The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream. You don't need to provide the ARN when you are working with a logical destination (used via an ARN of Destination) for cross-account delivery.
     */
    roleArn?: RoleArn;
  }
  export interface RejectedLogEventsInfo {
    tooNewLogEventStartIndex?: LogEventIndex;
    tooOldLogEventEndIndex?: LogEventIndex;
    expiredLogEventEndIndex?: LogEventIndex;
  }
  export type RoleArn = string;
  export interface SearchedLogStream {
    /**
     * The name of the log stream.
     */
    logStreamName?: LogStreamName;
    /**
     * Indicates whether all the events in this log stream were searched or more data exists to search by paginating further.
     */
    searchedCompletely?: LogStreamSearchedCompletely;
  }
  export type SearchedLogStreams = SearchedLogStream[];
  export type SequenceToken = string;
  export type StartFromHead = boolean;
  export type StoredBytes = number;
  export interface SubscriptionFilter {
    filterName?: FilterName;
    logGroupName?: LogGroupName;
    filterPattern?: FilterPattern;
    destinationArn?: DestinationArn;
    roleArn?: RoleArn;
    creationTime?: Timestamp;
  }
  export type SubscriptionFilters = SubscriptionFilter[];
  export type TargetArn = string;
  export type TestEventMessages = EventMessage[];
  export interface TestMetricFilterRequest {
    filterPattern: FilterPattern;
    /**
     * A list of log event messages to test.
     */
    logEventMessages?: TestEventMessages;
  }
  export interface TestMetricFilterResponse {
    matches?: MetricFilterMatches;
  }
  export type Timestamp = number;
  export type Token = string;
  export type Value = string;
}
export = CloudWatchLogs;
