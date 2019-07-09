---
name: "\U0001F6E0 'Unexpected key' or 'is not a function' error"
about: API call returns 'Unexpected key' or 'is not a function' error
title: ''
assignees: ''

---



    AWS APIs are updating constantly, you might be calling a new API with an older version is SDK. In
    this case you should try installing the newest `aws-sdk` like: 

    `npm install aws-sdk@latest`

    If you are using the SDK in AWS Lambda, you are likely using old SDK version too. AWS Lambda bundled
    SDK version is shown in [this document](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html).
    You can import the latest version of SDK by following 
    [these guidelines](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-create-deployment-pkg.html#nodejs-package-dependencies).

If you still like to open an issue, change [ ] to [x] below:
- [ ] I've confirmed that I'm using latest version of SDK, and issue is still reproducible
