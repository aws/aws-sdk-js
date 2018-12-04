import {CognitoIdentityCredentials} from '../lib/credentials/cognito_identity_credentials';

const creds1 = new CognitoIdentityCredentials();
const creds2 = new CognitoIdentityCredentials({
    IdentityPoolId: 'fake'
});
const creds3: CognitoIdentityCredentials = new CognitoIdentityCredentials({
    IdentityId: 'id'
});

const creds4: CognitoIdentityCredentials = new CognitoIdentityCredentials({
    IdentityId: 'id',
    RoleArn: 'arn'
});

const credOptions: CognitoIdentityCredentials.CognitoIdentityOptions = {
    IdentityId: 'id',
    Logins: {
        'graph.facebook.com': 'FBTOKEN',
        'www.amazon.com': 'AMAZONTOKEN',
        'accounts.google.com': 'GOOGLETOKEN',
        'api.twitter.com': 'TWITTERTOKEN',
        'www.digits.com': 'DIGITSTOKEN'
    },
    LoginId: 'example@gmail.com'
};

const creds5: CognitoIdentityCredentials = new CognitoIdentityCredentials(credOptions);

// test client config
const creds6: CognitoIdentityCredentials = new CognitoIdentityCredentials(credOptions, {
    httpOptions: {
        timeout: 50
    },
    region: 'us-west-2'
});

const config: CognitoIdentityCredentials.ClientConfiguration = {
    httpOptions: {
        timeout: 50
    },
    region: 'us-west-2'
};

const creds7: CognitoIdentityCredentials = new CognitoIdentityCredentials(credOptions, config);