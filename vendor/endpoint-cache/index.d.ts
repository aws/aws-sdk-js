import { DiscoveredEndpoints } from '@aws/types';
export interface EndpointIdentifier {
    [key: string]: string | undefined;
    serviceId?: string;
    region?: string;
    accessKeyId?: string;
    operation?: string;
}
/**
 * Inspired node-lru-cache[https://github.com/isaacs/node-lru-cache]
 */
export declare class EndpointCache {
    readonly maxSize: number;
    private cache;
    constructor(maxSize?: number);
    readonly size: number;
    put(key: EndpointIdentifier, value: DiscoveredEndpoints): void;
    get(key: EndpointIdentifier): Array<{
        Address: string;
    }> | undefined;
    private populateKey;
    private populateValue;
    empty(): void;
    remove(key: EndpointIdentifier): void;
}
