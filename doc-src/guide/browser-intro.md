# @title AWS SDK for JavaScript in the Browser

# Getting Started with the SDK in the Browser

## Loading the SDK

The quickest way to get started with the SDK is to load it using the hosted
package directly from Amazon Web Services. To do this, simply add the following
script tag to your HTML pages:

    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.0.0.rc1.min.js"></script>

You can also download this package by clicking the following link:
[aws-sdk.min.js](https://sdk.amazonaws.com/js/aws-sdk.min.js)

Once the SDK is loaded in your page, the module will be available from
the global variable `AWS` (or `window.AWS`).

## Next Steps

Now that you have installed and loaded the SDK, continue on to learn how to
configure and use the SDK to make requests to API operations on services.

* {file:browser-configuring.md Configuring the SDK}
* {file:browser-services.md Working with Services}
* {file:browser-making-requests.md Making Requests}
* {file:browser-examples.md Common Examples}
* {file:browser-building.md Building the SDK}
