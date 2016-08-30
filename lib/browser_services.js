AWS.apiLoader.services['acm'] = {};
AWS.ACM = AWS.Service.defineService('acm', [ '2015-12-08' ]);
AWS.apiLoader.services['acm']['2015-12-08'] = require('../apis/acm-2015-12-08.min');
AWS.apiLoader.services['acm']['2015-12-08'].paginators = require('../apis/acm-2015-12-08.paginators').pagination;

AWS.apiLoader.services['apigateway'] = {};
AWS.APIGateway = AWS.Service.defineService('apigateway', [ '2015-07-09' ]);
require('./services/apigateway');
AWS.apiLoader.services['apigateway']['2015-07-09'] = require('../apis/apigateway-2015-07-09.min');
AWS.apiLoader.services['apigateway']['2015-07-09'].paginators = require('../apis/apigateway-2015-07-09.paginators').pagination;

AWS.apiLoader.services['applicationautoscaling'] = {};
AWS.ApplicationAutoScaling = AWS.Service.defineService('applicationautoscaling', [ '2016-02-06' ]);
AWS.apiLoader.services['applicationautoscaling']['2016-02-06'] = require('../apis/application-autoscaling-2016-02-06.min');
AWS.apiLoader.services['applicationautoscaling']['2016-02-06'].paginators = require('../apis/application-autoscaling-2016-02-06.paginators').pagination;

AWS.apiLoader.services['autoscaling'] = {};
AWS.AutoScaling = AWS.Service.defineService('autoscaling', [ '2011-01-01' ]);
AWS.apiLoader.services['autoscaling']['2011-01-01'] = require('../apis/autoscaling-2011-01-01.min');
AWS.apiLoader.services['autoscaling']['2011-01-01'].paginators = require('../apis/autoscaling-2011-01-01.paginators').pagination;

AWS.apiLoader.services['cloudformation'] = {};
AWS.CloudFormation = AWS.Service.defineService('cloudformation', [ '2010-05-15' ]);
AWS.apiLoader.services['cloudformation']['2010-05-15'] = require('../apis/cloudformation-2010-05-15.min');
AWS.apiLoader.services['cloudformation']['2010-05-15'].paginators = require('../apis/cloudformation-2010-05-15.paginators').pagination;
AWS.apiLoader.services['cloudformation']['2010-05-15'].waiters = require('../apis/cloudformation-2010-05-15.waiters2').waiters;

AWS.apiLoader.services['cloudfront'] = {};
AWS.CloudFront = AWS.Service.defineService('cloudfront', [ '2016-08-01' ]);
require('./services/cloudfront');
AWS.apiLoader.services['cloudfront']['2016-08-01'] = require('../apis/cloudfront-2016-08-01.min');
AWS.apiLoader.services['cloudfront']['2016-08-01'].paginators = require('../apis/cloudfront-2016-08-01.paginators').pagination;
AWS.apiLoader.services['cloudfront']['2016-08-01'].waiters = require('../apis/cloudfront-2016-08-01.waiters2').waiters;

AWS.apiLoader.services['cloudhsm'] = {};
AWS.CloudHSM = AWS.Service.defineService('cloudhsm', [ '2014-05-30' ]);
AWS.apiLoader.services['cloudhsm']['2014-05-30'] = require('../apis/cloudhsm-2014-05-30.min');

AWS.apiLoader.services['cloudtrail'] = {};
AWS.CloudTrail = AWS.Service.defineService('cloudtrail', [ '2013-11-01' ]);
AWS.apiLoader.services['cloudtrail']['2013-11-01'] = require('../apis/cloudtrail-2013-11-01.min');
AWS.apiLoader.services['cloudtrail']['2013-11-01'].paginators = require('../apis/cloudtrail-2013-11-01.paginators').pagination;

AWS.apiLoader.services['cloudwatch'] = {};
AWS.CloudWatch = AWS.Service.defineService('cloudwatch', [ '2010-08-01' ]);
AWS.apiLoader.services['cloudwatch']['2010-08-01'] = require('../apis/monitoring-2010-08-01.min');
AWS.apiLoader.services['cloudwatch']['2010-08-01'].paginators = require('../apis/monitoring-2010-08-01.paginators').pagination;
AWS.apiLoader.services['cloudwatch']['2010-08-01'].waiters = require('../apis/monitoring-2010-08-01.waiters2').waiters;

AWS.apiLoader.services['cloudwatchevents'] = {};
AWS.CloudWatchEvents = AWS.Service.defineService('cloudwatchevents', [ '2015-10-07' ]);
AWS.apiLoader.services['cloudwatchevents']['2015-10-07'] = require('../apis/events-2015-10-07.min');

AWS.apiLoader.services['cloudwatchlogs'] = {};
AWS.CloudWatchLogs = AWS.Service.defineService('cloudwatchlogs', [ '2014-03-28' ]);
AWS.apiLoader.services['cloudwatchlogs']['2014-03-28'] = require('../apis/logs-2014-03-28.min');
AWS.apiLoader.services['cloudwatchlogs']['2014-03-28'].paginators = require('../apis/logs-2014-03-28.paginators').pagination;

AWS.apiLoader.services['codecommit'] = {};
AWS.CodeCommit = AWS.Service.defineService('codecommit', [ '2015-04-13' ]);
AWS.apiLoader.services['codecommit']['2015-04-13'] = require('../apis/codecommit-2015-04-13.min');
AWS.apiLoader.services['codecommit']['2015-04-13'].paginators = require('../apis/codecommit-2015-04-13.paginators').pagination;

AWS.apiLoader.services['codedeploy'] = {};
AWS.CodeDeploy = AWS.Service.defineService('codedeploy', [ '2014-10-06' ]);
AWS.apiLoader.services['codedeploy']['2014-10-06'] = require('../apis/codedeploy-2014-10-06.min');
AWS.apiLoader.services['codedeploy']['2014-10-06'].paginators = require('../apis/codedeploy-2014-10-06.paginators').pagination;
AWS.apiLoader.services['codedeploy']['2014-10-06'].waiters = require('../apis/codedeploy-2014-10-06.waiters2').waiters;

AWS.apiLoader.services['codepipeline'] = {};
AWS.CodePipeline = AWS.Service.defineService('codepipeline', [ '2015-07-09' ]);
AWS.apiLoader.services['codepipeline']['2015-07-09'] = require('../apis/codepipeline-2015-07-09.min');

AWS.apiLoader.services['cognitoidentity'] = {};
AWS.CognitoIdentity = AWS.Service.defineService('cognitoidentity', [ '2014-06-30' ]);
require('./services/cognitoidentity');
AWS.apiLoader.services['cognitoidentity']['2014-06-30'] = require('../apis/cognito-identity-2014-06-30.min');

AWS.apiLoader.services['cognitoidentityserviceprovider'] = {};
AWS.CognitoIdentityServiceProvider = AWS.Service.defineService('cognitoidentityserviceprovider', [ '2016-04-18' ]);
AWS.apiLoader.services['cognitoidentityserviceprovider']['2016-04-18'] = require('../apis/cognito-idp-2016-04-18.min');

AWS.apiLoader.services['cognitosync'] = {};
AWS.CognitoSync = AWS.Service.defineService('cognitosync', [ '2014-06-30' ]);
AWS.apiLoader.services['cognitosync']['2014-06-30'] = require('../apis/cognito-sync-2014-06-30.min');

AWS.apiLoader.services['configservice'] = {};
AWS.ConfigService = AWS.Service.defineService('configservice', [ '2014-11-12' ]);
AWS.apiLoader.services['configservice']['2014-11-12'] = require('../apis/config-2014-11-12.min');
AWS.apiLoader.services['configservice']['2014-11-12'].paginators = require('../apis/config-2014-11-12.paginators').pagination;

AWS.apiLoader.services['devicefarm'] = {};
AWS.DeviceFarm = AWS.Service.defineService('devicefarm', [ '2015-06-23' ]);
AWS.apiLoader.services['devicefarm']['2015-06-23'] = require('../apis/devicefarm-2015-06-23.min');
AWS.apiLoader.services['devicefarm']['2015-06-23'].paginators = require('../apis/devicefarm-2015-06-23.paginators').pagination;

AWS.apiLoader.services['directconnect'] = {};
AWS.DirectConnect = AWS.Service.defineService('directconnect', [ '2012-10-25' ]);
AWS.apiLoader.services['directconnect']['2012-10-25'] = require('../apis/directconnect-2012-10-25.min');
AWS.apiLoader.services['directconnect']['2012-10-25'].paginators = require('../apis/directconnect-2012-10-25.paginators').pagination;

AWS.apiLoader.services['dynamodb'] = {};
AWS.DynamoDB = AWS.Service.defineService('dynamodb', [ '2011-12-05', '2012-08-10' ]);
require('./services/dynamodb');
AWS.apiLoader.services['dynamodb']['2012-08-10'] = require('../apis/dynamodb-2012-08-10.min');
AWS.apiLoader.services['dynamodb']['2012-08-10'].paginators = require('../apis/dynamodb-2012-08-10.paginators').pagination;
AWS.apiLoader.services['dynamodb']['2012-08-10'].waiters = require('../apis/dynamodb-2012-08-10.waiters2').waiters;

AWS.apiLoader.services['dynamodbstreams'] = {};
AWS.DynamoDBStreams = AWS.Service.defineService('dynamodbstreams', [ '2012-08-10' ]);
AWS.apiLoader.services['dynamodbstreams']['2012-08-10'] = require('../apis/streams.dynamodb-2012-08-10.min');

AWS.apiLoader.services['ec2'] = {};
AWS.EC2 = AWS.Service.defineService('ec2', [ '2016-04-01' ]);
require('./services/ec2');
AWS.apiLoader.services['ec2']['2016-04-01'] = require('../apis/ec2-2016-04-01.min');
AWS.apiLoader.services['ec2']['2016-04-01'].paginators = require('../apis/ec2-2016-04-01.paginators').pagination;
AWS.apiLoader.services['ec2']['2016-04-01'].waiters = require('../apis/ec2-2016-04-01.waiters2').waiters;

AWS.apiLoader.services['ecr'] = {};
AWS.ECR = AWS.Service.defineService('ecr', [ '2015-09-21' ]);
AWS.apiLoader.services['ecr']['2015-09-21'] = require('../apis/ecr-2015-09-21.min');

AWS.apiLoader.services['ecs'] = {};
AWS.ECS = AWS.Service.defineService('ecs', [ '2014-11-13' ]);
AWS.apiLoader.services['ecs']['2014-11-13'] = require('../apis/ecs-2014-11-13.min');
AWS.apiLoader.services['ecs']['2014-11-13'].paginators = require('../apis/ecs-2014-11-13.paginators').pagination;
AWS.apiLoader.services['ecs']['2014-11-13'].waiters = require('../apis/ecs-2014-11-13.waiters2').waiters;

AWS.apiLoader.services['elasticache'] = {};
AWS.ElastiCache = AWS.Service.defineService('elasticache', [ '2015-02-02' ]);
AWS.apiLoader.services['elasticache']['2015-02-02'] = require('../apis/elasticache-2015-02-02.min');
AWS.apiLoader.services['elasticache']['2015-02-02'].paginators = require('../apis/elasticache-2015-02-02.paginators').pagination;
AWS.apiLoader.services['elasticache']['2015-02-02'].waiters = require('../apis/elasticache-2015-02-02.waiters2').waiters;

AWS.apiLoader.services['elasticbeanstalk'] = {};
AWS.ElasticBeanstalk = AWS.Service.defineService('elasticbeanstalk', [ '2010-12-01' ]);
AWS.apiLoader.services['elasticbeanstalk']['2010-12-01'] = require('../apis/elasticbeanstalk-2010-12-01.min');
AWS.apiLoader.services['elasticbeanstalk']['2010-12-01'].paginators = require('../apis/elasticbeanstalk-2010-12-01.paginators').pagination;

AWS.apiLoader.services['elastictranscoder'] = {};
AWS.ElasticTranscoder = AWS.Service.defineService('elastictranscoder', [ '2012-09-25' ]);
AWS.apiLoader.services['elastictranscoder']['2012-09-25'] = require('../apis/elastictranscoder-2012-09-25.min');
AWS.apiLoader.services['elastictranscoder']['2012-09-25'].paginators = require('../apis/elastictranscoder-2012-09-25.paginators').pagination;
AWS.apiLoader.services['elastictranscoder']['2012-09-25'].waiters = require('../apis/elastictranscoder-2012-09-25.waiters2').waiters;

AWS.apiLoader.services['elb'] = {};
AWS.ELB = AWS.Service.defineService('elb', [ '2012-06-01' ]);
AWS.apiLoader.services['elb']['2012-06-01'] = require('../apis/elasticloadbalancing-2012-06-01.min');
AWS.apiLoader.services['elb']['2012-06-01'].paginators = require('../apis/elasticloadbalancing-2012-06-01.paginators').pagination;
AWS.apiLoader.services['elb']['2012-06-01'].waiters = require('../apis/elasticloadbalancing-2012-06-01.waiters2').waiters;

AWS.apiLoader.services['emr'] = {};
AWS.EMR = AWS.Service.defineService('emr', [ '2009-03-31' ]);
AWS.apiLoader.services['emr']['2009-03-31'] = require('../apis/elasticmapreduce-2009-03-31.min');
AWS.apiLoader.services['emr']['2009-03-31'].paginators = require('../apis/elasticmapreduce-2009-03-31.paginators').pagination;
AWS.apiLoader.services['emr']['2009-03-31'].waiters = require('../apis/elasticmapreduce-2009-03-31.waiters2').waiters;

AWS.apiLoader.services['firehose'] = {};
AWS.Firehose = AWS.Service.defineService('firehose', [ '2015-08-04' ]);
AWS.apiLoader.services['firehose']['2015-08-04'] = require('../apis/firehose-2015-08-04.min');

AWS.apiLoader.services['gamelift'] = {};
AWS.GameLift = AWS.Service.defineService('gamelift', [ '2015-10-01' ]);
AWS.apiLoader.services['gamelift']['2015-10-01'] = require('../apis/gamelift-2015-10-01.min');

AWS.apiLoader.services['inspector'] = {};
AWS.Inspector = AWS.Service.defineService('inspector', [ '2016-02-16' ]);
AWS.apiLoader.services['inspector']['2016-02-16'] = require('../apis/inspector-2016-02-16.min');

AWS.apiLoader.services['iotdata'] = {};
AWS.IotData = AWS.Service.defineService('iotdata', [ '2015-05-28' ]);
require('./services/iotdata');
AWS.apiLoader.services['iotdata']['2015-05-28'] = require('../apis/iot-data-2015-05-28.min');

AWS.apiLoader.services['kinesis'] = {};
AWS.Kinesis = AWS.Service.defineService('kinesis', [ '2013-12-02' ]);
AWS.apiLoader.services['kinesis']['2013-12-02'] = require('../apis/kinesis-2013-12-02.min');
AWS.apiLoader.services['kinesis']['2013-12-02'].paginators = require('../apis/kinesis-2013-12-02.paginators').pagination;
AWS.apiLoader.services['kinesis']['2013-12-02'].waiters = require('../apis/kinesis-2013-12-02.waiters2').waiters;

AWS.apiLoader.services['kms'] = {};
AWS.KMS = AWS.Service.defineService('kms', [ '2014-11-01' ]);
AWS.apiLoader.services['kms']['2014-11-01'] = require('../apis/kms-2014-11-01.min');
AWS.apiLoader.services['kms']['2014-11-01'].paginators = require('../apis/kms-2014-11-01.paginators').pagination;

AWS.apiLoader.services['lambda'] = {};
AWS.Lambda = AWS.Service.defineService('lambda', [ '2014-11-11', '2015-03-31' ]);
AWS.apiLoader.services['lambda']['2015-03-31'] = require('../apis/lambda-2015-03-31.min');
AWS.apiLoader.services['lambda']['2015-03-31'].paginators = require('../apis/lambda-2015-03-31.paginators').pagination;

AWS.apiLoader.services['machinelearning'] = {};
AWS.MachineLearning = AWS.Service.defineService('machinelearning', [ '2014-12-12' ]);
require('./services/machinelearning');
AWS.apiLoader.services['machinelearning']['2014-12-12'] = require('../apis/machinelearning-2014-12-12.min');
AWS.apiLoader.services['machinelearning']['2014-12-12'].paginators = require('../apis/machinelearning-2014-12-12.paginators').pagination;
AWS.apiLoader.services['machinelearning']['2014-12-12'].waiters = require('../apis/machinelearning-2014-12-12.waiters2').waiters;

AWS.apiLoader.services['marketplacecommerceanalytics'] = {};
AWS.MarketplaceCommerceAnalytics = AWS.Service.defineService('marketplacecommerceanalytics', [ '2015-07-01' ]);
AWS.apiLoader.services['marketplacecommerceanalytics']['2015-07-01'] = require('../apis/marketplacecommerceanalytics-2015-07-01.min');

AWS.apiLoader.services['mobileanalytics'] = {};
AWS.MobileAnalytics = AWS.Service.defineService('mobileanalytics', [ '2014-06-05' ]);
AWS.apiLoader.services['mobileanalytics']['2014-06-05'] = require('../apis/mobileanalytics-2014-06-05.min');

AWS.apiLoader.services['opsworks'] = {};
AWS.OpsWorks = AWS.Service.defineService('opsworks', [ '2013-02-18' ]);
AWS.apiLoader.services['opsworks']['2013-02-18'] = require('../apis/opsworks-2013-02-18.min');
AWS.apiLoader.services['opsworks']['2013-02-18'].paginators = require('../apis/opsworks-2013-02-18.paginators').pagination;
AWS.apiLoader.services['opsworks']['2013-02-18'].waiters = require('../apis/opsworks-2013-02-18.waiters2').waiters;

AWS.apiLoader.services['rds'] = {};
AWS.RDS = AWS.Service.defineService('rds', [ '2013-01-10', '2013-02-12', '2013-09-09', '2014-10-31' ]);
AWS.apiLoader.services['rds']['2014-10-31'] = require('../apis/rds-2014-10-31.min');
AWS.apiLoader.services['rds']['2014-10-31'].paginators = require('../apis/rds-2014-10-31.paginators').pagination;
AWS.apiLoader.services['rds']['2014-10-31'].waiters = require('../apis/rds-2014-10-31.waiters2').waiters;

AWS.apiLoader.services['redshift'] = {};
AWS.Redshift = AWS.Service.defineService('redshift', [ '2012-12-01' ]);
AWS.apiLoader.services['redshift']['2012-12-01'] = require('../apis/redshift-2012-12-01.min');
AWS.apiLoader.services['redshift']['2012-12-01'].paginators = require('../apis/redshift-2012-12-01.paginators').pagination;
AWS.apiLoader.services['redshift']['2012-12-01'].waiters = require('../apis/redshift-2012-12-01.waiters2').waiters;

AWS.apiLoader.services['route53'] = {};
AWS.Route53 = AWS.Service.defineService('route53', [ '2013-04-01' ]);
require('./services/route53');
AWS.apiLoader.services['route53']['2013-04-01'] = require('../apis/route53-2013-04-01.min');
AWS.apiLoader.services['route53']['2013-04-01'].paginators = require('../apis/route53-2013-04-01.paginators').pagination;
AWS.apiLoader.services['route53']['2013-04-01'].waiters = require('../apis/route53-2013-04-01.waiters2').waiters;

AWS.apiLoader.services['route53domains'] = {};
AWS.Route53Domains = AWS.Service.defineService('route53domains', [ '2014-05-15' ]);
AWS.apiLoader.services['route53domains']['2014-05-15'] = require('../apis/route53domains-2014-05-15.min');
AWS.apiLoader.services['route53domains']['2014-05-15'].paginators = require('../apis/route53domains-2014-05-15.paginators').pagination;

AWS.apiLoader.services['s3'] = {};
AWS.S3 = AWS.Service.defineService('s3', [ '2006-03-01' ]);
require('./services/s3');
AWS.apiLoader.services['s3']['2006-03-01'] = require('../apis/s3-2006-03-01.min');
AWS.apiLoader.services['s3']['2006-03-01'].paginators = require('../apis/s3-2006-03-01.paginators').pagination;
AWS.apiLoader.services['s3']['2006-03-01'].waiters = require('../apis/s3-2006-03-01.waiters2').waiters;

AWS.apiLoader.services['ses'] = {};
AWS.SES = AWS.Service.defineService('ses', [ '2010-12-01' ]);
AWS.apiLoader.services['ses']['2010-12-01'] = require('../apis/email-2010-12-01.min');
AWS.apiLoader.services['ses']['2010-12-01'].paginators = require('../apis/email-2010-12-01.paginators').pagination;
AWS.apiLoader.services['ses']['2010-12-01'].waiters = require('../apis/email-2010-12-01.waiters2').waiters;

AWS.apiLoader.services['sns'] = {};
AWS.SNS = AWS.Service.defineService('sns', [ '2010-03-31' ]);
AWS.apiLoader.services['sns']['2010-03-31'] = require('../apis/sns-2010-03-31.min');
AWS.apiLoader.services['sns']['2010-03-31'].paginators = require('../apis/sns-2010-03-31.paginators').pagination;

AWS.apiLoader.services['sqs'] = {};
AWS.SQS = AWS.Service.defineService('sqs', [ '2012-11-05' ]);
require('./services/sqs');
AWS.apiLoader.services['sqs']['2012-11-05'] = require('../apis/sqs-2012-11-05.min');
AWS.apiLoader.services['sqs']['2012-11-05'].paginators = require('../apis/sqs-2012-11-05.paginators').pagination;

AWS.apiLoader.services['ssm'] = {};
AWS.SSM = AWS.Service.defineService('ssm', [ '2014-11-06' ]);
AWS.apiLoader.services['ssm']['2014-11-06'] = require('../apis/ssm-2014-11-06.min');
AWS.apiLoader.services['ssm']['2014-11-06'].paginators = require('../apis/ssm-2014-11-06.paginators').pagination;

AWS.apiLoader.services['storagegateway'] = {};
AWS.StorageGateway = AWS.Service.defineService('storagegateway', [ '2013-06-30' ]);
AWS.apiLoader.services['storagegateway']['2013-06-30'] = require('../apis/storagegateway-2013-06-30.min');
AWS.apiLoader.services['storagegateway']['2013-06-30'].paginators = require('../apis/storagegateway-2013-06-30.paginators').pagination;

AWS.apiLoader.services['sts'] = {};
AWS.STS = AWS.Service.defineService('sts', [ '2011-06-15' ]);
require('./services/sts');
AWS.apiLoader.services['sts']['2011-06-15'] = require('../apis/sts-2011-06-15.min');

AWS.apiLoader.services['waf'] = {};
AWS.WAF = AWS.Service.defineService('waf', [ '2015-08-24' ]);
AWS.apiLoader.services['waf']['2015-08-24'] = require('../apis/waf-2015-08-24.min');

