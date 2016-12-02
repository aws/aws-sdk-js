export class Signer {
    /**
     * A signer object can be used to generate signed URLs and cookies for granting access to content on restricted CloudFront distributions.
     * 
     * @param {string} keyPairId - The ID of the CloudFront key pair being used.
     * @param {string} privateKey - A private key in RSA format.
     */
    constructor(keyPairId: string, privateKey: string);

    /**
     * Create a signed Amazon CloudFront Cookie.
     */
    getSignedCookie(options: Signer.SignerOptions): Signer.CustomPolicy|Signer.CannedPolicy;
    getSignedCookie(options: Signer.SignerOptions, callback: (err: Error, cookie: Signer.CustomPolicy|Signer.CannedPolicy) => void): void;
    /**
     * Create a signed Amazon CloudFront URL.
     * Keep in mind that URLs meant for use in media/flash players may have different requirements for URL formats (e.g. some require that the extension be removed, some require the file name to be prefixed - mp4:, some require you to add "/cfx/st" into your URL).
     */
    getSignedUrl(options: Signer.SignerOptions): string;
    getSignedUrl(options: Signer.SignerOptions, callback: (err: Error, url: string) => void): void;
}

declare namespace Signer {
    export interface SignerOptions {
        /**
         * The URL to which the signature will grant access. Required unless you pass in a full policy.
         */
        url?: string;
        /**
         * A Unix UTC timestamp indicating when the signature should expire. Required unless you pass in a full policy.
         */
        expires?: number;
        /**
         * A CloudFront JSON policy. Required unless you pass in a url and an expiry time. 
         */
        policy?: string;
    }

    export interface CustomPolicy {
        "CloudFront-Policy": string;
        "CloudFront-Key-Pair-Id": string;
        "CloudFront-Signature": string;
    }

    export interface CannedPolicy {
        "CloudFront-Expires": number;
        "CloudFront-Key-Pair-Id": string;
        "CloudFront-Signature": string;
    }
}