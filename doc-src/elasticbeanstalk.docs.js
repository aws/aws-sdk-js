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
 * === Sending a Request Using ElasticBeanstalk
 *
 *   svc = new AWS.ElasticBeanstalk();
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
 *   @option (see AWS.ElasticBeanstalk.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.ElasticBeanstalk.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.ElasticBeanstalk.Client
 *
 */
AWS.ElasticBeanstalk = inherit({})

/**
 * The low-level ElasticBeanstalk client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method checkDNSAvailability(params, callback)
 *   Calls the CheckDNSAvailability API operation.
 *   @param params [Object]
 *     * +CNAMEPrefix+ - (*required*, <tt>String</tt>) The prefix used
 *       when this CNAME is reserved.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Available+ - (<tt>Boolean</tt>) Indicates if the specified
 *         CNAME is available: true : The CNAME is available. true : The
 *         CNAME is not available. true : The CNAME is available. false :
 *         The CNAME is not available.
 *       * +FullyQualifiedCNAME+ - (<tt>String</tt>) The fully qualified
 *         CNAME to reserve when CreateEnvironment is called with the
 *         provided prefix.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createApplication(params, callback)
 *   Calls the CreateApplication API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (*required*, <tt>String</tt>) The name of
 *       the application. Constraint: This name must be unique within
 *       your account. If the specified name already exists, the action
 *       returns an InvalidParameterValue error.
 *     * +Description+ - (<tt>String</tt>) Describes the application.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Application+ - (<tt>Object</tt>) The ApplicationDescription of
 *         the application.
 *         * +ApplicationName+ - (<tt>String</tt>) The name of the
 *           application.
 *         * +Description+ - (<tt>String</tt>) User-defined description of
 *           the application.
 *         * +DateCreated+ - (<tt>Date</tt>) The date when the application
 *           was created.
 *         * +DateUpdated+ - (<tt>Date</tt>) The date when the application
 *           was last modified.
 *         * +Versions+ - (<tt>Array<String></tt>) The names of the
 *           versions for this application.
 *         * +ConfigurationTemplates+ - (<tt>Array<String></tt>) The names
 *           of the configuration templates associated with this
 *           application.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createApplicationVersion(params, callback)
 *   Calls the CreateApplicationVersion API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (*required*, <tt>String</tt>) The name of
 *       the application. If no application is found with this name, and
 *       AutoCreateApplication is false, returns an InvalidParameterValue
 *       error.
 *     * +VersionLabel+ - (*required*, <tt>String</tt>) A label
 *       identifying this version. Constraint: Must be unique per
 *       application. If an application version already exists with this
 *       label for the specified application, &service; returns an
 *       InvalidParameterValue error.
 *     * +Description+ - (<tt>String</tt>) Describes this version.
 *     * +SourceBundle+ - (<tt>Object</tt>) The Amazon S3 bucket and key
 *       that identify the location of the source bundle for this
 *       version. If data found at the Amazon S3 location exceeds the
 *       maximum allowed source bundle size, &service; returns an
 *       InvalidParameterValue error. Default: If not specified,
 *       &service; uses a sample application. If only partially specified
 *       (for example, a bucket is provided but not the key) or if no
 *       data is found at the Amazon S3 location, &service; returns an
 *       InvalidParameterCombination error.
 *       * +S3Bucket+ - (<tt>String</tt>) The Amazon S3 bucket where the
 *         data is located.
 *       * +S3Key+ - (<tt>String</tt>) The Amazon S3 key where the data
 *         is located.
 *     * +AutoCreateApplication+ - (<tt>Boolean</tt>) Determines how the
 *       system behaves if the specified application for this version
 *       does not already exist: true: Automatically creates the
 *       specified application for this version if it does not already
 *       exist. false: Returns an InvalidParameterValue if the specified
 *       application for this version does not already exist. true :
 *       Automatically creates the specified application for this release
 *       if it does not already exist. false : Throws an
 *       InvalidParameterValue if the specified application for this
 *       release does not already exist. Default: false Valid Values:
 *       true | false
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ApplicationVersion+ - (<tt>Object</tt>) The
 *         ApplicationVersionDescription of the application version.
 *         * +ApplicationName+ - (<tt>String</tt>) The name of the
 *           application associated with this release.
 *         * +Description+ - (<tt>String</tt>) The description of this
 *           application version.
 *         * +VersionLabel+ - (<tt>String</tt>) A label uniquely
 *           identifying the version for the associated application.
 *         * +SourceBundle+ - (<tt>Object</tt>) The location where the
 *           source bundle is located for this version.
 *           * +S3Bucket+ - (<tt>String</tt>) The Amazon S3 bucket where
 *             the data is located.
 *           * +S3Key+ - (<tt>String</tt>) The Amazon S3 key where the data
 *             is located.
 *         * +DateCreated+ - (<tt>Date</tt>) The creation date of the
 *           application version.
 *         * +DateUpdated+ - (<tt>Date</tt>) The last modified date of the
 *           application version.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createConfigurationTemplate(params, callback)
 *   Calls the CreateConfigurationTemplate API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (*required*, <tt>String</tt>) The name of
 *       the application to associate with this configuration template.
 *       If no application is found with this name, &serviceshort;
 *       returns an InvalidParameterValue error.
 *     * +TemplateName+ - (*required*, <tt>String</tt>) The name of the
 *       configuration template. Constraint: This name must be unique per
 *       application. Default: If a configuration template already exists
 *       with this name, &service; returns an InvalidParameterValue
 *       error.
 *     * +SolutionStackName+ - (<tt>String</tt>) The name of the solution
 *       stack used by this configuration. The solution stack specifies
 *       the operating system, architecture, and application server for a
 *       configuration template. It determines the set of configuration
 *       options as well as the possible and default values. Use
 *       ListAvailableSolutionStacks to obtain a list of available
 *       solution stacks. Default: If the SolutionStackName is not
 *       specified and the source configuration parameter is blank,
 *       &service; uses the default solution stack. If not specified and
 *       the source configuration parameter is specified, &service; uses
 *       the same solution stack as the source configuration template.
 *     * +SourceConfiguration+ - (<tt>Object</tt>) If specified,
 *       &service; uses the configuration values from the specified
 *       configuration template to create a new configuration. Values
 *       specified in the OptionSettings parameter of this call overrides
 *       any values obtained from the SourceConfiguration. If no
 *       configuration template is found, returns an
 *       InvalidParameterValue error. Constraint: If both the solution
 *       stack name parameter and the source configuration parameters are
 *       specified, the solution stack of the source configuration
 *       template must match the specified solution stack name or else
 *       &service; returns an InvalidParameterCombination error.
 *       * +ApplicationName+ - (<tt>String</tt>) The name of the
 *         application associated with the configuration.
 *       * +TemplateName+ - (<tt>String</tt>) The name of the
 *         configuration template.
 *     * +EnvironmentId+ - (<tt>String</tt>) The ID of the environment
 *       used with this configuration template.
 *     * +Description+ - (<tt>String</tt>) Describes this configuration.
 *     * +OptionSettings+ - (<tt>Array<Object></tt>) If specified,
 *       &service; sets the specified configuration option to the
 *       requested value. The new value overrides the value obtained from
 *       the solution stack or the source configuration template.
 *       * +Namespace+ - (<tt>String</tt>) A unique namespace identifying
 *         the option's associated AWS resource.
 *       * +OptionName+ - (<tt>String</tt>) The name of the configuration
 *         option.
 *       * +Value+ - (<tt>String</tt>) The current value for the
 *         configuration option.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SolutionStackName+ - (<tt>String</tt>) The name of the solution
 *         stack this configuration set uses.
 *       * +ApplicationName+ - (<tt>String</tt>) The name of the
 *         application associated with this configuration set.
 *       * +TemplateName+ - (<tt>String</tt>) If not null, the name of the
 *         configuration template for this configuration set.
 *       * +Description+ - (<tt>String</tt>) Describes this configuration
 *         set.
 *       * +EnvironmentName+ - (<tt>String</tt>) If not null, the name of
 *         the environment for this configuration set.
 *       * +DeploymentStatus+ - (<tt>String</tt>) If this configuration set
 *         is associated with an environment, the DeploymentStatus
 *         parameter indicates the deployment status of this configuration
 *         set: null: This configuration is not associated with a running
 *         environment. pending: This is a draft configuration that is not
 *         deployed to the associated environment but is in the process of
 *         deploying. deployed: This is the configuration that is currently
 *         deployed to the associated running environment. failed: This is
 *         a draft configuration, that failed to successfully deploy. null:
 *         This configuration is not associated with a running environment.
 *         pending: This is a draft configuration that is not deployed to
 *         the associated environment but is in the process of deploying.
 *         deployed: This is the configuration that is currently deployed
 *         to the associated running environment. failed: This is a draft
 *         configuration that failed to successfully deploy.
 *       * +DateCreated+ - (<tt>Date</tt>) The date (in UTC time) when this
 *         configuration set was created.
 *       * +DateUpdated+ - (<tt>Date</tt>) The date (in UTC time) when this
 *         configuration set was last modified.
 *       * +OptionSettings+ - (<tt>Array<Object></tt>) A list of the
 *         configuration options and their values in this configuration
 *         set.
 *         * +Namespace+ - (<tt>String</tt>) A unique namespace identifying
 *           the option's associated AWS resource.
 *         * +OptionName+ - (<tt>String</tt>) The name of the configuration
 *           option.
 *         * +Value+ - (<tt>String</tt>) The current value for the
 *           configuration option.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createEnvironment(params, callback)
 *   Calls the CreateEnvironment API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (*required*, <tt>String</tt>) The name of
 *       the application that contains the version to be deployed. If no
 *       application is found with this name, CreateEnvironment returns
 *       an InvalidParameterValue error.
 *     * +VersionLabel+ - (<tt>String</tt>) The name of the application
 *       version to deploy. If the specified application has no
 *       associated application versions, &service; UpdateEnvironment
 *       returns an InvalidParameterValue error. Default: If not
 *       specified, &service; attempts to launch the most recently
 *       created application version.
 *     * +EnvironmentName+ - (*required*, <tt>String</tt>) A unique name
 *       for the deployment environment. Used in the application URL.
 *       Constraint: Must be from 4 to 23 characters in length. The name
 *       can contain only letters, numbers, and hyphens. It cannot start
 *       or end with a hyphen. This name must be unique in your account.
 *       If the specified name already exists, &service; returns an
 *       InvalidParameterValue error. Default: If the CNAME parameter is
 *       not specified, the environment name becomes part of the CNAME,
 *       and therefore part of the visible URL for your application.
 *     * +TemplateName+ - (<tt>String</tt>) The name of the configuration
 *       template to use in deployment. If no configuration template is
 *       found with this name, &service; returns an InvalidParameterValue
 *       error. Condition: You must specify either this parameter or a
 *       SolutionStackName, but not both. If you specify both, &service;
 *       returns an InvalidParameterCombination error. If you do not
 *       specify either, &service; returns a MissingRequiredParameter
 *       error.
 *     * +SolutionStackName+ - (<tt>String</tt>) This is an alternative
 *       to specifying a configuration name. If specified, &service; sets
 *       the configuration values to the default values associated with
 *       the specified solution stack. Condition: You must specify either
 *       this or a TemplateName, but not both. If you specify both,
 *       &service; returns an InvalidParameterCombination error. If you
 *       do not specify either, &service; returns a
 *       MissingRequiredParameter error.
 *     * +CNAMEPrefix+ - (<tt>String</tt>) If specified, the environment
 *       attempts to use this value as the prefix for the CNAME. If not
 *       specified, the environment uses the environment name.
 *     * +Description+ - (<tt>String</tt>) Describes this environment.
 *     * +OptionSettings+ - (<tt>Array<Object></tt>) If specified,
 *       &service; sets the specified configuration options to the
 *       requested value in the configuration set for the new
 *       environment. These override the values obtained from the
 *       solution stack or the configuration template.
 *       * +Namespace+ - (<tt>String</tt>) A unique namespace identifying
 *         the option's associated AWS resource.
 *       * +OptionName+ - (<tt>String</tt>) The name of the configuration
 *         option.
 *       * +Value+ - (<tt>String</tt>) The current value for the
 *         configuration option.
 *     * +OptionsToRemove+ - (<tt>Array<Object></tt>) A list of custom
 *       user-defined configuration options to remove from the
 *       configuration set for this new environment.
 *       * +Namespace+ - (<tt>String</tt>) A unique namespace identifying
 *         the option's associated AWS resource.
 *       * +OptionName+ - (<tt>String</tt>) The name of the configuration
 *         option.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +EnvironmentName+ - (<tt>String</tt>) The name of this
 *         environment.
 *       * +EnvironmentId+ - (<tt>String</tt>) The ID of this environment.
 *       * +ApplicationName+ - (<tt>String</tt>) The name of the
 *         application associated with this environment.
 *       * +VersionLabel+ - (<tt>String</tt>) The application version
 *         deployed in this environment.
 *       * +SolutionStackName+ - (<tt>String</tt>) The name of the
 *         SolutionStack deployed with this environment.
 *       * +TemplateName+ - (<tt>String</tt>) The name of the configuration
 *         template used to originally launch this environment.
 *       * +Description+ - (<tt>String</tt>) Describes this environment.
 *       * +EndpointURL+ - (<tt>String</tt>) The URL to the LoadBalancer
 *         for this environment.
 *       * +CNAME+ - (<tt>String</tt>) The URL to the CNAME for this
 *         environment.
 *       * +DateCreated+ - (<tt>Date</tt>) The creation date for this
 *         environment.
 *       * +DateUpdated+ - (<tt>Date</tt>) The last modified date for this
 *         environment.
 *       * +Status+ - (<tt>String</tt>) The current operational status of
 *         the environment: Launching: Environment is in the process of
 *         initial deployment. Updating: Environment is in the process of
 *         updating its configuration settings or application version.
 *         Ready: Environment is available to have an action performed on
 *         it, such as update or terminate. Terminating: Environment is in
 *         the shut-down process. Terminated: Environment is not running.
 *       * +Health+ - (<tt>String</tt>) Describes the health status of the
 *         environment. &service; indicates the failure levels for a
 *         running environment: Red : Indicates the environment is not
 *         working. Yellow: Indicates that something is wrong, the
 *         application might not be available, but the instances appear
 *         running. Green: Indicates the environment is healthy and fully
 *         functional. Red: Indicates the environment is not responsive.
 *         Occurs when three or more consecutive failures occur for an
 *         environment. Yellow: Indicates that something is wrong. Occurs
 *         when two consecutive failures occur for an environment. Green:
 *         Indicates the environment is healthy and fully functional. Grey:
 *         Default health for a new environment. The environment is not
 *         fully launched and health checks have not started or health
 *         checks are suspended during an UpdateEnvironment or
 *         RestartEnvironement request. Default: Grey
 *       * +Resources+ - (<tt>Object</tt>) The description of the AWS
 *         resources used by this environment.
 *         * +LoadBalancer+ - (<tt>Object</tt>) Describes the LoadBalancer.
 *           * +LoadBalancerName+ - (<tt>String</tt>) The name of the
 *             LoadBalancer.
 *           * +Domain+ - (<tt>String</tt>) The domain name of the
 *             LoadBalancer.
 *           * +Listeners+ - (<tt>Array<Object></tt>) A list of Listeners
 *             used by the LoadBalancer.
 *             * +Protocol+ - (<tt>String</tt>) The protocol that is used
 *               by the Listener.
 *             * +Port+ - (<tt>Integer</tt>) The port that is used by the
 *               Listener.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createStorageLocation(params, callback)
 *   Calls the CreateStorageLocation API operation.
 *   @param params [Object]
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +S3Bucket+ - (<tt>String</tt>) The name of the Amazon S3 bucket
 *         created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteApplication(params, callback)
 *   Calls the DeleteApplication API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (*required*, <tt>String</tt>) The name of
 *       the application to delete.
 *     * +TerminateEnvByForce+ - (<tt>Boolean</tt>) When set to true,
 *       running environments will be terminated before deleting the
 *       application.
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
 * @!method deleteApplicationVersion(params, callback)
 *   Calls the DeleteApplicationVersion API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (*required*, <tt>String</tt>) The name of
 *       the application to delete releases from.
 *     * +VersionLabel+ - (*required*, <tt>String</tt>) The label of the
 *       version to delete.
 *     * +DeleteSourceBundle+ - (<tt>Boolean</tt>) Indicates whether to
 *       delete the associated source bundle from Amazon S3: true: An
 *       attempt is made to delete the associated Amazon S3 source bundle
 *       specified at time of creation. false: No action is taken on the
 *       Amazon S3 source bundle specified at time of creation. Valid
 *       Values: true | false
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
 * @!method deleteConfigurationTemplate(params, callback)
 *   Calls the DeleteConfigurationTemplate API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (*required*, <tt>String</tt>) The name of
 *       the application to delete the configuration template from.
 *     * +TemplateName+ - (*required*, <tt>String</tt>) The name of the
 *       configuration template to delete.
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
 * @!method deleteEnvironmentConfiguration(params, callback)
 *   Calls the DeleteEnvironmentConfiguration API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (*required*, <tt>String</tt>) The name of
 *       the application the environment is associated with.
 *     * +EnvironmentName+ - (*required*, <tt>String</tt>) The name of
 *       the environment to delete the draft configuration from.
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
 * @!method describeApplicationVersions(params, callback)
 *   Calls the DescribeApplicationVersions API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (<tt>String</tt>) If specified, &service;
 *       restricts the returned descriptions to only include ones that
 *       are associated with the specified application.
 *     * +VersionLabels+ - (<tt>Array<String></tt>) If specified,
 *       restricts the returned descriptions to only include ones that
 *       have the specified version labels.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ApplicationVersions+ - (<tt>Array<Object></tt>) A list of
 *         ApplicationVersionDescription .
 *         * +ApplicationName+ - (<tt>String</tt>) The name of the
 *           application associated with this release.
 *         * +Description+ - (<tt>String</tt>) The description of this
 *           application version.
 *         * +VersionLabel+ - (<tt>String</tt>) A label uniquely
 *           identifying the version for the associated application.
 *         * +SourceBundle+ - (<tt>Object</tt>) The location where the
 *           source bundle is located for this version.
 *           * +S3Bucket+ - (<tt>String</tt>) The Amazon S3 bucket where
 *             the data is located.
 *           * +S3Key+ - (<tt>String</tt>) The Amazon S3 key where the data
 *             is located.
 *         * +DateCreated+ - (<tt>Date</tt>) The creation date of the
 *           application version.
 *         * +DateUpdated+ - (<tt>Date</tt>) The last modified date of the
 *           application version.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeApplications(params, callback)
 *   Calls the DescribeApplications API operation.
 *   @param params [Object]
 *     * +ApplicationNames+ - (<tt>Array<String></tt>) If specified,
 *       &service; restricts the returned descriptions to only include
 *       those with the specified names.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Applications+ - (<tt>Array<Object></tt>) This parameter
 *         contains a list of ApplicationDescription.
 *         * +ApplicationName+ - (<tt>String</tt>) The name of the
 *           application.
 *         * +Description+ - (<tt>String</tt>) User-defined description of
 *           the application.
 *         * +DateCreated+ - (<tt>Date</tt>) The date when the application
 *           was created.
 *         * +DateUpdated+ - (<tt>Date</tt>) The date when the application
 *           was last modified.
 *         * +Versions+ - (<tt>Array<String></tt>) The names of the
 *           versions for this application.
 *         * +ConfigurationTemplates+ - (<tt>Array<String></tt>) The names
 *           of the configuration templates associated with this
 *           application.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeConfigurationOptions(params, callback)
 *   Calls the DescribeConfigurationOptions API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (<tt>String</tt>) The name of the
 *       application associated with the configuration template or
 *       environment. Only needed if you want to describe the
 *       configuration options associated with either the configuration
 *       template or environment.
 *     * +TemplateName+ - (<tt>String</tt>) The name of the configuration
 *       template whose configuration options you want to describe.
 *     * +EnvironmentName+ - (<tt>String</tt>) The name of the
 *       environment whose configuration options you want to describe.
 *     * +SolutionStackName+ - (<tt>String</tt>) The name of the solution
 *       stack whose configuration options you want to describe.
 *     * +Options+ - (<tt>Array<Object></tt>) If specified, restricts the
 *       descriptions to only the specified options.
 *       * +Namespace+ - (<tt>String</tt>) A unique namespace identifying
 *         the option's associated AWS resource.
 *       * +OptionName+ - (<tt>String</tt>) The name of the configuration
 *         option.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SolutionStackName+ - (<tt>String</tt>) The name of the solution
 *         stack these configuration options belong to.
 *       * +Options+ - (<tt>Array<Object></tt>) A list of
 *         ConfigurationOptionDescription.
 *         * +Namespace+ - (<tt>String</tt>) A unique namespace identifying
 *           the option's associated AWS resource.
 *         * +Name+ - (<tt>String</tt>) The name of the configuration
 *           option.
 *         * +DefaultValue+ - (<tt>String</tt>) The default value for this
 *           configuration option.
 *         * +ChangeSeverity+ - (<tt>String</tt>) An indication of which
 *           action is required if the value for this configuration option
 *           changes: NoInterruption - There is no interruption to the
 *           environment or application availability. RestartEnvironment -
 *           The environment is restarted, all AWS resources are deleted
 *           and recreated, and the environment is unavailable during the
 *           process. RestartApplicationServer - The environment is
 *           available the entire time. However, a short application outage
 *           occurs when the application servers on the running Amazon EC2
 *           instances are restarted. NoInterruption : There is no
 *           interruption to the environment or application availability.
 *           RestartEnvironment : The environment is entirely restarted,
 *           all AWS resources are deleted and recreated, and the
 *           environment is unavailable during the process.
 *           RestartApplicationServer : The environment is available the
 *           entire time. However, a short application outage occurs when
 *           the application servers on the running Amazon EC2 instances
 *           are restarted.
 *         * +UserDefined+ - (<tt>Boolean</tt>) An indication of whether
 *           the user defined this configuration option: true : This
 *           configuration option was defined by the user. It is a valid
 *           choice for specifying this as an Option to Remove when
 *           updating configuration settings. false : This configuration
 *           was not defined by the user. true : This configuration option
 *           was defined by the user. It is a valid choice for specifying
 *           if this as an Option to Remove when updating configuration
 *           settings. false : This configuration was not defined by the
 *           user. Constraint: You can remove only UserDefined options from
 *           a configuration. Valid Values: true | false
 *         * +ValueType+ - (<tt>String</tt>) An indication of which type of
 *           values this option has and whether it is allowable to select
 *           one or more than one of the possible values: Scalar : Values
 *           for this option are a single selection from the possible
 *           values, or a unformatted string or numeric value governed by
 *           the MIN/MAX/Regex constraints: List : Values for this option
 *           are multiple selections of the possible values. Boolean :
 *           Values for this option are either true or false . Scalar :
 *           Values for this option are a single selection from the
 *           possible values, or an unformatted string, or numeric value
 *           governed by the MIN/MAX/Regex constraints. List : Values for
 *           this option are multiple selections from the possible values.
 *           Boolean : Values for this option are either true or false .
 *         * +ValueOptions+ - (<tt>Array<String></tt>) If specified, values
 *           for the configuration option are selected from this list.
 *         * +MinValue+ - (<tt>Integer</tt>) If specified, the
 *           configuration option must be a numeric value greater than this
 *           value.
 *         * +MaxValue+ - (<tt>Integer</tt>) If specified, the
 *           configuration option must be a numeric value less than this
 *           value.
 *         * +MaxLength+ - (<tt>Integer</tt>) If specified, the
 *           configuration option must be a string value no longer than
 *           this value.
 *         * +Regex+ - (<tt>Object</tt>) If specified, the configuration
 *           option must be a string value that satisfies this regular
 *           expression.
 *           * +Pattern+ - (<tt>String</tt>) The regular expression pattern
 *             that a string configuration option value with this
 *             restriction must match.
 *           * +Label+ - (<tt>String</tt>) A unique name representing this
 *             regular expression.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeConfigurationSettings(params, callback)
 *   Calls the DescribeConfigurationSettings API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (*required*, <tt>String</tt>) The
 *       application for the environment or configuration template.
 *     * +TemplateName+ - (<tt>String</tt>) The name of the configuration
 *       template to describe. Conditional: You must specify either this
 *       parameter or an EnvironmentName, but not both. If you specify
 *       both, AWS Elastic Beanstalk returns an
 *       InvalidParameterCombination error. If you do not specify either,
 *       AWS Elastic Beanstalk returns a MissingRequiredParameter error.
 *     * +EnvironmentName+ - (<tt>String</tt>) The name of the
 *       environment to describe. Condition: You must specify either this
 *       or a TemplateName, but not both. If you specify both, AWS
 *       Elastic Beanstalk returns an InvalidParameterCombination error.
 *       If you do not specify either, AWS Elastic Beanstalk returns
 *       MissingRequiredParameter error.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ConfigurationSettings+ - (<tt>Array<Object></tt>) A list of
 *         ConfigurationSettingsDescription.
 *         * +SolutionStackName+ - (<tt>String</tt>) The name of the
 *           solution stack this configuration set uses.
 *         * +ApplicationName+ - (<tt>String</tt>) The name of the
 *           application associated with this configuration set.
 *         * +TemplateName+ - (<tt>String</tt>) If not null, the name of
 *           the configuration template for this configuration set.
 *         * +Description+ - (<tt>String</tt>) Describes this configuration
 *           set.
 *         * +EnvironmentName+ - (<tt>String</tt>) If not null, the name of
 *           the environment for this configuration set.
 *         * +DeploymentStatus+ - (<tt>String</tt>) If this configuration
 *           set is associated with an environment, the DeploymentStatus
 *           parameter indicates the deployment status of this
 *           configuration set: null: This configuration is not associated
 *           with a running environment. pending: This is a draft
 *           configuration that is not deployed to the associated
 *           environment but is in the process of deploying. deployed: This
 *           is the configuration that is currently deployed to the
 *           associated running environment. failed: This is a draft
 *           configuration, that failed to successfully deploy. null: This
 *           configuration is not associated with a running environment.
 *           pending: This is a draft configuration that is not deployed to
 *           the associated environment but is in the process of deploying.
 *           deployed: This is the configuration that is currently deployed
 *           to the associated running environment. failed: This is a draft
 *           configuration that failed to successfully deploy.
 *         * +DateCreated+ - (<tt>Date</tt>) The date (in UTC time) when
 *           this configuration set was created.
 *         * +DateUpdated+ - (<tt>Date</tt>) The date (in UTC time) when
 *           this configuration set was last modified.
 *         * +OptionSettings+ - (<tt>Array<Object></tt>) A list of the
 *           configuration options and their values in this configuration
 *           set.
 *           * +Namespace+ - (<tt>String</tt>) A unique namespace
 *             identifying the option's associated AWS resource.
 *           * +OptionName+ - (<tt>String</tt>) The name of the
 *             configuration option.
 *           * +Value+ - (<tt>String</tt>) The current value for the
 *             configuration option.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeEnvironmentResources(params, callback)
 *   Calls the DescribeEnvironmentResources API operation.
 *   @param params [Object]
 *     * +EnvironmentId+ - (<tt>String</tt>) The ID of the environment to
 *       retrieve AWS resource usage data. Condition: You must specify
 *       either this or an EnvironmentName, or both. If you do not
 *       specify either, AWS Elastic Beanstalk returns
 *       MissingRequiredParameter error.
 *     * +EnvironmentName+ - (<tt>String</tt>) The name of the
 *       environment to retrieve AWS resource usage data. Condition: You
 *       must specify either this or an EnvironmentId, or both. If you do
 *       not specify either, AWS Elastic Beanstalk returns
 *       MissingRequiredParameter error.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +EnvironmentResources+ - (<tt>Object</tt>) A list of
 *         EnvironmentResourceDescription.
 *         * +EnvironmentName+ - (<tt>String</tt>) The name of the
 *           environment.
 *         * +AutoScalingGroups+ - (<tt>Array<Object></tt>) The
 *           AutoScalingGroups used by this environment.
 *           * +Name+ - (<tt>String</tt>) The name of the AutoScalingGroup
 *             .
 *         * +Instances+ - (<tt>Array<Object></tt>) The Amazon EC2
 *           instances used by this environment.
 *           * +Id+ - (<tt>String</tt>) The ID of the Amazon EC2 instance.
 *         * +LaunchConfigurations+ - (<tt>Array<Object></tt>) The Auto
 *           Scaling launch configurations in use by this environment.
 *           * +Name+ - (<tt>String</tt>) The name of the launch
 *             configuration.
 *         * +LoadBalancers+ - (<tt>Array<Object></tt>) The LoadBalancers
 *           in use by this environment.
 *           * +Name+ - (<tt>String</tt>) The name of the LoadBalancer.
 *         * +Triggers+ - (<tt>Array<Object></tt>) The AutoScaling triggers
 *           in use by this environment.
 *           * +Name+ - (<tt>String</tt>) The name of the trigger.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeEnvironments(params, callback)
 *   Calls the DescribeEnvironments API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (<tt>String</tt>) If specified, &service;
 *       restricts the returned descriptions to include only those that
 *       are associated with this application.
 *     * +VersionLabel+ - (<tt>String</tt>) If specified, &service;
 *       restricts the returned descriptions to include only those that
 *       are associated with this application version.
 *     * +EnvironmentIds+ - (<tt>Array<String></tt>) If specified,
 *       &service; restricts the returned descriptions to include only
 *       those that have the specified IDs.
 *     * +EnvironmentNames+ - (<tt>Array<String></tt>) If specified,
 *       &service; restricts the returned descriptions to include only
 *       those that have the specified names.
 *     * +IncludeDeleted+ - (<tt>Boolean</tt>) Indicates whether to
 *       include deleted environments: true: Environments that have been
 *       deleted after IncludedDeletedBackTo are displayed. false: Do not
 *       include deleted environments.
 *     * +IncludedDeletedBackTo+ - (<tt>Date</tt>) If specified when
 *       IncludeDeleted is set to true, then environments deleted after
 *       this date are displayed.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Environments+ - (<tt>Array<Object></tt>) Returns an
 *         EnvironmentDescription list.
 *         * +EnvironmentName+ - (<tt>String</tt>) The name of this
 *           environment.
 *         * +EnvironmentId+ - (<tt>String</tt>) The ID of this
 *           environment.
 *         * +ApplicationName+ - (<tt>String</tt>) The name of the
 *           application associated with this environment.
 *         * +VersionLabel+ - (<tt>String</tt>) The application version
 *           deployed in this environment.
 *         * +SolutionStackName+ - (<tt>String</tt>) The name of the
 *           SolutionStack deployed with this environment.
 *         * +TemplateName+ - (<tt>String</tt>) The name of the
 *           configuration template used to originally launch this
 *           environment.
 *         * +Description+ - (<tt>String</tt>) Describes this environment.
 *         * +EndpointURL+ - (<tt>String</tt>) The URL to the LoadBalancer
 *           for this environment.
 *         * +CNAME+ - (<tt>String</tt>) The URL to the CNAME for this
 *           environment.
 *         * +DateCreated+ - (<tt>Date</tt>) The creation date for this
 *           environment.
 *         * +DateUpdated+ - (<tt>Date</tt>) The last modified date for
 *           this environment.
 *         * +Status+ - (<tt>String</tt>) The current operational status of
 *           the environment: Launching: Environment is in the process of
 *           initial deployment. Updating: Environment is in the process of
 *           updating its configuration settings or application version.
 *           Ready: Environment is available to have an action performed on
 *           it, such as update or terminate. Terminating: Environment is
 *           in the shut-down process. Terminated: Environment is not
 *           running.
 *         * +Health+ - (<tt>String</tt>) Describes the health status of
 *           the environment. &service; indicates the failure levels for a
 *           running environment: Red : Indicates the environment is not
 *           working. Yellow: Indicates that something is wrong, the
 *           application might not be available, but the instances appear
 *           running. Green: Indicates the environment is healthy and fully
 *           functional. Red: Indicates the environment is not responsive.
 *           Occurs when three or more consecutive failures occur for an
 *           environment. Yellow: Indicates that something is wrong. Occurs
 *           when two consecutive failures occur for an environment. Green:
 *           Indicates the environment is healthy and fully functional.
 *           Grey: Default health for a new environment. The environment is
 *           not fully launched and health checks have not started or
 *           health checks are suspended during an UpdateEnvironment or
 *           RestartEnvironement request. Default: Grey
 *         * +Resources+ - (<tt>Object</tt>) The description of the AWS
 *           resources used by this environment.
 *           * +LoadBalancer+ - (<tt>Object</tt>) Describes the
 *             LoadBalancer.
 *             * +LoadBalancerName+ - (<tt>String</tt>) The name of the
 *               LoadBalancer.
 *             * +Domain+ - (<tt>String</tt>) The domain name of the
 *               LoadBalancer.
 *             * +Listeners+ - (<tt>Array<Object></tt>) A list of Listeners
 *               used by the LoadBalancer.
 *               * +Protocol+ - (<tt>String</tt>) The protocol that is used
 *                 by the Listener.
 *               * +Port+ - (<tt>Integer</tt>) The port that is used by the
 *                 Listener.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeEvents(params, callback)
 *   Calls the DescribeEvents API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (<tt>String</tt>) If specified, &service;
 *       restricts the returned descriptions to include only those
 *       associated with this application.
 *     * +VersionLabel+ - (<tt>String</tt>) If specified, &service;
 *       restricts the returned descriptions to those associated with
 *       this application version.
 *     * +TemplateName+ - (<tt>String</tt>) If specified, &service;
 *       restricts the returned descriptions to those that are associated
 *       with this environment configuration.
 *     * +EnvironmentId+ - (<tt>String</tt>) If specified, &service;
 *       restricts the returned descriptions to those associated with
 *       this environment.
 *     * +EnvironmentName+ - (<tt>String</tt>) If specified, &service;
 *       restricts the returned descriptions to those associated with
 *       this environment.
 *     * +RequestId+ - (<tt>String</tt>) If specified, &service;
 *       restricts the described events to include only those associated
 *       with this request ID.
 *     * +Severity+ - (<tt>String</tt>) If specified, limits the events
 *       returned from this call to include only those with the specified
 *       severity or higher.
 *     * +StartTime+ - (<tt>Date</tt>) If specified, &service; restricts
 *       the returned descriptions to those that occur on or after this
 *       time.
 *     * +EndTime+ - (<tt>Date</tt>) If specified, &service; restricts
 *       the returned descriptions to those that occur up to, but not
 *       including, the EndTime.
 *     * +MaxRecords+ - (<tt>Integer</tt>) Specifies the maximum number
 *       of events that can be returned, beginning with the most recent
 *       event.
 *     * +NextToken+ - (<tt>String</tt>) Pagination token. If specified,
 *       the events return the next batch of results.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Events+ - (<tt>Array<Object></tt>) A list of EventDescription.
 *         * +EventDate+ - (<tt>Date</tt>) The date when the event
 *           occurred.
 *         * +Message+ - (<tt>String</tt>) The event message.
 *         * +ApplicationName+ - (<tt>String</tt>) The application
 *           associated with the event.
 *         * +VersionLabel+ - (<tt>String</tt>) The release label for the
 *           application version associated with this event.
 *         * +TemplateName+ - (<tt>String</tt>) The name of the
 *           configuration associated with this event.
 *         * +EnvironmentName+ - (<tt>String</tt>) The name of the
 *           environment associated with this event.
 *         * +RequestId+ - (<tt>String</tt>) The web service request ID for
 *           the activity of this event.
 *         * +Severity+ - (<tt>String</tt>) The severity level of this
 *           event.
 *       * +NextToken+ - (<tt>String</tt>) If returned, this indicates that
 *         there are more results to obtain. Use this token in the next
 *         DescribeEvents call to get the next batch of events.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listAvailableSolutionStacks(params, callback)
 *   Calls the ListAvailableSolutionStacks API operation.
 *   @param params [Object]
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SolutionStacks+ - (<tt>Array<String></tt>) A list of available
 *         solution stacks.
 *       * +SolutionStackDetails+ - (<tt>Array<Object></tt>) A list of
 *         available solution stacks and their SolutionStackDescription.
 *         * +SolutionStackName+ - (<tt>String</tt>) The name of the
 *           solution stack.
 *         * +PermittedFileTypes+ - (<tt>Array<String></tt>) The permitted
 *           file types allowed for a solution stack.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method rebuildEnvironment(params, callback)
 *   Calls the RebuildEnvironment API operation.
 *   @param params [Object]
 *     * +EnvironmentId+ - (<tt>String</tt>) The ID of the environment to
 *       rebuild. Condition: You must specify either this or an
 *       EnvironmentName, or both. If you do not specify either, AWS
 *       Elastic Beanstalk returns MissingRequiredParameter error.
 *     * +EnvironmentName+ - (<tt>String</tt>) The name of the
 *       environment to rebuild. Condition: You must specify either this
 *       or an EnvironmentId, or both. If you do not specify either, AWS
 *       Elastic Beanstalk returns MissingRequiredParameter error.
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
 * @!method requestEnvironmentInfo(params, callback)
 *   Calls the RequestEnvironmentInfo API operation.
 *   @param params [Object]
 *     * +EnvironmentId+ - (<tt>String</tt>) The ID of the environment of
 *       the requested data. If no such environment is found,
 *       RequestEnvironmentInfo returns an InvalidParameterValue error.
 *       Condition: You must specify either this or an EnvironmentName,
 *       or both. If you do not specify either, AWS Elastic Beanstalk
 *       returns MissingRequiredParameter error.
 *     * +EnvironmentName+ - (<tt>String</tt>) The name of the
 *       environment of the requested data. If no such environment is
 *       found, RequestEnvironmentInfo returns an InvalidParameterValue
 *       error. Condition: You must specify either this or an
 *       EnvironmentId, or both. If you do not specify either, AWS
 *       Elastic Beanstalk returns MissingRequiredParameter error.
 *     * +InfoType+ - (*required*, <tt>String</tt>) The type of
 *       information to request.
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
 * @!method restartAppServer(params, callback)
 *   Calls the RestartAppServer API operation.
 *   @param params [Object]
 *     * +EnvironmentId+ - (<tt>String</tt>) The ID of the environment to
 *       restart the server for. Condition: You must specify either this
 *       or an EnvironmentName, or both. If you do not specify either,
 *       AWS Elastic Beanstalk returns MissingRequiredParameter error.
 *     * +EnvironmentName+ - (<tt>String</tt>) The name of the
 *       environment to restart the server for. Condition: You must
 *       specify either this or an EnvironmentId, or both. If you do not
 *       specify either, AWS Elastic Beanstalk returns
 *       MissingRequiredParameter error.
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
 * @!method retrieveEnvironmentInfo(params, callback)
 *   Calls the RetrieveEnvironmentInfo API operation.
 *   @param params [Object]
 *     * +EnvironmentId+ - (<tt>String</tt>) The ID of the data's
 *       environment. If no such environment is found, returns an
 *       InvalidParameterValue error. Condition: You must specify either
 *       this or an EnvironmentName, or both. If you do not specify
 *       either, AWS Elastic Beanstalk returns MissingRequiredParameter
 *       error.
 *     * +EnvironmentName+ - (<tt>String</tt>) The name of the data's
 *       environment. If no such environment is found, returns an
 *       InvalidParameterValue error. Condition: You must specify either
 *       this or an EnvironmentId, or both. If you do not specify either,
 *       AWS Elastic Beanstalk returns MissingRequiredParameter error.
 *     * +InfoType+ - (*required*, <tt>String</tt>) The type of
 *       information to retrieve.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +EnvironmentInfo+ - (<tt>Array<Object></tt>) The
 *         EnvironmentInfoDescription of the environment.
 *         * +InfoType+ - (<tt>String</tt>) The type of information
 *           retrieved.
 *         * +Ec2InstanceId+ - (<tt>String</tt>) The Amazon EC2 Instance ID
 *           for this information.
 *         * +SampleTimestamp+ - (<tt>Date</tt>) The time stamp when this
 *           information was retrieved.
 *         * +Message+ - (<tt>String</tt>) The retrieved information.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method swapEnvironmentCNAMEs(params, callback)
 *   Calls the SwapEnvironmentCNAMEs API operation.
 *   @param params [Object]
 *     * +SourceEnvironmentId+ - (<tt>String</tt>) The ID of the source
 *       environment. Condition: You must specify at least the
 *       SourceEnvironmentID or the SourceEnvironmentName. You may also
 *       specify both. If you specify the SourceEnvironmentId, you must
 *       specify the DestinationEnvironmentId.
 *     * +SourceEnvironmentName+ - (<tt>String</tt>) The name of the
 *       source environment. Condition: You must specify at least the
 *       SourceEnvironmentID or the SourceEnvironmentName. You may also
 *       specify both. If you specify the SourceEnvironmentName, you must
 *       specify the DestinationEnvironmentName.
 *     * +DestinationEnvironmentId+ - (<tt>String</tt>) The ID of the
 *       destination environment. Condition: You must specify at least
 *       the DestinationEnvironmentID or the DestinationEnvironmentName.
 *       You may also specify both. You must specify the
 *       SourceEnvironmentId with the DestinationEnvironmentId.
 *     * +DestinationEnvironmentName+ - (<tt>String</tt>) The name of the
 *       destination environment. Condition: You must specify at least
 *       the DestinationEnvironmentID or the DestinationEnvironmentName.
 *       You may also specify both. You must specify the
 *       SourceEnvironmentName with the DestinationEnvironmentName.
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
 * @!method terminateEnvironment(params, callback)
 *   Calls the TerminateEnvironment API operation.
 *   @param params [Object]
 *     * +EnvironmentId+ - (<tt>String</tt>) The ID of the environment to
 *       terminate. Condition: You must specify either this or an
 *       EnvironmentName, or both. If you do not specify either, AWS
 *       Elastic Beanstalk returns MissingRequiredParameter error.
 *     * +EnvironmentName+ - (<tt>String</tt>) The name of the
 *       environment to terminate. Condition: You must specify either
 *       this or an EnvironmentId, or both. If you do not specify either,
 *       AWS Elastic Beanstalk returns MissingRequiredParameter error.
 *     * +TerminateResources+ - (<tt>Boolean</tt>) Indicates whether the
 *       associated AWS resources should shut down when the environment
 *       is terminated: true: (default) The user AWS resources (for
 *       example, the Auto Scaling group, LoadBalancer, etc.) are
 *       terminated along with the environment. false: The environment is
 *       removed from the &service; but the AWS resources continue to
 *       operate. true: The specified environment as well as the
 *       associated AWS resources, such as Auto Scaling group and
 *       LoadBalancer, are terminated. false: &service; resource
 *       management is removed from the environment, but the AWS
 *       resources continue to operate. For more information, see the
 *       &servicelong; User Guide. Default: true Valid Values: true |
 *       false
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +EnvironmentName+ - (<tt>String</tt>) The name of this
 *         environment.
 *       * +EnvironmentId+ - (<tt>String</tt>) The ID of this environment.
 *       * +ApplicationName+ - (<tt>String</tt>) The name of the
 *         application associated with this environment.
 *       * +VersionLabel+ - (<tt>String</tt>) The application version
 *         deployed in this environment.
 *       * +SolutionStackName+ - (<tt>String</tt>) The name of the
 *         SolutionStack deployed with this environment.
 *       * +TemplateName+ - (<tt>String</tt>) The name of the configuration
 *         template used to originally launch this environment.
 *       * +Description+ - (<tt>String</tt>) Describes this environment.
 *       * +EndpointURL+ - (<tt>String</tt>) The URL to the LoadBalancer
 *         for this environment.
 *       * +CNAME+ - (<tt>String</tt>) The URL to the CNAME for this
 *         environment.
 *       * +DateCreated+ - (<tt>Date</tt>) The creation date for this
 *         environment.
 *       * +DateUpdated+ - (<tt>Date</tt>) The last modified date for this
 *         environment.
 *       * +Status+ - (<tt>String</tt>) The current operational status of
 *         the environment: Launching: Environment is in the process of
 *         initial deployment. Updating: Environment is in the process of
 *         updating its configuration settings or application version.
 *         Ready: Environment is available to have an action performed on
 *         it, such as update or terminate. Terminating: Environment is in
 *         the shut-down process. Terminated: Environment is not running.
 *       * +Health+ - (<tt>String</tt>) Describes the health status of the
 *         environment. &service; indicates the failure levels for a
 *         running environment: Red : Indicates the environment is not
 *         working. Yellow: Indicates that something is wrong, the
 *         application might not be available, but the instances appear
 *         running. Green: Indicates the environment is healthy and fully
 *         functional. Red: Indicates the environment is not responsive.
 *         Occurs when three or more consecutive failures occur for an
 *         environment. Yellow: Indicates that something is wrong. Occurs
 *         when two consecutive failures occur for an environment. Green:
 *         Indicates the environment is healthy and fully functional. Grey:
 *         Default health for a new environment. The environment is not
 *         fully launched and health checks have not started or health
 *         checks are suspended during an UpdateEnvironment or
 *         RestartEnvironement request. Default: Grey
 *       * +Resources+ - (<tt>Object</tt>) The description of the AWS
 *         resources used by this environment.
 *         * +LoadBalancer+ - (<tt>Object</tt>) Describes the LoadBalancer.
 *           * +LoadBalancerName+ - (<tt>String</tt>) The name of the
 *             LoadBalancer.
 *           * +Domain+ - (<tt>String</tt>) The domain name of the
 *             LoadBalancer.
 *           * +Listeners+ - (<tt>Array<Object></tt>) A list of Listeners
 *             used by the LoadBalancer.
 *             * +Protocol+ - (<tt>String</tt>) The protocol that is used
 *               by the Listener.
 *             * +Port+ - (<tt>Integer</tt>) The port that is used by the
 *               Listener.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateApplication(params, callback)
 *   Calls the UpdateApplication API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (*required*, <tt>String</tt>) The name of
 *       the application to update. If no such application is found,
 *       UpdateApplication returns an InvalidParameterValue error.
 *     * +Description+ - (<tt>String</tt>) A new description for the
 *       application. Default: If not specified, &service; does not
 *       update the description.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Application+ - (<tt>Object</tt>) The ApplicationDescription of
 *         the application.
 *         * +ApplicationName+ - (<tt>String</tt>) The name of the
 *           application.
 *         * +Description+ - (<tt>String</tt>) User-defined description of
 *           the application.
 *         * +DateCreated+ - (<tt>Date</tt>) The date when the application
 *           was created.
 *         * +DateUpdated+ - (<tt>Date</tt>) The date when the application
 *           was last modified.
 *         * +Versions+ - (<tt>Array<String></tt>) The names of the
 *           versions for this application.
 *         * +ConfigurationTemplates+ - (<tt>Array<String></tt>) The names
 *           of the configuration templates associated with this
 *           application.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateApplicationVersion(params, callback)
 *   Calls the UpdateApplicationVersion API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (*required*, <tt>String</tt>) The name of
 *       the application associated with this version. If no application
 *       is found with this name, UpdateApplication returns an
 *       InvalidParameterValue error.
 *     * +VersionLabel+ - (*required*, <tt>String</tt>) The name of the
 *       version to update. If no application version is found with this
 *       label, UpdateApplication returns an InvalidParameterValue error.
 *     * +Description+ - (<tt>String</tt>) A new description for this
 *       release.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ApplicationVersion+ - (<tt>Object</tt>) The
 *         ApplicationVersionDescription of the application version.
 *         * +ApplicationName+ - (<tt>String</tt>) The name of the
 *           application associated with this release.
 *         * +Description+ - (<tt>String</tt>) The description of this
 *           application version.
 *         * +VersionLabel+ - (<tt>String</tt>) A label uniquely
 *           identifying the version for the associated application.
 *         * +SourceBundle+ - (<tt>Object</tt>) The location where the
 *           source bundle is located for this version.
 *           * +S3Bucket+ - (<tt>String</tt>) The Amazon S3 bucket where
 *             the data is located.
 *           * +S3Key+ - (<tt>String</tt>) The Amazon S3 key where the data
 *             is located.
 *         * +DateCreated+ - (<tt>Date</tt>) The creation date of the
 *           application version.
 *         * +DateUpdated+ - (<tt>Date</tt>) The last modified date of the
 *           application version.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateConfigurationTemplate(params, callback)
 *   Calls the UpdateConfigurationTemplate API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (*required*, <tt>String</tt>) The name of
 *       the application associated with the configuration template to
 *       update. If no application is found with this name,
 *       UpdateConfigurationTemplate returns an InvalidParameterValue
 *       error.
 *     * +TemplateName+ - (*required*, <tt>String</tt>) The name of the
 *       configuration template to update. If no configuration template
 *       is found with this name, UpdateConfigurationTemplate returns an
 *       InvalidParameterValue error.
 *     * +Description+ - (<tt>String</tt>) A new description for the
 *       configuration.
 *     * +OptionSettings+ - (<tt>Array<Object></tt>) A list of
 *       configuration option settings to update with the new specified
 *       option value.
 *       * +Namespace+ - (<tt>String</tt>) A unique namespace identifying
 *         the option's associated AWS resource.
 *       * +OptionName+ - (<tt>String</tt>) The name of the configuration
 *         option.
 *       * +Value+ - (<tt>String</tt>) The current value for the
 *         configuration option.
 *     * +OptionsToRemove+ - (<tt>Array<Object></tt>) A list of
 *       configuration options to remove from the configuration set.
 *       Constraint: You can remove only UserDefined configuration
 *       options.
 *       * +Namespace+ - (<tt>String</tt>) A unique namespace identifying
 *         the option's associated AWS resource.
 *       * +OptionName+ - (<tt>String</tt>) The name of the configuration
 *         option.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SolutionStackName+ - (<tt>String</tt>) The name of the solution
 *         stack this configuration set uses.
 *       * +ApplicationName+ - (<tt>String</tt>) The name of the
 *         application associated with this configuration set.
 *       * +TemplateName+ - (<tt>String</tt>) If not null, the name of the
 *         configuration template for this configuration set.
 *       * +Description+ - (<tt>String</tt>) Describes this configuration
 *         set.
 *       * +EnvironmentName+ - (<tt>String</tt>) If not null, the name of
 *         the environment for this configuration set.
 *       * +DeploymentStatus+ - (<tt>String</tt>) If this configuration set
 *         is associated with an environment, the DeploymentStatus
 *         parameter indicates the deployment status of this configuration
 *         set: null: This configuration is not associated with a running
 *         environment. pending: This is a draft configuration that is not
 *         deployed to the associated environment but is in the process of
 *         deploying. deployed: This is the configuration that is currently
 *         deployed to the associated running environment. failed: This is
 *         a draft configuration, that failed to successfully deploy. null:
 *         This configuration is not associated with a running environment.
 *         pending: This is a draft configuration that is not deployed to
 *         the associated environment but is in the process of deploying.
 *         deployed: This is the configuration that is currently deployed
 *         to the associated running environment. failed: This is a draft
 *         configuration that failed to successfully deploy.
 *       * +DateCreated+ - (<tt>Date</tt>) The date (in UTC time) when this
 *         configuration set was created.
 *       * +DateUpdated+ - (<tt>Date</tt>) The date (in UTC time) when this
 *         configuration set was last modified.
 *       * +OptionSettings+ - (<tt>Array<Object></tt>) A list of the
 *         configuration options and their values in this configuration
 *         set.
 *         * +Namespace+ - (<tt>String</tt>) A unique namespace identifying
 *           the option's associated AWS resource.
 *         * +OptionName+ - (<tt>String</tt>) The name of the configuration
 *           option.
 *         * +Value+ - (<tt>String</tt>) The current value for the
 *           configuration option.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateEnvironment(params, callback)
 *   Calls the UpdateEnvironment API operation.
 *   @param params [Object]
 *     * +EnvironmentId+ - (<tt>String</tt>) The ID of the environment to
 *       update. If no environment with this ID exists, &service; returns
 *       an InvalidParameterValue error. Condition: You must specify
 *       either this or an EnvironmentName, or both. If you do not
 *       specify either, AWS Elastic Beanstalk returns
 *       MissingRequiredParameter error.
 *     * +EnvironmentName+ - (<tt>String</tt>) The name of the
 *       environment to update. If no environment with this name exists,
 *       &service; returns an InvalidParameterValue error. Condition: You
 *       must specify either this or an EnvironmentId, or both. If you do
 *       not specify either, AWS Elastic Beanstalk returns
 *       MissingRequiredParameter error.
 *     * +VersionLabel+ - (<tt>String</tt>) If this parameter is
 *       specified, &service; deploys the named application version to
 *       the environment. If no such application version is found,
 *       returns an InvalidParameterValue error.
 *     * +TemplateName+ - (<tt>String</tt>) If this parameter is
 *       specified, &service; deploys this configuration template to the
 *       environment. If no such configuration template is found,
 *       &service; returns an InvalidParameterValue error.
 *     * +Description+ - (<tt>String</tt>) If this parameter is
 *       specified, &service; updates the description of this
 *       environment.
 *     * +OptionSettings+ - (<tt>Array<Object></tt>) If specified,
 *       &service; updates the configuration set associated with the
 *       running environment and sets the specified configuration options
 *       to the requested value.
 *       * +Namespace+ - (<tt>String</tt>) A unique namespace identifying
 *         the option's associated AWS resource.
 *       * +OptionName+ - (<tt>String</tt>) The name of the configuration
 *         option.
 *       * +Value+ - (<tt>String</tt>) The current value for the
 *         configuration option.
 *     * +OptionsToRemove+ - (<tt>Array<Object></tt>) A list of custom
 *       user-defined configuration options to remove from the
 *       configuration set for this environment.
 *       * +Namespace+ - (<tt>String</tt>) A unique namespace identifying
 *         the option's associated AWS resource.
 *       * +OptionName+ - (<tt>String</tt>) The name of the configuration
 *         option.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +EnvironmentName+ - (<tt>String</tt>) The name of this
 *         environment.
 *       * +EnvironmentId+ - (<tt>String</tt>) The ID of this environment.
 *       * +ApplicationName+ - (<tt>String</tt>) The name of the
 *         application associated with this environment.
 *       * +VersionLabel+ - (<tt>String</tt>) The application version
 *         deployed in this environment.
 *       * +SolutionStackName+ - (<tt>String</tt>) The name of the
 *         SolutionStack deployed with this environment.
 *       * +TemplateName+ - (<tt>String</tt>) The name of the configuration
 *         template used to originally launch this environment.
 *       * +Description+ - (<tt>String</tt>) Describes this environment.
 *       * +EndpointURL+ - (<tt>String</tt>) The URL to the LoadBalancer
 *         for this environment.
 *       * +CNAME+ - (<tt>String</tt>) The URL to the CNAME for this
 *         environment.
 *       * +DateCreated+ - (<tt>Date</tt>) The creation date for this
 *         environment.
 *       * +DateUpdated+ - (<tt>Date</tt>) The last modified date for this
 *         environment.
 *       * +Status+ - (<tt>String</tt>) The current operational status of
 *         the environment: Launching: Environment is in the process of
 *         initial deployment. Updating: Environment is in the process of
 *         updating its configuration settings or application version.
 *         Ready: Environment is available to have an action performed on
 *         it, such as update or terminate. Terminating: Environment is in
 *         the shut-down process. Terminated: Environment is not running.
 *       * +Health+ - (<tt>String</tt>) Describes the health status of the
 *         environment. &service; indicates the failure levels for a
 *         running environment: Red : Indicates the environment is not
 *         working. Yellow: Indicates that something is wrong, the
 *         application might not be available, but the instances appear
 *         running. Green: Indicates the environment is healthy and fully
 *         functional. Red: Indicates the environment is not responsive.
 *         Occurs when three or more consecutive failures occur for an
 *         environment. Yellow: Indicates that something is wrong. Occurs
 *         when two consecutive failures occur for an environment. Green:
 *         Indicates the environment is healthy and fully functional. Grey:
 *         Default health for a new environment. The environment is not
 *         fully launched and health checks have not started or health
 *         checks are suspended during an UpdateEnvironment or
 *         RestartEnvironement request. Default: Grey
 *       * +Resources+ - (<tt>Object</tt>) The description of the AWS
 *         resources used by this environment.
 *         * +LoadBalancer+ - (<tt>Object</tt>) Describes the LoadBalancer.
 *           * +LoadBalancerName+ - (<tt>String</tt>) The name of the
 *             LoadBalancer.
 *           * +Domain+ - (<tt>String</tt>) The domain name of the
 *             LoadBalancer.
 *           * +Listeners+ - (<tt>Array<Object></tt>) A list of Listeners
 *             used by the LoadBalancer.
 *             * +Protocol+ - (<tt>String</tt>) The protocol that is used
 *               by the Listener.
 *             * +Port+ - (<tt>Integer</tt>) The port that is used by the
 *               Listener.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method validateConfigurationSettings(params, callback)
 *   Calls the ValidateConfigurationSettings API operation.
 *   @param params [Object]
 *     * +ApplicationName+ - (*required*, <tt>String</tt>) The name of
 *       the application that the configuration template or environment
 *       belongs to.
 *     * +TemplateName+ - (<tt>String</tt>) The name of the configuration
 *       template to validate the settings against. Condition: You cannot
 *       specify both this and an environment name.
 *     * +EnvironmentName+ - (<tt>String</tt>) The name of the
 *       environment to validate the settings against. Condition: You
 *       cannot specify both this and a configuration template name.
 *     * +OptionSettings+ - (*required*, <tt>Array<Object></tt>) A list
 *       of the options and desired values to evaluate.
 *       * +Namespace+ - (<tt>String</tt>) A unique namespace identifying
 *         the option's associated AWS resource.
 *       * +OptionName+ - (<tt>String</tt>) The name of the configuration
 *         option.
 *       * +Value+ - (<tt>String</tt>) The current value for the
 *         configuration option.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Messages+ - (<tt>Array<Object></tt>) A list of
 *         ValidationMessage.
 *         * +Message+ - (<tt>String</tt>) A message describing the error
 *           or warning.
 *         * +Severity+ - (<tt>String</tt>) An indication of the severity
 *           of this message: error: This message indicates that this is
 *           not a valid setting for an option. warning: This message is
 *           providing information you should take into account. error:
 *           This message indicates that this is not a valid setting for an
 *           option. warning: This message is providing information you
 *           should take into account.
 *         * +Namespace+ - (<tt>String</tt>)
 *         * +OptionName+ - (<tt>String</tt>)
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
AWS.ElasticBeanstalk.Client = inherit({});
