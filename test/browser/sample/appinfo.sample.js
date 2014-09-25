// Fill these in with your application details
// Note that your accountId is usually the number portion of the roleArn
// value, ex.: arn:aws:iam::<accountId>:<roleName>
appInfo = {
  accountId: 'ACCOUNTID',
  roleArn: 'COGNITO-ROLE',
  identityPoolId: 'COGNITO-IDENTITY-POOL-ID',
  facebook: { appId: '...' },
  amazon:   { appId: '...' },
  google:   { appId: '...' }
};

// Set any global configuration settings
AWS.config.update({
  region: 'us-east-1'
});
