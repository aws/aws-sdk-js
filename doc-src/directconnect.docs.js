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
 * ### Sending a Request Using DirectConnect
 *
 * ```js
 * svc = new AWS.DirectConnect();
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
 *     * `offeringId` &mdash; **required** &mdash; (`String`)
 *     * `connectionName` &mdash; **required** &mdash; (`String`)
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
 *       * `connectionId` &mdash; (`String`)
 *       * `connectionName` &mdash; (`String`)
 *       * `connectionState` &mdash; (`String`)
 *       * `region` &mdash; (`String`)
 *       * `location` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createPrivateVirtualInterface(params, callback)
 *   Calls the CreatePrivateVirtualInterface API operation.
 *   @param params [Object]
 *     * `connectionId` &mdash; (`String`)
 *     * `newPrivateVirtualInterface` &mdash; (`Object`) Detailed
 *       information of the private virtual interface to be created.
 *       Default: None
 *       * `virtualInterfaceName` &mdash; (`String`)
 *       * `vlan` &mdash; (`Integer`)
 *       * `asn` &mdash; (`Integer`)
 *       * `authKey` &mdash; (`String`)
 *       * `amazonAddress` &mdash; (`String`)
 *       * `customerAddress` &mdash; (`String`)
 *       * `virtualGatewayId` &mdash; (`String`)
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
 *       * `virtualInterfaceId` &mdash; (`String`)
 *       * `location` &mdash; (`String`)
 *       * `connectionId` &mdash; (`String`)
 *       * `virtualInterfaceType` &mdash; (`String`)
 *       * `virtualInterfaceName` &mdash; (`String`)
 *       * `vlan` &mdash; (`Integer`)
 *       * `asn` &mdash; (`Integer`)
 *       * `authKey` &mdash; (`String`)
 *       * `amazonAddress` &mdash; (`String`)
 *       * `customerAddress` &mdash; (`String`) IP address assigned to the
 *         customer interface. Example: 192.168.1.2
 *       * `virtualInterfaceState` &mdash; (`String`)
 *       * `customerRouterConfig` &mdash; (`String`) Information for
 *         generating the customer router configuration.
 *       * `virtualGatewayId` &mdash; (`String`)
 *       * `routeFilterPrefixes` &mdash; (`Array<Object>`)
 *         * `cidr` &mdash; (`String`) CIDR notation for the advertised
 *           route. Multiple routes are separated by commas Example:
 *           10.10.10.0/24,10.10.11.0/24
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createPublicVirtualInterface(params, callback)
 *   Calls the CreatePublicVirtualInterface API operation.
 *   @param params [Object]
 *     * `connectionId` &mdash; (`String`)
 *     * `newPublicVirtualInterface` &mdash; (`Object`) Detailed
 *       information of the public virtual interface to be created.
 *       Default: None
 *       * `virtualInterfaceName` &mdash; (`String`)
 *       * `vlan` &mdash; (`Integer`)
 *       * `asn` &mdash; (`Integer`)
 *       * `authKey` &mdash; (`String`)
 *       * `amazonAddress` &mdash; (`String`)
 *       * `customerAddress` &mdash; (`String`)
 *       * `routeFilterPrefixes` &mdash; (`Array<Object>`)
 *         * `cidr` &mdash; (`String`) CIDR notation for the advertised
 *           route. Multiple routes are separated by commas Example:
 *           10.10.10.0/24,10.10.11.0/24
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
 *       * `virtualInterfaceId` &mdash; (`String`)
 *       * `location` &mdash; (`String`)
 *       * `connectionId` &mdash; (`String`)
 *       * `virtualInterfaceType` &mdash; (`String`)
 *       * `virtualInterfaceName` &mdash; (`String`)
 *       * `vlan` &mdash; (`Integer`)
 *       * `asn` &mdash; (`Integer`)
 *       * `authKey` &mdash; (`String`)
 *       * `amazonAddress` &mdash; (`String`)
 *       * `customerAddress` &mdash; (`String`) IP address assigned to the
 *         customer interface. Example: 192.168.1.2
 *       * `virtualInterfaceState` &mdash; (`String`)
 *       * `customerRouterConfig` &mdash; (`String`) Information for
 *         generating the customer router configuration.
 *       * `virtualGatewayId` &mdash; (`String`)
 *       * `routeFilterPrefixes` &mdash; (`Array<Object>`)
 *         * `cidr` &mdash; (`String`) CIDR notation for the advertised
 *           route. Multiple routes are separated by commas Example:
 *           10.10.10.0/24,10.10.11.0/24
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteConnection(params, callback)
 *   Calls the DeleteConnection API operation.
 *   @param params [Object]
 *     * `connectionId` &mdash; **required** &mdash; (`String`)
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
 *       * `connectionId` &mdash; (`String`)
 *       * `connectionName` &mdash; (`String`)
 *       * `connectionState` &mdash; (`String`)
 *       * `region` &mdash; (`String`)
 *       * `location` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteVirtualInterface(params, callback)
 *   Calls the DeleteVirtualInterface API operation.
 *   @param params [Object]
 *     * `virtualInterfaceId` &mdash; (`String`)
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
 *       * `virtualInterfaceState` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeConnectionDetail(params, callback)
 *   Calls the DescribeConnectionDetail API operation.
 *   @param params [Object]
 *     * `connectionId` &mdash; **required** &mdash; (`String`)
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
 *       * `connectionId` &mdash; (`String`)
 *       * `connectionName` &mdash; (`String`)
 *       * `connectionState` &mdash; (`String`)
 *       * `region` &mdash; (`String`)
 *       * `location` &mdash; (`String`)
 *       * `bandwidth` &mdash; (`String`)
 *       * `connectionCosts` &mdash; (`Array<Object>`)
 *         * `name` &mdash; (`String`) The name of the cost item. Example:
 *           Inbound data transfer
 *         * `unit` &mdash; (`String`) The unit used in cost calculation.
 *           Example: "Gbps," if the price is calculated based on Gbps.
 *         * `currencyCode` &mdash; (`String`) Currency code based on ISO
 *           4217. Example: "USD" for US dollar.
 *         * `amount` &mdash; (`String`) The amount of charge per unit.
 *           Example: 0.01
 *       * `orderSteps` &mdash; (`Array<Object>`)
 *         * `number` &mdash; (`String`) Number of an order step. Example:
 *           1
 *         * `name` &mdash; (`String`) Name of the order step. Example:
 *           Authorize cross connect
 *         * `description` &mdash; (`String`) More detailed description of
 *           the order step. Example: "AWS will prepare your connection and
 *           send you an email with an LOA to provide to the colocation
 *           provider"
 *         * `owner` &mdash; (`String`) The entity who owns the completion
 *           of the order step. Example: AWS, Customer
 *         * `sla` &mdash; (`Integer`) Time to complete the order step in
 *           minutes. Example: 60
 *         * `stepState` &mdash; (`String`) State of the connection step.
 *           Pending: This step is not yet completed. Completed: This step
 *           has been completed
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeConnections(params, callback)
 *   Calls the DescribeConnections API operation.
 *   @param params [Object]
 *     * `connectionId` &mdash; (`String`)
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
 *       * `connections` &mdash; (`Array<Object>`) A list of connections.
 *         * `connectionId` &mdash; (`String`)
 *         * `connectionName` &mdash; (`String`)
 *         * `connectionState` &mdash; (`String`)
 *         * `region` &mdash; (`String`)
 *         * `location` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeOfferingDetail(params, callback)
 *   Calls the DescribeOfferingDetail API operation.
 *   @param params [Object]
 *     * `offeringId` &mdash; **required** &mdash; (`String`)
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
 *       * `offeringId` &mdash; (`String`)
 *       * `region` &mdash; (`String`)
 *       * `location` &mdash; (`String`)
 *       * `offeringName` &mdash; (`String`)
 *       * `description` &mdash; (`String`)
 *       * `bandwidth` &mdash; (`String`)
 *       * `connectionCosts` &mdash; (`Array<Object>`)
 *         * `name` &mdash; (`String`) The name of the cost item. Example:
 *           Inbound data transfer
 *         * `unit` &mdash; (`String`) The unit used in cost calculation.
 *           Example: "Gbps," if the price is calculated based on Gbps.
 *         * `currencyCode` &mdash; (`String`) Currency code based on ISO
 *           4217. Example: "USD" for US dollar.
 *         * `amount` &mdash; (`String`) The amount of charge per unit.
 *           Example: 0.01
 *       * `orderSteps` &mdash; (`Array<Object>`)
 *         * `number` &mdash; (`String`) Number of an order step. Example:
 *           1
 *         * `name` &mdash; (`String`) Name of the order step. Example:
 *           Authorize cross connect
 *         * `description` &mdash; (`String`) More detailed description of
 *           the order step. Example: "AWS will prepare your connection and
 *           send you an email with an LOA to provide to the colocation
 *           provider"
 *         * `owner` &mdash; (`String`) The entity who owns the completion
 *           of the order step. Example: AWS
 *         * `sla` &mdash; (`Integer`) Time to complete the order step in
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
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `offerings` &mdash; (`Array<Object>`) A list of offerings.
 *         * `offeringId` &mdash; (`String`)
 *         * `region` &mdash; (`String`)
 *         * `location` &mdash; (`String`)
 *         * `offeringName` &mdash; (`String`) Name of the offering.
 *           Example: "1Gbps Cross Connect in us-east-1 via Equinix"
 *           Default: None
 *         * `description` &mdash; (`String`)
 *         * `bandwidth` &mdash; (`String`)
 *         * `connectionCosts` &mdash; (`Array<Object>`)
 *           * `name` &mdash; (`String`) The name of the cost item.
 *             Example: Inbound data transfer
 *           * `unit` &mdash; (`String`) The unit used in cost calculation.
 *             Example: "Gbps," if the price is calculated based on Gbps.
 *           * `currencyCode` &mdash; (`String`) Currency code based on ISO
 *             4217. Example: "USD" for US dollar.
 *           * `amount` &mdash; (`String`) The amount of charge per unit.
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
 *       Set to `null` if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to `null` if a request error occurs.
 *       The `data` object has the following properties:
 *
 *       * `virtualGateways` &mdash; (`Array<Object>`) A list of virtual
 *         gateways.
 *         * `virtualGatewayId` &mdash; (`String`)
 *         * `virtualGatewayState` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeVirtualInterfaces(params, callback)
 *   Calls the DescribeVirtualInterfaces API operation.
 *   @param params [Object]
 *     * `connectionId` &mdash; (`String`)
 *     * `virtualInterfaceId` &mdash; (`String`)
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
 *       * `virtualInterfaces` &mdash; (`Array<Object>`) A list of virtual
 *         interfaces.
 *         * `virtualInterfaceId` &mdash; (`String`)
 *         * `location` &mdash; (`String`)
 *         * `connectionId` &mdash; (`String`)
 *         * `virtualInterfaceType` &mdash; (`String`)
 *         * `virtualInterfaceName` &mdash; (`String`)
 *         * `vlan` &mdash; (`Integer`)
 *         * `asn` &mdash; (`Integer`)
 *         * `authKey` &mdash; (`String`)
 *         * `amazonAddress` &mdash; (`String`)
 *         * `customerAddress` &mdash; (`String`) IP address assigned to
 *           the customer interface. Example: 192.168.1.2
 *         * `virtualInterfaceState` &mdash; (`String`)
 *         * `customerRouterConfig` &mdash; (`String`) Information for
 *           generating the customer router configuration.
 *         * `virtualGatewayId` &mdash; (`String`)
 *         * `routeFilterPrefixes` &mdash; (`Array<Object>`)
 *           * `cidr` &mdash; (`String`) CIDR notation for the advertised
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
 *     to.  The default endpoint is built from the configured `region`.
 *     The endpoint should be a string like `'https://s3.amazonaws.com'`.
 *   @option (see AWS.Config.constructor)
 *
 * @!attribute endpoint
 *   @return [AWS.Endpoint] an Endpoint object representing'
 *     the endpoint URL for service requests.'
 *
 */
AWS.DirectConnect.Client = inherit({});
