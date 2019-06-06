var AWS = require('../core'),
  ENV_TOKEN_FILE = 'AWS_WEB_IDENTITY_TOKEN_FILE',
  ENV_ROLE_ARN = 'AWS_IAM_ROLE_ARN',
  ENV_ROLE_SESSION_NAME = 'AWS_IAM_ROLE_SESSION_NAME';

AWS.EKSCredentials = AWS.util.inherit(AWS.Credentials);
