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
 * ### Sending a Request Using SimpleDB
 *
 * ```js
 * svc = new AWS.SimpleDB();
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
 *   @option (see AWS.SimpleDB.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.SimpleDB.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.SimpleDB.Client
 *
 */
AWS.SimpleDB = inherit({})

/**
 * The low-level SimpleDB client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method batchDeleteAttributes(params, callback)
 *   Calls the BatchDeleteAttributes API operation.
 *   @param params [Object]
 *     * `DomainName` &mdash; **required** &mdash; (`String`) The name of
 *       the domain in which the attributes are being deleted.
 *     * `Items` &mdash; **required** &mdash; (`Array<Object>`) A list of
 *       items on which to perform the operation.
 *       * `Name` &mdash; **required** &mdash; (`String`)
 *       * `Attributes` &mdash; (`Array<Object>`)
 *         * `Name` &mdash; **required** &mdash; (`String`) The name of
 *           the attribute.
 *         * `AlternateNameEncoding` &mdash; (`String`)
 *         * `Value` &mdash; **required** &mdash; (`String`) The value of
 *           the attribute.
 *         * `AlternateValueEncoding` &mdash; (`String`)
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
 * @!method batchPutAttributes(params, callback)
 *   Calls the BatchPutAttributes API operation.
 *   @param params [Object]
 *     * `DomainName` &mdash; **required** &mdash; (`String`) The name of
 *       the domain in which the attributes are being stored.
 *     * `Items` &mdash; **required** &mdash; (`Array<Object>`) A list of
 *       items on which to perform the operation.
 *       * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *         replaceable item.
 *       * `Attributes` &mdash; **required** &mdash; (`Array<Object>`)
 *         The list of attributes for a replaceable item.
 *         * `Name` &mdash; **required** &mdash; (`String`) The name of
 *           the replaceable attribute.
 *         * `Value` &mdash; **required** &mdash; (`String`) The value of
 *           the replaceable attribute.
 *         * `Replace` &mdash; (`Boolean`) A flag specifying whether or
 *           not to replace the attribute/value pair or to add a new
 *           attribute/value pair. The default setting is false.
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
 * @!method createDomain(params, callback)
 *   Calls the CreateDomain API operation.
 *   @param params [Object]
 *     * `DomainName` &mdash; **required** &mdash; (`String`) The name of
 *       the domain to create. The name can range between 3 and 255
 *       characters and can contain the following characters: a-z, A-Z,
 *       0-9, '_', '-', and '.'.
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
 * @!method deleteAttributes(params, callback)
 *   Calls the DeleteAttributes API operation.
 *   @param params [Object]
 *     * `DomainName` &mdash; **required** &mdash; (`String`) The name of
 *       the domain in which to perform the operation.
 *     * `ItemName` &mdash; **required** &mdash; (`String`) The name of
 *       the item. Similar to rows on a spreadsheet, items represent
 *       individual objects that contain one or more value-attribute
 *       pairs.
 *     * `Attributes` &mdash; (`Array<Object>`) A list of Attributes.
 *       Similar to columns on a spreadsheet, attributes represent
 *       categories of data that can be assigned to items.
 *       * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *         attribute.
 *       * `AlternateNameEncoding` &mdash; (`String`)
 *       * `Value` &mdash; **required** &mdash; (`String`) The value of
 *         the attribute.
 *       * `AlternateValueEncoding` &mdash; (`String`)
 *     * `Expected` &mdash; (`Object`) The update condition which, if
 *       specified, determines whether the specified attributes will be
 *       deleted or not. The update condition must be satisfied in order
 *       for this request to be processed and the attributes to be
 *       deleted.
 *       * `Name` &mdash; (`String`) The name of the attribute involved
 *         in the condition.
 *       * `Value` &mdash; (`String`) The value of an attribute. This
 *         value can only be specified when the Exists parameter is equal
 *         to true.
 *       * `Exists` &mdash; (`Boolean`) A value specifying whether or not
 *         the specified attribute must exist with the specified value in
 *         order for the update condition to be satisfied. Specify true
 *         if the attribute must exist for the update condition to be
 *         satisfied. Specify false if the attribute should not exist in
 *         order for the update condition to be satisfied.
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
 * @!method deleteDomain(params, callback)
 *   Calls the DeleteDomain API operation.
 *   @param params [Object]
 *     * `DomainName` &mdash; **required** &mdash; (`String`) The name of
 *       the domain to delete.
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
 * @!method domainMetadata(params, callback)
 *   Calls the DomainMetadata API operation.
 *   @param params [Object]
 *     * `DomainName` &mdash; **required** &mdash; (`String`) The name of
 *       the domain for which to display the metadata of.
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
 *       * `ItemCount` &mdash; (`Integer`) The number of all items in the
 *         domain.
 *       * `ItemNamesSizeBytes` &mdash; (`Integer`) The total size of all
 *         item names in the domain, in bytes.
 *       * `AttributeNameCount` &mdash; (`Integer`) The number of unique
 *         attribute names in the domain.
 *       * `AttributeNamesSizeBytes` &mdash; (`Integer`) The total size of
 *         all unique attribute names in the domain, in bytes.
 *       * `AttributeValueCount` &mdash; (`Integer`) The number of all
 *         attribute name/value pairs in the domain.
 *       * `AttributeValuesSizeBytes` &mdash; (`Integer`) The total size of
 *         all attribute values in the domain, in bytes.
 *       * `Timestamp` &mdash; (`Integer`) The data and time when metadata
 *         was calculated, in Epoch (UNIX) seconds.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getAttributes(params, callback)
 *   Calls the GetAttributes API operation.
 *   @param params [Object]
 *     * `DomainName` &mdash; **required** &mdash; (`String`) The name of
 *       the domain in which to perform the operation.
 *     * `ItemName` &mdash; **required** &mdash; (`String`) The name of
 *       the item.
 *     * `AttributeNames` &mdash; (`Array<String>`) The names of the
 *       attributes.
 *     * `ConsistentRead` &mdash; (`Boolean`) Determines whether or not
 *       strong consistency should be enforced when data is read from
 *       SimpleDB. If true, any data previously written to SimpleDB will
 *       be returned. Otherwise, results will be consistent eventually,
 *       and the client may not see data that was written immediately
 *       before your read.
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
 *       * `Attributes` &mdash; (`Array<Object>`) The list of attributes
 *         returned by the operation.
 *         * `Name` &mdash; (`String`) The name of the attribute.
 *         * `AlternateNameEncoding` &mdash; (`String`)
 *         * `Value` &mdash; (`String`) The value of the attribute.
 *         * `AlternateValueEncoding` &mdash; (`String`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listDomains(params, callback)
 *   Calls the ListDomains API operation.
 *   @param params [Object]
 *     * `MaxNumberOfDomains` &mdash; (`Integer`) The maximum number of
 *       domain names you want returned. The range is 1 to 100. The
 *       default setting is 100.
 *     * `NextToken` &mdash; (`String`) A string informing Amazon
 *       SimpleDB where to start the next list of domain names.
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
 *       * `DomainNames` &mdash; (`Array<String>`) A list of domain names
 *         that match the expression.
 *       * `NextToken` &mdash; (`String`) An opaque token indicating that
 *         there are more domains than the specified MaxNumberOfDomains
 *         still available.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method putAttributes(params, callback)
 *   Calls the PutAttributes API operation.
 *   @param params [Object]
 *     * `DomainName` &mdash; **required** &mdash; (`String`) The name of
 *       the domain in which to perform the operation.
 *     * `ItemName` &mdash; **required** &mdash; (`String`) The name of
 *       the item.
 *     * `Attributes` &mdash; **required** &mdash; (`Array<Object>`) The
 *       list of attributes.
 *       * `Name` &mdash; **required** &mdash; (`String`) The name of the
 *         replaceable attribute.
 *       * `Value` &mdash; **required** &mdash; (`String`) The value of
 *         the replaceable attribute.
 *       * `Replace` &mdash; (`Boolean`) A flag specifying whether or not
 *         to replace the attribute/value pair or to add a new
 *         attribute/value pair. The default setting is false.
 *     * `Expected` &mdash; (`Object`) The update condition which, if
 *       specified, determines whether the specified attributes will be
 *       updated or not. The update condition must be satisfied in order
 *       for this request to be processed and the attributes to be
 *       updated.
 *       * `Name` &mdash; (`String`) The name of the attribute involved
 *         in the condition.
 *       * `Value` &mdash; (`String`) The value of an attribute. This
 *         value can only be specified when the Exists parameter is equal
 *         to true.
 *       * `Exists` &mdash; (`Boolean`) A value specifying whether or not
 *         the specified attribute must exist with the specified value in
 *         order for the update condition to be satisfied. Specify true
 *         if the attribute must exist for the update condition to be
 *         satisfied. Specify false if the attribute should not exist in
 *         order for the update condition to be satisfied.
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
 * @!method select(params, callback)
 *   Calls the Select API operation.
 *   @param params [Object]
 *     * `SelectExpression` &mdash; **required** &mdash; (`String`) The
 *       expression used to query the domain.
 *     * `NextToken` &mdash; (`String`) A string informing Amazon
 *       SimpleDB where to start the next list of ItemNames.
 *     * `ConsistentRead` &mdash; (`Boolean`) Determines whether or not
 *       strong consistency should be enforced when data is read from
 *       SimpleDB. If true, any data previously written to SimpleDB will
 *       be returned. Otherwise, results will be consistent eventually,
 *       and the client may not see data that was written immediately
 *       before your read.
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
 *       * `Items` &mdash; (`Array<Object>`) A list of items that match the
 *         select expression.
 *         * `Name` &mdash; (`String`) The name of the item.
 *         * `AlternateNameEncoding` &mdash; (`String`)
 *         * `Attributes` &mdash; (`Array<Object>`) A list of attributes.
 *           * `Name` &mdash; (`String`) The name of the attribute.
 *           * `AlternateNameEncoding` &mdash; (`String`)
 *           * `Value` &mdash; (`String`) The value of the attribute.
 *           * `AlternateValueEncoding` &mdash; (`String`)
 *       * `NextToken` &mdash; (`String`) An opaque token indicating that
 *         more items than MaxNumberOfItems were matched, the response size
 *         exceeded 1 megabyte, or the execution time exceeded 5 seconds.
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
AWS.SimpleDB.Client = inherit({});
