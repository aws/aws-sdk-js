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
 * === Sending a Request Using SimpleWorkflow
 *
 *   svc = new AWS.SimpleWorkflow();
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
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       containing the workflow executions to count.
 *     * +startTimeFilter+ - (<tt>Object</tt>) If specified, only
 *       workflow executions that meet the start time criteria of the
 *       filter are counted. startTimeFilter and closeTimeFilter are
 *       mutually exclusive. You must specify one of these in a request
 *       but not both.
 *       * +oldestDate+ - (*required*, <tt>Date</tt>)
 *       * +latestDate+ - (<tt>Date</tt>)
 *     * +closeTimeFilter+ - (<tt>Object</tt>) If specified, only
 *       workflow executions that meet the close time criteria of the
 *       filter are counted. startTimeFilter and closeTimeFilter are
 *       mutually exclusive. You must specify one of these in a request
 *       but not both.
 *       * +oldestDate+ - (*required*, <tt>Date</tt>)
 *       * +latestDate+ - (<tt>Date</tt>)
 *     * +executionFilter+ - (<tt>Object</tt>) If specified, only
 *       workflow executions matching the WorkflowId in the filter are
 *       counted. closeStatusFilter, executionFilter, typeFilter and
 *       tagFilter are mutually exclusive. You can specify at most one of
 *       these in a request.
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *     * +typeFilter+ - (<tt>Object</tt>) If specified, indicates the
 *       type of the workflow executions to be counted.
 *       closeStatusFilter, executionFilter, typeFilter and tagFilter are
 *       mutually exclusive. You can specify at most one of these in a
 *       request.
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (<tt>String</tt>)
 *     * +tagFilter+ - (<tt>Object</tt>) If specified, only executions
 *       that have a tag that matches the filter are counted.
 *       closeStatusFilter, executionFilter, typeFilter and tagFilter are
 *       mutually exclusive. You can specify at most one of these in a
 *       request.
 *       * +tag+ - (*required*, <tt>String</tt>)
 *     * +closeStatusFilter+ - (<tt>Object</tt>) If specified, only
 *       workflow executions that match this close status are counted.
 *       This filter has an affect only if executionStatus is specified
 *       as CLOSED. closeStatusFilter, executionFilter, typeFilter and
 *       tagFilter are mutually exclusive. You can specify at most one of
 *       these in a request.
 *       * +status+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +count+ - (<tt>Integer</tt>)
 *       * +truncated+ - (<tt>Boolean</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method countOpenWorkflowExecutions(params, callback)
 *   Calls the CountOpenWorkflowExecutions API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       containing the workflow executions to count.
 *     * +startTimeFilter+ - (*required*, <tt>Object</tt>) Specifies the
 *       start time criteria that workflow executions must meet in order
 *       to be counted.
 *       * +oldestDate+ - (*required*, <tt>Date</tt>)
 *       * +latestDate+ - (<tt>Date</tt>)
 *     * +typeFilter+ - (<tt>Object</tt>) Specifies the type of the
 *       workflow executions to be counted. executionFilter, typeFilter
 *       and tagFilter are mutually exclusive. You can specify at most
 *       one of these in a request.
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (<tt>String</tt>)
 *     * +tagFilter+ - (<tt>Object</tt>) If specified, only executions
 *       that have a tag that matches the filter are counted.
 *       executionFilter, typeFilter and tagFilter are mutually
 *       exclusive. You can specify at most one of these in a request.
 *       * +tag+ - (*required*, <tt>String</tt>)
 *     * +executionFilter+ - (<tt>Object</tt>) If specified, only
 *       workflow executions matching the WorkflowId in the filter are
 *       counted. executionFilter, typeFilter and tagFilter are mutually
 *       exclusive. You can specify at most one of these in a request.
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +count+ - (<tt>Integer</tt>)
 *       * +truncated+ - (<tt>Boolean</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method countPendingActivityTasks(params, callback)
 *   Calls the CountPendingActivityTasks API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       that contains the task list.
 *     * +taskList+ - (*required*, <tt>Object</tt>) The name of the task
 *       list.
 *       * +name+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +count+ - (<tt>Integer</tt>)
 *       * +truncated+ - (<tt>Boolean</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method countPendingDecisionTasks(params, callback)
 *   Calls the CountPendingDecisionTasks API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       that contains the task list.
 *     * +taskList+ - (*required*, <tt>Object</tt>) The name of the task
 *       list.
 *       * +name+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +count+ - (<tt>Integer</tt>)
 *       * +truncated+ - (<tt>Boolean</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deprecateActivityType(params, callback)
 *   Calls the DeprecateActivityType API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       in which the activity type is registered.
 *     * +activityType+ - (*required*, <tt>Object</tt>) The activity type
 *       to deprecate.
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (*required*, <tt>String</tt>)
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
 * @!method deprecateDomain(params, callback)
 *   Calls the DeprecateDomain API operation.
 *   @param params [Object]
 *     * +name+ - (*required*, <tt>String</tt>) The name of the domain to
 *       deprecate.
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
 * @!method deprecateWorkflowType(params, callback)
 *   Calls the DeprecateWorkflowType API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       in which the workflow type is registered.
 *     * +workflowType+ - (*required*, <tt>Object</tt>) The workflow type
 *       to deprecate.
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (*required*, <tt>String</tt>)
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
 * @!method describeActivityType(params, callback)
 *   Calls the DescribeActivityType API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       in which the activity type is registered.
 *     * +activityType+ - (*required*, <tt>Object</tt>) The activity type
 *       to describe.
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +typeInfo+ - (<tt>Object</tt>)
 *         * +activityType+ - (<tt>Object</tt>)
 *           * +name+ - (<tt>String</tt>)
 *           * +version+ - (<tt>String</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *         * +creationDate+ - (<tt>Date</tt>)
 *         * +deprecationDate+ - (<tt>Date</tt>)
 *       * +configuration+ - (<tt>Object</tt>)
 *         * +defaultTaskStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +defaultTaskHeartbeatTimeout+ - (<tt>String</tt>)
 *         * +defaultTaskList+ - (<tt>Object</tt>)
 *           * +name+ - (<tt>String</tt>)
 *         * +defaultTaskScheduleToStartTimeout+ - (<tt>String</tt>)
 *         * +defaultTaskScheduleToCloseTimeout+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDomain(params, callback)
 *   Calls the DescribeDomain API operation.
 *   @param params [Object]
 *     * +name+ - (*required*, <tt>String</tt>) The name of the domain to
 *       describe.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +domainInfo+ - (<tt>Object</tt>)
 *         * +name+ - (<tt>String</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *       * +configuration+ - (<tt>Object</tt>)
 *         * +workflowExecutionRetentionPeriodInDays+ - (*required*,
 *           <tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeWorkflowExecution(params, callback)
 *   Calls the DescribeWorkflowExecution API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       containing the workflow execution.
 *     * +execution+ - (*required*, <tt>Object</tt>) The workflow
 *       execution to describe.
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *       * +runId+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +executionInfo+ - (<tt>Object</tt>)
 *         * +execution+ - (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *         * +workflowType+ - (<tt>Object</tt>)
 *           * +name+ - (<tt>String</tt>)
 *           * +version+ - (<tt>String</tt>)
 *         * +startTimestamp+ - (<tt>Date</tt>)
 *         * +closeTimestamp+ - (<tt>Date</tt>)
 *         * +executionStatus+ - (<tt>String</tt>)
 *         * +closeStatus+ - (<tt>String</tt>)
 *         * +parent+ - (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *         * +tagList+ - (<tt>Array<String></tt>)
 *         * +cancelRequested+ - (<tt>Boolean</tt>)
 *       * +executionConfiguration+ - (<tt>Object</tt>)
 *         * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskList+ - (<tt>Object</tt>)
 *           * +name+ - (<tt>String</tt>)
 *         * +childPolicy+ - (<tt>String</tt>)
 *       * +openCounts+ - (<tt>Object</tt>)
 *         * +openActivityTasks+ - (<tt>Integer</tt>)
 *         * +openDecisionTasks+ - (<tt>Integer</tt>)
 *         * +openTimers+ - (<tt>Integer</tt>)
 *         * +openChildWorkflowExecutions+ - (<tt>Integer</tt>)
 *       * +latestActivityTaskTimestamp+ - (<tt>Date</tt>)
 *       * +latestExecutionContext+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeWorkflowType(params, callback)
 *   Calls the DescribeWorkflowType API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       in which this workflow type is registered.
 *     * +workflowType+ - (*required*, <tt>Object</tt>) The workflow type
 *       to describe.
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +typeInfo+ - (<tt>Object</tt>)
 *         * +workflowType+ - (<tt>Object</tt>)
 *           * +name+ - (<tt>String</tt>)
 *           * +version+ - (<tt>String</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *         * +creationDate+ - (<tt>Date</tt>)
 *         * +deprecationDate+ - (<tt>Date</tt>)
 *       * +configuration+ - (<tt>Object</tt>)
 *         * +defaultTaskStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +defaultExecutionStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +defaultTaskList+ - (<tt>Object</tt>)
 *           * +name+ - (<tt>String</tt>)
 *         * +defaultChildPolicy+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getWorkflowExecutionHistory(params, callback)
 *   Calls the GetWorkflowExecutionHistory API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       containing the workflow execution.
 *     * +execution+ - (*required*, <tt>Object</tt>) Specifies the
 *       workflow execution for which to return the history.
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *       * +runId+ - (*required*, <tt>String</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>) If a NextPageToken is
 *       returned, the result has more than one pages. To get the next
 *       page, repeat the call and specify the nextPageToken with all
 *       other arguments unchanged.
 *     * +maximumPageSize+ - (<tt>Integer</tt>) Specifies the maximum
 *       number of history events returned in one page. The next page in
 *       the result is identified by the NextPageToken returned. By
 *       default 100 history events are returned in a page but the caller
 *       can override this value to a page size smaller than the default.
 *       You cannot specify a page size larger than 100.
 *     * +reverseOrder+ - (<tt>Boolean</tt>) When set to true, returns
 *       the events in reverse order. By default the results are returned
 *       in ascending order of the eventTimeStamp of the events.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +events+ - (<tt>Array<Object></tt>)
 *         * +eventTimestamp+ - (<tt>Date</tt>)
 *         * +eventType+ - (<tt>String</tt>)
 *         * +eventId+ - (<tt>Integer</tt>)
 *         * +workflowExecutionStartedEventAttributes+ - (<tt>Object</tt>)
 *           * +input+ - (<tt>String</tt>)
 *           * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *           * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *           * +childPolicy+ - (<tt>String</tt>)
 *           * +taskList+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +tagList+ - (<tt>Array<String></tt>)
 *           * +continuedExecutionRunId+ - (<tt>String</tt>)
 *           * +parentWorkflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +parentInitiatedEventId+ - (<tt>Integer</tt>)
 *         * +workflowExecutionCompletedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +result+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +completeWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +workflowExecutionFailedEventAttributes+ - (<tt>Object</tt>)
 *           * +reason+ - (<tt>String</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +failWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +workflowExecutionTimedOutEventAttributes+ - (<tt>Object</tt>)
 *           * +timeoutType+ - (<tt>String</tt>)
 *           * +childPolicy+ - (<tt>String</tt>)
 *         * +workflowExecutionCanceledEventAttributes+ - (<tt>Object</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +cancelWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +workflowExecutionContinuedAsNewEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +input+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +newExecutionRunId+ - (<tt>String</tt>)
 *           * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *           * +taskList+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *           * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *           * +childPolicy+ - (<tt>String</tt>)
 *           * +tagList+ - (<tt>Array<String></tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *         * +continueAsNewWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +workflowExecutionTerminatedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +reason+ - (<tt>String</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +childPolicy+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *         * +workflowExecutionCancelRequestedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +externalWorkflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +externalInitiatedEventId+ - (<tt>Integer</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *         * +decisionTaskScheduledEventAttributes+ - (<tt>Object</tt>)
 *           * +taskList+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *           * +startToCloseTimeout+ - (<tt>String</tt>)
 *         * +decisionTaskStartedEventAttributes+ - (<tt>Object</tt>)
 *           * +identity+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *         * +decisionTaskCompletedEventAttributes+ - (<tt>Object</tt>)
 *           * +executionContext+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +decisionTaskTimedOutEventAttributes+ - (<tt>Object</tt>)
 *           * +timeoutType+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +activityTaskScheduledEventAttributes+ - (<tt>Object</tt>)
 *           * +activityType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +activityId+ - (<tt>String</tt>)
 *           * +input+ - (<tt>String</tt>)
 *           * +control+ - (<tt>String</tt>)
 *           * +scheduleToStartTimeout+ - (<tt>String</tt>)
 *           * +scheduleToCloseTimeout+ - (<tt>String</tt>)
 *           * +startToCloseTimeout+ - (<tt>String</tt>)
 *           * +taskList+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +heartbeatTimeout+ - (<tt>String</tt>)
 *         * +activityTaskStartedEventAttributes+ - (<tt>Object</tt>)
 *           * +identity+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *         * +activityTaskCompletedEventAttributes+ - (<tt>Object</tt>)
 *           * +result+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +activityTaskFailedEventAttributes+ - (<tt>Object</tt>)
 *           * +reason+ - (<tt>String</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +activityTaskTimedOutEventAttributes+ - (<tt>Object</tt>)
 *           * +timeoutType+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *           * +details+ - (<tt>String</tt>)
 *         * +activityTaskCanceledEventAttributes+ - (<tt>Object</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *           * +latestCancelRequestedEventId+ - (<tt>Integer</tt>)
 *         * +activityTaskCancelRequestedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +activityId+ - (<tt>String</tt>)
 *         * +workflowExecutionSignaledEventAttributes+ - (<tt>Object</tt>)
 *           * +signalName+ - (<tt>String</tt>)
 *           * +input+ - (<tt>String</tt>)
 *           * +externalWorkflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +externalInitiatedEventId+ - (<tt>Integer</tt>)
 *         * +markerRecordedEventAttributes+ - (<tt>Object</tt>)
 *           * +markerName+ - (<tt>String</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +timerStartedEventAttributes+ - (<tt>Object</tt>)
 *           * +timerId+ - (<tt>String</tt>)
 *           * +control+ - (<tt>String</tt>)
 *           * +startToFireTimeout+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +timerFiredEventAttributes+ - (<tt>Object</tt>)
 *           * +timerId+ - (<tt>String</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +timerCanceledEventAttributes+ - (<tt>Object</tt>)
 *           * +timerId+ - (<tt>String</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +startChildWorkflowExecutionInitiatedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +control+ - (<tt>String</tt>)
 *           * +input+ - (<tt>String</tt>)
 *           * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *           * +taskList+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +childPolicy+ - (<tt>String</tt>)
 *           * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *           * +tagList+ - (<tt>Array<String></tt>)
 *         * +childWorkflowExecutionStartedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *         * +childWorkflowExecutionCompletedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +result+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +childWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +reason+ - (<tt>String</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +childWorkflowExecutionTimedOutEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +timeoutType+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +childWorkflowExecutionCanceledEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +childWorkflowExecutionTerminatedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +signalExternalWorkflowExecutionInitiatedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *           * +signalName+ - (<tt>String</tt>)
 *           * +input+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +control+ - (<tt>String</tt>)
 *         * +externalWorkflowExecutionSignaledEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *         * +signalExternalWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +control+ - (<tt>String</tt>)
 *         * +externalWorkflowExecutionCancelRequestedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *         *
 *           +requestCancelExternalWorkflowExecutionInitiatedEventAttributes+
 *           - (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +control+ - (<tt>String</tt>)
 *         * +requestCancelExternalWorkflowExecutionFailedEventAttributes+
 *           - (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +control+ - (<tt>String</tt>)
 *         * +scheduleActivityTaskFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +activityType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +activityId+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +requestCancelActivityTaskFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +activityId+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +startTimerFailedEventAttributes+ - (<tt>Object</tt>)
 *           * +timerId+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +cancelTimerFailedEventAttributes+ - (<tt>Object</tt>)
 *           * +timerId+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +startChildWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +control+ - (<tt>String</tt>)
 *       * +nextPageToken+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listActivityTypes(params, callback)
 *   Calls the ListActivityTypes API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       in which the activity types have been registered.
 *     * +name+ - (<tt>String</tt>) If specified, only lists the activity
 *       types that have this name.
 *     * +registrationStatus+ - (*required*, <tt>String</tt>) Specifies
 *       the registration status of the activity types to list.
 *     * +nextPageToken+ - (<tt>String</tt>) If on a previous call to
 *       this method a NextResultToken was returned, the results have
 *       more than one page. To get the next page of results, repeat the
 *       call with the nextPageToken and keep all other arguments
 *       unchanged.
 *     * +maximumPageSize+ - (<tt>Integer</tt>) The maximum number of
 *       results returned in each page. The default is 100, but the
 *       caller can override this value to a page size smaller than the
 *       default. You cannot specify a page size greater than 100.
 *     * +reverseOrder+ - (<tt>Boolean</tt>) When set to true, returns
 *       the results in reverse order. By default the results are
 *       returned in ascending alphabetical order of the name of the
 *       activity types.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +typeInfos+ - (<tt>Array<Object></tt>)
 *         * +activityType+ - (<tt>Object</tt>)
 *           * +name+ - (<tt>String</tt>)
 *           * +version+ - (<tt>String</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *         * +creationDate+ - (<tt>Date</tt>)
 *         * +deprecationDate+ - (<tt>Date</tt>)
 *       * +nextPageToken+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listClosedWorkflowExecutions(params, callback)
 *   Calls the ListClosedWorkflowExecutions API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       that contains the workflow executions to list.
 *     * +startTimeFilter+ - (<tt>Object</tt>) If specified, the workflow
 *       executions are included in the returned results based on whether
 *       their start times are within the range specified by this filter.
 *       Also, if this parameter is specified, the returned results are
 *       ordered by their start times. startTimeFilter and
 *       closeTimeFilter are mutually exclusive. You must specify one of
 *       these in a request but not both.
 *       * +oldestDate+ - (*required*, <tt>Date</tt>)
 *       * +latestDate+ - (<tt>Date</tt>)
 *     * +closeTimeFilter+ - (<tt>Object</tt>) If specified, the workflow
 *       executions are included in the returned results based on whether
 *       their close times are within the range specified by this filter.
 *       Also, if this parameter is specified, the returned results are
 *       ordered by their close times. startTimeFilter and
 *       closeTimeFilter are mutually exclusive. You must specify one of
 *       these in a request but not both.
 *       * +oldestDate+ - (*required*, <tt>Date</tt>)
 *       * +latestDate+ - (<tt>Date</tt>)
 *     * +executionFilter+ - (<tt>Object</tt>) If specified, only
 *       workflow executions matching the workflow id specified in the
 *       filter are returned. closeStatusFilter, executionFilter,
 *       typeFilter and tagFilter are mutually exclusive. You can specify
 *       at most one of these in a request.
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *     * +closeStatusFilter+ - (<tt>Object</tt>) If specified, only
 *       workflow executions that match this close status are listed. For
 *       example, if TERMINATED is specified, then only TERMINATED
 *       workflow executions are listed. closeStatusFilter,
 *       executionFilter, typeFilter and tagFilter are mutually
 *       exclusive. You can specify at most one of these in a request.
 *       * +status+ - (*required*, <tt>String</tt>)
 *     * +typeFilter+ - (<tt>Object</tt>) If specified, only executions
 *       of the type specified in the filter are returned.
 *       closeStatusFilter, executionFilter, typeFilter and tagFilter are
 *       mutually exclusive. You can specify at most one of these in a
 *       request.
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (<tt>String</tt>)
 *     * +tagFilter+ - (<tt>Object</tt>) If specified, only executions
 *       that have the matching tag are listed. closeStatusFilter,
 *       executionFilter, typeFilter and tagFilter are mutually
 *       exclusive. You can specify at most one of these in a request.
 *       * +tag+ - (*required*, <tt>String</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>) If on a previous call to
 *       this method a NextPageToken was returned, the results are being
 *       paginated. To get the next page of results, repeat the call with
 *       the returned token and all other arguments unchanged.
 *     * +maximumPageSize+ - (<tt>Integer</tt>) The maximum number of
 *       results returned in each page. The default is 100, but the
 *       caller can override this value to a page size smaller than the
 *       default. You cannot specify a page size greater than 100.
 *     * +reverseOrder+ - (<tt>Boolean</tt>) When set to true, returns
 *       the results in reverse order. By default the results are
 *       returned in descending order of the start or the close time of
 *       the executions.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +executionInfos+ - (<tt>Array<Object></tt>)
 *         * +execution+ - (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *         * +workflowType+ - (<tt>Object</tt>)
 *           * +name+ - (<tt>String</tt>)
 *           * +version+ - (<tt>String</tt>)
 *         * +startTimestamp+ - (<tt>Date</tt>)
 *         * +closeTimestamp+ - (<tt>Date</tt>)
 *         * +executionStatus+ - (<tt>String</tt>)
 *         * +closeStatus+ - (<tt>String</tt>)
 *         * +parent+ - (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *         * +tagList+ - (<tt>Array<String></tt>)
 *         * +cancelRequested+ - (<tt>Boolean</tt>)
 *       * +nextPageToken+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listDomains(params, callback)
 *   Calls the ListDomains API operation.
 *   @param params [Object]
 *     * +nextPageToken+ - (<tt>String</tt>) If on a previous call to
 *       this method a NextPageToken was returned, the result has more
 *       than one page. To get the next page of results, repeat the call
 *       with the returned token and all other arguments unchanged.
 *     * +registrationStatus+ - (*required*, <tt>String</tt>) Specifies
 *       the registration status of the domains to list.
 *     * +maximumPageSize+ - (<tt>Integer</tt>) The maximum number of
 *       results returned in each page. The default is 100, but the
 *       caller can override this value to a page size smaller than the
 *       default. You cannot specify a page size greater than 100.
 *     * +reverseOrder+ - (<tt>Boolean</tt>) When set to true, returns
 *       the results in reverse order. By default the results are
 *       returned in ascending alphabetical order of the name of the
 *       domains.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +domainInfos+ - (<tt>Array<Object></tt>)
 *         * +name+ - (<tt>String</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *       * +nextPageToken+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listOpenWorkflowExecutions(params, callback)
 *   Calls the ListOpenWorkflowExecutions API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       that contains the workflow executions to list.
 *     * +startTimeFilter+ - (*required*, <tt>Object</tt>) Workflow
 *       executions are included in the returned results based on whether
 *       their start times are within the range specified by this filter.
 *       * +oldestDate+ - (*required*, <tt>Date</tt>)
 *       * +latestDate+ - (<tt>Date</tt>)
 *     * +typeFilter+ - (<tt>Object</tt>) If specified, only executions
 *       of the type specified in the filter are returned.
 *       executionFilter, typeFilter and tagFilter are mutually
 *       exclusive. You can specify at most one of these in a request.
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (<tt>String</tt>)
 *     * +tagFilter+ - (<tt>Object</tt>) If specified, only executions
 *       that have the matching tag are listed. executionFilter,
 *       typeFilter and tagFilter are mutually exclusive. You can specify
 *       at most one of these in a request.
 *       * +tag+ - (*required*, <tt>String</tt>)
 *     * +nextPageToken+ - (<tt>String</tt>) If on a previous call to
 *       this method a NextPageToken was returned, the results are being
 *       paginated. To get the next page of results, repeat the call with
 *       the returned token and all other arguments unchanged.
 *     * +maximumPageSize+ - (<tt>Integer</tt>) The maximum number of
 *       results returned in each page. The default is 100, but the
 *       caller can override this value to a page size smaller than the
 *       default. You cannot specify a page size greater than 100.
 *     * +reverseOrder+ - (<tt>Boolean</tt>) When set to true, returns
 *       the results in reverse order. By default the results are
 *       returned in descending order of the start time of the
 *       executions.
 *     * +executionFilter+ - (<tt>Object</tt>) If specified, only
 *       workflow executions matching the workflow id specified in the
 *       filter are returned. executionFilter, typeFilter and tagFilter
 *       are mutually exclusive. You can specify at most one of these in
 *       a request.
 *       * +workflowId+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +executionInfos+ - (<tt>Array<Object></tt>)
 *         * +execution+ - (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *         * +workflowType+ - (<tt>Object</tt>)
 *           * +name+ - (<tt>String</tt>)
 *           * +version+ - (<tt>String</tt>)
 *         * +startTimestamp+ - (<tt>Date</tt>)
 *         * +closeTimestamp+ - (<tt>Date</tt>)
 *         * +executionStatus+ - (<tt>String</tt>)
 *         * +closeStatus+ - (<tt>String</tt>)
 *         * +parent+ - (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *         * +tagList+ - (<tt>Array<String></tt>)
 *         * +cancelRequested+ - (<tt>Boolean</tt>)
 *       * +nextPageToken+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listWorkflowTypes(params, callback)
 *   Calls the ListWorkflowTypes API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       in which the workflow types have been registered.
 *     * +name+ - (<tt>String</tt>) If specified, lists the workflow type
 *       with this name.
 *     * +registrationStatus+ - (*required*, <tt>String</tt>) Specifies
 *       the registration status of the workflow types to list.
 *     * +nextPageToken+ - (<tt>String</tt>) If on a previous call to
 *       this method a NextPageToken was returned, the results are being
 *       paginated. To get the next page of results, repeat the call with
 *       the returned token and all other arguments unchanged.
 *     * +maximumPageSize+ - (<tt>Integer</tt>) The maximum number of
 *       results returned in each page. The default is 100, but the
 *       caller can override this value to a page size smaller than the
 *       default. You cannot specify a page size greater than 100.
 *     * +reverseOrder+ - (<tt>Boolean</tt>) When set to true, returns
 *       the results in reverse order. By default the results are
 *       returned in ascending alphabetical order of the name of the
 *       workflow types.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +typeInfos+ - (<tt>Array<Object></tt>)
 *         * +workflowType+ - (<tt>Object</tt>)
 *           * +name+ - (<tt>String</tt>)
 *           * +version+ - (<tt>String</tt>)
 *         * +status+ - (<tt>String</tt>)
 *         * +description+ - (<tt>String</tt>)
 *         * +creationDate+ - (<tt>Date</tt>)
 *         * +deprecationDate+ - (<tt>Date</tt>)
 *       * +nextPageToken+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method pollForActivityTask(params, callback)
 *   Calls the PollForActivityTask API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       that contains the task lists being polled.
 *     * +taskList+ - (*required*, <tt>Object</tt>) Specifies the task
 *       list to poll for activity tasks. &NameFormat;
 *       * +name+ - (*required*, <tt>String</tt>)
 *     * +identity+ - (<tt>String</tt>) Identity of the worker making the
 *       request, which is recorded in the ActivityTaskStarted event in
 *       the workflow history. This enables diagnostic tracing when
 *       problems arise. The form of this identity is user defined.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +taskToken+ - (<tt>String</tt>)
 *       * +activityId+ - (<tt>String</tt>)
 *       * +startedEventId+ - (<tt>Integer</tt>)
 *       * +workflowExecution+ - (<tt>Object</tt>)
 *         * +workflowId+ - (<tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *       * +activityType+ - (<tt>Object</tt>)
 *         * +name+ - (<tt>String</tt>)
 *         * +version+ - (<tt>String</tt>)
 *       * +input+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method pollForDecisionTask(params, callback)
 *   Calls the PollForDecisionTask API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       containing the task lists to poll.
 *     * +taskList+ - (*required*, <tt>Object</tt>) Specifies the task
 *       list to poll for decision tasks. &NameFormat;
 *       * +name+ - (*required*, <tt>String</tt>)
 *     * +identity+ - (<tt>String</tt>) Identity of the decider making
 *       the request, which is recorded in the DecisionTaskStarted event
 *       in the workflow history. This enables diagnostic tracing when
 *       problems arise. The form of this identity is user defined.
 *     * +nextPageToken+ - (<tt>String</tt>) If on a previous call to
 *       this method a NextPageToken was returned, the results are being
 *       paginated. To get the next page of results, repeat the call with
 *       the returned token and all other arguments unchanged. The
 *       nextPageToken returned by this action cannot be used with
 *       GetWorkflowExecutionHistory to get the next page. You must call
 *       PollForDecisionTask again (with the nextPageToken) to retrieve
 *       the next page of history records. Calling PollForDecisionTask
 *       with a nextPageToken will not return a new decision task..
 *     * +maximumPageSize+ - (<tt>Integer</tt>) The maximum number of
 *       history events returned in each page. The default is 100, but
 *       the caller can override this value to a page size smaller than
 *       the default. You cannot specify a page size greater than 100.
 *     * +reverseOrder+ - (<tt>Boolean</tt>) When set to true, returns
 *       the events in reverse order. By default the results are returned
 *       in ascending order of the eventTimestamp of the events.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +taskToken+ - (<tt>String</tt>)
 *       * +startedEventId+ - (<tt>Integer</tt>)
 *       * +workflowExecution+ - (<tt>Object</tt>)
 *         * +workflowId+ - (<tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *       * +workflowType+ - (<tt>Object</tt>)
 *         * +name+ - (<tt>String</tt>)
 *         * +version+ - (<tt>String</tt>)
 *       * +events+ - (<tt>Array<Object></tt>)
 *         * +eventTimestamp+ - (<tt>Date</tt>)
 *         * +eventType+ - (<tt>String</tt>)
 *         * +eventId+ - (<tt>Integer</tt>)
 *         * +workflowExecutionStartedEventAttributes+ - (<tt>Object</tt>)
 *           * +input+ - (<tt>String</tt>)
 *           * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *           * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *           * +childPolicy+ - (<tt>String</tt>)
 *           * +taskList+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +tagList+ - (<tt>Array<String></tt>)
 *           * +continuedExecutionRunId+ - (<tt>String</tt>)
 *           * +parentWorkflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +parentInitiatedEventId+ - (<tt>Integer</tt>)
 *         * +workflowExecutionCompletedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +result+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +completeWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +workflowExecutionFailedEventAttributes+ - (<tt>Object</tt>)
 *           * +reason+ - (<tt>String</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +failWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +workflowExecutionTimedOutEventAttributes+ - (<tt>Object</tt>)
 *           * +timeoutType+ - (<tt>String</tt>)
 *           * +childPolicy+ - (<tt>String</tt>)
 *         * +workflowExecutionCanceledEventAttributes+ - (<tt>Object</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +cancelWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +workflowExecutionContinuedAsNewEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +input+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +newExecutionRunId+ - (<tt>String</tt>)
 *           * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *           * +taskList+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *           * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *           * +childPolicy+ - (<tt>String</tt>)
 *           * +tagList+ - (<tt>Array<String></tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *         * +continueAsNewWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +workflowExecutionTerminatedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +reason+ - (<tt>String</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +childPolicy+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *         * +workflowExecutionCancelRequestedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +externalWorkflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +externalInitiatedEventId+ - (<tt>Integer</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *         * +decisionTaskScheduledEventAttributes+ - (<tt>Object</tt>)
 *           * +taskList+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *           * +startToCloseTimeout+ - (<tt>String</tt>)
 *         * +decisionTaskStartedEventAttributes+ - (<tt>Object</tt>)
 *           * +identity+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *         * +decisionTaskCompletedEventAttributes+ - (<tt>Object</tt>)
 *           * +executionContext+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +decisionTaskTimedOutEventAttributes+ - (<tt>Object</tt>)
 *           * +timeoutType+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +activityTaskScheduledEventAttributes+ - (<tt>Object</tt>)
 *           * +activityType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +activityId+ - (<tt>String</tt>)
 *           * +input+ - (<tt>String</tt>)
 *           * +control+ - (<tt>String</tt>)
 *           * +scheduleToStartTimeout+ - (<tt>String</tt>)
 *           * +scheduleToCloseTimeout+ - (<tt>String</tt>)
 *           * +startToCloseTimeout+ - (<tt>String</tt>)
 *           * +taskList+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +heartbeatTimeout+ - (<tt>String</tt>)
 *         * +activityTaskStartedEventAttributes+ - (<tt>Object</tt>)
 *           * +identity+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *         * +activityTaskCompletedEventAttributes+ - (<tt>Object</tt>)
 *           * +result+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +activityTaskFailedEventAttributes+ - (<tt>Object</tt>)
 *           * +reason+ - (<tt>String</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +activityTaskTimedOutEventAttributes+ - (<tt>Object</tt>)
 *           * +timeoutType+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *           * +details+ - (<tt>String</tt>)
 *         * +activityTaskCanceledEventAttributes+ - (<tt>Object</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +scheduledEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *           * +latestCancelRequestedEventId+ - (<tt>Integer</tt>)
 *         * +activityTaskCancelRequestedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +activityId+ - (<tt>String</tt>)
 *         * +workflowExecutionSignaledEventAttributes+ - (<tt>Object</tt>)
 *           * +signalName+ - (<tt>String</tt>)
 *           * +input+ - (<tt>String</tt>)
 *           * +externalWorkflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +externalInitiatedEventId+ - (<tt>Integer</tt>)
 *         * +markerRecordedEventAttributes+ - (<tt>Object</tt>)
 *           * +markerName+ - (<tt>String</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +timerStartedEventAttributes+ - (<tt>Object</tt>)
 *           * +timerId+ - (<tt>String</tt>)
 *           * +control+ - (<tt>String</tt>)
 *           * +startToFireTimeout+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +timerFiredEventAttributes+ - (<tt>Object</tt>)
 *           * +timerId+ - (<tt>String</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +timerCanceledEventAttributes+ - (<tt>Object</tt>)
 *           * +timerId+ - (<tt>String</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +startChildWorkflowExecutionInitiatedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +control+ - (<tt>String</tt>)
 *           * +input+ - (<tt>String</tt>)
 *           * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *           * +taskList+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +childPolicy+ - (<tt>String</tt>)
 *           * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *           * +tagList+ - (<tt>Array<String></tt>)
 *         * +childWorkflowExecutionStartedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *         * +childWorkflowExecutionCompletedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +result+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +childWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +reason+ - (<tt>String</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +childWorkflowExecutionTimedOutEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +timeoutType+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +childWorkflowExecutionCanceledEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +details+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +childWorkflowExecutionTerminatedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +startedEventId+ - (<tt>Integer</tt>)
 *         * +signalExternalWorkflowExecutionInitiatedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *           * +signalName+ - (<tt>String</tt>)
 *           * +input+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +control+ - (<tt>String</tt>)
 *         * +externalWorkflowExecutionSignaledEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *         * +signalExternalWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +control+ - (<tt>String</tt>)
 *         * +externalWorkflowExecutionCancelRequestedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowExecution+ - (<tt>Object</tt>)
 *             * +workflowId+ - (<tt>String</tt>)
 *             * +runId+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *         *
 *           +requestCancelExternalWorkflowExecutionInitiatedEventAttributes+
 *           - (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +control+ - (<tt>String</tt>)
 *         * +requestCancelExternalWorkflowExecutionFailedEventAttributes+
 *           - (<tt>Object</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +runId+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +control+ - (<tt>String</tt>)
 *         * +scheduleActivityTaskFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +activityType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +activityId+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +requestCancelActivityTaskFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +activityId+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +startTimerFailedEventAttributes+ - (<tt>Object</tt>)
 *           * +timerId+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +cancelTimerFailedEventAttributes+ - (<tt>Object</tt>)
 *           * +timerId+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *         * +startChildWorkflowExecutionFailedEventAttributes+ -
 *           (<tt>Object</tt>)
 *           * +workflowType+ - (<tt>Object</tt>)
 *             * +name+ - (<tt>String</tt>)
 *             * +version+ - (<tt>String</tt>)
 *           * +cause+ - (<tt>String</tt>)
 *           * +workflowId+ - (<tt>String</tt>)
 *           * +initiatedEventId+ - (<tt>Integer</tt>)
 *           * +decisionTaskCompletedEventId+ - (*required*,
 *             <tt>Integer</tt>)
 *           * +control+ - (<tt>String</tt>)
 *       * +nextPageToken+ - (<tt>String</tt>)
 *       * +previousStartedEventId+ - (<tt>Integer</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method recordActivityTaskHeartbeat(params, callback)
 *   Calls the RecordActivityTaskHeartbeat API operation.
 *   @param params [Object]
 *     * +taskToken+ - (*required*, <tt>String</tt>) The taskToken of the
 *       ActivityTask. &taskTokenOpaque;
 *     * +details+ - (<tt>String</tt>) If specified, contains details
 *       about the progress of the task.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +cancelRequested+ - (<tt>Boolean</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method registerActivityType(params, callback)
 *   Calls the RegisterActivityType API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       in which this activity is to be registered.
 *     * +name+ - (*required*, <tt>String</tt>) The name of the activity
 *       type within the domain. &NameFormat;
 *     * +version+ - (*required*, <tt>String</tt>) The version of the
 *       activity type. The activity type consists of the name and
 *       version, the combination of which must be unique within the
 *       domain. &NameFormat;
 *     * +description+ - (<tt>String</tt>) A textual description of the
 *       activity type.
 *     * +defaultTaskStartToCloseTimeout+ - (<tt>String</tt>) If set,
 *       specifies the default maximum duration that a worker can take to
 *       process tasks of this activity type. This default can be
 *       overridden when scheduling an activity task using the
 *       ScheduleActivityTask Decision. &durationWithNone;
 *     * +defaultTaskHeartbeatTimeout+ - (<tt>String</tt>) If set,
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
 *       &durationWithNone;
 *     * +defaultTaskList+ - (<tt>Object</tt>) If set, specifies the
 *       default task list to use for scheduling tasks of this activity
 *       type. This default task list is used if a task list is not
 *       provided when a task is scheduled through the
 *       ScheduleActivityTask Decision.
 *       * +name+ - (*required*, <tt>String</tt>)
 *     * +defaultTaskScheduleToStartTimeout+ - (<tt>String</tt>) If set,
 *       specifies the default maximum duration that a task of this
 *       activity type can wait before being assigned to a worker. This
 *       default can be overridden when scheduling an activity task using
 *       the ScheduleActivityTask Decision. &durationWithNone;
 *     * +defaultTaskScheduleToCloseTimeout+ - (<tt>String</tt>) If set,
 *       specifies the default maximum duration for a task of this
 *       activity type. This default can be overridden when scheduling an
 *       activity task using the ScheduleActivityTask Decision.
 *       &durationWithNone;
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
 * @!method registerDomain(params, callback)
 *   Calls the RegisterDomain API operation.
 *   @param params [Object]
 *     * +name+ - (*required*, <tt>String</tt>) Name of the domain to
 *       register. The name must be unique. &NameFormat;
 *     * +description+ - (<tt>String</tt>) Textual description of the
 *       domain.
 *     * +workflowExecutionRetentionPeriodInDays+ - (*required*,
 *       <tt>String</tt>) Specifies the duration--in days--for which the
 *       record (including the history) of workflow executions in this
 *       domain should be kept by the service. After the retention
 *       period, the workflow execution will not be available in the
 *       results of visibility calls. If a duration of NONE is specified,
 *       the records for workflow executions in this domain are not
 *       retained at all. &durationWithNone;
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
 * @!method registerWorkflowType(params, callback)
 *   Calls the RegisterWorkflowType API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       in which to register the workflow type.
 *     * +name+ - (*required*, <tt>String</tt>) The name of the workflow
 *       type. &NameFormat;
 *     * +version+ - (*required*, <tt>String</tt>) The version of the
 *       workflow type. The workflow type consists of the name and
 *       version, the combination of which must be unique within the
 *       domain. To get a list of all currently registered workflow
 *       types, use the ListWorkflowTypes action. &NameFormat;
 *     * +description+ - (<tt>String</tt>) Textual description of the
 *       workflow type.
 *     * +defaultTaskStartToCloseTimeout+ - (<tt>String</tt>) If set,
 *       specifies the default maximum duration of decision tasks for
 *       this workflow type. This default can be overridden when starting
 *       a workflow execution using the StartWorkflowExecution action or
 *       the StartChildWorkflowExecution Decision. &durationWithNone;
 *     * +defaultExecutionStartToCloseTimeout+ - (<tt>String</tt>) If
 *       set, specifies the default maximum duration for executions of
 *       this workflow type. You can override this default when starting
 *       an execution through the StartWorkflowExecution Action or
 *       StartChildWorkflowExecution Decision. &durationWithoutNone;
 *       Unlike some of the other timeout parameters in Amazon SWF, you
 *       cannot specify a value of "NONE" for
 *       defaultExecutionStartToCloseTimeout; there is a one-year max
 *       limit on the time that a workflow execution can run. Exceeding
 *       this limit will always cause the workflow execution to time out.
 *     * +defaultTaskList+ - (<tt>Object</tt>) If set, specifies the
 *       default task list to use for scheduling decision tasks for
 *       executions of this workflow type. This default is used only if a
 *       task list is not provided when starting the execution through
 *       the StartWorkflowExecution Action or StartChildWorkflowExecution
 *       Decision.
 *       * +name+ - (*required*, <tt>String</tt>)
 *     * +defaultChildPolicy+ - (<tt>String</tt>) If set, specifies the
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
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method requestCancelWorkflowExecution(params, callback)
 *   Calls the RequestCancelWorkflowExecution API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       containing the workflow execution to cancel.
 *     * +workflowId+ - (*required*, <tt>String</tt>) The workflowId of
 *       the workflow execution to cancel.
 *     * +runId+ - (<tt>String</tt>) The runId of the workflow execution
 *       to cancel.
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
 * @!method respondActivityTaskCanceled(params, callback)
 *   Calls the RespondActivityTaskCanceled API operation.
 *   @param params [Object]
 *     * +taskToken+ - (*required*, <tt>String</tt>) The taskToken of the
 *       ActivityTask. &taskTokenOpaque;
 *     * +details+ - (<tt>String</tt>) Optional information about the
 *       cancellation.
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
 * @!method respondActivityTaskCompleted(params, callback)
 *   Calls the RespondActivityTaskCompleted API operation.
 *   @param params [Object]
 *     * +taskToken+ - (*required*, <tt>String</tt>) The taskToken of the
 *       ActivityTask. &taskTokenOpaque;
 *     * +result+ - (<tt>String</tt>) The result of the activity task. It
 *       is a free form string that is implementation specific.
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
 * @!method respondActivityTaskFailed(params, callback)
 *   Calls the RespondActivityTaskFailed API operation.
 *   @param params [Object]
 *     * +taskToken+ - (*required*, <tt>String</tt>) The taskToken of the
 *       ActivityTask. &taskTokenOpaque;
 *     * +reason+ - (<tt>String</tt>) Description of the error that may
 *       assist in diagnostics.
 *     * +details+ - (<tt>String</tt>) Optional detailed information
 *       about the failure.
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
 * @!method respondDecisionTaskCompleted(params, callback)
 *   Calls the RespondDecisionTaskCompleted API operation.
 *   @param params [Object]
 *     * +taskToken+ - (*required*, <tt>String</tt>) The taskToken from
 *       the DecisionTask. &taskTokenOpaque;
 *     * +decisions+ - (<tt>Array<Object></tt>) The list of decisions
 *       (possibly empty) made by the decider while processing this
 *       decision task. See the docs for the Decision structure for
 *       details.
 *       * +decisionType+ - (*required*, <tt>String</tt>)
 *       * +scheduleActivityTaskDecisionAttributes+ - (<tt>Object</tt>)
 *         * +activityType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +activityId+ - (*required*, <tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +scheduleToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskList+ - (<tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +scheduleToStartTimeout+ - (<tt>String</tt>)
 *         * +startToCloseTimeout+ - (<tt>String</tt>)
 *         * +heartbeatTimeout+ - (<tt>String</tt>)
 *       * +requestCancelActivityTaskDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +activityId+ - (*required*, <tt>String</tt>)
 *       * +completeWorkflowExecutionDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +result+ - (<tt>String</tt>)
 *       * +failWorkflowExecutionDecisionAttributes+ - (<tt>Object</tt>)
 *         * +reason+ - (<tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *       * +cancelWorkflowExecutionDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +details+ - (<tt>String</tt>)
 *       * +continueAsNewWorkflowExecutionDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskList+ - (<tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +childPolicy+ - (<tt>String</tt>)
 *         * +tagList+ - (<tt>Array<String></tt>)
 *         * +workflowTypeVersion+ - (<tt>String</tt>)
 *       * +recordMarkerDecisionAttributes+ - (<tt>Object</tt>)
 *         * +markerName+ - (*required*, <tt>String</tt>)
 *         * +details+ - (<tt>String</tt>)
 *       * +startTimerDecisionAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *         * +startToFireTimeout+ - (*required*, <tt>String</tt>)
 *       * +cancelTimerDecisionAttributes+ - (<tt>Object</tt>)
 *         * +timerId+ - (*required*, <tt>String</tt>)
 *       * +signalExternalWorkflowExecutionDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *         * +signalName+ - (*required*, <tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *       * +requestCancelExternalWorkflowExecutionDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +runId+ - (<tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *       * +startChildWorkflowExecutionDecisionAttributes+ -
 *         (<tt>Object</tt>)
 *         * +workflowType+ - (*required*, <tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *           * +version+ - (*required*, <tt>String</tt>)
 *         * +workflowId+ - (*required*, <tt>String</tt>)
 *         * +control+ - (<tt>String</tt>)
 *         * +input+ - (<tt>String</tt>)
 *         * +executionStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +taskList+ - (<tt>Object</tt>)
 *           * +name+ - (*required*, <tt>String</tt>)
 *         * +taskStartToCloseTimeout+ - (<tt>String</tt>)
 *         * +childPolicy+ - (<tt>String</tt>)
 *         * +tagList+ - (<tt>Array<String></tt>)
 *     * +executionContext+ - (<tt>String</tt>) User defined context to
 *       add to workflow execution.
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
 * @!method signalWorkflowExecution(params, callback)
 *   Calls the SignalWorkflowExecution API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       containing the workflow execution to signal.
 *     * +workflowId+ - (*required*, <tt>String</tt>) The workflowId of
 *       the workflow execution to signal.
 *     * +runId+ - (<tt>String</tt>) The runId of the workflow execution
 *       to signal.
 *     * +signalName+ - (*required*, <tt>String</tt>) The name of the
 *       signal. This name must be meaningful to the target workflow.
 *     * +input+ - (<tt>String</tt>) Data to attach to the
 *       WorkflowExecutionSignaled event in the target workflow
 *       execution's history.
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
 * @!method startWorkflowExecution(params, callback)
 *   Calls the StartWorkflowExecution API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The name of the domain
 *       in which the workflow execution is created.
 *     * +workflowId+ - (*required*, <tt>String</tt>) The user defined
 *       identifier associated with the workflow execution. You can use
 *       this to associate a custom identifier with the workflow
 *       execution. You may specify the same identifier if a workflow
 *       execution is logically a restart of a previous execution. You
 *       cannot have two open workflow executions with the same
 *       workflowId at the same time. &NameFormat;
 *     * +workflowType+ - (*required*, <tt>Object</tt>) The type of the
 *       workflow to start.
 *       * +name+ - (*required*, <tt>String</tt>)
 *       * +version+ - (*required*, <tt>String</tt>)
 *     * +taskList+ - (<tt>Object</tt>) The task list to use for the
 *       decision tasks generated for this workflow execution. This
 *       overrides the defaultTaskList specified when registering the
 *       workflow type. A task list for this workflow execution must be
 *       specified either as a default for the workflow type or through
 *       this parameter. If neither this parameter is set nor a default
 *       task list was specified at registration time then a fault will
 *       be returned.&NameFormat;
 *       * +name+ - (*required*, <tt>String</tt>)
 *     * +input+ - (<tt>String</tt>) The input for the workflow
 *       execution. This is a free form string which should be meaningful
 *       to the workflow you are starting. This input is made available
 *       to the new workflow execution in the WorkflowExecutionStarted
 *       history event.
 *     * +executionStartToCloseTimeout+ - (<tt>String</tt>) The total
 *       duration for this workflow execution. This overrides the
 *       defaultExecutionStartToCloseTimeout specified when registering
 *       the workflow type. &durationWithoutNone; Exceeding this limit
 *       will cause the workflow execution to time out. Unlike some of
 *       the other timeout parameters in Amazon SWF, you cannot specify a
 *       value of "NONE" for this timeout; there is a one-year max limit
 *       on the time that a workflow execution can run. An execution
 *       start-to-close timeout must be specified either through this
 *       parameter or as a default when the workflow type is registered.
 *       If neither this parameter nor a default execution start-to-close
 *       timeout is specified, a fault is returned.
 *     * +tagList+ - (<tt>Array<String></tt>) The list of tags to
 *       associate with the workflow execution. You can specify a maximum
 *       of 5 tags. You can list workflow executions with a specific tag
 *       by calling ListOpenWorkflowExecutions or
 *       ListClosedWorkflowExecutions and specifying a TagFilter.
 *     * +taskStartToCloseTimeout+ - (<tt>String</tt>) Specifies the
 *       maximum duration of decision tasks for this workflow execution.
 *       This parameter overrides the defaultTaskStartToCloseTimout
 *       specified when registering the workflow type using
 *       RegisterWorkflowType. &durationWithNone; A task start-to-close
 *       timeout for this workflow execution must be specified either as
 *       a default for the workflow type or through this parameter. If
 *       neither this parameter is set nor a default task start-to-close
 *       timeout was specified at registration time then a fault will be
 *       returned.
 *     * +childPolicy+ - (<tt>String</tt>) If set, specifies the policy
 *       to use for the child workflow executions of this workflow
 *       execution if it is terminated, by calling the
 *       TerminateWorkflowExecution action explicitly or due to an
 *       expired timeout. This policy overrides the default child policy
 *       specified when registering the workflow type using
 *       RegisterWorkflowType. The supported child policies are:
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
 *       registration time then a fault will be returned.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +runId+ - (<tt>String</tt>) The runId of a workflow execution.
 *         This Id is generated by the service and can be used to uniquely
 *         identify the workflow execution within a domain.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method terminateWorkflowExecution(params, callback)
 *   Calls the TerminateWorkflowExecution API operation.
 *   @param params [Object]
 *     * +domain+ - (*required*, <tt>String</tt>) The domain of the
 *       workflow execution to terminate.
 *     * +workflowId+ - (*required*, <tt>String</tt>) The workflowId of
 *       the workflow execution to terminate.
 *     * +runId+ - (<tt>String</tt>) The runId of the workflow execution
 *       to terminate.
 *     * +reason+ - (<tt>String</tt>) An optional descriptive reason for
 *       terminating the workflow execution.
 *     * +details+ - (<tt>String</tt>) Optional details for terminating
 *       the workflow execution.
 *     * +childPolicy+ - (<tt>String</tt>) If set, specifies the policy
 *       to use for the child workflow executions of the workflow
 *       execution being terminated. This policy overrides the child
 *       policy specified for the workflow execution at registration time
 *       or when starting the execution. The supported child policies
 *       are: TERMINATE: the child executions will be terminated.
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
AWS.SimpleWorkflow.Client = inherit({});
