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
 * ### Sending a Request Using SimpleWorkflow
 *
 * ```js
 * svc = new AWS.SimpleWorkflow();
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
 *   @option (see AWS.SimpleWorkflow.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.SimpleWorkflow.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.SimpleWorkflow.Client
 *
 */
AWS.SimpleWorkflow = inherit({})

/**
 * The low-level SimpleWorkflow client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method countClosedWorkflowExecutions(params, callback)
 *   Calls the CountClosedWorkflowExecutions API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain containing the workflow executions to count.
 *     * `startTimeFilter` &mdash; (`Object`) If specified, only workflow
 *       executions that meet the start time criteria of the filter are
 *       counted. startTimeFilter and closeTimeFilter are mutually
 *       exclusive. You must specify one of these in a request but not
 *       both.
 *       * `oldestDate` &mdash; **required** &mdash; (`Date`)
 *       * `latestDate` &mdash; (`Date`)
 *     * `closeTimeFilter` &mdash; (`Object`) If specified, only workflow
 *       executions that meet the close time criteria of the filter are
 *       counted. startTimeFilter and closeTimeFilter are mutually
 *       exclusive. You must specify one of these in a request but not
 *       both.
 *       * `oldestDate` &mdash; **required** &mdash; (`Date`)
 *       * `latestDate` &mdash; (`Date`)
 *     * `executionFilter` &mdash; (`Object`) If specified, only workflow
 *       executions matching the WorkflowId in the filter are counted.
 *       closeStatusFilter, executionFilter, typeFilter and tagFilter are
 *       mutually exclusive. You can specify at most one of these in a
 *       request.
 *       * `workflowId` &mdash; **required** &mdash; (`String`)
 *     * `typeFilter` &mdash; (`Object`) If specified, indicates the type
 *       of the workflow executions to be counted. closeStatusFilter,
 *       executionFilter, typeFilter and tagFilter are mutually
 *       exclusive. You can specify at most one of these in a request.
 *       * `name` &mdash; **required** &mdash; (`String`)
 *       * `version` &mdash; (`String`)
 *     * `tagFilter` &mdash; (`Object`) If specified, only executions
 *       that have a tag that matches the filter are counted.
 *       closeStatusFilter, executionFilter, typeFilter and tagFilter are
 *       mutually exclusive. You can specify at most one of these in a
 *       request.
 *       * `tag` &mdash; **required** &mdash; (`String`)
 *     * `closeStatusFilter` &mdash; (`Object`) If specified, only
 *       workflow executions that match this close status are counted.
 *       This filter has an affect only if executionStatus is specified
 *       as CLOSED. closeStatusFilter, executionFilter, typeFilter and
 *       tagFilter are mutually exclusive. You can specify at most one of
 *       these in a request.
 *       * `status` &mdash; **required** &mdash; (`String`)
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
 *       * `count` &mdash; (`Integer`)
 *       * `truncated` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method countOpenWorkflowExecutions(params, callback)
 *   Calls the CountOpenWorkflowExecutions API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain containing the workflow executions to count.
 *     * `startTimeFilter` &mdash; **required** &mdash; (`Object`)
 *       Specifies the start time criteria that workflow executions must
 *       meet in order to be counted.
 *       * `oldestDate` &mdash; **required** &mdash; (`Date`)
 *       * `latestDate` &mdash; (`Date`)
 *     * `typeFilter` &mdash; (`Object`) Specifies the type of the
 *       workflow executions to be counted. executionFilter, typeFilter
 *       and tagFilter are mutually exclusive. You can specify at most
 *       one of these in a request.
 *       * `name` &mdash; **required** &mdash; (`String`)
 *       * `version` &mdash; (`String`)
 *     * `tagFilter` &mdash; (`Object`) If specified, only executions
 *       that have a tag that matches the filter are counted.
 *       executionFilter, typeFilter and tagFilter are mutually
 *       exclusive. You can specify at most one of these in a request.
 *       * `tag` &mdash; **required** &mdash; (`String`)
 *     * `executionFilter` &mdash; (`Object`) If specified, only workflow
 *       executions matching the WorkflowId in the filter are counted.
 *       executionFilter, typeFilter and tagFilter are mutually
 *       exclusive. You can specify at most one of these in a request.
 *       * `workflowId` &mdash; **required** &mdash; (`String`)
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
 *       * `count` &mdash; (`Integer`)
 *       * `truncated` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method countPendingActivityTasks(params, callback)
 *   Calls the CountPendingActivityTasks API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain that contains the task list.
 *     * `taskList` &mdash; **required** &mdash; (`Object`) The name of
 *       the task list.
 *       * `name` &mdash; **required** &mdash; (`String`)
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
 *       * `count` &mdash; (`Integer`)
 *       * `truncated` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method countPendingDecisionTasks(params, callback)
 *   Calls the CountPendingDecisionTasks API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain that contains the task list.
 *     * `taskList` &mdash; **required** &mdash; (`Object`) The name of
 *       the task list.
 *       * `name` &mdash; **required** &mdash; (`String`)
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
 *       * `count` &mdash; (`Integer`)
 *       * `truncated` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deprecateActivityType(params, callback)
 *   Calls the DeprecateActivityType API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain in which the activity type is registered.
 *     * `activityType` &mdash; **required** &mdash; (`Object`) The
 *       activity type to deprecate.
 *       * `name` &mdash; **required** &mdash; (`String`)
 *       * `version` &mdash; **required** &mdash; (`String`)
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
 * @!method deprecateDomain(params, callback)
 *   Calls the DeprecateDomain API operation.
 *   @param params [Object]
 *     * `name` &mdash; **required** &mdash; (`String`) The name of the
 *       domain to deprecate.
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
 * @!method deprecateWorkflowType(params, callback)
 *   Calls the DeprecateWorkflowType API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain in which the workflow type is registered.
 *     * `workflowType` &mdash; **required** &mdash; (`Object`) The
 *       workflow type to deprecate.
 *       * `name` &mdash; **required** &mdash; (`String`)
 *       * `version` &mdash; **required** &mdash; (`String`)
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
 * @!method describeActivityType(params, callback)
 *   Calls the DescribeActivityType API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain in which the activity type is registered.
 *     * `activityType` &mdash; **required** &mdash; (`Object`) The
 *       activity type to describe.
 *       * `name` &mdash; **required** &mdash; (`String`)
 *       * `version` &mdash; **required** &mdash; (`String`)
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
 *       * `typeInfo` &mdash; (`Object`)
 *         * `activityType` &mdash; (`Object`)
 *           * `name` &mdash; (`String`)
 *           * `version` &mdash; (`String`)
 *         * `status` &mdash; (`String`)
 *         * `description` &mdash; (`String`)
 *         * `creationDate` &mdash; (`Date`)
 *         * `deprecationDate` &mdash; (`Date`)
 *       * `configuration` &mdash; (`Object`)
 *         * `defaultTaskStartToCloseTimeout` &mdash; (`String`)
 *         * `defaultTaskHeartbeatTimeout` &mdash; (`String`)
 *         * `defaultTaskList` &mdash; (`Object`)
 *           * `name` &mdash; (`String`)
 *         * `defaultTaskScheduleToStartTimeout` &mdash; (`String`)
 *         * `defaultTaskScheduleToCloseTimeout` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDomain(params, callback)
 *   Calls the DescribeDomain API operation.
 *   @param params [Object]
 *     * `name` &mdash; **required** &mdash; (`String`) The name of the
 *       domain to describe.
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
 *       * `domainInfo` &mdash; (`Object`)
 *         * `name` &mdash; (`String`)
 *         * `status` &mdash; (`String`)
 *         * `description` &mdash; (`String`)
 *       * `configuration` &mdash; (`Object`)
 *         * `workflowExecutionRetentionPeriodInDays` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeWorkflowExecution(params, callback)
 *   Calls the DescribeWorkflowExecution API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain containing the workflow execution.
 *     * `execution` &mdash; **required** &mdash; (`Object`) The workflow
 *       execution to describe.
 *       * `workflowId` &mdash; **required** &mdash; (`String`)
 *       * `runId` &mdash; **required** &mdash; (`String`)
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
 *       * `executionInfo` &mdash; (`Object`)
 *         * `execution` &mdash; (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *         * `workflowType` &mdash; (`Object`)
 *           * `name` &mdash; (`String`)
 *           * `version` &mdash; (`String`)
 *         * `startTimestamp` &mdash; (`Date`)
 *         * `closeTimestamp` &mdash; (`Date`)
 *         * `executionStatus` &mdash; (`String`)
 *         * `closeStatus` &mdash; (`String`)
 *         * `parent` &mdash; (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *         * `tagList` &mdash; (`Array<String>`)
 *         * `cancelRequested` &mdash; (`Boolean`)
 *       * `executionConfiguration` &mdash; (`Object`)
 *         * `taskStartToCloseTimeout` &mdash; (`String`)
 *         * `executionStartToCloseTimeout` &mdash; (`String`)
 *         * `taskList` &mdash; (`Object`)
 *           * `name` &mdash; (`String`)
 *         * `childPolicy` &mdash; (`String`)
 *       * `openCounts` &mdash; (`Object`)
 *         * `openActivityTasks` &mdash; (`Integer`)
 *         * `openDecisionTasks` &mdash; (`Integer`)
 *         * `openTimers` &mdash; (`Integer`)
 *         * `openChildWorkflowExecutions` &mdash; (`Integer`)
 *       * `latestActivityTaskTimestamp` &mdash; (`Date`)
 *       * `latestExecutionContext` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeWorkflowType(params, callback)
 *   Calls the DescribeWorkflowType API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain in which this workflow type is registered.
 *     * `workflowType` &mdash; **required** &mdash; (`Object`) The
 *       workflow type to describe.
 *       * `name` &mdash; **required** &mdash; (`String`)
 *       * `version` &mdash; **required** &mdash; (`String`)
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
 *       * `typeInfo` &mdash; (`Object`)
 *         * `workflowType` &mdash; (`Object`)
 *           * `name` &mdash; (`String`)
 *           * `version` &mdash; (`String`)
 *         * `status` &mdash; (`String`)
 *         * `description` &mdash; (`String`)
 *         * `creationDate` &mdash; (`Date`)
 *         * `deprecationDate` &mdash; (`Date`)
 *       * `configuration` &mdash; (`Object`)
 *         * `defaultTaskStartToCloseTimeout` &mdash; (`String`)
 *         * `defaultExecutionStartToCloseTimeout` &mdash; (`String`)
 *         * `defaultTaskList` &mdash; (`Object`)
 *           * `name` &mdash; (`String`)
 *         * `defaultChildPolicy` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getWorkflowExecutionHistory(params, callback)
 *   Calls the GetWorkflowExecutionHistory API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain containing the workflow execution.
 *     * `execution` &mdash; **required** &mdash; (`Object`) Specifies
 *       the workflow execution for which to return the history.
 *       * `workflowId` &mdash; **required** &mdash; (`String`)
 *       * `runId` &mdash; **required** &mdash; (`String`)
 *     * `nextPageToken` &mdash; (`String`) If a NextPageToken is
 *       returned, the result has more than one pages. To get the next
 *       page, repeat the call and specify the nextPageToken with all
 *       other arguments unchanged.
 *     * `maximumPageSize` &mdash; (`Integer`) Specifies the maximum
 *       number of history events returned in one page. The next page in
 *       the result is identified by the NextPageToken returned. By
 *       default 100 history events are returned in a page but the caller
 *       can override this value to a page size smaller than the default.
 *       You cannot specify a page size larger than 100. Note that the
 *       number of events may be less than the maxiumum page size, in
 *       which case, the returned page will have fewer results than the
 *       maximumPageSize specified.
 *     * `reverseOrder` &mdash; (`Boolean`) When set to true, returns the
 *       events in reverse order. By default the results are returned in
 *       ascending order of the eventTimeStamp of the events.
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
 *       * `events` &mdash; (`Array<Object>`)
 *         * `eventTimestamp` &mdash; (`Date`)
 *         * `eventType` &mdash; (`String`)
 *         * `eventId` &mdash; (`Integer`)
 *         * `workflowExecutionStartedEventAttributes` &mdash; (`Object`)
 *           * `input` &mdash; (`String`)
 *           * `executionStartToCloseTimeout` &mdash; (`String`)
 *           * `taskStartToCloseTimeout` &mdash; (`String`)
 *           * `childPolicy` &mdash; (`String`)
 *           * `taskList` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `tagList` &mdash; (`Array<String>`)
 *           * `continuedExecutionRunId` &mdash; (`String`)
 *           * `parentWorkflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `parentInitiatedEventId` &mdash; (`Integer`)
 *         * `workflowExecutionCompletedEventAttributes` &mdash; (`Object`)
 *           * `result` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `completeWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `workflowExecutionFailedEventAttributes` &mdash; (`Object`)
 *           * `reason` &mdash; (`String`)
 *           * `details` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `failWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `workflowExecutionTimedOutEventAttributes` &mdash; (`Object`)
 *           * `timeoutType` &mdash; (`String`)
 *           * `childPolicy` &mdash; (`String`)
 *         * `workflowExecutionCanceledEventAttributes` &mdash; (`Object`)
 *           * `details` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `cancelWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `workflowExecutionContinuedAsNewEventAttributes` &mdash;
 *           (`Object`)
 *           * `input` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `newExecutionRunId` &mdash; (`String`)
 *           * `executionStartToCloseTimeout` &mdash; (`String`)
 *           * `taskList` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *           * `taskStartToCloseTimeout` &mdash; (`String`)
 *           * `childPolicy` &mdash; (`String`)
 *           * `tagList` &mdash; (`Array<String>`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *         * `continueAsNewWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `workflowExecutionTerminatedEventAttributes` &mdash;
 *           (`Object`)
 *           * `reason` &mdash; (`String`)
 *           * `details` &mdash; (`String`)
 *           * `childPolicy` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *         * `workflowExecutionCancelRequestedEventAttributes` &mdash;
 *           (`Object`)
 *           * `externalWorkflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `externalInitiatedEventId` &mdash; (`Integer`)
 *           * `cause` &mdash; (`String`)
 *         * `decisionTaskScheduledEventAttributes` &mdash; (`Object`)
 *           * `taskList` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *           * `startToCloseTimeout` &mdash; (`String`)
 *         * `decisionTaskStartedEventAttributes` &mdash; (`Object`)
 *           * `identity` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *         * `decisionTaskCompletedEventAttributes` &mdash; (`Object`)
 *           * `executionContext` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `decisionTaskTimedOutEventAttributes` &mdash; (`Object`)
 *           * `timeoutType` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `activityTaskScheduledEventAttributes` &mdash; (`Object`)
 *           * `activityType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `activityId` &mdash; (`String`)
 *           * `input` &mdash; (`String`)
 *           * `control` &mdash; (`String`)
 *           * `scheduleToStartTimeout` &mdash; (`String`)
 *           * `scheduleToCloseTimeout` &mdash; (`String`)
 *           * `startToCloseTimeout` &mdash; (`String`)
 *           * `taskList` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `heartbeatTimeout` &mdash; (`String`)
 *         * `activityTaskStartedEventAttributes` &mdash; (`Object`)
 *           * `identity` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *         * `activityTaskCompletedEventAttributes` &mdash; (`Object`)
 *           * `result` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `activityTaskFailedEventAttributes` &mdash; (`Object`)
 *           * `reason` &mdash; (`String`)
 *           * `details` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `activityTaskTimedOutEventAttributes` &mdash; (`Object`)
 *           * `timeoutType` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *           * `details` &mdash; (`String`)
 *         * `activityTaskCanceledEventAttributes` &mdash; (`Object`)
 *           * `details` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *           * `latestCancelRequestedEventId` &mdash; (`Integer`)
 *         * `activityTaskCancelRequestedEventAttributes` &mdash;
 *           (`Object`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `activityId` &mdash; (`String`)
 *         * `workflowExecutionSignaledEventAttributes` &mdash; (`Object`)
 *           * `signalName` &mdash; (`String`)
 *           * `input` &mdash; (`String`)
 *           * `externalWorkflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `externalInitiatedEventId` &mdash; (`Integer`)
 *         * `markerRecordedEventAttributes` &mdash; (`Object`)
 *           * `markerName` &mdash; (`String`)
 *           * `details` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `recordMarkerFailedEventAttributes` &mdash; (`Object`)
 *           * `markerName` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `timerStartedEventAttributes` &mdash; (`Object`)
 *           * `timerId` &mdash; (`String`)
 *           * `control` &mdash; (`String`)
 *           * `startToFireTimeout` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `timerFiredEventAttributes` &mdash; (`Object`)
 *           * `timerId` &mdash; (`String`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `timerCanceledEventAttributes` &mdash; (`Object`)
 *           * `timerId` &mdash; (`String`)
 *           * `startedEventId` &mdash; (`Integer`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `startChildWorkflowExecutionInitiatedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `control` &mdash; (`String`)
 *           * `input` &mdash; (`String`)
 *           * `executionStartToCloseTimeout` &mdash; (`String`)
 *           * `taskList` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `childPolicy` &mdash; (`String`)
 *           * `taskStartToCloseTimeout` &mdash; (`String`)
 *           * `tagList` &mdash; (`Array<String>`)
 *         * `childWorkflowExecutionStartedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *         * `childWorkflowExecutionCompletedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `result` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `childWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `reason` &mdash; (`String`)
 *           * `details` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `childWorkflowExecutionTimedOutEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `timeoutType` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `childWorkflowExecutionCanceledEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `details` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `childWorkflowExecutionTerminatedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `signalExternalWorkflowExecutionInitiatedEventAttributes`
 *           &mdash; (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *           * `signalName` &mdash; (`String`)
 *           * `input` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `control` &mdash; (`String`)
 *         * `externalWorkflowExecutionSignaledEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *         * `signalExternalWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `control` &mdash; (`String`)
 *         * `externalWorkflowExecutionCancelRequestedEventAttributes`
 *           &mdash; (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *         *
 *           `requestCancelExternalWorkflowExecutionInitiatedEventAttributes`
 *           &mdash; (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `control` &mdash; (`String`)
 *         * `requestCancelExternalWorkflowExecutionFailedEventAttributes`
 *           &mdash; (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `control` &mdash; (`String`)
 *         * `scheduleActivityTaskFailedEventAttributes` &mdash; (`Object`)
 *           * `activityType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `activityId` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `requestCancelActivityTaskFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `activityId` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `startTimerFailedEventAttributes` &mdash; (`Object`)
 *           * `timerId` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `cancelTimerFailedEventAttributes` &mdash; (`Object`)
 *           * `timerId` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `startChildWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `workflowId` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `control` &mdash; (`String`)
 *       * `nextPageToken` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listActivityTypes(params, callback)
 *   Calls the ListActivityTypes API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain in which the activity types have been registered.
 *     * `name` &mdash; (`String`) If specified, only lists the activity
 *       types that have this name.
 *     * `registrationStatus` &mdash; **required** &mdash; (`String`)
 *       Specifies the registration status of the activity types to list.
 *     * `nextPageToken` &mdash; (`String`) If on a previous call to this
 *       method a NextResultToken was returned, the results have more
 *       than one page. To get the next page of results, repeat the call
 *       with the nextPageToken and keep all other arguments unchanged.
 *     * `maximumPageSize` &mdash; (`Integer`) The maximum number of
 *       results returned in each page. The default is 100, but the
 *       caller can override this value to a page size smaller than the
 *       default. You cannot specify a page size greater than 100. Note
 *       that the number of types may be less than the maxiumum page
 *       size, in which case, the returned page will have fewer results
 *       than the maximumPageSize specified.
 *     * `reverseOrder` &mdash; (`Boolean`) When set to true, returns the
 *       results in reverse order. By default the results are returned in
 *       ascending alphabetical order of the name of the activity types.
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
 *       * `typeInfos` &mdash; (`Array<Object>`)
 *         * `activityType` &mdash; (`Object`)
 *           * `name` &mdash; (`String`)
 *           * `version` &mdash; (`String`)
 *         * `status` &mdash; (`String`)
 *         * `description` &mdash; (`String`)
 *         * `creationDate` &mdash; (`Date`)
 *         * `deprecationDate` &mdash; (`Date`)
 *       * `nextPageToken` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listClosedWorkflowExecutions(params, callback)
 *   Calls the ListClosedWorkflowExecutions API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain that contains the workflow executions to list.
 *     * `startTimeFilter` &mdash; (`Object`) If specified, the workflow
 *       executions are included in the returned results based on whether
 *       their start times are within the range specified by this filter.
 *       Also, if this parameter is specified, the returned results are
 *       ordered by their start times. startTimeFilter and
 *       closeTimeFilter are mutually exclusive. You must specify one of
 *       these in a request but not both.
 *       * `oldestDate` &mdash; **required** &mdash; (`Date`)
 *       * `latestDate` &mdash; (`Date`)
 *     * `closeTimeFilter` &mdash; (`Object`) If specified, the workflow
 *       executions are included in the returned results based on whether
 *       their close times are within the range specified by this filter.
 *       Also, if this parameter is specified, the returned results are
 *       ordered by their close times. startTimeFilter and
 *       closeTimeFilter are mutually exclusive. You must specify one of
 *       these in a request but not both.
 *       * `oldestDate` &mdash; **required** &mdash; (`Date`)
 *       * `latestDate` &mdash; (`Date`)
 *     * `executionFilter` &mdash; (`Object`) If specified, only workflow
 *       executions matching the workflow id specified in the filter are
 *       returned. closeStatusFilter, executionFilter, typeFilter and
 *       tagFilter are mutually exclusive. You can specify at most one of
 *       these in a request.
 *       * `workflowId` &mdash; **required** &mdash; (`String`)
 *     * `closeStatusFilter` &mdash; (`Object`) If specified, only
 *       workflow executions that match this close status are listed. For
 *       example, if TERMINATED is specified, then only TERMINATED
 *       workflow executions are listed. closeStatusFilter,
 *       executionFilter, typeFilter and tagFilter are mutually
 *       exclusive. You can specify at most one of these in a request.
 *       * `status` &mdash; **required** &mdash; (`String`)
 *     * `typeFilter` &mdash; (`Object`) If specified, only executions of
 *       the type specified in the filter are returned.
 *       closeStatusFilter, executionFilter, typeFilter and tagFilter are
 *       mutually exclusive. You can specify at most one of these in a
 *       request.
 *       * `name` &mdash; **required** &mdash; (`String`)
 *       * `version` &mdash; (`String`)
 *     * `tagFilter` &mdash; (`Object`) If specified, only executions
 *       that have the matching tag are listed. closeStatusFilter,
 *       executionFilter, typeFilter and tagFilter are mutually
 *       exclusive. You can specify at most one of these in a request.
 *       * `tag` &mdash; **required** &mdash; (`String`)
 *     * `nextPageToken` &mdash; (`String`) If on a previous call to this
 *       method a NextPageToken was returned, the results are being
 *       paginated. To get the next page of results, repeat the call with
 *       the returned token and all other arguments unchanged.
 *     * `maximumPageSize` &mdash; (`Integer`) The maximum number of
 *       results returned in each page. The default is 100, but the
 *       caller can override this value to a page size smaller than the
 *       default. You cannot specify a page size greater than 100. Note
 *       that the number of executions may be less than the maxiumum page
 *       size, in which case, the returned page will have fewer results
 *       than the maximumPageSize specified.
 *     * `reverseOrder` &mdash; (`Boolean`) When set to true, returns the
 *       results in reverse order. By default the results are returned in
 *       descending order of the start or the close time of the
 *       executions.
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
 *       * `executionInfos` &mdash; (`Array<Object>`)
 *         * `execution` &mdash; (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *         * `workflowType` &mdash; (`Object`)
 *           * `name` &mdash; (`String`)
 *           * `version` &mdash; (`String`)
 *         * `startTimestamp` &mdash; (`Date`)
 *         * `closeTimestamp` &mdash; (`Date`)
 *         * `executionStatus` &mdash; (`String`)
 *         * `closeStatus` &mdash; (`String`)
 *         * `parent` &mdash; (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *         * `tagList` &mdash; (`Array<String>`)
 *         * `cancelRequested` &mdash; (`Boolean`)
 *       * `nextPageToken` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listDomains(params, callback)
 *   Calls the ListDomains API operation.
 *   @param params [Object]
 *     * `nextPageToken` &mdash; (`String`) If on a previous call to this
 *       method a NextPageToken was returned, the result has more than
 *       one page. To get the next page of results, repeat the call with
 *       the returned token and all other arguments unchanged.
 *     * `registrationStatus` &mdash; **required** &mdash; (`String`)
 *       Specifies the registration status of the domains to list.
 *     * `maximumPageSize` &mdash; (`Integer`) The maximum number of
 *       results returned in each page. The default is 100, but the
 *       caller can override this value to a page size smaller than the
 *       default. You cannot specify a page size greater than 100. Note
 *       that the number of domains may be less than the maxiumum page
 *       size, in which case, the returned page will have fewer results
 *       than the maximumPageSize specified.
 *     * `reverseOrder` &mdash; (`Boolean`) When set to true, returns the
 *       results in reverse order. By default the results are returned in
 *       ascending alphabetical order of the name of the domains.
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
 *       * `domainInfos` &mdash; (`Array<Object>`)
 *         * `name` &mdash; (`String`)
 *         * `status` &mdash; (`String`)
 *         * `description` &mdash; (`String`)
 *       * `nextPageToken` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listOpenWorkflowExecutions(params, callback)
 *   Calls the ListOpenWorkflowExecutions API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain that contains the workflow executions to list.
 *     * `startTimeFilter` &mdash; **required** &mdash; (`Object`)
 *       Workflow executions are included in the returned results based
 *       on whether their start times are within the range specified by
 *       this filter.
 *       * `oldestDate` &mdash; **required** &mdash; (`Date`)
 *       * `latestDate` &mdash; (`Date`)
 *     * `typeFilter` &mdash; (`Object`) If specified, only executions of
 *       the type specified in the filter are returned. executionFilter,
 *       typeFilter and tagFilter are mutually exclusive. You can specify
 *       at most one of these in a request.
 *       * `name` &mdash; **required** &mdash; (`String`)
 *       * `version` &mdash; (`String`)
 *     * `tagFilter` &mdash; (`Object`) If specified, only executions
 *       that have the matching tag are listed. executionFilter,
 *       typeFilter and tagFilter are mutually exclusive. You can specify
 *       at most one of these in a request.
 *       * `tag` &mdash; **required** &mdash; (`String`)
 *     * `nextPageToken` &mdash; (`String`) If on a previous call to this
 *       method a NextPageToken was returned, the results are being
 *       paginated. To get the next page of results, repeat the call with
 *       the returned token and all other arguments unchanged.
 *     * `maximumPageSize` &mdash; (`Integer`) The maximum number of
 *       results returned in each page. The default is 100, but the
 *       caller can override this value to a page size smaller than the
 *       default. You cannot specify a page size greater than 100. Note
 *       that the number of executions may be less than the maxiumum page
 *       size, in which case, the returned page will have fewer results
 *       than the maximumPageSize specified.
 *     * `reverseOrder` &mdash; (`Boolean`) When set to true, returns the
 *       results in reverse order. By default the results are returned in
 *       descending order of the start time of the executions.
 *     * `executionFilter` &mdash; (`Object`) If specified, only workflow
 *       executions matching the workflow id specified in the filter are
 *       returned. executionFilter, typeFilter and tagFilter are mutually
 *       exclusive. You can specify at most one of these in a request.
 *       * `workflowId` &mdash; **required** &mdash; (`String`)
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
 *       * `executionInfos` &mdash; (`Array<Object>`)
 *         * `execution` &mdash; (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *         * `workflowType` &mdash; (`Object`)
 *           * `name` &mdash; (`String`)
 *           * `version` &mdash; (`String`)
 *         * `startTimestamp` &mdash; (`Date`)
 *         * `closeTimestamp` &mdash; (`Date`)
 *         * `executionStatus` &mdash; (`String`)
 *         * `closeStatus` &mdash; (`String`)
 *         * `parent` &mdash; (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *         * `tagList` &mdash; (`Array<String>`)
 *         * `cancelRequested` &mdash; (`Boolean`)
 *       * `nextPageToken` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listWorkflowTypes(params, callback)
 *   Calls the ListWorkflowTypes API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain in which the workflow types have been registered.
 *     * `name` &mdash; (`String`) If specified, lists the workflow type
 *       with this name.
 *     * `registrationStatus` &mdash; **required** &mdash; (`String`)
 *       Specifies the registration status of the workflow types to list.
 *     * `nextPageToken` &mdash; (`String`) If on a previous call to this
 *       method a NextPageToken was returned, the results are being
 *       paginated. To get the next page of results, repeat the call with
 *       the returned token and all other arguments unchanged.
 *     * `maximumPageSize` &mdash; (`Integer`) The maximum number of
 *       results returned in each page. The default is 100, but the
 *       caller can override this value to a page size smaller than the
 *       default. You cannot specify a page size greater than 100. Note
 *       that the number of types may be less than the maxiumum page
 *       size, in which case, the returned page will have fewer results
 *       than the maximumPageSize specified.
 *     * `reverseOrder` &mdash; (`Boolean`) When set to true, returns the
 *       results in reverse order. By default the results are returned in
 *       ascending alphabetical order of the name of the workflow types.
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
 *       * `typeInfos` &mdash; (`Array<Object>`)
 *         * `workflowType` &mdash; (`Object`)
 *           * `name` &mdash; (`String`)
 *           * `version` &mdash; (`String`)
 *         * `status` &mdash; (`String`)
 *         * `description` &mdash; (`String`)
 *         * `creationDate` &mdash; (`Date`)
 *         * `deprecationDate` &mdash; (`Date`)
 *       * `nextPageToken` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method pollForActivityTask(params, callback)
 *   Calls the PollForActivityTask API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain that contains the task lists being polled.
 *     * `taskList` &mdash; **required** &mdash; (`Object`) Specifies the
 *       task list to poll for activity tasks. The specified string must
 *       not start or end with whitespace. It must not contain a :
 *       (colon), / (slash), | (vertical bar), or any control characters
 *       (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the
 *       literal string "arn".
 *       * `name` &mdash; **required** &mdash; (`String`)
 *     * `identity` &mdash; (`String`) Identity of the worker making the
 *       request, which is recorded in the ActivityTaskStarted event in
 *       the workflow history. This enables diagnostic tracing when
 *       problems arise. The form of this identity is user defined.
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
 *       * `taskToken` &mdash; (`String`)
 *       * `activityId` &mdash; (`String`)
 *       * `startedEventId` &mdash; (`Integer`)
 *       * `workflowExecution` &mdash; (`Object`)
 *         * `workflowId` &mdash; (`String`)
 *         * `runId` &mdash; (`String`)
 *       * `activityType` &mdash; (`Object`)
 *         * `name` &mdash; (`String`)
 *         * `version` &mdash; (`String`)
 *       * `input` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method pollForDecisionTask(params, callback)
 *   Calls the PollForDecisionTask API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain containing the task lists to poll.
 *     * `taskList` &mdash; **required** &mdash; (`Object`) Specifies the
 *       task list to poll for decision tasks. The specified string must
 *       not start or end with whitespace. It must not contain a :
 *       (colon), / (slash), | (vertical bar), or any control characters
 *       (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the
 *       literal string "arn".
 *       * `name` &mdash; **required** &mdash; (`String`)
 *     * `identity` &mdash; (`String`) Identity of the decider making the
 *       request, which is recorded in the DecisionTaskStarted event in
 *       the workflow history. This enables diagnostic tracing when
 *       problems arise. The form of this identity is user defined.
 *     * `nextPageToken` &mdash; (`String`) If on a previous call to this
 *       method a NextPageToken was returned, the results are being
 *       paginated. To get the next page of results, repeat the call with
 *       the returned token and all other arguments unchanged. The
 *       nextPageToken returned by this action cannot be used with
 *       GetWorkflowExecutionHistory to get the next page. You must call
 *       PollForDecisionTask again (with the nextPageToken) to retrieve
 *       the next page of history records. Calling PollForDecisionTask
 *       with a nextPageToken will not return a new decision task..
 *     * `maximumPageSize` &mdash; (`Integer`) The maximum number of
 *       history events returned in each page. The default is 100, but
 *       the caller can override this value to a page size smaller than
 *       the default. You cannot specify a page size greater than 100.
 *       Note that the number of events may be less than the maxiumum
 *       page size, in which case, the returned page will have fewer
 *       results than the maximumPageSize specified.
 *     * `reverseOrder` &mdash; (`Boolean`) When set to true, returns the
 *       events in reverse order. By default the results are returned in
 *       ascending order of the eventTimestamp of the events.
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
 *       * `taskToken` &mdash; (`String`)
 *       * `startedEventId` &mdash; (`Integer`)
 *       * `workflowExecution` &mdash; (`Object`)
 *         * `workflowId` &mdash; (`String`)
 *         * `runId` &mdash; (`String`)
 *       * `workflowType` &mdash; (`Object`)
 *         * `name` &mdash; (`String`)
 *         * `version` &mdash; (`String`)
 *       * `events` &mdash; (`Array<Object>`)
 *         * `eventTimestamp` &mdash; (`Date`)
 *         * `eventType` &mdash; (`String`)
 *         * `eventId` &mdash; (`Integer`)
 *         * `workflowExecutionStartedEventAttributes` &mdash; (`Object`)
 *           * `input` &mdash; (`String`)
 *           * `executionStartToCloseTimeout` &mdash; (`String`)
 *           * `taskStartToCloseTimeout` &mdash; (`String`)
 *           * `childPolicy` &mdash; (`String`)
 *           * `taskList` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `tagList` &mdash; (`Array<String>`)
 *           * `continuedExecutionRunId` &mdash; (`String`)
 *           * `parentWorkflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `parentInitiatedEventId` &mdash; (`Integer`)
 *         * `workflowExecutionCompletedEventAttributes` &mdash; (`Object`)
 *           * `result` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `completeWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `workflowExecutionFailedEventAttributes` &mdash; (`Object`)
 *           * `reason` &mdash; (`String`)
 *           * `details` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `failWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `workflowExecutionTimedOutEventAttributes` &mdash; (`Object`)
 *           * `timeoutType` &mdash; (`String`)
 *           * `childPolicy` &mdash; (`String`)
 *         * `workflowExecutionCanceledEventAttributes` &mdash; (`Object`)
 *           * `details` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `cancelWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `workflowExecutionContinuedAsNewEventAttributes` &mdash;
 *           (`Object`)
 *           * `input` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `newExecutionRunId` &mdash; (`String`)
 *           * `executionStartToCloseTimeout` &mdash; (`String`)
 *           * `taskList` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *           * `taskStartToCloseTimeout` &mdash; (`String`)
 *           * `childPolicy` &mdash; (`String`)
 *           * `tagList` &mdash; (`Array<String>`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *         * `continueAsNewWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `workflowExecutionTerminatedEventAttributes` &mdash;
 *           (`Object`)
 *           * `reason` &mdash; (`String`)
 *           * `details` &mdash; (`String`)
 *           * `childPolicy` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *         * `workflowExecutionCancelRequestedEventAttributes` &mdash;
 *           (`Object`)
 *           * `externalWorkflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `externalInitiatedEventId` &mdash; (`Integer`)
 *           * `cause` &mdash; (`String`)
 *         * `decisionTaskScheduledEventAttributes` &mdash; (`Object`)
 *           * `taskList` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *           * `startToCloseTimeout` &mdash; (`String`)
 *         * `decisionTaskStartedEventAttributes` &mdash; (`Object`)
 *           * `identity` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *         * `decisionTaskCompletedEventAttributes` &mdash; (`Object`)
 *           * `executionContext` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `decisionTaskTimedOutEventAttributes` &mdash; (`Object`)
 *           * `timeoutType` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `activityTaskScheduledEventAttributes` &mdash; (`Object`)
 *           * `activityType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `activityId` &mdash; (`String`)
 *           * `input` &mdash; (`String`)
 *           * `control` &mdash; (`String`)
 *           * `scheduleToStartTimeout` &mdash; (`String`)
 *           * `scheduleToCloseTimeout` &mdash; (`String`)
 *           * `startToCloseTimeout` &mdash; (`String`)
 *           * `taskList` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `heartbeatTimeout` &mdash; (`String`)
 *         * `activityTaskStartedEventAttributes` &mdash; (`Object`)
 *           * `identity` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *         * `activityTaskCompletedEventAttributes` &mdash; (`Object`)
 *           * `result` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `activityTaskFailedEventAttributes` &mdash; (`Object`)
 *           * `reason` &mdash; (`String`)
 *           * `details` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `activityTaskTimedOutEventAttributes` &mdash; (`Object`)
 *           * `timeoutType` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *           * `details` &mdash; (`String`)
 *         * `activityTaskCanceledEventAttributes` &mdash; (`Object`)
 *           * `details` &mdash; (`String`)
 *           * `scheduledEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *           * `latestCancelRequestedEventId` &mdash; (`Integer`)
 *         * `activityTaskCancelRequestedEventAttributes` &mdash;
 *           (`Object`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `activityId` &mdash; (`String`)
 *         * `workflowExecutionSignaledEventAttributes` &mdash; (`Object`)
 *           * `signalName` &mdash; (`String`)
 *           * `input` &mdash; (`String`)
 *           * `externalWorkflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `externalInitiatedEventId` &mdash; (`Integer`)
 *         * `markerRecordedEventAttributes` &mdash; (`Object`)
 *           * `markerName` &mdash; (`String`)
 *           * `details` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `recordMarkerFailedEventAttributes` &mdash; (`Object`)
 *           * `markerName` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `timerStartedEventAttributes` &mdash; (`Object`)
 *           * `timerId` &mdash; (`String`)
 *           * `control` &mdash; (`String`)
 *           * `startToFireTimeout` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `timerFiredEventAttributes` &mdash; (`Object`)
 *           * `timerId` &mdash; (`String`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `timerCanceledEventAttributes` &mdash; (`Object`)
 *           * `timerId` &mdash; (`String`)
 *           * `startedEventId` &mdash; (`Integer`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `startChildWorkflowExecutionInitiatedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `control` &mdash; (`String`)
 *           * `input` &mdash; (`String`)
 *           * `executionStartToCloseTimeout` &mdash; (`String`)
 *           * `taskList` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `childPolicy` &mdash; (`String`)
 *           * `taskStartToCloseTimeout` &mdash; (`String`)
 *           * `tagList` &mdash; (`Array<String>`)
 *         * `childWorkflowExecutionStartedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *         * `childWorkflowExecutionCompletedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `result` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `childWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `reason` &mdash; (`String`)
 *           * `details` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `childWorkflowExecutionTimedOutEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `timeoutType` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `childWorkflowExecutionCanceledEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `details` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `childWorkflowExecutionTerminatedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `startedEventId` &mdash; (`Integer`)
 *         * `signalExternalWorkflowExecutionInitiatedEventAttributes`
 *           &mdash; (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *           * `signalName` &mdash; (`String`)
 *           * `input` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `control` &mdash; (`String`)
 *         * `externalWorkflowExecutionSignaledEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *         * `signalExternalWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `control` &mdash; (`String`)
 *         * `externalWorkflowExecutionCancelRequestedEventAttributes`
 *           &mdash; (`Object`)
 *           * `workflowExecution` &mdash; (`Object`)
 *             * `workflowId` &mdash; (`String`)
 *             * `runId` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *         *
 *           `requestCancelExternalWorkflowExecutionInitiatedEventAttributes`
 *           &mdash; (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `control` &mdash; (`String`)
 *         * `requestCancelExternalWorkflowExecutionFailedEventAttributes`
 *           &mdash; (`Object`)
 *           * `workflowId` &mdash; (`String`)
 *           * `runId` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `control` &mdash; (`String`)
 *         * `scheduleActivityTaskFailedEventAttributes` &mdash; (`Object`)
 *           * `activityType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `activityId` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `requestCancelActivityTaskFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `activityId` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `startTimerFailedEventAttributes` &mdash; (`Object`)
 *           * `timerId` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `cancelTimerFailedEventAttributes` &mdash; (`Object`)
 *           * `timerId` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *         * `startChildWorkflowExecutionFailedEventAttributes` &mdash;
 *           (`Object`)
 *           * `workflowType` &mdash; (`Object`)
 *             * `name` &mdash; (`String`)
 *             * `version` &mdash; (`String`)
 *           * `cause` &mdash; (`String`)
 *           * `workflowId` &mdash; (`String`)
 *           * `initiatedEventId` &mdash; (`Integer`)
 *           * `decisionTaskCompletedEventId` &mdash; (`Integer`)
 *           * `control` &mdash; (`String`)
 *       * `nextPageToken` &mdash; (`String`)
 *       * `previousStartedEventId` &mdash; (`Integer`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method recordActivityTaskHeartbeat(params, callback)
 *   Calls the RecordActivityTaskHeartbeat API operation.
 *   @param params [Object]
 *     * `taskToken` &mdash; **required** &mdash; (`String`) The
 *       taskToken of the ActivityTask. The taskToken is generated by the
 *       service and should be treated as an opaque value. If the task is
 *       passed to another process, its taskToken must also be passed.
 *       This enables it to provide its progress and respond with
 *       results.
 *     * `details` &mdash; (`String`) If specified, contains details
 *       about the progress of the task.
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
 *       * `cancelRequested` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method registerActivityType(params, callback)
 *   Calls the RegisterActivityType API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain in which this activity is to be registered.
 *     * `name` &mdash; **required** &mdash; (`String`) The name of the
 *       activity type within the domain. The specified string must not
 *       start or end with whitespace. It must not contain a : (colon), /
 *       (slash), | (vertical bar), or any control characters
 *       (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the
 *       literal string "arn".
 *     * `version` &mdash; **required** &mdash; (`String`) The version of
 *       the activity type. The activity type consists of the name and
 *       version, the combination of which must be unique within the
 *       domain. The specified string must not start or end with
 *       whitespace. It must not contain a : (colon), / (slash), |
 *       (vertical bar), or any control characters (\u0000-\u001f |
 *       \u007f - \u009f). Also, it must not contain the literal string
 *       "arn".
 *     * `description` &mdash; (`String`) A textual description of the
 *       activity type.
 *     * `defaultTaskStartToCloseTimeout` &mdash; (`String`) If set,
 *       specifies the default maximum duration that a worker can take to
 *       process tasks of this activity type. This default can be
 *       overridden when scheduling an activity task using the
 *       ScheduleActivityTask Decision. The valid values are integers
 *       greater than or equal to 0. An integer value can be used to
 *       specify the duration in seconds while NONE can be used to
 *       specify unlimited duration.
 *     * `defaultTaskHeartbeatTimeout` &mdash; (`String`) If set,
 *       specifies the default maximum time before which a worker
 *       processing a task of this type must report progress by calling
 *       RecordActivityTaskHeartbeat. If the timeout is exceeded, the
 *       activity task is automatically timed out. This default can be
 *       overridden when scheduling an activity task using the
 *       ScheduleActivityTask Decision. If the activity worker
 *       subsequently attempts to record a heartbeat or returns a result,
 *       the activity worker receives an UnknownResource fault. In this
 *       case, Amazon SWF no longer considers the activity task to be
 *       valid; the activity worker should clean up the activity task.
 *       The valid values are integers greater than or equal to 0. An
 *       integer value can be used to specify the duration in seconds
 *       while NONE can be used to specify unlimited duration.
 *     * `defaultTaskList` &mdash; (`Object`) If set, specifies the
 *       default task list to use for scheduling tasks of this activity
 *       type. This default task list is used if a task list is not
 *       provided when a task is scheduled through the
 *       ScheduleActivityTask Decision.
 *       * `name` &mdash; **required** &mdash; (`String`)
 *     * `defaultTaskScheduleToStartTimeout` &mdash; (`String`) If set,
 *       specifies the default maximum duration that a task of this
 *       activity type can wait before being assigned to a worker. This
 *       default can be overridden when scheduling an activity task using
 *       the ScheduleActivityTask Decision. The valid values are integers
 *       greater than or equal to 0. An integer value can be used to
 *       specify the duration in seconds while NONE can be used to
 *       specify unlimited duration.
 *     * `defaultTaskScheduleToCloseTimeout` &mdash; (`String`) If set,
 *       specifies the default maximum duration for a task of this
 *       activity type. This default can be overridden when scheduling an
 *       activity task using the ScheduleActivityTask Decision. The valid
 *       values are integers greater than or equal to 0. An integer value
 *       can be used to specify the duration in seconds while NONE can be
 *       used to specify unlimited duration.
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
 * @!method registerDomain(params, callback)
 *   Calls the RegisterDomain API operation.
 *   @param params [Object]
 *     * `name` &mdash; **required** &mdash; (`String`) Name of the
 *       domain to register. The name must be unique. The specified
 *       string must not start or end with whitespace. It must not
 *       contain a : (colon), / (slash), | (vertical bar), or any control
 *       characters (\u0000-\u001f | \u007f - \u009f). Also, it must not
 *       contain the literal string "arn".
 *     * `description` &mdash; (`String`) Textual description of the
 *       domain.
 *     * `workflowExecutionRetentionPeriodInDays` &mdash; **required**
 *       &mdash; (`String`) Specifies the duration--in days--for which
 *       the record (including the history) of workflow executions in
 *       this domain should be kept by the service. After the retention
 *       period, the workflow execution will not be available in the
 *       results of visibility calls. If a duration of NONE is specified,
 *       the records for workflow executions in this domain are not
 *       retained at all.
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
 * @!method registerWorkflowType(params, callback)
 *   Calls the RegisterWorkflowType API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain in which to register the workflow type.
 *     * `name` &mdash; **required** &mdash; (`String`) The name of the
 *       workflow type. The specified string must not start or end with
 *       whitespace. It must not contain a : (colon), / (slash), |
 *       (vertical bar), or any control characters (\u0000-\u001f |
 *       \u007f - \u009f). Also, it must not contain the literal string
 *       "arn".
 *     * `version` &mdash; **required** &mdash; (`String`) The version of
 *       the workflow type. The workflow type consists of the name and
 *       version, the combination of which must be unique within the
 *       domain. To get a list of all currently registered workflow
 *       types, use the ListWorkflowTypes action. The specified string
 *       must not start or end with whitespace. It must not contain a :
 *       (colon), / (slash), | (vertical bar), or any control characters
 *       (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the
 *       literal string "arn".
 *     * `description` &mdash; (`String`) Textual description of the
 *       workflow type.
 *     * `defaultTaskStartToCloseTimeout` &mdash; (`String`) If set,
 *       specifies the default maximum duration of decision tasks for
 *       this workflow type. This default can be overridden when starting
 *       a workflow execution using the StartWorkflowExecution action or
 *       the StartChildWorkflowExecution Decision. The valid values are
 *       integers greater than or equal to 0. An integer value can be
 *       used to specify the duration in seconds while NONE can be used
 *       to specify unlimited duration.
 *     * `defaultExecutionStartToCloseTimeout` &mdash; (`String`) If set,
 *       specifies the default maximum duration for executions of this
 *       workflow type. You can override this default when starting an
 *       execution through the StartWorkflowExecution Action or
 *       StartChildWorkflowExecution Decision. The duration is specified
 *       in seconds. The valid values are integers greater than or equal
 *       to 0. Unlike some of the other timeout parameters in Amazon SWF,
 *       you cannot specify a value of "NONE" for
 *       defaultExecutionStartToCloseTimeout; there is a one-year max
 *       limit on the time that a workflow execution can run. Exceeding
 *       this limit will always cause the workflow execution to time out.
 *     * `defaultTaskList` &mdash; (`Object`) If set, specifies the
 *       default task list to use for scheduling decision tasks for
 *       executions of this workflow type. This default is used only if a
 *       task list is not provided when starting the execution through
 *       the StartWorkflowExecution Action or StartChildWorkflowExecution
 *       Decision.
 *       * `name` &mdash; **required** &mdash; (`String`)
 *     * `defaultChildPolicy` &mdash; (`String`) If set, specifies the
 *       default policy to use for the child workflow executions when a
 *       workflow execution of this type is terminated, by calling the
 *       TerminateWorkflowExecution action explicitly or due to an
 *       expired timeout. This default can be overridden when starting a
 *       workflow execution using the StartWorkflowExecution action or
 *       the StartChildWorkflowExecution Decision. The supported child
 *       policies are: TERMINATE: the child executions will be
 *       terminated. REQUEST_CANCEL: a request to cancel will be
 *       attempted for each child execution by recording a
 *       WorkflowExecutionCancelRequested event in its history. It is up
 *       to the decider to take appropriate actions when it receives an
 *       execution history with this event. ABANDON: no action will be
 *       taken. The child executions will continue to run.
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
 * @!method requestCancelWorkflowExecution(params, callback)
 *   Calls the RequestCancelWorkflowExecution API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain containing the workflow execution to cancel.
 *     * `workflowId` &mdash; **required** &mdash; (`String`) The
 *       workflowId of the workflow execution to cancel.
 *     * `runId` &mdash; (`String`) The runId of the workflow execution
 *       to cancel.
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
 * @!method respondActivityTaskCanceled(params, callback)
 *   Calls the RespondActivityTaskCanceled API operation.
 *   @param params [Object]
 *     * `taskToken` &mdash; **required** &mdash; (`String`) The
 *       taskToken of the ActivityTask. The taskToken is generated by the
 *       service and should be treated as an opaque value. If the task is
 *       passed to another process, its taskToken must also be passed.
 *       This enables it to provide its progress and respond with
 *       results.
 *     * `details` &mdash; (`String`) Optional information about the
 *       cancellation.
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
 * @!method respondActivityTaskCompleted(params, callback)
 *   Calls the RespondActivityTaskCompleted API operation.
 *   @param params [Object]
 *     * `taskToken` &mdash; **required** &mdash; (`String`) The
 *       taskToken of the ActivityTask. The taskToken is generated by the
 *       service and should be treated as an opaque value. If the task is
 *       passed to another process, its taskToken must also be passed.
 *       This enables it to provide its progress and respond with
 *       results.
 *     * `result` &mdash; (`String`) The result of the activity task. It
 *       is a free form string that is implementation specific.
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
 * @!method respondActivityTaskFailed(params, callback)
 *   Calls the RespondActivityTaskFailed API operation.
 *   @param params [Object]
 *     * `taskToken` &mdash; **required** &mdash; (`String`) The
 *       taskToken of the ActivityTask. The taskToken is generated by the
 *       service and should be treated as an opaque value. If the task is
 *       passed to another process, its taskToken must also be passed.
 *       This enables it to provide its progress and respond with
 *       results.
 *     * `reason` &mdash; (`String`) Description of the error that may
 *       assist in diagnostics.
 *     * `details` &mdash; (`String`) Optional detailed information about
 *       the failure.
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
 * @!method respondDecisionTaskCompleted(params, callback)
 *   Calls the RespondDecisionTaskCompleted API operation.
 *   @param params [Object]
 *     * `taskToken` &mdash; **required** &mdash; (`String`) The
 *       taskToken from the DecisionTask. The taskToken is generated by
 *       the service and should be treated as an opaque value. If the
 *       task is passed to another process, its taskToken must also be
 *       passed. This enables it to provide its progress and respond with
 *       results.
 *     * `decisions` &mdash; (`Array<Object>`) The list of decisions
 *       (possibly empty) made by the decider while processing this
 *       decision task. See the docs for the Decision structure for
 *       details.
 *       * `decisionType` &mdash; **required** &mdash; (`String`)
 *       * `scheduleActivityTaskDecisionAttributes` &mdash; (`Object`)
 *         * `activityType` &mdash; **required** &mdash; (`Object`)
 *           * `name` &mdash; **required** &mdash; (`String`)
 *           * `version` &mdash; **required** &mdash; (`String`)
 *         * `activityId` &mdash; **required** &mdash; (`String`)
 *         * `control` &mdash; (`String`)
 *         * `input` &mdash; (`String`)
 *         * `scheduleToCloseTimeout` &mdash; (`String`)
 *         * `taskList` &mdash; (`Object`)
 *           * `name` &mdash; **required** &mdash; (`String`)
 *         * `scheduleToStartTimeout` &mdash; (`String`)
 *         * `startToCloseTimeout` &mdash; (`String`)
 *         * `heartbeatTimeout` &mdash; (`String`)
 *       * `requestCancelActivityTaskDecisionAttributes` &mdash;
 *         (`Object`)
 *         * `activityId` &mdash; **required** &mdash; (`String`)
 *       * `completeWorkflowExecutionDecisionAttributes` &mdash;
 *         (`Object`)
 *         * `result` &mdash; (`String`)
 *       * `failWorkflowExecutionDecisionAttributes` &mdash; (`Object`)
 *         * `reason` &mdash; (`String`)
 *         * `details` &mdash; (`String`)
 *       * `cancelWorkflowExecutionDecisionAttributes` &mdash; (`Object`)
 *         * `details` &mdash; (`String`)
 *       * `continueAsNewWorkflowExecutionDecisionAttributes` &mdash;
 *         (`Object`)
 *         * `input` &mdash; (`String`)
 *         * `executionStartToCloseTimeout` &mdash; (`String`)
 *         * `taskList` &mdash; (`Object`)
 *           * `name` &mdash; **required** &mdash; (`String`)
 *         * `taskStartToCloseTimeout` &mdash; (`String`)
 *         * `childPolicy` &mdash; (`String`)
 *         * `tagList` &mdash; (`Array<String>`)
 *         * `workflowTypeVersion` &mdash; (`String`)
 *       * `recordMarkerDecisionAttributes` &mdash; (`Object`)
 *         * `markerName` &mdash; **required** &mdash; (`String`)
 *         * `details` &mdash; (`String`)
 *       * `startTimerDecisionAttributes` &mdash; (`Object`)
 *         * `timerId` &mdash; **required** &mdash; (`String`)
 *         * `control` &mdash; (`String`)
 *         * `startToFireTimeout` &mdash; **required** &mdash; (`String`)
 *       * `cancelTimerDecisionAttributes` &mdash; (`Object`)
 *         * `timerId` &mdash; **required** &mdash; (`String`)
 *       * `signalExternalWorkflowExecutionDecisionAttributes` &mdash;
 *         (`Object`)
 *         * `workflowId` &mdash; **required** &mdash; (`String`)
 *         * `runId` &mdash; (`String`)
 *         * `signalName` &mdash; **required** &mdash; (`String`)
 *         * `input` &mdash; (`String`)
 *         * `control` &mdash; (`String`)
 *       * `requestCancelExternalWorkflowExecutionDecisionAttributes`
 *         &mdash; (`Object`)
 *         * `workflowId` &mdash; **required** &mdash; (`String`)
 *         * `runId` &mdash; (`String`)
 *         * `control` &mdash; (`String`)
 *       * `startChildWorkflowExecutionDecisionAttributes` &mdash;
 *         (`Object`)
 *         * `workflowType` &mdash; **required** &mdash; (`Object`)
 *           * `name` &mdash; **required** &mdash; (`String`)
 *           * `version` &mdash; **required** &mdash; (`String`)
 *         * `workflowId` &mdash; **required** &mdash; (`String`)
 *         * `control` &mdash; (`String`)
 *         * `input` &mdash; (`String`)
 *         * `executionStartToCloseTimeout` &mdash; (`String`)
 *         * `taskList` &mdash; (`Object`)
 *           * `name` &mdash; **required** &mdash; (`String`)
 *         * `taskStartToCloseTimeout` &mdash; (`String`)
 *         * `childPolicy` &mdash; (`String`)
 *         * `tagList` &mdash; (`Array<String>`)
 *     * `executionContext` &mdash; (`String`) User defined context to
 *       add to workflow execution.
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
 * @!method signalWorkflowExecution(params, callback)
 *   Calls the SignalWorkflowExecution API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain containing the workflow execution to signal.
 *     * `workflowId` &mdash; **required** &mdash; (`String`) The
 *       workflowId of the workflow execution to signal.
 *     * `runId` &mdash; (`String`) The runId of the workflow execution
 *       to signal.
 *     * `signalName` &mdash; **required** &mdash; (`String`) The name of
 *       the signal. This name must be meaningful to the target workflow.
 *     * `input` &mdash; (`String`) Data to attach to the
 *       WorkflowExecutionSignaled event in the target workflow
 *       execution's history.
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
 * @!method startWorkflowExecution(params, callback)
 *   Calls the StartWorkflowExecution API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The name of the
 *       domain in which the workflow execution is created.
 *     * `workflowId` &mdash; **required** &mdash; (`String`) The user
 *       defined identifier associated with the workflow execution. You
 *       can use this to associate a custom identifier with the workflow
 *       execution. You may specify the same identifier if a workflow
 *       execution is logically a restart of a previous execution. You
 *       cannot have two open workflow executions with the same
 *       workflowId at the same time. The specified string must not start
 *       or end with whitespace. It must not contain a : (colon), /
 *       (slash), | (vertical bar), or any control characters
 *       (\u0000-\u001f | \u007f - \u009f). Also, it must not contain the
 *       literal string "arn".
 *     * `workflowType` &mdash; **required** &mdash; (`Object`) The type
 *       of the workflow to start.
 *       * `name` &mdash; **required** &mdash; (`String`)
 *       * `version` &mdash; **required** &mdash; (`String`)
 *     * `taskList` &mdash; (`Object`) The task list to use for the
 *       decision tasks generated for this workflow execution. This
 *       overrides the defaultTaskList specified when registering the
 *       workflow type. A task list for this workflow execution must be
 *       specified either as a default for the workflow type or through
 *       this parameter. If neither this parameter is set nor a default
 *       task list was specified at registration time then a fault will
 *       be returned.The specified string must not start or end with
 *       whitespace. It must not contain a : (colon), / (slash), |
 *       (vertical bar), or any control characters (\u0000-\u001f |
 *       \u007f - \u009f). Also, it must not contain the literal string
 *       "arn".
 *       * `name` &mdash; **required** &mdash; (`String`)
 *     * `input` &mdash; (`String`) The input for the workflow execution.
 *       This is a free form string which should be meaningful to the
 *       workflow you are starting. This input is made available to the
 *       new workflow execution in the WorkflowExecutionStarted history
 *       event.
 *     * `executionStartToCloseTimeout` &mdash; (`String`) The total
 *       duration for this workflow execution. This overrides the
 *       defaultExecutionStartToCloseTimeout specified when registering
 *       the workflow type. The duration is specified in seconds. The
 *       valid values are integers greater than or equal to 0. Exceeding
 *       this limit will cause the workflow execution to time out. Unlike
 *       some of the other timeout parameters in Amazon SWF, you cannot
 *       specify a value of "NONE" for this timeout; there is a one-year
 *       max limit on the time that a workflow execution can run. An
 *       execution start-to-close timeout must be specified either
 *       through this parameter or as a default when the workflow type is
 *       registered. If neither this parameter nor a default execution
 *       start-to-close timeout is specified, a fault is returned.
 *     * `tagList` &mdash; (`Array<String>`) The list of tags to
 *       associate with the workflow execution. You can specify a maximum
 *       of 5 tags. You can list workflow executions with a specific tag
 *       by calling ListOpenWorkflowExecutions or
 *       ListClosedWorkflowExecutions and specifying a TagFilter.
 *     * `taskStartToCloseTimeout` &mdash; (`String`) Specifies the
 *       maximum duration of decision tasks for this workflow execution.
 *       This parameter overrides the defaultTaskStartToCloseTimout
 *       specified when registering the workflow type using
 *       RegisterWorkflowType. The valid values are integers greater than
 *       or equal to 0. An integer value can be used to specify the
 *       duration in seconds while NONE can be used to specify unlimited
 *       duration. A task start-to-close timeout for this workflow
 *       execution must be specified either as a default for the workflow
 *       type or through this parameter. If neither this parameter is set
 *       nor a default task start-to-close timeout was specified at
 *       registration time then a fault will be returned.
 *     * `childPolicy` &mdash; (`String`) If set, specifies the policy to
 *       use for the child workflow executions of this workflow execution
 *       if it is terminated, by calling the TerminateWorkflowExecution
 *       action explicitly or due to an expired timeout. This policy
 *       overrides the default child policy specified when registering
 *       the workflow type using RegisterWorkflowType. The supported
 *       child policies are: TERMINATE: the child executions will be
 *       terminated. REQUEST_CANCEL: a request to cancel will be
 *       attempted for each child execution by recording a
 *       WorkflowExecutionCancelRequested event in its history. It is up
 *       to the decider to take appropriate actions when it receives an
 *       execution history with this event. ABANDON: no action will be
 *       taken. The child executions will continue to run. A child policy
 *       for this workflow execution must be specified either as a
 *       default for the workflow type or through this parameter. If
 *       neither this parameter is set nor a default child policy was
 *       specified at registration time then a fault will be returned.
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
 *       * `runId` &mdash; (`String`) The runId of a workflow execution.
 *         This Id is generated by the service and can be used to uniquely
 *         identify the workflow execution within a domain.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method terminateWorkflowExecution(params, callback)
 *   Calls the TerminateWorkflowExecution API operation.
 *   @param params [Object]
 *     * `domain` &mdash; **required** &mdash; (`String`) The domain of
 *       the workflow execution to terminate.
 *     * `workflowId` &mdash; **required** &mdash; (`String`) The
 *       workflowId of the workflow execution to terminate.
 *     * `runId` &mdash; (`String`) The runId of the workflow execution
 *       to terminate.
 *     * `reason` &mdash; (`String`) An optional descriptive reason for
 *       terminating the workflow execution.
 *     * `details` &mdash; (`String`) Optional details for terminating
 *       the workflow execution.
 *     * `childPolicy` &mdash; (`String`) If set, specifies the policy to
 *       use for the child workflow executions of the workflow execution
 *       being terminated. This policy overrides the child policy
 *       specified for the workflow execution at registration time or
 *       when starting the execution. The supported child policies are:
 *       TERMINATE: the child executions will be terminated.
 *       REQUEST_CANCEL: a request to cancel will be attempted for each
 *       child execution by recording a WorkflowExecutionCancelRequested
 *       event in its history. It is up to the decider to take
 *       appropriate actions when it receives an execution history with
 *       this event. ABANDON: no action will be taken. The child
 *       executions will continue to run. A child policy for this
 *       workflow execution must be specified either as a default for the
 *       workflow type or through this parameter. If neither this
 *       parameter is set nor a default child policy was specified at
 *       registration time, a fault will be returned.
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
AWS.SimpleWorkflow.Client = inherit({});
