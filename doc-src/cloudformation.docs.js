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
 * ### Sending a Request Using CloudFormation
 *
 * ```js
 * svc = new AWS.CloudFormation();
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
 * @!method cancelUpdateStack(params, callback)
 *   Calls the CancelUpdateStack API operation.
 *   @param params [Object]
 *     * `StackName` &mdash; **required** &mdash; (`String`) The name or
 *       the unique identifier associated with the stack.
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
 * @!method createStack(params, callback)
 *   Calls the CreateStack API operation.
 *   @param params [Object]
 *     * `StackName` &mdash; **required** &mdash; (`String`) The name
 *       associated with the stack. The name must be unique within your
 *       AWS account. Must contain only alphanumeric characters (case
 *       sensitive) and start with an alpha character. Maximum length of
 *       the name is 255 characters.
 *     * `TemplateBody` &mdash; (`String`) Structure containing the
 *       template body. (For more information, go to the AWS
 *       CloudFormation User Guide.) Conditional: You must pass
 *       TemplateBody or TemplateURL. If both are passed, only
 *       TemplateBody is used.
 *     * `TemplateURL` &mdash; (`String`) Location of file containing the
 *       template body. The URL must point to a template (max size:
 *       307,200 bytes) located in an S3 bucket in the same region as the
 *       stack. For more information, go to the AWS CloudFormation User
 *       Guide. Conditional: You must pass TemplateURL or TemplateBody.
 *       If both are passed, only TemplateBody is used.
 *     * `Parameters` &mdash; (`Array<Object>`) A list of Parameter
 *       structures that specify input parameters for the stack.
 *       * `ParameterKey` &mdash; (`String`) The key associated with the
 *         parameter.
 *       * `ParameterValue` &mdash; (`String`) The value associated with
 *         the parameter.
 *     * `DisableRollback` &mdash; (`Boolean`) Set to true to disable
 *       rollback of the stack if stack creation failed. You can specify
 *       either DisableRollback or OnFailure, but not both. Default:
 *       false
 *     * `TimeoutInMinutes` &mdash; (`Integer`) The amount of time that
 *       can pass before the stack status becomes CREATE_FAILED; if
 *       DisableRollback is not set or is set to false, the stack will be
 *       rolled back.
 *     * `NotificationARNs` &mdash; (`Array<String>`) The Simple
 *       Notification Service (SNS) topic ARNs to publish stack related
 *       events. You can find your SNS topic ARNs using the SNS console
 *       or your Command Line Interface (CLI).
 *     * `Capabilities` &mdash; (`Array<String>`) The list of
 *       capabilities that you want to allow in the stack. If your
 *       template contains IAM resources, you must specify the
 *       CAPABILITY_IAM value for this parameter; otherwise, this action
 *       returns an InsufficientCapabilities error. IAM resources are the
 *       following: AWS::IAM::AccessKey, AWS::IAM::Group,
 *       AWS::IAM::Policy, AWS::IAM::User, and
 *       AWS::IAM::UserToGroupAddition.
 *     * `OnFailure` &mdash; (`String`) Determines what action will be
 *       taken if stack creation fails. This must be one of: DO_NOTHING,
 *       ROLLBACK, or DELETE. You can specify either OnFailure or
 *       DisableRollback, but not both. Default: ROLLBACK
 *     * `Tags` &mdash; (`Array<Object>`) A set of user-defined Tags to
 *       associate with this stack, represented by key/value pairs. Tags
 *       defined for the stack are propogated to EC2 resources that are
 *       created as part of the stack. A maximum number of 10 tags can be
 *       specified.
 *       * `Key` &mdash; (`String`) Required. A string used to identify
 *         this tag. You can specify a maximum of 128 characters for a
 *         tag key. Tags owned by Amazon Web Services (AWS) have the
 *         reserved prefix: aws:.
 *       * `Value` &mdash; (`String`) Required. A string containing the
 *         value for this tag. You can specify a maximum of 256
 *         characters for a tag value.
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
 *       * `StackId` &mdash; (`String`) Unique identifier of the stack.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteStack(params, callback)
 *   Calls the DeleteStack API operation.
 *   @param params [Object]
 *     * `StackName` &mdash; **required** &mdash; (`String`) The name or
 *       the unique identifier associated with the stack.
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
 * @!method describeStackEvents(params, callback)
 *   Calls the DescribeStackEvents API operation.
 *   @param params [Object]
 *     * `StackName` &mdash; (`String`) The name or the unique identifier
 *       associated with the stack. Default: There is no default value.
 *     * `NextToken` &mdash; (`String`) String that identifies the start
 *       of the next list of events, if there is one. Default: There is
 *       no default value.
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
 *       * `StackEvents` &mdash; (`Array<Object>`) A list of StackEvents
 *         structures.
 *         * `StackId` &mdash; (`String`) The unique ID name of the
 *           instance of the stack.
 *         * `EventId` &mdash; (`String`) The unique ID of this event.
 *         * `StackName` &mdash; (`String`) The name associated with a
 *           stack.
 *         * `LogicalResourceId` &mdash; (`String`) The logical name of the
 *           resource specified in the template.
 *         * `PhysicalResourceId` &mdash; (`String`) The name or unique
 *           identifier associated with the physical instance of the
 *           resource.
 *         * `ResourceType` &mdash; (`String`) Type of the resource. (For
 *           more information, go to the AWS CloudFormation User Guide.)
 *         * `Timestamp` &mdash; (`Date`) Time the status was updated.
 *         * `ResourceStatus` &mdash; (`String`) Current status of the
 *           resource.
 *         * `ResourceStatusReason` &mdash; (`String`) Success/failure
 *           message associated with the resource.
 *         * `ResourceProperties` &mdash; (`String`) BLOB of the properties
 *           used to create the resource.
 *       * `NextToken` &mdash; (`String`) String that identifies the start
 *         of the next list of events, if there is one.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeStackResource(params, callback)
 *   Calls the DescribeStackResource API operation.
 *   @param params [Object]
 *     * `StackName` &mdash; **required** &mdash; (`String`) The name or
 *       the unique identifier associated with the stack. Default: There
 *       is no default value.
 *     * `LogicalResourceId` &mdash; **required** &mdash; (`String`) The
 *       logical name of the resource as specified in the template.
 *       Default: There is no default value.
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
 *       * `StackResourceDetail` &mdash; (`Object`) A StackResourceDetail
 *         structure containing the description of the specified resource
 *         in the specified stack.
 *         * `StackName` &mdash; (`String`) The name associated with the
 *           stack.
 *         * `StackId` &mdash; (`String`) Unique identifier of the stack.
 *         * `LogicalResourceId` &mdash; (`String`) The logical name of the
 *           resource specified in the template.
 *         * `PhysicalResourceId` &mdash; (`String`) The name or unique
 *           identifier that corresponds to a physical instance ID of a
 *           resource supported by AWS CloudFormation.
 *         * `ResourceType` &mdash; (`String`) Type of the resource. (For
 *           more information, go to the AWS CloudFormation User Guide.)
 *         * `LastUpdatedTimestamp` &mdash; (`Date`) Time the status was
 *           updated.
 *         * `ResourceStatus` &mdash; (`String`) Current status of the
 *           resource.
 *         * `ResourceStatusReason` &mdash; (`String`) Success/failure
 *           message associated with the resource.
 *         * `Description` &mdash; (`String`) User defined description
 *           associated with the resource.
 *         * `Metadata` &mdash; (`String`) The JSON format content of the
 *           Metadata attribute declared for the resource. For more
 *           information, see Metadata Attribute in the AWS CloudFormation
 *           User Guide.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeStackResources(params, callback)
 *   Calls the DescribeStackResources API operation.
 *   @param params [Object]
 *     * `StackName` &mdash; (`String`) The name or the unique identifier
 *       associated with the stack. Required: Conditional. If you do not
 *       specify StackName, you must specify PhysicalResourceId. Default:
 *       There is no default value.
 *     * `LogicalResourceId` &mdash; (`String`) The logical name of the
 *       resource as specified in the template. Default: There is no
 *       default value.
 *     * `PhysicalResourceId` &mdash; (`String`) The name or unique
 *       identifier that corresponds to a physical instance ID of a
 *       resource supported by AWS CloudFormation. For example, for an
 *       Amazon Elastic Compute Cloud (EC2) instance, PhysicalResourceId
 *       corresponds to the InstanceId. You can pass the EC2 InstanceId
 *       to DescribeStackResources to find which stack the instance
 *       belongs to and what other resources are part of the stack.
 *       Required: Conditional. If you do not specify PhysicalResourceId,
 *       you must specify StackName. Default: There is no default value.
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
 *       * `StackResources` &mdash; (`Array<Object>`) A list of
 *         StackResource structures.
 *         * `StackName` &mdash; (`String`) The name associated with the
 *           stack.
 *         * `StackId` &mdash; (`String`) Unique identifier of the stack.
 *         * `LogicalResourceId` &mdash; (`String`) The logical name of the
 *           resource specified in the template.
 *         * `PhysicalResourceId` &mdash; (`String`) The name or unique
 *           identifier that corresponds to a physical instance ID of a
 *           resource supported by AWS CloudFormation.
 *         * `ResourceType` &mdash; (`String`) Type of the resource. (For
 *           more information, go to the AWS CloudFormation User Guide.)
 *         * `Timestamp` &mdash; (`Date`) Time the status was updated.
 *         * `ResourceStatus` &mdash; (`String`) Current status of the
 *           resource.
 *         * `ResourceStatusReason` &mdash; (`String`) Success/failure
 *           message associated with the resource.
 *         * `Description` &mdash; (`String`) User defined description
 *           associated with the resource.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeStacks(params, callback)
 *   Calls the DescribeStacks API operation.
 *   @param params [Object]
 *     * `StackName` &mdash; (`String`) The name or the unique identifier
 *       associated with the stack. Default: There is no default value.
 *     * `NextToken` &mdash; (`String`)
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
 *       * `Stacks` &mdash; (`Array<Object>`) A list of stack structures.
 *         * `StackId` &mdash; (`String`) Unique identifier of the stack.
 *         * `StackName` &mdash; (`String`) The name associated with the
 *           stack.
 *         * `Description` &mdash; (`String`) User defined description
 *           associated with the stack.
 *         * `Parameters` &mdash; (`Array<Object>`) A list of Parameter
 *           structures.
 *           * `ParameterKey` &mdash; (`String`) The key associated with
 *             the parameter.
 *           * `ParameterValue` &mdash; (`String`) The value associated
 *             with the parameter.
 *         * `CreationTime` &mdash; (`Date`) Time at which the stack was
 *           created.
 *         * `LastUpdatedTime` &mdash; (`Date`) The time the stack was last
 *           updated. This field will only be returned if the stack has
 *           been updated at least once.
 *         * `StackStatus` &mdash; (`String`) Current status of the stack.
 *         * `StackStatusReason` &mdash; (`String`) Success/failure message
 *           associated with the stack status.
 *         * `DisableRollback` &mdash; (`Boolean`) Boolean to enable or
 *           disable rollback on stack creation failures: true: disable
 *           rollback false: enable rollback
 *         * `NotificationARNs` &mdash; (`Array<String>`) SNS topic ARNs to
 *           which stack related events are published.
 *         * `TimeoutInMinutes` &mdash; (`Integer`) The amount of time
 *           within which stack creation should complete.
 *         * `Capabilities` &mdash; (`Array<String>`) The capabilities
 *           allowed in the stack.
 *         * `Outputs` &mdash; (`Array<Object>`) A list of output
 *           structures.
 *           * `OutputKey` &mdash; (`String`) The key associated with the
 *             output.
 *           * `OutputValue` &mdash; (`String`) The value associated with
 *             the output.
 *           * `Description` &mdash; (`String`) User defined description
 *             associated with the output.
 *         * `Tags` &mdash; (`Array<Object>`) A list of Tags that specify
 *           cost allocation information for the stack.
 *           * `Key` &mdash; (`String`) Required. A string used to identify
 *             this tag. You can specify a maximum of 128 characters for a
 *             tag key. Tags owned by Amazon Web Services (AWS) have the
 *             reserved prefix: aws:.
 *           * `Value` &mdash; (`String`) Required. A string containing the
 *             value for this tag. You can specify a maximum of 256
 *             characters for a tag value.
 *       * `NextToken` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method estimateTemplateCost(params, callback)
 *   Calls the EstimateTemplateCost API operation.
 *   @param params [Object]
 *     * `TemplateBody` &mdash; (`String`) Structure containing the
 *       template body. (For more information, go to the AWS
 *       CloudFormation User Guide.) Conditional: You must pass
 *       TemplateBody or TemplateURL. If both are passed, only
 *       TemplateBody is used.
 *     * `TemplateURL` &mdash; (`String`) Location of file containing the
 *       template body. The URL must point to a template located in an S3
 *       bucket in the same region as the stack. For more information, go
 *       to the AWS CloudFormation User Guide. Conditional: You must pass
 *       TemplateURL or TemplateBody. If both are passed, only
 *       TemplateBody is used.
 *     * `Parameters` &mdash; (`Array<Object>`) A list of Parameter
 *       structures that specify input parameters.
 *       * `ParameterKey` &mdash; (`String`) The key associated with the
 *         parameter.
 *       * `ParameterValue` &mdash; (`String`) The value associated with
 *         the parameter.
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
 *       * `Url` &mdash; (`String`) An AWS Simple Monthly Calculator URL
 *         with a query string that describes the resources required to run
 *         the template.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getTemplate(params, callback)
 *   Calls the GetTemplate API operation.
 *   @param params [Object]
 *     * `StackName` &mdash; **required** &mdash; (`String`) The name or
 *       the unique identifier associated with the stack.
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
 *       * `TemplateBody` &mdash; (`String`) Structure containing the
 *         template body. (For more information, go to the AWS
 *         CloudFormation User Guide.)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listStackResources(params, callback)
 *   Calls the ListStackResources API operation.
 *   @param params [Object]
 *     * `StackName` &mdash; **required** &mdash; (`String`) The name or
 *       the unique identifier associated with the stack. Default: There
 *       is no default value.
 *     * `NextToken` &mdash; (`String`) String that identifies the start
 *       of the next list of stack resource summaries, if there is one.
 *       Default: There is no default value.
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
 *       * `StackResourceSummaries` &mdash; (`Array<Object>`) A list of
 *         StackResourceSummary structures.
 *         * `LogicalResourceId` &mdash; (`String`) The logical name of the
 *           resource specified in the template.
 *         * `PhysicalResourceId` &mdash; (`String`) The name or unique
 *           identifier that corresponds to a physical instance ID of the
 *           resource.
 *         * `ResourceType` &mdash; (`String`) Type of the resource. (For
 *           more information, go to the AWS CloudFormation User Guide.)
 *         * `LastUpdatedTimestamp` &mdash; (`Date`) Time the status was
 *           updated.
 *         * `ResourceStatus` &mdash; (`String`) Current status of the
 *           resource.
 *         * `ResourceStatusReason` &mdash; (`String`) Success/failure
 *           message associated with the resource.
 *       * `NextToken` &mdash; (`String`) String that identifies the start
 *         of the next list of events, if there is one.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listStacks(params, callback)
 *   Calls the ListStacks API operation.
 *   @param params [Object]
 *     * `NextToken` &mdash; (`String`) String that identifies the start
 *       of the next list of stacks, if there is one. Default: There is
 *       no default value.
 *     * `StackStatusFilter` &mdash; (`Array<String>`) Stack status to
 *       use as a filter. Specify one or more stack status codes to list
 *       only stacks with the specified status codes. For a complete list
 *       of stack status codes, see the StackStatus parameter of the
 *       Stack data type.
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
 *       * `StackSummaries` &mdash; (`Array<Object>`) A list of
 *         StackSummary structures containing information about the
 *         specified stacks.
 *         * `StackId` &mdash; (`String`) Unique stack identifier.
 *         * `StackName` &mdash; (`String`) The name associated with the
 *           stack.
 *         * `TemplateDescription` &mdash; (`String`) The template
 *           description of the template used to create the stack.
 *         * `CreationTime` &mdash; (`Date`) The time the stack was
 *           created.
 *         * `LastUpdatedTime` &mdash; (`Date`) The time the stack was last
 *           updated. This field will only be returned if the stack has
 *           been updated at least once.
 *         * `DeletionTime` &mdash; (`Date`) The time the stack was
 *           deleted.
 *         * `StackStatus` &mdash; (`String`) The current status of the
 *           stack.
 *         * `StackStatusReason` &mdash; (`String`) Success/Failure message
 *           associated with the stack status.
 *       * `NextToken` &mdash; (`String`) String that identifies the start
 *         of the next list of stacks, if there is one.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateStack(params, callback)
 *   Calls the UpdateStack API operation.
 *   @param params [Object]
 *     * `StackName` &mdash; **required** &mdash; (`String`) The name or
 *       stack ID of the stack to update. Must contain only alphanumeric
 *       characters (case sensitive) and start with an alpha character.
 *       Maximum length of the name is 255 characters.
 *     * `TemplateBody` &mdash; (`String`) Structure containing the
 *       template body. (For more information, go to the AWS
 *       CloudFormation User Guide.) Conditional: You must pass
 *       TemplateBody or TemplateURL. If both are passed, only
 *       TemplateBody is used.
 *     * `TemplateURL` &mdash; (`String`) Location of file containing the
 *       template body. The URL must point to a template located in an S3
 *       bucket in the same region as the stack. For more information, go
 *       to the AWS CloudFormation User Guide. Conditional: You must pass
 *       TemplateURL or TemplateBody. If both are passed, only
 *       TemplateBody is used.
 *     * `Parameters` &mdash; (`Array<Object>`) A list of Parameter
 *       structures that specify input parameters for the stack.
 *       * `ParameterKey` &mdash; (`String`) The key associated with the
 *         parameter.
 *       * `ParameterValue` &mdash; (`String`) The value associated with
 *         the parameter.
 *     * `Capabilities` &mdash; (`Array<String>`) The list of
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
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `StackId` &mdash; (`String`) Unique identifier of the stack.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method validateTemplate(params, callback)
 *   Calls the ValidateTemplate API operation.
 *   @param params [Object]
 *     * `TemplateBody` &mdash; (`String`) String containing the template
 *       body. (For more information, go to the AWS CloudFormation User
 *       Guide.) Conditional: You must pass TemplateURL or TemplateBody.
 *       If both are passed, only TemplateBody is used.
 *     * `TemplateURL` &mdash; (`String`) Location of file containing the
 *       template body. The URL must point to a template (max size:
 *       307,200 bytes) located in an S3 bucket in the same region as the
 *       stack. For more information, go to the AWS CloudFormation User
 *       Guide. Conditional: You must pass TemplateURL or TemplateBody.
 *       If both are passed, only TemplateBody is used.
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
 *       * `Parameters` &mdash; (`Array<Object>`) A list of
 *         TemplateParameter structures.
 *         * `ParameterKey` &mdash; (`String`) The name associated with the
 *           parameter.
 *         * `DefaultValue` &mdash; (`String`) The default value associated
 *           with the parameter.
 *         * `NoEcho` &mdash; (`Boolean`) Flag indicating whether the
 *           parameter should be displayed as plain text in logs and UIs.
 *         * `Description` &mdash; (`String`) User defined description
 *           associated with the parameter.
 *       * `Description` &mdash; (`String`) The description found within
 *         the template.
 *       * `Capabilities` &mdash; (`Array<String>`) The capabitilites found
 *         within the template. Currently, CAPABILITY_IAM is the only
 *         capability detected. If your template contains IAM resources,
 *         you must specify the CAPABILITY_IAM value for this parameter
 *         when you use the CreateStack or UpdateStack actions with your
 *         template; otherwise, those actions return an
 *         InsufficientCapabilities error.
 *       * `CapabilitiesReason` &mdash; (`String`) The capabilities reason
 *         found within the template.
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
AWS.CloudFormation.Client = inherit({});
