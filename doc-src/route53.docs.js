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
 * ### Sending a Request Using Route53
 *
 * ```js
 * svc = new AWS.Route53();
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
 *   @option (see AWS.Route53.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.Route53.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.Route53.Client
 *
 */
AWS.Route53 = inherit({})

/**
 * The low-level Route53 client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method changeResourceRecordSets(params, callback)
 *   Calls the ChangeResourceRecordSets API operation.
 *   @param params [Object]
 *     * `HostedZoneId` &mdash; **required** &mdash; (`String`) Alias
 *       resource record sets only: The value of the hosted zone ID for
 *       the AWS resource. For more information, an example, and several
 *       ways to get the hosted zone ID for the LoadBalancer, see
 *       Creating Alias Resource Record Sets for Elastic Load Balancing
 *       in the Amazon Route 53 Developer Guide.
 *     * `ChangeBatch` &mdash; **required** &mdash; (`Object`) A complex
 *       type that contains an optional comment and the Changes element.
 *       * `Comment` &mdash; (`String`) Optional: Any comments you want
 *         to include about a change batch request.
 *       * `Changes` &mdash; **required** &mdash; (`Array<Object>`) A
 *         complex type that contains one Change element for each
 *         resource record set that you want to create or delete.
 *         * `Action` &mdash; **required** &mdash; (`String`) The action
 *           to perform. Valid values: CREATE | DELETE
 *         * `ResourceRecordSet` &mdash; **required** &mdash; (`Object`)
 *           Information about the resource record set to create or
 *           delete.
 *           * `Name` &mdash; **required** &mdash; (`String`) The domain
 *             name of the current resource record set.
 *           * `Type` &mdash; **required** &mdash; (`String`) The type of
 *             the current resource record set.
 *           * `SetIdentifier` &mdash; (`String`) Weighted, Regional, and
 *             Failover resource record sets only: An identifier that
 *             differentiates among multiple resource record sets that
 *             have the same combination of DNS name and type.
 *           * `Weight` &mdash; (`Integer`) Weighted resource record sets
 *             only: Among resource record sets that have the same
 *             combination of DNS name and type, a value that determines
 *             what portion of traffic for the current resource record
 *             set is routed to the associated location.
 *           * `Region` &mdash; (`String`) Regional resource record sets
 *             only: Among resource record sets that have the same
 *             combination of DNS name and type, a value that specifies
 *             the AWS region for the current resource record set.
 *           * `Failover` &mdash; (`String`) Failover resource record
 *             sets only: Among resource record sets that have the same
 *             combination of DNS name and type, a value that indicates
 *             whether the current resource record set is a primary or
 *             secondary resource record set. A failover set may contain
 *             at most one resource record set marked as primary and one
 *             resource record set marked as secondary. A resource record
 *             set marked as primary will be returned if any of the
 *             following are true: (1) an associated health check is
 *             passing, (2) if the resource record set is an alias with
 *             the evaluate target health and at least one target
 *             resource record set is healthy, (3) both the primary and
 *             secondary resource record set are failing health checks or
 *             (4) there is no secondary resource record set. A secondary
 *             resource record set will be returned if: (1) the primary
 *             is failing a health check and either the secondary is
 *             passing a health check or has no associated health check,
 *             or (2) there is no primary resource record set. Valid
 *             values: PRIMARY | SECONDARY
 *           * `TTL` &mdash; (`Integer`) The cache time to live for the
 *             current resource record set.
 *           * `ResourceRecords` &mdash; (`Array<Object>`) A complex type
 *             that contains the resource records for the current
 *             resource record set.
 *             * `Value` &mdash; **required** &mdash; (`String`) The
 *               value of the Value element for the current resource
 *               record set.
 *           * `AliasTarget` &mdash; (`Object`) Alias resource record
 *             sets only: Information about the AWS resource to which you
 *             are redirecting traffic.
 *             * `HostedZoneId` &mdash; **required** &mdash; (`String`)
 *               Alias resource record sets only: The value of the hosted
 *               zone ID for the AWS resource. For more information and
 *               an example, see Creating Alias Resource Record Sets in
 *               the Amazon Route 53 Developer Guide.
 *             * `DNSName` &mdash; **required** &mdash; (`String`) Alias
 *               resource record sets only: The external DNS name
 *               associated with the AWS Resource. For more information
 *               and an example, see Creating Alias Resource Record Sets
 *               in the Amazon Route 53 Developer Guide.
 *             * `EvaluateTargetHealth` &mdash; **required** &mdash;
 *               (`Boolean`) Alias resource record sets only: A boolean
 *               value that indicates whether this Resource Record Set
 *               should respect the health status of any health checks
 *               associated with the ALIAS target record which it is
 *               linked to. For more information and an example, see
 *               Creating Alias Resource Record Sets in the Amazon Route
 *               53 Developer Guide.
 *           * `HealthCheckId` &mdash; (`String`) Health Check resource
 *             record sets only, not required for alias resource record
 *             sets: An identifier that is used to identify health check
 *             associated with the resource record set.
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
 *       * `ChangeInfo` &mdash; (`Object`) A complex type that contains
 *         information about changes made to your hosted zone. This element
 *         contains an ID that you use when performing a GetChange action
 *         to get detailed information about the change.
 *         * `Id` &mdash; (`String`) The ID of the request. Use this ID to
 *           track when the change has completed across all Amazon Route 53
 *           DNS servers.
 *         * `Status` &mdash; (`String`) The current state of the request.
 *           PENDING indicates that this request has not yet been applied
 *           to all Amazon Route 53 DNS servers. Valid Values: PENDING |
 *           INSYNC
 *         * `SubmittedAt` &mdash; (`Date`) The date and time the change
 *           was submitted, in the format YYYY-MM-DDThh:mm:ssZ, as
 *           specified in the ISO 8601 standard (for example,
 *           2009-11-19T19:37:58Z). The Z after the time indicates that the
 *           time is listed in Coordinated Universal Time (UTC), which is
 *           synonymous with Greenwich Mean Time in this context.
 *         * `Comment` &mdash; (`String`) A complex type that describes
 *           change information about changes made to your hosted zone.
 *           This element contains an ID that you use when performing a
 *           GetChange action to get detailed information about the change.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createHealthCheck(params, callback)
 *   Calls the CreateHealthCheck API operation.
 *   @param params [Object]
 *     * `CallerReference` &mdash; **required** &mdash; (`String`) A
 *       unique string that identifies the request and that allows failed
 *       CreateHealthCheck requests to be retried without the risk of
 *       executing the operation twice. You must use a unique
 *       CallerReference string every time you create a health check.
 *       CallerReference can be any unique string; you might choose to
 *       use a string that identifies your project. Valid characters are
 *       any Unicode code points that are legal in an XML 1.0 document.
 *       The UTF-8 encoding of the value must be less than 128 bytes.
 *     * `HealthCheckConfig` &mdash; **required** &mdash; (`Object`) A
 *       complex type that contains health check configuration.
 *       * `IPAddress` &mdash; **required** &mdash; (`String`) IP Address
 *         of the instance being checked.
 *       * `Port` &mdash; (`Integer`) Port on which connection will be
 *         opened to the instance to health check. For HTTP this defaults
 *         to 80 if the port is not specified.
 *       * `Type` &mdash; **required** &mdash; (`String`) The type of
 *         health check to be performed. Currently supported protocols
 *         are TCP and HTTP.
 *       * `ResourcePath` &mdash; (`String`) Path to ping on the instance
 *         to check the health. Required only for HTTP health checks,
 *         HTTP request is issued to the instance on the given port and
 *         path.
 *       * `FullyQualifiedDomainName` &mdash; (`String`) Fully qualified
 *         domain name of the instance to be health checked.
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
 *       * `HealthCheck` &mdash; (`Object`) A complex type that contains
 *         identifying information about the health check.
 *         * `Id` &mdash; (`String`) The ID of the specified health check.
 *         * `CallerReference` &mdash; (`String`) A unique string that
 *           identifies the request to create the health check.
 *         * `HealthCheckConfig` &mdash; (`Object`) A complex type that
 *           contains the health check configuration.
 *           * `IPAddress` &mdash; (`String`) IP Address of the instance
 *             being checked.
 *           * `Port` &mdash; (`Integer`) Port on which connection will be
 *             opened to the instance to health check. For HTTP this
 *             defaults to 80 if the port is not specified.
 *           * `Type` &mdash; (`String`) The type of health check to be
 *             performed. Currently supported protocols are TCP and HTTP.
 *           * `ResourcePath` &mdash; (`String`) Path to ping on the
 *             instance to check the health. Required only for HTTP health
 *             checks, HTTP request is issued to the instance on the given
 *             port and path.
 *           * `FullyQualifiedDomainName` &mdash; (`String`) Fully
 *             qualified domain name of the instance to be health checked.
 *       * `Location` &mdash; (`String`) The unique URL representing the
 *         new health check.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createHostedZone(params, callback)
 *   Calls the CreateHostedZone API operation.
 *   @param params [Object]
 *     * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *       domain. This must be a fully-specified domain, for example,
 *       www.example.com. The trailing dot is optional; Route 53 assumes
 *       that the domain name is fully qualified. This means that Route
 *       53 treats www.example.com (without a trailing dot) and
 *       www.example.com. (with a trailing dot) as identical. This is the
 *       name you have registered with your DNS registrar. You should ask
 *       your registrar to change the authoritative name servers for your
 *       domain to the set of NameServers elements returned in
 *       DelegationSet.
 *     * `CallerReference` &mdash; **required** &mdash; (`String`) A
 *       unique string that identifies the request and that allows failed
 *       CreateHostedZone requests to be retried without the risk of
 *       executing the operation twice. You must use a unique
 *       CallerReference string every time you create a hosted zone.
 *       CallerReference can be any unique string; you might choose to
 *       use a string that identifies your project, such as
 *       DNSMigration_01. Valid characters are any Unicode code points
 *       that are legal in an XML 1.0 document. The UTF-8 encoding of the
 *       value must be less than 128 bytes.
 *     * `HostedZoneConfig` &mdash; (`Object`) A complex type that
 *       contains an optional comment about your hosted zone.
 *       * `Comment` &mdash; (`String`) An optional comment about your
 *         hosted zone. If you don't want to specify a comment, you can
 *         omit the HostedZoneConfig and Comment elements from the XML
 *         document.
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
 *       * `HostedZone` &mdash; (`Object`) A complex type that contains
 *         identifying information about the hosted zone.
 *         * `Id` &mdash; (`String`) The ID of the specified hosted zone.
 *         * `Name` &mdash; (`String`) The name of the domain. This must be
 *           a fully-specified domain, for example, www.example.com. The
 *           trailing dot is optional; Route 53 assumes that the domain
 *           name is fully qualified. This means that Route 53 treats
 *           www.example.com (without a trailing dot) and www.example.com.
 *           (with a trailing dot) as identical. This is the name you have
 *           registered with your DNS registrar. You should ask your
 *           registrar to change the authoritative name servers for your
 *           domain to the set of NameServers elements returned in
 *           DelegationSet.
 *         * `CallerReference` &mdash; (`String`) A unique string that
 *           identifies the request to create the hosted zone.
 *         * `Config` &mdash; (`Object`) A complex type that contains the
 *           Comment element.
 *           * `Comment` &mdash; (`String`) An optional comment about your
 *             hosted zone. If you don't want to specify a comment, you can
 *             omit the HostedZoneConfig and Comment elements from the XML
 *             document.
 *         * `ResourceRecordSetCount` &mdash; (`Integer`) Total number of
 *           resource record sets in the hosted zone.
 *       * `ChangeInfo` &mdash; (`Object`) A complex type that contains
 *         information about the request to create a hosted zone. This
 *         includes an ID that you use when you call the GetChange action
 *         to get the current status of the change request.
 *         * `Id` &mdash; (`String`) The ID of the request. Use this ID to
 *           track when the change has completed across all Amazon Route 53
 *           DNS servers.
 *         * `Status` &mdash; (`String`) The current state of the request.
 *           PENDING indicates that this request has not yet been applied
 *           to all Amazon Route 53 DNS servers. Valid Values: PENDING |
 *           INSYNC
 *         * `SubmittedAt` &mdash; (`Date`) The date and time the change
 *           was submitted, in the format YYYY-MM-DDThh:mm:ssZ, as
 *           specified in the ISO 8601 standard (for example,
 *           2009-11-19T19:37:58Z). The Z after the time indicates that the
 *           time is listed in Coordinated Universal Time (UTC), which is
 *           synonymous with Greenwich Mean Time in this context.
 *         * `Comment` &mdash; (`String`) A complex type that describes
 *           change information about changes made to your hosted zone.
 *           This element contains an ID that you use when performing a
 *           GetChange action to get detailed information about the change.
 *       * `DelegationSet` &mdash; (`Object`) A complex type that contains
 *         name server information.
 *         * `NameServers` &mdash; (`Array<String>`) A complex type that
 *           contains the authoritative name servers for the hosted zone.
 *           Use the method provided by your domain registrar to add an NS
 *           record to your domain for each NameServer that is assigned to
 *           your hosted zone.
 *       * `Location` &mdash; (`String`) The unique URL representing the
 *         new hosted zone.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteHealthCheck(params, callback)
 *   Calls the DeleteHealthCheck API operation.
 *   @param params [Object]
 *     * `HealthCheckId` &mdash; **required** &mdash; (`String`) The ID
 *       of the health check to delete.
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
 * @!method deleteHostedZone(params, callback)
 *   Calls the DeleteHostedZone API operation.
 *   @param params [Object]
 *     * `Id` &mdash; **required** &mdash; (`String`) The ID of the
 *       request. Include this ID in a call to GetChange to track when
 *       the change has propagated to all Route 53 DNS servers.
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
 *       * `ChangeInfo` &mdash; (`Object`) A complex type that contains the
 *         ID, the status, and the date and time of your delete request.
 *         * `Id` &mdash; (`String`) The ID of the request. Use this ID to
 *           track when the change has completed across all Amazon Route 53
 *           DNS servers.
 *         * `Status` &mdash; (`String`) The current state of the request.
 *           PENDING indicates that this request has not yet been applied
 *           to all Amazon Route 53 DNS servers. Valid Values: PENDING |
 *           INSYNC
 *         * `SubmittedAt` &mdash; (`Date`) The date and time the change
 *           was submitted, in the format YYYY-MM-DDThh:mm:ssZ, as
 *           specified in the ISO 8601 standard (for example,
 *           2009-11-19T19:37:58Z). The Z after the time indicates that the
 *           time is listed in Coordinated Universal Time (UTC), which is
 *           synonymous with Greenwich Mean Time in this context.
 *         * `Comment` &mdash; (`String`) A complex type that describes
 *           change information about changes made to your hosted zone.
 *           This element contains an ID that you use when performing a
 *           GetChange action to get detailed information about the change.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getChange(params, callback)
 *   Calls the GetChange API operation.
 *   @param params [Object]
 *     * `Id` &mdash; **required** &mdash; (`String`) The ID of the
 *       change batch request. The value that you specify here is the
 *       value that ChangeResourceRecordSets returned in the Id element
 *       when you submitted the request.
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
 *       * `ChangeInfo` &mdash; (`Object`) A complex type that contains
 *         information about the specified change batch, including the
 *         change batch ID, the status of the change, and the date and time
 *         of the request.
 *         * `Id` &mdash; (`String`) The ID of the request. Use this ID to
 *           track when the change has completed across all Amazon Route 53
 *           DNS servers.
 *         * `Status` &mdash; (`String`) The current state of the request.
 *           PENDING indicates that this request has not yet been applied
 *           to all Amazon Route 53 DNS servers. Valid Values: PENDING |
 *           INSYNC
 *         * `SubmittedAt` &mdash; (`Date`) The date and time the change
 *           was submitted, in the format YYYY-MM-DDThh:mm:ssZ, as
 *           specified in the ISO 8601 standard (for example,
 *           2009-11-19T19:37:58Z). The Z after the time indicates that the
 *           time is listed in Coordinated Universal Time (UTC), which is
 *           synonymous with Greenwich Mean Time in this context.
 *         * `Comment` &mdash; (`String`) A complex type that describes
 *           change information about changes made to your hosted zone.
 *           This element contains an ID that you use when performing a
 *           GetChange action to get detailed information about the change.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getHealthCheck(params, callback)
 *   Calls the GetHealthCheck API operation.
 *   @param params [Object]
 *     * `HealthCheckId` &mdash; **required** &mdash; (`String`) The ID
 *       of the health check to retrieve.
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
 *       * `HealthCheck` &mdash; (`Object`) A complex type that contains
 *         the information about the specified health check.
 *         * `Id` &mdash; (`String`) The ID of the specified health check.
 *         * `CallerReference` &mdash; (`String`) A unique string that
 *           identifies the request to create the health check.
 *         * `HealthCheckConfig` &mdash; (`Object`) A complex type that
 *           contains the health check configuration.
 *           * `IPAddress` &mdash; (`String`) IP Address of the instance
 *             being checked.
 *           * `Port` &mdash; (`Integer`) Port on which connection will be
 *             opened to the instance to health check. For HTTP this
 *             defaults to 80 if the port is not specified.
 *           * `Type` &mdash; (`String`) The type of health check to be
 *             performed. Currently supported protocols are TCP and HTTP.
 *           * `ResourcePath` &mdash; (`String`) Path to ping on the
 *             instance to check the health. Required only for HTTP health
 *             checks, HTTP request is issued to the instance on the given
 *             port and path.
 *           * `FullyQualifiedDomainName` &mdash; (`String`) Fully
 *             qualified domain name of the instance to be health checked.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getHostedZone(params, callback)
 *   Calls the GetHostedZone API operation.
 *   @param params [Object]
 *     * `Id` &mdash; **required** &mdash; (`String`) The ID of the
 *       hosted zone for which you want to get a list of the name servers
 *       in the delegation set.
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
 *       * `HostedZone` &mdash; (`Object`) A complex type that contains the
 *         information about the specified hosted zone.
 *         * `Id` &mdash; (`String`) The ID of the specified hosted zone.
 *         * `Name` &mdash; (`String`) The name of the domain. This must be
 *           a fully-specified domain, for example, www.example.com. The
 *           trailing dot is optional; Route 53 assumes that the domain
 *           name is fully qualified. This means that Route 53 treats
 *           www.example.com (without a trailing dot) and www.example.com.
 *           (with a trailing dot) as identical. This is the name you have
 *           registered with your DNS registrar. You should ask your
 *           registrar to change the authoritative name servers for your
 *           domain to the set of NameServers elements returned in
 *           DelegationSet.
 *         * `CallerReference` &mdash; (`String`) A unique string that
 *           identifies the request to create the hosted zone.
 *         * `Config` &mdash; (`Object`) A complex type that contains the
 *           Comment element.
 *           * `Comment` &mdash; (`String`) An optional comment about your
 *             hosted zone. If you don't want to specify a comment, you can
 *             omit the HostedZoneConfig and Comment elements from the XML
 *             document.
 *         * `ResourceRecordSetCount` &mdash; (`Integer`) Total number of
 *           resource record sets in the hosted zone.
 *       * `DelegationSet` &mdash; (`Object`) A complex type that contains
 *         information about the name servers for the specified hosted
 *         zone.
 *         * `NameServers` &mdash; (`Array<String>`) A complex type that
 *           contains the authoritative name servers for the hosted zone.
 *           Use the method provided by your domain registrar to add an NS
 *           record to your domain for each NameServer that is assigned to
 *           your hosted zone.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listHealthChecks(params, callback)
 *   Calls the ListHealthChecks API operation.
 *   @param params [Object]
 *     * `Marker` &mdash; (`String`) If the request returned more than
 *       one page of results, submit another request and specify the
 *       value of NextMarker from the last response in the marker
 *       parameter to get the next page of results.
 *     * `MaxItems` &mdash; (`String`) Specify the maximum number of
 *       health checks to return per page of results.
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
 *       * `HealthChecks` &mdash; (`Array<Object>`) A complex type that
 *         contains information about the health checks associated with the
 *         current AWS account.
 *         * `Id` &mdash; (`String`) The ID of the specified health check.
 *         * `CallerReference` &mdash; (`String`) A unique string that
 *           identifies the request to create the health check.
 *         * `HealthCheckConfig` &mdash; (`Object`) A complex type that
 *           contains the health check configuration.
 *           * `IPAddress` &mdash; (`String`) IP Address of the instance
 *             being checked.
 *           * `Port` &mdash; (`Integer`) Port on which connection will be
 *             opened to the instance to health check. For HTTP this
 *             defaults to 80 if the port is not specified.
 *           * `Type` &mdash; (`String`) The type of health check to be
 *             performed. Currently supported protocols are TCP and HTTP.
 *           * `ResourcePath` &mdash; (`String`) Path to ping on the
 *             instance to check the health. Required only for HTTP health
 *             checks, HTTP request is issued to the instance on the given
 *             port and path.
 *           * `FullyQualifiedDomainName` &mdash; (`String`) Fully
 *             qualified domain name of the instance to be health checked.
 *       * `Marker` &mdash; (`String`) If the request returned more than
 *         one page of results, submit another request and specify the
 *         value of NextMarker from the last response in the marker
 *         parameter to get the next page of results.
 *       * `IsTruncated` &mdash; (`Boolean`) A flag indicating whether
 *         there are more health checks to be listed. If your results were
 *         truncated, you can make a follow-up request for the next page of
 *         results by using the Marker element. Valid Values: true | false
 *       * `NextMarker` &mdash; (`String`) Indicates where to continue
 *         listing health checks. If ListHealthChecksResponse$IsTruncated
 *         is true, make another request to ListHealthChecks and include
 *         the value of the NextMarker element in the Marker element to get
 *         the next page of results.
 *       * `MaxItems` &mdash; (`String`) The maximum number of health
 *         checks to be included in the response body. If the number of
 *         health checks associated with this AWS account exceeds MaxItems,
 *         the value of ListHealthChecksResponse$IsTruncated in the
 *         response is true. Call ListHealthChecks again and specify the
 *         value of ListHealthChecksResponse$NextMarker in the
 *         ListHostedZonesRequest$Marker element to get the next page of
 *         results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listHostedZones(params, callback)
 *   Calls the ListHostedZones API operation.
 *   @param params [Object]
 *     * `Marker` &mdash; (`String`) If the request returned more than
 *       one page of results, submit another request and specify the
 *       value of NextMarker from the last response in the marker
 *       parameter to get the next page of results.
 *     * `MaxItems` &mdash; (`String`) Specify the maximum number of
 *       hosted zones to return per page of results.
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
 *       * `HostedZones` &mdash; (`Array<Object>`) A complex type that
 *         contains information about the hosted zones associated with the
 *         current AWS account.
 *         * `Id` &mdash; (`String`) The ID of the specified hosted zone.
 *         * `Name` &mdash; (`String`) The name of the domain. This must be
 *           a fully-specified domain, for example, www.example.com. The
 *           trailing dot is optional; Route 53 assumes that the domain
 *           name is fully qualified. This means that Route 53 treats
 *           www.example.com (without a trailing dot) and www.example.com.
 *           (with a trailing dot) as identical. This is the name you have
 *           registered with your DNS registrar. You should ask your
 *           registrar to change the authoritative name servers for your
 *           domain to the set of NameServers elements returned in
 *           DelegationSet.
 *         * `CallerReference` &mdash; (`String`) A unique string that
 *           identifies the request to create the hosted zone.
 *         * `Config` &mdash; (`Object`) A complex type that contains the
 *           Comment element.
 *           * `Comment` &mdash; (`String`) An optional comment about your
 *             hosted zone. If you don't want to specify a comment, you can
 *             omit the HostedZoneConfig and Comment elements from the XML
 *             document.
 *         * `ResourceRecordSetCount` &mdash; (`Integer`) Total number of
 *           resource record sets in the hosted zone.
 *       * `Marker` &mdash; (`String`) If the request returned more than
 *         one page of results, submit another request and specify the
 *         value of NextMarker from the last response in the marker
 *         parameter to get the next page of results.
 *       * `IsTruncated` &mdash; (`Boolean`) A flag indicating whether
 *         there are more hosted zones to be listed. If your results were
 *         truncated, you can make a follow-up request for the next page of
 *         results by using the Marker element. Valid Values: true | false
 *       * `NextMarker` &mdash; (`String`) Indicates where to continue
 *         listing hosted zones. If ListHostedZonesResponse$IsTruncated is
 *         true, make another request to ListHostedZones and include the
 *         value of the NextMarker element in the Marker element to get the
 *         next page of results.
 *       * `MaxItems` &mdash; (`String`) The maximum number of hosted zones
 *         to be included in the response body. If the number of hosted
 *         zones associated with this AWS account exceeds MaxItems, the
 *         value of ListHostedZonesResponse$IsTruncated in the response is
 *         true. Call ListHostedZones again and specify the value of
 *         ListHostedZonesResponse$NextMarker in the
 *         ListHostedZonesRequest$Marker element to get the next page of
 *         results.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listResourceRecordSets(params, callback)
 *   Calls the ListResourceRecordSets API operation.
 *   @param params [Object]
 *     * `HostedZoneId` &mdash; **required** &mdash; (`String`) The ID of
 *       the hosted zone that contains the resource record sets that you
 *       want to get.
 *     * `StartRecordName` &mdash; (`String`) The first name in the
 *       lexicographic ordering of domain names that you want the
 *       ListResourceRecordSets request to list.
 *     * `StartRecordType` &mdash; (`String`) The DNS type at which to
 *       begin the listing of resource record sets. Valid values: A |
 *       AAAA | CNAME | MX | NS | PTR | SOA | SPF | SRV | TXT Values for
 *       Weighted Resource Record Sets: A | AAAA | CNAME | TXT Values for
 *       Regional Resource Record Sets: A | AAAA | CNAME | TXT Values for
 *       Alias Resource Record Sets: A | AAAA Constraint: Specifying type
 *       without specifying name returns an InvalidInput error.
 *     * `StartRecordIdentifier` &mdash; (`String`) Weighted resource
 *       record sets only: If results were truncated for a given DNS name
 *       and type, specify the value of
 *       ListResourceRecordSetsResponse$NextRecordIdentifier from the
 *       previous response to get the next resource record set that has
 *       the current DNS name and type.
 *     * `MaxItems` &mdash; (`String`) The maximum number of records you
 *       want in the response body.
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
 *       * `ResourceRecordSets` &mdash; (`Array<Object>`) A complex type
 *         that contains information about the resource record sets that
 *         are returned by the request.
 *         * `Name` &mdash; (`String`) The domain name of the current
 *           resource record set.
 *         * `Type` &mdash; (`String`) The type of the current resource
 *           record set.
 *         * `SetIdentifier` &mdash; (`String`) Weighted, Regional, and
 *           Failover resource record sets only: An identifier that
 *           differentiates among multiple resource record sets that have
 *           the same combination of DNS name and type.
 *         * `Weight` &mdash; (`Integer`) Weighted resource record sets
 *           only: Among resource record sets that have the same
 *           combination of DNS name and type, a value that determines what
 *           portion of traffic for the current resource record set is
 *           routed to the associated location.
 *         * `Region` &mdash; (`String`) Regional resource record sets
 *           only: Among resource record sets that have the same
 *           combination of DNS name and type, a value that specifies the
 *           AWS region for the current resource record set.
 *         * `Failover` &mdash; (`String`) Failover resource record sets
 *           only: Among resource record sets that have the same
 *           combination of DNS name and type, a value that indicates
 *           whether the current resource record set is a primary or
 *           secondary resource record set. A failover set may contain at
 *           most one resource record set marked as primary and one
 *           resource record set marked as secondary. A resource record set
 *           marked as primary will be returned if any of the following are
 *           true: (1) an associated health check is passing, (2) if the
 *           resource record set is an alias with the evaluate target
 *           health and at least one target resource record set is healthy,
 *           (3) both the primary and secondary resource record set are
 *           failing health checks or (4) there is no secondary resource
 *           record set. A secondary resource record set will be returned
 *           if: (1) the primary is failing a health check and either the
 *           secondary is passing a health check or has no associated
 *           health check, or (2) there is no primary resource record set.
 *           Valid values: PRIMARY | SECONDARY
 *         * `TTL` &mdash; (`Integer`) The cache time to live for the
 *           current resource record set.
 *         * `ResourceRecords` &mdash; (`Array<Object>`) A complex type
 *           that contains the resource records for the current resource
 *           record set.
 *           * `Value` &mdash; (`String`) The value of the Value element
 *             for the current resource record set.
 *         * `AliasTarget` &mdash; (`Object`) Alias resource record sets
 *           only: Information about the AWS resource to which you are
 *           redirecting traffic.
 *           * `HostedZoneId` &mdash; (`String`) Alias resource record sets
 *             only: The value of the hosted zone ID for the AWS resource.
 *             For more information and an example, see Creating Alias
 *             Resource Record Sets in the Amazon Route 53 Developer Guide.
 *           * `DNSName` &mdash; (`String`) Alias resource record sets
 *             only: The external DNS name associated with the AWS
 *             Resource. For more information and an example, see Creating
 *             Alias Resource Record Sets in the Amazon Route 53 Developer
 *             Guide.
 *           * `EvaluateTargetHealth` &mdash; (`Boolean`) Alias resource
 *             record sets only: A boolean value that indicates whether
 *             this Resource Record Set should respect the health status of
 *             any health checks associated with the ALIAS target record
 *             which it is linked to. For more information and an example,
 *             see Creating Alias Resource Record Sets in the Amazon Route
 *             53 Developer Guide.
 *         * `HealthCheckId` &mdash; (`String`) Health Check resource
 *           record sets only, not required for alias resource record sets:
 *           An identifier that is used to identify health check associated
 *           with the resource record set.
 *       * `IsTruncated` &mdash; (`Boolean`) A flag that indicates whether
 *         there are more resource record sets to be listed. If your
 *         results were truncated, you can make a follow-up request for the
 *         next page of results by using the
 *         ListResourceRecordSetsResponse$NextRecordName element. Valid
 *         Values: true | false
 *       * `NextRecordName` &mdash; (`String`) If the results were
 *         truncated, the name of the next record in the list. This element
 *         is present only if ListResourceRecordSetsResponse$IsTruncated is
 *         true.
 *       * `NextRecordType` &mdash; (`String`) If the results were
 *         truncated, the type of the next record in the list. This element
 *         is present only if ListResourceRecordSetsResponse$IsTruncated is
 *         true.
 *       * `NextRecordIdentifier` &mdash; (`String`) Weighted resource
 *         record sets only: If results were truncated for a given DNS name
 *         and type, the value of SetIdentifier for the next resource
 *         record set that has the current DNS name and type.
 *       * `MaxItems` &mdash; (`String`) The maximum number of records you
 *         requested. The maximum value of MaxItems is 100.
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
AWS.Route53.Client = inherit({});
