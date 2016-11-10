import {AWSError} from '../error';
import S3 = require('../../clients/s3');
export class ManagedUpload {
    /**
     * Creates a managed upload object with a set of configuration options.
     */
    constructor(options: ManagedUploadOptions);
    /**
     * Aborts a managed upload, including all concurrent upload requests.
     */
    abort(): void;
    /**
     * Initiates the managed upload for the payload.
     */
    send(callback?: (err: AWSError, data: SendData) => void): void;
    /**
     * Default value: 10000
     */
    static maxTotalParts: number
    /**
     * Returns the minimum number of bytes for an individual part upload.
     * Note: Minimum allowed size is 5 MB.
     * 1024 * 5
     */
    static minPartSize: number
}
export interface SendData {
    /**
     * URL of the uploaded object.
     */
    Location: string
    /**
     * ETag of the uploaded object.
     */
    ETag: string
    /**
     * Bucket to which the object was uploaded.
     */
    Bucket: string
    /**
     * Key to which the object was uploaded.
     */
    Key: string
}
export interface ManagedUploadOptions {
    /**
     * A map of parameters to pass to the upload requests.
     * The "Body" parameter is required to be specified either on the service or in the params option.
     */
    params?: S3.Types.PutObjectRequest
    /**
     * The size of the concurrent queue manager to upload parts in parallel. Set to 1 for synchronous uploading of parts. Note that the uploader will buffer at most queueSize * partSize bytes into memory at any given time.
     * default: 4
     */
    queueSize?: number
    /**
     * Default: 5 mb
     * The size in bytes for each individual part to be uploaded. Adjust the part size to ensure the number of parts does not exceed maxTotalParts. See minPartSize for the minimum allowed part size.
     */
    partSize?: number
    /**
     * Default: false
     * Whether to abort the multipart upload if an error occurs. Set to true if you want to handle failures manually.
     */
    leavePartsOnError?: boolean
    /**
     * An optional S3 service object to use for requests.
     * This object might have bound parameters used by the uploader.
     */
    service?: S3
}