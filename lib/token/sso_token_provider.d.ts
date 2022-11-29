import {Token} from '../token';

export class SSOTokenProvider extends Token {
    /**
     * Creates a new SSOTokenProvider object.
     */
    constructor(options?: SSOTokenProviderOptions);
}

// Needed to expose interfaces on the class
declare namespace SSOTokenProviderOptions {
  export type profile = string;
}
