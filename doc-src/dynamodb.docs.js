/**
 * Copyright 2011-2012 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
 * @!method batchGetItem(params, options)
 *   Retrieves the attributes for multiple items from multiple tables
 *   using their primary keys.
 *   @param [Object] params
 *     * +RequestItems+ - (*required*, <tt>Object<Object></tt>)
 *       * +Keys+ - (*required*, <tt>Array<Object></tt>)
 *         * +HashKeyElement+ - (*required*, <tt>Object</tt>) A hash key
 *           element is treated as the primary key, and can be a string
 *           or a number. Single attribute primary keys have one index
 *           value. The value can be String, Number, StringSet,
 *           NumberSet.
 *           * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *             binary encoding. The maximum size is limited by the size
 *             of the primary key (1024 bytes as a range part of a key or
 *             2048 bytes as a single part hash key) or the item size
 *             (64k).
 *           * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *             exact-value decimals and integers. A number can have up to
 *             38 digits precision and can be between 10^-128 to 10^+126.
 *           * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *             sequences of unsigned bytes.
 *           * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *           * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *           * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of
 *             binary attributes.
 *         * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *           treated as a secondary key (used in conjunction with the
 *           primary key), and can be a string or a number, and is only
 *           used for hash-and-range primary keys. The value can be
 *           String, Number, StringSet, NumberSet.
 *           * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *             binary encoding. The maximum size is limited by the size
 *             of the primary key (1024 bytes as a range part of a key or
 *             2048 bytes as a single part hash key) or the item size
 *             (64k).
 *           * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *             exact-value decimals and integers. A number can have up to
 *             38 digits precision and can be between 10^-128 to 10^+126.
 *           * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *             sequences of unsigned bytes.
 *           * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *           * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *           * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of
 *             binary attributes.
 *       * +AttributesToGet+ - (<tt>Array<String></tt>)
 *       * +ConsistentRead+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Responses+ - (<tt>Object<Object></tt>)
 *       * +Items+ - (<tt>Array<Object<Object>></tt>)
 *       * +ConsumedCapacityUnits+ - (<tt>Float</tt>)
 *     * +UnprocessedKeys+ - (<tt>Object<Object></tt>) Contains a map of
 *       tables and their respective keys that were not processed with
 *       the current response, possibly due to reaching a limit on the
 *       response size. The UnprocessedKeys value is in the same form as
 *       a RequestItems parameter (so the value can be provided directly
 *       to a subsequent BatchGetItem operation). For more information,
 *       see the above RequestItems parameter.
 *       * +Keys+ - (<tt>Array<Object></tt>)
 *         * +HashKeyElement+ - (<tt>Object</tt>) A hash key
 *           element is treated as the primary key, and can be a string
 *           or a number. Single attribute primary keys have one index
 *           value. The value can be String, Number, StringSet,
 *           NumberSet.
 *           * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *             binary encoding. The maximum size is limited by the size
 *             of the primary key (1024 bytes as a range part of a key or
 *             2048 bytes as a single part hash key) or the item size
 *             (64k).
 *           * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *             exact-value decimals and integers. A number can have up to
 *             38 digits precision and can be between 10^-128 to 10^+126.
 *           * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *             sequences of unsigned bytes.
 *           * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *           * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *           * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of
 *             binary attributes.
 *         * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *           treated as a secondary key (used in conjunction with the
 *           primary key), and can be a string or a number, and is only
 *           used for hash-and-range primary keys. The value can be
 *           String, Number, StringSet, NumberSet.
 *           * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *             binary encoding. The maximum size is limited by the size
 *             of the primary key (1024 bytes as a range part of a key or
 *             2048 bytes as a single part hash key) or the item size
 *             (64k).
 *           * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *             exact-value decimals and integers. A number can have up to
 *             38 digits precision and can be between 10^-128 to 10^+126.
 *           * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *             sequences of unsigned bytes.
 *           * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *           * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *           * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of
 *             binary attributes.
 *       * +AttributesToGet+ - (<tt>Array<String></tt>)
 *       * +ConsistentRead+ - (<tt>Boolean</tt>)
 *
 * @!method batchWriteItem(params, options)
 *   Allows to execute a batch of Put and/or Delete Requests for many
 *   tables in a single call. A total of 25 requests are allowed.
 *   @param [Object] params
 *     * +RequestItems+ - (*required*, <tt>Object<Array<Object>></tt>) A
 *       map of table name to list-of-write-requests. Used as input to
 *       the BatchWriteItem API call
 *       * +PutRequest+ - (<tt>Object</tt>)
 *         * +Item+ - (*required*, <tt>Object<Object></tt>) The item to
 *           put
 *           * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *             binary encoding. The maximum size is limited by the size
 *             of the primary key (1024 bytes as a range part of a key or
 *             2048 bytes as a single part hash key) or the item size
 *             (64k).
 *           * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *             exact-value decimals and integers. A number can have up to
 *             38 digits precision and can be between 10^-128 to 10^+126.
 *           * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *             sequences of unsigned bytes.
 *           * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *           * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *           * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of
 *             binary attributes.
 *       * +DeleteRequest+ - (<tt>Object</tt>)
 *         * +Key+ - (*required*, <tt>Object</tt>) The item's key to be
 *           delete
 *           * +HashKeyElement+ - (*required*, <tt>Object</tt>) A hash
 *             key element is treated as the primary key, and can be a
 *             string or a number. Single attribute primary keys have one
 *             index value. The value can be String, Number, StringSet,
 *             NumberSet.
 *             * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *               binary encoding. The maximum size is limited by the size
 *               of the primary key (1024 bytes as a range part of a key
 *               or 2048 bytes as a single part hash key) or the item
 *               size (64k).
 *             * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *               exact-value decimals and integers. A number can have up
 *               to 38 digits precision and can be between 10^-128 to
 *               10^+126.
 *             * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes
 *               are sequences of unsigned bytes.
 *             * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *             * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *             * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of
 *               binary attributes.
 *           * +RangeKeyElement+ - (<tt>Object</tt>) A range key element
 *             is treated as a secondary key (used in conjunction with
 *             the primary key), and can be a string or a number, and is
 *             only used for hash-and-range primary keys. The value can
 *             be String, Number, StringSet, NumberSet.
 *             * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *               binary encoding. The maximum size is limited by the size
 *               of the primary key (1024 bytes as a range part of a key
 *               or 2048 bytes as a single part hash key) or the item
 *               size (64k).
 *             * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *               exact-value decimals and integers. A number can have up
 *               to 38 digits precision and can be between 10^-128 to
 *               10^+126.
 *             * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes
 *               are sequences of unsigned bytes.
 *             * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *             * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *             * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of
 *               binary attributes.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Responses+ - (<tt>Object<Object></tt>) The response object as a
 *       result of BatchWriteItem call. This is essentially a map of
 *       table name to ConsumedCapacityUnits.
 *       * +ConsumedCapacityUnits+ - (<tt>Float</tt>)
 *     * +UnprocessedItems+ - (<tt>Object<Array<Object>></tt>) The Items
 *       which we could not successfully process in a BatchWriteItem call
 *       is returned as UnprocessedItems
 *       * +PutRequest+ - (<tt>Object</tt>)
 *         * +Item+ - (<tt>Object<Object></tt>) The item to
 *           put
 *           * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *             binary encoding. The maximum size is limited by the size
 *             of the primary key (1024 bytes as a range part of a key or
 *             2048 bytes as a single part hash key) or the item size
 *             (64k).
 *           * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *             exact-value decimals and integers. A number can have up to
 *             38 digits precision and can be between 10^-128 to 10^+126.
 *           * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *             sequences of unsigned bytes.
 *           * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *           * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *           * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of
 *             binary attributes.
 *       * +DeleteRequest+ - (<tt>Object</tt>)
 *         * +Key+ - (<tt>Object</tt>) The item's key to be
 *           delete
 *           * +HashKeyElement+ - (<tt>Object</tt>) A hash
 *             key element is treated as the primary key, and can be a
 *             string or a number. Single attribute primary keys have one
 *             index value. The value can be String, Number, StringSet,
 *             NumberSet.
 *             * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *               binary encoding. The maximum size is limited by the size
 *               of the primary key (1024 bytes as a range part of a key
 *               or 2048 bytes as a single part hash key) or the item
 *               size (64k).
 *             * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *               exact-value decimals and integers. A number can have up
 *               to 38 digits precision and can be between 10^-128 to
 *               10^+126.
 *             * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes
 *               are sequences of unsigned bytes.
 *             * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *             * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *             * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of
 *               binary attributes.
 *           * +RangeKeyElement+ - (<tt>Object</tt>) A range key element
 *             is treated as a secondary key (used in conjunction with
 *             the primary key), and can be a string or a number, and is
 *             only used for hash-and-range primary keys. The value can
 *             be String, Number, StringSet, NumberSet.
 *             * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *               binary encoding. The maximum size is limited by the size
 *               of the primary key (1024 bytes as a range part of a key
 *               or 2048 bytes as a single part hash key) or the item
 *               size (64k).
 *             * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *               exact-value decimals and integers. A number can have up
 *               to 38 digits precision and can be between 10^-128 to
 *               10^+126.
 *             * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes
 *               are sequences of unsigned bytes.
 *             * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *             * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *             * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of
 *               binary attributes.
 *
 * @!method createTable(params, options)
 *   Adds a new table to your account.
 *   @param [Object] params
 *     * +TableName+ - (*required*, <tt>String</tt>) The name of the
 *       table you want to create. Allowed characters are a-z, A-Z, 0-9,
 *       _ (underscore), - (hyphen) and . (period).
 *     * +KeySchema+ - (*required*, <tt>Object</tt>)
 *       * +HashKeyElement+ - (*required*, <tt>Object</tt>) A hash key
 *         element is treated as the primary key, and can be a string or
 *         a number. Single attribute primary keys have one index value.
 *         The value can be String, Number, StringSet, NumberSet.
 *         * +AttributeName+ - (*required*, <tt>String</tt>) The
 *           AttributeName of the KeySchemaElement.
 *         * +AttributeType+ - (*required*, <tt>String</tt>) The
 *           AttributeType of the KeySchemaElement which can be a String
 *           or a Number.
 *       * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * +AttributeName+ - (*required*, <tt>String</tt>) The
 *           AttributeName of the KeySchemaElement.
 *         * +AttributeType+ - (*required*, <tt>String</tt>) The
 *           AttributeType of the KeySchemaElement which can be a String
 *           or a Number.
 *     * +ProvisionedThroughput+ - (*required*, <tt>Object</tt>)
 *       * +ReadCapacityUnits+ - (*required*, <tt>Integer</tt>)
 *         ReadCapacityUnits are in terms of strictly consistent reads,
 *         assuming items of 1k. 2k items require twice the
 *         ReadCapacityUnits. Eventually-consistent reads only require
 *         half the ReadCapacityUnits of stirctly consistent reads.
 *       * +WriteCapacityUnits+ - (*required*, <tt>Integer</tt>)
 *         WriteCapacityUnits are in terms of strictly consistent reads,
 *         assuming items of 1k. 2k items require twice the
 *         WriteCapacityUnits.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +TableDescription+ - (<tt>Object</tt>)
 *       * +TableName+ - (<tt>String</tt>) The name of the table being
 *         described.
 *       * +KeySchema+ - (<tt>Object</tt>)
 *         * +HashKeyElement+ - (<tt>Object</tt>) A hash key
 *           element is treated as the primary key, and can be a string
 *           or a number. Single attribute primary keys have one index
 *           value. The value can be String, Number, StringSet,
 *           NumberSet.
 *           * +AttributeName+ - (<tt>String</tt>) The
 *             AttributeName of the KeySchemaElement.
 *           * +AttributeType+ - (<tt>String</tt>) The
 *             AttributeType of the KeySchemaElement which can be a
 *             String or a Number.
 *         * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *           treated as a secondary key (used in conjunction with the
 *           primary key), and can be a string or a number, and is only
 *           used for hash-and-range primary keys. The value can be
 *           String, Number, StringSet, NumberSet.
 *           * +AttributeName+ - (<tt>String</tt>) The
 *             AttributeName of the KeySchemaElement.
 *           * +AttributeType+ - (<tt>String</tt>) The
 *             AttributeType of the KeySchemaElement which can be a
 *             String or a Number.
 *       * +TableStatus+ - (<tt>String</tt>)
 *       * +CreationDateTime+ - (<tt>Date</tt>)
 *       * +ProvisionedThroughput+ - (<tt>Object</tt>)
 *         * +LastIncreaseDateTime+ - (<tt>Date</tt>)
 *         * +LastDecreaseDateTime+ - (<tt>Date</tt>)
 *         * +ReadCapacityUnits+ - (<tt>Integer</tt>)
 *         * +WriteCapacityUnits+ - (<tt>Integer</tt>)
 *       * +TableSizeBytes+ - (<tt>Integer</tt>)
 *       * +ItemCount+ - (<tt>Integer</tt>)
 *
 * @!method deleteItem(params, options)
 *   Deletes a single item in a table by primary key.
 *   @param [Object] params
 *     * +TableName+ - (*required*, <tt>String</tt>) The name of the
 *       table in which you want to delete an item. Allowed characters
 *       are a-z, A-Z, 0-9, _ (underscore), - (hyphen) and . (period).
 *     * +Key+ - (*required*, <tt>Object</tt>)
 *       * +HashKeyElement+ - (*required*, <tt>Object</tt>) A hash key
 *         element is treated as the primary key, and can be a string or
 *         a number. Single attribute primary keys have one index value.
 *         The value can be String, Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *       * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *     * +Expected+ - (<tt>Object<Object></tt>)
 *       * +Value+ - (<tt>Object</tt>) Specify whether or not a value
 *         already exists and has a specific content for the attribute
 *         name-value pair.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *       * +Exists+ - (<tt>Boolean</tt>) Specify whether or not a value
 *         already exists for the attribute name-value pair.
 *     * +ReturnValues+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Attributes+ - (<tt>Object<Object></tt>) If the ReturnValues
 *       parameter is provided as ALL_OLD in the request, Amazon DynamoDB
 *       returns an array of attribute name-value pairs (essentially, the
 *       deleted item). Otherwise, the response contains an empty set.
 *       * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8 binary
 *         encoding. The maximum size is limited by the size of the
 *         primary key (1024 bytes as a range part of a key or 2048 bytes
 *         as a single part hash key) or the item size (64k).
 *       * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *         exact-value decimals and integers. A number can have up to 38
 *         digits precision and can be between 10^-128 to 10^+126.
 *       * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *         sequences of unsigned bytes.
 *       * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *       * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *       * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *         attributes.
 *     * +ConsumedCapacityUnits+ - (<tt>Float</tt>)
 *
 * @!method deleteTable(params, options)
 *   Deletes a table and all of its items.
 *   @param [Object] params
 *     * +TableName+ - (*required*, <tt>String</tt>) The name of the
 *       table you want to delete. Allowed characters are a-z, A-Z, 0-9,
 *       _ (underscore), - (hyphen) and . (period).
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +TableDescription+ - (<tt>Object</tt>)
 *       * +TableName+ - (<tt>String</tt>) The name of the table being
 *         described.
 *       * +KeySchema+ - (<tt>Object</tt>)
 *         * +HashKeyElement+ - (<tt>Object</tt>) A hash key
 *           element is treated as the primary key, and can be a string
 *           or a number. Single attribute primary keys have one index
 *           value. The value can be String, Number, StringSet,
 *           NumberSet.
 *           * +AttributeName+ - (<tt>String</tt>) The
 *             AttributeName of the KeySchemaElement.
 *           * +AttributeType+ - (<tt>String</tt>) The
 *             AttributeType of the KeySchemaElement which can be a
 *             String or a Number.
 *         * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *           treated as a secondary key (used in conjunction with the
 *           primary key), and can be a string or a number, and is only
 *           used for hash-and-range primary keys. The value can be
 *           String, Number, StringSet, NumberSet.
 *           * +AttributeName+ - (<tt>String</tt>) The
 *             AttributeName of the KeySchemaElement.
 *           * +AttributeType+ - (<tt>String</tt>) The
 *             AttributeType of the KeySchemaElement which can be a
 *             String or a Number.
 *       * +TableStatus+ - (<tt>String</tt>)
 *       * +CreationDateTime+ - (<tt>Date</tt>)
 *       * +ProvisionedThroughput+ - (<tt>Object</tt>)
 *         * +LastIncreaseDateTime+ - (<tt>Date</tt>)
 *         * +LastDecreaseDateTime+ - (<tt>Date</tt>)
 *         * +ReadCapacityUnits+ - (<tt>Integer</tt>)
 *         * +WriteCapacityUnits+ - (<tt>Integer</tt>)
 *       * +TableSizeBytes+ - (<tt>Integer</tt>)
 *       * +ItemCount+ - (<tt>Integer</tt>)
 *
 * @!method describeTable(params, options)
 *   Retrieves information about the table, including the current status
 *   of the table, the primary key schema and when the table was created.
 *   @param [Object] params
 *     * +TableName+ - (*required*, <tt>String</tt>) The name of the
 *       table you want to describe. Allowed characters are a-z, A-Z,
 *       0-9, _ (underscore), - (hyphen) and . (period).
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Table+ - (<tt>Object</tt>)
 *       * +TableName+ - (<tt>String</tt>) The name of the table being
 *         described.
 *       * +KeySchema+ - (<tt>Object</tt>)
 *         * +HashKeyElement+ - (<tt>Object</tt>) A hash key
 *           element is treated as the primary key, and can be a string
 *           or a number. Single attribute primary keys have one index
 *           value. The value can be String, Number, StringSet,
 *           NumberSet.
 *           * +AttributeName+ - (<tt>String</tt>) The
 *             AttributeName of the KeySchemaElement.
 *           * +AttributeType+ - (<tt>String</tt>) The
 *             AttributeType of the KeySchemaElement which can be a
 *             String or a Number.
 *         * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *           treated as a secondary key (used in conjunction with the
 *           primary key), and can be a string or a number, and is only
 *           used for hash-and-range primary keys. The value can be
 *           String, Number, StringSet, NumberSet.
 *           * +AttributeName+ - (<tt>String</tt>) The
 *             AttributeName of the KeySchemaElement.
 *           * +AttributeType+ - (<tt>String</tt>) The
 *             AttributeType of the KeySchemaElement which can be a
 *             String or a Number.
 *       * +TableStatus+ - (<tt>String</tt>)
 *       * +CreationDateTime+ - (<tt>Date</tt>)
 *       * +ProvisionedThroughput+ - (<tt>Object</tt>)
 *         * +LastIncreaseDateTime+ - (<tt>Date</tt>)
 *         * +LastDecreaseDateTime+ - (<tt>Date</tt>)
 *         * +ReadCapacityUnits+ - (<tt>Integer</tt>)
 *         * +WriteCapacityUnits+ - (<tt>Integer</tt>)
 *       * +TableSizeBytes+ - (<tt>Integer</tt>)
 *       * +ItemCount+ - (<tt>Integer</tt>)
 *
 * @!method getItem(params, options)
 *   Retrieves a set of Attributes for an item that matches the primary
 *   key.
 *   @param [Object] params
 *     * +TableName+ - (*required*, <tt>String</tt>) The name of the
 *       table in which you want to get an item. Allowed characters are
 *       a-z, A-Z, 0-9, _ (underscore), - (hyphen) and . (period).
 *     * +Key+ - (*required*, <tt>Object</tt>)
 *       * +HashKeyElement+ - (*required*, <tt>Object</tt>) A hash key
 *         element is treated as the primary key, and can be a string or
 *         a number. Single attribute primary keys have one index value.
 *         The value can be String, Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *       * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *     * +AttributesToGet+ - (<tt>Array<String></tt>)
 *     * +ConsistentRead+ - (<tt>Boolean</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Item+ - (<tt>Object<Object></tt>) Contains the requested
 *       attributes.
 *       * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8 binary
 *         encoding. The maximum size is limited by the size of the
 *         primary key (1024 bytes as a range part of a key or 2048 bytes
 *         as a single part hash key) or the item size (64k).
 *       * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *         exact-value decimals and integers. A number can have up to 38
 *         digits precision and can be between 10^-128 to 10^+126.
 *       * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *         sequences of unsigned bytes.
 *       * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *       * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *       * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *         attributes.
 *     * +ConsumedCapacityUnits+ - (<tt>Float</tt>)
 *
 * @!method listTables(params, options)
 *   Retrieves a paginated list of table names created by the AWS Account
 *   of the caller in the AWS Region (e.g. us-east-1).
 *   @param [Object] params
 *     * +ExclusiveStartTableName+ - (<tt>String</tt>) The name of the
 *       table that starts the list. If you already ran a ListTables
 *       operation and received a LastEvaluatedTableName value in the
 *       response, use that value here to continue the list.
 *     * +Limit+ - (<tt>Integer</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +TableNames+ - (<tt>Array<String></tt>)
 *     * +LastEvaluatedTableName+ - (<tt>String</tt>) The name of the
 *       last table in the current list. Use this value as the
 *       ExclusiveStartTableName in a new request to continue the list
 *       until all the table names are returned. If this value is null,
 *       all table names have been returned.
 *
 * @!method putItem(params, options)
 *   Creates a new item, or replaces an old item with a new item
 *   (including all the attributes).
 *   @param [Object] params
 *     * +TableName+ - (*required*, <tt>String</tt>) The name of the
 *       table in which you want to put an item. Allowed characters are
 *       a-z, A-Z, 0-9, _ (underscore), - (hyphen) and . (period).
 *     * +Item+ - (*required*, <tt>Object<Object></tt>)
 *       * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8 binary
 *         encoding. The maximum size is limited by the size of the
 *         primary key (1024 bytes as a range part of a key or 2048 bytes
 *         as a single part hash key) or the item size (64k).
 *       * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *         exact-value decimals and integers. A number can have up to 38
 *         digits precision and can be between 10^-128 to 10^+126.
 *       * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *         sequences of unsigned bytes.
 *       * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *       * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *       * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *         attributes.
 *     * +Expected+ - (<tt>Object<Object></tt>)
 *       * +Value+ - (<tt>Object</tt>) Specify whether or not a value
 *         already exists and has a specific content for the attribute
 *         name-value pair.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *       * +Exists+ - (<tt>Boolean</tt>) Specify whether or not a value
 *         already exists for the attribute name-value pair.
 *     * +ReturnValues+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Attributes+ - (<tt>Object<Object></tt>) Attribute values before
 *       the put operation, but only if the ReturnValues parameter is
 *       specified as ALL_OLD in the request.
 *       * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8 binary
 *         encoding. The maximum size is limited by the size of the
 *         primary key (1024 bytes as a range part of a key or 2048 bytes
 *         as a single part hash key) or the item size (64k).
 *       * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *         exact-value decimals and integers. A number can have up to 38
 *         digits precision and can be between 10^-128 to 10^+126.
 *       * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *         sequences of unsigned bytes.
 *       * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *       * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *       * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *         attributes.
 *     * +ConsumedCapacityUnits+ - (<tt>Float</tt>)
 *
 * @!method query(params, options)
 *   Gets the values of one or more items and its attributes by primary
 *   key (composite primary key, only).
 *   @param [Object] params
 *     * +TableName+ - (*required*, <tt>String</tt>) The name of the
 *       table in which you want to query. Allowed characters are a-z,
 *       A-Z, 0-9, _ (underscore), - (hyphen) and . (period).
 *     * +AttributesToGet+ - (<tt>Array<String></tt>)
 *     * +Limit+ - (<tt>Integer</tt>) The maximum number of items to
 *       return. If Amazon DynamoDB hits this limit while querying the
 *       table, it stops the query and returns the matching values up to
 *       the limit, and a LastEvaluatedKey to apply in a subsequent
 *       operation to continue the query. Also, if the result set size
 *       exceeds 1MB before Amazon DynamoDB hits this limit, it stops the
 *       query and returns the matching values, and a LastEvaluatedKey to
 *       apply in a subsequent operation to continue the query.
 *     * +ConsistentRead+ - (<tt>Boolean</tt>)
 *     * +Count+ - (<tt>Boolean</tt>) If set to true, Amazon DynamoDB
 *       returns a total number of items that match the query parameters,
 *       instead of a list of the matching items and their attributes. Do
 *       not set Count to true while providing a list of AttributesToGet,
 *       otherwise Amazon DynamoDB returns a validation error.
 *     * +HashKeyValue+ - (*required*, <tt>Object</tt>) Attribute value
 *       of the hash component of the composite primary key.
 *       * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8 binary
 *         encoding. The maximum size is limited by the size of the
 *         primary key (1024 bytes as a range part of a key or 2048 bytes
 *         as a single part hash key) or the item size (64k).
 *       * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *         exact-value decimals and integers. A number can have up to 38
 *         digits precision and can be between 10^-128 to 10^+126.
 *       * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *         sequences of unsigned bytes.
 *       * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *       * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *       * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *         attributes.
 *     * +RangeKeyCondition+ - (<tt>Object</tt>) A container for the
 *       attribute values and comparison operators to use for the query.
 *       * +AttributeValueList+ - (<tt>Array<Object></tt>)
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *       * +ComparisonOperator+ - (*required*, <tt>String</tt>)
 *     * +ScanIndexForward+ - (<tt>Boolean</tt>) Specifies forward or
 *       backward traversal of the index. Amazon DynamoDB returns results
 *       reflecting the requested order, determined by the range key. The
 *       default value is true (forward).
 *     * +ExclusiveStartKey+ - (<tt>Object</tt>) Primary key of the item
 *       from which to continue an earlier query. An earlier query might
 *       provide this value as the LastEvaluatedKey if that query
 *       operation was interrupted before completing the query; either
 *       because of the result set size or the Limit parameter. The
 *       LastEvaluatedKey can be passed back in a new query request to
 *       continue the operation from that point.
 *       * +HashKeyElement+ - (*required*, <tt>Object</tt>) A hash key
 *         element is treated as the primary key, and can be a string or
 *         a number. Single attribute primary keys have one index value.
 *         The value can be String, Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *       * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Items+ - (<tt>Array<Object<Object>></tt>)
 *     * +Count+ - (<tt>Integer</tt>) Number of items in the response.
 *     * +LastEvaluatedKey+ - (<tt>Object</tt>) Primary key of the item
 *       where the query operation stopped, inclusive of the previous
 *       result set. Use this value to start a new operation excluding
 *       this value in the new request. The LastEvaluatedKey is null when
 *       the entire query result set is complete (i.e. the operation
 *       processed the "last page").
 *       * +HashKeyElement+ - (<tt>Object</tt>) A hash key
 *         element is treated as the primary key, and can be a string or
 *         a number. Single attribute primary keys have one index value.
 *         The value can be String, Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *       * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *     * +ConsumedCapacityUnits+ - (<tt>Float</tt>)
 *
 * @!method scan(params, options)
 *   Retrieves one or more items and its attributes by performing a full
 *   scan of a table.
 *   @param [Object] params
 *     * +TableName+ - (*required*, <tt>String</tt>) The name of the
 *       table in which you want to scan. Allowed characters are a-z,
 *       A-Z, 0-9, _ (underscore), - (hyphen) and . (period).
 *     * +AttributesToGet+ - (<tt>Array<String></tt>)
 *     * +Limit+ - (<tt>Integer</tt>) The maximum number of items to
 *       return. If Amazon DynamoDB hits this limit while scanning the
 *       table, it stops the scan and returns the matching values up to
 *       the limit, and a LastEvaluatedKey to apply in a subsequent
 *       operation to continue the scan. Also, if the scanned data set
 *       size exceeds 1 MB before Amazon DynamoDB hits this limit, it
 *       stops the scan and returns the matching values up to the limit,
 *       and a LastEvaluatedKey to apply in a subsequent operation to
 *       continue the scan.
 *     * +Count+ - (<tt>Boolean</tt>) If set to true, Amazon DynamoDB
 *       returns a total number of items for the Scan operation, even if
 *       the operation has no matching items for the assigned filter. Do
 *       not set Count to true while providing a list of AttributesToGet,
 *       otherwise Amazon DynamoDB returns a validation error.
 *     * +ScanFilter+ - (<tt>Object<Object></tt>) Evaluates the scan
 *       results and returns only the desired values.
 *       * +AttributeValueList+ - (<tt>Array<Object></tt>)
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *       * +ComparisonOperator+ - (*required*, <tt>String</tt>)
 *     * +ExclusiveStartKey+ - (<tt>Object</tt>) Primary key of the item
 *       from which to continue an earlier scan. An earlier scan might
 *       provide this value if that scan operation was interrupted before
 *       scanning the entire table; either because of the result set size
 *       or the Limit parameter. The LastEvaluatedKey can be passed back
 *       in a new scan request to continue the operation from that point.
 *       * +HashKeyElement+ - (*required*, <tt>Object</tt>) A hash key
 *         element is treated as the primary key, and can be a string or
 *         a number. Single attribute primary keys have one index value.
 *         The value can be String, Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *       * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Items+ - (<tt>Array<Object<Object>></tt>)
 *     * +Count+ - (<tt>Integer</tt>) Number of items in the response.
 *     * +ScannedCount+ - (<tt>Integer</tt>) Number of items in the
 *       complete scan before any filters are applied. A high
 *       ScannedCount value with few, or no, Count results indicates an
 *       inefficient Scan operation.
 *     * +LastEvaluatedKey+ - (<tt>Object</tt>) Primary key of the item
 *       where the scan operation stopped. Provide this value in a
 *       subsequent scan operation to continue the operation from that
 *       point. The LastEvaluatedKey is null when the entire scan result
 *       set is complete (i.e. the operation processed the "last page").
 *       * +HashKeyElement+ - (<tt>Object</tt>) A hash key
 *         element is treated as the primary key, and can be a string or
 *         a number. Single attribute primary keys have one index value.
 *         The value can be String, Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *       * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *     * +ConsumedCapacityUnits+ - (<tt>Float</tt>)
 *
 * @!method updateItem(params, options)
 *   Edits an existing item's attributes.
 *   @param [Object] params
 *     * +TableName+ - (*required*, <tt>String</tt>) The name of the
 *       table in which you want to update an item. Allowed characters
 *       are a-z, A-Z, 0-9, _ (underscore), - (hyphen) and . (period).
 *     * +Key+ - (*required*, <tt>Object</tt>)
 *       * +HashKeyElement+ - (*required*, <tt>Object</tt>) A hash key
 *         element is treated as the primary key, and can be a string or
 *         a number. Single attribute primary keys have one index value.
 *         The value can be String, Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *       * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *         treated as a secondary key (used in conjunction with the
 *         primary key), and can be a string or a number, and is only
 *         used for hash-and-range primary keys. The value can be String,
 *         Number, StringSet, NumberSet.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *     * +AttributeUpdates+ - (*required*, <tt>Object<Object></tt>)
 *       * +Value+ - (<tt>Object</tt>)
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *       * +Action+ - (<tt>String</tt>)
 *     * +Expected+ - (<tt>Object<Object></tt>)
 *       * +Value+ - (<tt>Object</tt>) Specify whether or not a value
 *         already exists and has a specific content for the attribute
 *         name-value pair.
 *         * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8
 *           binary encoding. The maximum size is limited by the size of
 *           the primary key (1024 bytes as a range part of a key or 2048
 *           bytes as a single part hash key) or the item size (64k).
 *         * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *           exact-value decimals and integers. A number can have up to
 *           38 digits precision and can be between 10^-128 to 10^+126.
 *         * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *           sequences of unsigned bytes.
 *         * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *         * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *         * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *           attributes.
 *       * +Exists+ - (<tt>Boolean</tt>) Specify whether or not a value
 *         already exists for the attribute name-value pair.
 *     * +ReturnValues+ - (<tt>String</tt>)
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +Attributes+ - (<tt>Object<Object></tt>) A map of attribute
 *       name-value pairs, but only if the ReturnValues parameter is
 *       specified as something other than NONE in the request.
 *       * +S+ - (<tt>String</tt>) Strings are Unicode with UTF-8 binary
 *         encoding. The maximum size is limited by the size of the
 *         primary key (1024 bytes as a range part of a key or 2048 bytes
 *         as a single part hash key) or the item size (64k).
 *       * +N+ - (<tt>String</tt>) Numbers are positive or negative
 *         exact-value decimals and integers. A number can have up to 38
 *         digits precision and can be between 10^-128 to 10^+126.
 *       * +B+ - (<tt>Base64 Encoded Data</tt>) Binary attributes are
 *         sequences of unsigned bytes.
 *       * +SS+ - (<tt>Array<String></tt>) A set of strings.
 *       * +NS+ - (<tt>Array<String></tt>) A set of numbers.
 *       * +BS+ - (<tt>Array<Base64 Encoded Data></tt>) A set of binary
 *         attributes.
 *     * +ConsumedCapacityUnits+ - (<tt>Float</tt>)
 *
 * @!method updateTable(params, options)
 *   Updates the provisioned throughput for the given table.
 *   @param [Object] params
 *     * +TableName+ - (*required*, <tt>String</tt>) The name of the
 *       table you want to update. Allowed characters are a-z, A-Z, 0-9,
 *       _ (underscore), - (hyphen) and . (period).
 *     * +ProvisionedThroughput+ - (*required*, <tt>Object</tt>)
 *       * +ReadCapacityUnits+ - (*required*, <tt>Integer</tt>)
 *         ReadCapacityUnits are in terms of strictly consistent reads,
 *         assuming items of 1k. 2k items require twice the
 *         ReadCapacityUnits. Eventually-consistent reads only require
 *         half the ReadCapacityUnits of stirctly consistent reads.
 *       * +WriteCapacityUnits+ - (*required*, <tt>Integer</tt>)
 *         WriteCapacityUnits are in terms of strictly consistent reads,
 *         assuming items of 1k. 2k items require twice the
 *         WriteCapacityUnits.
 *   @param [Object] options
 *   @return [AWS.AWSRequest] The +data+ property of the AWS.AWSResponse
 *     object that is passed to the registered callbacks has the
 *     following properties:
 *     * +TableDescription+ - (<tt>Object</tt>)
 *       * +TableName+ - (<tt>String</tt>) The name of the table being
 *         described.
 *       * +KeySchema+ - (<tt>Object</tt>)
 *         * +HashKeyElement+ - (<tt>Object</tt>) A hash key
 *           element is treated as the primary key, and can be a string
 *           or a number. Single attribute primary keys have one index
 *           value. The value can be String, Number, StringSet,
 *           NumberSet.
 *           * +AttributeName+ - (<tt>String</tt>) The
 *             AttributeName of the KeySchemaElement.
 *           * +AttributeType+ - (<tt>String</tt>) The
 *             AttributeType of the KeySchemaElement which can be a
 *             String or a Number.
 *         * +RangeKeyElement+ - (<tt>Object</tt>) A range key element is
 *           treated as a secondary key (used in conjunction with the
 *           primary key), and can be a string or a number, and is only
 *           used for hash-and-range primary keys. The value can be
 *           String, Number, StringSet, NumberSet.
 *           * +AttributeName+ - (<tt>String</tt>) The
 *             AttributeName of the KeySchemaElement.
 *           * +AttributeType+ - (<tt>String</tt>) The
 *             AttributeType of the KeySchemaElement which can be a
 *             String or a Number.
 *       * +TableStatus+ - (<tt>String</tt>)
 *       * +CreationDateTime+ - (<tt>Date</tt>)
 *       * +ProvisionedThroughput+ - (<tt>Object</tt>)
 *         * +LastIncreaseDateTime+ - (<tt>Date</tt>)
 *         * +LastDecreaseDateTime+ - (<tt>Date</tt>)
 *         * +ReadCapacityUnits+ - (<tt>Integer</tt>)
 *         * +WriteCapacityUnits+ - (<tt>Integer</tt>)
 *       * +TableSizeBytes+ - (<tt>Integer</tt>)
 *       * +ItemCount+ - (<tt>Integer</tt>)
 *
 */
AWS.DynamoDB.Client = inherit({});
