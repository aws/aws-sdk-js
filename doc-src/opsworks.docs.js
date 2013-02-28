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
 *     * `SourceStackId` &mdash; (`String`)
 *     * `Name` &mdash; (`String`)
 *     * `Region` &mdash; (`String`)
 *     * `Attributes` &mdash; (`Object<String>`)
 *     * `ServiceRoleArn` &mdash; (`String`)
 *     * `DefaultInstanceProfileArn` &mdash; (`String`)
 *     * `DefaultOs` &mdash; (`String`)
 *     * `HostnameTheme` &mdash; (`String`)
 *     * `DefaultAvailabilityZone` &mdash; (`String`)
 *     * `CustomJson` &mdash; (`String`)
 *     * `UseCustomCookbooks` &mdash; (`Boolean`)
 *     * `CustomCookbooksSource` &mdash; (`Object`)
 *       * `Type` &mdash; (`String`)
 *       * `Url` &mdash; (`String`)
 *       * `Username` &mdash; (`String`)
 *       * `Password` &mdash; (`String`)
 *       * `SshKey` &mdash; (`String`)
 *       * `Revision` &mdash; (`String`)
 *     * `DefaultSshKeyName` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `StackId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createApp(params, callback)
 *   Calls the CreateApp API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; (`String`)
 *     * `Name` &mdash; (`String`)
 *     * `Description` &mdash; (`String`)
 *     * `Type` &mdash; (`String`)
 *     * `AppSource` &mdash; (`Object`)
 *       * `Type` &mdash; (`String`)
 *       * `Url` &mdash; (`String`)
 *       * `Username` &mdash; (`String`)
 *       * `Password` &mdash; (`String`)
 *       * `SshKey` &mdash; (`String`)
 *       * `Revision` &mdash; (`String`)
 *     * `Domains` &mdash; (`Array<String>`)
 *     * `EnableSsl` &mdash; (`Boolean`)
 *     * `SslConfiguration` &mdash; (`Object`)
 *       * `Certificate` &mdash; (`String`)
 *       * `PrivateKey` &mdash; (`String`)
 *       * `Chain` &mdash; (`String`)
 *     * `Attributes` &mdash; (`Object<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `AppId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDeployment(params, callback)
 *   Calls the CreateDeployment API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; (`String`)
 *     * `AppId` &mdash; (`String`)
 *     * `InstanceIds` &mdash; (`Array<String>`)
 *     * `Command` &mdash; (`Object`)
 *       * `Name` &mdash; (`String`)
 *       * `Args` &mdash; (`Object<Array<String>>`)
 *     * `Comment` &mdash; (`String`)
 *     * `CustomJson` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `DeploymentId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createInstance(params, callback)
 *   Calls the CreateInstance API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; (`String`)
 *     * `LayerIds` &mdash; (`Array<String>`)
 *     * `InstanceType` &mdash; (`String`)
 *     * `AutoScalingType` &mdash; (`String`)
 *     * `Hostname` &mdash; (`String`)
 *     * `Os` &mdash; (`String`)
 *     * `SshKeyName` &mdash; (`String`)
 *     * `AvailabilityZone` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `InstanceId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createLayer(params, callback)
 *   Calls the CreateLayer API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; (`String`)
 *     * `Type` &mdash; (`String`)
 *     * `Name` &mdash; (`String`)
 *     * `Shortname` &mdash; (`String`)
 *     * `Attributes` &mdash; (`Object<String>`)
 *     * `InstanceProfileArn` &mdash; (`String`)
 *     * `CustomSecurityGroupIds` &mdash; (`Array<String>`)
 *     * `Packages` &mdash; (`Array<String>`)
 *     * `VolumeConfigurations` &mdash; (`Array<Object>`)
 *       * `MountPoint` &mdash; (`String`)
 *       * `RaidLevel` &mdash; (`Integer`)
 *       * `NumberOfDisks` &mdash; (`Integer`)
 *       * `Size` &mdash; (`Integer`)
 *     * `EnableAutoHealing` &mdash; (`Boolean`)
 *     * `AutoAssignElasticIps` &mdash; (`Boolean`)
 *     * `CustomRecipes` &mdash; (`Object`)
 *       * `Setup` &mdash; (`Array<String>`)
 *       * `Configure` &mdash; (`Array<String>`)
 *       * `Deploy` &mdash; (`Array<String>`)
 *       * `Undeploy` &mdash; (`Array<String>`)
 *       * `Shutdown` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `LayerId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createStack(params, callback)
 *   Calls the CreateStack API operation.
 *   @param params [Object]
 *     * `Name` &mdash; (`String`)
 *     * `Region` &mdash; (`String`)
 *     * `Attributes` &mdash; (`Object<String>`)
 *     * `ServiceRoleArn` &mdash; (`String`)
 *     * `DefaultInstanceProfileArn` &mdash; (`String`)
 *     * `DefaultOs` &mdash; (`String`)
 *     * `HostnameTheme` &mdash; (`String`)
 *     * `DefaultAvailabilityZone` &mdash; (`String`)
 *     * `CustomJson` &mdash; (`String`)
 *     * `UseCustomCookbooks` &mdash; (`Boolean`)
 *     * `CustomCookbooksSource` &mdash; (`Object`)
 *       * `Type` &mdash; (`String`)
 *       * `Url` &mdash; (`String`)
 *       * `Username` &mdash; (`String`)
 *       * `Password` &mdash; (`String`)
 *       * `SshKey` &mdash; (`String`)
 *       * `Revision` &mdash; (`String`)
 *     * `DefaultSshKeyName` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `StackId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createUserProfile(params, callback)
 *   Calls the CreateUserProfile API operation.
 *   @param params [Object]
 *     * `IamUserArn` &mdash; (`String`)
 *     * `SshUsername` &mdash; (`String`)
 *     * `SshPublicKey` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `IamUserArn` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteApp(params, callback)
 *   Calls the DeleteApp API operation.
 *   @param params [Object]
 *     * `AppId` &mdash; (`String`)
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
 *     * `InstanceId` &mdash; (`String`)
 *     * `DeleteElasticIp` &mdash; (`Boolean`)
 *     * `DeleteVolumes` &mdash; (`Boolean`)
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
 *     * `LayerId` &mdash; (`String`)
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
 *     * `StackId` &mdash; (`String`)
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
 *     * `IamUserArn` &mdash; (`String`)
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
 *     * `StackId` &mdash; (`String`)
 *     * `AppIds` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `Apps` &mdash; (`Array<Object>`)
 *         * `AppId` &mdash; (`String`)
 *         * `StackId` &mdash; (`String`)
 *         * `Name` &mdash; (`String`)
 *         * `Description` &mdash; (`String`)
 *         * `Type` &mdash; (`String`)
 *         * `AppSource` &mdash; (`Object`)
 *           * `Type` &mdash; (`String`)
 *           * `Url` &mdash; (`String`)
 *           * `Username` &mdash; (`String`)
 *           * `Password` &mdash; (`String`)
 *           * `SshKey` &mdash; (`String`)
 *           * `Revision` &mdash; (`String`)
 *         * `Domains` &mdash; (`Array<String>`)
 *         * `EnableSsl` &mdash; (`Boolean`)
 *         * `SslConfiguration` &mdash; (`Object`)
 *           * `Certificate` &mdash; (`String`)
 *           * `PrivateKey` &mdash; (`String`)
 *           * `Chain` &mdash; (`String`)
 *         * `Attributes` &mdash; (`Object<String>`)
 *         * `CreatedAt` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCommands(params, callback)
 *   Calls the DescribeCommands API operation.
 *   @param params [Object]
 *     * `DeploymentId` &mdash; (`String`)
 *     * `InstanceId` &mdash; (`String`)
 *     * `CommandIds` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `Commands` &mdash; (`Array<Object>`)
 *         * `CommandId` &mdash; (`String`)
 *         * `InstanceId` &mdash; (`String`)
 *         * `DeploymentId` &mdash; (`String`)
 *         * `CreatedAt` &mdash; (`String`)
 *         * `AcknowledgedAt` &mdash; (`String`)
 *         * `CompletedAt` &mdash; (`String`)
 *         * `Status` &mdash; (`String`)
 *         * `ExitCode` &mdash; (`Integer`)
 *         * `LogUrl` &mdash; (`String`)
 *         * `Type` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDeployments(params, callback)
 *   Calls the DescribeDeployments API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; (`String`)
 *     * `AppId` &mdash; (`String`)
 *     * `DeploymentIds` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `Deployments` &mdash; (`Array<Object>`)
 *         * `DeploymentId` &mdash; (`String`)
 *         * `StackId` &mdash; (`String`)
 *         * `AppId` &mdash; (`String`)
 *         * `CreatedAt` &mdash; (`String`)
 *         * `CompletedAt` &mdash; (`String`)
 *         * `Duration` &mdash; (`Integer`)
 *         * `IamUserArn` &mdash; (`String`)
 *         * `Comment` &mdash; (`String`)
 *         * `Command` &mdash; (`Object`)
 *           * `Name` &mdash; (`String`)
 *           * `Args` &mdash; (`Object<Array<String>>`)
 *         * `Status` &mdash; (`String`)
 *         * `CustomJson` &mdash; (`String`)
 *         * `InstanceIds` &mdash; (`Array<String>`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeElasticIps(params, callback)
 *   Calls the DescribeElasticIps API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; (`String`)
 *     * `Ips` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `ElasticIps` &mdash; (`Array<Object>`)
 *         * `Ip` &mdash; (`String`)
 *         * `Name` &mdash; (`String`)
 *         * `Region` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeInstances(params, callback)
 *   Calls the DescribeInstances API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; (`String`)
 *     * `LayerId` &mdash; (`String`)
 *     * `AppId` &mdash; (`String`)
 *     * `InstanceIds` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `Instances` &mdash; (`Array<Object>`)
 *         * `InstanceId` &mdash; (`String`)
 *         * `Ec2InstanceId` &mdash; (`String`)
 *         * `Hostname` &mdash; (`String`)
 *         * `StackId` &mdash; (`String`)
 *         * `LayerIds` &mdash; (`Array<String>`)
 *         * `SecurityGroups` &mdash; (`Array<String>`)
 *         * `InstanceType` &mdash; (`String`)
 *         * `InstanceProfileArn` &mdash; (`String`)
 *         * `Status` &mdash; (`String`)
 *         * `Os` &mdash; (`String`)
 *         * `AvailabilityZone` &mdash; (`String`)
 *         * `PublicDns` &mdash; (`String`)
 *         * `PrivateDns` &mdash; (`String`)
 *         * `PublicIp` &mdash; (`String`)
 *         * `PrivateIp` &mdash; (`String`)
 *         * `ElasticIp` &mdash; (`String`)
 *         * `AutoScalingType` &mdash; (`String`)
 *         * `SshKeyName` &mdash; (`String`)
 *         * `SshHostRsaKeyFingerprint` &mdash; (`String`)
 *         * `SshHostDsaKeyFingerprint` &mdash; (`String`)
 *         * `CreatedAt` &mdash; (`String`)
 *         * `LastServiceErrorId` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLayers(params, callback)
 *   Calls the DescribeLayers API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; (`String`)
 *     * `LayerIds` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `Layers` &mdash; (`Array<Object>`)
 *         * `StackId` &mdash; (`String`)
 *         * `LayerId` &mdash; (`String`)
 *         * `Type` &mdash; (`String`)
 *         * `Name` &mdash; (`String`)
 *         * `Shortname` &mdash; (`String`)
 *         * `Attributes` &mdash; (`Object<String>`)
 *         * `InstanceProfileArn` &mdash; (`String`)
 *         * `CustomSecurityGroupIds` &mdash; (`Array<String>`)
 *         * `DefaultSecurityGroupNames` &mdash; (`Array<String>`)
 *         * `Packages` &mdash; (`Array<String>`)
 *         * `VolumeConfigurations` &mdash; (`Array<Object>`)
 *           * `MountPoint` &mdash; (`String`)
 *           * `RaidLevel` &mdash; (`Integer`)
 *           * `NumberOfDisks` &mdash; (`Integer`)
 *           * `Size` &mdash; (`Integer`)
 *         * `EnableAutoHealing` &mdash; (`Boolean`)
 *         * `AutoAssignElasticIps` &mdash; (`Boolean`)
 *         * `DefaultRecipes` &mdash; (`Object`)
 *           * `Setup` &mdash; (`Array<String>`)
 *           * `Configure` &mdash; (`Array<String>`)
 *           * `Deploy` &mdash; (`Array<String>`)
 *           * `Undeploy` &mdash; (`Array<String>`)
 *           * `Shutdown` &mdash; (`Array<String>`)
 *         * `CustomRecipes` &mdash; (`Object`)
 *           * `Setup` &mdash; (`Array<String>`)
 *           * `Configure` &mdash; (`Array<String>`)
 *           * `Deploy` &mdash; (`Array<String>`)
 *           * `Undeploy` &mdash; (`Array<String>`)
 *           * `Shutdown` &mdash; (`Array<String>`)
 *         * `CreatedAt` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLoadBasedAutoScaling(params, callback)
 *   Calls the DescribeLoadBasedAutoScaling API operation.
 *   @param params [Object]
 *     * `LayerIds` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `LoadBasedAutoScalingConfigurations` &mdash; (`Array<Object>`)
 *         * `LayerId` &mdash; (`String`)
 *         * `Enable` &mdash; (`Boolean`)
 *         * `UpScaling` &mdash; (`Object`)
 *           * `InstanceCount` &mdash; (`Integer`)
 *           * `ThresholdsWaitTime` &mdash; (`Integer`)
 *           * `IgnoreMetricsTime` &mdash; (`Integer`)
 *           * `CpuThreshold` &mdash; (`Float`)
 *           * `MemoryThreshold` &mdash; (`Float`)
 *           * `LoadThreshold` &mdash; (`Float`)
 *         * `DownScaling` &mdash; (`Object`)
 *           * `InstanceCount` &mdash; (`Integer`)
 *           * `ThresholdsWaitTime` &mdash; (`Integer`)
 *           * `IgnoreMetricsTime` &mdash; (`Integer`)
 *           * `CpuThreshold` &mdash; (`Float`)
 *           * `MemoryThreshold` &mdash; (`Float`)
 *           * `LoadThreshold` &mdash; (`Float`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describePermissions(params, callback)
 *   Calls the DescribePermissions API operation.
 *   @param params [Object]
 *     * `IamUserArn` &mdash; (`String`)
 *     * `StackId` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `Permissions` &mdash; (`Array<Object>`)
 *         * `StackId` &mdash; (`String`)
 *         * `IamUserArn` &mdash; (`String`)
 *         * `Level` &mdash; (`String`)
 *         * `AllowSsh` &mdash; (`Boolean`)
 *         * `AllowSudo` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeRaidArrays(params, callback)
 *   Calls the DescribeRaidArrays API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; (`String`)
 *     * `RaidArrayIds` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `RaidArrays` &mdash; (`Array<Object>`)
 *         * `RaidArrayId` &mdash; (`String`)
 *         * `InstanceId` &mdash; (`String`)
 *         * `Name` &mdash; (`String`)
 *         * `RaidLevel` &mdash; (`Integer`)
 *         * `NumberOfDisks` &mdash; (`Integer`)
 *         * `Size` &mdash; (`Integer`)
 *         * `Device` &mdash; (`String`)
 *         * `MountPoint` &mdash; (`String`)
 *         * `AvailabilityZone` &mdash; (`String`)
 *         * `CreatedAt` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeServiceErrors(params, callback)
 *   Calls the DescribeServiceErrors API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; (`String`)
 *     * `InstanceId` &mdash; (`String`)
 *     * `ServiceErrorIds` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `ServiceErrors` &mdash; (`Array<Object>`)
 *         * `ServiceErrorId` &mdash; (`String`)
 *         * `StackId` &mdash; (`String`)
 *         * `InstanceId` &mdash; (`String`)
 *         * `Type` &mdash; (`String`)
 *         * `Message` &mdash; (`String`)
 *         * `CreatedAt` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSshKeys(params, callback)
 *   Calls the DescribeSshKeys API operation.
 *   @param params [Object]
 *     * `StackId` &mdash; (`String`)
 *     * `InstanceId` &mdash; (`String`)
 *     * `SshKeyIds` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `SshKeys` &mdash; (`Array<Object>`)
 *         * `SshKeyId` &mdash; (`String`)
 *         * `Region` &mdash; (`String`)
 *         * `Name` &mdash; (`String`)
 *         * `Fingerprint` &mdash; (`String`)
 *         * `PrivateKey` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeStacks(params, callback)
 *   Calls the DescribeStacks API operation.
 *   @param params [Object]
 *     * `StackIds` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `Stacks` &mdash; (`Array<Object>`)
 *         * `StackId` &mdash; (`String`)
 *         * `Name` &mdash; (`String`)
 *         * `Region` &mdash; (`String`)
 *         * `Attributes` &mdash; (`Object<String>`)
 *         * `ServiceRoleArn` &mdash; (`String`)
 *         * `DefaultInstanceProfileArn` &mdash; (`String`)
 *         * `DefaultOs` &mdash; (`String`)
 *         * `HostnameTheme` &mdash; (`String`)
 *         * `DefaultAvailabilityZone` &mdash; (`String`)
 *         * `CustomJson` &mdash; (`String`)
 *         * `UseCustomCookbooks` &mdash; (`Boolean`)
 *         * `CustomCookbooksSource` &mdash; (`Object`)
 *           * `Type` &mdash; (`String`)
 *           * `Url` &mdash; (`String`)
 *           * `Username` &mdash; (`String`)
 *           * `Password` &mdash; (`String`)
 *           * `SshKey` &mdash; (`String`)
 *           * `Revision` &mdash; (`String`)
 *         * `DefaultSshKeyName` &mdash; (`String`)
 *         * `CreatedAt` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeTimeBasedAutoScaling(params, callback)
 *   Calls the DescribeTimeBasedAutoScaling API operation.
 *   @param params [Object]
 *     * `InstanceIds` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `TimeBasedAutoScalingConfigurations` &mdash; (`Array<Object>`)
 *         * `InstanceId` &mdash; (`String`)
 *         * `AutoScalingSchedule` &mdash; (`Object`)
 *           * `Monday` &mdash; (`Object<String>`)
 *           * `Tuesday` &mdash; (`Object<String>`)
 *           * `Wednesday` &mdash; (`Object<String>`)
 *           * `Thursday` &mdash; (`Object<String>`)
 *           * `Friday` &mdash; (`Object<String>`)
 *           * `Saturday` &mdash; (`Object<String>`)
 *           * `Sunday` &mdash; (`Object<String>`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeUserProfiles(params, callback)
 *   Calls the DescribeUserProfiles API operation.
 *   @param params [Object]
 *     * `IamUserArns` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `UserProfiles` &mdash; (`Array<Object>`)
 *         * `IamUserArn` &mdash; (`String`)
 *         * `Name` &mdash; (`String`)
 *         * `Root` &mdash; (`Boolean`)
 *         * `SshUsername` &mdash; (`String`)
 *         * `SshPublicKey` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVolumes(params, callback)
 *   Calls the DescribeVolumes API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; (`String`)
 *     * `RaidArrayId` &mdash; (`String`)
 *     * `VolumeIds` &mdash; (`Array<String>`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `Volumes` &mdash; (`Array<Object>`)
 *         * `VolumeId` &mdash; (`String`)
 *         * `Ec2VolumeId` &mdash; (`String`)
 *         * `Name` &mdash; (`String`)
 *         * `RaidArrayId` &mdash; (`String`)
 *         * `InstanceId` &mdash; (`String`)
 *         * `Status` &mdash; (`String`)
 *         * `Size` &mdash; (`Integer`)
 *         * `Device` &mdash; (`String`)
 *         * `MountPoint` &mdash; (`String`)
 *         * `Region` &mdash; (`String`)
 *         * `AvailabilityZone` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getHostnameSuggestion(params, callback)
 *   Calls the GetHostnameSuggestion API operation.
 *   @param params [Object]
 *     * `LayerId` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `LayerId` &mdash; (`String`)
 *       * `Hostname` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method rebootInstance(params, callback)
 *   Calls the RebootInstance API operation.
 *   @param params [Object]
 *     * `InstanceId` &mdash; (`String`)
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
 * @!method searchPackages(params, callback)
 *   Calls the SearchPackages API operation.
 *   @param params [Object]
 *     * `DefaultOs` &mdash; (`String`)
 *     * `Query` &mdash; (`String`)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *       * `Packages` &mdash; (`Object<String>`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method setLoadBasedAutoScaling(params, callback)
 *   Calls the SetLoadBasedAutoScaling API operation.
 *   @param params [Object]
 *     * `LayerId` &mdash; (`String`)
 *     * `Enable` &mdash; (`Boolean`)
 *     * `UpScaling` &mdash; (`Object`)
 *       * `InstanceCount` &mdash; (`Integer`)
 *       * `ThresholdsWaitTime` &mdash; (`Integer`)
 *       * `IgnoreMetricsTime` &mdash; (`Integer`)
 *       * `CpuThreshold` &mdash; (`Float`)
 *       * `MemoryThreshold` &mdash; (`Float`)
 *       * `LoadThreshold` &mdash; (`Float`)
 *     * `DownScaling` &mdash; (`Object`)
 *       * `InstanceCount` &mdash; (`Integer`)
 *       * `ThresholdsWaitTime` &mdash; (`Integer`)
 *       * `IgnoreMetricsTime` &mdash; (`Integer`)
 *       * `CpuThreshold` &mdash; (`Float`)
 *       * `MemoryThreshold` &mdash; (`Float`)
 *       * `LoadThreshold` &mdash; (`Float`)
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
 *     * `StackId` &mdash; (`String`)
 *     * `IamUserArn` &mdash; (`String`)
 *     * `Level` &mdash; (`String`)
 *     * `AllowSsh` &mdash; (`Boolean`)
 *     * `AllowSudo` &mdash; (`Boolean`)
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
 *     * `InstanceId` &mdash; (`String`)
 *     * `AutoScalingSchedule` &mdash; (`Object`)
 *       * `Monday` &mdash; (`Object<String>`)
 *       * `Tuesday` &mdash; (`Object<String>`)
 *       * `Wednesday` &mdash; (`Object<String>`)
 *       * `Thursday` &mdash; (`Object<String>`)
 *       * `Friday` &mdash; (`Object<String>`)
 *       * `Saturday` &mdash; (`Object<String>`)
 *       * `Sunday` &mdash; (`Object<String>`)
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
 *     * `InstanceId` &mdash; (`String`)
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
 *     * `StackId` &mdash; (`String`)
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
 *     * `InstanceId` &mdash; (`String`)
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
 *     * `StackId` &mdash; (`String`)
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
 *     * `AppId` &mdash; (`String`)
 *     * `Name` &mdash; (`String`)
 *     * `Description` &mdash; (`String`)
 *     * `Type` &mdash; (`String`)
 *     * `AppSource` &mdash; (`Object`)
 *       * `Type` &mdash; (`String`)
 *       * `Url` &mdash; (`String`)
 *       * `Username` &mdash; (`String`)
 *       * `Password` &mdash; (`String`)
 *       * `SshKey` &mdash; (`String`)
 *       * `Revision` &mdash; (`String`)
 *     * `Domains` &mdash; (`Array<String>`)
 *     * `EnableSsl` &mdash; (`Boolean`)
 *     * `SslConfiguration` &mdash; (`Object`)
 *       * `Certificate` &mdash; (`String`)
 *       * `PrivateKey` &mdash; (`String`)
 *       * `Chain` &mdash; (`String`)
 *     * `Attributes` &mdash; (`Object<String>`)
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
 *     * `InstanceId` &mdash; (`String`)
 *     * `LayerIds` &mdash; (`Array<String>`)
 *     * `InstanceType` &mdash; (`String`)
 *     * `AutoScalingType` &mdash; (`String`)
 *     * `Hostname` &mdash; (`String`)
 *     * `Os` &mdash; (`String`)
 *     * `SshKeyName` &mdash; (`String`)
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
 *     * `LayerId` &mdash; (`String`)
 *     * `Name` &mdash; (`String`)
 *     * `Shortname` &mdash; (`String`)
 *     * `Attributes` &mdash; (`Object<String>`)
 *     * `InstanceProfileArn` &mdash; (`String`)
 *     * `CustomSecurityGroupIds` &mdash; (`Array<String>`)
 *     * `Packages` &mdash; (`Array<String>`)
 *     * `VolumeConfigurations` &mdash; (`Array<Object>`)
 *       * `MountPoint` &mdash; (`String`)
 *       * `RaidLevel` &mdash; (`Integer`)
 *       * `NumberOfDisks` &mdash; (`Integer`)
 *       * `Size` &mdash; (`Integer`)
 *     * `EnableAutoHealing` &mdash; (`Boolean`)
 *     * `AutoAssignElasticIps` &mdash; (`Boolean`)
 *     * `CustomRecipes` &mdash; (`Object`)
 *       * `Setup` &mdash; (`Array<String>`)
 *       * `Configure` &mdash; (`Array<String>`)
 *       * `Deploy` &mdash; (`Array<String>`)
 *       * `Undeploy` &mdash; (`Array<String>`)
 *       * `Shutdown` &mdash; (`Array<String>`)
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
 *     * `StackId` &mdash; (`String`)
 *     * `Name` &mdash; (`String`)
 *     * `Attributes` &mdash; (`Object<String>`)
 *     * `ServiceRoleArn` &mdash; (`String`)
 *     * `DefaultInstanceProfileArn` &mdash; (`String`)
 *     * `DefaultOs` &mdash; (`String`)
 *     * `HostnameTheme` &mdash; (`String`)
 *     * `DefaultAvailabilityZone` &mdash; (`String`)
 *     * `CustomJson` &mdash; (`String`)
 *     * `UseCustomCookbooks` &mdash; (`Boolean`)
 *     * `CustomCookbooksSource` &mdash; (`Object`)
 *       * `Type` &mdash; (`String`)
 *       * `Url` &mdash; (`String`)
 *       * `Username` &mdash; (`String`)
 *       * `Password` &mdash; (`String`)
 *       * `SshKey` &mdash; (`String`)
 *       * `Revision` &mdash; (`String`)
 *     * `DefaultSshKeyName` &mdash; (`String`)
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
 *     * `IamUserArn` &mdash; (`String`)
 *     * `SshUsername` &mdash; (`String`)
 *     * `SshPublicKey` &mdash; (`String`)
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
