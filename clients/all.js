require('../lib/node_loader');
var AWS = require('../lib/core');

Object.defineProperty(AWS, 'ACM', {
  get: function get() {
    return require('./acm');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'APIGateway', {
  get: function get() {
    return require('./apigateway');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'ApplicationAutoScaling', {
  get: function get() {
    return require('./applicationautoscaling');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'AutoScaling', {
  get: function get() {
    return require('./autoscaling');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CloudFormation', {
  get: function get() {
    return require('./cloudformation');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CloudFront', {
  get: function get() {
    return require('./cloudfront');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CloudHSM', {
  get: function get() {
    return require('./cloudhsm');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CloudSearch', {
  get: function get() {
    return require('./cloudsearch');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CloudSearchDomain', {
  get: function get() {
    return require('./cloudsearchdomain');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CloudTrail', {
  get: function get() {
    return require('./cloudtrail');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CloudWatch', {
  get: function get() {
    return require('./cloudwatch');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CloudWatchEvents', {
  get: function get() {
    return require('./cloudwatchevents');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CloudWatchLogs', {
  get: function get() {
    return require('./cloudwatchlogs');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CodeCommit', {
  get: function get() {
    return require('./codecommit');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CodeDeploy', {
  get: function get() {
    return require('./codedeploy');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CodePipeline', {
  get: function get() {
    return require('./codepipeline');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CognitoIdentity', {
  get: function get() {
    return require('./cognitoidentity');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CognitoIdentityServiceProvider', {
  get: function get() {
    return require('./cognitoidentityserviceprovider');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'CognitoSync', {
  get: function get() {
    return require('./cognitosync');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'ConfigService', {
  get: function get() {
    return require('./configservice');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'DataPipeline', {
  get: function get() {
    return require('./datapipeline');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'DeviceFarm', {
  get: function get() {
    return require('./devicefarm');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'DirectConnect', {
  get: function get() {
    return require('./directconnect');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'DirectoryService', {
  get: function get() {
    return require('./directoryservice');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'Discovery', {
  get: function get() {
    return require('./discovery');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'DMS', {
  get: function get() {
    return require('./dms');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'DynamoDB', {
  get: function get() {
    return require('./dynamodb');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'DynamoDBStreams', {
  get: function get() {
    return require('./dynamodbstreams');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'EC2', {
  get: function get() {
    return require('./ec2');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'ECR', {
  get: function get() {
    return require('./ecr');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'ECS', {
  get: function get() {
    return require('./ecs');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'EFS', {
  get: function get() {
    return require('./efs');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'ElastiCache', {
  get: function get() {
    return require('./elasticache');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'ElasticBeanstalk', {
  get: function get() {
    return require('./elasticbeanstalk');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'ELB', {
  get: function get() {
    return require('./elb');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'ELBv2', {
  get: function get() {
    return require('./elbv2');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'EMR', {
  get: function get() {
    return require('./emr');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'ES', {
  get: function get() {
    return require('./es');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'ElasticTranscoder', {
  get: function get() {
    return require('./elastictranscoder');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'Firehose', {
  get: function get() {
    return require('./firehose');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'GameLift', {
  get: function get() {
    return require('./gamelift');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'Glacier', {
  get: function get() {
    return require('./glacier');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'IAM', {
  get: function get() {
    return require('./iam');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'ImportExport', {
  get: function get() {
    return require('./importexport');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'Inspector', {
  get: function get() {
    return require('./inspector');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'Iot', {
  get: function get() {
    return require('./iot');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'IotData', {
  get: function get() {
    return require('./iotdata');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'Kinesis', {
  get: function get() {
    return require('./kinesis');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'KinesisAnalytics', {
  get: function get() {
    return require('./kinesisanalytics');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'KMS', {
  get: function get() {
    return require('./kms');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'Lambda', {
  get: function get() {
    return require('./lambda');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'MachineLearning', {
  get: function get() {
    return require('./machinelearning');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'MarketplaceCommerceAnalytics', {
  get: function get() {
    return require('./marketplacecommerceanalytics');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'MarketplaceMetering', {
  get: function get() {
    return require('./marketplacemetering');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'MobileAnalytics', {
  get: function get() {
    return require('./mobileanalytics');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'OpsWorks', {
  get: function get() {
    return require('./opsworks');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'RDS', {
  get: function get() {
    return require('./rds');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'Redshift', {
  get: function get() {
    return require('./redshift');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'Route53', {
  get: function get() {
    return require('./route53');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'Route53Domains', {
  get: function get() {
    return require('./route53domains');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'S3', {
  get: function get() {
    return require('./s3');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'ServiceCatalog', {
  get: function get() {
    return require('./servicecatalog');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'SES', {
  get: function get() {
    return require('./ses');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'SimpleDB', {
  get: function get() {
    return require('./simpledb');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'Snowball', {
  get: function get() {
    return require('./snowball');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'SNS', {
  get: function get() {
    return require('./sns');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'SQS', {
  get: function get() {
    return require('./sqs');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'SSM', {
  get: function get() {
    return require('./ssm');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'StorageGateway', {
  get: function get() {
    return require('./storagegateway');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'STS', {
  get: function get() {
    return require('./sts');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'Support', {
  get: function get() {
    return require('./support');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'SWF', {
  get: function get() {
    return require('./swf');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'WAF', {
  get: function get() {
    return require('./waf');
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(AWS, 'WorkSpaces', {
  get: function get() {
    return require('./workspaces');
  },
  enumerable: true,
  configurable: true
});
module.exports = AWS;