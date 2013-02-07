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
 * === Sending a Request Using ELB
 *
 *   svc = new AWS.ELB();
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
 *   @option (see AWS.ELB.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.ELB.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.ELB.Client
 *
 */
AWS.ELB = inherit({})

/**
 * The low-level ELB client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method applySecurityGroupsToLoadBalancer(params, callback)
 *   Calls the ApplySecurityGroupsToLoadBalancer API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer. The name must be unique within
 *       the client AWS account.
 *     * +SecurityGroups+ - (*required*, <tt>Array<String></tt>) A list
 *       of security group IDs to associate with your LoadBalancer in
 *       VPC. The security group IDs must be provided as the ID and not
 *       the security group name (For example, sg-1234).
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +SecurityGroups+ - (<tt>Array<String></tt>) A list of security
 *         group IDs associated with your LoadBalancer.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method attachLoadBalancerToSubnets(params, callback)
 *   Calls the AttachLoadBalancerToSubnets API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer. The name must be unique within
 *       the client AWS account.
 *     * +Subnets+ - (*required*, <tt>Array<String></tt>) A list of
 *       subnet IDs to add for the LoadBalancer.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Subnets+ - (<tt>Array<String></tt>) A list of subnet IDs added
 *         for the LoadBalancer.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method configureHealthCheck(params, callback)
 *   Calls the ConfigureHealthCheck API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The mnemonic
 *       name associated with the LoadBalancer. This name must be unique
 *       within the client AWS account.
 *     * +HealthCheck+ - (*required*, <tt>Object</tt>) A structure
 *       containing the configuration information for the new
 *       healthcheck.
 *       * +Target+ - (*required*, <tt>String</tt>) Specifies the
 *         instance being checked. The protocol is either TCP, HTTP,
 *         HTTPS, or SSL. The range of valid ports is one (1) through
 *         65535. TCP is the default, specified as a TCP: port pair, for
 *         example "TCP:5000". In this case a healthcheck simply attempts
 *         to open a TCP connection to the instance on the specified
 *         port. Failure to connect within the configured timeout is
 *         considered unhealthy. SSL is also specified as SSL: port pair,
 *         for example, SSL:5000. For HTTP or HTTPS protocol, the
 *         situation is different. You have to include a ping path in the
 *         string. HTTP is specified as a HTTP:port;/;PathToPing;
 *         grouping, for example "HTTP:80/weather/us/wa/seattle". In this
 *         case, a HTTP GET request is issued to the instance on the
 *         given port and path. Any answer other than "200 OK" within the
 *         timeout period is considered unhealthy. The total length of
 *         the HTTP ping target needs to be 1024 16-bit Unicode
 *         characters or less.
 *       * +Interval+ - (*required*, <tt>Integer</tt>) Specifies the
 *         approximate interval, in seconds, between health checks of an
 *         individual instance.
 *       * +Timeout+ - (*required*, <tt>Integer</tt>) Specifies the
 *         amount of time, in seconds, during which no response means a
 *         failed health probe. This value must be less than the Interval
 *         value.
 *       * +UnhealthyThreshold+ - (*required*, <tt>Integer</tt>)
 *         Specifies the number of consecutive health probe failures
 *         required before moving the instance to the Unhealthy state.
 *       * +HealthyThreshold+ - (*required*, <tt>Integer</tt>) Specifies
 *         the number of consecutive health probe successes required
 *         before moving the instance to the Healthy state.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +HealthCheck+ - (<tt>Object</tt>) The updated healthcheck for
 *         the instances.
 *         * +Target+ - (<tt>String</tt>) Specifies the
 *           instance being checked. The protocol is either TCP, HTTP,
 *           HTTPS, or SSL. The range of valid ports is one (1) through
 *           65535. TCP is the default, specified as a TCP: port pair, for
 *           example "TCP:5000". In this case a healthcheck simply attempts
 *           to open a TCP connection to the instance on the specified
 *           port. Failure to connect within the configured timeout is
 *           considered unhealthy. SSL is also specified as SSL: port pair,
 *           for example, SSL:5000. For HTTP or HTTPS protocol, the
 *           situation is different. You have to include a ping path in the
 *           string. HTTP is specified as a HTTP:port;/;PathToPing;
 *           grouping, for example "HTTP:80/weather/us/wa/seattle". In this
 *           case, a HTTP GET request is issued to the instance on the
 *           given port and path. Any answer other than "200 OK" within the
 *           timeout period is considered unhealthy. The total length of
 *           the HTTP ping target needs to be 1024 16-bit Unicode
 *           characters or less.
 *         * +Interval+ - (<tt>Integer</tt>) Specifies the
 *           approximate interval, in seconds, between health checks of an
 *           individual instance.
 *         * +Timeout+ - (<tt>Integer</tt>) Specifies the
 *           amount of time, in seconds, during which no response means a
 *           failed health probe. This value must be less than the Interval
 *           value.
 *         * +UnhealthyThreshold+ - (<tt>Integer</tt>)
 *           Specifies the number of consecutive health probe failures
 *           required before moving the instance to the Unhealthy state.
 *         * +HealthyThreshold+ - (<tt>Integer</tt>) Specifies
 *           the number of consecutive health probe successes required
 *           before moving the instance to the Healthy state.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createAppCookieStickinessPolicy(params, callback)
 *   Calls the CreateAppCookieStickinessPolicy API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer. The name must be unique within
 *       the client AWS account.
 *     * +PolicyName+ - (*required*, <tt>String</tt>) The name of the
 *       policy being created. The name must be unique within the set of
 *       policies for this LoadBalancer.
 *     * +CookieName+ - (*required*, <tt>String</tt>) Name of the
 *       application cookie used for stickiness.
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
 * @!method createLBCookieStickinessPolicy(params, callback)
 *   Calls the CreateLBCookieStickinessPolicy API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer. The name must be unique within
 *       the client AWS account.
 *     * +PolicyName+ - (*required*, <tt>String</tt>) The name of the
 *       policy being created. The name must be unique within the set of
 *       policies for this LoadBalancer.
 *     * +CookieExpirationPeriod+ - (<tt>Integer</tt>) The time period in
 *       seconds after which the cookie should be considered stale. Not
 *       specifying this parameter indicates that the sticky session will
 *       last for the duration of the browser session.
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
 * @!method createLoadBalancer(params, callback)
 *   Calls the CreateLoadBalancer API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer. The name must be unique within
 *       your set of LoadBalancers.
 *     * +Listeners+ - (*required*, <tt>Array<Object></tt>) A list of the
 *       following tuples: LoadBalancerPort, InstancePort, and Protocol.
 *       * +Protocol+ - (*required*, <tt>String</tt>) Specifies the
 *         LoadBalancer transport protocol to use for routing - HTTP,
 *         HTTPS, TCP or SSL. This property cannot be modified for the
 *         life of the LoadBalancer.
 *       * +LoadBalancerPort+ - (*required*, <tt>Integer</tt>) Specifies
 *         the external LoadBalancer port number. This property cannot be
 *         modified for the life of the LoadBalancer.
 *       * +InstanceProtocol+ - (<tt>String</tt>) Specifies the protocol
 *         to use for routing traffic to back-end instances - HTTP,
 *         HTTPS, TCP, or SSL. This property cannot be modified for the
 *         life of the LoadBalancer. If the front-end protocol is HTTP or
 *         HTTPS, InstanceProtocol has to be at the same protocol layer,
 *         i.e., HTTP or HTTPS. Likewise, if the front-end protocol is
 *         TCP or SSL, InstanceProtocol has to be TCP or SSL. If there is
 *         another listener with the same InstancePort whose
 *         InstanceProtocol is secure, i.e., HTTPS or SSL, the listener's
 *         InstanceProtocol has to be secure, i.e., HTTPS or SSL. If
 *         there is another listener with the same InstancePort whose
 *         InstanceProtocol is HTTP or TCP, the listener's
 *         InstanceProtocol must be either HTTP or TCP.
 *       * +InstancePort+ - (*required*, <tt>Integer</tt>) Specifies the
 *         TCP port on which the instance server is listening. This
 *         property cannot be modified for the life of the LoadBalancer.
 *       * +SSLCertificateId+ - (<tt>String</tt>) The ARN string of the
 *         server certificate. To get the ARN of the server certificate,
 *         call the AWS Identity and Access Management
 *         UploadServerCertificate API.
 *     * +AvailabilityZones+ - (<tt>Array<String></tt>) A list of
 *       Availability Zones. At least one Availability Zone must be
 *       specified. Specified Availability Zones must be in the same EC2
 *       Region as the LoadBalancer. Traffic will be equally distributed
 *       across all zones. This list can be modified after the creation
 *       of the LoadBalancer.
 *     * +Subnets+ - (<tt>Array<String></tt>) A list of subnet IDs in
 *       your VPC to attach to your LoadBalancer.
 *     * +SecurityGroups+ - (<tt>Array<String></tt>) The security groups
 *       assigned to your LoadBalancer within your VPC.
 *     * +Scheme+ - (<tt>String</tt>) The type of a LoadBalancer. This
 *       option is only available for LoadBalancers attached to a Amazon
 *       VPC. By default, Elastic Load Balancer creates an
 *       internet-facing load balancer with publicly resolvable DNS name
 *       that resolves to public IP addresses. Specify the value internal
 *       for this option to create an internal load balancer with a DNS
 *       name that resolves to private IP addresses.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DNSName+ - (<tt>String</tt>) The DNS name for the LoadBalancer.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createLoadBalancerListeners(params, callback)
 *   Calls the CreateLoadBalancerListeners API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name of
 *       the new LoadBalancer. The name must be unique within your AWS
 *       account.
 *     * +Listeners+ - (*required*, <tt>Array<Object></tt>) A list of
 *       LoadBalancerPort, InstancePort, Protocol, and SSLCertificateId
 *       items.
 *       * +Protocol+ - (*required*, <tt>String</tt>) Specifies the
 *         LoadBalancer transport protocol to use for routing - HTTP,
 *         HTTPS, TCP or SSL. This property cannot be modified for the
 *         life of the LoadBalancer.
 *       * +LoadBalancerPort+ - (*required*, <tt>Integer</tt>) Specifies
 *         the external LoadBalancer port number. This property cannot be
 *         modified for the life of the LoadBalancer.
 *       * +InstanceProtocol+ - (<tt>String</tt>) Specifies the protocol
 *         to use for routing traffic to back-end instances - HTTP,
 *         HTTPS, TCP, or SSL. This property cannot be modified for the
 *         life of the LoadBalancer. If the front-end protocol is HTTP or
 *         HTTPS, InstanceProtocol has to be at the same protocol layer,
 *         i.e., HTTP or HTTPS. Likewise, if the front-end protocol is
 *         TCP or SSL, InstanceProtocol has to be TCP or SSL. If there is
 *         another listener with the same InstancePort whose
 *         InstanceProtocol is secure, i.e., HTTPS or SSL, the listener's
 *         InstanceProtocol has to be secure, i.e., HTTPS or SSL. If
 *         there is another listener with the same InstancePort whose
 *         InstanceProtocol is HTTP or TCP, the listener's
 *         InstanceProtocol must be either HTTP or TCP.
 *       * +InstancePort+ - (*required*, <tt>Integer</tt>) Specifies the
 *         TCP port on which the instance server is listening. This
 *         property cannot be modified for the life of the LoadBalancer.
 *       * +SSLCertificateId+ - (<tt>String</tt>) The ARN string of the
 *         server certificate. To get the ARN of the server certificate,
 *         call the AWS Identity and Access Management
 *         UploadServerCertificate API.
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
 * @!method createLoadBalancerPolicy(params, callback)
 *   Calls the CreateLoadBalancerPolicy API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer for which the policy is being
 *       created. This name must be unique within the client AWS account.
 *     * +PolicyName+ - (*required*, <tt>String</tt>) The name of the
 *       LoadBalancer policy being created. The name must be unique
 *       within the set of policies for this LoadBalancer.
 *     * +PolicyTypeName+ - (*required*, <tt>String</tt>) The name of the
 *       base policy type being used to create this policy. To get the
 *       list of policy types, use the DescribeLoadBalancerPolicyTypes
 *       action.
 *     * +PolicyAttributes+ - (<tt>Array<Object></tt>) A list of
 *       attributes associated with the policy being created.
 *       * +AttributeName+ - (<tt>String</tt>) The name of the attribute
 *         associated with the policy.
 *       * +AttributeValue+ - (<tt>String</tt>) The value of the
 *         attribute associated with the policy.
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
 * @!method deleteLoadBalancer(params, callback)
 *   Calls the DeleteLoadBalancer API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer. The name must be unique within
 *       the client AWS account.
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
 * @!method deleteLoadBalancerListeners(params, callback)
 *   Calls the DeleteLoadBalancerListeners API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The mnemonic
 *       name associated with the LoadBalancer.
 *     * +LoadBalancerPorts+ - (*required*, <tt>Array<Integer></tt>) The
 *       client port number(s) of the LoadBalancerListener(s) to be
 *       removed.
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
 * @!method deleteLoadBalancerPolicy(params, callback)
 *   Calls the DeleteLoadBalancerPolicy API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The mnemonic
 *       name associated with the LoadBalancer. The name must be unique
 *       within your AWS account.
 *     * +PolicyName+ - (*required*, <tt>String</tt>) The mnemonic name
 *       for the policy being deleted.
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
 * @!method deregisterInstancesFromLoadBalancer(params, callback)
 *   Calls the DeregisterInstancesFromLoadBalancer API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer. The name must be unique within
 *       the client AWS account.
 *     * +Instances+ - (*required*, <tt>Array<Object></tt>) A list of EC2
 *       instance IDs consisting of all instances to be deregistered.
 *       * +InstanceId+ - (<tt>String</tt>) Provides an EC2 instance ID.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Instances+ - (<tt>Array<Object></tt>) An updated list of
 *         remaining instances registered with the LoadBalancer.
 *         * +InstanceId+ - (<tt>String</tt>) Provides an EC2 instance ID.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeInstanceHealth(params, callback)
 *   Calls the DescribeInstanceHealth API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer. The name must be unique within
 *       the client AWS account.
 *     * +Instances+ - (<tt>Array<Object></tt>) A list of instance IDs
 *       whose states are being queried.
 *       * +InstanceId+ - (<tt>String</tt>) Provides an EC2 instance ID.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InstanceStates+ - (<tt>Array<Object></tt>) A list containing
 *         health information for the specified instances.
 *         * +InstanceId+ - (<tt>String</tt>) Provides an EC2 instance ID.
 *         * +State+ - (<tt>String</tt>) Specifies the current status of
 *           the instance.
 *         * +ReasonCode+ - (<tt>String</tt>) Provides information about
 *           the cause of OutOfService instances. Specifically, it
 *           indicates whether the cause is Elastic Load Balancing or the
 *           instance behind the LoadBalancer.
 *         * +Description+ - (<tt>String</tt>) Provides a description of
 *           the instance.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLoadBalancerPolicies(params, callback)
 *   Calls the DescribeLoadBalancerPolicies API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (<tt>String</tt>) The mnemonic name
 *       associated with the LoadBalancer. If no name is specified, the
 *       operation returns the attributes of either all the sample
 *       policies pre-defined by Elastic Load Balancing or the specified
 *       sample polices.
 *     * +PolicyNames+ - (<tt>Array<String></tt>) The names of
 *       LoadBalancer policies you've created or Elastic Load Balancing
 *       sample policy names.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +PolicyDescriptions+ - (<tt>Array<Object></tt>) A list of policy
 *         description structures.
 *         * +PolicyName+ - (<tt>String</tt>) The name mof the policy
 *           associated with the LoadBalancer.
 *         * +PolicyTypeName+ - (<tt>String</tt>) The name of the policy
 *           type associated with the LoadBalancer.
 *         * +PolicyAttributeDescriptions+ - (<tt>Array<Object></tt>) A
 *           list of policy attribute description structures.
 *           * +AttributeName+ - (<tt>String</tt>) The name of the
 *             attribute associated with the policy.
 *           * +AttributeValue+ - (<tt>String</tt>) The value of the
 *             attribute associated with the policy.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLoadBalancerPolicyTypes(params, callback)
 *   Calls the DescribeLoadBalancerPolicyTypes API operation.
 *   @param params [Object]
 *     * +PolicyTypeNames+ - (<tt>Array<String></tt>) Specifies the name
 *       of the policy types. If no names are specified, returns the
 *       description of all the policy types defined by Elastic Load
 *       Balancing service.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +PolicyTypeDescriptions+ - (<tt>Array<Object></tt>) List of
 *         policy type description structures of the specified policy type.
 *         If no policy type names are specified, returns the description
 *         of all the policy types defined by Elastic Load Balancing
 *         service.
 *         * +PolicyTypeName+ - (<tt>String</tt>) The name of the policy
 *           type.
 *         * +Description+ - (<tt>String</tt>) A human-readable description
 *           of the policy type.
 *         * +PolicyAttributeTypeDescriptions+ - (<tt>Array<Object></tt>)
 *           The description of the policy attributes associated with the
 *           LoadBalancer policies defined by the Elastic Load Balancing
 *           service.
 *           * +AttributeName+ - (<tt>String</tt>) The name of the
 *             attribute associated with the policy type.
 *           * +AttributeType+ - (<tt>String</tt>) The type of attribute.
 *             For example, Boolean, Integer, etc.
 *           * +Description+ - (<tt>String</tt>) A human-readable
 *             description of the attribute.
 *           * +DefaultValue+ - (<tt>String</tt>) The default value of the
 *             attribute, if applicable.
 *           * +Cardinality+ - (<tt>String</tt>) The cardinality of the
 *             attribute. Valid Values: ONE(1) : Single value required
 *             ZERO_OR_ONE(0..1) : Up to one value can be supplied
 *             ZERO_OR_MORE(0..*) : Optional. Multiple values are allowed
 *             ONE_OR_MORE(1..*0) : Required. Multiple values are allowed
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeLoadBalancers(params, callback)
 *   Calls the DescribeLoadBalancers API operation.
 *   @param params [Object]
 *     * +LoadBalancerNames+ - (<tt>Array<String></tt>) A list of names
 *       associated with the LoadBalancers at creation time.
 *     * +Marker+ - (<tt>String</tt>) An optional parameter reserved for
 *       future use.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +LoadBalancerDescriptions+ - (<tt>Array<Object></tt>) A list of
 *         LoadBalancer description structures.
 *         * +LoadBalancerName+ - (<tt>String</tt>) Specifies the name
 *           associated with the LoadBalancer.
 *         * +DNSName+ - (<tt>String</tt>) Specifies the external DNS name
 *           associated with the LoadBalancer.
 *         * +CanonicalHostedZoneName+ - (<tt>String</tt>) Provides the
 *           name of the Amazon Route 53 hosted zone that is associated
 *           with the LoadBalancer. For information on how to associate
 *           your load balancer with a hosted zone, go to Using Domain
 *           Names With Elastic Load Balancing in the Elastic Load
 *           Balancing Developer Guide.
 *         * +CanonicalHostedZoneNameID+ - (<tt>String</tt>) Provides the
 *           ID of the Amazon Route 53 hosted zone name that is associated
 *           with the LoadBalancer. For information on how to associate or
 *           disassociate your load balancer with a hosted zone, go to
 *           Using Domain Names With Elastic Load Balancing in the Elastic
 *           Load Balancing Developer Guide.
 *         * +ListenerDescriptions+ - (<tt>Array<Object></tt>)
 *           LoadBalancerPort, InstancePort, Protocol, InstanceProtocol,
 *           and PolicyNames are returned in a list of tuples in the
 *           ListenerDescriptions element.
 *           * +Listener+ - (<tt>Object</tt>)
 *             * +Protocol+ - (<tt>String</tt>) Specifies the
 *               LoadBalancer transport protocol to use for routing - HTTP,
 *               HTTPS, TCP or SSL. This property cannot be modified for
 *               the life of the LoadBalancer.
 *             * +LoadBalancerPort+ - (<tt>Integer</tt>)
 *               Specifies the external LoadBalancer port number. This
 *               property cannot be modified for the life of the
 *               LoadBalancer.
 *             * +InstanceProtocol+ - (<tt>String</tt>) Specifies the
 *               protocol to use for routing traffic to back-end instances
 *               - HTTP, HTTPS, TCP, or SSL. This property cannot be
 *               modified for the life of the LoadBalancer. If the
 *               front-end protocol is HTTP or HTTPS, InstanceProtocol has
 *               to be at the same protocol layer, i.e., HTTP or HTTPS.
 *               Likewise, if the front-end protocol is TCP or SSL,
 *               InstanceProtocol has to be TCP or SSL. If there is another
 *               listener with the same InstancePort whose InstanceProtocol
 *               is secure, i.e., HTTPS or SSL, the listener's
 *               InstanceProtocol has to be secure, i.e., HTTPS or SSL. If
 *               there is another listener with the same InstancePort whose
 *               InstanceProtocol is HTTP or TCP, the listener's
 *               InstanceProtocol must be either HTTP or TCP.
 *             * +InstancePort+ - (<tt>Integer</tt>) Specifies
 *               the TCP port on which the instance server is listening.
 *               This property cannot be modified for the life of the
 *               LoadBalancer.
 *             * +SSLCertificateId+ - (<tt>String</tt>) The ARN string of
 *               the server certificate. To get the ARN of the server
 *               certificate, call the AWS Identity and Access Management
 *               UploadServerCertificate API.
 *           * +PolicyNames+ - (<tt>Array<String></tt>) A list of policies
 *             enabled for this listener. An empty list indicates that no
 *             policies are enabled.
 *         * +Policies+ - (<tt>Object</tt>) Provides a list of policies
 *           defined for the LoadBalancer.
 *           * +AppCookieStickinessPolicies+ - (<tt>Array<Object></tt>) A
 *             list of the AppCookieStickinessPolicy objects created with
 *             CreateAppCookieStickinessPolicy.
 *             * +PolicyName+ - (<tt>String</tt>) The mnemonic name for the
 *               policy being created. The name must be unique within a set
 *               of policies for this LoadBalancer.
 *             * +CookieName+ - (<tt>String</tt>) The name of the
 *               application cookie used for stickiness.
 *           * +LBCookieStickinessPolicies+ - (<tt>Array<Object></tt>) A
 *             list of LBCookieStickinessPolicy objects created with
 *             CreateAppCookieStickinessPolicy.
 *             * +PolicyName+ - (<tt>String</tt>) The name for the policy
 *               being created. The name must be unique within the set of
 *               policies for this LoadBalancer.
 *             * +CookieExpirationPeriod+ - (<tt>Integer</tt>) The time
 *               period in seconds after which the cookie should be
 *               considered stale. Not specifying this parameter indicates
 *               that the stickiness session will last for the duration of
 *               the browser session.
 *           * +OtherPolicies+ - (<tt>Array<String></tt>) A list of policy
 *             names other than the stickiness policies.
 *         * +BackendServerDescriptions+ - (<tt>Array<Object></tt>)
 *           Contains a list of back-end server descriptions.
 *           * +InstancePort+ - (<tt>Integer</tt>) Provides the port on
 *             which the back-end server is listening.
 *           * +PolicyNames+ - (<tt>Array<String></tt>) Provides a list of
 *             policy names enabled for the back-end server.
 *         * +AvailabilityZones+ - (<tt>Array<String></tt>) Specifies a
 *           list of Availability Zones.
 *         * +Subnets+ - (<tt>Array<String></tt>) Provides a list of VPC
 *           subnet IDs for the LoadBalancer.
 *         * +VPCId+ - (<tt>String</tt>) Provides the ID of the VPC
 *           attached to the LoadBalancer.
 *         * +Instances+ - (<tt>Array<Object></tt>) Provides a list of EC2
 *           instance IDs for the LoadBalancer.
 *           * +InstanceId+ - (<tt>String</tt>) Provides an EC2 instance
 *             ID.
 *         * +HealthCheck+ - (<tt>Object</tt>) Specifies information
 *           regarding the various health probes conducted on the
 *           LoadBalancer.
 *           * +Target+ - (<tt>String</tt>) Specifies the
 *             instance being checked. The protocol is either TCP, HTTP,
 *             HTTPS, or SSL. The range of valid ports is one (1) through
 *             65535. TCP is the default, specified as a TCP: port pair,
 *             for example "TCP:5000". In this case a healthcheck simply
 *             attempts to open a TCP connection to the instance on the
 *             specified port. Failure to connect within the configured
 *             timeout is considered unhealthy. SSL is also specified as
 *             SSL: port pair, for example, SSL:5000. For HTTP or HTTPS
 *             protocol, the situation is different. You have to include a
 *             ping path in the string. HTTP is specified as a
 *             HTTP:port;/;PathToPing; grouping, for example
 *             "HTTP:80/weather/us/wa/seattle". In this case, a HTTP GET
 *             request is issued to the instance on the given port and
 *             path. Any answer other than "200 OK" within the timeout
 *             period is considered unhealthy. The total length of the HTTP
 *             ping target needs to be 1024 16-bit Unicode characters or
 *             less.
 *           * +Interval+ - (<tt>Integer</tt>) Specifies the
 *             approximate interval, in seconds, between health checks of
 *             an individual instance.
 *           * +Timeout+ - (<tt>Integer</tt>) Specifies the
 *             amount of time, in seconds, during which no response means a
 *             failed health probe. This value must be less than the
 *             Interval value.
 *           * +UnhealthyThreshold+ - (<tt>Integer</tt>)
 *             Specifies the number of consecutive health probe failures
 *             required before moving the instance to the Unhealthy state.
 *           * +HealthyThreshold+ - (<tt>Integer</tt>)
 *             Specifies the number of consecutive health probe successes
 *             required before moving the instance to the Healthy state.
 *         * +SourceSecurityGroup+ - (<tt>Object</tt>) The security group
 *           that you can use as part of your inbound rules for your
 *           LoadBalancer's back-end Amazon EC2 application instances. To
 *           only allow traffic from LoadBalancers, add a security group
 *           rule to your back end instance that specifies this source
 *           security group as the inbound source.
 *           * +OwnerAlias+ - (<tt>String</tt>) Owner of the source
 *             security group. Use this value for the --source-group-user
 *             parameter of the ec2-authorize command in the Amazon EC2
 *             command line tool.
 *           * +GroupName+ - (<tt>String</tt>) Name of the source security
 *             group. Use this value for the --source-group parameter of
 *             the ec2-authorize command in the Amazon EC2 command line
 *             tool.
 *         * +SecurityGroups+ - (<tt>Array<String></tt>) The security
 *           groups the LoadBalancer is a member of (VPC only).
 *         * +CreatedTime+ - (<tt>Date</tt>) Provides the date and time the
 *           LoadBalancer was created.
 *         * +Scheme+ - (<tt>String</tt>) Specifies the type of a load
 *           balancer. If it is internet-facing, the load balancer has a
 *           publicly resolvable DNS name that resolves to public IP
 *           addresses. If it is internal, the load balancer has a publicly
 *           resolvable DNS name that resolves to private IP addresses.
 *           This option is only available for load balancers attached to a
 *           VPC.
 *       * +NextMarker+ - (<tt>String</tt>) An optional parameter reserved
 *         for future use.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method detachLoadBalancerFromSubnets(params, callback)
 *   Calls the DetachLoadBalancerFromSubnets API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer to be detached. The name must
 *       be unique within the client AWS account.
 *     * +Subnets+ - (*required*, <tt>Array<String></tt>) A list of
 *       subnet IDs to remove from the set of configured subnets for the
 *       LoadBalancer.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Subnets+ - (<tt>Array<String></tt>) A list of subnet IDs
 *         removed from the configured set of subnets for the LoadBalancer.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method disableAvailabilityZonesForLoadBalancer(params, callback)
 *   Calls the DisableAvailabilityZonesForLoadBalancer API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer. The name must be unique within
 *       the client AWS account.
 *     * +AvailabilityZones+ - (*required*, <tt>Array<String></tt>) A
 *       list of Availability Zones to be removed from the LoadBalancer.
 *       There must be at least one Availability Zone registered with a
 *       LoadBalancer at all times. The client cannot remove all the
 *       Availability Zones from a LoadBalancer. Specified Availability
 *       Zones must be in the same Region.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AvailabilityZones+ - (<tt>Array<String></tt>) A list of updated
 *         Availability Zones for the LoadBalancer.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method enableAvailabilityZonesForLoadBalancer(params, callback)
 *   Calls the EnableAvailabilityZonesForLoadBalancer API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer. The name must be unique within
 *       the client AWS account.
 *     * +AvailabilityZones+ - (*required*, <tt>Array<String></tt>) A
 *       list of new Availability Zones for the LoadBalancer. Each
 *       Availability Zone must be in the same Region as the
 *       LoadBalancer.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AvailabilityZones+ - (<tt>Array<String></tt>) An updated list
 *         of Availability Zones for the LoadBalancer.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method registerInstancesWithLoadBalancer(params, callback)
 *   Calls the RegisterInstancesWithLoadBalancer API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer. The name must be unique within
 *       the client AWS account.
 *     * +Instances+ - (*required*, <tt>Array<Object></tt>) A list of
 *       instance IDs that should be registered with the LoadBalancer.
 *       When the instance is stopped and then restarted, the IP
 *       addresses associated with your instance changes. Elastic Load
 *       Balancing cannot recognize the new IP address, which prevents it
 *       from routing traffic to your instances. We recommend that you
 *       de-register your Amazon EC2 instances from your load balancer
 *       after you stop your instance, and then register the load
 *       balancer with your instance after you've restarted. To
 *       de-register your instances from load balancer, use
 *       DeregisterInstancesFromLoadBalancer action.
 *       * +InstanceId+ - (<tt>String</tt>) Provides an EC2 instance ID.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Instances+ - (<tt>Array<Object></tt>) An updated list of
 *         instances for the LoadBalancer.
 *         * +InstanceId+ - (<tt>String</tt>) Provides an EC2 instance ID.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method setLoadBalancerListenerSSLCertificate(params, callback)
 *   Calls the SetLoadBalancerListenerSSLCertificate API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name of
 *       the the LoadBalancer.
 *     * +LoadBalancerPort+ - (*required*, <tt>Integer</tt>) The port
 *       that uses the specified SSL certificate.
 *     * +SSLCertificateId+ - (*required*, <tt>String</tt>) The ID of the
 *       SSL certificate chain to use. For more information on SSL
 *       certificates, see Managing Server Certificates in the AWS
 *       Identity and Access Management documentation.
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
 * @!method setLoadBalancerPoliciesForBackendServer(params, callback)
 *   Calls the SetLoadBalancerPoliciesForBackendServer API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The mnemonic
 *       name associated with the LoadBalancer. This name must be unique
 *       within the client AWS account.
 *     * +InstancePort+ - (*required*, <tt>Integer</tt>) The port number
 *       associated with the back-end server.
 *     * +PolicyNames+ - (*required*, <tt>Array<String></tt>) List of
 *       policy names to be set. If the list is empty, then all current
 *       polices are removed from the back-end server.
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
 * @!method setLoadBalancerPoliciesOfListener(params, callback)
 *   Calls the SetLoadBalancerPoliciesOfListener API operation.
 *   @param params [Object]
 *     * +LoadBalancerName+ - (*required*, <tt>String</tt>) The name
 *       associated with the LoadBalancer. The name must be unique within
 *       the client AWS account.
 *     * +LoadBalancerPort+ - (*required*, <tt>Integer</tt>) The external
 *       port of the LoadBalancer with which this policy applies to.
 *     * +PolicyNames+ - (*required*, <tt>Array<String></tt>) List of
 *       policies to be associated with the listener. Currently this list
 *       can have at most one policy. If the list is empty, the current
 *       policy is removed from the listener.
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
AWS.ELB.Client = inherit({});
