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
 * ### Sending a Request Using OpsWorks
 *
 * ```js
 * svc = new AWS.OpsWorks();
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
 *   @option (see AWS.OpsWorks.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.OpsWorks.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.OpsWorks.Client
 *
 */
AWS.OpsWorks = inherit({})

/**
 * The low-level OpsWorks client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method cloneStack(params, callback)
 *   Calls the CloneStack API operation.
 *   @param params [Object]
 *     * `SourceStackId` &mdash; **required** &mdash; (`String`) The
 *       source stack ID.
 *     * `Name` &mdash; (`String`) The cloned stack name.
 *     * `Region` &mdash; (`String`) The cloned stack AWS region, such as
 *       "us-east-1". For more information about AWS regions, see Regions
 *       and Endpoints
 *     * `Attributes` &mdash; (`Object<String>`) A list of stack
 *       attributes and values as key/value pairs to be added to the
 *       cloned stack.
 *     * `ServiceRoleArn` &mdash; **required** &mdash; (`String`) The
 *       stack AWS Identity and Access Management (IAM) role, which
 *       allows OpsWorks to work with AWS resources on your behalf. You
 *       must set this parameter to the Amazon Resource Name (ARN) for an
 *       existing IAM role. If you create a stack by using the OpsWorks
 *       console, it creates the role for you. You can obtain an existing
 *       stack's IAM ARN programmatically by calling DescribePermissions.
 *       For more information about IAM ARNs, see Using Identifiers.
 *     * `DefaultInstanceProfileArn` &mdash; (`String`) The ARN of an IAM
 *       profile that is the default profile for all of the stack's EC2
 *       instances. For more information about IAM ARNs, see Using
 *       Identifiers.
 *     * `DefaultOs` &mdash; (`String`) The cloned stack default
 *       operating system, which must be either "Amazon Linux" or "Ubuntu
 *       12.04 LTS".
 *     * `HostnameTheme` &mdash; (`String`) The stack's host name theme,
 *       with spaces are replaced by underscores. The theme is used to
 *       generate hostnames for the stack's instances. By default,
 *       HostnameTheme is set to Layer_Dependent, which creates hostnames
 *       by appending integers to the layer's shortname. The other themes
 *       are: Baked_Goods Clouds European_Cities Fruits Greek_Deities
 *       Legendary_Creatures_from_Japan Planets_and_Moons Roman_Deities
 *       Scottish_Islands US_Cities Wild_Cats To obtain a generated
 *       hostname, call GetHostNameSuggestion, which returns a hostname
 *       based on the current theme.
 *     * `DefaultAvailabilityZone` &mdash; (`String`) The cloned stack's
 *       Availability Zone. For more information, see Regions and
 *       Endpoints.
 *     * `CustomJson` &mdash; (`String`) A string that contains
 *       user-defined, custom JSON. It is used to override the
 *       corresponding default stack configuration JSON values. The
 *       string should be in the following format and must escape
 *       characters such as '"'.: "{\"key1\": \"value1\", \"key2\":
 *       \"value2\",...}"
 *     * `UseCustomCookbooks` &mdash; (`Boolean`) Whether to use custom
 *       cookbooks.
 *     * `CustomCookbooksSource` &mdash; (`Object`)
 *       * `Type` &mdash; (`String`) The repository type.
 *       * `Url` &mdash; (`String`) The source URL.
 *       * `Username` &mdash; (`String`) The user name.
 *       * `Password` &mdash; (`String`) The repository's password.
 *       * `SshKey` &mdash; (`String`) The repository's SSH key.
 *       * `Revision` &mdash; (`String`) The application's version.
 *         OpsWorks enables you to easily deploy new versions of an
 *         application. One of the simplest approaches is to have
 *         branches or revisions in your repository that represent
 *         different versions that can potentially be deployed.
 *     * `DefaultSshKeyName` &mdash; (`String`) A default SSH key for the
 *       stack instances. You can override this value when you create or
 *       update an instance.
 *     * `ClonePermissions` &mdash; (`Boolean`) Whether to clone the
 *       source stack's permissions.
 *     * `CloneAppIds` &mdash; (`Array<String>`) A list of source stack
 *       app IDs to be included in the cloned stack.
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
 *       * `StackId` &mdash; (`String`) The cloned stack ID.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createApp(params, callback)
 *   Calls the CreateApp API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; **required** &mdash; (`String`) The stack ID.
 *     * `Name` &mdash; **required** &mdash; (`String`) The app name.
 *     * `Description` &mdash; (`String`) A description of the app.
 *     * `Type` &mdash; **required** &mdash; (`String`) The app type.
 *       Each supported type is associated with a particular layer. For
 *       example, PHP applications are associated with a PHP layer.
 *       OpsWorks deploys an application to those instances that are
 *       members of the corresponding layer.
 *     * `AppSource` &mdash; (`Object`) A Source object that specifies
 *       the app repository.
 *       * `Type` &mdash; (`String`) The repository type.
 *       * `Url` &mdash; (`String`) The source URL.
 *       * `Username` &mdash; (`String`) The user name.
 *       * `Password` &mdash; (`String`) The repository's password.
 *       * `SshKey` &mdash; (`String`) The repository's SSH key.
 *       * `Revision` &mdash; (`String`) The application's version.
 *         OpsWorks enables you to easily deploy new versions of an
 *         application. One of the simplest approaches is to have
 *         branches or revisions in your repository that represent
 *         different versions that can potentially be deployed.
 *     * `Domains` &mdash; (`Array<String>`) The app virtual host
 *       settings, with multiple domains separated by commas. For
 *       example: 'www.mysite.com, mysite.com'
 *     * `EnableSsl` &mdash; (`Boolean`) Whether to enable SSL for the
 *       app.
 *     * `SslConfiguration` &mdash; (`Object`) An SslConfiguration object
 *       with the SSL configuration.
 *       * `Certificate` &mdash; **required** &mdash; (`String`) The
 *         contents of the certificate's domain.crt file.
 *       * `PrivateKey` &mdash; **required** &mdash; (`String`) The
 *         private key; the contents of the certificate's domain.kex
 *         file.
 *       * `Chain` &mdash; (`String`) Optional. Can be used to specify an
 *         intermediate certificate authority key or client
 *         authentication.
 *     * `Attributes` &mdash; (`Object<String>`) One or more user-defined
 *       key/value pairs to be added to the stack attributes bag.
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
 *       * `AppId` &mdash; (`String`) The app ID.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDeployment(params, callback)
 *   Calls the CreateDeployment API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; **required** &mdash; (`String`) The stack ID.
 *     * `AppId` &mdash; (`String`) The app ID, for app deployments.
 *     * `InstanceIds` &mdash; (`Array<String>`) The instance IDs for the
 *       deployment targets.
 *     * `Command` &mdash; **required** &mdash; (`Object`) A
 *       DeploymentCommand object that describes details of the
 *       operation.
 *       * `Name` &mdash; **required** &mdash; (`String`) Specifies the
 *         deployment operation. You can specify only one command. For
 *         stacks, the available commands are: execute_recipes: Execute
 *         the recipes that are specified by the Args parameter.
 *         install_dependencies: Installs the stack's dependencies.
 *         update_custom_cookbooks: Update the stack's custom cookbooks.
 *         update_dependencies: Update the stack's dependencies.
 *         shutdown: Run the shutdown recipes. setup: Run the setup
 *         recipes. configure: Run the configure recipes. For apps, the
 *         available commands are: deploy: Deploy the app. rollback Roll
 *         the app back to the previous version. When you update an app,
 *         OpsWorks stores the previous version, up to a maximum of five
 *         versions. You can use this command to roll an app back as many
 *         as four versions. start: Start the app's web or application
 *         server. stop: Stop the app's web or application server.
 *         restart: Restart the app's web or application server.
 *         undeploy: Undeploy the app.
 *       * `Args` &mdash; (`Object<Array<String>>`) An array of command
 *         arguments. This parameter is currently used only to specify
 *         the list of recipes to be executed by the ExecuteRecipes
 *         command.
 *     * `Comment` &mdash; (`String`) A user-defined comment.
 *     * `CustomJson` &mdash; (`String`) A string that contains
 *       user-defined, custom JSON. It is used to override the
 *       corresponding default stack configuration JSON values. The
 *       string should be in the following format and must escape
 *       characters such as '"'.: "{\"key1\": \"value1\", \"key2\":
 *       \"value2\",...}"
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
 *       * `DeploymentId` &mdash; (`String`) The deployment ID, which can
 *         be used with other requests to identify the deployment.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createInstance(params, callback)
 *   Calls the CreateInstance API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; **required** &mdash; (`String`) The stack ID.
 *     * `LayerIds` &mdash; **required** &mdash; (`Array<String>`) An
 *       array that contains the instance layer IDs.
 *     * `InstanceType` &mdash; **required** &mdash; (`String`) The
 *       instance type, which can be one of the following: m1.small
 *       m1.medium m1.large m1.xlarge c1.medium c1.xlarge m2.xlarge
 *       m2.2xlarge m2.4xlarge
 *     * `AutoScalingType` &mdash; (`String`) The instance auto scaling
 *       type, which has three possible values: AlwaysRunning: A 24x7
 *       instance, which is not affected by auto scaling.
 *       TimeBasedAutoScaling: A time-based auto scaling instance, which
 *       is started and stopped based on a specified schedule. To specify
 *       the schedule, call SetTimeBasedAutoScaling.
 *       LoadBasedAutoScaling: A load-based auto scaling instance, which
 *       is started and stopped based on load metrics. To use load-based
 *       auto scaling, you must enable it for the instance layer and
 *       configure the thresholds by calling SetLoadBasedAutoScaling.
 *     * `Hostname` &mdash; (`String`) The instance host name.
 *     * `Os` &mdash; (`String`) The instance operating system.
 *     * `SshKeyName` &mdash; (`String`) The instance SSH key name.
 *     * `AvailabilityZone` &mdash; (`String`) The instance Availability
 *       Zone. For more information, see Regions and Endpoints.
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
 *       * `InstanceId` &mdash; (`String`) The instance ID.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createLayer(params, callback)
 *   Calls the CreateLayer API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; **required** &mdash; (`String`) The layer
 *       stack ID.
 *     * `Type` &mdash; **required** &mdash; (`String`) The layer type. A
 *       stack cannot have more than one layer of the same type.
 *     * `Name` &mdash; **required** &mdash; (`String`) The layer name,
 *       which is used by the console.
 *     * `Shortname` &mdash; **required** &mdash; (`String`) The layer
 *       short name, which is used internally by OpsWorks and by Chef
 *       recipes. The shortname is also used as the name for the
 *       directory where your app files are installed. It can have a
 *       maximum of 200 characters, which are limited to the alphanumeric
 *       characters, '-', '_', and '.'.
 *     * `Attributes` &mdash; (`Object<String>`) One or more user-defined
 *       key/value pairs to be added to the stack attributes bag.
 *     * `CustomInstanceProfileArn` &mdash; (`String`) The ARN of an IAM
 *       profile that to be used for the layer's EC2 instances. For more
 *       information about IAM ARNs, see Using Identifiers.
 *     * `CustomSecurityGroupIds` &mdash; (`Array<String>`) An array
 *       containing the layer custom security group IDs.
 *     * `Packages` &mdash; (`Array<String>`) An array of Package objects
 *       that describe the layer packages.
 *     * `VolumeConfigurations` &mdash; (`Array<Object>`) A
 *       VolumeConfigurations object that describes the layer Amazon EBS
 *       volumes.
 *       * `MountPoint` &mdash; **required** &mdash; (`String`) The
 *         volume mount point. For example "/dev/sdh".
 *       * `RaidLevel` &mdash; (`Integer`) The volume RAID level.
 *       * `NumberOfDisks` &mdash; **required** &mdash; (`Integer`) The
 *         number of disks in the volume.
 *       * `Size` &mdash; **required** &mdash; (`Integer`) The volume
 *         size.
 *     * `EnableAutoHealing` &mdash; (`Boolean`) Whether to disable auto
 *       healing for the layer.
 *     * `AutoAssignElasticIps` &mdash; (`Boolean`) Whether to
 *       automatically assign an Elastic IP address to the layer.
 *     * `CustomRecipes` &mdash; (`Object`) A LayerCustomRecipes object
 *       that specifies the layer custom recipes.
 *       * `Setup` &mdash; (`Array<String>`) An array of custom recipe
 *         names to be run following a setup event.
 *       * `Configure` &mdash; (`Array<String>`) An array of custom
 *         recipe names to be run following a configure event.
 *       * `Deploy` &mdash; (`Array<String>`) An array of custom recipe
 *         names to be run following a deploy event.
 *       * `Undeploy` &mdash; (`Array<String>`) An array of custom recipe
 *         names to be run following a undeploy event.
 *       * `Shutdown` &mdash; (`Array<String>`) An array of custom recipe
 *         names to be run following a shutdown event.
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
 *       * `LayerId` &mdash; (`String`) The layer ID.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createStack(params, callback)
 *   Calls the CreateStack API operation.
 *   @param params [Object]
 *     * `Name` &mdash; **required** &mdash; (`String`) The stack name.
 *     * `Region` &mdash; **required** &mdash; (`String`) The stack AWS
 *       region, such as "us-east-1". For more information about Amazon
 *       regions, see Regions and Endpoints.
 *     * `Attributes` &mdash; (`Object<String>`) One or more user-defined
 *       key/value pairs to be added to the stack attributes bag.
 *     * `ServiceRoleArn` &mdash; **required** &mdash; (`String`) The
 *       stack AWS Identity and Access Management (IAM) role, which
 *       allows OpsWorks to work with AWS resources on your behalf. You
 *       must set this parameter to the Amazon Resource Name (ARN) for an
 *       existing IAM role. For more information about IAM ARNs, see
 *       Using Identifiers.
 *     * `DefaultInstanceProfileArn` &mdash; **required** &mdash;
 *       (`String`) The ARN of an IAM profile that is the default profile
 *       for all of the stack's EC2 instances. For more information about
 *       IAM ARNs, see Using Identifiers.
 *     * `DefaultOs` &mdash; (`String`) The cloned stack default
 *       operating system, which must be either "Amazon Linux" or "Ubuntu
 *       12.04 LTS".
 *     * `HostnameTheme` &mdash; (`String`) The stack's host name theme,
 *       with spaces are replaced by underscores. The theme is used to
 *       generate hostnames for the stack's instances. By default,
 *       HostnameTheme is set to Layer_Dependent, which creates hostnames
 *       by appending integers to the layer's shortname. The other themes
 *       are: Baked_Goods Clouds European_Cities Fruits Greek_Deities
 *       Legendary_Creatures_from_Japan Planets_and_Moons Roman_Deities
 *       Scottish_Islands US_Cities Wild_Cats To obtain a generated
 *       hostname, call GetHostNameSuggestion, which returns a hostname
 *       based on the current theme.
 *     * `DefaultAvailabilityZone` &mdash; (`String`) The stack default
 *       Availability Zone. For more information, see Regions and
 *       Endpoints.
 *     * `CustomJson` &mdash; (`String`) A string that contains
 *       user-defined, custom JSON. It is used to override the
 *       corresponding default stack configuration JSON values. The
 *       string should be in the following format and must escape
 *       characters such as '"'.: "{\"key1\": \"value1\", \"key2\":
 *       \"value2\",...}"
 *     * `UseCustomCookbooks` &mdash; (`Boolean`) Whether the stack uses
 *       custom cookbooks.
 *     * `CustomCookbooksSource` &mdash; (`Object`)
 *       * `Type` &mdash; (`String`) The repository type.
 *       * `Url` &mdash; (`String`) The source URL.
 *       * `Username` &mdash; (`String`) The user name.
 *       * `Password` &mdash; (`String`) The repository's password.
 *       * `SshKey` &mdash; (`String`) The repository's SSH key.
 *       * `Revision` &mdash; (`String`) The application's version.
 *         OpsWorks enables you to easily deploy new versions of an
 *         application. One of the simplest approaches is to have
 *         branches or revisions in your repository that represent
 *         different versions that can potentially be deployed.
 *     * `DefaultSshKeyName` &mdash; (`String`) A default SSH key for the
 *       stack instances. You can override this value when you create or
 *       update an instance.
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
 *       * `StackId` &mdash; (`String`) The stack ID, which is an opaque
 *         string that you use to identify the stack when performing
 *         actions such as DescribeStacks.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createUserProfile(params, callback)
 *   Calls the CreateUserProfile API operation.
 *   @param params [Object]
 *     * `IamUserArn` &mdash; **required** &mdash; (`String`) The user's
 *       IAM ARN.
 *     * `SshUsername` &mdash; (`String`) The user's SSH user name.
 *     * `SshPublicKey` &mdash; (`String`) The user's public SSH key.
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
 *       * `IamUserArn` &mdash; (`String`) The user's IAM ARN.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteApp(params, callback)
 *   Calls the DeleteApp API operation.
 *   @param params [Object]
 *     * `AppId` &mdash; **required** &mdash; (`String`) The app ID.
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
 * @!method deleteInstance(params, callback)
 *   Calls the DeleteInstance API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The
 *       instance ID.
 *     * `DeleteElasticIp` &mdash; (`Boolean`) Whether to delete the
 *       instance Elastic IP address.
 *     * `DeleteVolumes` &mdash; (`Boolean`) Whether to delete the
 *       instance Amazon EBS volumes.
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
 * @!method deleteLayer(params, callback)
 *   Calls the DeleteLayer API operation.
 *   @param params [Object]
 *     * `LayerId` &mdash; **required** &mdash; (`String`) The layer ID.
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
 * @!method deleteStack(params, callback)
 *   Calls the DeleteStack API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; **required** &mdash; (`String`) The stack ID.
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
 * @!method deleteUserProfile(params, callback)
 *   Calls the DeleteUserProfile API operation.
 *   @param params [Object]
 *     * `IamUserArn` &mdash; **required** &mdash; (`String`) The user's
 *       IAM ARN.
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
 * @!method describeApps(params, callback)
 *   Calls the DescribeApps API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; (`String`) The app stack ID.
 *     * `AppIds` &mdash; (`Array<String>`) An array of app IDs for the
 *       apps to be described.
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
 *       * `Apps` &mdash; (`Array<Object>`) An array of App objects that
 *         describe the specified apps.
 *         * `AppId` &mdash; (`String`) The app ID.
 *         * `StackId` &mdash; (`String`) The app stack ID.
 *         * `Name` &mdash; (`String`) The app name.
 *         * `Description` &mdash; (`String`) A description of the app.
 *         * `Type` &mdash; (`String`) The app type.
 *         * `AppSource` &mdash; (`Object`) A Source object that describes
 *           the app repository.
 *           * `Type` &mdash; (`String`) The repository type.
 *           * `Url` &mdash; (`String`) The source URL.
 *           * `Username` &mdash; (`String`) The user name.
 *           * `Password` &mdash; (`String`) The repository's password.
 *           * `SshKey` &mdash; (`String`) The repository's SSH key.
 *           * `Revision` &mdash; (`String`) The application's version.
 *             OpsWorks enables you to easily deploy new versions of an
 *             application. One of the simplest approaches is to have
 *             branches or revisions in your repository that represent
 *             different versions that can potentially be deployed.
 *         * `Domains` &mdash; (`Array<String>`) The app vhost settings,
 *           with multiple domains separated by commas. For example:
 *           'www.mysite.com, mysite.com'
 *         * `EnableSsl` &mdash; (`Boolean`) Whether to enable SSL for the
 *           app.
 *         * `SslConfiguration` &mdash; (`Object`) An SslConfiguration
 *           object with the SSL configuration.
 *           * `Certificate` &mdash; (`String`) The contents of the
 *             certificate's domain.crt file.
 *           * `PrivateKey` &mdash; (`String`) The private key; the
 *             contents of the certificate's domain.kex file.
 *           * `Chain` &mdash; (`String`) Optional. Can be used to specify
 *             an intermediate certificate authority key or client
 *             authentication.
 *         * `Attributes` &mdash; (`Object<String>`) The contents of the
 *           stack attributes bag.
 *         * `CreatedAt` &mdash; (`String`) When the app was created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCommands(params, callback)
 *   Calls the DescribeCommands API operation.
 *   @param params [Object]
 *     * `DeploymentId` &mdash; (`String`) The deployment ID.
 *     * `InstanceId` &mdash; (`String`) The instance ID.
 *     * `CommandIds` &mdash; (`Array<String>`) An array of IDs for the
 *       commands to be described.
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
 *       * `Commands` &mdash; (`Array<Object>`) An array of InstanceCommand
 *         objects that describe each of the specified commands.
 *         * `CommandId` &mdash; (`String`) The command ID.
 *         * `InstanceId` &mdash; (`String`) The ID of the instance where
 *           the command was executed.
 *         * `DeploymentId` &mdash; (`String`) The command deployment ID.
 *         * `CreatedAt` &mdash; (`String`) Date and time when the command
 *           was run.
 *         * `AcknowledgedAt` &mdash; (`String`) Date and time when the
 *           command was acknowledged.
 *         * `CompletedAt` &mdash; (`String`) Date when the command
 *           completed.
 *         * `Status` &mdash; (`String`) The command status: failed
 *           successful skipped pending
 *         * `ExitCode` &mdash; (`Integer`) The command exit code.
 *         * `LogUrl` &mdash; (`String`) The URL of the command log.
 *         * `Type` &mdash; (`String`) The command type: shutdown setup
 *           configure deploy rollback start stop restart undeploy
 *           update_dependencies install_dependencies
 *           update_custom_cookbooks execute_recipes
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDeployments(params, callback)
 *   Calls the DescribeDeployments API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; (`String`) The stack ID.
 *     * `AppId` &mdash; (`String`) The app ID.
 *     * `DeploymentIds` &mdash; (`Array<String>`) An array of deployment
 *       IDs to be described.
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
 *       * `Deployments` &mdash; (`Array<Object>`) An array of Deployment
 *         objects that describe the deployments.
 *         * `DeploymentId` &mdash; (`String`) The deployment ID.
 *         * `StackId` &mdash; (`String`) The stack ID.
 *         * `AppId` &mdash; (`String`) The app ID.
 *         * `CreatedAt` &mdash; (`String`) Date when the deployment was
 *           created.
 *         * `CompletedAt` &mdash; (`String`) Date when the deployment
 *           completed.
 *         * `Duration` &mdash; (`Integer`) The deployment duration.
 *         * `IamUserArn` &mdash; (`String`) The user's IAM ARN.
 *         * `Comment` &mdash; (`String`) A user-defined comment.
 *         * `Command` &mdash; (`Object`)
 *           * `Name` &mdash; (`String`) Specifies the deployment
 *             operation. You can specify only one command. For stacks, the
 *             available commands are: execute_recipes: Execute the recipes
 *             that are specified by the Args parameter.
 *             install_dependencies: Installs the stack's dependencies.
 *             update_custom_cookbooks: Update the stack's custom
 *             cookbooks. update_dependencies: Update the stack's
 *             dependencies. shutdown: Run the shutdown recipes. setup: Run
 *             the setup recipes. configure: Run the configure recipes. For
 *             apps, the available commands are: deploy: Deploy the app.
 *             rollback Roll the app back to the previous version. When you
 *             update an app, OpsWorks stores the previous version, up to a
 *             maximum of five versions. You can use this command to roll
 *             an app back as many as four versions. start: Start the app's
 *             web or application server. stop: Stop the app's web or
 *             application server. restart: Restart the app's web or
 *             application server. undeploy: Undeploy the app.
 *           * `Args` &mdash; (`Object<Array<String>>`) An array of command
 *             arguments. This parameter is currently used only to specify
 *             the list of recipes to be executed by the ExecuteRecipes
 *             command.
 *         * `Status` &mdash; (`String`) The deployment status: running
 *           successful failed
 *         * `CustomJson` &mdash; (`String`) A string that contains
 *           user-defined custom JSON. It is used to override the
 *           corresponding default stack configuration JSON values for
 *           stack. The string should be in the following format and must
 *           escape characters such as '"'.: "{\"key1\": \"value1\",
 *           \"key2\": \"value2\",...}"
 *         * `InstanceIds` &mdash; (`Array<String>`) The IDs of the target
 *           instances.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeElasticIps(params, callback)
 *   Calls the DescribeElasticIps API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; (`String`) The instance ID.
 *     * `Ips` &mdash; (`Array<String>`) An array of Elastic IP addresses
 *       to be described.
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
 *       * `ElasticIps` &mdash; (`Array<Object>`) An ElasticIps object that
 *         describes the specified Elastic IP addresses.
 *         * `Ip` &mdash; (`String`) The Elastic IP address
 *         * `Name` &mdash; (`String`) The Elastic IP address name.
 *         * `Region` &mdash; (`String`) The AWS region. For more
 *           information, see Regions and Endpoints.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeInstances(params, callback)
 *   Calls the DescribeInstances API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; (`String`) A stack ID.
 *     * `LayerId` &mdash; (`String`) A layer ID.
 *     * `AppId` &mdash; (`String`) An app ID.
 *     * `InstanceIds` &mdash; (`Array<String>`) An array of instance IDs
 *       to be described.
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
 *       * `Instances` &mdash; (`Array<Object>`) An array of Instance
 *         objects that describe the instances.
 *         * `InstanceId` &mdash; (`String`) The instance ID.
 *         * `Ec2InstanceId` &mdash; (`String`) The ID of the associated
 *           Amazon EC2 instance.
 *         * `Hostname` &mdash; (`String`) The instance host name.
 *         * `StackId` &mdash; (`String`) The stack ID.
 *         * `LayerIds` &mdash; (`Array<String>`) An array containing the
 *           instance layer IDs.
 *         * `SecurityGroupIds` &mdash; (`Array<String>`) An array
 *           containing the instance security group IDs.
 *         * `InstanceType` &mdash; (`String`) The instance type, which can
 *           be one of the following: m1.small m1.medium m1.large m1.xlarge
 *           c1.medium c1.xlarge m2.xlarge m2.2xlarge m2.4xlarge
 *         * `InstanceProfileArn` &mdash; (`String`) The ARN of the
 *           instance's IAM profile. For more information about IAM ARNs,
 *           see Using Identifiers.
 *         * `Status` &mdash; (`String`) The instance status: requested
 *           booting running_setup online setup_failed start_failed
 *           terminating terminated stopped connection_lost
 *         * `Os` &mdash; (`String`) The instance operating system.
 *         * `AvailabilityZone` &mdash; (`String`) The instance
 *           Availability Zone. For more information, see Regions and
 *           Endpoints.
 *         * `PublicDns` &mdash; (`String`) The instance public DNS name.
 *         * `PrivateDns` &mdash; (`String`) The instance private DNS name.
 *         * `PublicIp` &mdash; (`String`) The instance public IP address.
 *         * `PrivateIp` &mdash; (`String`) The instance private IP
 *           address.
 *         * `ElasticIp` &mdash; (`String`) The instance Elastic IP
 *           address.
 *         * `AutoScalingType` &mdash; (`String`) The instance's auto
 *           scaling type, which has three possible values: AlwaysRunning:
 *           A 24x7 instance, which is not affected by auto scaling.
 *           TimeBasedAutoScaling: A time-based auto scaling instance,
 *           which is started and stopped based on a specified schedule.
 *           LoadBasedAutoScaling: A load-based auto scaling instance,
 *           which is started and stopped based on load metrics.
 *         * `SshKeyName` &mdash; (`String`) The instance SSH key name.
 *         * `SshHostRsaKeyFingerprint` &mdash; (`String`) The SSH key's
 *           RSA fingerprint.
 *         * `SshHostDsaKeyFingerprint` &mdash; (`String`) The SSH key's
 *           DSA fingerprint.
 *         * `CreatedAt` &mdash; (`String`) The time that the instance was
 *           created.
 *         * `LastServiceErrorId` &mdash; (`String`) The ID of the last
 *           service error. Call DescribeServiceErrors for details.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLayers(params, callback)
 *   Calls the DescribeLayers API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; **required** &mdash; (`String`) The stack ID.
 *     * `LayerIds` &mdash; (`Array<String>`) An array of layer IDs that
 *       specify the layers to be described.
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
 *       * `Layers` &mdash; (`Array<Object>`) An array of Layer objects
 *         that describe the layers.
 *         * `StackId` &mdash; (`String`) The layer stack ID.
 *         * `LayerId` &mdash; (`String`) The layer ID.
 *         * `Type` &mdash; (`String`) The layer type, which must be one of
 *           the following: Custom GangliaMonitoringMaster HaProxy
 *           MemcachedServer MySqlMaster NodeJsAppServer PhpAppServer
 *           RailsAppServer WebServer
 *         * `Name` &mdash; (`String`) The layer name.
 *         * `Shortname` &mdash; (`String`) The layer short name.
 *         * `Attributes` &mdash; (`Object<String>`) The layer attributes.
 *         * `CustomInstanceProfileArn` &mdash; (`String`) The ARN of the
 *           default IAM profile to be used for the layer's EC2 instances.
 *           For more information about IAM ARNs, see Using Identifiers.
 *         * `CustomSecurityGroupIds` &mdash; (`Array<String>`) An array
 *           containing the layer's custom security group IDs.
 *         * `DefaultSecurityGroupNames` &mdash; (`Array<String>`) An array
 *           containing the layer's security group names.
 *         * `Packages` &mdash; (`Array<String>`) An array of Package
 *           objects that describe the layer's packages.
 *         * `VolumeConfigurations` &mdash; (`Array<Object>`) A
 *           VolumeConfigurations object that describes the layer's Amazon
 *           EBS volumes.
 *           * `MountPoint` &mdash; (`String`) The volume mount point. For
 *             example "/dev/sdh".
 *           * `RaidLevel` &mdash; (`Integer`) The volume RAID level.
 *           * `NumberOfDisks` &mdash; (`Integer`) The number of disks in
 *             the volume.
 *           * `Size` &mdash; (`Integer`) The volume size.
 *         * `EnableAutoHealing` &mdash; (`Boolean`) Whether auto healing
 *           is disabled for the layer.
 *         * `AutoAssignElasticIps` &mdash; (`Boolean`) Whether the layer
 *           has an automatically assigned Elastic IP address.
 *         * `DefaultRecipes` &mdash; (`Object`)
 *           * `Setup` &mdash; (`Array<String>`) An array of custom recipe
 *             names to be run following a setup event.
 *           * `Configure` &mdash; (`Array<String>`) An array of custom
 *             recipe names to be run following a configure event.
 *           * `Deploy` &mdash; (`Array<String>`) An array of custom recipe
 *             names to be run following a deploy event.
 *           * `Undeploy` &mdash; (`Array<String>`) An array of custom
 *             recipe names to be run following a undeploy event.
 *           * `Shutdown` &mdash; (`Array<String>`) An array of custom
 *             recipe names to be run following a shutdown event.
 *         * `CustomRecipes` &mdash; (`Object`) A LayerCustomRecipes object
 *           that specifies the layer's custom recipes.
 *           * `Setup` &mdash; (`Array<String>`) An array of custom recipe
 *             names to be run following a setup event.
 *           * `Configure` &mdash; (`Array<String>`) An array of custom
 *             recipe names to be run following a configure event.
 *           * `Deploy` &mdash; (`Array<String>`) An array of custom recipe
 *             names to be run following a deploy event.
 *           * `Undeploy` &mdash; (`Array<String>`) An array of custom
 *             recipe names to be run following a undeploy event.
 *           * `Shutdown` &mdash; (`Array<String>`) An array of custom
 *             recipe names to be run following a shutdown event.
 *         * `CreatedAt` &mdash; (`String`) Date when the layer was
 *           created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLoadBasedAutoScaling(params, callback)
 *   Calls the DescribeLoadBasedAutoScaling API operation.
 *   @param params [Object]
 *     * `LayerIds` &mdash; **required** &mdash; (`Array<String>`) An
 *       array of layer IDs.
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
 *       * `LoadBasedAutoScalingConfigurations` &mdash; (`Array<Object>`)
 *         An array of LoadBasedAutoScalingConfiguration objects that
 *         describe each layer's configuration.
 *         * `LayerId` &mdash; (`String`) The layer ID.
 *         * `Enable` &mdash; (`Boolean`) Whether load-based auto scaling
 *           is enabled for the layer.
 *         * `UpScaling` &mdash; (`Object`) A
 *           LoadBasedAutoscalingInstruction object that describes the
 *           upscaling configuration, which defines how and when OpsWorks
 *           increases the number of instances.
 *           * `InstanceCount` &mdash; (`Integer`) The number of instances
 *             to add or remove when the load exceeds a threshold.
 *           * `ThresholdsWaitTime` &mdash; (`Integer`) The amount of time,
 *             in minutes, that the load must exceed a threshold before
 *             more instances are added or removed.
 *           * `IgnoreMetricsTime` &mdash; (`Integer`) The amount of time
 *             (in minutes) after a scaling event occurs that OpsWorks
 *             should ignore metrics and not raise any additional scaling
 *             events. For example, OpsWorks adds new instances following
 *             an upscaling event but the instances won't start reducing
 *             the load until they have been booted and configured. There
 *             is no point in raising additional scaling events during that
 *             operation, which typically takes several minutes.
 *             IgnoreMetricsTime allows you to direct OpsWorks to not raise
 *             any scaling events long enough to get the new instances
 *             online.
 *           * `CpuThreshold` &mdash; (`Float`) The CPU utilization
 *             threshold, as a percent of the available CPU.
 *           * `MemoryThreshold` &mdash; (`Float`) The memory utilization
 *             threshold, as a percent of the available memory.
 *           * `LoadThreshold` &mdash; (`Float`) The load threshold. For
 *             more information about how load is computed, see Load
 *             (computing).
 *         * `DownScaling` &mdash; (`Object`) A
 *           LoadBasedAutoscalingInstruction object that describes the
 *           downscaling configuration, which defines how and when OpsWorks
 *           reduces the number of instances.
 *           * `InstanceCount` &mdash; (`Integer`) The number of instances
 *             to add or remove when the load exceeds a threshold.
 *           * `ThresholdsWaitTime` &mdash; (`Integer`) The amount of time,
 *             in minutes, that the load must exceed a threshold before
 *             more instances are added or removed.
 *           * `IgnoreMetricsTime` &mdash; (`Integer`) The amount of time
 *             (in minutes) after a scaling event occurs that OpsWorks
 *             should ignore metrics and not raise any additional scaling
 *             events. For example, OpsWorks adds new instances following
 *             an upscaling event but the instances won't start reducing
 *             the load until they have been booted and configured. There
 *             is no point in raising additional scaling events during that
 *             operation, which typically takes several minutes.
 *             IgnoreMetricsTime allows you to direct OpsWorks to not raise
 *             any scaling events long enough to get the new instances
 *             online.
 *           * `CpuThreshold` &mdash; (`Float`) The CPU utilization
 *             threshold, as a percent of the available CPU.
 *           * `MemoryThreshold` &mdash; (`Float`) The memory utilization
 *             threshold, as a percent of the available memory.
 *           * `LoadThreshold` &mdash; (`Float`) The load threshold. For
 *             more information about how load is computed, see Load
 *             (computing).
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describePermissions(params, callback)
 *   Calls the DescribePermissions API operation.
 *   @param params [Object]
 *     * `IamUserArn` &mdash; **required** &mdash; (`String`) The user's
 *       IAM ARN. For more information about IAM ARNs, see Using
 *       Identifiers.
 *     * `StackId` &mdash; **required** &mdash; (`String`) The stack ID.
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
 *       * `Permissions` &mdash; (`Array<Object>`) An array of Permission
 *         objects that describe the stack permissions. If the request
 *         object contains only a stack ID, the array contains a Permission
 *         object with permissions for each of the stack IAM ARNs. If the
 *         request object contains only an IAM ARN, the array contains a
 *         Permission object with permissions for each of the user's stack
 *         IDs. If the request contains a stack ID and an IAM ARN, the
 *         array contains a single Permission object with permissions for
 *         the specified stack and IAM ARN.
 *         * `StackId` &mdash; (`String`) A stack ID.
 *         * `IamUserArn` &mdash; (`String`) The Amazon Resource Name (ARN)
 *           for an AWS Identity and Access Management (IAM) role. For more
 *           information about IAM ARNs, see Using Identifiers.
 *         * `AllowSsh` &mdash; (`Boolean`) Whether the user can use SSH.
 *         * `AllowSudo` &mdash; (`Boolean`) Whether the user can use sudo.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeRaidArrays(params, callback)
 *   Calls the DescribeRaidArrays API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; (`String`) The instance ID.
 *     * `RaidArrayIds` &mdash; (`Array<String>`) An array of RAID array
 *       IDs to be described.
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
 *       * `RaidArrays` &mdash; (`Array<Object>`) A RaidArrays object that
 *         describes the specified RAID arrays.
 *         * `RaidArrayId` &mdash; (`String`) The array ID.
 *         * `InstanceId` &mdash; (`String`) The instance ID.
 *         * `Name` &mdash; (`String`) The array name.
 *         * `RaidLevel` &mdash; (`Integer`) The RAID level.
 *         * `NumberOfDisks` &mdash; (`Integer`) The number of disks in the
 *           array.
 *         * `Size` &mdash; (`Integer`) The array's size.
 *         * `Device` &mdash; (`String`) The array's Linux device. For
 *           example /dev/mdadm0.
 *         * `MountPoint` &mdash; (`String`) The array's mount point.
 *         * `AvailabilityZone` &mdash; (`String`) The array's AWS
 *           Availability Zone. For more information, see Regions and
 *           Endpoints.
 *         * `CreatedAt` &mdash; (`String`) When the RAID array was
 *           created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeServiceErrors(params, callback)
 *   Calls the DescribeServiceErrors API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; (`String`) The stack ID.
 *     * `InstanceId` &mdash; (`String`) The instance ID.
 *     * `ServiceErrorIds` &mdash; (`Array<String>`) An array of service
 *       error IDs to be described.
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
 *       * `ServiceErrors` &mdash; (`Array<Object>`) An array of
 *         ServiceError objects that describe the specified service errors.
 *         * `ServiceErrorId` &mdash; (`String`) The error ID.
 *         * `StackId` &mdash; (`String`) The stack ID.
 *         * `InstanceId` &mdash; (`String`) The instance ID.
 *         * `Type` &mdash; (`String`) The error type.
 *         * `Message` &mdash; (`String`) A message that describes the
 *           error.
 *         * `CreatedAt` &mdash; (`String`) When the error occurred.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeStacks(params, callback)
 *   Calls the DescribeStacks API operation.
 *   @param params [Object]
 *     * `StackIds` &mdash; (`Array<String>`) An array of stack IDs that
 *       specify the stacks to be described.
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
 *       * `Stacks` &mdash; (`Array<Object>`) An array of Stack objects
 *         that describe the stacks.
 *         * `StackId` &mdash; (`String`) The stack ID.
 *         * `Name` &mdash; (`String`) The stack name.
 *         * `Region` &mdash; (`String`) The stack AWS region, such as
 *           "us-east-1". For more information about AWS regions, see
 *           Regions and Endpoints.
 *         * `Attributes` &mdash; (`Object<String>`) The contents of the
 *           stack's attributes bag.
 *         * `ServiceRoleArn` &mdash; (`String`) The stack AWS Identity and
 *           Access Management (IAM) role.
 *         * `DefaultInstanceProfileArn` &mdash; (`String`) The ARN of an
 *           IAM profile that is the default profile for all of the stack's
 *           EC2 instances. For more information about IAM ARNs, see Using
 *           Identifiers.
 *         * `DefaultOs` &mdash; (`String`) The cloned stack default
 *           operating system, which must be either "Amazon Linux" or
 *           "Ubuntu 12.04 LTS".
 *         * `HostnameTheme` &mdash; (`String`) The stack host name theme,
 *           with spaces replaced by underscores.
 *         * `DefaultAvailabilityZone` &mdash; (`String`) The stack's
 *           default Availability Zone. For more information, see Regions
 *           and Endpoints.
 *         * `CustomJson` &mdash; (`String`) A string that contains
 *           user-defined, custom JSON. It is used to override the
 *           corresponding default stack configuration JSON values. The
 *           string should be in the following format and must escape
 *           characters such as '"'.: "{\"key1\": \"value1\", \"key2\":
 *           \"value2\",...}"
 *         * `UseCustomCookbooks` &mdash; (`Boolean`) Whether the stack
 *           uses custom cookbooks.
 *         * `CustomCookbooksSource` &mdash; (`Object`)
 *           * `Type` &mdash; (`String`) The repository type.
 *           * `Url` &mdash; (`String`) The source URL.
 *           * `Username` &mdash; (`String`) The user name.
 *           * `Password` &mdash; (`String`) The repository's password.
 *           * `SshKey` &mdash; (`String`) The repository's SSH key.
 *           * `Revision` &mdash; (`String`) The application's version.
 *             OpsWorks enables you to easily deploy new versions of an
 *             application. One of the simplest approaches is to have
 *             branches or revisions in your repository that represent
 *             different versions that can potentially be deployed.
 *         * `DefaultSshKeyName` &mdash; (`String`) A default SSH key for
 *           the stack's instances. You can override this value when you
 *           create or update an instance.
 *         * `CreatedAt` &mdash; (`String`) Date when the stack was
 *           created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeTimeBasedAutoScaling(params, callback)
 *   Calls the DescribeTimeBasedAutoScaling API operation.
 *   @param params [Object]
 *     * `InstanceIds` &mdash; **required** &mdash; (`Array<String>`) An
 *       array of instance IDs.
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
 *       * `TimeBasedAutoScalingConfigurations` &mdash; (`Array<Object>`)
 *         An array of TimeBasedAutoScalingConfiguration objects that
 *         describe the configuration for the specified instances.
 *         * `InstanceId` &mdash; (`String`) The instance ID.
 *         * `AutoScalingSchedule` &mdash; (`Object`) A
 *           WeeklyAutoScalingSchedule object with the instance schedule.
 *           * `Monday` &mdash; (`Object<String>`) The schedule for Monday.
 *           * `Tuesday` &mdash; (`Object<String>`) The schedule for
 *             Tuesday.
 *           * `Wednesday` &mdash; (`Object<String>`) The schedule for
 *             Wednesday.
 *           * `Thursday` &mdash; (`Object<String>`) The schedule for
 *             Thursday.
 *           * `Friday` &mdash; (`Object<String>`) The schedule for Friday.
 *           * `Saturday` &mdash; (`Object<String>`) The schedule for
 *             Saturday.
 *           * `Sunday` &mdash; (`Object<String>`) The schedule for Sunday.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeUserProfiles(params, callback)
 *   Calls the DescribeUserProfiles API operation.
 *   @param params [Object]
 *     * `IamUserArns` &mdash; **required** &mdash; (`Array<String>`) An
 *       array of IAM user ARNs that identify the users to be described.
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
 *       * `UserProfiles` &mdash; (`Array<Object>`) A Users object that
 *         describes the specified users.
 *         * `IamUserArn` &mdash; (`String`) The user IAM ARN.
 *         * `Name` &mdash; (`String`) The user name.
 *         * `SshUsername` &mdash; (`String`) The user's SSH user name.
 *         * `SshPublicKey` &mdash; (`String`) The user's SSH public key.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVolumes(params, callback)
 *   Calls the DescribeVolumes API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; (`String`) The instance ID.
 *     * `RaidArrayId` &mdash; (`String`) The RAID array ID.
 *     * `VolumeIds` &mdash; (`Array<String>`) Am array of volume IDs to
 *       be described.
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
 *       * `Volumes` &mdash; (`Array<Object>`) An array of volume IDs.
 *         * `VolumeId` &mdash; (`String`) The volume ID.
 *         * `Ec2VolumeId` &mdash; (`String`) The Amazon EC2 volume ID.
 *         * `Name` &mdash; (`String`) The volume name.
 *         * `RaidArrayId` &mdash; (`String`) The RAID array ID.
 *         * `InstanceId` &mdash; (`String`) The instance ID.
 *         * `Status` &mdash; (`String`) The value returned by
 *           DescribeVolumes.
 *         * `Size` &mdash; (`Integer`) The volume size.
 *         * `Device` &mdash; (`String`) The device name.
 *         * `MountPoint` &mdash; (`String`) The volume mount point. For
 *           example "/dev/sdh".
 *         * `Region` &mdash; (`String`) The AWS region. For more
 *           information about AWS regions, see Regions and Endpoints.
 *         * `AvailabilityZone` &mdash; (`String`) The volume Availability
 *           Zone. For more information, see Regions and Endpoints.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getHostnameSuggestion(params, callback)
 *   Calls the GetHostnameSuggestion API operation.
 *   @param params [Object]
 *     * `LayerId` &mdash; **required** &mdash; (`String`) The layer ID.
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
 *       * `LayerId` &mdash; (`String`) The layer ID.
 *       * `Hostname` &mdash; (`String`) The generated hostname.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method rebootInstance(params, callback)
 *   Calls the RebootInstance API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The
 *       instance ID.
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
 * @!method setLoadBasedAutoScaling(params, callback)
 *   Calls the SetLoadBasedAutoScaling API operation.
 *   @param params [Object]
 *     * `LayerId` &mdash; **required** &mdash; (`String`) The layer ID.
 *     * `Enable` &mdash; (`Boolean`) Enables load-based auto scaling for
 *       the layer.
 *     * `UpScaling` &mdash; (`Object`) An AutoScalingThresholds object
 *       with the upscaling threshold configuration. If the load exceeds
 *       these thresholds for a specified amount of time, OpsWorks starts
 *       a specified number of instances.
 *       * `InstanceCount` &mdash; (`Integer`) The number of instances to
 *         add or remove when the load exceeds a threshold.
 *       * `ThresholdsWaitTime` &mdash; (`Integer`) The amount of time,
 *         in minutes, that the load must exceed a threshold before more
 *         instances are added or removed.
 *       * `IgnoreMetricsTime` &mdash; (`Integer`) The amount of time (in
 *         minutes) after a scaling event occurs that OpsWorks should
 *         ignore metrics and not raise any additional scaling events.
 *         For example, OpsWorks adds new instances following an
 *         upscaling event but the instances won't start reducing the
 *         load until they have been booted and configured. There is no
 *         point in raising additional scaling events during that
 *         operation, which typically takes several minutes.
 *         IgnoreMetricsTime allows you to direct OpsWorks to not raise
 *         any scaling events long enough to get the new instances
 *         online.
 *       * `CpuThreshold` &mdash; (`Float`) The CPU utilization
 *         threshold, as a percent of the available CPU.
 *       * `MemoryThreshold` &mdash; (`Float`) The memory utilization
 *         threshold, as a percent of the available memory.
 *       * `LoadThreshold` &mdash; (`Float`) The load threshold. For more
 *         information about how load is computed, see Load (computing).
 *     * `DownScaling` &mdash; (`Object`) An AutoScalingThresholds object
 *       with the downscaling threshold configuration. If the load falls
 *       below these thresholds for a specified amount of time, OpsWorks
 *       stops a specified number of instances.
 *       * `InstanceCount` &mdash; (`Integer`) The number of instances to
 *         add or remove when the load exceeds a threshold.
 *       * `ThresholdsWaitTime` &mdash; (`Integer`) The amount of time,
 *         in minutes, that the load must exceed a threshold before more
 *         instances are added or removed.
 *       * `IgnoreMetricsTime` &mdash; (`Integer`) The amount of time (in
 *         minutes) after a scaling event occurs that OpsWorks should
 *         ignore metrics and not raise any additional scaling events.
 *         For example, OpsWorks adds new instances following an
 *         upscaling event but the instances won't start reducing the
 *         load until they have been booted and configured. There is no
 *         point in raising additional scaling events during that
 *         operation, which typically takes several minutes.
 *         IgnoreMetricsTime allows you to direct OpsWorks to not raise
 *         any scaling events long enough to get the new instances
 *         online.
 *       * `CpuThreshold` &mdash; (`Float`) The CPU utilization
 *         threshold, as a percent of the available CPU.
 *       * `MemoryThreshold` &mdash; (`Float`) The memory utilization
 *         threshold, as a percent of the available memory.
 *       * `LoadThreshold` &mdash; (`Float`) The load threshold. For more
 *         information about how load is computed, see Load (computing).
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
 * @!method setPermission(params, callback)
 *   Calls the SetPermission API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; **required** &mdash; (`String`) The stack ID.
 *     * `IamUserArn` &mdash; **required** &mdash; (`String`) The user's
 *       IAM ARN.
 *     * `AllowSsh` &mdash; (`Boolean`) The user is allowed to use SSH to
 *       communicate with the instance.
 *     * `AllowSudo` &mdash; (`Boolean`) The user is allowed to use sudo
 *       to elevate privileges.
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
 * @!method setTimeBasedAutoScaling(params, callback)
 *   Calls the SetTimeBasedAutoScaling API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The
 *       instance ID.
 *     * `AutoScalingSchedule` &mdash; (`Object`) An AutoScalingSchedule
 *       with the instance schedule.
 *       * `Monday` &mdash; (`Object<String>`) The schedule for Monday.
 *       * `Tuesday` &mdash; (`Object<String>`) The schedule for Tuesday.
 *       * `Wednesday` &mdash; (`Object<String>`) The schedule for
 *         Wednesday.
 *       * `Thursday` &mdash; (`Object<String>`) The schedule for
 *         Thursday.
 *       * `Friday` &mdash; (`Object<String>`) The schedule for Friday.
 *       * `Saturday` &mdash; (`Object<String>`) The schedule for
 *         Saturday.
 *       * `Sunday` &mdash; (`Object<String>`) The schedule for Sunday.
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
 * @!method startInstance(params, callback)
 *   Calls the StartInstance API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The
 *       instance ID.
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
 * @!method startStack(params, callback)
 *   Calls the StartStack API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; **required** &mdash; (`String`) The stack ID.
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
 * @!method stopInstance(params, callback)
 *   Calls the StopInstance API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The
 *       instance ID.
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
 * @!method stopStack(params, callback)
 *   Calls the StopStack API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; **required** &mdash; (`String`) The stack ID.
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
 * @!method updateApp(params, callback)
 *   Calls the UpdateApp API operation.
 *   @param params [Object]
 *     * `AppId` &mdash; **required** &mdash; (`String`) The app ID.
 *     * `Name` &mdash; (`String`) The app name.
 *     * `Description` &mdash; (`String`) A description of the app.
 *     * `Type` &mdash; (`String`) The app type.
 *     * `AppSource` &mdash; (`Object`) A Source object that specifies
 *       the app repository.
 *       * `Type` &mdash; (`String`) The repository type.
 *       * `Url` &mdash; (`String`) The source URL.
 *       * `Username` &mdash; (`String`) The user name.
 *       * `Password` &mdash; (`String`) The repository's password.
 *       * `SshKey` &mdash; (`String`) The repository's SSH key.
 *       * `Revision` &mdash; (`String`) The application's version.
 *         OpsWorks enables you to easily deploy new versions of an
 *         application. One of the simplest approaches is to have
 *         branches or revisions in your repository that represent
 *         different versions that can potentially be deployed.
 *     * `Domains` &mdash; (`Array<String>`) The app's virtual host
 *       settings, with multiple domains separated by commas. For
 *       example: 'www.mysite.com, mysite.com'
 *     * `EnableSsl` &mdash; (`Boolean`) Whether SSL is enabled for the
 *       app.
 *     * `SslConfiguration` &mdash; (`Object`) An SslConfiguration object
 *       with the SSL configuration.
 *       * `Certificate` &mdash; **required** &mdash; (`String`) The
 *         contents of the certificate's domain.crt file.
 *       * `PrivateKey` &mdash; **required** &mdash; (`String`) The
 *         private key; the contents of the certificate's domain.kex
 *         file.
 *       * `Chain` &mdash; (`String`) Optional. Can be used to specify an
 *         intermediate certificate authority key or client
 *         authentication.
 *     * `Attributes` &mdash; (`Object<String>`) One or more user-defined
 *       key/value pairs to be added to the stack attributes bag.
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
 * @!method updateInstance(params, callback)
 *   Calls the UpdateInstance API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; **required** &mdash; (`String`) The
 *       instance ID.
 *     * `LayerIds` &mdash; (`Array<String>`) The instance's layer IDs.
 *     * `InstanceType` &mdash; (`String`) The instance type, which can
 *       be one of the following: m1.small m1.medium m1.large m1.xlarge
 *       c1.medium c1.xlarge m2.xlarge m2.2xlarge m2.4xlarge
 *     * `AutoScalingType` &mdash; (`String`) The instance's auto scaling
 *       type, which has three possible values: AlwaysRunning: A 24x7
 *       instance, which is not affected by auto scaling.
 *       TimeBasedAutoScaling: A time-based auto scaling instance, which
 *       is started and stopped based on a specified schedule.
 *       LoadBasedAutoScaling: A load-based auto scaling instance, which
 *       is started and stopped based on load metrics.
 *     * `Hostname` &mdash; (`String`) The instance host name.
 *     * `Os` &mdash; (`String`) The instance operating system.
 *     * `SshKeyName` &mdash; (`String`) The instance SSH key name.
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
 * @!method updateLayer(params, callback)
 *   Calls the UpdateLayer API operation.
 *   @param params [Object]
 *     * `LayerId` &mdash; **required** &mdash; (`String`) The layer ID.
 *     * `Name` &mdash; (`String`) The layer name, which is used by the
 *       console.
 *     * `Shortname` &mdash; (`String`) The layer short name, which is
 *       used internally by OpsWorks, by Chef. The shortname is also used
 *       as the name for the directory where your app files are
 *       installed. It can have a maximum of 200 characters and must be
 *       in the following format: /\A[a-z0-9\-\_\.]+\Z/.
 *     * `Attributes` &mdash; (`Object<String>`) One or more user-defined
 *       key/value pairs to be added to the stack attributes bag.
 *     * `CustomInstanceProfileArn` &mdash; (`String`) The ARN of an IAM
 *       profile to be used for all of the layer's EC2 instances. For
 *       more information about IAM ARNs, see Using Identifiers.
 *     * `CustomSecurityGroupIds` &mdash; (`Array<String>`) An array
 *       containing the layer's custom security group IDs.
 *     * `Packages` &mdash; (`Array<String>`) An array of Package objects
 *       that describe the layer's packages.
 *     * `VolumeConfigurations` &mdash; (`Array<Object>`) A
 *       VolumeConfigurations object that describes the layer's Amazon
 *       EBS volumes.
 *       * `MountPoint` &mdash; **required** &mdash; (`String`) The
 *         volume mount point. For example "/dev/sdh".
 *       * `RaidLevel` &mdash; (`Integer`) The volume RAID level.
 *       * `NumberOfDisks` &mdash; **required** &mdash; (`Integer`) The
 *         number of disks in the volume.
 *       * `Size` &mdash; **required** &mdash; (`Integer`) The volume
 *         size.
 *     * `EnableAutoHealing` &mdash; (`Boolean`) Whether to disable auto
 *       healing for the layer.
 *     * `AutoAssignElasticIps` &mdash; (`Boolean`) Whether to
 *       automatically assign an Elastic IP address to the layer.
 *     * `CustomRecipes` &mdash; (`Object`) A LayerCustomRecipes object
 *       that specifies the layer's custom recipes.
 *       * `Setup` &mdash; (`Array<String>`) An array of custom recipe
 *         names to be run following a setup event.
 *       * `Configure` &mdash; (`Array<String>`) An array of custom
 *         recipe names to be run following a configure event.
 *       * `Deploy` &mdash; (`Array<String>`) An array of custom recipe
 *         names to be run following a deploy event.
 *       * `Undeploy` &mdash; (`Array<String>`) An array of custom recipe
 *         names to be run following a undeploy event.
 *       * `Shutdown` &mdash; (`Array<String>`) An array of custom recipe
 *         names to be run following a shutdown event.
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
 * @!method updateStack(params, callback)
 *   Calls the UpdateStack API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; **required** &mdash; (`String`) The stack ID.
 *     * `Name` &mdash; (`String`) The stack's new name.
 *     * `Attributes` &mdash; (`Object<String>`) One or more user-defined
 *       key/value pairs to be added to the stack attributes bag.
 *     * `ServiceRoleArn` &mdash; (`String`) The stack AWS Identity and
 *       Access Management (IAM) role, which allows OpsWorks to work with
 *       AWS resources on your behalf. You must set this parameter to the
 *       Amazon Resource Name (ARN) for an existing IAM role. For more
 *       information about IAM ARNs, see Using Identifiers.
 *     * `DefaultInstanceProfileArn` &mdash; (`String`) The ARN of an IAM
 *       profile that is the default profile for all of the stack's EC2
 *       instances. For more information about IAM ARNs, see Using
 *       Identifiers.
 *     * `DefaultOs` &mdash; (`String`) The cloned stack default
 *       operating system, which must be either "Amazon Linux" or "Ubuntu
 *       12.04 LTS".
 *     * `HostnameTheme` &mdash; (`String`) The stack's new host name
 *       theme, with spaces are replaced by underscores. The theme is
 *       used to generate hostnames for the stack's instances. By
 *       default, HostnameTheme is set to Layer_Dependent, which creates
 *       hostnames by appending integers to the layer's shortname. The
 *       other themes are: Baked_Goods Clouds European_Cities Fruits
 *       Greek_Deities Legendary_Creatures_from_Japan Planets_and_Moons
 *       Roman_Deities Scottish_Islands US_Cities Wild_Cats To obtain a
 *       generated hostname, call GetHostNameSuggestion, which returns a
 *       hostname based on the current theme.
 *     * `DefaultAvailabilityZone` &mdash; (`String`) The stack new
 *       default Availability Zone. For more information, see Regions and
 *       Endpoints.
 *     * `CustomJson` &mdash; (`String`) A string that contains
 *       user-defined, custom JSON. It is used to override the
 *       corresponding default stack configuration JSON values. The
 *       string should be in the following format and must escape
 *       characters such as '"'.: "{\"key1\": \"value1\", \"key2\":
 *       \"value2\",...}"
 *     * `UseCustomCookbooks` &mdash; (`Boolean`) Whether the stack uses
 *       custom cookbooks.
 *     * `CustomCookbooksSource` &mdash; (`Object`)
 *       * `Type` &mdash; (`String`) The repository type.
 *       * `Url` &mdash; (`String`) The source URL.
 *       * `Username` &mdash; (`String`) The user name.
 *       * `Password` &mdash; (`String`) The repository's password.
 *       * `SshKey` &mdash; (`String`) The repository's SSH key.
 *       * `Revision` &mdash; (`String`) The application's version.
 *         OpsWorks enables you to easily deploy new versions of an
 *         application. One of the simplest approaches is to have
 *         branches or revisions in your repository that represent
 *         different versions that can potentially be deployed.
 *     * `DefaultSshKeyName` &mdash; (`String`) A default SSH key for the
 *       stack instances. You can override this value when you create or
 *       update an instance.
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
 * @!method updateUserProfile(params, callback)
 *   Calls the UpdateUserProfile API operation.
 *   @param params [Object]
 *     * `IamUserArn` &mdash; **required** &mdash; (`String`) The user
 *       IAM ARN.
 *     * `SshUsername` &mdash; (`String`) The user's new SSH user name.
 *     * `SshPublicKey` &mdash; (`String`) The user's new SSH public key.
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
AWS.OpsWorks.Client = inherit({});
