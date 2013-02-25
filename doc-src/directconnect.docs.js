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
 * === Sending a Request Using DirectConnect
 *
 *   svc = new AWS.DirectConnect();
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
 *   @option (see AWS.DirectConnect.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.DirectConnect.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.DirectConnect.Client
 *
 */
AWS.DirectConnect = inherit({})

/**
 * The low-level DirectConnect client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method createConnection(params, callback)
 *   Calls the CreateConnection API operation.
 *   @param params [Object]
 *     * +offeringId+ - (*required*, <tt>String</tt>)
 *     * +connectionName+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +connectionId+ - (<tt>String</tt>)
 *       * +connectionName+ - (<tt>String</tt>)
 *       * +connectionState+ - (<tt>String</tt>)
 *       * +region+ - (<tt>String</tt>)
 *       * +location+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createPrivateVirtualInterface(params, callback)
 *   Calls the CreatePrivateVirtualInterface API operation.
 *   @param params [Object]
 *     * +connectionId+ - (<tt>String</tt>)
 *     * +newPrivateVirtualInterface+ - (<tt>Object</tt>) Detailed
 *       information of the private virtual interface to be created.
 *       Default: None
 *       * +virtualInterfaceName+ - (<tt>String</tt>)
 *       * +vlan+ - (<tt>Integer</tt>)
 *       * +asn+ - (<tt>Integer</tt>)
 *       * +authKey+ - (<tt>String</tt>)
 *       * +amazonAddress+ - (<tt>String</tt>)
 *       * +customerAddress+ - (<tt>String</tt>)
 *       * +virtualGatewayId+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +virtualInterfaceId+ - (<tt>String</tt>)
 *       * +location+ - (<tt>String</tt>)
 *       * +connectionId+ - (<tt>String</tt>)
 *       * +virtualInterfaceType+ - (<tt>String</tt>)
 *       * +virtualInterfaceName+ - (<tt>String</tt>)
 *       * +vlan+ - (<tt>Integer</tt>)
 *       * +asn+ - (<tt>Integer</tt>)
 *       * +authKey+ - (<tt>String</tt>)
 *       * +amazonAddress+ - (<tt>String</tt>)
 *       * +customerAddress+ - (<tt>String</tt>) IP address assigned to the
 *         customer interface. Example: 192.168.1.2
 *       * +virtualInterfaceState+ - (<tt>String</tt>)
 *       * +customerRouterConfig+ - (<tt>String</tt>) Information for
 *         generating the customer router configuration.
 *       * +virtualGatewayId+ - (<tt>String</tt>)
 *       * +routeFilterPrefixes+ - (<tt>Array<Object></tt>)
 *         * +cidr+ - (<tt>String</tt>) CIDR notation for the advertised
 *           route. Multiple routes are separated by commas Example:
 *           10.10.10.0/24,10.10.11.0/24
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createPublicVirtualInterface(params, callback)
 *   Calls the CreatePublicVirtualInterface API operation.
 *   @param params [Object]
 *     * +connectionId+ - (<tt>String</tt>)
 *     * +newPublicVirtualInterface+ - (<tt>Object</tt>) Detailed
 *       information of the public virtual interface to be created.
 *       Default: None
 *       * +virtualInterfaceName+ - (<tt>String</tt>)
 *       * +vlan+ - (<tt>Integer</tt>)
 *       * +asn+ - (<tt>Integer</tt>)
 *       * +authKey+ - (<tt>String</tt>)
 *       * +amazonAddress+ - (<tt>String</tt>)
 *       * +customerAddress+ - (<tt>String</tt>)
 *       * +routeFilterPrefixes+ - (<tt>Array<Object></tt>)
 *         * +cidr+ - (<tt>String</tt>) CIDR notation for the advertised
 *           route. Multiple routes are separated by commas Example:
 *           10.10.10.0/24,10.10.11.0/24
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +virtualInterfaceId+ - (<tt>String</tt>)
 *       * +location+ - (<tt>String</tt>)
 *       * +connectionId+ - (<tt>String</tt>)
 *       * +virtualInterfaceType+ - (<tt>String</tt>)
 *       * +virtualInterfaceName+ - (<tt>String</tt>)
 *       * +vlan+ - (<tt>Integer</tt>)
 *       * +asn+ - (<tt>Integer</tt>)
 *       * +authKey+ - (<tt>String</tt>)
 *       * +amazonAddress+ - (<tt>String</tt>)
 *       * +customerAddress+ - (<tt>String</tt>) IP address assigned to the
 *         customer interface. Example: 192.168.1.2
 *       * +virtualInterfaceState+ - (<tt>String</tt>)
 *       * +customerRouterConfig+ - (<tt>String</tt>) Information for
 *         generating the customer router configuration.
 *       * +virtualGatewayId+ - (<tt>String</tt>)
 *       * +routeFilterPrefixes+ - (<tt>Array<Object></tt>)
 *         * +cidr+ - (<tt>String</tt>) CIDR notation for the advertised
 *           route. Multiple routes are separated by commas Example:
 *           10.10.10.0/24,10.10.11.0/24
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteConnection(params, callback)
 *   Calls the DeleteConnection API operation.
 *   @param params [Object]
 *     * +connectionId+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +connectionId+ - (<tt>String</tt>)
 *       * +connectionName+ - (<tt>String</tt>)
 *       * +connectionState+ - (<tt>String</tt>)
 *       * +region+ - (<tt>String</tt>)
 *       * +location+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteVirtualInterface(params, callback)
 *   Calls the DeleteVirtualInterface API operation.
 *   @param params [Object]
 *     * +virtualInterfaceId+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +virtualInterfaceState+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeConnectionDetail(params, callback)
 *   Calls the DescribeConnectionDetail API operation.
 *   @param params [Object]
 *     * +connectionId+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +connectionId+ - (<tt>String</tt>)
 *       * +connectionName+ - (<tt>String</tt>)
 *       * +connectionState+ - (<tt>String</tt>)
 *       * +region+ - (<tt>String</tt>)
 *       * +location+ - (<tt>String</tt>)
 *       * +bandwidth+ - (<tt>String</tt>)
 *       * +connectionCosts+ - (<tt>Array<Object></tt>)
 *         * +name+ - (<tt>String</tt>) The name of the cost item. Example:
 *           Inbound data transfer
 *         * +unit+ - (<tt>String</tt>) The unit used in cost calculation.
 *           Example: "Gbps," if the price is calculated based on Gbps.
 *         * +currencyCode+ - (<tt>String</tt>) Currency code based on ISO
 *           4217. Example: "USD" for US dollar.
 *         * +amount+ - (<tt>String</tt>) The amount of charge per unit.
 *           Example: 0.01
 *       * +orderSteps+ - (<tt>Array<Object></tt>)
 *         * +number+ - (<tt>String</tt>) Number of an order step. Example:
 *           1
 *         * +name+ - (<tt>String</tt>) Name of the order step. Example:
 *           Authorize cross connect
 *         * +description+ - (<tt>String</tt>) More detailed description of
 *           the order step. Example: "AWS will prepare your connection and
 *           send you an email with an LOA to provide to the colocation
 *           provider"
 *         * +owner+ - (<tt>String</tt>) The entity who owns the completion
 *           of the order step. Example: AWS, Customer
 *         * +sla+ - (<tt>Integer</tt>) Time to complete the order step in
 *           minutes. Example: 60
 *         * +stepState+ - (<tt>String</tt>) State of the connection step.
 *           Pending: This step is not yet completed. Completed: This step
 *           has been completed
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeConnections(params, callback)
 *   Calls the DescribeConnections API operation.
 *   @param params [Object]
 *     * +connectionId+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +connections+ - (<tt>Array<Object></tt>) A list of connections.
 *         * +connectionId+ - (<tt>String</tt>)
 *         * +connectionName+ - (<tt>String</tt>)
 *         * +connectionState+ - (<tt>String</tt>)
 *         * +region+ - (<tt>String</tt>)
 *         * +location+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeOfferingDetail(params, callback)
 *   Calls the DescribeOfferingDetail API operation.
 *   @param params [Object]
 *     * +offeringId+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +offeringId+ - (<tt>String</tt>)
 *       * +region+ - (<tt>String</tt>)
 *       * +location+ - (<tt>String</tt>)
 *       * +offeringName+ - (<tt>String</tt>)
 *       * +description+ - (<tt>String</tt>)
 *       * +bandwidth+ - (<tt>String</tt>)
 *       * +connectionCosts+ - (<tt>Array<Object></tt>)
 *         * +name+ - (<tt>String</tt>) The name of the cost item. Example:
 *           Inbound data transfer
 *         * +unit+ - (<tt>String</tt>) The unit used in cost calculation.
 *           Example: "Gbps," if the price is calculated based on Gbps.
 *         * +currencyCode+ - (<tt>String</tt>) Currency code based on ISO
 *           4217. Example: "USD" for US dollar.
 *         * +amount+ - (<tt>String</tt>) The amount of charge per unit.
 *           Example: 0.01
 *       * +orderSteps+ - (<tt>Array<Object></tt>)
 *         * +number+ - (<tt>String</tt>) Number of an order step. Example:
 *           1
 *         * +name+ - (<tt>String</tt>) Name of the order step. Example:
 *           Authorize cross connect
 *         * +description+ - (<tt>String</tt>) More detailed description of
 *           the order step. Example: "AWS will prepare your connection and
 *           send you an email with an LOA to provide to the colocation
 *           provider"
 *         * +owner+ - (<tt>String</tt>) The entity who owns the completion
 *           of the order step. Example: AWS
 *         * +sla+ - (<tt>Integer</tt>) Time to complete the order step in
 *           minutes. Example: 60
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeOfferings(params, callback)
 *   Calls the DescribeOfferings API operation.
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
 *       * +offerings+ - (<tt>Array<Object></tt>) A list of offerings.
 *         * +offeringId+ - (<tt>String</tt>)
 *         * +region+ - (<tt>String</tt>)
 *         * +location+ - (<tt>String</tt>)
 *         * +offeringName+ - (<tt>String</tt>) Name of the offering.
 *           Example: "1Gbps Cross Connect in us-east-1 via Equinix"
 *           Default: None
 *         * +description+ - (<tt>String</tt>)
 *         * +bandwidth+ - (<tt>String</tt>)
 *         * +connectionCosts+ - (<tt>Array<Object></tt>)
 *           * +name+ - (<tt>String</tt>) The name of the cost item.
 *             Example: Inbound data transfer
 *           * +unit+ - (<tt>String</tt>) The unit used in cost
 *             calculation. Example: "Gbps," if the price is calculated
 *             based on Gbps.
 *           * +currencyCode+ - (<tt>String</tt>) Currency code based on
 *             ISO 4217. Example: "USD" for US dollar.
 *           * +amount+ - (<tt>String</tt>) The amount of charge per unit.
 *             Example: 0.01
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVirtualGateways(params, callback)
 *   Calls the DescribeVirtualGateways API operation.
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
 *       * +virtualGateways+ - (<tt>Array<Object></tt>) A list of virtual
 *         gateways.
 *         * +virtualGatewayId+ - (<tt>String</tt>)
 *         * +virtualGatewayState+ - (<tt>String</tt>)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVirtualInterfaces(params, callback)
 *   Calls the DescribeVirtualInterfaces API operation.
 *   @param params [Object]
 *     * +connectionId+ - (<tt>String</tt>)
 *     * +virtualInterfaceId+ - (<tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +virtualInterfaces+ - (<tt>Array<Object></tt>) A list of virtual
 *         interfaces.
 *         * +virtualInterfaceId+ - (<tt>String</tt>)
 *         * +location+ - (<tt>String</tt>)
 *         * +connectionId+ - (<tt>String</tt>)
 *         * +virtualInterfaceType+ - (<tt>String</tt>)
 *         * +virtualInterfaceName+ - (<tt>String</tt>)
 *         * +vlan+ - (<tt>Integer</tt>)
 *         * +asn+ - (<tt>Integer</tt>)
 *         * +authKey+ - (<tt>String</tt>)
 *         * +amazonAddress+ - (<tt>String</tt>)
 *         * +customerAddress+ - (<tt>String</tt>) IP address assigned to
 *           the customer interface. Example: 192.168.1.2
 *         * +virtualInterfaceState+ - (<tt>String</tt>)
 *         * +customerRouterConfig+ - (<tt>String</tt>) Information for
 *           generating the customer router configuration.
 *         * +virtualGatewayId+ - (<tt>String</tt>)
 *         * +routeFilterPrefixes+ - (<tt>Array<Object></tt>)
 *           * +cidr+ - (<tt>String</tt>) CIDR notation for the advertised
 *             route. Multiple routes are separated by commas Example:
 *             10.10.10.0/24,10.10.11.0/24
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
AWS.DirectConnect.Client = inherit({});
