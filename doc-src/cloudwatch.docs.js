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
 * === Sending a Request Using CloudWatch
 *
 *   svc = new AWS.CloudWatch();
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
 *   @option (see AWS.CloudWatch.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.CloudWatch.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.CloudWatch.Client
 *
 */
AWS.CloudWatch = inherit({})

/**
 * The low-level CloudWatch client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method deleteAlarms(params, callback)
 *   Calls the DeleteAlarms API operation.
 *   @param params [Object]
 *     * +AlarmNames+ - (*required*, <tt>Array<String></tt>) A list of
 *       alarms to be deleted.
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
 * @!method describeAlarmHistory(params, callback)
 *   Calls the DescribeAlarmHistory API operation.
 *   @param params [Object]
 *     * +AlarmName+ - (<tt>String</tt>) The name of the alarm.
 *     * +HistoryItemType+ - (<tt>String</tt>) The type of alarm
 *       histories to retrieve.
 *     * +StartDate+ - (<tt>Date</tt>) The starting date to retrieve
 *       alarm history.
 *     * +EndDate+ - (<tt>Date</tt>) The ending date to retrieve alarm
 *       history.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of alarm
 *       history records to retrieve.
 *     * +NextToken+ - (<tt>String</tt>) The token returned by a previous
 *       call to indicate that there is more data available.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AlarmHistoryItems+ - (<tt>Array<Object></tt>) A list of alarm
 *         histories in JSON format.
 *         * +AlarmName+ - (<tt>String</tt>) The descriptive name for the
 *           alarm.
 *         * +Timestamp+ - (<tt>Date</tt>) The time stamp for the alarm
 *           history item.
 *         * +HistoryItemType+ - (<tt>String</tt>) The type of alarm
 *           history item.
 *         * +HistorySummary+ - (<tt>String</tt>) A human-readable summary
 *           of the alarm history.
 *         * +HistoryData+ - (<tt>String</tt>) Machine-readable data about
 *           the alarm in JSON format.
 *       * +NextToken+ - (<tt>String</tt>) A string that marks the start of
 *         the next batch of returned results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeAlarms(params, callback)
 *   Calls the DescribeAlarms API operation.
 *   @param params [Object]
 *     * +AlarmNames+ - (<tt>Array<String></tt>) A list of alarm names to
 *       retrieve information for.
 *     * +AlarmNamePrefix+ - (<tt>String</tt>) The alarm name prefix.
 *       AlarmNames cannot be specified if this parameter is specified.
 *     * +StateValue+ - (<tt>String</tt>) The state value to be used in
 *       matching alarms.
 *     * +ActionPrefix+ - (<tt>String</tt>) The action name prefix.
 *     * +MaxRecords+ - (<tt>Integer</tt>) The maximum number of alarm
 *       descriptions to retrieve.
 *     * +NextToken+ - (<tt>String</tt>) The token returned by a previous
 *       call to indicate that there is more data available.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +MetricAlarms+ - (<tt>Array<Object></tt>) A list of information
 *         for the specified alarms.
 *         * +AlarmName+ - (<tt>String</tt>) The name of the alarm.
 *         * +AlarmArn+ - (<tt>String</tt>) The Amazon Resource Name (ARN)
 *           of the alarm.
 *         * +AlarmDescription+ - (<tt>String</tt>) The description for the
 *           alarm.
 *         * +AlarmConfigurationUpdatedTimestamp+ - (<tt>Date</tt>) The
 *           time stamp of the last update to the alarm configuration.
 *         * +ActionsEnabled+ - (<tt>Boolean</tt>) Indicates whether
 *           actions should be executed during any changes to the alarm's
 *           state.
 *         * +OKActions+ - (<tt>Array<String></tt>) The list of actions to
 *           execute when this alarm transitions into an OK state from any
 *           other state. Each action is specified as an Amazon Resource
 *           Number (ARN). Currently the only actions supported are
 *           publishing to an Amazon SNS topic and triggering an Auto
 *           Scaling policy.
 *         * +AlarmActions+ - (<tt>Array<String></tt>) The list of actions
 *           to execute when this alarm transitions into an ALARM state
 *           from any other state. Each action is specified as an Amazon
 *           Resource Number (ARN). Currently the only actions supported
 *           are publishing to an Amazon SNS topic and triggering an Auto
 *           Scaling policy.
 *         * +InsufficientDataActions+ - (<tt>Array<String></tt>) The list
 *           of actions to execute when this alarm transitions into an
 *           INSUFFICIENT_DATA state from any other state. Each action is
 *           specified as an Amazon Resource Number (ARN). Currently the
 *           only actions supported are publishing to an Amazon SNS topic
 *           or triggering an Auto Scaling policy.
 *         * +StateValue+ - (<tt>String</tt>) The state value for the
 *           alarm.
 *         * +StateReason+ - (<tt>String</tt>) A human-readable explanation
 *           for the alarm's state.
 *         * +StateReasonData+ - (<tt>String</tt>) An explanation for the
 *           alarm's state in machine-readable JSON format
 *         * +StateUpdatedTimestamp+ - (<tt>Date</tt>) The time stamp of
 *           the last update to the alarm's state.
 *         * +MetricName+ - (<tt>String</tt>) The name of the alarm's
 *           metric.
 *         * +Namespace+ - (<tt>String</tt>) The namespace of alarm's
 *           associated metric.
 *         * +Statistic+ - (<tt>String</tt>) The statistic to apply to the
 *           alarm's associated metric.
 *         * +Dimensions+ - (<tt>Array<Object></tt>) The list of dimensions
 *           associated with the alarm's associated metric.
 *           * +Name+ - (<tt>String</tt>) The name of the
 *             dimension.
 *           * +Value+ - (<tt>String</tt>) The value
 *             representing the dimension measurement
 *         * +Period+ - (<tt>Integer</tt>) The period in seconds over which
 *           the statistic is applied.
 *         * +Unit+ - (<tt>String</tt>) The unit of the alarm's associated
 *           metric.
 *         * +EvaluationPeriods+ - (<tt>Integer</tt>) The number of periods
 *           over which data is compared to the specified threshold.
 *         * +Threshold+ - (<tt>Float</tt>) The value against which the
 *           specified statistic is compared.
 *         * +ComparisonOperator+ - (<tt>String</tt>) The arithmetic
 *           operation to use when comparing the specified Statistic and
 *           Threshold. The specified Statistic value is used as the first
 *           operand.
 *       * +NextToken+ - (<tt>String</tt>) A string that marks the start of
 *         the next batch of returned results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeAlarmsForMetric(params, callback)
 *   Calls the DescribeAlarmsForMetric API operation.
 *   @param params [Object]
 *     * +MetricName+ - (*required*, <tt>String</tt>) The name of the
 *       metric.
 *     * +Namespace+ - (*required*, <tt>String</tt>) The namespace of the
 *       metric.
 *     * +Statistic+ - (<tt>String</tt>) The statistic for the metric.
 *     * +Dimensions+ - (<tt>Array<Object></tt>) The list of dimensions
 *       associated with the metric.
 *       * +Name+ - (*required*, <tt>String</tt>) The name of the
 *         dimension.
 *       * +Value+ - (*required*, <tt>String</tt>) The value representing
 *         the dimension measurement
 *     * +Period+ - (<tt>Integer</tt>) The period in seconds over which
 *       the statistic is applied.
 *     * +Unit+ - (<tt>String</tt>) The unit for the metric.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +MetricAlarms+ - (<tt>Array<Object></tt>) A list of information
 *         for each alarm with the specified metric.
 *         * +AlarmName+ - (<tt>String</tt>) The name of the alarm.
 *         * +AlarmArn+ - (<tt>String</tt>) The Amazon Resource Name (ARN)
 *           of the alarm.
 *         * +AlarmDescription+ - (<tt>String</tt>) The description for the
 *           alarm.
 *         * +AlarmConfigurationUpdatedTimestamp+ - (<tt>Date</tt>) The
 *           time stamp of the last update to the alarm configuration.
 *         * +ActionsEnabled+ - (<tt>Boolean</tt>) Indicates whether
 *           actions should be executed during any changes to the alarm's
 *           state.
 *         * +OKActions+ - (<tt>Array<String></tt>) The list of actions to
 *           execute when this alarm transitions into an OK state from any
 *           other state. Each action is specified as an Amazon Resource
 *           Number (ARN). Currently the only actions supported are
 *           publishing to an Amazon SNS topic and triggering an Auto
 *           Scaling policy.
 *         * +AlarmActions+ - (<tt>Array<String></tt>) The list of actions
 *           to execute when this alarm transitions into an ALARM state
 *           from any other state. Each action is specified as an Amazon
 *           Resource Number (ARN). Currently the only actions supported
 *           are publishing to an Amazon SNS topic and triggering an Auto
 *           Scaling policy.
 *         * +InsufficientDataActions+ - (<tt>Array<String></tt>) The list
 *           of actions to execute when this alarm transitions into an
 *           INSUFFICIENT_DATA state from any other state. Each action is
 *           specified as an Amazon Resource Number (ARN). Currently the
 *           only actions supported are publishing to an Amazon SNS topic
 *           or triggering an Auto Scaling policy.
 *         * +StateValue+ - (<tt>String</tt>) The state value for the
 *           alarm.
 *         * +StateReason+ - (<tt>String</tt>) A human-readable explanation
 *           for the alarm's state.
 *         * +StateReasonData+ - (<tt>String</tt>) An explanation for the
 *           alarm's state in machine-readable JSON format
 *         * +StateUpdatedTimestamp+ - (<tt>Date</tt>) The time stamp of
 *           the last update to the alarm's state.
 *         * +MetricName+ - (<tt>String</tt>) The name of the alarm's
 *           metric.
 *         * +Namespace+ - (<tt>String</tt>) The namespace of alarm's
 *           associated metric.
 *         * +Statistic+ - (<tt>String</tt>) The statistic to apply to the
 *           alarm's associated metric.
 *         * +Dimensions+ - (<tt>Array<Object></tt>) The list of dimensions
 *           associated with the alarm's associated metric.
 *           * +Name+ - (<tt>String</tt>) The name of the
 *             dimension.
 *           * +Value+ - (<tt>String</tt>) The value
 *             representing the dimension measurement
 *         * +Period+ - (<tt>Integer</tt>) The period in seconds over which
 *           the statistic is applied.
 *         * +Unit+ - (<tt>String</tt>) The unit of the alarm's associated
 *           metric.
 *         * +EvaluationPeriods+ - (<tt>Integer</tt>) The number of periods
 *           over which data is compared to the specified threshold.
 *         * +Threshold+ - (<tt>Float</tt>) The value against which the
 *           specified statistic is compared.
 *         * +ComparisonOperator+ - (<tt>String</tt>) The arithmetic
 *           operation to use when comparing the specified Statistic and
 *           Threshold. The specified Statistic value is used as the first
 *           operand.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method disableAlarmActions(params, callback)
 *   Calls the DisableAlarmActions API operation.
 *   @param params [Object]
 *     * +AlarmNames+ - (*required*, <tt>Array<String></tt>) The names of
 *       the alarms to disable actions for.
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
 * @!method enableAlarmActions(params, callback)
 *   Calls the EnableAlarmActions API operation.
 *   @param params [Object]
 *     * +AlarmNames+ - (*required*, <tt>Array<String></tt>) The names of
 *       the alarms to enable actions for.
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
 * @!method getMetricStatistics(params, callback)
 *   Calls the GetMetricStatistics API operation.
 *   @param params [Object]
 *     * +Namespace+ - (*required*, <tt>String</tt>) The namespace of the
 *       metric.
 *     * +MetricName+ - (*required*, <tt>String</tt>) The name of the
 *       metric.
 *     * +Dimensions+ - (<tt>Array<Object></tt>) A list of dimensions
 *       describing qualities of the metric.
 *       * +Name+ - (*required*, <tt>String</tt>) The name of the
 *         dimension.
 *       * +Value+ - (*required*, <tt>String</tt>) The value representing
 *         the dimension measurement
 *     * +StartTime+ - (*required*, <tt>Date</tt>) The time stamp to use
 *       for determining the first datapoint to return. The value
 *       specified is inclusive; results include datapoints with the time
 *       stamp specified. The specified start time is rounded down to the
 *       nearest value. Datapoints are returned for start times up to two
 *       weeks in the past. Specified start times that are more than two
 *       weeks in the past will not return datapoints for metrics that
 *       are older than two weeks.
 *     * +EndTime+ - (*required*, <tt>Date</tt>) The time stamp to use
 *       for determining the last datapoint to return. The value
 *       specified is exclusive; results will include datapoints up to
 *       the time stamp specified.
 *     * +Period+ - (*required*, <tt>Integer</tt>) The granularity, in
 *       seconds, of the returned datapoints. Period must be at least 60
 *       seconds and must be a multiple of 60. The default value is 60.
 *     * +Statistics+ - (*required*, <tt>Array<String></tt>) The metric
 *       statistics to return.
 *     * +Unit+ - (<tt>String</tt>) The unit for the metric.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Label+ - (<tt>String</tt>) A label describing the specified
 *         metric.
 *       * +Datapoints+ - (<tt>Array<Object></tt>) The datapoints for the
 *         specified metric.
 *         * +Timestamp+ - (<tt>Date</tt>) The time stamp used for the
 *           datapoint.
 *         * +SampleCount+ - (<tt>Float</tt>) The number of metric values
 *           that contributed to the aggregate value of this datapoint.
 *         * +Average+ - (<tt>Float</tt>) The average of metric values that
 *           correspond to the datapoint.
 *         * +Sum+ - (<tt>Float</tt>) The sum of metric values used for the
 *           datapoint.
 *         * +Minimum+ - (<tt>Float</tt>) The minimum metric value used for
 *           the datapoint.
 *         * +Maximum+ - (<tt>Float</tt>) The maximum of the metric value
 *           used for the datapoint.
 *         * +Unit+ - (<tt>String</tt>) The standard unit used for the
 *           datapoint.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listMetrics(params, callback)
 *   Calls the ListMetrics API operation.
 *   @param params [Object]
 *     * +Namespace+ - (<tt>String</tt>) The namespace to filter against.
 *     * +MetricName+ - (<tt>String</tt>) The name of the metric to
 *       filter against.
 *     * +Dimensions+ - (<tt>Array<Object></tt>) A list of dimensions to
 *       filter against.
 *       * +Name+ - (*required*, <tt>String</tt>) The dimension name to
 *         be matched.
 *       * +Value+ - (<tt>String</tt>) The value of the dimension to be
 *         matched. Specifying a Name without specifying a Value returns
 *         all values associated with that Name.
 *     * +NextToken+ - (<tt>String</tt>) The token returned by a previous
 *       call to indicate that there is more data available.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Metrics+ - (<tt>Array<Object></tt>) A list of metrics used to
 *         generate statistics for an AWS account.
 *         * +Namespace+ - (<tt>String</tt>) The namespace of the metric.
 *         * +MetricName+ - (<tt>String</tt>) The name of the metric.
 *         * +Dimensions+ - (<tt>Array<Object></tt>) A list of dimensions
 *           associated with the metric.
 *           * +Name+ - (<tt>String</tt>) The name of the
 *             dimension.
 *           * +Value+ - (<tt>String</tt>) The value
 *             representing the dimension measurement
 *       * +NextToken+ - (<tt>String</tt>) A string that marks the start of
 *         the next batch of returned results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method putMetricAlarm(params, callback)
 *   Calls the PutMetricAlarm API operation.
 *   @param params [Object]
 *     * +AlarmName+ - (*required*, <tt>String</tt>) The descriptive name
 *       for the alarm. This name must be unique within the user's AWS
 *       account
 *     * +AlarmDescription+ - (<tt>String</tt>) The description for the
 *       alarm.
 *     * +ActionsEnabled+ - (<tt>Boolean</tt>) Indicates whether or not
 *       actions should be executed during any changes to the alarm's
 *       state.
 *     * +OKActions+ - (<tt>Array<String></tt>) The list of actions to
 *       execute when this alarm transitions into an OK state from any
 *       other state. Each action is specified as an Amazon Resource
 *       Number (ARN). Currently the only action supported is publishing
 *       to an Amazon SNS topic or an Amazon Auto Scaling policy.
 *     * +AlarmActions+ - (<tt>Array<String></tt>) The list of actions to
 *       execute when this alarm transitions into an ALARM state from any
 *       other state. Each action is specified as an Amazon Resource
 *       Number (ARN). Currently the only action supported is publishing
 *       to an Amazon SNS topic or an Amazon Auto Scaling policy.
 *     * +InsufficientDataActions+ - (<tt>Array<String></tt>) The list of
 *       actions to execute when this alarm transitions into an
 *       INSUFFICIENT_DATA state from any other state. Each action is
 *       specified as an Amazon Resource Number (ARN). Currently the only
 *       action supported is publishing to an Amazon SNS topic or an
 *       Amazon Auto Scaling policy.
 *     * +MetricName+ - (*required*, <tt>String</tt>) The name for the
 *       alarm's associated metric.
 *     * +Namespace+ - (*required*, <tt>String</tt>) The namespace for
 *       the alarm's associated metric.
 *     * +Statistic+ - (*required*, <tt>String</tt>) The statistic to
 *       apply to the alarm's associated metric.
 *     * +Dimensions+ - (<tt>Array<Object></tt>) The dimensions for the
 *       alarm's associated metric.
 *       * +Name+ - (*required*, <tt>String</tt>) The name of the
 *         dimension.
 *       * +Value+ - (*required*, <tt>String</tt>) The value representing
 *         the dimension measurement
 *     * +Period+ - (*required*, <tt>Integer</tt>) The period in seconds
 *       over which the specified statistic is applied.
 *     * +Unit+ - (<tt>String</tt>) The unit for the alarm's associated
 *       metric.
 *     * +EvaluationPeriods+ - (*required*, <tt>Integer</tt>) The number
 *       of periods over which data is compared to the specified
 *       threshold.
 *     * +Threshold+ - (*required*, <tt>Float</tt>) The value against
 *       which the specified statistic is compared.
 *     * +ComparisonOperator+ - (*required*, <tt>String</tt>) The
 *       arithmetic operation to use when comparing the specified
 *       Statistic and Threshold. The specified Statistic value is used
 *       as the first operand.
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
 * @!method putMetricData(params, callback)
 *   Calls the PutMetricData API operation.
 *   @param params [Object]
 *     * +Namespace+ - (*required*, <tt>String</tt>) The namespace for
 *       the metric data.
 *     * +MetricData+ - (*required*, <tt>Array<Object></tt>) A list of
 *       data describing the metric.
 *       * +MetricName+ - (*required*, <tt>String</tt>) The name of the
 *         metric.
 *       * +Dimensions+ - (<tt>Array<Object></tt>) A list of dimensions
 *         associated with the metric.
 *         * +Name+ - (*required*, <tt>String</tt>) The name of the
 *           dimension.
 *         * +Value+ - (*required*, <tt>String</tt>) The value
 *           representing the dimension measurement
 *       * +Timestamp+ - (<tt>Date</tt>) The time stamp used for the
 *         metric. If not specified, the default value is set to the time
 *         the metric data was received.
 *       * +Value+ - (<tt>Float</tt>) The value for the metric. Although
 *         the Value parameter accepts numbers of type Double, Amazon
 *         CloudWatch truncates values with very large exponents. Values
 *         with base-10 exponents greater than 126 (1 x 10^126) are
 *         truncated. Likewise, values with base-10 exponents less than
 *         -130 (1 x 10^-130) are also truncated.
 *       * +StatisticValues+ - (<tt>Object</tt>) A set of statistical
 *         values describing the metric.
 *         * +SampleCount+ - (*required*, <tt>Float</tt>) The number of
 *           samples used for the statistic set.
 *         * +Sum+ - (*required*, <tt>Float</tt>) The sum of values for
 *           the sample set.
 *         * +Minimum+ - (*required*, <tt>Float</tt>) The minimum value
 *           of the sample set.
 *         * +Maximum+ - (*required*, <tt>Float</tt>) The maximum value
 *           of the sample set.
 *       * +Unit+ - (<tt>String</tt>) The unit of the metric.
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
 * @!method setAlarmState(params, callback)
 *   Calls the SetAlarmState API operation.
 *   @param params [Object]
 *     * +AlarmName+ - (*required*, <tt>String</tt>) The descriptive name
 *       for the alarm. This name must be unique within the user's AWS
 *       account. The maximum length is 255 characters.
 *     * +StateValue+ - (*required*, <tt>String</tt>) The value of the
 *       state.
 *     * +StateReason+ - (*required*, <tt>String</tt>) The reason that
 *       this alarm is set to this specific state (in human-readable text
 *       format)
 *     * +StateReasonData+ - (<tt>String</tt>) The reason that this alarm
 *       is set to this specific state (in machine-readable JSON format)
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
AWS.CloudWatch.Client = inherit({});
