require('../lib/node_loader');
var AWS = require('../lib/core');

var acm = null;
Object.defineProperty(AWS, 'ACM', {
  get: function get() {
    return acm || require('./acm');
  },
  set: function set(svc) {
    acm = svc;
  },
  enumerable: true,
  configurable: true
});
var apigateway = null;
Object.defineProperty(AWS, 'APIGateway', {
  get: function get() {
    return apigateway || require('./apigateway');
  },
  set: function set(svc) {
    apigateway = svc;
  },
  enumerable: true,
  configurable: true
});
var applicationautoscaling = null;
Object.defineProperty(AWS, 'ApplicationAutoScaling', {
  get: function get() {
    return applicationautoscaling || require('./applicationautoscaling');
  },
  set: function set(svc) {
    applicationautoscaling = svc;
  },
  enumerable: true,
  configurable: true
});
var autoscaling = null;
Object.defineProperty(AWS, 'AutoScaling', {
  get: function get() {
    return autoscaling || require('./autoscaling');
  },
  set: function set(svc) {
    autoscaling = svc;
  },
  enumerable: true,
  configurable: true
});
var cloudformation = null;
Object.defineProperty(AWS, 'CloudFormation', {
  get: function get() {
    return cloudformation || require('./cloudformation');
  },
  set: function set(svc) {
    cloudformation = svc;
  },
  enumerable: true,
  configurable: true
});
var cloudfront = null;
Object.defineProperty(AWS, 'CloudFront', {
  get: function get() {
    return cloudfront || require('./cloudfront');
  },
  set: function set(svc) {
    cloudfront = svc;
  },
  enumerable: true,
  configurable: true
});
var cloudhsm = null;
Object.defineProperty(AWS, 'CloudHSM', {
  get: function get() {
    return cloudhsm || require('./cloudhsm');
  },
  set: function set(svc) {
    cloudhsm = svc;
  },
  enumerable: true,
  configurable: true
});
var cloudsearch = null;
Object.defineProperty(AWS, 'CloudSearch', {
  get: function get() {
    return cloudsearch || require('./cloudsearch');
  },
  set: function set(svc) {
    cloudsearch = svc;
  },
  enumerable: true,
  configurable: true
});
var cloudsearchdomain = null;
Object.defineProperty(AWS, 'CloudSearchDomain', {
  get: function get() {
    return cloudsearchdomain || require('./cloudsearchdomain');
  },
  set: function set(svc) {
    cloudsearchdomain = svc;
  },
  enumerable: true,
  configurable: true
});
var cloudtrail = null;
Object.defineProperty(AWS, 'CloudTrail', {
  get: function get() {
    return cloudtrail || require('./cloudtrail');
  },
  set: function set(svc) {
    cloudtrail = svc;
  },
  enumerable: true,
  configurable: true
});
var cloudwatch = null;
Object.defineProperty(AWS, 'CloudWatch', {
  get: function get() {
    return cloudwatch || require('./cloudwatch');
  },
  set: function set(svc) {
    cloudwatch = svc;
  },
  enumerable: true,
  configurable: true
});
var cloudwatchevents = null;
Object.defineProperty(AWS, 'CloudWatchEvents', {
  get: function get() {
    return cloudwatchevents || require('./cloudwatchevents');
  },
  set: function set(svc) {
    cloudwatchevents = svc;
  },
  enumerable: true,
  configurable: true
});
var cloudwatchlogs = null;
Object.defineProperty(AWS, 'CloudWatchLogs', {
  get: function get() {
    return cloudwatchlogs || require('./cloudwatchlogs');
  },
  set: function set(svc) {
    cloudwatchlogs = svc;
  },
  enumerable: true,
  configurable: true
});
var codecommit = null;
Object.defineProperty(AWS, 'CodeCommit', {
  get: function get() {
    return codecommit || require('./codecommit');
  },
  set: function set(svc) {
    codecommit = svc;
  },
  enumerable: true,
  configurable: true
});
var codedeploy = null;
Object.defineProperty(AWS, 'CodeDeploy', {
  get: function get() {
    return codedeploy || require('./codedeploy');
  },
  set: function set(svc) {
    codedeploy = svc;
  },
  enumerable: true,
  configurable: true
});
var codepipeline = null;
Object.defineProperty(AWS, 'CodePipeline', {
  get: function get() {
    return codepipeline || require('./codepipeline');
  },
  set: function set(svc) {
    codepipeline = svc;
  },
  enumerable: true,
  configurable: true
});
var cognitoidentity = null;
Object.defineProperty(AWS, 'CognitoIdentity', {
  get: function get() {
    return cognitoidentity || require('./cognitoidentity');
  },
  set: function set(svc) {
    cognitoidentity = svc;
  },
  enumerable: true,
  configurable: true
});
var cognitoidentityserviceprovider = null;
Object.defineProperty(AWS, 'CognitoIdentityServiceProvider', {
  get: function get() {
    return cognitoidentityserviceprovider || require('./cognitoidentityserviceprovider');
  },
  set: function set(svc) {
    cognitoidentityserviceprovider = svc;
  },
  enumerable: true,
  configurable: true
});
var cognitosync = null;
Object.defineProperty(AWS, 'CognitoSync', {
  get: function get() {
    return cognitosync || require('./cognitosync');
  },
  set: function set(svc) {
    cognitosync = svc;
  },
  enumerable: true,
  configurable: true
});
var configservice = null;
Object.defineProperty(AWS, 'ConfigService', {
  get: function get() {
    return configservice || require('./configservice');
  },
  set: function set(svc) {
    configservice = svc;
  },
  enumerable: true,
  configurable: true
});
var datapipeline = null;
Object.defineProperty(AWS, 'DataPipeline', {
  get: function get() {
    return datapipeline || require('./datapipeline');
  },
  set: function set(svc) {
    datapipeline = svc;
  },
  enumerable: true,
  configurable: true
});
var devicefarm = null;
Object.defineProperty(AWS, 'DeviceFarm', {
  get: function get() {
    return devicefarm || require('./devicefarm');
  },
  set: function set(svc) {
    devicefarm = svc;
  },
  enumerable: true,
  configurable: true
});
var directconnect = null;
Object.defineProperty(AWS, 'DirectConnect', {
  get: function get() {
    return directconnect || require('./directconnect');
  },
  set: function set(svc) {
    directconnect = svc;
  },
  enumerable: true,
  configurable: true
});
var directoryservice = null;
Object.defineProperty(AWS, 'DirectoryService', {
  get: function get() {
    return directoryservice || require('./directoryservice');
  },
  set: function set(svc) {
    directoryservice = svc;
  },
  enumerable: true,
  configurable: true
});
var discovery = null;
Object.defineProperty(AWS, 'Discovery', {
  get: function get() {
    return discovery || require('./discovery');
  },
  set: function set(svc) {
    discovery = svc;
  },
  enumerable: true,
  configurable: true
});
var dms = null;
Object.defineProperty(AWS, 'DMS', {
  get: function get() {
    return dms || require('./dms');
  },
  set: function set(svc) {
    dms = svc;
  },
  enumerable: true,
  configurable: true
});
var dynamodb = null;
Object.defineProperty(AWS, 'DynamoDB', {
  get: function get() {
    return dynamodb || require('./dynamodb');
  },
  set: function set(svc) {
    dynamodb = svc;
  },
  enumerable: true,
  configurable: true
});
var dynamodbstreams = null;
Object.defineProperty(AWS, 'DynamoDBStreams', {
  get: function get() {
    return dynamodbstreams || require('./dynamodbstreams');
  },
  set: function set(svc) {
    dynamodbstreams = svc;
  },
  enumerable: true,
  configurable: true
});
var ec2 = null;
Object.defineProperty(AWS, 'EC2', {
  get: function get() {
    return ec2 || require('./ec2');
  },
  set: function set(svc) {
    ec2 = svc;
  },
  enumerable: true,
  configurable: true
});
var ecr = null;
Object.defineProperty(AWS, 'ECR', {
  get: function get() {
    return ecr || require('./ecr');
  },
  set: function set(svc) {
    ecr = svc;
  },
  enumerable: true,
  configurable: true
});
var ecs = null;
Object.defineProperty(AWS, 'ECS', {
  get: function get() {
    return ecs || require('./ecs');
  },
  set: function set(svc) {
    ecs = svc;
  },
  enumerable: true,
  configurable: true
});
var efs = null;
Object.defineProperty(AWS, 'EFS', {
  get: function get() {
    return efs || require('./efs');
  },
  set: function set(svc) {
    efs = svc;
  },
  enumerable: true,
  configurable: true
});
var elasticache = null;
Object.defineProperty(AWS, 'ElastiCache', {
  get: function get() {
    return elasticache || require('./elasticache');
  },
  set: function set(svc) {
    elasticache = svc;
  },
  enumerable: true,
  configurable: true
});
var elasticbeanstalk = null;
Object.defineProperty(AWS, 'ElasticBeanstalk', {
  get: function get() {
    return elasticbeanstalk || require('./elasticbeanstalk');
  },
  set: function set(svc) {
    elasticbeanstalk = svc;
  },
  enumerable: true,
  configurable: true
});
var elb = null;
Object.defineProperty(AWS, 'ELB', {
  get: function get() {
    return elb || require('./elb');
  },
  set: function set(svc) {
    elb = svc;
  },
  enumerable: true,
  configurable: true
});
var elbv2 = null;
Object.defineProperty(AWS, 'ELBv2', {
  get: function get() {
    return elbv2 || require('./elbv2');
  },
  set: function set(svc) {
    elbv2 = svc;
  },
  enumerable: true,
  configurable: true
});
var emr = null;
Object.defineProperty(AWS, 'EMR', {
  get: function get() {
    return emr || require('./emr');
  },
  set: function set(svc) {
    emr = svc;
  },
  enumerable: true,
  configurable: true
});
var es = null;
Object.defineProperty(AWS, 'ES', {
  get: function get() {
    return es || require('./es');
  },
  set: function set(svc) {
    es = svc;
  },
  enumerable: true,
  configurable: true
});
var elastictranscoder = null;
Object.defineProperty(AWS, 'ElasticTranscoder', {
  get: function get() {
    return elastictranscoder || require('./elastictranscoder');
  },
  set: function set(svc) {
    elastictranscoder = svc;
  },
  enumerable: true,
  configurable: true
});
var firehose = null;
Object.defineProperty(AWS, 'Firehose', {
  get: function get() {
    return firehose || require('./firehose');
  },
  set: function set(svc) {
    firehose = svc;
  },
  enumerable: true,
  configurable: true
});
var gamelift = null;
Object.defineProperty(AWS, 'GameLift', {
  get: function get() {
    return gamelift || require('./gamelift');
  },
  set: function set(svc) {
    gamelift = svc;
  },
  enumerable: true,
  configurable: true
});
var glacier = null;
Object.defineProperty(AWS, 'Glacier', {
  get: function get() {
    return glacier || require('./glacier');
  },
  set: function set(svc) {
    glacier = svc;
  },
  enumerable: true,
  configurable: true
});
var iam = null;
Object.defineProperty(AWS, 'IAM', {
  get: function get() {
    return iam || require('./iam');
  },
  set: function set(svc) {
    iam = svc;
  },
  enumerable: true,
  configurable: true
});
var importexport = null;
Object.defineProperty(AWS, 'ImportExport', {
  get: function get() {
    return importexport || require('./importexport');
  },
  set: function set(svc) {
    importexport = svc;
  },
  enumerable: true,
  configurable: true
});
var inspector = null;
Object.defineProperty(AWS, 'Inspector', {
  get: function get() {
    return inspector || require('./inspector');
  },
  set: function set(svc) {
    inspector = svc;
  },
  enumerable: true,
  configurable: true
});
var iot = null;
Object.defineProperty(AWS, 'Iot', {
  get: function get() {
    return iot || require('./iot');
  },
  set: function set(svc) {
    iot = svc;
  },
  enumerable: true,
  configurable: true
});
var iotdata = null;
Object.defineProperty(AWS, 'IotData', {
  get: function get() {
    return iotdata || require('./iotdata');
  },
  set: function set(svc) {
    iotdata = svc;
  },
  enumerable: true,
  configurable: true
});
var kinesis = null;
Object.defineProperty(AWS, 'Kinesis', {
  get: function get() {
    return kinesis || require('./kinesis');
  },
  set: function set(svc) {
    kinesis = svc;
  },
  enumerable: true,
  configurable: true
});
var kinesisanalytics = null;
Object.defineProperty(AWS, 'KinesisAnalytics', {
  get: function get() {
    return kinesisanalytics || require('./kinesisanalytics');
  },
  set: function set(svc) {
    kinesisanalytics = svc;
  },
  enumerable: true,
  configurable: true
});
var kms = null;
Object.defineProperty(AWS, 'KMS', {
  get: function get() {
    return kms || require('./kms');
  },
  set: function set(svc) {
    kms = svc;
  },
  enumerable: true,
  configurable: true
});
var lambda = null;
Object.defineProperty(AWS, 'Lambda', {
  get: function get() {
    return lambda || require('./lambda');
  },
  set: function set(svc) {
    lambda = svc;
  },
  enumerable: true,
  configurable: true
});
var machinelearning = null;
Object.defineProperty(AWS, 'MachineLearning', {
  get: function get() {
    return machinelearning || require('./machinelearning');
  },
  set: function set(svc) {
    machinelearning = svc;
  },
  enumerable: true,
  configurable: true
});
var marketplacecommerceanalytics = null;
Object.defineProperty(AWS, 'MarketplaceCommerceAnalytics', {
  get: function get() {
    return marketplacecommerceanalytics || require('./marketplacecommerceanalytics');
  },
  set: function set(svc) {
    marketplacecommerceanalytics = svc;
  },
  enumerable: true,
  configurable: true
});
var marketplacemetering = null;
Object.defineProperty(AWS, 'MarketplaceMetering', {
  get: function get() {
    return marketplacemetering || require('./marketplacemetering');
  },
  set: function set(svc) {
    marketplacemetering = svc;
  },
  enumerable: true,
  configurable: true
});
var mobileanalytics = null;
Object.defineProperty(AWS, 'MobileAnalytics', {
  get: function get() {
    return mobileanalytics || require('./mobileanalytics');
  },
  set: function set(svc) {
    mobileanalytics = svc;
  },
  enumerable: true,
  configurable: true
});
var opsworks = null;
Object.defineProperty(AWS, 'OpsWorks', {
  get: function get() {
    return opsworks || require('./opsworks');
  },
  set: function set(svc) {
    opsworks = svc;
  },
  enumerable: true,
  configurable: true
});
var rds = null;
Object.defineProperty(AWS, 'RDS', {
  get: function get() {
    return rds || require('./rds');
  },
  set: function set(svc) {
    rds = svc;
  },
  enumerable: true,
  configurable: true
});
var redshift = null;
Object.defineProperty(AWS, 'Redshift', {
  get: function get() {
    return redshift || require('./redshift');
  },
  set: function set(svc) {
    redshift = svc;
  },
  enumerable: true,
  configurable: true
});
var route53 = null;
Object.defineProperty(AWS, 'Route53', {
  get: function get() {
    return route53 || require('./route53');
  },
  set: function set(svc) {
    route53 = svc;
  },
  enumerable: true,
  configurable: true
});
var route53domains = null;
Object.defineProperty(AWS, 'Route53Domains', {
  get: function get() {
    return route53domains || require('./route53domains');
  },
  set: function set(svc) {
    route53domains = svc;
  },
  enumerable: true,
  configurable: true
});
var s3 = null;
Object.defineProperty(AWS, 'S3', {
  get: function get() {
    return s3 || require('./s3');
  },
  set: function set(svc) {
    s3 = svc;
  },
  enumerable: true,
  configurable: true
});
var servicecatalog = null;
Object.defineProperty(AWS, 'ServiceCatalog', {
  get: function get() {
    return servicecatalog || require('./servicecatalog');
  },
  set: function set(svc) {
    servicecatalog = svc;
  },
  enumerable: true,
  configurable: true
});
var ses = null;
Object.defineProperty(AWS, 'SES', {
  get: function get() {
    return ses || require('./ses');
  },
  set: function set(svc) {
    ses = svc;
  },
  enumerable: true,
  configurable: true
});
var simpledb = null;
Object.defineProperty(AWS, 'SimpleDB', {
  get: function get() {
    return simpledb || require('./simpledb');
  },
  set: function set(svc) {
    simpledb = svc;
  },
  enumerable: true,
  configurable: true
});
var snowball = null;
Object.defineProperty(AWS, 'Snowball', {
  get: function get() {
    return snowball || require('./snowball');
  },
  set: function set(svc) {
    snowball = svc;
  },
  enumerable: true,
  configurable: true
});
var sns = null;
Object.defineProperty(AWS, 'SNS', {
  get: function get() {
    return sns || require('./sns');
  },
  set: function set(svc) {
    sns = svc;
  },
  enumerable: true,
  configurable: true
});
var sqs = null;
Object.defineProperty(AWS, 'SQS', {
  get: function get() {
    return sqs || require('./sqs');
  },
  set: function set(svc) {
    sqs = svc;
  },
  enumerable: true,
  configurable: true
});
var ssm = null;
Object.defineProperty(AWS, 'SSM', {
  get: function get() {
    return ssm || require('./ssm');
  },
  set: function set(svc) {
    ssm = svc;
  },
  enumerable: true,
  configurable: true
});
var storagegateway = null;
Object.defineProperty(AWS, 'StorageGateway', {
  get: function get() {
    return storagegateway || require('./storagegateway');
  },
  set: function set(svc) {
    storagegateway = svc;
  },
  enumerable: true,
  configurable: true
});
var sts = null;
Object.defineProperty(AWS, 'STS', {
  get: function get() {
    return sts || require('./sts');
  },
  set: function set(svc) {
    sts = svc;
  },
  enumerable: true,
  configurable: true
});
var support = null;
Object.defineProperty(AWS, 'Support', {
  get: function get() {
    return support || require('./support');
  },
  set: function set(svc) {
    support = svc;
  },
  enumerable: true,
  configurable: true
});
var swf = null;
Object.defineProperty(AWS, 'SWF', {
  get: function get() {
    return swf || require('./swf');
  },
  set: function set(svc) {
    swf = svc;
  },
  enumerable: true,
  configurable: true
});
var waf = null;
Object.defineProperty(AWS, 'WAF', {
  get: function get() {
    return waf || require('./waf');
  },
  set: function set(svc) {
    waf = svc;
  },
  enumerable: true,
  configurable: true
});
var workspaces = null;
Object.defineProperty(AWS, 'WorkSpaces', {
  get: function get() {
    return workspaces || require('./workspaces');
  },
  set: function set(svc) {
    workspaces = svc;
  },
  enumerable: true,
  configurable: true
});
module.exports = AWS;