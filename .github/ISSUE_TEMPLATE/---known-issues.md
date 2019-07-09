---
name: "\U0001F6E0 'Unexpected key' or 'is not a function' error"
about: Read me before opening an issue!
title: ''
assignees: ''

---

This is a list of know issues and how can you work around them:

1. **Exceptions contains `Unexpected key...` or `... is not a function`**

    AWS APIs are updating constantly, you might be calling a new API with an older version is SDK. In
    this case you should try installing the newest `aws-sdk`like: 

    `npm install aws-sdk@latest`

    If you are using the SDK in AWS Lambda, you are likely using old SDK version too. AWS Lambda bundled
    SDK version is shown in [this document](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html).
    You can import the latest version of SDK by following 
    [these guidelines](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-create-deployment-pkg.html#nodejs-package-dependencies).

    Go ahead and open an issue is you are still seeing this exception.
