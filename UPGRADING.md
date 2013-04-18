# Upgrading Notes

## v0.9.7-pre.8 to v0.9.8-pre.9

### `AWS.Request.client` renamed to `AWS.Request.service`

This is a backward incompatible change that is scoped to the `AWS.Request`
class. If you use this propertry, you can upgrade with the following change: 

`request.client.someProperty` to `request.service.someProperty`

### `.Client` and `.client` properties deprecated:

`SERVICE.Client` and `service.client` properties remain for
backward-compatibility, but are now **deprecated** and no longer documented.
They may be removed in a 1.0 release. To migrate these properties, change:

`new AWS.S3.Client(...)` to `new AWS.S3(...)`

and/or:

`s3.client.listObjects(...)` to `s3.listObjects(...)`

### New DynamoDB API version

Version 0.9.8-pre.9 of the AWS SDK for Node.js includes a new API version
(2012-08-10) that contains backward-incompatible changes from the previous API
version (2011-12-05). By default, the SDK will load the **latest** available
API version for a service.

#### Migrating operations

In general, the API changes mostly affect the way you create and get items
from a table, however other operations are also affected. For a more in-depth
look at the new API, please see the
[DynamoDB API reference](http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/API.html).

##### Creating tables

Creating a table changes from passing these parameters (with `id` as the string
hash key):

```js
db.createTable({
  TableName: 'myTable',
  KeySchema: {
    HashKeyElement: { AttributeName: 'id', AttributeType: 'S' }
  },
  ...
}, function() { ... });
```

Into the following:

```js
db.createTable({
  TableName: 'myTable',
  AttributeDefinitions: [
    { AttributeName: 'id', AttributeType: 'S' }
  ],
  KeySchema:[
    { AttributeName: 'id', KeyType: 'HASH' }
  ],
  ...
}, function() { ... });
```

##### Getting items

For the `getItem` operation, the arguments mostly change by dropping the
`HashKeyElement` and `RangeKeyElement` arguments, instead replacing them with
the actual hash key name in the schema. For example, the following getItem
call:

```js
db.getItem({TableName: 'myTable', Key: {HashKeyElement: {S: key}}}, ...);
```

Turns into this, where `id` is our hash key:

```js
db.getItem({TableName: 'myTable', Key: {id: {S: key}}}, ...);
```

Output from these requests will similarly drop `HashKeyElement` parameters
from output, replacing with the actual hash key name.

#### Locking into the 2011-12-05 API

If you want to continue using the DynamoDB 2011-12-05 API, you can lock your
API version in your global configuration with `apiVersions`, or directly when
constructing a service object with the `apiVersion` option:

```js
// Locking DynamoDB globally in AWS.config
AWS.config.apiVersions = {
  dynamodb: '2011-12-05'
};

// Directly on a service object
var db = new AWS.DynamoDB({apiVersion: '2011-12-05'});
```

The `apiVersions` option can also be loaded from an external JSON configuration
file with `AWS.config.loadFromPath()`:

```js
{
  "region": "us-west-2",
  "accessKeyId": "<YOUR_ACCESS_KEY_ID>",
  "secretAccessKey": "<SECRET>",
  "apiVersions": {
    "dynamodb": "2011-12-05"
  }
}
```

This file can be loaded with:

```js
AWS.config.loadFromPath('path/to/config.json');
```
