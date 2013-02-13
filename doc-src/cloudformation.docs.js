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
 * === Sending a Request Using CloudFormation
 *
 *   svc = new AWS.CloudFormation();
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
 *   @option (see AWS.CloudFormation.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.CloudFormation.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.CloudFormation.Client
 *
 */
AWS.CloudFormation = inherit({})

/**
 * The low-level CloudFormation client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method createStack(params, callback)
 *   Calls the CreateStack API operation.
 *   @param params [Object]
 *     * +StackName+ - (*required*, <tt>String</tt>) The name associated
 *       with the stack. The name must be unique within your AWS account.
 *       Must contain only alphanumeric characters (case sensitive) and
 *       start with an alpha character. Maximum length of the name is 255
 *       characters.
 *     * +TemplateBody+ - (<tt>String</tt>) Structure containing the
 *       template body. (For more information, go to the AWS
 *       CloudFormation User Guide.) Conditional: You must pass
 *       TemplateBody or TemplateURL. If both are passed, only
 *       TemplateBody is used.
 *     * +TemplateURL+ - (<tt>String</tt>) Location of file containing
 *       the template body. The URL must point to a template located in
 *       an S3 bucket in the same region as the stack. For more
 *       information, go to the AWS CloudFormation User Guide.
 *       Conditional: You must pass TemplateURL or TemplateBody. If both
 *       are passed, only TemplateBody is used.
 *     * +Parameters+ - (<tt>Array<Object></tt>) A list of Parameter
 *       structures that specify input parameters for the stack.
 *       * +ParameterKey+ - (<tt>String</tt>) The key associated with the
 *         parameter.
 *       * +ParameterValue+ - (<tt>String</tt>) The value associated with
 *         the parameter.
 *     * +DisableRollback+ - (<tt>Boolean</tt>) Set to true to disable
 *       rollback of the stack if stack creation failed. You can specify
 *       either DisableRollback or OnFailure, but not both. Default:
 *       false
 *     * +TimeoutInMinutes+ - (<tt>Integer</tt>) The amount of time that
 *       can pass before the stack status becomes CREATE_FAILED; if
 *       DisableRollback is not set or is set to false, the stack will be
 *       rolled back.
 *     * +NotificationARNs+ - (<tt>Array<String></tt>) The Simple
 *       Notification Service (SNS) topic ARNs to publish stack related
 *       events. You can find your SNS topic ARNs using the SNS console
 *       or your Command Line Interface (CLI).
 *     * +Capabilities+ - (<tt>Array<String></tt>) The list of
 *       capabilities that you want to allow in the stack. If your
 *       template contains IAM resources, you must specify the
 *       CAPABILITY_IAM value for this parameter; otherwise, this action
 *       returns an InsufficientCapabilities error. IAM resources are the
 *       following: AWS::IAM::AccessKey, AWS::IAM::Group,
 *       AWS::IAM::Policy, AWS::IAM::User, and
 *       AWS::IAM::UserToGroupAddition.
 *     * +OnFailure+ - (<tt>String</tt>) Determines what action will be
 *       taken if stack creation fails. This must be one of: DO_NOTHING,
 *       ROLLBACK, or DELETE. You can specify either OnFailure or
 *       DisableRollback, but not both. Default: ROLLBACK
 *     * +Tags+ - (<tt>Array<Object></tt>) A set of user-defined Tags to
 *       associate with this stack, represented by key/value pairs. Tags
 *       defined for the stack are propogated to EC2 resources that are
 *       created as part of the stack. A maximum number of 10 tags can be
 *       specified.
 *       * +Key+ - (<tt>String</tt>) Required. A string used to identify
 *         this tag. You can specify a maximum of 128 characters for a
 *         tag key. Tags owned by Amazon Web Services (AWS) have the
 *         reserved prefix: aws:.
 *       * +Value+ - (<tt>String</tt>) Required. A string containing the
 *         value for this tag. You can specify a maximum of 256
 *         characters for a tag value.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StackId+ - (<tt>String</tt>) Unique identifier of the stack.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteStack(params, callback)
 *   Calls the DeleteStack API operation.
 *   @param params [Object]
 *     * +StackName+ - (*required*, <tt>String</tt>) The name or the
 *       unique identifier associated with the stack.
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
 * @!method describeStackEvents(params, callback)
 *   Calls the DescribeStackEvents API operation.
 *   @param params [Object]
 *     * +StackName+ - (<tt>String</tt>) The name or the unique
 *       identifier associated with the stack. Default: There is no
 *       default value.
 *     * +NextToken+ - (<tt>String</tt>) String that identifies the start
 *       of the next list of events, if there is one. Default: There is
 *       no default value.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StackEvents+ - (<tt>Array<Object></tt>) A list of StackEvents
 *         structures.
 *         * +StackId+ - (<tt>String</tt>) The unique ID name
 *           of the instance of the stack.
 *         * +EventId+ - (<tt>String</tt>) The unique ID of
 *           this event.
 *         * +StackName+ - (<tt>String</tt>) The name
 *           associated with a stack.
 *         * +LogicalResourceId+ - (<tt>String</tt>) The logical name of
 *           the resource specified in the template.
 *         * +PhysicalResourceId+ - (<tt>String</tt>) The name or unique
 *           identifier associated with the physical instance of the
 *           resource.
 *         * +ResourceType+ - (<tt>String</tt>) Type of the resource. (For
 *           more information, go to the AWS CloudFormation User Guide.)
 *         * +Timestamp+ - (<tt>Date</tt>) Time the status was
 *           updated.
 *         * +ResourceStatus+ - (<tt>String</tt>) Current status of the
 *           resource.
 *         * +ResourceStatusReason+ - (<tt>String</tt>) Success/failure
 *           message associated with the resource.
 *         * +ResourceProperties+ - (<tt>String</tt>) BLOB of the
 *           properties used to create the resource.
 *       * +NextToken+ - (<tt>String</tt>) String that identifies the start
 *         of the next list of events, if there is one.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeStackResource(params, callback)
 *   Calls the DescribeStackResource API operation.
 *   @param params [Object]
 *     * +StackName+ - (*required*, <tt>String</tt>) The name or the
 *       unique identifier associated with the stack. Default: There is
 *       no default value.
 *     * +LogicalResourceId+ - (*required*, <tt>String</tt>) The logical
 *       name of the resource as specified in the template. Default:
 *       There is no default value.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StackResourceDetail+ - (<tt>Object</tt>) A StackResourceDetail
 *         structure containing the description of the specified resource
 *         in the specified stack.
 *         * +StackName+ - (<tt>String</tt>) The name associated with the
 *           stack.
 *         * +StackId+ - (<tt>String</tt>) Unique identifier of the stack.
 *         * +LogicalResourceId+ - (<tt>String</tt>) The
 *           logical name of the resource specified in the template.
 *         * +PhysicalResourceId+ - (<tt>String</tt>) The name or unique
 *           identifier that corresponds to a physical instance ID of a
 *           resource supported by AWS CloudFormation.
 *         * +ResourceType+ - (<tt>String</tt>) Type of the
 *           resource. (For more information, go to the AWS CloudFormation
 *           User Guide.)
 *         * +LastUpdatedTimestamp+ - (<tt>Date</tt>) Time the
 *           status was updated.
 *         * +ResourceStatus+ - (<tt>String</tt>) Current
 *           status of the resource.
 *         * +ResourceStatusReason+ - (<tt>String</tt>) Success/failure
 *           message associated with the resource.
 *         * +Description+ - (<tt>String</tt>) User defined description
 *           associated with the resource.
 *         * +Metadata+ - (<tt>String</tt>) The JSON format content of the
 *           Metadata attribute declared for the resource. For more
 *           information, see Metadata Attribute in the AWS CloudFormation
 *           User Guide.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeStackResources(params, callback)
 *   Calls the DescribeStackResources API operation.
 *   @param params [Object]
 *     * +StackName+ - (<tt>String</tt>) The name or the unique
 *       identifier associated with the stack. Default: There is no
 *       default value.
 *     * +LogicalResourceId+ - (<tt>String</tt>) The logical name of the
 *       resource as specified in the template. Default: There is no
 *       default value.
 *     * +PhysicalResourceId+ - (<tt>String</tt>) The name or unique
 *       identifier that corresponds to a physical instance ID of a
 *       resource supported by AWS CloudFormation. For example, for an
 *       Amazon Elastic Compute Cloud (EC2) instance, PhysicalResourceId
 *       corresponds to the InstanceId. You can pass the EC2 InstanceId
 *       to DescribeStackResources to find which stack the instance
 *       belongs to and what other resources are part of the stack.
 *       Default: There is no default value.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StackResources+ - (<tt>Array<Object></tt>) A list of
 *         StackResource structures.
 *         * +StackName+ - (<tt>String</tt>) The name associated with the
 *           stack.
 *         * +StackId+ - (<tt>String</tt>) Unique identifier of the stack.
 *         * +LogicalResourceId+ - (<tt>String</tt>) The
 *           logical name of the resource specified in the template.
 *         * +PhysicalResourceId+ - (<tt>String</tt>) The name or unique
 *           identifier that corresponds to a physical instance ID of a
 *           resource supported by AWS CloudFormation.
 *         * +ResourceType+ - (<tt>String</tt>) Type of the
 *           resource. (For more information, go to the AWS CloudFormation
 *           User Guide.)
 *         * +Timestamp+ - (<tt>Date</tt>) Time the status was
 *           updated.
 *         * +ResourceStatus+ - (<tt>String</tt>) Current
 *           status of the resource.
 *         * +ResourceStatusReason+ - (<tt>String</tt>) Success/failure
 *           message associated with the resource.
 *         * +Description+ - (<tt>String</tt>) User defined description
 *           associated with the resource.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeStacks(params, callback)
 *   Calls the DescribeStacks API operation.
 *   @param params [Object]
 *     * +StackName+ - (<tt>String</tt>) The name or the unique
 *       identifier associated with the stack. Default: There is no
 *       default value.
 *     * +NextToken+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Stacks+ - (<tt>Array<Object></tt>) A list of stack structures.
 *         * +StackId+ - (<tt>String</tt>) Unique identifier of the stack.
 *         * +StackName+ - (<tt>String</tt>) The name
 *           associated with the stack.
 *         * +Description+ - (<tt>String</tt>) User defined description
 *           associated with the stack.
 *         * +Parameters+ - (<tt>Array<Object></tt>) A list of Parameter
 *           structures.
 *           * +ParameterKey+ - (<tt>String</tt>) The key associated with
 *             the parameter.
 *           * +ParameterValue+ - (<tt>String</tt>) The value associated
 *             with the parameter.
 *         * +CreationTime+ - (<tt>Date</tt>) Time at which the
 *           stack was created.
 *         * +LastUpdatedTime+ - (<tt>Date</tt>) The time the stack was
 *           last updated. This field will only be returned if the stack
 *           has been updated at least once.
 *         * +StackStatus+ - (<tt>String</tt>) Current status
 *           of the stack.
 *         * +StackStatusReason+ - (<tt>String</tt>) Success/failure
 *           message associated with the stack status.
 *         * +DisableRollback+ - (<tt>Boolean</tt>) Boolean to enable or
 *           disable rollback on stack creation failures: true: disable
 *           rollback false: enable rollback
 *         * +NotificationARNs+ - (<tt>Array<String></tt>) SNS topic ARNs
 *           to which stack related events are published.
 *         * +TimeoutInMinutes+ - (<tt>Integer</tt>) The amount of time
 *           within which stack creation should complete.
 *         * +Capabilities+ - (<tt>Array<String></tt>) The capabilities
 *           allowed in the stack.
 *         * +Outputs+ - (<tt>Array<Object></tt>) A list of output
 *           structures.
 *           * +OutputKey+ - (<tt>String</tt>) The key associated with the
 *             output.
 *           * +OutputValue+ - (<tt>String</tt>) The value associated with
 *             the output.
 *           * +Description+ - (<tt>String</tt>) User defined description
 *             associated with the output.
 *         * +Tags+ - (<tt>Array<Object></tt>) A list of Tags that specify
 *           cost allocation information for the stack.
 *           * +Key+ - (<tt>String</tt>) Required. A string used to
 *             identify this tag. You can specify a maximum of 128
 *             characters for a tag key. Tags owned by Amazon Web Services
 *             (AWS) have the reserved prefix: aws:.
 *           * +Value+ - (<tt>String</tt>) Required. A string containing
 *             the value for this tag. You can specify a maximum of 256
 *             characters for a tag value.
 *       * +NextToken+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method estimateTemplateCost(params, callback)
 *   Calls the EstimateTemplateCost API operation.
 *   @param params [Object]
 *     * +TemplateBody+ - (<tt>String</tt>) Structure containing the
 *       template body. (For more information, go to the AWS
 *       CloudFormation User Guide.) Conditional: You must pass
 *       TemplateBody or TemplateURL. If both are passed, only
 *       TemplateBody is used.
 *     * +TemplateURL+ - (<tt>String</tt>) Location of file containing
 *       the template body. The URL must point to a template located in
 *       an S3 bucket in the same region as the stack. For more
 *       information, go to the AWS CloudFormation User Guide.
 *       Conditional: You must pass TemplateURL or TemplateBody. If both
 *       are passed, only TemplateBody is used.
 *     * +Parameters+ - (<tt>Array<Object></tt>) A list of Parameter
 *       structures that specify input parameters.
 *       * +ParameterKey+ - (<tt>String</tt>) The key associated with the
 *         parameter.
 *       * +ParameterValue+ - (<tt>String</tt>) The value associated with
 *         the parameter.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Url+ - (<tt>String</tt>) An AWS Simple Monthly Calculator URL
 *         with a query string that describes the resources required to run
 *         the template.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getTemplate(params, callback)
 *   Calls the GetTemplate API operation.
 *   @param params [Object]
 *     * +StackName+ - (*required*, <tt>String</tt>) The name or the
 *       unique identifier associated with the stack.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +TemplateBody+ - (<tt>String</tt>) Structure containing the
 *         template body. (For more information, go to the AWS
 *         CloudFormation User Guide.)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listStackResources(params, callback)
 *   Calls the ListStackResources API operation.
 *   @param params [Object]
 *     * +StackName+ - (*required*, <tt>String</tt>) The name or the
 *       unique identifier associated with the stack. Default: There is
 *       no default value.
 *     * +NextToken+ - (<tt>String</tt>) String that identifies the start
 *       of the next list of stack resource summaries, if there is one.
 *       Default: There is no default value.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StackResourceSummaries+ - (<tt>Array<Object></tt>) A list of
 *         StackResourceSummary structures.
 *         * +LogicalResourceId+ - (<tt>String</tt>) The
 *           logical name of the resource specified in the template.
 *         * +PhysicalResourceId+ - (<tt>String</tt>) The name or unique
 *           identifier that corresponds to a physical instance ID of the
 *           resource.
 *         * +ResourceType+ - (<tt>String</tt>) Type of the
 *           resource. (For more information, go to the AWS CloudFormation
 *           User Guide.)
 *         * +LastUpdatedTimestamp+ - (<tt>Date</tt>) Time the
 *           status was updated.
 *         * +ResourceStatus+ - (<tt>String</tt>) Current
 *           status of the resource.
 *         * +ResourceStatusReason+ - (<tt>String</tt>) Success/failure
 *           message associated with the resource.
 *       * +NextToken+ - (<tt>String</tt>) String that identifies the start
 *         of the next list of events, if there is one.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listStacks(params, callback)
 *   Calls the ListStacks API operation.
 *   @param params [Object]
 *     * +NextToken+ - (<tt>String</tt>) String that identifies the start
 *       of the next list of stacks, if there is one. Default: There is
 *       no default value.
 *     * +StackStatusFilter+ - (<tt>Array<String></tt>) Stack status to
 *       use as a filter. Specify one or more stack status codes to list
 *       only stacks with the specified status codes. For a complete list
 *       of stack status codes, see the StackStatus parameter of the
 *       Stack data type.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StackSummaries+ - (<tt>Array<Object></tt>) A list of
 *         StackSummary structures containing information about the
 *         specified stacks.
 *         * +StackId+ - (<tt>String</tt>) Unique stack identifier.
 *         * +StackName+ - (<tt>String</tt>) The name
 *           associated with the stack.
 *         * +TemplateDescription+ - (<tt>String</tt>) The template
 *           description of the template used to create the stack.
 *         * +CreationTime+ - (<tt>Date</tt>) The time the
 *           stack was created.
 *         * +LastUpdatedTime+ - (<tt>Date</tt>) The time the stack was
 *           last updated. This field will only be returned if the stack
 *           has been updated at least once.
 *         * +DeletionTime+ - (<tt>Date</tt>) The time the stack was
 *           deleted.
 *         * +StackStatus+ - (<tt>String</tt>) The current
 *           status of the stack.
 *         * +StackStatusReason+ - (<tt>String</tt>) Success/Failure
 *           message associated with the stack status.
 *       * +NextToken+ - (<tt>String</tt>) String that identifies the start
 *         of the next list of stacks, if there is one.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateStack(params, callback)
 *   Calls the UpdateStack API operation.
 *   @param params [Object]
 *     * +StackName+ - (*required*, <tt>String</tt>) The name or stack ID
 *       of the stack to update. Must contain only alphanumeric
 *       characters (case sensitive) and start with an alpha character.
 *       Maximum length of the name is 255 characters.
 *     * +TemplateBody+ - (<tt>String</tt>) Structure containing the
 *       template body. (For more information, go to the AWS
 *       CloudFormation User Guide.) Conditional: You must pass
 *       TemplateBody or TemplateURL. If both are passed, only
 *       TemplateBody is used.
 *     * +TemplateURL+ - (<tt>String</tt>) Location of file containing
 *       the template body. The URL must point to a template located in
 *       an S3 bucket in the same region as the stack. For more
 *       information, go to the AWS CloudFormation User Guide.
 *       Conditional: You must pass TemplateURL or TemplateBody. If both
 *       are passed, only TemplateBody is used.
 *     * +Parameters+ - (<tt>Array<Object></tt>) A list of Parameter
 *       structures that specify input parameters for the stack.
 *       * +ParameterKey+ - (<tt>String</tt>) The key associated with the
 *         parameter.
 *       * +ParameterValue+ - (<tt>String</tt>) The value associated with
 *         the parameter.
 *     * +Capabilities+ - (<tt>Array<String></tt>) The list of
 *       capabilities that you want to allow in the stack. If your stack
 *       contains IAM resources, you must specify the CAPABILITY_IAM
 *       value for this parameter; otherwise, this action returns an
 *       InsufficientCapabilities error. IAM resources are the following:
 *       AWS::IAM::AccessKey, AWS::IAM::Group, AWS::IAM::Policy,
 *       AWS::IAM::User, and AWS::IAM::UserToGroupAddition.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StackId+ - (<tt>String</tt>) Unique identifier of the stack.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method validateTemplate(params, callback)
 *   Calls the ValidateTemplate API operation.
 *   @param params [Object]
 *     * +TemplateBody+ - (<tt>String</tt>) String containing the
 *       template body. (For more information, go to the AWS
 *       CloudFormation User Guide.) Conditional: You must pass
 *       TemplateURL or TemplateBody. If both are passed, only
 *       TemplateBody is used.
 *     * +TemplateURL+ - (<tt>String</tt>) Location of file containing
 *       the template body. The URL must point to a template located in
 *       an S3 bucket in the same region as the stack. For more
 *       information, go to the AWS CloudFormation User Guide.
 *       Conditional: You must pass TemplateURL or TemplateBody. If both
 *       are passed, only TemplateBody is used.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Parameters+ - (<tt>Array<Object></tt>) A list of
 *         TemplateParameter structures.
 *         * +ParameterKey+ - (<tt>String</tt>) The name associated with
 *           the parameter.
 *         * +DefaultValue+ - (<tt>String</tt>) The default value
 *           associated with the parameter.
 *         * +NoEcho+ - (<tt>Boolean</tt>) Flag indicating whether the
 *           parameter should be displayed as plain text in logs and UIs.
 *         * +Description+ - (<tt>String</tt>) User defined description
 *           associated with the parameter.
 *       * +Description+ - (<tt>String</tt>) The description found within
 *         the template.
 *       * +Capabilities+ - (<tt>Array<String></tt>) The capabitilites
 *         found within the template. Currently, CAPABILITY_IAM is the only
 *         capability detected. If your template contains IAM resources,
 *         you must specify the CAPABILITY_IAM value for this parameter
 *         when you use the CreateStack or UpdateStack actions with your
 *         template; otherwise, those actions return an
 *         InsufficientCapabilities error.
 *       * +CapabilitiesReason+ - (<tt>String</tt>) The capabilities reason
 *         found within the template.
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
AWS.CloudFormation.Client = inherit({});
