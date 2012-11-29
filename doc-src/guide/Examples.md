# Examples

All of these examples assume that the AWS library is required,
credentials are loaded via environment variables (`AWS_ACCESS_KEY_ID`
and `AWS_SECRET_ACCESS_KEY`), and region is set via 
`AWS.config.update({region: 'us-east-1'});`.

The common preamble code can be summarized as follows:

```js
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
```

## Simple Storage Service (S3)

### S3: List All of Your Buckets (listBuckets)

The following example lists all buckets associated with your AWS account:

```js
var s3 = new AWS.S3();
s3.listBuckets().done(function(resp) {
  for (var index in resp.data.Buckets) {
    var bucket = resp.data.Buckets[index];
    console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
  }
});
```

### S3: Create a New Bucket and Object (createBucket, putObject)

The following example puts the string 'Hello!' inside the
object 'myKey' of bucket 'myBucket':

```js
var s3 = new AWS.S3();
s3.createBucket({Bucket: 'myBucket'}).done(function(resp) {
  var data = {Bucket: 'myBucket', Key: 'myKey', Body: 'Hello!'};
  s3.putObject(data).done(function(resp) {
    console.log("Successfully uploaded data to myBucket/myKey");
  });
});
```

## DynamoDB

### DynamoDB: Listing Tables

The following example will list all tables in a DynamoDB instance:

```js
var db = new AWS.DynamoDB();
db.listTables().done(function(resp) {
  console.log(resp.data.TableNames);
});
```