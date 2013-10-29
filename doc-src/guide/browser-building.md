# @title Building the SDK for the Browser

# Building the SDK for Use in the Browser

This section explains how you can create your own build of the AWS SDK for
JavaScript. If you are working with the SDK outside of an environment that
enforces CORS in your browser and want access to the full gamut of services
provided by the **AWS SDK for JavaScript**, it is possible to build a custom
copy of the SDK locally by cloning the repository and running the same build
tools used to generate the default hosted version of the SDK. This chapter
outlines the steps to build the SDK on your own with extra services and API
versions.

## Setting Up

In order to build the SDK, you first need to clone the Git repository containing
the SDK source. These instructions assume you have [Git](http://git-scm.org) and
a version of [Node.js](http://nodejs.org) installed on your machine.

First, clone the repository from GitHub and cd into the directory:

```bash
git clone git://github.com/aws/aws-sdk-js
cd aws-sdk-js
```

After you have cloned the repository, you need to download the dependency modules
for both the SDK and build tool:

```bash
npm install --production && cd dist-tools && npm install --production && cd ..
```

You should now be able to build a packaged version of the SDK.

## Building

The builder tool is found in `dist-tools/browser-builder.js`. You can run
this script by typing:

```bash
node dist-tools/browser-builder.js > aws-sdk.js
```

This will build to the file `aws-sdk.js`. By default this package includes
only the services documented in the {file:browser-services.md Working With Services}
chapter. Building custom services is discussed later in this chapter. Note
also that by default, this file is uncompressed.

### Minifying Output

The builder tool can also compress output. To do this, set the `MINIFY`
environment variable like so:

```bash
MINIFY=1 node dist-tools/browser-builder.js > aws-sdk.js
```

### Building Specific Services and API Versions

#### Selecting Services to Build

When building via the builder tool, you can select which services you want to
build into the SDK. To select services, specify the names of the services
delimited by commas as arguments to the tool on the command-line. For example,
to build only Amazon S3 and Amazon EC2, use the following command:

```bash
node dist-tools/browser-builder.js s3,ec2 > aws-sdk-s3-ec2.js
```

#### Selecting API Versions

You can also select specific API versions of services when building
by suffixing the version name after the service identifier. For example, to
build both API versions of Amazon DynamoDB, you could use the following
command:

```bash
node dist-tools/browser-builder.js dynamodb-2011-12-05,dynamodb-2012-08-10
```

Available service identifiers and API versions can be found by looking at the
file list in https://github.com/aws/aws-sdk-js/tree/master/lib/services/api

#### Building All Services

Finally, you can build **all services** (and API versions) by passing "all"
as a command-line argument:

```bash
node dist-tools/browser-builder.js all > aws-sdk-full.js
```

## The Build Server

The `dist-tools` directory also comes with a utility server that can bundle
and serve the SDK over HTTP. To launch the server, type:

```bash
node dist-tools/server.js
```

You can then access a bundled version of the SDK by hitting either:

```no-highlight
http://localhost:8080/aws-sdk.js
```

or

```no-highlight
http://localhost:8080/aws-sdk.min.js
```

For the uncompressed or compressed versions.

### Loading Specific Services

The build server can also bundle custom services by accepting a query string
to the respecitve bundle URLs with the services and API versions to be used.
The syntax for this is the same as the builder tool syntax on the command-line,
but you can also use a conventional query string syntax. An example to load
the DynamoDB 2011-12-05 API version and latest S3 service would look like:

```no-highlight
http://localhost:8080/aws-sdk.min.js?dynamodb=2011-12-05&s3
```
