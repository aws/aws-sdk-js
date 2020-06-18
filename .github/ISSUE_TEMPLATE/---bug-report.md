---
name: "\U0001F41B Bug report"
about: Create a report to help us improve
title: ''
labels: bug, needs-triage
assignees: ''

---

Confirm by changing [ ] to [x] below to ensure that it's a bug:
- [ ] I've gone through [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/welcome.html) and [API reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/)
- [ ] I've checked [AWS Forums](https://forums.aws.amazon.com) and [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) for answers
- [ ] I've searched for [previous similar issues](https://github.com/aws/aws-sdk-js/issues) and didn't find any solution
  
**Describe the bug**
A clear and concise description of what the bug is.

**Is the issue in the browser/Node.js?**
Browser/Node.js

**If on Node.js, are you running this on AWS Lambda?**

**Details of the browser/Node.js version**
Paste output of `npx envinfo --browsers` or `node -v`

**SDK version number**
Example: v2.466.0
* For browsers, the SDK version number is in the script tag <pre>src=".../aws-sdk-<b>2.466.0</b>.min.js"</pre>
* For Node.js, get SDK version by
  * running command `npm list aws-sdk` from your root directory
  * printing the output of `console.log(AWS.VERSION)` in your code where `AWS = require("aws-sdk");`
  * if running on Lambda and using SDK provided by Lambda runtime, you can find the SDK versions [here](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html) 

**To Reproduce (observed behavior)**
Steps to reproduce the behavior (please share code or minimal repo)

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Additional context**
Add any other context about the problem here.
