var fs = require('fs');
var path = require('path');

var root = path.join(__dirname, 'aws-sdk');
if (!fs.existsSync(root)) {
  root = path.join(__dirname, '..', 'lib');
}
root = path.normalize(root);

module.exports = {
  root: root,
  mainFile: path.join(root, 'aws.js'),
  browserFile: path.join(root, 'browser.js'),
  servicesFile: path.join(root, 'services.js'),
  defaultServices: 'dynamodb,s3,sqs,sns,sts'
};
