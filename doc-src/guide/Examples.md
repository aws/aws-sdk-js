# Examples

All of these examples assume that the AWS library is required,
credentials are loaded via environment variables (`AWS_ACCESS_KEY_ID`
and `AWS_SECRET_ACCESS_KEY`), and the region is set via 
`AWS.config.update({region: 'us-west-2'});` or the `AWS_REGION` environment
variable.

The common preamble code can be summarized as follows:

```js
var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});
```

## Amazon Elastic Compute Cloud (Amazon EC2)

### Amazon EC2: Creating an Instance with Tags (`runInstances`, `createTags`)

The Amazon EC2 API has two distinct operations for creating instances and
attaching tags to instances. In order to create an instance with tags, you can
call both of these operations in series. The following example adds a "Name"
tag to a new instance, which the Amazon EC2 console recognizes and displays
in the Name field of the instance list.

```js
var ec2 = new AWS.EC2();

var params = {
  ImageId: 'ami-1624987f', // Amazon Linux AMI x86_64 EBS
  InstanceType: 't1.micro',
  MinCount: 1, MaxCount: 1
};

// Create the instance
ec2.runInstances(params, function(err, data) {
  if (err) { console.log("Could not create instance", err); return; }

  var instanceId = data.Instances[0].InstanceId;
  console.log("Created instance", instanceId);

  // Add tags to the instance
  params = {Resources: [instanceId], Tags: [
    {Key: 'Name', Value: instanceName}
  ]};
  ec2.createTags(params, function(err) {
    console.log("Tagging instance", err ? "failure" : "success");
  });
});
```

Note that you can add up to 10 tags to an instance, and they can be all added
in a single call to `createTags`.

## Amazon Simple Storage Service (Amazon S3)

### Amazon S3: List All of Your Buckets (listBuckets)

The following example lists all buckets associated with your AWS account:

```js
var s3 = new AWS.S3();
s3.listBuckets(function(err, data) {
  for (var index in data.Buckets) {
    var bucket = data.Buckets[index];
    console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
  }
});
```

### Amazon S3: Create a New Bucket and Object (createBucket, putObject)

The following example puts the string 'Hello!' inside the
object 'myKey' of bucket 'myBucket':

```js
var s3 = new AWS.S3({params: {Bucket: 'myBucket', Key: 'myKey'}});
s3.createBucket(function() {
  s3.putObject({Body: 'Hello!'}, function() {
    console.log("Successfully uploaded data to myBucket/myKey");
  });
});
```

### Amazon S3: Streaming Objects to Files on Disk (getObject)

You can use the `createReadStream()` method on a request object to
get a handle to a stream object which supports piping raw HTTP
body data to a file. This is especially useful when streaming
objects to streams like filesystem objects. The following example
shows how you can stream an object from Amazon S3 directly to a file
on disk:

```js
var s3 = new AWS.S3();
var params = {Bucket: 'myBucket', Key: 'myImageFile.jpg'};
var file = require('fs').createWriteStream('/path/to/file.jpg');
s3.getObject(params).createReadStream().pipe(file);
```

Alternatively, you can register an 'httpData' event listener on
the request object to access each chunk of data received across
the wire (as Buffer objects):

```js
var s3 = new AWS.S3();
var params = {Bucket: 'myBucket', Key: 'myImageFile.jpg'};
var file = require('fs').createWriteStream('/path/to/file.jpg');

s3.getObject(params).
on('httpData', function(chunk) { file.write(chunk); }).
on('httpDone', function() { file.end(); }).
send();
```

### Amazon S3: Getting a pre-signed URL for a getObject operation (getSignedUrl)

A pre-signed URL allows you to give one-off access to other users who may not
have direct access to execute the operations. Pre-signing generates a valid
URL signed with your credentials that any user can access. By default, the SDK
sets all URLs to expire within 15 minutes, but this value can be adjusted.

To generate a simple pre-signed URL that allows any user to view the contents
of a private object in a bucket you own, you can use the following call to
`getSignedUrl()`:

```js
var params = {Bucket: 'myBucket', Key: 'myKey'};
s3.getSignedUrl('getObject', params, function (err, url) {
  console.log("The URL is", url);
});
```

The `getSignedUrl()` operation can also be called synchronously, when the
callback is omitted. When it is called without a callback, the return value is
the pre-signed URL. The above example can be re-written synchronously as:

```js
var params = {Bucket: 'myBucket', Key: 'myKey'};
var url = s3.getSignedUrl('getObject', params);
console.log("The URL is", url);
```

Note that this method should only be called synchronously if you can guarantee
that your credentials are already loaded (or defined statically). In general,
it is safe to use this method synchronously unless you are using EC2 IAM roles
or another custom asynchronous credential provider.

### Amazon S3: Getting a pre-signed URL for a PUT operation with a specific payload

If a Body parameter is passed to the payload of a pre-signed PUT object
operation and checksums are being computed, the SDK will generate the URL
with a Content-MD5 representing the expected payload contents. You can use
this functionality to generate pre-signed PUT operations that require a specific
payload to be uploaded by the consumer of the URL. To generate such a URL,
simply provide a Body property to the parameter list:

```js
var s3 = new AWS.S3({computeChecksums: true}); // this is the default setting
var params = {Bucket: 'myBucket', Key: 'myKey', Body: 'EXPECTED CONTENTS'};
var url = s3.getSignedUrl('putObject', params);
console.log("The URL is", url);
```

You can also omit the Body parameter to generate a URL that allows a user to
write any contents to the given object:

```js
var params = {Bucket: 'myBucket', Key: 'myKey'};
var url = s3.getSignedUrl('putObject', params);
console.log("The URL is", url);
```

### Amazon S3: Controlling Expires time with pre-signed URLs

As mentioned above, pre-signed URLs will expire in 15 minutes by default
when generated by the SDK. This value is adjustable with the `Expires`
parameter, an integer representing the number of seconds that the URL will be
valid, and can be set with any call to `getSignedUrl()`:

```js
// This URL will expire in one minute (60 seconds)
var params = {Bucket: 'myBucket', Key: 'myKey', Expires: 60};
var url = s3.getSignedUrl('getObject', params);
console.log("The URL is", url);
```

## Amazon DynamoDB

### Amazon DynamoDB: Listing Tables (listTables)

The following example will list all tables in a DynamoDB instance:

```js
var db = new AWS.DynamoDB();
db.listTables(function(err, data) {
  console.log(data.TableNames);
});
```

## Amazon Glacier

### Amazon Glacier: Creating a Vault

The following example creates a vault named "YOUR_VAULT_NAME":

```js
var glacier = new AWS.Glacier();
glacier.createVault({vaultName: 'YOUR_VAULT_NAME'}, function(err) {
  if (!err) console.log("Created vault!")
});
```

### Amazon Glacier: Uploading an Archive

<p class="note"><em>Note: this example assumes you have already created a vault
named "YOUR_VAULT_NAME".</em>
</p>

The following example will upload a single Buffer object as an entire archive.
The SDK will automatically compute the tree hash checksum for the data being
uploaded, though you can override it by passing your own `checksum` parameter.

```js
var glacier = new AWS.Glacier(),
    vaultName = 'YOUR_VAULT_NAME',
    buffer = new Buffer(2.5 * 1024 * 1024); // 2.5MB buffer

var params = {vaultName: vaultName, body: buffer};
glacier.uploadArchive(params, function(err, data) {
  if (err) console.log("Error uploading archive!", err);
  else console.log("Archive ID", data.archiveId);
});
```

### Amazon Glacier: Multi-part Upload

<p class="note">
  <em>Note: this example assumes you have already created a vault
named "YOUR_VAULT_NAME".</em>
</p>

The following example will create a multi-part upload out of 1MB chunks of a
Buffer object. Note that a complete SHA-256 tree hash is manually computed
using the `computeChecksums` method:

```js
var glacier = new AWS.Glacier(),
    vaultName = 'YOUR_VAULT_NAME',
    buffer = new Buffer(2.5 * 1024 * 1024), // 2.5MB buffer
    partSize = 1024 * 1024, // 1MB chunks,
    numPartsLeft = Math.ceil(buffer.length / partSize),
    startTime = new Date(),
    params = {vaultName: vaultName, partSize: partSize.toString()};

// Compute the complete SHA-256 tree hash so we can pass it
// to completeMultipartUpload request at the end
var treeHash = glacier.computeChecksums(buffer).treeHash;

// Initiate the multi-part upload
console.log('Initiating upload to', vaultName);
glacier.initiateMultipartUpload(params, function (mpErr, multipart) {
  if (mpErr) { console.log('Error!', mpErr.stack); return; }
  console.log("Got upload ID", multipart.uploadId);

  // Grab each partSize chunk and upload it as a part
  for (var i = 0; i < buffer.length; i += partSize) {
    var end = Math.min(i + partSize, buffer.length),
        partParams = {
          vaultName: vaultName,
          uploadId: multipart.uploadId,
          range: 'bytes ' + i + '-' + (end-1) + '/*',
          body: buffer.slice(i, end)
        };

    // Send a single part
    console.log('Uploading part', i, '=', partParams.range);
    glacier.uploadMultipartPart(partParams, function(multiErr, mData) {
      if (multiErr) return;
      console.log("Completed part", this.request.params.range);
      if (--numPartsLeft > 0) return; // complete only when all parts uploaded

      var doneParams = {
        vaultName: vaultName,
        uploadId: multipart.uploadId,
        archiveSize: buffer.length.toString(),
        checksum: treeHash // the computed tree hash
      };

      console.log("Completing upload...");
      glacier.completeMultipartUpload(doneParams, function(err, data) {
        if (err) {
          console.log("An error occurred while uploading the archive");
          console.log(err);
        } else {
          var delta = (new Date() - startTime) / 1000;
          console.log('Completed upload in', delta, 'seconds');
          console.log('Archive ID:', data.archiveId);
          console.log('Checksum:  ', data.checksum);
        }
      });
    });
  }
});
```
