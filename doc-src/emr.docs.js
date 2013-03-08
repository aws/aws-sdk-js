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
 * ### Sending a Request Using EMR
 *
 * ```js
 * svc = new AWS.EMR();
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
 *   @option (see AWS.EMR.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.EMR.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.EMR.Client
 *
 */
AWS.EMR = inherit({})

/**
 * The low-level EMR client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method addInstanceGroups(params, callback)
 *   Calls the AddInstanceGroups API operation.
 *   @param params [Object]
 *     * `InstanceGroups` &mdash; **required** &mdash; (`Array<Object>`)
 *       Instance Groups to add.
 *       * `Name` &mdash; (`String`) Friendly name given to the instance
 *         group.
 *       * `Market` &mdash; (`String`) Market type of the Amazon EC2
 *         instances used to create a cluster node.
 *       * `InstanceRole` &mdash; **required** &mdash; (`String`) The
 *         role of the instance group in the cluster.
 *       * `BidPrice` &mdash; (`String`) Bid price for each Amazon EC2
 *         instance in the instance group when launching nodes as Spot
 *         Instances, expressed in USD.
 *       * `InstanceType` &mdash; **required** &mdash; (`String`) The
 *         Amazon EC2 instance type for all instances in the instance
 *         group.
 *       * `InstanceCount` &mdash; **required** &mdash; (`Integer`)
 *         Target number of instances for the instance group.
 *     * `JobFlowId` &mdash; **required** &mdash; (`String`) Job flow in
 *       which to add the instance groups.
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
 *       * `JobFlowId` &mdash; (`String`) The job flow ID in which the
 *         instance groups are added.
 *       * `InstanceGroupIds` &mdash; (`Array<String>`) Instance group IDs
 *         of the newly created instance groups.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method addJobFlowSteps(params, callback)
 *   Calls the AddJobFlowSteps API operation.
 *   @param params [Object]
 *     * `JobFlowId` &mdash; **required** &mdash; (`String`) A string
 *       that uniquely identifies the job flow. This identifier is
 *       returned by RunJobFlow and can also be obtained from
 *       DescribeJobFlows.
 *     * `Steps` &mdash; **required** &mdash; (`Array<Object>`) A list of
 *       StepConfig to be executed by the job flow.
 *       * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *         job flow step.
 *       * `ActionOnFailure` &mdash; (`String`) Specifies the action to
 *         take if the job flow step fails.
 *       * `HadoopJarStep` &mdash; **required** &mdash; (`Object`)
 *         Specifies the JAR file used for the job flow step.
 *         * `Properties` &mdash; (`Array<Object>`) A list of Java
 *           properties that are set when the step runs. You can use
 *           these properties to pass key value pairs to your main
 *           function.
 *           * `Key` &mdash; (`String`) The unique identifier of a key
 *             value pair.
 *           * `Value` &mdash; (`String`) The value part of the
 *             identified key.
 *         * `Jar` &mdash; **required** &mdash; (`String`) A path to a
 *           JAR file run during the step.
 *         * `MainClass` &mdash; (`String`) The name of the main class in
 *           the specified Java file. If not specified, the JAR file
 *           should specify a Main-Class in its manifest file.
 *         * `Args` &mdash; (`Array<String>`) A list of command line
 *           arguments passed to the JAR file's main function when
 *           executed.
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
 * @!method describeJobFlows(params, callback)
 *   Calls the DescribeJobFlows API operation.
 *   @param params [Object]
 *     * `CreatedAfter` &mdash; (`Date`) Return only job flows created
 *       after this date and time.
 *     * `CreatedBefore` &mdash; (`Date`) Return only job flows created
 *       before this date and time.
 *     * `JobFlowIds` &mdash; (`Array<String>`) Return only job flows
 *       whose job flow ID is contained in this list.
 *     * `JobFlowStates` &mdash; (`Array<String>`) Return only job flows
 *       whose state is contained in this list.
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
 *       * `JobFlows` &mdash; (`Array<Object>`) A list of job flows
 *         matching the parameters supplied.
 *         * `JobFlowId` &mdash; (`String`) The job flow identifier.
 *         * `Name` &mdash; (`String`) The name of the job flow.
 *         * `LogUri` &mdash; (`String`) The location in Amazon S3 where
 *           log files for the job are stored.
 *         * `AmiVersion` &mdash; (`String`) The version of the AMI used to
 *           initialize Amazon EC2 instances in the job flow. For a list of
 *           AMI versions currently supported by Amazon ElasticMapReduce,
 *           go to AMI Versions Supported in Elastic MapReduce in the
 *           Amazon Elastic MapReduce Developer's Guide.
 *         * `ExecutionStatusDetail` &mdash; (`Object`) Describes the
 *           execution status of the job flow.
 *           * `State` &mdash; (`String`) The state of the job flow.
 *           * `CreationDateTime` &mdash; (`Date`) The creation date and
 *             time of the job flow.
 *           * `StartDateTime` &mdash; (`Date`) The start date and time of
 *             the job flow.
 *           * `ReadyDateTime` &mdash; (`Date`) The date and time when the
 *             job flow was ready to start running bootstrap actions.
 *           * `EndDateTime` &mdash; (`Date`) The completion date and time
 *             of the job flow.
 *           * `LastStateChangeReason` &mdash; (`String`) Description of
 *             the job flow last changed state.
 *         * `Instances` &mdash; (`Object`) Describes the Amazon EC2
 *           instances of the job flow.
 *           * `MasterInstanceType` &mdash; (`String`) The Amazon EC2
 *             master node instance type.
 *           * `MasterPublicDnsName` &mdash; (`String`) The DNS name of the
 *             master node.
 *           * `MasterInstanceId` &mdash; (`String`) The Amazon EC2
 *             instance identifier of the master node.
 *           * `SlaveInstanceType` &mdash; (`String`) The Amazon EC2 slave
 *             node instance type.
 *           * `InstanceCount` &mdash; (`Integer`) The number of Amazon EC2
 *             instances in the cluster. If the value is 1, the same
 *             instance serves as both the master and slave node. If the
 *             value is greater than 1, one instance is the master node and
 *             all others are slave nodes.
 *           * `InstanceGroups` &mdash; (`Array<Object>`) Details about the
 *             job flow's instance groups.
 *             * `InstanceGroupId` &mdash; (`String`) Unique identifier for
 *               the instance group.
 *             * `Name` &mdash; (`String`) Friendly name for the instance
 *               group.
 *             * `Market` &mdash; (`String`) Market type of the Amazon EC2
 *               instances used to create a cluster node.
 *             * `InstanceRole` &mdash; (`String`) Instance group role in
 *               the cluster
 *             * `BidPrice` &mdash; (`String`) Bid price for EC2 Instances
 *               when launching nodes as Spot Instances, expressed in USD.
 *             * `InstanceType` &mdash; (`String`) Amazon EC2 Instance
 *               type.
 *             * `InstanceRequestCount` &mdash; (`Integer`) Target number
 *               of instances to run in the instance group.
 *             * `InstanceRunningCount` &mdash; (`Integer`) Actual count of
 *               running instances.
 *             * `State` &mdash; (`String`) State of instance group. The
 *               following values are deprecated: STARTING, TERMINATED, and
 *               FAILED.
 *             * `LastStateChangeReason` &mdash; (`String`) Details
 *               regarding the state of the instance group.
 *             * `CreationDateTime` &mdash; (`Date`) The date/time the
 *               instance group was created.
 *             * `StartDateTime` &mdash; (`Date`) The date/time the
 *               instance group was started.
 *             * `ReadyDateTime` &mdash; (`Date`) The date/time the
 *               instance group was available to the cluster.
 *             * `EndDateTime` &mdash; (`Date`) The date/time the instance
 *               group was terminated.
 *           * `NormalizedInstanceHours` &mdash; (`Integer`) An
 *             approximation of the cost of the job flow, represented in
 *             m1.small/hours. This value is incremented once for every
 *             hour an m1.small runs. Larger instances are weighted more,
 *             so an Amazon EC2 instance that is roughly four times more
 *             expensive would result in the normalized instance hours
 *             being incremented by four. This result is only an
 *             approximation and does not reflect the actual billing rate.
 *           * `Ec2KeyName` &mdash; (`String`) The name of an Amazon EC2
 *             key pair that can be used to ssh to the master node of job
 *             flow.
 *           * `Ec2SubnetId` &mdash; (`String`) For job flows launched
 *             within Amazon Virtual Private Cloud, this value specifies
 *             the identifier of the subnet where the job flow was
 *             launched.
 *           * `Placement` &mdash; (`Object`) Specifies the Amazon EC2
 *             Availability Zone for the job flow.
 *             * `AvailabilityZone` &mdash; (`String`) The Amazon EC2
 *               Availability Zone for the job flow.
 *           * `KeepJobFlowAliveWhenNoSteps` &mdash; (`Boolean`) Specifies
 *             whether or not the job flow should terminate after
 *             completing all steps.
 *           * `TerminationProtected` &mdash; (`Boolean`) Specifies whether
 *             the Amazon EC2 instances in the cluster are protected from
 *             termination by API calls, user intervention, or in the event
 *             of a job flow error.
 *           * `HadoopVersion` &mdash; (`String`) Specifies the Hadoop
 *             version for the job flow.
 *         * `Steps` &mdash; (`Array<Object>`) A list of steps run by the
 *           job flow.
 *           * `StepConfig` &mdash; (`Object`) The step configuration.
 *             * `Name` &mdash; (`String`) The name of the job flow step.
 *             * `ActionOnFailure` &mdash; (`String`) Specifies the action
 *               to take if the job flow step fails.
 *             * `HadoopJarStep` &mdash; (`Object`) Specifies the JAR file
 *               used for the job flow step.
 *               * `Properties` &mdash; (`Array<Object>`) A list of Java
 *                 properties that are set when the step runs. You can use
 *                 these properties to pass key value pairs to your main
 *                 function.
 *                 * `Key` &mdash; (`String`) The unique identifier of a
 *                   key value pair.
 *                 * `Value` &mdash; (`String`) The value part of the
 *                   identified key.
 *               * `Jar` &mdash; (`String`) A path to a JAR file run during
 *                 the step.
 *               * `MainClass` &mdash; (`String`) The name of the main
 *                 class in the specified Java file. If not specified, the
 *                 JAR file should specify a Main-Class in its manifest
 *                 file.
 *               * `Args` &mdash; (`Array<String>`) A list of command line
 *                 arguments passed to the JAR file's main function when
 *                 executed.
 *           * `ExecutionStatusDetail` &mdash; (`Object`) The description
 *             of the step status.
 *             * `State` &mdash; (`String`) The state of the job flow step.
 *             * `CreationDateTime` &mdash; (`Date`) The creation date and
 *               time of the step.
 *             * `StartDateTime` &mdash; (`Date`) The start date and time
 *               of the step.
 *             * `EndDateTime` &mdash; (`Date`) The completion date and
 *               time of the step.
 *             * `LastStateChangeReason` &mdash; (`String`) A description
 *               of the step's current state.
 *         * `BootstrapActions` &mdash; (`Array<Object>`) A list of the
 *           bootstrap actions run by the job flow.
 *           * `BootstrapActionConfig` &mdash; (`Object`) A description of
 *             the bootstrap action.
 *             * `Name` &mdash; (`String`) The name of the bootstrap
 *               action.
 *             * `ScriptBootstrapAction` &mdash; (`Object`) The script run
 *               by the bootstrap action.
 *               * `Path` &mdash; (`String`) Location of the script to run
 *                 during a bootstrap action. Can be either a location in
 *                 Amazon S3 or on a local file system.
 *               * `Args` &mdash; (`Array<String>`) A list of command line
 *                 arguments to pass to the bootstrap action script.
 *         * `SupportedProducts` &mdash; (`Array<String>`) A list of
 *           strings set by third party software when the job flow is
 *           launched. If you are not using third party software to manage
 *           the job flow this value is empty.
 *         * `VisibleToAllUsers` &mdash; (`Boolean`) Specifies whether the
 *           job flow is visible to all IAM users of the AWS account
 *           associated with the job flow. If this value is set to true,
 *           all IAM users of that AWS account can view and (if they have
 *           the proper policy permissions set) manage the job flow. If it
 *           is set to false, only the IAM user that created the job flow
 *           can view and manage it. This value can be changed using the
 *           SetVisibleToAllUsers action.
 *         * `JobFlowRole` &mdash; (`String`) The IAM role that was
 *           specified when the job flow was launched. The EC2 instances of
 *           the job flow assume this role.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyInstanceGroups(params, callback)
 *   Calls the ModifyInstanceGroups API operation.
 *   @param params [Object]
 *     * `InstanceGroups` &mdash; (`Array<Object>`) Instance groups to
 *       change.
 *       * `InstanceGroupId` &mdash; **required** &mdash; (`String`)
 *         Unique ID of the instance group to expand or shrink.
 *       * `InstanceCount` &mdash; **required** &mdash; (`Integer`)
 *         Target size for the instance group.
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
 * @!method runJobFlow(params, callback)
 *   Calls the RunJobFlow API operation.
 *   @param params [Object]
 *     * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *       job flow.
 *     * `LogUri` &mdash; (`String`) Specifies the location in Amazon S3
 *       to write the log files of the job flow. If a value is not
 *       provided, logs are not created.
 *     * `AdditionalInfo` &mdash; (`String`) A JSON string for selecting
 *       additional features.
 *     * `AmiVersion` &mdash; (`String`) The version of the Amazon
 *       Machine Image (AMI) to use when launching Amazon EC2 instances
 *       in the job flow. The following values are valid: "latest" (uses
 *       the latest AMI) The version number of the AMI to use, for
 *       example, "2.0" If this value is not specified, the job flow uses
 *       the default of (AMI 1.0, Hadoop 0.18). If the AMI supports
 *       multiple versions of Hadoop (for example, AMI 1.0 supports both
 *       Hadoop 0.18 and 0.20) you can use the JobFlowInstancesConfig
 *       HadoopVersion parameter to modify the version of Hadoop from the
 *       defaults shown above. For details about the AMI versions
 *       currently supported by Amazon ElasticMapReduce, go to AMI
 *       Versions Supported in Elastic MapReduce in the Amazon Elastic
 *       MapReduce Developer's Guide.
 *     * `Instances` &mdash; **required** &mdash; (`Object`) A
 *       specification of the number and type of Amazon EC2 instances on
 *       which to run the job flow.
 *       * `MasterInstanceType` &mdash; (`String`) The EC2 instance type
 *         of the master node.
 *       * `SlaveInstanceType` &mdash; (`String`) The EC2 instance type
 *         of the slave nodes.
 *       * `InstanceCount` &mdash; (`Integer`) The number of Amazon EC2
 *         instances used to execute the job flow.
 *       * `InstanceGroups` &mdash; (`Array<Object>`) Configuration for
 *         the job flow's instance groups.
 *         * `Name` &mdash; (`String`) Friendly name given to the
 *           instance group.
 *         * `Market` &mdash; (`String`) Market type of the Amazon EC2
 *           instances used to create a cluster node.
 *         * `InstanceRole` &mdash; **required** &mdash; (`String`) The
 *           role of the instance group in the cluster.
 *         * `BidPrice` &mdash; (`String`) Bid price for each Amazon EC2
 *           instance in the instance group when launching nodes as Spot
 *           Instances, expressed in USD.
 *         * `InstanceType` &mdash; **required** &mdash; (`String`) The
 *           Amazon EC2 instance type for all instances in the instance
 *           group.
 *         * `InstanceCount` &mdash; **required** &mdash; (`Integer`)
 *           Target number of instances for the instance group.
 *       * `Ec2KeyName` &mdash; (`String`) Specifies the name of the
 *         Amazon EC2 key pair that can be used to ssh to the master node
 *         as the user called "hadoop."
 *       * `Placement` &mdash; (`Object`) Specifies the Availability Zone
 *         the job flow will run in.
 *         * `AvailabilityZone` &mdash; **required** &mdash; (`String`)
 *           The Amazon EC2 Availability Zone for the job flow.
 *       * `KeepJobFlowAliveWhenNoSteps` &mdash; (`Boolean`) Specifies
 *         whether the job flow should terminate after completing all
 *         steps.
 *       * `TerminationProtected` &mdash; (`Boolean`) Specifies whether
 *         to lock the job flow to prevent the Amazon EC2 instances from
 *         being terminated by API call, user intervention, or in the
 *         event of a job flow error.
 *       * `HadoopVersion` &mdash; (`String`) Specifies the Hadoop
 *         version for the job flow. Valid inputs are "0.18", "0.20", or
 *         "0.20.205". If you do not set this value, the default of 0.18
 *         is used, unless the AmiVersion parameter is set in the
 *         RunJobFlow call, in which case the default version of Hadoop
 *         for that AMI version is used.
 *       * `Ec2SubnetId` &mdash; (`String`) To launch the job flow in
 *         Amazon Virtual Private Cloud (Amazon VPC), set this parameter
 *         to the identifier of the Amazon VPC subnet where you want the
 *         job flow to launch. If you do not specify this value, the job
 *         flow is launched in the normal Amazon Web Services cloud,
 *         outside of an Amazon VPC. Amazon VPC currently does not
 *         support cluster compute quadruple extra large (cc1.4xlarge)
 *         instances. Thus you cannot specify the cc1.4xlarge instance
 *         type for nodes of a job flow launched in a Amazon VPC.
 *     * `Steps` &mdash; (`Array<Object>`) A list of steps to be executed
 *       by the job flow.
 *       * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *         job flow step.
 *       * `ActionOnFailure` &mdash; (`String`) Specifies the action to
 *         take if the job flow step fails.
 *       * `HadoopJarStep` &mdash; **required** &mdash; (`Object`)
 *         Specifies the JAR file used for the job flow step.
 *         * `Properties` &mdash; (`Array<Object>`) A list of Java
 *           properties that are set when the step runs. You can use
 *           these properties to pass key value pairs to your main
 *           function.
 *           * `Key` &mdash; (`String`) The unique identifier of a key
 *             value pair.
 *           * `Value` &mdash; (`String`) The value part of the
 *             identified key.
 *         * `Jar` &mdash; **required** &mdash; (`String`) A path to a
 *           JAR file run during the step.
 *         * `MainClass` &mdash; (`String`) The name of the main class in
 *           the specified Java file. If not specified, the JAR file
 *           should specify a Main-Class in its manifest file.
 *         * `Args` &mdash; (`Array<String>`) A list of command line
 *           arguments passed to the JAR file's main function when
 *           executed.
 *     * `BootstrapActions` &mdash; (`Array<Object>`) A list of bootstrap
 *       actions that will be run before Hadoop is started on the cluster
 *       nodes.
 *       * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *         bootstrap action.
 *       * `ScriptBootstrapAction` &mdash; **required** &mdash;
 *         (`Object`) The script run by the bootstrap action.
 *         * `Path` &mdash; **required** &mdash; (`String`) Location of
 *           the script to run during a bootstrap action. Can be either a
 *           location in Amazon S3 or on a local file system.
 *         * `Args` &mdash; (`Array<String>`) A list of command line
 *           arguments to pass to the bootstrap action script.
 *     * `SupportedProducts` &mdash; (`Array<String>`) A list of strings
 *       that indicates third-party software to use with the job flow.
 *       For more information, go to Use Third Party Applications with
 *       Amazon EMR. Currently supported values are:
 *       "karmasphere-enterprise-utility" - tag the job flow for
 *       management by Karmasphere. "mapr-m3" - launch the job flow using
 *       MapR M3 Edition. "mapr-m5" - launch the job flow using MapR M5
 *       Edition.
 *     * `VisibleToAllUsers` &mdash; (`Boolean`) Whether the job flow is
 *       visible to all IAM users of the AWS account associated with the
 *       job flow. If this value is set to true, all IAM users of that
 *       AWS account can view and (if they have the proper policy
 *       permissions set) manage the job flow. If it is set to false,
 *       only the IAM user that created the job flow can view and manage
 *       it.
 *     * `JobFlowRole` &mdash; (`String`) An IAM role for the job flow.
 *       The EC2 instances of the job flow assume this role. The default
 *       role is EMRJobflowDefault. In order to use the default role, you
 *       must have already created it using the CLI.
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
 *       * `JobFlowId` &mdash; (`String`) An unique identifier for the job
 *         flow.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method setTerminationProtection(params, callback)
 *   Calls the SetTerminationProtection API operation.
 *   @param params [Object]
 *     * `JobFlowIds` &mdash; **required** &mdash; (`Array<String>`) A
 *       list of strings that uniquely identify the job flows to protect.
 *       This identifier is returned by RunJobFlow and can also be
 *       obtained from DescribeJobFlows .
 *     * `TerminationProtected` &mdash; **required** &mdash; (`Boolean`)
 *       A Boolean that indicates whether to protect the job flow and
 *       prevent the Amazon EC2 instances in the cluster from shutting
 *       down due to API calls, user intervention, or job-flow error.
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
 * @!method setVisibleToAllUsers(params, callback)
 *   Calls the SetVisibleToAllUsers API operation.
 *   @param params [Object]
 *     * `JobFlowIds` &mdash; **required** &mdash; (`Array<String>`)
 *       Identifiers of the job flows to receive the new visibility
 *       setting.
 *     * `VisibleToAllUsers` &mdash; **required** &mdash; (`Boolean`)
 *       Whether the specified job flows are visible to all IAM users of
 *       the AWS account associated with the job flow. If this value is
 *       set to True, all IAM users of that AWS account can view and, if
 *       they have the proper IAM policy permissions set, manage the job
 *       flows. If it is set to False, only the IAM user that created a
 *       job flow can view and manage it.
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
 * @!method terminateJobFlows(params, callback)
 *   Calls the TerminateJobFlows API operation.
 *   @param params [Object]
 *     * `JobFlowIds` &mdash; **required** &mdash; (`Array<String>`) A
 *       list of job flows to be shutdown.
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
AWS.EMR.Client = inherit({});
