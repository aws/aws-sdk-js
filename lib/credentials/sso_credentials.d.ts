import {Credentials} from '../credentials';
import SSO = require('../../clients/sso');
export class SsoCredentials extends Credentials {
    /**
     * Creates a new SsoCredentials object.
     */
    constructor(options?: SsoCredentialsOptions);
}

interface SsoCredentialsOptions {
    profile?: string;
    filename?: string;
    ssoClient?: SSO;
}
