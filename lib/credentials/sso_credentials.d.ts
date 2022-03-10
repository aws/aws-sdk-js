import {Credentials} from '../credentials';
import SSO = require('../../clients/sso');
export class SingleSignOnCredentials extends Credentials {
    /**
     * Creates a new SingleSignOnCredentials object.
     */
    constructor(options?: SingleSignOnCredentialsOptions);
}

interface SingleSignOnCredentialsOptions {
    profile?: string;
    filename?: string;
    ssoClient?: SSO;
}
