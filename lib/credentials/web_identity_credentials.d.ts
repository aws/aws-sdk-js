import {Credentials} from '../credentials';
import {AWSError} from '../error';
import STS = require('../../clients/sts');
export class WebIdentityCredentials extends Credentials {
    /**
     * Creates a new credentials object.
     * @param {string} filename - a map of options that are passed to the AWS.STS.assumeRole() or AWS.STS.getSessionToken() operations. If a RoleArn parameter is passed in, credentials will be based on the IAM role.
     */
    constructor(options?: STS.Types.AssumeRoleWithWebIdentityRequest);
    /**
     * Refreshes credentials using AWS.STS.assumeRoleWithWebIdentity().
     */
    refresh(callback: (err: AWSError) => void): void;

    data: STS.Types.AssumeRoleWithWebIdentityResponse;
    params: STS.Types.AssumeRoleWithWebIdentityRequest
}
