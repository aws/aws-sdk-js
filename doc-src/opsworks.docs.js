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
 *     * +SourceStackId+ - (<tt>String</tt>)
 *     * +Name+ - (<tt>String</tt>)
 *     * +Region+ - (<tt>String</tt>)
 *     * +Attributes+ - (<tt>Object<String></tt>)
 *     * +ServiceRoleArn+ - (<tt>String</tt>)
 *     * +DefaultInstanceProfileArn+ - (<tt>String</tt>)
 *     * +DefaultOs+ - (<tt>String</tt>)
 *     * +HostnameTheme+ - (<tt>String</tt>)
 *     * +DefaultAvailabilityZone+ - (<tt>String</tt>)
 *     * +CustomJson+ - (<tt>String</tt>)
 *     * +UseCustomCookbooks+ - (<tt>Boolean</tt>)
 *     * +CustomCookbooksSource+ - (<tt>Object</tt>)
 *       * +Type+ - (<tt>String</tt>)
 *       * +Url+ - (<tt>String</tt>)
 *       * +Username+ - (<tt>String</tt>)
 *       * +Password+ - (<tt>String</tt>)
 *       * +SshKey+ - (<tt>String</tt>)
 *       * +Revision+ - (<tt>String</tt>)
 *     * +DefaultSshKeyName+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StackId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createApp(params, callback)
 *   Calls the CreateApp API operation.
 *   @param params [Object]
 *     * +StackId+ - (<tt>String</tt>)
 *     * +Name+ - (<tt>String</tt>)
 *     * +Description+ - (<tt>String</tt>)
 *     * +Type+ - (<tt>String</tt>)
 *     * +AppSource+ - (<tt>Object</tt>)
 *       * +Type+ - (<tt>String</tt>)
 *       * +Url+ - (<tt>String</tt>)
 *       * +Username+ - (<tt>String</tt>)
 *       * +Password+ - (<tt>String</tt>)
 *       * +SshKey+ - (<tt>String</tt>)
 *       * +Revision+ - (<tt>String</tt>)
 *     * +Domains+ - (<tt>Array<String></tt>)
 *     * +EnableSsl+ - (<tt>Boolean</tt>)
 *     * +SslConfiguration+ - (<tt>Object</tt>)
 *       * +Certificate+ - (<tt>String</tt>)
 *       * +PrivateKey+ - (<tt>String</tt>)
 *       * +Chain+ - (<tt>String</tt>)
 *     * +Attributes+ - (<tt>Object<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AppId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDeployment(params, callback)
 *   Calls the CreateDeployment API operation.
 *   @param params [Object]
 *     * +StackId+ - (<tt>String</tt>)
 *     * +AppId+ - (<tt>String</tt>)
 *     * +InstanceIds+ - (<tt>Array<String></tt>)
 *     * +Command+ - (<tt>Object</tt>)
 *       * +Name+ - (<tt>String</tt>)
 *       * +Args+ - (<tt>Object<Array<String>></tt>)
 *     * +Comment+ - (<tt>String</tt>)
 *     * +CustomJson+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DeploymentId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createInstance(params, callback)
 *   Calls the CreateInstance API operation.
 *   @param params [Object]
 *     * +StackId+ - (<tt>String</tt>)
 *     * +LayerIds+ - (<tt>Array<String></tt>)
 *     * +InstanceType+ - (<tt>String</tt>)
 *     * +AutoScalingType+ - (<tt>String</tt>)
 *     * +Hostname+ - (<tt>String</tt>)
 *     * +Os+ - (<tt>String</tt>)
 *     * +SshKeyName+ - (<tt>String</tt>)
 *     * +AvailabilityZone+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InstanceId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createLayer(params, callback)
 *   Calls the CreateLayer API operation.
 *   @param params [Object]
 *     * +StackId+ - (<tt>String</tt>)
 *     * +Type+ - (<tt>String</tt>)
 *     * +Name+ - (<tt>String</tt>)
 *     * +Shortname+ - (<tt>String</tt>)
 *     * +Attributes+ - (<tt>Object<String></tt>)
 *     * +InstanceProfileArn+ - (<tt>String</tt>)
 *     * +CustomSecurityGroupIds+ - (<tt>Array<String></tt>)
 *     * +Packages+ - (<tt>Array<String></tt>)
 *     * +VolumeConfigurations+ - (<tt>Array<Object></tt>)
 *       * +MountPoint+ - (<tt>String</tt>)
 *       * +RaidLevel+ - (<tt>Integer</tt>)
 *       * +NumberOfDisks+ - (<tt>Integer</tt>)
 *       * +Size+ - (<tt>Integer</tt>)
 *     * +EnableAutoHealing+ - (<tt>Boolean</tt>)
 *     * +AutoAssignElasticIps+ - (<tt>Boolean</tt>)
 *     * +CustomRecipes+ - (<tt>Object</tt>)
 *       * +Setup+ - (<tt>Array<String></tt>)
 *       * +Configure+ - (<tt>Array<String></tt>)
 *       * +Deploy+ - (<tt>Array<String></tt>)
 *       * +Undeploy+ - (<tt>Array<String></tt>)
 *       * +Shutdown+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +LayerId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createStack(params, callback)
 *   Calls the CreateStack API operation.
 *   @param params [Object]
 *     * +Name+ - (<tt>String</tt>)
 *     * +Region+ - (<tt>String</tt>)
 *     * +Attributes+ - (<tt>Object<String></tt>)
 *     * +ServiceRoleArn+ - (<tt>String</tt>)
 *     * +DefaultInstanceProfileArn+ - (<tt>String</tt>)
 *     * +DefaultOs+ - (<tt>String</tt>)
 *     * +HostnameTheme+ - (<tt>String</tt>)
 *     * +DefaultAvailabilityZone+ - (<tt>String</tt>)
 *     * +CustomJson+ - (<tt>String</tt>)
 *     * +UseCustomCookbooks+ - (<tt>Boolean</tt>)
 *     * +CustomCookbooksSource+ - (<tt>Object</tt>)
 *       * +Type+ - (<tt>String</tt>)
 *       * +Url+ - (<tt>String</tt>)
 *       * +Username+ - (<tt>String</tt>)
 *       * +Password+ - (<tt>String</tt>)
 *       * +SshKey+ - (<tt>String</tt>)
 *       * +Revision+ - (<tt>String</tt>)
 *     * +DefaultSshKeyName+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StackId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createUserProfile(params, callback)
 *   Calls the CreateUserProfile API operation.
 *   @param params [Object]
 *     * +IamUserArn+ - (<tt>String</tt>)
 *     * +SshUsername+ - (<tt>String</tt>)
 *     * +SshPublicKey+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +IamUserArn+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteApp(params, callback)
 *   Calls the DeleteApp API operation.
 *   @param params [Object]
 *     * +AppId+ - (<tt>String</tt>)
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
 *     * +InstanceId+ - (<tt>String</tt>)
 *     * +DeleteElasticIp+ - (<tt>Boolean</tt>)
 *     * +DeleteVolumes+ - (<tt>Boolean</tt>)
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
 *     * +LayerId+ - (<tt>String</tt>)
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
 *     * +StackId+ - (<tt>String</tt>)
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
 *     * +IamUserArn+ - (<tt>String</tt>)
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
 *     * +StackId+ - (<tt>String</tt>)
 *     * +AppIds+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Apps+ - (<tt>Array<Object></tt>)
 *         * +AppId+ - (<tt>String</tt>)
 *         * +StackId+ - (<tt>String</tt>)
 *         * +Name+ - (<tt>String</tt>)
 *         * +Description+ - (<tt>String</tt>)
 *         * +Type+ - (<tt>String</tt>)
 *         * +AppSource+ - (<tt>Object</tt>)
 *           * +Type+ - (<tt>String</tt>)
 *           * +Url+ - (<tt>String</tt>)
 *           * +Username+ - (<tt>String</tt>)
 *           * +Password+ - (<tt>String</tt>)
 *           * +SshKey+ - (<tt>String</tt>)
 *           * +Revision+ - (<tt>String</tt>)
 *         * +Domains+ - (<tt>Array<String></tt>)
 *         * +EnableSsl+ - (<tt>Boolean</tt>)
 *         * +SslConfiguration+ - (<tt>Object</tt>)
 *           * +Certificate+ - (<tt>String</tt>)
 *           * +PrivateKey+ - (<tt>String</tt>)
 *           * +Chain+ - (<tt>String</tt>)
 *         * +Attributes+ - (<tt>Object<String></tt>)
 *         * +CreatedAt+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeCommands(params, callback)
 *   Calls the DescribeCommands API operation.
 *   @param params [Object]
 *     * +DeploymentId+ - (<tt>String</tt>)
 *     * +InstanceId+ - (<tt>String</tt>)
 *     * +CommandIds+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Commands+ - (<tt>Array<Object></tt>)
 *         * +CommandId+ - (<tt>String</tt>)
 *         * +InstanceId+ - (<tt>String</tt>)
 *         * +DeploymentId+ - (<tt>String</tt>)
 *         * +CreatedAt+ - (<tt>String</tt>)
 *         * +AcknowledgedAt+ - (<tt>String</tt>)
 *         * +CompletedAt+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *         * +ExitCode+ - (<tt>Integer</tt>)
 *         * +LogUrl+ - (<tt>String</tt>)
 *         * +Type+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDeployments(params, callback)
 *   Calls the DescribeDeployments API operation.
 *   @param params [Object]
 *     * +StackId+ - (<tt>String</tt>)
 *     * +AppId+ - (<tt>String</tt>)
 *     * +DeploymentIds+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Deployments+ - (<tt>Array<Object></tt>)
 *         * +DeploymentId+ - (<tt>String</tt>)
 *         * +StackId+ - (<tt>String</tt>)
 *         * +AppId+ - (<tt>String</tt>)
 *         * +CreatedAt+ - (<tt>String</tt>)
 *         * +CompletedAt+ - (<tt>String</tt>)
 *         * +Duration+ - (<tt>Integer</tt>)
 *         * +IamUserArn+ - (<tt>String</tt>)
 *         * +Comment+ - (<tt>String</tt>)
 *         * +Command+ - (<tt>Object</tt>)
 *           * +Name+ - (<tt>String</tt>)
 *           * +Args+ - (<tt>Object<Array<String>></tt>)
 *         * +Status+ - (<tt>String</tt>)
 *         * +CustomJson+ - (<tt>String</tt>)
 *         * +InstanceIds+ - (<tt>Array<String></tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeElasticIps(params, callback)
 *   Calls the DescribeElasticIps API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (<tt>String</tt>)
 *     * +Ips+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ElasticIps+ - (<tt>Array<Object></tt>)
 *         * +Ip+ - (<tt>String</tt>)
 *         * +Name+ - (<tt>String</tt>)
 *         * +Region+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeInstances(params, callback)
 *   Calls the DescribeInstances API operation.
 *   @param params [Object]
 *     * +StackId+ - (<tt>String</tt>)
 *     * +LayerId+ - (<tt>String</tt>)
 *     * +AppId+ - (<tt>String</tt>)
 *     * +InstanceIds+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Instances+ - (<tt>Array<Object></tt>)
 *         * +InstanceId+ - (<tt>String</tt>)
 *         * +Ec2InstanceId+ - (<tt>String</tt>)
 *         * +Hostname+ - (<tt>String</tt>)
 *         * +StackId+ - (<tt>String</tt>)
 *         * +LayerIds+ - (<tt>Array<String></tt>)
 *         * +SecurityGroups+ - (<tt>Array<String></tt>)
 *         * +InstanceType+ - (<tt>String</tt>)
 *         * +InstanceProfileArn+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *         * +Os+ - (<tt>String</tt>)
 *         * +AvailabilityZone+ - (<tt>String</tt>)
 *         * +PublicDns+ - (<tt>String</tt>)
 *         * +PrivateDns+ - (<tt>String</tt>)
 *         * +PublicIp+ - (<tt>String</tt>)
 *         * +PrivateIp+ - (<tt>String</tt>)
 *         * +ElasticIp+ - (<tt>String</tt>)
 *         * +AutoScalingType+ - (<tt>String</tt>)
 *         * +SshKeyName+ - (<tt>String</tt>)
 *         * +SshHostRsaKeyFingerprint+ - (<tt>String</tt>)
 *         * +SshHostDsaKeyFingerprint+ - (<tt>String</tt>)
 *         * +CreatedAt+ - (<tt>String</tt>)
 *         * +LastServiceErrorId+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLayers(params, callback)
 *   Calls the DescribeLayers API operation.
 *   @param params [Object]
 *     * +StackId+ - (<tt>String</tt>)
 *     * +LayerIds+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Layers+ - (<tt>Array<Object></tt>)
 *         * +StackId+ - (<tt>String</tt>)
 *         * +LayerId+ - (<tt>String</tt>)
 *         * +Type+ - (<tt>String</tt>)
 *         * +Name+ - (<tt>String</tt>)
 *         * +Shortname+ - (<tt>String</tt>)
 *         * +Attributes+ - (<tt>Object<String></tt>)
 *         * +InstanceProfileArn+ - (<tt>String</tt>)
 *         * +CustomSecurityGroupIds+ - (<tt>Array<String></tt>)
 *         * +DefaultSecurityGroupNames+ - (<tt>Array<String></tt>)
 *         * +Packages+ - (<tt>Array<String></tt>)
 *         * +VolumeConfigurations+ - (<tt>Array<Object></tt>)
 *           * +MountPoint+ - (<tt>String</tt>)
 *           * +RaidLevel+ - (<tt>Integer</tt>)
 *           * +NumberOfDisks+ - (<tt>Integer</tt>)
 *           * +Size+ - (<tt>Integer</tt>)
 *         * +EnableAutoHealing+ - (<tt>Boolean</tt>)
 *         * +AutoAssignElasticIps+ - (<tt>Boolean</tt>)
 *         * +DefaultRecipes+ - (<tt>Object</tt>)
 *           * +Setup+ - (<tt>Array<String></tt>)
 *           * +Configure+ - (<tt>Array<String></tt>)
 *           * +Deploy+ - (<tt>Array<String></tt>)
 *           * +Undeploy+ - (<tt>Array<String></tt>)
 *           * +Shutdown+ - (<tt>Array<String></tt>)
 *         * +CustomRecipes+ - (<tt>Object</tt>)
 *           * +Setup+ - (<tt>Array<String></tt>)
 *           * +Configure+ - (<tt>Array<String></tt>)
 *           * +Deploy+ - (<tt>Array<String></tt>)
 *           * +Undeploy+ - (<tt>Array<String></tt>)
 *           * +Shutdown+ - (<tt>Array<String></tt>)
 *         * +CreatedAt+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLoadBasedAutoScaling(params, callback)
 *   Calls the DescribeLoadBasedAutoScaling API operation.
 *   @param params [Object]
 *     * +LayerIds+ - (<tt>Array<String></tt>)
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
 *         * +LayerId+ - (<tt>String</tt>)
 *         * +Enable+ - (<tt>Boolean</tt>)
 *         * +UpScaling+ - (<tt>Object</tt>)
 *           * +InstanceCount+ - (<tt>Integer</tt>)
 *           * +ThresholdsWaitTime+ - (<tt>Integer</tt>)
 *           * +IgnoreMetricsTime+ - (<tt>Integer</tt>)
 *           * +CpuThreshold+ - (<tt>Float</tt>)
 *           * +MemoryThreshold+ - (<tt>Float</tt>)
 *           * +LoadThreshold+ - (<tt>Float</tt>)
 *         * +DownScaling+ - (<tt>Object</tt>)
 *           * +InstanceCount+ - (<tt>Integer</tt>)
 *           * +ThresholdsWaitTime+ - (<tt>Integer</tt>)
 *           * +IgnoreMetricsTime+ - (<tt>Integer</tt>)
 *           * +CpuThreshold+ - (<tt>Float</tt>)
 *           * +MemoryThreshold+ - (<tt>Float</tt>)
 *           * +LoadThreshold+ - (<tt>Float</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describePermissions(params, callback)
 *   Calls the DescribePermissions API operation.
 *   @param params [Object]
 *     * +IamUserArn+ - (<tt>String</tt>)
 *     * +StackId+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Permissions+ - (<tt>Array<Object></tt>)
 *         * +StackId+ - (<tt>String</tt>)
 *         * +IamUserArn+ - (<tt>String</tt>)
 *         * +Level+ - (<tt>String</tt>)
 *         * +AllowSsh+ - (<tt>Boolean</tt>)
 *         * +AllowSudo+ - (<tt>Boolean</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeRaidArrays(params, callback)
 *   Calls the DescribeRaidArrays API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (<tt>String</tt>)
 *     * +RaidArrayIds+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +RaidArrays+ - (<tt>Array<Object></tt>)
 *         * +RaidArrayId+ - (<tt>String</tt>)
 *         * +InstanceId+ - (<tt>String</tt>)
 *         * +Name+ - (<tt>String</tt>)
 *         * +RaidLevel+ - (<tt>Integer</tt>)
 *         * +NumberOfDisks+ - (<tt>Integer</tt>)
 *         * +Size+ - (<tt>Integer</tt>)
 *         * +Device+ - (<tt>String</tt>)
 *         * +MountPoint+ - (<tt>String</tt>)
 *         * +AvailabilityZone+ - (<tt>String</tt>)
 *         * +CreatedAt+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeServiceErrors(params, callback)
 *   Calls the DescribeServiceErrors API operation.
 *   @param params [Object]
 *     * +StackId+ - (<tt>String</tt>)
 *     * +InstanceId+ - (<tt>String</tt>)
 *     * +ServiceErrorIds+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +ServiceErrors+ - (<tt>Array<Object></tt>)
 *         * +ServiceErrorId+ - (<tt>String</tt>)
 *         * +StackId+ - (<tt>String</tt>)
 *         * +InstanceId+ - (<tt>String</tt>)
 *         * +Type+ - (<tt>String</tt>)
 *         * +Message+ - (<tt>String</tt>)
 *         * +CreatedAt+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSshKeys(params, callback)
 *   Calls the DescribeSshKeys API operation.
 *   @param params [Object]
 *     * +StackId+ - (<tt>String</tt>)
 *     * +InstanceId+ - (<tt>String</tt>)
 *     * +SshKeyIds+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SshKeys+ - (<tt>Array<Object></tt>)
 *         * +SshKeyId+ - (<tt>String</tt>)
 *         * +Region+ - (<tt>String</tt>)
 *         * +Name+ - (<tt>String</tt>)
 *         * +Fingerprint+ - (<tt>String</tt>)
 *         * +PrivateKey+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeStacks(params, callback)
 *   Calls the DescribeStacks API operation.
 *   @param params [Object]
 *     * +StackIds+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Stacks+ - (<tt>Array<Object></tt>)
 *         * +StackId+ - (<tt>String</tt>)
 *         * +Name+ - (<tt>String</tt>)
 *         * +Region+ - (<tt>String</tt>)
 *         * +Attributes+ - (<tt>Object<String></tt>)
 *         * +ServiceRoleArn+ - (<tt>String</tt>)
 *         * +DefaultInstanceProfileArn+ - (<tt>String</tt>)
 *         * +DefaultOs+ - (<tt>String</tt>)
 *         * +HostnameTheme+ - (<tt>String</tt>)
 *         * +DefaultAvailabilityZone+ - (<tt>String</tt>)
 *         * +CustomJson+ - (<tt>String</tt>)
 *         * +UseCustomCookbooks+ - (<tt>Boolean</tt>)
 *         * +CustomCookbooksSource+ - (<tt>Object</tt>)
 *           * +Type+ - (<tt>String</tt>)
 *           * +Url+ - (<tt>String</tt>)
 *           * +Username+ - (<tt>String</tt>)
 *           * +Password+ - (<tt>String</tt>)
 *           * +SshKey+ - (<tt>String</tt>)
 *           * +Revision+ - (<tt>String</tt>)
 *         * +DefaultSshKeyName+ - (<tt>String</tt>)
 *         * +CreatedAt+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeTimeBasedAutoScaling(params, callback)
 *   Calls the DescribeTimeBasedAutoScaling API operation.
 *   @param params [Object]
 *     * +InstanceIds+ - (<tt>Array<String></tt>)
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
 *         * +InstanceId+ - (<tt>String</tt>)
 *         * +AutoScalingSchedule+ - (<tt>Object</tt>)
 *           * +Monday+ - (<tt>Object<String></tt>)
 *           * +Tuesday+ - (<tt>Object<String></tt>)
 *           * +Wednesday+ - (<tt>Object<String></tt>)
 *           * +Thursday+ - (<tt>Object<String></tt>)
 *           * +Friday+ - (<tt>Object<String></tt>)
 *           * +Saturday+ - (<tt>Object<String></tt>)
 *           * +Sunday+ - (<tt>Object<String></tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeUserProfiles(params, callback)
 *   Calls the DescribeUserProfiles API operation.
 *   @param params [Object]
 *     * +IamUserArns+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +UserProfiles+ - (<tt>Array<Object></tt>)
 *         * +IamUserArn+ - (<tt>String</tt>)
 *         * +Name+ - (<tt>String</tt>)
 *         * +Root+ - (<tt>Boolean</tt>)
 *         * +SshUsername+ - (<tt>String</tt>)
 *         * +SshPublicKey+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVolumes(params, callback)
 *   Calls the DescribeVolumes API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (<tt>String</tt>)
 *     * +RaidArrayId+ - (<tt>String</tt>)
 *     * +VolumeIds+ - (<tt>Array<String></tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Volumes+ - (<tt>Array<Object></tt>)
 *         * +VolumeId+ - (<tt>String</tt>)
 *         * +Ec2VolumeId+ - (<tt>String</tt>)
 *         * +Name+ - (<tt>String</tt>)
 *         * +RaidArrayId+ - (<tt>String</tt>)
 *         * +InstanceId+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>String</tt>)
 *         * +Size+ - (<tt>Integer</tt>)
 *         * +Device+ - (<tt>String</tt>)
 *         * +MountPoint+ - (<tt>String</tt>)
 *         * +Region+ - (<tt>String</tt>)
 *         * +AvailabilityZone+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getHostnameSuggestion(params, callback)
 *   Calls the GetHostnameSuggestion API operation.
 *   @param params [Object]
 *     * +LayerId+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +LayerId+ - (<tt>String</tt>)
 *       * +Hostname+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method rebootInstance(params, callback)
 *   Calls the RebootInstance API operation.
 *   @param params [Object]
 *     * +InstanceId+ - (<tt>String</tt>)
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
 * @!method searchPackages(params, callback)
 *   Calls the SearchPackages API operation.
 *   @param params [Object]
 *     * +DefaultOs+ - (<tt>String</tt>)
 *     * +Query+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Packages+ - (<tt>Object<String></tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method setLoadBasedAutoScaling(params, callback)
 *   Calls the SetLoadBasedAutoScaling API operation.
 *   @param params [Object]
 *     * +LayerId+ - (<tt>String</tt>)
 *     * +Enable+ - (<tt>Boolean</tt>)
 *     * +UpScaling+ - (<tt>Object</tt>)
 *       * +InstanceCount+ - (<tt>Integer</tt>)
 *       * +ThresholdsWaitTime+ - (<tt>Integer</tt>)
 *       * +IgnoreMetricsTime+ - (<tt>Integer</tt>)
 *       * +CpuThreshold+ - (<tt>Float</tt>)
 *       * +MemoryThreshold+ - (<tt>Float</tt>)
 *       * +LoadThreshold+ - (<tt>Float</tt>)
 *     * +DownScaling+ - (<tt>Object</tt>)
 *       * +InstanceCount+ - (<tt>Integer</tt>)
 *       * +ThresholdsWaitTime+ - (<tt>Integer</tt>)
 *       * +IgnoreMetricsTime+ - (<tt>Integer</tt>)
 *       * +CpuThreshold+ - (<tt>Float</tt>)
 *       * +MemoryThreshold+ - (<tt>Float</tt>)
 *       * +LoadThreshold+ - (<tt>Float</tt>)
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
 *     * +StackId+ - (<tt>String</tt>)
 *     * +IamUserArn+ - (<tt>String</tt>)
 *     * +Level+ - (<tt>String</tt>)
 *     * +AllowSsh+ - (<tt>Boolean</tt>)
 *     * +AllowSudo+ - (<tt>Boolean</tt>)
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
 *     * +InstanceId+ - (<tt>String</tt>)
 *     * +AutoScalingSchedule+ - (<tt>Object</tt>)
 *       * +Monday+ - (<tt>Object<String></tt>)
 *       * +Tuesday+ - (<tt>Object<String></tt>)
 *       * +Wednesday+ - (<tt>Object<String></tt>)
 *       * +Thursday+ - (<tt>Object<String></tt>)
 *       * +Friday+ - (<tt>Object<String></tt>)
 *       * +Saturday+ - (<tt>Object<String></tt>)
 *       * +Sunday+ - (<tt>Object<String></tt>)
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
 *     * +InstanceId+ - (<tt>String</tt>)
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
 *     * +StackId+ - (<tt>String</tt>)
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
 *     * +InstanceId+ - (<tt>String</tt>)
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
 *     * +StackId+ - (<tt>String</tt>)
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
 *     * +AppId+ - (<tt>String</tt>)
 *     * +Name+ - (<tt>String</tt>)
 *     * +Description+ - (<tt>String</tt>)
 *     * +Type+ - (<tt>String</tt>)
 *     * +AppSource+ - (<tt>Object</tt>)
 *       * +Type+ - (<tt>String</tt>)
 *       * +Url+ - (<tt>String</tt>)
 *       * +Username+ - (<tt>String</tt>)
 *       * +Password+ - (<tt>String</tt>)
 *       * +SshKey+ - (<tt>String</tt>)
 *       * +Revision+ - (<tt>String</tt>)
 *     * +Domains+ - (<tt>Array<String></tt>)
 *     * +EnableSsl+ - (<tt>Boolean</tt>)
 *     * +SslConfiguration+ - (<tt>Object</tt>)
 *       * +Certificate+ - (<tt>String</tt>)
 *       * +PrivateKey+ - (<tt>String</tt>)
 *       * +Chain+ - (<tt>String</tt>)
 *     * +Attributes+ - (<tt>Object<String></tt>)
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
 *     * +InstanceId+ - (<tt>String</tt>)
 *     * +LayerIds+ - (<tt>Array<String></tt>)
 *     * +InstanceType+ - (<tt>String</tt>)
 *     * +AutoScalingType+ - (<tt>String</tt>)
 *     * +Hostname+ - (<tt>String</tt>)
 *     * +Os+ - (<tt>String</tt>)
 *     * +SshKeyName+ - (<tt>String</tt>)
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
 *     * +LayerId+ - (<tt>String</tt>)
 *     * +Name+ - (<tt>String</tt>)
 *     * +Shortname+ - (<tt>String</tt>)
 *     * +Attributes+ - (<tt>Object<String></tt>)
 *     * +InstanceProfileArn+ - (<tt>String</tt>)
 *     * +CustomSecurityGroupIds+ - (<tt>Array<String></tt>)
 *     * +Packages+ - (<tt>Array<String></tt>)
 *     * +VolumeConfigurations+ - (<tt>Array<Object></tt>)
 *       * +MountPoint+ - (<tt>String</tt>)
 *       * +RaidLevel+ - (<tt>Integer</tt>)
 *       * +NumberOfDisks+ - (<tt>Integer</tt>)
 *       * +Size+ - (<tt>Integer</tt>)
 *     * +EnableAutoHealing+ - (<tt>Boolean</tt>)
 *     * +AutoAssignElasticIps+ - (<tt>Boolean</tt>)
 *     * +CustomRecipes+ - (<tt>Object</tt>)
 *       * +Setup+ - (<tt>Array<String></tt>)
 *       * +Configure+ - (<tt>Array<String></tt>)
 *       * +Deploy+ - (<tt>Array<String></tt>)
 *       * +Undeploy+ - (<tt>Array<String></tt>)
 *       * +Shutdown+ - (<tt>Array<String></tt>)
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
 *     * +StackId+ - (<tt>String</tt>)
 *     * +Name+ - (<tt>String</tt>)
 *     * +Attributes+ - (<tt>Object<String></tt>)
 *     * +ServiceRoleArn+ - (<tt>String</tt>)
 *     * +DefaultInstanceProfileArn+ - (<tt>String</tt>)
 *     * +DefaultOs+ - (<tt>String</tt>)
 *     * +HostnameTheme+ - (<tt>String</tt>)
 *     * +DefaultAvailabilityZone+ - (<tt>String</tt>)
 *     * +CustomJson+ - (<tt>String</tt>)
 *     * +UseCustomCookbooks+ - (<tt>Boolean</tt>)
 *     * +CustomCookbooksSource+ - (<tt>Object</tt>)
 *       * +Type+ - (<tt>String</tt>)
 *       * +Url+ - (<tt>String</tt>)
 *       * +Username+ - (<tt>String</tt>)
 *       * +Password+ - (<tt>String</tt>)
 *       * +SshKey+ - (<tt>String</tt>)
 *       * +Revision+ - (<tt>String</tt>)
 *     * +DefaultSshKeyName+ - (<tt>String</tt>)
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
 *     * +IamUserArn+ - (<tt>String</tt>)
 *     * +SshUsername+ - (<tt>String</tt>)
 *     * +SshPublicKey+ - (<tt>String</tt>)
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
