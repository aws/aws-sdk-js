///<reference types="node" />
import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config';
declare class CloudWatch extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: CloudWatch.Types.ClientConfiguration)
  config: Config & CloudWatch.Types.ClientConfiguration;
  /**
   * Deletes all specified alarms. In the event of an error, no alarms are deleted.
   */
  deleteAlarms(params: CloudWatch.Types.DeleteAlarmsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes all specified alarms. In the event of an error, no alarms are deleted.
   */
  deleteAlarms(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves history for the specified alarm. Filter alarms by date range or item type. If an alarm name is not specified, Amazon CloudWatch returns histories for all of the owner's alarms.  Amazon CloudWatch retains the history of an alarm for two weeks, whether or not you delete the alarm. 
   */
  describeAlarmHistory(params: CloudWatch.Types.DescribeAlarmHistoryInput, callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmHistoryOutput) => void): Request<CloudWatch.Types.DescribeAlarmHistoryOutput, AWSError>;
  /**
   * Retrieves history for the specified alarm. Filter alarms by date range or item type. If an alarm name is not specified, Amazon CloudWatch returns histories for all of the owner's alarms.  Amazon CloudWatch retains the history of an alarm for two weeks, whether or not you delete the alarm. 
   */
  describeAlarmHistory(callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmHistoryOutput) => void): Request<CloudWatch.Types.DescribeAlarmHistoryOutput, AWSError>;
  /**
   * Retrieves alarms with the specified names. If no name is specified, all alarms for the user are returned. Alarms can be retrieved by using only a prefix for the alarm name, the alarm state, or a prefix for any action.
   */
  describeAlarms(params: CloudWatch.Types.DescribeAlarmsInput, callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsOutput) => void): Request<CloudWatch.Types.DescribeAlarmsOutput, AWSError>;
  /**
   * Retrieves alarms with the specified names. If no name is specified, all alarms for the user are returned. Alarms can be retrieved by using only a prefix for the alarm name, the alarm state, or a prefix for any action.
   */
  describeAlarms(callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsOutput) => void): Request<CloudWatch.Types.DescribeAlarmsOutput, AWSError>;
  /**
   * Retrieves all alarms for a single metric. Specify a statistic, period, or unit to filter the set of alarms further.
   */
  describeAlarmsForMetric(params: CloudWatch.Types.DescribeAlarmsForMetricInput, callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsForMetricOutput) => void): Request<CloudWatch.Types.DescribeAlarmsForMetricOutput, AWSError>;
  /**
   * Retrieves all alarms for a single metric. Specify a statistic, period, or unit to filter the set of alarms further.
   */
  describeAlarmsForMetric(callback?: (err: AWSError, data: CloudWatch.Types.DescribeAlarmsForMetricOutput) => void): Request<CloudWatch.Types.DescribeAlarmsForMetricOutput, AWSError>;
  /**
   * Disables actions for the specified alarms. When an alarm's actions are disabled the alarm's state may change, but none of the alarm's actions will execute.
   */
  disableAlarmActions(params: CloudWatch.Types.DisableAlarmActionsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Disables actions for the specified alarms. When an alarm's actions are disabled the alarm's state may change, but none of the alarm's actions will execute.
   */
  disableAlarmActions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables actions for the specified alarms.
   */
  enableAlarmActions(params: CloudWatch.Types.EnableAlarmActionsInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Enables actions for the specified alarms.
   */
  enableAlarmActions(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Gets statistics for the specified metric.  The maximum number of data points that can be queried is 50,850, whereas the maximum number of data points returned from a single GetMetricStatistics request is 1,440. If you make a request that generates more than 1,440 data points, Amazon CloudWatch returns an error. In such a case, you can alter the request by narrowing the specified time range or increasing the specified period. A period can be as short as one minute (60 seconds) or as long as one day (86,400 seconds). Alternatively, you can make multiple requests across adjacent time ranges. GetMetricStatistics does not return the data in chronological order.   Amazon CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-minute granularity, Amazon CloudWatch aggregates data points with time stamps that fall within the same one-minute period. In such a case, the data points queried can greatly outnumber the data points returned.   The following examples show various statistics allowed by the data point query maximum of 50,850 when you call GetMetricStatistics on Amazon EC2 instances with detailed (one-minute) monitoring enabled:    Statistics for up to 400 instances for a span of one hour   Statistics for up to 35 instances over a span of 24 hours   Statistics for up to 2 instances over a span of 2 weeks    For information about the namespace, metric names, and dimensions that other Amazon Web Services products use to send metrics to CloudWatch, go to Amazon CloudWatch Metrics, Namespaces, and Dimensions Reference in the Amazon CloudWatch Developer Guide. 
   */
  getMetricStatistics(params: CloudWatch.Types.GetMetricStatisticsInput, callback?: (err: AWSError, data: CloudWatch.Types.GetMetricStatisticsOutput) => void): Request<CloudWatch.Types.GetMetricStatisticsOutput, AWSError>;
  /**
   * Gets statistics for the specified metric.  The maximum number of data points that can be queried is 50,850, whereas the maximum number of data points returned from a single GetMetricStatistics request is 1,440. If you make a request that generates more than 1,440 data points, Amazon CloudWatch returns an error. In such a case, you can alter the request by narrowing the specified time range or increasing the specified period. A period can be as short as one minute (60 seconds) or as long as one day (86,400 seconds). Alternatively, you can make multiple requests across adjacent time ranges. GetMetricStatistics does not return the data in chronological order.   Amazon CloudWatch aggregates data points based on the length of the period that you specify. For example, if you request statistics with a one-minute granularity, Amazon CloudWatch aggregates data points with time stamps that fall within the same one-minute period. In such a case, the data points queried can greatly outnumber the data points returned.   The following examples show various statistics allowed by the data point query maximum of 50,850 when you call GetMetricStatistics on Amazon EC2 instances with detailed (one-minute) monitoring enabled:    Statistics for up to 400 instances for a span of one hour   Statistics for up to 35 instances over a span of 24 hours   Statistics for up to 2 instances over a span of 2 weeks    For information about the namespace, metric names, and dimensions that other Amazon Web Services products use to send metrics to CloudWatch, go to Amazon CloudWatch Metrics, Namespaces, and Dimensions Reference in the Amazon CloudWatch Developer Guide. 
   */
  getMetricStatistics(callback?: (err: AWSError, data: CloudWatch.Types.GetMetricStatisticsOutput) => void): Request<CloudWatch.Types.GetMetricStatisticsOutput, AWSError>;
  /**
   *  Returns a list of valid metrics stored for the AWS account owner. Returned metrics can be used with GetMetricStatistics to obtain statistical data for a given metric.    Up to 500 results are returned for any one call. To retrieve further results, use returned NextToken values with subsequent ListMetrics operations.    If you create a metric with PutMetricData, allow up to fifteen minutes for the metric to appear in calls to ListMetrics. Statistics about the metric, however, are available sooner using GetMetricStatistics. 
   */
  listMetrics(params: CloudWatch.Types.ListMetricsInput, callback?: (err: AWSError, data: CloudWatch.Types.ListMetricsOutput) => void): Request<CloudWatch.Types.ListMetricsOutput, AWSError>;
  /**
   *  Returns a list of valid metrics stored for the AWS account owner. Returned metrics can be used with GetMetricStatistics to obtain statistical data for a given metric.    Up to 500 results are returned for any one call. To retrieve further results, use returned NextToken values with subsequent ListMetrics operations.    If you create a metric with PutMetricData, allow up to fifteen minutes for the metric to appear in calls to ListMetrics. Statistics about the metric, however, are available sooner using GetMetricStatistics. 
   */
  listMetrics(callback?: (err: AWSError, data: CloudWatch.Types.ListMetricsOutput) => void): Request<CloudWatch.Types.ListMetricsOutput, AWSError>;
  /**
   * Creates or updates an alarm and associates it with the specified Amazon CloudWatch metric. Optionally, this operation can associate one or more Amazon SNS resources with the alarm.  When this operation creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. The alarm is evaluated and its StateValue is set appropriately. Any actions associated with the StateValue are then executed.   When updating an existing alarm, its StateValue is left unchanged, but it completely overwrites the alarm's previous configuration.   If you are using an AWS Identity and Access Management (IAM) account to create or modify an alarm, you must have the following Amazon EC2 permissions:    ec2:DescribeInstanceStatus and ec2:DescribeInstances for all alarms on Amazon EC2 instance status metrics.    ec2:StopInstances for alarms with stop actions.    ec2:TerminateInstances for alarms with terminate actions.    ec2:DescribeInstanceRecoveryAttribute, and ec2:RecoverInstances for alarms with recover actions.   If you have read/write permissions for Amazon CloudWatch but not for Amazon EC2, you can still create an alarm but the stop or terminate actions won't be performed on the Amazon EC2 instance. However, if you are later granted permission to use the associated Amazon EC2 APIs, the alarm actions you created earlier will be performed. For more information about IAM permissions, see Permissions and Policies in Using IAM. If you are using an IAM role (e.g., an Amazon EC2 instance profile), you cannot stop or terminate the instance using alarm actions. However, you can still see the alarm state and perform any other actions such as Amazon SNS notifications or Auto Scaling policies. If you are using temporary security credentials granted using the AWS Security Token Service (AWS STS), you cannot stop or terminate an Amazon EC2 instance using alarm actions. 
   */
  putMetricAlarm(params: CloudWatch.Types.PutMetricAlarmInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates or updates an alarm and associates it with the specified Amazon CloudWatch metric. Optionally, this operation can associate one or more Amazon SNS resources with the alarm.  When this operation creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. The alarm is evaluated and its StateValue is set appropriately. Any actions associated with the StateValue are then executed.   When updating an existing alarm, its StateValue is left unchanged, but it completely overwrites the alarm's previous configuration.   If you are using an AWS Identity and Access Management (IAM) account to create or modify an alarm, you must have the following Amazon EC2 permissions:    ec2:DescribeInstanceStatus and ec2:DescribeInstances for all alarms on Amazon EC2 instance status metrics.    ec2:StopInstances for alarms with stop actions.    ec2:TerminateInstances for alarms with terminate actions.    ec2:DescribeInstanceRecoveryAttribute, and ec2:RecoverInstances for alarms with recover actions.   If you have read/write permissions for Amazon CloudWatch but not for Amazon EC2, you can still create an alarm but the stop or terminate actions won't be performed on the Amazon EC2 instance. However, if you are later granted permission to use the associated Amazon EC2 APIs, the alarm actions you created earlier will be performed. For more information about IAM permissions, see Permissions and Policies in Using IAM. If you are using an IAM role (e.g., an Amazon EC2 instance profile), you cannot stop or terminate the instance using alarm actions. However, you can still see the alarm state and perform any other actions such as Amazon SNS notifications or Auto Scaling policies. If you are using temporary security credentials granted using the AWS Security Token Service (AWS STS), you cannot stop or terminate an Amazon EC2 instance using alarm actions. 
   */
  putMetricAlarm(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Publishes metric data points to Amazon CloudWatch. Amazon CloudWatch associates the data points with the specified metric. If the specified metric does not exist, Amazon CloudWatch creates the metric. When Amazon CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to ListMetrics.   Each PutMetricData request is limited to 8 KB in size for HTTP GET requests and is limited to 40 KB in size for HTTP POST requests.   Although the Value parameter accepts numbers of type Double, Amazon CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (e.g., NaN, +Infinity, -Infinity) are not supported.  Data that is timestamped 24 hours or more in the past may take in excess of 48 hours to become available from submission time using GetMetricStatistics.
   */
  putMetricData(params: CloudWatch.Types.PutMetricDataInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Publishes metric data points to Amazon CloudWatch. Amazon CloudWatch associates the data points with the specified metric. If the specified metric does not exist, Amazon CloudWatch creates the metric. When Amazon CloudWatch creates a metric, it can take up to fifteen minutes for the metric to appear in calls to ListMetrics.   Each PutMetricData request is limited to 8 KB in size for HTTP GET requests and is limited to 40 KB in size for HTTP POST requests.   Although the Value parameter accepts numbers of type Double, Amazon CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (e.g., NaN, +Infinity, -Infinity) are not supported.  Data that is timestamped 24 hours or more in the past may take in excess of 48 hours to become available from submission time using GetMetricStatistics.
   */
  putMetricData(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Temporarily sets the state of an alarm for testing purposes. When the updated StateValue differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm's state to ALARM sends an Amazon SNS message. The alarm returns to its actual state (often within seconds). Because the alarm state change happens very quickly, it is typically only visible in the alarm's History tab in the Amazon CloudWatch console or through DescribeAlarmHistory. 
   */
  setAlarmState(params: CloudWatch.Types.SetAlarmStateInput, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   *  Temporarily sets the state of an alarm for testing purposes. When the updated StateValue differs from the previous value, the action configured for the appropriate state is invoked. For example, if your alarm is configured to send an Amazon SNS message when an alarm is triggered, temporarily changing the alarm's state to ALARM sends an Amazon SNS message. The alarm returns to its actual state (often within seconds). Because the alarm state change happens very quickly, it is typically only visible in the alarm's History tab in the Amazon CloudWatch console or through DescribeAlarmHistory. 
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
declare namespace CloudWatch.Types {
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
     * A human-readable summary of the alarm history.
     */
    HistorySummary?: HistorySummary;
    /**
     * Machine-readable data about the alarm in JSON format.
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
     * The time stamp used for the datapoint.
     */
    Timestamp?: Timestamp;
    /**
     * The number of metric values that contributed to the aggregate value of this datapoint.
     */
    SampleCount?: DatapointValue;
    /**
     * The average of metric values that correspond to the datapoint.
     */
    Average?: DatapointValue;
    /**
     * The sum of metric values used for the datapoint.
     */
    Sum?: DatapointValue;
    /**
     * The minimum metric value used for the datapoint.
     */
    Minimum?: DatapointValue;
    /**
     * The maximum of the metric value used for the datapoint.
     */
    Maximum?: DatapointValue;
    /**
     * The standard unit used for the datapoint.
     */
    Unit?: StandardUnit;
  }
  export type DatapointValue = number;
  export type Datapoints = Datapoint[];
  export interface DeleteAlarmsInput {
    /**
     * A list of alarms to be deleted.
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
     * A list of alarm histories in JSON format.
     */
    AlarmHistoryItems?: AlarmHistoryItems;
    /**
     * A string that marks the start of the next batch of returned results.
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
     * The statistic for the metric.
     */
    Statistic?: Statistic;
    /**
     * The list of dimensions associated with the metric. If the metric has any associated dimensions, you must specify them in order for the DescribeAlarmsForMetric to succeed.
     */
    Dimensions?: Dimensions;
    /**
     * The period in seconds over which the statistic is applied.
     */
    Period?: Period;
    /**
     * The unit for the metric.
     */
    Unit?: StandardUnit;
  }
  export interface DescribeAlarmsForMetricOutput {
    /**
     * A list of information for each alarm with the specified metric.
     */
    MetricAlarms?: MetricAlarms;
  }
  export interface DescribeAlarmsInput {
    /**
     * A list of alarm names to retrieve information for.
     */
    AlarmNames?: AlarmNames;
    /**
     * The alarm name prefix. AlarmNames cannot be specified if this parameter is specified.
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
     * A list of information for the specified alarms.
     */
    MetricAlarms?: MetricAlarms;
    /**
     * A string that marks the start of the next batch of returned results.
     */
    NextToken?: NextToken;
  }
  export interface Dimension {
    /**
     * The name of the dimension.
     */
    Name: DimensionName;
    /**
     * The value representing the dimension measurement
     */
    Value: DimensionValue;
  }
  export interface DimensionFilter {
    /**
     * The dimension name to be matched.
     */
    Name: DimensionName;
    /**
     * The value of the dimension to be matched.  Specifying a Name without specifying a Value returns all values associated with that Name. 
     */
    Value?: DimensionValue;
  }
  export type DimensionFilters = DimensionFilter[];
  export type DimensionName = string;
  export type DimensionValue = string;
  export type Dimensions = Dimension[];
  export interface DisableAlarmActionsInput {
    /**
     * The names of the alarms to disable actions for.
     */
    AlarmNames: AlarmNames;
  }
  export interface EnableAlarmActionsInput {
    /**
     * The names of the alarms to enable actions for.
     */
    AlarmNames: AlarmNames;
  }
  export type ErrorMessage = string;
  export type EvaluationPeriods = number;
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
     * A list of dimensions describing qualities of the metric.
     */
    Dimensions?: Dimensions;
    /**
     * The time stamp to use for determining the first datapoint to return. The value specified is inclusive; results include datapoints with the time stamp specified. The time stamp must be in ISO 8601 UTC format (e.g., 2014-09-03T23:00:00Z).  The specified start time is rounded down to the nearest value. Datapoints are returned for start times up to two weeks in the past. Specified start times that are more than two weeks in the past will not return datapoints for metrics that are older than two weeks. Data that is timestamped 24 hours or more in the past may take in excess of 48 hours to become available from submission time using GetMetricStatistics. 
     */
    StartTime: Timestamp;
    /**
     * The time stamp to use for determining the last datapoint to return. The value specified is exclusive; results will include datapoints up to the time stamp specified. The time stamp must be in ISO 8601 UTC format (e.g., 2014-09-03T23:00:00Z).
     */
    EndTime: Timestamp;
    /**
     *  The granularity, in seconds, of the returned datapoints. A Period can be as short as one minute (60 seconds) or as long as one day (86,400 seconds), and must be a multiple of 60. The default value is 60. 
     */
    Period: Period;
    /**
     *  The metric statistics to return. For information about specific statistics returned by GetMetricStatistics, see Statistics in the Amazon CloudWatch Developer Guide. 
     */
    Statistics: Statistics;
    /**
     * The specific unit for a given metric. Metrics may be reported in multiple units. Not supplying a unit results in all units being returned. If the metric only ever reports one unit, specifying a unit will have no effect.
     */
    Unit?: StandardUnit;
  }
  export interface GetMetricStatisticsOutput {
    /**
     * A label describing the specified metric.
     */
    Label?: MetricLabel;
    /**
     * The datapoints for the specified metric.
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
     * A list of dimensions to filter against.
     */
    Dimensions?: DimensionFilters;
    /**
     * The token returned by a previous call to indicate that there is more data available.
     */
    NextToken?: NextToken;
  }
  export interface ListMetricsOutput {
    /**
     * A list of metrics used to generate statistics for an AWS account.
     */
    Metrics?: Metrics;
    /**
     * A string that marks the start of the next batch of returned results.
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
     * A list of dimensions associated with the metric.
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
     * The description for the alarm.
     */
    AlarmDescription?: AlarmDescription;
    /**
     * The time stamp of the last update to the alarm configuration.
     */
    AlarmConfigurationUpdatedTimestamp?: Timestamp;
    /**
     * Indicates whether actions should be executed during any changes to the alarm's state.
     */
    ActionsEnabled?: ActionsEnabled;
    /**
     *  The list of actions to execute when this alarm transitions into an OK state from any other state. Each action is specified as an Amazon Resource Name (ARN). 
     */
    OKActions?: ResourceList;
    /**
     *  The list of actions to execute when this alarm transitions into an ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN). 
     */
    AlarmActions?: ResourceList;
    /**
     *  The list of actions to execute when this alarm transitions into an INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).   The current WSDL lists this attribute as UnknownActions. 
     */
    InsufficientDataActions?: ResourceList;
    /**
     * The state value for the alarm.
     */
    StateValue?: StateValue;
    /**
     * A human-readable explanation for the alarm's state.
     */
    StateReason?: StateReason;
    /**
     * An explanation for the alarm's state in machine-readable JSON format
     */
    StateReasonData?: StateReasonData;
    /**
     * The time stamp of the last update to the alarm's state.
     */
    StateUpdatedTimestamp?: Timestamp;
    /**
     * The name of the alarm's metric.
     */
    MetricName?: MetricName;
    /**
     * The namespace of alarm's associated metric.
     */
    Namespace?: Namespace;
    /**
     * The statistic to apply to the alarm's associated metric.
     */
    Statistic?: Statistic;
    /**
     * The list of dimensions associated with the alarm's associated metric.
     */
    Dimensions?: Dimensions;
    /**
     * The period in seconds over which the statistic is applied.
     */
    Period?: Period;
    /**
     * The unit of the alarm's associated metric.
     */
    Unit?: StandardUnit;
    /**
     * The number of periods over which data is compared to the specified threshold.
     */
    EvaluationPeriods?: EvaluationPeriods;
    /**
     * The value against which the specified statistic is compared.
     */
    Threshold?: Threshold;
    /**
     *  The arithmetic operation to use when comparing the specified Statistic and Threshold. The specified Statistic value is used as the first operand. 
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
     * A list of dimensions associated with the metric. Note, when using the Dimensions value in a query, you need to append .member.N to it (e.g., Dimensions.member.N).
     */
    Dimensions?: Dimensions;
    /**
     * The time stamp used for the metric in ISO 8601 Universal Coordinated Time (UTC) format. If not specified, the default value is set to the time the metric data was received.
     */
    Timestamp?: Timestamp;
    /**
     * The value for the metric.  Although the Value parameter accepts numbers of type Double, Amazon CloudWatch rejects values that are either too small or too large. Values must be in the range of 8.515920e-109 to 1.174271e+108 (Base 10) or 2e-360 to 2e360 (Base 2). In addition, special values (e.g., NaN, +Infinity, -Infinity) are not supported. 
     */
    Value?: DatapointValue;
    /**
     * A set of statistical values describing the metric.
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
     * The descriptive name for the alarm. This name must be unique within the user's AWS account
     */
    AlarmName: AlarmName;
    /**
     * The description for the alarm.
     */
    AlarmDescription?: AlarmDescription;
    /**
     * Indicates whether or not actions should be executed during any changes to the alarm's state.
     */
    ActionsEnabled?: ActionsEnabled;
    /**
     *  The list of actions to execute when this alarm transitions into an OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).  Valid Values: arn:aws:automate:region (e.g., us-east-1):ec2:stop | arn:aws:automate:region (e.g., us-east-1):ec2:terminate | arn:aws:automate:region (e.g., us-east-1):ec2:recover Valid Values (for use with IAM roles): arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Stop/1.0 | arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Terminate/1.0 | arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Reboot/1.0  Note: You must create at least one stop, terminate, or reboot alarm using the Amazon EC2 or CloudWatch console to create the EC2ActionsAccess IAM role for the first time. After this IAM role is created, you can create stop, terminate, or reboot alarms using the CLI.
     */
    OKActions?: ResourceList;
    /**
     *  The list of actions to execute when this alarm transitions into an ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN).  Valid Values: arn:aws:automate:region (e.g., us-east-1):ec2:stop | arn:aws:automate:region (e.g., us-east-1):ec2:terminate | arn:aws:automate:region (e.g., us-east-1):ec2:recover Valid Values (for use with IAM roles): arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Stop/1.0 | arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Terminate/1.0 | arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Reboot/1.0  Note: You must create at least one stop, terminate, or reboot alarm using the Amazon EC2 or CloudWatch console to create the EC2ActionsAccess IAM role for the first time. After this IAM role is created, you can create stop, terminate, or reboot alarms using the CLI.
     */
    AlarmActions?: ResourceList;
    /**
     *  The list of actions to execute when this alarm transitions into an INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).  Valid Values: arn:aws:automate:region (e.g., us-east-1):ec2:stop | arn:aws:automate:region (e.g., us-east-1):ec2:terminate | arn:aws:automate:region (e.g., us-east-1):ec2:recover Valid Values (for use with IAM roles): arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Stop/1.0 | arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Terminate/1.0 | arn:aws:swf:us-east-1:{customer-account}:action/actions/AWS_EC2.InstanceId.Reboot/1.0  Note: You must create at least one stop, terminate, or reboot alarm using the Amazon EC2 or CloudWatch console to create the EC2ActionsAccess IAM role for the first time. After this IAM role is created, you can create stop, terminate, or reboot alarms using the CLI.
     */
    InsufficientDataActions?: ResourceList;
    /**
     * The name for the alarm's associated metric.
     */
    MetricName: MetricName;
    /**
     * The namespace for the alarm's associated metric.
     */
    Namespace: Namespace;
    /**
     * The statistic to apply to the alarm's associated metric.
     */
    Statistic: Statistic;
    /**
     * The dimensions for the alarm's associated metric.
     */
    Dimensions?: Dimensions;
    /**
     * The period in seconds over which the specified statistic is applied.
     */
    Period: Period;
    /**
     * The statistic's unit of measure. For example, the units for the Amazon EC2 NetworkIn metric are Bytes because NetworkIn tracks the number of bytes that an instance receives on all network interfaces. You can also specify a unit when you create a custom metric. Units help provide conceptual meaning to your data. Metric data points that specify a unit of measure, such as Percent, are aggregated separately.  Note: If you specify a unit, you must use a unit that is appropriate for the metric. Otherwise, this can cause an Amazon CloudWatch alarm to get stuck in the INSUFFICIENT DATA state. 
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
     *  The arithmetic operation to use when comparing the specified Statistic and Threshold. The specified Statistic value is used as the first operand. 
     */
    ComparisonOperator: ComparisonOperator;
  }
  export interface PutMetricDataInput {
    /**
     * The namespace for the metric data.  You cannot specify a namespace that begins with "AWS/". Namespaces that begin with "AWS/" are reserved for other Amazon Web Services products that send metrics to Amazon CloudWatch. 
     */
    Namespace: Namespace;
    /**
     * A list of data describing the metric.
     */
    MetricData: MetricData;
  }
  export type ResourceList = ResourceName[];
  export type ResourceName = string;
  export interface SetAlarmStateInput {
    /**
     * The descriptive name for the alarm. This name must be unique within the user's AWS account. The maximum length is 255 characters.
     */
    AlarmName: AlarmName;
    /**
     * The value of the state.
     */
    StateValue: StateValue;
    /**
     * The reason that this alarm is set to this specific state (in human-readable text format)
     */
    StateReason: StateReason;
    /**
     * The reason that this alarm is set to this specific state (in machine-readable JSON format)
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
}
export = CloudWatch;
