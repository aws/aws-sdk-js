import {Credentials} from '../credentials';
import {Logger} from '../config-base';

export class EC2MetadataCredentials extends Credentials {
    /**
     * Creates credentials from the metadata service on an EC2 instance.
     * @param {object} options - Override the default (1s) timeout period.
     */
    constructor(options?: EC2MetadataCredentialsOptions);

    /**
     * The original expiration of the current credential. In case of AWS
     * outage, the EC2 metadata will extend expiration of the existing
     * credential.
     */
    originalExpiration?: Date;
}
interface EC2MetadataCredentialsOptions {
    httpOptions?: {
        /**
         * Timeout in milliseconds.
         */
        timeout?: number
        /**
        * Connection timeout in milliseconds.
        */
        connectTimeout?: number
    }
    maxRetries?: number
    logger?: Logger
    /**
     * Prevent IMDSv1 fallback.
     */
    ec2MetadataV1Disabled?: boolean

    /**
     * profile name to check for IMDSv1 settings.
     */
    profile?: string

    /**
     * optional file from which to to get config.
     */
    filename?: string
}
