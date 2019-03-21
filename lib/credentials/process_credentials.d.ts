import {Credentials} from '../credentials';
import {HTTPOptions} from '../config';
export class ProcessCredentials extends Credentials {
    /**
     * Creates a new ProcessCredentials object.
     */
    constructor(options?: ProcessCredentialsOptions);
}

interface ProcessCredentialsOptions {
    profile?: string
    filename?: string
    disableAssumeRole?: boolean
    tokenCodeFn?: (mfaSerial: string, callback: (err?: Error, token?: string) => void) => void
    httpOptions?: HTTPOptions
}
