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
 * === Sending a Request Using OpsWorks
 *
 *   svc = new AWS.OpsWorks();
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
 *     * +SourceStackId+ - (*required*, <tt>String</tt>) The source stack
 *       ID.
 *     * +Name+ - (*required*, <tt>String</tt>) The cloned stack name.
 *     * +Region+ - (*required*, <tt>String</tt>) The cloned stack AWS
 *       region, such as "us-east-1". For more information about AWS
 *       regions, see Regions and Endpoints
 *     * +Attributes+ - (<tt>Object<String></tt>) A list of stack
 *       attributes and values as key/value pairs to be added to the
 *       cloned stack.
 *     * +ServiceRoleArn+ - (*required*, <tt>String</tt>) The stack AWS
 *       Identity and Access Management (IAM) role, which allows
 *       &charlie; to work with AWS resources on your behalf. You must
 *       set this parameter to the Amazon Resource Name (ARN) for an
 *       existing IAM role. If you create a stack by using the &charlie;
 *       console, it creates the role for you. You can obtain an existing
 *       stack's IAM ARN programmatically by calling DescribePermissions.
 *       For more information about IAM ARNs, see Using Identifiers.
 *     * +DefaultInstanceProfileArn+ - (*required*, <tt>String</tt>) The
 *       ARN of an IAM profile that is the default profile for all of the
 *       stack's EC2 instances. For more information about IAM ARNs, see
 *       Using Identifiers.
 *     * +DefaultOs+ - (<tt>String</tt>) The cloned stack default
 *       operating system, which must be either "Amazon Linux" or "Ubuntu
 *       12.04 LTS".
 *     * +HostnameTheme+ - (<tt>String</tt>) The stack's host name theme,
 *       with spaces are replaced by underscores. The theme is used to
 *       generate hostnames for the stack's instances. By default,
 *       HostnameTheme is set to Layer_Dependent, which creates hostnames
 *       by appending integers to the layer's shortname. The other themes
 *       are: Baked_Goods Clouds European_Cities Fruits Greek_Deities
 *       Legendary_Creatures_from_Japan Planets_and_Moons Roman_Deities
 *       Scottish_Islands US_Cities Wild_Cats To obtain a generated
 *       hostname, call GetHostNameSuggestion, which returns a hostname
 *       based on the current theme.
 *     * +DefaultAvailabilityZone+ - (<tt>String</tt>) The cloned stack's
 *       Availability Zone. For more information, see Regions and
 *       Endpoints.
 *     * +CustomJson+ - (<tt>String</tt>) A string that contains
 *       user-defined, custom JSON. It is used to override the
 *       corresponding default stack configuration JSON values. The
 *       string should be in the following format and must escape
 *       characters such as '"'.: "{\"key1\": \"value1\", \"key2\":
 *       \"value2\",...}"
 *     * +UseCustomCookbooks+ - (<tt>Boolean</tt>) Whether to use custom
 *       cookbooks.
 *     * +CustomCookbooksSource+ - (<tt>Object</tt>)
 *       * +Type+ - (<tt>String</tt>) The repository type.
 *       * +Url+ - (<tt>String</tt>) The source URL.
 *       * +Username+ - (<tt>String</tt>) The user name.
 *       * +Password+ - (<tt>String</tt>) The repository's password.
 *       * +SshKey+ - (<tt>String</tt>) The repository's SSH key.
 *       * +Revision+ - (<tt>String</tt>) The application's version.
 *         &charlie; enables you to easily deploy new versions of an
 *         application. One of the simplest approaches is to have
 *         branches or revisions in your repository that represent
 *         different versions that can potentially be deployed.
 *     * +DefaultSshKeyName+ - (<tt>String</tt>) A default SSH key for
 *       the stack instances. You can override this value when you create
 *       or update an instance.
 *     * +ClonePermissions+ - (<tt>Boolean</tt>) Whether to clone the
 *       source stack's permissions.
 *     * +CloneAppIds+ - (<tt>Array<String></tt>) A list of source stack
 *       app IDs to be included in the cloned stack.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StackId+ - (<tt>String</tt>) The cloned stack ID.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createApp(params, callback)
 *   Calls the CreateApp API operation.
 *   @param params [Object]
 *     * +StackId+ - (*required*, <tt>String</tt>) The stack ID.
 *     * +Name+ - (*required*, <tt>String</tt>) The app name.
 *     * +Description+ - (<tt>String</tt>) A description of the app.
 *     * +Type+ - (*required*, <tt>String</tt>) The app type. Each
 *       supported type is associated with a particular layer. For
 *       example, PHP applications are associated with a PHP layer.
 *       &charlie; deploys an application to those instances that are
 *       members of the corresponding layer.
 *     * +AppSource+ - (<tt>Object</tt>) A Source object that specifies
 *       the app repository.
 *       * +Type+ - (<tt>String</tt>) The repository type.
 *       * +Url+ - (<tt>String</tt>) The source URL.
 *       * +Username+ - (<tt>String</tt>) The user name.
 *       * +Password+ - (<tt>String</tt>) The repository's password.
 *       * +SshKey+ - (<tt>String</tt>) The repository's SSH key.
 *       * +Revision+ - (<tt>String</tt>) The application's version.
 *         &charlie; enables you to easily deploy new versions of an
 *         application. One of the simplest approaches is to have
 *         branches or revisions in your repository that represent
 *         different versions that can potentially be deployed.
 *     * +Domains+ - (<tt>Array<String></tt>) The app virtual host
 *       settings, with multiple domains separated by commas. For
 *       example: 'www.mysite.com, mysite.com'
 *     * +EnableSsl+ - (<tt>Boolean</tt>) Whether to enable SSL for the
 *       app.
 *     * +SslConfiguration+ - (<tt>Object</tt>) An SslConfiguration
 *       object with the SSL configuration.
 *       * +Certificate+ - (*required*, <tt>String</tt>) The contents of
 *         the certificate's domain.crt file.
 *       * +PrivateKey+ - (*required*, <tt>String</tt>) The private key;
 *         the contents of the certificate's domain.kex file.
 *       * +Chain+ - (<tt>String</tt>) Optional. Can be used to specify
 *         an intermediate certificate authority key or client
 *         authentication.
 *     * +Attributes+ - (<tt>Object<String></tt>) One or more
 *       user-defined key/value pairs to be added to the stack attributes
 *       bag.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AppId+ - (<tt>String</tt>) The app ID.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDeployment(params, callback)
 *   Calls the CreateDeployment API operation.
 *   @param params [Object]
 *     * +StackId+ - (*required*, <tt>String</tt>) The stack ID.
 *     * +AppId+ - (*required*, <tt>String</tt>) The app ID, for app
 *       deployments.
 *     * +InstanceIds+ - (<tt>Array<String></tt>) The instance IDs for
 *       the deployment targets.
 *     * +Command+ - (*required*, <tt>Object</tt>) A DeploymentCommand
 *       object that describes details of the operation.
 *       * +Name+ - (*required*, <tt>String</tt>) Specifies the
 *         deployment operation. You can specify only one command. For
 *         stacks, the available commands are: ExecuteRecipes: Execute
 *         the recipes that are specified by the Args parameter.
 *         InstallDependencies: Installs the stack's dependencies.
 *         UpdateCustomCookbooks: Update the stack's custom cookbooks.
 *         UpdateDependencies: Update the stack's dependencies. For apps,
 *         the available commands are: DeployApp: Deploy the app.
 *         RollbackApp Roll the app back to the previous version. When
 *         you update an app, &charlie; stores the previous version, up
 *         to a maximum of five versions. You can use this command to
 *         roll an app back as many as four versions. StartApp: Start the
 *         app's web or application server. StopApp: Stop the app's web
 *         or application server. UndeployApp: Undeploy the app.
 *       * +Args+ - (*required*, <tt>Object<Array<String>></tt>) An array
 *         of command arguments. This parameter is currently used only to
 *         specify the list of recipes to be executed by the
 *         ExecuteRecipes command.
 *     * +Comment+ - (<tt>String</tt>) A user-defined comment.
 *     * +CustomJson+ - (<tt>String</tt>) A string that contains
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
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DeploymentId+ - (<tt>String</tt>) The deployment ID, which can
 *         be used with other requests to identify the deployment.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createInstance(params, callback)
 *   Calls the CreateInstance API operation.
 *   @param params [Object]
 *     * +StackId+ - (*required*, <tt>String</tt>) The stack ID.
 *     * +LayerIds+ - (*required*, <tt>Array<String></tt>) An array that
 *       contains the instance layer IDs.
 *     * +InstanceType+ - (<tt>String</tt>) The instance type, which can
 *       be one of the following: m1.small m1.medium m1.large m1.xlarge
 *       c1.medium c1.xlarge m2.xlarge m2.2xlarge m2.4xlarge
 *     * +AutoScalingType+ - (<tt>String</tt>) The instance auto scaling
 *       type, which has three possible values: AlwaysRunning: A 24x7
 *       instance, which is not affected by auto scaling.
 *       TimeBasedAutoScaling: A time-based auto scaling instance, which
 *       is started and stopped based on a specified schedule. To specify
 *       the schedule, call SetTimeBasedAutoScaling.
 *       LoadBasedAutoScaling: A load-based auto scaling instance, which
 *       is started and stopped based on load metrics. To use load-based
 *       auto scaling, you must enable it for the instance layer and
 *       configure the thresholds by calling SetLoadBasedAutoScaling.
 *     * +Hostname+ - (<tt>String</tt>) The instance host name.
 *     * +Os+ - (<tt>String</tt>) The instance operating system.
 *     * +SshKeyName+ - (<tt>String</tt>) The instance SSH key name.
 *     * +AvailabilityZone+ - (<tt>String</tt>) The instance Availability
 *       Zone. For more information, see Regions and Endpoints.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InstanceId+ - (<tt>String</tt>) The instance ID.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createLayer(params, callback)
 *   Calls the CreateLayer API operation.
 *   @param params [Object]
 *     * +StackId+ - (*required*, <tt>String</tt>) The layer stack ID.
 *     * +Type+ - (*required*, <tt>String</tt>) The layer type. A stack
 *       cannot have more than one layer of the same type.
 *     * +Name+ - (*required*, <tt>String</tt>) The layer name, which is
 *       used by the console.
 *     * +Shortname+ - (<tt>String</tt>) The layer short name, which is
 *       used internally by &charlie; and by Chef recipes. The shortname
 *       is also used as the name for the directory where your app files
 *       are installed. It can have a maximum of 200 characters, which
 *       are limited to the alphanumeric characters, '-', '_', and '.'.
 *     * +Attributes+ - (<tt>Object<String></tt>) One or more
 *       user-defined key/value pairs to be added to the stack attributes
 *       bag.
 *     * +CustomInstanceProfileArn+ - (<tt>String</tt>) The ARN of an IAM
 *       profile that to be used for the layer's EC2 instances. For more
 *       information about IAM ARNs, see Using Identifiers.
 *     * +CustomSecurityGroupIds+ - (<tt>Array<String></tt>) An array
 *       containing the layer custom security group IDs.
 *     * +Packages+ - (<tt>Array<String></tt>) An array of Package
 *       objects that describe the layer packages.
 *     * +VolumeConfigurations+ - (<tt>Array<Object></tt>) A
 *       VolumeConfigurations object that describes the layer Amazon EBS
 *       volumes.
 *       * +MountPoint+ - (*required*, <tt>String</tt>) The volume mount
 *         point. For example "/dev/sdh".
 *       * +RaidLevel+ - (<tt>Integer</tt>) The volume RAID level.
 *       * +NumberOfDisks+ - (*required*, <tt>Integer</tt>) The number of
 *         disks in the volume.
 *       * +Size+ - (*required*, <tt>Integer</tt>) The volume size.
 *     * +EnableAutoHealing+ - (<tt>Boolean</tt>) Whether to disable auto
 *       healing for the layer.
 *     * +AutoAssignElasticIps+ - (<tt>Boolean</tt>) Whether to
 *       automatically assign an Elastic IP address to the layer.
 *     * +CustomRecipes+ - (<tt>Object</tt>) A LayerCustomRecipes object
 *       that specifies the layer custom recipes.
 *       * +Setup+ - (<tt>Array<String></tt>) An array of custom recipe
 *         names to be run following a setup event.
 *       * +Configure+ - (<tt>Array<String></tt>) An array of custom
 *         recipe names to be run following a configure event.
 *       * +Deploy+ - (<tt>Array<String></tt>) An array of custom recipe
 *         names to be run following a deploy event.
 *       * +Undeploy+ - (<tt>Array<String></tt>) An array of custom
 *         recipe names to be run following a undeploy event.
 *       * +Shutdown+ - (<tt>Array<String></tt>) An array of custom
 *         recipe names to be run following a shutdown event.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +LayerId+ - (<tt>String</tt>) The layer ID.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createStack(params, callback)
 *   Calls the CreateStack API operation.
 *   @param params [Object]
 *     * +Name+ - (*required*, <tt>String</tt>) The stack name.
 *     * +Region+ - (*required*, <tt>String</tt>) The stack AWS region,
 *       such as "us-east-1". For more information about Amazon regions,
 *       see Regions and Endpoints.
 *     * +Attributes+ - (<tt>Object<String></tt>) One or more
 *       user-defined key/value pairs to be added to the stack attributes
 *       bag.
 *     * +ServiceRoleArn+ - (*required*, <tt>String</tt>) The stack AWS
 *       Identity and Access Management (IAM) role, which allows
 *       &charlie; to work with AWS resources on your behalf. You must
 *       set this parameter to the Amazon Resource Name (ARN) for an
 *       existing IAM role. For more information about IAM ARNs, see
 *       Using Identifiers.
 *     * +DefaultInstanceProfileArn+ - (*required*, <tt>String</tt>) The
 *       ARN of an IAM profile that is the default profile for all of the
 *       stack's EC2 instances. For more information about IAM ARNs, see
 *       Using Identifiers.
 *     * +DefaultOs+ - (<tt>String</tt>) The cloned stack default
 *       operating system, which must be either "Amazon Linux" or "Ubuntu
 *       12.04 LTS".
 *     * +HostnameTheme+ - (<tt>String</tt>) The stack's host name theme,
 *       with spaces are replaced by underscores. The theme is used to
 *       generate hostnames for the stack's instances. By default,
 *       HostnameTheme is set to Layer_Dependent, which creates hostnames
 *       by appending integers to the layer's shortname. The other themes
 *       are: Baked_Goods Clouds European_Cities Fruits Greek_Deities
 *       Legendary_Creatures_from_Japan Planets_and_Moons Roman_Deities
 *       Scottish_Islands US_Cities Wild_Cats To obtain a generated
 *       hostname, call GetHostNameSuggestion, which returns a hostname
 *       based on the current theme.
 *     * +DefaultAvailabilityZone+ - (<tt>String</tt>) The stack default
 *       Availability Zone. For more information, see Regions and
 *       Endpoints.
 *     * +CustomJson+ - (<tt>String</tt>) A string that contains
 *       user-defined, custom JSON. It is used to override the
 *       corresponding default stack configuration JSON values. The
 *       string should be in the following format and must escape
 *       characters such as '"'.: "{\"key1\": \"value1\", \"key2\":
 *       \"value2\",...}"
 *     * +UseCustomCookbooks+ - (<tt>Boolean</tt>) Whether the stack uses
 *       custom cookbooks.
 *     * +CustomCookbooksSource+ - (<tt>Object</tt>)
 *       * +Type+ - (<tt>String</tt>) The repository type.
 *       * +Url+ - (<tt>String</tt>) The source URL.
 *       * +Username+ - (<tt>String</tt>) The user name.
 *       * +Password+ - (<tt>String</tt>) The repository's password.
 *       * +SshKey+ - (<tt>String</tt>) The repository's SSH key.
 *       * +Revision+ - (<tt>String</tt>) The application's version.
 *         &charlie; enables you to easily deploy new versions of an
 *         application. One of the simplest approaches is to have
 *         branches or revisions in your repository that represent
 *         different versions that can potentially be deployed.
 *     * +DefaultSshKeyName+ - (<tt>String</tt>) A default SSH key for
 *       the stack instances. You can override this value when you create
 *       or update an instance.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StackId+ - (<tt>String</tt>) The stack ID, which is an opaque
 *         string that you use to identify the stack when performing
 *         actions such as DescribeStacks.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createUserProfile(params, callback)
 *   Calls the CreateUserProfile API operation.
 *   @param params [Object]
 *     * +IamUserArn+ - (*required*, <tt>String</tt>) The user's IAM ARN.
 *     * +SshUsername+ - (<tt>String</tt>) The user's SSH user name.
 *     * +SshPublicKey+ - (<tt>String</tt>) The user's public SSH key.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +IamUserArn+ - (<tt>String</tt>) The user's IAM ARN.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteApp(params, callback)
 *   Calls the DeleteApp API operation.
 *   @param params [Object]
 *     * +AppId+ - (*required*, <tt>String</tt>) The app ID.
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
 * @!method deleteInstance(params, callback)
 *   Calls the DeleteInstance API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The instance ID.
 *     * +DeleteElasticIp+ - (<tt>Boolean</tt>) Whether to delete the
 *       instance Elastic IP address.
 *     * +DeleteVolumes+ - (<tt>Boolean</tt>) Whether to delete the
 *       instance Amazon EBS volumes.
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
 * @!method deleteLayer(params, callback)
 *   Calls the DeleteLayer API operation.
 *   @param params [Object]
 *     * +LayerId+ - (*required*, <tt>String</tt>) The layer ID.
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
 * @!method deleteStack(params, callback)
 *   Calls the DeleteStack API operation.
 *   @param params [Object]
 *     * +StackId+ - (*required*, <tt>String</tt>) The stack ID.
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
 * @!method deleteUserProfile(params, callback)
 *   Calls the DeleteUserProfile API operation.
 *   @param params [Object]
 *     * +IamUserArn+ - (*required*, <tt>String</tt>) The user's IAM ARN.
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
 * @!method describeApps(params, callback)
 *   Calls the DescribeApps API operation.
 *   @param params [Object]
 *     * +StackId+ - (<tt>String</tt>) The app stack ID.
 *     * +AppIds+ - (<tt>Array<String></tt>) An array of app IDs for the
 *       apps to be described.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Apps+ - (<tt>Array<Object></tt>) An array of App objects that
 *         describe the specified apps.
 *         * +AppId+ - (<tt>String</tt>) The app ID.
 *         * +StackId+ - (<tt>String</tt>) The app stack ID.
 *         * +Name+ - (<tt>String</tt>) The app name.
 *         * +Description+ - (<tt>String</tt>) A description of the app.
 *         * +Type+ - (<tt>String</tt>) The app type.
 *         * +AppSource+ - (<tt>Object</tt>) A Source object that describes
 *           the app repository.
 *           * +Type+ - (<tt>String</tt>) The repository type.
 *           * +Url+ - (<tt>String</tt>) The source URL.
 *           * +Username+ - (<tt>String</tt>) The user name.
 *           * +Password+ - (<tt>String</tt>) The repository's password.
 *           * +SshKey+ - (<tt>String</tt>) The repository's SSH key.
 *           * +Revision+ - (<tt>String</tt>) The application's version.
 *             &charlie; enables you to easily deploy new versions of an
 *             application. One of the simplest approaches is to have
 *             branches or revisions in your repository that represent
 *             different versions that can potentially be deployed.
 *         * +Domains+ - (<tt>Array<String></tt>) The app vhost settings,
 *           with multiple domains separated by commas. For example:
 *           'www.mysite.com, mysite.com'
 *         * +EnableSsl+ - (<tt>Boolean</tt>) Whether to enable SSL for the
 *           app.
 *         * +SslConfiguration+ - (<tt>Object</tt>) An SslConfiguration
 *           object with the SSL configuration.
 *           * +Certificate+ - (<tt>String</tt>) The contents
 *             of the certificate's domain.crt file.
 *           * +PrivateKey+ - (<tt>String</tt>) The private
 *             key; the contents of the certificate's domain.kex file.
 *           * +Chain+ - (<tt>String</tt>) Optional. Can be used to specify
 *             an intermediate certificate authority key or client
 *             authentication.
 *         * +Attributes+ - (<tt>Object<String></tt>) The contents of the
 *           stack attributes bag.
 *         * +CreatedAt+ - (<tt>String</tt>) When the app was created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCommands(params, callback)
 *   Calls the DescribeCommands API operation.
 *   @param params [Object]
 *     * +DeploymentId+ - (<tt>String</tt>) The deployment ID.
 *     * +InstanceId+ - (<tt>String</tt>) The instance ID.
 *     * +CommandIds+ - (<tt>Array<String></tt>) An array of IDs for the
 *       commands to be described.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Commands+ - (<tt>Array<Object></tt>) An array of
 *         InstanceCommand objects that describe each of the specified
 *         commands.
 *         * +CommandId+ - (<tt>String</tt>) The command ID.
 *         * +InstanceId+ - (<tt>String</tt>) The ID of the instance where
 *           the command was executed.
 *         * +DeploymentId+ - (<tt>String</tt>) The command deployment ID.
 *         * +CreatedAt+ - (<tt>String</tt>) Date and time when the command
 *           was run.
 *         * +AcknowledgedAt+ - (<tt>String</tt>) Date and time when the
 *           command was acknowledged.
 *         * +CompletedAt+ - (<tt>String</tt>) Date when the command
 *           completed.
 *         * +Status+ - (<tt>String</tt>) The command status
 *         * +ExitCode+ - (<tt>Integer</tt>) The command exit code.
 *         * +LogUrl+ - (<tt>String</tt>) The URL of the command log.
 *         * +Type+ - (<tt>String</tt>) The command name.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDeployments(params, callback)
 *   Calls the DescribeDeployments API operation.
 *   @param params [Object]
 *     * +StackId+ - (<tt>String</tt>) The stack ID.
 *     * +AppId+ - (<tt>String</tt>) The app ID.
 *     * +DeploymentIds+ - (<tt>Array<String></tt>) An array of
 *       deployment IDs to be described.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Deployments+ - (<tt>Array<Object></tt>) An array of Deployment
 *         objects that describe the deployments.
 *         * +DeploymentId+ - (<tt>String</tt>) The deployment ID.
 *         * +StackId+ - (<tt>String</tt>) The stack ID.
 *         * +AppId+ - (<tt>String</tt>) The app ID.
 *         * +CreatedAt+ - (<tt>String</tt>) Date when the deployment was
 *           created.
 *         * +CompletedAt+ - (<tt>String</tt>) Date when the deployment
 *           completed.
 *         * +Duration+ - (<tt>Integer</tt>) The deployment duration.
 *         * +IamUserArn+ - (<tt>String</tt>) The user's IAM ARN.
 *         * +Comment+ - (<tt>String</tt>) A user-defined comment.
 *         * +Command+ - (<tt>Object</tt>)
 *           * +Name+ - (<tt>String</tt>) Specifies the
 *             deployment operation. You can specify only one command. For
 *             stacks, the available commands are: ExecuteRecipes: Execute
 *             the recipes that are specified by the Args parameter.
 *             InstallDependencies: Installs the stack's dependencies.
 *             UpdateCustomCookbooks: Update the stack's custom cookbooks.
 *             UpdateDependencies: Update the stack's dependencies. For
 *             apps, the available commands are: DeployApp: Deploy the app.
 *             RollbackApp Roll the app back to the previous version. When
 *             you update an app, &charlie; stores the previous version, up
 *             to a maximum of five versions. You can use this command to
 *             roll an app back as many as four versions. StartApp: Start
 *             the app's web or application server. StopApp: Stop the app's
 *             web or application server. UndeployApp: Undeploy the app.
 *           * +Args+ - (<tt>Object<Array<String>></tt>) An
 *             array of command arguments. This parameter is currently used
 *             only to specify the list of recipes to be executed by the
 *             ExecuteRecipes command.
 *         * +Status+ - (<tt>String</tt>) The deployment status.
 *         * +CustomJson+ - (<tt>String</tt>) A string that contains
 *           user-defined custom JSON. It is used to override the
 *           corresponding default stack configuration JSON values for
 *           stack. The string should be in the following format and must
 *           escape characters such as '"'.: "{\"key1\": \"value1\",
 *           \"key2\": \"value2\",...}"
 *         * +InstanceIds+ - (<tt>Array<String></tt>) The IDs of the target
 *           instances.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeElasticIps(params, callback)
 *   Calls the DescribeElasticIps API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (<tt>String</tt>) The instance ID.
 *     * +Ips+ - (<tt>Array<String></tt>) An array of Elastic IP
 *       addresses to be described.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ElasticIps+ - (<tt>Array<Object></tt>) An ElasticIps object
 *         that describes the specified Elastic IP addresses.
 *         * +Ip+ - (<tt>String</tt>) The Elastic IP address
 *         * +Name+ - (<tt>String</tt>) The Elastic IP address name.
 *         * +Region+ - (<tt>String</tt>) The AWS region. For more
 *           information, see Regions and Endpoints.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeInstances(params, callback)
 *   Calls the DescribeInstances API operation.
 *   @param params [Object]
 *     * +StackId+ - (<tt>String</tt>) A stack ID.
 *     * +LayerId+ - (<tt>String</tt>) A layer ID.
 *     * +AppId+ - (<tt>String</tt>) An app ID.
 *     * +InstanceIds+ - (<tt>Array<String></tt>) An array of instance
 *       IDs to be described.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Instances+ - (<tt>Array<Object></tt>) An array of Instance
 *         objects that describe the instances.
 *         * +InstanceId+ - (<tt>String</tt>) The instance ID.
 *         * +Ec2InstanceId+ - (<tt>String</tt>) The ID of the associated
 *           Amazon EC2 instance.
 *         * +Hostname+ - (<tt>String</tt>) The instance host name.
 *         * +StackId+ - (<tt>String</tt>) The stack ID.
 *         * +LayerIds+ - (<tt>Array<String></tt>) An array containing the
 *           instance layer IDs.
 *         * +SecurityGroupIds+ - (<tt>Array<String></tt>) An array
 *           containing the instance security group IDs.
 *         * +InstanceType+ - (<tt>String</tt>) The instance type, which
 *           can be one of the following: m1.small m1.medium m1.large
 *           m1.xlarge c1.medium c1.xlarge m2.xlarge m2.2xlarge m2.4xlarge
 *         * +InstanceProfileArn+ - (<tt>String</tt>) The ARN of the
 *           instance's IAM profile. For more information about IAM ARNs,
 *           see Using Identifiers.
 *         * +Status+ - (<tt>String</tt>) The instance status.
 *         * +Os+ - (<tt>String</tt>) The instance operating system.
 *         * +AvailabilityZone+ - (<tt>String</tt>) The instance
 *           Availability Zone. For more information, see Regions and
 *           Endpoints.
 *         * +PublicDns+ - (<tt>String</tt>) The instance public DNS name.
 *         * +PrivateDns+ - (<tt>String</tt>) The instance private DNS
 *           name.
 *         * +PublicIp+ - (<tt>String</tt>) The instance public IP address.
 *         * +PrivateIp+ - (<tt>String</tt>) The instance private IP
 *           address.
 *         * +ElasticIp+ - (<tt>String</tt>) The instance Elastic IP
 *           address.
 *         * +AutoScalingType+ - (<tt>String</tt>) The instance's auto
 *           scaling type, which has three possible values: AlwaysRunning:
 *           A 24x7 instance, which is not affected by auto scaling.
 *           TimeBasedAutoScaling: A time-based auto scaling instance,
 *           which is started and stopped based on a specified schedule.
 *           LoadBasedAutoScaling: A load-based auto scaling instance,
 *           which is started and stopped based on load metrics.
 *         * +SshKeyName+ - (<tt>String</tt>) The instance SSH key name.
 *         * +SshHostRsaKeyFingerprint+ - (<tt>String</tt>) The SSH key's
 *           RSA fingerprint.
 *         * +SshHostDsaKeyFingerprint+ - (<tt>String</tt>) The SSH key's
 *           DSA fingerprint.
 *         * +CreatedAt+ - (<tt>String</tt>) The time that the instance was
 *           created.
 *         * +LastServiceErrorId+ - (<tt>String</tt>) The ID of the last
 *           service error. Call DescribeServiceErrors for details.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLayers(params, callback)
 *   Calls the DescribeLayers API operation.
 *   @param params [Object]
 *     * +StackId+ - (*required*, <tt>String</tt>) The stack ID.
 *     * +LayerIds+ - (<tt>Array<String></tt>) An array of layer IDs that
 *       specify the layers to be described.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Layers+ - (<tt>Array<Object></tt>) An array of Layer objects
 *         that describe the layers.
 *         * +StackId+ - (<tt>String</tt>) The layer stack ID.
 *         * +LayerId+ - (<tt>String</tt>) The layer ID.
 *         * +Type+ - (<tt>String</tt>) The layer type, which must be one
 *           of the following: Custom GangliaMonitoringMaster HaProxy
 *           MemcachedServer MySqlMaster NodeJsAppServer PhpAppServer
 *           RailsAppServer WebServer
 *         * +Name+ - (<tt>String</tt>) The layer name.
 *         * +Shortname+ - (<tt>String</tt>) The layer short name.
 *         * +Attributes+ - (<tt>Object<String></tt>) The layer attributes.
 *         * +CustomInstanceProfileArn+ - (<tt>String</tt>) The ARN of the
 *           default IAM profile to be used for the layer's EC2 instances.
 *           For more information about IAM ARNs, see Using Identifiers.
 *         * +CustomSecurityGroupIds+ - (<tt>Array<String></tt>) An array
 *           containing the layer's custom security group IDs.
 *         * +DefaultSecurityGroupNames+ - (<tt>Array<String></tt>) An
 *           array containing the layer's security group names.
 *         * +Packages+ - (<tt>Array<String></tt>) An array of Package
 *           objects that describe the layer's packages.
 *         * +VolumeConfigurations+ - (<tt>Array<Object></tt>) A
 *           VolumeConfigurations object that describes the layer's Amazon
 *           EBS volumes.
 *           * +MountPoint+ - (<tt>String</tt>) The volume
 *             mount point. For example "/dev/sdh".
 *           * +RaidLevel+ - (<tt>Integer</tt>) The volume RAID level.
 *           * +NumberOfDisks+ - (<tt>Integer</tt>) The number
 *             of disks in the volume.
 *           * +Size+ - (<tt>Integer</tt>) The volume size.
 *         * +EnableAutoHealing+ - (<tt>Boolean</tt>) Whether auto healing
 *           is disabled for the layer.
 *         * +AutoAssignElasticIps+ - (<tt>Boolean</tt>) Whether the layer
 *           has an automatically assigned Elastic IP address.
 *         * +DefaultRecipes+ - (<tt>Object</tt>)
 *           * +Setup+ - (<tt>Array<String></tt>) An array of custom recipe
 *             names to be run following a setup event.
 *           * +Configure+ - (<tt>Array<String></tt>) An array of custom
 *             recipe names to be run following a configure event.
 *           * +Deploy+ - (<tt>Array<String></tt>) An array of custom
 *             recipe names to be run following a deploy event.
 *           * +Undeploy+ - (<tt>Array<String></tt>) An array of custom
 *             recipe names to be run following a undeploy event.
 *           * +Shutdown+ - (<tt>Array<String></tt>) An array of custom
 *             recipe names to be run following a shutdown event.
 *         * +CustomRecipes+ - (<tt>Object</tt>) A LayerCustomRecipes
 *           object that specifies the layer's custom recipes.
 *           * +Setup+ - (<tt>Array<String></tt>) An array of custom recipe
 *             names to be run following a setup event.
 *           * +Configure+ - (<tt>Array<String></tt>) An array of custom
 *             recipe names to be run following a configure event.
 *           * +Deploy+ - (<tt>Array<String></tt>) An array of custom
 *             recipe names to be run following a deploy event.
 *           * +Undeploy+ - (<tt>Array<String></tt>) An array of custom
 *             recipe names to be run following a undeploy event.
 *           * +Shutdown+ - (<tt>Array<String></tt>) An array of custom
 *             recipe names to be run following a shutdown event.
 *         * +CreatedAt+ - (<tt>String</tt>) Date when the layer was
 *           created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLoadBasedAutoScaling(params, callback)
 *   Calls the DescribeLoadBasedAutoScaling API operation.
 *   @param params [Object]
 *     * +LayerIds+ - (*required*, <tt>Array<String></tt>) An array of
 *       layer IDs.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +LoadBasedAutoScalingConfigurations+ - (<tt>Array<Object></tt>)
 *         An array of LoadBasedAutoScalingConfiguration objects that
 *         describe each layer's configuration.
 *         * +LayerId+ - (<tt>String</tt>) The layer ID.
 *         * +Enable+ - (<tt>Boolean</tt>) Whether load-based auto scaling
 *           is enabled for the layer.
 *         * +UpScaling+ - (<tt>Object</tt>) A
 *           LoadBasedAutoscalingInstruction object that describes the
 *           upscaling configuration, which defines how and when &charlie;
 *           increases the number of instances.
 *           * +InstanceCount+ - (<tt>Integer</tt>) The number of instances
 *             to add or remove when the load exceeds a threshold.
 *           * +ThresholdsWaitTime+ - (<tt>Integer</tt>) The amount of
 *             time, in minutes, that the load must exceed a threshold
 *             before more instances are added or removed.
 *           * +IgnoreMetricsTime+ - (<tt>Integer</tt>) The amount of time
 *             (in minutes) after a scaling event occurs that &charlie;
 *             should ignore metrics and not raise any additional scaling
 *             events. For example, &charlie; adds new instances following
 *             an upscaling event but the instances won't start reducing
 *             the load until they have been booted and configured. There
 *             is no point in raising additional scaling events during that
 *             operation, which typically takes several minutes.
 *             IgnoreMetricsTime allows you to direct &charlie; to not
 *             raise any scaling events long enough to get the new
 *             instances online.
 *           * +CpuThreshold+ - (<tt>Float</tt>) The CPU utilization
 *             threshold, as a percent of the available CPU.
 *           * +MemoryThreshold+ - (<tt>Float</tt>) The memory utilization
 *             threshold, as a percent of the available memory.
 *           * +LoadThreshold+ - (<tt>Float</tt>) The load threshold. For
 *             more information about how load is computed, see Load
 *             (computing).
 *         * +DownScaling+ - (<tt>Object</tt>) A
 *           LoadBasedAutoscalingInstruction object that describes the
 *           downscaling configuration, which defines how and when
 *           &charlie; reduces the number of instances.
 *           * +InstanceCount+ - (<tt>Integer</tt>) The number of instances
 *             to add or remove when the load exceeds a threshold.
 *           * +ThresholdsWaitTime+ - (<tt>Integer</tt>) The amount of
 *             time, in minutes, that the load must exceed a threshold
 *             before more instances are added or removed.
 *           * +IgnoreMetricsTime+ - (<tt>Integer</tt>) The amount of time
 *             (in minutes) after a scaling event occurs that &charlie;
 *             should ignore metrics and not raise any additional scaling
 *             events. For example, &charlie; adds new instances following
 *             an upscaling event but the instances won't start reducing
 *             the load until they have been booted and configured. There
 *             is no point in raising additional scaling events during that
 *             operation, which typically takes several minutes.
 *             IgnoreMetricsTime allows you to direct &charlie; to not
 *             raise any scaling events long enough to get the new
 *             instances online.
 *           * +CpuThreshold+ - (<tt>Float</tt>) The CPU utilization
 *             threshold, as a percent of the available CPU.
 *           * +MemoryThreshold+ - (<tt>Float</tt>) The memory utilization
 *             threshold, as a percent of the available memory.
 *           * +LoadThreshold+ - (<tt>Float</tt>) The load threshold. For
 *             more information about how load is computed, see Load
 *             (computing).
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describePermissions(params, callback)
 *   Calls the DescribePermissions API operation.
 *   @param params [Object]
 *     * +IamUserArn+ - (*required*, <tt>String</tt>) The user's IAM ARN.
 *       For more information about IAM ARNs, see Using Identifiers.
 *     * +StackId+ - (*required*, <tt>String</tt>) The stack ID.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Permissions+ - (<tt>Array<Object></tt>) An array of Permission
 *         objects that describe the stack permissions. If the request
 *         object contains only a stack ID, the array contains a Permission
 *         object with permissions for each of the stack IAM ARNs. If the
 *         request object contains only an IAM ARN, the array contains a
 *         Permission object with permissions for each of the user's stack
 *         IDs. If the request contains a stack ID and an IAM ARN, the
 *         array contains a single Permission object with permissions for
 *         the specified stack and IAM ARN.
 *         * +StackId+ - (<tt>String</tt>) A stack ID.
 *         * +IamUserArn+ - (<tt>String</tt>) The Amazon Resource Name
 *           (ARN) for an AWS Identity and Access Management (IAM) role.
 *           For more information about IAM ARNs, see Using Identifiers.
 *         * +AllowSsh+ - (<tt>Boolean</tt>) Whether the user can use SSH.
 *         * +AllowSudo+ - (<tt>Boolean</tt>) Whether the user can use
 *           sudo.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeRaidArrays(params, callback)
 *   Calls the DescribeRaidArrays API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (<tt>String</tt>) The instance ID.
 *     * +RaidArrayIds+ - (<tt>Array<String></tt>) An array of RAID array
 *       IDs to be described.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +RaidArrays+ - (<tt>Array<Object></tt>) A RaidArrays object that
 *         describes the specified RAID arrays.
 *         * +RaidArrayId+ - (<tt>String</tt>) The array ID.
 *         * +InstanceId+ - (<tt>String</tt>) The instance ID.
 *         * +Name+ - (<tt>String</tt>) The array name.
 *         * +RaidLevel+ - (<tt>Integer</tt>) The RAID level.
 *         * +NumberOfDisks+ - (<tt>Integer</tt>) The number of disks in
 *           the array.
 *         * +Size+ - (<tt>Integer</tt>) The array's size.
 *         * +Device+ - (<tt>String</tt>) The array's device name.
 *         * +MountPoint+ - (<tt>String</tt>) The array's mount point.
 *         * +AvailabilityZone+ - (<tt>String</tt>) The array's AWS
 *           Availability Zone. For more information, see Regions and
 *           Endpoints.
 *         * +CreatedAt+ - (<tt>String</tt>) When the RAID array was
 *           created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeServiceErrors(params, callback)
 *   Calls the DescribeServiceErrors API operation.
 *   @param params [Object]
 *     * +StackId+ - (<tt>String</tt>) The stack ID.
 *     * +InstanceId+ - (<tt>String</tt>) The instance ID.
 *     * +ServiceErrorIds+ - (<tt>Array<String></tt>) An array of service
 *       error IDs to be described.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ServiceErrors+ - (<tt>Array<Object></tt>) An array of
 *         ServiceError objects that describe the specified service errors.
 *         * +ServiceErrorId+ - (<tt>String</tt>) The error ID.
 *         * +StackId+ - (<tt>String</tt>) The stack ID.
 *         * +InstanceId+ - (<tt>String</tt>) The instance ID.
 *         * +Type+ - (<tt>String</tt>) The error type.
 *         * +Message+ - (<tt>String</tt>) A message that describes the
 *           error.
 *         * +CreatedAt+ - (<tt>String</tt>) When the error occurred.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeStacks(params, callback)
 *   Calls the DescribeStacks API operation.
 *   @param params [Object]
 *     * +StackIds+ - (<tt>Array<String></tt>) An array of stack IDs that
 *       specify the stacks to be described.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Stacks+ - (<tt>Array<Object></tt>) An array of Stack objects
 *         that describe the stacks.
 *         * +StackId+ - (<tt>String</tt>) The stack ID.
 *         * +Name+ - (<tt>String</tt>) The stack name.
 *         * +Region+ - (<tt>String</tt>) The stack AWS region, such as
 *           "us-east-1". For more information about AWS regions, see
 *           Regions and Endpoints.
 *         * +Attributes+ - (<tt>Object<String></tt>) The contents of the
 *           stack's attributes bag.
 *         * +ServiceRoleArn+ - (<tt>String</tt>) The stack AWS Identity
 *           and Access Management (IAM) role.
 *         * +DefaultInstanceProfileArn+ - (<tt>String</tt>) The ARN of an
 *           IAM profile that is the default profile for all of the stack's
 *           EC2 instances. For more information about IAM ARNs, see Using
 *           Identifiers.
 *         * +DefaultOs+ - (<tt>String</tt>) The cloned stack default
 *           operating system, which must be either "Amazon Linux" or
 *           "Ubuntu 12.04 LTS".
 *         * +HostnameTheme+ - (<tt>String</tt>) The stack host name theme,
 *           with spaces replaced by underscores.
 *         * +DefaultAvailabilityZone+ - (<tt>String</tt>) The stack's
 *           default Availability Zone. For more information, see Regions
 *           and Endpoints.
 *         * +CustomJson+ - (<tt>String</tt>) A string that contains
 *           user-defined, custom JSON. It is used to override the
 *           corresponding default stack configuration JSON values. The
 *           string should be in the following format and must escape
 *           characters such as '"'.: "{\"key1\": \"value1\", \"key2\":
 *           \"value2\",...}"
 *         * +UseCustomCookbooks+ - (<tt>Boolean</tt>) Whether the stack
 *           uses custom cookbooks.
 *         * +CustomCookbooksSource+ - (<tt>Object</tt>)
 *           * +Type+ - (<tt>String</tt>) The repository type.
 *           * +Url+ - (<tt>String</tt>) The source URL.
 *           * +Username+ - (<tt>String</tt>) The user name.
 *           * +Password+ - (<tt>String</tt>) The repository's password.
 *           * +SshKey+ - (<tt>String</tt>) The repository's SSH key.
 *           * +Revision+ - (<tt>String</tt>) The application's version.
 *             &charlie; enables you to easily deploy new versions of an
 *             application. One of the simplest approaches is to have
 *             branches or revisions in your repository that represent
 *             different versions that can potentially be deployed.
 *         * +DefaultSshKeyName+ - (<tt>String</tt>) A default SSH key for
 *           the stack's instances. You can override this value when you
 *           create or update an instance.
 *         * +CreatedAt+ - (<tt>String</tt>) Date when the stack was
 *           created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeTimeBasedAutoScaling(params, callback)
 *   Calls the DescribeTimeBasedAutoScaling API operation.
 *   @param params [Object]
 *     * +InstanceIds+ - (*required*, <tt>Array<String></tt>) An array of
 *       instance IDs.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +TimeBasedAutoScalingConfigurations+ - (<tt>Array<Object></tt>)
 *         An array of TimeBasedAutoScalingConfiguration objects that
 *         describe the configuration for the specified instances.
 *         * +InstanceId+ - (<tt>String</tt>) The instance ID.
 *         * +AutoScalingSchedule+ - (<tt>Object</tt>) A
 *           WeeklyAutoScalingSchedule object with the instance schedule.
 *           * +Monday+ - (<tt>Object<String></tt>) The schedule for
 *             Monday.
 *           * +Tuesday+ - (<tt>Object<String></tt>) The schedule for
 *             Tuesday.
 *           * +Wednesday+ - (<tt>Object<String></tt>) The schedule for
 *             Wednesday.
 *           * +Thursday+ - (<tt>Object<String></tt>) The schedule for
 *             Thursday.
 *           * +Friday+ - (<tt>Object<String></tt>) The schedule for
 *             Friday.
 *           * +Saturday+ - (<tt>Object<String></tt>) The schedule for
 *             Saturday.
 *           * +Sunday+ - (<tt>Object<String></tt>) The schedule for
 *             Sunday.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeUserProfiles(params, callback)
 *   Calls the DescribeUserProfiles API operation.
 *   @param params [Object]
 *     * +IamUserArns+ - (*required*, <tt>Array<String></tt>) An array of
 *       IAM user ARNs that identify the users to be described.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +UserProfiles+ - (<tt>Array<Object></tt>) A Users object that
 *         describes the specified users.
 *         * +IamUserArn+ - (<tt>String</tt>) The user IAM ARN.
 *         * +Name+ - (<tt>String</tt>) The user name.
 *         * +SshUsername+ - (<tt>String</tt>) The user's SSH user name.
 *         * +SshPublicKey+ - (<tt>String</tt>) The user's SSH public key.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVolumes(params, callback)
 *   Calls the DescribeVolumes API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (<tt>String</tt>) The instance ID.
 *     * +RaidArrayId+ - (<tt>String</tt>) The RAID array ID.
 *     * +VolumeIds+ - (<tt>Array<String></tt>) Am array of volume IDs to
 *       be described.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Volumes+ - (<tt>Array<Object></tt>) An array of volume IDs.
 *         * +VolumeId+ - (<tt>String</tt>) The volume ID.
 *         * +Ec2VolumeId+ - (<tt>String</tt>) The Amazon EC2 volume ID.
 *         * +Name+ - (<tt>String</tt>) The volume name.
 *         * +RaidArrayId+ - (<tt>String</tt>) The RAID array ID.
 *         * +InstanceId+ - (<tt>String</tt>) The instance ID.
 *         * +Status+ - (<tt>String</tt>) The volume status. The possible
 *           values are: Ok Impaired Warning Insufficient-data
 *         * +Size+ - (<tt>Integer</tt>) The volume size.
 *         * +Device+ - (<tt>String</tt>) The device name.
 *         * +MountPoint+ - (<tt>String</tt>) The volume mount point. For
 *           example "/dev/sdh".
 *         * +Region+ - (<tt>String</tt>) The AWS region. For more
 *           information about AWS regions, see Regions and Endpoints.
 *         * +AvailabilityZone+ - (<tt>String</tt>) The volume Availability
 *           Zone. For more information, see Regions and Endpoints.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getHostnameSuggestion(params, callback)
 *   Calls the GetHostnameSuggestion API operation.
 *   @param params [Object]
 *     * +LayerId+ - (*required*, <tt>String</tt>) The layer ID.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +LayerId+ - (<tt>String</tt>) The layer ID.
 *       * +Hostname+ - (<tt>String</tt>) The generated hostname.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method rebootInstance(params, callback)
 *   Calls the RebootInstance API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The instance ID.
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
 * @!method setLoadBasedAutoScaling(params, callback)
 *   Calls the SetLoadBasedAutoScaling API operation.
 *   @param params [Object]
 *     * +LayerId+ - (*required*, <tt>String</tt>) The layer ID.
 *     * +Enable+ - (<tt>Boolean</tt>) Enables load-based auto scaling
 *       for the layer.
 *     * +UpScaling+ - (<tt>Object</tt>) An AutoScalingThresholds object
 *       with the upscaling threshold configuration. If the load exceeds
 *       these thresholds for a specified amount of time, &charlie;
 *       starts a specified number of instances.
 *       * +InstanceCount+ - (<tt>Integer</tt>) The number of instances
 *         to add or remove when the load exceeds a threshold.
 *       * +ThresholdsWaitTime+ - (<tt>Integer</tt>) The amount of time,
 *         in minutes, that the load must exceed a threshold before more
 *         instances are added or removed.
 *       * +IgnoreMetricsTime+ - (<tt>Integer</tt>) The amount of time
 *         (in minutes) after a scaling event occurs that &charlie;
 *         should ignore metrics and not raise any additional scaling
 *         events. For example, &charlie; adds new instances following an
 *         upscaling event but the instances won't start reducing the
 *         load until they have been booted and configured. There is no
 *         point in raising additional scaling events during that
 *         operation, which typically takes several minutes.
 *         IgnoreMetricsTime allows you to direct &charlie; to not raise
 *         any scaling events long enough to get the new instances
 *         online.
 *       * +CpuThreshold+ - (<tt>Float</tt>) The CPU utilization
 *         threshold, as a percent of the available CPU.
 *       * +MemoryThreshold+ - (<tt>Float</tt>) The memory utilization
 *         threshold, as a percent of the available memory.
 *       * +LoadThreshold+ - (<tt>Float</tt>) The load threshold. For
 *         more information about how load is computed, see Load
 *         (computing).
 *     * +DownScaling+ - (<tt>Object</tt>) An AutoScalingThresholds
 *       object with the downscaling threshold configuration. If the load
 *       falls below these thresholds for a specified amount of time,
 *       &charlie; stops a specified number of instances.
 *       * +InstanceCount+ - (<tt>Integer</tt>) The number of instances
 *         to add or remove when the load exceeds a threshold.
 *       * +ThresholdsWaitTime+ - (<tt>Integer</tt>) The amount of time,
 *         in minutes, that the load must exceed a threshold before more
 *         instances are added or removed.
 *       * +IgnoreMetricsTime+ - (<tt>Integer</tt>) The amount of time
 *         (in minutes) after a scaling event occurs that &charlie;
 *         should ignore metrics and not raise any additional scaling
 *         events. For example, &charlie; adds new instances following an
 *         upscaling event but the instances won't start reducing the
 *         load until they have been booted and configured. There is no
 *         point in raising additional scaling events during that
 *         operation, which typically takes several minutes.
 *         IgnoreMetricsTime allows you to direct &charlie; to not raise
 *         any scaling events long enough to get the new instances
 *         online.
 *       * +CpuThreshold+ - (<tt>Float</tt>) The CPU utilization
 *         threshold, as a percent of the available CPU.
 *       * +MemoryThreshold+ - (<tt>Float</tt>) The memory utilization
 *         threshold, as a percent of the available memory.
 *       * +LoadThreshold+ - (<tt>Float</tt>) The load threshold. For
 *         more information about how load is computed, see Load
 *         (computing).
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
 * @!method setPermission(params, callback)
 *   Calls the SetPermission API operation.
 *   @param params [Object]
 *     * +StackId+ - (*required*, <tt>String</tt>) The stack ID.
 *     * +IamUserArn+ - (*required*, <tt>String</tt>) The user's IAM ARN.
 *     * +AllowSsh+ - (<tt>Boolean</tt>) The user is allowed to use SSH
 *       to communicate with the instance.
 *     * +AllowSudo+ - (<tt>Boolean</tt>) The user is allowed to use sudo
 *       to elevate privileges.
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
 * @!method setTimeBasedAutoScaling(params, callback)
 *   Calls the SetTimeBasedAutoScaling API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The instance ID.
 *     * +AutoScalingSchedule+ - (*required*, <tt>Object</tt>) An
 *       AutoScalingSchedule with the instance schedule.
 *       * +Monday+ - (<tt>Object<String></tt>) The schedule for Monday.
 *       * +Tuesday+ - (<tt>Object<String></tt>) The schedule for
 *         Tuesday.
 *       * +Wednesday+ - (<tt>Object<String></tt>) The schedule for
 *         Wednesday.
 *       * +Thursday+ - (<tt>Object<String></tt>) The schedule for
 *         Thursday.
 *       * +Friday+ - (<tt>Object<String></tt>) The schedule for Friday.
 *       * +Saturday+ - (<tt>Object<String></tt>) The schedule for
 *         Saturday.
 *       * +Sunday+ - (<tt>Object<String></tt>) The schedule for Sunday.
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
 * @!method startInstance(params, callback)
 *   Calls the StartInstance API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The instance ID.
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
 * @!method startStack(params, callback)
 *   Calls the StartStack API operation.
 *   @param params [Object]
 *     * +StackId+ - (*required*, <tt>String</tt>) The stack ID.
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
 * @!method stopInstance(params, callback)
 *   Calls the StopInstance API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The instance ID.
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
 * @!method stopStack(params, callback)
 *   Calls the StopStack API operation.
 *   @param params [Object]
 *     * +StackId+ - (*required*, <tt>String</tt>) The stack ID.
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
 * @!method updateApp(params, callback)
 *   Calls the UpdateApp API operation.
 *   @param params [Object]
 *     * +AppId+ - (*required*, <tt>String</tt>) The app ID.
 *     * +Name+ - (<tt>String</tt>) The app name.
 *     * +Description+ - (<tt>String</tt>) A description of the app.
 *     * +Type+ - (<tt>String</tt>) The app type.
 *     * +AppSource+ - (<tt>Object</tt>) A Source object that specifies
 *       the app repository.
 *       * +Type+ - (<tt>String</tt>) The repository type.
 *       * +Url+ - (<tt>String</tt>) The source URL.
 *       * +Username+ - (<tt>String</tt>) The user name.
 *       * +Password+ - (<tt>String</tt>) The repository's password.
 *       * +SshKey+ - (<tt>String</tt>) The repository's SSH key.
 *       * +Revision+ - (<tt>String</tt>) The application's version.
 *         &charlie; enables you to easily deploy new versions of an
 *         application. One of the simplest approaches is to have
 *         branches or revisions in your repository that represent
 *         different versions that can potentially be deployed.
 *     * +Domains+ - (<tt>Array<String></tt>) The app's virtual host
 *       settings, with multiple domains separated by commas. For
 *       example: 'www.mysite.com, mysite.com'
 *     * +EnableSsl+ - (<tt>Boolean</tt>) Whether SSL is enabled for the
 *       app.
 *     * +SslConfiguration+ - (<tt>Object</tt>) An SslConfiguration
 *       object with the SSL configuration.
 *       * +Certificate+ - (*required*, <tt>String</tt>) The contents of
 *         the certificate's domain.crt file.
 *       * +PrivateKey+ - (*required*, <tt>String</tt>) The private key;
 *         the contents of the certificate's domain.kex file.
 *       * +Chain+ - (<tt>String</tt>) Optional. Can be used to specify
 *         an intermediate certificate authority key or client
 *         authentication.
 *     * +Attributes+ - (<tt>Object<String></tt>) One or more
 *       user-defined key/value pairs to be added to the stack attributes
 *       bag.
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
 * @!method updateInstance(params, callback)
 *   Calls the UpdateInstance API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (*required*, <tt>String</tt>) The instance ID.
 *     * +LayerIds+ - (*required*, <tt>Array<String></tt>) The instance's
 *       layer IDs.
 *     * +InstanceType+ - (<tt>String</tt>) The instance type, which can
 *       be one of the following: m1.small m1.medium m1.large m1.xlarge
 *       c1.medium c1.xlarge m2.xlarge m2.2xlarge m2.4xlarge
 *     * +AutoScalingType+ - (<tt>String</tt>) The instance's auto
 *       scaling type, which has three possible values: AlwaysRunning: A
 *       24x7 instance, which is not affected by auto scaling.
 *       TimeBasedAutoScaling: A time-based auto scaling instance, which
 *       is started and stopped based on a specified schedule.
 *       LoadBasedAutoScaling: A load-based auto scaling instance, which
 *       is started and stopped based on load metrics.
 *     * +Hostname+ - (<tt>String</tt>) The instance host name.
 *     * +Os+ - (<tt>String</tt>) The instance operating system.
 *     * +SshKeyName+ - (<tt>String</tt>) The instance SSH key name.
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
 * @!method updateLayer(params, callback)
 *   Calls the UpdateLayer API operation.
 *   @param params [Object]
 *     * +LayerId+ - (*required*, <tt>String</tt>) The layer ID.
 *     * +Name+ - (<tt>String</tt>) The layer name, which is used by the
 *       console.
 *     * +Shortname+ - (<tt>String</tt>) The layer short name, which is
 *       used internally by &charlie;, by Chef. The shortname is also
 *       used as the name for the directory where your app files are
 *       installed. It can have a maximum of 200 characters and must be
 *       in the following format: /\A[a-z0-9\-\_\.]+\Z/.
 *     * +Attributes+ - (<tt>Object<String></tt>) One or more
 *       user-defined key/value pairs to be added to the stack attributes
 *       bag.
 *     * +CustomInstanceProfileArn+ - (<tt>String</tt>) The ARN of an IAM
 *       profile to be used for all of the layer's EC2 instances. For
 *       more information about IAM ARNs, see Using Identifiers.
 *     * +CustomSecurityGroupIds+ - (<tt>Array<String></tt>) An array
 *       containing the layer's custom security group IDs.
 *     * +Packages+ - (<tt>Array<String></tt>) An array of Package
 *       objects that describe the layer's packages.
 *     * +VolumeConfigurations+ - (<tt>Array<Object></tt>) A
 *       VolumeConfigurations object that describes the layer's Amazon
 *       EBS volumes.
 *       * +MountPoint+ - (*required*, <tt>String</tt>) The volume mount
 *         point. For example "/dev/sdh".
 *       * +RaidLevel+ - (<tt>Integer</tt>) The volume RAID level.
 *       * +NumberOfDisks+ - (*required*, <tt>Integer</tt>) The number of
 *         disks in the volume.
 *       * +Size+ - (*required*, <tt>Integer</tt>) The volume size.
 *     * +EnableAutoHealing+ - (<tt>Boolean</tt>) Whether to disable auto
 *       healing for the layer.
 *     * +AutoAssignElasticIps+ - (<tt>Boolean</tt>) Whether to
 *       automatically assign an Elastic IP address to the layer.
 *     * +CustomRecipes+ - (<tt>Object</tt>) A LayerCustomRecipes object
 *       that specifies the layer's custom recipes.
 *       * +Setup+ - (<tt>Array<String></tt>) An array of custom recipe
 *         names to be run following a setup event.
 *       * +Configure+ - (<tt>Array<String></tt>) An array of custom
 *         recipe names to be run following a configure event.
 *       * +Deploy+ - (<tt>Array<String></tt>) An array of custom recipe
 *         names to be run following a deploy event.
 *       * +Undeploy+ - (<tt>Array<String></tt>) An array of custom
 *         recipe names to be run following a undeploy event.
 *       * +Shutdown+ - (<tt>Array<String></tt>) An array of custom
 *         recipe names to be run following a shutdown event.
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
 * @!method updateStack(params, callback)
 *   Calls the UpdateStack API operation.
 *   @param params [Object]
 *     * +StackId+ - (*required*, <tt>String</tt>) The stack ID.
 *     * +Name+ - (<tt>String</tt>) The stack's new name.
 *     * +Attributes+ - (<tt>Object<String></tt>) One or more
 *       user-defined key/value pairs to be added to the stack attributes
 *       bag.
 *     * +ServiceRoleArn+ - (<tt>String</tt>) The stack AWS Identity and
 *       Access Management (IAM) role, which allows &charlie; to work
 *       with AWS resources on your behalf. You must set this parameter
 *       to the Amazon Resource Name (ARN) for an existing IAM role. For
 *       more information about IAM ARNs, see Using Identifiers.
 *     * +DefaultInstanceProfileArn+ - (<tt>String</tt>) The ARN of an
 *       IAM profile that is the default profile for all of the stack's
 *       EC2 instances. For more information about IAM ARNs, see Using
 *       Identifiers.
 *     * +DefaultOs+ - (<tt>String</tt>) The cloned stack default
 *       operating system, which must be either "Amazon Linux" or "Ubuntu
 *       12.04 LTS".
 *     * +HostnameTheme+ - (<tt>String</tt>) The stack's new host name
 *       theme, with spaces are replaced by underscores. The theme is
 *       used to generate hostnames for the stack's instances. By
 *       default, HostnameTheme is set to Layer_Dependent, which creates
 *       hostnames by appending integers to the layer's shortname. The
 *       other themes are: Baked_Goods Clouds European_Cities Fruits
 *       Greek_Deities Legendary_Creatures_from_Japan Planets_and_Moons
 *       Roman_Deities Scottish_Islands US_Cities Wild_Cats To obtain a
 *       generated hostname, call GetHostNameSuggestion, which returns a
 *       hostname based on the current theme.
 *     * +DefaultAvailabilityZone+ - (<tt>String</tt>) The stack new
 *       default Availability Zone. For more information, see Regions and
 *       Endpoints.
 *     * +CustomJson+ - (<tt>String</tt>) A string that contains
 *       user-defined, custom JSON. It is used to override the
 *       corresponding default stack configuration JSON values. The
 *       string should be in the following format and must escape
 *       characters such as '"'.: "{\"key1\": \"value1\", \"key2\":
 *       \"value2\",...}"
 *     * +UseCustomCookbooks+ - (<tt>Boolean</tt>) Whether the stack uses
 *       custom cookbooks.
 *     * +CustomCookbooksSource+ - (<tt>Object</tt>)
 *       * +Type+ - (<tt>String</tt>) The repository type.
 *       * +Url+ - (<tt>String</tt>) The source URL.
 *       * +Username+ - (<tt>String</tt>) The user name.
 *       * +Password+ - (<tt>String</tt>) The repository's password.
 *       * +SshKey+ - (<tt>String</tt>) The repository's SSH key.
 *       * +Revision+ - (<tt>String</tt>) The application's version.
 *         &charlie; enables you to easily deploy new versions of an
 *         application. One of the simplest approaches is to have
 *         branches or revisions in your repository that represent
 *         different versions that can potentially be deployed.
 *     * +DefaultSshKeyName+ - (<tt>String</tt>) A default SSH key for
 *       the stack instances. You can override this value when you create
 *       or update an instance.
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
 * @!method updateUserProfile(params, callback)
 *   Calls the UpdateUserProfile API operation.
 *   @param params [Object]
 *     * +IamUserArn+ - (*required*, <tt>String</tt>) The user IAM ARN.
 *     * +SshUsername+ - (<tt>String</tt>) The user's new SSH user name.
 *     * +SshPublicKey+ - (<tt>String</tt>) The user's new SSH public
 *       key.
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
AWS.OpsWorks.Client = inherit({});
