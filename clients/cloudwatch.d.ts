import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
interface Blob {}
declare class CloudWatch extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudWatch.Types.ClientConfiguration)
  config: Config & CloudWatch.Types.ClientConfiguration;
  /**
   * Deletes the specified alarms. In the event of an error, no alarms are deleted.
   */
  deleteAlarms(params: CloudWatch.Types.DeleteAlarmsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified alarms. In the event of an error, no alarms are deleted.
   */
  deleteAlarms(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for all alarms are returned. Note that Amazon CloudWatch retains the history of an alarm even if you delete the alarm.
   */
  describeAlarmHistory(params: CloudWatch.Types.DescribeAlarmHistoryInput, callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmHistoryOutput) => void): Request<CloudWatch.Types.DescribeAlarmHistoryOutput, AWSError>;
  /**
   * Retrieves the history for the specified alarm. You can filter the results by date range or item type. If an alarm name is not specified, the histories for all alarms are returned. Note that Amazon CloudWatch retains the history of an alarm even if you delete the alarm.
   */
  describeAlarmHistory(callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmHistoryOutput) => void): Request<CloudWatch.Types.DescribeAlarmHistoryOutput, AWSError>;
  /**
   * Retrieves the specified alarms. If no alarms are specified, all alarms are returned. Alarms can be retrieved by using only a prefix for the alarm name, the alarm state, or a prefix for any action.
   */
  describeAlarms(params: CloudWatch.Types.DescribeAlarmsInput, callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsOutput) => void): Request<CloudWatch.Types.DescribeAlarmsOutput, AWSError>;
  /**
   * Retrieves the specified alarms. If no alarms are specified, all alarms are returned. Alarms can be retrieved by using only a prefix for the alarm name, the alarm state, or a prefix for any action.
   */
  describeAlarms(callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsOutput) => void): Request<CloudWatch.Types.DescribeAlarmsOutput, AWSError>;
  /**
   * Retrieves the alarms for the specified metric. Specify a statistic, period, or unit to filter the results.
   */
  describeAlarmsForMetric(params: CloudWatch.Types.DescribeAlarmsForMetricInput, callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsForMetricOutput) => void): Request<CloudWatch.Types.DescribeAlarmsForMetricOutput, AWSError>;
  /**
   * Retrieves the alarms for the specified metric. Specify a statistic, period, or unit to filter the results.
   */
  describeAlarmsForMetric(callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsForMetricOutput) => void): Request<CloudWatch.Types.DescribeAlarmsForMetricOutput, AWSError>;
  /**
   * Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.
   */
  disableAlarmActions(params: CloudWatch.Types.DisableAlarmActionsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables the actions for the specified alarms. When an alarm's actions are disabled, the alarm actions do not execute when the alarm state changes.
   */
  disableAlarmActions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the actions for the specified alarms.
   */
  enableAlarmActions(params: CloudWatch.Types.EnableAlarmActionsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables the actions for the specified alarms.
   */
  enableAlarmActions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets statistics for the specified metric. Amazon CloudWatch retains metric data as follows:   Data points with a period of 60 seconds (1 minute) are available for 15 days   Data points with a period of 300 seconds (5 minute) are available for 63 days   Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months)   Note that CloudWatch started retaining 5-minute and 1-hour metric data as of 9 July 2016. The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, Amazon CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. A period can be as short as one minute (60 seconds). Note that data points are not returned in chronological order. Amazon CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, Amazon CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned. For a list of metrics and dimensions supported by AWS services, see the Amazon CloudWatch Metrics and Dimensions Reference in the Amazon CloudWatch User Guide.
   */
  getMetricStatistics(params: CloudWatch.Types.GetMetricStatisticsInput, callback?: (err: AWSError, data: CloudWatch.Types.GetMetricStatisticsOutput) => void): Request<CloudWatch.Types.GetMetricStatisticsOutput, AWSError>;
  /**
   * Gets statistics for the specified metric. Amazon CloudWatch retains metric data as follows:   Data points with a period of 60 seconds (1 minute) are available for 15 days   Data points with a period of 300 seconds (5 minute) are available for 63 days   Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months)   Note that CloudWatch started retaining 5-minute and 1-hour metric data as of 9 July 2016. The maximum number of data points returned from a single call is 1,440. If you request more than 1,440 data points, Amazon CloudWatch returns an error. To reduce the number of data points, you can narrow the specified time range and make multiple requests across adjacent time ranges, or you can increase the specified period. A period can be as short as one minute (60 seconds). Note that data points are not returned in chronological order. Amazon CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-hour period, Amazon CloudWatch aggregates all data points with time stamps that fall within each one-hour period. Therefore, the number of values aggregated by CloudWatch is larger than the number of data points returned. For a list of metrics and dimensions supported by AWS services, see the Amazon CloudWatch Metrics and Dimensions Reference in the Amazon CloudWatch User Guide.
   */
  getMetricStatistics(callback?: (err: AWSError, data: CloudWatch.Types.GetMetricStatisticsOutput) => void): Request<CloudWatch.Types.GetMetricStatisticsOutput, AWSError>;
  /**
   * List the specified metrics. You can use the returned metrics with GetMetricStatistics to obtain statistical data. Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls. After you create a metric, allow up to fifteen minutes before the metric appears. Statistics about the metric, however, are available sooner using GetMetricStatistics.
   */
  listMetrics(params: CloudWatch.Types.ListMetricsInput, callback?: (err: AWSError, data: CloudWatch.Types.ListMetricsOutput) => void): Request<CloudWatch.Types.ListMetricsOutput, AWSError>;
  /**
   * List the specified metrics. You can use the returned metrics with GetMetricStatistics to obtain statistical data. Up to 500 results are returned for any one call. To retrieve additional results, use the returned token with subsequent calls. After you create a metric, allow up to fifteen minutes before the metric appears. Statistics about the metric, however, are available sooner using GetMetricStatistics.
   */
  listMetrics(callback?: (err: AWSError, data: CloudWatch.Types.ListMetricsOutput) => void): Request<CloudWatch.Types.ListMetricsOutput, AWSError>;
  /**
   * Creates or updates an alarm and associates it with the specified metric. Optionally, this operation can associate one or more Amazon SNS resources with the alarm. When this operation creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. The alarm is evaluated and its state is set appropriately. Any actions associated with the state are then executed. When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. If you are an AWS Identity and Access Management (IAM) user, you must have Amazon EC2 permissions for some operations:    ec2:DescribeInstanceStatus and ec2:DescribeInstances for all alarms on EC2 instance status metrics    ec2:StopInstances for alarms with stop actions    ec2:TerminateInstances for alarms with terminate actions    ec2:DescribeInstanceRecoveryAttribute and ec2:RecoverInstances for alarms with recover actions   If you have read/write permissions for Amazon CloudWatch but not for Amazon EC2, you can still create an alarm, but the stop or terminate actions won't be performed. However, if you are later granted the required permissions, the alarm actions that you created earlier will be performed. If you are using an IAM role (for example, an Amazon EC2 instance profile), you cannot stop or terminate the instance using alarm actions. However, you can still see the alarm state and perform any other actions such as Amazon SNS notifications or Auto Scaling policies. If you are using temporary security credentials granted using the AWS Security Token Service (AWS STS), you cannot stop or terminate an Amazon EC2 instance using alarm actions. Note that you must create at least one stop, terminate, or reboot alarm using the Amazon EC2 or CloudWatch console to create the EC2ActionsAccess IAM role. After this IAM role is created, you can create stop, terminate, or reboot alarms using a command-line interface or an API.
   */
  putMetricAlarm(params: CloudWatch.Types.PutMetricAlarmInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates an alarm and associates it with the specified metric. Optionally, this operation can associate one or more Amazon SNS resources with the alarm. When this operation creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. The alarm is evaluated and its state is set appropriately. Any actions associated with the state are then executed. When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm. If you are an AWS Identity and Access Management (IAM) user, you must have Amazon EC2 permissions for some operations:    ec2:DescribeInstanceStatus and ec2:DescribeInstances for all alarms on EC2 instance status metrics    ec2:StopInstances for alarms with stop actions    ec2:TerminateInstances for alarms with terminate actions    ec2:DescribeInstanceRecoveryAttribute and ec2:RecoverInstances for alarms with recover actions   If you have read/write permissions for Amazon CloudWatch but not for Amazon EC2, you can still create an alarm, but the stop or terminate actions won't be performed. However, if you are later granted the required permissions, the alarm actions that you created earlier will be performed. If you are using an IAM role (for example, an Amazon EC2 instance profile), you cannot stop or terminate the instance using alarm actions. However, you can still see the alarm state and perform any other actions such as Amazon SNS notifications or Auto Scaling policies. If you are using temporary security credentials granted using the AWS Security Token Service (AWS STS), you cannot stop or terminate an Amazon EC2 instance using alarm actions. Note that you must create at least one stop, terminate, or reboot alarm using the Amazon EC2 or CloudWatch console to create the EC2ActionsAccess IAM role. After this IAM role is created, you can create stop, terminate, or reboot alarms using a command-line interface or an API.
   */
  putMetricAlarm(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Publishes metric data points to Amazon CloudWatch. Amazon CloudWatch associates the data points with the specified metric. If the specified metric does not exist, Amazon CloudWatch creates the metric. When Amazon CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to ListMetrics. Each PutMetricData request is limited to 8 KB in size for HTTP GET requests and is limited to 40 KB in size for HTTP POST requests. Although the Value parameter accepts numbers of type Double, Amazon CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (e.g., NaN, +Infinity, -Infinity) are not supported. Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for GetMetricStatistics from the time they are submitted.
   */
  putMetricData(params: CloudWatch.Types.PutMetricDataInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Publishes metric data points to Amazon CloudWatch. Amazon CloudWatch associates the data points with the specified metric. If the specified metric does not exist, Amazon CloudWatch creates the metric. When Amazon CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to ListMetrics. Each PutMetricData request is limited to 8 KB in size for HTTP GET requests and is limited to 40 KB in size for HTTP POST requests. Although the Value parameter accepts numbers of type Double, Amazon CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (e.g., NaN, +Infinity, -Infinity) are not supported. Data points with time stamps from 24 hours ago or longer can take at least 48 hours to become available for GetMetricStatistics from the time they are submitted.
   */
  putMetricData(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to ALARM sends an Amazon SNS message. The alarm returns to its actual state (often within seconds). Because the alarm state change happens very quickly, it is typically only visible in the alarm's History tab in the Amazon CloudWatch console or through DescribeAlarmHistory.
   */
  setAlarmState(params: CloudWatch.Types.SetAlarmStateInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Temporarily sets the state of an alarm for testing purposes. When the updated state differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm state to ALARM sends an Amazon SNS message. The alarm returns to its actual state (often within seconds). Because the alarm state change happens very quickly, it is typically only visible in the alarm's History tab in the Amazon CloudWatch console or through DescribeAlarmHistory.
   */
  setAlarmState(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Waits for the alarmExists state by periodically calling the underlying CloudWatch.describeAlarmsoperation every 5 seconds (at most 40 times).
   */
  waitFor(state: "alarmExists", params: CloudWatch.Types.DescribeAlarmsInput, callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsOutput) => void): Request<CloudWatch.Types.DescribeAlarmsOutput, AWSError>;
  /**
   * Waits for the alarmExists state by periodically calling the underlying CloudWatch.describeAlarmsoperation every 5 seconds (at most 40 times).
   */
  waitFor(state: "alarmExists", callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsOutput) => void): Request<CloudWatch.Types.DescribeAlarmsOutput, AWSError>;
}
declare namespace CloudWatch {
  export type ActionPrefix = string;
  export type ActionsEnabled = boolean;
  export type AlarmArn = string;
  export type AlarmDescription = string;
  export interface AlarmHistoryItem {
    /**
     * The descriptive name for the alarm.
     */
    AlarmName?: AlarmName;
    /**
     * The time stamp for the alarm history item.
     */
    Timestamp?: Timestamp;
    /**
     * The type of alarm history item.
     */
    HistoryItemType?: HistoryItemType;
    /**
     * A summary of the alarm history, in text format.
     */
    HistorySummary?: HistorySummary;
    /**
     * Data about the alarm, in JSON format.
     */
    HistoryData?: HistoryData;
  }
  export type AlarmHistoryItems = AlarmHistoryItem[];
  export type AlarmName = string;
  export type AlarmNamePrefix = string;
  export type AlarmNames = AlarmName[];
  export type AwsQueryErrorMessage = string;
  export type ComparisonOperator = "GreaterThanOrEqualToThreshold"|"GreaterThanThreshold"|"LessThanThreshold"|"LessThanOrEqualToThreshold"|string;
  export interface Datapoint {
    /**
     * The time stamp used for the data point.
     */
    Timestamp?: Timestamp;
    /**
     * The number of metric values that contributed to the aggregate value of this data point.
     */
    SampleCount?: DatapointValue;
    /**
     * The average of the metric values that correspond to the data point.
     */
    Average?: DatapointValue;
    /**
     * The sum of the metric values for the data point.
     */
    Sum?: DatapointValue;
    /**
     * The minimum metric value for the data point.
     */
    Minimum?: DatapointValue;
    /**
     * The maximum metric value for the data point.
     */
    Maximum?: DatapointValue;
    /**
     * The standard unit for the data point.
     */
    Unit?: StandardUnit;
    /**
     * The percentile statistic for the data point.
     */
    ExtendedStatistics?: DatapointValueMap;
  }
  export type DatapointValue = number;
  export type DatapointValueMap = {[key: string]: DatapointValue};
  export type Datapoints = Datapoint[];
  export interface DeleteAlarmsInput {
    /**
     * The alarms to be deleted.
     */
    AlarmNames: AlarmNames;
  }
  export interface DescribeAlarmHistoryInput {
    /**
     * The name of the alarm.
     */
    AlarmName?: AlarmName;
    /**
     * The type of alarm histories to retrieve.
     */
    HistoryItemType?: HistoryItemType;
    /**
     * The starting date to retrieve alarm history.
     */
    StartDate?: Timestamp;
    /**
     * The ending date to retrieve alarm history.
     */
    EndDate?: Timestamp;
    /**
     * The maximum number of alarm history records to retrieve.
     */
    MaxRecords?: MaxRecords;
    /**
     * The token returned by a previous call to indicate that there is more data available.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAlarmHistoryOutput {
    /**
     * The alarm histories, in JSON format.
     */
    AlarmHistoryItems?: AlarmHistoryItems;
    /**
     * The token that marks the start of the next batch of returned results.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAlarmsForMetricInput {
    /**
     * The name of the metric.
     */
    MetricName: MetricName;
    /**
     * The namespace of the metric.
     */
    Namespace: Namespace;
    /**
     * The statistic for the metric, other than percentiles. For percentile statistics, use ExtendedStatistics.
     */
    Statistic?: Statistic;
    /**
     * The percentile statistic for the metric. Specify a value between p0.0 and p100.
     */
    ExtendedStatistic?: ExtendedStatistic;
    /**
     * The dimensions associated with the metric. If the metric has any associated dimensions, you must specify them in order for the call to succeed.
     */
    Dimensions?: Dimensions;
    /**
     * The period, in seconds, over which the statistic is applied.
     */
    Period?: Period;
    /**
     * The unit for the metric.
     */
    Unit?: StandardUnit;
  }
  export interface DescribeAlarmsForMetricOutput {
    /**
     * The information for each alarm with the specified metric.
     */
    MetricAlarms?: MetricAlarms;
  }
  export interface DescribeAlarmsInput {
    /**
     * The names of the alarms.
     */
    AlarmNames?: AlarmNames;
    /**
     * The alarm name prefix. You cannot specify AlarmNames if this parameter is specified.
     */
    AlarmNamePrefix?: AlarmNamePrefix;
    /**
     * The state value to be used in matching alarms.
     */
    StateValue?: StateValue;
    /**
     * The action name prefix.
     */
    ActionPrefix?: ActionPrefix;
    /**
     * The maximum number of alarm descriptions to retrieve.
     */
    MaxRecords?: MaxRecords;
    /**
     * The token returned by a previous call to indicate that there is more data available.
     */
    NextToken?: NextToken;
  }
  export interface DescribeAlarmsOutput {
    /**
     * The information for the specified alarms.
     */
    MetricAlarms?: MetricAlarms;
    /**
     * The token that marks the start of the next batch of returned results.
     */
    NextToken?: NextToken;
  }
  export interface Dimension {
    /**
     * The name of the dimension.
     */
    Name: DimensionName;
    /**
     * The value representing the dimension measurement.
     */
    Value: DimensionValue;
  }
  export interface DimensionFilter {
    /**
     * The dimension name to be matched.
     */
    Name: DimensionName;
    /**
     * The value of the dimension to be matched.
     */
    Value?: DimensionValue;
  }
  export type DimensionFilters = DimensionFilter[];
  export type DimensionName = string;
  export type DimensionValue = string;
  export type Dimensions = Dimension[];
  export interface DisableAlarmActionsInput {
    /**
     * The names of the alarms.
     */
    AlarmNames: AlarmNames;
  }
  export interface EnableAlarmActionsInput {
    /**
     * The names of the alarms.
     */
    AlarmNames: AlarmNames;
  }
  export type ErrorMessage = string;
  export type EvaluationPeriods = number;
  export type ExtendedStatistic = string;
  export type ExtendedStatistics = ExtendedStatistic[];
  export type FaultDescription = string;
  export interface GetMetricStatisticsInput {
    /**
     * The namespace of the metric, with or without spaces.
     */
    Namespace: Namespace;
    /**
     * The name of the metric, with or without spaces.
     */
    MetricName: MetricName;
    /**
     * The dimensions. CloudWatch treats each unique combination of dimensions as a separate metric. You can't retrieve statistics using combinations of dimensions that were not specially published. You must specify the same dimensions that were used when the metrics were created. For an example, see Dimension Combinations in the Amazon CloudWatch User Guide.
     */
    Dimensions?: Dimensions;
    /**
     * The time stamp that determines the first data point to return. Note that start times are evaluated relative to the time that CloudWatch receives the request. The value specified is inclusive; results include data points with the specified time stamp. The time stamp must be in ISO 8601 UTC format (for example, 2016-10-03T23:00:00Z). CloudWatch rounds the specified time stamp as follows:   Start time less than 15 days ago - Round down to the nearest whole minute. For example, 12:32:34 is rounded down to 12:32:00.   Start time between 15 and 63 days ago - Round down to the nearest 5-minute clock interval. For example, 12:32:34 is rounded down to 12:30:00.   Start time greater than 63 days ago - Round down to the nearest 1-hour clock interval. For example, 12:32:34 is rounded down to 12:00:00.  
     */
    StartTime: Timestamp;
    /**
     * The time stamp that determines the last data point to return. The value specified is exclusive; results will include data points up to the specified time stamp. The time stamp must be in ISO 8601 UTC format (for example, 2016-10-10T23:00:00Z).
     */
    EndTime: Timestamp;
    /**
     * The granularity, in seconds, of the returned data points. A period can be as short as one minute (60 seconds) and must be a multiple of 60. The default value is 60. If the StartTime parameter specifies a time stamp that is greater than 15 days ago, you must specify the period as follows or no data points in that time range is returned:   Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).   Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).  
     */
    Period: Period;
    /**
     * The metric statistics, other than percentile. For percentile statistics, use ExtendedStatistic.
     */
    Statistics?: Statistics;
    /**
     * The percentile statistics. Specify values between p0.0 and p100.
     */
    ExtendedStatistics?: ExtendedStatistics;
    /**
     * The unit for a given metric. Metrics may be reported in multiple units. Not supplying a unit results in all units being returned. If the metric only ever reports one unit, specifying a unit has no effect.
     */
    Unit?: StandardUnit;
  }
  export interface GetMetricStatisticsOutput {
    /**
     * A label for the specified metric.
     */
    Label?: MetricLabel;
    /**
     * The data points for the specified metric.
     */
    Datapoints?: Datapoints;
  }
  export type HistoryData = string;
  export type HistoryItemType = "ConfigurationUpdate"|"StateUpdate"|"Action"|string;
  export type HistorySummary = string;
  export interface ListMetricsInput {
    /**
     * The namespace to filter against.
     */
    Namespace?: Namespace;
    /**
     * The name of the metric to filter against.
     */
    MetricName?: MetricName;
    /**
     * The dimensions to filter against.
     */
    Dimensions?: DimensionFilters;
    /**
     * The token returned by a previous call to indicate that there is more data available.
     */
    NextToken?: NextToken;
  }
  export interface ListMetricsOutput {
    /**
     * The metrics.
     */
    Metrics?: Metrics;
    /**
     * The token that marks the start of the next batch of returned results.
     */
    NextToken?: NextToken;
  }
  export type MaxRecords = number;
  export interface Metric {
    /**
     * The namespace of the metric.
     */
    Namespace?: Namespace;
    /**
     * The name of the metric.
     */
    MetricName?: MetricName;
    /**
     * The dimensions for the metric.
     */
    Dimensions?: Dimensions;
  }
  export interface MetricAlarm {
    /**
     * The name of the alarm.
     */
    AlarmName?: AlarmName;
    /**
     * The Amazon Resource Name (ARN) of the alarm.
     */
    AlarmArn?: AlarmArn;
    /**
     * The description of the alarm.
     */
    AlarmDescription?: AlarmDescription;
    /**
     * The time stamp of the last update to the alarm configuration.
     */
    AlarmConfigurationUpdatedTimestamp?: Timestamp;
    /**
     * Indicates whether actions should be executed during any changes to the alarm state.
     */
    ActionsEnabled?: ActionsEnabled;
    /**
     * The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).
     */
    OKActions?: ResourceList;
    /**
     * The actions to execute when this alarm transitions to the ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN).
     */
    AlarmActions?: ResourceList;
    /**
     * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).
     */
    InsufficientDataActions?: ResourceList;
    /**
     * The state value for the alarm.
     */
    StateValue?: StateValue;
    /**
     * An explanation for the alarm state, in text format.
     */
    StateReason?: StateReason;
    /**
     * An explanation for the alarm state, in JSON format.
     */
    StateReasonData?: StateReasonData;
    /**
     * The time stamp of the last update to the alarm state.
     */
    StateUpdatedTimestamp?: Timestamp;
    /**
     * The name of the metric associated with the alarm.
     */
    MetricName?: MetricName;
    /**
     * The namespace of the metric associated with the alarm.
     */
    Namespace?: Namespace;
    /**
     * The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use ExtendedStatistic.
     */
    Statistic?: Statistic;
    /**
     * The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
     */
    ExtendedStatistic?: ExtendedStatistic;
    /**
     * The dimensions for the metric associated with the alarm.
     */
    Dimensions?: Dimensions;
    /**
     * The period, in seconds, over which the statistic is applied.
     */
    Period?: Period;
    /**
     * The unit of the metric associated with the alarm.
     */
    Unit?: StandardUnit;
    /**
     * The number of periods over which data is compared to the specified threshold.
     */
    EvaluationPeriods?: EvaluationPeriods;
    /**
     * The value to compare with the specified statistic.
     */
    Threshold?: Threshold;
    /**
     * The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.
     */
    ComparisonOperator?: ComparisonOperator;
  }
  export type MetricAlarms = MetricAlarm[];
  export type MetricData = MetricDatum[];
  export interface MetricDatum {
    /**
     * The name of the metric.
     */
    MetricName: MetricName;
    /**
     * The dimensions associated with the metric.
     */
    Dimensions?: Dimensions;
    /**
     * The time the metric data was received, expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.
     */
    Timestamp?: Timestamp;
    /**
     * The value for the metric. Although the parameter accepts numbers of type Double, Amazon CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (for example, NaN, +Infinity, -Infinity) are not supported.
     */
    Value?: DatapointValue;
    /**
     * The statistical values for the metric.
     */
    StatisticValues?: StatisticSet;
    /**
     * The unit of the metric.
     */
    Unit?: StandardUnit;
  }
  export type MetricLabel = string;
  export type MetricName = string;
  export type Metrics = Metric[];
  export type Namespace = string;
  export type NextToken = string;
  export type Period = number;
  export interface PutMetricAlarmInput {
    /**
     * The name for the alarm. This name must be unique within the AWS account.
     */
    AlarmName: AlarmName;
    /**
     * The description for the alarm.
     */
    AlarmDescription?: AlarmDescription;
    /**
     * Indicates whether actions should be executed during any changes to the alarm state.
     */
    ActionsEnabled?: ActionsEnabled;
    /**
     * The actions to execute when this alarm transitions to an OK state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid Values: arn:aws:automate:region:ec2:stop | arn:aws:automate:region:ec2:terminate | arn:aws:automate:region:ec2:recover Valid Values (for use with IAM roles): arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Stop/1.0 | arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Terminate/1.0 | arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Reboot/1.0
     */
    OKActions?: ResourceList;
    /**
     * The actions to execute when this alarm transitions to the ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid Values: arn:aws:automate:region:ec2:stop | arn:aws:automate:region:ec2:terminate | arn:aws:automate:region:ec2:recover Valid Values (for use with IAM roles): arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Stop/1.0 | arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Terminate/1.0 | arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Reboot/1.0
     */
    AlarmActions?: ResourceList;
    /**
     * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid Values: arn:aws:automate:region:ec2:stop | arn:aws:automate:region:ec2:terminate | arn:aws:automate:region:ec2:recover Valid Values (for use with IAM roles): arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Stop/1.0 | arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Terminate/1.0 | arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Reboot/1.0
     */
    InsufficientDataActions?: ResourceList;
    /**
     * The name for the metric associated with the alarm.
     */
    MetricName: MetricName;
    /**
     * The namespace for the metric associated with the alarm.
     */
    Namespace: Namespace;
    /**
     * The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use ExtendedStatistic.
     */
    Statistic?: Statistic;
    /**
     * The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
     */
    ExtendedStatistic?: ExtendedStatistic;
    /**
     * The dimensions for the metric associated with the alarm.
     */
    Dimensions?: Dimensions;
    /**
     * The period, in seconds, over which the specified statistic is applied.
     */
    Period: Period;
    /**
     * The unit of measure for the statistic. For example, the units for the Amazon EC2 NetworkIn metric are Bytes because NetworkIn tracks the number of bytes that an instance receives on all network interfaces. You can also specify a unit when you create a custom metric. Units help provide conceptual meaning to your data. Metric data points that specify a unit of measure, such as Percent, are aggregated separately. If you specify a unit, you must use a unit that is appropriate for the metric. Otherwise, the Amazon CloudWatch alarm can get stuck in the INSUFFICIENT DATA state. 
     */
    Unit?: StandardUnit;
    /**
     * The number of periods over which data is compared to the specified threshold.
     */
    EvaluationPeriods: EvaluationPeriods;
    /**
     * The value against which the specified statistic is compared.
     */
    Threshold: Threshold;
    /**
     *  The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.
     */
    ComparisonOperator: ComparisonOperator;
  }
  export interface PutMetricDataInput {
    /**
     * The namespace for the metric data. You cannot specify a namespace that begins with "AWS/". Namespaces that begin with "AWS/" are reserved for use by Amazon Web Services products.
     */
    Namespace: Namespace;
    /**
     * The data for the metric.
     */
    MetricData: MetricData;
  }
  export type ResourceList = ResourceName[];
  export type ResourceName = string;
  export interface SetAlarmStateInput {
    /**
     * The name for the alarm. This name must be unique within the AWS account. The maximum length is 255 characters.
     */
    AlarmName: AlarmName;
    /**
     * The value of the state.
     */
    StateValue: StateValue;
    /**
     * The reason that this alarm is set to this specific state, in text format.
     */
    StateReason: StateReason;
    /**
     * The reason that this alarm is set to this specific state, in JSON format.
     */
    StateReasonData?: StateReasonData;
  }
  export type StandardUnit = "Seconds"|"Microseconds"|"Milliseconds"|"Bytes"|"Kilobytes"|"Megabytes"|"Gigabytes"|"Terabytes"|"Bits"|"Kilobits"|"Megabits"|"Gigabits"|"Terabits"|"Percent"|"Count"|"Bytes/Second"|"Kilobytes/Second"|"Megabytes/Second"|"Gigabytes/Second"|"Terabytes/Second"|"Bits/Second"|"Kilobits/Second"|"Megabits/Second"|"Gigabits/Second"|"Terabits/Second"|"Count/Second"|"None"|string;
  export type StateReason = string;
  export type StateReasonData = string;
  export type StateValue = "OK"|"ALARM"|"INSUFFICIENT_DATA"|string;
  export type Statistic = "SampleCount"|"Average"|"Sum"|"Minimum"|"Maximum"|string;
  export interface StatisticSet {
    /**
     * The number of samples used for the statistic set.
     */
    SampleCount: DatapointValue;
    /**
     * The sum of values for the sample set.
     */
    Sum: DatapointValue;
    /**
     * The minimum value of the sample set.
     */
    Minimum: DatapointValue;
    /**
     * The maximum value of the sample set.
     */
    Maximum: DatapointValue;
  }
  export type Statistics = Statistic[];
  export type Threshold = number;
  export type Timestamp = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2010-08-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the CloudWatch client.
   */
  export import Types = CloudWatch;
}
export = CloudWatch;
