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
 * ### Sending a Request Using CloudWatch
 *
 * ```js
 * svc = new AWS.CloudWatch();
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
 *     * `AlarmNames` &mdash; **required** &mdash; (`Array<String>`) A
 *       list of alarms to be deleted.
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
 * @!method describeAlarmHistory(params, callback)
 *   Calls the DescribeAlarmHistory API operation.
 *   @param params [Object]
 *     * `AlarmName` &mdash; (`String`) The name of the alarm.
 *     * `HistoryItemType` &mdash; (`String`) The type of alarm histories
 *       to retrieve.
 *     * `StartDate` &mdash; (`Date`) The starting date to retrieve alarm
 *       history.
 *     * `EndDate` &mdash; (`Date`) The ending date to retrieve alarm
 *       history.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of alarm
 *       history records to retrieve.
 *     * `NextToken` &mdash; (`String`) The token returned by a previous
 *       call to indicate that there is more data available.
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
 *       * `AlarmHistoryItems` &mdash; (`Array<Object>`) A list of alarm
 *         histories in JSON format.
 *         * `AlarmName` &mdash; (`String`) The descriptive name for the
 *           alarm.
 *         * `Timestamp` &mdash; (`Date`) The time stamp for the alarm
 *           history item.
 *         * `HistoryItemType` &mdash; (`String`) The type of alarm history
 *           item.
 *         * `HistorySummary` &mdash; (`String`) A human-readable summary
 *           of the alarm history.
 *         * `HistoryData` &mdash; (`String`) Machine-readable data about
 *           the alarm in JSON format.
 *       * `NextToken` &mdash; (`String`) A string that marks the start of
 *         the next batch of returned results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeAlarms(params, callback)
 *   Calls the DescribeAlarms API operation.
 *   @param params [Object]
 *     * `AlarmNames` &mdash; (`Array<String>`) A list of alarm names to
 *       retrieve information for.
 *     * `AlarmNamePrefix` &mdash; (`String`) The alarm name prefix.
 *       AlarmNames cannot be specified if this parameter is specified.
 *     * `StateValue` &mdash; (`String`) The state value to be used in
 *       matching alarms.
 *     * `ActionPrefix` &mdash; (`String`) The action name prefix.
 *     * `MaxRecords` &mdash; (`Integer`) The maximum number of alarm
 *       descriptions to retrieve.
 *     * `NextToken` &mdash; (`String`) The token returned by a previous
 *       call to indicate that there is more data available.
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
 *       * `MetricAlarms` &mdash; (`Array<Object>`) A list of information
 *         for the specified alarms.
 *         * `AlarmName` &mdash; (`String`) The name of the alarm.
 *         * `AlarmArn` &mdash; (`String`) The Amazon Resource Name (ARN)
 *           of the alarm.
 *         * `AlarmDescription` &mdash; (`String`) The description for the
 *           alarm.
 *         * `AlarmConfigurationUpdatedTimestamp` &mdash; (`Date`) The time
 *           stamp of the last update to the alarm configuration.
 *         * `ActionsEnabled` &mdash; (`Boolean`) Indicates whether actions
 *           should be executed during any changes to the alarm's state.
 *         * `OKActions` &mdash; (`Array<String>`) The list of actions to
 *           execute when this alarm transitions into an OK state from any
 *           other state. Each action is specified as an Amazon Resource
 *           Number (ARN). Currently the only actions supported are
 *           publishing to an Amazon SNS topic and triggering an Auto
 *           Scaling policy.
 *         * `AlarmActions` &mdash; (`Array<String>`) The list of actions
 *           to execute when this alarm transitions into an ALARM state
 *           from any other state. Each action is specified as an Amazon
 *           Resource Number (ARN). Currently the only actions supported
 *           are publishing to an Amazon SNS topic and triggering an Auto
 *           Scaling policy.
 *         * `InsufficientDataActions` &mdash; (`Array<String>`) The list
 *           of actions to execute when this alarm transitions into an
 *           INSUFFICIENT_DATA state from any other state. Each action is
 *           specified as an Amazon Resource Number (ARN). Currently the
 *           only actions supported are publishing to an Amazon SNS topic
 *           or triggering an Auto Scaling policy.
 *         * `StateValue` &mdash; (`String`) The state value for the alarm.
 *         * `StateReason` &mdash; (`String`) A human-readable explanation
 *           for the alarm's state.
 *         * `StateReasonData` &mdash; (`String`) An explanation for the
 *           alarm's state in machine-readable JSON format
 *         * `StateUpdatedTimestamp` &mdash; (`Date`) The time stamp of the
 *           last update to the alarm's state.
 *         * `MetricName` &mdash; (`String`) The name of the alarm's
 *           metric.
 *         * `Namespace` &mdash; (`String`) The namespace of alarm's
 *           associated metric.
 *         * `Statistic` &mdash; (`String`) The statistic to apply to the
 *           alarm's associated metric.
 *         * `Dimensions` &mdash; (`Array<Object>`) The list of dimensions
 *           associated with the alarm's associated metric.
 *           * `Name` &mdash; (`String`) The name of the dimension.
 *           * `Value` &mdash; (`String`) The value representing the
 *             dimension measurement
 *         * `Period` &mdash; (`Integer`) The period in seconds over which
 *           the statistic is applied.
 *         * `Unit` &mdash; (`String`) The unit of the alarm's associated
 *           metric.
 *         * `EvaluationPeriods` &mdash; (`Integer`) The number of periods
 *           over which data is compared to the specified threshold.
 *         * `Threshold` &mdash; (`Float`) The value against which the
 *           specified statistic is compared.
 *         * `ComparisonOperator` &mdash; (`String`) The arithmetic
 *           operation to use when comparing the specified Statistic and
 *           Threshold. The specified Statistic value is used as the first
 *           operand.
 *       * `NextToken` &mdash; (`String`) A string that marks the start of
 *         the next batch of returned results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeAlarmsForMetric(params, callback)
 *   Calls the DescribeAlarmsForMetric API operation.
 *   @param params [Object]
 *     * `MetricName` &mdash; **required** &mdash; (`String`) The name of
 *       the metric.
 *     * `Namespace` &mdash; **required** &mdash; (`String`) The
 *       namespace of the metric.
 *     * `Statistic` &mdash; (`String`) The statistic for the metric.
 *     * `Dimensions` &mdash; (`Array<Object>`) The list of dimensions
 *       associated with the metric.
 *       * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *         dimension.
 *       * `Value` &mdash; **required** &mdash; (`String`) The value
 *         representing the dimension measurement
 *     * `Period` &mdash; (`Integer`) The period in seconds over which
 *       the statistic is applied.
 *     * `Unit` &mdash; (`String`) The unit for the metric.
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
 *       * `MetricAlarms` &mdash; (`Array<Object>`) A list of information
 *         for each alarm with the specified metric.
 *         * `AlarmName` &mdash; (`String`) The name of the alarm.
 *         * `AlarmArn` &mdash; (`String`) The Amazon Resource Name (ARN)
 *           of the alarm.
 *         * `AlarmDescription` &mdash; (`String`) The description for the
 *           alarm.
 *         * `AlarmConfigurationUpdatedTimestamp` &mdash; (`Date`) The time
 *           stamp of the last update to the alarm configuration.
 *         * `ActionsEnabled` &mdash; (`Boolean`) Indicates whether actions
 *           should be executed during any changes to the alarm's state.
 *         * `OKActions` &mdash; (`Array<String>`) The list of actions to
 *           execute when this alarm transitions into an OK state from any
 *           other state. Each action is specified as an Amazon Resource
 *           Number (ARN). Currently the only actions supported are
 *           publishing to an Amazon SNS topic and triggering an Auto
 *           Scaling policy.
 *         * `AlarmActions` &mdash; (`Array<String>`) The list of actions
 *           to execute when this alarm transitions into an ALARM state
 *           from any other state. Each action is specified as an Amazon
 *           Resource Number (ARN). Currently the only actions supported
 *           are publishing to an Amazon SNS topic and triggering an Auto
 *           Scaling policy.
 *         * `InsufficientDataActions` &mdash; (`Array<String>`) The list
 *           of actions to execute when this alarm transitions into an
 *           INSUFFICIENT_DATA state from any other state. Each action is
 *           specified as an Amazon Resource Number (ARN). Currently the
 *           only actions supported are publishing to an Amazon SNS topic
 *           or triggering an Auto Scaling policy.
 *         * `StateValue` &mdash; (`String`) The state value for the alarm.
 *         * `StateReason` &mdash; (`String`) A human-readable explanation
 *           for the alarm's state.
 *         * `StateReasonData` &mdash; (`String`) An explanation for the
 *           alarm's state in machine-readable JSON format
 *         * `StateUpdatedTimestamp` &mdash; (`Date`) The time stamp of the
 *           last update to the alarm's state.
 *         * `MetricName` &mdash; (`String`) The name of the alarm's
 *           metric.
 *         * `Namespace` &mdash; (`String`) The namespace of alarm's
 *           associated metric.
 *         * `Statistic` &mdash; (`String`) The statistic to apply to the
 *           alarm's associated metric.
 *         * `Dimensions` &mdash; (`Array<Object>`) The list of dimensions
 *           associated with the alarm's associated metric.
 *           * `Name` &mdash; (`String`) The name of the dimension.
 *           * `Value` &mdash; (`String`) The value representing the
 *             dimension measurement
 *         * `Period` &mdash; (`Integer`) The period in seconds over which
 *           the statistic is applied.
 *         * `Unit` &mdash; (`String`) The unit of the alarm's associated
 *           metric.
 *         * `EvaluationPeriods` &mdash; (`Integer`) The number of periods
 *           over which data is compared to the specified threshold.
 *         * `Threshold` &mdash; (`Float`) The value against which the
 *           specified statistic is compared.
 *         * `ComparisonOperator` &mdash; (`String`) The arithmetic
 *           operation to use when comparing the specified Statistic and
 *           Threshold. The specified Statistic value is used as the first
 *           operand.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method disableAlarmActions(params, callback)
 *   Calls the DisableAlarmActions API operation.
 *   @param params [Object]
 *     * `AlarmNames` &mdash; **required** &mdash; (`Array<String>`) The
 *       names of the alarms to disable actions for.
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
 * @!method enableAlarmActions(params, callback)
 *   Calls the EnableAlarmActions API operation.
 *   @param params [Object]
 *     * `AlarmNames` &mdash; **required** &mdash; (`Array<String>`) The
 *       names of the alarms to enable actions for.
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
 * @!method getMetricStatistics(params, callback)
 *   Calls the GetMetricStatistics API operation.
 *   @param params [Object]
 *     * `Namespace` &mdash; **required** &mdash; (`String`) The
 *       namespace of the metric.
 *     * `MetricName` &mdash; **required** &mdash; (`String`) The name of
 *       the metric.
 *     * `Dimensions` &mdash; (`Array<Object>`) A list of dimensions
 *       describing qualities of the metric.
 *       * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *         dimension.
 *       * `Value` &mdash; **required** &mdash; (`String`) The value
 *         representing the dimension measurement
 *     * `StartTime` &mdash; **required** &mdash; (`Date`) The time stamp
 *       to use for determining the first datapoint to return. The value
 *       specified is inclusive; results include datapoints with the time
 *       stamp specified. The specified start time is rounded down to the
 *       nearest value. Datapoints are returned for start times up to two
 *       weeks in the past. Specified start times that are more than two
 *       weeks in the past will not return datapoints for metrics that
 *       are older than two weeks.
 *     * `EndTime` &mdash; **required** &mdash; (`Date`) The time stamp
 *       to use for determining the last datapoint to return. The value
 *       specified is exclusive; results will include datapoints up to
 *       the time stamp specified.
 *     * `Period` &mdash; **required** &mdash; (`Integer`) The
 *       granularity, in seconds, of the returned datapoints. Period must
 *       be at least 60 seconds and must be a multiple of 60. The default
 *       value is 60.
 *     * `Statistics` &mdash; **required** &mdash; (`Array<String>`) The
 *       metric statistics to return.
 *     * `Unit` &mdash; (`String`) The unit for the metric.
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
 *       * `Label` &mdash; (`String`) A label describing the specified
 *         metric.
 *       * `Datapoints` &mdash; (`Array<Object>`) The datapoints for the
 *         specified metric.
 *         * `Timestamp` &mdash; (`Date`) The time stamp used for the
 *           datapoint.
 *         * `SampleCount` &mdash; (`Float`) The number of metric values
 *           that contributed to the aggregate value of this datapoint.
 *         * `Average` &mdash; (`Float`) The average of metric values that
 *           correspond to the datapoint.
 *         * `Sum` &mdash; (`Float`) The sum of metric values used for the
 *           datapoint.
 *         * `Minimum` &mdash; (`Float`) The minimum metric value used for
 *           the datapoint.
 *         * `Maximum` &mdash; (`Float`) The maximum of the metric value
 *           used for the datapoint.
 *         * `Unit` &mdash; (`String`) The standard unit used for the
 *           datapoint.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listMetrics(params, callback)
 *   Calls the ListMetrics API operation.
 *   @param params [Object]
 *     * `Namespace` &mdash; (`String`) The namespace to filter against.
 *     * `MetricName` &mdash; (`String`) The name of the metric to filter
 *       against.
 *     * `Dimensions` &mdash; (`Array<Object>`) A list of dimensions to
 *       filter against.
 *       * `Name` &mdash; **required** &mdash; (`String`) The dimension
 *         name to be matched.
 *       * `Value` &mdash; (`String`) The value of the dimension to be
 *         matched. Specifying a Name without specifying a Value returns
 *         all values associated with that Name.
 *     * `NextToken` &mdash; (`String`) The token returned by a previous
 *       call to indicate that there is more data available.
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
 *       * `Metrics` &mdash; (`Array<Object>`) A list of metrics used to
 *         generate statistics for an AWS account.
 *         * `Namespace` &mdash; (`String`) The namespace of the metric.
 *         * `MetricName` &mdash; (`String`) The name of the metric.
 *         * `Dimensions` &mdash; (`Array<Object>`) A list of dimensions
 *           associated with the metric.
 *           * `Name` &mdash; (`String`) The name of the dimension.
 *           * `Value` &mdash; (`String`) The value representing the
 *             dimension measurement
 *       * `NextToken` &mdash; (`String`) A string that marks the start of
 *         the next batch of returned results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method putMetricAlarm(params, callback)
 *   Calls the PutMetricAlarm API operation.
 *   @param params [Object]
 *     * `AlarmName` &mdash; **required** &mdash; (`String`) The
 *       descriptive name for the alarm. This name must be unique within
 *       the user's AWS account
 *     * `AlarmDescription` &mdash; (`String`) The description for the
 *       alarm.
 *     * `ActionsEnabled` &mdash; (`Boolean`) Indicates whether or not
 *       actions should be executed during any changes to the alarm's
 *       state.
 *     * `OKActions` &mdash; (`Array<String>`) The list of actions to
 *       execute when this alarm transitions into an OK state from any
 *       other state. Each action is specified as an Amazon Resource
 *       Number (ARN). Currently the only action supported is publishing
 *       to an Amazon SNS topic or an Amazon Auto Scaling policy.
 *     * `AlarmActions` &mdash; (`Array<String>`) The list of actions to
 *       execute when this alarm transitions into an ALARM state from any
 *       other state. Each action is specified as an Amazon Resource
 *       Number (ARN). Currently the only action supported is publishing
 *       to an Amazon SNS topic or an Amazon Auto Scaling policy.
 *     * `InsufficientDataActions` &mdash; (`Array<String>`) The list of
 *       actions to execute when this alarm transitions into an
 *       INSUFFICIENT_DATA state from any other state. Each action is
 *       specified as an Amazon Resource Number (ARN). Currently the only
 *       action supported is publishing to an Amazon SNS topic or an
 *       Amazon Auto Scaling policy.
 *     * `MetricName` &mdash; **required** &mdash; (`String`) The name
 *       for the alarm's associated metric.
 *     * `Namespace` &mdash; **required** &mdash; (`String`) The
 *       namespace for the alarm's associated metric.
 *     * `Statistic` &mdash; **required** &mdash; (`String`) The
 *       statistic to apply to the alarm's associated metric.
 *     * `Dimensions` &mdash; (`Array<Object>`) The dimensions for the
 *       alarm's associated metric.
 *       * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *         dimension.
 *       * `Value` &mdash; **required** &mdash; (`String`) The value
 *         representing the dimension measurement
 *     * `Period` &mdash; **required** &mdash; (`Integer`) The period in
 *       seconds over which the specified statistic is applied.
 *     * `Unit` &mdash; (`String`) The unit for the alarm's associated
 *       metric.
 *     * `EvaluationPeriods` &mdash; **required** &mdash; (`Integer`) The
 *       number of periods over which data is compared to the specified
 *       threshold.
 *     * `Threshold` &mdash; **required** &mdash; (`Float`) The value
 *       against which the specified statistic is compared.
 *     * `ComparisonOperator` &mdash; **required** &mdash; (`String`) The
 *       arithmetic operation to use when comparing the specified
 *       Statistic and Threshold. The specified Statistic value is used
 *       as the first operand.
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
 * @!method putMetricData(params, callback)
 *   Calls the PutMetricData API operation.
 *   @param params [Object]
 *     * `Namespace` &mdash; **required** &mdash; (`String`) The
 *       namespace for the metric data.
 *     * `MetricData` &mdash; **required** &mdash; (`Array<Object>`) A
 *       list of data describing the metric.
 *       * `MetricName` &mdash; **required** &mdash; (`String`) The name
 *         of the metric.
 *       * `Dimensions` &mdash; (`Array<Object>`) A list of dimensions
 *         associated with the metric.
 *         * `Name` &mdash; **required** &mdash; (`String`) The name of
 *           the dimension.
 *         * `Value` &mdash; **required** &mdash; (`String`) The value
 *           representing the dimension measurement
 *       * `Timestamp` &mdash; (`Date`) The time stamp used for the
 *         metric. If not specified, the default value is set to the time
 *         the metric data was received.
 *       * `Value` &mdash; (`Float`) The value for the metric. Although
 *         the Value parameter accepts numbers of type Double, Amazon
 *         CloudWatch truncates values with very large exponents. Values
 *         with base-10 exponents greater than 126 (1 x 10^126) are
 *         truncated. Likewise, values with base-10 exponents less than
 *         \-130 (1 x 10^-130) are also truncated.
 *       * `StatisticValues` &mdash; (`Object`) A set of statistical
 *         values describing the metric.
 *         * `SampleCount` &mdash; **required** &mdash; (`Float`) The
 *           number of samples used for the statistic set.
 *         * `Sum` &mdash; **required** &mdash; (`Float`) The sum of
 *           values for the sample set.
 *         * `Minimum` &mdash; **required** &mdash; (`Float`) The minimum
 *           value of the sample set.
 *         * `Maximum` &mdash; **required** &mdash; (`Float`) The maximum
 *           value of the sample set.
 *       * `Unit` &mdash; (`String`) The unit of the metric.
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
 * @!method setAlarmState(params, callback)
 *   Calls the SetAlarmState API operation.
 *   @param params [Object]
 *     * `AlarmName` &mdash; **required** &mdash; (`String`) The
 *       descriptive name for the alarm. This name must be unique within
 *       the user's AWS account. The maximum length is 255 characters.
 *     * `StateValue` &mdash; **required** &mdash; (`String`) The value
 *       of the state.
 *     * `StateReason` &mdash; **required** &mdash; (`String`) The reason
 *       that this alarm is set to this specific state (in human-readable
 *       text format)
 *     * `StateReasonData` &mdash; (`String`) The reason that this alarm
 *       is set to this specific state (in machine-readable JSON format)
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
AWS.CloudWatch.Client = inherit({});
