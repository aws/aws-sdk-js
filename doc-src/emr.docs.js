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
 * === Sending a Request Using EMR
 *
 *   svc = new AWS.EMR();
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
 *     * +InstanceGroups+ - (*required*, <tt>Array<Object></tt>) Instance
 *       Groups to add.
 *       * +Name+ - (<tt>String</tt>) Friendly name given to the instance
 *         group.
 *       * +Market+ - (<tt>String</tt>) Market type of the Amazon EC2
 *         instances used to create a cluster node.
 *       * +InstanceRole+ - (*required*, <tt>String</tt>) The role of the
 *         instance group in the cluster.
 *       * +BidPrice+ - (<tt>String</tt>) Bid price for each Amazon EC2
 *         instance in the instance group when launching nodes as Spot
 *         Instances, expressed in USD.
 *       * +InstanceType+ - (*required*, <tt>String</tt>) The Amazon EC2
 *         instance type for all instances in the instance group.
 *       * +InstanceCount+ - (*required*, <tt>Integer</tt>) Target number
 *         of instances for the instance group.
 *     * +JobFlowId+ - (*required*, <tt>String</tt>) Job flow in which to
 *       add the instance groups.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +JobFlowId+ - (<tt>String</tt>) The job flow ID in which the
 *         instance groups are added.
 *       * +InstanceGroupIds+ - (<tt>Array<String></tt>) Instance group IDs
 *         of the newly created instance groups.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method addJobFlowSteps(params, callback)
 *   Calls the AddJobFlowSteps API operation.
 *   @param params [Object]
 *     * +JobFlowId+ - (*required*, <tt>String</tt>) A string that
 *       uniquely identifies the job flow. This identifier is returned by
 *       RunJobFlow and can also be obtained from DescribeJobFlows.
 *     * +Steps+ - (*required*, <tt>Array<Object></tt>) A list of
 *       StepConfig to be executed by the job flow.
 *       * +Name+ - (*required*, <tt>String</tt>) The name of the job
 *         flow step.
 *       * +ActionOnFailure+ - (<tt>String</tt>) Specifies the action to
 *         take if the job flow step fails.
 *       * +HadoopJarStep+ - (*required*, <tt>Object</tt>) Specifies the
 *         JAR file used for the job flow step.
 *         * +Properties+ - (<tt>Array<Object></tt>) A list of Java
 *           properties that are set when the step runs. You can use
 *           these properties to pass key value pairs to your main
 *           function.
 *           * +Key+ - (<tt>String</tt>) The unique identifier of a key
 *             value pair.
 *           * +Value+ - (<tt>String</tt>) The value part of the
 *             identified key.
 *         * +Jar+ - (*required*, <tt>String</tt>) A path to a JAR file
 *           run during the step.
 *         * +MainClass+ - (<tt>String</tt>) The name of the main class
 *           in the specified Java file. If not specified, the JAR file
 *           should specify a Main-Class in its manifest file.
 *         * +Args+ - (<tt>Array<String></tt>) A list of command line
 *           arguments passed to the JAR file's main function when
 *           executed.
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
 * @!method describeJobFlows(params, callback)
 *   Calls the DescribeJobFlows API operation.
 *   @param params [Object]
 *     * +CreatedAfter+ - (<tt>Date</tt>) Return only job flows created
 *       after this date and time.
 *     * +CreatedBefore+ - (<tt>Date</tt>) Return only job flows created
 *       before this date and time.
 *     * +JobFlowIds+ - (<tt>Array<String></tt>) Return only job flows
 *       whose job flow ID is contained in this list.
 *     * +JobFlowStates+ - (<tt>Array<String></tt>) Return only job flows
 *       whose state is contained in this list.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +JobFlows+ - (<tt>Array<Object></tt>) A list of job flows
 *         matching the parameters supplied.
 *         * +JobFlowId+ - (<tt>String</tt>) The job flow
 *           identifier.
 *         * +Name+ - (<tt>String</tt>) The name of the job
 *           flow.
 *         * +LogUri+ - (<tt>String</tt>) The location in Amazon S3 where
 *           log files for the job are stored.
 *         * +AmiVersion+ - (<tt>String</tt>) The version of the AMI used
 *           to initialize Amazon EC2 instances in the job flow. For a list
 *           of AMI versions currently supported by Amazon
 *           ElasticMapReduce, go to AMI Versions Supported in Elastic
 *           MapReduce in the Amazon Elastic MapReduce Developer's Guide.
 *         * +ExecutionStatusDetail+ - (<tt>Object</tt>)
 *           Describes the execution status of the job flow.
 *           * +State+ - (<tt>String</tt>) The state of the job
 *             flow.
 *           * +CreationDateTime+ - (<tt>Date</tt>) The
 *             creation date and time of the job flow.
 *           * +StartDateTime+ - (<tt>Date</tt>) The start date and time of
 *             the job flow.
 *           * +ReadyDateTime+ - (<tt>Date</tt>) The date and time when the
 *             job flow was ready to start running bootstrap actions.
 *           * +EndDateTime+ - (<tt>Date</tt>) The completion date and time
 *             of the job flow.
 *           * +LastStateChangeReason+ - (<tt>String</tt>) Description of
 *             the job flow last changed state.
 *         * +Instances+ - (<tt>Object</tt>) Describes the
 *           Amazon EC2 instances of the job flow.
 *           * +MasterInstanceType+ - (<tt>String</tt>) The
 *             Amazon EC2 master node instance type.
 *           * +MasterPublicDnsName+ - (<tt>String</tt>) The DNS name of
 *             the master node.
 *           * +MasterInstanceId+ - (<tt>String</tt>) The Amazon EC2
 *             instance identifier of the master node.
 *           * +SlaveInstanceType+ - (<tt>String</tt>) The
 *             Amazon EC2 slave node instance type.
 *           * +InstanceCount+ - (<tt>Integer</tt>) The number
 *             of Amazon EC2 instances in the cluster. If the value is 1,
 *             the same instance serves as both the master and slave node.
 *             If the value is greater than 1, one instance is the master
 *             node and all others are slave nodes.
 *           * +InstanceGroups+ - (<tt>Array<Object></tt>) Details about
 *             the job flow's instance groups.
 *             * +InstanceGroupId+ - (<tt>String</tt>) Unique identifier
 *               for the instance group.
 *             * +Name+ - (<tt>String</tt>) Friendly name for the instance
 *               group.
 *             * +Market+ - (<tt>String</tt>) Market type of
 *               the Amazon EC2 instances used to create a cluster node.
 *             * +InstanceRole+ - (<tt>String</tt>) Instance
 *               group role in the cluster
 *             * +BidPrice+ - (<tt>String</tt>) Bid price for EC2 Instances
 *               when launching nodes as Spot Instances, expressed in USD.
 *             * +InstanceType+ - (<tt>String</tt>) Amazon EC2
 *               Instance type.
 *             * +InstanceRequestCount+ - (<tt>Integer</tt>)
 *               Target number of instances to run in the instance group.
 *             * +InstanceRunningCount+ - (<tt>Integer</tt>)
 *               Actual count of running instances.
 *             * +State+ - (<tt>String</tt>) State of instance
 *               group. The following values are deprecated: STARTING,
 *               TERMINATED, and FAILED.
 *             * +LastStateChangeReason+ - (<tt>String</tt>) Details
 *               regarding the state of the instance group.
 *             * +CreationDateTime+ - (<tt>Date</tt>) The
 *               date/time the instance group was created.
 *             * +StartDateTime+ - (<tt>Date</tt>) The date/time the
 *               instance group was started.
 *             * +ReadyDateTime+ - (<tt>Date</tt>) The date/time the
 *               instance group was available to the cluster.
 *             * +EndDateTime+ - (<tt>Date</tt>) The date/time the instance
 *               group was terminated.
 *           * +NormalizedInstanceHours+ - (<tt>Integer</tt>) An
 *             approximation of the cost of the job flow, represented in
 *             m1.small/hours. This value is incremented once for every
 *             hour an m1.small runs. Larger instances are weighted more,
 *             so an Amazon EC2 instance that is roughly four times more
 *             expensive would result in the normalized instance hours
 *             being incremented by four. This result is only an
 *             approximation and does not reflect the actual billing rate.
 *           * +Ec2KeyName+ - (<tt>String</tt>) The name of an Amazon EC2
 *             key pair that can be used to ssh to the master node of job
 *             flow.
 *           * +Ec2SubnetId+ - (<tt>String</tt>) For job flows launched
 *             within Amazon Virtual Private Cloud, this value specifies
 *             the identifier of the subnet where the job flow was
 *             launched.
 *           * +Placement+ - (<tt>Object</tt>) Specifies the Amazon EC2
 *             Availability Zone for the job flow.
 *             * +AvailabilityZone+ - (<tt>String</tt>) The
 *               Amazon EC2 Availability Zone for the job flow.
 *           * +KeepJobFlowAliveWhenNoSteps+ - (<tt>Boolean</tt>) Specifies
 *             whether or not the job flow should terminate after
 *             completing all steps.
 *           * +TerminationProtected+ - (<tt>Boolean</tt>) Specifies
 *             whether the Amazon EC2 instances in the cluster are
 *             protected from termination by API calls, user intervention,
 *             or in the event of a job flow error.
 *           * +HadoopVersion+ - (<tt>String</tt>) Specifies the Hadoop
 *             version for the job flow.
 *         * +Steps+ - (<tt>Array<Object></tt>) A list of steps run by the
 *           job flow.
 *           * +StepConfig+ - (<tt>Object</tt>) The step
 *             configuration.
 *             * +Name+ - (<tt>String</tt>) The name of the job
 *               flow step.
 *             * +ActionOnFailure+ - (<tt>String</tt>) Specifies the action
 *               to take if the job flow step fails.
 *             * +HadoopJarStep+ - (<tt>Object</tt>) Specifies
 *               the JAR file used for the job flow step.
 *               * +Properties+ - (<tt>Array<Object></tt>) A list of Java
 *                 properties that are set when the step runs. You can use
 *                 these properties to pass key value pairs to your main
 *                 function.
 *                 * +Key+ - (<tt>String</tt>) The unique identifier of a
 *                   key value pair.
 *                 * +Value+ - (<tt>String</tt>) The value part of the
 *                   identified key.
 *               * +Jar+ - (<tt>String</tt>) A path to a JAR
 *                 file run during the step.
 *               * +MainClass+ - (<tt>String</tt>) The name of the main
 *                 class in the specified Java file. If not specified, the
 *                 JAR file should specify a Main-Class in its manifest
 *                 file.
 *               * +Args+ - (<tt>Array<String></tt>) A list of command line
 *                 arguments passed to the JAR file's main function when
 *                 executed.
 *           * +ExecutionStatusDetail+ - (<tt>Object</tt>) The
 *             description of the step status.
 *             * +State+ - (<tt>String</tt>) The state of the
 *               job flow step.
 *             * +CreationDateTime+ - (<tt>Date</tt>) The
 *               creation date and time of the step.
 *             * +StartDateTime+ - (<tt>Date</tt>) The start date and time
 *               of the step.
 *             * +EndDateTime+ - (<tt>Date</tt>) The completion date and
 *               time of the step.
 *             * +LastStateChangeReason+ - (<tt>String</tt>) A description
 *               of the step's current state.
 *         * +BootstrapActions+ - (<tt>Array<Object></tt>) A list of the
 *           bootstrap actions run by the job flow.
 *           * +BootstrapActionConfig+ - (<tt>Object</tt>) A description of
 *             the bootstrap action.
 *             * +Name+ - (<tt>String</tt>) The name of the
 *               bootstrap action.
 *             * +ScriptBootstrapAction+ - (<tt>Object</tt>)
 *               The script run by the bootstrap action.
 *               * +Path+ - (<tt>String</tt>) Location of the
 *                 script to run during a bootstrap action. Can be either a
 *                 location in Amazon S3 or on a local file system.
 *               * +Args+ - (<tt>Array<String></tt>) A list of command line
 *                 arguments to pass to the bootstrap action script.
 *         * +SupportedProducts+ - (<tt>Array<String></tt>) A list of
 *           strings set by third party software when the job flow is
 *           launched. If you are not using third party software to manage
 *           the job flow this value is empty.
 *         * +VisibleToAllUsers+ - (<tt>Boolean</tt>) Specifies whether the
 *           job flow is visible to all IAM users of the AWS account
 *           associated with the job flow. If this value is set to true,
 *           all IAM users of that AWS account can view and (if they have
 *           the proper policy permissions set) manage the job flow. If it
 *           is set to false, only the IAM user that created the job flow
 *           can view and manage it. This value can be changed using the
 *           SetVisibleToAllUsers action.
 *         * +JobFlowRole+ - (<tt>String</tt>) The IAM role that was
 *           specified when the job flow was launched. The EC2 instances of
 *           the job flow assume this role.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method modifyInstanceGroups(params, callback)
 *   Calls the ModifyInstanceGroups API operation.
 *   @param params [Object]
 *     * +InstanceGroups+ - (<tt>Array<Object></tt>) Instance groups to
 *       change.
 *       * +InstanceGroupId+ - (*required*, <tt>String</tt>) Unique ID of
 *         the instance group to expand or shrink.
 *       * +InstanceCount+ - (*required*, <tt>Integer</tt>) Target size
 *         for the instance group.
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
 * @!method runJobFlow(params, callback)
 *   Calls the RunJobFlow API operation.
 *   @param params [Object]
 *     * +Name+ - (*required*, <tt>String</tt>) The name of the job flow.
 *     * +LogUri+ - (<tt>String</tt>) Specifies the location in Amazon S3
 *       to write the log files of the job flow. If a value is not
 *       provided, logs are not created.
 *     * +AdditionalInfo+ - (<tt>String</tt>) A JSON string for selecting
 *       additional features.
 *     * +AmiVersion+ - (<tt>String</tt>) The version of the Amazon
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
 *     * +Instances+ - (*required*, <tt>Object</tt>) A specification of
 *       the number and type of Amazon EC2 instances on which to run the
 *       job flow.
 *       * +MasterInstanceType+ - (<tt>String</tt>) The EC2 instance type
 *         of the master node.
 *       * +SlaveInstanceType+ - (<tt>String</tt>) The EC2 instance type
 *         of the slave nodes.
 *       * +InstanceCount+ - (<tt>Integer</tt>) The number of Amazon EC2
 *         instances used to execute the job flow.
 *       * +InstanceGroups+ - (<tt>Array<Object></tt>) Configuration for
 *         the job flow's instance groups.
 *         * +Name+ - (<tt>String</tt>) Friendly name given to the
 *           instance group.
 *         * +Market+ - (<tt>String</tt>) Market type of the Amazon EC2
 *           instances used to create a cluster node.
 *         * +InstanceRole+ - (*required*, <tt>String</tt>) The role of
 *           the instance group in the cluster.
 *         * +BidPrice+ - (<tt>String</tt>) Bid price for each Amazon EC2
 *           instance in the instance group when launching nodes as Spot
 *           Instances, expressed in USD.
 *         * +InstanceType+ - (*required*, <tt>String</tt>) The Amazon
 *           EC2 instance type for all instances in the instance group.
 *         * +InstanceCount+ - (*required*, <tt>Integer</tt>) Target
 *           number of instances for the instance group.
 *       * +Ec2KeyName+ - (<tt>String</tt>) Specifies the name of the
 *         Amazon EC2 key pair that can be used to ssh to the master node
 *         as the user called "hadoop."
 *       * +Placement+ - (<tt>Object</tt>) Specifies the Availability
 *         Zone the job flow will run in.
 *         * +AvailabilityZone+ - (*required*, <tt>String</tt>) The
 *           Amazon EC2 Availability Zone for the job flow.
 *       * +KeepJobFlowAliveWhenNoSteps+ - (<tt>Boolean</tt>) Specifies
 *         whether the job flow should terminate after completing all
 *         steps.
 *       * +TerminationProtected+ - (<tt>Boolean</tt>) Specifies whether
 *         to lock the job flow to prevent the Amazon EC2 instances from
 *         being terminated by API call, user intervention, or in the
 *         event of a job flow error.
 *       * +HadoopVersion+ - (<tt>String</tt>) Specifies the Hadoop
 *         version for the job flow. Valid inputs are "0.18", "0.20", or
 *         "0.20.205". If you do not set this value, the default of 0.18
 *         is used, unless the AmiVersion parameter is set in the
 *         RunJobFlow call, in which case the default version of Hadoop
 *         for that AMI version is used.
 *       * +Ec2SubnetId+ - (<tt>String</tt>) To launch the job flow in
 *         Amazon Virtual Private Cloud (Amazon VPC), set this parameter
 *         to the identifier of the Amazon VPC subnet where you want the
 *         job flow to launch. If you do not specify this value, the job
 *         flow is launched in the normal Amazon Web Services cloud,
 *         outside of an Amazon VPC. Amazon VPC currently does not
 *         support cluster compute quadruple extra large (cc1.4xlarge)
 *         instances. Thus you cannot specify the cc1.4xlarge instance
 *         type for nodes of a job flow launched in a Amazon VPC.
 *     * +Steps+ - (<tt>Array<Object></tt>) A list of steps to be
 *       executed by the job flow.
 *       * +Name+ - (*required*, <tt>String</tt>) The name of the job
 *         flow step.
 *       * +ActionOnFailure+ - (<tt>String</tt>) Specifies the action to
 *         take if the job flow step fails.
 *       * +HadoopJarStep+ - (*required*, <tt>Object</tt>) Specifies the
 *         JAR file used for the job flow step.
 *         * +Properties+ - (<tt>Array<Object></tt>) A list of Java
 *           properties that are set when the step runs. You can use
 *           these properties to pass key value pairs to your main
 *           function.
 *           * +Key+ - (<tt>String</tt>) The unique identifier of a key
 *             value pair.
 *           * +Value+ - (<tt>String</tt>) The value part of the
 *             identified key.
 *         * +Jar+ - (*required*, <tt>String</tt>) A path to a JAR file
 *           run during the step.
 *         * +MainClass+ - (<tt>String</tt>) The name of the main class
 *           in the specified Java file. If not specified, the JAR file
 *           should specify a Main-Class in its manifest file.
 *         * +Args+ - (<tt>Array<String></tt>) A list of command line
 *           arguments passed to the JAR file's main function when
 *           executed.
 *     * +BootstrapActions+ - (<tt>Array<Object></tt>) A list of
 *       bootstrap actions that will be run before Hadoop is started on
 *       the cluster nodes.
 *       * +Name+ - (*required*, <tt>String</tt>) The name of the
 *         bootstrap action.
 *       * +ScriptBootstrapAction+ - (*required*, <tt>Object</tt>) The
 *         script run by the bootstrap action.
 *         * +Path+ - (*required*, <tt>String</tt>) Location of the
 *           script to run during a bootstrap action. Can be either a
 *           location in Amazon S3 or on a local file system.
 *         * +Args+ - (<tt>Array<String></tt>) A list of command line
 *           arguments to pass to the bootstrap action script.
 *     * +SupportedProducts+ - (<tt>Array<String></tt>) A list of strings
 *       that indicates third-party software to use with the job flow.
 *       For more information, go to Use Third Party Applications with
 *       Amazon EMR. Currently supported values are:
 *       "karmasphere-enterprise-utility" - tag the job flow for
 *       management by Karmasphere. "mapr-m3" - launch the job flow using
 *       MapR M3 Edition. "mapr-m5" - launch the job flow using MapR M5
 *       Edition.
 *     * +VisibleToAllUsers+ - (<tt>Boolean</tt>) Whether the job flow is
 *       visible to all IAM users of the AWS account associated with the
 *       job flow. If this value is set to true, all IAM users of that
 *       AWS account can view and (if they have the proper policy
 *       permissions set) manage the job flow. If it is set to false,
 *       only the IAM user that created the job flow can view and manage
 *       it.
 *     * +JobFlowRole+ - (<tt>String</tt>) An IAM role for the job flow.
 *       The EC2 instances of the job flow assume this role. The default
 *       role is EMRJobflowDefault. In order to use the default role, you
 *       must have already created it using the CLI.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +JobFlowId+ - (<tt>String</tt>) An unique identifier for the job
 *         flow.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method setTerminationProtection(params, callback)
 *   Calls the SetTerminationProtection API operation.
 *   @param params [Object]
 *     * +JobFlowIds+ - (*required*, <tt>Array<String></tt>) A list of
 *       strings that uniquely identify the job flows to protect. This
 *       identifier is returned by RunJobFlow and can also be obtained
 *       from DescribeJobFlows .
 *     * +TerminationProtected+ - (*required*, <tt>Boolean</tt>) A
 *       Boolean that indicates whether to protect the job flow and
 *       prevent the Amazon EC2 instances in the cluster from shutting
 *       down due to API calls, user intervention, or job-flow error.
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
 * @!method setVisibleToAllUsers(params, callback)
 *   Calls the SetVisibleToAllUsers API operation.
 *   @param params [Object]
 *     * +JobFlowIds+ - (*required*, <tt>Array<String></tt>) Identifiers
 *       of the job flows to receive the new visibility setting.
 *     * +VisibleToAllUsers+ - (*required*, <tt>Boolean</tt>) Whether the
 *       specified job flows are visible to all IAM users of the AWS
 *       account associated with the job flow. If this value is set to
 *       True, all IAM users of that AWS account can view and, if they
 *       have the proper IAM policy permissions set, manage the job
 *       flows. If it is set to False, only the IAM user that created a
 *       job flow can view and manage it.
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
 * @!method terminateJobFlows(params, callback)
 *   Calls the TerminateJobFlows API operation.
 *   @param params [Object]
 *     * +JobFlowIds+ - (*required*, <tt>Array<String></tt>) A list of
 *       job flows to be shutdown.
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
AWS.EMR.Client = inherit({});
