import AWS = require('../index');
import {Agent} from 'https';

// Create Config
AWS.config = new AWS.Config({
    region: 'us-east-1',
    credentials: {
        accessKeyId: 'fake',
        secretAccessKey: 'key'
    },
    correctClockSkew: true,
    s3: {
        region: 'us-west-2',
        params: {
            Bucket: 'bucket'
        },
        useDualstack: true
    },
    apiVersion: 'latest',
});

// Lock api versions
AWS.config.apiVersions = {
    acm: "2015-12-08",
    lambda: "2015-03-31"
};

// update credentials
AWS.config.update({
    credentials: new AWS.Credentials('accessKeyId', 'secretAccessKey', 'sessionToken')
});

// update credentials using direct CredentialsOptions
AWS.config.update({
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    sessionToken: 'sessionToken'
});

// set all normal config
AWS.config.update({
    apiVersion: "latest",
    computeChecksums: true,
    convertResponseTypes: true,
    correctClockSkew: false,
    credentials: {
        accessKeyId: 'id',
        secretAccessKey: 'secret',
        sessionToken: 'token'
    },
    httpOptions: {
        agent: new Agent(),
        proxy: 'http://localhost:8080',
        timeout: 1000 * 60,
        xhrAsync: true,
        xhrWithCredentials: true
    },
    logger: console,
    maxRedirects: 2,
    maxRetries: 3,
    paramValidation: {
        min: true,
        max: false,
        pattern: false,
        enum: false
    },
    region: 'us-east-1',
    retryDelayOptions: {
        base: 100,
        customBackoff: function(retryCount){return 0;}
    },
    s3BucketEndpoint: false,
    s3DisableBodySigning: false,
    s3ForcePathStyle: true,
    signatureCache: false,
    signatureVersion: 'v4',
    sslEnabled: true,
    systemClockOffset: 0,
    useAccelerateEndpoint: true
});

//test config methods
AWS.config.getCredentials(function(err) {});
// make sure we can get the Promise constructor
var Promise = AWS.config.getPromisesDependency();
if (Promise) {
    console.log(typeof Promise.resolve);
}
AWS.config.setPromisesDependency(Promise);

var config = AWS.config.loadFromPath('/to/path');

// test update allowing unknown keys
AWS.config.update({
   fake: 'fake' 
}, true);

//Test httpOption interface
var httpOptions:AWS.HTTPOptions = {
  timeout: 6000
}

// Test constructing with a CredentialProviderChain
var options = {
    credentialProvider: new AWS.CredentialProviderChain([
        () => new AWS.EC2MetadataCredentials()
    ]),
    httpOptions
};
var s3 = new AWS.S3(options);
var ses = new AWS.SES(options);