import {WebIdentityCredentials} from '../lib/credentials/web_identity_credentials';

const creds1 = new WebIdentityCredentials();
const creds2 = new WebIdentityCredentials({
    WebIdentityToken: 'token',
    RoleArn: 'arn',
    RoleSessionName: 'web-identity'
});
const creds3: WebIdentityCredentials = new WebIdentityCredentials({
    WebIdentityToken: 'token',
    RoleArn: 'arn',
    DurationSeconds: 100,
    RoleSessionName: 'test'
});

const config: WebIdentityCredentials.ClientConfiguration = {
    maxRetries: 5,
    httpOptions: {
        timeout: 50
    }
};

const options: WebIdentityCredentials.WebIdentityCredentialsOptions = {
    DurationSeconds: 10,
    WebIdentityToken: 'token',
    RoleArn: 'arn',
    RoleSessionName: 'web-identity'
};

const creds4: WebIdentityCredentials = new WebIdentityCredentials(options);
const creds5: WebIdentityCredentials = new WebIdentityCredentials(options, config);