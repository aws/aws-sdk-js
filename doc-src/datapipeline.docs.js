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
 * ### Sending a Request Using DataPipeline
 *
 * ```js
 * svc = new AWS.DataPipeline();
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
 *   @option (see AWS.DataPipeline.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.DataPipeline.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.DataPipeline.Client
 *
 */
AWS.DataPipeline = inherit({})

/**
 * The low-level DataPipeline client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method activatePipeline(params, callback)
 *   Calls the ActivatePipeline API operation.
 *   @param params [Object]
 *     * `pipelineId` &mdash; **required** &mdash; (`String`) The
 *       identifier of the pipeline to activate.
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
 * @!method createPipeline(params, callback)
 *   Calls the CreatePipeline API operation.
 *   @param params [Object]
 *     * `name` &mdash; **required** &mdash; (`String`) The name of the
 *       new pipeline. You can use the same name for multiple pipelines
 *       associated with your AWS account, because AWS Data Pipeline
 *       assigns each new pipeline a unique pipeline identifier.
 *     * `uniqueId` &mdash; **required** &mdash; (`String`) A unique
 *       identifier that you specify. This identifier is not the same as
 *       the pipeline identifier assigned by AWS Data Pipeline. You are
 *       responsible for defining the format and ensuring the uniqueness
 *       of this identifier. You use this parameter to ensure idempotency
 *       during repeated calls to CreatePipeline. For example, if the
 *       first call to CreatePipeline does not return a clear success,
 *       you can pass in the same unique identifier and pipeline name
 *       combination on a subsequent call to CreatePipeline.
 *       CreatePipeline ensures that if a pipeline already exists with
 *       the same name and unique identifier, a new pipeline will not be
 *       created. Instead, you'll receive the pipeline identifier from
 *       the previous attempt. The uniqueness of the name and unique
 *       identifier combination is scoped to the AWS account or IAM user
 *       credentials.
 *     * `description` &mdash; (`String`) The description of the new
 *       pipeline.
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
 *       * `pipelineId` &mdash; (`String`) The ID that AWS Data Pipeline
 *         assigns the newly created pipeline. The ID is a string of the
 *         form: df-06372391ZG65EXAMPLE.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deletePipeline(params, callback)
 *   Calls the DeletePipeline API operation.
 *   @param params [Object]
 *     * `pipelineId` &mdash; **required** &mdash; (`String`) The
 *       identifier of the pipeline to be deleted.
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
 * @!method describeObjects(params, callback)
 *   Calls the DescribeObjects API operation.
 *   @param params [Object]
 *     * `pipelineId` &mdash; **required** &mdash; (`String`) Identifier
 *       of the pipeline that contains the object definitions.
 *     * `objectIds` &mdash; **required** &mdash; (`Array<String>`)
 *       Identifiers of the pipeline objects that contain the definitions
 *       to be described. You can pass as many as 25 identifiers in a
 *       single call to DescribeObjects
 *     * `evaluateExpressions` &mdash; (`Boolean`)
 *     * `marker` &mdash; (`String`) The starting point for the results
 *       to be returned. The first time you call DescribeObjects, this
 *       value should be empty. As long as the action returns
 *       HasMoreResults as True, you can call DescribeObjects again and
 *       pass the marker value from the response to retrieve the next set
 *       of results.
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
 *       * `pipelineObjects` &mdash; (`Array<Object>`) An array of object
 *         definitions that are returned by the call to DescribeObjects.
 *         * `id` &mdash; (`String`) Identifier of the object.
 *         * `name` &mdash; (`String`) Name of the object.
 *         * `fields` &mdash; (`Array<Object>`) Key-value pairs that define
 *           the properties of the object.
 *           * `key` &mdash; (`String`) The field identifier.
 *           * `stringValue` &mdash; (`String`) The field value, expressed
 *             as a String.
 *           * `refValue` &mdash; (`String`) The field value, expressed as
 *             the identifier of another object.
 *       * `marker` &mdash; (`String`) The starting point for the next page
 *         of results. To view the next page of results, call
 *         DescribeObjects again with this marker value.
 *       * `hasMoreResults` &mdash; (`Boolean`) If True, there are more
 *         pages of results to return.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describePipelines(params, callback)
 *   Calls the DescribePipelines API operation.
 *   @param params [Object]
 *     * `pipelineIds` &mdash; **required** &mdash; (`Array<String>`)
 *       Identifiers of the pipelines to describe. You can pass as many
 *       as 25 identifiers in a single call to DescribePipelines. You can
 *       obtain pipeline identifiers by calling ListPipelines.
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
 *       * `pipelineDescriptionList` &mdash; (`Array<Object>`) An array of
 *         descriptions returned for the specified pipelines.
 *         * `pipelineId` &mdash; (`String`) The pipeline identifier that
 *           was assigned by AWS Data Pipeline. This is a string of the
 *           form df-297EG78HU43EEXAMPLE.
 *         * `name` &mdash; (`String`) Name of the pipeline.
 *         * `fields` &mdash; (`Array<Object>`) A list of read-only fields
 *           that contain metadata about the pipeline: @userId, @accountId,
 *           and @pipelineState.
 *           * `key` &mdash; (`String`) The field identifier.
 *           * `stringValue` &mdash; (`String`) The field value, expressed
 *             as a String.
 *           * `refValue` &mdash; (`String`) The field value, expressed as
 *             the identifier of another object.
 *         * `description` &mdash; (`String`) Description of the pipeline.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method evaluateExpression(params, callback)
 *   Calls the EvaluateExpression API operation.
 *   @param params [Object]
 *     * `pipelineId` &mdash; **required** &mdash; (`String`) The
 *       identifier of the pipeline.
 *     * `objectId` &mdash; **required** &mdash; (`String`) The
 *       identifier of the object.
 *     * `expression` &mdash; **required** &mdash; (`String`) The
 *       expression to evaluate.
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
 *       * `evaluatedExpression` &mdash; (`String`) The evaluated
 *         expression.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getPipelineDefinition(params, callback)
 *   Calls the GetPipelineDefinition API operation.
 *   @param params [Object]
 *     * `pipelineId` &mdash; **required** &mdash; (`String`) The
 *       identifier of the pipeline.
 *     * `version` &mdash; (`String`) The version of the pipeline
 *       definition to retrieve.
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
 *       * `pipelineObjects` &mdash; (`Array<Object>`) An array of objects
 *         defined in the pipeline.
 *         * `id` &mdash; (`String`) Identifier of the object.
 *         * `name` &mdash; (`String`) Name of the object.
 *         * `fields` &mdash; (`Array<Object>`) Key-value pairs that define
 *           the properties of the object.
 *           * `key` &mdash; (`String`) The field identifier.
 *           * `stringValue` &mdash; (`String`) The field value, expressed
 *             as a String.
 *           * `refValue` &mdash; (`String`) The field value, expressed as
 *             the identifier of another object.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listPipelines(params, callback)
 *   Calls the ListPipelines API operation.
 *   @param params [Object]
 *     * `marker` &mdash; (`String`) The starting point for the results
 *       to be returned. The first time you call ListPipelines, this
 *       value should be empty. As long as the action returns
 *       HasMoreResults as True, you can call ListPipelines again and
 *       pass the marker value from the response to retrieve the next set
 *       of results.
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
 *       * `pipelineIdList` &mdash; (`Array<Object>`) A list of all the
 *         pipeline identifiers that your account has permission to access.
 *         If you require additional information about the pipelines, you
 *         can use these identifiers to call DescribePipelines and
 *         GetPipelineDefinition.
 *         * `id` &mdash; (`String`) Identifier of the pipeline that was
 *           assigned by AWS Data Pipeline. This is a string of the form
 *           df-297EG78HU43EEXAMPLE.
 *         * `name` &mdash; (`String`) Name of the pipeline.
 *       * `marker` &mdash; (`String`) If not null, indicates the starting
 *         point for the set of pipeline identifiers that the next call to
 *         ListPipelines will retrieve. If null, there are no more pipeline
 *         identifiers. .
 *       * `hasMoreResults` &mdash; (`Boolean`) If True, there are more
 *         results that can be obtained by a subsequent call to
 *         ListPipelines.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method pollForTask(params, callback)
 *   Calls the PollForTask API operation.
 *   @param params [Object]
 *     * `workerGroup` &mdash; **required** &mdash; (`String`) Indicates
 *       the type of task the task runner is configured to accept and
 *       process. The worker group is set as a field on objects in the
 *       pipeline when they are created. You can only specify a single
 *       value for workerGroup in the call to PollForTask. There are no
 *       wildcard values permitted in workerGroup, the string must be an
 *       exact, case-sensitive, match.
 *     * `hostname` &mdash; (`String`) The public DNS name of the calling
 *       task runner.
 *     * `instanceIdentity` &mdash; (`Object`) Identity information for
 *       the Amazon EC2 instance that is hosting the task runner. You can
 *       get this value by calling the URI,
 *       http://169.254.169.254/latest/meta-data/instance-id, from the
 *       EC2 instance. For more information, go to Instance Metadata in
 *       the Amazon Elastic Compute Cloud User Guide. Passing in this
 *       value proves that your task runner is running on an EC2
 *       instance, and ensures the proper AWS Data Pipeline service
 *       charges are applied to your pipeline.
 *       * `document` &mdash; (`String`) A description of an Amazon EC2
 *         instance that is generated when the instance is launched and
 *         exposed to the instance via the instance meta-data service in
 *         the form of a JSON representation of an object.
 *       * `signature` &mdash; (`String`) A signature which can be used
 *         to verify the accuracy and authenticity of the information
 *         provided in the instance identity document.
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
 *       * `taskObject` &mdash; (`Object`) An instance of
 *         PollForTaskResult, which contains an instance of TaskObject. The
 *         returned object contains all the information needed to complete
 *         the task that is being assigned to the task runner. One of the
 *         fields returned in this object is taskId, which contains an
 *         identifier for the task being assigned. The calling task runner
 *         uses taskId in subsequent calls to ReportTaskProgress and
 *         SetTaskStatus.
 *         * `taskId` &mdash; (`String`) An internal identifier for the
 *           task. This ID is passed to the SetTaskStatus and
 *           ReportTaskProgress actions.
 *         * `pipelineId` &mdash; (`String`) Identifier of the pipeline
 *           that provided the task.
 *         * `attemptId` &mdash; (`String`) Identifier of the pipeline task
 *           attempt object. AWS Data Pipeline uses this value to track how
 *           many times a task is attempted.
 *         * `objects` &mdash; (`Object<Object>`) Connection information
 *           for the location where the task runner will publish the output
 *           of the task.
 *           * `id` &mdash; (`String`) Identifier of the object.
 *           * `name` &mdash; (`String`) Name of the object.
 *           * `fields` &mdash; (`Array<Object>`) Key-value pairs that
 *             define the properties of the object.
 *             * `key` &mdash; (`String`) The field identifier.
 *             * `stringValue` &mdash; (`String`) The field value,
 *               expressed as a String.
 *             * `refValue` &mdash; (`String`) The field value, expressed
 *               as the identifier of another object.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method putPipelineDefinition(params, callback)
 *   Calls the PutPipelineDefinition API operation.
 *   @param params [Object]
 *     * `pipelineId` &mdash; **required** &mdash; (`String`) The
 *       identifier of the pipeline to be configured.
 *     * `pipelineObjects` &mdash; **required** &mdash; (`Array<Object>`)
 *       The objects that define the pipeline. These will overwrite the
 *       existing pipeline definition.
 *       * `id` &mdash; **required** &mdash; (`String`) Identifier of the
 *         object.
 *       * `name` &mdash; **required** &mdash; (`String`) Name of the
 *         object.
 *       * `fields` &mdash; **required** &mdash; (`Array<Object>`)
 *         Key-value pairs that define the properties of the object.
 *         * `key` &mdash; **required** &mdash; (`String`) The field
 *           identifier.
 *         * `stringValue` &mdash; (`String`) The field value, expressed
 *           as a String.
 *         * `refValue` &mdash; (`String`) The field value, expressed as
 *           the identifier of another object.
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
 *       * `validationErrors` &mdash; (`Array<Object>`) A list of the
 *         validation errors that are associated with the objects defined
 *         in pipelineObjects.
 *         * `id` &mdash; (`String`) The identifier of the object that
 *           contains the validation error.
 *         * `errors` &mdash; (`Array<String>`) A description of the
 *           validation error.
 *       * `errored` &mdash; (`Boolean`) If True, there were validation
 *         errors. If errored is True, the pipeline definition is stored
 *         but cannot be activated until you correct the pipeline and call
 *         PutPipelineDefinition to commit the corrected pipeline.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method queryObjects(params, callback)
 *   Calls the QueryObjects API operation.
 *   @param params [Object]
 *     * `pipelineId` &mdash; **required** &mdash; (`String`) Identifier
 *       of the pipeline to be queried for object names.
 *     * `query` &mdash; (`Object`) Query that defines the objects to be
 *       returned. The Query object can contain a maximum of ten
 *       selectors. The conditions in the query are limited to top-level
 *       String fields in the object. These filters can be applied to
 *       components, instances, and attempts.
 *       * `selectors` &mdash; (`Array<Object>`) List of selectors that
 *         define the query. An object must satisfy all of the selectors
 *         to match the query.
 *         * `fieldName` &mdash; (`String`) The name of the field that
 *           the operator will be applied to. The field name is the "key"
 *           portion of the field definition in the pipeline definition
 *           syntax that is used by the AWS Data Pipeline API. If the
 *           field is not set on the object, the condition fails.
 *         * `operator` &mdash; (`Object`)
 *           * `type` &mdash; (`String`) The logical operation to be
 *             performed: equal (EQ), equal reference (REF_EQ), less than
 *             or equal (LE), greater than or equal (GE), or between
 *             (BETWEEN). Equal reference (REF_EQ) can be used only with
 *             reference fields. The other comparison types can be used
 *             only with String fields. The comparison types you can use
 *             apply only to certain object fields, as detailed below.
 *             The comparison operators EQ and REF_EQ act on the
 *             following fields: name @sphere parent @componentParent
 *             @instanceParent @status @scheduledStartTime
 *             @scheduledEndTime @actualStartTime @actualEndTime The
 *             comparison operators GE, LE, and BETWEEN act on the
 *             following fields: @scheduledStartTime @scheduledEndTime
 *             @actualStartTime @actualEndTime Note that fields beginning
 *             with the at sign (@) are read-only and set by the web
 *             service. When you name fields, you should choose names
 *             containing only alpha-numeric values, as symbols may be
 *             reserved by AWS Data Pipeline. A best practice for
 *             user-defined fields that you add to a pipeline is to
 *             prefix their name with the string "my".
 *           * `values` &mdash; (`Array<String>`) The value that the
 *             actual field value will be compared with.
 *     * `sphere` &mdash; **required** &mdash; (`String`) Specifies
 *       whether the query applies to components or instances. Allowable
 *       values: COMPONENT, INSTANCE, ATTEMPT.
 *     * `marker` &mdash; (`String`) The starting point for the results
 *       to be returned. The first time you call QueryObjects, this value
 *       should be empty. As long as the action returns HasMoreResults as
 *       True, you can call QueryObjects again and pass the marker value
 *       from the response to retrieve the next set of results.
 *     * `limit` &mdash; (`Integer`) Specifies the maximum number of
 *       object names that QueryObjects will return in a single call. The
 *       default value is 100.
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
 *       * `ids` &mdash; (`Array<String>`) A list of identifiers that match
 *         the query selectors.
 *       * `marker` &mdash; (`String`) The starting point for the results
 *         to be returned. As long as the action returns HasMoreResults as
 *         True, you can call QueryObjects again and pass the marker value
 *         from the response to retrieve the next set of results.
 *       * `hasMoreResults` &mdash; (`Boolean`) If True, there are more
 *         results that can be obtained by a subsequent call to
 *         QueryObjects.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method reportTaskProgress(params, callback)
 *   Calls the ReportTaskProgress API operation.
 *   @param params [Object]
 *     * `taskId` &mdash; **required** &mdash; (`String`) Identifier of
 *       the task assigned to the task runner. This value is provided in
 *       the TaskObject that the service returns with the response for
 *       the PollForTask action.
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
 *       * `canceled` &mdash; (`Boolean`) If True, the calling task runner
 *         should cancel processing of the task. The task runner does not
 *         need to call SetTaskStatus for canceled tasks.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method reportTaskRunnerHeartbeat(params, callback)
 *   Calls the ReportTaskRunnerHeartbeat API operation.
 *   @param params [Object]
 *     * `taskrunnerId` &mdash; **required** &mdash; (`String`) The
 *       identifier of the task runner. This value should be unique
 *       across your AWS account. In the case of AWS Data Pipeline Task
 *       Runner launched on a resource managed by AWS Data Pipeline, the
 *       web service provides a unique identifier when it launches the
 *       application. If you have written a custom task runner, you
 *       should assign a unique identifier for the task runner.
 *     * `workerGroup` &mdash; (`String`) Indicates the type of task the
 *       task runner is configured to accept and process. The worker
 *       group is set as a field on objects in the pipeline when they are
 *       created. You can only specify a single value for workerGroup in
 *       the call to ReportTaskRunnerHeartbeat. There are no wildcard
 *       values permitted in workerGroup, the string must be an exact,
 *       case-sensitive, match.
 *     * `hostname` &mdash; (`String`) The public DNS name of the calling
 *       task runner.
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
 *       * `terminate` &mdash; (`Boolean`) Indicates whether the calling
 *         task runner should terminate. If True, the task runner that
 *         called ReportTaskRunnerHeartbeat should terminate.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method setStatus(params, callback)
 *   Calls the SetStatus API operation.
 *   @param params [Object]
 *     * `pipelineId` &mdash; **required** &mdash; (`String`) Identifies
 *       the pipeline that contains the objects.
 *     * `objectIds` &mdash; **required** &mdash; (`Array<String>`)
 *       Identifies an array of objects. The corresponding objects can be
 *       either physical or components, but not a mix of both types.
 *     * `status` &mdash; **required** &mdash; (`String`) Specifies the
 *       status to be set on all the objects in objectIds. For
 *       components, this can be either PAUSE or RESUME. For instances,
 *       this can be either CANCEL, RERUN, or MARK_FINISHED.
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
 * @!method setTaskStatus(params, callback)
 *   Calls the SetTaskStatus API operation.
 *   @param params [Object]
 *     * `taskId` &mdash; **required** &mdash; (`String`) Identifies the
 *       task assigned to the task runner. This value is set in the
 *       TaskObject that is returned by the PollForTask action.
 *     * `taskStatus` &mdash; **required** &mdash; (`String`) If
 *       FINISHED, the task successfully completed. If FAILED the task
 *       ended unsuccessfully. The FALSE value is used by preconditions.
 *     * `errorCode` &mdash; (`Integer`) If an error occurred during the
 *       task, specifies a numerical value that represents the error.
 *       This value is set on the physical attempt object. It is used to
 *       display error information to the user. The web service does not
 *       parse this value.
 *     * `errorMessage` &mdash; (`String`) If an error occurred during
 *       the task, specifies a text description of the error. This value
 *       is set on the physical attempt object. It is used to display
 *       error information to the user. The web service does not parse
 *       this value.
 *     * `errorStackTrace` &mdash; (`String`) If an error occurred during
 *       the task, specifies the stack trace associated with the error.
 *       This value is set on the physical attempt object. It is used to
 *       display error information to the user. The web service does not
 *       parse this value.
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
 * @!method validatePipelineDefinition(params, callback)
 *   Calls the ValidatePipelineDefinition API operation.
 *   @param params [Object]
 *     * `pipelineId` &mdash; **required** &mdash; (`String`) Identifies
 *       the pipeline whose definition is to be validated.
 *     * `pipelineObjects` &mdash; **required** &mdash; (`Array<Object>`)
 *       A list of objects that define the pipeline changes to validate
 *       against the pipeline.
 *       * `id` &mdash; **required** &mdash; (`String`) Identifier of the
 *         object.
 *       * `name` &mdash; **required** &mdash; (`String`) Name of the
 *         object.
 *       * `fields` &mdash; **required** &mdash; (`Array<Object>`)
 *         Key-value pairs that define the properties of the object.
 *         * `key` &mdash; **required** &mdash; (`String`) The field
 *           identifier.
 *         * `stringValue` &mdash; (`String`) The field value, expressed
 *           as a String.
 *         * `refValue` &mdash; (`String`) The field value, expressed as
 *           the identifier of another object.
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
 *       * `validationErrors` &mdash; (`Array<Object>`) Lists the
 *         validation errors that were found by ValidatePipelineDefinition.
 *         * `id` &mdash; (`String`) The identifier of the object that
 *           contains the validation error.
 *         * `errors` &mdash; (`Array<String>`) A description of the
 *           validation error.
 *       * `errored` &mdash; (`Boolean`) If True, there were validation
 *         errors.
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
AWS.DataPipeline.Client = inherit({});
