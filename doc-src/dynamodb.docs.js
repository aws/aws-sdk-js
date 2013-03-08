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
 * ### Sending a Request Using DynamoDB
 *
 * ```js
 * svc = new AWS.DynamoDB();
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
 *   @option (see AWS.DynamoDB.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.DynamoDB.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.DynamoDB.Client
 *
 */
AWS.DynamoDB = inherit({})

/**
 * The low-level DynamoDB client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method batchGetItem(params, callback)
 *   Calls the BatchGetItem API operation.
 *   @param params [Object]
 *     * `RequestItems` &mdash; **required** &mdash; (`Object<Object>`)
 *       * `Keys` &mdash; **required** &mdash; (`Array<Object>`)
 *         * `HashKeyElement` &mdash; **required** &mdash; (`Object`) A
 *           hash key element is treated as the primary key, and can be a
 *           string or a number. Single attribute primary keys have one
 *           index value. The value can be String, Number, StringSet,
 *           NumberSet.
 *           * `S` &mdash; (`String`) Strings are Unicode with UTF-8
 *             binary encoding. The maximum size is limited by the size
 *             of the primary key (1024 bytes as a range part of a key or
 *             2048 bytes as a single part hash key) or the item size
 *             (64k).
 *           * `N` &mdash; (`String`) Numbers are positive or negative
 *             exact-value decimals and integers. A number can have up to
 *             38 digits precision and can be between 10^-128 to 10^+126.
 *           * `B` &mdash; (`Base64 Encoded String`) Binary attributes
 *             are sequences of unsigned bytes.
 *           * `SS` &mdash; (`Array<String>`) A set of strings.
 *           * `NS` &mdash; (`Array<String>`) A set of numbers.
 *           * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *             binary attributes.
 *         * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *           treated as a secondary key (used in conjunction with the
 *           primary key), and can be a string or a number, and is only
 *           used for hash-and-range primary keys. The value can be
 *           String, Number, StringSet, NumberSet.
 *           * `S` &mdash; (`String`) Strings are Unicode with UTF-8
 *             binary encoding. The maximum size is limited by the size
 *             of the primary key (1024 bytes as a range part of a key or
 *             2048 bytes as a single part hash key) or the item size
 *             (64k).
 *           * `N` &mdash; (`String`) Numbers are positive or negative
 *             exact-value decimals and integers. A number can have up to
 *             38 digits precision and can be between 10^-128 to 10^+126.
 *           * `B` &mdash; (`Base64 Encoded String`) Binary attributes
 *             are sequences of unsigned bytes.
 *           * `SS` &mdash; (`Array<String>`) A set of strings.
 *           * `NS` &mdash; (`Array<String>`) A set of numbers.
 *           * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *             binary attributes.
 *       * `AttributesToGet` &mdash; (`Array<String>`)
 *       * `ConsistentRead` &mdash; (`Boolean`)
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
 *       * `Responses` &mdash; (`Object<Object>`)
 *         * `Items` &mdash; (`Array<Object<Object>>`)
 *         * `ConsumedCapacityUnits` &mdash; (`Float`)
 *       * `UnprocessedKeys` &mdash; (`Object<Object>`) Contains a map of
 *         tables and their respective keys that were not processed with
 *         the current response, possibly due to reaching a limit on the
 *         response size. The UnprocessedKeys value is in the same form as
 *         a RequestItems parameter (so the value can be provided directly
 *         to a subsequent BatchGetItem operation). For more information,
 *         see the above RequestItems parameter.
 *         * `Keys` &mdash; (`Array<Object>`)
 *           * `HashKeyElement` &mdash; (`Object`) A hash key element is
 *             treated as the primary key, and can be a string or a number.
 *             Single attribute primary keys have one index value. The
 *             value can be String, Number, StringSet, NumberSet.
 *             * `S` &mdash; (`String`) Strings are Unicode with UTF-8
 *               binary encoding. The maximum size is limited by the size
 *               of the primary key (1024 bytes as a range part of a key or
 *               2048 bytes as a single part hash key) or the item size
 *               (64k).
 *             * `N` &mdash; (`String`) Numbers are positive or negative
 *               exact-value decimals and integers. A number can have up to
 *               38 digits precision and can be between 10^-128 to 10^+126.
 *             * `B` &mdash; (`Base64 Encoded String`) Binary attributes
 *               are sequences of unsigned bytes.
 *             * `SS` &mdash; (`Array<String>`) A set of strings.
 *             * `NS` &mdash; (`Array<String>`) A set of numbers.
 *             * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *               binary attributes.
 *           * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *             treated as a secondary key (used in conjunction with the
 *             primary key), and can be a string or a number, and is only
 *             used for hash-and-range primary keys. The value can be
 *             String, Number, StringSet, NumberSet.
 *             * `S` &mdash; (`String`) Strings are Unicode with UTF-8
 *               binary encoding. The maximum size is limited by the size
 *               of the primary key (1024 bytes as a range part of a key or
 *               2048 bytes as a single part hash key) or the item size
 *               (64k).
 *             * `N` &mdash; (`String`) Numbers are positive or negative
 *               exact-value decimals and integers. A number can have up to
 *               38 digits precision and can be between 10^-128 to 10^+126.
 *             * `B` &mdash; (`Base64 Encoded String`) Binary attributes
 *               are sequences of unsigned bytes.
 *             * `SS` &mdash; (`Array<String>`) A set of strings.
 *             * `NS` &mdash; (`Array<String>`) A set of numbers.
 *             * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *               binary attributes.
 *         * `AttributesToGet` &mdash; (`Array<String>`)
 *         * `ConsistentRead` &mdash; (`Boolean`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method batchWriteItem(params, callback)
 *   Calls the BatchWriteItem API operation.
 *   @param params [Object]
 *     * `RequestItems` &mdash; **required** &mdash;
 *       (`Object<Array<Object>>`) A map of table name to
 *       list-of-write-requests. Used as input to the BatchWriteItem API
 *       call
 *       * `PutRequest` &mdash; (`Object`)
 *         * `Item` &mdash; **required** &mdash; (`Object<Object>`) The
 *           item to put
 *           * `S` &mdash; (`String`) Strings are Unicode with UTF-8
 *             binary encoding. The maximum size is limited by the size
 *             of the primary key (1024 bytes as a range part of a key or
 *             2048 bytes as a single part hash key) or the item size
 *             (64k).
 *           * `N` &mdash; (`String`) Numbers are positive or negative
 *             exact-value decimals and integers. A number can have up to
 *             38 digits precision and can be between 10^-128 to 10^+126.
 *           * `B` &mdash; (`Base64 Encoded String`) Binary attributes
 *             are sequences of unsigned bytes.
 *           * `SS` &mdash; (`Array<String>`) A set of strings.
 *           * `NS` &mdash; (`Array<String>`) A set of numbers.
 *           * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *             binary attributes.
 *       * `DeleteRequest` &mdash; (`Object`)
 *         * `Key` &mdash; **required** &mdash; (`Object`) The item's key
 *           to be delete
 *           * `HashKeyElement` &mdash; **required** &mdash; (`Object`) A
 *             hash key element is treated as the primary key, and can be
 *             a string or a number. Single attribute primary keys have
 *             one index value. The value can be String, Number,
 *             StringSet, NumberSet.
 *             * `S` &mdash; (`String`) Strings are Unicode with UTF-8
 *               binary encoding. The maximum size is limited by the size
 *               of the primary key (1024 bytes as a range part of a key
 *               or 2048 bytes as a single part hash key) or the item
 *               size (64k).
 *             * `N` &mdash; (`String`) Numbers are positive or negative
 *               exact-value decimals and integers. A number can have up
 *               to 38 digits precision and can be between 10^-128 to
 *               10^+126.
 *             * `B` &mdash; (`Base64 Encoded String`) Binary attributes
 *               are sequences of unsigned bytes.
 *             * `SS` &mdash; (`Array<String>`) A set of strings.
 *             * `NS` &mdash; (`Array<String>`) A set of numbers.
 *             * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *               binary attributes.
 *           * `RangeKeyElement` &mdash; (`Object`) A range key element
 *             is treated as a secondary key (used in conjunction with
 *             the primary key), and can be a string or a number, and is
 *             only used for hash-and-range primary keys. The value can
 *             be String, Number, StringSet, NumberSet.
 *             * `S` &mdash; (`String`) Strings are Unicode with UTF-8
 *               binary encoding. The maximum size is limited by the size
 *               of the primary key (1024 bytes as a range part of a key
 *               or 2048 bytes as a single part hash key) or the item
 *               size (64k).
 *             * `N` &mdash; (`String`) Numbers are positive or negative
 *               exact-value decimals and integers. A number can have up
 *               to 38 digits precision and can be between 10^-128 to
 *               10^+126.
 *             * `B` &mdash; (`Base64 Encoded String`) Binary attributes
 *               are sequences of unsigned bytes.
 *             * `SS` &mdash; (`Array<String>`) A set of strings.
 *             * `NS` &mdash; (`Array<String>`) A set of numbers.
 *             * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *               binary attributes.
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
 *       * `Responses` &mdash; (`Object<Object>`) The response object as a
 *         result of BatchWriteItem call. This is essentially a map of
 *         table name to ConsumedCapacityUnits.
 *         * `ConsumedCapacityUnits` &mdash; (`Float`)
 *       * `UnprocessedItems` &mdash; (`Object<Array<Object>>`) The Items
 *         which we could not successfully process in a BatchWriteItem call
 *         is returned as UnprocessedItems
 *         * `PutRequest` &mdash; (`Object`)
 *           * `Item` &mdash; (`Object<Object>`) The item to put
 *             * `S` &mdash; (`String`) Strings are Unicode with UTF-8
 *               binary encoding. The maximum size is limited by the size
 *               of the primary key (1024 bytes as a range part of a key or
 *               2048 bytes as a single part hash key) or the item size
 *               (64k).
 *             * `N` &mdash; (`String`) Numbers are positive or negative
 *               exact-value decimals and integers. A number can have up to
 *               38 digits precision and can be between 10^-128 to 10^+126.
 *             * `B` &mdash; (`Base64 Encoded String`) Binary attributes
 *               are sequences of unsigned bytes.
 *             * `SS` &mdash; (`Array<String>`) A set of strings.
 *             * `NS` &mdash; (`Array<String>`) A set of numbers.
 *             * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *               binary attributes.
 *         * `DeleteRequest` &mdash; (`Object`)
 *           * `Key` &mdash; (`Object`) The item's key to be delete
 *             * `HashKeyElement` &mdash; (`Object`) A hash key element is
 *               treated as the primary key, and can be a string or a
 *               number. Single attribute primary keys have one index
 *               value. The value can be String, Number, StringSet,
 *               NumberSet.
 *               * `S` &mdash; (`String`) Strings are Unicode with UTF-8
 *                 binary encoding. The maximum size is limited by the size
 *                 of the primary key (1024 bytes as a range part of a key
 *                 or 2048 bytes as a single part hash key) or the item
 *                 size (64k).
 *               * `N` &mdash; (`String`) Numbers are positive or negative
 *                 exact-value decimals and integers. A number can have up
 *                 to 38 digits precision and can be between 10^-128 to
 *                 10^+126.
 *               * `B` &mdash; (`Base64 Encoded String`) Binary attributes
 *                 are sequences of unsigned bytes.
 *               * `SS` &mdash; (`Array<String>`) A set of strings.
 *               * `NS` &mdash; (`Array<String>`) A set of numbers.
 *               * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *                 binary attributes.
 *             * `RangeKeyElement` &mdash; (`Object`) A range key element
 *               is treated as a secondary key (used in conjunction with
 *               the primary key), and can be a string or a number, and is
 *               only used for hash-and-range primary keys. The value can
 *               be String, Number, StringSet, NumberSet.
 *               * `S` &mdash; (`String`) Strings are Unicode with UTF-8
 *                 binary encoding. The maximum size is limited by the size
 *                 of the primary key (1024 bytes as a range part of a key
 *                 or 2048 bytes as a single part hash key) or the item
 *                 size (64k).
 *               * `N` &mdash; (`String`) Numbers are positive or negative
 *                 exact-value decimals and integers. A number can have up
 *                 to 38 digits precision and can be between 10^-128 to
 *                 10^+126.
 *               * `B` &mdash; (`Base64 Encoded String`) Binary attributes
 *                 are sequences of unsigned bytes.
 *               * `SS` &mdash; (`Array<String>`) A set of strings.
 *               * `NS` &mdash; (`Array<String>`) A set of numbers.
 *               * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *                 binary attributes.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createTable(params, callback)
 *   Calls the CreateTable API operation.
 *   @param params [Object]
 *     * `TableName` &mdash; **required** &mdash; (`String`) The name of
 *       the table you want to create. Allowed characters are a-z, A-Z,
 *       0-9, _ (underscore), - (hyphen) and . (period).
 *     * `KeySchema` &mdash; **required** &mdash; (`Object`)
 *       * `HashKeyElement` &mdash; **required** &mdash; (`Object`) A
 *         hash key element is treated as the primary key, and can be a
 *         string or a number. Single attribute primary keys have one
 *         index value. The value can be String, Number, StringSet,
 *         NumberSet.
 *         * `AttributeName` &mdash; **required** &mdash; (`String`) The
 *           AttributeName of the KeySchemaElement.
 *         * `AttributeType` &mdash; **required** &mdash; (`String`) The
 *           AttributeType of the KeySchemaElement which can be a String
 *           or a Number.
 *       * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * `AttributeName` &mdash; **required** &mdash; (`String`) The
 *           AttributeName of the KeySchemaElement.
 *         * `AttributeType` &mdash; **required** &mdash; (`String`) The
 *           AttributeType of the KeySchemaElement which can be a String
 *           or a Number.
 *     * `ProvisionedThroughput` &mdash; **required** &mdash; (`Object`)
 *       * `ReadCapacityUnits` &mdash; **required** &mdash; (`Integer`)
 *         ReadCapacityUnits are in terms of strictly consistent reads,
 *         assuming items of 1k. 2k items require twice the
 *         ReadCapacityUnits. Eventually-consistent reads only require
 *         half the ReadCapacityUnits of stirctly consistent reads.
 *       * `WriteCapacityUnits` &mdash; **required** &mdash; (`Integer`)
 *         WriteCapacityUnits are in terms of strictly consistent reads,
 *         assuming items of 1k. 2k items require twice the
 *         WriteCapacityUnits.
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
 *       * `TableDescription` &mdash; (`Object`)
 *         * `TableName` &mdash; (`String`) The name of the table being
 *           described.
 *         * `KeySchema` &mdash; (`Object`)
 *           * `HashKeyElement` &mdash; (`Object`) A hash key element is
 *             treated as the primary key, and can be a string or a number.
 *             Single attribute primary keys have one index value. The
 *             value can be String, Number, StringSet, NumberSet.
 *             * `AttributeName` &mdash; (`String`) The AttributeName of
 *               the KeySchemaElement.
 *             * `AttributeType` &mdash; (`String`) The AttributeType of
 *               the KeySchemaElement which can be a String or a Number.
 *           * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *             treated as a secondary key (used in conjunction with the
 *             primary key), and can be a string or a number, and is only
 *             used for hash-and-range primary keys. The value can be
 *             String, Number, StringSet, NumberSet.
 *             * `AttributeName` &mdash; (`String`) The AttributeName of
 *               the KeySchemaElement.
 *             * `AttributeType` &mdash; (`String`) The AttributeType of
 *               the KeySchemaElement which can be a String or a Number.
 *         * `TableStatus` &mdash; (`String`)
 *         * `CreationDateTime` &mdash; (`Date`)
 *         * `ProvisionedThroughput` &mdash; (`Object`)
 *           * `LastIncreaseDateTime` &mdash; (`Date`)
 *           * `LastDecreaseDateTime` &mdash; (`Date`)
 *           * `ReadCapacityUnits` &mdash; (`Integer`)
 *           * `WriteCapacityUnits` &mdash; (`Integer`)
 *         * `TableSizeBytes` &mdash; (`Integer`)
 *         * `ItemCount` &mdash; (`Integer`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteItem(params, callback)
 *   Calls the DeleteItem API operation.
 *   @param params [Object]
 *     * `TableName` &mdash; **required** &mdash; (`String`) The name of
 *       the table in which you want to delete an item. Allowed
 *       characters are a-z, A-Z, 0-9, _ (underscore), - (hyphen) and .
 *       (period).
 *     * `Key` &mdash; **required** &mdash; (`Object`)
 *       * `HashKeyElement` &mdash; **required** &mdash; (`Object`) A
 *         hash key element is treated as the primary key, and can be a
 *         string or a number. Single attribute primary keys have one
 *         index value. The value can be String, Number, StringSet,
 *         NumberSet.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *       * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *     * `Expected` &mdash; (`Object<Object>`)
 *       * `Value` &mdash; (`Object`) Specify whether or not a value
 *         already exists and has a specific content for the attribute
 *         name-value pair.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *       * `Exists` &mdash; (`Boolean`) Specify whether or not a value
 *         already exists for the attribute name-value pair.
 *     * `ReturnValues` &mdash; (`String`)
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
 *       * `Attributes` &mdash; (`Object<Object>`) If the ReturnValues
 *         parameter is provided as ALL_OLD in the request, Amazon DynamoDB
 *         returns an array of attribute name-value pairs (essentially, the
 *         deleted item). Otherwise, the response contains an empty set.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048 bytes
 *           as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to 38
 *           digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of binary
 *           attributes.
 *       * `ConsumedCapacityUnits` &mdash; (`Float`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteTable(params, callback)
 *   Calls the DeleteTable API operation.
 *   @param params [Object]
 *     * `TableName` &mdash; **required** &mdash; (`String`) The name of
 *       the table you want to delete. Allowed characters are a-z, A-Z,
 *       0-9, _ (underscore), - (hyphen) and . (period).
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
 *       * `TableDescription` &mdash; (`Object`)
 *         * `TableName` &mdash; (`String`) The name of the table being
 *           described.
 *         * `KeySchema` &mdash; (`Object`)
 *           * `HashKeyElement` &mdash; (`Object`) A hash key element is
 *             treated as the primary key, and can be a string or a number.
 *             Single attribute primary keys have one index value. The
 *             value can be String, Number, StringSet, NumberSet.
 *             * `AttributeName` &mdash; (`String`) The AttributeName of
 *               the KeySchemaElement.
 *             * `AttributeType` &mdash; (`String`) The AttributeType of
 *               the KeySchemaElement which can be a String or a Number.
 *           * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *             treated as a secondary key (used in conjunction with the
 *             primary key), and can be a string or a number, and is only
 *             used for hash-and-range primary keys. The value can be
 *             String, Number, StringSet, NumberSet.
 *             * `AttributeName` &mdash; (`String`) The AttributeName of
 *               the KeySchemaElement.
 *             * `AttributeType` &mdash; (`String`) The AttributeType of
 *               the KeySchemaElement which can be a String or a Number.
 *         * `TableStatus` &mdash; (`String`)
 *         * `CreationDateTime` &mdash; (`Date`)
 *         * `ProvisionedThroughput` &mdash; (`Object`)
 *           * `LastIncreaseDateTime` &mdash; (`Date`)
 *           * `LastDecreaseDateTime` &mdash; (`Date`)
 *           * `ReadCapacityUnits` &mdash; (`Integer`)
 *           * `WriteCapacityUnits` &mdash; (`Integer`)
 *         * `TableSizeBytes` &mdash; (`Integer`)
 *         * `ItemCount` &mdash; (`Integer`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeTable(params, callback)
 *   Calls the DescribeTable API operation.
 *   @param params [Object]
 *     * `TableName` &mdash; **required** &mdash; (`String`) The name of
 *       the table you want to describe. Allowed characters are a-z, A-Z,
 *       0-9, _ (underscore), - (hyphen) and . (period).
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
 *       * `Table` &mdash; (`Object`)
 *         * `TableName` &mdash; (`String`) The name of the table being
 *           described.
 *         * `KeySchema` &mdash; (`Object`)
 *           * `HashKeyElement` &mdash; (`Object`) A hash key element is
 *             treated as the primary key, and can be a string or a number.
 *             Single attribute primary keys have one index value. The
 *             value can be String, Number, StringSet, NumberSet.
 *             * `AttributeName` &mdash; (`String`) The AttributeName of
 *               the KeySchemaElement.
 *             * `AttributeType` &mdash; (`String`) The AttributeType of
 *               the KeySchemaElement which can be a String or a Number.
 *           * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *             treated as a secondary key (used in conjunction with the
 *             primary key), and can be a string or a number, and is only
 *             used for hash-and-range primary keys. The value can be
 *             String, Number, StringSet, NumberSet.
 *             * `AttributeName` &mdash; (`String`) The AttributeName of
 *               the KeySchemaElement.
 *             * `AttributeType` &mdash; (`String`) The AttributeType of
 *               the KeySchemaElement which can be a String or a Number.
 *         * `TableStatus` &mdash; (`String`)
 *         * `CreationDateTime` &mdash; (`Date`)
 *         * `ProvisionedThroughput` &mdash; (`Object`)
 *           * `LastIncreaseDateTime` &mdash; (`Date`)
 *           * `LastDecreaseDateTime` &mdash; (`Date`)
 *           * `ReadCapacityUnits` &mdash; (`Integer`)
 *           * `WriteCapacityUnits` &mdash; (`Integer`)
 *         * `TableSizeBytes` &mdash; (`Integer`)
 *         * `ItemCount` &mdash; (`Integer`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getItem(params, callback)
 *   Calls the GetItem API operation.
 *   @param params [Object]
 *     * `TableName` &mdash; **required** &mdash; (`String`) The name of
 *       the table in which you want to get an item. Allowed characters
 *       are a-z, A-Z, 0-9, _ (underscore), - (hyphen) and . (period).
 *     * `Key` &mdash; **required** &mdash; (`Object`)
 *       * `HashKeyElement` &mdash; **required** &mdash; (`Object`) A
 *         hash key element is treated as the primary key, and can be a
 *         string or a number. Single attribute primary keys have one
 *         index value. The value can be String, Number, StringSet,
 *         NumberSet.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *       * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *     * `AttributesToGet` &mdash; (`Array<String>`)
 *     * `ConsistentRead` &mdash; (`Boolean`)
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
 *       * `Item` &mdash; (`Object<Object>`) Contains the requested
 *         attributes.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048 bytes
 *           as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to 38
 *           digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of binary
 *           attributes.
 *       * `ConsumedCapacityUnits` &mdash; (`Float`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listTables(params, callback)
 *   Calls the ListTables API operation.
 *   @param params [Object]
 *     * `ExclusiveStartTableName` &mdash; (`String`) The name of the
 *       table that starts the list. If you already ran a ListTables
 *       operation and received a LastEvaluatedTableName value in the
 *       response, use that value here to continue the list.
 *     * `Limit` &mdash; (`Integer`)
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
 *       * `TableNames` &mdash; (`Array<String>`)
 *       * `LastEvaluatedTableName` &mdash; (`String`) The name of the last
 *         table in the current list. Use this value as the
 *         ExclusiveStartTableName in a new request to continue the list
 *         until all the table names are returned. If this value is null,
 *         all table names have been returned.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method putItem(params, callback)
 *   Calls the PutItem API operation.
 *   @param params [Object]
 *     * `TableName` &mdash; **required** &mdash; (`String`) The name of
 *       the table in which you want to put an item. Allowed characters
 *       are a-z, A-Z, 0-9, _ (underscore), - (hyphen) and . (period).
 *     * `Item` &mdash; **required** &mdash; (`Object<Object>`)
 *       * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *         encoding. The maximum size is limited by the size of the
 *         primary key (1024 bytes as a range part of a key or 2048 bytes
 *         as a single part hash key) or the item size (64k).
 *       * `N` &mdash; (`String`) Numbers are positive or negative
 *         exact-value decimals and integers. A number can have up to 38
 *         digits precision and can be between 10^-128 to 10^+126.
 *       * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *         sequences of unsigned bytes.
 *       * `SS` &mdash; (`Array<String>`) A set of strings.
 *       * `NS` &mdash; (`Array<String>`) A set of numbers.
 *       * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of binary
 *         attributes.
 *     * `Expected` &mdash; (`Object<Object>`)
 *       * `Value` &mdash; (`Object`) Specify whether or not a value
 *         already exists and has a specific content for the attribute
 *         name-value pair.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *       * `Exists` &mdash; (`Boolean`) Specify whether or not a value
 *         already exists for the attribute name-value pair.
 *     * `ReturnValues` &mdash; (`String`)
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
 *       * `Attributes` &mdash; (`Object<Object>`) Attribute values before
 *         the put operation, but only if the ReturnValues parameter is
 *         specified as ALL_OLD in the request.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048 bytes
 *           as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to 38
 *           digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of binary
 *           attributes.
 *       * `ConsumedCapacityUnits` &mdash; (`Float`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method query(params, callback)
 *   Calls the Query API operation.
 *   @param params [Object]
 *     * `TableName` &mdash; **required** &mdash; (`String`) The name of
 *       the table in which you want to query. Allowed characters are
 *       a-z, A-Z, 0-9, _ (underscore), - (hyphen) and . (period).
 *     * `AttributesToGet` &mdash; (`Array<String>`)
 *     * `Limit` &mdash; (`Integer`) The maximum number of items to
 *       return. If Amazon DynamoDB hits this limit while querying the
 *       table, it stops the query and returns the matching values up to
 *       the limit, and a LastEvaluatedKey to apply in a subsequent
 *       operation to continue the query. Also, if the result set size
 *       exceeds 1MB before Amazon DynamoDB hits this limit, it stops the
 *       query and returns the matching values, and a LastEvaluatedKey to
 *       apply in a subsequent operation to continue the query.
 *     * `ConsistentRead` &mdash; (`Boolean`)
 *     * `Count` &mdash; (`Boolean`) If set to true, Amazon DynamoDB
 *       returns a total number of items that match the query parameters,
 *       instead of a list of the matching items and their attributes. Do
 *       not set Count to true while providing a list of AttributesToGet,
 *       otherwise Amazon DynamoDB returns a validation error.
 *     * `HashKeyValue` &mdash; **required** &mdash; (`Object`) Attribute
 *       value of the hash component of the composite primary key.
 *       * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *         encoding. The maximum size is limited by the size of the
 *         primary key (1024 bytes as a range part of a key or 2048 bytes
 *         as a single part hash key) or the item size (64k).
 *       * `N` &mdash; (`String`) Numbers are positive or negative
 *         exact-value decimals and integers. A number can have up to 38
 *         digits precision and can be between 10^-128 to 10^+126.
 *       * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *         sequences of unsigned bytes.
 *       * `SS` &mdash; (`Array<String>`) A set of strings.
 *       * `NS` &mdash; (`Array<String>`) A set of numbers.
 *       * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of binary
 *         attributes.
 *     * `RangeKeyCondition` &mdash; (`Object`) A container for the
 *       attribute values and comparison operators to use for the query.
 *       * `AttributeValueList` &mdash; (`Array<Object>`)
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *       * `ComparisonOperator` &mdash; **required** &mdash; (`String`)
 *     * `ScanIndexForward` &mdash; (`Boolean`) Specifies forward or
 *       backward traversal of the index. Amazon DynamoDB returns results
 *       reflecting the requested order, determined by the range key. The
 *       default value is true (forward).
 *     * `ExclusiveStartKey` &mdash; (`Object`) Primary key of the item
 *       from which to continue an earlier query. An earlier query might
 *       provide this value as the LastEvaluatedKey if that query
 *       operation was interrupted before completing the query; either
 *       because of the result set size or the Limit parameter. The
 *       LastEvaluatedKey can be passed back in a new query request to
 *       continue the operation from that point.
 *       * `HashKeyElement` &mdash; **required** &mdash; (`Object`) A
 *         hash key element is treated as the primary key, and can be a
 *         string or a number. Single attribute primary keys have one
 *         index value. The value can be String, Number, StringSet,
 *         NumberSet.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *       * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
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
 *       * `Items` &mdash; (`Array<Object<Object>>`)
 *       * `Count` &mdash; (`Integer`) Number of items in the response.
 *       * `LastEvaluatedKey` &mdash; (`Object`) Primary key of the item
 *         where the query operation stopped, inclusive of the previous
 *         result set. Use this value to start a new operation excluding
 *         this value in the new request. The LastEvaluatedKey is null when
 *         the entire query result set is complete (i.e. the operation
 *         processed the "last page").
 *         * `HashKeyElement` &mdash; (`Object`) A hash key element is
 *           treated as the primary key, and can be a string or a number.
 *           Single attribute primary keys have one index value. The value
 *           can be String, Number, StringSet, NumberSet.
 *           * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *             encoding. The maximum size is limited by the size of the
 *             primary key (1024 bytes as a range part of a key or 2048
 *             bytes as a single part hash key) or the item size (64k).
 *           * `N` &mdash; (`String`) Numbers are positive or negative
 *             exact-value decimals and integers. A number can have up to
 *             38 digits precision and can be between 10^-128 to 10^+126.
 *           * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *             sequences of unsigned bytes.
 *           * `SS` &mdash; (`Array<String>`) A set of strings.
 *           * `NS` &mdash; (`Array<String>`) A set of numbers.
 *           * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *             binary attributes.
 *         * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *           treated as a secondary key (used in conjunction with the
 *           primary key), and can be a string or a number, and is only
 *           used for hash-and-range primary keys. The value can be String,
 *           Number, StringSet, NumberSet.
 *           * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *             encoding. The maximum size is limited by the size of the
 *             primary key (1024 bytes as a range part of a key or 2048
 *             bytes as a single part hash key) or the item size (64k).
 *           * `N` &mdash; (`String`) Numbers are positive or negative
 *             exact-value decimals and integers. A number can have up to
 *             38 digits precision and can be between 10^-128 to 10^+126.
 *           * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *             sequences of unsigned bytes.
 *           * `SS` &mdash; (`Array<String>`) A set of strings.
 *           * `NS` &mdash; (`Array<String>`) A set of numbers.
 *           * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *             binary attributes.
 *       * `ConsumedCapacityUnits` &mdash; (`Float`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method scan(params, callback)
 *   Calls the Scan API operation.
 *   @param params [Object]
 *     * `TableName` &mdash; **required** &mdash; (`String`) The name of
 *       the table in which you want to scan. Allowed characters are a-z,
 *       A-Z, 0-9, _ (underscore), - (hyphen) and . (period).
 *     * `AttributesToGet` &mdash; (`Array<String>`)
 *     * `Limit` &mdash; (`Integer`) The maximum number of items to
 *       return. If Amazon DynamoDB hits this limit while scanning the
 *       table, it stops the scan and returns the matching values up to
 *       the limit, and a LastEvaluatedKey to apply in a subsequent
 *       operation to continue the scan. Also, if the scanned data set
 *       size exceeds 1 MB before Amazon DynamoDB hits this limit, it
 *       stops the scan and returns the matching values up to the limit,
 *       and a LastEvaluatedKey to apply in a subsequent operation to
 *       continue the scan.
 *     * `Count` &mdash; (`Boolean`) If set to true, Amazon DynamoDB
 *       returns a total number of items for the Scan operation, even if
 *       the operation has no matching items for the assigned filter. Do
 *       not set Count to true while providing a list of AttributesToGet,
 *       otherwise Amazon DynamoDB returns a validation error.
 *     * `ScanFilter` &mdash; (`Object<Object>`) Evaluates the scan
 *       results and returns only the desired values.
 *       * `AttributeValueList` &mdash; (`Array<Object>`)
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *       * `ComparisonOperator` &mdash; **required** &mdash; (`String`)
 *     * `ExclusiveStartKey` &mdash; (`Object`) Primary key of the item
 *       from which to continue an earlier scan. An earlier scan might
 *       provide this value if that scan operation was interrupted before
 *       scanning the entire table; either because of the result set size
 *       or the Limit parameter. The LastEvaluatedKey can be passed back
 *       in a new scan request to continue the operation from that point.
 *       * `HashKeyElement` &mdash; **required** &mdash; (`Object`) A
 *         hash key element is treated as the primary key, and can be a
 *         string or a number. Single attribute primary keys have one
 *         index value. The value can be String, Number, StringSet,
 *         NumberSet.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *       * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
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
 *       * `Items` &mdash; (`Array<Object<Object>>`)
 *       * `Count` &mdash; (`Integer`) Number of items in the response.
 *       * `ScannedCount` &mdash; (`Integer`) Number of items in the
 *         complete scan before any filters are applied. A high
 *         ScannedCount value with few, or no, Count results indicates an
 *         inefficient Scan operation.
 *       * `LastEvaluatedKey` &mdash; (`Object`) Primary key of the item
 *         where the scan operation stopped. Provide this value in a
 *         subsequent scan operation to continue the operation from that
 *         point. The LastEvaluatedKey is null when the entire scan result
 *         set is complete (i.e. the operation processed the "last page").
 *         * `HashKeyElement` &mdash; (`Object`) A hash key element is
 *           treated as the primary key, and can be a string or a number.
 *           Single attribute primary keys have one index value. The value
 *           can be String, Number, StringSet, NumberSet.
 *           * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *             encoding. The maximum size is limited by the size of the
 *             primary key (1024 bytes as a range part of a key or 2048
 *             bytes as a single part hash key) or the item size (64k).
 *           * `N` &mdash; (`String`) Numbers are positive or negative
 *             exact-value decimals and integers. A number can have up to
 *             38 digits precision and can be between 10^-128 to 10^+126.
 *           * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *             sequences of unsigned bytes.
 *           * `SS` &mdash; (`Array<String>`) A set of strings.
 *           * `NS` &mdash; (`Array<String>`) A set of numbers.
 *           * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *             binary attributes.
 *         * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *           treated as a secondary key (used in conjunction with the
 *           primary key), and can be a string or a number, and is only
 *           used for hash-and-range primary keys. The value can be String,
 *           Number, StringSet, NumberSet.
 *           * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *             encoding. The maximum size is limited by the size of the
 *             primary key (1024 bytes as a range part of a key or 2048
 *             bytes as a single part hash key) or the item size (64k).
 *           * `N` &mdash; (`String`) Numbers are positive or negative
 *             exact-value decimals and integers. A number can have up to
 *             38 digits precision and can be between 10^-128 to 10^+126.
 *           * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *             sequences of unsigned bytes.
 *           * `SS` &mdash; (`Array<String>`) A set of strings.
 *           * `NS` &mdash; (`Array<String>`) A set of numbers.
 *           * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *             binary attributes.
 *       * `ConsumedCapacityUnits` &mdash; (`Float`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateItem(params, callback)
 *   Calls the UpdateItem API operation.
 *   @param params [Object]
 *     * `TableName` &mdash; **required** &mdash; (`String`) The name of
 *       the table in which you want to update an item. Allowed
 *       characters are a-z, A-Z, 0-9, _ (underscore), - (hyphen) and .
 *       (period).
 *     * `Key` &mdash; **required** &mdash; (`Object`)
 *       * `HashKeyElement` &mdash; **required** &mdash; (`Object`) A
 *         hash key element is treated as the primary key, and can be a
 *         string or a number. Single attribute primary keys have one
 *         index value. The value can be String, Number, StringSet,
 *         NumberSet.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *       * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *     * `AttributeUpdates` &mdash; **required** &mdash;
 *       (`Object<Object>`)
 *       * `Value` &mdash; (`Object`)
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *       * `Action` &mdash; (`String`)
 *     * `Expected` &mdash; (`Object<Object>`)
 *       * `Value` &mdash; (`Object`) Specify whether or not a value
 *         already exists and has a specific content for the attribute
 *         name-value pair.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of
 *           binary attributes.
 *       * `Exists` &mdash; (`Boolean`) Specify whether or not a value
 *         already exists for the attribute name-value pair.
 *     * `ReturnValues` &mdash; (`String`)
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
 *       * `Attributes` &mdash; (`Object<Object>`) A map of attribute
 *         name-value pairs, but only if the ReturnValues parameter is
 *         specified as something other than NONE in the request.
 *         * `S` &mdash; (`String`) Strings are Unicode with UTF-8 binary
 *           encoding. The maximum size is limited by the size of the
 *           primary key (1024 bytes as a range part of a key or 2048 bytes
 *           as a single part hash key) or the item size (64k).
 *         * `N` &mdash; (`String`) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to 38
 *           digits precision and can be between 10^-128 to 10^+126.
 *         * `B` &mdash; (`Base64 Encoded String`) Binary attributes are
 *           sequences of unsigned bytes.
 *         * `SS` &mdash; (`Array<String>`) A set of strings.
 *         * `NS` &mdash; (`Array<String>`) A set of numbers.
 *         * `BS` &mdash; (`Array<Base64 Encoded String>`) A set of binary
 *           attributes.
 *       * `ConsumedCapacityUnits` &mdash; (`Float`)
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateTable(params, callback)
 *   Calls the UpdateTable API operation.
 *   @param params [Object]
 *     * `TableName` &mdash; **required** &mdash; (`String`) The name of
 *       the table you want to update. Allowed characters are a-z, A-Z,
 *       0-9, _ (underscore), - (hyphen) and . (period).
 *     * `ProvisionedThroughput` &mdash; **required** &mdash; (`Object`)
 *       * `ReadCapacityUnits` &mdash; **required** &mdash; (`Integer`)
 *         ReadCapacityUnits are in terms of strictly consistent reads,
 *         assuming items of 1k. 2k items require twice the
 *         ReadCapacityUnits. Eventually-consistent reads only require
 *         half the ReadCapacityUnits of stirctly consistent reads.
 *       * `WriteCapacityUnits` &mdash; **required** &mdash; (`Integer`)
 *         WriteCapacityUnits are in terms of strictly consistent reads,
 *         assuming items of 1k. 2k items require twice the
 *         WriteCapacityUnits.
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
 *       * `TableDescription` &mdash; (`Object`)
 *         * `TableName` &mdash; (`String`) The name of the table being
 *           described.
 *         * `KeySchema` &mdash; (`Object`)
 *           * `HashKeyElement` &mdash; (`Object`) A hash key element is
 *             treated as the primary key, and can be a string or a number.
 *             Single attribute primary keys have one index value. The
 *             value can be String, Number, StringSet, NumberSet.
 *             * `AttributeName` &mdash; (`String`) The AttributeName of
 *               the KeySchemaElement.
 *             * `AttributeType` &mdash; (`String`) The AttributeType of
 *               the KeySchemaElement which can be a String or a Number.
 *           * `RangeKeyElement` &mdash; (`Object`) A range key element is
 *             treated as a secondary key (used in conjunction with the
 *             primary key), and can be a string or a number, and is only
 *             used for hash-and-range primary keys. The value can be
 *             String, Number, StringSet, NumberSet.
 *             * `AttributeName` &mdash; (`String`) The AttributeName of
 *               the KeySchemaElement.
 *             * `AttributeType` &mdash; (`String`) The AttributeType of
 *               the KeySchemaElement which can be a String or a Number.
 *         * `TableStatus` &mdash; (`String`)
 *         * `CreationDateTime` &mdash; (`Date`)
 *         * `ProvisionedThroughput` &mdash; (`Object`)
 *           * `LastIncreaseDateTime` &mdash; (`Date`)
 *           * `LastDecreaseDateTime` &mdash; (`Date`)
 *           * `ReadCapacityUnits` &mdash; (`Integer`)
 *           * `WriteCapacityUnits` &mdash; (`Integer`)
 *         * `TableSizeBytes` &mdash; (`Integer`)
 *         * `ItemCount` &mdash; (`Integer`)
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
AWS.DynamoDB.Client = inherit({});
